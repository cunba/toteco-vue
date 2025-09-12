<script setup lang="ts">
import HeaderView from '@/components/header/HeaderView.vue';
import { ref } from 'vue';
import { handleLogin, init } from './LoginViewModel';
import { ROUTES } from '@/infrastructure/router';

const { t, theme } = init()

const username = ref('')
const password = ref('')
const isLoading = ref(false)
const errors = ref<{ username?: string; password?: string }>({})

const login = () => handleLogin(isLoading, username.value, password.value, errors, t)
</script>

<template>
    <v-app :style="{ backgroundColor: theme.current.value.colors.background, color: theme.current.value.colors.text }">
        <HeaderView :title="''" :left-routing="[
            { namePath: ROUTES.HOME, name: t('home.title') }
        ]" :right-routing="[
            { namePath: ROUTES.SIGN_UP, name: t('sign_up') }
        ]" :drawer-items="[]" />
        <v-main>
            <v-container fluid class="fill-height d-flex justify-center align-center" width="600">
                <v-card class="pa-6" width="500" height="350" elevation="4">
                    <v-card-title class="text-h6 font-weight-bold text-center" style="padding: 10px;">
                        {{ t('login.title').toUpperCase() }}
                    </v-card-title>

                    <v-card-text style="margin-top: 10px;">
                        <v-form class="d-flex flex-column align-center">
                            <v-text-field v-model="username" :label="t('login.username.label')" required class="mb-4"
                                style="width: 100%; max-width: 400px;"
                                :error-messages="errors.username ? [errors.username] : []" />
                            <v-text-field v-model="password" :label="t('login.password.label')" type="password" required class="mb-4"
                                style="width: 100%; max-width: 400px;"
                                :error-messages="errors.password ? [errors.password] : []" />
                            <v-btn class="mt-2" :color="theme.current.value.colors.touchable"
                                style="width: 100%; max-width: 400px;" :loading="isLoading" :disabled="isLoading"
                                :error-messages="errors.password ? [errors.password] : []"
                                @click="login">
                                {{ t('login.button') }}
                            </v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-container>
        </v-main>
    </v-app>
</template>