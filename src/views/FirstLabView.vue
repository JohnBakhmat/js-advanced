<template>
  <div class="wrap">
    <tasks-one-two />
    <basic-wave />
    <tasks-three-four />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import BasicWave from "@/components/BasicWave.vue";
import TasksOneTwo from "@/components/Lab1/TasksOneTwo.vue";
import TasksThreeFour from "@/components/Lab1/TasksThreeFour.vue";
export default defineComponent({
  components: {
    BasicWave,
    TasksOneTwo,
    TasksThreeFour,
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
</style>
