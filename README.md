# 404HubSpot - Expert Digital Solutions & Tech Training

A professional, SEO-ready static website built with Vue.js and Tailwind CSS, optimized for lead generation via WhatsApp and email.

## Features

- 🚀 **Fast & Mobile-Friendly**: Optimized for speed and mobile devices
- 📱 **WhatsApp Integration**: Custom URL parameters for lead tracking
- 🎨 **Modern Design**: Warm light landing page, dark teal actions, responsive service cards
- 🔍 **SEO Optimized**: Proper meta tags, semantic HTML, and alt text
- 📧 **Contact Forms**: Formspree integration for email lead capture

## Tech Stack

- **Framework**: Vue.js 3
- **Styling**: Tailwind CSS
- **Routing**: Vue Router
- **Deployment**: Vercel/Netlify ready

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure WhatsApp Number**
   - Replace `254700000000` in all components with your actual WhatsApp number
   - Format: country code + number (e.g., `254712345678` for Kenya)

3. **Configure Formspree**
   - Sign up at [Formspree.io](https://formspree.io)
   - Replace `YOUR_FORM_ID` in `src/views/Contact.vue` with your Formspree form ID

4. **Add Logo**
   - Place your logo image in the `public/assets/` directory as `logo.png`
   - Or update the logo path in `src/components/GlobalNav.vue`

5. **Configure Google Meet Link**
   - Replace the Google Meet URL in `src/views/Contact.vue` with your actual meeting link

6. **Development**
   ```bash
   npm run dev
   ```

7. **Build for Production**
   ```bash
   npm run build
   ```

## Deployment

### Vercel
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify
1. Push your code to GitHub
2. Import project in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

## Pages Structure

- **Homepage** (`/`): Hero section, Services Bento-Grid, M-Pesa Expert Ribbon, Our Process
- **Programming Classes** (`/programming-classes`): Language cards, class format details
- **Contact** (`/contact`): Direct contact info and lead capture form

## Customization

### Colors
The landing page and shared navigation/footer use `src/styles/landing.css`; see
`project-kit/context/ui-tokens.md`. Legacy detail pages still use the original Tailwind palette.

Edit `tailwind.config.js` to adjust the color scheme:
- `peach`: Soft Peach color
- `teal`: Dark Teal color

### WhatsApp Messages
All WhatsApp links use custom URL parameters. Update the `whatsappText` values in components to customize pre-filled messages.

## SEO Checklist

- ✅ Title tags configured
- ✅ Meta descriptions added
- ✅ Semantic HTML structure (H1, H2 tags)
- ✅ Alt text for images
- ✅ Mobile-responsive design
- ✅ Fast loading times

## License

© 2024 404HubSpot. All rights reserved.


## Project workflow and redesign roadmap

Start with [AGENTS.md](AGENTS.md) and [the documentation map](docs/README.md).
The baseline workflow was attached through its existing-project generator; it preserved existing
source, manifests, lockfile and hosting configuration. Runtime changes implement feature 01 only.

- [33 feature specs](project-kit/feature-specs/README.md) and [execution roadmap](docs/planning/IMPLEMENTATION-ROADMAP.md)
- [Full-stack architecture](docs/architecture/SYSTEM-DESIGN.md): frontend, backend/data, AI, MCP and infrastructure staged by need
- [Design system and editable board](docs/design/MASTER-DESIGN-SYSTEM.md), [copied inspiration](inspo/README.md)
- [Delivery tracker](project-kit/context/progress-tracker.md) and [known issues](bugs/INDEX.md)

One feature per branch from current GitHub main. Future backend/AI/MCP and portfolio-detail
features are planned, not shipped. Mobile and microservices require evidence before adoption.
