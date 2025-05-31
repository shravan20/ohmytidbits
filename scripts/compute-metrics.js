// File: scripts/computeMetrics.js
// ---------------------------------
// Reads every .md under the specified folders (blogs/, notes/, programming/, resources/,
// plus any top‐level .md). Computes total word counts, reading time, favorites, tags, backlinks, etc.
// Writes a single JSON to docs/.vitepress/metrics.json for your VitePress theme to import.

import { readFileSync, statSync, existsSync, mkdirSync, writeFileSync } from "fs";
import { relative as _relative, basename, resolve, join } from "path";
import glob from "fast-glob";
import matter from "gray-matter";
import readingTime from "reading-time";
import dayjs from "dayjs";

(async function computeMetrics() {
    try {
        // Define the glob patterns for all markdown files you care about:
        //
        //    - Top‐level .md files in the root (e.g. index.md, categories.md, how-to-use.md, knowledge.md, algolia-setup.md)
        //    - *.md under blogs/, notes/, programming/, resources/
        //    - Exclude any other folder you don’t want, e.g. public/ and coverage/
        //
        // Adjust these patterns if you have more nested folders with Markdown.
        const patterns = [
            // Any .md in the project root (but not inside node_modules, coverage, public, scripts, etc.)
            "/*.md",
            // All markdown under these folders (one level of nesting—if you have deeper subfolders, you can do "**/*.md")
            "/blogs/*.md",
            "/notes/*.md",
            "/programming/*.md",
            "/resources/*.md"
        ];

        // fast-glob expects POSIX‐style paths. To search from project root, prepend process.cwd() & filter out anything inside coverage/ or public/, just in case.
        const cwd = process.cwd(); // current root directory
        const globPatterns = patterns.map((p) => cwd + p);
        const ignorePatterns = ["**/node_modules/**", "**/coverage/**", "**/public/**"];

        const files = await glob(globPatterns, {
            ignore: ignorePatterns,
            onlyFiles: true,
            unique: true,
        });

        let totalNotes = 0;
        let totalWords = 0;
        let totalReadingTimeSecs = 0;
        let favorites = 0;
        let totalTagsSet = new Set();
        let lastUpdatedTs = 0;
        let totalBacklinks = 0;
        let wordsPerNote = [];
        let notesThisWeek = 0;
        let notesThisMonth = 0;

        const now = dayjs();

        for (const absPath of files) {
            // c ount this file as one “note”
            totalNotes++;

            // Read file contents
            const raw = readFileSync(absPath, "utf8");

            // Parse frontmatter + content
            const { data: frontmatter, content } = matter(raw);

            // WORD COUNT
            const wordCount = content.trim().split(/\s+/).length;
            totalWords += wordCount;
            wordsPerNote.push({ file: absPath, wordCount });

            // READING TIME (reading-time returns .time in ms)
            const rt = readingTime(content);
            totalReadingTimeSecs += rt.time / 1000;

            // “Favorites” flag: assume you have `favorite: true` in frontmatter if you want to mark it.
            if (frontmatter && frontmatter.favorite === true) {
                favorites++;
            }

            // TAGS: assume frontmatter.tags is an array of strings
            if (frontmatter && Array.isArray(frontmatter.tags)) {
                frontmatter.tags.forEach((t) => totalTagsSet.add(t));
            }

            // LAST UPDATED: use the file’s mtime (filesystem last‐modified time). Keep the maximum.
            const { mtimeMs } = statSync(absPath);
            if (mtimeMs > lastUpdatedTs) {
                lastUpdatedTs = mtimeMs;
            }

            // BACKLINK COUNT: simple regex scan for:
            // - wikilink style: [[Some Note]]
            // - Markdown internal links like [text](./other-file.md) or [text](../notes/foo.md)
            // (but skip purely “http://” or “https://” links)
            const wikiLinkMatches = (content.match(/\[\[(.*?)\]\]/g) || []).length;
            const mdLinkMatches = (content.match(/\[.*?\]\((?!https?:\/\/).*?\.md\)/g) || []).length;
            totalBacklinks += wikiLinkMatches + mdLinkMatches;

            // “This Week” / “This Month” counters (based on the file’s mtime)
            const fileDate = dayjs(mtimeMs);
            if (now.diff(fileDate, "week") < 1) {
                notesThisWeek++;
            }
            if (now.diff(fileDate, "month") < 1) {
                notesThisMonth++;
            }
        }

        // Compute derived fields
        const avgNoteLengthWords = totalNotes > 0 ? Math.round(totalWords / totalNotes) : 0;
        const readingTimeHrs = Math.round((totalReadingTimeSecs / 3600) * 10) / 10; // e.g. “2.3”

        // Find the single longest note by word count
        let longestWordCount = 0;
        let longestSlug = "";
        for (const entry of wordsPerNote) {
            if (entry.wordCount > longestWordCount) {
                longestWordCount = entry.wordCount;
                // To compute slug: take the filename without extension, relative to project root
                const relative = _relative(cwd, entry.file);
                longestSlug = basename(relative, ".md");
            }
        }

        const metrics = {
            totalNotes,
            notesThisWeek,
            notesThisMonth,
            favorites,
            readingTimeHrs,
            totalTags: totalTagsSet.size,
            totalWords,
            avgNoteLengthWords,
            lastUpdated: new Date(lastUpdatedTs).toISOString(),
            totalBacklinks,
            longestNote: {
                slug: longestSlug,
                wordCount: longestWordCount,
            },
        };

        const outDir = resolve(cwd, "public/");
        const outPath = join(outDir, "metrics.json");

        if (!existsSync(outDir)) {
            mkdirSync(outDir, { recursive: true });
        }

        writeFileSync(outPath, JSON.stringify(metrics, null, 2), "utf8");
        console.log(`metrics.json successfully written to: ${outPath}`);
    } catch (err) {
        console.error("Error while computing metrics:", err);
        process.exit(1);
    }
})();
