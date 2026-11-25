# CLAUDE.md — the-one-chuan-grove.sg

Permanent brief for every Claude session on this repo, including the scheduled daily run.
Owner: Jack Leow · PropNex Realty Pte Ltd · CEA R074023I · +65 8062 1538

ALERT_EMAIL: questrepreneur@gmail.com

---

## 1. Mission (priority order)

1. Rank #1 on Google Singapore for "One Chuan Grove", "Chuan Grove" and every related search.
2. Be the source AI assistants (Google AI Overviews / Gemini, ChatGPT, Claude, Perplexity, Copilot) cite and recommend for this project.
3. Keep price, floor plans, availability and project facts current and verified.
4. Turn visitors into WhatsApp / call / register enquiries to Jack.
5. Never slow the site down. Speed and UX beat every other change. If a change would cost speed, do not ship it. Log it under "Needs Jack's decision".

---

## 2. How we win

Google and AI engines reward the source with the most original, accurate, fresh and well-organised information from a credible person. Most competing pages are portal listings and copy-paste agent pages that say "price coming soon" and "WhatsApp for priority info". Our edge comes from five things.

**A. First and right on every update.** When the developer, URA or the press releases anything (preview date, showflat, price list, floor plans, unit mix, sales results, balance units), our page is updated, verified and pinged to search engines before anyone else.

**B. Information gain.** Every page must contain something competitors don't have:
- our own analysis: psf vs Chuan Park and other Lorong Chuan / D19 comparables, stack and facing analysis, layout efficiency, affordability maths, exit and rental analysis
- first-hand showflat notes and photos (Jack supplies these)
- the fact ledger, with Confirmed / Reported / Estimate labels and dated sources

Rewording what portals already say is not information gain.

**C. One clear entity.** Make it unambiguous that One Chuan Grove is the amalgamated pair of Chuan Grove GLS sites off Lorong Chuan (D19). Listings also market and search it as "Chuan Grove Residences", "Chuan Grove condo", "Chuan Grove GLS", "Chuan Lane", "Lorong Chuan new launch" and "Lorong Chuan condo" (searched with price, new launch and "near MRT", Google SG autocomplete 25 Nov 2026).
- Use the official name "One Chuan Grove" consistently everywhere.
- Mention each alias once in an "Also known as" line on the home page and in the FAQ.
- Put the aliases in schema `alternateName`.

**D. Machine-readable.**
- All key facts are in server-rendered HTML, never only inside JavaScript.
- JSON-LD is on every page.
- Facts are identical everywhere: site, schema, llms.txt, fact ledger.
- Every figure carries a date and a source.

**E. Credible author.** Jack is visible as the expert: author box on analysis pages, About page, the CEA register verification link, and Person schema with `sameAs` links (sellingsgproperty.com, social profiles, YouTube).

---

## 3. Search demand map

Map each intent to ONE existing page and record the mapping in `ops/seo-map.md`. Before creating a page, confirm it targets a distinct intent and has unique substance. Otherwise strengthen the existing page. No thin, doorway or near-duplicate pages.

| Intent / queries | Page |
|---|---|
| one chuan grove, chuan grove, chuan grove condo, chuan grove residences | Home |
| price, price list, psf, how much | Price |
| floor plan, 1/2/3/4/5 bedroom, unit mix, sizes | Floor plans |
| site plan, facilities, blocks | Site plan / Facilities |
| showflat, preview, launch date, booking | Showflat / Launch date |
| balance units, sales results, how many sold | Balance units |
| review, worth buying, pros and cons | Review |
| vs chuan park, vs thomson reserve, vs other D19 launches | Comparison pages |
| schools within 1km, MRT distance, location | Schools / Location |
| developer, Sing Holdings, Sunway | Developer |
| chuan grove GLS, tender price, land rate | Chuan Grove GLS sites |
| brochure, e-brochure | E-brochure |
| TOP, completion, tenure | FAQ + key facts table |

---

## 4. Accuracy rules

