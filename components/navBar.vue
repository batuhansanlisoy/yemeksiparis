<script setup lang="ts">
import { ref } from 'vue'

const menuItems = ref([
  { label: 'Menü' },
  { label: 'Masa' },
  { label: 'Personel' },
  { label: 'Rapor' },
  { label: 'Sipariş' },
  { label: 'Organizasyon' },
])

const activeIndex = ref(0)

function setActive(index: number) {
  activeIndex.value = index
}
</script>

<template>
    <div class="h-auto bg-neutral-500">
        <nav class="w-64 rounded-3xl p-4 font-semibold">
        <ul>
        <li
          v-for="(item, index) in menuItems"
          :key="index"
          @click="setActive(index)"
          :class="[
              'cursor-pointer p-3 rounded mb-1 hover:bg-blue-300 text-gray-50',
              activeIndex === index ? 'bg-old-neutral-400' : ''
          ]">
          {{ item.label }}
      </li>

        </ul>
    </nav>
    </div>
    
</template>
