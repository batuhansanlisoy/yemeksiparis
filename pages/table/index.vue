<script setup lang="ts">
import { ref } from 'vue'

const initialMasalar = Array.from({ length: 22 }, (_, i) => ({
  masaNo: i + 1
}))

const masalar = ref(initialMasalar)
</script>



<template>
  <div class="w-full h-20 rounded-md bg-red-400 flex items-center gap-4 px-4">
    <button class="bg-white text-red-500 font-semibold py-2 px-4 rounded shadow hover:bg-red-100 transition">
      Masa Ekle
    </button>
    <button class="bg-white text-red-500 font-semibold py-2 px-4 rounded shadow hover:bg-red-100 transition">
      Masa Sil
    </button>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pt-4">
    <deskCard
      v-for="(masa, i) in masalar"
      :key="i"
      :masa-no="masa.masaNo"
    />
  </div>
</template>

