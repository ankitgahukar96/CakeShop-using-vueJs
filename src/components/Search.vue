<script setup>
import { useRoute } from "vue-router";
import { onUpdated } from "vue";
import axios from "axios";
import { ref, watch } from "vue";
import Cake from "./Cake.vue";
var route = useRoute();
console.log("route details are", route.query.q);

var search = ref([]);

// onUpdated(() => {
//   // alert(".." + route.query.q);
// });

var url =
  "https://apifromashu.herokuapp.com/api/searchcakes?q=" + route.query.q;

axios({
  method: "get",
  url: url,
}).then(
  (response) => {
    console.log(response);
    search.value = response.data.data;
  },
  (error) => {
    console.log("Error ", error);
  }
);

watch(
  () => route.query.q,
  (value) => {
    console.log("value ", value);
    var url = "https://apifromashu.herokuapp.com/api/searchcakes?q=" + value;
    axios({
      method: "get",
      url: url,
    }).then(
      (response) => {
        console.log(response);
        search.value = response.data.data;
      },
      (error) => {
        console.log("Error ", error);
      }
    );
  }
);
</script>

<template>
  <div class="row">
    <Cake v-for="cake in search" :key="cake.cakeid" :data="cake" />
  </div>
</template>
