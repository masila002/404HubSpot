<template>
  <section id="team" class="team-section section-space">
    <div class="site-container">
      <div class="section-heading">
        <div>
          <span class="eyebrow">THE PEOPLE BEHIND THE PIXELS</span>
          <h2>Real people.<br />Shared ambition.</h2>
        </div>
        <p>
          Developers, designers, and problem-solvers.<br />Tap a card for the full story.
        </p>
      </div>
      <div class="team-grid">
        <router-link
          v-for="member in teamMembers"
          :key="member.id"
          :to="`/team/${member.slug}`"
          class="team-card-link"
          :aria-label="`View ${member.name}'s profile`"
          data-reveal
        >
          <article class="team-card">
            <div class="team-portrait">
              <img
                v-if="portraitSrc(member)"
                :src="portraitSrc(member)"
                :alt="member.name"
                loading="lazy"
                width="400"
                height="440"
                @error="dropPortrait(member)"
              /><span
                v-else
                class="portrait-initials"
                aria-hidden="true"
                >{{
                  member.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                }}</span
              ><span class="team-number">0{{ member.id }}</span>
            </div>
            <div class="team-details">
              <h3>{{ member.name }}</h3>
              <span>{{ member.role }}</span>
              <p>{{ member.focus }}</p>
              <span class="team-more">View profile <span aria-hidden="true">→</span></span>
            </div>
          </article>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { team } from "../../data/site";
export default {
  name: "Teamsection",
  data() {
    return { teamMembers: team, portraitStage: {} };
  },
  methods: {
    // Never blank: local photo → GitHub avatar → initials.
    portraitSrc(member) {
      const candidates = [member.image, member.avatar].filter(Boolean);
      return candidates[Math.min(this.portraitStage[member.id] || 0, candidates.length)] || null;
    },
    dropPortrait(member) {
      this.portraitStage = {
        ...this.portraitStage,
        [member.id]: (this.portraitStage[member.id] || 0) + 1,
      };
    },
  },
};
</script>
