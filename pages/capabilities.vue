<template>
  <our-service class="my-12 md:my-0" :services="services" />
</template>
<script>
import ourService from '../components/pageSection/OurService'
import data from '../components/data/data'

export default {
  components: {
    ourService
  },
  computed: {
    services () {
      return data.projects.map((item) => {
        item.link = 'contacts'
        return item
      })
    }
  },
  mounted () {
    this.$store.commit('SET_HEADER_THEME', 'light')
  }
}
</script>
