<script setup>
import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "@/components/HelloWorld.vue";
import MyComponent from "./components/MyComponent.vue";

function onCopy(e) {
  e.preventDefault();
  console.log("don't copy , otherwise this will be reported to Hr");
}
</script>

<template>
  <main @copy="onCopy">
    <MyComponent />
  </main>
</template>

<style scoped>
main {
  max-width: 1800px;
  margin: 0 auto;
}
</style>
