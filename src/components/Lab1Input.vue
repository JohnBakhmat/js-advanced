<template>
  <div class="group">
    <input
      type="text"
      class="input"
      required
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <label class="label">{{ label }}</label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    label: {
      type: String,
      default: "default",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
});
</script>

<style lang="scss">
$label-x-padding: 10px;
$border-radius-1: 10px;
$border-radius-2: 10px;
@use "sass:math";
.group {
  position: relative;
  .input {
    color: #fff;
    background: #757391;
    font-size: 1.5rem;
    padding: 10px 10px 10px 10px;
    display: block;

    &:focus {
      outline: none;
    }
  }
  .label {
    color: #fff;
    font-size: 1.5rem;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }
  .input:focus ~ .label,
  .input:valid ~ .label {
    top: -10px;
    font-size: 1rem;
    color: #ffffff;
  }

  .input {
    border-radius: $border-radius-1 $border-radius-2 $border-radius-2
      $border-radius-1;
    text-align: end;
  }
  .label {
    right: $label-x-padding;
  }
}
</style>
