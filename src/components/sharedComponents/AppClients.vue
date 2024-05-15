<script>
export default {
  data() {
    return {
      sponsorImages: ['sponsor1',
               'sponsor2',
               'sponsor3',
               'sponsor4',
               'sponsor5',
               'sponsor6',
               'sponsor5',
               'sponsor4',
               'sponsor3',
               'sponsor2',
               'sponsor1',
            ],
      curIndex: 0,
      transformVal: 0,
    };
  },
  mounted() {
    setInterval(this.nextSponsor, 2000); // Cambia slide ogni 3 secondi
  },
  methods: {
   nextSponsor() {
    //incremento indice
    this.curIndex += 1;

   // Sposta l'immagine corrente verso sinistra (175 è la grandezza della card sponsor + 10 di gap)
   this.transformVal -= 185;

   // Verifica se siamo a metà
   if (this.curIndex >= this.sponsorImages.length / 2) {
         this.transformVal = 0;
         this.curIndex = 0; // Riporta l'indice alla prima immagine
      }
  },
   getImageSponsor(sponsorImg){
      return new URL(`../../assets/Img/about-img/${sponsorImg}.png`, import.meta.url).href;
   },
  },
};
</script>

<template>
<div class="container">
   <div class="sponsor-carousel">
     <div class="car-inner" :style="{ transform: `translate3d(${transformVal}px, 0px, 0px)` }">
       <img v-for="image in sponsorImages" :src="getImageSponsor(image)" class="car-img">
     </div>
   </div>
</div>
 </template>
 
 
<style lang="scss" scoped>
/* outer-Carosello, con altezza minima e larghezza del container(80% pag) */
.sponsor-carousel {
   width: 100%;
   height: 100px;
   overflow: hidden;
   position: relative;
   transform: translate3d(0, 0, 0);
   .car-inner {
      position: absolute;
      left: 0;
      display: flex;
      gap: 10px;
      transition: transform 0.6s ease;
         .car-img {
            width: 175px;
            height: auto;
         }
      }
}
 </style>
 