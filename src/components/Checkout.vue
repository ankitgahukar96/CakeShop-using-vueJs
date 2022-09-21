<script setup></script>

<template>
  <div class="row">
    <div class="col-md-5">
      <div>
        <!-- <h1>Checkout</h1> -->
        <nav class="d-grid gap-2 col-6 mx-auto my-4">
          <router-link to="summary" class="btn btn-primary" aria-current="page"
            >Summary</router-link
          >
          <router-link to="address" class="btn btn-primary" href="#"
            >Address</router-link
          >
          <router-link to="payment" class="btn btn-primary" href="#"
            >Payment</router-link
          >
        </nav>
      </div>
    </div>

    <div class="col-md-7">
      <router-view></router-view>
    </div>
  </div>
</template>
