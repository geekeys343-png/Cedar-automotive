---
stepsCompleted: ['step-01-init', 'step-02-discovery', 'step-02b-vision', 'step-02c-executive-summary', 'step-03-success', 'step-04-journeys', 'step-05-domain', 'step-06-innovation', 'step-07-project-type', 'step-08-scoping', 'step-09-functional', 'step-10-nonfunctional', 'step-11-polish']
inputDocuments: ['docs/old-site-analysis.md', 'docs/old-theme/']
workflowType: 'prd'
documentCounts:
  briefs: 0
  research: 0
  brainstorming: 0
  projectDocs: 1
  projectContext: 0
classification:
  projectType: 'Marketing Website — Local Business Brochureware'
  domain: 'General — Local Auto Repair Services'
  complexity: 'Very Low'
  projectContext: 'brownfield-rebuild'
  builder: 'El7el solo'
  deadline: '3 hours'
  stack: 'Static HTML/CSS/JS'
  seo: true
---

# Product Requirements Document — Cedar Automotive

**Author:** El7el
**Date:** 2026-02-28

---

## Executive Summary

Cedar Automotive is an independent auto repair shop in Cedar Rapids, Iowa, specializing in European vehicles while servicing all makes and models. Located near Cedar Rapids Regional Airport, the shop serves local drivers who need expert-level repair work without dealership pricing or friction. The website is a complete rebuild — the prior WordPress install lost all database content; the rebuild uses static HTML/CSS/JS for speed, maintainability, and SEO performance.

The site's singular conversion goal is **a phone call to book an appointment**. Every section, every CTA, every design decision points toward that outcome. Scope is deliberately minimal — 4 core pages, modern design, production-ready within 3 hours.

### What Makes This Special

Cedar Automotive holds a specific position in Cedar Rapids: **European car expertise at independent shop rates**. Most drivers assume BMW, Mercedes, Audi, and Volvo work requires a dealership visit. Cedar Automotive breaks that assumption — specialist-level capability without the dealership overhead or wait times.

Airport proximity creates a concrete, ownable use case no local competitor explicitly markets: **drop your car off before your flight, pick it up fixed on return**. This is a real operational advantage worth featuring.

The new brand identity — black and red sports car silhouette logo — signals "serious about cars" without the sterile dealership aesthetic. The site amplifies this: premium feel, fast load, immediate trust, one clear action.

### Project Classification

- **Type:** Marketing Website — Local Business Brochureware (static)
- **Domain:** General — Local Auto Repair Services, Cedar Rapids, IA
- **Complexity:** Very Low — no auth, no database, no backend
- **Context:** Brownfield rebuild — existing business, new site from scratch
- **Stack:** Static HTML/CSS/JS | **Host:** Netlify | **DNS:** Google Domains
- **Builder:** El7el (solo) | **Timeline:** 3 hours to production-ready

---

## Success Criteria

### User Success

- Visitor on mobile finds **(319) 540-7584** and taps to call within 30 seconds of landing
- Services clearly listed — visitor immediately knows Cedar Automotive handles their car type
- Site looks professional enough that a first-time visitor calls without hesitation
- Page loads under 2 seconds on mobile (4G connection)
- Airport drop-off convenience communicated as a concrete differentiator, not a footnote

### Business Success

- Site live at **cedar-automotive.com** within 3 hours
- Google My Business verification completes — site serves as the verified web presence
- NAP (Name: Cedar Automotive, Address: 1407 Adair Ct SW Suite 101, Cedar Rapids, IA, Phone: (319) 540-7584) on site matches GMB listing exactly
- Hours of operation (Mon–Fri 8:00 AM – 5:00 PM) displayed on site and in JSON-LD schema
- Site surfaces in Google for "auto repair Cedar Rapids" within 30–60 days of indexing
- Business email **Info@cedar-automotive.com** linked via mailto on site

### Technical Success

