<script>
export default {
   data() {
      return {
         facts: [
            {
               clients: "700+",
               paragraph: "Projects Done"
            },
            {
               clients: "250+",
               paragraph: "Happy Clients"
            },
            {
               clients: "25+",
               paragraph: "Team Members"
            },
            {
               clients: "12+",
               paragraph: "Years on the Market"
            },
         ],
      };
   },
}


</script>

<template>

   <section class="counter-section">
      <div class="count-top-shape">
         <img src="../../assets/Img/main-img/shape-top.png" alt="counter-shape">
      </div>
      <div class="container">
         <div class="section-header section-center">
            <h2 class="section-title text-white f-chakra">
               Anidio Quick Facts
            </h2>
         </div>
         <div class="counter-wrapper text-white">
            <div class="container">
               <div class="row">
                  <div class="col-lg-12">
                     <div class="row">
                        <div class="col-lg-3 g-3" v-for="(card) in facts">
                           <div class="ms_card_facts text-center">
                              <h3 class="ms_fs-h-big f-chakra">{{ card.clients }}</h3>
                              <p class="ms-text-orange">{{ card.paragraph }}</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="globe-shape">
         <img src="../../assets/Img/main-img/globe.png" alt="globe-img">
      </div>
      <div class="count-bottom-shape">
         <img src="../../assets/Img/main-img/shape-bottom.png" alt="counter-shape">
      </div>
   </section>

</template>

<style lang="scss" scoped>
.counter-section {
   z-index: 0;
   background: url(../../assets/Img/main-img/counter-bg.png) no-repeat center center;
   background-size: cover;
   position: relative;
   overflow: hidden;
   padding-top: 100px;
   padding-bottom: 100px;

   .count-top-shape {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 2;
      overflow: hidden;

      img {
         display: block;
      }
   }

   .globe-shape {
      z-index: -1;
      position: absolute;
      left: 50%;
      top: 50%;
      width: 500px;
      height: 500px;
      animation: rotation 30s linear infinite;
      animation-delay: 0.3s;
      overflow: hidden;
      transform: translate(-50%, -50%);
   }

   .ms_card_facts {
      z-index: 2;
      padding: 35px 15px;
      border: 1px solid lightgray;
      border-radius: 30px;
   }

   .ms_card_facts:hover {
      animation: rotation-card 3s linear ;
      animation-delay: 0.3s;
   }

   .section-header {
      position: relative;
      z-index: 2;

      h2 {
         font-size: 3rem;
      }
   }

   .section-center {
      text-align: center;
      max-width: 720px;
      margin: 0 auto 50px;
   }

   .count-bottom-shape {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 2;
      width: 100%;
      overflow: hidden;
   }
}

@keyframes rotation {
   30% {
      transform: translate(-50%, -50%) rotate(180deg);
   }
}

@keyframes rotation-card {
   30% {
      transform: translate(-2%) rotate(30deg);
   }
}
</style>