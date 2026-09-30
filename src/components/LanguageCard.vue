<template>
  <article class="service-card tone-sand" data-reveal>
    <div class="service-card-top">
      <span class="service-icon"><UiIcon name="learn" /></span
      ><span class="card-index">/ {{ language.id }}</span>
    </div>
    <h3>{{ language.name }}</h3>
    <p>{{ language.description }} — {{ language.range }}</p>
    <div class="service-card-bottom">
      <div class="tag-list">
        <span>{{ language.range }}</span>
      </div>
      <a
        :href="whatsappUrl(language.cta)"
        target="_blank"
        rel="noopener noreferrer"
        class="card-consult"
        :aria-label="`Join ${language.name} on WhatsApp`"
        ><UiIcon name="arrow"
      /></a>
    </div>
  </article>
</template>

<script>
import UiIcon from './UiIcon.vue'
import { whatsappUrl } from '../data/site'

export default {
  name: 'LanguageCard',
  components: { UiIcon },
  props: {
    language: { type: Object, required: true }
  },
  methods: { whatsappUrl }
}
</script>
