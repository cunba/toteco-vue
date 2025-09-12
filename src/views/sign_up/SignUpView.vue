<script setup lang="ts">
import HeaderView from '@/components/header/HeaderView.vue';
import { ROUTES } from '@/infrastructure/router';
import { ref } from 'vue';
import { handleSignUp, init } from './SignUpViewModel';

const form = ref({
    username: '',
    name: '',
    surname: '',
    birthDate: '',
    email: '',
    password: '',
    passwordConfirm: ''
})

const errors = ref<Record<string, string>>({})
const isLoading = ref(false)
const signUp = () => handleSignUp(isLoading, form, errors, t)

const { t, theme } = init()
</script>

<template>
    <v-app :style="{ backgroundColor: theme.current.value.colors.background, color: theme.current.value.colors.text }">
        <HeaderView :title="t('sign_up.title').toUpperCase()"
            :left-routing="[{ namePath: ROUTES.HOME, name: t('home.title') }]"
            :right-routing="[{ namePath: ROUTES.LOGIN, name: t('login.title') }]" :drawer-items="[]" />

        <v-main>
            <v-container fluid class="fill-height d-flex justify-center align-center">
                <v-card class="pa-6" width="500" elevation="4">
                    <v-card-text>
                        <v-form class="d-flex flex-column align-center" @submit.prevent="signUp">
                            <v-text-field v-model="form.username" :label="t('sign_up.username.label')" required
                                class="mb-3" style="width: 100%; max-width: 400px;"
                                :error-messages="errors.username ? [errors.username] : []" />
                            <v-text-field v-model="form.name" :label="t('sign_up.name.label')" required class="mb-3"
                                style="width: 100%; max-width: 400px;"
                                :error-messages="errors.name ? [errors.name] : []" />
                            <v-text-field v-model="form.surname" :label="t('sign_up.surname.label')" required
                                class="mb-3" style="width: 100%; max-width: 400px;"
                                :error-messages="errors.surname ? [errors.surname] : []" />
                            <v-text-field v-model="form.birthDate" :label="t('sign_up.birth_date.label')" type="date"
                                required class="mb-3" style="width: 100%; max-width: 400px;"
                                :error-messages="errors.birthDate ? [errors.birthDate] : []" />
                            <v-text-field v-model="form.email" :label="t('sign_up.email.label')" type="email" required
                                class="mb-3" style="width: 100%; max-width: 400px;"
                                :error-messages="errors.email ? [errors.email] : []" />
                            <v-text-field v-model="form.password" :label="t('sign_up.password.label')" type="password"
                                required class="mb-3" style="width: 100%; max-width: 400px;"
                                :error-messages="errors.password ? [errors.password] : []" />
                            <v-text-field v-model="form.passwordConfirm"
                                :label="t('sign_up.password_confirmation.label')" type="password" required class="mb-3"
                                style="width: 100%; max-width: 400px;"
                                :error-messages="errors.passwordConfirm ? [errors.passwordConfirm] : []" />

                            <v-btn class="mt-2" :color="theme.current.value.colors.touchable" :loading="isLoading"
                                :disabled="isLoading" style="width: 100%; max-width: 400px;" @click="signUp">
                                {{ t('sign_up') }}
                            </v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-container>
        </v-main>
    </v-app>
</template>
