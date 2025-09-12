import { ErrorResponseData, EstablishmentData } from '@/data/models';
import { EstablishmentsRepository } from '@/data/repository/impl/EstablishmentsRepository';
import router from '@/infrastructure/router';
import { onMounted, ref, type Ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useTheme } from 'vuetify';

export function initEstablishments(isLoading: Ref<boolean, boolean>) {
    const { t } = useI18n()
    const theme = useTheme()
    const establishments = ref()

    onMounted(async () => {
        const res = await new EstablishmentsRepository().getAll()
        if (res !== undefined && !(res instanceof ErrorResponseData))
            establishments.value = res.map(
                (item) =>
                    new EstablishmentData(
                        item.id,
                        item.creationDate,
                        item.isOpen,
                        item.score,
                        item.name,
                        item.location
                    )
            )
        else
            establishments.value = res
        console.log(res)
        isLoading.value = false
    })

    return { establishments, t, theme, isLoading }
}

export function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('credentials')
    localStorage.removeItem('user')
    localStorage.setItem('isLogged', 'false')
    router.go(0)
}