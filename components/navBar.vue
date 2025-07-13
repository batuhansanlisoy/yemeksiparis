<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from '#vue-router';

const router= useRouter();

const menuItems = ref([
    { 
        label: 'Menü',
        route: 'menu',
        icon: 'material-symbols:menu-book-outline'
    },
    {
        label: 'Masa',
        route: 'table',
        icon: 'ic:twotone-local-dining'
    },
    {
        label: 'Personel',
        route: 'staff',
        icon: 'raphael:employee'
    },
    {
        label: 'Rapor',
        route: 'report',
        icon: 'lsicon:report-filled'
    },
    {
        label: 'Sipariş',
        route: 'order',
        icon: 'material-symbols-light:border-color-outline-sharp'
    }, // buna girmez burda id falan bekliyor
    {
        label: 'Organizasyon',
        route: 'organization',
        icon: 'ri:organization-chart'
    },
])

const activeIndex = ref(0)

function setActive(index: number) {
    activeIndex.value = index
    router.push(menuItems.value[index].route);
}
</script>

<template>
    <div class="h-auto">
        <nav class="w-64 p-4 font-semibold">
            <ul>
                <li
                class="bg-white shadow-sm mb-5 text-gray-900 rounded-lg"
                v-for="(item, index) in menuItems"
                :key="index"
                @click="setActive(index)"
                :class="[
                    'cursor-pointer p-3 rounded mb-1 hover:bg-red-200 hover:text-red-80',
                    activeIndex === index ? 'bg-green-300' : ''
                ]">
                <div class="flex items-center space-x-2">
                    <Icon :name="item.icon" class="w-5 h-5" />
                    <span>{{ item.label }}</span>
                </div>
                </li>

            </ul>
        </nav>
    </div>
</template>
