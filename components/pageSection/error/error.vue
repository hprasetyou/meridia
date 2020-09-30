<template>
  <page-section class="h-screen">
    <div class="text-center flex h-full">
      <div class="mx-auto my-auto">
        <h1 class="text-3xl mb-16">
          {{ title }}
        </h1>
        <primary-button href="/">
          Back to Home
        </primary-button>
      </div>
    </div>
  </page-section>
</template>
<script>
import pageSection from '../../PageSection'
import primaryButton from '../../element/primaryButton'

export default {
  components: {
    pageSection,
    primaryButton
  },
  props: {
    title: {
      type: String,
      default: 'An Error Has Been Ocurred'
    }
  }
}
</script>
