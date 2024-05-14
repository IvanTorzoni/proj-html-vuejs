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

   <!-- Call To Action - Section -->
   <section class="ms-bg-purple py-3">

      <div class="container-sm d-flex flex-column justify-content-center align-items-center">

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

   </section>
   <!-- /Call To Action - Section -->

   <!-- Footer -->
   <footer class="py-3">

      <div class="container-sm">

         <!-- Footer Menu - Section -->
         <section class="row justify-content-between align-items-center">

            <!-- Footer Logo -->
            <div class="col-5">

               <img src="../assets/Img/main-img/footer-logo.png" alt="Logo Anidio">

            </div>
            <!-- /Footer Logo -->

            <!-- Footer Menu -->
            <ul class="col-7 row row-col-7 text-end">

               <li v-for="item in menu" class="col">

                  <router-link :to="{ name: item.routeName }">

                     <span>{{ item.title }}</span>
                     
                  </router-link>

               </li>


            </ul>
            <!-- /Footer Menu -->

         </section>
         <!-- /Footer Menu - Section -->

         <hr>

         <!-- Footer Copyright - Section -->
         <section class="row justify-content-between align-items-center">

            <p class="col m-0">Copyright © 2022 <a class="ms-text-l-purple"
                  href="https://www.templatemonster.com/authors/softivus/"><strong>Softivus</strong></a>. All rights
               reserved. </p>

            <!-- Footer Socials -->
            <ul class="col row row-col-8 text-end">

               <li v-for="social in socialsMenu" class="col justify-content-end">

                  <a href="">

                     <i :class="`${social.iconClasses}`"></i>

                  </a>

               </li>

            </ul>
            <!-- /Footer Socials -->

         </section>
         <!-- /Footer Copyright - Section -->

      </div>

   </footer>
   <!-- /Footer -->

</template>

<style lang="scss" scoped></style>