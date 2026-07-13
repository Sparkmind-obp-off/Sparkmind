# ADR-0004: Renumbering Roadmap Sprint — Sprint 001 = SDOS v1.1 Refinement

> **Versi**: 1.0 · **Status dokumen**: Final
> **Terakhir diperbarui**: 2026-07-13 (Sprint 001)
> **Terkait**: [DECISION_LOG.md](../DECISION_LOG.md) · [Sprint 001](../sprints/sprint-001-sdos-refinement.md) · [Sprint 002](../sprints/sprint-002-foundation.md)

- **Tanggal**: 2026-07-13
- **Status**: ✅ Accepted
- **Diputuskan oleh**: Founder (via requirement Sprint 001) + Engineering

---

## Konteks

Pada Mission 000, roadmap sprint ditetapkan sebagai: 001 Foundation,
002 Foundry Core, 003 ClinicFlow AI, 004 Sales. File
`sprint-001-foundation.md` sudah dibuat sebagai Draft.

Founder kemudian menetapkan **Sprint 001 = SDOS v1.1 Refinement** (dokumen
requirement "SPRINT 001 — SDOS v1.1 Refinement"), dengan aturan eksplisit:
tidak membuat fitur aplikasi, fokus penyempurnaan SDOS. Ini bentrok dengan
penomoran lama.

## Keputusan

Kami menomori ulang roadmap sprint:

| Sprint | Nama | Sebelumnya |
|--------|------|------------|
| 001 | SDOS v1.1 Refinement | *(baru)* |
| 002 | Foundation | 001 |
| 003 | Foundry Core | 002 |
| 004 | ClinicFlow AI | 003 |
| 005 | Sales | 004 |

File `sprint-001-foundation.md` dipindahkan (git mv) menjadi
`sprint-002-foundation.md`. Semua referensi nomor sprint di dokumen SDOS,
`docs/`, dan root diperbarui.

## Alasan

1. Requirement Founder adalah sumber otoritas penomoran — Sprint 001 secara
   eksplisit didefinisikan sebagai SDOS v1.1 Refinement.
2. Menyisipkan nomor (mis. "Sprint 000.5") merusak konsistensi format
   `sprint-XXX` di `standards/repository.md`.
3. Belum ada sprint Foundation yang berjalan — renumbering sekarang murah;
   nanti mahal.

## Alternatif yang Dipertimbangkan

| Alternatif | Kenapa tidak dipilih |
|------------|----------------------|
| Menamai refinement sebagai "Sprint 000.5" atau "Mission 001" | Merusak konsistensi penomoran & template |
| Membiarkan dua sprint bernomor 001 | Ambigu, melanggar prinsip Single Source of Truth |
| Menolak requirement & tetap 001 = Foundation | Founder adalah pemilik prioritas (Constitution §3) |

## Konsekuensi

- **Positif**: penomoran sprint kembali tunggal & konsisten; requirement
  Founder terpenuhi tanpa ambiguitas.
- **Negatif / trade-off**: referensi "Sprint 001 = Foundation" di percakapan
  lama tidak lagi akurat — ADR ini menjadi catatan sejarahnya.
- **Kapan ditinjau ulang**: tidak perlu — keputusan satu kali (one-off).
