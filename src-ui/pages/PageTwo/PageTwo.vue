<template>
  <div class="custom-div d-flex flex-column">
    <v-checkbox
      v-model="selected"
      v-for="item in aircrafts"
      :key="item.id"
      :label="item.tailNumber"
      :value="item.id"
    ></v-checkbox>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
const selected = ref([]);
console.log(selected.value);

const aircrafts = [
  { id: 1, tailNumber: "110" },
  { id: 2, tailNumber: "120" },
  { id: 3, tailNumber: "130" },
  { id: 4, tailNumber: "140" },
  { id: 6, tailNumber: "150" },
  { id: 7, tailNumber: "160" },
  { id: 8, tailNumber: "170" },
  { id: 9, tailNumber: "180" },
  { id: 10, tailNumber: "190" },
];
watch(selected, () => {
  console.log(selected);
});
</script>

<style scoped>
.custom-div {
  max-height: 300px;
  height: 300px;
}
</style>
