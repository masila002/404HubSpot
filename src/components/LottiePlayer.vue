<template>
  <div
    class="lottie-wrap"
    :aria-label="label"
    role="img"
  >
    <div ref="stage" class="lottie-stage"></div>
    <p v-if="caption" class="lottie-caption">{{ caption }}</p>
  </div>
</template>
<script>
export default {
  name: "LottiePlayer",
  props: {
    animationData: { type: Object, required: true },
    label: { type: String, default: "Decorative animation" },
    caption: { type: String, default: "" },
    loop: { type: Boolean, default: true },
    autoplay: { type: Boolean, default: true },
  },
  data() {
    return { anim: null };
  },
  async mounted() {
    try {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const lottie = (await import("lottie-web")).default;
      this.anim = lottie.loadAnimation({
        container: this.$refs.stage,
        renderer: "svg",
        loop: this.loop,
        autoplay: this.autoplay,
        animationData: this.animationData,
      });
    } catch (e) {
      console.warn("[lottie] placeholder skipped:", e?.message || e);
    }
  },
  beforeUnmount() {
    this.anim?.destroy();
    this.anim = null;
  },
};
</script>
