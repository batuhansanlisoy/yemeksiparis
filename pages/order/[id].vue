<script setup lang="ts">
import { ref } from 'vue'
const route = useRoute()
const id = route.params.id as string

// Form inputu için reactive değişken
const yeniYemek = ref('')

// Sipariş edilen yemekler listesi
const siparisler = ref<string[]>([])

// Ekle butonu fonksiyonu
function yemekEkle() {
    if (yeniYemek.value.trim() === '') return // boşsa ekleme

    siparisler.value.push(yeniYemek.value.trim())
    yeniYemek.value = '' // inputu temizle
}
</script>

<template>
  <div class="p-6 max-w-md mx-auto">
    <h1 class="text-2xl font-bold mb-4">Masa #{{ id }} için Sipariş Ekle</h1>

    <form @submit.prevent="yemekEkle" class="flex gap-2 mb-4">
      <input
        v-model="yeniYemek"
        type="text"
        placeholder="Yemek adı girin"
        class="flex-grow border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        class="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
      >
        Ekle
      </button>
    </form>

    <ul>
      <li
        v-for="(yemek, index) in siparisler"
        :key="index"
        class="mb-2 p-2 bg-gray-100 rounded shadow"
      >
        {{ yemek }}
      </li>
    </ul>
  </div>
</template>
