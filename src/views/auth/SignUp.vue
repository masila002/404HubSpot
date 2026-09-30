<template>
  <div class="page-shell landing-page">
    <GlobalNav />
    <main id="main-content" ref="root" tabindex="-1">
      <div class="site-container" style="padding-block: 72px 88px">
        <div class="auth-wrap" data-hero>
          <span class="hero-kicker"><span class="status-dot"></span> JOIN 404HUBSPOT</span>
          <h1 style="font-size: clamp(38px, 4.5vw, 56px)">Create your <em style="color: var(--site-brand); font-style: italic">account.</em></h1>
          <p style="color: var(--site-muted); margin-top: 16px; font-size: 14px; line-height: 1.8">
            One account for inquiries, class bookings and project follow-ups.
          </p>
        </div>
        <div class="auth-wrap" style="margin-top: 28px" data-reveal>
          <div class="auth-card">
            <div v-if="clerkReady">
              <Suspense>
                <template #default>
                  <SignUpComponent routing="path" path="/sign-up" sign-in-url="/sign-in" />
                </template>
                <template #fallback>
                  <p style="font-size: 13px; color: var(--site-muted)">Loading secure sign-up…</p>
                </template>
              </Suspense>
            </div>
            <div v-else>
              <span class="eyebrow">DEMO MODE — ADD KEY TO GO LIVE</span>
              <h2 style="margin: 12px 0">Clerk demo shell</h2>
              <p style="font-size: 13px; color: var(--site-muted); line-height: 1.8">
                Set <code>VITE_CLERK_PUBLISHABLE_KEY</code> and restart. Real sign-up
                renders here with identical spacing and actions.
              </p>
              <div class="form-row" style="margin-top: 18px">
                <label for="su-name">Full name</label>
                <input id="su-name" type="text" placeholder="June Chemuu" disabled />
              </div>
              <div class="form-row">
                <label for="su-email">Email</label>
                <input id="su-email" type="email" placeholder="you@example.com" disabled />
              </div>
              <span class="action action-dark" style="width: 100%; opacity: 0.6">Create account (demo)</span>
              <p style="margin-top: 14px; font-size: 12px">
                Have an account? <router-link to="/sign-in" class="text-action" style="display:inline-flex">Sign in</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>
<script>
import { ref, defineAsyncComponent } from "vue";
import GlobalNav from "../../components/GlobalNav.vue";
import Footer from "../../components/Footer.vue";
import { useReveal } from "../../composables/useReveal";

export default {
  name: "SignUp",
  components: {
    GlobalNav,
    Footer,
    SignUpComponent: defineAsyncComponent(async () => {
      if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) throw new Error("demo");
      const m = await import("@clerk/vue");
      return m.SignUp;
    }),
  },
  setup() {
    const root = ref(null);
    useReveal(root);
    return { root, clerkReady: Boolean(import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) };
  },
};
</script>
