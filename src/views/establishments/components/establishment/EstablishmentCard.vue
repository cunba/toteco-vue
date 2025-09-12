<script setup lang="ts">
import { ErrorResponseData, PublicationData, type EstablishmentData } from '@/data/models';
import { PublicationsRepository } from '@/data/repository/impl/PublicationsRepository';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useTheme } from 'vuetify';
import PublicationCard from '../publication/PublicationCard.vue';

const props = defineProps<{ establishment: EstablishmentData }>()
const expanded = ref(false)
const theme = useTheme()
const publications = ref()
const isLoading = ref(false)
const { t } = useI18n()

async function toggleCard() {
    isLoading.value = true
    expanded.value = !expanded.value
    const res = await new PublicationsRepository().getByEstablishment(props.establishment.id)
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
    console.log(res)
    isLoading.value = false
}
</script>

<template>
    <v-card class="mb-4 mx-auto" @click="toggleCard" elevation="2" width="800">
        <v-card-title>
            <v-row class="w-100" align="center" justify="space-between">
                <v-col cols="auto">
                    <span class="text-h6">🍽️ {{ props.establishment.name }}</span>
                </v-col>
                <v-col cols="auto">
                    <v-chip :color="theme.current.value.colors.background_second" variant="elevated">{{
                        props.establishment.score }}/5 ⭐️</v-chip>
                </v-col>
            </v-row>
        </v-card-title>

        <v-expand-transition>
            <div v-if="expanded">
                <v-divider></v-divider>
                <v-row v-if="isLoading" justify="center" align="center" style="height: 300px;">
                    <v-col cols="auto" class="d-flex flex-column align-center justify-center">
                        <v-progress-circular indeterminate :color="theme.current.value.colors.touchable" size="48" />
                        <h1 class="mt-4">{{ t('loading') }}</h1>
                    </v-col>
                </v-row>
                <div v-else>
                    <v-card-text>
                        <div v-if="publications.length > 0">
                            <v-list>
                                <v-list-item v-for="(p, index) in publications">
                                    <v-divider v-if="index !== 0" class="my-4" />
                                    <PublicationCard :publication="p" />
                                </v-list-item>
                            </v-list>
                        </div>
                        <div v-else>
                            <h1>{{ t('establishments.no_data') }}</h1>
                        </div>
                    </v-card-text>
                </div>
            </div>
        </v-expand-transition>
    </v-card>
</template>