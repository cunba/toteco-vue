<script setup lang="ts">
import Header from '@/components/header/Header.vue';
import { PublicationData } from '@/data/models';
import { PublicationsRepository } from '@/data/repository/impl/PublicationsRepository';
import { onMounted, ref } from 'vue';
import PublicationCard from './components/publication/PublicationCard.vue';

const publications = ref(new Array<PublicationData>())

onMounted(async () => {
    const res = await new PublicationsRepository().getAll()
    if (Array.isArray(res))
        publications.value = (res as PublicationData[]).map(
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
})

</script>

<template>
    <v-app>
        <Header></Header>
        <v-main>
            <v-container>
                <v-row v-for="p in publications">
                    <PublicationCard :publication="p" />
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>