<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { useTheme } from 'vuetify';
import './HeaderStyles.scss';
import { RouterLink } from 'vue-router'

const { t } = useI18n()


const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
  <v-app-bar color="#5E4B8B" height="60" flat density="comfortable">
    <v-container fluid>
      <v-row align="center" justify="space-between">
        <v-col cols="auto">
          <span class="header-text">{{ t('home.title') }}</span>
        </v-col>

        <!-- Derecha: Sign In / Sign Up con separación -->
        <v-col cols="auto">
          <div class="d-flex align-center">
            <RouterLink to="/login" class="header-link me-4">{{ t('login') }}</RouterLink>
            <RouterLink to="/signup" class="header-link ms-4">{{ t('sign_up') }}</RouterLink>
            <v-btn @click="toggleTheme" icon>
              {{ theme.global.current.value.dark ? '☀️' : '🌙' }}
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<style lang="scss" scoped>
@use './HeaderStyles.scss' as *;
</style>
