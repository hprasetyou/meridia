<template>
  <div>
    <div class="flex flex-wrap">
      <div v-for="(image, i) in images" :key="i" :class="'flex' + generateClass(image.attr)" alt="">
        <img :src="require('~/static/img/' + image.img)" class="mt-auto" alt="">
      </div>
    </div>
    <div v-if="showImage" class="big-image">
      <img src="" alt="">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    images: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      showImage: false
    }
  },
  methods: {
    generateClass (attr) {
      let wClass = ''
      for (const key in attr) {
        switch (key) {
          case 'width':
            wClass += ` md:w-${attr[key]}`
            break
          case 'left':
            wClass += ` md:ml-${attr[key]} md:-mr-${attr[key]}`
            break
          case 'right':
            wClass += ` md:mr-${attr[key]} md:-ml-${attr[key]}`
            break
          case 'top':
            wClass += ` md:mt-${attr[key]} md:-mb-${attr[key]}`
            break
          case 'bottom':
            wClass += ` md:mb-${attr[key]} md:-mt-${attr[key]}`
            break
          case 'class':
            wClass += ` ${attr[key]}`
            break
          case 'zIndex':
            wClass += ` md:z-${attr[key]}`
            break
        }
      }
      return wClass
    }
  }
}
</script>
