<template>
  <nav class="navbar-glass sticky top-0 z-50">
    <div class="container mx-auto px-3 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 sm:h-20">
        <!-- Logo -->
        <router-link to="/" class="flex items-center logo-hover">
          <img
            src="/assets/logo.png"
            alt="404HubSpot logo featuring glitch-style numbers '404' above 'HubSpot builder' with a cursor icon, all enclosed in glowing teal circles with a neural network graphic"
            class="h-10 sm:h-12 w-auto logo-glow"
          />
        </router-link>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <div class="relative group">
            <button @click="toggleDropdown" class="nav-link font-medium">
              Services
              <span class="link-sparkle"></span>
            </button>
            <div v-if="dropdownOpen" class="dropdown-menu dropdown-visible">
              <router-link
                to="/services/web-development"
                class="dropdown-item"
                @click="closeDropdown"
              >
                Web Development
              </router-link>
              <router-link
                to="/services/software-development"
                class="dropdown-item"
                @click="closeDropdown"
              >
                Software Development
              </router-link>
              <router-link
                to="/services/mobile-apps"
                class="dropdown-item"
                @click="closeDropdown"
              >
                Mobile Apps
              </router-link>
              <router-link
                to="/services/m-pesa-integration"
                class="dropdown-item"
                @click="closeDropdown"
              >
                M-Pesa Integration
              </router-link>
              <router-link
                to="/services/graphics-design"
                class="dropdown-item"
                @click="closeDropdown"
              >
                Graphics Design
              </router-link>
              <router-link
                to="/programming-classes"
                class="dropdown-item"
                @click="closeDropdown"
              >
                Programming Classes
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
            :href="
              whatsappUrl(
                'I%27m_interested_in_learning_more_about_your_services',
              )
            "
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
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!mobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition name="mobile-menu">
        <div
          v-if="mobileMenuOpen"
          class="md:hidden py-3 border-t border-teal/20"
        >
          <div class="mb-2">
            <button
              @click="mobileServicesOpen = !mobileServicesOpen"
              class="font-semibold text-teal-dark mb-1 flex items-center justify-between w-full text-sm sm:text-base"
            >
              <span>Services:</span>
              <svg
                class="w-5 h-5 transition-transform duration-300"
                :class="{ 'rotate-180': mobileServicesOpen }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <transition name="mobile-services">
              <div v-if="mobileServicesOpen">
                <router-link
                  to="/services/web-development"
                  class="mobile-link"
                  @click="mobileMenuOpen = false"
                >
                  <span class="mobile-icon">🌐</span> Web Development
                </router-link>
                <router-link
                  to="/services/software-development"
                  class="mobile-link"
                  @click="mobileMenuOpen = false"
                >
                  <span class="mobile-icon">💻</span> Software Development
                </router-link>
                <router-link
                  to="/services/mobile-apps"
                  class="mobile-link"
                  @click="mobileMenuOpen = false"
                >
                  <span class="mobile-icon">📱</span> Mobile Apps
                </router-link>
                <router-link
                  to="/services/m-pesa-integration"
                  class="mobile-link"
                  @click="mobileMenuOpen = false"
                >
                  <span class="mobile-icon">💳</span> M-Pesa Integration
                </router-link>
                <router-link
                  to="/services/graphics-design"
                  class="mobile-link"
                  @click="mobileMenuOpen = false"
                >
                  <span class="mobile-icon">🎨</span> Graphics Design
                </router-link>
              </div>
            </transition>
          </div>
          <router-link
            to="/programming-classes"
            class="mobile-link"
            @click="mobileMenuOpen = false"
            >Programming Classes</router-link
          >
          <router-link
            to="/our-process"
            class="mobile-link"
            @click="mobileMenuOpen = false"
            >Our Process</router-link
          >
          <router-link
            to="/contact"
            class="mobile-link"
            @click="mobileMenuOpen = false"
            >Contact</router-link
          >
          <a
            :href="
              whatsappUrl(
                'I%27m_interested_in_learning_more_about_your_services',
              )
            "
            target="_blank"
            class="btn-primary btn-primary-mobile mt-3 inline-block w-full text-center"
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
  name: "GlobalNav",
  data() {
    return {
      mobileMenuOpen: false,
      mobileServicesOpen: false,
      dropdownOpen: false,
      // Replace with your actual WhatsApp number (format: country code + number without +)
      whatsappNumber: "254708345963", // Example: Kenya +254
    };
  },
  methods: {
    whatsappUrl(text) {
      return `https://wa.me/${this.whatsappNumber}?text=${text}`;
    },
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    closeDropdown() {
      this.dropdownOpen = false;
    },
  },
  watch: {
    mobileMenuOpen(isOpen) {
      // Prevent body scroll when mobile menu is open
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  },
  mounted() {
    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".group")) {
        this.dropdownOpen = false;
      }
    });
  },
  beforeUnmount() {
    // Cleanup: restore body scroll
    document.body.style.overflow = '';
  },
};
</script>

