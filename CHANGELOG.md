# Changelog — Sparkmind

Semua perubahan penting pada repository ini dicatat di file ini.

Format mengikuti [Keep a Changelog](https://keepachangelog.com/id-ID/1.1.0/),
dan proyek ini menggunakan penomoran misi/sprint (belum semantic versioning —
akan dimulai ketika ada rilis produk).

---

## [Sprint 001] — 2026-07-13 — SDOS v1.1 Refinement

### Added

- **`.sparkmind/CURRENT_SPRINT.md`** — pointer tunggal sprint aktif.
- **`.sparkmind/DECISION_LOG.md`** — indeks kanonis seluruh ADR.
- **ADR-0004** — renumbering roadmap sprint (Foundation → Sprint 002;
  Sprint 001 = SDOS v1.1 Refinement).
- **Metadata standar dokumen** — blok versi/status/tanggal/cross-reference
  di seluruh dokumen SDOS & docs (aturan di `standards/documentation.md` §3).
- **Sprint 001** — `sprints/sprint-001-sdos-refinement.md` (selesai).
- **Engineering Report 001** — `reports/001-sdos-v1.1-refinement.md`.

### Changed

- `sprints/sprint-001-foundation.md` → **dinomori ulang** menjadi
  `sprint-002-foundation.md`; seluruh referensi sprint di dokumen lain ikut
  disesuaikan (roadmap kini 000–005).
- `decisions/README.md` — tabel indeks ADR dipindah ke `DECISION_LOG.md`
  (prinsip satu sumber per topik).
- `session-lifecycle.md` — tambah langkah baca `CURRENT_SPRINT.md` &
  `DECISION_LOG.md`, serta kewajiban update keduanya.
- `README.md` SDOS & root — navigasi diperbarui (urutan bacaan wajib,
  roadmap, struktur).
- `STATE.md` — mencerminkan penyelesaian Sprint 001.

### Notes

- Tidak ada perubahan tujuan SDOS, fitur aplikasi, maupun arsitektur produk
  (sesuai requirement Sprint 001). SDOS kini dianggap **stabil (v1.1)**.

---

## [Mission 000] — 2026-07-13 — Bootstrap SDOS

### Added

- **SDOS (`.sparkmind/`)** — Sparkmind Development Operating System:
  - `CONSTITUTION.md` — prinsip & aturan permanen engineering.
  - `STATE.md` — kondisi terkini proyek (living document).
  - `context/` — company, product, tech-stack.
  - `workflows/` — session lifecycle & git workflow.
  - `standards/` — engineering, documentation, repository.
  - `templates/` — proposal, engineering report, sprint, ADR.
  - `decisions/` — ADR-0001 (tech stack v1.0), ADR-0002 (SDOS structure),
    ADR-0003 (Foundry platform-first).
  - `sprints/` — Sprint 000 (done) & draft sprint Foundation (kini
    bernomor 002, lihat ADR-0004).
  - `proposals/` — indeks proposal.
  - `reports/` — Engineering Report 000.
- **README.md** (root) — pintu masuk repository.
- **CHANGELOG.md** (root) — file ini.
- **.gitignore** — Node/pnpm/Next.js-ready.
- **docs/** — placeholder dokumentasi teknis (arsitektur & onboarding).

### Notes

- Repository sebelumnya kosong; ini adalah commit fondasi pertama.
- `apps/` dan `packages/` (monorepo) sengaja belum dibuat — masuk sprint
  Foundation (kini Sprint 002).
