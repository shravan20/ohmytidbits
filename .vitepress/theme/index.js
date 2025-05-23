import DefaultTheme from 'vitepress/theme'
import './vars.css'


export default {
    ...DefaultTheme,
    Layout: DefaultTheme.Layout,
    enhanceApp({ app }) {
        // register global components here
    }
}