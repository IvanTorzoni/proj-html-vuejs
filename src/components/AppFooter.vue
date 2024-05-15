<script>

export default {
   data() {
      return {

         // General Menu Links
         menu: [
            {
               title: "About",
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
   <section class="counter-section py-3">

      <div class="count-top-shape">
         <img src="../assets/Img/main-img/shape-top.png" alt="counter-shape">
      </div>

      <!-- Contents Newsletter -->
      <div class="container-sm d-flex flex-column justify-content-center align-items-center p-5">

         <h5 class="ms-font-cp ms-text-orange">We Create New Worlds!</h5>

         <h2 class="ms-font-cp text-white text-center">Want Tips On Your <br> Storytelling?</h2>

         <p class="font-b text-white">Join our newsletter for tips on how to elevate your brand through storytelling</p>

         <!-- Email Imput&Submit -->
         <div class="bg-white w-75 d-flex justify-content-between p-2  rounded-pill">

            <input class="rounded-pill border border-white flex-fill" type="email" aria-label="Enter your email"
               placeholder="Enter your email">

            <button class="ms-bg-pink btn rounded-pill ms-2">Submit</button>

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
   <footer class="py-5">

      <div class="container">

         <!-- Footer Menu - Section -->
         <section class="d-flex justify-content-between align-items-center">

            <!-- Footer Logo -->
            <div>

               <img src="../assets/Img/main-img/footer-logo.png" alt="Logo Anidio">

            </div>
            <!-- /Footer Logo -->

            <!-- Footer Menu -->
            <ul class="row row-col-6 text-end ms-font-cp">

               <li v-for="item in menu" class="col">

                  <router-link :to="{ name: item.routeName }">

                     <span class="col fw-bold">{{ item.title }}</span>

                  </router-link>

               </li>


            </ul>
            <!-- /Footer Menu -->

         </section>
         <!-- /Footer Menu - Section -->

         <hr>

         <!-- Footer Copyright - Section -->
         <section class="d-flex justify-content-between align-items-center">

            <p class="col m-0">Copyright © 2022 <a class="ms-text-l-purple"
                  href="https://www.templatemonster.com/authors/softivus/"><strong>Softivus</strong></a>. All rights
               reserved. </p>

            <!-- Footer Socials -->
            <ul class="row row-col-6 text-end">

               <li v-for="social in socialsMenu" class="col justify-content-end">

                  <div class="logo-container border rounded-circle d-flex justify-content-center align-items-center">

                     <a href="">
   
                        <i class="ms-text-l-purple" :class="`${social.iconClasses}`"></i>
   
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
      color: rgba(1,1,1,0);

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
   height: 25px;
   width: 25px;

}
</style>