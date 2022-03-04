<template>
  <div id="random-breed-modal">
    <div class="text-column">
      <div class="w-full">
        <h1 class="breed-name">{{ breedName }}</h1>
        <div class="subbreed-count">
          <h2>Sub Breeds:</h2>
          <h2>{{ subBreeds.length }}</h2>
        </div>
      </div>
      <ul>
        <li v-for="(breed, index) in subBreeds" :key="index">{{ breed }}</li>
      </ul>
    </div>
    <div>
      <img :src="breedImg" />
    </div>
  </div>
</template>
<script lang="ts">
import axios from "axios";
import { computed, defineComponent, onMounted, onUnmounted, ref } from "vue";

export default defineComponent({
  props: {
    breeds: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const breed = computed(
      () => props.breeds[Math.floor(Math.random() * props.breeds.length)]
    );
    const breedName = computed(() => (breed.value as Array<string>)[0]);
    const subBreeds = computed(() => (breed.value as Array<string>)[1]);
    const breedImg = ref("IMG");

    const fetchBreedImage = () => {
      axios
        .get(`https://dog.ceo/api/breed/${breedName.value}/images`)
        .then((result) => {
          const images = result.data.message;
          breedImg.value = images[Math.floor(Math.random() * images.length)];
        })
        .catch((err: Error) => {
          throw err;
        });
    };
    onMounted(() => {
      fetchBreedImage();
    });

    return {
      breedName,
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
  text-transform: capitalize;
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
  max-height: 50vh;
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
