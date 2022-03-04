<template>
  <section id="tasks_3-5" class="root">
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
export default defineComponent({
  setup() {
    const breeds = ref([]);

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
      scrollTo,
      breeds,
    };
  },
  components: {
    BreadItem,
  },
});
</script>
<style lang="scss" scoped>
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
