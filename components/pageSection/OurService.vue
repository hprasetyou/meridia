<template>
  <page-section class="flex py-8 md:py-32">
    <div class="mt-auto mx-auto what-we-do">
      <h2 class="font-extra-light subheader text-5xl md:text-subheader px-3 md:px-0 mb-5">
        What we do.
      </h2>
      <div class="flex flex-wrap mb-4 md:-mx-3">
        <div v-for="(service, i) in services" :key="i" class="w-full md:w-1/3 mb-6 px-3">
          <div class="font-light">
            <span :class="`mr-service-icon ${'service-' + i} mb-3`" />
            <h4 class="uppercase  text-lg tracking-widest mb-3">
              {{ service.title }}
            </h4>
            <p class="text-sm">
              {{ service.description }}
            </p>
            <nuxt-link :to="service.link" class="mt-6 block">
              Lets Talk
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </page-section>
</template>
<script>
import pageSection from '../PageSection'
export default {
  components: {
    pageSection
  },
  props: {
    services: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="scss">
  $mr-service-icon--size: 60px;
  $mr-service-icon--size__long: 1.325 * $mr-service-icon--size;
  .mr-service-icon{
    background-image: url('~static/img/icons.png');
    width: $mr-service-icon--size;
    height: $mr-service-icon--size;
    display: block;
    background-size: cover;
    &.service-1{
        background-position-x: 11%;
    }
    &.service-2{
        background-position-x: 22.5%;
    }
    &.service-3{
        background-position-x: 35%;
        width: $mr-service-icon--size__long;
    }
    &.service-4{
        background-position-x: 50%;
        width: $mr-service-icon--size__long;
    }
    &.service-5{
        background-position-x: 65%;
        width: $mr-service-icon--size__long;
    }
  }
  @media (min-width: 1380px) {
    .what-we-do{
      margin-bottom: 4rem;
    }
  }
</style>
