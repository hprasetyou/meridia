<template>
  <page-section class="section-fullwidth bg-gray-900 md:py-32 text-white">
    <div class="container mx-auto">
      <h2 class="font-extra-light subheader text-5xl">
        Projects.
      </h2>
      <ul class="flex flex-wrap project-type">
        <li v-for="(item, i) in services" :key="i" class="uppercase">
          <a href="#" :class="activeService == i ? 'text-gray-400' : 'text-white'" @click.prevent="activeService = i; carouselIndex = 0">{{ item.title }}</a>
        </li>
      </ul>
    </div>
    <div class="container mx-auto mt-8">
      <client-only>
        <carousel :navigate-to="carouselIndex" :per-page="1" :loop="true" :pagination-enabled="false">
          <slide v-for="(item, i) in currentService.works" :key="i">
            <div class="pr-8" @click="carouselIndex = i">
              <div class="our-work--img mb-4">
                <img :src="require('~/assets/img/pages/' + item.img)" alt="">
              </div>
              <h3 class="text-4xl font-light mb-4">
                {{ item.title }}
              </h3>
              <p class="mb-3">
                {{ item.description }}
              </p>
              <a :href="item.link" class="underline hover:text-gray-300"> See More </a>
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
  data () {
    return {
      carouselIndex: 0,
      services: [{
        title: 'Web Design',
        works: []
      },
      {
        title: 'Mobile App Design',
        works: []
      },
      {
        title: 'Logo Design',
        works: []
      },
      {
        title: 'Social Media',
        works: []
      },
      {
        title: 'Photo Product',
        works: [
          {
            title: 'Photo Product',
            description: 'HeHe Coffee - a Coffee shop',
            img: 'works-photo-1.jpg',
            link: ''
          },
          {
            title: 'Photo Product',
            description: 'Haha Coffee - a Coffee shop',
            img: 'works-photo-1.jpg',
            link: ''
          },
          {
            title: 'Photo Product',
            description: 'Hoho Coffee - a Coffee shop',
            img: 'works-photo-1.jpg',
            link: ''
          }
        ]
      },
      {
        title: 'Visual Identity Design'
      }],
      activeService: 4
    }
  },
  computed: {
    currentService () {
      return this.services[this.activeService]
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
