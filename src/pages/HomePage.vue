<script>
import AppFacts from '../components/sharedComponents/AppFacts.vue';
import AppSkill from '../components/sharedComponents/AppSkill.vue';
import AppTeam from '../components/sharedComponents/AppTeam.vue';
import AppClients from '../components/sharedComponents/AppClients.vue';
import AppJumbo from '../components/AppJumbo.vue';

export default {
    components: {
        AppFacts,
        AppSkill,
        AppTeam,
        AppClients,
        AppJumbo
    },
    data() {
        return {
            workIdx: 0,

            workImg: [
                'work1',
                'work2',
                'work3',
                'work4',
            ],
            process: [
                {
                    image: '../assets/Img/main-img/process1.png',
                    title: 'Scripting',
                    text: 'We’ll take your idea and create a technical script which consists of action notes and animation descriptions',
                    badge: '1'
                },
                {
                    image: '../assets/Img/main-img/process2.png',
                    title: 'Pre-Production',
                    text: 'We’ll take your idea and create a technical script which consists of action notes and animation descriptions',
                    badge: '2'
                },
                {
                    image: '../assets/Img/main-img/process1.png',
                    title: 'Scripting',
                    text: 'We’ll take your idea and create a technical script which consists of action notes and animation descriptions',
                    badge: '3'
                },
                {
                    image: '../assets/Img/main-img/process2.png',
                    title: 'Pre-Production',
                    text: 'We’ll take your idea and create a technical script which consists of action notes and animation descriptions',
                    badge: '4'
                },
            ]
        }
    },
    methods: {
        getImageWork(workImg) {
            return new URL(`../assets/Img/main-img/${workImg}.png`, import.meta.url).href;
        },

        getImageProcess(process) {
            return new URL(`../assets/Img/main-img/${process.image}.png`, import.meta.url).href;
        },

        showNext: function () {
            if (this.workIdx === this.process.length - 1) {
                this.workIdx = 0;
            } else {
                this.workIdx++;
            }
        },

        showPrevious: function () {
            if (this.workIdx === 0) {
                this.workIdx = this.process.length - 1;
            } else {
                this.workIdx--;
            }
        }
    }
}

</script>

