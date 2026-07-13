# Changelog — Sparkmind

Semua perubahan penting pada repository ini dicatat di file ini.

Format mengikuti [Keep a Changelog](https://keepachangelog.com/id-ID/1.1.0/),
dan proyek ini menggunakan penomoran misi/sprint (belum semantic versioning —
akan dimulai ketika ada rilis produk).

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
  - `sprints/` — Sprint 000 (done) & draft Sprint 001 (Foundation).
  - `proposals/` — indeks proposal.
  - `reports/` — Engineering Report 000.
- **README.md** (root) — pintu masuk repository.
- **CHANGELOG.md** (root) — file ini.
- **.gitignore** — Node/pnpm/Next.js-ready.
- **docs/** — placeholder dokumentasi teknis (arsitektur & onboarding).

### Notes

- Repository sebelumnya kosong; ini adalah commit fondasi pertama.
- `apps/` dan `packages/` (monorepo) sengaja belum dibuat — masuk Sprint 001.
