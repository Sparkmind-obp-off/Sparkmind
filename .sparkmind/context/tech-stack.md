# Tech Stack — Final v1.0

> **Versi**: 1.1 · **Status dokumen**: Aktif
> **Terakhir diperbarui**: 2026-07-13 (Sprint 001)
> **Terkait**: [ADR-0001](../decisions/ADR-0001-tech-stack-v1.md) · [product.md](product.md) · [engineering.md](../standards/engineering.md)
>
> Keputusan resmi: lihat [ADR-0001](../decisions/ADR-0001-tech-stack-v1.md).
> Perubahan stack = ADR baru + persetujuan CTO/Founder.

---

## Stack Resmi

| Layer | Pilihan | Alasan Singkat |
|-------|---------|----------------|
| Language | TypeScript | Standar industri, type-safe |
| Framework | Next.js 15 | SEO, cepat, ekosistem besar |
| UI | Tailwind CSS + shadcn/ui | Cepat & profesional |
| Deploy | Vercel (free tier) | Integrasi terbaik dengan Next.js |
| DNS/CDN/Security | Cloudflare | DNS cepat, WAF, siap AI Gateway/R2 nanti |
| Database | Supabase (free tier) | PostgreSQL + Auth + Storage + pgvector |
| Auth | Clerk | UX login matang, multi-organization |
| AI | Vercel AI SDK | Provider-agnostic (OpenAI/Gemini/Claude/Groq) |
| Email | Resend | Simpel |
| Analytics | PostHog | Lebih berguna dari GA untuk SaaS |
| Monitoring | Sentry | Error tracking |
| Package manager | pnpm | Cepat, hemat disk |
| Monorepo | Turborepo | Satu repo untuk semua apps & packages |

## Vector Search

- Gunakan **pgvector di Supabase** saat RAG dibutuhkan.
- **Jangan** pakai Pinecone dulu.

## Payment (nanti, setelah ada customer)

- Midtrans (Indonesia) → Stripe (internasional).

---

## Arsitektur Target

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
```

## Prinsip: Vendor-Agnostic

Foundry didesain agar **tidak terkunci ke vendor mana pun**:

- Hari ini deploy di Vercel; pindah ke Cloudflare Pages/Workers harus mungkin
  dengan perubahan minimal.
- AI provider bisa diganti (via Vercel AI SDK) tanpa mengubah aplikasi.
- Database bisa diganti bila diperlukan (akses via layer terpusat).

## Kapan Full Cloudflare Native?

Belum. Dipertimbangkan ulang ketika Sparkmind sudah memiliki skala
(ratusan/ribuan customer, kebutuhan queues, background jobs, realtime berat).
Keputusan ini dicatat di ADR-0001.

---

## Struktur Monorepo (Target — dibuat di Sprint 002)

```
sparkmind/
├── apps/
│   ├── web/          ← landing page + website utama
│   └── dashboard/    ← (nanti, saat dibutuhkan)
├── packages/
│   ├── ui/           ← komponen bersama
│   ├── ai/           ← wrapper Vercel AI SDK
│   ├── foundry/      ← engine platform (lihat product.md)
│   └── shared/       ← util & types bersama
├── docs/
├── turbo.json
├── pnpm-workspace.yaml
└── package.json
```
