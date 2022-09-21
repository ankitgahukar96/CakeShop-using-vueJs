import { defineStore } from "pinia";

export var CartStore = defineStore("cartstore", {
  state: () => ({
    cartitems: [],
  }),
  getters: {
    cartcount: (state) => state.cartitems.length,
  },
  actions: {
    addCartitem(item) {
      this.cartitems.push(item);
    },
    setCart(item) {
      this.cartitems = item;
    },
  },
});
