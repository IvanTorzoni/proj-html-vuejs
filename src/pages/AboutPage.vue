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

        },
        {

        },
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
      <div class="row d-flex">
        <!-- Colonna -->
        <div class="col-lg-4">
          <ServiceCard />
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