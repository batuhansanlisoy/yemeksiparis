<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from '#vue-router';

const router= useRouter();

const menuItems = ref([
    { label: 'Menü', route: 'menu' },
    { label: 'Masa', route: 'table' },
    { label: 'Personel', route: 'staff' },
    { label: 'Rapor', route: 'report'},
    { label: 'Sipariş', route: 'order' },
    { label: 'Organizasyon', route: 'organization' },
])

const activeIndex = ref(0)

function setActive(index: number) {
    activeIndex.value = index
    router.push(menuItems.value[index].route);
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
