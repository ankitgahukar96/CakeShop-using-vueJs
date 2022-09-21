<script setup>
import { ref } from "vue";
import { Address } from "../Stores/address.js";
var store = Address();
var address = ref({
  name: "",
  address: "",
  city: "",
  pincode: "",
  phone: "",
});
function saveAdd() {
  // console.log("save address", address.value);
  // store.useraddress = address.value;
  // console.log("store address", store.useraddress);
  store.addAddress({ ...address.value });
  console.log("addresss save succesfully");
}
</script>
<template>
  <section class="reginput" style="background-color: rgb(219, 231, 245)">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="">
          <div class="card text-black" style="border-radius: 25px">
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Address
                  </p>
                  <form class="mx-1 mx-md-4">
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          v-model="address.name"
                          type="text"
                          class="form-control"
                        />
                        <label class="form-label" for="">Name</label>
                      </div>
                    </div>
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          v-model="address.address"
                          type="text"
                          class="form-control"
                        />
                        <label class="form-label" for="">Address</label>
                      </div>
                    </div>
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          v-model="address.city"
                          type="text"
                          class="form-control"
                        />
                        <label class="form-label" for="">City</label>
                      </div>
                    </div>
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          v-model="address.pincode"
                          type="number"
                          class="form-control"
                        />
                        <label class="form-label" for="">Pincode</label>
                      </div>
                    </div>
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          v-model="address.phone"
                          type="number"
                          class="form-control"
                        />
                        <label class="form-label" for="">Phone Number</label>
                      </div>
                    </div>
                    <div
                      class="d-flex justify-content-center mx-4 mb-3 mb-lg-4"
                    >
                      <button
                        @click="saveAdd"
                        type="button"
                        class="btn btn-primary btn-lg"
                      >
                        Save Address
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
