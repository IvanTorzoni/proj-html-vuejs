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
               title: "Career",
               routeName: "career",
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
   <section>

      <h3 class="ms-font-h ms-text-orange">We Create New Worlds!</h3>

      <h2 class="ms-font-h">Want Tips On Your <br> Storytelling?</h2>

      <p class="font-p">Join our newsletter for tips on how to elevate your brand through storytelling</p>

      <div>

         <input type="email" aria-label="Enter your email">

         <button>Submit</button>

      </div>


   </section>
   <!-- /Call To Action - Section -->

   <!-- Footer -->
   <footer>

      <!-- Footer Menu - Section -->
      <section>

         <!-- Footer Logo -->
         <img src="../assets/Img/main-img/footer-logo.png" alt="Logo Anidio">
         <!-- /Footer Logo -->

         <!-- Footer Menu -->
         <ul>

            <li v-for="item in menu">

               <router-link>

                  {{ item.title }}

               </router-link>

            </li>

         </ul>
         <!-- /Footer Menu -->

      </section>
      <!-- /Footer Menu - Section -->

      <!-- Footer Copyright - Section -->
      <section>

         <p>Copyright © 2022 <a href="https://www.templatemonster.com/authors/softivus/">Softivus</a>. All rights
            reserved. </p>

         <!-- Footer Menu -->
         <ul>

            <li v-for="social in socialsMenu">

               <router-link>

                  <i :class="`${social.iconClasses}`"></i>
                  
               </router-link>

            </li>

         </ul>
         <!-- /Footer Menu -->

      </section>
      <!-- /Footer Copyright - Section -->

   </footer>
   <!-- /Footer -->

</template>

<style lang="scss" scoped></style>