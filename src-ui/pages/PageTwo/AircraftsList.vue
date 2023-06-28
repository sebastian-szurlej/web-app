<template>
  <div v-for="item in items" :key="item.id">
    tail: {{ item.tailNumber }} id: {{ item.id }}
  </div>
</template>

<script setup>
defineProps({
  items: Array,
});
</script>

<style scoped></style>
