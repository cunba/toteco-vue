<script setup lang="ts">
import HeaderView from '@/components/header/HeaderView.vue';
import { ErrorResponseData, UserData } from '@/data/models';
import { ROUTES, logout } from '@/infrastructure/router';
import { ref } from 'vue';
import PublicationCard from './components/publication/PublicationCard.vue';
import { initPublications } from './HomeViewModel';

const isLoading = ref(true)
const isLogged = ref(localStorage.getItem('isLogged'))
let user = undefined
if (isLogged.value === 'true') user = JSON.parse(localStorage.getItem('user')!) as UserData

const { publications, t, theme } = initPublications(isLoading)

</script>

<template>
    <v-app :style="{ backgroundColor: theme.current.value.colors.background, color: theme.current.value.colors.text }">
        <HeaderView :title="t('home.title').toUpperCase()" :left-routing="isLogged !== null && isLogged === 'true' ? [] : [
            { namePath: ROUTES.ESTABLISHMENTS, name: t('establishments.title') }
        ]" :right-routing="isLogged !== null && isLogged === 'true' ? [] : [
            { namePath: ROUTES.LOGIN, name: t('login') },
            { namePath: ROUTES.SIGN_UP, name: t('sign_up') }
        ]" :drawer-items="isLogged !== null && isLogged === 'true' ? [
            { name: t('establishments.title'), onClick: () => $router.push({ name: ROUTES.ESTABLISHMENTS }) },
            { name: t('create_publication.title'), onClick: () => $router.push({ name: ROUTES.CREATE_PUBLICATION }) },
            isLogged === 'true' && user!.role === 'ADMIN' ? { name: t('create_establishment.title'), onClick: () => $router.push({ name: ROUTES.CREATE_ESTABLISHMENT }) } : {},
            { name: t('profile.title'), onClick: () => $router.push({ name: ROUTES.PROFILE }) },
            { name: t('logout'), onClick: logout }
        ] : []" />
        <v-main>
            <v-container>
                <v-row v-if="isLoading" justify="center" align="center" style="height: 300px;">
                    <v-col cols="auto" class="d-flex flex-column align-center justify-center">
                        <v-progress-circular indeterminate :color="theme.current.value.colors.touchable" size="48" />
                        <h1 class="mt-4">{{ t('loading') }}</h1>
                    </v-col>
                </v-row>
                <div v-else>
                    <div v-if="publications !== undefined && !(publications instanceof ErrorResponseData)">
                        <v-row v-for="p in publications">
                            <PublicationCard :publication="p" />
                        </v-row>
                    </div>
                    <div v-else>
                        <v-row justify="center" align="center" style="height: 300px;">
                            <v-col cols="12" class="text-center">
                                <h1>😕</h1>
                                <div class="text-h5 font-weight-medium mt-2">
                                    {{ t('home.no_data') }}
                                </div>
                                <div class="text-body-1 text-grey-darken-1 mt-1">
                                    {{ t('home.no_data.message') }}
                                </div>
                            </v-col>
                        </v-row>
                    </div>
                </div>
            </v-container>
        </v-main>
    </v-app>
</template>