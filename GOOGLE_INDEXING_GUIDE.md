# Google Search Indexing Guide for Mendo Labor Cooperative

**Last Updated:** November 13, 2025

## 🚨 CRITICAL: Why Your Site Isn't in Google Yet

Your website is new and Google hasn't discovered or indexed it yet. This is **NORMAL** and can take **1-4 weeks** for new sites. Follow these steps to speed up the process.

---

## ✅ Step 1: Set Up Google Search Console (REQUIRED)

### 1.1 Create/Sign in to Google Search Console
1. Go to: **https://search.google.com/search-console**
2. Sign in with a Google account
3. Click **"Add Property"**
4. Choose **"URL prefix"** and enter: `https://mendolaborcoop.ukiahumc.org`

### 1.2 Verify Ownership (HTML Tag Method - EASIEST)
1. Google will show several verification methods
2. Choose **"HTML tag"** method
3. Copy the verification meta tag (looks like: `<meta name="google-site-verification" content="abc123xyz..." />`)
4. Open `pages/_document.tsx` in your code
5. Replace `REPLACE_WITH_YOUR_VERIFICATION_CODE` with the code from Google (just the content value)
6. Deploy the change
7. Go back to Google Search Console and click **"Verify"**

---

## ✅ Step 2: Submit Your Sitemap

1. In Google Search Console, go to **"Sitemaps"** in the left sidebar
2. Enter: `sitemap.xml`
3. Click **"Submit"**
4. Wait for Google to process (can take 24-48 hours)

Your sitemap is already at: **https://mendolaborcoop.ukiahumc.org/sitemap.xml**

---

## ✅ Step 3: Request Manual Indexing (FASTEST)

### For Key Pages:
1. In Google Search Console, go to **"URL Inspection"** (top bar)
2. Enter each URL below and click **"Request Indexing"**:
   - `https://mendolaborcoop.ukiahumc.org/`
   - `https://mendolaborcoop.ukiahumc.org/about`
   - `https://mendolaborcoop.ukiahumc.org/contact`
   - `https://mendolaborcoop.ukiahumc.org/attendance`

3. Google will queue them for indexing (usually within 1-3 days)

---

## ✅ Step 4: Set Up Google Business Profile (HIGHLY RECOMMENDED)

Since you're a local business/cooperative in Ukiah, CA:

1. Go to: **https://www.google.com/business/**
2. Click **"Manage now"**
3. Enter business name: **Mendo Labor Cooperative**
4. Select category: **"Non-profit organization"** or **"Employment agency"**
5. Add address: Use Building Bridges or physical location if available
6. Add phone: **(369) 216-1512**
7. Add website: **https://mendolaborcoop.ukiahumc.org**
8. Verify ownership (Google will mail a postcard with code if physical address, or call/email)

**Why this matters:** Google Business Profile makes you show up in:
- Google Maps
- Local search results ("workers near me", "labor cooperative Ukiah")
- Knowledge panel on the right side of search results

---

## ✅ Step 5: Build Backlinks (For Faster Discovery)

Get other websites to link to yours:

### Easy Wins:
1. **Ukiah United Methodist Church website** - Ask Michele to add a link to your site
2. **Building Bridges Resource Center** - Request they list you on their partners/resources page
3. **Mendocino County social service directories**
4. **Local news**: Contact Ukiah Daily Journal, Mendocino Voice about your cooperative
5. **Social media**: Post your URL on Facebook, LinkedIn, community groups

### Why this matters:
- Google discovers new sites faster when they're linked from known sites
- Each quality backlink increases your domain authority
- Local links help with local search rankings

---

## ✅ Step 6: Check Current Status

### Test if Google has indexed your site:
1. Go to Google.com
2. Search: `site:mendolaborcoop.ukiahumc.org`
3. If nothing shows = not indexed yet (normal for new sites)
4. If pages show = you're indexed!

### Check in Google Search Console:
- **Coverage Report**: Shows which pages are indexed
- **Performance Report**: Shows search impressions and clicks (appears after indexing)

---

## 🔧 Technical Checklist (Already Done ✅)

- ✅ Sitemap created at `/sitemap.xml`
- ✅ Robots.txt allows all crawling
- ✅ Meta descriptions on all pages
- ✅ Schema.org structured data (Organization, LocalBusiness)
- ✅ Canonical URLs set
- ✅ Mobile-optimized
- ✅ Fast loading times
- ✅ HTTPS enabled
- ⏳ Google Search Console verification (YOU NEED TO DO THIS)
- ⏳ Sitemap submitted to Google (AFTER verification)
- ⏳ Manual indexing requested (AFTER verification)

---

## ⏰ Expected Timeline

| Action | Typical Time |
|--------|--------------|
| Google Search Console verification | Immediate (5 minutes) |
| Sitemap processing | 1-2 days |
| Manual indexing request | 1-3 days |
| Natural discovery (without manual request) | 1-4 weeks |
| Appearing in search results | 3-7 days after indexing |
| Ranking well | 2-6 months (ongoing) |

---

## 🎯 Immediate Action Items (IN ORDER)

**DO THESE NOW:**
1. ✅ Set up Google Search Console (30 minutes)
2. ✅ Add verification code to `_document.tsx` and deploy (5 minutes)
3. ✅ Submit sitemap (2 minutes)
4. ✅ Request indexing for main pages (5 minutes)
5. ✅ Set up Google Business Profile (20 minutes)
6. ✅ Ask Michele/Building Bridges for backlinks (1 email)

**THEN WAIT:**
- Check Google Search Console daily for indexing status
- After 3-5 days, test with `site:mendolaborcoop.ukiahumc.org` search
- If nothing after 2 weeks, check Search Console for errors

---

## 🆘 Troubleshooting

### "Google says my site can't be reached"
- Make sure site is actually live at https://mendolaborcoop.ukiahumc.org
- Check if there's a password/authentication blocking bots
- Verify DNS is properly configured

### "It's been 2 weeks and still nothing"
- Check Coverage report in Search Console for errors
- Look for "Discovered - currently not indexed" status
- May need to improve content uniqueness or add more pages

### "I'm indexed but not ranking"
- Normal for new sites - takes 2-6 months to rank well
- Keep adding content (blog posts, news, member stories)
- Continue building backlinks
- Focus on long-tail keywords ("worker cooperative Ukiah CA")

---

## 📞 Questions?

If you're stuck on any step, the Search Console Help Center is excellent:
https://support.google.com/webmasters

**You've got this! The technical setup is done - now just need to tell Google your site exists.**
