<script setup>
import { ref, onMounted } from 'vue'
import windowScreenSize from '../helper/windowScreen';
import { gsap } from 'gsap';

const { isMobile } = windowScreenSize();

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

  let tl_master = gsap.timeline();
  tl_master.add(introduction());
  tl_master.add(summary());
  tl_master.add(skills(), "-=0.5");

});

</script>
<template>
  <div class="d-flex flex-column justify-content-center align-items-center" style="flex: 5;">
    <div class="w-75 overflow-hidden">
      <div class="d-flex justify-content-end">
        <small ref="summarytitle" class="text-align-end" style="font-weight: 200; font-size: 0.9rem;">Brief Summary of
          <b>Myself</b></small>
      </div>
      <div class="d-flex justify-content-end mt-1">
        <hr ref="hrtop" style="border: 1px solid white; opacity: 1; border-radius:1px" class="w-65 mb-3 mt-1">
      </div>
      <p ref="summarycontent" style="font-weight: 200;font-size: 1.3rem; line-height: 1.5; text-align: justify;"
        class="m-0">Enthusiastic <span style="color: var(--orange);"><b>developer</b></span> and undergraduate last
        semester <span style="color: var(--orange);"><b>student</b></span>
        Institut from Sains Teknologi Terpadu Surabaya, <span style="color: var(--orange);"><b>Indonesia</b></span>.</p>
      <hr ref="hrbottom" style="border: 1px solid white; opacity: 1; border-radius:1px" class="w-65 my-3">
    </div>
  </div>
  <div class="d-flex justify-content-center align-items-center flex-column" style="flex:4">
    <table>
      <tr>
        <td></td>
        <td class="overflow-hidden">
          <div ref="desktop" style="font-size: 2.5rem;"><b style="color:var(--blue)">Desktop</b> Developer</div>
        </td>
        <td></td>
      </tr>
      <tr>
        <td class="overflow-hidden">
          <span ref="fullstack" class="rotate-vertical me-2" style="font-size: 2.5rem;"><b
              style="color:var(--orange)">Full
              Stack</b> Developer</span>
        </td>
        <td class="d-flex overflow-hidden">
          <hr ref="hr" style="border: 2px solid white; opacity: 1;">
          <div style="opacity:1; font-family: 'Lato'; font-size: 7rem;" class="m-3 ms-4">
            <div ref='hello'>Hello.</div>
            <div ref="iam">I am</div>
            <div ref="chris">Chris</div>
          </div>
        </td>
        <td class="overflow-hidden">
          <span ref="web" class="rotate-vertical" style="rotate: 0deg; font-size: 2.5rem;"><b
              style="color:var(--orange)">Web</b> Developer</span>
        </td>
      </tr>
      <tr>
        <td></td>
        <td class="overflow-hidden">
          <div ref="android" style="font-size: 2.5rem;"><b style="color:var(--blue)">Android</b> Developer</div>
        </td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
/* SLIDE UP */
.slide-up-enter-from {
  transform: translateY(100%);
}

.slide-up-enter-to {
  transform: translateY(0%);
}

.slide-up-enter-active {
  transition: transform 1s ease;
}

/* SLIDE UP END */

/* SLIDE RIGHT */
.slide-right-enter-from {
  transform: translateX(-100%);
}

.slide-right-enter-to {
  transform: translateX(0%);
}

.slide-right-enter-active {
  transition: transform 1s ease;
}

/* SLIDE RIGHT END */

.fade-enter-from {
  opacity: 0 !important;
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter-active {
  transition: all 1s ease;
}
</style>