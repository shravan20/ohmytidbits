<template>
  <div class="custom-sidebar-item">
    <i :class="iconClass"></i>
    <span>{{ text }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  text: String,
  iconClass: String
})
</script>

<style scoped>
.custom-sidebar-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.custom-sidebar-item i {
  color: var(--vp-c-brand);
  font-size: 0.875rem;
  width: 1rem;
  text-align: center;
}
</style>