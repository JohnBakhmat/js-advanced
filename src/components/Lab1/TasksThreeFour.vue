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
    <breed-list :breeds="breeds" />
    <div
      class="w-full grid grid-cols-2 gap-[15px] max-h-screen overflow-y-auto"
    >
      <breed-button classes="add-breed-btn" @click="handleAddBreed">
        <i class="fas fa-plus-octagon"></i>
        Add breed
      </breed-button>
      <breed-button classes="remove-breed-btn" @click="handleRemoveBreed">
        <i class="fas fa-trash-alt"></i>
        Remove breed
      </breed-button>
      <breed-button
        classes="random-breed col-span-2"
        @click="handleShuffleBreeds"
      >
        <i class="fas fa-random"></i>
        Shuffle breeds
      </breed-button>
      <div class="col-span-2 w-full">
        <breed-list :breeds="selectedBreeds" />
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import axios from "axios";
import _ from "lodash";
import { defineComponent, onMounted, ref, unref } from "vue";
import BreadItem from "@/components/Lab1/BreadItem.vue";
import BreedButton from "@/components/Lab1/BreedButton.vue";
import AppModal from "@/components/AppModal.vue";
import RandomBreed from "./RandomBreed.vue";
import BreedList from "@/components/Lab1/BreedList.vue";
export default defineComponent({
  setup() {
    const breeds = ref({});
    const selectedBreeds = ref({});
    const isModalOpen = ref(false);

    const getRandomBreed = (data: object) => {
      const randomNumber = Math.floor(
        Math.random() * Object.entries(data).length
      );
      const temp = Object.entries(data)[randomNumber];
      console.log(temp);
      return Object.fromEntries([temp]);
    };
    const handleAddBreed = () => {
      if (Object.keys(selectedBreeds.value).length <= 7) {
        const randomBreed = getRandomBreed(unref(breeds));
        // console.log(randomBreed);
        selectedBreeds.value = { ...selectedBreeds.value, ...randomBreed };
      }
      return;
    };

    const handleRemoveBreed = () => {
      if (Object.keys(selectedBreeds.value).length < 1) return;

      const randomBreed = getRandomBreed(unref(selectedBreeds));
      const key = Object.entries(randomBreed)[0][0].toString();
      const { [key]: removed, ...rest } = selectedBreeds.value as any;
      selectedBreeds.value = rest;
    };

    const handleShuffleBreeds = () => {
      const array = Object.entries(selectedBreeds.value);
      const shuffled = _.shuffle(array);
      selectedBreeds.value = Object.fromEntries(shuffled);
    };

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
      handleRemoveBreed,
      handleAddBreed,
      scrollTo,
      breeds,
      handleRandomBreedClick,
      isModalOpen,
      handleModalClose,
      getRandomBreedWithSubBreeds,
      selectedBreeds,
      handleShuffleBreeds,
    };
  },
  components: {
    BreedButton,
    AppModal,
    RandomBreed,
    BreedList,
  },
});
</script>
<style lang="scss" scoped>
#tasks_3-5 {
  background: #222;
  color: white;
  display: grid;
  column-gap: 15px;
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
.add-breed-btn {
  background: #1d8eba;
}
.remove-breed-btn {
  background: #a72c2c;
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
