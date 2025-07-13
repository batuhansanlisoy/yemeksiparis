<script setup lang="ts">
import { ref } from 'vue'

const router = useRouter();

const initialMasalar = Array.from({ length: 22 }, (_, i) => ({
    masaNo: i + 1
}))

const masalar = ref(initialMasalar)

const iconSize = ['w-7', 'h-7'];
const text = "text-gray-900";
// function goToTableLayout () {
//     router.push('/')
// }
</script>

<template>
    <div class="w-full h-20 rounded-md justify-between flex items-center">
        <div class="gap-4 flex">
            <button class="bg-white shadow-stone-400 flex items-center gap-2 `${text}` font-semibold py-2 px-4 rounded shadow hover:bg-red-100 transition">
                <Icon name="ic:twotone-local-dining"  :class="iconSize"/>
                Tüm Masalar
            </button>
            <button class="bg-white shadow-stone-400 flex items-center gap-2 `${text}` font-semibold py-2 px-4 rounded shadow hover:bg-red-100 transition">
                <Icon name="material-symbols:dining-outline" :class="iconSize"/>
                Boş Masalar
            </button>
            <button class="bg-white shadow-stone-400 flex items-center gap-2 `${text}` font-semibold py-2 px-4 rounded shadow hover:bg-red-100 transition">
                <Icon name="material-symbols:dining" :class="iconSize"/>
                Dolu Masalar
            </button>
            <button class="bg-white shadow-stone-400 flex items-center gap-2 `${text}` font-semibold py-2 px-4 rounded shadow hover:bg-red-100 transition">
                <Icon name="lsicon:order-done-filled" :class="iconSize"/>
                Ödemesi Alınan 
            </button>
        </div>
        <div>
            <button 
            @click="gotToTableLayout"
            class="bg-white shadow-stone-400 flex items-center gap-2 `${text}` font-semibold py-2 px-4 rounded shadow hover:bg-red-100 transition">
                <Icon name="meteor-icons:table-layout" :class="iconSize"/>
                Masa Düzeni 
            </button>
        </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pt-4">
        <TableDeskCard
        v-for="(masa, i) in masalar"
        :key="i"
        :masa-no="masa.masaNo"/>
    </div>
</template>

