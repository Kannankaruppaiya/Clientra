# Clienter — Scaffold

A Next.js + Supabase skeleton reconstructed from the live app's architecture
(via REA static analysis + live RLS probing). Same tech stack as the real app.

## What this is
- **Structure only.** Routes, API handlers, Supabase wiring, and RLS policy
  templates. The business logic is **not** included — it lives server-side in
  the original app and cannot be recovered from the shipped frontend.
- A faithful **starting point** to rebuild on, not a clone.

## Stack
Next.js (App Router) · React · @supabase/ssr · Postgres + RLS · Razorpay ·
hCaptcha · Cloudflare R2 · VAPID web push.

## Layout
- `app/` — 41 page routes (auth, main app, teammate portal, admin) + 19 `/api/*` handlers
- `lib/supabase/` — browser, server, and service-role clients
- `lib/hcaptcha.ts`, `lib/razorpay.ts` — service helpers
- `middleware.ts` — session refresh + route guard
- `supabase/migrations/` — schema (`0001`) and RLS policies (`0002`)

## Run
```bash
cp .env.example .env.local   # fill in your own Supabase / Razorpay / hCaptcha keys
npm install
npm run dev
```
Apply the SQL in `supabase/migrations/` to your Supabase project (SQL editor or CLI).

## Security notes baked in
- Anon key is public by design; **RLS** (migration `0002`) is what protects data.
- `SUPABASE_SERVICE_ROLE_KEY`, `RAZORPAY_KEY_SECRET`, `HCAPTCHA_SECRET`,
  `VAPID_PRIVATE_KEY` are **server-only** — never prefixed `NEXT_PUBLIC_`.
- Super-admin access must be checked server-side by role, not by an email in the bundle.
