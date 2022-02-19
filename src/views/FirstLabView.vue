<template>
  <div>
    <article id="tasks_1-2" class="root">
      <Lab1Input v-model="user" :label="label" />
      <ArticleArrow />
    </article>
    <article>123421</article>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import Lab1Input from "@/components/Lab1Input.vue";
import ArticleArrow from "@/components/ArticleArrow.vue";

export default defineComponent({
  setup() {
    const user = ref("");
    const label = computed(
      () => `Привет, ${user.value.length ? user.value : "незнакомец"}`
    );
    return {
      label,
      user,
    };
  },
  components: {
    Lab1Input,
    ArticleArrow,
  },
});
</script>
<style lang="scss" scoped></style>
