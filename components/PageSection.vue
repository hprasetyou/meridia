<template>
  <section>
    <slot />
  </section>
</template>

<style lang="scss">
section{
  $container-size: 1080px;
  min-height: 100vh;
  @media(min-width: $container-size){
    &.section-fullwidth{
      width: 100vw;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
