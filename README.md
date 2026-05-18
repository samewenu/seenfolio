# SeenFolio — Prototype

Autonomous growth infrastructure for online businesses. One platform replaces 10–15 marketing tools by analyzing performance, deciding optimizations, and executing changes — paid for in tokens, only when the platform acts.

Clickable high-fidelity prototype in vanilla HTML/CSS/JS. No backend, no build step.

**Live:** [seenfolio.vercel.app](https://seenfolio.vercel.app)
**Repo:** [github.com/samewenu/seenfolio](https://github.com/samewenu/seenfolio)

## Site map

| Route | Purpose |
| --- | --- |
| `/` | Public marketing landing |
| `/pricing.html` | 4 plans + token-cost table + FAQ |
| `/docs.html` | Setup guides for 4 integration methods + first-7-days timeline |
| `/sign-in.html` | Sign in / sign up |
| `/onboarding.html` | 6-step setup: sell → website → goal → integration → analyzing → welcome with 5 recommendations |
| `/app.html` | The full app — every view, every drawer, every edge case |
| `/lofi.html` | Original lo-fi design board (12 figures) |

## App surface

**Workspace:** Home · Activity · Inbox · Chat · Registry (advanced)
**Engines:** Pages (SEO/GEO site map) · AI Citations · Content · Ads · Email · Reputation · WhatsApp · Customers
**Insights:** Performance · Schedule · Billing
**System** (advanced): Team · Credentials · API & Webhooks · Audit log
**Account:** Settings (per-engine autonomy, workspace details, reset demo)

## Engine surface depth

| Engine | What's in the prototype |
| --- | --- |
| **1 · SEO + GEO** | Pages view (12 URLs × SEO/GEO/CWV scores × issues × patch status), AI Citations tracker (4 engines × sparklines, query rank table), sitemap diff |
| **2 · BI / Analytics** | Performance dashboard, attribution model toggle (Shapley/first/last/linear/decay) with live explanation, customer journey explorer with touchpoint walk, budget allocation proposal table |
| **3 · Unified Ads** | Channel performance, creative variant board (winner scaled, loser paused), connected accounts table with auth health + learning-phase pills, click fraud shield |
| **4 · Content** | Performance overview, brand voice editor (anchor examples + tone attrs + avoid list + A/B history), 7-stage campaign pipeline visualizer, content gap radar |
| **5 · Trust** | GBP dashboard, reputation feed, NPS-gated review collection flow, embeddable social proof widget previewer with embed snippet, reply approval queue |
| **6 · WhatsApp CRM** | Conversation inbox, bot configuration (system prompt + behavior toggles), Meta-approved message templates, automated sequences (cart abandonment, post-purchase, reactivation) |
| **7 · Retention** | Email campaign view, welcome series DAG visualizer, churn risk list (ML scores), ESP connection grid (5 ESPs), 7×6 send-time heatmap |

## Three modes

Beginner / Intermediate / Advanced toggles density and disclosure across every view. Engine sidebar section hides in Beginner; System section (Team, Credentials, API, Audit) only shows in Advanced; attribution model toggle only shows in Intermediate+. Toggle in Settings → Display mode or via the demo control panel.

## Per-engine autonomy

Each of the 7 engines has its own autonomy level: **Full Auto / Suggest+Confirm / Notify Only / Off** — set independently per workspace in Settings → Per-engine autonomy with custom amber radio buttons.

## Multi-workspace

Topbar workspace switcher: **Silver Jewelry Co** (Growth) ↔ **Kente Threads** (Starter). Persists across reloads.

## Edge cases covered (14 triggerable from demo panel)

Token threshold (80%) · Ad budget exhausted · Performance auto-protect · SDK blocked by CSP · WhatsApp 24h window closing · Email bounce auto-pause · Insufficient attribution data · Meta ad account suspended · Patch hallucination held · Multi-undo learning prompt · Above-pattern token approval · Conflicting optimization · Auto-disabled feature · Live action toast · Reset demo

## Foundation

- `mock.js` — `window.SeenFolioMock` shared mock universe (workspaces, pages, actions, attribution, contacts, conversations, reviews, token ledger, credentials, webhook log, audit log, edge-case triggers)
- `state.js` — `window.SeenFolioState`, localStorage-backed under `seenfolio:*`, resettable from Settings
- Design system: warm-dark base (`#0E0D0A`), cream ink (`#F4EBD7`), single amber accent (`#E8B260`). Fraunces (display) + Geist (body) + Geist Mono (system voice)
- Async simulation: 600ms via `setTimeout` constant

## Build phases delivered

| Phase | Description | Status |
| --- | --- | --- |
| A | Mock data + state foundation | ✓ |
| B | Marketing surface (landing, pricing, docs) | ✓ |
| C | Onboarding extension (6 steps + integration picker + welcome) | ✓ |
| D | Engine 1 surfaces (Pages, AI Citations, sitemap diff) | ✓ |
| E | Engine 2 BI deep (attribution toggle, journey explorer, budget proposal) | ✓ |
| F | Engine 3 Ads deep (variants, accounts, click fraud) | ✓ |
| G | Engine 4 Content deep (brand voice, campaign flow, gap radar) | ✓ |
| H | Engine 5 Trust deep (NPS-gated reviews, social proof widget) | ✓ |
| I | Engine 6 WhatsApp deep (bot config, templates, sequences) | ✓ |
| J | Engine 7 Retention deep (DAG, churn, ESP, heatmap) | ✓ |
| K | Cross-cutting (Registry, Team, Credentials, API, Audit, autonomy) | ✓ |
| L | Edge-case banners + demo triggers (14 total) | ✓ |
| M | Mobile responsive + a11y focus rings | ✓ |

## Deployment

Auto-deploys from `main` via Vercel.

```bash
git push origin main
```
