# Engineering Standards

> **Versi**: 1.1 · **Status dokumen**: Aktif
> **Terakhir diperbarui**: 2026-07-13 (Sprint 001)
> **Terkait**: [documentation.md](documentation.md) · [repository.md](repository.md) · [tech-stack.md](../context/tech-stack.md)

Standar penulisan kode Sparkmind. Berlaku untuk semua kode di repository.

---

## 1. Bahasa & Tooling

- **TypeScript** untuk seluruh kode aplikasi. `strict: true` wajib.
- Hindari `any`. Gunakan `unknown` + narrowing bila tipe tidak diketahui.
- Formatter & linter mengikuti konfigurasi repo (akan ditambahkan saat
  scaffold monorepo di Sprint 002: Prettier + ESLint default Next.js).

## 2. Prinsip Kode

1. **Sederhana dulu.** Kode yang mudah dibaca mengalahkan kode yang "pintar".
2. **Jangan abstraksi prematur.** Duplikasi dua kali masih boleh; abstraksi
   dibuat saat pola ketiga muncul (Rule of Three).
3. **Fungsi kecil, fokus satu tugas.**
4. **Penamaan deskriptif** — nama menjelaskan tujuan, bukan implementasi.
5. **Error harus ditangani** — jangan menelan error secara diam-diam.
6. **Kode mati dihapus**, bukan dikomentari.

## 3. Struktur

- Ikuti struktur monorepo di `context/tech-stack.md`.
- Logika bisnis/platform hidup di `packages/` (terutama `packages/foundry`),
  **bukan** di dalam `apps/`.
- `apps/` hanya berisi UI, routing, dan wiring.

## 4. Secrets & Konfigurasi

- Secret hanya di environment variables (`.env.local`, Vercel/Cloudflare
  dashboard). **Tidak pernah** di-commit.
- Sediakan `.env.example` berisi daftar variabel (tanpa nilai).

## 5. Dependency

- Tambah dependency hanya jika benar-benar dibutuhkan.
- Dependency besar/berdampak arsitektur → catat alasannya (ADR bila perlu).
- Gunakan versi stabil, hindari paket yang tidak terawat.

## 6. Testing

- Fase bootstrap: minimal **smoke test manual** — jalankan aplikasi dan
  verifikasi alur utama sebelum commit.
- Unit test ditambahkan untuk logika inti Foundry (mulai Sprint 003).
- Jangan pernah menyatakan task selesai untuk kode yang belum pernah dijalankan.

## 7. AI-Specific

- Semua panggilan LLM melalui layer `packages/ai` (Vercel AI SDK) —
  jangan panggil SDK provider langsung dari `apps/`.
- Prompt hidup di `packages/foundry/prompts/`, bukan hardcoded di komponen.
- Selalu tangani kegagalan LLM (timeout, rate limit) dengan fallback yang jelas.
