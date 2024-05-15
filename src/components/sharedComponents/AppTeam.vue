<script>
export default {
   data(){
      return{
         teamInfo : [
            {
               memberPic : "team1",
               memberName : "Robert Coleman",
               memberRole : "Owner & Creative Director",
            },
            {
               memberPic : "team2",
               memberName : "Don Woods",
               memberRole : "Administrator",
            },
            {
               memberPic : "team1",
               memberName : "Tomas Nash",
               memberRole : "2d Animator & Compositor",
            },
            {
               memberPic : "team4",
               memberName : "Hector Vargas",
               memberRole : "Project Lead & Senior Animator",
            }
         ]
      };
   },
   methods: {
     //Gestione immagine dinamica
     getMemberPic(profilePic) {
       return new URL(`../../assets/Img/about-img/${profilePic}.png`, import.meta.url).href;
     },
   },
}

</script>

<template>
   <!-- Container Membri-->
   <div class="container team-cont pt-5 pb-5">
      <div class="shape-1">
         <img src="../../assets/img/about-img/shape.png" alt="">
      </div>
      <div class="shape-2">
         <img src="../../assets/img/about-img/shape2.png" alt="">
      </div>
      <!--Sezione titoli-->
      <div class="text-center">
         <h5 class="ms-text-l-purple pb-2"> Anidio Magic Team Member </h5>
         <h1 class="pb-2">Let Us Animate Your Project </h1>
         <p class="pb-5">We create new worlds! Let's collaborate and create engaging, effective, award-winning animations </p>
      </div>
      <!-- /Titoli-->

      <!--Slider Membri del team -->
      <div class="team-slider">
         <div class="team-slide-track d-flex gap-4 justify-content-between align-items-center h-100 p-5" :style="{ width: trackWidth }">
            <div class="member-slide col-4 text-center p-2" v-for="item in teamInfo">
               <img :src="getMemberPic(item.memberPic)" class="member-img" />
               <h5 class="pt-1 pb-1">{{ item.memberName }}</h5>
               <p>{{ item.memberRole }}</p>
               <ul class="d-flex justify-content-center gap-2">
                  <li class="ms-text-l-purple circle-icon"><a class="fa-brands fa-facebook-f" href="#"></a></li>
                  <li class="ms-text-l-purple circle-icon"><a class="fa-brands fa-twitter" href="#"></a></li>
                  <li class="ms-text-l-purple circle-icon"><a class="fa-brands fa-instagram" href="#"></a></li>
               </ul>
            </div>
         </div>
      </div>
      <!-- /Slider Membri del team-->
   </div>
   <!--/Container Membri-->
</template>

<style lang="scss">
.team-cont{
   position: relative;
}
/* Background Shapes */
.shape-1{
   position: absolute;
   top : 0;
   left: 0;
   z-index: -1;
   animation: bounce 3s infinite alternate;
   max-width: 580px;
}
.shape-2{
   position: absolute;
   top: 0;
   right: 0;
   z-index: -1;
   animation: bounce 3s infinite alternate;
   max-width: 580px;
}
/* Rimbalzo */
@keyframes bounce {
   0%, 100% {
      transform: translateX(0);
   }
   50% {
      transform: translateX(-30px);
   }
}
/* Team - Slider */
.team-slider {
   margin: auto;
   overflow: hidden;
   position: relative;
   width: 100%;
}
.team-slide-track{
   overflow-x : clip;
   min-height: 400px;
}
.member-slide{
   background-color: #fff5f0;
   border-radius: 30px;
      ul{
         padding-left: 0;
            li{
               display: flex;
               align-items: center;
               justify-content: center;
            }
      }
}
.circle-icon {
   width: 40px;
   height: 40px;
   border-radius: 50%;
   border: 1px solid lightgray;
   background-color: white;
   display: flex;
   justify-content: center;
   align-items: center;
}

.member-slide .member-img{
   width : 150px;
   transform: translateY(-40px);
   transition: transform 0.7s;
}

.member-slide:hover .member-img{
   transform: translateY(-20px);
   transition: 0.7s;
}
</style>