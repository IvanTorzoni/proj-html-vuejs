<script>
export default {
   data(){
      return{
         //Array per aggiunta dinamica
         skillTree : [
            {  
               skillImage : "smart1",
               skillTitle : "3D modeling",
               paragraph : "We constantly ask questions. It helps us shape your story and deliver the results you crave. Yep, we'll drill deep to deliver above and beyond your expectations." 
            },
            {
               skillImage : "smart3",
               skillTitle : "Collaboration",
               paragraph : "We constantly ask questions. It helps us shape your story and deliver the results you crave. Yep, we'll drill deep to deliver above and beyond your expectations."
            },
            {
               skillImage : "smart1",
               skillTitle : "Creativity",
               paragraph : "We constantly ask questions. It helps us shape your story and deliver the results you crave. Yep, we'll drill deep to deliver above and beyond your expectations."
            },
         ],
         //Array di gradient per aggiunta dinamica
         bgGradient : ['-webkit-linear-gradient(90deg, rgba(255, 122, 31, 0.20196) 0%, rgba(1, 5, 48, 0) 100%)',
                    '-webkit-linear-gradient(90deg, rgba(77, 54, 220, 0.20196) 0%, rgba(1, 5, 48, 0) 100%)',
                    '-webkit-linear-gradient(90deg, rgba(255, 0, 15, 0.20196) 0%, rgba(1, 5, 48, 0) 100%)'
         ]
      };
   },
   methods : {
      getBgGradient(index){
         return this.bgGradient[index];
      },
      getImageSkill(imgSkill){
         return new URL(`../../assets/Img/about-img/${imgSkill}.png`, import.meta.url).href;
      }
   }
}

</script>

<template>

   <section class="skill-section ms_pt-120 ms_pb-120">
      <!-- Container -->
      <div class="container z-i-1">
         <!-- Row -->
         <div class="row">
            <!-- Colonna unica per lasciare spazio all'immagine sulla sx 9/12 col e 3/12 all'img -->
            <div class="col-lg-9 offset-lg-3">
               <!-- Inizio prima sub-row -->
               <div class="row">
                  <!-- Colonna da 9/12 -->
                  <div class="col-lg-9 text-center">
                     <h4 class="ms_sub-color"> Our Love For Animation </h4>
                     <h2 class="f-chakra ms_fs-h-big"> We're Storytelling Experts <br> With Creative Smarts </h2>
                  </div>
                  <!-- /Colonna-->
               </div>
               <!-- /prima sub-row -->
               <!-- Inizio seconda sub-row -->
               <div class="row">
                  <div class="col-lg-4 d-flex g-4" v-for="(card,i) in skillTree" >
                     <div class="ms_card text-center f-chakra" :style="{ backgroundImage : getBgGradient(i) }">
                        <img :src="getImageSkill(card.skillImage)">
                        <h3 class="ms_fs-h-med pt-3 ms_fw-500">{{ card.skillTitle }}</h3>
                        <p class="f-barlow ms_f-p">{{ card.paragraph }}</p>
                     </div>
                  </div>
               </div>
               <!-- /seconda sub-row -->
            </div>
            <!-- /Colonna unica 9/12-->
         </div>
         <!-- /Row -->
      </div>
      <!-- /Container -->
      <div class="smart-man">
         <img src="../../assets/Img/about-img/smart.png" alt="" />
      </div>
      <div class="rocket">
         <img src="../../assets/img/about-img/smart4.png" />
      </div>
   </section>

</template>

<style lang="scss">
/* Skill-section */
.skill-section{
   position: relative;
}
.smart-man{
   position: absolute;
   top: 0;
   left: 0;
   max-width: 500px;
   z-index: -1;
   img{
      height: 100%;
      width: 100%;
   }
}

.rocket{
   position: absolute;
   bottom: 0;
   right: 0;
   max-width: 150px;
   z-index: -1;
   img{
      height: 100%;
      width: 100%;
   }
}

/* Card */
.ms_card{
   padding: 35px 15px;
   border: 1px solid lightgray;
   border-radius: 30px;
   transition: 0.7s;
}

.ms_card:hover{
   border: 1px solid white;
   transition: 0.7s;
}

/* Padding */
.ms_pt-120{
   padding-top: 120px;
}

.ms_pb-120{
   padding-bottom: 120px;
}
/* z-index */
.z-i-1{
   z-index: 1;
}
</style>