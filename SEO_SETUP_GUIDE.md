# SEO Setup Complete! 🚀

## Google Analytics Setup

**IMPORTANT:** Replace `G-XXXXXXXXXX` in `pages/_document.tsx` with your actual Google Analytics 4 (GA4) tracking ID.

### How to get your GA4 tracking ID:
1. Go to https://analytics.google.com
2. Create a new property (or use existing)
3. Set up a Web data stream
4. Copy your Measurement ID (format: G-XXXXXXXXXX)
5. Replace both instances in `_document.tsx` (lines 8 and 14)

## What's Been Implemented

### ✅ Google Analytics (GA4)
- Located in: `pages/_document.tsx`
- Tracks: page views, user interactions, conversions
- **Action needed:** Add your GA4 tracking ID

### ✅ Enhanced Meta Tags
- Title tags (customizable per page)
- Meta descriptions (customizable per page)
- Keywords meta tag
- Author meta tag
- Robots meta tag (index, follow)
- Canonical URLs (prevents duplicate content)

### ✅ Open Graph Tags (Facebook/LinkedIn)
- og:type, og:url, og:title, og:description
- og:image (uses your logo)
- og:site_name, og:locale
- Makes links look great when shared on social media

### ✅ Twitter Card Tags
- twitter:card (large image format)
- twitter:url, twitter:title, twitter:description
- twitter:image
- Optimized for Twitter/X sharing

### ✅ Geo-Location Tags
- Geographic coordinates for Ukiah, CA
- Helps with local SEO
- geo.region, geo.placename, geo.position
- ICBM coordinates

### ✅ Enhanced Schema.org Markup (Structured Data)
**CooperativeOrganization Schema:**
- Organization name, URL, logo
- Description and founding date
- Area served (50km radius from Ukiah)
- Address and geo-coordinates
- Social media links (placeholder)
- Knowledge areas (worker rights, organizing, etc.)
- Slogan

**WebSite Schema:**
- Site name and URL
- Search action (for potential site search)

**BreadcrumbList Schema:**
- Navigation structure for search engines

### ✅ Sitemap (sitemap.xml)
- All main pages listed
- Last modified dates
- Change frequency hints
- Priority ratings
- Helps search engines discover all pages

### ✅ Robots.txt
- Allows all search engine bots
- Points to sitemap
- Crawl delay to be respectful to server

### ✅ Performance Optimizations
- Preconnect to Google Fonts
- Proper image sizing with width/height attributes
- Theme color for mobile browsers (brand green)

## Next Steps - Action Items

### 1. Add Google Analytics ID ⚠️
Replace `G-XXXXXXXXXX` in `pages/_document.tsx` with your real tracking ID

### 2. Update Social Media Links
In `pages/index.tsx`, update the schema:
```json
"sameAs": [
  "https://www.facebook.com/YOUR_ACTUAL_PAGE",
  "https://www.instagram.com/YOUR_ACTUAL_HANDLE"
]
```

### 3. Verify in Google Search Console
- Go to https://search.google.com/search-console
- Add property: mendolaborcoop.ukiahumc.org
- Verify ownership (DNS or HTML file method)
- Submit sitemap: https://mendolaborcoop.ukiahumc.org/sitemap.xml

### 4. Test Your SEO
**Rich Results Test:**
https://search.google.com/test/rich-results

**Mobile-Friendly Test:**
https://search.google.com/test/mobile-friendly

**PageSpeed Insights:**
https://pagespeed.web.dev/

### 5. Social Media Sharing Preview
**Facebook Debugger:**
https://developers.facebook.com/tools/debug/

**Twitter Card Validator:**
https://cards-dev.twitter.com/validator

## SEO Best Practices Included

✅ Semantic HTML structure (header, nav, main, section, footer)
✅ Proper heading hierarchy (h1, h2, h3)
✅ Alt text on all images
✅ Descriptive link text
✅ Mobile-responsive design
✅ Fast page load (minimal dependencies)
✅ ARIA labels for accessibility
✅ Structured data for rich snippets
✅ Local business optimization (Ukiah, CA)
✅ Social media optimization

## Keywords Strategy

**Primary Keywords:**
- worker cooperative Mendocino County
- labor cooperative Ukiah CA
- worker solidarity California
- economic justice Mendocino

**Secondary Keywords:**
- mutual aid network
- job placement cooperative
- worker organizing
- unhoused workers support

**Local SEO:**
- Ukiah cooperative
- Mendocino County workers
- Northern California labor

## Ongoing Maintenance

### Update Sitemap
When adding new pages, update `public/sitemap.xml` with:
- New URL
- Current date as lastmod
- Appropriate changefreq and priority

### Monitor Analytics
Check Google Analytics monthly for:
- Traffic sources
- Popular pages
- User behavior
- Conversion rates

### Content Updates
- Keep content fresh (search engines love updates)
- Add blog posts if possible
- Update "last modified" dates in sitemap

## Technical SEO Checklist

✅ Mobile responsive
✅ Fast loading times
✅ HTTPS (ensure when deployed)
✅ Clean URL structure
✅ No broken links
✅ Proper redirects (301)
✅ Image optimization
✅ Minified CSS/JS (Next.js handles this)
✅ Gzip compression (server config)
✅ Browser caching (server config)

## Accessibility = Better SEO

Your site already has:
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Color contrast
- Alt text

These help both users AND search engines!

---

**Need help with any of this? Just ask!**