- Mobile-first — primary layout target 375px, scales cleanly to desktop
- Static HTML/CSS/JS — zero CMS, zero backend, zero runtime dependencies
- On-page SEO complete day one: `<title>`, meta description, H1, Open Graph, `LocalBusiness` JSON-LD, `sitemap.xml`, `robots.txt`
- NAP identical in footer sitewide — name, address, phone consistent across all pages
- Valid HTTPS at cedar-automotive.com and www.cedar-automotive.com via Netlify

### Measurable Outcomes

| Metric | Target |
|---|---|
| Site live | Within 3 hours of build start |
| GMB verification | Passes on first submission |
| Mobile page load | < 2 seconds (4G) |
| Google indexing | Within 7 days of going live |
| Local search ranking | Top 5 for "auto repair Cedar Rapids" within 60 days |
| Phone CTA visibility | Above the fold on every page, mobile and desktop |

---

## Product Scope & Roadmap

### MVP Strategy

**Approach:** Problem-Solving MVP — the site exists to generate one action: a phone call to (319) 540-7584.

**Definition Test:** "If a Cedar Rapids driver Googles 'auto repair' and lands on this site, can they find the phone number and call within 30 seconds on mobile?" — If yes, MVP ships.

**Resource:** El7el (solo), static HTML/CSS/JS, ~3 hours, Netlify free tier.

### Phase 1 — Ship Today (MVP)

**Pages:** Home | Services | About | Contact + shared header, footer, schema on every page

| Capability | Rationale |
|---|---|
| Sticky header with click-to-call phone | Primary conversion driver — zero scrolling needed |
| Hero section — brand + CTA above fold | Trust signal + action within 2 seconds of landing |
| European car specialization messaging | Differentiator — hooks high-value customers |
| Airport proximity callout section | Unique hook no competitor explicitly markets |
| Services list (all services, all makes) | Answers "do they fix my car?" before first scroll |
| About section — real identity and location | Trust for skeptical new customers |
| Contact page — phone, address, hours, Maps embed, email | NAP + hours for GMB + direct contact |
| Footer with full NAP sitewide | Schema + GMB NAP consistency |
| LocalBusiness JSON-LD schema on every page | GMB verification + local SEO |
| sitemap.xml + robots.txt | Technical SEO baseline |
| Mobile-first responsive layout (375px primary) | Primary context: on-phone while driving or parked |
| Valid HTTPS at cedar-automotive.com + www | Netlify auto-provides via Let's Encrypt |

**Explicitly deferred from MVP:**
- Appointment request form
- Live chat / Tawk.to
- Google Reviews widget
- Blog
- Any CMS or admin panel

### Phase 2 — Post-Launch (Week 1–4)

- Online appointment request form (contact page addition)
- Google Reviews widget once reviews accumulate
- Tawk.to chat (1-line JS snippet)

### Phase 3 — Growth (Month 2+)

- Blog for local SEO content
- Seasonal promotions page
- Google Analytics for conversion tracking

### Phase 4 — Vision

- Online booking with calendar integration
- Customer vehicle history portal
- Multi-location expansion pages

### Risk Mitigation

**Technical:** Zero — static HTML/CSS/JS has no runtime dependencies, server failures, database, or plugin conflicts.

**Market:** Minimal — existing business replacing a broken site, not launching into an unknown market.

**Resource (3hr deadline):** Scope lock. Zero feature additions inside the build window. If it's not in Phase 1 above, it does not ship today.

**Deployment:** DNS propagation can take up to 48 hours after Google Domains → Netlify switch. Plan: launch on `something.netlify.app` URL first; submit GMB verification with that URL if cedar-automotive.com hasn't propagated yet.

---

## User Journeys

### Journey 1: Marcus — "My Check Engine Light Just Came On"
*Primary User — Happy Path*

**Who:** Marcus, 34, Cedar Rapids. Drives a 2019 Audi A4. Not a car guy. Has no regular mechanic — last time he needed work he went to the dealership and paid through the roof.

**Opening Scene:** Tuesday morning. Marcus is heading to work when the check engine light comes on. He pulls over, googles "European car mechanic Cedar Rapids" on his phone. Three results come up. One is a dealership. One has a website that looks like it's from 2009. One is Cedar Automotive.

