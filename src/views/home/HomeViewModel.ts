import { ErrorResponseData, PublicationData } from '@/data/models';
import { PublicationsRepository } from '@/data/repository/impl/PublicationsRepository';
import router from '@/infrastructure/router';
import { onMounted, ref, type Ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useTheme } from 'vuetify';

export function initPublications(isLoading: Ref<boolean, boolean>) {
    const { t } = useI18n()
    const theme = useTheme()
    const publications = ref()

    onMounted(async () => {
        const res = await new PublicationsRepository().getAll()
        if (res !== undefined && !(res instanceof ErrorResponseData))
            publications.value = res.map(
                (item) =>
                    new PublicationData(
                        item.id,
                        item.date,
                        item.totalPrice,
                        item.totalScore,
                        item.photo,
                        item.userId,
                        item.establishmentId,
                        item.establishment,
                        item.products
                    )
            )
        else
            publications.value = res
        isLoading.value = false
    })

    return { publications, t, theme, isLoading }
}

export function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('credentials')
    localStorage.removeItem('user')
    localStorage.setItem('isLogged', 'false')
    router.go(0)
}