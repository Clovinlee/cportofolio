<script setup>
import { ref, onMounted, useSlots } from 'vue';
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import FancyBox from '../components/FancyBox.vue';
import windowScreenSize from '../helper/windowScreen';

gsap.registerPlugin(ScrollTrigger);

const props = defineProps(['title', 'tags', 'image'])

const { isMobile } = windowScreenSize(500);

const card = ref(null);
const content = ref(null);

const hr = ref(null);
const title = ref(null);
const body = ref(null);
const tags = ref(null);
const shade = ref(null);

const rawWords = useSlots().default()[0].children;
const words = useSlots().default()[0].children.split(" ");

// const image = ref(url('/src/assets/images/projects/' + props.image));
let image = ref(null);


onMounted(() => {
    // CONVERT THE SLOTS PARAGRAPHS INTO SPANS FOR ANIMATION PURPOSE
    let paragraph = body.value.children[0]; // get the <p> tag
    paragraph.innerHTML = ""; // clear the <p> tag
    words.forEach(word => {
        paragraph.innerHTML += `<span class="word">${word}</span> `;
    });

    gsap.set(content.value, { yPercent: 72 });
    gsap.set(hr.value, { width: '0%', xPercent: -100 });

    function animation() {
        let badges = gsap.utils.toArray(tags.value.children);

        let tl = gsap.timeline({ paused: true });
        tl.fromTo(hr.value, {
            width: '0%',
            xPercent: -100,
        }, {
            width: '90%',
            xPercent: 0,
            duration: 0.5,
        });

        tl.fromTo(shade.value, {
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7) 10%, rgba(0, 0, 0, 0.0) 40%)',
        }, {
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 20%, rgba(0, 0, 0, 0.2) 100%)',
            duration: 1,
        });

        tl.fromTo(content.value, { yPercent: 70, }, { yPercent: 0, duration: 1 }, '<');

        tl.fromTo(paragraph.children, { opacity: 0, }, { opacity: 1, duration: 0.1, stagger: 0.05 }, '<0.1'); //means, start WITH previous, but add a delay 0.1s
        tl.fromTo(paragraph, { opacity: 0 }, { opacity: 1, duration: 0.8 }, '<0.5');

        tl.fromTo(badges, { opacity: 0, y: '100%' }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }, '<0.2');

        return tl;
    }

    let tl = animation();

    card.value.addEventListener("mouseenter", () => tl.timeScale(1.4).play());
    card.value.addEventListener("mouseleave", () => tl.timeScale(1.4).reverse());

});

</script>

<template>
    <FancyBox>
        <div :id="'dialog-content-' + props.title" style="display:none; width: 75%;">
            <h2 class="">{{ props.title }}</h2>
            <p :style="{ fontSize: isMobile ? '1rem' : '1.2rem' }">{{ rawWords }}</p>
            <FancyBox :options="{
                Carousel: {
                    infinite: true,

                },
            }">
                <a :href="`/images/projects/${img}`" v-for="img in  props.image " data-fancybox="gallery">
                    <img :src="`/images/projects/${img}`" class="m-2"
                        :style="{ maxWidth: isMobile ? '150px' : '200px', height: 'auto' }" />
                </a>
            </FancyBox>
        </div>
        <div data-fancybox :data-src="'#dialog-content-' + props.title" class="project-card" ref="card"
            :style="{ 'background-image': `url('/images/projects/${props.image[0]}')` }">
            <div class="project-card-shade" ref="shade"></div>
            <div class="project-content" ref="content">
                <div ref="title" class=''>
                    <div class="project-title max-line-2 px-2">
                        {{ props.title }}
                    </div>
                    <hr style="border:2px solid var(--blue); opacity:1;  max-width: 95%;" class="m-0 p-0" ref="hr">
                </div>
                <div ref="body" class="mb-2 px-2">
                    <p class="project-description my-2 mt-3 max-line-3 text-justify">
                        <slot></slot>
                    </p>
                    <div class="project-tags d-flex flex-wrap gap-1 mt-1" ref="tags">
                        <span class="badge " v-for=" tag  in  props.tags ">{{ tag }}</span>
                    </div>
                </div>
            </div>
        </div>
    </FancyBox>
</template>

<style scoped>
.project-card {
    border-radius: 10px;
    /* height: 230px;
    width: 230px; */

    height: clamp(200px, 17vw, 300px);
    width: clamp(200px, 17vw, 300px);

    /* margin: 20px 0px; */
    background-color: antiquewhite;
    /* background-image: v-bind(image); */
    /* background-image: url('/src/assets/images/projects/pv_dashboard.png'); */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    padding: 0;
    cursor: pointer;

    display: flex;
    justify-content: start;
    align-items: end;

    overflow: hidden;

    border: 2px solid var(--grey);
}

@media (max-width: 500px) {}

.project-content {
    z-index: 99;
}

.project-card-shade {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    z-index: 1;
    /* background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 20%, rgba(0, 0, 0, 0.2) 100%); */
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 10%, rgba(0, 0, 0, 0.0) 40%);
}

.project-description {
    font-size: 0.75rem;
    font-weight: 300;
    max-height: 3rem;
}

.project-tags>span {
    background-color: var(--grey);
    opacity: 0.95;
    cursor: pointer;
    font-size: 0.7rem;
}

.project-tags>span:hover {
    background-color: var(--darker-grey);
}

.project-title {
    color: var(--white);
    line-height: 1;
    padding: 0;
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
}
</style>