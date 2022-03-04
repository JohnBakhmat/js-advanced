<template>
  <button class="btn" :class="classes" type="button">
    <slot />
  </button>
</template>
<script>
export default {
  props: {
    classes: String,
    label: String,
  },
};
</script>
