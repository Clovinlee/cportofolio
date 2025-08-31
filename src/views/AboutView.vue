<script setup>
import { ref, onMounted, inject } from 'vue'
import windowScreenSize from '../helper/windowScreen';
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import setupLenis from '../helper/lenis_helper';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; //
import LoadingScreen from '../components/LoadingScreen.vue';

gsap.registerPlugin(ScrollTrigger);

const { isMobile } = windowScreenSize(400);

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
  { img: 'laravel.png', title: 'Laravel' },
  { img: 'php.png', title: 'PHP' },
  { img: 'spring.png', title: 'Spring' },
  { img: 'java.png', title: 'Java' },
  { img: 'vue.png', title: 'Vue.js' },
  { img: 'gsap.svg', title: 'Green Sock' },
  { img: 'javascript.png', title: 'JavaScript' },
  { img: 'typescript.png', title: 'TypeScript' },
  { img: 'flutter.png', title: 'Flutter' },
  { img: 'docker.png', title: 'Docker' },
  { img: 'mysql.png', title: 'MySQL' },
  { img: 'mongodb.png', title: 'MongoDB' },
  { img: 'oracle.png', title: 'Oracle' },
  { img: 'postgre.png', title: 'PostgreSQL' },
  { img: 'nestjs.png', title: 'NestJS' },
  { img: 'go.png', title: 'GoLang' },
  { img: 'cs.png', title: 'C#' },
  { img: 'unity.png', title: 'Unity' },
  { img: 'net.png', title: '.NET' },
  { img: 'jest.png', title: 'Jest' },
  { img: 'nextjs.png', title: 'NextJS' },
  { img: 'graphql.png', title: 'GraphQL' },
  { img: 'python.png', title: 'Python' },
  { img: 'react.png', title: 'React' },
  { img: 'kotlin.png', title: 'Kotlin' },
];

const { animState, setAnimState } = inject('animState');
const idxAnim = 1;
const transitionAnimDelay = inject('transitionAnimDelay');

onMounted(() => {

  let container = document.getElementById("section-about");
  let content = document.getElementById("section-about-content");
  setupLenis(container, content);

  function setupAnim() {
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

    let tl_about = about().play().delay(transitionAnimDelay.transitionAnimDelay);
    let tl_skills = skills();

    function playAbout(opt) {
      let reverse = opt?.reverse ?? false;
      if (reverse) {
        return tl_about.timeScale(2).reverse();
      } else {
        return tl_about.timeScale(1).play();
      }
    }

    function playSkills(opt) {
      let reverse = opt?.reverse ?? false;
      if (reverse) {
        return tl_skills.timeScale(2).reverse();
      } else {
        return tl_skills.timeScale(1).play();
      }
    }

    function setupScrollTrigger() {
      ScrollTrigger.create({
        trigger: paragraphs.value,
        start: '30% 10%',
        end: '110% 50%',
        scroller: '#section-about',
        onEnter: () => {
          // Scroll start hits START
          // ABOUT -> Reverse()
          // playAbout({ reverse: true });
          // SKILLS -> Play()
          playSkills().then(() => {
            setAnimState({ position: idxAnim, value: true });
          });
        },
        onEnterBack: () => {
          // Scroll End hits END REVERSE
          // ABOUT -> Play()
          // playAbout();
          // SKILLS -> Reverse()
          // playSkills({ reverse: true });
        },

        onLeave: () => {
          // Scroll End hits END
        },

        onLeaveBack: () => {
          // Scroll START hits START REVERSe
        },
      });
    }

    setupScrollTrigger();

  }

  if (!animState.value[idxAnim]) {
    setupAnim();
  }


  // Setup Tippy Hover Text
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
  <section id="section-about" style="overflow-y: scroll; overflow-x: hidden;" class="w-100">
    <LoadingScreen />
    <div id="section-about-content">
      <div class="row d-flex flex-column justify-content-center align-items-center vh-100 mx-auto">
        <div class="col-11 col-sm-9 col-md-7 col-lg-5">
          <!--OUTER DIV-->
          <div class="d-flex"> <!--INNTER DIV-->
            <!-- ABOUT ME -->
            <div class="d-flex justify-content-end me-1">
              <div class="rotate-vertical m-0 p-0 mb-2 aboutmecontainer" style="font-size: 2rem;">
                <div class="d-inline-block" ref="aboutme">
                  <b style="color: var(--white);">ABOUT ME</b>
                </div>
              </div>
            </div>
            <!-- ABOUT ME END -->
            <hr ref="hr" style="border: 2px solid var(--white); opacity:1" class="m-0 p-0 rotate-vertical mb-2">
            <div class="text-justify overflow-hidden">
              <div ref="paragraphs">
                <p ref="p1">
                  Hi, I'm <b style="color:var(--blue);">Chrisanto Sinatra</b>, a <b>Junior Back-End Developer</b> based
                  in Surabaya, Indonesia,
                  with a Bachelor's degree in Information Systems (GPA 3.99/4.00).
                  I'm a <i>Broadcom Spring Certified Professional</i> and an <i>AWS Certified Cloud Practitioner</i>,
                  passionate about
                  building scalable backend systems and constantly improving my skills in modern technologies. I mainly work with Laravel, Spring Boot, and SQL. But that doesn't stop me from exploring other technologies and frameworks.
                </p>

                <p ref="p2">
                  I have <b>1+ year of experience</b> in backend development, collaborating in <b>agile teams</b>, contributing to sprint planning, pull requests, and feature development.
                  In my current role at <b>Jakmall.com</b>, I've designed and optimized APIs, refactored legacy code for
                  efficiency, handled numerous <b>production issues</b>, and
                  delivered <b>production ready</b> backend services such as real-time chat, OTP verification, and third-party
                  integrations.
                </p>
                
                <p ref="p3" class="mb-1">
                  Outside of work, I keep <b>learning new technologies</b> such as cloud computing, containerization
                  with Docker, Spring Boot, and advanced
                  backend patterns. I am motivated by solving real-world problems and continuously <b>improving
                    myself</b> to deliver reliable,
                  impactful solutions. Always open to <b>new opportunities</b> to grow and contribute in the backend
                  engineering field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row vh-100 overflow-hidden">
        <div class="col-11 col-sm-9 col-md-7 mt-5 mx-auto ">
          <p ref="language" style="line-height: 1;" class="m-0 p-0 mb-3"><b>Language</b> <b
              style="color:var(--white)">&</b>
            <b> Technology</b> that I've used in the past
          </p>
          <hr ref="hr2" style="border: 2px solid var(--white); opacity:1" class="m-0 p-0 mb-2">
          <div class="d-flex flex-wrap gap-3 justify-content-start">
            <div v-for="data in skillImages" class="img-container">
              <img :src="'/images/icons/' + data.img" :alt="data.title" srcset="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
@media (max-width: 500px) and (min-height:800px) {
  p {
    font-size: clamp(12px, 1.7vh, 26px);
  }
}

.aboutmecontainer {
  overflow: hidden;
}

@-moz-document url-prefix() {
  .aboutmecontainer {
    overflow: -moz-hidden-unscrollable !important;
  }
}

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