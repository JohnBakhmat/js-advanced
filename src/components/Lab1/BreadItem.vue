<template>
  <li class="list-item" @click="handleOpen">
    <p>{{ breed }}</p>
    <p>{{ subBreed.length !== 0 ? `Sub-breeds: ${subBreed.length}` : null }}</p>
  </li>
  <ul class="list-item-content" v-show="isOpen">
    <li v-for="(sb, index) in subBreed" :key="index">
      {{ sb }}
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    breed: String,
    subBreed: Array,
  },
  setup(props) {
    const isOpen = ref(false);
    const handleOpen = () => {
      if (props.subBreed?.length) isOpen.value = !isOpen.value;
    };
    return { isOpen, handleOpen };
  },
});
</script>
<style lang="scss" scoped>
.list-item {
  font-size: 1.25rem;
  background: #000;
  display: flex;
  padding: 20px 30px;
  border-radius: 10px;
  width: 100%;
  text-transform: capitalize;
  justify-content: space-between;
}
.list-item-content {
  list-style-type: disc;
  border-radius: 10px;
  padding: 20px 30px;
  background: #151515;
  text-transform: capitalize;
}
</style>
