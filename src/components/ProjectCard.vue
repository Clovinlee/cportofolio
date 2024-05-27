<script setup>
import { ref, onMounted, useSlots } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import FancyBox from '../components/FancyBox.vue'
import windowScreenSize from '../helper/windowScreen'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps(['project', 'featured'])
const project = props.project
const featured = props.featured // 1 or 0. 1 means yes and bigger frame

const { isMobile } = windowScreenSize(500)

const card = ref(null)
const content = ref(null)

const hr = ref(null)
const title = ref(null)
const body = ref(null)
const tags = ref(null)
const shade = ref(null)

const rawWords = useSlots().default()[0].children
const words = useSlots().default()[0].children.split(' ')

// const image = ref(url('/src/assets/images/projects/' + props.image));

onMounted(() => {
    // CONVERT THE SLOTS PARAGRAPHS INTO SPANS FOR ANIMATION PURPOSE
    let paragraph = body.value.children[0] // get the <p> tag
    paragraph.innerHTML = '' // clear the <p> tag
    words.forEach((word) => {
        paragraph.innerHTML += `<span class="word">${word}</span> `
    })

    gsap.set(content.value, { yPercent: 72 })
    gsap.set(hr.value, { width: '0%', xPercent: -100 })

    function animation() {
        let badges = gsap.utils.toArray(tags.value.children)

        let tl = gsap.timeline({ paused: true })
        tl.fromTo(
            hr.value,
            {
                width: '0%',
                xPercent: -100
            },
            {
                width: '90%',
                xPercent: 0,
                duration: 0.5
            }
        )

        tl.fromTo(
            shade.value,
            {
                background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7) 10%, rgba(0, 0, 0, 0.0) 40%)'
            },
            {
                background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 20%, rgba(0, 0, 0, 0.2) 100%)',
                duration: 1
            }
        )

        tl.fromTo(content.value, { yPercent: 70 }, { yPercent: 0, duration: 1 }, '<')

        tl.fromTo(
            paragraph.children,
            { opacity: 0 },
            { opacity: 1, duration: 0.1, stagger: 0.05 },
            '<0.1'
        ) //means, start WITH previous, but add a delay 0.1s
        tl.fromTo(paragraph, { opacity: 0 }, { opacity: 1, duration: 0.8 }, '<0.5')

        tl.fromTo(
            badges,
            { opacity: 0, y: '100%' },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
            '<0.2'
        )

        return tl
    }

    let tl = animation()

    card.value.addEventListener('mouseenter', () => tl.timeScale(1.4).play())
    card.value.addEventListener('mouseleave', () => tl.timeScale(1.4).reverse())
})

// For image preview
const carouselContainer = ref(null)

function scrollImagePreview(direction) {
    const imgWidth = carouselContainer.value.querySelector('img').clientWidth;
    const scrollAmount = imgWidth + 10;
    const scrollDirection = direction === 'left' ? -scrollAmount : scrollAmount;
    carouselContainer.value.scrollBy({ left: scrollDirection, behavior: 'smooth' });
}

</script>

