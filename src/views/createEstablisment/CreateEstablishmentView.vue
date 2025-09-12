<script setup lang="ts">
import HeaderView from '@/components/header/HeaderView.vue';
import { ROUTES, logout } from '@/infrastructure/router';
import { ref } from 'vue';
import { handleCreateEstablishment, init } from './CreateEstablishmentViewModel';

const form = ref({
    name: '',
    isOpen: '',
    location: {
        latitude: 0.0,
        longitude: 0.0
    }
})

const errors = ref<Record<string, string>>({})
const isLoading = ref(false)
const createEstablishment = () => handleCreateEstablishment(isLoading, form, errors, t)

const { t, theme } = init()
</script>

<template>
    <v-app :style="{ backgroundColor: theme.current.value.colors.background, color: theme.current.value.colors.text }">
        <HeaderView :title="t('establishments.title').toUpperCase()" :left-routing="[]" :right-routing="[]"
            :drawer-items="[
                { name: t('home.title'), onClick: () => $router.push({ name: ROUTES.HOME }) },
                { name: t('establishments.title'), onClick: () => $router.push({ name: ROUTES.ESTABLISHMENTS }) },
                { name: t('create_publication.title'), onClick: () => $router.push({ name: ROUTES.CREATE_PUBLICATION }) },
                { name: t('profile.title'), onClick: () => $router.push({ name: ROUTES.PROFILE }) },
                { name: t('logout'), onClick: logout }
            ]" />

        <v-main>
            <v-container fluid class="fill-height d-flex justify-center align-center">
                <v-card class="pa-6" width="500" elevation="4">
                    <v-card-title class="text-h6 font-weight-bold text-center" style="padding: 10px;">
                        {{ t('create_establishment.title').toUpperCase() }}
                    </v-card-title>
                    <v-card-text>
                        <v-form class="d-flex flex-column align-center" @submit.prevent="createEstablishment">
                            <v-text-field v-model="form.name" :label="t('create_establishment.name.label')" required
                                class="mb-3" style="width: 100%; max-width: 400px;"
                                :error-messages="errors.name ? [errors.name] : []" />
                            <v-radio-group v-model="form.isOpen" :label="t('create_establishment.isOpen.label')"
                                class="mb-3" style="width: 100%; max-width: 400px;"
                                :error-messages="errors.isOpen ? [errors.isOpen] : []">
                                <v-radio :label="t('yes')" :value="true" />
                                <v-radio :label="t('no')" :value="false" />
                            </v-radio-group>
                            <v-row class="mb-3" style="max-width: 800px;">
                                <v-col cols="6">
                                    <v-text-field v-model.number="form.location.latitude" label="Latitud" type="number"
                                        step="0.000001" required
                                        :error-messages="errors.latitude ? [errors.latitude] : []" />
                                </v-col>

                                <v-col cols="6">
                                    <v-text-field v-model.number="form.location.longitude" label="Longitud"
                                        type="number" step="0.000001" required
                                        :error-messages="errors.longitude ? [errors.longitude] : []" />
                                </v-col>
                            </v-row>

                            <v-btn class="mt-2" :color="theme.current.value.colors.touchable" :loading="isLoading"
                                :disabled="isLoading" style="width: 100%; max-width: 400px;"
                                @click="createEstablishment">
                                {{ t('create_establishment.button') }}
                            </v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-container>
        </v-main>
    </v-app>
</template>
