<template>
  <section class="page-hero site-container" data-hero>
    <div class="hero-copy">
      <span class="hero-kicker"><span class="status-dot"></span> {{ kicker }}</span>
      <h1 v-html="title"></h1>
      <p>{{ lede }}</p>
      <div class="hero-actions" v-if="$slots.actions">
        <slot name="actions"></slot>
      </div>
    </div>
    <div class="hero-art" v-if="$slots.art">
      <slot name="art"></slot>
    </div>
  </section>
</template>
<script>
export default {
  name: "PageHero",
  props: {
    kicker: { type: String, required: true },
    title: { type: String, required: true },
    lede: { type: String, required: true },
  },
};
</script>
