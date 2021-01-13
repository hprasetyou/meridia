<template>
  <div class="px-3">
    <div class="page-title my-8 mt-32 lg:mt-16 leading-tight">
      <h1 class="font-extra-light text-3xl lg:text-6xl">
        {{ currentProject.title }} -
      </h1>
      <h1 class="font-extra-light text-3xl lg:text-6xl">
        {{ currentProject.description }}
      </h1>
    </div>
    <template>
      <photo-gallery :images="currentProject.gallery" class="my-8" />
    </template>
    <div class="flex flex-wrap mb-16">
      <div class="md:w-1/2">
        <div class="long-description">
          <p class="font-extra-light">
            {{ currentProject.longDescription }}
          </p>
        </div>
        <div class="flex mt-8">
          <div v-for="(item, i) in currentProject.links" :key="i" class="w-1/2">
            <a class="text-indigo-600 underline" :href="item.url">{{ item.text }}</a>
          </div>
        </div>
      </div>
      <div class="md:w-1/2">
        <div class="w-full flex">
          <div class="mx-auto">
            <div class="flex" style="min-width: 250px;">
              <div class="w-1/2 text-right mr-3 font-medium">
                Skills:
              </div>
              <div class="w-1/2 font-light">
                <ul>
                  <li v-for="(item, i) in currentProject.skills" :key="i">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import photoGallery from '../../components/element/photoGallery'
import data from '../../components/data/data'

export default {
  components: {
    photoGallery
  },
  data () {
    return {
      currentProject: {}
    }
  },
  mounted () {
    this.currentProject = this.lookUpProject(this.$route.params.slug)
    this.$store.commit('SET_HEADER_THEME', 'light')
    if (!this.currentProject) {
      this.$emit('error', 404)
    }
  },
  methods: {
    lookUpProject (slug) {
      return data.projects.map(item => item.works)
        .flat()
        .find(item => item.slug?.toLowerCase() === slug.toLowerCase())
    }
  }
}
</script>
