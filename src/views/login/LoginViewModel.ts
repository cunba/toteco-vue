import { ErrorResponseData, LoginRequestData } from '@/data/models';
import { LoginRepository } from '@/data/repository/impl/LoginRepository';
import router, { ROUTES } from '@/infrastructure/router';
import type { Ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useTheme } from 'vuetify';

export function init() {
    const { t } = useI18n()
    const theme = useTheme()

    return { t, theme }
}

function validate(errors: any, username: string, password: string, t: any) {
    errors.value = {}
    if (!username) errors.value.username = t('login.error.username')
    if (!password) errors.value.password = t('login.error.password')
    return Object.keys(errors.value).length === 0
}

export async function handleLogin(isLoading: Ref<boolean, boolean>, username: string, password: string, errors: any, t: any) {
    if (!validate(errors, username, password, t)) return

    isLoading.value = true
    try {
        const credentials = new LoginRequestData(username, password)
        const res = await new LoginRepository().login(credentials)
        if (res !== undefined && !(res instanceof ErrorResponseData)) {
            localStorage.setItem('token', res.token!)
            localStorage.setItem('credentials', JSON.stringify(credentials))
            localStorage.setItem('user', JSON.stringify(res.user))
            localStorage.setItem('isLogged', 'true')
            router.push({ name: ROUTES.HOME })
        }
    } catch (e) {
        console.log(e)
    } finally {
        isLoading.value = false
    }
}