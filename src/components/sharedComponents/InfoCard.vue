<script>
export default {
   props: {

      cardElem: Object,

   },

   methods:{

      getImg(imgPath) {

         return new URL(`../../assets/Img/contact-img/${imgPath}-contact.png`, import.meta.url).href;
      }
   }

}

</script>

<template>

   <div class="border rounded-2 bg-white d-flex align-items-center justify-content-start">

      <div class="img-container rounded-circle ms-bg-l-purple d-flex justify-content-center align-items-center p-3">

         <img :src="getImg(cardElem.imgPath)" alt="">

      </div>
   
      <div class="ms-font-cp p-2">
   
         <h4 class="m-1">{{ cardElem.title }}</h4>
   
         <p class="m-1">{{ cardElem.info }}</p>

      </div>

   </div>

</template>

<style lang="scss" scoped>

.img-container {
   height: 90px;
   width: 90px;

}

.logo-container {
   height: 25px;
   width: 25px;

}

</style>