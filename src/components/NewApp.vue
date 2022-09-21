<script setup>
import Navbar from "./Navbar.vue";
import Loder from "./Loder.vue";
</script>

<template>
  <Loder />
  <Navbar />

  <router-view></router-view>
</template>
