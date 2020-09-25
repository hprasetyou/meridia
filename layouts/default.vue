<template>
  <div>
    <header-section :height="headerHeight" />
    <div class="page container mx-auto">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import headerSection from '../components/HeaderSection'

export default {
  components: {
    headerSection
  },
  data () {
    return {
      pageYOffset: 0
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
</style>
