<script setup>
import { ref, watch, onMounted, onBeforeMount, onUpdated } from "vue";

// onUpdated(() => {
//   alert("update happening");
// });
// onBeforeMount(() => {
//   alert("Before happening");
// });
// onMounted(() => {
//   alert("i am mount");
// });

const user = ref({
  id: "",
  name: "",
  email: "",
  password: "",
});

var storeId;

var users = ref([]);
function search() {
  if (user.value.name && user.value.email && user.value.password) {
    if (storeId) {
      users.value = users.value.map((u) => {
        if (u.id === storeId) {
          return {
            ...user.value,
            id: u.id,
          };
        } else {
          return u;
        }
      });
    } else {
      // e.preventDefault();
      user.value = { ...user.value, id: users.value.length + 1 };
      console.log("User details are", user.value);
      var temp = { ...user.value };
      users.value.push(temp);
      all.push(temp);
      console.log("......", users.value);
      // user.value.name = "";
      // user.value.email = "";
      // user.value.password = "";

      user.value = {
        id: "",
        name: "",
        email: "",
        password: "",
      };
    }
  }
}

function find(id) {
  for (var i = 0; i < users.value.length; i++) {
    if (users.value[i].id === id) {
      return users.value[i];
    }
  }
}

function onEdit(id) {
  // console.log(id);
  // user.value = {
  //   ...users.value[id],
  // };
  // user.value = users.value.filter((u) => u.id === id);
  user.value = { ...find(id) };
  console.log(find(id));
  storeId = id;
}

var x = ref("");
watch(x, (newValue, oldValue) => {
  console.log("user is changing the value of email", newValue);
});

var all = [];
var y = ref("");
watch(y, (newValue, oldValue) => {
  console.log("watching", newValue, all);

  users.value = all.filter((n) => {
    if (
      n.name.toLowerCase().includes(newValue) ||
      n.email.toLowerCase().includes(newValue)
    ) {
      return n;
    }
  });
});
</script>

<template>
  <form>
    <div class="mb-3">
      <input type="text" v-model="x" />

      <label for="exampleInputEmail1" class="form-label">Full Name</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="user.name"
      />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Email</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputPassword1"
        v-model="user.email"
      />
    </div>

    <div class="mb-3">
      <label for="exampleInputPassword2" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword2"
        v-model="user.password"
      />
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>

    <button type="submit" @click="search" class="btn btn-primary">
      Submit
    </button>
    <div>
      Search users<input type="text" class="form-control" v-model="y" />
    </div>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Password</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="eachUser of users" :key="eachUser.id">
          <th scope="row">{{ eachUser.id }}</th>
          <td>{{ eachUser.name }}</td>
          <td>{{ eachUser.email }}</td>
          <td>{{ eachUser.password }}</td>
          <td>
            <button @click="onEdit(eachUser.id)" class="btn btn-danger">
              Edit
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </form>
</template>
