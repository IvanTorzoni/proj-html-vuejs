<script>

import AppFacts from '../components/sharedComponents/AppFacts.vue';
import AppSkill from '../components/sharedComponents/AppSkill.vue';
import AppTeam from '../components/sharedComponents/AppTeam.vue';
import AppClients from '../components/sharedComponents/AppClients.vue';
import ServiceCard from '../components/sharedComponents/ServiceCard.vue';
import SimpleJumbo from '../components/sharedComponents/SimpleJumbo.vue';

export default {

  components: {

    AppFacts,
    AppSkill,
    AppTeam,
    AppClients,
    ServiceCard,
    SimpleJumbo
  },
  data(){
    return{
      serviceArray : [
        {
           serviceImage : "process4",
           serviceTitle : "Motion Graphics",
           serviceP : "The best in the business, served to your audience's eyeballs"
        },
        {
          serviceImage : "process5",
          serviceTitle : "Character Design",
          serviceP : "The best in the business, served to your audience's eyeballs"
        },
        {
          serviceImage : "process1",
          serviceTitle : "Storyboards",
          serviceP : "The best in the business, served to your audience's eyeballs"
        },
        {
          serviceImage : "process6",
          serviceTitle : "Animatics",
          serviceP : "The best in the business, served to your audience's eyeballs"
        },
        {
          serviceImage : "process7",
          serviceTitle : "Film and TV",
          serviceP : "The best in the business, served to your audience's eyeballs"
        },
        {
          serviceImage : "process1",
          serviceTitle : "Script Writing",
          serviceP : "The best in the business, served to your audience's eyeballs",
        }
      ],

      page : {
        pageName : "About Us",
        pageImg : "../../assets/Img/about-img/rocket-banner.png",
        pageBg : "../../assets/Img/main-img/banner-bg.png"
      }
    }
  }

}
</script>

<template>

  <SimpleJumbo :pageObj="page" />

  <AppSkill />

  <AppFacts />

  <section class="service-section ms_pt-120 ms_pb-120">
    <div class="container">
      <div class="section-header text-center">
        <h4 class="f-chakra ms_sub-color">Our Service</h4>
        <span class="f-chakra  ms_fs-h-big">Animations, Bespoke and Beautiful </span>
        <p class="f-barlow">With the magic of imagination we are able to tell stories, animate adventures, create art</p>
      </div>
      <div class="row">
        <!-- Colonna -->
        <div class="col-4 g-4" v-for="cardItem in serviceArray">
          <ServiceCard
            :serviceImage="cardItem.serviceImage" 
            :serviceTitle = "cardItem.serviceTitle"
            :serviceP = "cardItem.serviceP"
           />
        </div>
        <!-- /Colonna -->
      </div>
    </div>
  </section>

  <AppTeam />
  
  <AppClients />

</template>

<style lang="scss" scoped>
.ms_title-size {
  font-size: 3.5rem;
}
</style>