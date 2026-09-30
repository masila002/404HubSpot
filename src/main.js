import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import './styles/landing.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { clerkPlugin } from '@clerk/vue'

gsap.registerPlugin(ScrollTrigger)
gsap.defaults({ duration: 0.6, ease: 'power3.out' })

const app = createApp(App)
const clerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (clerkKey) {
  app.use(clerkPlugin, { publishableKey: clerkKey })
} else {
  // Demo mode: auth pages render landing-styled placeholders until owner adds key.
  app.config.globalProperties.$clerkDemo = true
  console.info('[auth] VITE_CLERK_PUBLISHABLE_KEY missing — running Clerk demo shell.')
}
app.use(router)
app.mount('#app')
