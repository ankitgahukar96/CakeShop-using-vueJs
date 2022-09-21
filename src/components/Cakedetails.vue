<script setup>
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import axios from "axios";
import { CartStore } from "../Stores/CartStore.js";
import { ref } from "vue";
import { Loder } from "../Stores/Loder";
var storeL = Loder();

var route = useRoute();
var router = useRouter();
var cakeid = route.params.cakeid;
// var load = ref(false);
var store = CartStore();

var cake = ref({
  cakeid: "",
  name: "",
  image: "",
  price: "",
  description: "",
  weight: "",
  type: "",
  flavour: "",
  ingredient: "",
  eggless: "",
});

// var cake = ref({});
var url = "https://apifromashu.herokuapp.com/api/cake/" + cakeid;
// load.value = true;
storeL.show();

axios({
  method: "get",
  url: url,
}).then(
  (response) => {
    console.log("data is here", response);
    cake.value = response.data.data;

    console.log(cake.value);
    // load.value = false;
    storeL.hide();
  },
  (error) => {
    console.log(error);
    // load.value = false;
    storeL.hide();
  }
);

// var cartdetails = {
//   cakeid: cake.value.cakeid,
//   name: cake.value.name,
//   image: cake.value.image,
//   price: cake.value.price,
//   weight: cake.value.weight,
// };
function addtocart() {
  if (!localStorage.token) {
    router.push("/login");
  } else {
    var cartdetails = {
      cakeid: cake.value.cakeid,
      name: cake.value.name,
      image: cake.value.image,
      price: cake.value.price,
      weight: cake.value.weight,
    };
    storeL.show();

    axios({
      method: "post",
      url: "https://apifromashu.herokuapp.com/api/addcaketocart",
      data: cartdetails,
      headers: {
        authtoken: localStorage.token,
      },
    }).then(
      (response) => {
        storeL.hide();

        console.log(response.data);
        // cartdetails = response.data.data;
        store.addCartitem(cakeid);
        router.push("/cart");
      },
      (error) => {
        storeL.hide();

        console.log(error);
      }
    );
  }
}
</script>

