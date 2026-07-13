# ADR-0001: Tech Stack v1.0 — Hybrid Vercel + Cloudflare, Bukan Full Cloudflare Native

> **Versi**: 1.1 · **Status dokumen**: Final
> **Terakhir diperbarui**: 2026-07-13 (Sprint 001 — hanya metadata; keputusan tidak berubah)
> **Terkait**: [DECISION_LOG.md](../DECISION_LOG.md) · [tech-stack.md](../context/tech-stack.md) · [ADR-0003](ADR-0003-foundry-platform-first.md)

- **Tanggal**: 2026-07-13
- **Status**: ✅ Accepted
- **Diputuskan oleh**: Founder + CTO (percakapan perencanaan pra-Mission 000)

---

## Konteks

Sparkmind memulai dari nol dengan modal sangat terbatas dan target tunggal:
customer pertama secepat mungkin. Muncul pertanyaan arsitektur: full Cloudflare
native (Pages, Workers, D1, R2, KV, Durable Objects) atau modern SaaS stack
(Vercel + Supabase + Clerk)?

## Keputusan

Kami menggunakan **stack hybrid**:

- **Cloudflare** sebagai infra layer: DNS, keamanan, CDN (nanti: AI Gateway, R2).
- **Vercel** sebagai app layer: hosting Next.js 15.
- **Supabase** sebagai database (PostgreSQL + Storage + pgvector).
- **Clerk** untuk auth, **Vercel AI SDK** untuk LLM (provider-agnostic),
  **Resend** (email), **PostHog** (analytics), **Sentry** (monitoring),
  **pnpm + Turborepo** (monorepo).

Detail lengkap: `../context/tech-stack.md`.

## Alasan

1. Tujuan saat ini adalah **customer pertama**, bukan memenangkan lomba
   arsitektur. Stack ini paling cepat untuk membangun MVP.
2. Dokumentasi & template ekosistem Next.js + Supabase + Clerk sangat banyak.
3. Full Cloudflare native menuntut belajar banyak primitif (Workers, D1, DO,
   KV, Queues) — memperlambat delivery.
4. Kedua platform dipakai sesuai keunggulan masing-masing, bukan dipilih salah satu.

## Alternatif yang Dipertimbangkan

| Alternatif | Kenapa tidak dipilih |
|------------|----------------------|
| Full Cloudflare native | Learning curve besar, memperlambat MVP; masuk akal nanti di skala besar |
| Full Vercel tanpa Cloudflare | Kehilangan DNS/WAF/CDN gratis & jalur migrasi masa depan |
| Kubernetes/microservices | Overengineering ekstrem untuk fase ini |

## Konsekuensi

- **Positif**: kecepatan build maksimal; biaya Rp0 (free tier); tidak terkunci
  vendor (Foundry didesain vendor-agnostic).
- **Negatif**: dua platform yang harus dikelola (Cloudflare + Vercel);
  batas free tier Vercel/Supabase harus dipantau.
- **Ditinjau ulang ketika**: Sparkmind memiliki ratusan customer dan kebutuhan
  queues/background jobs/realtime berat → evaluasi migrasi ke Cloudflare native.