<style scoped>
/* Teal Color Variables */
:root {
  --white: #ffffff;
  --teal-dark: #004d4d;
  --teal: #006666;
  --teal-light: #008080;
  --teal-bright: #00b3b3;
}

/* Glassmorphism Navbar with White Background - More Translucent */
.navbar-glass {
  background: rgba(255, 255, 255, 0.7); /* White with translucency */
  backdrop-filter: blur(20px); /* Increased blur for better glass effect */
  -webkit-backdrop-filter: blur(20px);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.1),
    0 0 60px rgba(0, 102, 102, 0.05);
  border-bottom: 1px solid rgba(0, 102, 102, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  /* Safe area for notched devices */
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}

.navbar-glass::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(0, 102, 102, 0.1),
    transparent
  );
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  0%,
  100% {
    left: -100%;
  }
  50% {
    left: 100%;
  }
}

.navbar-glass:hover {
  background: rgba(255, 255, 255, 0.85); /* Slightly more opaque on hover */
  box-shadow:
    0 12px 48px rgba(0, 0, 0, 0.15),
    0 0 80px rgba(0, 102, 102, 0.1);
  transform: translateY(-1px);
}

/* Logo Animations */
.logo-hover {
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;
}

.logo-hover:hover {
  transform: scale(1.08) rotate(-3deg);
  filter: drop-shadow(0 0 20px rgba(0, 102, 102, 0.4));
}

.logo-glow {
  animation: logoFloat 3s ease-in-out infinite;
}

@keyframes logoFloat {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
}

/* Navigation Links with Teal Color */
.nav-link {
  color: #004d4d; /* Dark teal */
  position: relative;
  transition: all 0.3s ease;
  padding-bottom: 4px;
  display: inline-block;
  cursor: pointer;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #006666, #008080);
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform: translateX(-50%);
  box-shadow: 0 0 10px rgba(0, 102, 102, 0.3);
}

.nav-link:hover {
  color: #006666; /* Teal on hover */
  transform: translateY(-3px);
  text-shadow: 0 0 20px rgba(0, 102, 102, 0.3);
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
  background: #008080;
  border-radius: 50%;
  opacity: 0;
  transition: all 0.3s ease;
}

.nav-link:hover .link-sparkle {
  opacity: 1;
  animation: sparkle 0.6s ease-in-out;
}

@keyframes sparkle {
  0%,
  100% {
    transform: scale(0) rotate(0deg);
    opacity: 0;
  }
  50% {
    transform: scale(1.5) rotate(180deg);
    opacity: 1;
  }
}

/* Dropdown Menu - Click Triggered */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 0.5rem;
  width: 14rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 0.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 102, 102, 0.2);
  overflow: hidden;
  pointer-events: none;
  z-index: 1000;
  padding: 0.5rem 0;
}

.dropdown-menu::before {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #006666, #008080, #006666);
  border-radius: 0.75rem;
  opacity: 0;
  z-index: -1;
  transition: opacity 0.3s ease;
}

/* Show dropdown when active */
.dropdown-visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0) scale(1);
  pointer-events: auto;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.25rem;
  color: #004d4d;
  font-size: 0.9rem;
  font-weight: 400;
  transition: all 0.2s ease;
  position: relative;
  text-decoration: none;
}

.item-icon {
  font-size: 1.2rem;
  display: inline-block;
}

.dropdown-item:hover {
  background: rgba(0, 102, 102, 0.1);
  color: #006666;
  padding-left: 1.5rem;
}

/* CTA Button with Advanced Animations */
.btn-primary {
  background: linear-gradient(135deg, #006666, #008080);
  color: #ffffff;
  padding: 0.75rem 2rem;
  border-radius: 2rem;
  font-weight: 700;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  box-shadow:
    0 6px 20px rgba(0, 102, 102, 0.3),
    0 0 30px rgba(0, 102, 102, 0.15);
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 2px solid rgba(0, 102, 102, 0.2);
}

.btn-primary::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition:
    width 0.6s ease,
    height 0.6s ease;
}

