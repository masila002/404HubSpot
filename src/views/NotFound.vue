<template>
  <div class="page-shell landing-page" ref="root">
    <GlobalNav />
    <main id="main-content" tabindex="-1">
      <section class="site-container notfound-hero" data-hero>
        <div class="hero-copy">
          <span class="hero-kicker"><span class="status-dot"></span> 404 — LOST & FOUND</span>
          <h1>That page took <em>a wrong turn.</em></h1>
          <p>
            The link you followed doesn't exist (or moved). Here's how to get
            back on track — everything important is one click away.
          </p>
          <div class="hero-actions">
            <router-link to="/" class="action action-dark" data-magnetic>Back home <UiIcon name="diagonal" /></router-link>
            <router-link to="/contact" class="text-action">Contact us <UiIcon name="arrow" /></router-link>
          </div>
        </div>
        <div class="hero-art">
          <div class="preview-grid"></div>
          <span class="preview-coordinate">404 → FOUND</span>
          <LottiePlayer :animation-data="notfound" label="Searching illustration" style="position:absolute;top:50%;left:50%;width:190px;transform:translate(-50%,-50%)" />
          <span class="preview-caption">LET'S GET YOU BACK</span>
        </div>
      </section>

      <section class="section-space site-container" data-reveal>
        <div class="section-heading">
          <div><span class="eyebrow">POPULAR DESTINATIONS</span><h2>Start <span class="muted-heading">here instead.</span></h2></div>
        </div>
        <div class="services-grid">
          <ServiceCard v-for="service in services" :key="service.id" :service="service" />
        </div>
        <div style="display:flex;gap:20px;flex-wrap:wrap;margin-top:26px">
          <router-link to="/programming-classes" class="text-action">Programming classes <UiIcon name="arrow" /></router-link>
          <router-link to="/our-process" class="text-action">Our process <UiIcon name="arrow" /></router-link>
          <router-link to="/contact" class="text-action">Contact <UiIcon name="arrow" /></router-link>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>
<script>
import { ref } from "vue";
import GlobalNav from "../components/GlobalNav.vue";
import Footer from "../components/Footer.vue";
import ServiceCard from "../components/ServiceCard.vue";
import LottiePlayer from "../components/LottiePlayer.vue";
import UiIcon from "../components/UiIcon.vue";
import { services } from "../data/site";
import { useReveal, useMagnetic } from "../composables/useReveal";
import notfound from "../assets/lottie/notfound.json";

export default {
  name: "NotFound",
  components: { GlobalNav, Footer, ServiceCard, LottiePlayer, UiIcon },
  setup() {
    const root = ref(null);
    useReveal(root);
    useMagnetic(root);
    return { root, services, notfound };
  },
};
</script>
