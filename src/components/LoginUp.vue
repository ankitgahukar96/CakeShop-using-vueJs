<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { Account } from "../Stores/Account.js";
var router = useRouter();
var store = Account();
// var props = defineProps(["loginDone"]);

const user = ref({
  email: "",
  password: "",
});

function login() {
  console.log("Logged in user ", user.value);
  if (user.value.email != "" && user.value.password != "") {
    axios({
      data: user.value,
      url: "https://apifromashu.herokuapp.com/api/login",
      method: "post",
    }).then(
      (response) => {
        console.log("response from login api", response.data);
        if (response.data.token) {
          localStorage.token = response.data.token;
          store.loginUser(response.data.token);
          router.push("/");
        }
      },
      (error) => {
        console.log("error from api", error);
      }
    );
  } else {
    alert("mention field is required");
  }
  // props.loginDone();
}
</script>

<style></style>

<template>
  <section class="vh-100" style="background-color: #eee">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style="border-radius: 25px">
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Login
                  </p>

                  <form class="mx-1 mx-md-4">
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          v-model="user.email"
                          type="email"
                          id="form3Example3c"
                          class="form-control"
                        />
                        <label class="form-label" for="form3Example3c"
                          >Your Email</label
                        >
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          v-model="user.password"
                          type="password"
                          id="form3Example4c"
                          class="form-control"
                        />
                        <label class="form-label" for="form3Example4c"
                          >Password</label
                        >
                      </div>
                    </div>

                    <div
                      class="d-flex justify-content-center mx-4 mb-3 mb-lg-4"
                    >
                      <router-link to="/register"
                        >New User?Register Here</router-link
                      >
                      <button
                        @click="login"
                        type="button"
                        class="btn btn-primary btn-lg"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    class="img-fluid"
                    alt="Sample image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
