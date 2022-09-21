<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { CartStore } from "../Stores/CartStore.js";
import { Account } from "../Stores/Account.js";
var router = useRouter();
// defineProps(["isLoggedin"]);
var name = "Ankit Cake Shop";
var store = CartStore();
var store1 = Account();

// function search() {
//   alert("hi");
// }

function logout() {
  // alert(hi);
  // localStorage.removeItem("token");
  // isLoggedin.value = false;
  store1.logoutUser();
  localStorage.removeItem("token");
  router.push("/");
}

var isLoggedin = ref(localStorage.token ? true : false);

// var name = "Ankit Gahukar";
// var onlineUsers = ref(0);

// function joinMeeting() {
//   onlineUsers.value++;
//   // alert(onlineUsers.value);

// }

function search() {
  router.push({
    path: "search",
    query: {
      q: searchtext.value,
    },
  });
}

// var applyname = computed(() => {
//   return name.length > 5 ? name.substr(0, 4) + "...." : name;
// });

// var isUserLoggedIn = ref(true);

var searchtext = ref("Search text");
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <!-- {{ applyname }} -->
      <a class="navbar-brand shop" href="#">{{ name }}</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/addcake">AddCake</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <!-- <li class="nav-item">
            <router-link to="/cart" class="nav-link"
              >Cart {{ store.cartcount }}</router-link
            >
          </li> -->
          <li class="nav-item">
            <router-link to="/admin" class="nav-link">Admin</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="nav-link a">
              <ion-icon name="cart-outline" class="ion"></ion-icon>
              {{ store.cartcount > 0 ? store.cartcount : "" }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/orders" class="nav-link">Orders</router-link>
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model="searchtext"
          />

          <!-- {{ onlineUsers }} -->
          <button @click="search" class="btn btn-outline-success" type="button">
            Search
          </button>

          <!-- <button
            v-if="isLoggedin"
            type="button"
            class="btn btn-danger mx-2"
            @click="logout"
          >
            Logout
          </button>
          <router-link to="/login">
            <button
              v-if="!isLoggedin"
              type="button"
              class="btn btn-success mx-2"
            >
              Login
            </button></router-link
          > -->

          <button
            v-if="store1.isLoggedin"
            type="button"
            class="btn btn-danger mx-2"
            @click="logout"
          >
            Logout
          </button>
          <router-link to="/login">
            <button
              v-if="!store1.isLoggedin"
              type="button"
              class="btn btn-success mx-2"
            >
              Login
            </button></router-link
          >
        </form>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.ion {
  display: inline-block;
  width: 25px;
  height: 25px;
  color: blue;
}

.a {
  color: red;
}

.shop {
  font-size: 30px;
}
</style>
