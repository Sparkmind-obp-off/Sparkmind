# ADR-0003: Foundry Dibangun sebagai Platform, Produk Vertikal sebagai Konfigurasi

> **Versi**: 1.1 · **Status dokumen**: Final
> **Terakhir diperbarui**: 2026-07-13 (Sprint 001 — metadata + renumber sprint; keputusan tidak berubah)
> **Terkait**: [DECISION_LOG.md](../DECISION_LOG.md) · [product.md](../context/product.md) · [ADR-0001](ADR-0001-tech-stack-v1.md)

- **Tanggal**: 2026-07-13
- **Status**: ✅ Accepted
- **Diputuskan oleh**: Founder + CTO

---

## Konteks

Sparkmind akan menjual produk AI ke berbagai industri (klinik, dealer, hotel,
properti, restoran). Pilihan: bangun setiap produk sebagai aplikasi terpisah,
atau bangun satu engine bersama.

## Keputusan

Kami membangun **Sparkmind Foundry** sebagai platform/engine bersama di
`packages/foundry`. Produk vertikal (ClinicFlow AI, DealerFlow AI, dst.)
adalah **konfigurasi + tampilan** di atas engine yang sama, bukan codebase
terpisah.

Konsekuensi struktural: **monorepo** (pnpm + Turborepo) dengan `apps/` dan
`packages/`, bukan repository terpisah per produk.

## Alasan

1. Setiap calon klien dari industri baru bisa dilayani dalam hitungan jam/hari
   (konfigurasi baru), bukan minggu (build ulang).
2. Perbaikan engine otomatis dinikmati semua produk.
3. Monorepo menjaga semuanya sinkron tanpa overhead publish package.

## Alternatif yang Dipertimbangkan

| Alternatif | Kenapa tidak dipilih |
|------------|----------------------|
| Satu repo per produk | Duplikasi logika, perbaikan harus di-porting manual |
| Microservices | Overengineering untuk fase pre-customer |

## Konsekuensi

- **Positif**: time-to-market produk baru sangat cepat; konsistensi kualitas.
- **Negatif**: investasi waktu awal (Sprint 003 — Foundry Core) sebelum produk pertama jadi;
  disiplin menjaga Foundry tetap generic (jangan bocorkan logika spesifik
  klinik ke dalam core).
- **Guard rail**: modul Foundry hanya dibuat ketika produk aktif
  membutuhkannya (lihat `../context/product.md`).
- **Ditinjau ulang ketika**: ada produk yang kebutuhannya menyimpang jauh dari
  engine bersama.
