<template>
  <div class="min-h-screen">
    <GlobalNav />

    <!-- Hero Section -->
    <section class="bg-white py-20 md:py-32">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Expert Digital Solutions & Tech Training
          </h1>
          <p class="text-xl md:text-2xl text-gray-700 mb-8">
            From high-performance Web Apps and M-Pesa integrations to
            professional Programming Classes. We build. You grow.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" class="btn-primary bg-dark-teal text-white">
              View Services
            </a>
            <router-link to="/programming-classes" class="btn-secondary">
              Join a Class
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Bento-Grid -->
    <section id="services" class="py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
        >
          Our Services
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            v-for="service in services"
            :key="service.id"
            :service="service"
          />
        </div>
      </div>
    </section>

    <!-- M-Pesa Expert Ribbon -->
    <section class="py-12 bg-gradient-to-r from-teal to-teal-dark text-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h3 class="text-2xl md:text-3xl font-bold mb-4">
            Need to automate your payments?
          </h3>
          <p class="text-lg md:text-xl mb-6">
            We specialize in Safaricom Daraja API integrations.
          </p>
          <router-link
            to="/services/m-pesa-integration"
            class="btn-primary bg-white text-teal hover:bg-peach hover:text-white inline-block mr-4"
          >
            Learn More
          </router-link>
          
            :href="whatsappUrl('I%27m_interested_in_M-Pesa_API_integration')"
            target="_blank"
            class="btn-outline border-white text-white hover:bg-white hover:text-teal inline-block"
          >
            Consult on WhatsApp
          
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <TeamSection />

    <!-- Our Process Section -->
    <section id="process" class="py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
        ></h2>
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12"
        >
          <div class="text-center">
            <div
              class="bg-teal text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4"
            >
              1
            </div>
            <h3 class="text-xl font-semibold mb-2 text-gray-900">
              Consultation
            </h3>
            <p class="text-gray-600">
              We understand your needs and goals through a detailed
              consultation.
            </p>
          </div>
          <div class="text-center">
            <div
              class="bg-teal text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4"
            >
              2
            </div>
            <h3 class="text-xl font-semibold mb-2 text-gray-900">
              Development
            </h3>
            <p class="text-gray-600">
              We build your solution with best practices and modern
              technologies.
            </p>
          </div>
          <div class="text-center">
            <div
              class="bg-teal text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4"
            >
              3
            </div>
            <h3 class="text-xl font-semibold mb-2 text-gray-900">
              Launch & Support
            </h3>
            <p class="text-gray-600">
              We launch your project and provide ongoing support for growth.
            </p>
          </div>
        </div>
        <div class="text-center">
          <router-link to="/our-process" class="btn-secondary">
            Learn More About Our Process
          </router-link>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import GlobalNav from "../components/GlobalNav.vue";
import Footer from "../components/Footer.vue";
import ServiceCard from "../components/ServiceCard.vue";
import TeamSection from "./services/Teamsection.vue";

export default {
  name: "Home",
  components: {
    GlobalNav,
    Footer,
    ServiceCard,
    TeamSection
  },
  data() {
    return {
      whatsappNumber: "254708345963",
      services: [
        {
          id: 1,
          title: "Web Development",
          description:
            "High-performance web applications built with modern frameworks.",
          whatsappText: "I%27m_interested_in_Web_Development",
          route: "/services/web-development",
        },
        {
          id: 2,
          title: "Software Development",
          description:
            "Custom software solutions tailored to your business needs.",
          whatsappText: "I%27m_interested_in_Software_Development",
          route: "/services/software-development",
        },
        {
          id: 3,
          title: "Mobile Apps",
          description:
            "Native and cross-platform mobile applications for iOS and Android.",
          whatsappText: "I%27m_interested_in_Mobile_App_Development",
          route: "/services/mobile-apps",
        },
        {
          id: 4,
          title: "M-Pesa Integration",
          description:
            "Seamless Safaricom Daraja API integrations for payment automation.",
          whatsappText: "I%27m_interested_in_M-Pesa_Integration",
          route: "/services/m-pesa-integration",
        },
        {
          id: 5,
          title: "Graphics Design",
          description:
            "Professional branding, logos, and visual design services.",
          whatsappText: "I%27m_interested_in_Graphics_Design",
          route: "/services/graphics-design",
        },
        {
          id: 6,
          title: "Programming Classes",
          description:
            "Learn Python, JavaScript, SQL, and more with expert mentorship.",
          whatsappText: "I%27d_like_to_join_Programming_Classes",
          route: "/programming-classes",
        },
      ],
    };
  },
  methods: {
    whatsappUrl(text) {
      return `https://wa.me/${this.whatsappNumber}?text=${text}`;
    },
  },
};
</script>