import DefaultTheme from 'vitepress/theme'
import StatsCards from './components/StatsCards.vue'
import './vars.css'

export default {
    ...DefaultTheme,
    Layout: DefaultTheme.Layout,
    enhanceApp({ app }) {
        app.component('StatsCards', StatsCards)
    }
}
