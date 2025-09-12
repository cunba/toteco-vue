<script setup lang="ts">
import { ref, watch } from 'vue';
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
  rightRouting: HeaderRouting[],
  drawerItems: any
}

export interface HeaderRouting {
  namePath: string,
  name: string
}

const drawer = ref(false)
const group = ref(null)

watch(group, () => {
  drawer.value = false
})
</script>

<template>
  <v-toolbar :style="{ backgroundColor: theme.current.value.colors.touchable }" height="60" flat>
    <v-container fluid>
      <v-row align="center" class="h-100">
        <div class="header-actions-left">
          <div v-if="drawerItems.length > 0">
            <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"
              :color="theme.current.value.colors.text_touchable"></v-app-bar-nav-icon>
          </div>
          <div v-if="leftRouting.length > 0">
            <v-btn v-for="r in leftRouting">
              <RouterLink :to="{ name: r.namePath }" class="header-link-text"
                :style="{ color: theme.current.value.colors.text_touchable }">{{
                  r.name }}</RouterLink>
            </v-btn>
          </div>
        </div>

        <v-col cols="12" class="d-flex justify-center align-center">
          <v-toolbar-title class="text-h5 font-weight-bold text-center"
            :style="{ color: theme.current.value.colors.text_touchable }">
            {{ title }}
          </v-toolbar-title>
        </v-col>

        <div class="header-actions-right">
          <div v-if="rightRouting.length > 0">
            <v-btn v-for="r in rightRouting">
              <RouterLink :to="{ name: r.namePath }" class="header-link-text"
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
  <div v-if="drawerItems.length > 0">
    <v-navigation-drawer v-model="drawer" location="left" temporary style="margin-top: 60px;">
      <v-list>
        <div v-for="item in drawerItems">
          <div v-if="item.name">
            <v-list-item @click="() => { item.onClick(); drawer = false }">
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item>
          </div>
        </div>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<style lang="scss" scoped>
@use './HeaderStyles.scss' as *;
</style>
