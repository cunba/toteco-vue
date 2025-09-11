import { createVuetify } from 'vuetify'
import { PALLET } from './Colors'

export default createVuetify({
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