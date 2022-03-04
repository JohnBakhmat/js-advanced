<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<template>
  <Teleport to="#modal">
    <div v-if="isOpen" class="modal-backdrop">
      <div class="modal">
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
  background: #0002;
}
.modal {
  position: inherit;
  background: #000;
  max-width: 60vw;
  width: 100%;
  min-height: 30%;
  max-height: 70%;
  border-radius: 20px;
  display: grid;
  padding: 20px;

  h1 {
    font-size: 1.75rem;
    color: #fff;
  }
}
</style>
