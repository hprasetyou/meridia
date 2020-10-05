<template>
  <div>
    <header-section :height="headerHeight" :menu="menu" />
    <div class="page container mx-auto">
      <Nuxt v-if="!error" @error="onError" />
      <error v-else :title="error == 404 ? 'Page Not Found' : 'An Error has Occured'" />
    </div>
    <footer-section :menu="menu" :social="social" />
  </div>
</template>

<script>
import headerSection from '../components/HeaderSection'
import footerSection from '../components/FooterSection'
import error from '../components/pageSection/error/error'

export default {
  components: {
    headerSection,
    footerSection,
    error
  },
  data () {
    return {
      pageYOffset: 0,
      error: false,
      menu: [
        {
          text: 'Projects',
          link: '/projects'
        },
        {
          text: 'Capabilities',
          link: '/capabilities'
        },
        {
          text: 'About',
          link: '/about'
        },
        {
          text: 'Contacts',
          link: '/contact'
        }
      ],
      social: [
        {
          text: 'Instagram',
          type: 'instagram',
          link: 'https://www.instagram.com/meridia.studio/'
        },
        {
          text: 'Behance',
          type: 'behance',
          link: 'https://www.behance.net/meridiastudio'
        },
        {
          text: 'Dribble',
          type: 'dribble',
          link: 'https://dribbble.com/meridiastudio'
        }
      ]
    }
  },
  computed: {
    headerHeight () {
      return this.pageYOffset > 100 ? 'h-20' : 'h-24'
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted () {
    this.error = false
  },
  methods: {
    onError (code) {
      this.error = 404
    },
    handleScroll () {
      // Your scroll handling here
      this.pageYOffset = window.pageYOffset
    }
  }
}
</script>

<style>
body{
  max-width: 100%;
  overflow-x: hidden;
}
.scrollbar-track-y{
  width: 4px !important;
  z-index: 999 !important;
}
</style>
