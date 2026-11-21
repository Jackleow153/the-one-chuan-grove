# Speed baseline

Measured 21 November 2026 on the live site, before the Phase 1 changes: headless Chrome, 390 px phone viewport,
cache disabled, no network throttling (so LCP is a floor, not a field value). Re-measure the same way after any
change that adds weight: `ops/` is the place to record it.

| Page | Requests | Total KB | HTML KB | JS KB | Images KB | Fonts KB | Third-party KB | LCP ms | CLS |
|---|---|---|---|---|---|---|---|---|---|
| / | 7 | 254.2 | 19.8 | 182.5 | 16.9 | 34.0 | 180.0 | 1852 | 0 |
| /price/ | 6 | 293.1 | 16.1 | 182.1 | 60.8 | 34.0 | 179.6 | 664 | 0 |
| /floor-plans/ | 6 | 284.6 | 15.6 | 182.0 | 53.0 | 34.0 | 179.7 | 532 | 0 |
| /launch-date/ | 6 | 285.1 | 14.4 | 182.0 | 54.7 | 34.0 | 179.6 | 552 | 0 |
| /showflat/ | 6 | 284.4 | 14.0 | 182.0 | 54.3 | 34.0 | 179.6 | 556 | 0 |
| /review/ | 5 | 231.9 | 15.8 | 182.1 | 0.0 | 34.0 | 179.7 | 596 | 0 |
| /location/ | 5 | 231.0 | 14.9 | 182.0 | 0.0 | 34.1 | 179.6 | 580 | 0 |
| /vs-chuan-park/ | 5 | 229.7 | 13.7 | 182.0 | 0.0 | 34.0 | 179.6 | 656 | 0 |
| /faq/ | 5 | 232.9 | 16.9 | 182.0 | 0.0 | 34.0 | 179.6 | 676 | 0 |
| /register/ | 5 | 228.1 | 12.1 | 182.0 | 0.0 | 34.0 | 179.7 | 548 | 0 |

KB = compressed bytes over the wire.

## What the numbers say
- Our own code is light: HTML 12-20 KB compressed with inline CSS, `assets/site.js` about 2 KB, one self-hosted font (34 KB).
- Google Tag Manager (GTM-M4XWX8CR) is about 180 KB of the 182 KB of JavaScript on every page: 70% of a text page's weight. Changing it is Jack's decision (CLAUDE.md section 13); see `seo-backlog.md`.
- The home page LCP (1.9 s) is the hero image; other pages paint in about 0.5-0.7 s. CLS is 0 everywhere.

## Changes since the baseline
- 21 Nov 2026: Google Tag Manager delayed until 3 s after load or the first interaction (thank-you page excepted). Re-measured after deploy below.

What loads in the first 2 seconds after the change (same method, live, commit f16c637). GTM's 180 KB still loads later, so the 6-second totals above are unchanged:

| Page | Requests | KB in first 2 s | JS KB | LCP ms | CLS |
|---|---|---|---|---|---|
| / | 5 | 73.8 | 2.4 | 820 | 0 |
| /price/ | 4 | 113.3 | 2.4 | 472 | 0 |
| /floor-plans/ | 4 | 105.7 | 2.4 | 456 | 0.026 |
| /review/ | 3 | 52.3 | 2.4 | 360 | 0 |
| /faq/ | 3 | 53.7 | 2.4 | 356 | 0 |
| /register/ | 3 | 48.8 | 2.4 | 572 | 0 |

## Limits for future changes
- HTML of a key page: no more than about 10% above its row here unless the extra is real content.
- No new scripts. Images only as WebP/AVIF with width, height and lazy loading below the fold.
