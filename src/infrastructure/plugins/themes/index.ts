import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import { PALLET } from '../../../config/Colors'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        }
    },
    theme: {
        defaultTheme: 'light',
        themes: {
            light: {
                dark: false,
                colors: {
                    text: 'black',
                    text_touchable: 'white',
                    touchable: PALLET.pink,
                    background: 'white',
                    background_second: PALLET.lila,
                    shadow: '#151515',
                    shadowToolbar: '#DDDDDD',
                    modify: PALLET.blue,
                    delete: PALLET.orange,
                    keyboard: '#CCCCCC'
                }
            },
            dark: {
                dark: true,
                colors: {
                    text: 'white',
                    text_touchable: 'black',
                    touchable: PALLET.pink,
                    background: 'black',
                    background_second: PALLET.lila,
                    shadow: '#EEEEEE',
                    shadowToolbar: '#252525',
                    modify: PALLET.blue,
                    delete: PALLET.orange,
                    keyboard: '#2B2C2E'
                }
            }
        }
    }
})

export default vuetify