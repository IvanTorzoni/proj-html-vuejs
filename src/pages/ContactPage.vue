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
          info: "exampe@gmail.com",
        },
        {
          title: "Phone",
          imgPath: "phone",
          info: "(406) 555-0120",
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

        <p class="font-b ms-text-d-purple text-center">We're always interested in having a chat or discussing your next
          big project,
          so drop us a line!</p>

        <!-- Info&ContactForm -->
        <div class="row ms-bg-pink d-flex justify-content-between align-items-center p-5">

          <!-- Infos -->
          <div class="col-5">

            <h3 class="ms-font-cp ms-text-l-purple">Reach us directly!</h3>

            <div class="row g-2">

              <InfoCard class="col-12" v-for="card in infoCardList" :cardElem="card" />

            </div>

            <hr>

            <div class="row g-2">

              <h4>Follow Us</h4>


            </div>

          </div>
          <!-- Infos -->

          <!-- ContactForm -->
          <div class="col-6 border border-4 rounded-4 p-3 ms-font-cp ms-text-d-purple">

            <h2 class="text-center">Contact Form</h2>

            <p class="text-center">Tell us your story and let's make it awesome</p>

            <form>

              <div class="mb-3">

                <label for="user-name" class="form-label">NAME</label>

                <input type="text" class="form-control" id="user-name" aria-describedby="emailHelp" placeholder="What's your name?">

              </div>

              <div class="mb-3">

                <label for="user-email" class="form-label">EMAIL</label>

                <input type="email" class="form-control" id="user-email" placeholder="What's your email?">

              </div>

              <div class="mb-3">

                <label for="user-phone" class="form-label">PHONE</label>

                <input type="number" class="form-control" id="user-phone" placeholder="Your Phone Number">

              </div>

              <div class="mb-3">

                <label for="user-text" class="form-label">LEAVE A MESSAGE</label>

                <textarea class="form-control" id="user-text" rows="3" placeholder="Please, type your message here..."></textarea>

              </div>

              <SimpleButton type="submit" text="Submit" bgColor="ms-bg-pink" color="ms-text-d-purple" />

            </form>

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