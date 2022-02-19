<template>
  <i class="fas fa-arrow-circle-down arrow"></i>
</template>

<style lang="scss">
.arrow {
  position: absolute;
  bottom: 10px;
  font-size: 3rem;
  color: #fff;
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
</style>
