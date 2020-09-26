<template>
  <div :class="`mr-input-wrapper relative mb-6 ${ isActive ? 'is-active' : '' }`">
    <label :for="'mr-input-' + name" class="block absolute">{{ label }}</label>
    <textarea
      v-if="type == 'textArea'"
      :id="'mr-input-' + name"
      v-model="inputVal"
      class="block focus:outline-none py-2 px-3 text-lg border-b w-full"
      :name="name"
      @focus="onEdit"
      @blur="onNotEdit"
    />
    <input
      v-else
      :id="'mr-input-' + name"
      v-model="inputVal"
      class="block focus:outline-none py-2 px-3 text-lg border-b w-full"
      :type="type"
      :name="name"
      @focus="onEdit"
      @blur="onNotEdit"
    >
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  data () {
    return {
      isActive: false,
      inputVal: ''
    }
  },
  watch: {
    value () {
      this.inputVal = this.value
    },
    inputVal () {
      this.$emit('input', this.inputVal)
      if (this.inputVal.length > 0) {
        this.isActive = true
      }
    }
  },
  methods: {
    onEdit () {
      this.isActive = true
    },
    onNotEdit () {
      if (this.inputVal.length < 1) {
        this.isActive = false
      }
    }
  }
}
</script>
<style lang="scss">
.mr-input-wrapper{
  label{
    transition: all .2s ease-in-out;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    opacity: .5;

  }
  &.is-active{
    label{
      opacity: 1;
      top: -10px;
      left: 5px;
      transform: none;
      font-size: .75em;
    }
  }
}
</style>
