<script setup>
defineProps(["data"]);
</script>

<template>
  <div class="card" style="width: 18rem">
    <router-link :to="`/detail/${data.cakeid}`">
      <img
        style="height: 15rem"
        :src="data.image"
        class="card-img-top"
        alt="..."
    /></router-link>
    <div class="card-body">
      <h5 class="card-title">{{ data.name }}</h5>
      <p class="card-text">{{ data.price }}</p>
    </div>
  </div>
</template>