<template>

    <AppJumbo />

    <AppSkill />

    <AppFacts />

    <!-- Work Section -->
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
                    <div class="col-lg-6 col-md-6 wow fadeInUp" v-for="image in workImg">
                        <div class="work-thumb">
                            <img :src="getImageWork(image)" alt="work-img">
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

    <!-- Process Section -->
    <section class="process-section pt-120 pb-120">
        <div class="container">
            <div class="row align-items-center justify-content-between flex-row-reverse">
                <div class="col-xl-6">
                    <div class="process-content">
                        <div class="section-header wow fadeInDown" data-wow-delay="0.3s"
                            style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInDown;">
                            <h5 class="section-cete">
                                Our Process
                            </h5>
                            <h2 class="section-title">
                                Our Process for Your
                                Animation Production
                            </h2>
                            <p>
                                We have an effective process for working on animation
                            </p>
                        </div>
                        <div class="process-slider owl-theme owl-carousel owl-loaded owl-drag">

                            <div class="owl-stage-outer">
                                <div class="owl-stage">
                                    <div class="owl-item">
                                        <div class="process-items">
                                            <div class="thumb">
                                                <img src="../assets/Img/main-img/process1.png" alt="">
                                            </div>
                                            <div class="process-content">
                                                <h4>
                                                    <a href="#0">{{ process[workIdx].title }}</a>
                                                </h4>
                                                <p>
                                                    {{ process[workIdx].text }}
                                                </p>
                                            </div>
                                            <span class="badge">
                                                {{ process[workIdx].badge }}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="owl-nav">
                                <button type="button" role="presentation" class="owl-prev" @click="showPrevious"><i
                                        class="fas fa-arrow-left"></i></button>
                                <button type="button" role="presentation" class="owl-next" @click="showNext"><i
                                        class="fas fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-5">
                    <div class="process-thumb">
                        <img src="../assets/Img/main-img/process-thumb.png" alt="process-img">
                    </div>
                </div>
            </div>
        </div>
        <div class="rocket">
            <img src="../assets/Img/main-img/smart4.png" alt="rocket">
        </div>
    </section>
    <!-- Process Section -->

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

        .cmn--border:hover {
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

//END OF WORK SECTION

//PROCESS SECTION
.process-section {
    flex-wrap: wrap;
    position: relative;
    overflow: hidden;
    padding: 120px 0;

    .section-header {
        position: relative;
        margin-bottom: 50px;

        .section-cete {
            margin-bottom: 25px;
            color: #4d36dc;
        }

        .section-title {
            font-weight: 700;
            color: black;
            margin-bottom: 5px;
            font-size: 57px;
            line-height: 74.1px;
            margin-top: -12px;
            font-family: "Chakra Petch", sans-serif;
        }

        p {
            font-size: 18px;
            max-width: 600px;
            color: black;
        }
    }

    .owl-stage-outer {
        width: 100%;
        display: flex;
        flex-wrap: wrap;

        .owl-stage {
            display: flex;

            .hide {
                display: none;
            }
        }

        .process-items {
            border-radius: 20px;
            padding: 20px 20px;
            border: 1px solid lightgrey;
            transition: 0.8s;
            text-align: center;
            position: relative;
            width: 95%;

            .thumb {
                width: 140px;
                height: 140px;
                line-height: 140px;
                border-radius: 50%;
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 2s;
            }

            .badge {
                background: #f7f0ff;
                color: #8d829c;
                width: 44px;
                height: 82px;
                display: block;
                font-size: 18px;
                border-radius: 0;
                display: flex;
                align-items: flex-end;
                justify-content: center;
                padding: 15px 5px;
                border-radius: 0 0 100px 100px;
                position: absolute;
                top: 0;
                right: 20px;
            }

            .process-content {
                padding: 30px 0 0;

                h4 {
                    font-weight: 600;
                    margin-bottom: 5px;
                    font-size: 32px;
                    line-height: 40.2px;
                    margin-top: -15px;
                    font-family: "Chakra Petch", sans-serif;
                }

                p {
                    font-size: 18px;
                    line-height: 30px;
                    margin-bottom: 0;
                    font-family: "Barlow", sans-serif;
                }

            }
        }
    }



    .owl-nav {
        margin-top: 10px;

        .owl-prev {
            color: lightgrey;
            width: 50px;
            height: 50px;
            text-align: center;
            line-height: 50px;
            border-radius: 50%;
            transition: all 0.3s;
            border: 1px solid lightgray;
            margin-right: 10px;
        }

        .owl-prev:hover {
            color: white;
            background-color: orange;
            width: 50px;
            height: 50px;
            text-align: center;
            line-height: 50px;
            border-radius: 50%;
            transition: all 0.3s;
            border: 1px solid orange;
            margin-right: 10px;
        }

        .owl-next {
            color: lightgrey;
            width: 50px;
            height: 50px;
            text-align: center;
            line-height: 50px;
            border-radius: 50%;
            transition: all 0.3s;
            border: 1px solid lightgray;
        }

        .owl-next:hover {
            color: white;
            background-color: orange;
            width: 50px;
            height: 50px;
            text-align: center;
            line-height: 50px;
            border-radius: 50%;
            transition: all 0.3s;
            border: 1px solid orange;
            margin-right: 10px;
        }
    }


    //Img a sinistra 
    .process-thumb {
        direction: rtl;

        img {
            max-width: 1000px;
        }
    }

    // Razzo
    .rocket {
        position: absolute;
        right: 0;
        bottom: 0;

        img {
            width: 100%;
            height: 100%;
        }
    }
}

//END OF PROCESS SECTION</style>