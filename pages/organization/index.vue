<script setup lang="ts">
import { ref, onMounted } from 'vue';

const organizations = ref([]);

onMounted(async () => {
  try {
    const res = await fetch('http://localhost:4000/organizations');
    if (!res.ok) throw new Error('Network response was not ok');
    organizations.value = await res.json();
  } catch (error) {
    console.error('Fetch error:', error);
  }
});
</script>

<template>
  <div>
    <h1>Organizasyonlar</h1>
    <ul>
      <li v-for="org in organizations" :key="org.id">
        {{ org.name }} - {{ org.city }}
      </li>
    </ul>
  </div>
</template>
