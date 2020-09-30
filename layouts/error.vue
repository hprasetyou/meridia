<template>
  <div class="container">
    <error-section :title="error.statusCode === 404 ? 'Page Not Found' : 'An Error Has Been Ocurred'" />
  </div>
</template>

<script>
import errorSection from '../components/pageSection/error/error'

export default {
  components: {
    errorSection
  },
  props: {
    error: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  layout: 'default' // you can set a custom layout for the error page
}
</script>
