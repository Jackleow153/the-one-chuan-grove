# SEO backlog

Ranked by expected impact on the mission (CLAUDE.md section 1). **[Jack]** = needs Jack's decision or input
(section 13); the daily run must not do these alone. Mondays: ship the top speed-safe item without [Jack].
Created 21 November 2026 from the Phase 1 audit.

## Ranked
1. **Google Tag Manager weight (Jack chose on 21 Nov 2026: remove unused tags).** GTM is about 180 KB of the 182 KB of JavaScript on every page (70% of a text page's weight; `ops/perf-baseline.md`). Options: remove tags that are not used; or load GTM after the first interaction or 3 s idle (keeps tracking, removes it from the critical path). Biggest single speed win.
2. **Pre-build launch sections** (section 12): price list table on `/price/`, sales results on `/balance-units/`, balance-unit table by type, all hidden until real data, so each can go live within an hour of release. Highest-traffic window is Feb 2027.
3. **[Jack] First-hand showflat notes and photos** at the 13 Feb 2027 preview: the strongest information gain we can have; add to `/showflat/` and `/review/`.
4. **Stack and facing analysis** once the site plan is released: which stacks face the CTE, the MRT side, the landed estate; sun direction. Unique content no portal has.
5. **`Event` schema** for preview and booking day once the dates are Confirmed (developer release or two reputable outlets).
6. **Rental and exit analysis**: Chuan Park and nearby resale rents and caveat psf, likely rental yield by unit type (information gain for investors).
7. **Comparison vs other 2026-2027 D19 / OCR launches**: only as a section on `/review/` or a real comparison page with data, never a thin page per competitor.
8. **IndexNow ping** after each deploy is in the daily procedure; check Bing Webmaster Tools that submissions are accepted (key file is at the root).
9. **Desktop nav** shows 7 links and omits Launch date and FAQ, two high-intent pages; consider swapping in "Launch date" for one of the two comparison links once launch nears.
10. **Home title month** "(Nov 2026)": keep the month only while the page truly changes that month (section 5); review on the first daily run in December.

## Declined by Jack (21 Nov 2026)
- Showflat location single-source: leave the wording as it is.
- Person `sameAs` social / YouTube links: not now.

## Done in Phase 1 (21 Nov 2026)
- Internal files (`CLAUDE.md`, `seo-backlog.md`, `data-sources.md`, `ops/`) return 404 via `netlify.toml`.
- Removed the non-standard `claude:viewport-fit-sides` meta tag from every page; removed the 404 page's canonical to a non-existent `/404/`.
- Renamed the "Site plan & facilities" menu and footer link to "Site plan & blocks" (it sat next to a separate "Facilities" link).
- Schema `alternateName` now lists every alias; "Also known as" line on the home key facts table, the FAQ and both llms files.
- Answer-first openings with key figures and dates on `/faq/`, `/news/` and `/facts/`.
- "Related pages" links on 21 pages: Price, Register and 2-3 related pages with descriptive anchors.
- Mobile sticky bar: WhatsApp is now the primary button (label matches the page: "WhatsApp me the price list" on Price, "Floor plans in my budget" on Floor plans), Register secondary; every WhatsApp link's pre-filled message names the page.
- Speed baseline, SEO map, flags and data sources files created.
