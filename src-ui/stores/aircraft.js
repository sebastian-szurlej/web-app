// Utilities
import { defineStore } from "pinia";

export const useAircraftStore = defineStore("aircraft", {
  state: () => ({
    itemsOne: [],
    itemsTwo: [],
  }),
  getters: {
    getItemsOne: (state) => state.itemsOne,
    getItemsTwo: (state) => state.itemsTwo,
  },
  actions: {
    addItemsOne(value) {
      this.itemsOne = value;
    },
    addItemsTwo(value) {
      this.itemsTwo = value;
    },
  },
});
