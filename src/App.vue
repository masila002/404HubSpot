<template>
  <div id="app">
    <router-view v-slot="{ Component, route }">
      <transition
        :css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
        mode="out-in"
      >
        <component :is="Component" :key="route.fullPath" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import { gsap } from "gsap";

const reduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default {
  name: "App",
  methods: {
    beforeEnter(el) {
      if (!reduced()) gsap.set(el, { autoAlpha: 0, y: 18 });
    },
    enter(el, done) {
      if (reduced()) return done();
      gsap.to(el, { autoAlpha: 1, y: 0, duration: 0.45, ease: "power3.out", onComplete: done, overwrite: "auto" });
    },
    leave(el, done) {
      if (reduced()) return done();
      gsap.to(el, { autoAlpha: 0, y: -12, duration: 0.25, ease: "power2.in", onComplete: done, overwrite: "auto" });
    },
  },
};
</script>
