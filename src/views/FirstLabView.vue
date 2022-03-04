<template>
  <div class="wrap">
    <tasks-one-two />
    <basic-wave />
    <tasks-three-five />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import BasicWave from "@/components/BasicWave.vue";
import TasksOneTwo from "@/components/TasksOneTwo.vue";
import TasksThreeFive from "@/components/TasksThreeFive.vue";
export default defineComponent({
  components: {
    BasicWave,
    TasksOneTwo,
    TasksThreeFive,
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
