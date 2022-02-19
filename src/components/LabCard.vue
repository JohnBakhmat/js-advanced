<template>
  <article class="card-wrap" @click="handleRedirect">
    <h1 class="title">{{ title }}</h1>
  </article>
</template>

<script lang="ts">
import router from "@/router";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      default: "card-title",
    },
    href: {
      type: String,
      default: "/",
    },
  },
  setup(props) {
    const handleRedirect = () => router.push(props.href);
    return {
      handleRedirect,
    };
  },
});
</script>

<style lang="scss" scoped>
.card-wrap {
  padding: 20px;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 20px;
  background: #757391;
  place-content: center;
  display: grid;
  transition: ease all 200ms;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    box-shadow: 0 0 0 5px #a09eb9;
  }
}
.title {
  color: #fff;
  font-size: 1.5rem;
  font-weight: normal;
  font-family: "Roboto";
}
</style>
