<template>
  <page-section class="flex flex-col">
    <div class="flex flex-col md:flex-row my-auto">
      <div class="md:w-1/2 font-light">
        <h3 class="md:text-subheader mb-8 font-extra-light text-5xl leading-tight">
          We make <br class="none md:block"> future closer
        </h3>
        <p class="text-xl">
          We ask, think, craft and iterate to create <br class="none md:block"> products that achieve results
        </p>
      </div>
      <div class="md:w-1/2">
        <contact-form />
      </div>
    </div>
  </page-section>
</template>
<script>
import pageSection from '../PageSection'
import contactForm from '../form/ContactForm'
export default {
  components: {
    pageSection,
    contactForm
  }
}
</script>
<style lang="scss" scoped>
</style>
