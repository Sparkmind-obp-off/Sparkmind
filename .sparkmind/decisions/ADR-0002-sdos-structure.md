# ADR-0002: SDOS — Knowledge Hidup di Repository, Bukan di System Prompt

> **Versi**: 1.1 · **Status dokumen**: Final
> **Terakhir diperbarui**: 2026-07-13 (Sprint 001 — hanya metadata; keputusan tidak berubah)
> **Terkait**: [DECISION_LOG.md](../DECISION_LOG.md) · [README SDOS](../README.md) · [CONSTITUTION.md](../CONSTITUTION.md)

- **Tanggal**: 2026-07-13
- **Status**: ✅ Accepted
- **Diputuskan oleh**: CTO

---

## Konteks

Sparkmind menggunakan AI Engineer (GenSpark AI Developer, dan berpotensi AI
lain) sebagai anggota engineering team. Muncul kebutuhan: di mana aturan,
knowledge, dan state proyek disimpan agar konsisten antar sesi dan antar AI?

Opsi yang sempat dipertimbangkan: system prompt yang sangat panjang
(ribuan kata) berisi semua aturan dan knowledge.

## Keputusan

Kami membangun **SDOS (Sparkmind Development Operating System)** di dalam
repository, pada folder `.sparkmind/`, dengan pembagian tegas:

| Tempat | Isi |
|--------|-----|
| System Prompt | Identitas, perilaku, prinsip kerja (pendek & stabil) |
| `.sparkmind/` | Semua knowledge, standar, sprint, keputusan, state |
| Task/Mission | Pekerjaan spesifik satu sesi |

Struktur SDOS: `CONSTITUTION.md` (aturan permanen), `STATE.md` (kondisi
terkini), `context/` (knowledge), `workflows/` (cara kerja), `standards/`
(kualitas), `sprints/`, `decisions/` (ADR), `templates/`, `proposals/`,
`reports/`.

## Alasan

1. System prompt bukan tempat menyimpan knowledge — ia akan menjadi "tempat
   sampah" yang terus membengkak dan sulit dipelihara.
2. Repository sebagai Single Source of Truth membuat knowledge ter-version,
   ter-review, dan bisa dipakai AI mana pun (tidak terkunci ke satu vendor AI).
3. `STATE.md` menjembatani hilangnya memori antar sesi AI.

## Alternatif yang Dipertimbangkan

| Alternatif | Kenapa tidak dipilih |
|------------|----------------------|
| System prompt panjang (5000 kata) | Tidak stabil, akan diubah berulang kali, tidak ter-version dengan baik |
| Knowledge di chat/notion terpisah | Melanggar prinsip Single Source of Truth |

## Konsekuensi

- **Positif**: onboarding AI/manusia baru = baca `.sparkmind/`; system prompt
  stabil; knowledge ter-version di git.
- **Negatif**: disiplin update `STATE.md` & dokumen wajib dijaga setiap sesi —
  ini dienforce lewat `workflows/session-lifecycle.md` dan Definition of Done.
- **Ditinjau ulang ketika**: struktur terasa berat untuk tim; bisa disederhanakan
  via ADR baru.
