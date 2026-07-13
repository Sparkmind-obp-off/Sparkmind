# Documentation Standards

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
| `.sparkmind/context/` | Knowledge bisnis/produk/stack | Saat keputusan berubah |
| `.sparkmind/decisions/` | ADR | Saat ada keputusan besar |
| `.sparkmind/reports/` | Engineering report | Setiap misi selesai |
| `docs/` | Dokumentasi teknis mendalam (arsitektur, setup) | Saat sistem berubah |
| README per package | Tujuan & cara pakai package | Saat package berubah |

## 3. Prinsip Menulis

1. **Singkat dan skimmable** — heading jelas, tabel, list. Hindari paragraf panjang.
2. **Satu sumber per topik** — jangan duplikasi informasi di dua tempat;
   tautkan (link) ke sumbernya.
3. **Tulis untuk pembaca baru** — asumsikan pembaca (manusia atau AI) belum
   punya konteks chat.
4. **Tanggal & versi** — dokumen yang berubah seiring waktu wajib punya
   "Terakhir diperbarui".
5. **Diagram pakai teks** (ASCII/mermaid) agar bisa di-diff oleh git.

## 4. Anti-Pattern

- ❌ Dokumentasi yang menyalin isi kode (akan basi).
- ❌ Menulis rencana di chat tanpa memindahkannya ke repository.
- ❌ File dokumentasi yatim (tidak tertaut dari README/indeks mana pun).
