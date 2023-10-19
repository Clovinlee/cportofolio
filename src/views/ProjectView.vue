<script setup>
import { ref, onMounted, computed } from 'vue';
import { gsap } from 'gsap';
import setupLenis from '../helper/lenis_helper';
import ScrollTrigger from "gsap/ScrollTrigger";
import ProjectCard from '../components/ProjectCard.vue';

import { data_projects } from '../data-projects';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    console.log("Data\n----------")
    console.log(data_projects);

    //setup smooth scroll using lenis
    let container = document.getElementById("section-project");
    let content = document.getElementById("section-project-content");
    setupLenis(container, content);

    let left_timestamp = gsap.utils.toArray('.left-timestamp');
    let right_timestamp = gsap.utils.toArray('.right-timestamp');

    let left_project = gsap.utils.toArray('.left-project');
    let right_project = gsap.utils.toArray('.right-project');

    console.log(left_project);

    for (let i = 0; i < left_project.length; i++) {
        let lp = left_project[i];
        let rp = right_project[i];

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

        lp_anim.fromTo(lp, { xPercent: -50, yPercent: -50, opacity: 0 }, { xPercent: 0, yPercent: 0, opacity: 1, });
        rp_anim.fromTo(rp, { xPercent: 50, yPercent: -50, opacity: 0 }, { xPercent: 0, yPercent: 0, opacity: 1, });
    }

    for (let i = 0; i < left_timestamp.length; i++) {

        let lt = left_timestamp[i];
        let rt = right_timestamp[i];

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

        lt_anim.fromTo(lt, { xPercent: 100, }, { xPercent: 0, });
        rt_anim.fromTo(rt, { xPercent: -100, }, { xPercent: 0, });
    }

});


</script>

<template>
    <section id="section-project" style="overflow-y:scroll; overflow-x: hidden;" class="w-100">
        <div id="section-project-content"> <!-- LENIS CONTAINER -->
            <div class="spacer d-flex flex-column justify-content-center align-items-center mb-5">
                <h1 style="font-family: 'Lato'; font-weight: 900; font-size: 5rem;" class="text-center">My <span
                        style="color: var(--orange); font-family: 'Lato'; font-weight: 900; font-size: 5rem;">Projects.</span>
                </h1>
                <small>scroll down below.</small>
            </div>
            <div class="d-flex justify-content-center" v-for="(project, idx) in  data_projects ">
                <div :class="{ invisible: idx % 2 == 1 }">
                    <div class="overflow-hidden">
                        <div class="text-end mb-3 left-timestamp">
                            <h5 class="year">{{ project.date }}</h5>
                            <div class="year-description">{{ project.type }}</div>
                        </div>
                    </div>
                    <ProjectCard v-for="p in  project.projects " :title="p.name" :tags="p.tags" :image="p.images[0]"
                        class="mb-3 left-project">
                        {{ p.description }}
                    </ProjectCard>
                </div>
                <div class="mx-2">
                    <div class="circle"></div>
                    <div class="line"></div>
                    <div class="circle" v-if="idx == data_projects.length - 1"></div>
                </div>
                <div :class="{ invisible: idx % 2 == 0 }">
                    <div class="overflow-hidden">
                        <div class="text-start mb-3 right-timestamp">
                            <h5 class="year">{{ project.date }}</h5>
                            <div class="year-description">{{ project.type }}</div>
                        </div>
                    </div>
                    <ProjectCard v-for="p in  project.projects " :title="p.name" :tags="p.tags" :image="p.images[0]"
                        class="mb-3 right-project">
                        {{ p.description }}
                    </ProjectCard>
                </div>
            </div>
            <div class="spacer"></div>
        </div>
    </section>
</template>

<style scoped>
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
    height: 30vh;
}
</style>