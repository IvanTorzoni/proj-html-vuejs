<script>
export default {

   props: {

      bgColor: String,
      color: String,
      type: String,
      text: String,

   },

}

</script>

<template>

   <button :type="type" class="ms-btn btn rounded-pill" :class="bgColor, color"> {{ text }}</button>

</template>

<style lang="scss" scoped>

.ms-btn {
   padding: .7rem 2rem .7rem;
   display: inline-block;
   border: 1px solid rgba(0, 0, 0, 0);
   transition: 0.7s;

   &:hover {
      transition: 0.7s;
      color: #b2aafb;
      border: 1px solid #b2aafb;
      background-color: rgba(0, 0, 0, 0);

   }

}

</style>