<template>
  <div class="page-shell landing-page" ref="root">
    <GlobalNav />
    <main id="main-content" tabindex="-1">
      <PageHero
        kicker="PROCESS — WHAT IF TO WHAT'S NEXT"
        title="A clear path. <em>From first call to launch.</em>"
        lede="Consultation to support in seven steps — with 50% to start and 50% on delivery."
      >
        <template #actions>
          <router-link to="/contact" class="action action-dark">Start a project <UiIcon name="diagonal" /></router-link>
          <a :href="whatsappUrl(`Hello 404HubSpot, walk me through your process.`)" target="_blank" rel="noopener noreferrer" class="text-action">Chat first <UiIcon name="arrow" /></a>
        </template>
        <template #art>
          <div class="hero-art">
            <div class="preview-grid"></div>
            <div class="payment-flow" style="padding: 28px">
              <div class="flow-top"><span>YOUR IDEA</span><UiIcon name="spark" /></div>
              <div class="flow-connector">↓</div>
              <div class="flow-center"><span class="status-dot"></span><b>404HubSpot</b><span>7 steps</span><UiIcon name="check" /></div>
              <div class="flow-connector">↓</div>
              <div class="flow-bottom"><UiIcon name="web" /><span>Launched.<br /><b>Supported.</b></span><UiIcon name="spark" /></div>
            </div>
          </div>
        </template>
      </PageHero>

      <section class="section-space site-container" data-reveal>
        <div class="panel-card" style="background: var(--site-dark); color: var(--site-inverse); border-color: var(--site-dark)">
          <span class="eyebrow" style="color: var(--site-lime)">PAYMENT TERMS</span>
          <h2 style="margin-top:10px">50% to begin. 50% on delivery.</h2>
          <p style="color:#c1cec5;font-size:13px;margin-top:10px">Commitment both ways — transparent, no hidden fees.</p>
        </div>
      </section>

      <section class="section-space site-container" data-reveal>
        <div class="process-timeline">
          <div v-for="(s, i) in steps" :key="s.title" class="process-row" data-reveal>
            <span class="process-num">{{ i + 1 }}</span>
            <div><h3>{{ s.title }}</h3><p style="color:var(--site-muted);font-size:13px;line-height:1.8;margin-top:8px">{{ s.body }}</p>
            <ul v-if="s.points" style="margin:10px 0 0 18px;color:var(--site-muted);font-size:12px;display:grid;gap:6px"><li v-for="pt in s.points" :key="pt">{{ pt }}</li></ul></div>
          </div>
        </div>
      </section>

      <section class="closing-section site-container" data-reveal>
        <div class="closing-card">
          <span class="eyebrow">READY TO START?</span>
          <h2>Let's move your idea <span>forward.</span></h2>
          <div>
            <router-link to="/contact" class="action action-dark">Get started <UiIcon name="diagonal" /></router-link>
            <a :href="whatsappUrl(`Hello 404HubSpot, I'd like to start.`)" target="_blank" rel="noopener noreferrer" class="text-action">WhatsApp us <UiIcon name="arrow" /></a>
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
import GlobalNav from "../components/GlobalNav.vue";
import Footer from "../components/Footer.vue";
import PageHero from "../components/PageHero.vue";
import UiIcon from "../components/UiIcon.vue";
import { whatsappUrl } from "../data/site";
import { useReveal } from "../composables/useReveal";

export default {
  name: "OurProcess",
  components: { GlobalNav, Footer, PageHero, UiIcon },
  setup() {
    const root = ref(null);
    useReveal(root);
    return {
      root,
      steps: [
        { title: "Consultation & Discovery", body: "Vision, users, scope and budget into a roadmap.", points: ["Goals & audience", "Competitor scan", "Tech & timeline fit"] },
        { title: "Proposal & Agreement", body: "Fixed scope, milestones and 50/50 terms in writing.", points: ["50% to start", "50% on delivery", "No hidden fees"] },
        { title: "Planning & Design", body: "Wireframes, mockups and stack decisions with your sign-off." },
        { title: "Development", body: "Sprints with demos — clean code, your feedback live." },
        { title: "Testing & QA", body: "Devices, browsers, speed, security and UAT." },
        { title: "Delivery", body: "Code, docs, deploy and team training." },
        { title: "Support", body: "30-day fixes plus care plans as you grow." },
      ],
    };
  },
  methods: { whatsappUrl },
};
</script>
