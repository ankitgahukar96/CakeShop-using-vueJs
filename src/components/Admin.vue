<script setup>
import axios from "axios";

import { ref } from "vue";

var result = ref([]);
axios({
  method: "get",
  url: "http://apifromashu.herokuapp.com/api/allcakes",
}).then(
  (response) => {
    console.log("res of all cake api", response);
    result.value = response.data.data;
    console.log(result.value);
  },
  (error) => {
    console.log("err from all cake api", error);
  }
);
</script>

<template>
  <div>
    <h1>Here we will show all cakes</h1>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cake, index) in result" :key="cake">
          <th scope="row">{{ index + 1 }}</th>
          <td><img :src="cake.image" alt="" /></td>
          <td>{{ cake.name }}</td>
          <td>{{ cake.price }}</td>
          <td>
            <router-link :to="`/edit/${cake.cakeid}`"
              ><button class="btn btn-primary" type="button">
                Edit
              </button></router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
img {
  width: 100px;
  height: 100px;
}
</style>
