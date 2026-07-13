# Decision Log — Indeks Seluruh ADR

> **Versi**: 1.0 · **Status dokumen**: Aktif (living document)
> **Terakhir diperbarui**: 2026-07-13 (Sprint 001)
> **Terkait**: [Template ADR](templates/adr.md) · [CONSTITUTION.md](CONSTITUTION.md) · [Folder decisions/](decisions/)

Semua keputusan arsitektur & engineering yang penting dicatat sebagai
**Architecture Decision Record (ADR)** di folder [`decisions/`](decisions/).
File ini adalah **indeks kanonis** seluruh ADR.

Aturan:

- ADR bersifat **append-only** — keputusan lama tidak dihapus, melainkan
  ditandai `♻️ Superseded` oleh ADR baru.
- Nomor berurutan 4 digit (`ADR-XXXX-judul-singkat.md`).
- Setiap ADR baru **wajib** ditambahkan ke tabel di bawah pada sesi yang sama.
- Gunakan [`templates/adr.md`](templates/adr.md).

---

## Indeks ADR

| ADR | Judul | Status | Tanggal |
|-----|-------|--------|---------|
| [ADR-0001](decisions/ADR-0001-tech-stack-v1.md) | Tech Stack v1.0: Hybrid Vercel + Cloudflare, bukan full Cloudflare native | ✅ Accepted | 2026-07-13 |
| [ADR-0002](decisions/ADR-0002-sdos-structure.md) | SDOS: knowledge hidup di repository, bukan di system prompt | ✅ Accepted | 2026-07-13 |
| [ADR-0003](decisions/ADR-0003-foundry-platform-first.md) | Foundry dibangun sebagai platform, produk vertikal sebagai konfigurasi | ✅ Accepted | 2026-07-13 |
| [ADR-0004](decisions/ADR-0004-sprint-renumbering.md) | Renumbering roadmap sprint: Sprint 001 = SDOS v1.1 Refinement | ✅ Accepted | 2026-07-13 |

## Ringkasan per Area

| Area | ADR Terkait |
|------|-------------|
| Tech stack & infrastruktur | ADR-0001 |
| Governance & cara kerja (SDOS) | ADR-0002, ADR-0004 |
| Arsitektur produk | ADR-0003 |
