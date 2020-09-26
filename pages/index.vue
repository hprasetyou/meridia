<template>
  <div>
    <page-section class="section-fullwidth bg-gray-900 h-screen">
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
    <our-service />
    <our-projects />
    <contact-us />
  </div>
</template>

<script>
import pageSection from '../components/PageSection'
import ourProjects from '../components/pageSection/OurProjects'
import ourService from '../components/pageSection/OurService'
import contactUs from '../components/pageSection/ContactUs'

export default {
  components: {
    pageSection,
    ourProjects,
    ourService,
    contactUs
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
      bottom: -33%;
      left: 15%;
      width: 80%;
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
}
</style>
