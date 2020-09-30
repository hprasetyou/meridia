<template>
  <div>
    <div class="page-title my-8">
      <h1 class="font-extra-light text-6xl">
        {{ currentProject.description }}
      </h1>
    </div>
    <template>
      <photo-gallery :images="currentProject.gallery" />
    </template>
    <div class="long-description">
      <p class="font-extra-light">
        Quoi de mieux que de pouvoir découvrir ses produits préférés sous tous
les angles ! Modélisés en webGL, nous offrons aux futurs clients de Wedze
l’opportunité de découvrir les masques en détail mais aussi de trouver le
casque adéquat pour compléter leur achat.

Notre volonté était ici de proposer un outil ergonomiquement simple et
novateur tout en privilégiant l’aspect chaleureux et technique que
véhicule la marque.
      </p>
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
