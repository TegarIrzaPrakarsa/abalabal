<template>
  <div class="flex">
    <Sidebar />
    <div class="flex-1">
      <Navbar />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
</script>
