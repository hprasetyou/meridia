<template>
  <div>
    <header-section :height="headerHeight" :menu="menu" />
    <div class="page container mx-auto">
      <Nuxt />
    </div>
    <footer-section :menu="menu" :social="social" />
  </div>
</template>

<script>
import headerSection from '../components/HeaderSection'
import footerSection from '../components/FooterSection'

export default {
  components: {
    headerSection,
    footerSection
  },
  data () {
    return {
      pageYOffset: 0,
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
          url: '#'
        },
        {
          text: 'Behance',
          type: 'behance',
          url: '#'
        },
        {
          text: 'Dribble',
          type: 'dribble',
          url: '#'
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
  methods: {
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
