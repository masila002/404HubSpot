export const contact = {
  phone: "254708345963",
  email: "hubspot861@gmail.com",
};

export const whatsappUrl = (message) =>
  `https://wa.me/${contact.phone}?text=${encodeURIComponent(message)}`;

export const services = [
  {
    id: "01",
    icon: "web",
    title: "Web Development",
    description:
      "Fast, thoughtful websites that turn visitors into your next customers.",
    route: "/services/web-development",
    tags: ["Websites", "Web apps"],
    tone: "mint",
  },
  {
    id: "02",
    icon: "code",
    title: "Software Development",
    description:
      "Less busywork. More possibility. Custom tools built around your business.",
    route: "/services/software-development",
    tags: ["Custom systems", "Automation"],
    tone: "sand",
  },
  {
    id: "03",
    icon: "phone",
    title: "Mobile Apps",
    description:
      "Put your business in their pocket with intuitive iOS and Android experiences.",
    route: "/services/mobile-apps",
    tags: ["iOS", "Android"],
    tone: "lilac",
  },
  {
    id: "04",
    icon: "payment",
    title: "M-Pesa Integration",
    description:
      "Connect your business to seamless payments with the Safaricom Daraja API.",
    route: "/services/m-pesa-integration",
    tags: ["Daraja API", "Payments"],
    tone: "mint",
  },
  {
    id: "05",
    icon: "design",
    title: "Graphics Design",
    description:
      "A visual identity that feels like you. Made to stand out and stay consistent.",
    route: "/services/graphics-design",
    tags: ["Brand identity", "Visual design"],
    tone: "rose",
  },
  {
    id: "06",
    icon: "learn",
    title: "Programming Classes",
    description:
      "Go from curious to capable with practical projects and expert mentorship.",
    route: "/programming-classes",
    tags: ["Hands-on learning", "Mentorship"],
    tone: "sand",
  },
];

export const team = [
  {
    id: 1,
    name: "Francis Masila",
    role: "Fullstack Developer & Designer",
    bio: "Fullstack builds with a designer's eye — websites, apps and brand visuals that ship.",
    image: "/assets/frank.jpeg",
    linkedin: "https://linkedin.com/in/francis-masila-34111027b",
    github: "https://github.com/masila002",
  },
  {
    id: 2,
    name: "Don Artkins",
    role: "AI Engineer & System Architect",
    bio: "AI systems, APIs and architecture — from data model to deployment.",
    image: null,
    linkedin: "https://linkedin.com/in/donartkins",
    github: "https://github.com/DonArtkins",
  },
  {
    id: 3,
    name: "Eric Njuki",
    role: "UI/UX Designer",
    bio: "Creating beautiful and intuitive user experiences.",
    image: null,
    linkedin: "https://linkedin.com/in/ericnjuki",
    github: "https://github.com/Ericnjuki254",
  },
  {
    id: 4,
    name: "Christine Jemutai",
    role: "Frontend Developer",
    bio: "Passionate about frontend development.",
    image: "/assets/chemuu.jpeg",
    linkedin: "https://linkedin.com/in/christine kibet",
    github: "https://github.com/chemuu933",
  },
  {
    id: 5,
    name: "Glory Kinya",
    role: "Fullstack Developer & Graphic Designer",
    bio: "Fullstack development plus graphic design — product and identity together.",
    image: null,
    linkedin: "",
    github: "",
  },
];

