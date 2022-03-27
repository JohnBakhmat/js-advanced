<template>
  <div class="dog-select-wrap">
    <h1>{{ label }}</h1>
    <select
      class="dog-select"
      :class="this.class"
      multiple
      size="100px"
      @change="handleSelection($event)"
    >
      <option v-for="(dog, key) in dataset" :key="key">{{ dog }}</option>
    </select>
  </div>
</template>

<script>
export default {
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
  },
  emits: ["select"],
  setup(_, context) {
    const handleSelection = (e) => {
      const selected = Array.from(e.target.selectedOptions).map(
        (option) => option.value
      );
      context.emit("select", selected);
    };

    return {
      handleSelection,
    };
  },
};
</script>

<style lang="scss" scoped>
.dog-select-wrap {
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
.dog-select {
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

  & option {
    border-radius: 10px;
    &:checked {
      background: red;
    }
  }
}
</style>
