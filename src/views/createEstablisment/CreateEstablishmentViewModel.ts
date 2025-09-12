import { ErrorResponseData, EstablishmentData } from '@/data/models'
import { EstablishmentsRepository } from '@/data/repository/impl/EstablishmentsRepository'
import router, { ROUTES } from '@/infrastructure/router'
import { v4 as uuidv4 } from 'uuid'
import { type Ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useTheme } from 'vuetify'

export function init() {
    const { t } = useI18n()
    const theme = useTheme()

    return { t, theme }
}

function validate(errors: any, form: any, t: any) {
    errors.value = {}
    if (!form.value.name) errors.value.name = t('create_establishment.error.name')
    if (!form.value.isOpen) errors.value.isOpen = t('create_establishment.error.isOpen')
    if (!form.value.location.latitude) errors.value.latitude = t('create_establishment.error.latitude')
    if (!form.value.location.longitude) errors.value.longitude = t('create_establishment.error.longitude')
    return Object.keys(errors.value).length === 0
}

export async function handleCreateEstablishment(isLoading: Ref<boolean, boolean>, form: any, errors: any, t: any) {
    if (!validate(errors, form, t)) return

    isLoading.value = true
    try {
        const establishment = new EstablishmentData(
            uuidv4().toString(),
            new Date().toISOString(),
            form.value.isOpen,
            0,
            form.value.name,
            JSON.stringify(form.value.location)
        )
        console.log(establishment)
        const res = await new EstablishmentsRepository().save(establishment)
        if (res !== undefined && !(res instanceof ErrorResponseData)) {
            console.log(res)
            router.push({ name: ROUTES.ESTABLISHMENTS })
        }
    } catch (e) {
        console.log(e)
    } finally {
        isLoading.value = false
    }
}
