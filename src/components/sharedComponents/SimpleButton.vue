<script>
export default {

   props: {

      bgColor: String,
      color: String,

   }

}

</script>

<template>

   <button class="ms-btn btn rounded-pill ms-2" :class="bgColor, color">Submit</button>

</template>

<style lang="scss" scoped>
.ms-btn {
   padding: 12px 38px 12px;
   display: inline-block;
   box-shadow: 0px 8px 18px 0px rgba(109, 100, 139, 0.61);
   border: 1px solid rgba(0, 0, 0, 0);
   transition: 0.7s;

   &:hover {
      transition: 0.7s;
      color: white;
      border: 1px solid white;
      background-color: rgba(0, 0, 0, 0);

   }

}
</style>