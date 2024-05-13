<script>

import AppFacts from '../components/sharedComponents/AppFacts.vue';
import AppSkill from '../components/sharedComponents/AppSkill.vue';
import AppTeam from '../components/sharedComponents/AppTeam.vue';
import AppClients from '../components/sharedComponents/AppClients.vue';

export default {
  components: {
    AppFacts,
    AppSkill,
    AppTeam,
    AppClients,
  }
}
</script>

<template>
  <AppSkill />
  <AppFacts />
  <h2>All services</h2>
  <AppTeam />
  <AppClients />

</template>