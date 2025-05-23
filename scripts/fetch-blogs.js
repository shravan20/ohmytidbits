import fs from 'fs/promises'
import path from 'path'
import fetch from 'node-fetch'

// Configuration flags
const CONFIG = {
    // Set to true to add blog posts to VitePress sidebar navigation
    ADD_TO_SIDEBAR: false,

    // Set to true to add blog posts to top navigation dropdown
    ADD_TO_NAV: false
}

// Enhanced HTML to Markdown converter with better code block support
function htmlToMarkdown(html) {
    if (!html) return ''

    return html
        // Handle images first - convert to markdown format
        .replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*>/gi, '![$2]($1)')
        .replace(/<img[^>]*src="([^"]*)"[^>]*>/gi, '![]($1)')

        // Remove script and style tags completely
        .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
        .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')

        // Convert headings
        .replace(/<h1[^>]*>(.*?)<\/h1>/gi, '# $1')
        .replace(/<h2[^>]*>(.*?)<\/h2>/gi, '## $1')
        .replace(/<h3[^>]*>(.*?)<\/h3>/gi, '### $1')
        .replace(/<h4[^>]*>(.*?)<\/h4>/gi, '#### $1')
        .replace(/<h5[^>]*>(.*?)<\/h5>/gi, '##### $1')
        .replace(/<h6[^>]*>(.*?)<\/h6>/gi, '###### $1')

        // Convert paragraphs
        .replace(/<p[^>]*>(.*?)<\/p>/gi, '$1\n\n')

        // Convert line breaks
        .replace(/<br\s*\/?>/gi, '\n')

        // Convert links
        .replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)')

        // Convert bold and italic
        .replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**')
        .replace(/<b[^>]*>(.*?)<\/b>/gi, '**$1**')
        .replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*')
        .replace(/<i[^>]*>(.*?)<\/i>/gi, '*$1*')

        // Enhanced code block conversion - handle multi-line code blocks first
        .replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, (match, code) => {
            // Clean up the code content, preserve line breaks and indentation
            const cleanCode = code
                .replace(/</g, '<')
                .replace(/>/g, '>')
                .replace(/&/g, '&')
                .replace(/"/g, '"')
                .replace(/'/g, "'")
                .replace(/&nbsp;/g, ' ')
                .trim();

            // Try to detect language from common patterns
            let language = '';
            if (cleanCode.includes('class ') && cleanCode.includes('{')) {
                if (cleanCode.includes('public ') || cleanCode.includes('private ')) {
                    language = 'typescript'; // or java, but typescript is more common in web dev
                } else {
                    language = 'javascript';
                }
            } else if (cleanCode.includes('function ') || cleanCode.includes('=>')) {
                language = 'javascript';
            } else if (cleanCode.includes('interface ') || cleanCode.includes(': ')) {
                language = 'typescript';
            }

            return `\`\`\`${language}\n${cleanCode}\n\`\`\`\n\n`;
        })

        // Handle standalone pre tags
        .replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi, (match, code) => {
            const cleanCode = code
                .replace(/</g, '<')
                .replace(/>/g, '>')
                .replace(/&/g, '&')
                .replace(/"/g, '"')
                .replace(/'/g, "'")
                .replace(/&nbsp;/g, ' ')
                .trim();

            return `\`\`\`\n${cleanCode}\n\`\`\`\n\n`;
        })

        // Handle inline code
        .replace(/<code[^>]*>(.*?)<\/code>/gi, (match, code) => {
            const cleanCode = code
                .replace(/</g, '<')
                .replace(/>/g, '>')
                .replace(/&/g, '&')
                .replace(/"/g, '"')
                .replace(/'/g, "'")
                .replace(/&nbsp;/g, ' ');
            return `\`${cleanCode}\``;
        })

        // Convert lists
        .replace(/<ul[^>]*>(.*?)<\/ul>/gi, '$1')
        .replace(/<ol[^>]*>(.*?)<\/ol>/gi, '$1')
        .replace(/<li[^>]*>(.*?)<\/li>/gi, '- $1\n')

        // Convert blockquotes
        .replace(/<blockquote[^>]*>(.*?)<\/blockquote>/gi, '> $1')

        // Remove remaining HTML tags
        .replace(/<[^>]*>/g, '')

        // Decode remaining HTML entities
        .replace(/&/g, '&')
        .replace(/</g, '<')
        .replace(/>/g, '>')
        .replace(/"/g, '"')
        .replace(/’/g, "'")
        .replace(/“/g, '"')
        .replace(/”/g, '"')
        .replace(/–/g, '–')
        .replace(/—/g, '—')
        .replace(/…/g, '…')
        .replace(/'/g, "'")
        .replace(/&nbsp;/g, ' ')

        // Clean up extra whitespace
        .replace(/\n\s*\n\s*\n/g, '\n\n')
        .replace(/^\s+|\s+$/g, '')
        .trim()
}

function createSlug(title) {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim()
}

async function updateVitePressConfig(posts) {
    const configPath = path.resolve('.vitepress/config.mts')
    let configContent = await fs.readFile(configPath, 'utf8')

    // Create blog sidebar items
    const blogItems = posts.map(post => ({
        text: post.title,
        link: `/blogs/${post.slug}`
    }))

    const blogSidebarSection = `        {
          text: 'Blog Posts',
          items: [
${blogItems.map(item => `            { text: '${item.text.replace(/'/g, "\\'")}', link: '${item.link}' }`).join(',\n')}
          ]
        }`

    // Check if Blog Posts section already exists in sidebar
    const sidebarBlogRegex = /{\s*text:\s*['"]Blog Posts['"],\s*items:\s*\[[^\]]*\]\s*}/s
    if (sidebarBlogRegex.test(configContent)) {
        // Update existing Blog Posts section in sidebar
        configContent = configContent.replace(sidebarBlogRegex, blogSidebarSection)
        console.log('📝 Updated existing Blog Posts section in sidebar')
    } else {
        // Add new Blog Posts section before Resources section in sidebar
        configContent = configContent.replace(
            /(\s+){\s*text:\s*'Resources',/,
            `$1${blogSidebarSection},\n$1{
          text: 'Resources',`
        )
        console.log('➕ Added new Blog Posts section to sidebar')
    }

    // Handle navigation dropdown if ADD_TO_NAV is enabled
    if (CONFIG.ADD_TO_NAV) {
        const navBlogSection = `      {
        text: 'Blog Posts',
        items: [
${blogItems.map(item => `          { text: '${item.text.replace(/'/g, "\\'")}', link: '${item.link}' }`).join(',\n')}
        ]
      }`

        // Check if Blog Posts dropdown already exists in nav
        const navBlogRegex = /{\s*text:\s*['"]Blog Posts['"],\s*items:\s*\[[^\]]*\]\s*}/s
        if (navBlogRegex.test(configContent)) {
            // Update existing Blog Posts dropdown in nav
            configContent = configContent.replace(navBlogRegex, navBlogSection)
            console.log('📝 Updated existing Blog Posts dropdown in navigation')
        } else {
            // Add new Blog Posts dropdown before Resources in nav
            configContent = configContent.replace(
                /(\s+){\s*text:\s*'Resources',\s*link:\s*'\/resources\/'\s*}/,
                `$1${navBlogSection},\n$1{
        text: 'Resources', link: '/resources/'
      }`
            )
            console.log('➕ Added new Blog Posts dropdown to navigation')
        }
    } else {
        // Remove any existing Blog Posts dropdowns from nav if ADD_TO_NAV is disabled
        const navBlogRegex = /,?\s*{\s*text:\s*['"]Blog Posts['"],\s*items:\s*\[[^\]]*\]\s*}/gs
        if (navBlogRegex.test(configContent)) {
            configContent = configContent.replace(navBlogRegex, '')
            console.log('🗑️  Removed Blog Posts dropdown from navigation (ADD_TO_NAV disabled)')
        }
    }

    await fs.writeFile(configPath, configContent, 'utf8')
}

async function main() {
    try {
        console.log('🚀 Fetching blog posts from ohmyscript.com...')
        console.log(`🔧 Configuration: ADD_TO_SIDEBAR=${CONFIG.ADD_TO_SIDEBAR}, ADD_TO_NAV=${CONFIG.ADD_TO_NAV}`)

        // 1. Fetch all posts
        const res = await fetch(
            'https://public-api.wordpress.com/rest/v1.1/sites/ohmyscript.com/posts/?number=50'
        )

        if (!res.ok) {
            throw new Error(`Failed to fetch posts: ${res.status} ${res.statusText}`)
        }

        const data = await res.json()
        const posts = data.posts || []

        if (posts.length === 0) {
            console.log('⚠️  No posts found')
            return
        }

        // 2. Ensure output directory exists
        const outDir = path.resolve('blogs')
        await fs.mkdir(outDir, { recursive: true })

        console.log(`📝 Processing ${posts.length} posts...`)

        // 3. Process each post
        const processedPosts = []

        for (let post of posts) {
            try {
                const slug = post.slug || createSlug(post.title)
                const cleanTitle = post.title.replace(/"/g, '\\"')
                const publishDate = new Date(post.date).toISOString().split('T')[0]

                // Convert HTML content to Markdown with better formatting
                const markdownContent = htmlToMarkdown(post.content)

                // Extract categories and tags
                const categories = Object.values(post.categories || {}).map(cat => cat.slug)
                const tags = Object.values(post.tags || {}).map(tag => tag.slug)

                // Create frontmatter
                const frontmatter = [
                    '---',
                    `title: "${cleanTitle}"`,
                    `date: ${publishDate}`,
                    `slug: "${slug}"`,
                    `excerpt: "${post.excerpt ? post.excerpt.replace(/"/g, '\\"').substring(0, 200) : ''}"`,
                    categories.length ? `categories: [${categories.map(c => `"${c}"`).join(', ')}]` : '',
                    tags.length ? `tags: [${tags.map(t => `"${t}"`).join(', ')}]` : '',
                    `author: "${post.author ? post.author.name : 'Admin'}"`,
                    `url: "${post.URL}"`,
                    '---'
                ].filter(Boolean).join('\n')

                // Create the complete markdown file
                const fileContent = `${frontmatter}\n\n# ${cleanTitle}\n\n${markdownContent}`

                // Write the file
                const filePath = path.join(outDir, `${slug}.md`)
                await fs.writeFile(filePath, fileContent, 'utf8')

                processedPosts.push({
                    title: cleanTitle,
                    slug: slug,
                    date: publishDate,
                    categories,
                    tags
                })

                console.log(`✅ Generated: ${slug}.md`)

            } catch (error) {
                console.error(`❌ Error processing post "${post.title}":`, error.message)
            }
        }

        // 4. Update VitePress configuration to include blog posts in sidebar (if enabled)
        if (processedPosts.length > 0 && CONFIG.ADD_TO_SIDEBAR) {
            console.log('📚 Updating VitePress configuration...')
            await updateVitePressConfig(processedPosts)
        } else if (processedPosts.length > 0 && !CONFIG.ADD_TO_SIDEBAR) {
            console.log('⚠️  Skipping VitePress sidebar update (ADD_TO_SIDEBAR is disabled)')
        }

        // 5. Create a blog index page
        const blogIndexContent = `# Blog Posts

Welcome to my blog! Here you'll find articles about programming, technology, and my learning journey.

## Recent Posts

${processedPosts.slice(0, 10).map(post =>
            `- [${post.title}](/blogs/${post.slug}) - ${post.date}`
        ).join('\n')}

## All Posts

${processedPosts.map(post =>
            `- [${post.title}](/blogs/${post.slug}) - ${post.date}${post.categories.length ? ` (${post.categories.join(', ')})` : ''}`
        ).join('\n')}
`

        await fs.writeFile(path.join(outDir, 'index.md'), blogIndexContent, 'utf8')

        console.log(`🎉 Successfully generated ${processedPosts.length} blog posts!`)
        console.log(`📁 Files created in: ${outDir}`)
        console.log(`🔗 Blog index: /blogs/`)
        if (CONFIG.ADD_TO_SIDEBAR) {
            console.log(`⚙️  VitePress config updated with blog navigation`)
        } else {
            console.log(`⚙️  VitePress config NOT updated (sidebar integration disabled)`)
        }
        console.log(`🖼️  Images now properly converted to Markdown format`)

    } catch (error) {
        console.error('❌ Error fetching blog posts:', error)
        process.exit(1)
    }
}

main()
