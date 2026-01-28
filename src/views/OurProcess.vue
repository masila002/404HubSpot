<template>
  <div class="min-h-screen">
    <GlobalNav />
    
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-gray-50 to-teal-50 py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Professional Process
          </h1>
          <p class="text-xl text-gray-700">
            From initial consultation to final delivery, we ensure excellence at every step
          </p>
        </div>
      </div>
    </section>

    <!-- Payment Information Banner -->
    <section class="py-8 bg-peach text-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <div class="flex items-center justify-center gap-3">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <p class="text-lg md:text-xl font-semibold">
              We require a <strong>50% down payment</strong> to begin your project, ensuring commitment and quality delivery
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Steps -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-5xl mx-auto">
          <div class="space-y-12">
            <!-- Step 1 -->
            <div class="flex flex-col md:flex-row items-start gap-8">
              <div class="flex-shrink-0">
                <div class="bg-teal text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold">
                  1
                </div>
              </div>
              <div class="flex-1">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Initial Consultation & Discovery</h2>
                <p class="text-lg text-gray-600 mb-4">
                  We start with a comprehensive consultation to understand your business, goals, target audience, and specific requirements. This discovery phase helps us create a detailed project roadmap.
                </p>
                <ul class="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>In-depth discussion about your vision and objectives</li>
                  <li>Analysis of your target market and competition</li>
                  <li>Technical requirements assessment</li>
                  <li>Timeline and budget discussion</li>
                </ul>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="flex flex-col md:flex-row items-start gap-8">
              <div class="flex-shrink-0">
                <div class="bg-teal text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold">
                  2
                </div>
              </div>
              <div class="flex-1">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Proposal & Agreement</h2>
                <p class="text-lg text-gray-600 mb-4">
                  We prepare a detailed proposal outlining the project scope, deliverables, timeline, and pricing. Once approved, we formalize our partnership with a clear agreement.
                </p>
                <div class="bg-teal-light bg-opacity-20 rounded-lg p-6 mb-4">
                  <h3 class="font-semibold text-teal-dark mb-2 flex items-center gap-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Payment Structure
                  </h3>
                  <ul class="space-y-2 text-gray-700">
                    <li class="flex items-start">
                      <svg class="w-5 h-5 text-teal mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                      <strong>50% down payment</strong> required to initiate project development
                    </li>
                    <li class="flex items-start">
                      <svg class="w-5 h-5 text-teal mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                      <strong>50% final payment</strong> upon project completion and delivery
                    </li>
                    <li class="flex items-start">
                      <svg class="w-5 h-5 text-teal mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                      Transparent pricing with no hidden fees
                    </li>
                  </ul>
                </div>
                <ul class="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Detailed project proposal document</li>
                  <li>Clear timeline and milestones</li>
                  <li>Formal contract signing</li>
                  <li>Secure payment processing</li>
                </ul>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="flex flex-col md:flex-row items-start gap-8">
              <div class="flex-shrink-0">
                <div class="bg-teal text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold">
                  3
                </div>
              </div>
              <div class="flex-1">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Planning & Design Phase</h2>
                <p class="text-lg text-gray-600 mb-4">
                  With the down payment received, we begin the planning and design phase. We create wireframes, mockups, and detailed technical specifications.
                </p>
                <ul class="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Architecture and system design</li>
                  <li>UI/UX wireframes and mockups</li>
                  <li>Database schema design (if applicable)</li>
                  <li>Technology stack selection</li>
                  <li>Regular design reviews and feedback sessions</li>
                </ul>
              </div>
            </div>

            <!-- Step 4 -->
            <div class="flex flex-col md:flex-row items-start gap-8">
              <div class="flex-shrink-0">
                <div class="bg-teal text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold">
                  4
                </div>
              </div>
              <div class="flex-1">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Development & Implementation</h2>
                <p class="text-lg text-gray-600 mb-4">
                  Our expert developers bring your project to life using best practices, clean code, and modern technologies. We maintain regular communication throughout this phase.
                </p>
                <ul class="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Agile development methodology with sprints</li>
                  <li>Weekly progress updates and demos</li>
                  <li>Version control and code reviews</li>
                  <li>Continuous testing and quality assurance</li>
                  <li>Your feedback incorporated in real-time</li>
                </ul>
              </div>
            </div>

            <!-- Step 5 -->
            <div class="flex flex-col md:flex-row items-start gap-8">
              <div class="flex-shrink-0">
                <div class="bg-teal text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold">
                  5
                </div>
              </div>
              <div class="flex-1">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Testing & Quality Assurance</h2>
                <p class="text-lg text-gray-600 mb-4">
                  Before delivery, we conduct thorough testing to ensure everything works perfectly. We test functionality, performance, security, and user experience.
                </p>
                <ul class="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Comprehensive functionality testing</li>
                  <li>Cross-browser and device compatibility</li>
                  <li>Performance optimization</li>
                  <li>Security vulnerability scanning</li>
                  <li>User acceptance testing (UAT)</li>
                </ul>
              </div>
            </div>

            <!-- Step 6 -->
            <div class="flex flex-col md:flex-row items-start gap-8">
              <div class="flex-shrink-0">
                <div class="bg-teal text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold">
                  6
                </div>
              </div>
              <div class="flex-1">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Delivery & Final Payment</h2>
                <p class="text-lg text-gray-600 mb-4">
                  Once testing is complete and you're satisfied, we deliver the final product. The remaining 50% payment is due upon successful delivery.
                </p>
                <ul class="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Final product delivery</li>
                  <li>Complete source code and documentation</li>
                  <li>Deployment to your hosting environment</li>
                  <li>Training session for your team</li>
                  <li>Final payment processing</li>
                </ul>
              </div>
            </div>

            <!-- Step 7 -->
            <div class="flex flex-col md:flex-row items-start gap-8">
              <div class="flex-shrink-0">
                <div class="bg-teal text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold">
                  7
                </div>
              </div>
              <div class="flex-1">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Post-Launch Support & Maintenance</h2>
                <p class="text-lg text-gray-600 mb-4">
                  Our relationship doesn't end at delivery. We provide ongoing support to ensure your project continues to perform optimally and grows with your business.
                </p>
                <ul class="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>30-day warranty period for bug fixes</li>
                  <li>Ongoing maintenance packages available</li>
                  <li>Feature enhancements and updates</li>
                  <li>Technical support and troubleshooting</li>
                  <li>Performance monitoring and optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Our Process -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Why Our Process Works</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div class="bg-white rounded-lg p-6 shadow-lg">
            <div class="bg-teal-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-center mb-2">Transparent Communication</h3>
            <p class="text-gray-600 text-center">Regular updates and open communication ensure you're always informed about project progress.</p>
          </div>
          <div class="bg-white rounded-lg p-6 shadow-lg">
            <div class="bg-teal-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-center mb-2">On-Time Delivery</h3>
            <p class="text-gray-600 text-center">We respect deadlines and deliver projects on schedule, every time.</p>
          </div>
          <div class="bg-white rounded-lg p-6 shadow-lg">
            <div class="bg-teal-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-center mb-2">Quality Guaranteed</h3>
            <p class="text-gray-600 text-center">Rigorous testing and quality assurance ensure your project meets the highest standards.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-teal to-teal-dark text-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p class="text-xl mb-8">Let's discuss how we can bring your vision to life with our proven process.</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/contact" class="btn-primary bg-peach hover:bg-peach-dark">
              Get Started Today
            </router-link>
            <a 
              :href="whatsappUrl('I%27d_like_to_learn_more_about_your_process')"
              target="_blank"
              class="btn-outline border-white text-white hover:bg-white hover:text-teal"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import GlobalNav from '../components/GlobalNav.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'OurProcess',
  components: {
    GlobalNav,
    Footer
  },
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
