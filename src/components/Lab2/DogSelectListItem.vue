<template>
  <li
    class="dog-select-list-item"
    :class="[isSelected && 'selected', isSelectable && 'selectable']"
    @click="handleSelect(data)"
  >
    {{ data }}
  </li>
</template>

<style lang="scss">
.dog-select-list-item {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 200ms ease-in;
  &.selectable:hover {
    background-color: teal;
    color: #fff;
  }
}
.selected {
  background-color: purple;
}
</style>
<script>
import { ref } from "@vue/reactivity";
export default {
  emits: ["select"],
  props: {
    data: {
      type: String,
      default: "",
    },
    isSelectable: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    const isSelected = ref(false);

    const handleSelect = (data) => {
      if (!props.isSelectable) return;
      ctx.emit("select", data);
      isSelected.value = !isSelected.value;
    };
    return {
      isSelected,
      handleSelect,
    };
  },
};
</script>
