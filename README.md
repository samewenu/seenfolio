# SeenFolio — Prototype

Autonomous growth infrastructure for online businesses. One platform replaces 10–15 marketing tools by analyzing performance, deciding optimizations, and executing changes — paid for in tokens, only when the platform acts.

Clickable high-fidelity prototype in vanilla HTML/CSS/JS. No backend, no build step.

**Style:** PostHog-inspired cream-paper light theme with hand-drawn illustrations. Mascot is **Sage the owl** (16 contextual poses in `sage.svg`). Orange `#F54E00` accents, yellow `#F9BD2B` highlights, drawn-shadow cards (no blur), sticker-style rotations on hover.

**Live:** [seenfolio.vercel.app](https://seenfolio.vercel.app)
**Repo:** [github.com/samewenu/seenfolio](https://github.com/samewenu/seenfolio)

## Site map · 21 HTML pages

### Public marketing (8)
| Path | Purpose |
| --- | --- |
| `/` (index) | Marketing landing — hero, problem, 7 engines, principles, pricing teaser, testimonial, final CTA |
| `pricing.html` | 4 plans + token-cost paper receipt + FAQ comic cards |
| `docs.html` | 4 integration methods + first-7-days timeline + Sage with wrench |
| `about.html` | Story, values, team, why-an-owl section |
| `customers.html` | 6 case-study cards across emerging markets |
| `trust.html` | Architecture, compliance badges, undo guarantee |
| `changelog.html` | 8 release entries with feature/improvement/integration/fix tags |
| `status.html` | Service health page with uptime bars + incident timeline |
| `blog.html` | Featured post + 6 sample posts across categories |
| `contact.html` | Contact form + direct emails + open roles list |
| `404.html` | Sage-napping illustration with friendly message |

### Auth flows (6)
| Path | Purpose |
| --- | --- |
| `sign-in.html` | Sign in / sign up tabs + Google + GitHub SSO |
| `forgot.html` | Password reset email request |
| `reset.html` | Set new password form |
| `verify.html` | 6-digit email verification with Sage holding a ribbon |
| `2fa.html` | QR code mock + 6 backup codes |
| `magic.html` | Magic-link "check your inbox" state |

### Onboarding (1, 6 steps)
| Path | Purpose |
| --- | --- |
| `onboarding.html` | Sell → website → goal → integration → analyzing → welcome with 5 recommendations |

### App shell (1 file · 36 view-panes)

`app.html` is the heart of the prototype.

**Workspace** · Home, Activity, Inbox, Chat, Registry (advanced)
**Engines** · Pages, AI Citations, Content, Ads, Email, Reputation, WhatsApp, Customers
**Engine depth** (NEW) · Events stream, Experiments, Library, Journeys
**Health & Watch** (NEW) · Speed, Fraud Center, Localization, Feedback, Financials, Crisis Watch
**Insights** · Performance, Schedule, Goals (NEW), Billing
**Operations** (advanced) · Rules (NEW), Integration health, Compliance, DLQ
**System** (advanced) · Team, Credentials, API & Webhooks, Audit log
**Account** · Settings

### Lo-fi reference
| Path | Purpose |
| --- | --- |
| `lofi.html` | Original 12-figure wireframe board (kept as historical artifact, banner links back to current site) |

## Engine coverage map (vs source PDFs)

| Engine / Capability | View(s) | Status |
| --- | --- | --- |
| 1 · SEO + GEO | Pages + Citations + Speed (Engine 1 self-policing) | ✓ |
| 2 · Business Intelligence (Brain) | Performance + Activity + Journeys + Events stream | ✓ |
| 3 · Unified Ads | Ads + Experiments + Fraud Center (click fraud) | ✓ |
| 4 · Content | Content + Library + Experiments | ✓ |
| 5 · Trust Building | Reputation + Crisis Watch | ✓ |
| 6 · WhatsApp CRM | WhatsApp + Customers | ✓ |
| 7 · Retention | Email + Goals (OKR pacing) | ✓ |
| Critical Gap 1 · Speed & Performance | Speed view | ✓ |
| Critical Gap 2 · Fraud & Quality | Fraud Center view | ✓ |
| Critical Gap 3 · Localization | Localization view | ✓ |
| Critical Gap 4 · Customer Feedback | Feedback view | ✓ |
| Critical Gap 5 · Financial Intelligence | Financials view | ✓ |
| Critical Gap 6 · Crisis & Reputation | Crisis Watch view | ✓ |
| Action Registry + Undo | Registry + per-action drawer | ✓ |
| Autonomy Mode Controls (per engine) | Settings | ✓ |
| Security · Credentials encrypted | Credentials view | ✓ |
| Multi-Tenancy / workspace switcher | Topbar dropdown | ✓ |
| Token Accounting | Billing + token meter | ✓ |
| 4 Integration Methods | Docs + Onboarding step 4 | ✓ |
| Webhook log + signature verify | API & Webhooks view | ✓ |
| API keys (sf_live_/sf_test_) | API & Webhooks view | ✓ |
| Audit log (12-month retention) | Audit log view | ✓ |
| BullMQ Queue / DLQ | DLQ view (Advanced) | ✓ |
| Custom autonomy rules | Rules view (Advanced) | ✓ |
| GBP automation | Reputation view | ✓ |
| Social proof widget | Reputation view | ✓ |
| Lifecycle campaign DAG | Email view | ✓ |
| Churn prediction (ML) | Email view | ✓ |
| Brand voice system | Content view | ✓ |
| Content gap radar | Content view | ✓ |
| Compliance (DPA/NDPR/GDPR) | Compliance view | ✓ |

## Edge cases · 18 banners triggerable from demo panel

Token threshold (80%) · Ad budget exhausted · Performance auto-protect · CSP block · WhatsApp 24h window closing · Email bounce >5% · Insufficient attribution · Meta ad account suspended · Patch hallucination · Cloudflare KV stale · Sitemap structure changed · Meta ad review >48h · WhatsApp human handoff · Webhook signature mismatch · New channel learning phase · OAuth credential expired · Brand voice mismatch (3+ undos) · DLQ depth alert (>100)

## Modals + flows

- Plan upgrade modal (from low-token banner)
- Add workspace modal (from workspace switcher)
- Invite teammate modal (from Team view)
- Create API key modal (from API view)
- Webhook replay modal (from API view)
- Token approval modal (always-on for cost confirmation)
- Above-pattern approval (4× normal spend)
- Multi-undo learning prompt (after 3+ undos)
- Conflicting-optimization drawer
- Performance auto-protect drawer
- Notifications drawer (from topbar bell)
- Action detail drawer (every action surfaces it)

## Sage the owl · 16 poses

`sage-wave`, `sage-controls`, `sage-desk`, `sage-magnify`, `sage-clipboard`, `sage-multitask`, `sage-nap`, `sage-sign`, `sage-ribbon`, `sage-calc`, `sage-wrench`, `sage-wink`, `sage-stopwatch`, `sage-globe`, `sage-shield`, `sage-point`

## Three display modes

| Mode | Who | What's shown |
| --- | --- | --- |
| Beginner | 90% of users · default | Workspace nav + outcomes-only. Engine names hidden. |
| Intermediate | Curious operators | Adds full engines, engine-depth views, Health & Watch, attribution toggle, Goals |
| Advanced | Power users · opt-in | Adds Operations (Rules, Health, Compliance, DLQ), Registry, System (Team, Credentials, API, Audit), per-engine controls |

## Foundation

- **`mock.js`** · `window.SeenFolioMock` shared universe with 32 mock data structures (workspaces, pages, actions, attribution, campaigns, contacts, reviews, token ledger, site speed metrics, fraud signals, locales, NPS surveys, finance breakdown, crisis monitor, events log, experiments, library items, journeys, custom rules, goals, integration health, compliance state, DLQ jobs, release notes, …)
- **`state.js`** · `window.SeenFolioState`, localStorage-backed under `seenfolio:*`, resettable from settings
- **`styles.css`** · shared design system (colors, typography, components)
- **`sage.svg`** · 16-pose mascot symbol sheet
- **Design system** · Mona Sans (variable) + JetBrains Mono + Caveat. Cream `#EEEFE9` base, ink `#151515`, orange `#F54E00`, yellow `#F9BD2B`, teal `#29DBBB`, red `#EF4444`, blue `#1D4AFF`. 2px black borders, 4px offset drawn shadows.

## Run locally

```bash
python3 -m http.server 8088
# open http://localhost:8088/
```

## Deployment

Auto-deploys from `main` via Vercel.

```bash
git push origin main
```

## Source documents

- **MVP Blueprint** — strategic spec: 7 engines, 8 design principles, 6 critical missing capabilities, token PAYU pricing
- **End-to-End Architecture** — technical reference: TypeScript/Node, Postgres + TimescaleDB + pgvector, BullMQ workers, Hetzner + Kamal deploys, Claude API, RLS multi-tenancy

Every concept in both PDFs has at least one clickable representation in this prototype.
