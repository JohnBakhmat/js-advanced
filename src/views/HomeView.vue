<template>
  <div class="root">
    <div class="home-grid">
      <LabCard :title="'Лабораторна робота №1'" :href="'/lab1'" />
      <LabCard :title="'Лабораторна робота №2'" :href="'/lab2'" />
      <LabCard :title="'Лабораторна робота №3'" :href="'/lab3'" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LabCard from "@/components/LabCard.vue";

export default defineComponent({
  components: { LabCard },
});
</script>

<style lang="scss">
body {
  background: linear-gradient(125deg, #0d324d, #7f5a83);
}
.root {
  min-height: 100vh;
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  place-content: center;
}
.home-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  max-width: 80%;
  gap: 100px;
}
</style>
