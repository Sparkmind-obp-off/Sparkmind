# Environment Configuration Standards

> **Versi**: 1.0 · **Status dokumen**: Aktif
> **Terakhir diperbarui**: 2026-07-13 (Sprint 002)
> **Terkait**: [engineering.md](engineering.md) · [repository.md](repository.md) · [Development Setup](../../docs/setup.md)

Standar konfigurasi environment untuk seluruh apps & packages Sparkmind.

---

## 1. Prinsip

1. **Secret tidak pernah masuk repository** ([Constitution §6](../CONSTITUTION.md)).
2. **`.env.example` adalah kontrak** — setiap variabel yang dipakai aplikasi
   wajib terdaftar di sana (tanpa nilai rahasia), dengan komentar kegunaannya.
3. **Variabel dibuat saat dipakai** — jangan menambah variabel untuk layanan
   yang belum diintegrasikan (cukup baris komentar placeholder).

## 2. Konvensi Penamaan

| Prefix | Arti | Contoh |
|--------|------|--------|
| `NEXT_PUBLIC_*` | Terekspos ke browser — **hanya nilai non-rahasia** | `NEXT_PUBLIC_APP_URL` |
| (tanpa prefix) | Server-only — boleh berisi secret | `SUPABASE_SERVICE_ROLE_KEY` |

- Nama: `SCREAMING_SNAKE_CASE`.
- Kelompokkan per layanan dengan komentar header di `.env.example`.

## 3. Lokasi File

| File | Lokasi | Di-commit? |
|------|--------|-----------|
| `.env.example` | Root repo | ✅ Ya |
| `.env.local` | `apps/web/` (per app) | ❌ Tidak (gitignored) |
| Production env | Dashboard Vercel/Cloudflare | ❌ Tidak pernah di repo |

`.gitignore` root sudah memblokir `.env` dan `.env.*` kecuali `.env.example`.

## 4. Alur Development

1. Salin: `cp .env.example apps/web/.env.local`
2. Isi nilai yang dibutuhkan (minta ke Founder bila secret).
3. Next.js memuat `.env.local` otomatis saat `pnpm dev`.

## 5. Menambah Variabel Baru

1. Tambahkan ke `.env.example` + komentar kegunaan.
2. Perbarui dokumen setup bila memengaruhi onboarding.
3. Akses via satu modul konfigurasi (bila sudah ada `packages/shared/config`),
   bukan `process.env` tersebar di banyak file — berlaku mulai ada ≥3 variabel
   runtime (Rule of Three).
