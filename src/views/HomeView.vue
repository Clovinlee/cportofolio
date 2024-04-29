<script setup>
import { ref, onMounted, inject } from 'vue'
import windowScreenSize from '../helper/windowScreen';
import { gsap } from 'gsap';
import LoadingScreen from '../components/LoadingScreen.vue';

const { isMobile } = windowScreenSize(576);

const hrtop = ref(null);
const hrbottom = ref(null);
const summarytitle = ref(null);
const summarycontent = ref(null);

const fullstack = ref(null);
const desktop = ref(null);
const web = ref(null);
const android = ref(null);

const hr = ref(null);
const hello = ref(null);
const iam = ref(null);
const chris = ref(null);

const { animState, setAnimState } = inject('animState');
const idxAnim = 0;

const transitionAnimDelay = inject('transitionAnimDelay');

onMounted(() => {
  // gsap.to(chris.value, { x: '-200%', duration: 0.1, })

  function introduction() {
    let tl_intro = gsap.timeline();
    tl_intro.fromTo(hr.value, { y: '200%' }, { duration: 0.8, y: '0', delay: 0.5 });
    tl_intro.fromTo(hello.value, { x: '-200%' }, { duration: 0.8, x: '0' });
    tl_intro.fromTo(iam.value, { x: '-200%' }, { duration: 0.8, x: '0', delay: 0.1 });
    tl_intro.fromTo(chris.value, { x: '-200%', duration: 0.1, }, { duration: 1, x: '0', delay: -0.3 });

    return tl_intro;
  };

  function skills() {
    let tl_skills = gsap.timeline();

    tl_skills.fromTo(desktop.value, { x: '-200%' }, { duration: 1, x: '0' });
    tl_skills.fromTo(web.value, { y: '-200%' }, { duration: 1, y: '0' });
    tl_skills.fromTo(android.value, { x: '200%' }, { duration: 1, x: '0' });
    tl_skills.fromTo(fullstack.value, { y: '200%' }, { duration: 1, y: '0' });

    return tl_skills;
  }

  function summary() {
    let tl_summary = gsap.timeline();
    tl_summary.fromTo(hrtop.value, { x: '200%' }, { duration: 0.5, x: '0' });
    tl_summary.fromTo(hrbottom.value, { x: '-200%' }, { duration: 0.5, x: '0' });
    tl_summary.fromTo(summarytitle.value, { opacity: 0, y: '100%' }, { duration: 0.8, opacity: 1, y: '0' });
    tl_summary.fromTo(summarycontent.value, { opacity: 0, x: '100%' }, { duration: 1.5, opacity: 1, x: '0' });

    return tl_summary;
  }

  if (!animState.value[idxAnim]) {
    let tl_master = gsap.timeline({ delay: transitionAnimDelay.transitionAnimDelay });

    tl_master.add(introduction());
    tl_master.add(summary());
    tl_master.add(skills(), "-=0.5").then(() => {
      setAnimState({ position: 0, value: true });
    });
  }
});


</script>
<template>
  <section class="row w-100 p-0 m-0 g-0" style="overflow-x:hidden">
    <LoadingScreen />
    <div class="col-12 col-sm-7 d-flex flex-column justify-content-center align-items-center"
      :class="{ 'order-2': isMobile }">
      <div class="overflow-hidden w-75">
        <div class="d-flex justify-content-end">
          <small ref="summarytitle" class="text-align-end" style="font-weight: 200; font-size: 0.9rem;">Brief Summary of
            <b>Myself</b></small>
        </div>
        <div class="d-flex justify-content-end mt-1">
          <hr ref="hrtop" style="border: 1px solid white; opacity: 1; border-radius:1px" class="w-65 mb-3 mt-1">
        </div>
        <p ref="summarycontent" style="font-weight: 200; text-align: justify;" class="m-0">Enthusiastic
          <span style="color: var(--orange);"><b>developer</b></span> and <span style="color: var(--orange);"><b>graduate</b></span>
          of the Bachelor's degree program in Information Systems from Institut Sains dan Teknologi Terpadu Surabaya, <span style="color: var(--orange);"><b>Indonesia</b></span>.
        </p>
        <hr ref="hrbottom" style="border: 1px solid white; opacity: 1; border-radius:1px" class="w-65 my-3">
      </div>
    </div>
    <div class=" col-12 col-sm-5 my-auto overflow-hidden" :class="{ 'order-1': isMobile }">
      <h2 ref="desktop" class="text-center">
        <b class="orange">Desktop</b> Developer
      </h2>
      <div class="d-flex justify-content-center my-2">
        <h2 ref="fullstack" class="rotate-vertical text-cente overflow-hiddenr"><b class="blue">Full
            Stack</b>
          Developer</h2>
        <hr ref="hr" style="border:2px solid var(--white); opacity:1;" class="ms-2">
        <h1 class="lato lh-1 text-start ms-1 me-3 overflow-hidden" style="">
          <div ref="hello">Hello.</div>
          <div ref="iam">I am</div>
          <div ref="chris">Chris</div>
        </h1>
        <h2 ref="web" class="rotate-vertical text-center overflow-hidden" style="rotate:0deg"><b class="blue">Web</b>
          Developer</h2>
      </div>
      <h2 ref="android" class="text-center overflow-hidden">
        <b class="orange">Android</b> Developer
      </h2>
    </div>
  </section>
</template>

<style scoped>
h1 {
  /* font-size: 7rem; */
  font-size: clamp(5rem, 8.4vw, 8rem);
}

h2 {
  /* font-size: 2rem; */
  font-size: clamp(1.5rem, 2.4vw, 3rem);
}

@media (max-width: 500px) and (min-height: 800px) {
  h1 {
    /* font-size: 7rem; */
    font-size: clamp(6rem, 8.4vw, 18rem) !important;
  }

  h2 {
    /* font-size: 2rem; */
    font-size: clamp(2rem, 3vw, 3rem);
  }
}

.lato {
  font-family: 'Lato', sans-serif;
}

p {
  font-size: 1.3rem;
  line-height: 1.3;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>