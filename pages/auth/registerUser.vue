<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

definePageMeta({ layout: false });

const router = useRouter();

const form = ref({
  name: '',
  email: '',
  password: '',
  invite_code: '',
  phone: ''
});

const loading = ref(false);
const errorMsg = ref('');

async function submit() {
  errorMsg.value = '';
  loading.value = true;

  try {
    if (!form.value.invite_code) {
      throw new Error("Davet kodu zorunludur!");
    }

    alert(`Kayıt başarılı!\nEmail: ${form.value.email}`);
    router.push('/auth/login');
  } catch (err: any) {
    errorMsg.value = err.message || "Bilinmeyen hata";
  } finally {
    loading.value = false;
  }
}
</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white px-4">
        <AuthRegisterUser
        />
    </div>
</template>
