# SEO backlog

Ranked by expected impact on the mission (CLAUDE.md section 1). **[Jack]** = needs Jack's decision or input
(section 13); the daily run must not do these alone. Mondays: ship the top speed-safe item without [Jack].
Created 21 November 2026 from the Phase 1 audit.

## Ranked
1. **[Jack] First-hand showflat notes and photos** at the 13 Feb 2027 preview: the strongest information gain we can have; add to `/showflat/` and `/review/`.
2. **Stack and facing analysis** once the site plan is released: which stacks face the CTE, the MRT side, the landed estate; sun direction. Unique content no portal has.
3. **`Event` schema** for preview and booking day once the dates are Confirmed (developer release or two reputable outlets).
4. **Rental and exit analysis**: Chuan Park and nearby resale rents and caveat psf, likely rental yield by unit type (information gain for investors).
5. **Comparison vs other 2026-2027 D19 / OCR launches**: only as a section on `/review/` or a real comparison page with data, never a thin page per competitor.
6. **IndexNow ping** after each deploy is in the daily procedure; check Bing Webmaster Tools that submissions are accepted (key file is at the root).
7. **Desktop nav** shows 7 links and omits Launch date and FAQ, two high-intent pages; consider swapping in "Launch date" for one of the two comparison links once launch nears.
8. **Home title month** "(Nov 2026)": keep the month only while the page truly changes that month (section 5); review on the first daily run in December.

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
- Google Tag Manager delayed (Jack, 21 Nov 2026): loads 3 s after page load or on first interaction; thank-you page unchanged. The container had one tag (GA4), so nothing to remove.

## Done on Mondays
- 23 Nov 2026: launch kit in `ops/launch-kit.md` (former item 1): paste-ready price list section for `/price/`, sales results section and balance-unit steps for `/balance-units/`, and the list of pages, schema and files to update on release. Kept in `ops/` (never served) so nothing is indexed or added to page weight before real data exists.
