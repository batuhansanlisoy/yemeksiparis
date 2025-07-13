<template>
  <div class="min-h-screen bg-slate-100">
    <!-- Üst Bar -->
    <div class="fixed top-0 left-0 w-full z-50">
      <div class="bg-gray-700 h-14 flex items-center justify-start px-16 text-white font-bold text-xl tracking-wide border-b-4 border-gray-50">
        Forksy
      </div>
    </div>

    <!-- Sol Menü -->
    <navBar class="fixed top-14 left-0 h-[calc(100vh-3.5rem)] w-64 z-40" />

    <!-- İçerik -->
    <div class="ml-64 pt-14 px-6">
      <NuxtPage />
    </div>
  </div>
</template>
