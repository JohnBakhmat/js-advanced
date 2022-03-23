<template>
  <ul class="breed-list">
    <div v-show="breeds.length === 0" class="text-white">Loading...</div>

    <bread-item
      v-for="(subBreeds, breed, index) in breeds"
      :key="index"
      :subBreed="subBreeds"
      :breed="breed"
    />
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BreadItem from "@/components/Lab1/BreadItem.vue";
export default defineComponent({
  props: {
    breeds: {
      type: Array,
    },
  },
  setup() {
    return {};
  },
  components: {
    BreadItem,
  },
});
</script>
<style lang="scss" scoped>
.breed-list {
  grid-column: 3;
  display: grid;
  flex-direction: column;
  gap: 15px;
  max-height: 100vh;
  max-width: 40vw;
  width: 100%;
  align-self: center;
  overflow-y: auto;
}
</style>
