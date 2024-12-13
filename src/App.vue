<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppArrow from './components/AppArrow.vue';


export default {

  components: {

    AppHeader,
    AppFooter,
    AppArrow
  },

  data() {
    return {

      isLoaded: false,

    }
  },

  mounted() {

		this.isLoaded = true;

    console.log("isLoaded", this.isLoaded);

	},

}
</script>

<template>

  <div v-if="!isLoaded">Loading...</div>

  <div v-else>

    <AppHeader />

    <!-- Tag per i componenti del router (pagine dinamiche). Per i componenti fissi come header footer ecc inserire il tag del componente corrispettivo -->
    <router-view></router-view>

    <AppFooter />

    <AppArrow />

  </div>

</template>

<style lang="scss">
@use "./style/partials/variables" as *;

// TYPOGRAPHY UTILITIES

// Fonts Utilities

.ms-font-cp {
  font-family: "Chakra Petch", sans-serif;

}

.ms-font-b {
  font-family: "Barlow", sans-serif;

}

// Colors Utilities

.ms-text-d-purple {
  color: $pj-dark-purple;

}

.ms-text-l-purple {
  color: $pj-light-purple;

}

.ms-text-orange {
  color: $pj-orange;

}

.ms-text-grey {
  color: $pj-grey;

}

.ms-bg-purple {
  background-color: $pj-purple;

}

.ms-bg-pink {
  background-color: $pj-pink;

}

.ms-bg-l-pink {
  background-color: $pj-light-pink;

}

.ms-bg-l-purple {
  background-color: $pj-lighter-purple;

}
</style>