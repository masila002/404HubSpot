<template>
  <div class="page-shell landing-page">
    <GlobalNav />
    <main id="main-content" ref="root" tabindex="-1">
      <div class="site-container" style="padding-block: 72px 88px">
        <div class="auth-wrap" data-hero>
          <span class="hero-kicker"><span class="status-dot"></span> WELCOME BACK</span>
          <h1 style="font-size: clamp(38px, 4.5vw, 56px)">Sign in to <em style="color: var(--site-brand); font-style: italic">404HubSpot.</em></h1>
          <p style="color: var(--site-muted); margin-top: 16px; font-size: 14px; line-height: 1.8">
            Clients sign in to follow inquiries, classes and project updates.
          </p>
        </div>
        <div class="auth-wrap" style="margin-top: 28px" data-reveal>
          <div class="auth-card">
            <div v-if="clerkReady">
              <Suspense>
                <template #default>
                  <SignInComponent routing="path" path="/sign-in" sign-up-url="/sign-up" />
                </template>
                <template #fallback>
                  <p style="font-size: 13px; color: var(--site-muted)">Loading secure sign-in…</p>
                </template>
              </Suspense>
            </div>
            <div v-else>
              <span class="eyebrow">DEMO MODE — ADD KEY TO GO LIVE</span>
              <h2 style="margin: 12px 0">Clerk demo shell</h2>
              <p style="font-size: 13px; color: var(--site-muted); line-height: 1.8">
                Set <code>VITE_CLERK_PUBLISHABLE_KEY</code> in <code>.env</code> (see
                <code>.env.example</code>) and restart. This card keeps landing spacing,
                radius and actions so the real Clerk form drops in unchanged.
              </p>
              <div class="form-row" style="margin-top: 18px">
                <label for="demo-email">Email</label>
                <input id="demo-email" type="email" placeholder="you@example.com" disabled />
              </div>
              <div class="form-row">
                <label for="demo-pass">Password</label>
                <input id="demo-pass" type="password" placeholder="••••••••" disabled />
              </div>
              <span class="action action-dark" style="width: 100%; opacity: 0.6">Continue (demo)</span>
              <p style="margin-top: 14px; font-size: 12px">
                New here? <router-link to="/sign-up" class="text-action" style="display:inline-flex">Create an account</router-link>
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
import { ref } from "vue";
import GlobalNav from "../../components/GlobalNav.vue";
import Footer from "../../components/Footer.vue";
import { useReveal } from "../../composables/useReveal";
import { defineAsyncComponent } from "vue";

export default {
  name: "SignIn",
  components: {
    GlobalNav,
    Footer,
    SignInComponent: defineAsyncComponent(async () => {
      if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) throw new Error("demo");
      const m = await import("@clerk/vue");
      return m.SignIn;
    }),
  },
  setup() {
    const root = ref(null);
    useReveal(root);
    return { root, clerkReady: Boolean(import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) };
  },
  errorCaptured() {
    return false;
  },
};
</script>
