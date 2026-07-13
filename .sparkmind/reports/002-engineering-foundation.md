# Engineering Report 002: Engineering Foundation

> **Versi**: 1.0 · **Status dokumen**: Final (arsip historis)
> **Terakhir diperbarui**: 2026-07-13 (Sprint 002)
> **Terkait**: [Sprint 002](../sprints/sprint-002-foundation.md) · [ADR-0005](../decisions/ADR-0005-sprint-002-rescope.md) · [Report 001](001-sdos-v1.1-refinement.md)

- **Tanggal**: 2026-07-13
- **Engineer**: AI Engineer (GenSpark)
- **Sprint / Misi**: Sprint 002 — Engineering Foundation
- **Commit**: *(diisi pada commit follow-up — pola sama dengan Report 000/001)*

---

## 1. Ringkasan

Sprint 002 selesai: fondasi engineering Sparkmind kini berjalan sebagai
monorepo pnpm + Turborepo dengan dua workspace (`apps/web` Next.js 15 dan
`packages/shared`), tooling dasar (TypeScript strict, ESLint flat config,
Prettier, EditorConfig, nvmrc), dua standar baru (source code & environment),
dan dokumentasi development (`docs/setup.md`, `docs/architecture.md` v1.2).
Sprint di-rescope dari "Foundation (landing page + monorepo)" menjadi murni
**Engineering Foundation** atas keputusan Founder/CTO (ADR-0005). Seluruh
pipeline verifikasi lulus: install, lint, type-check, build, dan smoke test
production server.

## 2. Requirement

Sprint Brief Founder/CTO (SPRINT 002 — Engineering Foundation):

1. Evaluasi struktur repository & tetapkan struktur project.
2. Siapkan workspace aplikasi utama + konfigurasi tooling dasar.
3. Buat standar struktur source code & standar konfigurasi environment.
4. Buat dokumentasi Development Setup & Architecture Overview.
5. Pastikan seluruh dokumentasi SDOS tetap konsisten.
6. Commit (Conventional Commits), push, Engineering Report.

Out of scope (eksplisit): fitur produk, UI, API, database, Docker,
CI/CD kompleks.

## 3. Yang Dikerjakan

