<template>
  <div id="random-breed-modal">
    <div class="text-column">
      <h1 class="breed-name">{{ breed }}</h1>
      <div class="subbreed-count">
        <h2>Sub Breeds:</h2>
        <h2>{{ subBreeds.length }}</h2>
      </div>

      <ul>
        <li v-for="(breed, index) in subBreeds" :key="index">Hound</li>
      </ul>
    </div>
    <img :src="breedImg" />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const breed = ref("Breed");
    const subBreeds = new Array(50);
    const breedImg = computed(() => {
      return "https://images.dog.ceo/breeds/mix/Cali-Mini-Labradoodle.jpg";
    });
    return {
      breed,
      subBreeds,
      breedImg,
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
  color: white;
}
.text-column {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}
.subbreed-count {
  width: 100%;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 10px;
  h2 {
    font-size: 1.25rem;
    &:last-child {
      font-weight: 700;
      font-size: 1.75rem;
      justify-self: end;
    }
  }
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
  list-style-type: disc;
  border-radius: 10px;
  padding: 20px 30px;
  background: #151515;
  text-transform: capitalize;
}
</style>
