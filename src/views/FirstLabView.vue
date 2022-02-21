<template>
  <AppModal />
  <div class="wrap">
    <section id="tasks_1-2" class="root">
      <Lab1Input v-model="user" :label="label" />
      <ArticleArrow @click="scrollTo('tasks_3-5')" />
    </section>
    <basic-wave />
    <section id="tasks_3-5" class="root">
      <div>
        <breed-button classes="random-breed" @click="handleRandomBreedClick">
          <i class="fas fa-paw"></i>
          Random breed
        </breed-button>
      </div>
      <ul class="breed-list">
        <bread-item
          v-for="(subBreeds, breed, index) in breeds"
          :key="index"
          :subBreed="subBreeds"
          :breed="breed"
        />
      </ul>
    </section>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import Lab1Input from "@/components/Lab1Input.vue";
import ArticleArrow from "@/components/ArticleArrow.vue";
import BasicWave from "@/components/BasicWave.vue";
import axios from "axios";
import BreadItem from "@/components/BreadItem.vue";
import BreedButton from "@/components/BreedButton.vue";
import AppModal from "@/components/AppModal.vue";
export default defineComponent({
  setup() {
    //Refs
    const user = ref("");
    const breeds = ref([]);

    //Computed
    const label = computed(
      () => `Привет, ${user.value.length ? user.value : "незнакомец"}`
    );

    //Functions
    const scrollTo = (id: string) => {
      document.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth" });
    };

    const handleRandomBreedClick = () => {
      console.log("asdf");
    };
    const fetchBreeds = () => {
      axios.get("https://dog.ceo/api/breeds/list/all").then((res) => {
        breeds.value = res.data.message;
      });
    };

    //Hooks
    onMounted(() => {
      fetchBreeds();
    });

    return {
      label,
      user,
      scrollTo,
      breeds,
      handleRandomBreedClick,
    };
  },
  components: {
    Lab1Input,
    ArticleArrow,
    BasicWave,
    BreadItem,
    BreedButton,
    AppModal,
  },
});
</script>
<style lang="scss" scoped>
.wrap {
  scroll-snap-type: y mandatory;
}
section {
  scroll-snap-align: center;
}
#tasks_3-5 {
  background: #222;
  color: white;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr 1fr;
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
