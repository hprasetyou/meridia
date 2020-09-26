<template>
  <div id="header">
    <div :class="`nav-wrapper flex z-50 bg-gray-900 border-b border-gray-900 fixed top-0 inset-x-0 z-100 ${height} items-center`">
      <div class="w-full max-w-screen-xl relative mx-auto">
        <div class="flex items-center">
          <div class="lg:w-1/4 xl:w-1/5">
            <div class="flex items-center">
              <nuxt-link class="block lg:mr-4" to="/">
                <logo />
              </nuxt-link>
            </div>
          </div>
          <div class="ml-auto">
            <ul id="main-menu" class="text-white flex">
              <li v-for="(item, i) in menu" :key="i">
                <nuxt-link :to="item.link">
                  {{ item.text }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import logo from '../components/Logo'
export default {
  components: {
    logo
  },
  props: {
    height: {
      type: String,
      default: 'h-24'
    },
    menu: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
<style lang="scss">
#main-menu{
  li{
     padding: 15px 20px;
  }
}
#header .nav-wrapper{
  transition: all .2s ease-in-out;
}
</style>
