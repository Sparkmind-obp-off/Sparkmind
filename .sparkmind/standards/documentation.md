# Documentation Standards

> **Versi**: 1.1 · **Status dokumen**: Aktif
> **Terakhir diperbarui**: 2026-07-13 (Sprint 001)
> **Terkait**: [repository.md](repository.md) · [engineering.md](engineering.md) · [session-lifecycle.md](../workflows/session-lifecycle.md)

Dokumentasi adalah bagian dari source code. Task tanpa dokumentasi yang
diperbarui = task belum selesai.

---

## 1. Bahasa

- Dokumen governance & internal (`.sparkmind/`, `docs/`): **Bahasa Indonesia**
  (boleh istilah teknis Inggris).
- Kode, komentar kode, dan commit message: **Bahasa Inggris**.

## 2. Peta Dokumentasi

| Lokasi | Isi | Kapan di-update |
|--------|-----|-----------------|
| `README.md` (root) | Pintu masuk repo: apa, status, cara mulai | Perubahan besar |
| `CHANGELOG.md` (root) | Riwayat perubahan penting | Setiap sesi berarti |
| `.sparkmind/STATE.md` | Kondisi terkini | **Setiap sesi** |
| `.sparkmind/CURRENT_SPRINT.md` | Pointer sprint aktif | Saat status sprint berubah |
| `.sparkmind/DECISION_LOG.md` | Indeks kanonis seluruh ADR | Saat ADR baru dibuat |
| `.sparkmind/context/` | Knowledge bisnis/produk/stack | Saat keputusan berubah |
| `.sparkmind/decisions/` | ADR | Saat ada keputusan besar |
| `.sparkmind/reports/` | Engineering report | Setiap misi selesai |
| `docs/` | Dokumentasi teknis mendalam (arsitektur, setup) | Saat sistem berubah |
| README per package | Tujuan & cara pakai package | Saat package berubah |

## 3. Metadata Standar Dokumen (wajib sejak SDOS v1.1)

Setiap dokumen di `.sparkmind/` dan `docs/` **wajib** memiliki blok metadata
blockquote tepat di bawah judul (H1):

```markdown
# Judul Dokumen

> **Versi**: X.Y · **Status dokumen**: Aktif | Draft | Final | Superseded
> **Terakhir diperbarui**: YYYY-MM-DD (Sprint XXX / Mission XXX)
> **Terkait**: [dok-1](path) · [dok-2](path)
```

Aturan:

| Field | Aturan |
|-------|--------|
| **Versi** | Naikkan minor (1.0 → 1.1) saat isi berubah berarti; mayor saat restrukturisasi |
| **Status dokumen** | `Aktif` (living), `Draft`, `Final` (tidak berubah lagi), `Superseded` |
| **Terakhir diperbarui** | Tanggal + sprint/misi yang mengubahnya |
| **Terkait** | 1–4 tautan relatif ke dokumen yang paling berkaitan (cross-reference) |

**Pengecualian**: file di `templates/` tidak memakai blok ini — template harus
bersih agar bisa langsung disalin. Metadata diisi oleh dokumen hasil template.

## 4. Prinsip Menulis

1. **Singkat dan skimmable** — heading jelas, tabel, list. Hindari paragraf panjang.
2. **Satu sumber per topik** — jangan duplikasi informasi di dua tempat;
   tautkan (link) ke sumbernya.
3. **Tulis untuk pembaca baru** — asumsikan pembaca (manusia atau AI) belum
   punya konteks chat.
4. **Tanggal & versi** — dokumen yang berubah seiring waktu wajib punya
   "Terakhir diperbarui".
5. **Diagram pakai teks** (ASCII/mermaid) agar bisa di-diff oleh git.

## 5. Anti-Pattern

- ❌ Dokumentasi yang menyalin isi kode (akan basi).
- ❌ Menulis rencana di chat tanpa memindahkannya ke repository.
- ❌ File dokumentasi yatim (tidak tertaut dari README/indeks mana pun).
