# Quick Start Guide - 404HubSpot Website

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Your Settings

Before running the site, update these values:

#### WhatsApp Number
Replace `254700000000` in these files:
- `src/components/GlobalNav.vue`
- `src/components/Footer.vue`
- `src/components/ServiceCard.vue`
- `src/components/LanguageCard.vue`
- `src/views/Home.vue`
- `src/views/ProgrammingClasses.vue`
- `src/views/Contact.vue`

**Format**: Country code + number (e.g., `254712345678` for Kenya)

#### Formspree Form ID
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Replace `YOUR_FORM_ID` in `src/views/Contact.vue` with your form ID

#### Google Meet Link
Replace the Google Meet URL in `src/views/Contact.vue` with your actual meeting link.

### 3. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:5173` to see your site.

### 4. Build for Production
```bash
npm run build
```

The `dist` folder will contain your production-ready files.

## 📁 Project Structure

```
404Hubspot/
├── public/
│   └── assets/
│       └── logo.png          # Your logo image
├── src/
│   ├── components/
│   │   ├── GlobalNav.vue     # Navigation header
│   │   ├── Footer.vue        # Footer component
│   │   ├── ServiceCard.vue   # Service card component
│   │   └── LanguageCard.vue # Language card component
│   ├── views/
│   │   ├── Home.vue          # Homepage
│   │   ├── ProgrammingClasses.vue
│   │   └── Contact.vue
│   ├── router/
│   │   └── index.js          # Vue Router configuration
│   ├── App.vue
│   ├── main.js
│   └── style.css             # Tailwind CSS imports
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change colors:
- `peach`: Soft Peach (#FFB6A0)
- `teal`: Dark Teal (#2D7D7D)

### Content
- **Services**: Edit the `services` array in `src/views/Home.vue`
- **Languages**: Edit the `languages` array in `src/views/ProgrammingClasses.vue`
- **WhatsApp Messages**: Customize the `whatsappText` values in components

## 📱 WhatsApp Integration

All WhatsApp links use custom URL parameters. When a user clicks, WhatsApp opens with a pre-filled message, making it easy to track leads.

Example:
```javascript
whatsappUrl('I%27m_interested_in_Web_Development')
// Opens: wa.me/254712345678?text=I'm_interested_in_Web_Development
```

## 🌐 Deployment

### Vercel
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify
1. Push code to GitHub
2. Import project in Netlify
3. Build settings are already configured in `netlify.toml`

## ✅ SEO Checklist

- ✅ Title tags configured in `index.html`
- ✅ Meta descriptions added
- ✅ Semantic HTML (H1, H2 tags)
- ✅ Alt text for logo image
- ✅ Mobile-responsive design
- ✅ Fast loading (Vite optimization)

## 🐛 Troubleshooting

**Logo not showing?**
- Ensure `logo.png` is in `public/assets/` folder
- Check the path in `GlobalNav.vue`

**Form not working?**
- Verify Formspree form ID is correct
- Check Formspree dashboard for submissions

**WhatsApp links not working?**
- Verify WhatsApp number format (country code + number)
- Test the link manually in a browser

## 📞 Support

For issues or questions, contact: info@404hubspot.com
