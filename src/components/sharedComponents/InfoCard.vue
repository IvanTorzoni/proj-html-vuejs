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

   <div class="border rounded-2 bg-white">

      <div>
         <img :src="getImg(cardElem.imgPath)" alt="">
      </div>
   
      <div>
   
         <h4>{{ cardElem.title }}</h4>
   
         <p>{{ cardElem.info }}</p>

      </div>

   </div>

</template>

<style lang="scss" scoped></style>