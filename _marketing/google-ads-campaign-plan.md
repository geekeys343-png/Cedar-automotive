# Cedar Automotive — Google Ads Campaign Plan

**Prepared:** March 3, 2026
**Monthly Budget:** $1,500–$2,000 (from $5K total marketing budget)
**Goal:** Generate phone calls and appointment requests from high-intent local searchers

---

## Campaign Structure Overview

| Campaign | Type | Monthly Budget | Goal |
|----------|------|---------------|------|
| 1. Emergency / High-Intent | Search | $700–$900 | Immediate calls |
| 2. Service-Specific | Search | $500–$700 | Service bookings |
| 3. Brand Defense | Search | $100–$150 | Protect brand name |
| 4. Retargeting | Display | $200–$250 | Re-engage visitors |

---

## Campaign 1: Emergency / High-Intent

**Strategy:** Capture people actively looking for a mechanic RIGHT NOW.

### Keywords (Exact + Phrase Match)
```
[auto repair cedar rapids]
[mechanic cedar rapids]
[car repair cedar rapids]
[auto mechanic near me]
[car repair near me]
[mechanic near me]
"auto repair cedar rapids ia"
"car mechanic cedar rapids"
"auto shop cedar rapids"
"same day auto repair cedar rapids"
"emergency car repair cedar rapids"
"check engine light cedar rapids"
```

### Negative Keywords
```
-jobs -hiring -salary -school -training -course
-diy -youtube -how to -free
-dealer -dealership
-body shop -collision -paint -dent
-motorcycle -boat -rv -atv -lawn mower
-parts -autozone -oreilly
```

### Ad Group 1: Auto Repair Cedar Rapids
**Headlines (max 30 char each):**
1. Auto Repair Cedar Rapids IA
2. Same-Day Service Available
3. All Makes & Models Serviced
4. European Vehicle Specialists
5. Call (319) 450-7584 Today
6. Trusted Local Auto Repair
7. 12-Month Warranty On Work
8. Near Cedar Rapids Airport

**Descriptions (max 90 char each):**
1. Expert auto repair for all makes & models. Same-day service, upfront pricing. Call now!
2. Trusted Cedar Rapids mechanic. Brakes, oil, diagnostics, transmission & more. Book today.
3. European & domestic vehicle repair. BMW, Audi, Mercedes, and all makes. Fair prices.

**Extensions:**
- Call extension: (319) 450-7584
- Location extension: 1407 Adair Ct SW Suite 101, Cedar Rapids, IA
- Sitelinks: Brake Repair, Oil Changes, Engine Diagnostics, Contact Us
- Callout: Same-Day Service | Upfront Pricing | All Makes & Models | 12-Mo Warranty
- Structured snippets (Services): Brakes, Oil Changes, Diagnostics, Transmission, AC, Key Programming

### Ad Group 2: Mechanic Near Me
**Headlines:**
1. Local Mechanic Near You
2. Cedar Rapids Auto Repair
3. Open Mon-Fri 8AM-5PM
4. Honest & Affordable
5. (319) 450-7584

**Descriptions:**
1. Looking for a reliable mechanic? Cedar Automotive — all makes, European capable. Call now.
2. Skip the dealership markup. Quality auto repair at honest prices. Same-day appointments.

### Targeting
- **Location:** Cedar Rapids, IA + 20-mile radius
- **Bid adjustment:** +20% for Marion, Hiawatha, Iowa City
- **Device:** +15% mobile (people searching on the go = emergency intent)
- **Schedule:** Mon-Fri 6:00 AM - 8:00 PM, Sat 8:00 AM - 2:00 PM
- **Bid strategy:** Maximize conversions (start), then Target CPA after 30 conversions

---

## Campaign 2: Service-Specific

**Strategy:** Target people searching for specific services. Higher conversion because they know what they need.

### Ad Group: Brake Repair
**Keywords:**
```
[brake repair cedar rapids]
[brake service cedar rapids]
"brake pads cedar rapids"
"squealing brakes repair"
"brake repair near me"
```
**Landing Page:** https://cedar-automotive.com/services/brake-repair.html

### Ad Group: Oil Change
**Keywords:**
```
[oil change cedar rapids]
[synthetic oil change cedar rapids]
"oil change near me"
"quick oil change cedar rapids"
"european oil change"
```
**Landing Page:** https://cedar-automotive.com/services/oil-change.html

### Ad Group: Engine Diagnostics
**Keywords:**
```
[check engine light cedar rapids]
[engine diagnostics cedar rapids]
"check engine light repair"
"engine diagnostic near me"
"car won't start cedar rapids"
```
**Landing Page:** https://cedar-automotive.com/services/engine-diagnostics.html