- **Monorepo scaffold**: root `package.json` (turbo + prettier),
  `pnpm-workspace.yaml` (apps/*, packages/*), `turbo.json` (pipeline
  build/dev/lint/type-check), `tsconfig.base.json` (TS strict sebagai basis).
- **`apps/web`**: Next.js 15 App Router, TypeScript strict, halaman
  placeholder minimal (bukan landing page), ESLint flat config
  (`eslint-config-next` via FlatCompat).
- **`packages/shared`**: `@sparkmind/shared` dengan contoh entry `APP_NAME`
  dan tipe `Result<T, E>`; dikonsumsi `apps/web` via `workspace:*`.
- **Tooling**: `.prettierrc.json`, `.prettierignore` (markdown dikecualikan —
  dokumen SDOS milik penulis), `.editorconfig`, `.nvmrc` (Node 20),
  `.env.example`.
- **Standar baru**: `.sparkmind/standards/source-code.md` (letak kode, aturan
  dependency antar-package, Rule of Three) dan
  `.sparkmind/standards/environment.md` (aturan env var, `.env.example`
  sebagai kontrak).
- **Dokumentasi**: `docs/setup.md` (Development Setup: prasyarat, install,
  perintah, checklist verifikasi) dan `docs/architecture.md` v1.2 (status
  implementasi aktual per Sprint 002, batasan saat ini).
- **Konsistensi SDOS**: `sprints/sprint-002-foundation.md` (v2.0, Final),
  ADR-0005, `STATE.md` v1.2, `CURRENT_SPRINT.md`, `DECISION_LOG.md` (+ADR-0005),
  `sprints/README.md` (roadmap → backlog tanpa nomor tetap), `CHANGELOG.md`
  (entri Sprint 002), root `README.md` (struktur & roadmap baru).

## 4. Keputusan Penting & Alasannya

| Keputusan | Alasan | ADR |
|-----------|--------|-----|
| Rescope Sprint 002 → Engineering Foundation murni (tanpa landing page, DNS, deploy) | Fondasi harus siap sebelum fitur; menghindari sprint terlalu gemuk | [ADR-0005](../decisions/ADR-0005-sprint-002-rescope.md) |
| Tanpa Docker / CI/CD kompleks | Pre-MVP, satu engineer AI, belum ada kebutuhan nyata — hindari overengineering | ADR-0005 |
| Hanya `apps/web` + `packages/shared` yang dibuat | `ui`/`ai`/`foundry` dibuat saat sprint yang membutuhkannya (progressive structure) | ADR-0005 / Constitution §2.7 |
| Markdown dikecualikan dari Prettier | Menghindari churn besar pada dokumen SDOS yang formatnya milik penulis | - |
| Roadmap sprint berikutnya tidak diberi nomor tetap | Urutan Landing Page vs Foundry Core diputuskan Founder saat planning | - |

## 5. Yang TIDAK Dikerjakan (dan kenapa)

- **Landing page, DNS Cloudflare, deploy Vercel, identitas visual** — keluar
  dari scope via ADR-0005; menjadi backlog sprint berikutnya (butuh
  kredensial + persetujuan Founder).
- **`packages/ui` / `packages/ai` / `packages/foundry`, `apps/dashboard`** —
  dibuat saat dibutuhkan.
- **Docker / CI/CD** — belum dibutuhkan pre-MVP (ADR-0005).
- **Fitur produk / API / database** — eksplisit out of scope Sprint Brief.

## 6. Testing

Seluruh verifikasi dijalankan pada scaffold sebelum commit:

- `pnpm install` — sukses (pnpm 10.13.1, Node 20).
- `pnpm lint` — ✅ lulus (2 workspace) *setelah* memperbaiki dependency yang
  hilang: `@eslint/eslintrc` ditambahkan ke `apps/web` devDependencies.
- `pnpm type-check` — ✅ lulus (`tsc --noEmit`, 2 workspace).
- `pnpm build` — ✅ lulus (Next.js production build; route `/` static,
  First Load JS ~102 kB).
- `pnpm format:check` — ✅ lulus setelah `packages/shared/src/index.ts`
  di-format dan `*.md` masuk `.prettierignore`.
- **Smoke test**: `next start` pada port 3000 → HTTP respons halaman
  placeholder (`<!DOCTYPE html>... lang="id"`), server kemudian dimatikan.

Temuan: 1 dependency hilang (`@eslint/eslintrc`) — bukti pentingnya
menjalankan pipeline penuh sebelum commit.

## 7. Dampak ke Dokumentasi

- [x] STATE.md diperbarui (v1.2)
- [x] CHANGELOG.md diperbarui (entri Sprint 002)
- [x] Dokumen lain: `CURRENT_SPRINT.md`, `DECISION_LOG.md`,
  `sprints/README.md`, `sprints/sprint-002-foundation.md`, ADR-0005,
  `docs/setup.md` (baru), `docs/architecture.md` (v1.2),
  `standards/source-code.md` (baru), `standards/environment.md` (baru),
  root `README.md`.

## 8. Rekomendasi Langkah Berikutnya

1. **Founder**: planning sprint berikutnya — pilih urutan **Landing Page**
   (hero + Book a Demo + DNS + deploy Vercel) vs **Foundry Core**.
2. **Founder**: siapkan kredensial Cloudflare & Vercel bila landing page
   dipilih.
3. **Engineer**: pertimbangkan menambah `pnpm-lock.yaml` ke repository pada
   sesi dengan kuota cukup (install penuh) agar build reproducible; saat ini
   lockfile belum ter-commit karena dihasilkan di sandbox.
4. **Engineer**: evaluasi kebutuhan SDOS v2 (One Update Principle, minimal
   context loading) setelah 1–2 sprint development berjalan — sesuai arahan
   CTO, upgrade dilakukan berdasarkan friksi nyata, bukan asumsi.

## 9. Blocker / Butuh Keputusan

| # | Item | Menunggu |
|---|------|----------|
| 1 | Planning & persetujuan sprint berikutnya (Landing Page vs Foundry Core) | Founder |
| 2 | Kredensial Cloudflare & Vercel (untuk sprint landing page) | Founder |

## 10. Commit & Push

*(Diisi pada commit follow-up setelah push — pola sama dengan Report 000/001.)*
