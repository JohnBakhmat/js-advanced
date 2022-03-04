<template>
  <app-modal :isOpen="isModalOpen" @close="handleModalClose">
    <random-breed :breeds="getRandomBreedWithSubBreeds()" />
  </app-modal>
  <section id="tasks_3-5" class="root">
    <div>
      <breed-button classes="random-breed" @click="handleRandomBreedClick">
        <i class="fas fa-paw"></i>
        Random breed
      </breed-button>
    </div>
    <ul class="breed-list">
      <div v-show="breeds.length === 0" class="text-white">Loading...</div>
      <bread-item
        v-for="(subBreeds, breed, index) in breeds"
        :key="index"
        :subBreed="subBreeds"
        :breed="breed"
      />
    </ul>
  </section>
</template>
<script lang="ts">
import axios from "axios";
import { defineComponent, onMounted, ref } from "vue";
import BreadItem from "@/components/BreadItem.vue";
import BreedButton from "@/components/BreedButton.vue";
import AppModal from "@/components/AppModal.vue";
import RandomBreed from "./RandomBreed.vue";

export default defineComponent({
  setup() {
    const breeds = ref([]);
    const isModalOpen = ref(false);
    const handleModalClose = () => {
      isModalOpen.value = !isModalOpen.value;
    };
    //Functions
    const scrollTo = (id: string) => {
      document.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth" });
    };
    const fetchBreeds = () => {
      axios.get("https://dog.ceo/api/breeds/list/all").then((res) => {
        breeds.value = res.data.message;
      });
    };
    const handleRandomBreedClick = () => {
      isModalOpen.value = !isModalOpen.value;
    };

    const getRandomBreedWithSubBreeds = () =>
      Object.entries(breeds.value).filter(
        ([key, value]) => (value as []).length > 0
      );

    //Hooks
    onMounted(() => {
      fetchBreeds();
    });

    return {
      scrollTo,
      breeds,
      handleRandomBreedClick,
      isModalOpen,
      handleModalClose,
      getRandomBreedWithSubBreeds,
    };
  },
  components: {
    BreadItem,
    BreedButton,
    AppModal,
    RandomBreed,
  },
});
</script>
<style lang="scss" scoped>
#tasks_3-5 {
  background: #222;
  color: white;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
}
.breed-list {
  grid-column: 2;
  display: grid;
  flex-direction: column;
  gap: 15px;
  max-height: 100vh;
  max-width: 40vw;
  width: 100%;
  align-self: center;
  overflow-y: auto;
}

.btn {
  background: grey;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 1.5rem;
}
.random-breed {
  background: #008864;
}
//Easter egg
.random-breed-cursed {
  font-weight: bolder;
  background: center / cover no-repeat
    url("https://media.wired.co.uk/photos/606d9c691e0ddb19555fb809/16:9/w_2992,h_1683,c_limit/dog-unsolicited.jpg");
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  color: black;
}
</style>
