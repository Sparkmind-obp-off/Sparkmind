# Sprint 000: Bootstrap SDOS

> **Versi**: 1.1 · **Status dokumen**: Final (sprint selesai)
> **Terakhir diperbarui**: 2026-07-13 (Sprint 001)
> **Terkait**: [Indeks sprint](README.md) · [Report 000](../reports/000-bootstrap-sdos.md) · [ADR-0002](../decisions/ADR-0002-sdos-structure.md)

- **Status**: 🏁 Done
- **Durasi target**: 1 hari
- **Mulai**: 2026-07-13
- **Selesai**: 2026-07-13

---

## Goal

Membangun Sparkmind Development Operating System (SDOS) di dalam repository
agar semua sesi kerja berikutnya (AI maupun manusia) punya fondasi governance,
knowledge, dan workflow yang jelas.

## Definition of Success

- [x] Struktur `.sparkmind/` lengkap dan saling tertaut
- [x] Constitution, State, Context, Workflows, Standards tersedia
- [x] Template (proposal, report, sprint, ADR) tersedia
- [x] Keputusan besar terdahulu tercatat sebagai ADR
- [x] README & CHANGELOG root dibuat
- [x] Commit + push + Engineering Report

## Tasks

| # | Task | Status |
|---|------|--------|
| 1 | Rancang & buat struktur `.sparkmind/` | ✅ Done |
| 2 | Tulis CONSTITUTION, STATE | ✅ Done |
| 3 | Tulis context (company, product, tech-stack) | ✅ Done |
| 4 | Tulis workflows (lifecycle, git) | ✅ Done |
| 5 | Tulis standards (engineering, documentation, repository) | ✅ Done |
| 6 | Buat templates | ✅ Done |
| 7 | Tulis ADR-0001 s/d ADR-0003 | ✅ Done |
| 8 | Draft sprint Foundation (kini bernomor 002, lihat ADR-0004) | ✅ Done |
| 9 | README + CHANGELOG root, docs/ | ✅ Done |
| 10 | Commit, push, Engineering Report 000 | ✅ Done |

## Out of Scope

- Aplikasi, landing page, dashboard, fitur bisnis apa pun (sesuai mandat
  Mission 000).
- Scaffold monorepo (masuk sprint Foundation — kini Sprint 002).

---

## Retrospective

- **Berjalan baik**: repository kosong → fondasi lengkap dalam satu misi;
  keputusan lama dari percakapan perencanaan berhasil dipindahkan ke ADR.
- **Perlu diperbaiki**: butuh persetujuan Founder untuk sprint Foundation dan
  kredensial deploy (Cloudflare/Vercel) sebelum sprint bisa mulai.
- **Dibawa ke sprint berikutnya**: eksekusi sprint Foundation (kini Sprint 002)
  setelah disetujui.