**Rising Action:** Cedar Automotive's site loads instantly on his phone. Big, clean, bold — he sees the name, a sports car logo, and a red phone button within 2 seconds. He scrolls just enough to read "Specialists in European vehicles" and "Serving Cedar Rapids near the airport." He doesn't need to dig further.

**Climax:** He taps the phone number. It dials immediately — (319) 540-7584. Someone picks up. He describes the issue, gets a same-day appointment.

**Resolution:** Marcus becomes a regular. He never goes back to the dealership. He tells his coworker with a Volkswagen about the shop.

**Requirements Revealed:** Tap-to-call above the fold on mobile, European car specialization within first scroll, fast mobile load, professional trust signals in hero.

---

### Journey 2: Diane — "I Need This Fixed Before My Flight"
*Primary User — Airport Differentiator*

**Who:** Diane, 48, business traveler. Drives a 2021 BMW 5 Series. Flying out Friday morning, back Sunday. Her car has been making a grinding noise when she brakes.

**Opening Scene:** Wednesday afternoon. Diane searches "auto repair near Cedar Rapids airport." Cedar Automotive appears. She clicks.

**Rising Action:** She immediately sees the callout — "Conveniently located near Cedar Rapids Airport — drop off before your flight, pick up when you return." That's exactly her situation. She reads the services list — brakes are listed. She trusts the European-specialist positioning for her BMW.

**Climax:** She calls, explains the situation. Cedar Automotive confirms they can take the car Thursday, have it ready Friday while she's flying. She drops it off Thursday evening.

**Resolution:** Diane picks up a fixed car Sunday with zero trip disruption. She leaves a 5-star Google review: "Perfect for travelers — dropped off before my flight, picked up after. Fixed right the first time."

**Requirements Revealed:** Airport callout as a standalone prominent section, brakes and European makes visible in services, phone CTA findable for time-pressured users.

---

### Journey 3: Kevin — "I Just Moved Here and Need a Mechanic I Can Trust"
*Primary User — Edge Case / New to Area*

**Who:** Kevin, 27, recently moved to Cedar Rapids from Chicago. Drives a 2018 Honda Civic. Slightly skeptical of repair shops in general.

**Opening Scene:** Kevin's car needs an oil change. He googles "trusted mechanic Cedar Rapids." He's immediately skeptical of generic-looking sites.

**Rising Action:** Cedar Automotive's site feels different — clean design, real address, a real phone number, an About section that explains who they are. He reads the About page. The brand doesn't look like a template. He checks the Services page — it says "all makes and models." He scrolls to Contact, sees the address, looks it up on Google Maps. 8 minutes from his apartment.

**Climax:** Kevin calls, books an oil change. Gets treated well. Cedar Automotive becomes his go-to mechanic.

**Resolution:** Kevin stays for years. Cedar Automotive earns a loyal customer from a cold Google search.

**Requirements Revealed:** "All makes and models" messaging clear throughout, About page with real identity, address + Google Maps embed on Contact, services page comprehensive not European-only.

---

### Journey 4: El7el — "The Site Needs to Be Updated"
*Admin — Site Maintenance*

**Who:** El7el, the builder and ongoing site admin. Needs to update services, change a phone number, refresh content seasonally.

**Opening Scene:** Six months after launch, Cedar Automotive adds a new service — wheel alignment. El7el needs to add it to the Services page.

**Rising Action:** Because the site is pure HTML/CSS/JS — no CMS, no plugins, no login — El7el opens `services.html`, adds one line, saves, and drags the updated folder to Netlify.

**Climax:** Site is updated and live in under 5 minutes. No WordPress login, no plugin conflicts, no updates breaking the theme.

**Resolution:** El7el can maintain this indefinitely without technical debt.

**Requirements Revealed:** Clean well-commented HTML per page, no build tools required, human-readable code, logical file structure.

---

## Technical Architecture

### Architecture Overview

