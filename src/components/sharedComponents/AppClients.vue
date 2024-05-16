 
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
       return `${this.duplicatedSponsorImages.length * 250}px`;
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
  <section class="ms_pt-120 ms_pb-120">
   <div class="container">
      <div class="text-center">
         <h5 class="ms-text-l-purple pb-2 f-chakra">Why Anidio studio?</h5>
         <h1 class="pb-2 f-chakra ms_fs-h-big">We Love Our Clients </h1>
         <p class="pb-2 f-barlow">We are trusted throughout adland and have a wealth of recommendations from start-ups to renowned global brands.</p>
      </div>
   </div>
   <div class="sponsor-slider pb-2">
     <div class="slide-track" :style="{ width: trackWidth }">
       <div class="slide" v-for="image in duplicatedSponsorImages">
         <img :src="getImageSponsor(image)"  alt="" />
       </div>
     </div>
   </div>
  </section>
 </template>
 
 <style>
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
   animation: scroll 40s linear infinite;
 }
 
 .slide {
   height: auto;
   width: 250px;
   transition: 0.7s;
 }
 </style>