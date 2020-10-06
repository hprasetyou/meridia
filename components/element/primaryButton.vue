<template>
  <a
    class="bg-gradient-to-r primary-button from-indigo-600 to-indigo-800 overflow-hidden mx-auto py-4 rounded-3rem px-12 relative mt-8"
    @click="$emit('click', $event);"
  >
    <span style="z-index:2" class="text-white relative text-sm md:text-lg font-medium">
      <slot />
    </span>
    <span class="bg-gradient-to-l from-indigo-600 opacity-0 to-indigo-800 inset-0 rounded-3rem transition-all opacity-0 duration-500 ease-in-out block absolute w-full h-full" />
  </a>
</template>
<style lang="scss">
  .primary-button:hover > span:last-child{
    opacity: 1;
  }
</style>
