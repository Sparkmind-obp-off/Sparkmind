# Current State — Sparkmind

> **Versi**: 1.2 · **Status dokumen**: Aktif (living document)
> **Terakhir diperbarui**: 2026-07-13 (Sprint 002)
> **Terkait**: [CURRENT_SPRINT.md](CURRENT_SPRINT.md) · [DECISION_LOG.md](DECISION_LOG.md) · [README SDOS](README.md)
>
> File ini WAJIB diperbarui di akhir setiap sesi kerja.

---

## 📌 Fase Proyek

**Fase**: Pre-product / Engineering Foundation selesai
**Sprint aktif**: Belum ada (Sprint 002 selesai; sprint berikutnya menunggu planning Founder — lihat [CURRENT_SPRINT.md](CURRENT_SPRINT.md))
**Misi terakhir selesai**: Sprint 002 — Engineering Foundation

---

## ✅ Yang Sudah Ada

| Item | Status | Keterangan |
|------|--------|------------|
| Domain `sparkmind.biz.id` | ✅ Dibeli | Via DomaiNesia, belum dikonfigurasi DNS |
| Repository `Sparkmind` | ✅ Ada | github.com/Sparkmind-obp-off/Sparkmind |
| SDOS (`.sparkmind/`) | ✅ v1.1 Stabil | Dibuat Mission 000, disempurnakan Sprint 001 |
| Tech stack v1.0 | ✅ Diputuskan | Lihat `context/tech-stack.md` & ADR-0001 |
| Monorepo scaffold (pnpm + Turborepo) | ✅ Berjalan | Sprint 002: `apps/web` (Next.js 15) + `packages/shared` |
| Tooling dasar | ✅ Terkonfigurasi | TS strict, ESLint flat, Prettier, `.editorconfig`, `.nvmrc` |
| Standar source code & environment | ✅ Ada | `standards/source-code.md`, `standards/environment.md`, `.env.example` |
| Dokumentasi development | ✅ Ada | `docs/setup.md` (setup) + `docs/architecture.md` v1.2 |
| Verifikasi pipeline | ✅ Lulus | `pnpm lint` + `type-check` + `build` + smoke test (Report 002 §6) |

## ❌ Yang Belum Ada

| Item | Prioritas | Keterangan |
|------|-----------|------------|
| Landing page (hero + Book a Demo) | Tinggi | Sprint berikutnya (di-rescope keluar dari 002 — ADR-0005) |
| DNS domain → Cloudflare + deploy Vercel | Tinggi | Bersama sprint landing page; butuh kredensial |
| Identitas visual (logo, warna) | Sedang | Bersama sprint landing page |
| Foundry Core (`packages/ai`, `packages/foundry`) | Sedang | Sprint Foundry Core |
| ClinicFlow AI (produk pertama) | Sedang | Setelah Foundry Core |
| CI/CD | Rendah | Saat kebutuhan nyata muncul (ADR-0005) |
| Customer pertama | 🎯 GOAL | Sprint sales |

---

## 🗂 Struktur Repository Saat Ini

```
Sparkmind/
├── .sparkmind/          ← SDOS (governance, knowledge, state)
├── apps/
│   └── web/             ← Next.js 15 (App Router, TS strict) — placeholder
├── packages/
│   └── shared/          ← @sparkmind/shared (util & types bersama)
├── docs/                ← setup.md + architecture.md + README
├── package.json         ← root workspace (turbo + prettier)
├── pnpm-workspace.yaml
├── turbo.json
├── tsconfig.base.json
├── .env.example
├── README.md
├── CHANGELOG.md
└── .gitignore
```

> `packages/ui`, `packages/ai`, `packages/foundry`, `apps/dashboard` dibuat
> saat sprint yang membutuhkannya (Constitution §2.7 — Progressive
> Documentation/Structure).

---

## 🚧 Blocker / Menunggu Keputusan

| # | Item | Menunggu |
|---|------|----------|
| 1 | Planning & persetujuan sprint berikutnya (landing page vs Foundry Core — urutan diputuskan Founder) | Founder |
| 2 | Akses/kredensial Cloudflare & Vercel untuk DNS + deploy (dibutuhkan sprint landing page) | Founder |

---

## 📝 Catatan Sesi Terakhir

**Sprint 002 (2026-07-13)**: Engineering Foundation selesai — monorepo scaffold
(`apps/web` Next.js 15 + `packages/shared`), tooling (TS strict, ESLint,
Prettier, Turborepo), standar source code & environment, `docs/setup.md`,
`docs/architecture.md` v1.2. Sprint di-rescope dari "Foundation (landing page +
monorepo)" menjadi murni engineering foundation (ADR-0005). Pipeline verifikasi
lulus penuh. Sesi sempat terputus (kredit) — recovery via handoff archive
berjalan lancar. Detail: `reports/002-engineering-foundation.md`.

**Sprint 001 (2026-07-13)**: SDOS v1.1 Refinement selesai — metadata standar
di seluruh dokumen, cross-reference, `CURRENT_SPRINT.md`, `DECISION_LOG.md`,
ADR-0004 (renumber roadmap: Foundation → Sprint 002). SDOS kini **stabil**;
sprint berikutnya fokus membangun produk. Detail:
`reports/001-sdos-v1.1-refinement.md`.

**Mission 000 (2026-07-13)**: SDOS dibangun dari nol. Repository sebelumnya
kosong. Semua keputusan dicatat di `reports/000-bootstrap-sdos.md` dan
`decisions/`.
