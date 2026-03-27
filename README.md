# Southern Cities Realty

Professional real estate brokerage website for Southern Cities Realty — part of Southern Cities Enterprises.

## Brand

- **Company:** Southern Cities Realty
- **Parent:** Southern Cities Enterprises
- **Colors:** Navy (#1a2744), Gold (#d4a843), White
- **License:** NC Real Estate #321548
- **Location:** Charlotte, NC
- **Broker/Owner:** Darius Walton

## Features

- ✅ Hero section with clear CTAs
- ✅ Comprehensive services overview
- ✅ Featured property listings with filtering
- ✅ Team/broker profile section
- ✅ Why choose us (vertically integrated ecosystem)
- ✅ Home valuation tool
- ✅ Client testimonials
- ✅ Contact form with business info
- ✅ Professional footer with sister companies
- ✅ Mobile responsive design
- ✅ SEO optimized

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** GitHub Pages (static export)

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm start
```

## Deployment

This site automatically deploys to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch.

**Live URL:** https://ashersoutherncities-art.github.io/southern-cities-realty/

## Structure

```
/app
  layout.tsx          # Root layout with metadata
  page.tsx            # Homepage with all sections
  globals.css         # Global styles and Tailwind
/public
  .nojekyll           # GitHub Pages config
/.github/workflows
  deploy.yml          # Automated deployment
```

## Future Enhancements

- Integrate with real MLS data
- Add Google Places API for address autosuggest
- Connect home valuation tool to ATTOM Data API
- Add actual property images
- Implement contact form backend
- Add blog/resources section
- Team member profiles as brokerage grows

## License

© 2024 Southern Cities Realty. All rights reserved.
