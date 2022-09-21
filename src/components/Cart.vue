<script setup>
import { ref, computed } from "vue";
import img1 from "../assets/Cart/image1.jpg";
import img2 from "../assets/Cart/image2.jpeg";
import img3 from "../assets/Cart/cream.jpg";
import img4 from "../assets/Cart/mango.jpg";
import img5 from "../assets/Cart/Mango-Cake.jpg";
const data = ref([
  {
    img: img1,
    name: "Mango Cake",
    price: 300,
    quantity: 1,
  },
  {
    img: img2,
    name: "Chocoklate Cake",
    price: 350,
    quantity: 1,
  },
  {
    img: img3,
    name: "Vanilla Cake",
    price: 380,
    quantity: 1,
  },
  {
    img: img4,
    name: "Rasmalai Cake",
    price: 420,
    quantity: 1,
  },
  {
    img: img5,
    name: "walnut Cake",
    price: 480,
    quantity: 1,
  },
]);

function decrement(index, quantity) {
  // quantity <= 0
  //   ? (data.value[index].quantity = 0)
  //   : data.value[index].quantity--;
  // if (quantity <= 0) {
  //   // quantity = 0;
  //   data.value[index].quantity = 0;
  // } else {
  //   data.value[index].quantity--;
  // }

  if (quantity > 0) {
    data.value[index].quantity--;
  }
}

function increase(index) {
  data.value[index].quantity++;
}

function remove(index) {
  console.log(index);
  // data.value[index] = "";
  // data.value[index].splice(index - 1, index);

  data.value = data.value.filter((s, i) => i != index);
}

// var ankit = computed(() => {
//   // var a = d.price * d.quantity;
//   // return a;
//   // var a = data.value.map((s) => {
//   //   return s.price * s.quantity;
//   // });
//   // console.log(a);
//   return "hi";
// });

// var ans = 0;
var amount = computed(() => {
  var sum = data.value.reduce((a, b) => {
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
          <th scope="col">#</th>
          <th scope="col">Image</th>
          <th scope="col">Cake Name</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Total</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(d, index) in data" :key="d.id">
          <th scope="row">{{ index + 1 }}</th>
          <td class="sm"><img :src="d.img" alt="" /></td>
          <td>{{ d.name }}</td>
          <td>{{ d.price }}</td>
          <td>
            <button
              @click="decrement(index, d.quantity)"
              class="btn btn-primary mx-2 cir"
            >
              -</button
            >{{ d.quantity
            }}<button @click="increase(index)" class="btn btn-primary mx-2 cir">
              +
            </button>
          </td>
          <td>{{ d.price * d.quantity }}</td>
          <td>
            <button @click="remove(index)" class="btn btn-danger">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="nit">
      <h1>Total price ={{ amount }}</h1>
    </div>
  </div>
</template>

<style scoped>
.sm img {
  width: 100px;
  height: 100px;
}

.nit {
  display: flex;
  align-items: center;
  gap: 30px;
  float: right;
  text-align: center;
  margin: 0 300px;
}
</style>
