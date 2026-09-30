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
