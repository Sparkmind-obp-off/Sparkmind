# Sprints — Indeks

> **Versi**: 1.1 · **Status dokumen**: Aktif
> **Terakhir diperbarui**: 2026-07-13 (Sprint 001)
> **Terkait**: [CURRENT_SPRINT.md](../CURRENT_SPRINT.md) · [Template sprint](../templates/sprint.md) · [STATE.md](../STATE.md)

Satu file per sprint, format `sprint-XXX-nama.md` (pakai `../templates/sprint.md`).

Aturan:
- Hanya **satu** sprint berstatus `Active` pada satu waktu — sprint aktif
  selalu ditunjuk oleh [`CURRENT_SPRINT.md`](../CURRENT_SPRINT.md).
- Sprint baru berstatus `Draft` sampai disetujui Founder.
- Task di luar sprint aktif → backlog (catat di sprint Draft berikutnya atau
  sebagai catatan di sprint aktif, bagian Out of Scope).

> ℹ️ Penomoran sprint diubah pada Sprint 001: sprint "Foundation" (semula 001)
> menjadi **002**, dan seterusnya. Lihat
> [ADR-0004](../decisions/ADR-0004-sprint-renumbering.md).

| Sprint | Nama | Status | Output Utama |
|--------|------|--------|--------------|
| [000](sprint-000-bootstrap-sdos.md) | Bootstrap SDOS | 🏁 Done | `.sparkmind/` |
| [001](sprint-001-sdos-refinement.md) | SDOS v1.1 Refinement | 🏁 Done | SDOS stabil: metadata, cross-reference, CURRENT_SPRINT, DECISION_LOG |
| [002](sprint-002-foundation.md) | Foundation | 📝 Draft | Landing page live + monorepo scaffold |
| 003 | Foundry Core | — (rencana) | AI abstraction, prompts, knowledge layer |
| 004 | ClinicFlow AI | — (rencana) | Demo AI Receptionist |
| 005 | Sales | — (rencana) | Outreach & demo ke calon klien |
