<script setup>
import { Loder } from "../Stores/Loder";
var storeL = Loder();
// alert(storeL.spinner);
</script>

<template>
  <div class="loader" v-if="storeL.spinner">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<style scoped>
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
  z-index: 999;
}
</style>
