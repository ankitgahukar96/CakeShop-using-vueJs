<script setup>
import axios from "axios";
import { ref } from "vue";

var cakeOrder = ref([]);

axios({
  method: "post",
  url: "https://apifromashu.herokuapp.com/api/cakeorders",
  data: {},
  headers: {
    authtoken: localStorage.token,
  },
}).then(
  (response) => {
    console.log(response.data);
    cakeOrder.value = response.data.cakeorders;
    console.log(cakeOrder.value);
  },
  (error) => {
    error;
  }
);

var ind = ref(0);
function details(index) {
  ind.value = index;
  console.log("index", index);
}
</script>

<template>
  <h1>Orders</h1>

  <table class="table container table-success table-striped">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">Date</th>
        <th scope="col">Address</th>
        <th scope="col">Price(.RS)</th>
        <th scope="col">Mode</th>
        <th scope="col">States</th>
        <th scope="col">Details</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(order, index) in cakeOrder" :key="order">
        <th scope="row">{{ order.orderid }}</th>
        <td>{{ order.orderdate }}</td>
        <td>
          {{ order.address }} <br />
          pincode-{{ order.pincode }} <br />
          mobile no- {{ order.phone }}
        </td>
        <td>{{ order.price }}</td>
        <td>{{ order.mode }}</td>
        <td>{{ order.pending }}</td>
        <td>
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="details(index)"
          >
            Details
          </button>

          <!-- Modal -->
        </td>
      </tr>
    </tbody>
  </table>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Cake details</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="container">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Cake Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Weight</th>
                <th scope="col">SubTotal</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="cake in cakeOrder[ind].cakes" :key="cake">
                <td><img :src="cake.image" alt="" /></td>
                <td>{{ cake.name }}</td>
                <td>{{ cake.price }}</td>
                <td>{{ cake.quantity }}</td>
                <td>{{ cake.weight }}</td>

                <td>{{ cake.quantity * cake.price }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 100px;
  height: 100px;
}
</style>
