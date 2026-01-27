<template>
  <nav class="bg-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <router-link to="/" class="flex items-center">
          <img 
            src="/assets/logo.png" 
            alt="404HubSpot logo featuring glitch-style numbers '404' above 'HubSpot builder' with a cursor icon, all enclosed in glowing teal circles with a neural network graphic"
            class="h-12 w-auto"
          />
        </router-link>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <div class="relative group">
            <button class="text-gray-700 hover:text-teal font-medium transition-colors">
              Services
            </button>
            <div class="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <router-link to="/services/web-development" class="block px-4 py-2 text-gray-700 hover:bg-teal hover:text-white rounded-t-lg">Web Development</router-link>
              <router-link to="/services/software-development" class="block px-4 py-2 text-gray-700 hover:bg-teal hover:text-white">Software Development</router-link>
              <router-link to="/services/mobile-apps" class="block px-4 py-2 text-gray-700 hover:bg-teal hover:text-white">Mobile Apps</router-link>
              <router-link to="/services/m-pesa-integration" class="block px-4 py-2 text-gray-700 hover:bg-teal hover:text-white">M-Pesa Integration</router-link>
              <router-link to="/services/graphics-design" class="block px-4 py-2 text-gray-700 hover:bg-teal hover:text-white">Graphics Design</router-link>
              <router-link to="/programming-classes" class="block px-4 py-2 text-gray-700 hover:bg-teal hover:text-white rounded-b-lg">Programming Classes</router-link>
            </div>
          </div>
          <router-link to="/programming-classes" class="text-gray-700 hover:text-teal font-medium transition-colors">
            Programming Classes
          </router-link>
          <router-link to="/our-process" class="text-gray-700 hover:text-teal font-medium transition-colors">
            Our Process
          </router-link>
          <router-link to="/contact" class="text-gray-700 hover:text-teal font-medium transition-colors">
            Contact
          </router-link>
        </div>

        <!-- CTA Button -->
        <div class="hidden md:block">
          <a 
            :href="whatsappUrl('I%27m_interested_in_learning_more_about_your_services')"
            target="_blank"
            class="btn-primary"
          >
            Inquire Now
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden text-gray-700 hover:text-teal"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t">
        <div class="mb-2">
          <div class="font-semibold text-gray-900 mb-2">Services:</div>
          <router-link to="/services/web-development" class="block py-2 pl-4 text-gray-700 hover:text-teal">Web Development</router-link>
          <router-link to="/services/software-development" class="block py-2 pl-4 text-gray-700 hover:text-teal">Software Development</router-link>
          <router-link to="/services/mobile-apps" class="block py-2 pl-4 text-gray-700 hover:text-teal">Mobile Apps</router-link>
          <router-link to="/services/m-pesa-integration" class="block py-2 pl-4 text-gray-700 hover:text-teal">M-Pesa Integration</router-link>
          <router-link to="/services/graphics-design" class="block py-2 pl-4 text-gray-700 hover:text-teal">Graphics Design</router-link>
        </div>
        <router-link to="/programming-classes" class="block py-2 text-gray-700 hover:text-teal">Programming Classes</router-link>
        <router-link to="/our-process" class="block py-2 text-gray-700 hover:text-teal">Our Process</router-link>
        <router-link to="/contact" class="block py-2 text-gray-700 hover:text-teal">Contact</router-link>
        <a 
          :href="whatsappUrl('I%27m_interested_in_learning_more_about_your_services')"
          target="_blank"
          class="btn-primary mt-4 inline-block"
        >
          Inquire Now
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'GlobalNav',
  data() {
    return {
      mobileMenuOpen: false,
      // Replace with your actual WhatsApp number (format: country code + number without +)
      whatsappNumber: '254700000000' // Example: Kenya +254
    }
  },
  methods: {
    whatsappUrl(text) {
      return `https://wa.me/${this.whatsappNumber}?text=${text}`
    }
  }
}
</script>
