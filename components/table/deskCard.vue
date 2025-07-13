<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router'
const props = defineProps<{
    masaNo: number,
    icerik?: string
}>();

const router = useRouter();

function goToOrder() {

    router.push(`/order/${props.masaNo}`)
}

</script>

<template>
    <UCard class="shadow-sm shadow-stone-700">
        <template #header>
            <span class="font-semibold text-sm">
                Masa Numarası: {{ masaNo }}
                
            </span>
            <div class="flex items-center gap-2 text-sm text-gray-600">
                <Icon icon="mdi:table-chair" class="w-5 h-5 text-red-400" />
                <span>Boş Masa</span>
            </div>
        </template>
        <div class="break-all">adsfsdfdssssssssssssssssssssssssssssssssssssssss</div>
        <div class="flex-row flex justify-between w-full">
            <button @click="goToOrder" class="bg-red-400 h-7 text-white font-semibold text-sm px-4 rounded shadow hover:bg-blue-700 transition">
            Sipariş Ekle
            </button>

            <button class="bg-blue-400 h-7 text-white font-semibold text-sm px-4 rounded shadow hover:bg-blue-700 transition">
            Bilgi
            </button>
            <button class="bg-emerald-500 h-7 text-white font-semibold text-sm px-4 rounded shadow hover:bg-blue-700 transition">
            Detay
            </button>
        </div>
        

        <template #footer>
            <p class="text-sm font-semibold text-gray-700">
                Toplam 100£
            </p>
        </template>
    </UCard>
</template>
