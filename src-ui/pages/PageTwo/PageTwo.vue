<template>
  <v-text-field v-model="name"></v-text-field>
  <v-text-field v-model="calories"></v-text-field>
  <v-text-field v-model="fat"></v-text-field>
  <v-data-table
    :headers="headers"
    :items="desserts"
    item-value="name"
    hide-default-footer
    density="compact"
  >
    <template v-slot:thead>
      <div>top</div>
    </template></v-data-table
  >
  <v-btn @click="filterTable" :ripple="false">Filter</v-btn>
</template>

<script setup>
import { ref } from "vue";
import { VDataTable } from "vuetify/labs/VDataTable";

const headers = [
  {
    title: "Dessert (100g serving)",
    align: "start",
    sortable: false,
    key: "name",
  },
  { title: "Calories", align: "end", key: "calories" },
  { title: "Fat (g)", align: "end", key: "fat" },
  { title: "Carbs (g)", align: "end", key: "carbs" },
  { title: "Protein (g)", align: "end", key: "protein" },
  { title: "Iron (%)", align: "end", key: "iron" },
];
const desserts = [
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    iron: "1",
  },
  {
    name: "Jelly bean",
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    iron: "0",
  },
  {
    name: "KitKat",
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    iron: "6",
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    iron: "7",
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    iron: "16",
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    iron: "1",
  },
  {
    name: "Lollipop",
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    iron: "2",
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    iron: "8",
  },
  {
    name: "Honeycomb",
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    iron: "45",
  },
  {
    name: "Donut",
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    iron: "22",
  },
];

const name = ref("");
const calories = ref("");
const fat = ref("");

const filterColumns = [
  { model: name, text: "name" },
  { model: calories, text: "calories" },
  { model: fat, text: "fat" },
];

function defaultFilter(value, search) {
  return (
    value != null &&
    search != null &&
    typeof value !== "boolean" &&
    value.toString().toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !==
      -1
  );
}

function searchItems(search, items, column) {
  console.log(search);
  if (!search) return items;
  search = search.toString().toLowerCase();
  if (search.trim() === "") return items;

  return items.filter((item) => defaultFilter(item[column], search));
}

function filterTable() {
  let itemsToFilter = [...desserts];
  filterColumns.forEach((item) => {
    itemsToFilter = searchItems(item.model.value, itemsToFilter, item.text);
  });
  console.log(itemsToFilter);
}
</script>

<style>
td {
  height: 10px !important;
}
</style>
