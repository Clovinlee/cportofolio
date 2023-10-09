<script setup>
import Granim from 'granim';
import { ref, onMounted, onUnmounted } from 'vue'
import windowScreenSize from '../helper/windowScreen';

const { isMobile } = windowScreenSize();

const skillData = ref(["Web Developer", "Android Developer", ".NET Desktop Developer", "REST API", "Full Stack Developer"]);
const colorNames = ref(["bg-danger", "bg-success", "bg-info", "bg-warning", 'bg-secondary']);


onMounted(() => {
});

const randomSpacing = function () {
  // Adjust this range to control the minimum and maximum spacing
  const minSpacing = 10; // Minimum spacing in pixels
  const maxSpacing = 70; // Maximum spacing in pixels

  // Generate a random spacing value within the range
  return (Math.floor(Math.random() * (maxSpacing - minSpacing + 1)) + minSpacing) * (isMobile.value == 0);
};

</script>
<template>
  <div class="bg-dark" style="flex: 5;">
    <h1>ABOUT</h1>
  </div>
  <div class="bg-success" style="flex:4">
    <h1>TEXT</h1>
  </div>
</template>