<template>
  <!-- <div class="loader" v-if="load">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div> -->
  <div>
    <!-- <h1>here wie will show the details of {{ cakeid }} cake</h1> -->
    <!-- <h2>{{ cake.name }}</h2> -->

    <div class="mt-4 mx-4">
      <div class="row">
        <div class="col">
          <img :src="cake.image" alt="" class="image" />
          <p style="font-size: 15px; user-select: auto">
            <span style="font-weight: bold; font-size: 15px; user-select: auto"
              >Note:</span
            >
            Design and icing of cake may vary from the image shown here since
            each chef has his/her own way of baking and designing a cake.
          </p>
        </div>

        <div class="col">
          <div class="col-sm-12">
            <div style="margin-top: 30px; user-select: auto">
              <h3 style="user-select: auto">
                {{ cake.name }}
              </h3>
              <p style="user-select: auto">4.5 ratings</p>
              <h2 style="user-select: auto">
                <i
                  _ngcontent-wqt-c30=""
                  aria-hidden="true"
                  class="fa fa-inr"
                  style="user-select: auto"
                ></i>
                {{ cake.price }}
              </h2>
              <p _ngcontent-wqt-c30="" style="user-select: auto">
                inclusive of all taxes.
              </p>
              <ul _ngcontent-wqt-c30="" style="user-select: auto">
                <li _ngcontent-wqt-c30="" style="user-select: auto">
                  Cake Flavour : {{ cake.flavour }}
                </li>
                <li style="user-select: auto">
                  Type of Cake : {{ cake.type }}
                </li>
                <li _ngcontent-wqt-c30="" style="user-select: auto">
                  Minimum Weight : {{ cake.weight }}
                </li>
                <li _ngcontent-wqt-c30="" style="user-select: auto">
                  Description : {{ cake.description }}
                </li>
                <li
                  _ngcontent-wqt-c30=""
                  style="user-select: auto"
                  v-for="ind in cake.ingredients"
                  :key="ind"
                >
                  Ingredients: {{ ind }}
                </li>
              </ul>
            </div>
            <div
              _ngcontent-wqt-c30=""
              style="display: inline; margin-top: 50px; user-select: auto"
              class="ng-star-inserted"
            >
              <input
                _ngcontent-wqt-c30=""
                type="radio"
                class="form-check-input"
                value="0.5"
                style="user-select: auto"
              /><label
                _ngcontent-wqt-c30=""
                class="form-check-label"
                style="user-select: auto"
              >
                &nbsp;&nbsp;&nbsp; 500 gm &nbsp;&nbsp;</label
              >
            </div>
            <div
              _ngcontent-wqt-c30=""
              style="display: inline; margin-top: 50px; user-select: auto"
              class="ng-star-inserted"
            >
              <input
                _ngcontent-wqt-c30=""
                type="radio"
                class="form-check-input"
                value="1"
                style="user-select: auto"
              /><label
                _ngcontent-wqt-c30=""
                class="form-check-label"
                style="user-select: auto"
              >
                &nbsp;&nbsp;&nbsp; 1 kg &nbsp;&nbsp;</label
              >
            </div>
            <div
              _ngcontent-wqt-c30=""
              style="display: inline; margin-top: 50px; user-select: auto"
              class="ng-star-inserted"
            >
              <input
                _ngcontent-wqt-c30=""
                type="radio"
                class="form-check-input"
                value="1.5"
                style="user-select: auto"
              /><label
                _ngcontent-wqt-c30=""
                class="form-check-label"
                style="user-select: auto"
              >
                &nbsp;&nbsp;&nbsp; 1.5 kg &nbsp;&nbsp;</label
              >
            </div>
            <div
              _ngcontent-wqt-c30=""
              style="display: inline; margin-top: 50px; user-select: auto"
              class="ng-star-inserted"
            >
              <input
                _ngcontent-wqt-c30=""
                type="radio"
                class="form-check-input"
                value="2"
                style="user-select: auto"
              /><label
                _ngcontent-wqt-c30=""
                class="form-check-label"
                style="user-select: auto"
              >
                &nbsp;&nbsp;&nbsp; 2 kg &nbsp;&nbsp;</label
              >
            </div>
            <div
              _ngcontent-wqt-c30=""
              style="display: inline; margin-top: 50px; user-select: auto"
              class="ng-star-inserted"
            >
              <input
                _ngcontent-wqt-c30=""
                type="radio"
                class="form-check-input"
                value="2.5"
                style="user-select: auto"
              /><label
                _ngcontent-wqt-c30=""
                class="form-check-label"
                style="user-select: auto"
              >
                &nbsp;&nbsp;&nbsp; 2.5 kg &nbsp;&nbsp;</label
              >
            </div>
            <div
              _ngcontent-wqt-c30=""
              style="display: inline; margin-top: 50px; user-select: auto"
              class="ng-star-inserted"
            >
              <input
                _ngcontent-wqt-c30=""
                type="radio"
                class="form-check-input"
                value="3"
                style="user-select: auto"
              /><label
                _ngcontent-wqt-c30=""
                class="form-check-label"
                style="user-select: auto"
              >
                &nbsp;&nbsp;&nbsp; 3 kg &nbsp;&nbsp;</label
              >
            </div>
            <div
              _ngcontent-wqt-c30=""
              style="display: inline; margin-top: 50px; user-select: auto"
              class="ng-star-inserted"
            >
              <input
                _ngcontent-wqt-c30=""
                type="radio"
                class="form-check-input"
                value="4"
                style="user-select: auto"
              /><label
                _ngcontent-wqt-c30=""
                class="form-check-label"
                style="user-select: auto"
              >
                &nbsp;&nbsp;&nbsp; 4 kg &nbsp;&nbsp;</label
              >
            </div>
            <div
              _ngcontent-wqt-c30=""
              style="display: inline; margin-top: 50px; user-select: auto"
              class="ng-star-inserted"
            >
              <input
                _ngcontent-wqt-c30=""
                type="radio"
                class="form-check-input"
                value="5"
                style="user-select: auto"
              /><label
                _ngcontent-wqt-c30=""
                class="form-check-label"
                style="user-select: auto"
              >
                &nbsp;&nbsp;&nbsp; 5 kg &nbsp;&nbsp;</label
              >
            </div>
            <!---->
            <div
              _ngcontent-wqt-c30=""
              style="margin-top: 30px; user-select: auto"
            >
              <div
                _ngcontent-wqt-c30=""
                style="display: inline; user-select: auto"
              >
                <input
                  _ngcontent-wqt-c30=""
                  type="checkbox"
                  class="form-check-input"
                  value="true"
                  style="user-select: auto"
                /><label
                  _ngcontent-wqt-c30=""
                  class="form-check-label"
                  style="user-select: auto"
                  >&nbsp;&nbsp;&nbsp;
                  <b _ngcontent-wqt-c30="" style="user-select: auto">Eggless</b>
                  &nbsp;&nbsp;&nbsp;
                </label>
              </div>
              <div
                _ngcontent-wqt-c30=""
                style="display: inline; user-select: auto"
              >
                <input
                  _ngcontent-wqt-c30=""
                  type="checkbox"
                  class="form-check-input"
                  value="true"
                  style="user-select: auto"
                /><label
                  _ngcontent-wqt-c30=""
                  class="form-check-label"
                  style="user-select: auto"
                  >&nbsp;&nbsp;&nbsp; Heart Shape &nbsp;&nbsp;&nbsp;
                </label>
              </div>
            </div>
            <div
              _ngcontent-wqt-c30=""
              style="display: block; margin-top: 30px; user-select: auto"
            >
              <input
                _ngcontent-wqt-c30=""
                type="text"
                placeholder="Message on cake"
                class="form-control"
                style="user-select: auto"
              />
            </div>
            <div
              _ngcontent-wqt-c30=""
              style="margin-top: 30px; user-select: auto"
            >
              <div
                _ngcontent-wqt-c30=""
                style="
                  display: inline;
                  margin-top: 20px;
                  padding: 0px;
                  user-select: auto;
                "
              >
                <button
                  _ngcontent-wqt-c30=""
                  type="button"
                  class="btn btn-warning"
                  style="user-select: auto"
                  @click="addtocart"
                >
                  ADD TO CART
                </button>
              </div>
              <div
                _ngcontent-wqt-c30=""
                style="
                  display: inline;
                  margin-top: 20px;
                  margin-left: 20px;
                  user-select: auto;
                "
              >
                <button
                  _ngcontent-wqt-c30=""
                  type="button"
                  class="btn btn-success"
                  style="user-select: auto"
                >
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* .flex {
  display: flex;
} */
.image {
  width: 100%;
  height: 500px;
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
