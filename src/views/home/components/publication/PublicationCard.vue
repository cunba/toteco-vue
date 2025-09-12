<template>
  <v-card class="mx-auto my-4 pa-4" width="800" max-height="640" elevation="6">
    <v-row align="center" class="mb-2">
      <v-col>
        <v-card-title class="text-h4 font-weight-bold">
          🍽️ {{ publication.establishment?.name }}
        </v-card-title>
      </v-col>
    </v-row>

    <v-divider class="my-4" />

    <v-card-text>
      <v-row no-gutters>
        <v-col cols="6">
          <v-img
            :src="publication.photo"
            alt="Foto del establecimiento"
            height="400"
            width="100%"
            cover
            class="rounded"
          />
        </v-col>

        <v-col cols="6" class="px-4">
          <div class="d-flex flex-column justify-center align-center text-center" style="max-height: 400px; overflow-y: auto;">
            <v-list density="comfortable">
              <v-list-item
                v-for="(p, index) in publication.products"
                :key="index"
                class="py-2"
              >
                <v-list-item-title class="text-h6 font-weight-medium">
                  - {{ p.name }}
                </v-list-item-title>
                <v-list-item-subtitle class="text-body-1 text-grey-darken-1">
                  {{ p.price }} € · ⭐ {{ p.score }}
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </div>
        </v-col>
      </v-row>

      <v-divider class="my-4" />

      <v-row justify="space-between">
        <v-col cols="6">
          <div class="text-h5 font-weight-bold">
            💸 Total: {{ publication.totalPrice }} €
          </div>
        </v-col>
        <v-col cols="6" class="text-right">
          <div class="text-h5 font-weight-bold">
            📊 Score: {{ publication.totalScore }}
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { PublicationData } from '@/data/models'

defineProps<{ publication: PublicationData }>()
</script>
