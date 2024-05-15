<script>
export default {

   props: {

      pageObj: Object,

   },
   methods: {
     //Gestione immagine dinamica
     getImagePath(bgImg) {
       return new URL(bgImg, import.meta.url).href;
     },
   },

}

</script>

<template>

   <section class="hero-section" :style="`background: url(${getImagePath(pageObj.pageBg)}) bottom center`">

      <div class="container">

         <div class="row justify-content-start">

            <h1 class="text-white ms-font-cp"> {{ pageObj.pageName }} </h1>

            <h2 class="text-white ms-font-cp">Home <i class="fa-solid fa-arrow-right-long"></i> {{ pageObj.pageName }} </h2>

         </div>

      </div>

      <div class="img-right" v-if="pageObj.pageImg">
         <img :src="getImagePath(pageObj.pageImg)" alt="left-man">
      </div>

      <div class="globe1">
         <img src="../../assets/Img/main-img/globe1.png" alt="globe-img">
      </div>

      <div class="globe2">
         <img src="../../assets/Img/main-img/globe2.png" alt="globe-img">
      </div>

      <div class="globe3">
         <img src="../../assets/Img/main-img/globe3.png" alt="globe-img">
      </div>

      <div class="dots-left">
         <img src="../../assets/Img/main-img/dots-left.png" alt="dots-left">
      </div>

      <div class="light">
         <img src="../../assets/Img/main-img/light.png" alt="light-img">
      </div>

      <div class="dots-right">
         <img src="../../assets/Img/main-img/dots-right.png" alt="dots-right">
      </div>

      <div class="bottom-shape">
         <img src="../../assets/Img/main-img/bottom-shape.png" alt="-banner-shape">
      </div>

   </section>

</template>

<style lang="scss" scoped>
.hero-section {
   background-size: cover;
   position: relative;
   padding: 170px 0 0;
   min-height: 500px;
   z-index: -2;

   .globe1 {
      position: absolute;
      top: 12%;
      left: 9%;
      width: 130px;
      height: 130px;
      animation: globe1 4s linear infinite;
      animation-delay: 0.2s;
      z-index: -1;
   }

   .globe2 {
      position: absolute;
      top: 18%;
      right: 28%;
      width: 100px;
      height: 100px;
      animation: globe1 4s linear infinite;
      animation-delay: 0.2s;
   }

   .globe3 {
      position: absolute;
      z-index: 1;
      top: -10%;
      left: 33%;
      max-width: 300px;
      height: 300px;
   }

   .dots-left {
      position: absolute;
      top: 15%;
      left: 5%;
      max-width: 550px;
   }

   .light {
      position: absolute;
      right: 9%;
      top: 10%;
      z-index: 1;
      animation: lightopen 2s linear infinite;
      animation-delay: 0.3s;
   }

   .dots-right {
      position: absolute;
      top: 8%;
      right: 1%;
      max-width: 750px;
   }

   .img-right {
      position: absolute;
      right: 7%;
      top: 30%;
      animation: fly1 4s linear infinite;
      animation-delay: 0.5s;
      max-width: 332px;
      height: 505px;
      z-index: 1;
   }

   .bottom-shape {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      overflow: hidden;
      height: 100px;
   }

   .bottom-shape img {
      width: 100%;
      height: 100%;
   }
}



@keyframes fly1 {
   0% {
      transform: translateY(0px);
   }

   50% {
      transform: translateY(-15px);
   }

   100% {
      transform: translateY(0px);
   }
}

@keyframes globe1 {
   0% {
      transform: rotate(360deg);
   }
}

@keyframes globe2 {
   0% {
      transform: rotate(360deg);
   }
}

@keyframes lightopen {
   50% {
      transform: rotate(10deg);
   }

   100% {
      transform: rotate(0deg);
   }
}
</style>