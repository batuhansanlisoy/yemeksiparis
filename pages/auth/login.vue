<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

definePageMeta({ layout: false });

const router = useRouter();

const activeTab = ref<'organization' | 'user'>('organization');

const orgForm = ref({
  email: '',
  password: ''
});

const userForm = ref({
  email: '',
  password: ''
});

function submitOrganization() {
  alert(`Organizasyon GİRİŞ\nEmail: ${orgForm.value.email}`);
  // API çağrısı buraya
}

function submitUser() {
  alert(`Kullanıcı GİRİŞ\nEmail: ${userForm.value.email}`);
  // API çağrısı buraya
}

function goToRegister() {
  if (activeTab.value === 'organization') {
    router.push('/auth/registerOrganization');
  } else {
    router.push('/auth/registerUser');
  }
}

const tabColor = computed((): 'info' | 'primary' => {
  return activeTab.value === 'organization' ? 'info' : 'primary';
});
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-50 to-white p-6">
    <UCard class="max-w-md w-full shadow-xl p-6">
      <template #header>
        <h2 class="text-2xl font-semibold text-center text-blue-700">Giriş Yap</h2>
      </template>

      <UTabs
        v-model="activeTab"
        :color="tabColor"
        :items="[
          { label: 'Organizasyon', value: 'organization' },
          { label: 'Kullanıcı', value: 'user' }
        ]"
        class="mb-4"
      />

      <UForm
        v-if="activeTab === 'organization'"
        @submit.prevent="submitOrganization"
        class="space-y-4"
        :state="orgForm"
      >
        <UInput
          v-model="orgForm.email"
          type="email"
          label="Email"
          placeholder="Organizasyon Email"
          required
          size="xl"
          class="w-full"
        />
        <UInput
          v-model="orgForm.password"
          type="password"
          label="Şifre"
          placeholder="Şifre"
          required
          size="xl"
          class="w-full"
        />
        <UButton type="submit" class="p-3" color="info" block>Giriş Yap</UButton>
      </UForm>

      <UForm
        v-else
        @submit.prevent="submitUser"
        class="space-y-4"
        :state="userForm"
      >
        <UInput
          v-model="userForm.email"
          type="email"
          label="Email"
          placeholder="Kullanıcı Email"
          required
          size="xl"
          class="w-full"
        />
        <UInput
          v-model="userForm.password"
          type="password"
          label="Şifre"
          placeholder="Şifre"
          required
          size="xl"
          class="w-full"
        />
        <UButton type="submit" class="p-3" color="primary" block>Giriş Yap</UButton>
      </UForm>

      <template #footer>
        <div class="text-center text-sm text-gray-600">
          Hesabınız yok mu?
          <button
            class="text-blue-600 hover:underline ml-1 font-medium"
            @click="goToRegister"
          >
            Kayıt Ol
          </button>
        </div>
      </template>
    </UCard>
  </div>
</template>
