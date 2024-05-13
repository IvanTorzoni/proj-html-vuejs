<script>
import AppHeader from './components/AppHeader.vue';
import AppJumbo from './components/AppJumbo.vue';
import AppFooter from './components/AppFooter.vue';


export default {
   components: {
        AppHeader,
        AppJumbo,
        AppFooter,
   }

}
</script>

<template>
  <AppHeader />
  <AppJumbo />
  <!-- Tag per i componenti del router (pagine dinamiche). Per i componenti fissi come header footer ecc inserire il tag del componente corrispettivo -->
  <router-view></router-view>
  <!-- Comment -->
  <AppFooter />
</template>

<style lang="scss"></style>