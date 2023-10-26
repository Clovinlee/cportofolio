<script setup>
import SideBar from './components/Sidebar.vue';
import { provide, ref, onMounted } from 'vue'
import { gsap } from 'gsap';
import { useLoadingStore } from './store/loadingStore';

// Animation on state (False/True) : [about, skills, projects, contact] 
const animState = ref([false, false, false, true]);
const transitionAnimDelay = 0.6; //onEnter

function setAnimState({ position, value }) {
  animState.value[position] = value;
}

provide('animState', {
  animState,
  setAnimState,
});

provide('transitionAnimDelay', {
  transitionAnimDelay,
});


onMounted(() => {

});

function onBeforeEnter(el) {
  let loadScreen = el.querySelector("#load-screen");
  let loadIndicator = loadScreen.children[0];

  gsap.set(loadScreen, { xPercent: 0 });
  gsap.set(loadIndicator, { opacity: 1 });

};

function onEnter(el, done) {
  let loadScreen = el.querySelector("#load-screen");
  let loadIndicator = loadScreen.children[0];

  let tl = gsap.timeline();
  tl.to(loadScreen, { xPercent: -120, duration: 0.8, delay: transitionAnimDelay, });
};

function onBeforeLeave(el) {
  let loadScreen = el.querySelector("#load-screen");
  let loadIndicator = loadScreen.children[0];

  gsap.set(loadScreen, { xPercent: -120 });
  gsap.set(loadIndicator, { opacity: 0 });
}

function onLeave(el, done) {
  let loadScreen = el.querySelector("#load-screen");
  let loadIndicator = loadScreen.children[0];

  let tl = gsap.timeline();
  tl.to(loadScreen, { xPercent: 0, duration: 0.8, delay: 0.3, });
  tl.fromTo(loadIndicator, { opacity: 0 }, { opacity: 1, duration: 0.3 }).then(done);
}

</script>

<template>
  <div class="wrapper vh-100">
    <div class="wrapper" style="position: relative;">
      <router-view v-slot="{ Component }">
        <transition mode="out-in" @before-enter="onBeforeEnter" @enter="onEnter" @before-leave="onBeforeLeave"
          @leave="onLeave">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <SideBar />
    <p class="m-2 p-0 position-absolute left-0 bottom-0" style="font-size: 10px; opacity: 0.4;">Built from scratch ©
      Chrisanto 2023.
      All
      Rights Reserved</p>
  </div>
</template>

<style>
.snap-enter-active,
.snap-leave-active {
  transition: opacity .0s;
}

.snap-enter,
.snap-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
}
</style>
