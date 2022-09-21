import { defineStore } from "pinia";

export var Loder = defineStore("spin", {
  state: () => ({
    spinner: false,
  }),

  actions: {
    show() {
      this.spinner = true;
    },
    hide() {
      this.spinner = false;
    },
  },
});
