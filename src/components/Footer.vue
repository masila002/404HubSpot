<template>
  <footer class="bg-teal-dark text-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">404HubSpot</h3>
          <p class="text-gray-300">Expert Digital Solutions & Tech Training. We build. You grow.</p>
        </div>
        <div>
          <h4 class="font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li><router-link to="/" class="text-gray-300 hover:text-peach transition-colors">Home</router-link></li>
            <li><router-link to="/programming-classes" class="text-gray-300 hover:text-peach transition-colors">Programming Classes</router-link></li>
            <li><router-link to="/contact" class="text-gray-300 hover:text-peach transition-colors">Contact</router-link></li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold mb-4">Contact</h4>
          <ul class="space-y-2 text-gray-300">
            <li><a href="mailto:hubspot861@gmail.com" class="hover:text-peach transition-colors">hubspot861@gmail.com</a></li>
            <li>
              <a 
                :href="whatsappUrl('Hello%2C_I%27d_like_to_get_in_touch')"
                target="_blank"
                class="hover:text-peach transition-colors"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="border-t border-teal mt-8 pt-8 text-center text-gray-300">
        <p>&copy; {{ new Date().getFullYear() }} 404HubSpot. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      whatsappNumber: '254708345963' // Replace with your actual WhatsApp number
    }
  },
  methods: {
    whatsappUrl(text) {
      return `https://wa.me/${this.whatsappNumber}?text=${text}`
    }
  }
}
</script>