.btn-primary:hover::before {
  width: 300px;
  height: 300px;
}

.btn-text,
.btn-icon {
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
  box-shadow:
    0 10px 35px rgba(0, 102, 102, 0.4),
    0 0 50px rgba(0, 102, 102, 0.2);
}

.btn-primary:hover .btn-icon {
  transform: translateX(5px);
  animation: bounce 0.6s ease infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateX(5px);
  }
  50% {
    transform: translateX(10px);
  }
}

.btn-primary:active {
  transform: translateY(-2px) scale(1.02);
}

/* Mobile Menu Button */
.mobile-menu-btn {
  color: #004d4d;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;
}

.mobile-menu-btn::before {
  content: "";
  position: absolute;
  inset: -8px;
  border: 2px solid #008080;
  border-radius: 50%;
  opacity: 0;
  transform: scale(0);
  transition: all 0.4s ease;
}

.mobile-menu-btn:hover {
  color: #006666;
  transform: scale(1.15) rotate(180deg);
}

.mobile-menu-btn:hover::before {
  opacity: 1;
  transform: scale(1);
  animation: pulse 1s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.5;
  }
}

/* Mobile Links */
.mobile-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 0;
  padding-left: 1rem;
  color: #004d4d;
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
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 3px;
  background: linear-gradient(90deg, #006666, #008080);
  transition: width 0.3s ease;
  box-shadow: 0 0 10px rgba(0, 102, 102, 0.3);
  border-radius: 2px;
}

.mobile-link:hover {
  color: #006666;
  padding-left: 2rem;
  background: rgba(0, 102, 102, 0.1);
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

/* Mobile Services Dropdown Animation */
.mobile-services-enter-active,
.mobile-services-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.mobile-services-enter-from,
.mobile-services-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-10px);
}

.mobile-services-enter-to,
.mobile-services-leave-from {
  opacity: 1;
  max-height: 500px;
  transform: translateY(0);
}

/* Additional Teal Colors */
.text-teal-dark {
  color: #004d4d;
}

.border-teal {
  border-color: #006666;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .navbar-glass {
    background: rgba(255, 255, 255, 0.95);
  }

  /* Mobile typography */
  .mobile-link {
    font-size: 0.9rem;
    padding: 0.6rem 0;
    padding-left: 0.75rem;
  }

  /* Mobile button sizing */
  .btn-primary-mobile {
    padding: 0.65rem 1.5rem;
    font-size: 0.9rem;
    justify-content: center;
  }

  /* Mobile menu spacing */
  .mobile-icon {
    font-size: 1rem;
  }

  /* Reduce mobile menu animations for performance */
  .mobile-link:hover {
    padding-left: 1.5rem;
  }

  /* Mobile services dropdown */
  .mobile-services-enter-to,
  .mobile-services-leave-from {
    max-height: 400px;
  }
}

/* Extra small screens */
@media (max-width: 380px) {
  .navbar-glass {
    background: rgba(255, 255, 255, 0.98);
  }

  .mobile-link {
    font-size: 0.85rem;
    padding: 0.5rem 0;
    padding-left: 0.5rem;
  }

  .btn-primary-mobile {
    padding: 0.6rem 1.25rem;
    font-size: 0.85rem;
  }

  .mobile-icon {
    font-size: 0.95rem;
  }

  /* Smaller touch targets but still accessible */
  .mobile-menu-btn {
    padding: 0.5rem;
  }

  /* Reduce spacing */
  .text-teal-dark {
    font-size: 0.9rem;
  }
}

/* Landscape mobile view */
@media (max-width: 768px) and (orientation: landscape) {
  .navbar-glass {
    height: auto;
  }

  .flex.items-center.justify-between {
    height: 3.5rem;
  }

  .logo-glow {
    height: 2rem;
  }

  .mobile-link {
    padding: 0.4rem 0;
    padding-left: 0.75rem;
  }
}

/* Touch-friendly spacing */
@media (hover: none) and (pointer: coarse) {
  .mobile-link {
    padding: 0.75rem 0;
    padding-left: 1rem;
    min-height: 44px; /* iOS accessibility guideline */
  }

  .btn-primary-mobile {
    min-height: 44px;
  }

  .mobile-menu-btn {
    min-width: 44px;
    min-height: 44px;
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