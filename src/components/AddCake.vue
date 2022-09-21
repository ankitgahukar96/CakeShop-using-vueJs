<script setup>
import { ref } from "vue";

var stored = -1;

var cakes = ref([]);
var cake = ref({
  name: "",
  price: "",
});
function addCake() {
  if (cake.value.name && cake.value.price) {
    if (stored >= 0) {
      console.log(stored);
      cakes.value = cakes.value.map((c, index) => {
        if (index === stored) {
          return {
            ...cake.value,
          };
        } else {
          return c;
        }
      });
      stored = -1;
    } else {
      // cakes.value = [...cakes.value, cake.value];
      // cake.value = "";
      var temp = { ...cake.value };
      cakes.value.push(temp);
      // var cake = "";
      cake.value = {
        name: "",
        price: "",
      };
    }
  }
}

function onEdit(index) {
  cake.value = { ...cakes.value[index] };
  console.log(cake.value);
  stored = index;
  console.log(stored);
}

function lowhigh() {
  cakes.value.sort((a, b) => {
    return a.price - b.price;
    console.log(cakes.value);
  });
}

function highlow() {
  cakes.value.sort((a, b) => b.price - a.price);
}
</script>

<style scoped>
.cont {
  max-width: 60rem;
  margin: 0 auto;
}
</style>
<template>
  <div class="form-add my-4 cont">
    <form class="form-control add-form">
      <label for="cake">Cake Name</label>
      <input
        type="text"
        class="form-control form-control-lg"
        v-model="cake.name"
      />
      <label for="cake">price</label>
      <input
        type="text"
        class="form-control form-control-lg"
        v-model="cake.price"
      />

      <button type="button" class="btn btn-primary my-3" @click="addCake">
        Add Cake
      </button>
      <button type="button" class="btn btn-primary my-3" @click="lowhigh">
        Low to High
      </button>
      <button type="button" class="btn btn-primary my-3" @click="highlow">
        High to low
      </button>
      <div class="cakes">
        <!-- <ol>
          <li v-for="cake in cakes" :key="cake">
            {{ cake }}
          </li>
        </ol> -->

        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(cake, index) in cakes" :key="cake">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ cake.name }}</td>
              <td>{{ cake.price }}</td>
              <button
                @click="onEdit(index)"
                type="button"
                class="b btn btn-primary"
              >
                Edit
              </button>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  </div>
</template>

<style scoped>
.b {
  color: black;
}
</style>
