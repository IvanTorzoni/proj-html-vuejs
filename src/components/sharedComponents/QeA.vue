<script>
export default {
   props: {

      qeaElem: Object,

   },

   methods:{

      getImg(imgPath) {

         return new URL(`../../assets/Img/contact-img/${imgPath}-contact.png`, import.meta.url).href;
      }
   }

}

</script>

<template>

<div class="d-flex justify-content-between align-items-center border rounded-2 my-2 p-2">

   <h4>{{ qeaElem.question }}</h4>

   <i>plus</i>
</div>

<div class="d-flex justify-content-between align-items-center">

<h4>{{ qeaElem.answer }}</h4>

</div>

</template>

<style lang="scss" scoped></style>