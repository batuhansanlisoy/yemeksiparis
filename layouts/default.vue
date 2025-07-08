<template>
  <div class="flex min-h-screen">
    <!-- Sabit Navbar -->
    <navBar class="fixed pt-6 h-screen w-64  rounded-none flex items-start justify-center shadow-md z-50" />

    <!-- Sağdaki içerik kısmı -->
    <div class="ml-64 flex-1 p-6">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
import navBar from '~/components/navBar.vue'
</script>
