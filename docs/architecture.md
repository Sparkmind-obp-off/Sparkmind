# Arsitektur Sistem — Sparkmind v1.0

> **Terakhir diperbarui**: 2026-07-13 (Mission 000)
> Sumber keputusan: [ADR-0001](../.sparkmind/decisions/ADR-0001-tech-stack-v1.md)
> · Detail stack: [tech-stack.md](../.sparkmind/context/tech-stack.md)

Dokumen ini menggambarkan arsitektur **target** v1.0. Implementasi dimulai
pada Sprint 001 (landing page + monorepo scaffold).

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

## 3. Struktur Monorepo (Target Sprint 001)

```
sparkmind/
├── apps/
│   ├── web/          ← landing page + website utama
│   └── dashboard/    ← (nanti, saat dibutuhkan)
├── packages/
│   ├── ui/           ← komponen bersama
│   ├── ai/           ← wrapper Vercel AI SDK
│   ├── foundry/      ← engine platform (agents, memory, knowledge, ...)
│   └── shared/       ← util & types bersama
├── docs/
├── turbo.json
├── pnpm-workspace.yaml
└── package.json
```

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

- Belum ada kode aplikasi — repository berisi fondasi governance (SDOS).
- Kredensial Cloudflare/Vercel/Supabase belum tersedia (blocker Sprint 001,
  lihat [STATE.md](../.sparkmind/STATE.md)).
