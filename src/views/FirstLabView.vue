<template>
  <div>
    <article id="tasks_1-2" class="root">
      <Lab1Input v-model="user" :label="label" />
      <ArticleArrow />
    </article>
    <basic-wave />
    <article id="tasks_3-4" class="root">123421</article>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import Lab1Input from "@/components/Lab1Input.vue";
import ArticleArrow from "@/components/ArticleArrow.vue";
import BasicWave from "@/components/BasicWave.vue";

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
    BasicWave,
  },
});
</script>
<style lang="scss" scoped>
#tasks_3-4 {
  background: #222;
  color: white;
}
</style>
