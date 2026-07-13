# Sprint 002: Engineering Foundation

> **Versi**: 2.0 · **Status dokumen**: Final (sprint selesai)
> **Terakhir diperbarui**: 2026-07-13 (Sprint 002)
> **Terkait**: [Indeks sprint](README.md) · [ADR-0005](../decisions/ADR-0005-sprint-002-rescope.md) · [Report 002](../reports/002-engineering-foundation.md) · [source-code.md](../standards/source-code.md)

> ℹ️ Sprint ini sebelumnya bernomor **001** (di-renumber jadi 002 — lihat
> [ADR-0004](../decisions/ADR-0004-sprint-renumbering.md)), lalu **di-rescope**
> dari "Foundation (landing page + monorepo)" menjadi murni **Engineering
> Foundation** atas keputusan Founder/CTO — lihat
> [ADR-0005](../decisions/ADR-0005-sprint-002-rescope.md).

- **Status**: 🏁 Done
- **Durasi target**: 1–2 hari
- **Mulai**: 2026-07-13
- **Selesai**: 2026-07-13

---

## Goal

Membangun fondasi engineering yang siap digunakan untuk mengembangkan produk
Sparkmind secara berkelanjutan: workspace monorepo yang berjalan, tooling
dasar, standar implementasi, dan dokumentasi development — **bukan** fitur
bisnis.

## Definition of Success

- [x] Evaluasi struktur repository & keputusan struktur project
- [x] Workspace monorepo berjalan (`pnpm dev` menjalankan `apps/web`)
- [x] Tooling dasar terkonfigurasi (TypeScript strict, ESLint, Prettier, Turborepo)
- [x] Standar struktur source code (`standards/source-code.md`)
- [x] Standar konfigurasi environment (`standards/environment.md` + `.env.example`)
- [x] Dokumentasi Development Setup (`docs/setup.md`)
- [x] Architecture Overview diperbarui (`docs/architecture.md`)
- [x] Seluruh dokumentasi SDOS konsisten
- [x] `pnpm lint`, `pnpm type-check`, `pnpm build` lulus

## Tasks

| # | Task | Status | Catatan |
|---|------|--------|---------|
| 1 | Evaluasi struktur repo & tetapkan struktur project | ✅ Done | Monorepo pnpm + Turborepo sesuai ADR-0001; tanpa Docker/CI kompleks (ADR-0005) |
| 2 | Scaffold monorepo: `pnpm-workspace.yaml`, `turbo.json`, `tsconfig.base.json`, root `package.json` | ✅ Done | |
| 3 | Workspace `apps/web` (Next.js 15 + TypeScript, App Router) | ✅ Done | Halaman placeholder — **bukan** landing page |
| 4 | Workspace `packages/shared` (util & types bersama) | ✅ Done | `APP_NAME`, `Result<T,E>` sebagai contoh entry |
| 5 | Tooling dasar: Prettier, ESLint (flat config), `.editorconfig`, `.nvmrc` | ✅ Done | `*.md` dikecualikan dari Prettier (dokumen SDOS milik penulis) |
| 6 | Standar struktur source code | ✅ Done | `standards/source-code.md` |
| 7 | Standar konfigurasi environment | ✅ Done | `standards/environment.md` + `.env.example` |
| 8 | Dokumentasi Development Setup | ✅ Done | `docs/setup.md` |
| 9 | Update Architecture Overview | ✅ Done | `docs/architecture.md` v1.2 — status implementasi aktual |
| 10 | Konsistensi SDOS (STATE, CURRENT_SPRINT, CHANGELOG, README, indeks) | ✅ Done | |
| 11 | Verifikasi: install + lint + type-check + build + smoke test | ✅ Done | Lihat Report 002 §6 |
| 12 | Commit (Conventional Commits) + push + Engineering Report 002 | ✅ Done | |

## Out of Scope

Sesuai arahan Founder/CTO ([ADR-0005](../decisions/ADR-0005-sprint-002-rescope.md)):

- ❌ Fitur produk, UI/landing page, API, database.
- ❌ DNS `sparkmind.biz.id` → Cloudflare, deploy Vercel, identitas visual
  — dipindah ke sprint berikutnya (lihat backlog di indeks sprint).
- ❌ Docker, Kubernetes, microservices, CI/CD kompleks — belum dibutuhkan
  pre-MVP.
- ❌ `packages/ui`, `packages/ai`, `packages/foundry` — dibuat saat sprint
  yang membutuhkannya (Constitution §2.7).

## Dependencies / Blocker

- Tidak ada blocker teknis — seluruh pekerjaan lokal repository.
- Blocker lama (kredensial Cloudflare/Vercel) **tidak lagi memblokir sprint
  ini** karena deploy keluar dari scope; tetap tercatat untuk sprint landing
  page berikutnya.

---

## Retrospective

- **Berjalan baik**: scaffold minimal tapi lengkap (2 workspace, tooling,
  standar, docs); seluruh pipeline verifikasi (`lint`, `type-check`, `build`,
  smoke test production server) lulus; rescope dicatat rapi sebagai ADR-0005
  sehingga tidak ada ambiguitas roadmap.
- **Perlu diperbaiki**: sesi sempat terputus (kredit habis) di tengah sprint —
  scaffold sudah ada tetapi belum ter-commit; recovery berjalan lancar berkat
  SDOS + tar handoff. Ditemukan 1 dependency hilang (`@eslint/eslintrc`) saat
  verifikasi — bukti pentingnya menjalankan pipeline penuh sebelum commit.
- **Dibawa ke sprint berikutnya**: sprint landing page (hero + Book a Demo +
  DNS + deploy Vercel) menunggu persetujuan Founder; urutan relatif terhadap
  Foundry Core diputuskan Founder saat planning.
