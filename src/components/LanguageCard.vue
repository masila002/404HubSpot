<template>
  <div class="bg-white border-2 border-teal rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
    <h3 class="text-2xl font-bold text-teal mb-2">{{ language.name }}</h3>
    <p class="text-gray-600 mb-4">{{ language.description }}</p>
    <a 
      :href="whatsappUrl(language.whatsappText)"
      target="_blank"
      class="text-teal hover:text-teal-dark font-semibold inline-flex items-center"
    >
      Learn More
      <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  name: 'LanguageCard',
  props: {
    language: {
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
