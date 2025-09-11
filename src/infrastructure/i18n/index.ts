import { createI18n } from 'vue-i18n'
import en from '../../assets/locales/en.json'
import es from '../../assets/locales/es.json'

const i18n = createI18n({
  legacy: false,
  locale: 'es',
  fallbackLocale: 'en',
  messages: {
    es,
    en
  }
})

export default i18n