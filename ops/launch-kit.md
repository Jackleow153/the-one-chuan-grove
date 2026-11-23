# Launch kit: price list, sales results, balance units

Built 23 Nov 2026 (seo-backlog item 1, CLAUDE.md section 12). These blocks are ready to paste so each one can go live
within an hour of the developer's release. They live in `ops/` on purpose: `ops/` is never served (netlify.toml 404),
so nothing here is indexed, adds page weight or shows as hidden text. **Do not paste anything until the data is
real and verified per CLAUDE.md section 4** (developer material, or two reputable outlets).

Markup uses the classes the pages already have (`section`, `.tbl`, `.num`, `.hl`, `.stats`, `.stat`, `.chip c|r|e`,
`.answer`), so the blocks need no new CSS or JS. Replace every `{{…}}` value; delete rows you have no data for.

Chips, copied from the live pages:
- Confirmed: `<span class="chip c" title="From URA, LTA, SGX filings or major press">Confirmed</span>`
- Reported: `<span class="chip r" title="From developer preliminary information or third-party reports; may change">Reported</span>`
- Estimate: `<span class="chip e" title="Analyst estimate or our own calculation">Estimate</span>`

---

## 1. `/price/`: developer price list (on release)

1. Replace the `.lede` with: "**The developer price list was released on {{D MMM YYYY}}.** Prices start from
   {{$X.XXm}} for a {{type}} of {{size}} sq ft, and the indicative average is {{$X,XXX}} psf ({{source}})."
2. Replace the "Short answer" `.answer` text in the same way, and say which of Jack's price bands it falls in.
3. Paste this section directly above `<section><h2>Jack's price bands</h2>`:

```html
<section id="price-list"><h2>One Chuan Grove price list ({{D MMM YYYY}})</h2>
<p>Indicative starting prices from the developer's first release on {{D MMM YYYY}}. Actual prices depend on stack, floor and release phase, and the developer can change them.</p>
<div class="tbl"><table><caption>Source: {{developer price list / outlet}}, {{D MMM YYYY}}. psf = price ÷ strata area.</caption><thead><tr><th scope="col">Unit type</th><th scope="col">Size</th><th scope="col" class=num>From</th><th scope="col" class=num>From, psf</th></tr></thead><tbody>
<tr><td>1 Bedroom</td><td>{{474}} sq ft</td><td class=num>{{$X.XXm}}</td><td class=num>{{$X,XXX}}</td></tr>
<tr><td>2 Bedroom</td><td>{{…}} sq ft</td><td class=num>{{…}}</td><td class=num>{{…}}</td></tr>
<tr><td>2 Bedroom + Study</td><td>{{…}} sq ft</td><td class=num>{{…}}</td><td class=num>{{…}}</td></tr>
<tr><td>3 Bedroom</td><td>{{…}} sq ft</td><td class=num>{{…}}</td><td class=num>{{…}}</td></tr>
<tr><td>3 Bedroom Flexi</td><td>{{…}} sq ft</td><td class=num>{{…}}</td><td class=num>{{…}}</td></tr>
<tr><td>4 Bedroom</td><td>{{…}} sq ft</td><td class=num>{{…}}</td><td class=num>{{…}}</td></tr>
<tr><td>5 Bedroom (private lift)</td><td>{{1,561}} sq ft</td><td class=num>{{…}}</td><td class=num>{{…}}</td></tr>
<tr class="hl"><td>Indicative average</td><td>—</td><td class=num>—</td><td class=num>{{$X,XXX}}</td></tr>
</tbody></table></div> {{chip}}
<p><b>Against Jack's bands:</b> {{$X,XXX}} psf is {{Good value / Fair / Stretch}}. That is {{X}}% {{above/below}} Chuan Park's $2,594 psf average and {{X.XX}}× the $1,355 psf ppr land cost.</p></section>
```

4. In the "Estimated price by unit type" caption, add: "Superseded by the developer list above for the units released."
   Keep the table: it still shows our pre-launch reasoning.
5. FAQ "What is the One Chuan Grove price?": the first sentence becomes the released figure and its date. Update the
   matching `FAQPage` answer in the JSON-LD so the two match word for word.

## 2. `/balance-units/`: sales results (launch weekend)

Paste directly above `<section><h2>Availability by unit type</h2>`:

```html
<section id="sales-results"><h2>Launch sales results ({{D MMM YYYY}})</h2>
<div class="stats"><div class=stat><b>{{XXX}}</b><span>units sold</span></div><div class=stat><b>{{XX}}%</b><span>of 1,056 homes</span></div><div class=stat><b>{{$X,XXX}}</b><span>average psf</span></div><div class=stat><b>{{XXX}}</b><span>units left</span></div></div>
<p>{{Developer / outlet}} reported that {{XXX}} of the 1,056 homes ({{XX}}%) were sold {{over the launch weekend of D–D MMM YYYY / on booking day}}, at an average of {{$X,XXX}} psf. {{chip}}</p>
<p>For comparison, Chuan Park sold 76% at launch at $2,579 psf and Thomson Reserve sold 1,143 of 1,268 homes at about $2,900 psf over 30–31 October 2026. <span class="chip c" title="From URA, LTA, SGX filings or major press">Confirmed</span></p></section>
```

Then in the same page:
- `.answer` "Short answer": "{{XXX}} of 1,056 units remain as of {{D MMM YYYY}}. {{XX}}% sold at an average {{$X,XXX}} psf on launch ({{source}})."
- "Availability by unit type" table: fill "Available" per type from the developer's chart or press; Status becomes
  "Selling" / "Sold out". Caption: "Source: {{…}}, as of {{D MMM YYYY}}." Leave a type's row as it is if no
  verified per-type figure exists, and say so in the caption.
- Remove the three-sentence warning about sites showing units as sold "before 27 February 2027".
- FAQ "How many units are still available?": first sentence = the figure and its date (and the JSON-LD copy).
- Weekly after launch (section 12): update the table, the caption date, `dateModified`, sitemap `lastmod`.

## 3. Other pages to touch on the same day

| Page / file | Change |
|---|---|
| `/` (home) | Key facts table: price row and "Sales" row with figure, date, chip. Title month only if the page truly changed that month. |
| `/news/` | New dated entry at the top with source link. |
| `/launch-date/`, `/showflat/` | Preview/booking dates: Reported → Confirmed only on the developer release or two reputable outlets. |
| `/faq/`, `/facts/` | Matching answers and fact-ledger rows (Confirmed / Reported / Estimate, dated source). |
| `/review/` | Verdict line against the price bands. |
| `facts.json`, `llms.txt`, `llms-full.txt` | Same figures, same wording, same date. |
| `data-sources.md` | New rows plus a change-log line. |
| JSON-LD | `ApartmentComplex` description/offers only if visible on the page; `Event` for preview/booking once Confirmed (backlog item 3); `dateModified` on every changed page. |
| `sitemap.xml` | `lastmod` for the changed pages only. |
| `indexnow-urls.json` | Changed URLs; ping IndexNow after the deploy is live. |

## 4. Go-live checks (same as the daily procedure)

1. Every figure: developer/URA or two reputable outlets; source and date in the commit message.
2. JSON-LD parses on every changed page; visible text and schema match.
3. HTML stays within about 10% of `ops/perf-baseline.md` (a table is a few KB at most).
4. Push to `main`, wait for the live page to show the change, ping IndexNow, send the change email.
5. Preview and launch weeks: remind Jack in the email to switch the schedule to every 2–3 hours (`/schedule update`).
