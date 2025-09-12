import '@fontsource/roboto/100.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'
import '@mdi/font/css/materialdesignicons.css'
import { signInAnonymously } from 'firebase/auth'
import { createApp } from 'vue'
import 'vuetify/styles'
import App from './App.vue'
import { Configuration, EstablishmentsApi, LoginApi, ProductsApi, PublicationsApi, UsersApi } from './client'
import ApiClient, { Api } from './infrastructure/data/ApiClient'
import { auth } from './infrastructure/plugins/firebase'
import i18n from './infrastructure/plugins/i18n'
import vuetify from './infrastructure/plugins/themes/index'
import router from './infrastructure/router'

// TOTECO API
ApiClient.register(Api.EstablishmentsApi, new EstablishmentsApi(new Configuration({ basePath: 'http://localhost:5540', accessToken: undefined })))
ApiClient.register(Api.LoginApi, new LoginApi(new Configuration({ basePath: 'http://localhost:5540', accessToken: undefined })))
ApiClient.register(Api.ProductsApi, new ProductsApi(new Configuration({ basePath: 'http://localhost:5540', accessToken: undefined })))
ApiClient.register(Api.PublicationsApi, new PublicationsApi(new Configuration({ basePath: 'http://localhost:5540', accessToken: undefined })))
ApiClient.register(Api.UsersApi, new UsersApi(new Configuration({ basePath: 'http://localhost:5540', accessToken: undefined })))


signInAnonymously(auth)
    .then((userCredential) => {
        const user = userCredential.user
        console.log('Usuario anónimo autenticado:', user)
    })
    .catch((error) => {
        console.error('Error al iniciar sesión anónima:', error.code, error.message)
    })

createApp(App)
    .use(router)
    .use(vuetify)
    .use(i18n)
    .mount('#app')