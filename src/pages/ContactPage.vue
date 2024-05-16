<script>
import SimpleJumbo from '../components/sharedComponents/SimpleJumbo.vue';
import SimpleButton from '../components/sharedComponents/SimpleButton.vue';
import InfoCard from '../components/sharedComponents/InfoCard.vue';
import QeA from '../components/sharedComponents/QeA.vue';

export default {

  components: {

    SimpleJumbo,
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

      ],

      page: {

        pageName: "Contact",
        pageImg: null,
        pageBg: "../../assets/Img/contact-img/banner-contact.png",

      }

    }
  }

}
</script>

<template>

  <SimpleJumbo :pageObj="page"/>

  <!-- Contact Us - Section -->
  <div class="container-lg">

    <section class="py-3 d-flex flex-column justify-content-center align-items-center">

      <!-- Section Titles -->
      <div class="text-center my-5">

        <h5 class="f-chakra ms-text-l-purple">Contact Us</h5>

        <h2 class="f-chakra ms_fs-h-big ms-text-d-purple">How to Reach Us</h2>

        <p class="font-b ms-text-d-purple f-barlow">We're always interested in having a chat or discussing your next
          big project,
          so drop us a line!</p>

      </div>
      <!-- /Section Titles -->

      <!-- Info&ContactForm -->
      <div class="mb-5">

        <img class="wave" src="../assets/Img/main-img/shape-top.png" alt="background waves">

        <div class="row ms-bg-l-purple d-flex justify-content-between align-items-center p-5 mx-0">

          <!-- Infos -->
          <div class="col-5">

            <h3 class="ms-font-cp ms-text-d-purple mb-4 f-chakra ms_fw-600">Reach us directly!</h3>

            <div class="row g-2">

              <InfoCard class="col-12 p-2" v-for="card in infoCardList" :cardElem="card" />

            </div>

            <hr>

            <div class="row g-2">

              <h4>Follow Us</h4>

              <!-- Socials -->
              <ul class="col row">

                <li v-for="social in socialsMenu"
                  class="col-1 logo-container rounded-circle d-flex justify-content-center align-items-center me-2">

                  <a href="">

                    <i class="ms-text-d-purple" :class="`${social.iconClasses}`"></i>

                  </a>

                </li>

              </ul>
              <!-- /Socials -->


            </div>

          </div>
          <!-- Infos -->

          <!-- ContactForm -->
          <div class="col-6 border rounded-4 p-3 ms-font-cp ms-text-d-purple ms-bg-l-pink">

            <!-- Sub-Section Titles -->
            <div class="text-center">

              <h2 class="ms_fw-700">Contact Form</h2>

              <p class="f-barlow">Tell us your story and let's make it awesome</p>

            </div>
            <!-- /Sub-Section Titles -->

            <form class="p-2">

              <div class="mb-3">

                <label for="user-name" class="form-label ms_fw-500">NAME</label>

                <input type="text" class="form-control" id="user-name" aria-describedby="emailHelp"
                  placeholder="What's your name?">

              </div>

              <div class="mb-3">

                <label for="user-email" class="form-label ms_fw-500">EMAIL</label>

                <input type="email" class="form-control" id="user-email" placeholder="What's your email?">

              </div>

              <div class="mb-3">

                <label for="user-phone" class="form-label ms_fw-500">PHONE</label>

                <input type="number" class="form-control" id="user-phone" placeholder="Your Phone Number">

              </div>

              <div class="mb-3">

                <label for="user-text" class="form-label ms_fw-500">LEAVE A MESSAGE</label>

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

        <img class="wave" src="../assets/Img/main-img/shape-bottom.png" alt="background waves">

      </div>
      <!-- /Info&ContactForm -->

    </section>

  </div>
  <!-- /Contact Us - Section -->

  <!-- FAQ - Section -->
  <div class="position-relative">

    <img class="sphere" src="../assets/Img/contact-img/circle-contact.png" alt="background sphere">

    <img class="man" src="../assets/Img/contact-img/left-man-contact.png" alt="background man">

    <section class="container-sm">

      <!-- Section Titles -->
      <div class="text-center my-5">

        <h5 class="ms-font-cp ms-text-l-purple f-chakra">We're Here to Help</h5>

        <h2 class="ms-font-cp ms-text-d-purple ms_fw-700">Frequently Asked Questions</h2>

        <p class="font-b ms-text-d-purple f-barlow">We're always interested in having a chat or discussing your next
          big project, so drop us a line!</p>

      </div>
      <!-- /Section Titles -->

      <!-- Q&A Accordion -->
      <div class="w-75 mx-auto mb-5">

        <QeA v-for="element in qeaList" :qeaElem="element" />

      </div>
      <!-- /Q&A Accordion -->

    </section>

  </div>
  <!-- /FAQ - Section -->

</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;


.logo-container {
  height: 40px;
  width: 40px;
  border: 1px solid $pj-violet;

}

.wave {
  background-color: $pj-lighter-purple;
  width: 100%;
  object-fit: fill;
  height: 40px;
  display: block;
}

.sphere{
  position: absolute;
  right: 0;
  top: -100px;
  z-index: -1;

}

.man{
  position: absolute;
  left: 0;
  top: 20%;
  z-index: -1;
  max-height: 500px;
}
</style>