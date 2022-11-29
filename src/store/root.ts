import { defineStore } from "pinia";

export const useRootStore = defineStore("root", {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++;
    },
  },
});
