<template>
  <div>
    <page-section class="section-fullwidth bg-black h-screen">
      <div class="container mx-auto h-full">
        <div class="flex banner mb-4 h-full">
          <div class="lg:w-1/2">
            <div class="banner--img">
              <img src="~/assets/img/iphone.png">
            </div>
          </div>
          <div class="lg:w-1/2 text-white">
            <div class="banner--text">
              <h1 class="block md:mb-8 font-light">
                Design and development for brands.
              </h1>
              <a href="#" class="bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded px-8 mt-8">
                <span class="text-white font-medium">
                  Let's Talk
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </page-section>
    <page-section class="h-screen">
      <div class="lg:w-10/12 mx-auto what-we-do">
        <h2 class="font-light subheader text-5xl">
          What we do.
        </h2>
        <div class="flex flex-wrap mb-4">
          <div class="w-1/3">
            <div>
              <h4 class="uppercase font-medium text-xl tracking-widest">
                Web Design
              </h4>
              <p class="font-light">
                Code responsive, secure, and scalable products with time-tested technologies
              </p>
            </div>
          </div>
          <div class="w-1/3">
            <div>
              <h4 class="uppercase font-medium text-xl tracking-widest">
                Web Design
              </h4>
              <p class="font-light">
                Code responsive, secure, and scalable products with time-tested technologies
              </p>
            </div>
          </div>
          <div class="w-1/3">
            <div>
              <h4 class="uppercase font-medium text-xl tracking-widest">
                Web Design
              </h4>
              <p class="font-light">
                Code responsive, secure, and scalable products with time-tested technologies
              </p>
            </div>
          </div>
          <div class="w-1/3">
            <div>
              <h4 class="uppercase font-medium text-xl tracking-widest">
                Web Design
              </h4>
              <p class="font-light">
                Code responsive, secure, and scalable products with time-tested technologies
              </p>
            </div>
          </div>
          <div class="w-1/3">
            <div>
              <h4 class="uppercase font-medium text-xl tracking-widest">
                Web Design
              </h4>
              <p class="font-light">
                Code responsive, secure, and scalable products with time-tested technologies
              </p>
            </div>
          </div>
          <div class="w-1/3">
            <div>
              <h4 class="uppercase font-medium text-xl tracking-widest">
                Web Design
              </h4>
              <p class="font-light">
                Code responsive, secure, and scalable products with time-tested technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </page-section>
    <page-section class="section-fullwidth bg-black h-screen md:pt-24 text-white">
      <our-projects />
    </page-section>
  </div>
</template>

<script>
import pageSection from '../components/PageSection'
import ourProjects from '../components/pageSection/OurProjects'

export default {
  components: {
    pageSection,
    ourProjects
  }
}
</script>
<style lang="scss" scoped>
@media(min-width: 768px){
  .banner--img{
    position: relative;
    height: 100%;
    img{
      position: absolute;
      bottom: -40%;
      left: 10%;
    }
  }
  .banner--text{
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    h1{
      font-size: 70px;
    }
  }
  .what-we-do{
    position: relative;
    top: 50%;
  }
}
</style>
