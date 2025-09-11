import '@fontsource/roboto/100.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import App from './App.vue'
import { Configuration, EstablishmentsApi, LoginApi, ProductsApi, PublicationsApi, UsersApi } from './client'
import ApiClient, { Api } from './infrastructure/data/ApiClient'
import i18n from './infrastructure/i18n'
import router from './router'

// TOTECO API
ApiClient.register(Api.EstablishmentsApi, new EstablishmentsApi(new Configuration({ basePath: 'http://localhost:5540', accessToken: undefined })))
ApiClient.register(Api.LoginApi, new LoginApi(new Configuration({ basePath: 'http://localhost:5540', accessToken: undefined })))
ApiClient.register(Api.ProductsApi, new ProductsApi(new Configuration({ basePath: 'http://localhost:5540', accessToken: undefined })))
ApiClient.register(Api.PublicationsApi, new PublicationsApi(new Configuration({ basePath: 'http://localhost:5540', accessToken: undefined })))
ApiClient.register(Api.UsersApi, new UsersApi(new Configuration({ basePath: 'http://localhost:5540', accessToken: undefined })))

const vuetify = createVuetify({
    components,
    directives,
})

createApp(App)
    .use(router)
    .use(vuetify)
    .use(i18n)
    .mount('#app')