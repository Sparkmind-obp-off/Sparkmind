# Repository Standards

Standar struktur & kebersihan repository.

---

## 1. Struktur Root (Fase Saat Ini)

```
Sparkmind/
├── .sparkmind/     ← SDOS — governance, knowledge, state
├── docs/           ← dokumentasi teknis
├── README.md
├── CHANGELOG.md
└── .gitignore
```

Setelah Sprint 001, bertambah: `apps/`, `packages/`, `turbo.json`,
`pnpm-workspace.yaml`, `package.json` (lihat `context/tech-stack.md`).

## 2. Aturan Penamaan

- Folder & file: `kebab-case` (contoh: `session-lifecycle.md`).
- ADR: `ADR-XXXX-judul-singkat.md` (4 digit, berurutan).
- Sprint: `sprint-XXX-nama.md` (3 digit, berurutan).
- Report: `XXX-judul.md` (3 digit, mengikuti nomor misi).
- Semua nama file: huruf kecil, tanpa spasi, ASCII.

## 3. Kebersihan

- ❌ Tidak ada file sementara (`*.tmp`, `*.bak`, `*.log`) di repository.
- ❌ Tidak ada folder kosong (git tidak melacaknya; gunakan file `README.md`
  sebagai placeholder jika folder memang harus ada).
- ❌ Tidak ada file yang tidak tertaut/tidak jelas fungsinya.
- ✅ `.gitignore` selalu lengkap sebelum menambah tooling baru.

## 4. Menghapus / Memindahkan File

- Boleh, **dengan alasan yang dicatat** (di commit message; bila berdampak
  besar → di ADR/report).
- Perbarui semua tautan yang menunjuk file tersebut.

## 5. Review Kebersihan

Setiap akhir sesi, jalankan pemeriksaan:

```
git status          ← tidak ada file untracked yang tak disengaja
git diff --stat     ← perubahan sesuai scope misi
```
