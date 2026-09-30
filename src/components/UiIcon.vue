<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.6"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path v-for="(path, index) in paths" :key="index" :d="path" />
  </svg>
</template>
<script>
const icons = {
  arrow: ["M5 12h14", "m13 6 6 6-6 6"],
  diagonal: ["M6 18 18 6", "M6 6h12v12"],
  chevron: ["m6 9 6 6 6-6"],
  close: ["m6 6 12 12", "M6 18 18 6"],
  menu: ["M4 7h16M4 12h16M4 17h16"],
  web: ["M4 4h16v16H4z", "M4 9h16M8 6.5h.01M11 6.5h.01"],
  code: ["m8 7-5 5 5 5", "m16 7 5 5-5 5", "m14 4-4 16"],
  phone: ["M7 2h10v20H7z", "M10 5h4M11 19h2"],
  payment: ["M3 5h18v14H3z", "M3 10h18M7 15h3"],
  design: ["m12 3 9 9-9 9-9-9z", "M12 3v18M3 12h18"],
  learn: ["m2 9 10-5 10 5-10 5z", "M6 11v6c4 3 8 3 12 0v-6M22 9v7"],
  check: ["m5 12 4 4L19 6"],
  spark: ["m12 2 2.6 7.4L22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6z"],
};
export default {
  name: "UiIcon",
  props: { name: { type: String, default: "arrow" } },
  computed: {
    paths() {
      return icons[this.name] || icons.arrow;
    },
  },
};
</script>
