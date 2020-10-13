<template>
  <div class="card-item">
    <div class="card-item--image overflow-hidden">
      <img :src="require('~/static/img/' + img)" class="transform transition duration-300 ease-in-out scale-100 hover:scale-105" alt="">
    </div>
    <div class="card-item--detail py-4">
      <div class="card-item--title font-medium text-md md:text-lg my-2 md:my-4">
        <h3>{{ title }}</h3>
      </div>
      <div class="card-item--description text-sm md:text-md font-light my-2 md:my-4">
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss">

</style>
