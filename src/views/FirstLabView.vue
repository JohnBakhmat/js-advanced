<template>
  <div class="root">
    <Lab1Input
      :label="label"
      :onChange="handleChange"
      :value="user === 'незнакомец' ? null : user"
    />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import Lab1Input from "@/components/Lab1Input.vue";

export default defineComponent({
  setup() {
    const user = ref("незнакомец");
    const label = computed(() => `Привет, ${user.value}`);
    const handleChange = (event: any) => {
      const data = event.target.value;
      user.value = data || "незнакомец";
    };
    return {
      label,
      user,
      handleChange,
    };
  },
  components: {
    Lab1Input,
  },
});
</script>
