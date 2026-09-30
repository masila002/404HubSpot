<template>
  <article class="service-card" :class="`tone-${service.tone}`">
    <div class="service-card-top">
      <span class="service-icon"><UiIcon :name="service.icon" /></span
      ><span class="card-index">/ {{ service.id }}</span>
    </div>
    <h3>
      <router-link :to="service.route"
        >{{ service.title }}<UiIcon name="diagonal"
      /></router-link>
    </h3>
    <p>{{ service.description }}</p>
    <div class="service-card-bottom">
      <div class="tag-list">
        <span v-for="tag in service.tags" :key="tag">{{ tag }}</span>
      </div>
      <a
        :href="whatsappUrl(`I'm interested in ${service.title}.`)"
        :aria-label="`Discuss ${service.title} on WhatsApp`"
        target="_blank"
        rel="noopener noreferrer"
        class="card-consult"
        ><UiIcon name="arrow"
      /></a>
    </div>
  </article>
</template>
<script>
import UiIcon from "./UiIcon.vue";
import { whatsappUrl } from "../data/site";
export default {
  name: "ServiceCard",
  components: { UiIcon },
  props: { service: { type: Object, required: true } },
  methods: { whatsappUrl },
};
</script>
