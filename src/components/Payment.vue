<script setup>
import { Address } from "../Stores/address.js";
import { CartStore } from "../Stores/CartStore.js";
import { computed } from "vue";
import axios from "axios";
var cStore = CartStore();
var aStore = Address();

// var amount = computed(() => {
var sum = cStore.cartitems.reduce((a, b) => {
  return (a += b.price * b.quantity);
}, 0);
console.log(sum);
//   return sum;
// });

function placeOrder() {
  var data = { ...aStore.useraddress, price: sum, cakes: cStore.cartitems };

  axios({
    method: "post",
    url: "https://apifromashu.herokuapp.com/api/addcakeorder",
    data: data,
    headers: {
      authtoken: localStorage.token,
    },
  }).then(
    (response) => {
      console.log(response);
    },
    (error) => {
      console.log(error);
    }
  );
}
</script>

<template>
  <h1>Payment</h1>
  <div class="row">
    <div class="col-md-6">Payment Mode</div>
    <div class="col-md-6">Cash on Delivery</div>
    <div class="col-md-12">
      <!-- <router-link to="orders" -->
      ><button class="btn btn-success" @click="placeOrder">Place order</button>
      <!-- </router-link
      > -->
    </div>
  </div>
</template>
