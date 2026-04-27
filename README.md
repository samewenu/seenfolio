# SeenFolio — Prototype

Autonomous growth infrastructure for online businesses. One platform replaces 10–15 marketing tools by analyzing performance, deciding optimizations, and executing changes — paid for in tokens (only when the platform acts).

This repo holds the lo-fi and hi-fi prototypes for stakeholder review.

## Pages

- [`index.html`](index.html) — Lo-fi prototype (12 figures on a design board)
- [`auth.html`](auth.html) — Sign in / sign up
- [`onboarding.html`](onboarding.html) — Four-step setup with the analyzing wait state
- [`app.html`](app.html) — Hi-fi app: dashboard, engines, drawers, modals, edge cases

## App views (`app.html`)

**Workspace:** Home · Activity · Inbox · Chat
**Engines:** Content · Ads · Email · Reputation · WhatsApp · Customers
**Insights:** Performance · Schedule · Billing
**Account:** Settings

## Edge cases covered

Click the cogwheel bottom-left in `app.html` to trigger any of:

- Token threshold (80%) banner
- Ad budget exhausted banner
- Performance auto-protect banner
- Multiple-undo learning modal (also fires automatically after 3 undos)
- Above-pattern token approval modal
- Conflicting optimization drawer
- Auto-disabled feature drawer
- Live action toast

## Modes

Beginner / Intermediate / Advanced switch the density and disclosure of the app — toggle in Settings or via the demo panel. The mode badge in the topbar reflects the current state.

## Stack

Static HTML / CSS / vanilla JS. No build step. Fonts: Fraunces (serif), Geist + Geist Mono (sans + mono).
