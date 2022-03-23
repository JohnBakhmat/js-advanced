<template>
  <section id="tasks_1-2" class="root">
    <Lab1Input v-model="user" :label="label" />
    <ArticleArrow @click="scrollTo('tasks_3-5')" />
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import Lab1Input from "@/components/Lab1/Lab1Input.vue";
import ArticleArrow from "@/components/ArticleArrow.vue";
export default defineComponent({
  setup() {
    const user = ref("");
    const label = computed(
      () => `Привет, ${user.value.length ? user.value : "незнакомец"}`
    );

    return {
      user,
      label,
    };
  },
  components: {
    Lab1Input,
    ArticleArrow,
  },
});
</script>
