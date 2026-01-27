<template>
  <div class="min-h-screen">
    <GlobalNav />
    
    <section class="bg-gradient-to-br from-gray-50 to-teal-50 py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Graphics Design Services</h1>
          <p class="text-xl text-gray-700">Professional branding, logos, and visual design services</p>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Our Design Process</h2>
        <div class="max-w-4xl mx-auto">
          <div class="space-y-8">
            <div class="flex items-start">
              <div class="bg-teal text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-6 flex-shrink-0">1</div>
              <div>
                <h3 class="text-2xl font-semibold mb-2 text-gray-900">Brand Discovery</h3>
                <p class="text-gray-600">We learn about your brand, values, target audience, and competition. We create a design brief that guides the entire project.</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="bg-teal text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-6 flex-shrink-0">2</div>
              <div>
                <h3 class="text-2xl font-semibold mb-2 text-gray-900">Concept Development</h3>
                <p class="text-gray-600">We create multiple design concepts and present them for your review. Each concept explores different creative directions.</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="bg-teal text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-6 flex-shrink-0">3</div>
              <div>
                <h3 class="text-2xl font-semibold mb-2 text-gray-900">Refinement</h3>
                <p class="text-gray-600">Based on your feedback, we refine the selected concept. We perfect colors, typography, and visual elements until it's exactly right.</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="bg-teal text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-6 flex-shrink-0">4</div>
              <div>
                <h3 class="text-2xl font-semibold mb-2 text-gray-900">Final Delivery</h3>
                <p class="text-gray-600">We deliver all final files in various formats (PNG, SVG, PDF, etc.) and provide brand guidelines for consistent usage.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Graphics Design Pricing</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h3 class="text-2xl font-bold mb-4 text-gray-900">Logo Design</h3>
            <div class="mb-6"><span class="text-4xl font-bold text-teal">KES 15,000</span><span class="text-gray-600"> - 30,000</span></div>
            <ul class="space-y-3 mb-8 text-gray-600">
              <li class="flex items-start"><svg class="w-5 h-5 text-teal mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>3 initial concepts</li>
              <li class="flex items-start"><svg class="w-5 h-5 text-teal mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>2 rounds of revisions</li>
              <li class="flex items-start"><svg class="w-5 h-5 text-teal mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>Multiple file formats</li>
              <li class="flex items-start"><svg class="w-5 h-5 text-teal mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>Color variations</li>
            </ul>
            <a :href="whatsappUrl('I%27m_interested_in_Logo_Design')" target="_blank" class="btn-outline w-full text-center block">Get Started</a>
          </div>

          <div class="bg-teal-dark rounded-lg shadow-lg p-8 text-white transform scale-105">
            <div class="bg-peach text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">POPULAR</div>
            <h3 class="text-2xl font-bold mb-4">Brand Identity</h3>
            <div class="mb-6"><span class="text-4xl font-bold">KES 50,000</span><span class="text-gray-300"> - 100,000</span></div>
            <ul class="space-y-3 mb-8 text-gray-200">
              <li class="flex items-start"><svg class="w-5 h-5 text-peach mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>Logo design</li>
              <li class="flex items-start"><svg class="w-5 h-5 text-peach mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>Business cards</li>
              <li class="flex items-start"><svg class="w-5 h-5 text-peach mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>Letterhead & envelope</li>
              <li class="flex items-start"><svg class="w-5 h-5 text-peach mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>Brand guidelines</li>
              <li class="flex items-start"><svg class="w-5 h-5 text-peach mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>Social media templates</li>
            </ul>
            <a :href="whatsappUrl('I%27m_interested_in_Brand_Identity_Design')" target="_blank" class="btn-primary bg-peach hover:bg-peach-dark w-full text-center block">Get Started</a>
          </div>

          <div class="bg-white rounded-lg shadow-lg p-8">
            <h3 class="text-2xl font-bold mb-4 text-gray-900">Marketing Materials</h3>
            <div class="mb-6"><span class="text-4xl font-bold text-teal">KES 20,000</span><span class="text-gray-600">+</span></div>
            <ul class="space-y-3 mb-8 text-gray-600">
              <li class="flex items-start"><svg class="w-5 h-5 text-teal mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>Flyers & brochures</li>
              <li class="flex items-start"><svg class="w-5 h-5 text-teal mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>Social media graphics</li>
              <li class="flex items-start"><svg class="w-5 h-5 text-teal mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>Banner designs</li>
              <li class="flex items-start"><svg class="w-5 h-5 text-teal mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>Email templates</li>
            </ul>
            <a :href="whatsappUrl('I%27m_interested_in_Marketing_Materials_Design')" target="_blank" class="btn-outline w-full text-center block">Get Started</a>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import GlobalNav from '../../components/GlobalNav.vue'
import Footer from '../../components/Footer.vue'

export default {
  name: 'GraphicsDesign',
  components: { GlobalNav, Footer },
  data() {
    return { whatsappNumber: '254700000000' }
  },
  methods: {
    whatsappUrl(text) {
      return `https://wa.me/${this.whatsappNumber}?text=${text}`
    }
  }
}
</script>
