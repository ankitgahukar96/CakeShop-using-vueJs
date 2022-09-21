import { defineStore } from "pinia";

export var Address = defineStore("cartaddress", {
  state: () => ({
    useraddress: [],
  }),

  // getters: {
  //   address: (state) =>
  //     state.useraddress({
  //       name: "",
  //       address: "",
  //       city: "",
  //       pincode: "",
  //       phonenumber: "",
  //     }),
  // },

  actions: {
    addAddress(item) {
      this.useraddress = item;
    },
  },
});
