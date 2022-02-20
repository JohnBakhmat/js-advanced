<template>
  <div class="wrap">
    <section id="tasks_1-2" class="root">
      <Lab1Input v-model="user" :label="label" />
      <ArticleArrow @click="scrollTo('tasks_3-5')" />
    </section>
    <basic-wave />
    <section id="tasks_3-5" class="root">
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
    };
  },
  components: {
    Lab1Input,
    ArticleArrow,
    BasicWave,
    BreadItem,
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
}
.breed-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 100vh;
  max-width: 40vw;
  width: 100%;
  align-self: center;
  overflow-y: auto;
}
</style>