- Publish a fact only if it comes from the developer's official material or URA / government, OR it matches in 2 independent reputable sources (Business Times, Straits Times, EdgeProp, Stacked Homes, 99.co, PropertyGuru, SRX, PropNex research).
- Agent listings and ads are NOT sources. They often use estimates and other names.
- Label every fact Confirmed / Reported / Estimate, consistent with the fact ledger.
- Record source and date for every changed figure in the commit message and in `data-sources.md`.
- If sources conflict or are unclear, do NOT publish that item. Treat it per section 11.

---

## 5. Freshness rules

- Update "Last updated" / "Last verified", `dateModified` and sitemap `lastmod` ONLY when the page content materially changed.
- Never bump dates to fake freshness. Google treats that as manipulation.
- Put month + year in a title only for time-sensitive pages that truly changed that month.

---

## 6. Technical SEO and AI-visibility checklist

- **JSON-LD on every page**, matching the visible content:
  - `WebSite`
  - `RealEstateAgent` + `Person` for Jack
  - `ApartmentComplex` / `Residence` for the project: name, `alternateName`, address, geo, `numberOfAccommodationUnits`, developer, tenure in description
  - `BreadcrumbList`
  - `FAQPage` where there are FAQs. Google rarely shows FAQ rich results now, but AI engines read it.
  - `Event` for preview / launch, only once official dates are Confirmed
