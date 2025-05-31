<template>
  <div class="stats-grid">
    <div v-for="card in cards" :key="card.title" class="stats-card">
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
import { ref } from "vue";
// pick whichever icons you like from Lucide
import { BookOpen, BarChart2, Star, Clock } from "lucide-vue-next";

const cards = ref([
  { icon: BookOpen, title: "All Notes", value: "247", trend: "+8%" },
  { icon: BarChart2, title: "New This Week", value: "12", trend: "-5%" },
  { icon: Star, title: "Favorites", value: "34", trend: "+12%" },
  { icon: Clock, title: "Reading Time", value: "2.3h", trend: null }
]);
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
  font-size: 1.75rem;
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
