<script setup>
import SideBar from './components/Sidebar.vue';

</script>

<template>
  <div class="wrapper vh-100">
    <router-view></router-view>
    <SideBar />
  </div>
</template>
