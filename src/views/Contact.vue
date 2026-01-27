<template>
  <div class="min-h-screen">
    <GlobalNav />
    
    <section class="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Get In Touch
          </h2>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Left Side - Direct Contact -->
            <div>
              <h3 class="text-2xl font-semibold mb-6 text-gray-900">Direct Contact</h3>
              <div class="space-y-6">
                <div class="flex items-start">
                  <div class="bg-teal text-white rounded-full p-3 mr-4">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-1">Email</h4>
                    <a href="mailto:info@404hubspot.com" class="text-teal hover:text-teal-dark">
                      info@404hubspot.com
                    </a>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="bg-teal text-white rounded-full p-3 mr-4">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                    <a 
                      :href="whatsappUrl('Hello%2C_I%27d_like_to_get_in_touch')"
                      target="_blank"
                      class="text-teal hover:text-teal-dark"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="bg-teal text-white rounded-full p-3 mr-4">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-1">Google Meet</h4>
                    <a 
                      :href="googleMeetUrl"
                      target="_blank"
                      class="text-teal hover:text-teal-dark"
                    >
                      Schedule a consultation
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Side - Contact Form -->
            <div>
              <h3 class="text-2xl font-semibold mb-6 text-gray-900">Quick Contact Form</h3>
              
              <!-- Success Message -->
              <div v-if="formSubmitted" class="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div class="flex items-center">
                  <svg class="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 class="font-semibold text-green-800">Message Sent Successfully!</h4>
                    <p class="text-sm text-green-700">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              </div>

              <!-- Error Message -->
              <div v-if="formError" class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div class="flex items-center">
                  <svg class="w-6 h-6 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 class="font-semibold text-red-800">Error Sending Message</h4>
                    <p class="text-sm text-red-700">{{ formError }}</p>
                  </div>
                </div>
              </div>

              <form 
                @submit.prevent="submitForm"
                class="space-y-4"
                :action="formspreeUrl"
                method="POST"
                ref="contactForm"
              >
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    required
                    :class="[
                      'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent transition-colors',
                      errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    ]"
                    placeholder="John Doe"
                    @blur="validateField('name')"
                  />
                  <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
                </div>

                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    :class="[
                      'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent transition-colors',
                      errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    ]"
                    placeholder="john@example.com"
                    @blur="validateField('email')"
                  />
                  <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
                </div>

                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    :class="[
                      'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent transition-colors',
                      errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    ]"
                    placeholder="+254 712 345 678"
                    @blur="validateField('phone')"
                  />
                  <p v-if="errors.phone" class="mt-1 text-sm text-red-600">{{ errors.phone }}</p>
                </div>

                <div>
                  <label for="service" class="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    v-model="form.service"
                    required
                    :class="[
                      'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent transition-colors',
                      errors.service ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    ]"
                    @change="validateField('service')"
                  >
                    <option value="">Select a service</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Software Development">Software Development</option>
                    <option value="Mobile Apps">Mobile Apps</option>
                    <option value="M-Pesa Integration">M-Pesa Integration</option>
                    <option value="Graphics Design">Graphics Design</option>
                    <option value="Programming Classes">Programming Classes</option>
                  </select>
                  <p v-if="errors.service" class="mt-1 text-sm text-red-600">{{ errors.service }}</p>
                </div>

                <div>
                  <label for="budget" class="block text-sm font-medium text-gray-700 mb-2">
                    Estimated Budget
                  </label>
                  <select
                    id="budget"
                    v-model="form.budget"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent"
                  >
                    <option value="">Select budget range</option>
                    <option value="Under KES 50,000">Under KES 50,000</option>
                    <option value="KES 50,000 - 100,000">KES 50,000 - 100,000</option>
                    <option value="KES 100,000 - 250,000">KES 100,000 - 250,000</option>
                    <option value="KES 250,000 - 500,000">KES 250,000 - 500,000</option>
                    <option value="KES 500,000+">KES 500,000+</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label for="timeline" class="block text-sm font-medium text-gray-700 mb-2">
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    v-model="form.timeline"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    <option value="ASAP / Urgent">ASAP / Urgent</option>
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="Just exploring">Just exploring</option>
                  </select>
                </div>

                <div>
                  <label for="description" class="block text-sm font-medium text-gray-700 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="description"
                    v-model="form.description"
                    required
                    rows="5"
                    :class="[
                      'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal focus:border-transparent transition-colors resize-none',
                      errors.description ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    ]"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    @blur="validateField('description')"
                  ></textarea>
                  <p v-if="errors.description" class="mt-1 text-sm text-red-600">{{ errors.description }}</p>
                  <p class="mt-1 text-xs text-gray-500">{{ form.description.length }}/1000 characters</p>
                </div>

                <!-- Hidden fields for Formspree -->
                <input type="hidden" name="_subject" :value="`New Contact Form: ${form.service || 'General Inquiry'}`">
                <input type="hidden" name="_replyto" :value="form.email">
                <input type="hidden" name="_next" value="/contact?success=true">
                <input type="hidden" name="_format" value="plain">

                <button
                  type="submit"
                  class="w-full btn-primary flex items-center justify-center"
                  :disabled="submitting || !isFormValid"
                  :class="{ 'opacity-50 cursor-not-allowed': submitting || !isFormValid }"
                >
                  <svg v-if="submitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {{ submitting ? 'Sending Message...' : 'Send Message' }}
                </button>

                <p class="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to be contacted by 404HubSpot regarding your inquiry.
                </p>
              </form>
            </div>
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
  name: 'Contact',
  components: {
    GlobalNav,
    Footer
  },
  data() {
    return {
      whatsappNumber: '254700000000', // Replace with your actual WhatsApp number
      googleMeetUrl: 'https://meet.google.com/your-meeting-link', // Replace with your Google Meet link
      formspreeId: 'YOUR_FORM_ID', // Replace with your Formspree form ID
      submitting: false,
      formSubmitted: false,
      formError: '',
      errors: {},
      form: {
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        timeline: '',
        description: ''
      }
    }
  },
  computed: {
    formspreeUrl() {
      return `https://formspree.io/f/${this.formspreeId}`
    },
    isFormValid() {
      return this.form.name && 
             this.form.email && 
             this.form.service && 
             this.form.description &&
             !this.errors.name &&
             !this.errors.email &&
             !this.errors.description
    }
  },
  methods: {
    whatsappUrl(text) {
      return `https://wa.me/${this.whatsappNumber}?text=${text}`
    },
    validateField(field) {
      this.errors[field] = ''
      
      switch(field) {
        case 'name':
          if (!this.form.name.trim()) {
            this.errors.name = 'Name is required'
          } else if (this.form.name.trim().length < 2) {
            this.errors.name = 'Name must be at least 2 characters'
          }
          break
        case 'email':
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (!this.form.email.trim()) {
            this.errors.email = 'Email is required'
          } else if (!emailRegex.test(this.form.email)) {
            this.errors.email = 'Please enter a valid email address'
          }
          break
        case 'phone':
          if (this.form.phone && !/^[\d\s\+\-\(\)]+$/.test(this.form.phone)) {
            this.errors.phone = 'Please enter a valid phone number'
          }
          break
        case 'service':
          if (!this.form.service) {
            this.errors.service = 'Please select a service'
          }
          break
        case 'description':
          if (!this.form.description.trim()) {
            this.errors.description = 'Project description is required'
          } else if (this.form.description.trim().length < 20) {
            this.errors.description = 'Description must be at least 20 characters'
          } else if (this.form.description.length > 1000) {
            this.errors.description = 'Description must be less than 1000 characters'
          }
          break
      }
    },
    validateForm() {
      this.validateField('name')
      this.validateField('email')
      this.validateField('phone')
      this.validateField('service')
      this.validateField('description')
      return Object.keys(this.errors).length === 0 || Object.values(this.errors).every(e => !e)
    },
    async submitForm(event) {
      // Reset previous states
      this.formSubmitted = false
      this.formError = ''
      
      // Validate form
      if (!this.validateForm()) {
        this.formError = 'Please correct the errors in the form'
        return
      }

      this.submitting = true

      try {
        // Create form data
        const formData = new FormData()
        formData.append('name', this.form.name)
        formData.append('email', this.form.email)
        formData.append('phone', this.form.phone || 'Not provided')
        formData.append('service', this.form.service)
        formData.append('budget', this.form.budget || 'Not specified')
        formData.append('timeline', this.form.timeline || 'Not specified')
        formData.append('description', this.form.description)
        formData.append('_subject', `New Contact Form: ${this.form.service}`)
        formData.append('_replyto', this.form.email)

        // Submit to Formspree
        const response = await fetch(this.formspreeUrl, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        })

        if (response.ok) {
          this.formSubmitted = true
          this.form = {
            name: '',
            email: '',
            phone: '',
            service: '',
            budget: '',
            timeline: '',
            description: ''
          }
          this.errors = {}
          
          // Scroll to top to show success message
          window.scrollTo({ top: 0, behavior: 'smooth' })
          
          // Reset success message after 10 seconds
          setTimeout(() => {
            this.formSubmitted = false
          }, 10000)
        } else {
          const data = await response.json()
          if (data.errors) {
            this.formError = data.errors.map(err => err.message).join(', ')
          } else {
            this.formError = 'There was an error submitting your form. Please try again or contact us directly.'
          }
        }
      } catch (error) {
        console.error('Form submission error:', error)
        this.formError = 'Network error. Please check your connection and try again, or contact us directly via WhatsApp or email.'
      } finally {
        this.submitting = false
      }
    }
  },
  mounted() {
    // Check for success parameter in URL (from Formspree redirect)
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get('success') === 'true') {
      this.formSubmitted = true
    }
  }
}
</script>
