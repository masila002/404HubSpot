<template>
  <section id="team" class="team-section section-space">
    <div class="site-container">
      <div class="section-heading">
        <div>
          <span class="eyebrow">THE PEOPLE BEHIND THE PIXELS</span>
          <h2>Real people.<br />Shared ambition.</h2>
        </div>
        <p>
          Developers, designers, and problem-solvers.<br />Your next idea is in
          good company.
        </p>
      </div>
      <div class="team-grid">
        <article
          v-for="member in teamMembers"
          :key="member.id"
          class="team-card"
        >
          <div class="team-portrait">
            <img
              v-if="member.image"
              :src="member.image"
              :alt="member.name"
              loading="lazy"
              width="400"
              height="440"
            /><span
              v-else
              class="portrait-initials"
              :aria-label="`${member.name}, portrait coming soon`"
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
            <p>{{ member.bio }}</p>
            <div class="team-links">
              <a
                v-if="member.github"
                :href="member.github"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`${member.name} on GitHub`"
                >GitHub ↗</a
              ><a
                v-if="member.linkedin"
                :href="member.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`${member.name} on LinkedIn`"
                >LinkedIn ↗</a
              >
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Teamsection",
  data() {
    return {
      teamMembers: [
        {
          id: 1,
          name: "Francis Masila",
          role: "Fullstack Developer",
          bio: "Passionate about technology and problem-solving.",
          image: "/assets/frank.jpeg", // Replace with actual image path
          linkedin: "https://linkedin.com/in/francis-masila-34111027b",
          github: "https://github.com/masila002",
        },
        {
          id: 2,
          name: "Don Artkins",
          role: "Fullstack Developer",
          bio: "Full-stack developer specializing in modern web technologies.",
          image: null, // Replace with actual image path
          linkedin: "https://linkedin.com/in/donartkins",
          twitter: "",
          github: "https://github.com/DonArtkins",
        },
        {
          id: 3,
          name: "Eric Njuki",
          role: "UI/UX Designer",
          bio: "Creating beautiful and intuitive user experiences.",
          image: null, // Replace with actual image path
          linkedin: "https://linkedin.com/in/ericnjuki",
          github: "https://github.com/Ericnjuki254",
        },
        {
          id: 4,
          name: "Christine Jemutai",
          role: "Frontend Developer",
          bio: "Passionate about frontend development.",
          image: "/assets/chemuu.jpeg", // Replace with actual image path
          linkedin: "https://linkedin.com/in/christine kibet",
          github: "https://github.com/chemuu933",
        },
      ],
    };
  },
};
</script>
