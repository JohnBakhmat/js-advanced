<script lang="ts" setup>
import { ref } from "vue";

const isOpen = ref(true);
</script>

<template>
  <Teleport to="#modal">
    <div v-if="true" class="modal-backdrop">
      <div class="modal">
        <h1>Title</h1>
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
