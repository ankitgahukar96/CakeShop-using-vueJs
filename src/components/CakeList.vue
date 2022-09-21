<script setup>
import axios from "axios";
import { ref } from "vue";
import Cake from "./Cake.vue";
import { Loder } from "../Stores/Loder";
var storeL = Loder();

var cakes = ref([]);
storeL.show();
axios({
  method: "get",
  url: "https://apifromashu.herokuapp.com/api/allcakes",
}).then(
  (response) => {
    storeL.hide();
    console.log("response from all cakes api", response);

    cakes.value = response.data.data;
  },
  (error) => {
    storeL.hide();

    console.log("error from all ckes api", error);
  }
);
</script>

<template>
  <div class="row">
    <Cake v-for="cake in cakes" :key="cake.cakeid" :data="cake" />
  </div>
</template>
