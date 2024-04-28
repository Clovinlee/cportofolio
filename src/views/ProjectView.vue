<script setup>
import { ref, onMounted, inject } from 'vue';
import { gsap } from 'gsap';
import setupLenis from '../helper/lenis_helper';
import ScrollTrigger from "gsap/ScrollTrigger";
import ProjectCard from '../components/ProjectCard.vue';

import { data_projects } from '../data-projects';
import { data_projects_featured } from '../data-projects-featured';
import windowScreenSize from '../helper/windowScreen';
import LoadingScreen from '../components/LoadingScreen.vue';

const { isMobile } = windowScreenSize(500);

gsap.registerPlugin(ScrollTrigger);

const text_my = ref(null);
const text_project = ref(null);

const text_featured = ref(null);
const text_project2 = ref(null);

const text_scroll = ref(null);

const container_project_featured = ref(null);

const { animState, setAnimState } = inject('animState');
const idxAnim = 2;
const transitionAnimDelay = inject('transitionAnimDelay');

onMounted(() => {
    //setup smooth scroll using lenis
    let container = document.getElementById("section-project");
    let content = document.getElementById("section-project-content");
    setupLenis(container, content);

    let left_timestamp = gsap.utils.toArray('.left-timestamp');
    let right_timestamp = gsap.utils.toArray('.right-timestamp');

    let left_project = gsap.utils.toArray('.left-project');
    let right_project = gsap.utils.toArray('.right-project');

    for (let i = 0; i < right_project.length; i++) {
        let lp = left_project[i];
        let rp = right_project[i];

        if (lp != null) {
            let lp_anim = gsap.timeline({
                scrollTrigger: {
                    scroller: '#section-project',
                    trigger: lp,
                    start: "-50% center",
                    end: "bottom 70%",
                    scrub: true,
                    // markers: true,
                }
            });
            lp_anim.fromTo(lp, { xPercent: -50, yPercent: -50, opacity: 0 }, { xPercent: 0, yPercent: 0, opacity: 1, });
        }

        let rp_anim = gsap.timeline({
            scrollTrigger: {
                scroller: '#section-project',
                trigger: rp,
                start: "-40% center",
                end: "bottom 70%",
                scrub: true,
                // markers: true,
            }
        });

        rp_anim.fromTo(rp, { xPercent: 50, yPercent: -50, opacity: 0 }, { xPercent: 0, yPercent: 0, opacity: 1, });
    }

    for (let i = 0; i < right_timestamp.length; i++) {

        let lt = left_timestamp[i];
        let rt = right_timestamp[i];

        if (lt != null) {
            let lt_anim = gsap.timeline({
                scrollTrigger: {
                    scroller: '#section-project',
                    trigger: lt,
                    start: "top 85%",
                    end: "500% 75%",
                    scrub: true,
                    // markers: true,
                }
            });
            lt_anim.fromTo(lt, { xPercent: 100, }, { xPercent: 0, });
        }


        let rt_anim = gsap.timeline({
            scrollTrigger: {
                scroller: '#section-project',
                trigger: rt,
                start: "top 85%",
                end: "500% 75%",
                scrub: true,
                // markers: true,
            }
        });

        rt_anim.fromTo(rt, { xPercent: -100, }, { xPercent: 0, });
    }

    if (!animState.value[idxAnim]) {
        let tl = gsap.timeline({ delay: transitionAnimDelay.transitionAnimDelay });
        tl.fromTo(text_featured.value, { yPercent: -100, opacity: 0 }, { ease: "power4.out", yPercent: 0, opacity: 1, duration: 2, delay: 0.6 });
        tl.fromTo(text_project2.value, { yPercent: -100, opacity: 0 }, { ease: "power4.out", yPercent: 0, opacity: 1, duration: 2, }, "<0.8");

        tl.fromTo(container_project_featured.value, { opacity: 0 }, { ease: "power4.out", opacity: 1, duration: 3, }, "<0.8");

        tl.fromTo(text_my.value, { yPercent: -100, opacity: 0 }, { ease: "power4.out", yPercent: 0, opacity: 1, duration: 2, }, "<0.9");
        tl.fromTo(text_project.value, { yPercent: -100, opacity: 0 }, { ease: "power4.out", yPercent: 0, opacity: 1, duration: 2, }, "<0.8");
        tl.fromTo(text_scroll.value, { yPercent: -100, opacity: 0 }, { ease: "power4.out", yPercent: 0, opacity: 1, duration: 2, }, "<1").then(() => {
            setAnimState({ position: idxAnim, value: true });
        });
    }
});


