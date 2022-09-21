import { defineStore } from "pinia";

export var Account = defineStore("account", {
  state: () => ({
    isLoggedin: false,
    token: "",
  }),

  actions: {
    loginUser(token) {
      (this.isLoggedin = true), (this.token = token);
    },
    logoutUser(token) {
      (this.isLoggedin = false), (this.token = "");
    },
  },
});
