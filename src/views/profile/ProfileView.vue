<script setup lang="ts">
import HeaderView from '@/components/header/HeaderView.vue'
import type { UserData } from '@/data/models'
import { logout, ROUTES } from '@/infrastructure/router'
import { ref } from 'vue'
import { initPublications } from './ProfileViewModel'
import { ErrorResponseData } from '@/data/models'
import PublicationCard from '@/components/publication/PublicationCard.vue'


const isLoading = ref(true)
const user = JSON.parse(localStorage.getItem('user')!) as UserData
const { publications, t, theme, dialog } = initPublications(isLoading)
const publication = ref()
</script>


<template>
    <v-app :style="{ backgroundColor: theme.current.value.colors.background, color: theme.current.value.colors.text }">
        <HeaderView :title="'@' + user.username" :left-routing="[]" :right-routing="[]" :drawer-items="[
            { name: t('home.title'), onClick: () => $router.push({ name: ROUTES.HOME }) },
            { name: t('establishments.title'), onClick: () => $router.push({ name: ROUTES.ESTABLISHMENTS }) },
            { name: t('create_publication.title'), onClick: () => $router.push({ name: ROUTES.CREATE_PUBLICATION }) },
            user!.role === 'ADMIN' ? { name: t('create_establishment.title'), onClick: () => $router.push({ name: ROUTES.CREATE_ESTABLISHMENT }) } : {},
            { name: t('profile.title'), onClick: () => $router.push({ name: ROUTES.PROFILE }) },
            { name: t('logout'), onClick: logout }
        ]" />
        <v-main>
            <v-container class="pa-4" width="100%">
                <v-row align="center" justify="space-between" width="100%">
                    <v-avatar size="100">
                        <v-chip :color="theme.current.value.colors.background_second" variant="elevated"
                            size="x-large">{{
                                user.name[0] + user.surname[0] }}</v-chip>
                    </v-avatar>

                    <v-col class="text-right">
                        <v-row justify="end" class="mt-2">
                            <v-col cols="auto" class="text-center">
                                <div class="font-weight-bold">{{ user.publicationsNumber }}</div>
                                <small>{{ t('profile.publications_number') }}</small>
                            </v-col>
                            <v-col cols="auto" class="text-center">
                                <div class="font-weight-bold">{{ user.moneySpent + '€' }}</div>
                                <small>{{ t('profile.money_spent') }}</small>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>

                <v-divider class="my-4" />
                <v-row v-if="isLoading" justify="center" align="center" style="height: 300px;">
                    <v-col cols="auto" class="d-flex flex-column align-center justify-center">
                        <v-progress-circular indeterminate :color="theme.current.value.colors.touchable" size="48" />
                        <h1 class="mt-4">{{ t('loading') }}</h1>
                    </v-col>
                </v-row>
                <div v-else>
                    <div v-if="publications !== undefined && !(publications instanceof ErrorResponseData)">
                        <v-row dense>
                            <v-col v-for="p in publications" :key="p.id" cols="4" class="pa-1">
                                <v-img :src="p.photo" aspect-ratio="1" class="rounded" cover
                                    @click="dialog = !dialog; publication = p" />
                            </v-col>
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

                <v-dialog v-model="dialog" width="auto">
                    <v-btn class="ms-auto" text="Ok" @click="dialog = !dialog; publication = undefined"><v-icon icon="$close"></v-icon></v-btn>
                    <PublicationCard :publication="publication" />
                </v-dialog>
            </v-container>
        </v-main>
    </v-app>
</template>