<template>
  <div class="page-shell landing-page" ref="root">
    <GlobalNav />
    <main id="main-content" tabindex="-1">
      <PageHero
        kicker="CONTACT — LET'S BUILD SOMETHING"
        title="Tell us your <em>idea.</em> We'll reply fast."
        lede="WhatsApp for speed, email for detail, or the form for a scoped quote. Replies within 24 hours."
      >
        <template #actions>
          <a :href="whatsappUrl('Hello 404HubSpot, I have a project.')" target="_blank" rel="noopener noreferrer" class="action action-dark">WhatsApp us <UiIcon name="diagonal" /></a>
          <a :href="`mailto:${'hubspot861@gmail.com'}`" class="text-action">hubspot861@gmail.com <UiIcon name="arrow" /></a>
        </template>
        <template #art>
          <div class="hero-art">
            <div class="preview-grid"></div>
            <div class="payment-flow" style="padding: 28px">
              <div class="flow-top"><span>EMAIL</span><UiIcon name="check" /></div>
              <div class="flow-connector">↓</div>
              <div class="flow-center"><span class="status-dot"></span><b>WhatsApp</b><span>fastest</span><UiIcon name="check" /></div>
              <div class="flow-connector">↓</div>
              <div class="flow-bottom"><UiIcon name="phone" /><span>Google Meet<br /><b>by appointment.</b></span></div>
            </div>
          </div>
        </template>
      </PageHero>

      <section class="section-space site-container" data-reveal>
        <div class="detail-grid">
          <div class="panel-card" data-reveal>
            <span class="eyebrow">DIRECT CHANNELS</span>
            <h2 style="margin: 10px 0 18px">Talk to a human.</h2>
            <div style="display:grid;gap:14px;font-size:13px">
              <div><b>Email</b><br /><a href="mailto:hubspot861@gmail.com" style="color:var(--site-brand)">hubspot861@gmail.com</a></div>
              <div><b>WhatsApp</b><br /><a :href="whatsappUrl('Hello, I would like to discuss a project.')" target="_blank" rel="noopener noreferrer" style="color:var(--site-brand)">Chat now ↗</a></div>
              <div><b>Google Meet</b><br /><a :href="googleMeetUrl" target="_blank" rel="noopener noreferrer" style="color:var(--site-brand)">Schedule a consultation ↗</a></div>
              <div><b>Prefer accounts?</b><br /><router-link to="/sign-in" style="color:var(--site-brand)">Sign in / create account →</router-link></div>
            </div>
          </div>
          <div class="panel-card" data-reveal>
            <span class="eyebrow">QUICK QUOTE FORM</span>
            <h2 style="margin: 10px 0 18px">Scope in 60 seconds.</h2>
            <div v-if="formSubmitted" class="panel-card" style="background:var(--site-mint);margin-bottom:16px"><b>Message ready!</b><p style="font-size:12px">Demo build — connect Formspree ID to send live.</p></div>
            <div v-if="formError" class="panel-card" style="background:#fdecec;margin-bottom:16px"><b>Check the form</b><p style="font-size:12px">{{ formError }}</p></div>
            <form @submit.prevent="submitForm" style="display:grid;gap:14px">
              <div class="form-row"><label for="name">Full name *</label><input id="name" v-model="form.name" required placeholder="June Chemuu" @blur="validateField('name')" /><p v-if="errors.name" style="color:#b3261e;font-size:12px">{{ errors.name }}</p></div>
              <div class="form-row"><label for="email">Email *</label><input id="email" v-model="form.email" type="email" required placeholder="june@example.com" @blur="validateField('email')" /><p v-if="errors.email" style="color:#b3261e;font-size:12px">{{ errors.email }}</p></div>
              <div class="form-row"><label for="phone">Phone</label><input id="phone" v-model="form.phone" type="tel" placeholder="+254 7__ ___ ___" @blur="validateField('phone')" /></div>
              <div class="form-row"><label for="service">Service *</label><select id="service" v-model="form.service" required @change="validateField('service')"><option value="">Select a service</option><option>Web Development</option><option>Software Development</option><option>Mobile Apps</option><option>M-Pesa Integration</option><option>Graphics Design</option><option>Programming Classes</option></select></div>
              <div class="form-row"><label for="budget">Budget</label><select id="budget" v-model="form.budget"><option value="">Select budget range</option><option>Under KES 50,000</option><option>KES 50,000 - 150,000</option><option>KES 150,000 - 500,000</option><option>KES 500,000+</option><option>Not sure yet</option></select></div>
              <div class="form-row"><label for="description">Project details *</label><textarea id="description" v-model="form.description" required rows="5" placeholder="Goals, timeline, must-haves..." @blur="validateField('description')"></textarea><p style="font-size:11px;color:var(--site-muted)">{{ form.description.length }}/1000</p></div>
              <button type="submit" class="action action-dark" :disabled="submitting || !isFormValid" style="width:100%">{{ submitting ? 'Sending…' : 'Send message' }}</button>
              <p style="font-size:11px;color:var(--site-muted)">By sending, you agree to be contacted about your inquiry.</p>
            </form>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>


<script>
import GlobalNav from '../components/GlobalNav.vue'
import Footer from '../components/Footer.vue'
import PageHero from '../components/PageHero.vue'
import UiIcon from '../components/UiIcon.vue'
import { ref } from 'vue'
import { useReveal } from '../composables/useReveal'

export default {
  name: 'Contact',
  components: {
    GlobalNav,
    Footer,
    PageHero,
    UiIcon
  },
  setup() {
    const root = ref(null);
    useReveal(root);
    return { root };
  },
  data() {
    return {
      whatsappNumber: '254708345963', // Replace with your actual WhatsApp number
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
