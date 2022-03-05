<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    :class="classes"
  >
    <path
      :fill="fill"
      fill-opacity="1"
      d="M0,256L48,234.7C96,213,192,171,288,133.3C384,96,480,64,576,53.3C672,43,768,53,864,96C960,139,1056,213,1152,229.3C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    ></path>
  </svg>
</template>
<script>
export default {
  props: {
    fill: {
      type: String,
      default: "#222",
    },
    classes: {
      type: String,
      default: "",
    },
  },
};
</script>
