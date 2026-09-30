<template>
  <div class="page-shell landing-page" ref="root">
    <GlobalNav />
    <main id="main-content" tabindex="-1">
      <PageHero
        kicker="DESIGN — IDENTITY THAT STICKS"
        title="Look like <em>you mean it.</em>"
        lede="Logos, brand kits and marketing sets — consistent everywhere."
      >
        <template #actions>
          <a :href="whatsappUrl(`Hello 404HubSpot, I need design work.`)" target="_blank" rel="noopener noreferrer" class="action action-dark">Start on WhatsApp <UiIcon name="diagonal" /></a>
          <router-link to="/contact" class="text-action">Get a scoped quote <UiIcon name="arrow" /></router-link>
        </template>
        <template #art>
          <div class="hero-art">
            <div class="preview-grid"></div>
            <span class="preview-coordinate">BRIEF → CONCEPT → KIT</span>
            <LottiePlayer :animation-data="orbit" label="Orbit illustration" style="position:absolute;top:24px;right:24px;width:150px" />
            <div class="browser-preview" style="top:90px">
              <div class="browser-bar"><span class="window-dots"><i></i><i></i><i></i></span><span>your-site.co.ke</span><span>↗</span></div>
              <div class="mock-site-content"><span class="mini-label">BUILT FOR WHAT'S NEXT</span><strong>Fast. Clear.<br /><em>Made to convert.</em></strong><span class="mock-button">Let's build ↗</span></div>
              <div class="mock-site-footer"><span>RESPONSIVE BY DEFAULT</span><span>01 / 03</span></div>
            </div>
            <span class="preview-caption">360 → 1920PX READY</span>
          </div>
        </template>
      </PageHero>

      <section class="section-space site-container" data-reveal>
        <div class="section-heading">
          <div><span class="eyebrow">01 / HOW WE BUILD</span><h2>Discovery to launch.<br /><span class="muted-heading">No surprises.</span></h2></div>
          <p>Same executive rhythm as home — five clear steps, weekly demos, clean handover.</p>
        </div>
        <div class="process-timeline">
          <div v-for="(s, i) in steps" :key="s.title" class="process-row" data-reveal>
            <span class="process-num">{{ i + 1 }}</span>
            <div><h3>{{ s.title }}</h3><p style="color:var(--site-muted);font-size:13px;line-height:1.8;margin-top:8px">{{ s.body }}</p></div>
          </div>
        </div>
      </section>

      <section class="section-space site-container" data-reveal>
        <div class="section-heading">
          <div><span class="eyebrow">02 / KENYA-REALISTIC PRICING</span><h2>Fair prices.<br /><span class="muted-heading">No undercharging.</span></h2></div>
          <p>Owner-review bands (2026-09-30). Final quote confirms scope on WhatsApp — 50% to start, 50% on delivery.</p>
        </div>
        <div class="pricing-grid">
          <article v-for="p in pricing.graphics" :key="p.name" class="price-card" :class="{ featured: p.featured }" data-reveal>
            <span v-if="p.badge" class="badge-pop">{{ p.badge }}</span>
            <h3>{{ p.name }}</h3>
            <div class="price-amount">{{ p.range }}</div>
            <p style="font-size:12px;opacity:.8">{{ p.blurb }}</p>
            <ul><li v-for="f in p.features" :key="f"><UiIcon name="check" /> {{ f }}</li></ul>
            <a :href="whatsappUrl(`Hello 404HubSpot, ${p.cta}.`)" target="_blank" rel="noopener noreferrer" :class="['action', p.featured ? 'action-light' : 'action-dark']" style="margin-top:auto">Get started <UiIcon name="diagonal" /></a>
          </article>
        </div>
      </section>

      <section class="closing-section site-container" data-reveal>
        <div class="closing-card">
          <span class="eyebrow">READY WHEN YOU ARE</span>
          <h2>Let's scope your graphicsdesign <span>this week.</span></h2>
          <div>
            <a :href="whatsappUrl(`Hello 404HubSpot, I'd like a GraphicsDesign quote.`)" target="_blank" rel="noopener noreferrer" class="action action-dark">Chat on WhatsApp <UiIcon name="diagonal" /></a>
            <router-link to="/our-process" class="text-action">See our process <UiIcon name="arrow" /></router-link>
          </div>
          <span class="closing-art" aria-hidden="true">✳</span>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>
<script>
import { ref } from "vue";
import GlobalNav from "../../components/GlobalNav.vue";
import Footer from "../../components/Footer.vue";
import PageHero from "../../components/PageHero.vue";
import LottiePlayer from "../../components/LottiePlayer.vue";
import UiIcon from "../../components/UiIcon.vue";
import { pricing, whatsappUrl } from "../../data/site";
import { useReveal } from "../../composables/useReveal";
import orbit from "../../assets/lottie/orbit.json";

export default {
  name: "GraphicsDesign",
  components: { GlobalNav, Footer, PageHero, LottiePlayer, UiIcon },
  setup() {
    const root = ref(null);
    useReveal(root);
    return {
      root, pricing, orbit,
      steps: [
        { title: "Brand Discovery", body: "Values, audience and competitors into a sharp brief." },
{ title: "Concept Development", body: "Multiple directions — pick the brave one." },
{ title: "Refinement", body: "Color, type and lockups perfected with you." },
{ title: "Final Delivery", body: "PNG/SVG/PDF pack plus usage guidelines." },
      ],
    };
  },
  methods: { whatsappUrl },
};
</script>
