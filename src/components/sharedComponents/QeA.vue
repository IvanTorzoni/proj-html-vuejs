<script>
export default {
   props: {

      qeaElem: Object,
      idNumber: Number,

   },

   data() {
      return {

         activeId: null,
         
      }
   },

   methods: {

      // getAnswer() {

      //    console.log(this.idNumber);

      //    this.qeaElem.answerOut = !this.qeaElem.answerOut


      // },

   },

   emits: [

      'getAnswer',

   ],

}

</script>

<template>

   <div class="d-flex bg-white justify-content-between align-items-center border rounded-2 my-2 p-3 px-3">

      <span class="m-0 fw-medium" :class="{ selected: qeaElem.answerOut }"> {{ qeaElem.question }} </span>

      <button @click="$emit('getAnswer', idNumber)"
         class="logo-container border rounded-circle d-flex justify-content-center align-items-center">

         <i v-if="qeaElem.answerOut" class="fa-solid fa-minus ms-text-l-purple"></i>

         <i v-else class="fa-solid fa-plus ms-text-l-purple"></i>

      </button>

   </div>

   <div v-if="qeaElem.answerOut" class="px-3">

      <p>{{ qeaElem.answer }}</p>

   </div>

</template>

<style lang="scss" scoped>
.logo-container {
   height: 35px;
   width: 35px;
}

.selected {
   color: #0c63e4;
}
</style>