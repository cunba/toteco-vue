<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useTheme } from 'vuetify';

const props = defineProps<HeaderProps>()

const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

export interface HeaderProps {
  title: string,
  leftRouting: HeaderRouting[],
  rightRouting: HeaderRouting[]
}

export interface HeaderRouting {
  url: string,
  name: string
}
</script>

<template>
  <v-toolbar :style="{ backgroundColor: theme.current.value.colors.touchable }" height="60" flat>
    <v-container fluid>
      <v-row align="center" class="h-100">
        <div class="header-actions-left">
          <div v-if="props.leftRouting.length > 0">
            <v-btn v-for="r in props.leftRouting">
              <RouterLink :to="r.url" class="header-link-text"
                :style="{ color: theme.current.value.colors.text_touchable }">{{
                  r.name }}</RouterLink>
            </v-btn>
          </div>
        </div>

        <v-col cols="12" class="d-flex justify-center align-center">
          <v-toolbar-title class="text-h5 font-weight-bold text-center"
            :style="{ color: theme.current.value.colors.text_touchable }">
            {{ props.title }}
          </v-toolbar-title>
        </v-col>

        <div class="header-actions-right">
          <div v-if="props.rightRouting.length > 0">
            <v-btn v-for="r in props.rightRouting">
              <RouterLink :to=r.url class="header-link-text"
                :style="{ color: theme.current.value.colors.text_touchable }">{{
                  r.name }}</RouterLink>
            </v-btn>
          </div>
          <v-btn @click="toggleTheme" icon>
            {{ theme.global.current.value.dark ? '☀️' : '🌙' }}
          </v-btn>
        </div>
      </v-row>
    </v-container>
  </v-toolbar>
</template>

<style lang="scss" scoped>
@use './HeaderStyles.scss' as *;
</style>
