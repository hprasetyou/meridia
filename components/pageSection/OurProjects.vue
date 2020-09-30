<template>
  <page-section class="section-fullwidth bg-gray-900 md:py-32 py-8 xl:py-48 text-white">
    <div class="container mx-auto">
      <h2 class="font-extra-light md:text-subheader subheader text-5xl mb-5">
        Projects.
      </h2>
      <ul class="font-light flex flex-wrap project-type">
        <li v-for="(item, i) in services" :key="i" class="uppercase tracking-widest">
          <a href="#" :class="activeService == i ? 'text-indigo-600' : 'text-white'" @click.prevent="activeService = i; carouselIndex = 0">{{ item.title }}</a>
        </li>
      </ul>
    </div>
    <div class="container mx-auto mt-8">
      <client-only>
        <carousel v-if="currentService" :navigate-to="carouselIndex" :per-page="1" :loop="true" :pagination-enabled="false">
          <slide v-for="(item, i) in currentService.works" :key="i">
            <div class="pr-8 font-extra-light" @click="carouselIndex = i">
              <div class="our-work--img my-8">
                <img :src="require('~/assets/img/pages/' + item.img)" class="w-full" alt="">
              </div>
              <h3 class="text-4xl mb-4">
                {{ item.title }}
              </h3>
              <p class="mb-3">
                {{ item.description }}
              </p>
              <nuxt-link class="underline hover:text-indigo-600" :to="`/project/${item.slug}`">
                See More
              </nuxt-link>
            </div>
          </slide>
        </carousel>
      </client-only>
    </div>
  </page-section>
</template>
<script>
import pageSection from '../PageSection'

export default {
  components: {
    pageSection
  },
  props: {
    services: {
      type: Array,
      default () {
        return []
      }
    },
    selected: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      carouselIndex: 0,
      activeService: 0
    }
  },
  computed: {
    currentService () {
      return this.services[this.activeService]
    }
  },
  mounted () {
    this.activeService = this.selected
  }
}
</script>
<style lang="scss" scoped>
.project-type{
  li:not(:first-child):before{
    content: ' - ';
    margin: 0 10px;
  }
}
</style>
<style>
@media (min-width: 1080px) {
  .VueCarousel .VueCarousel-wrapper{
    overflow: initial;
  }
}
</style>
