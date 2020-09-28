<template>
  <div id="header">
    <div :class="`nav-wrapper flex z-50 bg-gray-900 border-b border-gray-900 fixed top-0 inset-x-0 z-100 ${height} items-center`">
      <div class="w-full container relative mx-auto">
        <div class="flex items-center">
          <div class="lg:w-1/4 xl:w-1/5">
            <div class="flex items-center">
              <nuxt-link class="block lg:mr-4" to="/">
                <logo class="h-10" />
              </nuxt-link>
            </div>
          </div>
          <div class="ml-auto">
            <div class="nav-toggle block md:none px-3" @click="showNav = !showNav">
              <span class="block bg-white my-2" />
              <span class="my-2" />
              <span class="block bg-white my-2" />
              <span class="my-2" />
              <span class="block bg-white my-2" />
            </div>
            <div :class="`nav-content ${showNav ? 'active' : ''} fixed md:static bg-gray-900 mt-16 md:mt-0`">
              <ul id="main-menu" class="text-white flex flex-col md:flex-row">
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
      default: 'h-20'
    },
    menu: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      showNav: false
    }
  }
}
</script>
<style lang="scss">
.nav-toggle > span{
  height: 2px;
  width: 30px;
}
.nav-content{
  left: -100%;
  top: 0;
  bottom: 0;
  transition: all .2s ease-in-out;
  &.active{
    left: 0;
  }
}
#main-menu{
  li{
     padding: 15px 20px;
  }
}
#header .nav-wrapper{
  transition: all .2s ease-in-out;
}
</style>
