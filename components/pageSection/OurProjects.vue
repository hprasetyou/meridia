<template>
  <page-section class="section-fullwidth bg-black h-screen md:pt-24 text-white">
    <div class="container mx-auto">
      <h2 class="font-light subheader text-5xl">
        Projects.
      </h2>
      <ul class="flex project-type">
        <li class="uppercase">
          <a href="">Web Design</a>
        </li>
        <li class="uppercase">
          <a href="">Mobile App Design</a>
        </li>
        <li class="uppercase">
          <a href="">Logo Design</a>
        </li>
        <li class="uppercase">
          <a href="">Social Media</a>
        </li>
        <li class="uppercase">
          <a href="">Photo Product</a>
        </li>
        <li class="uppercase">
          <a href="">Visual Identity Design</a>
        </li>
      </ul>
    </div>
  </page-section>
</template>
<script>
import pageSection from '../PageSection'
export default {
  components: {
    pageSection
  }
}
</script>
<style lang="scss" scoped>
.project-type{
  li:not(:first-child):before{
    content: ' - ';
    margin: 0 10px;
  }
}
</style>
