<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useOrganization } from '~/composables/useOrganization';

const { createOrganization, loading, error } = useOrganization();
const router = useRouter();

const form = ref({
  name: '',
  owner_name: '',
  email: '',
  phone: '',
  adress: '',
  city: '',
  password: '',
  country: 'Türkiye',
  subscription_type: 'free' as 'free' | 'basic' | 'pro',
  is_active: true,
});

const items = ref([
    { label: 'Free', value: 'free' },
    { label: 'Basic', value: 'basic' },
    { label: 'Pro', value: 'pro' }
]);

const errorMsg = ref('');

async function submit() {
  errorMsg.value = '';
  try {
    await createOrganization(form.value);
    alert('Kayıt başarılı!');
    router.push('/');
  } catch (e: any) {
    errorMsg.value = e.message || 'Bilinmeyen hata';
  }
}
</script>

<template>
  <UCard class="w-full max-w-md p-6 shadow-xl">
    <template #header>
      <h1 class="text-xl font-semibold text-center text-info">Yeni Organizasyon Kaydı</h1>
    </template>

    <UForm
    :state="form"
    @submit.prevent="submit"
    class="space-y-4"
    >
      <UInput
        v-model="form.name"
        label="Firma Adı"
        placeholder="Firma adını girin"
        required
        size="xl"
        color="info"
        class="w-full"
      />
      <UInput
        v-model="form.owner_name"
        label="Sahip Adı"
        placeholder="Sahip adını girin"
        required
        size="xl"
        color="info"
        class="w-full"
      />
      <UInput
        v-model="form.email"
        label="Email"
        type="email"    
        placeholder="example@mail.com"
        required
        size="xl"
        color="info"
        class="w-full"
      />
      <UInput
        v-model="form.phone"
        label="Telefon"
        type="tel"
        placeholder="+90 5xx xxx xx xx"
        required
        size="xl"
        color="info"
        class="w-full"
      />
      <UInput
        v-model="form.adress"
        label="Adres"
        placeholder="Adresinizi girin"
        required
        size="xl"
        color="info"
        class="w-full"
      />
      <UInput
        v-model="form.city"
        label="Şehir"
        placeholder="Şehir girin"
        required
        size="xl"
        color="info"
        class="w-full"
      />

      <UInput
        v-model="form.password"
        label="Şifre"
        type="password"
        placeholder="Şifre giriniz"
        required
        size="xl"
        color="info"
        class="w-full"
      />

      <USelect
      v-model="form.subscription_type"
      required
      placeholder="Abonelik Tipi"
      :items="items"
      size="xl"
      class="w-full" />

      <UButton
        type="submit"
        color="info"
        block
        :loading="loading"
        class="mt-2 p-4"
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
  </UCard>
</template>
