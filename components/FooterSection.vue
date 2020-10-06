<template>
  <page-section class="bg-gray-900 md:py-24 text-white p-4">
    <div class="container mx-auto h-full">
      <div class="flex flex-col h-full">
        <div class="footer-jumbotron my-24">
          <div class="font-light">
            <h2 class="text-4xl md:text-6xl font-extra-light mb-0 leading-none">
              We Are
            </h2>
            <p class="lg:text-200 text-6xl font-extra-light leading-tight mb-10">
              Ready
            </p>
          </div>
          <primary-button href="#">
            Lets talk
          </primary-button>
        </div>
        <div class="footer-nav my-auto font-light leading-8">
          <div class="flex flex-col md:flex-row">
            <div class="w-1/4">
              <logo-short />
            </div>
            <div class="md:w-1/4" />
            <div class="w-1/6">
              <ul id="footer-menu">
                <li v-for="(item, i) in menu" :key="i">
                  <nuxt-link :to="item.link">
                    {{ item.text }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
            <div class="md:w-1/6">
              <ul>
                <li v-for="(item, i) in social" :key="i">
                  <a :href="item.link" :class="`footer-social ${item.type}`">{{ item.text }}</a>
                </li>
              </ul>
            </div>
            <div class="md:w-1/4 md:pt-6">
              <p>
                <span class="mr-4">T:</span>
                <a href="tel:081232080801">081 232 080801</a>
              </p>
              <p>
                <span class="md:mr-4">E:</span>
                <a href="mailto:hello@meridiastudio.com">hello@meridiastudio.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </page-section>
</template>
<script>
import primaryButton from './element/primaryButton'
import logoShort from './LogoShort'
import pageSection from './PageSection'

export default {
  components: {
    pageSection,
    logoShort,
    primaryButton
  },
  props: {
    menu: {
      type: Array,
      default () {
        return []
      }
    },
    social: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
<style lang="scss">
$soc-icon--size: 18px;
.footer-social{
  &::before{
    content: '';
    background-image: url('~static/img/icons.png');
    width: $soc-icon--size;
    height: $soc-icon--size;
    display: inline-block;
    background-size: cover;
    background-position-x: 76%;
    margin-right: 10px;
  }
  &.behance::before{
    background-position-x: 88.5%;
  }
  &.dribble::before{
    background-position-x: 100%;
  }
}
</style>
