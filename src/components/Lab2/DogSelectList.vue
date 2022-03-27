<template>
  <div class="dog-select-list-wrap">
    <h1>{{ label }}</h1>
    <ul class="dog-select-list">
      <dog-select-list-item
        v-for="(item, index) in dataset"
        :key="index"
        :data="item"
        :isSelectable="isSelectable"
        @select="handleSelectionChange"
      />
    </ul>
  </div>
</template>

<script>
import DogSelectListItem from "./DogSelectListItem.vue";
export default {
  components: { DogSelectListItem },
  props: {
    label: {
      type: String,
      default: "Label",
    },
    class: {
      type: String,
      default: "",
    },
    dataset: {
      type: Array,
    },
    isSelectable: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["select"],
  setup(props, ctx) {
    const handleSelectionChange = (data) => {
      if (!props.isSelectable) return;
      ctx.emit("select", data);
    };
    return {
      handleSelectionChange,
    };
  },
};
</script>

<style lang="scss">
.dog-select-list-wrap {
  text-align: center;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: space-evenly;
  gap: 20px;

  & > h1 {
    font-size: 2rem;
    color: rgb(17, 187, 187);
    font-family: "Futura";
    font-weight: 600;
  }
}
.dog-select-list {
  color: #fff;
  padding: 10px;
  min-height: 50vh;
  max-height: 90vh;
  height: 100%;
  width: 100%;
  background: #000;
  border-radius: 10px;
  font-size: 1.5rem;
  text-align: center;
  text-transform: capitalize;
  overflow: scroll;
  gap: 5px;
  display: flex;
  flex-direction: column;
}
</style>
