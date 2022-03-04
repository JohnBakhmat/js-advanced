<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["close"],
  setup(_, ctx) {
    const handleClickOutside = () => {
      ctx.emit("close");
    };
    return {
      handleClickOutside,
    };
  },
});
</script>

<template>
  <Teleport to="#modal">
    <div v-if="isOpen" class="modal-backdrop">
      <div class="modal" v-click-away="handleClickOutside">
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<style lang="scss">
.modal-backdrop {
  z-index: 999;
  position: fixed;
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
  background: #0008;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
}
.modal {
  position: inherit;
  background: #000;
  max-width: 60vw;
  width: 100%;
  min-height: 40vh;
  max-height: 70vh;
  border-radius: 20px;
  display: grid;
  padding: 20px;
  box-shadow: 0 0 0 2px rgb(70, 70, 70);
  & h1 {
    font-size: 1.75rem;
    color: #fff;
  }
}
</style>