</script>

<template>
    <section id="section-project" style="overflow-y:scroll;" class="w-100 overflow-x-hidden">
        <LoadingScreen />

        <div id="section-project-content"> <!-- LENIS CONTAINER -->

            <div class="spacer d-flex flex-column justify-content-center align-items-center">
                <div class="lato-header d-flex justify-content-center">
                    <div class="lato-header d-inline-block me-3" ref="text_featured">Featured</div>
                    <div ref="text_project2" class="lato-header d-inline-block" v-if="!isMobile"
                        style="color:var(--orange)">
                        Projects.
                    </div>
                    <div v-else></div> <!-- Placeholder for Projects. -->
                </div>
                <div v-if="isMobile" ref="text_project2" class="lato-header d-flex justify-content-center"
                    style="color:var(--orange)">
                    Projects.
                </div>
            </div>


            <div ref="container_project_featured" class="">
                <div v-if="!isMobile" class="d-flex justify-content-between align-center container flex-wrap">
                    <div v-for="p in data_projects_featured">
                        <h5 class="year mt-1">{{ p.date }}</h5>
                        <div class="year-description">{{ p.type }}</div>
                        <ProjectCard :project="p" style="z-index: 0;" :featured="1" class="mt-2 mb-3">
                            {{ p.description }}
                        </ProjectCard>
                    </div>
                </div>
                <div v-else class="d-flex align-items-center flex-wrap justify-center mx-3 px-3 gap-5">
                    <div v-for="p in data_projects_featured">
                        <h5 class="year">{{ p.date }}</h5>
                        <div class="year-description">{{ p.type }}</div>
                        <ProjectCard :project="p" style="z-index: 0;" :featured="1" class="">
                            {{ p.description }}
                        </ProjectCard>
                    </div>
                    
                   
                </div>
            </div>



            <div class="spacer d-flex flex-column justify-content-center align-items-center mb-5">
                <div class="lato-header mb-3 d-flex justify-content-center">
                    <div class="lato-header d-inline-block me-3" ref="text_my">My</div>
                    <div ref="text_project" class="lato-header d-inline-block" style="color:var(--orange)">Projects.
                    </div>
                </div>
                <small ref="text_scroll">scroll down below.</small>
            </div>
            <div class="d-flex"
                :class="{ 'ms-4': isMobile, 'justify-content-center': !isMobile, 'justify-content-start': isMobile }"
                v-for="(project, idx) in data_projects ">
                <div :class="{ invisible: (idx % 2 == 1) }" v-if="!isMobile">
                    <div class="overflow-hidden">
                        <div class="text-end mb-3 left-timestamp">
                            <h5 class="year">{{ project.date }}</h5>
                            <div class="year-description">{{ project.type }}</div>
                        </div>
                    </div>
                    <ProjectCard v-for="p in project.projects " :project="p" class="mb-3 left-project">
                        {{ p.description }}
                    </ProjectCard>
                </div>
                <div class="mx-2">
                    <div class="circle"></div>
                    <div class="line"></div>
                    <div class="circle" v-if="idx == data_projects.length - 1"></div>
                </div>
                <div :class="{ invisible: idx % 2 == 0 && !isMobile }">
                    <div class="overflow-hidden">
                        <div class="text-start mb-3 right-timestamp">
                            <h5 class="year">{{ project.date }}</h5>
                            <div class="year-description">{{ project.type }}</div>
                        </div>
                    </div>
                    <ProjectCard v-for="p in project.projects " :project="p" class="mb-3 right-project">
                        {{ p.description }}
                    </ProjectCard>
                </div>
            </div>
            <div class="spacer"></div>
        </div>
    </section>
</template>

<style scoped>
.lato-header {
    font-family: 'Lato';
    font-weight: 900;
    font-size: 5rem;
}

@media (max-width: 500px) {
    .lato-header {
        font-size: 4rem;
    }
}

.year {
    font-family: 'Lato';
    font-weight: 900;
    line-height: 1;
    margin: 0;
    padding: 0;
    color: var(--orange);
}

.year-description {
    font-weight: 300;
    font-size: 0.9rem;
}

.circle {
    height: 1.5rem;
    width: 1.5rem;
    background-color: var(--white);
    border-radius: 50%;
}

.line {
    margin: 0 auto;
    margin-top: -10px;
    margin-bottom: -10px;
    height: 100%;
    width: 0.4rem;
    background-color: var(--white);
}

.spacer {
    height: 40vh;
}
</style>