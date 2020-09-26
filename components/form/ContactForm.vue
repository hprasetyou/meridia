<template>
  <form action="">
    <template v-for="(inputItem, i) in formDef">
      <mr-input :key="i" v-model="contactData[inputItem.name]" :label="inputItem.label" :name="inputItem.name" :type="inputItem.type" />
    </template>
    <div class="text-center block pt-5">
      <a href="#" class="bg-indigo-600 hover:bg-indigo-700 text-white mx-auto py-3 rounded px-8 mt-8">
        <span class="text-white font-medium">
          Let's Talk
        </span>
      </a>
    </div>
  </form>
</template>
<script>
import mrInput from './elements/MrInput'
export default {
  components: {
    mrInput
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
  }
}
</script>
