<script setup>
import HomeView from './views/HomeView.vue';
import SideBar from './components/Sidebar.vue';

</script>

<template>
  <div class="vh-100">
    <div class="wrapper h-100">
      <router-view></router-view>
      <SideBar />
    </div>
  </div>
</template>
