<template>
  <div class="page-shell landing-page" ref="root">
    <GlobalNav />
    <main id="main-content" tabindex="-1" v-if="member">
      <section class="site-container profile-hero" data-hero>
        <router-link to="/#team" class="text-action profile-back"><UiIcon name="arrow" class="flip" /> Back to team</router-link>
        <div class="profile-head">
          <div class="team-portrait profile-portrait">
            <img v-if="portraitSrc" :src="portraitSrc" :alt="member.name" width="400" height="440" loading="lazy" @error="stage++" />
            <span v-else class="portrait-initials" aria-hidden="true">{{ initials }}</span>
            <span class="team-number">0{{ member.id }}</span>
          </div>
          <div class="hero-copy">
            <span class="hero-kicker"><span class="status-dot"></span> {{ member.role.toUpperCase() }}</span>
            <h1>{{ member.name }}</h1>
            <p>{{ member.bio }}</p>
            <div class="profile-meta">
              <span v-if="member.location">📍 {{ member.location }}</span>
              <span>★ {{ member.stats.followers }} followers</span>
              <span>▤ {{ member.stats.repos }} public repos</span>
            </div>
            <div class="hero-actions">
              <a :href="member.github" target="_blank" rel="noopener noreferrer" class="action action-dark" data-magnetic>GitHub <UiIcon name="diagonal" /></a>
              <a v-if="member.linkedin" :href="member.linkedin" target="_blank" rel="noopener noreferrer" class="text-action">LinkedIn <UiIcon name="arrow" /></a>
              <a v-if="member.portfolio" :href="member.portfolio" target="_blank" rel="noopener noreferrer" class="text-action">Portfolio <UiIcon name="arrow" /></a>
            </div>
          </div>
        </div>
      </section>

      <section class="site-container" data-reveal>
        <div class="detail-grid">
          <div class="panel-card" data-reveal>
            <span class="eyebrow">FOCUS AREAS</span>
            <div class="tag-list" style="margin-top:14px">
              <span v-for="s in member.skills" :key="s">{{ s }}</span>
            </div>
            <span class="eyebrow" style="margin-top:22px">TOP LANGUAGES</span>
            <div class="tag-list" style="margin-top:14px">
              <span v-for="l in member.languages" :key="l">{{ l }}</span>
            </div>
          </div>
          <div class="panel-card" data-reveal>
            <span class="eyebrow">WORK WITH {{ member.name.split(" ")[0].toUpperCase() }}</span>
            <h2 style="margin-top:10px">Have something to build?</h2>
            <p style="color:var(--site-muted);font-size:13px;margin-top:10px">Tell us the idea — {{ member.name.split(" ")[0] }} and the team reply within 24 hours.</p>
            <div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:18px">
              <a :href="whatsappUrl(`Hello 404HubSpot, I'd like to work with ${member.name}.`)" target="_blank" rel="noopener noreferrer" class="action action-dark" data-magnetic>WhatsApp <UiIcon name="diagonal" /></a>
              <router-link to="/contact" class="text-action">Contact form <UiIcon name="arrow" /></router-link>
            </div>
          </div>
        </div>
      </section>

      <section class="section-space site-container" data-reveal>
        <div class="section-heading">
          <div><span class="eyebrow">OPEN SOURCE — SNAPSHOT 2026-09-30</span><h2>Selected <span class="muted-heading">repositories.</span></h2></div>
          <p>Live on GitHub at <a :href="member.github" target="_blank" rel="noopener noreferrer" style="color:var(--site-brand)">@{{ member.githubUser }}</a>. Counts drift — check the profile for now.</p>
        </div>
        <div class="services-grid">
          <article v-for="r in member.repos" :key="r.url" class="service-card" data-reveal>
            <div class="service-card-top"><span class="service-icon"><UiIcon name="code" /></span><span class="card-index">★ {{ r.stars }}</span></div>
            <h3><a :href="r.url" target="_blank" rel="noopener noreferrer">{{ r.name }} <UiIcon name="diagonal" /></a></h3>
            <p>{{ r.desc }}</p>
            <div class="service-card-bottom"><div class="tag-list"><span v-if="r.lang">{{ r.lang }}</span><span>Open source</span></div></div>
          </article>
        </div>
      </section>

      <section class="site-container" data-reveal style="padding-bottom: 88px">
        <div class="panel-card" style="display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap">
          <router-link v-if="prev" :to="`/team/${prev.slug}`" class="text-action">← {{ prev.name }}</router-link>
          <span v-else></span>
          <router-link v-if="next" :to="`/team/${next.slug}`" class="text-action">{{ next.name }} →</router-link>
        </div>
      </section>
    </main>
    <main id="main-content" tabindex="-1" v-else>
      <div class="site-container" style="padding-block: 88px">
        <h1>Profile not found.</h1>
        <router-link to="/#team" class="text-action">Back to team</router-link>
      </div>
    </main>
    <Footer />
  </div>
</template>
<script>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
import GlobalNav from "../components/GlobalNav.vue";
import Footer from "../components/Footer.vue";
import UiIcon from "../components/UiIcon.vue";
import { team, whatsappUrl } from "../data/site";
import { useReveal, useMagnetic } from "../composables/useReveal";

export default {
  name: "TeamDetail",
  components: { GlobalNav, Footer, UiIcon },
  setup() {
    const root = ref(null);
    const route = useRoute();
    useReveal(root);
    useMagnetic(root);
    const idx = computed(() => team.findIndex((m) => m.slug === route.params.slug));
    const member = computed(() => team[idx.value] ?? null);
    const initials = computed(() =>
      (member.value?.name ?? "").split(" ").map((p) => p[0]).join(""),
    );
    const prev = computed(() => (idx.value > 0 ? team[idx.value - 1] : null));
    const next = computed(() =>
      idx.value >= 0 && idx.value < team.length - 1 ? team[idx.value + 1] : null,
    );
    // Never blank: local photo → GitHub avatar → initials; reset per profile.
    const stage = ref(0);
    const portraitSrc = computed(() => {
      if (!member.value) return null;
      const candidates = [member.value.image, member.value.avatar].filter(Boolean);
      return candidates[Math.min(stage.value, candidates.length)] || null;
    });
    watch(
      () => route.params.slug,
      () => {
        stage.value = 0;
      },
    );
    return { root, member, initials, prev, next, stage, portraitSrc };
  },
  methods: { whatsappUrl },
};
</script>
