# @sparkmind/web

> **Versi**: 0.1.0 · **Status**: Scaffold (belum ada fitur produk)
> **Terkait**: [Development Setup](../../docs/setup.md) · [Architecture Overview](../../docs/architecture.md)

Aplikasi web utama Sparkmind (Next.js 15 + TypeScript, App Router).
Saat ini hanya berisi **placeholder page** — landing page dan fitur produk
dibangun pada sprint berikutnya.

## Perintah

Jalankan dari root repo:

```bash
pnpm dev          # dev server semua app (turbo)
pnpm --filter @sparkmind/web dev    # dev server app ini saja
pnpm --filter @sparkmind/web build  # production build
pnpm --filter @sparkmind/web lint   # eslint
```

## Struktur

```
apps/web/
├── src/app/        ← App Router (layout.tsx, page.tsx)
├── next.config.ts
├── eslint.config.mjs
├── tsconfig.json   ← extends ../../tsconfig.base.json
└── package.json
```

## Aturan

- `apps/` hanya berisi UI, routing, dan wiring — logika bisnis hidup di
  `packages/` (lihat [standards/engineering.md](../../.sparkmind/standards/engineering.md) §3).
- Import util bersama dari `@sparkmind/shared`.
