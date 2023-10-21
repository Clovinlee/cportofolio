<script setup>
import SideBar from './components/Sidebar.vue';

</script>

<template>
  <div class="wrapper vh-100">
    <router-view></router-view>
    <SideBar />
    <p class="m-2 p-0 position-absolute left-0 bottom-0" style="font-size: 10px; opacity: 0.4;">Built from scratch ©
      Chrisanto 2023.
      All
      Rights Reserved</p>
  </div>
</template>
