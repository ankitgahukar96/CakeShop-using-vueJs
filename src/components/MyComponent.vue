<script setup>
import { ref } from "vue";
import Navbar from "./Navbar.vue";
import Caroasul from "./Caroasul.vue";
import Cake from "./Cake.vue";
import SignUp from "./SignUp.vue";
import AddCake from "./AddCake.vue";
import CakeAdd from "./CakeAdd.vue";
import Cart from "./Cart.vue";
import CakeList from "./CakeList.vue";
import SignUpp from "./SignUpp.vue";
import LoginUp from "./LoginUp.vue";
import img1 from "../assets/Cart/image1.jpg";
import img2 from "../assets/Cart/image2.jpeg";

var data1 = [
  { image: img1, name: "mango cake", price: "500", status: "BEST" },
  {
    image: img2,
    name: "chocolate cake",
    price: "700",
    status: "GOOD",
  },
  {
    image: img2,
    name: "chocolate cake",
    price: "700",
    status: "NEW",
  },
];

var isLoggedin = ref(false);
var Ankit = function () {
  isLoggedin.value = true;
};
</script>

<style></style>

<template>
  <div>
    <Navbar :isLoggedin="isLoggedin" />
    <SignUp />
    <Caroasul />
    <div class="row">
      <!-- <Cake :data="data1[0]" />
      <Cake :data="data1[1]" /> -->
      <!-- <Cake :data="data2" /> -->
      <!-- <Cake :image="img1" name="mango cake" price="500" /> -->
      <!-- <Cake :image="img2" name="chocolate cake" price="700" /> -->
      <Cake v-for="data of data1" :key="data.name" :data="data" />
    </div>
    <AddCake />

    <Cart />
    <SignUpp />
    <LoginUp :loginDone="Ankit" />
    <CakeAdd />
    <CakeList />
  </div>
</template>
