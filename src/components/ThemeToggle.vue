<template>
  <div
    class="theme-toggle"
    role="group"
    aria-label="Color theme"
    :title="`Theme: ${mode}`"
  >
    <button
      v-for="opt in options"
      :key="opt.value"
      type="button"
      class="theme-btn"
      :class="{ 'is-active': mode === opt.value }"
      :aria-pressed="mode === opt.value"
      :aria-label="`${opt.label} theme`"
      :title="opt.label"
      @click="setMode(opt.value)"
    >
      <UiIcon :name="opt.icon" />
    </button>
  </div>
</template>
<script>
import UiIcon from "./UiIcon.vue";

const KEY = "hubspot-theme";
const META = () => document.querySelector('meta[name="theme-color"]');

function systemDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function currentTheme() {
  const saved = localStorage.getItem(KEY) || "system";
  return saved === "system" ? (systemDark() ? "dark" : "light") : saved;
}

export function applyTheme() {
  const theme = currentTheme();
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  if (META()) META().setAttribute("content", theme === "dark" ? "#0d1411" : "#203b36");
}

export default {
  name: "ThemeToggle",
  components: { UiIcon },
  data() {
    return {
      mode: "system",
      options: [
        { value: "light", label: "Light", icon: "sun" },
        { value: "system", label: "System", icon: "system" },
        { value: "dark", label: "Dark", icon: "moon" },
      ],
      media: null,
    };
  },
  methods: {
    setMode(value) {
      this.mode = value;
      localStorage.setItem(KEY, value);
      applyTheme();
    },
    sync() {
      this.mode = localStorage.getItem(KEY) || "system";
      applyTheme();
    },
    onSystemChange() {
      if ((localStorage.getItem(KEY) || "system") === "system") applyTheme();
    },
  },
  mounted() {
    this.sync();
    this.media = window.matchMedia("(prefers-color-scheme: dark)");
    this.media.addEventListener("change", this.onSystemChange);
  },
  beforeUnmount() {
    this.media?.removeEventListener("change", this.onSystemChange);
  },
};
</script>
