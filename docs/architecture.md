# Arsitektur Sistem — Sparkmind v1.0

> **Versi**: 1.2 · **Status dokumen**: Aktif
> **Terakhir diperbarui**: 2026-07-13 (Sprint 002)
> **Terkait**: [ADR-0001](../.sparkmind/decisions/ADR-0001-tech-stack-v1.md) · [tech-stack.md](../.sparkmind/context/tech-stack.md) · [source-code.md](../.sparkmind/standards/source-code.md) · [Development Setup](setup.md)

Dokumen ini menggambarkan arsitektur **target** v1.0 beserta **status
implementasi** per Sprint 002 (Engineering Foundation): monorepo scaffold
sudah berjalan; layanan eksternal (Vercel, Supabase, Clerk, dst.) belum
diintegrasikan.

---

## 1. Gambaran Umum

Arsitektur hybrid: **Cloudflare sebagai infra layer**, **Vercel sebagai app
layer**, **Supabase sebagai data layer**.

```
                 sparkmind.biz.id
                        │
                Cloudflare (DNS + Security + CDN)
                        │
                  Vercel (Hosting)
                        │
         ┌──────────────┼──────────────┐
         ▼              ▼              ▼
     Next.js App   AI SDK Layer    API Routes
         │              │
         └───────┬──────┘
                 ▼
             Supabase
      (DB + Storage + RLS)
                 │
      ┌──────────┼──────────┐
      ▼          ▼          ▼
    Clerk     Resend     PostHog
   (Auth)    (Email)   (Analytics)
```

## 2. Lapisan & Tanggung Jawab

| Lapisan | Teknologi | Tanggung Jawab |
|---------|-----------|----------------|
| Edge / Infra | Cloudflare | DNS, WAF, CDN; nanti AI Gateway & R2 |
| App | Next.js 15 di Vercel | UI, SSR/SEO, API routes |
| AI | Vercel AI SDK | Abstraksi LLM provider-agnostic (OpenAI/Gemini/Claude/Groq) |
| Data | Supabase (PostgreSQL) | Database, Storage, RLS, pgvector (RAG nanti) |
| Auth | Clerk | Login, session, multi-organization |
| Observability | PostHog + Sentry | Analytics produk + error tracking |

## 3. Struktur Monorepo

Status per Sprint 002 — ✅ sudah ada · ⏳ dibuat saat sprint yang membutuhkan:

```
sparkmind/
├── apps/
│   ├── web/          ✅ Next.js 15 (App Router, TS strict) — masih placeholder
│   └── dashboard/    ⏳ nanti, saat dibutuhkan
├── packages/
│   ├── shared/       ✅ util & types bersama (@sparkmind/shared)
│   ├── ui/           ⏳ komponen bersama (saat app kedua / Rule of Three)
│   ├── ai/           ⏳ wrapper Vercel AI SDK (Foundry Core)
│   └── foundry/      ⏳ engine platform (Foundry Core)
├── docs/             ✅ setup.md + architecture.md
├── .sparkmind/       ✅ SDOS (governance)
├── turbo.json        ✅ pipeline build/dev/lint/type-check
├── pnpm-workspace.yaml ✅
├── tsconfig.base.json  ✅ basis TypeScript strict
└── package.json        ✅ root (turbo + prettier)
```

Aturan letak kode & dependency antar-package:
[standards/source-code.md](../.sparkmind/standards/source-code.md).

## 4. Prinsip Arsitektur

1. **Vendor-agnostic** — pindah hosting/AI provider/database harus mungkin
   dengan perubahan minimal (akses via layer terpusat).
2. **Platform-first** — produk vertikal (ClinicFlow, dst.) adalah konfigurasi
   di atas Foundry, bukan aplikasi baru dari nol
   ([ADR-0003](../.sparkmind/decisions/ADR-0003-foundry-platform-first.md)).
3. **Free tier only** — sampai ada customer pertama
   ([Constitution §4](../.sparkmind/CONSTITUTION.md)).
4. **Modul dibuat saat dibutuhkan** — tidak ada abstraksi prematur.

## 5. Batasan Saat Ini

- `apps/web` masih halaman placeholder — **bukan** landing page; landing page
  dibangun pada sprint berikutnya
  ([ADR-0005](../.sparkmind/decisions/ADR-0005-sprint-002-rescope.md)).
- Belum ada integrasi layanan eksternal (Vercel, Cloudflare DNS, Supabase,
  Clerk, PostHog) — kredensial belum tersedia (lihat
  [STATE.md](../.sparkmind/STATE.md)).
- Belum ada CI/CD — verifikasi lewat checklist lokal
  ([setup.md §6](setup.md)); CI ditambahkan saat kebutuhan nyata muncul.
