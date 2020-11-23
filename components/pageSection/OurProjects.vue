<template>
  <page-section class="section-fullwidth">
    <div class="container mx-auto">
      <h2 class="font-extra-light md:text-subheader subheader text-5xl mb-5">
        Projects.
      </h2>
      <ul class="font-light flex flex-wrap project-type">
        <li v-for="(item, i) in services" :key="i" class="uppercase tracking-widest">
          <a href="#" :class="activeService == i ? 'text-indigo-600' : ''" @click.prevent="selectTab(i)">{{ item.title }}</a>
        </li>
      </ul>
    </div>
    <div :class="`${show ? 'opacity-100':'opacity-0'} transform transition duration-300 container mx-auto mt-8`">
      <template v-if="currentService">
        <div v-if="showAsGrid" class="flex flex-wrap -mx-2 md:-mx-4 my-16">
          <div v-for="(item, i) in currentService.works" :key="i" class="w-1/3 px-2 md:px-4 mb-4 md:mb-8">
            <nuxt-link :to="`/project/${item.slug}`">
              <img-card :img="item.img" :title="item.title" :description="item.description" />
            </nuxt-link>
          </div>
        </div>
        <client-only v-else>
          <div style="max-width: 600px">
            <carousel :navigate-to="carouselIndex" :per-page="1" :loop="true" :pagination-enabled="false">
              <slide v-for="(item, i) in currentService.works" :key="i">
                <div class="xl:pr-8 font-extra-light" @click="carouselIndex = i">
                  <div class="our-work--img my-8">
                    <img :src="require('~/static/img/' + (item.imgSlider ? item.imgSlider : item.img))" class="w-full" alt="">
                  </div>
                  <h3 class="text-4xl mb-4">
                    {{ currentService.title }}
                  </h3>
                  <p class="mb-3">
                    {{ item.title }} - {{ item.description }}
                  </p>
                  <nuxt-link class="underline hover:text-indigo-600" :to="`/project/${item.slug}`">
                    See More
                  </nuxt-link>
                </div>
              </slide>
            </carousel>
          </div>
        </client-only>
      </template>
    </div>
  </page-section>
</template>
<script>
import pageSection from '../PageSection'
import imgCard from '../element/imgCard'

export default {
  components: {
    pageSection,
    imgCard
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
    },
    showAsGrid: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      carouselIndex: 0,
      activeService: 0,
      show: true
    }
  },
  computed: {
    currentService () {
      return this.services[this.activeService]
    }
  },
  mounted () {
    this.activeService = this.selected
  },
  methods: {
    selectTab (index) {
      this.show = false
      setTimeout(() => {
        this.activeService = index
        this.carouselIndex = 0
        this.show = true
      }, 300)
    }
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
