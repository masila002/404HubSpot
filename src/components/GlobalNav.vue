<template>
  <nav class="navbar-glass sticky top-0 z-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <router-link to="/" class="flex items-center logo-hover">
          <img 
            src="/assets/logo.png" 
            alt="404HubSpot logo featuring glitch-style numbers '404' above 'HubSpot builder' with a cursor icon, all enclosed in glowing teal circles with a neural network graphic"
            class="h-12 w-auto logo-glow"
          />
        </router-link>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <div class="relative group">
            <button class="nav-link font-medium">
              Services
              <span class="link-sparkle"></span>
            </button>
            <div class="dropdown-menu">
              <router-link to="/services/web-development" class="dropdown-item rounded-t-lg">
                <span class="item-icon">🌐</span> Web Development
              </router-link>
              <router-link to="/services/software-development" class="dropdown-item">
                <span class="item-icon">💻</span> Software Development
              </router-link>
              <router-link to="/services/mobile-apps" class="dropdown-item">
                <span class="item-icon">📱</span> Mobile Apps
              </router-link>
              <router-link to="/services/m-pesa-integration" class="dropdown-item">
                <span class="item-icon">💳</span> M-Pesa Integration
              </router-link>
              <router-link to="/services/graphics-design" class="dropdown-item">
                <span class="item-icon">🎨</span> Graphics Design
              </router-link>
              <router-link to="/programming-classes" class="dropdown-item rounded-b-lg">
                <span class="item-icon">👨‍💻</span> Programming Classes
              </router-link>
            </div>
          </div>
          <router-link to="/programming-classes" class="nav-link font-medium">
            Programming Classes
            <span class="link-sparkle"></span>
          </router-link>
          <router-link to="/our-process" class="nav-link font-medium">
            Our Process
            <span class="link-sparkle"></span>
          </router-link>
          <router-link to="/contact" class="nav-link font-medium">
            Contact
            <span class="link-sparkle"></span>
          </router-link>
        </div>

        <!-- CTA Button -->
        <div class="hidden md:block">
          <a 
            :href="whatsappUrl('I%27m_interested_in_learning_more_about_your_services')"
            target="_blank"
            class="btn-primary"
          >
            <span class="btn-text">Inquire Now</span>
            <span class="btn-icon">→</span>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden mobile-menu-btn"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition name="mobile-menu">
        <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-peach/20">
          <div class="mb-2">
            <div class="font-semibold text-peach-light mb-2">Services:</div>
            <router-link to="/services/web-development" class="mobile-link">
              <span class="mobile-icon">🌐</span> Web Development
            </router-link>
            <router-link to="/services/software-development" class="mobile-link">
              <span class="mobile-icon">💻</span> Software Development
            </router-link>
            <router-link to="/services/mobile-apps" class="mobile-link">
              <span class="mobile-icon">📱</span> Mobile Apps
            </router-link>
            <router-link to="/services/m-pesa-integration" class="mobile-link">
              <span class="mobile-icon">💳</span> M-Pesa Integration
            </router-link>
            <router-link to="/services/graphics-design" class="mobile-link">
              <span class="mobile-icon">🎨</span> Graphics Design
            </router-link>
          </div>
          <router-link to="/programming-classes" class="mobile-link">Programming Classes</router-link>
          <router-link to="/our-process" class="mobile-link">Our Process</router-link>
          <router-link to="/contact" class="mobile-link">Contact</router-link>
          <a 
            :href="whatsappUrl('I%27m_interested_in_learning_more_about_your_services')"
            target="_blank"
            class="btn-primary mt-4 inline-block"
          >
            <span class="btn-text">Inquire Now</span>
            <span class="btn-icon">→</span>
          </a>
        </div>
      </transition>
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

<style scoped>
/* Peach Color Variables */
:root {
  --peach: #FFE5D9;
  --peach-light: #FFEEE6;
  --peach-bright: #FFCDB2;
  --dark-teal: #004d4d;
  --teal: #006666;
  --teal-light: #008080;
}

/* Glassmorphism Navbar with Dark Teal Background */
.navbar-glass {
  background: rgba(0, 77, 77, 0.9); /* Dark teal with transparency */
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 60px rgba(255, 205, 178, 0.1);
  border-bottom: 1px solid rgba(255, 229, 217, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.navbar-glass::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(255, 229, 217, 0.1), 
    transparent
  );
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  0%, 100% { left: -100%; }
  50% { left: 100%; }
}

.navbar-glass:hover {
  background: rgba(0, 77, 77, 0.95);
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.4), 0 0 80px rgba(255, 205, 178, 0.15);
  transform: translateY(-1px);
}

/* Logo Animations */
.logo-hover {
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;
}

.logo-hover:hover {
  transform: scale(1.08) rotate(-3deg);
  filter: drop-shadow(0 0 20px rgba(255, 205, 178, 0.6));
}

.logo-glow {
  animation: logoFloat 3s ease-in-out infinite;
}

@keyframes logoFloat {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
}

/* Navigation Links with Peach Color */
.nav-link {
  color: #FFE5D9; /* Peach */
  position: relative;
  transition: all 0.3s ease;
  padding-bottom: 4px;
  display: inline-block;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #FFCDB2, #FFE5D9);
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform: translateX(-50%);
  box-shadow: 0 0 10px rgba(255, 205, 178, 0.5);
}

.nav-link:hover {
  color: #FFCDB2; /* Bright peach on hover */
  transform: translateY(-3px);
  text-shadow: 0 0 20px rgba(255, 205, 178, 0.5);
}

