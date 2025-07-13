<script setup lang="ts">
import { AuthRegisterOrganization } from '#components'
import { useRouter } from 'vue-router'

definePageMeta({
  layout: false
})

const router = useRouter()

async function handleSubmit(formData: {
  name: string
  owner_name: string
  email: string
  phone: string
  adress: string
  city: string
  country: string
  subscription_type: 'free' | 'basic' | 'pro'
  is_active: boolean
}) {
  try {
    // Burada backend API çağrısı yapabilirsin, örneğin:
    // await api.post('/organizations', formData)

    alert('Form submit edildi:\n' + JSON.stringify(formData, null, 2))

    // Kayıt başarılıysa giriş sayfasına yönlendir
    router.push('/auth/login')
  } catch (error) {
    alert('Kayıt sırasında hata oluştu: ' + (error as Error).message)
  }
}
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-100 p-4"
  >
    <AuthRegisterOrganization @submit="handleSubmit" />
  </div>
</template>
