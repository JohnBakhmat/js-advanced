<template>
  <div class="wrap">
    <section>3214</section>
    <basic-wave classes="transform scale-y-[-1]" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BasicWave from "@/components/BasicWave.vue";
export default defineComponent({
  components: {
    BasicWave,
  },
});
</script>
<style lang="scss" scoped>
.wrap {
  scroll-snap-type: y mandatory;
  min-height: 100vh;
}
section {
  scroll-snap-align: center;
  min-height: 100vh;

  &:first-child {
    background: #222;
    color: white;
    display: grid;
    place-items: center;
  }
}
</style>
