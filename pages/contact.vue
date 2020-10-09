<template>
  <div class="mt-16 mb-32 w-full">
    <h1 class="text-6xl mb-5 md:mb-16 font-extra-light">
      Contact Us
    </h1>
    <contact-us class="w-full" />
  </div>
</template>
<script>
import contactUs from '../components/pageSection/ContactUs'

export default {
  components: {
    contactUs
  },
  mounted () {
    this.$store.commit('SET_HEADER_THEME', 'light')
  }
}
</script>