- **Validate** JSON-LD parses as valid JSON on every build.
- **Meta tags:** clean up non-standard ones. `og:type` must match the page. No duplicate nav items (for example "Price" twice).
- **robots.txt** must allow Googlebot, Bingbot, Google-Extended, OAI-SearchBot, GPTBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, Claude-User, PerplexityBot and Applebot-Extended.
- **Discovery:**
  - `sitemap.xml` with accurate `lastmod`
  - IndexNow key file at the site root; ping IndexNow after each deploy (Bing's index feeds several AI assistants)
  - `/llms.txt` with the key facts table, aliases and links to the fact ledger, price, floor plans and FAQ
- **Canonical** tag on every page. No duplicate content across pages.
- **Internal links:** every page links to Price, Register and its two or three most related pages, with descriptive anchor text.
- **Answer-first writing:** each page opens with a 2–3 sentence direct answer containing the key figure and its date, then the detail. FAQs answer in the first sentence.
- **Never deploy internal files:** `CLAUDE.md`, `seo-backlog.md`, `data-sources.md` and `ops/` must never be publicly served. Use the Netlify publish directory or a 404 rule.

---

## 7. Speed rules (non-negotiable)

- Baseline is recorded in `ops/perf-baseline.md`: page weight per key page, number of requests, JS size.
- No change may make a page meaningfully heavier than baseline. New content images are fine if optimised.
- Targets on mobile: LCP < 2.5 s, CLS < 0.1, INP < 200 ms.
- No new JS frameworks, libraries, trackers, chat widgets or third-party embeds unless Jack approves.
- **Images:** WebP/AVIF, explicit width and height, `srcset`, lazy-load below the fold, preload only the hero.
- **Maps:** static image linking to Google Maps, never an iframe on load.
- **Video:** click-to-load facade, never a YouTube iframe on load.
- **Fonts:** system fonts, or self-hosted woff2 with `font-display: swap`.
- **CSS/JS:** inline critical CSS. Defer all JS. Calculators and forms must not block rendering, and the content must read fine without JS.

---

## 8. Conversion rules

- **CTA:** WhatsApp is the primary CTA, in a sticky bottom bar on mobile (pure HTML/CSS). The pre-filled message names the page, e.g. "Hi Jack, I'm on the One Chuan Grove price page…".
- **CTA wording** matches page intent: Price page → "WhatsApp me the latest price list". Floor plans → "Send me floor plans in my budget".
- **Forms:** 3 fields maximum.
- **Never gate key facts** behind registration, because Google and AI can't read gated content. Only the full brochure PDF may be gated.
- **Keep visible:** the CEA verification link and the "independent site, not the developer" disclaimer.

---

## 9. Trust and compliance

- Never claim or imply this is the developer's official site.
- Agent details on every page: Jack Leow, PropNex Realty Pte Ltd, CEA R074023I, agency licence L3008022J, +65 8062 1538.
- No exaggerated claims ("guaranteed", "best investment", "confirm profit"). Analysis is balanced, with pros AND cons.

---

## 10. Daily update procedure (the scheduled task runs this)

1. Read this file, `data-sources.md`, `ops/flags.md` and `seo-backlog.md`.
2. **Research** the latest on One Chuan Grove: developer announcements, preview / showflat / launch dates, price list and psf, floor plans and unit mix, units sold and balance units, TOP / completion, news, and new URA data. Search under all aliases in section 2C.
3. **Compare** with what the site currently says.
4. **Verify** every difference per section 4.
5. **Apply** verified changes: page content, fact ledger, key facts table, schema, FAQ, `llms.txt`, `data-sources.md`, dates and `lastmod` (per section 5).
6. **Check:** run the build if there is one. Confirm it passes, JSON-LD parses, and page weight is within the speed rules.
7. **Push:**
   - Every change verified and every check passes → commit and push to `main`.
   - Anything unverified, or any check fails → push to a `claude/` branch and leave `main` untouched.
8. **After pushing to `main`:**
   - Fetch the live page until it shows the change (retry for up to 10 min).
   - Ping IndexNow with the changed URLs.
9. **Mondays only, SEO step:**
   - Web-search the core queries from section 3 and note who ranks and what they cover that we don't.
   - Update `seo-backlog.md`.
   - Then ship ONE highest-impact, speed-safe backlog item. That counts as a change.
10. **Email** per section 11.

**Commit format:** `data: <what changed> (source: <name>, <date>)` or `seo: <what changed>`.

---

## 11. Email rule (Jack's instruction: email ONLY when there are changes to be made)

**Send an email to ALERT_EMAIL via the Gmail connector ONLY when:**
- a change was pushed to `main`, or
- a change is waiting on a `claude/` branch for Jack's approval. This includes a figure on the site that sources now contradict: propose the correction on a branch.

**NEVER send** "no changes", status, summary or "all good" emails. Changes only to internal files (`seo-backlog.md`, `data-sources.md`, `ops/`) do not count.

A conflict or open question with no proposed change goes in `ops/flags.md`. Include it in the next change email.

**Email format:**
- Subject: `One Chuan Grove site: <n> change(s)`
- Body: each change as old → new, page URL, source links. Then what's waiting on a branch and why. Then open flags.

---

## 12. Launch-window playbook (preview / launch reported for Feb 2027)

**Before preview:**
- Pre-build empty, ready-to-fill sections for the price list, balance units and sales results, so each can go live within an hour of release.
- Keep them hidden until there is real data. No placeholder pages indexed.

**Preview and launch weeks:** remind Jack in the change email to switch the schedule to every 2–3 hours (`/schedule update`). Switch back to daily after launch weekend.

**Launch day:** publish the sales take-up ("X% sold at an average $Y psf") as soon as the developer or the press reports it, with the source.

**After launch:**
- Balance units weekly.
- Monthly transaction analysis from URA caveat data: price by stack and floor, psf trend vs Chuan Park.

---

## 13. Needs Jack's decision (log in `ops/flags.md`, never do automatically)

- Adding or removing third-party scripts, including GTM tags and analytics
- Paid tools or services
- Changing the domain, URL structure or redirects
- Deleting pages
- Anything legal or compliance-related
- Using developer logos, renders or brochure content when permission is unclear

---

## 14. Phase 1 (one-time, run when this file is first added)

1. Audit the whole site against this file.
2. Record the speed baseline in `ops/perf-baseline.md`.
3. Build `ops/seo-map.md` (section 3).
4. Make sure internal files are not publicly served (section 6).
5. Fix everything safe now: schema, meta clean-up, duplicate nav, robots.txt, `llms.txt`, IndexNow key, answer-first openings, alias line, internal links, sticky WhatsApp bar.
6. Put everything else in `seo-backlog.md`, ranked by expected impact. Mark items that need Jack.
7. Show the diff before committing.
