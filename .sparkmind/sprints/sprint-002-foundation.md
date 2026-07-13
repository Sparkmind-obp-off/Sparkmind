# Sprint 002: Foundation

> **Versi**: 1.1 · **Status dokumen**: Draft (menunggu persetujuan Founder)
> **Terakhir diperbarui**: 2026-07-13 (Sprint 001)
> **Terkait**: [Indeks sprint](README.md) · [tech-stack.md](../context/tech-stack.md) · [ADR-0001](../decisions/ADR-0001-tech-stack-v1.md) · [ADR-0004](../decisions/ADR-0004-sprint-renumbering.md)

> ℹ️ Sprint ini sebelumnya bernomor **001**. Dinomori ulang menjadi **002**
> karena Sprint 001 dipakai untuk SDOS v1.1 Refinement — lihat
> [ADR-0004](../decisions/ADR-0004-sprint-renumbering.md).

- **Status**: 📝 Draft (menunggu persetujuan Founder)
- **Durasi target**: 2–3 hari
- **Mulai**: TBD
- **Selesai**: TBD

---

## Goal

Sparkmind punya wajah publik: landing page live di `sparkmind.biz.id` dengan
positioning "Building AI Employees for Modern Businesses", di atas fondasi
monorepo yang siap untuk Sprint 003 (Foundry Core).

## Definition of Success

- [ ] `sparkmind.biz.id` mengarah ke website live (HTTPS, via Cloudflare DNS)
- [ ] Landing page: hero + value proposition + tombol **Book a Demo**
- [ ] Monorepo scaffold berjalan (`pnpm dev` menjalankan `apps/web`)
- [ ] Identitas visual dasar: logo sederhana, palet warna, tipografi

## Tasks

| # | Task | Status | Catatan |
|---|------|--------|---------|
| 1 | Hubungkan `sparkmind.biz.id` ke Cloudflare (nameserver DomaiNesia → Cloudflare) | ⏳ | Butuh akses Founder |
| 2 | Scaffold monorepo (pnpm + Turborepo, `apps/web`, `packages/ui|shared`) | ⏳ | `packages/ai` & `foundry` menyusul Sprint 003 |
| 3 | Setup Next.js 15 + TypeScript + Tailwind + shadcn/ui di `apps/web` | ⏳ | |
| 4 | Identitas visual dasar (logo teks, warna, tipografi) | ⏳ | Sederhana dulu |
| 5 | Bangun landing page (hero, positioning, Book a Demo) | ⏳ | |
| 6 | Deploy ke Vercel + hubungkan custom domain | ⏳ | Butuh akun Vercel Founder |
| 7 | Update dokumentasi (STATE, CHANGELOG, docs/architecture) | ⏳ | |

## Out of Scope

- Dashboard, auth (Clerk), database (Supabase) — belum dibutuhkan landing page.
- Foundry Core (Sprint 003).
- ClinicFlow AI (Sprint 004).
- Blog, halaman about, multi-halaman.

## Dependencies / Blocker

1. ✋ Persetujuan Founder atas sprint ini.
2. ✋ Akses Cloudflare (akun) & Vercel (akun) — atau Founder melakukan langkah
   DNS/deploy dengan panduan.

---

## Retrospective (diisi saat sprint selesai)

- **Berjalan baik**:
- **Perlu diperbaiki**:
- **Dibawa ke sprint berikutnya**:
