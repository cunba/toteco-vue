import { ErrorResponseData, LoginRequestData } from '@/data/models';
import { LoginRepository } from '@/data/repository/impl/LoginRepository';
import router from '@/infrastructure/router';
import type { Ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useTheme } from 'vuetify';

export function init() {
    const { t } = useI18n()
    const theme = useTheme()

    return { t, theme }
}

function validate(errors: any, username: string, password: string) {
    errors.value = {}
    if (!username) errors.value.username = 'El usuario es obligatorio'
    if (!password) errors.value.password = 'La contraseña es obligatoria'
    return Object.keys(errors.value).length === 0
}

export async function handleLogin(isLoading: Ref<boolean, boolean>, username: string, password: string, errors: any) {
    if (!validate(errors, username, password)) return

    isLoading.value = true
    try {
        const credentials = new LoginRequestData(username, password)
        const res = await new LoginRepository().login(credentials)
        if (res !== undefined && !(res instanceof ErrorResponseData)) {
            localStorage.setItem('token', res.token!)
            localStorage.setItem('credentials', JSON.stringify(credentials))
            router.push('/home')
        }
    } catch (e) {
        console.log(e)
    } finally {
        isLoading.value = false
    }
}