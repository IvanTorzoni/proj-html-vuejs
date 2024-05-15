 
<script>
export default {
   data() {
     return {
      //Array di immagini
      sponsorImages: ['sponsor1', 'sponsor2', 'sponsor3', 'sponsor4', 'sponsor5', 'sponsor6', 'sponsor5', 'sponsor4', 'sponsor3', 'sponsor2'],
     };
   },
   computed: {
     // Duplico le immagini
     duplicatedSponsorImages() {
       return [...this.sponsorImages, ...this.sponsorImages, ...this.sponsorImages, ...this.sponsorImages];
     },
     // Calcola lunghezza, 
     trackWidth() {
       return `${this.duplicatedSponsorImages.length * 225}px`;
     }
   },
   methods: {
     //Gestione immagine dinamica
     getImageSponsor(sponsorImg) {
       return new URL(`../../assets/Img/about-img/${sponsorImg}.png`, import.meta.url).href;
     },
   },
};
</script>

<template>
   <div class="sponsor-slider pb-2">
     <div class="slide-track" :style="{ width: trackWidth }">
       <div class="slide" v-for="image in duplicatedSponsorImages">
         <img :src="getImageSponsor(image)"  alt="" />
       </div>
     </div>
   </div>
 </template>
 
 <style scoped>
 /* Animation */
 @keyframes scroll {
   0% { transform: translateX(0); }
   100% { transform: translateX(calc(-250px * 14)); }
 }
 
 /* Styling */
 .sponsor-slider {
   background: white;
   height: 100px;
   margin: auto;
   overflow: hidden;
   position: relative;
   width: 80%;
 }
 
 .slide-track {
   display: flex;
   gap: 5px;
   animation: scroll 30s linear infinite;
 }
 
 .slide {
   height: auto;
   width: 250px;
 }
 </style>