# Open flags

Conflicts and open questions with no proposed change yet (CLAUDE.md section 11). Include open items in the next change email; close them here with a date.

## Open
- 2026-11-21 · **Preview 13 Feb and booking 27 Feb 2027** are Reported (developer preliminary information as relayed by marketing). No `Event` schema until Confirmed.
- 2026-11-21 · **Google Tag Manager** is about 180 KB of the 182 KB of JavaScript on every page (`ops/perf-baseline.md`). Jack decided on 2026-11-21: remove unused tags (see `seo-backlog.md` item 1).

## Closed
- 2026-11-21 · **Showflat location rests on one marketing source.** `/showflat/`, `/faq/`, `/facts/`, `llms.txt`, `llms-full.txt` and `facts.json` say the showflat is "reported" at Youngberg Terrace near Woodleigh MRT. The fact ledger itself notes this is one marketing source; PropNex's OCG Insider's Guide 1.2 (5 Nov 2026) says only that it is off-site. Section 4 needs the developer, URA or two reputable sources. Next step: check the press; if still single-source, propose on a `claude/` branch to drop the street name until confirmed.
  - Closed 2026-11-21: Jack decided to leave the showflat wording as it is. Do not raise again unless a source contradicts it.
