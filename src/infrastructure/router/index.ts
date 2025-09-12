import type { UserData } from "@/data/models";
import CreateEstablishmentView from "@/views/createEstablisment/CreateEstablishmentView.vue";
import EstablishmentsView from "@/views/establishments/EstablishmentsView.vue";
import HomeView from "@/views/home/HomeView.vue";
import LoginView from "@/views/login/LoginView.vue";
import SignUpView from "@/views/sign_up/SignUpView.vue";
import { createRouter, createWebHistory } from "vue-router";

export enum ROUTES {
    LOGIN = 'login',
    HOME = 'home',
    ESTABLISHMENTS = 'establishments',
    SIGN_UP = 'sign_up',
    CREATE_ESTABLISHMENT = 'create_establishment',
    CREATE_PUBLICATION = 'create_publication',
    PROFILE = 'profile'
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: ROUTES.HOME,
            component: HomeView
        },
        {
            path: '/login',
            name: ROUTES.LOGIN,
            component: LoginView
        },
        {
            path: '/establishments',
            name: ROUTES.ESTABLISHMENTS,
            component: EstablishmentsView
        },
        {
            path: '/sign_up',
            name: ROUTES.SIGN_UP,
            component: SignUpView
        },
        {
            path: '/establishments/create',
            name: ROUTES.CREATE_ESTABLISHMENT,
            component: CreateEstablishmentView
        }
    ]
})

const routesNotAuthenticated = ['/login', '/sign_up', '/', '/home', '/establishments']

router.beforeEach((to, from, next) => {
    const isLogged = localStorage.getItem('isLogged')
    if (isLogged === 'true' && to.name === ROUTES.CREATE_ESTABLISHMENT) {
        const user = JSON.parse(localStorage.getItem('user')!) as UserData
        if (user.role === 'ADMIN') next()
        else next({ name: ROUTES.HOME })
    } else if (!routesNotAuthenticated.includes(to.path) && (isLogged === null || isLogged === 'false')) next({ name: ROUTES.LOGIN })
    else next()
})

export function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('credentials')
    localStorage.removeItem('user')
    localStorage.setItem('isLogged', 'false')
    router.go(0)
}

export default router