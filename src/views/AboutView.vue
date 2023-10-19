<script setup>
import { ref, onMounted, onUnmounted, toDisplayString } from 'vue'
import windowScreenSize from '../helper/windowScreen';
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import setupLenis from '../helper/lenis_helper';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; //

gsap.registerPlugin(ScrollTrigger);

const { isMobile } = windowScreenSize();

const aboutme = ref(null);
const hr = ref(null);
const p1 = ref(null);
const p2 = ref(null);
const p3 = ref(null);
const p4 = ref(null);
// TODO: FIX SCROLL UP AND DOWN STATE (if scrolled up whilst in middle)
let paragraphs = ref(null);

let hr2 = ref(null);
let language = ref(null);

let skillImages = [
  { img: 'html.png', title: "HTML" },
  { img: 'css.png', title: 'CSS' },
  { img: 'php.png', title: 'PHP' },
  { img: 'javascript.png', title: 'JavaScript' },
  { img: 'typescript.png', title: 'TypeScript' },
  { img: 'laravel.png', title: 'Laravel' },
  { img: 'vue.png', title: 'Vue.js' },
  { img: 'react.png', title: 'React' },
  { img: 'flutter.png', title: 'Flutter' },
  { img: 'kotlin.png', title: 'Kotlin' },
  { img: 'nestjs.png', title: 'NestJS' },
  { img: 'net.png', title: '.NET' },
  { img: 'python.png', title: 'Python' },
  { img: 'unity.png', title: 'Unity' },
  { img: 'cs.png', title: 'C#' },
  { img: 'java.png', title: 'Java' },
  { img: 'gsap.svg', title: 'Green Sock' }
];


onMounted(() => {

  function about() {
    let tl = gsap.timeline({ paused: true });
    tl.fromTo(hr.value, { rotateX: 90 }, { duration: 1, rotateX: 0, delay: 0.5 });
    tl.fromTo(aboutme.value, { x: '-100%' }, { x: 0, duration: 0.6, })
    tl.fromTo(paragraphs.value, { opacity: 0, x: '-100%' }, { opacity: 1, x: 0, duration: 1, })

    return tl;
  }

  function skills() {
    let icons = gsap.utils.toArray('.img-container');

    let tl = gsap.timeline({ paused: true });
    tl.fromTo(hr2.value, { rotationY: '-90%' }, { duration: 1, rotationY: 0 });
    tl.fromTo(language.value, { y: '100%', opacity: 0, }, { y: 0, opacity: 1, duration: 1.2, })
    tl.fromTo(icons, { opacity: 0, y: '100%' }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, delay: -0.4 })
    return tl;
  }

  let container = document.getElementById("section-about");
  let content = document.getElementById("section-about-content");

  setupLenis(container, content);

  let tl_about = about().play();
  let tl_skills = skills();

  ScrollTrigger.create({
    trigger: paragraphs.value,
    start: '8% 10%',
    end: '110% 50%',
    scroller: '#section-about',
    onEnter: () => {
      console.log("onEnter");

    },
    onLeave: () => {
      console.log("onLeave");
    },
    onLeaveBack: () => {
      console.log("onLeaveBack");
    },
    onEnterBack: () => {
      console.log("onEnterBack");
    },
    markers: true,
  });

  Array.from(document.getElementsByClassName("img-container")).forEach(function (el) {
    tippy(el, {
      content: el.children[0].alt,
      animation: 'fade',
      arrow: true,

    });
  });

});

</script>
<template>
  <section id="section-about" style="overflow-y: scroll" class="w-100">
    <div id="section-about-content">
      <div class="row d-flex flex-column justify-content-center align-items-center vh-100 mx-auto">
        <div class="col-11 col-sm-9 col-md-7 col-lg-5">
          <!--OUTER DIV-->
          <div class="d-flex"> <!--INNTER DIV-->
            <!-- ABOUT ME -->
            <div class="d-flex justify-content-end me-1">
              <div class="rotate-vertical m-0 p-0 mb-2 overflow-hidden" style="font-size: 2rem;">
                <div class="" ref="aboutme">
                  <b style="color: var(--white);">ABOUT ME</b>
                </div>
              </div>
            </div>
            <!-- ABOUT ME END -->
            <hr ref="hr" style="border: 2px solid var(--white); opacity:1" class="m-0 p-0 rotate-vertical mb-2">
            <div class="text-justify overflow-hidden">
              <div ref="paragraphs">
                <p ref="p1">Hi I'm <b style="color:var(--blue);">Chrisanto Sinatra</b>, last semester student at ISTTS.
                  I've
                  code since my first semester at university and been very passionate about it. I'm interested and eager
                  in
                  learning new framework or technology in my field. I believe that anything can be <b>learned</b> with
                  given
                  time and motivation!</p>
                <p ref="p2">When I was still an active student (lower semester), I took an <b>active</b> part in my
                  university
                  organization. I mostly take the role of <b>tutoring</b> division (if available) and <b>secretary</b>
                  position. Through my experience, I learned how to communicate and work together as a team. With that in
                  mind, I can keep improving myself to be a <b>reliable</b> person.
                </p>
                <p ref="p3">During the project period at my university, I took an <b>active</b> part in all of my
                  projects. I took pride in all of the projects that I've done since. I've my <b>standard</b> in all of my
                  project, and by fulfilling it I can look back and be proud of what I did. The past projects that I've
                  completed also helped me to <b>improve</b> myself when undertaking future project.</p>
                <p ref="p4" class="mb-1">
                  In my free time, I do try to <b>learn</b> something new that can <b>enhance</b> my skill set. There are
                  also
                  moments when I'm exhausted, so I opt for some personal time doing my hobby. However, as I'm in my last
                  semester, I do try to make steady progress to my final project.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-50 mx-auto row vh-100 overflow-hidden">
        <div class="col-12 mt-5">
          <div ref="language" style="line-height: 1; font-size: 1rem;" class="m-0 p-0 mb-3"><b>Language</b> <b
              style="color:var(--white)">&</b>
            <b> Framework</b> that I've
            used in the past
          </div>
          <hr ref="hr2" style="border: 2px solid var(--white); opacity:1" class="m-0 p-0 mb-2">
          <div class="d-flex flex-wrap gap-3 justify-content-start">
            <div v-for="data in skillImages" class="img-container">
              <img :src="'/src/assets/images/icons/' + data.img" :alt="data.title" srcset="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
img {
  max-width: 100%;
  max-height: 100%;
}

.icon {
  margin-left: 12px;
  font-size: 36px;
  color: #222;
}

.img-container {
  height: 3rem;
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid var(--white); */
}

p {
  font-weight: 200;
  margin-left: 8px;
}

b {
  font-weight: 700;
  color: var(--orange)
}
</style>