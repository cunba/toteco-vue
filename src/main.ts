import { createApp } from 'vue'
import App from './App.vue'
import { Configuration, EstablishmentsApi, LoginApi, ProductsApi, PublicationsApi, UsersApi } from './client'
import ApiClient, { Api } from './infrastructure/data/ApiClient'

// TOTECO API
ApiClient.register(Api.EstablishmentsApi, new EstablishmentsApi(new Configuration({ basePath: 'http://localhost:5540', accessToken: undefined })))
ApiClient.register(Api.LoginApi, new LoginApi(new Configuration({ basePath: 'http://localhost:5540', accessToken: undefined })))
ApiClient.register(Api.ProductsApi, new ProductsApi(new Configuration({ basePath: 'http://localhost:5540', accessToken: undefined })))
ApiClient.register(Api.PublicationsApi, new PublicationsApi(new Configuration({ basePath: 'http://localhost:5540', accessToken: undefined })))
ApiClient.register(Api.UsersApi, new UsersApi(new Configuration({ basePath: 'http://localhost:5540', accessToken: undefined })))

createApp(App).mount('#app')