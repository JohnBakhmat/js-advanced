<template>
  <div class="wrap">
    <section class="dog-select-section">
      <dog-select
        :dataset="dogList"
        @select="handleSelectionChange"
        label="Dog dataset"
      />
      <dog-select :dataset="selectedDogSelectArray" label="Selected breads" />
    </section>
    <basic-wave classes="transform scale-y-[-1]" />
    <section class="dog-select-section">
      <dog-select-list
        :dataset="dogList"
        :isSelectable="true"
        :label="'Dog dataset'"
        @select="handleSelectListChange"
      />
      <dog-select-list :dataset="selectedDogListArray" label="Selected dogs" />
    </section>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import BasicWave from "@/components/BasicWave.vue";
import DogSelect from "@/components/Lab2/DogSelect.vue";
import DogSelectList from "@/components/Lab2/DogSelectList.vue";
export default {
  components: {
    BasicWave,
    DogSelect,
    DogSelectList,
  },

  setup() {
    const dogList = ref([]);
    const selectedDogSelectArray = ref([]);
    const selectedDogListArray = ref([]);
    const handleSelectionChange = (selected) => {
      selectedDogSelectArray.value = selected;
    };
    const handleSelectListChange = (selected) => {
      const current = selectedDogListArray.value;
      if (current.includes(selected)) {
        current.splice(current.indexOf(selected), 1);
      } else {
        current.push(selected);
      }
      selectedDogListArray.value = current.sort();
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
      selectedDogListArray,
      selectedDogSelectArray,
      handleSelectionChange,
      handleSelectListChange,
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
