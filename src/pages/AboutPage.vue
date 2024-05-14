<script>

import AppFacts from '../components/sharedComponents/AppFacts.vue';
import AppSkill from '../components/sharedComponents/AppSkill.vue';
import AppTeam from '../components/sharedComponents/AppTeam.vue';
import AppClients from '../components/sharedComponents/AppClients.vue';
import ServiceCard from '../components/sharedComponents/ServiceCard.vue';

export default {

  components: {

    AppFacts,
    AppSkill,
    AppTeam,
    AppClients,
    ServiceCard

  },
  data(){
    return{
      serviceArray : [
        {
           serviceImage : "process1",
           serviceTitle : "Motion Graphics",
           serviceP : "The best in the business, served to your audience's eyeballs"
        },
        {
          serviceImage : "process5",
          serviceTitle : "Character Design",
          serviceP : "The best in the business, served to your audience's eyeballs"
        },
        {
          serviceImage : "process4",
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
          serviceImage : "process4",
          serviceTitle : "Script Writing",
          serviceP : "The best in the business, served to your audience's eyeballs",
        }
      ]
    }
  }

}
</script>

<template>

  <AppSkill />

  <AppFacts />

  <section class="service-section ms_pt-120 ms_pb-120">
    <div class="container">
      <div class="section-header text-center">
        <h4>Our Service</h4>
        <span class="ms_title-size">Animations, Bespoke and Beautiful </span>
        <p>With the magic of imagination we are able to tell stories, animate adventures, create art</p>
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