<template>
  <div class="stats-grid">
    <div v-for="card in cardsToShow" :key="card.title" class="stats-card">
      <div class="stats-icon-wrapper">
        <!-- render the imported Lucide component -->
        <component :is="card.icon" class="stats-icon" />
      </div>

      <div class="stats-content">
        <div class="stats-title">{{ card.title }}</div>
        <div class="stats-value">{{ card.value }}</div>
        <div
          v-if="card.trend"
          class="stats-trend"
          :class="{
            positive: card.trend.startsWith('+'),
            negative: card.trend.startsWith('-')
          }"
        >
          {{ card.trend }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

// 1) Import the icons you want to use (Lucide icons):
import {
  BookOpen,
  BarChart2,
  Star,
  Clock,
  Tag,
  CaseSensitive,
  Link
} from "lucide-vue-next";

// 2) Import the JSON that was generated at build time.
//    Adjust the path so it points to where metrics.json actually lives.
//    If this component is in docs/.vitepress/theme/Layout.vue,
//    then the JSON will be in the same folder, so:
import metrics from "../../../public/metrics.json";

// 3) Create a computed "cardsToShow" array that pulls values from `metrics`:
const cardsToShow = computed(() => {
  return [
    {
      icon: BookOpen,
      title: "All Notes",
      // use the number directly
      value: metrics.totalNotes,
      // (optionally) you can compute a trend string here.
      // For example, if you stored last week's count in metrics, you could do:
      // trend: metrics.allNotesTrend  (for now we’ll hard-code `null` or omit)
      trend: null
    },
    //{
    // icon: BarChart2,
    // title: "New This Week",
    //value: metrics.notesThisWeek,
    // trend: null // or metrics.notesThisWeekTrend
    //},
    //{
    //icon: Star,
    //title: "Favorites",
    //value: metrics.favorites,
    //trend: null // or metrics.favoritesTrend
    //},
    {
      icon: Clock,
      title: "Reading Time",
      // metrics.readingTimeHrs is already a decimal like 2.3
      value: `${metrics.readingTimeHrs}h`,
      trend: null
    },
    {
      icon: Tag,
      title: "Total Tags",
      value: metrics.totalTags,
      trend: null
    },
    //{
    // icon: CaseSensitive,
    //title: "Total Words",
    //value: metrics.totalWords,
    //trend: null
    //},
    {
      icon: BarChart2,
      title: "Avg Note Length",
      value: `${metrics.avgNoteLengthWords} words`,
      trend: null
    },
    {
      icon: Link,
      title: "Backlinks",
      value: metrics.totalBacklinks,
      trend: null
    },
    {
      icon: Clock,
      title: "Last Updated",
      value: getTimeSince(metrics.lastUpdated),
      trend: null
    }
    // {
    //icon: BarChart2,
    //title: "Longest Note",
    // Show the slug plus word count
    //value: `${metrics.longestNote.slug} (${metrics.longestNote.wordCount} words)`,
    // trend: null
    //}
  ];
});

function getTimeSince(timestamp) {
  const past = new Date(timestamp);
  const now = new Date();
  const diffMs = now - past;

  const minutesAgo = Math.floor(diffMs / (1000 * 60));
  const daysAgo = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  return daysAgo > 0 ? `${daysAgo} day(s) ago` : `${minutesAgo} min(s) ago`;
}
</script>

<style scoped>
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.stats-card {
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.stats-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
}

.stats-icon-wrapper {
  background-color: var(--vp-c-divider);
  border-radius: 50%;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
}
/* Lucide svg will inherit this font-size as its width/height */
.stats-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.stats-title {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  margin-bottom: 0.25rem;
}

.stats-value {
  font-size: 1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.stats-trend {
  font-size: 0.75rem;
  margin-top: 0.25rem;
}
.stats-trend.positive {
  color: #16a34a;
}
.stats-trend.negative {
  color: #dc2626;
}
</style>
