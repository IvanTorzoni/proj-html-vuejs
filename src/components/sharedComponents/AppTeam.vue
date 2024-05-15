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
   <div class="container pt-5 pb-5">
      <div class="text-center">
         <h6> Anidio Magic Team Member </h6>
         <h1>Let Us Animate Your Project </h1>
         <p>We create new worlds! Let's collaborate and create engaging, effective, award-winning animations </p>
      </div>

      <div class="team-slider">
         <div class="team-slide-track d-flex gap-4" :style="{ width: trackWidth }">
            <div class="member-slide" v-for="item in teamInfo">
               <img :src="getMemberPic(item.memberPic)"  alt="" />
               <p>{{ item.memberName }}</p>
               <p>{{ item.memberRole }}</p>
            </div>
         </div>
      </div>
   </div>
   

</template>

<style lang="scss">
.team-slider {
   background: white;
   margin: auto;
   overflow: hidden;
   position: relative;
   width: 100%;
 }
</style>