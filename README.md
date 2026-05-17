# SeenFolio — Prototype

Autonomous growth infrastructure for online businesses. One platform replaces 10–15 marketing tools by analyzing performance, deciding optimizations, and executing changes — paid for in tokens, only when the platform acts.

Clickable high-fidelity prototype in vanilla HTML/CSS/JS. No backend, no build step.

**Live:** [seenfolio.vercel.app](https://seenfolio.vercel.app)
**Repo:** [github.com/samewenu/seenfolio](https://github.com/samewenu/seenfolio)

## Site map

| Route | File | Purpose |
| --- | --- | --- |
| `/` | `index.html` | Public marketing landing |
| `/pricing.html` | `pricing.html` | Pricing tiers + token-cost table + FAQ |
| `/docs.html` | `docs.html` | Setup guides for 4 integration methods (JS SDK, WordPress, Cloudflare Worker, CI/GitHub) |
| `/sign-in.html` | `sign-in.html` | Sign in / sign up |
| `/onboarding.html` | `onboarding.html` | Multi-step setup with analyzing wait state |
| `/app.html` | `app.html` | The full app — dashboard, engines, drawers, modals, edge cases |
| `/lofi.html` | `lofi.html` | Original lo-fi design board (12 figures) |

## App surface (`app.html`)

**Workspace:** Home · Activity · Inbox · Chat · Registry (advanced mode)
**Engines:** Pages (SEO/GEO site map) · AI Citations · Content · Ads · Email · Reputation · WhatsApp · Customers
**Insights:** Performance · Schedule · Billing
**System (advanced mode):** Team · Credentials · API & Webhooks · Audit log
**Account:** Settings (with per-engine autonomy controls)

## Architecture (prototype)

- **Stack:** static HTML/CSS/JS, no build step, no framework
- **Shared mock data:** `mock.js` exposes `window.SeenFolioMock` — workspaces, pages, actions, attribution, contacts, conversations, reviews, token ledger, credentials, webhook log, audit log, edge-case triggers
- **Shared state:** `state.js` exposes `window.SeenFolioState` — localStorage-backed, namespaced `seenfolio:*`, resettable from settings
- **Async sim:** 600ms simulated latency via `setTimeout`
- **Design system:** warm-dark base (`#0E0D0A`), cream ink (`#F4EBD7`), single amber accent (`#E8B260`). Fraunces (display) + Geist (body) + Geist Mono (system voice)

## Multi-workspace

Click the workspace pill in the topbar to swap between **Silver Jewelry Co** (Growth plan, Africa/Lagos) and **Kente Threads** (Starter, USD→NGN). Selection persists across reloads.

## Three modes

| Mode | Who | What you see |
| --- | --- | --- |
| Beginner | 90% of users · default | Outcomes, activity feed, chat. No engine names, no technical metrics. |
| Intermediate | Curious operators | Engine views, channel breakdown, preview-before-publish. |
| Advanced | Power users · opt-in | Per-engine controls, System section (Team, Credentials, API, Audit), Registry view. |

Toggle in Settings → Display mode or via the demo control panel.

## Per-engine autonomy

Each of the 7 engines has its own autonomy level: **Full Auto / Suggest+Confirm / Notify Only / Off** — set independently per workspace under Settings → Per-engine autonomy.

## Edge cases covered

Trigger any via the demo control panel (gear icon, bottom-right of `app.html`):

| Trigger | What appears |
| --- | --- |
| Token threshold (80%) | Banner with top-up + auto-refill CTAs |
| Ad budget exhausted | Red banner with +$500 / +$1,000 / Custom options |
| Performance auto-protect | Neutral banner explaining auto-disabled feature |
| SDK blocked by CSP | Banner with auto-generated CSP directive copy |
| WhatsApp 24h window closing | Warning banner with template-mode fallback |
| Email bounce > 5% | Auto-paused banner with list cleanup CTA |
| Insufficient attribution data | Neutral banner explaining Shapley → time-decay fallback |
| Meta ad account suspended | Red banner with appeal flow |
| Patch hallucination held | Warning banner with claim-by-claim review |
| Multi-undo learning | Modal asking what's not working |
| Above-pattern token approval | Modal showing 4× spend with test-version offer |
| Conflicting optimization | Drawer explaining SEO vs CRO tradeoff |
| Auto-disabled feature | Drawer with re-enable option |
| Live action toast | Slides in from bottom-right |
| Reset demo | Wipes localStorage and reloads from sign-up |

## Build phases delivered

✓ **Phase A** — Mock data universe + state layer
✓ **Phase B** — Marketing surface (landing, pricing, docs)
✓ **Phase D** — Pages view, AI Citations view, sitemap diff
✓ **Phase K** — Registry, Team, Credentials, API & Webhooks, Audit, workspace switcher, per-engine autonomy
✓ **Phase L** — Edge-case banners and demo triggers
… Engine-specific deepening (G, H, I, J, F) continues; current engine views are substantively populated.

## Deployment

Auto-deploys from `main` via Vercel.

```bash
git push origin main
```
