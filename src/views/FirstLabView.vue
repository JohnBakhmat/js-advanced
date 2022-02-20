<template>
  <div class="wrap">
    <section id="tasks_1-2" class="root">
      <Lab1Input v-model="user" :label="label" />
      <ArticleArrow @click="scrollTo('tasks_3-5')" />
    </section>
    <basic-wave />
    <section id="tasks_3-5" class="root">Dog API</section>
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
    const scrollTo = (id: string) => {
      document.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth" });
    };
    return {
      label,
      user,
      scrollTo,
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
.wrap {
  scroll-snap-type: y mandatory;
}
section {
  scroll-snap-align: center;
}
#tasks_3-5 {
  background: #222;
  color: white;
}
</style>