### Ad Group: Transmission
**Keywords:**
```
[transmission repair cedar rapids]
[transmission service cedar rapids]
"transmission flush cedar rapids"
"transmission slipping repair"
```
**Landing Page:** https://cedar-automotive.com/services/transmission-service.html

### Ad Group: AC Repair
**Keywords:**
```
[car ac repair cedar rapids]
[auto ac service cedar rapids]
"car air conditioning repair"
"ac not working car"
"ac recharge near me"
```
**Landing Page:** https://cedar-automotive.com/services/heating-air-conditioning.html

### Ad Group: Car Key Programming
**Keywords:**
```
[car key programming cedar rapids]
[key fob programming cedar rapids]
"car key replacement cedar rapids"
"lost car key cedar rapids"
"bmw key programming"
```
**Landing Page:** https://cedar-automotive.com/services/car-key-programming.html

---

## Campaign 3: Brand Defense

**Strategy:** Bid on your own name so competitors can't steal your clicks.

### Keywords
```
[cedar automotive]
[cedar automotive cedar rapids]
"cedar automotive"
```

**Budget:** $100-150/mo (cheap clicks since it's your brand)
**Landing Page:** https://cedar-automotive.com

---

## Campaign 4: Display Retargeting

**Strategy:** Show banner ads to people who visited the website but didn't call/book.

### Setup
1. Create Google Ads remarketing audience: "All website visitors, last 30 days"
2. Exclude converters (people who submitted the appointment form or called)
3. Create 3 banner sizes: 300x250, 728x90, 320x50
4. Ad messaging: "Still need auto repair? Cedar Automotive — call (319) 450-7584"

**Budget:** $200-250/mo
**Frequency cap:** 5 impressions per user per day

---

## Conversion Tracking Setup

### Track These Conversions:
1. **Phone calls from ads** — Call extension clicks (automatic)
2. **Phone calls from website** — Track clicks on tel: links (set up in GA4 + Google Ads)
3. **Appointment form submissions** — Track Netlify form thank-you page
4. **Direction clicks** — Track "Get Directions" button clicks

### GA4 Events to Create:
```
phone_call_click — fires on any tel: link click
appointment_submit — fires on form submission
direction_click — fires on Google Maps direction link
```

### Google Ads Conversion Import:
1. Link Google Ads to GA4
2. Import phone_call_click and appointment_submit as conversions
3. Set conversion window to 7 days (auto repair is a fast decision)

---

## Budget Allocation by Month

### Month 1 (Testing Phase)
- Start with Campaign 1 only (Emergency/High-Intent): $1,200
- Campaign 3 (Brand): $100
- Total: $1,300
- Goal: Establish baseline CPA, identify winning keywords

### Month 2 (Expand)
- Campaign 1: $800
- Campaign 2 (Service-Specific, top 3 ad groups): $500
- Campaign 3 (Brand): $100
- Campaign 4 (Retargeting): $200
- Total: $1,600

### Month 3+ (Optimize)
- Pause underperforming keywords (CPA > $80)
- Double down on winners (CPA < $40)
- Add seasonal ad groups (AC in summer, heating in fall)
- Target: $30-50 CPA, 30-50 leads/month

---

## Key Metrics to Track

| Metric | Target |
|--------|--------|
| Cost per click (CPC) | $3–$8 |
| Click-through rate (CTR) | 5%+ |
| Conversion rate | 8-15% |
| Cost per lead (CPL) | $30–$50 |
| Phone calls/month | 20-40 |
| Form submissions/month | 10-20 |

---

## Setup Checklist

- [ ] Create Google Ads account
- [ ] Link to GA4 (G-N5GLW4EEN2)
- [ ] Set up conversion tracking (phone clicks, form submissions)
- [ ] Create Campaign 1 (Emergency/High-Intent)
- [ ] Create Campaign 3 (Brand Defense)
- [ ] Set up ad extensions (call, location, sitelinks, callouts)
- [ ] Add negative keyword list
- [ ] Set budget and bid strategy
- [ ] Launch and monitor daily for first week
- [ ] After 2 weeks: Review search terms report, add negatives
- [ ] After 30 days: Evaluate CPA, expand to Campaign 2

---

## Notes
- Start with manual CPC or maximize clicks, switch to maximize conversions after 15+ conversions
- Check search terms report weekly — add irrelevant terms as negatives
- Don't run Google Ads and LSA at the same time initially — test each separately to measure ROI
- Track cost per BOOKED job (not just lead) to get true ROI