<template>
    <FancyBox>
        <div :id="'dialog-content-' + project.name" style="display: none; width: 75%">
            <h2 class="fw-bold">
                {{ project.name }}
                <font-awesome-icon class="fa-icon ms-2"
                    :icon="['fa', project.platform != null ? project.platform : 'globe']" />
            </h2>
            <hr style="border: 2px solid var(--blue); opacity: 1; max-width: 55%" class="m-0 p-0" ref="hr" />

            <div class="mb-2"></div>
            <ul class="">
                <li>
                    <div class="fw-bold">DESCRIPTION</div>
                    <p class="text-justify" :style="{ fontSize: isMobile ? '0.7rem' : '0.9rem' }">
                        {{ rawWords }}
                    </p>
                </li>

                <div v-if="project.features != null">
                    <li>
                        <b>FEATURES</b>
                        <ul>
                            <li v-for="f in project.features">
                                {{ f }}
                            </li>
                        </ul>
                    </li>
                </div>
                <div style="height: 12px"></div>
                <div v-if="project.frontend != null && project.frontend.length > 0">
                    <div v-for="(pf, idx) in project.frontend">
                        <li>
                            <div class="fw-bold">FRONTEND</div>
                            <div class="text-justify">
                                {{ pf }}
                            </div>
                        </li>
                        <br v-if="idx != project.frontend.length - 1" />
                    </div>
                </div>

                <div v-if="project.backend != null && project.backend.length > 0">
                    <div style="height: 12px"></div>
                    <div v-for="(pb, idx) in project.backend">
                        <li>
                            <div class="fw-bold">
                                {{ project.backendTitle != null ? project.backendTitle[idx] : 'BACKEND' }}
                            </div>
                            <div class="text-justify">
                                {{ pb }}
                            </div>
                        </li>

                        <div style="height: 12px" v-if="idx != project.backend.length - 1"></div>
                    </div>
                </div>

                <div v-if="project.database != null">
                    <div style="height: 12px"></div>
                    <li>
                        <div class="fw-bold">DATABASE</div>
                        <div class="text-justify">
                            {{ project.database }}
                        </div>
                    </li>
                </div>
            </ul>

            <div v-if="project.github != null">
                <div v-for="git in project.github" :key="git" style="width: 500px">
                    <div v-for="(v, k) in git" :key="k">
                        <b>{{ k }}: </b>
                        <a :href="v" target="_blank">{{ v.split('/')[v.split('/').length - 1] }}</a>
                    </div>
                </div>
                <br />
            </div>

            <div class="fw-bold">TECH STACK</div>
            <div class="mb-3">
                <span class="badge rounded-pill text-bg-primary me-1" v-for="tag in project.tags">{{
                    tag
                }}</span>
            </div>

            <div class="fw-bold">IMAGES</div>
            <hr />
            <h6 v-if="project.images.length == 0">-</h6>
            <FancyBox v-else :options="{
                Carousel: {
                    infinite: true
                }
            }" class="position-relative">
                <div class="d-flex overflow-x-scroll justify-content-evenly gap-3"
                    style="scroll-snap-type: x mandatory;" ref="carouselContainer">
                    <a data-fancybox="gallery" :href="`/images/projects/${img}`" v-for="img in project.images" class=""
                        style="scroll-snap-align: center;">
                        <!-- <img src="https://lipsum.app/id/60/200x150" width="200" height="150" /> -->
                        <img :src="`/images/projects/${img}`" class="m-2" style="border-radius: 5px; max-height: 150px;"/>
                    </a>
                </div>
                <button class="position-absolute top-50 start-0 translate-middle-y btn" @click="() => scrollImagePreview('left')">
                    <font-awesome-icon class="fa-icon" :icon="['fas', 'chevron-circle-left']"
                        style="min-height: 30px; color:white" />
                </button>
                <button class="position-absolute top-50 end-0 translate-middle-y btn" @click="() => scrollImagePreview('right')">
                    <font-awesome-icon class="fa-icon" :icon="['fas', 'chevron-circle-right']"
                        style="min-height: 30px; color:white" />
                </button>
            </FancyBox>
        </div>
        <div data-fancybox :data-src="'#dialog-content-' + project.name"
            :class="['project-card', { 'project-card-featured': featured == 1 }]" ref="card" :style="{
                'background-image':
                    project.images.length != 0
                        ? `url('/images/projects/${project.images[0]}')`
                        : `url('/images/no-image.png')`
            }">
            <div class="project-card-shade" ref="shade"></div>
            <div class="project-content" ref="content">
                <div ref="title" class="">
                    <div class="project-title max-line-2 px-2">
                        {{ project.name }}
                    </div>
                    <hr style="border: 2px solid var(--blue); opacity: 1; max-width: 95%" class="m-0 p-0" ref="hr" />
                </div>
                <div ref="body" class="mb-2 px-2">
                    <p class="project-description my-2 mt-3 max-line-3 text-justify">ETYA</p>
                    <div class="project-tags d-flex flex-wrap gap-1 mt-1 overflow-y-hidden" ref="tags">
                        <span class="badge" v-for="tag in project.tags">{{ tag }}</span>
                    </div>
                </div>
            </div>
        </div>
    </FancyBox>
</template>

<style scoped>
.btn {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px;
    margin: 0 10px;
}

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

    z-index: 1;
}

.project-card-featured {
    height: clamp(200px, 18.5vw, 400px);
    width: clamp(200px, 18.5vw, 400px);
}

@media (max-width: 500px) {}

.project-content {
    z-index: 99;
}

.badge {
    height: fit-content;
}

.project-card-shade {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    z-index: 1;
    /* background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 20%, rgba(0, 0, 0, 0.2) 100%); */
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 10%, rgba(0, 0, 0, 0) 40%);
}

.project-description {
    font-size: 0.75rem;
    font-weight: 300;
    height: 3rem;
}

.project-tags {
    height: 3rem;
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
