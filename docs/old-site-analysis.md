# Cedar Automotive LLC — Old Website Analysis

**Analyzed:** 2026-02-28
**Source:** `C:/Users/el7el/Downloads/CEDAR AUTOMOTIVE LLC/`
**Built by:** Proweaver (custom WordPress theme)

---

## Business Info

- **Company Name:** Cedar Automotive *(drop "LLC" — use "Cedar Automotive" everywhere)*
- **Type:** Auto repair shop
- **Service Area:** Cedar Rapids, IA
- **Founded:** 2025 (copyright start year in footer)
- **Phone:** (319) 540-7584
- **Email:** Info@cedar-automotive.com
- **Domain:** cedar-automotive.com *(owned via Google Workspace/Google Domains)*
- **Host:** TBD — Netlify recommended

---

## Branding

### OLD (Do Not Use)
| Element | Value |
|---|---|
| Primary Color | `#062b78` (dark navy blue) — REPLACED |
| Secondary Color | `#990003` (dark red) — REPLACED |

### NEW (Active Brand)
| Element | Value |
|---|---|
| Primary Color | **Black** `#000000` — car silhouette + wordmark |
| Accent Color | **Red** `~#E31E24` — horizontal dash accents flanking wordmark |
| Background | **White** `#FFFFFF` — clean/minimal |
| Primary Font | Bold condensed sans-serif (matches logo wordmark style) |
| Logo File | `docs/brand-assets/cedar-automotive-logo.png` |

**Logo Description:**
- Sports car silhouette outline in black (supercar/exotic profile)
- "CEDAR" bold black text above "AUTOMOTIVE" bold black text
- Red horizontal dash accents on left and right of "AUTOMOTIVE"
- Minimalist, clean, modern — high-end automotive feel
- White/transparent background compatible

---

## Site Architecture

### Technology Stack
- **CMS:** WordPress
- **Theme:** Custom theme (`cedarautomdi758`) built by Proweaver
- **PHP-based** custom template system with `get_includes()` helper

### Pages Identified
1. **Home** — Main landing page with multiple content sections
2. **Services** — Dedicated services page (4 service boxes)
3. **About Us** — Mission, Vision, Who We Are, Meet Our Staff
4. **Contact** — Embedded in homepage bottom section
5. **Privacy Notice** — `/privacy-notice`
6. **Do Not Sell/Share My Personal Information** — `/cedar-automotive-llc-do-not-sell-or-share-my-personal-information`

### Navigation Structure
- **Primary Menu** — Main nav (hamburger on mobile)
- **Secondary Menu** — Footer navigation
- Responsive hamburger menu with slide-out panel

---

## Home Page Sections (in order)

| Section | Content |
|---|---|
| **Header** | Logo + contact info + Google Translate |
| **Banner/Slider** | Hero image slider |
| **Middle** | 3 feature boxes (heading + text + link) |
| **Bottom 1** | 4 service preview cards with images |
| **Bottom 2** | Image carousel (auto parts/shop photos) |
| **Bottom 3** | Testimonials carousel (from WP comments with star ratings) |
| **Bottom 4** | Additional info/CTA section |
| **Bottom 5** | 2-column info boxes |
| **Bottom 6** | "Message Us" contact form section |
| **Footer** | Links + Social Media + Nav + Copyright |

---

## Services Page Structure

- Section intro (serv_info widget)
- **4 service boxes** (serv_box1–4 widgets)
- Bottom section with mechanic image + additional info

## About Page Structure

- About intro text
- **Mission card** (with image)
- **Vision card** (with image)
- **Who We Are** section
- **Meet Our Staff** section (anchor: `#meet-our-staff`)

---

## Contact Form Fields

- Full Name* (required)
- Email Address* (required)
- Message(s) / Question or Comment
- Privacy Notice checkbox (required)
- Google reCAPTCHA v2

---

## Integrations & Features

| Feature | Tool |
|---|---|
| Live Chat | Tawk.to |
| Accessibility | UserWay widget |
| Translation | Google Translate (gtranslate plugin) |
| SEO | Yoast SEO |
| Analytics | WP Statistics |
| Cookie Consent | cookie-law-info plugin |
| Dark Mode | Dracula Dark Mode plugin |
| Animations | WOW.js + GSAP + ScrollTrigger |
| Carousel | Owl Carousel |
| Smooth Scroll | Lenis |
| Testimonials | WP Comments + wpcr-comment-rating plugin |
| Spam Protection | Custom IP blocking + reCAPTCHA + blocklist |
| Caching | pro-cache plugin |

---

## Social Media (Footer)

- Facebook
- Twitter/X

---

## Online Forms System

Separate `/onlineforms/` directory — custom form system independent of WordPress (CodeIgniter-based structure with `application/`, `system/`, `db/` folders). Used for additional form types beyond the main contact form.

---

## Key Observations for New Site

### What Worked
- Custom branding (navy + red color scheme)
- Multi-section homepage with visual hierarchy
- Live chat (Tawk.to) — good for auto shop customers
- Testimonials section with star ratings
- Google Translate (useful for diverse customer base)
- Accessibility widget (UserWay)

### What Can Be Improved
- WordPress is heavyweight for a simple auto repair shop site
- Content stored in database (lost) — rebuild as static or modern CMS
- No online appointment booking system visible
- No online estimate/quote request form
- Social media links were placeholders (generic facebook.com/twitter.com URLs)
- No visible phone number CTA in hero section
- Mobile experience could be modernized

### Content to Recreate (from DB — now lost)
- Service box content (service names, descriptions, icons)
- Header contact info (phone, hours, address)
- Homepage hero text and CTA
- About Us / Mission / Vision text
- Staff profiles
- Testimonials
- Footer link list
- Bottom section content
