# @sparkmind/shared

> **Versi**: 0.1.0 · **Status**: Scaffold
> **Terkait**: [Architecture Overview](../../docs/architecture.md) · [standards/engineering.md](../../.sparkmind/standards/engineering.md)

Util & types bersama untuk seluruh `apps/` dan `packages/`.

## Aturan

- Hanya kode yang benar-benar dipakai lintas package (Rule of Three).
- Tanpa dependency runtime eksternal kecuali sangat diperlukan.
- Package di-consume langsung dari source (`src/index.ts`) — tidak ada build
  step; `apps/web` men-transpile via `transpilePackages`.

## Perintah

```bash
pnpm --filter @sparkmind/shared lint
pnpm --filter @sparkmind/shared type-check
```
