<template>
  <div id="header">
    <div :class="`nav-wrapper flex z-50 ${ bgColor } fixed md:relative top-0 inset-x-0 z-100 h-20 items-center`">
      <div class="w-full container relative mx-auto">
        <div class="flex items-center">
          <div class="lg:w-1/4 xl:w-1/5">
            <div class="flex items-center">
              <nuxt-link class="block lg:mr-4" to="/">
                <logo :class="`${textColor} h-10`" />
              </nuxt-link>
            </div>
          </div>
          <div class="ml-auto">
            <div class="nav-toggle block md:hidden px-3" @click="showNav = !showNav">
              <span v-for="i in 5" :key="i" :class="`${ (i%2 != 0) ? mobileNavToggleColor : ''} block my-1`" />
            </div>
            <div :class="`nav-content ${showNav ? 'active' : ''} fixed md:static ${ bgColor } pt-8 md:pt-0 w-full`">
              <div class="nav-toggle--close block md:hidden px-3" @click="showNav = false">
                <span class="block bg-white" />
                <span class="block bg-white" />
              </div>
              <ul id="main-menu" :class="`${textColor} flex flex-col md:flex-row font-light`">
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
  },
  computed: {
    bgColor () {
      return this.$store.state.headerTheme === 'dark' ? 'bg-gray-900' : 'bg-white'
    },
    textColor () {
      return this.$store.state.headerTheme === 'dark' ? 'text-white' : 'text-gray-900'
    },
    mobileNavToggleColor () {
      return this.$store.state.headerTheme === 'dark' ? 'bg-white' : 'bg-gray-900'
    }
  }
}
</script>
<style lang="scss">
.nav-toggle--close,
.nav-toggle{
  & > span{
    height: 2px;
    width: 30px;
  }
}
.nav-toggle--close{
    position: absolute;
    right: 10px;
    top: 10px;
    width: 40px;
    height: 40px;
    &  > span{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%) rotate(45deg);
      & + span{
        transform: translate(-50%,-50%) rotate(-45deg);
      }
    }
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
