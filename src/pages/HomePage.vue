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

    <h2>Video</h2>

    <AppSkill />

    <AppFacts />

    <h2>features of production</h2>

    <h2>process</h2>

    <AppTeam />

    <AppClients />
    
</template>

<style scoped lang="scss"></style>