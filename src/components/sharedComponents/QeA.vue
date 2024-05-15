<script>
export default {
   props: {

      qeaElem: Object,

   },

   methods: {

      getAnswer() {

         console.log("clicked");

         this.qeaElem.answerOut = !this.qeaElem.answerOut

      },

   }

}

</script>

<template>

   <div>

   </div>

   <div class="d-flex bg-white justify-content-between align-items-center border rounded-2 my-2 p-2 px-3">

      <h4 class="m-0">{{ qeaElem.question }}</h4>

      <button @click="getAnswer" class="logo-container border rounded-circle d-flex justify-content-center align-items-center">

         <i v-if="qeaElem.answerOut" class="fa-solid fa-minus ms-text-l-purple"></i>

         <i v-else class="fa-solid fa-plus ms-text-l-purple"></i>

      </button>

   </div>

   <div v-if="qeaElem.answerOut" class="d-flex justify-content-between align-items-center px-3">

      <p>{{ qeaElem.answer }}</p>

   </div>

</template>

<style lang="scss" scoped>
.logo-container {
   height: 35px;
   width: 35px;

}
</style>