<template>
  <div class="min-h-screen">
    <GlobalNav />
    
    <!-- Header Section -->
    <section class="bg-gradient-to-br from-gray-50 to-teal-50 py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Master the Language of the Future
          </h2>
          <p class="text-xl text-gray-700">
            Join our expert-led programming classes and transform your career
          </p>
        </div>
      </div>
    </section>

    <!-- Language Cards -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          <LanguageCard
            v-for="language in languages"
            :key="language.id"
            :language="language"
          />
        </div>

        <!-- Class Format Details -->
        <div class="max-w-4xl mx-auto">
          <h3 class="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900">
            Why Choose Our Classes?
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="bg-teal-light rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 class="text-xl font-semibold mb-2">Live Google Meet</h4>
              <p class="text-gray-600">Interactive live sessions with real-time Q&A</p>
            </div>
            <div class="text-center">
              <div class="bg-teal-light rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 class="text-xl font-semibold mb-2">1-on-1 Mentorship</h4>
              <p class="text-gray-600">Personalized guidance from industry experts</p>
            </div>
            <div class="text-center">
              <div class="bg-teal-light rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 class="text-xl font-semibold mb-2">Project-Based Learning</h4>
              <p class="text-gray-600">Build real-world projects to showcase your skills</p>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="text-center mt-16">
          <a 
            :href="whatsappUrl('I%27d_like_to_secure_my_spot_in_a_programming_class')"
            target="_blank"
            class="btn-primary text-lg px-8 py-4"
          >
            Secure your spot via WhatsApp
          </a>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import GlobalNav from '../components/GlobalNav.vue'
import Footer from '../components/Footer.vue'
import LanguageCard from '../components/LanguageCard.vue'

export default {
  name: 'ProgrammingClasses',
  components: {
    GlobalNav,
    Footer,
    LanguageCard
  },
  data() {
    return {
      whatsappNumber: '254700000000', // Replace with your actual WhatsApp number
      languages: [
        {
          id: 1,
          name: 'Python',
          description: 'Data Science & Automation',
          whatsappText: 'I%27d_like_to_join_the_Python_Class'
        },
        {
          id: 2,
          name: 'JavaScript',
          description: 'Fullstack Web Development',
          whatsappText: 'I%27d_like_to_join_the_JavaScript_Class'
        },
        {
          id: 3,
          name: 'SQL',
          description: 'Database Management',
          whatsappText: 'I%27d_like_to_join_the_SQL_Class'
        },
        {
          id: 4,
          name: 'Scratch',
          description: 'Programming Logic for Beginners',
          whatsappText: 'I%27d_like_to_join_the_Scratch_Class'
        }
      ]
    }
  },
  methods: {
    whatsappUrl(text) {
      return `https://wa.me/${this.whatsappNumber}?text=${text}`
    }
  }
}
</script>
