# Development Setup — Sparkmind

> **Versi**: 1.0 · **Status dokumen**: Aktif
> **Terakhir diperbarui**: 2026-07-13 (Sprint 002)
> **Terkait**: [Architecture Overview](architecture.md) · [source-code.md](../.sparkmind/standards/source-code.md) · [environment.md](../.sparkmind/standards/environment.md) · [git-workflow.md](../.sparkmind/workflows/git-workflow.md)

Panduan menyiapkan lingkungan development dari nol sampai aplikasi berjalan
lokal.

---

## 1. Prasyarat

| Tool | Versi | Catatan |
|------|-------|---------|
| Node.js | ≥ 20 (lihat `.nvmrc`) | `nvm use` bila memakai nvm |
| pnpm | 10.x (lihat `packageManager` di `package.json`) | Aktifkan via `corepack enable` |
| Git | terbaru | |

```bash
# Aktifkan pnpm (sekali saja per mesin)
corepack enable
corepack prepare pnpm@10.13.1 --activate
```

## 2. Clone & Install

```bash
git clone https://github.com/Sparkmind-obp-off/Sparkmind.git
cd Sparkmind
pnpm install
```

## 3. Environment Variables

```bash
cp .env.example apps/web/.env.local
```

Isi nilai sesuai kebutuhan — lihat
[standar environment](../.sparkmind/standards/environment.md).
Fase sekarang belum ada secret wajib; app berjalan tanpa mengisi apa pun.

## 4. Menjalankan Aplikasi

```bash
# Semua app via Turborepo
pnpm dev

# Atau hanya web
pnpm --filter @sparkmind/web dev
```

Buka http://localhost:3000.

## 5. Perintah Umum

| Perintah | Fungsi |
|----------|--------|
| `pnpm dev` | Dev server semua apps |
| `pnpm build` | Production build semua package |
| `pnpm lint` | ESLint seluruh workspace |
| `pnpm type-check` | TypeScript check seluruh workspace |
| `pnpm format` | Prettier write |
| `pnpm format:check` | Prettier check (untuk CI nanti) |

## 6. Sebelum Commit (Checklist)

1. `pnpm lint` dan `pnpm type-check` lulus.
2. `pnpm build` sukses (untuk perubahan kode).
3. Dokumentasi terkait diperbarui.
4. Ikuti [git-workflow.md](../.sparkmind/workflows/git-workflow.md)
   (Conventional Commits).

## 7. Troubleshooting

| Gejala | Solusi |
|--------|--------|
| `pnpm: command not found` | Jalankan langkah corepack di §1 |
| Error versi Node | `nvm use` / install Node 20+ |
| Install lambat/gagal di lingkungan terbatas | `pnpm install --network-concurrency=3 --child-concurrency=1` |
| Type error dari package lain | Jalankan `pnpm install` ulang (workspace link) |
