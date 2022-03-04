<template>
  <div id="random-breed-modal">
    <div class="text-column">
      <h1 class="breed-name">Title</h1>

      <ul>
        <li v-for="(breed, index) in subBreeds" :key="index">Hound</li>
      </ul>
    </div>
    <img src="https://images.dog.ceo/breeds/mix/Cali-Mini-Labradoodle.jpg" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const subBreeds = new Array(50);
    return {
      subBreeds,
    };
  },
});
</script>

<style lang="scss" scoped>
#random-breed-modal {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  width: 100%;
  height: 100%;
  justify-items: left;
}
.text-column {
  width: 100%;
  display: grid;
  gap: 20px;
}
.breed-name {
  text-align: center;
  place-self: center;
}
img {
  object-fit: cover;
  border-radius: 20px;
  height: 100%;
}
ul {
  max-height: 50vh;
  overflow: auto;
  color: white;
  list-style-type: disc;
  border-radius: 10px;
  padding: 20px 30px;
  background: #151515;
  text-transform: capitalize;
}
</style>
