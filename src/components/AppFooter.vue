<script>

export default {
   data() {
      return {

         // General Menu Links
         menu: [
            {
               title: "About Us",
               routeName: "about",
            },
            {
               title: "Portfolio",
               routeName: "portfolio",
            },
            {
               title: "Pricing",
               routeName: "pricing",
            },
            {
               title: "Careers",
               routeName: "careers",
            },
            {
               title: "Contact",
               routeName: "contact",
            },
         ],

         // Social Networks list
         socialsMenu: [
            {
               name: "facebook",
               iconClasses: "fa-brands fa-facebook-f",
            },
            {
               name: "twitter",
               iconClasses: "fa-brands fa-twitter",
            },
            {
               name: "instagram",
               iconClasses: "fa-brands fa-instagram",
            },

         ],

      }
   }

}

</script>

<template>

   <!-- Newsletter - Section -->
   <section class="counter-section  ms_pt-80 ms_pb-80">

      <div class="count-top-shape">
         <img src="../assets/Img/main-img/shape-top.png" alt="counter-shape">
      </div>

      <!-- Contents Newsletter -->
      <div class="container-sm d-flex flex-column justify-content-center align-items-center p-5">

         <h5 class="ms-font-cp ms-text-orange f-chakra ms_fw-500 mb-4">We Create New Worlds!</h5>

         <h2 class="ms-font-cp text-white text-center ms_fs-h-big f-chakra">Want Tips On Your <br> Storytelling?</h2>

         <p class="font-b text-white f-barlow mb-5">Join our newsletter for tips on how to elevate your brand through
            storytelling</p>

         <!-- Email Imput&Submit -->
         <div class="bg-white w-65 d-flex justify-content-between p-2  rounded-pill">

            <input class="rounded-pill border border-white flex-fill p-2" type="email" aria-label="Enter your email"
               placeholder="Enter your email">

            <button class="ms-bg-pink btn rounded-pill ms-2 mr-3"><span class="p-3">Submit</span></button>

         </div>
         <!-- /Email Imput&Submit -->

      </div>
      <!-- /Contents Newsletter -->

      <div class="count-bottom-shape">
         <img src="../assets/Img/main-img/shape-bottom.png" alt="counter-shape">
      </div>

   </section>
   <!-- /Newsletter - Section -->

   <!-- Footer -->
   <footer class="ms_pt-120 pb-5">

      <div class="container ">

         <!-- Footer Menu - Section -->
         <section class="d-flex justify-content-between align-items-center">

            <!-- Footer Logo -->
            <div>

               <img src="../assets/Img/main-img/footer-logo.png" alt="Logo Anidio">

            </div>
            <!-- /Footer Logo -->

            <!-- Footer Menu -->
            <ul class="d-flex flex-end gap-4 ms-font-cp">

               <li v-for="item in menu">

                  <router-link :to="{ name: item.routeName }">

                     <span class="fw-semibold d-block">{{ item.title }}</span>

                  </router-link>

               </li>


            </ul>
            <!-- /Footer Menu -->

         </section>
         <!-- /Footer Menu - Section -->

         <hr>

         <!-- Footer Copyright - Section -->
         <section class="d-flex justify-content-between align-items-center">

            <p class="col m-0 f-barlow ms_fw-400">Copyright © 2022 <a class="ms-text-l-purple f-chakra ms_fw-500"
                  href="https://www.templatemonster.com/authors/softivus/"><strong>Softivus</strong></a>. All rights
               reserved. </p>

            <!-- Footer Socials -->
            <ul class="row row-col-6 text-end gap-3">

               <li v-for="social in socialsMenu" class="col justify-content-end ms-text-l-purple circle-icon social">

                  <div class="logo-container d-flex justify-content-center align-items-center">

                     <a href="#">

                        <i class="ms-text-l-purple ms_fs-small" :class="`${social.iconClasses}`"></i>

                     </a>

                  </div>

               </li>

            </ul>
            <!-- /Footer Socials -->

         </section>
         <!-- /Footer Copyright - Section -->

      </div>

   </footer>
   <!-- /Footer -->

</template>

<style lang="scss" scoped>

input:focus-visible {
   outline-width: 0px;
}

.ms_fw-400 {
   font-weight: 400;
}

.ms_fs-small {
   font-size: 14px;
}

.counter-section {
   background: url(../assets/Img/main-img/counter-bg.png) no-repeat center center;
   background-size: cover;
   position: relative;
   overflow: hidden;
   padding-top: 100px;
   padding-bottom: 100px;

   .count-top-shape {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      overflow: hidden;

      img {
         display: block;
         color: rgba(1, 1, 1, 0);

      }
   }

   .count-bottom-shape {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      overflow: hidden;
   }

}

.logo-container {
   height: 15px;
   width: 15px;

}

.ms_pt-80 {
   padding-top: 80px;
}

.ms_pb-80 {
   padding-bottom: 80px;
}

.w-65 {
   width: 65%;
}

.social {
   transition: 0.7s;
}

.social:hover {
   background-color: orange;
   transition: 0.7s;

   i {
      color: white;
      transition: 0.7s;
   }
}
</style>