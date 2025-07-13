<script setup lang="ts">
import type { RegisterUserPayload } from '~/types/user';
import { ref, defineEmits } from 'vue';

const emit = defineEmits<{
    (e: 'submit', formData: { name: string; email: string; password: string; phone: string; invite_code: string }): void
}>();

const loading = ref(false);
const errorMsg = ref('');

const form = ref<RegisterUserPayload>({
    name: '',
    email: '',
    password: '',
    phone: '',
    invite_code: ''
});

async function submit() {
    loading.value = true;
    errorMsg.value = '';

    try {
        // submit event dışarıya form datasını iletir
        await emit('submit', form.value);
    } catch (e: any) {
        errorMsg.value = e.message || 'Bilinmeyen hata';
    } finally {
        loading.value = false;
    }
}
</script>

<template>
    <UCard class="w-full max-w-md p-6 shadow-xl">
        <template #header>
            <h1 class="text-xl font-semibold text-center text-green-700">Kullanıcı Kaydı</h1>
        </template>

        <UForm @submit.prevent="submit" class="space-y-4">
            <UInput
                v-model="form.name"
                placeholder="Ad Soyad"
                required
                label="Ad Soyad"
                size="xl"
                class="w-full"
            />
            <UInput
                v-model="form.email"
                type="email"
                placeholder="Email"
                required
                label="Email"
                size="xl"
                class="w-full"
            />
            <UInput
                v-model="form.password"
                type="password"
                placeholder="Şifre"
                required
                label="Şifre"
                size="xl"
                class="w-full"
            />
            <UInput
                v-model="form.phone"
                placeholder="Telefon Numarası"
                required
                label="Telefon"
                size="xl"
                class="w-full"
            />
            <UInput
                v-model="form.invite_code"
                placeholder="Davet Kodu"
                required
                label="Davet Kodu"
                size="xl"
                class="w-full"
            />

            <UButton
                type="submit"
                block
                :loading="loading"
                class="mt-2 p-2"
            >
                Kayıt Ol
            </UButton>
        </UForm>

        <UAlert
            v-if="errorMsg"
            icon="i-heroicons-exclamation-circle"
            variant="soft"
            class="mt-4 w-full"
        >
            {{ errorMsg }}
        </UAlert>

        <div class="text-center text-sm text-gray-600 mt-6">
            Zaten hesabın var mı?
            <NuxtLink to="/auth/login" class="text-green-600 font-medium hover:underline">Giriş Yap</NuxtLink>
        </div>
    </UCard>
</template>
