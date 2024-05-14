<script>
import SimpleButton from '../components/sharedComponents/SimpleButton.vue';
import InfoCard from '../components/sharedComponents/InfoCard.vue';

export default {

  components: {

    SimpleButton,
    InfoCard,

  },

  data() {
    return {

      infoCardList: [

        {
          title: "Address",
          imgPath: "map",
          info: "2464 Royal Ln. Mesa, New Jersey 45463",
        },
        {
          title: "Email",
          imgPath: "email",
          info: "2464 Royal Ln. Mesa, New Jersey 45463",
        },
        {
          title: "Phone",
          imgPath: "phone",
          info: "2464 Royal Ln. Mesa, New Jersey 45463",
        },

      ]
    }
  }

}
</script>

<template>

  <div class="container-lg">

    <!-- Contact Us - Section -->
    <section class="py-3">

      <div class="container-sm d-flex flex-column justify-content-center align-items-center">

        <h5 class="ms-font-cp ms-text-l-purple">Contact Us</h5>

        <h2 class="ms-font-cp ms-text-d-purple text-center">How to Reach Us</h2>

        <p class="font-b ms-text-d-purple">We're always interested in having a chat or discussing your next big project, so drop us a line!</p>

        <!-- Info&ContactForm -->
        <div class="ms-bg-pink d-flex justify-content-between p-5">

          <!-- Infos -->
          <div>

            <h3 class="ms-font-cp ms-text-l-purple">Reach us directly!</h3>

            <div class="row g-2">

              <InfoCard class="col-12" v-for="card in infoCardList" :cardElem="card"/>

            </div>

            <hr>

            <div class="row g-2">

              <h4>Follow Us</h4>


            </div>

          </div>
          <!-- Infos -->

          <!-- ContactForm -->
          <div>

            <SimpleButton bgColor="ms-bg-pink" color="ms-text-d-purple" />

          </div>
          <!-- /ContactForm -->

        </div>
        <!-- /Info&ContactForm -->

      </div>

    </section>
    <!-- /Contact Us - Section -->

  </div>

  <div class="container-sm">

    <h2>FAQ</h2>

  </div>

</template>