// Provisional Kenya/Africa price bands to stop undercharging.
// Status 2026-09-30: web search integration returned no results, so these bands
// are OWNER-REVIEW REQUIRED (spec 02 gate). They lift current site prices toward
// Nairobi agency norms; do not present as quotes — WhatsApp inquiry confirms scope.
export const pricing = {
  web: [
    { name: "Launch Landing Page", range: "KES 45,000 – 85,000", blurb: "One sharp page, copy polish, contact + WhatsApp, SEO basics.", features: ["Single page design", "Mobile responsive", "SEO optimized", "Contact + WhatsApp integration"], cta: "I'm interested in a Landing Page", featured: false },
    { name: "Business Website", range: "KES 95,000 – 250,000", blurb: "5–10 pages with CMS, blog and analytics. Most popular.", features: ["5–10 pages", "Content management system", "Blog functionality", "Social + analytics integration"], cta: "I'm interested in a Business Website", featured: true, badge: "POPULAR" },
    { name: "E-Commerce", range: "KES 250,000+", blurb: "Catalog, cart, M-Pesa checkout and admin dashboard.", features: ["Product catalog & inventory", "Cart & M-Pesa checkout", "Order management", "Admin dashboard"], cta: "I'm interested in an E-Commerce website", featured: false },
  ],
  software: [
    { name: "Small Business System", range: "KES 280,000 – 650,000", blurb: "Internal tools, automation and reports.", features: ["Core modules & roles", "Up to 3 months delivery", "User training", "3 months support"], cta: "I'm interested in Small Business Software", featured: false },
    { name: "Enterprise Platform", range: "KES 650,000+", blurb: "Scalable architecture, integrations and security.", features: ["Custom features & integrations", "Scalable architecture", "Advanced security", "Dedicated PM + maintenance"], cta: "I'm interested in Enterprise Software", featured: true, badge: "ENTERPRISE" },
  ],
  mobile: [
    { name: "Basic App", range: "KES 400,000 – 700,000", blurb: "Single platform, clean UI, store submission.", features: ["Simple UI/UX", "Core features", "Single platform", "Store submission"], cta: "I'm interested in a Basic Mobile App", featured: false },
    { name: "Cross-Platform App", range: "KES 750,000 – 1,500,000", blurb: "iOS + Android, backend, M-Pesa and push.", features: ["iOS & Android", "Backend integration", "M-Pesa payments", "Push notifications"], cta: "I'm interested in a Cross-Platform Mobile App", featured: true, badge: "POPULAR" },
    { name: "Enterprise App", range: "KES 1,500,000+", blurb: "Complex integrations, admin and hardening.", features: ["Custom features", "Complex integrations", "Admin dashboard", "Advanced security + maintenance"], cta: "I'm interested in an Enterprise Mobile App", featured: false },
  ],
  mpesa: [
    { name: "STK Push Starter", range: "KES 80,000 – 150,000", blurb: "Lipa na M-Pesa with callbacks and sandbox testing.", features: ["STK Push", "Payment callbacks", "Sandbox testing", "Go-live assistance"], cta: "I'm interested in Basic M-Pesa Integration", featured: false },
    { name: "Full Daraja Suite", range: "KES 160,000+", blurb: "STK + B2C/B2B, balance, status queries and webhooks.", features: ["STK, B2C, B2B", "Balance + status APIs", "Webhook management", "Monitoring + support"], cta: "I'm interested in Full M-Pesa Integration", featured: true, badge: "COMPLETE" },
  ],
  graphics: [
    { name: "Logo Design", range: "KES 25,000 – 55,000", blurb: "Concepts, revisions and full file pack.", features: ["3 initial concepts", "2 revision rounds", "PNG/SVG/PDF pack", "Color variations"], cta: "I'm interested in Logo Design", featured: false },
    { name: "Brand Identity", range: "KES 85,000 – 200,000", blurb: "Logo, stationery, guidelines and social kit.", features: ["Logo + stationery", "Brand guidelines", "Business cards", "Social templates"], cta: "I'm interested in Brand Identity Design", featured: true, badge: "POPULAR" },
    { name: "Marketing Pack", range: "KES 35,000+", blurb: "Flyers, socials, banners and email headers.", features: ["Flyers & brochures", "Social graphics", "Banners", "Email templates"], cta: "I'm interested in Marketing Materials Design", featured: false },
  ],
  classes: [
    { name: "Python", range: "KES 18,000 / level", blurb: "Data, automation and first portfolio scripts.", cta: "I'd like to join the Python Class" },
    { name: "JavaScript", range: "KES 20,000 / level", blurb: "Fullstack web — from pages to APIs.", cta: "I'd like to join the JavaScript Class" },
    { name: "SQL", range: "KES 15,000 / level", blurb: "Databases, queries and reporting.", cta: "I'd like to join the SQL Class" },
    { name: "Scratch", range: "KES 12,000 / level", blurb: "Logic-first start for young beginners.", cta: "I'd like to join the Scratch Class" },
  ],
};
