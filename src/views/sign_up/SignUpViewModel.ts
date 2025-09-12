import { ErrorResponseData, UserData } from '@/data/models'
import { UsersRepository } from '@/data/repository/impl/UsersRepository'
import router, { ROUTES } from '@/infrastructure/router'
import { type Ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useTheme } from 'vuetify'
import {v4 as uuidv4} from 'uuid';

export function init() {
    const { t } = useI18n()
    const theme = useTheme()

    return { t, theme }
}

function validate(errors: any, form: any, t: any) {
    errors.value = {}
    if (!form.value.username) errors.value.username = t('sign_up.error.username')
    if (!form.value.name) errors.value.name = t('sign_up.error.name')
    if (!form.value.surname) errors.value.surname = t('sign_up.error.surname')
    if (!form.value.birthDate) errors.value.birthDate = t('sign_up.error.birth_date')
    if (!form.value.email) errors.value.email = t('sign_up.error.email')
    if (!form.value.password) errors.value.password = t('sign_up.error.password')
    if (!form.value.passwordConfirm) errors.value.passwordConfirm = t('sign_up.error.password_confirm')
    if (!form.value.email.includes('@')) errors.value.email = t('sign_up.error.email_invalid')
    if (form.value.password !== form.value.passwordConfirm) errors.value.passwordConfirm = t('sign_up.error.passwords_not_equal')
    return Object.keys(errors.value).length === 0
}

export async function handleSignUp(isLoading: Ref<boolean, boolean>, form: any, errors: any, t: any) {
    if (!validate(errors, form, t)) return

    isLoading.value = true
    try {
        console.log(form.value.birthDate)
        const user = new UserData(
            uuidv4().toString(),
            form.value.username,
            form.value.name,
            form.value.surname,
            new Date(form.value.birthDate).toISOString(),
            form.value.email,
            form.value.password,
            new Date().toISOString(),
            true,
            0,
            0,
            'USER'
        )
        console.log(user)
        const res = await new UsersRepository().save(user)
        if (res !== undefined && !(res instanceof ErrorResponseData)) {
            console.log(res)
            router.push(ROUTES.LOGIN)
        }
    } catch (e) {
        console.log(e)
    } finally {
        isLoading.value = false
    }
}
