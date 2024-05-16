<script>
export default {

}

</script>

<template>

   <section class="hero-section">
      <div class="man-left">
         <img src="../assets/Img/main-img/left-man.png" alt="left-man">
      </div>
      <div class="globe1">
         <img src="../assets/Img/main-img/globe1.png" alt="globe-img">
      </div>
      <div class="globe2">
         <img src="../assets/Img/main-img/globe2.png" alt="globe-img">
      </div>
      <div class="globe3">
         <img src="../assets/Img/main-img/globe3.png" alt="globe-img">
      </div>
      <div class="dots-left">
         <img src="../assets/Img/main-img/dots-left.png" alt="dots-left">
      </div>
      <div class="container">
         <div class="row justify-content-center">
            <div class="col-xxl-9">
               <div class="hero-content wow fadeInUp">
                  <h5 class="ms-text-orange">
                     Imagine, Create, Experience
                  </h5>
                  <h1 class="text-white">
                     We Animate
                  </h1>
                  <h1 class="text-white">
                     With Ninja-Like Precision
                  </h1>
                  <p class="text-white">
                     We are a character-driven animation studio striving to make high-quality animations.
                  </p>
                  <div class="banner-cmn">
                     <a href="#0" class="cmn--btn">
                        <span>Start a Project</span>
                     </a>
                     <a href="#0" class="cmn--border">
                        <span>Portfolio</span>
                     </a>
                  </div>
               </div>
               <div class="hero-thumb">
                  <img src="../assets/Img/main-img/middle.png" alt="hero-img">
                  <a href="https://www.youtube.com/watch?v=sNub3X8fHew" class="video-btn" target="_blank">
                     <i class="fas fa-play"></i>
                  </a>
               </div>
            </div>
         </div>
      </div>
      <div class="light">
         <img src="../assets/Img/main-img/light.png" alt="light-img">
      </div>
      <div class="dots-right">
         <img src="../assets/Img/main-img/dots-right.png" alt="dots-right">
      </div>
      <div class="man-right">
         <img src="../assets/Img/main-img/right-man.png" alt="left-man">
      </div>
      <div class="bottom-shape">
         <img src="../assets/Img/main-img/bottom-shape.png" alt="-banner-shape">
      </div>
   </section>

</template>

<style lang="scss" scoped>
.hero-section {
   background: url(../assets/Img/main-img/banner-bg.png) no-repeat bottom center;
   background-size: cover;
   position: relative;
   padding: 170px 0 0;
   margin-bottom: 200px;

   .man-left {
      position: absolute;
      left: 2%;
      top: 30%;
      z-index: 1;
      animation: fly1 3s linear infinite;
      animation-delay: 0.5s;
      max-width: 332px;
      height: 505px;
   }

   .globe1 {
      position: absolute;
      top: 12%;
      left: 9%;
      width: 130px;
      height: 130px;
      animation: globe1 4s linear infinite;
      animation-delay: 0.2s;
   }

   .globe2 {
      position: absolute;
      top: 18%;
      right: 28%;
      width: 100px;
      height: 100px;
      animation: globe1 4s linear infinite;
      animation-delay: 0.2s;
   }

   .globe3 {
      position: absolute;
      z-index: 1;
      top: -10%;
      left: 33%;
      max-width: 300px;
      height: 300px;
   }

   .dots-left {
      position: absolute;
      top: 15%;
      left: 5%;
      max-width: 550px;
   }

   .hero-content {
      position: relative;
      z-index: 1;
      text-align: center;
      margin-bottom: 60px;

      h5 {
         margin-bottom: 22px;
         font-size: 24px;
         line-height: 31.2px;
         margin-top: -3px;
         font-family: "Chakra Petch", sans-serif;
      }

      h1 {
         margin-bottom: 13px;
         font-size: 76px;
         font-weight: 700;
         line-height: 91.2px;
         margin-top: -7px;
         font-family: "Chakra Petch", sans-serif;
      }

      p {
         font-size: 24px;
         line-height: 34px;
         line-height: 30px;
         margin-bottom: 0;
         font-family: "Barlow", sans-serif;
      }

      .banner-cmn {
         margin-top: 35px;
         display: flex;
         align-items: center;
         justify-content: center;
         flex-wrap: wrap;

         .cmn--btn {
            margin: 10px 25px 10px 0;
            border-radius: 100px;
            padding: 12px 38px 12px;
            font-size: 18px;
            font-weight: 600;
            display: inline-block;
            color: black;
            background-color: white;
            transition: all 0.5s;
            position: relative;
            box-shadow: 0px 8px 18px 0px rgba(109, 100, 139, 0.61);
         }

         .cmn--btn:hover {
            margin: 10px 25px 10px 0;
            border-radius: 100px;
            padding: 12px 38px 12px;
            font-size: 18px;
            font-weight: 600;
            display: inline-block;
            color: white;
            background-color: #270264;
            transition: all 0.5s;
            position: relative;
            box-shadow: 0px 8px 18px 0px rgba(109, 100, 139, 0.61);
         }

         a {
            text-decoration: none;
            margin: 0;
            color: var(--theme-color);
            font-family: "Chakra Petch", sans-serif;
         }

         .cmn--border {
            border-radius: 100px;
            padding: 12px 38px 12px;
            font-size: 18px;
            font-weight: 600;
            display: inline-block;
            color: white;
            transition: all 0.5s;
            position: relative;
            box-shadow: 0px 8px 18px 0px rgba(109, 100, 139, 0.61);
         }
      }
   }

   .hero-thumb {
      transform: translateY(200px);
      margin-top: -200px;
      border-radius: 20px;
      z-index: 99;
      width: 100%;
      position: relative;

      .video-btn {
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         background-color: #a616ea;
         width: 70px;
         height: 70px;
         display: block;
         line-height: 70px;
         border-radius: 50%;
         text-align: center;
      }
   }

   .light {
      position: absolute;
      right: 9%;
      top: 10%;
      z-index: 1;
      animation: lightopen 2s linear infinite;
      animation-delay: 0.3s;
   }

   .dots-right {
      position: absolute;
      top: 8%;
      right: 1%;
      max-width: 750px;
   }

   .man-right {
      position: absolute;
      right: 7%;
      top: 30%;
      animation: fly1 4s linear infinite;
      animation-delay: 0.5s;
      max-width: 332px;
      height: 505px;
   }

   .bottom-shape {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      overflow: hidden;
      height: 100px;
   }

   .bottom-shape img {
      width: 100%;
      height: 100%;
   }
}



@keyframes fly1 {
   0% {
      transform: translateY(0px);
   }

   50% {
      transform: translateY(-15px);
   }

   100% {
      transform: translateY(0px);
   }
}

@keyframes globe1 {
   0% {
      transform: rotate(360deg);
   }
}

@keyframes globe2 {
   0% {
      transform: rotate(360deg);
   }
}

@keyframes lightopen {
   50% {
      transform: rotate(10deg);
   }

   100% {
      transform: rotate(0deg);
   }
}
</style>