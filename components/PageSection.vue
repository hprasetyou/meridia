<template>
  <section>
    <slot />
  </section>
</template>

<style lang="scss">
section{
  min-height: 100vh;
  &.section-fullwidth{
    width: 100vw;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
