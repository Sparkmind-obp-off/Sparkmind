# Source Code Structure Standards

> **Versi**: 1.0 · **Status dokumen**: Aktif
> **Terakhir diperbarui**: 2026-07-13 (Sprint 002)
> **Terkait**: [engineering.md](engineering.md) · [repository.md](repository.md) · [tech-stack.md](../context/tech-stack.md) · [Architecture Overview](../../docs/architecture.md)

Standar struktur source code di monorepo Sparkmind. Melengkapi
[engineering.md](engineering.md) (prinsip kode) dengan aturan **letak file**.

---

## 1. Peta Monorepo

```
sparkmind/
├── apps/            ← aplikasi yang di-deploy (UI, routing, wiring)
│   └── web/         ← website utama (Next.js 15, App Router)
├── packages/        ← kode bersama & logika bisnis
│   └── shared/      ← util & types lintas package
├── docs/            ← dokumentasi teknis
├── .sparkmind/      ← SDOS (governance)
├── turbo.json       ← pipeline task (build/dev/lint/type-check)
├── pnpm-workspace.yaml
├── tsconfig.base.json  ← basis TS strict; semua package extends dari sini
└── package.json     ← root: script turbo + prettier
```

`packages/ui`, `packages/ai`, `packages/foundry` dibuat **saat sprint yang
membutuhkannya** — bukan sekarang (Constitution §2.7).

## 2. Aturan Letak Kode

| Jenis kode | Letak | Catatan |
|-----------|-------|---------|
| Halaman, layout, route | `apps/web/src/app/` | App Router |
| Komponen khusus satu app | `apps/web/src/components/` | Buat folder saat ada isinya |
| Komponen lintas app | `packages/ui` (belum ada) | Buat saat app kedua muncul / Rule of Three |
| Util & types lintas package | `packages/shared/src/` | Tanpa dependency berat |
| Logika bisnis/platform | `packages/foundry` (Sprint 003) | **Bukan** di `apps/` |
| Panggilan LLM | `packages/ai` (Sprint 003) | Via Vercel AI SDK |

## 3. Konvensi Dalam Package

- Setiap package punya: `package.json` (name `@sparkmind/<nama>`),
  `tsconfig.json` (extends `../../tsconfig.base.json`), `eslint.config.mjs`,
  `README.md`, `src/`.
- Entry point package library: `src/index.ts` — semua export publik lewat sini.
- Import antar-package memakai nama workspace (`@sparkmind/shared`),
  **jangan** relative path lintas package (`../../packages/...`).
- Nama file: `kebab-case.ts(x)`; komponen React: `PascalCase` untuk nama
  fungsi/komponen, file tetap `kebab-case` atau mengikuti konvensi Next.js
  (`page.tsx`, `layout.tsx`).

## 4. Task Standar per Package

Setiap package baru wajib menyediakan script berikut (agar dikenali turbo):

| Script | Wajib untuk | Isi |
|--------|-------------|-----|
| `lint` | Semua | `eslint .` / `eslint src` |
| `type-check` | Semua | `tsc --noEmit` |
| `dev` | Apps | dev server |
| `build` | Apps (dan package yang perlu build) | production build |

## 5. Dependency Antar-Package

- `apps/*` boleh depend ke `packages/*`; **tidak sebaliknya**.
- `packages/*` boleh depend ke `packages/*` lain, tanpa siklus.
- Versi dependency workspace: `workspace:*`.
