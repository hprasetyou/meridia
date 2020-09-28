<template>
  <page-section class="flex">
    <div class="lg:w-10/12 mt-auto mx-auto what-we-do">
      <h2 class="font-light subheader text-5xl">
        What we do.
      </h2>
      <div class="flex flex-wrap mb-4 -mx-3">
        <div v-for="(service, i) in services" :key="i" class="w-1/3 mb-6 px-3">
          <div>
            <span :class="`mr-service-icon ${'service-' + i} mb-3`" />
            <h4 class="uppercase font-medium text-lg tracking-widest mb-3">
              {{ service.title }}
            </h4>
            <p class="font-light text-sm">
              {{ service.description }}
            </p>
            <a href="#" class="mt-6 block">Learn more</a>
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
  data () {
    return {
      services: [
        {
          title: 'Web Design',
          description: 'Code responsive, secure, and scalable products with time-tested technologies'
        },
        {
          title: 'Mobile App design',
          description: 'Code responsive, secure, and scalable products with time-tested technologies'
        },
        {
          title: 'Logo Design',
          description: 'Code responsive, secure, and scalable products with time-tested technologies'
        },
        {
          title: 'Social Media',
          description: 'Code responsive, secure, and scalable products with time-tested technologies'
        },
        {
          title: 'Photo Product',
          description: 'Code responsive, secure, and scalable products with time-tested technologies'
        },
        {
          title: 'Visual Identity Design',
          description: 'Code responsive, secure, and scalable products with time-tested technologies'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
  $mr-service-icon--size: 60px;
  $mr-service-icon--size__long: 1.325 * $mr-service-icon--size;
  .mr-service-icon{
    background-image: url('~assets/img/icons.png');
    width: $mr-service-icon--size;
    height: $mr-service-icon--size;
    display: block;
    background-size: cover;
    &.service-1{
        background-position-x: 18%;
    }
    &.service-2{
        background-position-x: 34.5%;
    }
    &.service-3{
        background-position-x: 55%;
        width: $mr-service-icon--size__long;
    }
    &.service-4{
        background-position-x: 78%;
        width: $mr-service-icon--size__long;
    }
    &.service-5{
        background-position-x: 100%;
        width: $mr-service-icon--size__long;
    }
  }
  @media (min-width: 1380px) {
    .what-we-do{
      margin-bottom: 4rem;
    }
  }
</style>
