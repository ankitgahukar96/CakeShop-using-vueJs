<script setup>
import axios from "axios";
import { CartStore } from "../Stores/CartStore";
import { ref, computed } from "vue";
var store = CartStore();
import { Loder } from "../Stores/Loder";
var storeL = Loder();
// var cake = ref({
//   cakeid: "",
//   name: "",
//   image: "",
//   price: "",
//   weight: "",
// });

var cakecart = ref([]);

cakecart.value = store.cartitems;

// axios({
//   data: cakecart.value,
//   url: "https://apifromashu.herokuapp.com/api/cakecart",
//   method: "post",
//   headers: {
//     authtoken: localStorage.token,
//   },
// }).then(
//   (response) => {
//     console.log(response.data);
//     cakecart.value = response.data.data;
//     load.value = false;
//   },
//   (error) => {
//     console.log(error);
//   }
// );

var amount = computed(() => {
  var sum = cakecart.value.reduce((a, b) => {
    return (a += b.price * b.quantity);
  }, 0);
  console.log(sum);
  return sum;
});
</script>

<template>
  <div>
    <table class="table table-success table-striped">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">name</th>
          <th scope="col">price</th>
          <th scope="col">weight</th>
          <th scope="col">Quantity</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cart in cakecart" :key="cart">
          <!-- <td>{{ cart.cakeid }}</td> -->
          <td><img :src="cart.image" alt="" /></td>
          <td>{{ cart.name }}</td>
          <td>{{ cart.price }}</td>
          <td>{{ cart.weight }}</td>
          <td>{{ cart.quantity }}</td>
          <td>{{ cart.price * cart.quantity }}</td>
        </tr>
      </tbody>
    </table>

    <div>
      <div class="ankit">
        <h1>Total price ={{ amount }}</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 150px;
  height: 150px;
}

.ankit {
  display: flex;
  align-items: center;
  gap: 30px;
  float: right;
  text-align: center;
  margin-right: 100px;
}

.loader {
  background-color: rgba(255, 255, 255, 0.7);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
