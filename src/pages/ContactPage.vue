<script>
import SimpleButton from '../components/sharedComponents/SimpleButton.vue';
import InfoCard from '../components/sharedComponents/InfoCard.vue';
import QeA from '../components/sharedComponents/QeA.vue';

export default {

  components: {

    SimpleButton,
    InfoCard,
    QeA,

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

      ],

      // Social Networks list
      socialsMenu: [
        {
          name: "facebook",
          iconClasses: "fa-brands fa-facebook-f",
        },
        {
          name: "instagram",
          iconClasses: "fa-brands fa-instagram",
        },
        {
          name: "twitter",
          iconClasses: "fa-brands fa-twitter",
        },
        {
          name: "whatsapp",
          iconClasses: "fa-brands fa-whatsapp",
        },

      ],

      qeaList: [

        {
          question: "How do I know what kind of video I need?",
          answer: "Quisque ultricies enim ac lacus feugiat mattis. In et ipsum sed tellus interdum mattis sit amet id mi. Phasellus nec eros in felis blandit cursus. Nulla facilisi. Nam in purus elit. Aenean tempor volutpat ante .",
          answerOut: false,
        },
        {
          question: "Do you currently have career openings?",
          answer: "Quisque ultricies enim ac lacus feugiat mattis. In et ipsum sed tellus interdum mattis sit amet id mi. Phasellus nec eros in felis blandit cursus. Nulla facilisi. Nam in purus elit. Aenean tempor volutpat ante .",
          answerOut: false,
        },
        {
          question: "How long will it take to create an animation video?",
          answer: "Quisque ultricies enim ac lacus feugiat mattis. In et ipsum sed tellus interdum mattis sit amet id mi. Phasellus nec eros in felis blandit cursus. Nulla facilisi. Nam in purus elit. Aenean tempor volutpat ante .",
          answerOut: false,
        },
        {
          question: "How long do you need for the video creation process?",
          answer: "Quisque ultricies enim ac lacus feugiat mattis. In et ipsum sed tellus interdum mattis sit amet id mi. Phasellus nec eros in felis blandit cursus. Nulla facilisi. Nam in purus elit. Aenean tempor volutpat ante .",
          answerOut: false,
        },
        {
          question: "Will I take part in the creation process?",
          answer: "Quisque ultricies enim ac lacus feugiat mattis. In et ipsum sed tellus interdum mattis sit amet id mi. Phasellus nec eros in felis blandit cursus. Nulla facilisi. Nam in purus elit. Aenean tempor volutpat ante .",
          answerOut: false,
        },
        {
          question: "What type / format of animated video can I order?",
          answer: "Quisque ultricies enim ac lacus feugiat mattis. In et ipsum sed tellus interdum mattis sit amet id mi. Phasellus nec eros in felis blandit cursus. Nulla facilisi. Nam in purus elit. Aenean tempor volutpat ante .",
          answerOut: false,
        },
        {
          question: "What if I don’t like what you deliver?",
          answer: "Quisque ultricies enim ac lacus feugiat mattis. In et ipsum sed tellus interdum mattis sit amet id mi. Phasellus nec eros in felis blandit cursus. Nulla facilisi. Nam in purus elit. Aenean tempor volutpat ante .",
          answerOut: false,
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

        <!-- Section Titles -->
        <div class="text-center my-5">

          <h5 class="ms-font-cp ms-text-l-purple">Contact Us</h5>

          <h2 class="ms-font-cp ms-text-d-purple">How to Reach Us</h2>

          <p class="font-b ms-text-d-purple">We're always interested in having a chat or discussing your next
            big project,
            so drop us a line!</p>

        </div>
        <!-- /Section Titles -->

        <!-- Info&ContactForm -->
        <div class="row ms-bg-l-purple d-flex justify-content-between align-items-center p-5  mb-5">

          <!-- Infos -->
          <div class="col-5">

            <h3 class="ms-font-cp ms-text-d-purple mb-4">Reach us directly!</h3>

            <div class="row g-2">

              <InfoCard class="col-12 p-2" v-for="card in infoCardList" :cardElem="card" />

            </div>

            <hr>

            <div class="row g-2">

              <h4>Follow Us</h4>

              <!-- Socials -->
              <ul class="col row row-col-4">

                <li v-for="social in socialsMenu" class="col justify-content-end">

                  <div class="logo-container border rounded-circle d-flex justify-content-center align-items-center">

                    <a href="">

                      <i class="ms-text-d-purple" :class="`${social.iconClasses}`"></i>

                    </a>

                  </div>

                </li>

              </ul>
              <!-- /Socials -->


            </div>

          </div>
          <!-- Infos -->

          <!-- ContactForm -->
          <div class="col-6 border border-4 rounded-4 p-3 ms-font-cp ms-text-d-purple ms-bg-l-pink">

            <!-- Sub-Section Titles -->
            <div class="text-center">

              <h2>Contact Form</h2>

              <p>Tell us your story and let's make it awesome</p>

            </div>
            <!-- /Sub-Section Titles -->

            <form class="p-2">

              <div class="mb-3">

                <label for="user-name" class="form-label">NAME</label>

                <input type="text" class="form-control" id="user-name" aria-describedby="emailHelp"
                  placeholder="What's your name?">

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

                <textarea class="form-control" id="user-text" rows="3"
                  placeholder="Please, type your message here..."></textarea>

              </div>

              <div>

                <SimpleButton class="w-100" type="submit" text="Request a quote" bgColor="ms-bg-pink"
                  color="ms-text-d-purple" />

              </div>


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

    <!-- FAQ - Section -->
    <section>

      <!-- Section Titles -->
      <div class="text-center my-5">

        <h5 class="ms-font-cp ms-text-l-purple">We're Here to Help</h5>

        <h2 class="ms-font-cp ms-text-d-purple">Frequently Asked Questions</h2>

        <p class="font-b ms-text-d-purple">We're always interested in having a chat or discussing your next
          big project, so drop us a line!</p>

      </div>
      <!-- /Section Titles -->

      <!-- Q&A Accordion -->
      <div class="w-75 mx-auto mb-5">

        <QeA v-for="element in qeaList" :qeaElem="element" />

      </div>
      <!-- /Q&A Accordion -->

    </section>
    <!-- /FAQ - Section -->

  </div>

</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;


.logo-container {
  height: 25px;
  width: 25px;
  border-color: $pj-dark-purple;

}
</style>