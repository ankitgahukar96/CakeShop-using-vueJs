<script setup>
import axios from "axios";
import { ref, computed } from "vue";
import { CartStore } from "../Stores/CartStore";
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

// var load = ref(false);
// load.value = true;
storeL.show();

axios({
  data: cakecart.value,
  url: "https://apifromashu.herokuapp.com/api/cakecart",
  method: "post",
  headers: {
    authtoken: localStorage.token,
  },
}).then(
  (response) => {
    console.log(response.data);
    cakecart.value = response.data.data;
    store.setCart(response.data.data);
    // load.value = false;
    storeL.hide();
  },
  (error) => {
    console.log(error);
    storeL.hide();
  }
);

// function decrement(index, quantity) {
//   if (quantity > 0) {
//     cakecart.value[index].quantity--;
//   }
// }

function decrement(index, quantity) {
  var cartdecdetails = {
    cakeid: cakecart.value[index].cakeid,
    // name: cakecart.value[0].name,
    // price: cakecart.value[0].price,
    // weight: cakecart.value[0].weight,
  };
  // load.value = true;
  storeL.show();

  axios({
    data: cartdecdetails,
    url: "https://apifromashu.herokuapp.com/api/removeonecakefromcart",
    method: "post",
    headers: {
      authtoken: localStorage.token,
    },
  }).then(
    (response) => {
      storeL.hide();

      console.log(response);

      if (quantity > 1) {
        cakecart.value[index].quantity--;
      } else {
        cakecart.value.splice(index, 1);
      }
      // load.value = false;
    },
    (error) => {
      console.log(error);
      // load.value = false;
      storeL.hide();
    }
  );
}

// function increase(index) {
//   cakecart.value[index].quantity++;
// }

function increase(index) {
  var cartincdetails = {
    cakeid: cakecart.value[index].cakeid,
    name: cakecart.value[index].name,
    price: cakecart.value[index].price,
    weight: cakecart.value[index].weight,
  };
  // load.value = true;
  storeL.show();

  axios({
    data: cartincdetails,
    url: "https://apifromashu.herokuapp.com/api/addcaketocart",
    method: "post",
    headers: {
      authtoken: localStorage.token,
    },
  }).then(
    (response) => {
      console.log(response.data.data);
      cakecart.value[index].quantity++;
      // load.value = false;
      storeL.hide();
    },
    (error) => {
      console.log(error);
      // load.value = false;
      storeL.hide();
    }
  );
}

// function remove(index) {
//   console.log(index);

//   cakecart.value = cakecart.value.filter((s, i) => i != index);
// }

function remove(index) {
  // load.value = true;
  storeL.show();

  axios({
    data: { cakeid: cakecart.value[index].cakeid },
    url: "https://apifromashu.herokuapp.com/api/removecakefromcart",
    method: "post",
    headers: {
      authtoken: localStorage.token,
    },
  }).then(
    (response) => {
      storeL.hide();

      console.log(response);
      // cakecart.value = response.data.data;
      // cakecart.value = cakecart.value.filter((cake) => cake.cakeid != id);
      cakecart.value.splice(index, 1);
      // load.value = false;
    },
    (error) => {
      console.log(error);
      // load.value = false;
      storeL.hide();
    }
  );
}

var amount = computed(() => {
  var sum = cakecart.value.reduce((a, b) => {
    return (a += b.price * b.quantity);
  }, 0);
  console.log(sum);
  return sum;
});

// console.log(Math.PI);
const now = new Date();
console.log(now);
console.log(typeof now);
console.log(now.getFullYear());
console.log(now.toDateString());
console.log(now.toLocaleString());
console.log(now.toTimeString());
</script>

<template>
  <!-- <div class="loader" v-if="load">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div> -->
  <div>
    <table class="table table-success table-striped">
      <thead>
        <tr>
          <th scope="col">Cakeid</th>
          <th scope="col">Image</th>
          <th scope="col">name</th>
          <th scope="col">price</th>
          <th scope="col">weight</th>
          <th scope="col">Quantity</th>
          <th scope="col">Total</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cart, index) in cakecart" :key="cart">
          <th scope="row">{{ index + 1 }}</th>
          <!-- <td>{{ cart.cakeid }}</td> -->
          <td><img :src="cart.image" alt="" /></td>
          <td>{{ cart.name }}</td>
          <td>{{ cart.price }}</td>
          <td>{{ cart.weight }}</td>
          <td>
            <button
              @click="decrement(index, cart.quantity)"
              class="btn btn-primary mx-2 cir"
            >
              -</button
            >{{ cart.quantity
            }}<button @click="increase(index)" class="btn btn-primary mx-2 cir">
              +
            </button>
          </td>
          <td>{{ cart.price * cart.quantity }}</td>
          <td>
            <button @click="remove(index)" class="btn btn-danger">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div>
      <div class="ankit">
        <h1>Total price ={{ amount }}</h1>
      </div>
    </div>

    <div>
      <div>
        <router-link to="checkout"
          ><button class="btn btn-success" type="button">
            Checkout
          </button></router-link
        >
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
/* 
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
} */
</style>
