<template>
  <div id="header">
    <div
      :style="{
        top: (fadeUp && !showNav) ? '-80px': '0'
      }"
      :class="`nav-wrapper flex z-50 ${ bgColor } fixed md:relative inset-x-0 z-100 h-20 items-center px-3`">
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
            <div :class="`nav-content ${showNav ? 'active' : ''} ${ navBlock } fixed md:static ${ bgColor } pt-8 md:pt-0 w-full`">
              <ul id="main-menu" :class="`${textColor} flex flex-col md:flex-row font-light`">
                <li v-for="(item, i) in menu" :key="i">
                  <nuxt-link :to="item.link" @click="toggleNav">
                    {{ item.text }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
            <div class="nav-toggle block md:hidden px-3" @click="toggleNav">
              <span v-for="i in 3" :key="i" :class="`${ mobileNavToggleColor } block`" />
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
    },
    fadeUp: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showNav: false,
      navBlock: ''
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
  },
  methods: {
    toggleNav () {
      if (!this.showNav) {
        this.navBlock = 'block'
        setTimeout(() => { this.showNav = true }, 100)
      } else {
        this.showNav = false
        setTimeout(() => { this.navBlock = '' }, 500)
      }
    },
    hideNav () {
      this.showNav = false
      setTimeout(() => { this.navBlock = '' }, 500)
    }
  }
}
</script>
<style lang="scss">
.nav-toggle{
  position: relative;
  height: 20px;
  width: 30px;
  & > span{
    &:first-child{
      top: 0;
    }
    & + span:not(:last-child){
      top: 50%;
      transform: translateY(-50%);
      opacity: 1;
    }
    &:last-child{
      bottom: 0;
    }
    position: absolute;
    height: 2px;
    width: 30px;
    left: 0;
    transition: all .3s ease-in-out;
  }
}

.nav-content{
  left: 0;
  display: none;
  opacity: 0;
  top: 80px;
  bottom: 0;
  transition: all .3s ease-in-out;
  &.active{
    opacity: 1;
  }
  &.block{
    display: block;
  }
  @media(min-width: 768px) {
    display: block;
  }
}

.nav-content.active + .nav-toggle{
    &  > span{

      & + span:not(:last-child){
        opacity: 0;
      }
      &:first-child,
      &:last-child{
        top: 50%;
        left: 50%;
      }
      &:first-child{
        transform: translate(-50%,-50%) rotate(45deg);
      }
      &:last-child{
        transform: translate(-50%,-50%) rotate(-45deg);
      }
    }
}
#main-menu{
  li{
     padding: 15px 20px;
  }
}
#header .nav-wrapper{
  transition: all .4s ease-in-out;
}
</style>
