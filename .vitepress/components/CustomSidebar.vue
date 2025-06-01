<template>
  <div class="custom-sidebar">
    <div v-for="section in sidebar" :key="section.text" class="sidebar-section">
      <div class="sidebar-title">
        <component :is="section.icon" class="icon" />
        <!-- Render the icon -->
        <span>{{ section.text }}</span>
      </div>
      <ul>
        <li v-for="item in section.items" :key="item.text">
          <a :href="item.link">{{ item.text }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { IconBook, IconCode, IconLightbulb, IconTool } from "lucide-vue-next"; // Import icons

export default {
  name: "CustomSidebar",
  props: {
    sidebar: {
      type: Array,
      required: true
    }
  },
  components: {
    IconBook,
    IconCode,
    IconLightbulb,
    IconTool
  }
};
</script>

<style scoped>
.custom-sidebar {
  padding: 16px;
}

.sidebar-section {
  margin-bottom: 24px;
}

.sidebar-title {
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-bottom: 8px;
}

.icon {
  margin-right: 8px;
}
</style>