.nav-link:hover::after {
  width: 110%;
}

/* Sparkle Effect */
.link-sparkle {
  position: absolute;
  top: 50%;
  right: -15px;
  width: 4px;
  height: 4px;
  background: #FFCDB2;
  border-radius: 50%;
  opacity: 0;
  transition: all 0.3s ease;
}

.nav-link:hover .link-sparkle {
  opacity: 1;
  animation: sparkle 0.6s ease-in-out;
}

@keyframes sparkle {
  0%, 100% { 
    transform: scale(0) rotate(0deg);
    opacity: 0;
  }
  50% { 
    transform: scale(1.5) rotate(180deg);
    opacity: 1;
  }
}

/* Dropdown Menu */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 0.5rem;
  width: 14rem;
  background: rgba(0, 77, 77, 0.95);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 0.75rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(255, 205, 178, 0.2);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px) scale(0.95);
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  border: 1px solid rgba(255, 229, 217, 0.3);
  overflow: hidden;
}

.dropdown-menu::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #FFCDB2, #FFE5D9, #FFCDB2);
  border-radius: 0.75rem;
  opacity: 0;
  z-index: -1;
  transition: opacity 0.3s ease;
}

.group:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0) scale(1);
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  color: #FFE5D9;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.item-icon {
  font-size: 1.1rem;
  transition: transform 0.3s ease;
  display: inline-block;
}

.dropdown-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, #FFCDB2, #FFE5D9);
  transform: scaleY(0);
  transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  box-shadow: 0 0 15px rgba(255, 205, 178, 0.5);
}

.dropdown-item::after {
  content: '';
  position: absolute;
  left: -100%;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 205, 178, 0.2), transparent);
  transition: left 0.5s ease;
}

.dropdown-item:hover {
  background: rgba(255, 205, 178, 0.15);
  color: #FFCDB2;
  padding-left: 1.5rem;
  transform: translateX(5px);
}

.dropdown-item:hover::before {
  transform: scaleY(1);
}

.dropdown-item:hover::after {
  left: 100%;
}

.dropdown-item:hover .item-icon {
  transform: scale(1.3) rotate(10deg);
}

/* CTA Button with Advanced Animations */
.btn-primary {
  background: linear-gradient(135deg, #FFCDB2, #FFE5D9);
  color: #004d4d;
  padding: 0.75rem 2rem;
  border-radius: 2rem;
  font-weight: 700;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  box-shadow: 0 6px 20px rgba(255, 205, 178, 0.4), 0 0 30px rgba(255, 205, 178, 0.2);
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 2px solid rgba(255, 205, 178, 0.3);
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease;
}

.btn-primary:hover::before {
  width: 300px;
  height: 300px;
}

.btn-text, .btn-icon {
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
}

.btn-icon {
  font-size: 1.2rem;
  transform: translateX(0);
}

.btn-primary:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 10px 35px rgba(255, 205, 178, 0.6), 0 0 50px rgba(255, 205, 178, 0.3);
}

.btn-primary:hover .btn-icon {
  transform: translateX(5px);
  animation: bounce 0.6s ease infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateX(5px); }
  50% { transform: translateX(10px); }
}

.btn-primary:active {
  transform: translateY(-2px) scale(1.02);
}

/* Mobile Menu Button */
.mobile-menu-btn {
  color: #FFE5D9;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;
}

.mobile-menu-btn::before {
  content: '';
  position: absolute;
  inset: -8px;
  border: 2px solid #FFCDB2;
  border-radius: 50%;
  opacity: 0;
  transform: scale(0);
  transition: all 0.4s ease;
}

.mobile-menu-btn:hover {
  color: #FFCDB2;
  transform: scale(1.15) rotate(180deg);
}

.mobile-menu-btn:hover::before {
  opacity: 1;
  transform: scale(1);
  animation: pulse 1s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.5; }
}

/* Mobile Links */
.mobile-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 0;
  padding-left: 1rem;
  color: #FFE5D9;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;
  border-radius: 0.5rem;
  margin: 0.25rem 0;
}

.mobile-icon {
  font-size: 1.1rem;
  transition: transform 0.3s ease;
  display: inline-block;
}

.mobile-link::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 3px;
  background: linear-gradient(90deg, #FFCDB2, #FFE5D9);
  transition: width 0.3s ease;
  box-shadow: 0 0 10px rgba(255, 205, 178, 0.5);
  border-radius: 2px;
}

.mobile-link:hover {
  color: #FFCDB2;
  padding-left: 2rem;
  background: rgba(255, 205, 178, 0.1);
  transform: translateX(5px);
}

.mobile-link:hover::before {
  width: 12px;
}

.mobile-link:hover .mobile-icon {
  transform: scale(1.3) rotate(15deg);
}

/* Mobile Menu Transitions */
.mobile-menu-enter-active {
  animation: slideDown 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.mobile-menu-leave-active {
  animation: slideUp 0.3s ease-in;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px) scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: translateY(0) scaleY(1);
  }
}

@keyframes slideUp {
  from {
    opacity: 1;
    transform: translateY(0) scaleY(1);
  }
  to {
    opacity: 0;
    transform: translateY(-20px) scaleY(0.8);
  }
}

/* Additional Peach Colors */
.text-peach-light {
  color: #FFEEE6;
}

.border-peach {
  border-color: #FFE5D9;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .navbar-glass {
    background: rgba(0, 77, 77, 0.95);
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>