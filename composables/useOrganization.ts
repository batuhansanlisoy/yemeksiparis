import type { Organization } from "~/types/organization";

export function useOrganization() {
    const loading = ref(false);
    const error = ref('');

    const createOrganization = async (payload: Organization) => {
        error.value = '';
        loading.value = true;

        try {
            const res = await fetch('http://localhost:4000/organizations', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(payload)
            });
            
            if(!res.ok) {
                const data = await res.json();
                throw new Error(data.error || 'Kayıt Başarısız');
            }

            return await res.json();
        } catch (err: any) {
            error.value = err.message;
            throw err;
        } finally {
            loading.value = false;
        }

    };
    return {
        createOrganization,
        loading,
        error
    }
}