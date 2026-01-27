<template>
  <div class="bg-teal-dark rounded-lg p-6 text-white hover:shadow-2xl transition-shadow duration-300">
    <h3 class="text-xl font-bold mb-3">{{ service.title }}</h3>
    <p class="text-gray-200 mb-4">{{ service.description }}</p>
    <div class="flex flex-col sm:flex-row gap-2">
      <router-link 
        v-if="service.route"
        :to="service.route"
        class="inline-block bg-peach hover:bg-peach-dark text-white font-semibold py-2 px-4 rounded transition-colors duration-200 text-center"
      >
        Learn More
      </router-link>
      <a 
        :href="whatsappUrl(service.whatsappText)"
        target="_blank"
        class="inline-block border-2 border-peach text-peach hover:bg-peach hover:text-white font-semibold py-2 px-4 rounded transition-colors duration-200 text-center"
      >
        Consult on WhatsApp
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    service: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      whatsappNumber: '254700000000' // Replace with your actual WhatsApp number
    }
  },
  methods: {
    whatsappUrl(text) {
      return `https://wa.me/${this.whatsappNumber}?text=${text}`
    }
  }
}
</script>
