<script setup lang="ts">
import HeaderView from '@/components/header/HeaderView.vue'
import { ROUTES, logout } from '@/infrastructure/router'
import { computed, ref, watch } from 'vue'
import { handleCreate, init } from './CreatePublicationViewModel'

const { t, theme, user, establishments, img, imgUrl, products } = init()
const isLoading = ref(false)

const selectEstablishment = ref(null)

watch(img, (newFile) => {
    if (newFile) {
        imgUrl.value = URL.createObjectURL(newFile)
    } else {
        imgUrl.value = null
    }
})

const dialog = ref(false)
const newProduct = ref({ name: '', score: 0, price: 0 })

const totalScore = computed(() =>
    products.value.length
        ? (products.value.reduce((sum, p) => sum + p.score, 0) / products.value.length).toFixed(1)
        : '0'
)

const totalPrice = computed(() =>
    products.value.reduce((sum, p) => sum + p.price, 0).toFixed(2)
)

function addProduct() {
    if (newProduct.value.name && newProduct.value.score >= 0 && newProduct.value.price >= 0) {
        products.value.push({ ...newProduct.value })
        newProduct.value = { name: '', score: 0, price: 0 }
        dialog.value = false
    }
}

const create = () => handleCreate(isLoading, products.value, selectEstablishment.value!, user, totalPrice.value, totalScore.value, img.value!)
</script>

<template>
    <v-app :style="{ backgroundColor: theme.current.value.colors.background, color: theme.current.value.colors.text }">
        <HeaderView :title="t('create_publication.title').toUpperCase()" :left-routing="[]" :right-routing="[]"
            :drawer-items="[
                { name: t('home.title'), onClick: () => $router.push({ name: ROUTES.HOME }) },
                { name: t('establishments.title'), onClick: () => $router.push({ name: ROUTES.ESTABLISHMENTS }) },
                user!.role === 'ADMIN' ? { name: t('create_establishment.title'), onClick: () => $router.push({ name: ROUTES.CREATE_ESTABLISHMENT }) } : {},
                { name: t('profile.title'), onClick: () => $router.push({ name: ROUTES.PROFILE }) },
                { name: t('logout'), onClick: logout }]" />

        <v-main>
            <v-container class="pa-4" style="max-width: 600px;">
                <h2 class="text-h6 font-weight-bold mb-4">{{ t('create_publication.establishment.label') }}</h2>
                <v-select v-model="selectEstablishment" :items="establishments" item-title="name" item-value="id"
                    :label="t('select')" persistent-hint return-object single-line></v-select>

                <h2 class="text-h6 font-weight-bold mb-4">{{ t('create_publication.image.label') }}</h2>
                <v-file-input v-model="img" :label="t('create_publication.image.label')" accept="image/*"
                    prepend-icon="mdi-camera" show-size class="mb-4" />

                <div v-if="imgUrl !== null">
                    <v-img :src="imgUrl" alt="Preview" height="400" width="100%" cover class="rounded" />
                </div>

                <v-row class="mb-4">
                    <v-col cols="6">
                        <div class="font-weight-bold">Puntuación total: {{ totalScore }} / 5 ☆</div>
                    </v-col>
                    <v-col cols="6">
                        <div class="font-weight-bold text-right">Precio total: {{ totalPrice }} €</div>
                    </v-col>
                </v-row>

                <h2 class="text-h6 font-weight-bold mb-4">{{ t('create_publication.products.label') }}</h2>
                <v-list v-if="products.length">
                    <v-list-item v-for="(p, index) in products" :key="index">
                        <v-list-item-content>
                            <v-list-item-title>{{ p.name }}</v-list-item-title>
                            <v-list-item-subtitle>
                                {{ p.score }} / 5 ☆ — {{ p.price }} €
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
                <div v-else class="text-caption mb-4">No hay productos añadidos.</div>

                <!-- Botones -->
                <v-row justify="space-between" class="mt-4">
                    <v-btn :color="theme.current.value.colors.background_second" @click="dialog = true">Producto</v-btn>
                    <v-btn :color="theme.current.value.colors.touchable" :loading="isLoading" :disabled="isLoading"
                        @click="create">
                        {{ t('create_publication.title') }}
                    </v-btn>
                </v-row>

                <!-- Diálogo para añadir producto -->
                <v-dialog v-model="dialog" max-width="400">
                    <v-card>
                        <v-card-title class="text-h6 font-weight-bold">Añadir producto</v-card-title>
                        <v-card-text>
                            <v-text-field v-model="newProduct.name" label="Nombre" required />
                            <v-text-field v-model.number="newProduct.score" label="Puntuación sobre 5" type="number"
                                min="0" max="5" required />
                            <v-text-field v-model.number="newProduct.price" label="Precio (€)" type="number" min="0"
                                required />
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer />
                            <v-btn text @click="dialog = false">Cancelar</v-btn>
                            <v-btn color="primary" @click="addProduct">Ok</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-container>
        </v-main>
    </v-app>
</template>
