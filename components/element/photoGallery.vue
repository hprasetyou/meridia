<template>
  <div>
    <div v-if="images.length > 0" v-show="showLbImage" class="lightbox-image fixed flex inset-0 z-50">
      <img :src="require('~/static/img/' + images[lbImage].img)" :class="`m-auto ${showLbImage ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 ease-in-out`" alt="">
      <div class="lightbox-image--nav">
        <span class="lightbox-image--next" @click="lbImage = (lbImage + 1 == images.length) ? 0 : lbImage + 1" />
        <span class="lightbox-image--prev" @click="lbImage = ((lbImage - 1) < 0) ? images.length - 1 : lbImage - 1" />
      </div>
      <div class="lightbox-image--close" @click="showLbImage=false">
        <span />
        <span />
      </div>
    </div>
    <div class="flex flex-wrap">
      <div v-for="(image, i) in images" :key="i" :class="generateClass(image.attr)" alt="" @click="setLightImage(i)">
        <img :src="require('~/static/img/' + image.img)" class="mt-auto" alt="">
      </div>
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
      lbImage: 0,
      showLbImage: false
    }
  },
  methods: {
    generateClass (attr) {
      const cClass = {
        flex: true,
        'pb-3': true,
        'md:pb-0': true
      }
      for (const key in attr) {
        switch (key) {
          case 'width':
            cClass[`md:w-${attr[key]}`] = true
            break
          case 'left':
            cClass[`md:ml-${attr[key]} md:-mr-${attr[key]}`] = true
            break
          case 'right':
            cClass[`md:mr-${attr[key]} md:-ml-${attr[key]}`] = true
            break
          case 'top':
            cClass[`md:mt-${attr[key]} md:-mb-${attr[key]}`] = true
            break
          case 'bottom':
            cClass[`md:mb-${attr[key]} md:-mt-${attr[key]}`] = true
            break
          case 'class':
            cClass[`${attr[key]}`] = true
            break
          case 'zIndex':
            cClass[`md:z-${attr[key]}`] = true
            break
        }
      }
      return cClass
    },
    setLightImage (i) {
      this.lbImage = i
      this.showLbImage = true
    }
  }
}
</script>
<style lang="scss">
  .lightbox-image{
    img{
      max-width: 90%;
      max-height: 95%;
    }
    &::before{
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: block;
      background: #00000094;
      z-index: -1;
    }
  }
  .lightbox-image--close{
    width: 30px;
    height: 30px;
    position: absolute;
    top: 30px;
    right: 30px;
    span{
      display: block;
      width: 40px;
      height: 2px;
      background: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      cursor: pointer;
      transform: translate(-50%, -50%) rotate(45deg);
      &:last-child{
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
  }
  .lightbox-image{
    &--next,
    &--prev{
      display: block;
      width: 100px;
      top: 0;
      bottom: 0;
      position: absolute;
      &::before{
        display: block;
        content: '';
        width: 30px;
        height: 30px;
        border: 2px solid #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
      }
    }
    &--prev{
      left: 0;
      &::before{
        border-top-color: transparent;
        border-right-color: transparent;
      }
    }
    &--next{
      right: 0;
      &::before{
        border-bottom-color: transparent;
        border-left-color: transparent;
      }
    }
  }
</style>
