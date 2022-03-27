<template>
  <div class="wrap">
    <section class="dog-select-section">
      <dog-select
        :dataset="dogList"
        @select="handleSelectionChange"
        label="Dog dataset"
      />
      <dog-select :dataset="selectedDogList" label="Selected breads" />
    </section>
    <basic-wave classes="transform scale-y-[-1]" />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import BasicWave from "@/components/BasicWave.vue";
import DogSelect from "@/components/Lab2/DogSelect.vue";
export default {
  components: {
    BasicWave,
    DogSelect,
  },

  setup() {
    const dogList = ref([]);
    const selectedDogList = ref([]);
    const handleSelectionChange = (selected) => {
      selectedDogList.value = selected;
    };
    const fetchDogs = () => {
      axios.get("https://dog.ceo/api/breeds/list/all").then((res) => {
        dogList.value = Object.keys(res.data.message);
      });
    };
    onMounted(() => {
      fetchDogs();
    });
    return {
      dogList,
      selectedDogList,
      handleSelectionChange,
    };
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  scroll-snap-type: y mandatory;
  min-height: 100vh;
}
section {
  scroll-snap-align: center;
  min-height: 100vh;

  &:first-child {
    background: #222;
    color: white;
    display: grid;
    place-items: center;
  }
}
.dog-select-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  padding: 0 50px;
}
</style>