Cedar Automotive is a **Multi-Page Application (MPA)** — 4 static HTML pages (Home, Services, About, Contact) served via Netlify CDN. No JavaScript framework, no single-page routing, no client-side rendering. Each page is a self-contained `.html` file.

| Decision | Choice | Rationale |
|---|---|---|
| Architecture | MPA — 4 static HTML pages | Maximum SEO compatibility, fastest load, zero JS risk |
| Rendering | Pre-rendered HTML (no client JS rendering) | SEO-first; static files index perfectly |
| Hosting | Netlify free tier | CDN, auto HTTPS, instant deploys, custom domain |
| DNS | Google Domains → Netlify (A + CNAME) | User already owns domain via Google Workspace |
| Build tools | None required | Edit HTML directly, deploy by drag-and-drop |

### Browser Support

| Browser | Support |
|---|---|
| Chrome (last 2 versions) | ✅ Full |
| Safari / iOS Safari | ✅ Full — priority (mobile-first, Apple-heavy search audience) |
| Firefox (last 2 versions) | ✅ Full |
| Edge (last 2 versions) | ✅ Full |
| Samsung Internet | ✅ Reasonable |
| IE11 | ❌ Not supported |

### Responsive Design

- **Breakpoints:** 375px (mobile primary), 768px (tablet), 1280px (desktop)
- **Approach:** Mobile-first CSS — `min-width` media queries
- **Touch targets:** Minimum 44×44px for all interactive elements
- **Phone CTA:** `<a href="tel:3195407584">` — sticky on mobile at all times
- **Images:** Responsive sizing, WebP with JPG fallback, `loading="lazy"` below fold

### SEO Strategy

- **On-page:** Unique `<title>` + meta description per page, canonical URL tags, one H1 per page
- **Local SEO:** `LocalBusiness` JSON-LD schema in `<head>` on every page
  - NAP: Cedar Automotive | 1407 Adair Ct SW Suite 101, Cedar Rapids, IA | (319) 540-7584 | Info@cedar-automotive.com
  - `openingHours`: Mo-Fr 08:00-17:00
  - `areaServed`: Cedar Rapids IA, Eastern Iowa
  - `knowsAbout`: European vehicle repair, auto repair, all makes and models
- **Technical SEO:** `sitemap.xml`, `robots.txt`, Open Graph tags (`og:title`, `og:description`, `og:image`)
- **Target keywords:** "auto repair Cedar Rapids", "European car repair Cedar Rapids", "mechanic near Cedar Rapids airport"
- **GMB:** NAP on site must match Google Business Profile exactly

### Implementation

- **Files:** `index.html`, `services.html`, `about.html`, `contact.html` + `css/styles.css`, `js/main.js`, `images/`
- **Shared components:** Header and footer repeated per page (no templating at MVP scale)
- **CSS:** Single `styles.css`, mobile-first, CSS custom properties for brand colors (`--color-primary: #000; --color-accent: #E31E24`)
- **JS:** Minimal — sticky header scroll behavior only, no framework
- **Comments:** HTML/CSS comments mark editable sections (phone, address, services list)

---

## Functional Requirements

### Navigation & Site Structure

- **FR1:** Visitor can navigate between all pages (Home, Services, About, Contact) via a persistent header
- **FR2:** Visitor can access the site at both `cedar-automotive.com` and `www.cedar-automotive.com`
- **FR3:** Visitor can identify Cedar Automotive's brand (logo, name, colors) consistently on every page
- **FR4:** Visitor can access footer content (NAP, nav links) from the bottom of every page

### Visitor Conversion — Phone CTA

- **FR5:** Visitor can tap/click the phone number to initiate a call from any page without scrolling
- **FR6:** Visitor can see (319) 540-7584 in a sticky header element visible at all times on mobile
- **FR7:** Visitor can reach a dedicated Contact page with all contact methods consolidated
- **FR8:** Visitor can send email to Info@cedar-automotive.com via a mailto link

### Services & Specialization

