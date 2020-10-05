<template>
  <form action="">
    <template v-for="(inputItem, i) in formDef">
      <mr-input :key="i" v-model="contactData[inputItem.name]" :label="inputItem.label" :name="inputItem.name" :type="inputItem.type" />
    </template>
    <div class="text-center block pt-5">
      <primary-button href="#" @click.prevent="submitData">
        Lets talk
      </primary-button>
    </div>
  </form>
</template>
<script>
import primaryButton from '../element/primaryButton'
import mrInput from './elements/MrInput'

export default {
  components: {
    mrInput,
    primaryButton
  },
  data () {
    return {
      contactData: {},
      formDef: [
        {
          name: 'name',
          label: 'Name',
          type: 'text'
        },
        {
          name: 'company',
          label: 'Company',
          type: 'text'
        },
        {
          name: 'email',
          label: 'Email',
          type: 'text'
        },
        {
          name: 'message',
          label: 'Message',
          type: 'textArea'
        }
      ]
    }
  },
  methods: {
    async submitData () {
      const data = await this.$axios.$post('/api/newsletter/subscribe', this.contactData)
      console.log(data)
    }
  }
}
</script>
