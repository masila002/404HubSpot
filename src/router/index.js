import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProgrammingClasses from '../views/ProgrammingClasses.vue'
import Contact from '../views/Contact.vue'
import OurProcess from '../views/OurProcess.vue'
import WebDevelopment from '../views/services/WebDevelopment.vue'
import SoftwareDevelopment from '../views/services/SoftwareDevelopment.vue'
import MobileApps from '../views/services/MobileApps.vue'
import MPesaIntegration from '../views/services/MPesaIntegration.vue'
import GraphicsDesign from '../views/services/GraphicsDesign.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/programming-classes',
    name: 'ProgrammingClasses',
    component: ProgrammingClasses
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/our-process',
    name: 'OurProcess',
    component: OurProcess
  },
  {
    path: '/services/web-development',
    name: 'WebDevelopment',
    component: WebDevelopment
  },
  {
    path: '/services/software-development',
    name: 'SoftwareDevelopment',
    component: SoftwareDevelopment
  },
  {
    path: '/services/mobile-apps',
    name: 'MobileApps',
    component: MobileApps
  },
  {
    path: '/services/m-pesa-integration',
    name: 'MPesaIntegration',
    component: MPesaIntegration
  },
  {
    path: '/services/graphics-design',
    name: 'GraphicsDesign',
    component: GraphicsDesign
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