- **FR9:** Visitor can view a complete list of repair and maintenance services Cedar Automotive offers
- **FR10:** Visitor can confirm Cedar Automotive specializes in European vehicles (BMW, Audi, Mercedes, Volvo, etc.)
- **FR11:** Visitor can confirm Cedar Automotive services all makes and models, not European-exclusive
- **FR12:** Visitor can identify Cedar Automotive's airport proximity as a concrete drop-off use case

### Trust Building

- **FR13:** Visitor can read about Cedar Automotive's identity, expertise, and location on a dedicated About page
- **FR14:** Visitor can verify Cedar Automotive is a real local business via visible physical address and phone
- **FR15:** Visitor can see professional brand presentation (logo, design quality) that signals mechanical competence

### Local Presence & Contact

- **FR16:** Visitor can find Cedar Automotive's physical street address on the Contact page
- **FR17:** Visitor can view Cedar Automotive's location on an embedded map
- **FR18:** Visitor can verify consistent NAP (Cedar Automotive | 1407 Adair Ct SW Suite 101, Cedar Rapids, IA | (319) 540-7584) across all pages

### SEO & Discoverability

- **FR19:** Search engines can crawl and index all pages via `sitemap.xml` and `robots.txt`
- **FR20:** Search engines can parse `LocalBusiness` JSON-LD schema embedded in `<head>` on every page
- **FR21:** Search engines can read a unique `<title>` and meta description for each page
- **FR22:** Social platforms can generate preview cards via Open Graph tags
- **FR23:** Google can verify Cedar Automotive's web presence for Google My Business validation

### Site Administration

- **FR24:** El7el can update page content by editing plain HTML files without a CMS or build tool
- **FR25:** El7el can deploy updates by uploading files to the Netlify dashboard
- **FR26:** El7el can create a new page by duplicating an existing HTML file as a template
- **FR27:** El7el can identify all editable content areas via inline HTML comments

### Security & Access

- **FR28:** Visitor can access the site securely via HTTPS on all pages and subdomains
- **FR29:** Visitor on mobile can interact with all site elements via adequately sized touch targets

---

## Non-Functional Requirements

### Performance

- **NFR-P1:** Each page LCP within 2.5 seconds on a 4G mobile connection
- **NFR-P2:** First Contentful Paint (FCP) within 1.5 seconds on mobile
- **NFR-P3:** Total page weight ≤ 500KB (HTML + CSS + JS + images combined)
- **NFR-P4:** PageSpeed Insights mobile score ≥ 85 at launch
- **NFR-P5:** Cumulative Layout Shift (CLS) score < 0.1
- **NFR-P6:** Phone number CTA interactive (tappable) within 1 second of page load on mobile

### Security

- **NFR-S1:** All pages served exclusively over HTTPS — no HTTP fallback
- **NFR-S2:** No user data collected or stored (no forms, no analytics cookies in MVP)
- **NFR-S3:** No third-party scripts in MVP that introduce privacy or tracking risk

### Accessibility

- **NFR-A1:** All images include descriptive `alt` attributes
- **NFR-A2:** Color contrast ratio ≥ 4.5:1 for all body text (WCAG 2.1 Level A)
- **NFR-A3:** All pages navigable via keyboard tab order in logical sequence
- **NFR-A4:** Semantic HTML5 landmark elements (`<header>`, `<nav>`, `<main>`, `<footer>`) on every page

### Integration

- **NFR-I1:** Google Maps embed loads via standard iframe (no API key) and degrades gracefully if blocked
- **NFR-I2:** `LocalBusiness` JSON-LD validates without errors in Google's Rich Results Test tool
- **NFR-I3:** `sitemap.xml` is valid XML, references all 4 pages, submitted to Google Search Console post-launch

### Maintainability

- **NFR-M1:** All HTML files are self-contained — no templating engine or build step required to edit
- **NFR-M2:** CSS uses custom properties for brand colors — a rebrand requires ≤ 5 line changes
- **NFR-M3:** Code comments mark all editable sections (phone number, address, services list)
