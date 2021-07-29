<template>
  <div>
    <page-section class="section-fullwidth bg-gray-900 min-h-0 md:-mt-32 md:min-h-screen xl:h-screen">
      <div class="container mx-auto">
        <div class="flex banner flex-row mb-4 h-full">
          <div class="w-5/12 md:w-1/2 px-4 flex">
            <div class="banner--img my-auto mt-40 ml-auto">
              <img src="~/static/img/iphone.png">
            </div>
          </div>
          <div class="w-7/12 md:w-1/2 text-white flex">
            <div class="banner--text my-auto xl:pb-48">
              <h1 class="block mb-8 font-extra-light break-word leading-none text-3xl">
                Design and development for brands.
              </h1>
              <primary-button href="#contact">
                Lets talk
              </primary-button>
            </div>
          </div>
        </div>
      </div>
    </page-section>
    <our-service id="our-service" :services="services" />
    <our-projects class="bg-gray-900 md:py-32 py-8 xl:py-48 px-4 md:px-0 text-white" :services="projects" :selected="0" />
    <page-section id="contact" class="flex flex-col xl:h-screen section-fullwidth">
      <div class="container mx-auto h-full">
        <div class="flex h-full">
          <contact-us class="w-full" />
        </div>
      </div>
    </page-section>
  </div>
</template>

<script>
import pageSection from '../components/PageSection'
import ourProjects from '../components/pageSection/OurProjects'
import ourService from '../components/pageSection/OurService'
import contactUs from '../components/pageSection/ContactUs'
import primaryButton from '../components/element/primaryButton'
import data from '../components/data/data'

export default {
  components: {
    pageSection,
    ourProjects,
    ourService,
    contactUs,
    primaryButton
  },
  data () {
    return {
      projects: data.projects
    }
  },
  computed: {
    services () {
      return this.projects.map((item) => {
        item.link = '#contact'
        return item
      })
    }
  },
  mounted () {
    this.$store.commit('SET_HEADER_THEME', 'dark')
  }
}
</script>
<style lang="scss" scoped>
@media(min-width: 768px){
  .banner--img{
    position: relative;
    height: 100%;
    img{
      height: 100vh;
    }
  }
  .banner--text{
    h1{
      font-size: 70px;
    }
    @media(min-width: 1440px){
      h1{
        font-size: 94px;
      }
    }
  }
}
</style>
