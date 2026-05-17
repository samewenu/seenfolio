# SeenFolio — Prototype

Autonomous growth infrastructure for online businesses. One platform replaces 10–15 marketing tools by analyzing performance, deciding optimizations, and executing changes — paid for in tokens (only when the platform acts).

A clickable high-fidelity prototype in vanilla HTML/CSS/JS. No backend.

**Live:** [seenfolio.vercel.app](https://seenfolio.vercel.app)

## Site map

| Route | File | Purpose |
| --- | --- | --- |
| `/` | `index.html` | Public marketing landing |
| `/pricing.html` | `pricing.html` | Pricing tiers + token costs + FAQ |
| `/docs.html` | `docs.html` | Setup guides for 4 integration methods |
| `/sign-in.html` | `sign-in.html` | Sign in / sign up |
| `/onboarding.html` | `onboarding.html` | Multi-step setup with analyzing wait state |
| `/app.html` | `app.html` | The full app — dashboard, engines, drawers, modals |
| `/lofi.html` | `lofi.html` | Original lo-fi design board (12 figures) |

## Architecture (prototype)

- **Stack:** static HTML/CSS/JS, no build step, no framework
- **Shared mock data:** `mock.js` exposes `window.SeenFolioMock` (workspaces, pages, actions, attribution, contacts, conversations, reviews, token ledger, edge-case triggers, etc.)
- **Shared state:** `state.js` exposes `window.SeenFolioState` — localStorage-backed, namespaced `seenfolio:*`, resettable from settings
- **Async sim:** 600ms simulated latency via `setTimeout`
- **Design system:** warm-dark base (`#0E0D0A`), cream ink (`#F4EBD7`), single amber accent (`#E8B260`). Fraunces (display) + Geist (body) + Geist Mono (system voice).

## App surface (in `app.html`)

**Workspace:** Home · Activity · Inbox · Chat
**Engines:** Content · Ads · Email · Reputation · WhatsApp · Customers
**Insights:** Performance · Schedule · Billing
**Account:** Settings

## Edge cases covered

Trigger any via the demo control panel inside `app.html`:

- Token threshold (20% / 5%)
- Ad budget exhausted
- Performance auto-protect
- Multi-undo learning prompt
- Above-pattern token approval
- Conflicting optimization
- Auto-disabled feature
- CSP blocking the SDK
- WhatsApp 24h window expiring
- Email bounce-rate auto-pause
- Insufficient attribution data
- Ad account suspended
- Meta ad in extended review
- Patch hallucination flagged
- Live-action toast

## Three modes

Beginner / Intermediate / Advanced shifts disclosure density across the entire app. Toggle in Settings.

## Deployment

Auto-deploys from `main` via Vercel. To deploy locally:

```bash
git push origin main
```

## Repo

[github.com/samewenu/seenfolio](https://github.com/samewenu/seenfolio)
