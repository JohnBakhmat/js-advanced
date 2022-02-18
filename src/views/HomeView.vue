<template>
  <div class="root">
    <div class="wrap">
      <LabCard />
      <LabCard />
      <LabCard />
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

<style lang="scss" scoped>
.root {
  background: linear-gradient(125deg, #0d324d, #7f5a83);
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
}
.wrap {
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 100px;
  max-width: 80vw;
  width: 100%;
}
</style>
