<script>
import AppFacts from '../components/sharedComponents/AppFacts.vue';
import AppSkill from '../components/sharedComponents/AppSkill.vue';
import AppTeam from '../components/sharedComponents/AppTeam.vue';
import AppClients from '../components/sharedComponents/AppClients.vue';

export default {

    components: {

        AppFacts,
        AppSkill,
        AppTeam,
        AppClients,

    }

}

</script>

<template>

    <AppSkill />

    <AppFacts />

    <section class="work-section pt-120">
        <div class="container">
            <div class="container">
                <div class="section-header section-center wow fadeInDown" data-wow-delay="0.4s"
                    style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInDown;">
                    <h5 class="section-cete">
                        Our Works
                    </h5>
                    <h2 class="section-title">
                        Featured Productions
                    </h2>
                    <p>
                        Here's just a small sample of some of those projects that we're quite proud of. If you're
                        looking
                        for something specific feel free to get in contact with us.
                    </p>
                </div>
                <div class="row g-4">
                    <div class="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.2s"
                        style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
                        <div class="work-thumb">
                            <img src="../assets/Img/main-img//work1.png" alt="work-img">
                            <div class="video-overlay">
                                <a href="https://www.youtube.com/watch?v=sNub3X8fHew" class="video-btn">
                                    <i class="fas fa-play"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.4s"
                        style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;">
                        <div class="work-thumb">
                            <img src="../assets/Img/main-img//work2.png" alt="work-img">
                            <div class="video-overlay">
                                <a href="https://www.youtube.com/watch?v=sNub3X8fHew" class="video-btn">
                                    <i class="fas fa-play"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.6s"
                        style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInUp;">
                        <div class="work-thumb">
                            <img src="../assets/Img/main-img//work3.png" alt="work-img">
                            <div class="video-overlay">
                                <a href="https://www.youtube.com/watch?v=sNub3X8fHew" class="video-btn">
                                    <i class="fas fa-play"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.8s"
                        style="visibility: visible; animation-delay: 0.8s; animation-name: fadeInUp;">
                        <div class="work-thumb">
                            <img src="../assets/Img/main-img//work4.png" alt="work-img">
                            <div class="video-overlay">
                                <a href="https://www.youtube.com/watch?v=sNub3X8fHew" class="video-btn">
                                    <i class="fas fa-play"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="work-btn">
                <a href="#0" class="cmn--border">
                    <span>
                        See Our Work
                    </span>
                </a>
            </div>
        </div>
    </section>

    <h2>process</h2>

    <AppTeam />

    <AppClients />

</template>

<style scoped lang="scss">
//WORK SECTION

.work-section {
    padding-top: 120px;

    .section-header {
        position: relative;
        margin-bottom: 50px;
        text-align: center;
        max-width: 720px;
        margin: 0 auto 50px;

        h5 {
            font-size: 24px;
            line-height: 31.2px;
            margin-top: -3px;
            font-family: "Chakra Petch", sans-serif;
            color: #4d36dc;
        }

        h2 {
            font-weight: 700;
            font-size: 57px;
            line-height: 74.1px;
            margin-top: -12px;
            font-family: "Chakra Petch", sans-serif;
        }

        p {
            font-size: 18px;
            max-width: 600px;
            margin: 0 auto;
        }
    }

    .work-thumb {
        width: 100%;
        height: 100%;
        border-radius: 20px;
        position: relative;
        transition: all 0.3s;

        .video-overlay {
            
            .video-btn {
                width: 60px;
                height: 60px;
                line-height: 62px;
                text-align: center;
                border-radius: 50%;
                background-color: white;
                display: block;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                opacity: 1;

                i {
                    color: orange;
                }
            }
        }
    }

    .work-btn {
        text-align: center;
        margin: 45px 0 0 auto;
        
        .cmn--border {
            box-shadow: none;
            color: black;
            border-radius: 100px;
            padding: 12px 38px 12px;
            font-size: 18px;
            font-weight: 600;
            display: inline-block;
            position: relative;
            box-shadow: 0px 8px 18px 0px rgba(109, 100, 139, 0.61);
        }

        .cmn--border:hover{
            box-shadow: none;
            color: white;
            border-radius: 100px;
            padding: 12px 38px 12px;
            font-size: 18px;
            font-weight: 600;
            display: inline-block;
            background-color: black;
            transition: 0.6s;
            position: relative;
            box-shadow: 0px 8px 18px 0px rgba(109, 100, 139, 0.61);
        }
    }

}

//END OF WORK SECTION</style>