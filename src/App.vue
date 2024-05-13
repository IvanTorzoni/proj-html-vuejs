<script>
import AppHeader from './components/AppHeader.vue';

export default {
   components: {
        AppHeader,
   }

}
</script>

<template>
  <AppHeader />
  <!-- Tag per i componenti del router (pagine dinamiche). Per i componenti fissi come header footer ecc inserire il tag del componente corrispettivo -->
  <router-view></router-view>
</template>

<style lang="scss"></style>