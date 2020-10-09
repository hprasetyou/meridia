<template>
  <div>
    <our-projects :show-as-grid="true" class="my-16" :selected="2" :services="services" />
  </div>
</template>
<script>
import data from '../components/data/data'
import ourProjects from '../components/pageSection/OurProjects'

export default {
  components: {
    ourProjects
  },
  data () {
    return {
      services: data.projects
    }
  },
  mounted () {
    this.$store.commit('SET_HEADER_THEME', 'light')
  }
}
</script>
