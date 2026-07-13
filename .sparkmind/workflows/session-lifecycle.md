# Session Lifecycle — Alur Kerja Wajib Setiap Sesi

> **Versi**: 1.1 · **Status dokumen**: Aktif
> **Terakhir diperbarui**: 2026-07-13 (Sprint 001)
> **Terkait**: [CONSTITUTION.md](../CONSTITUTION.md) · [CURRENT_SPRINT.md](../CURRENT_SPRINT.md) · [git-workflow.md](git-workflow.md) · [STATE.md](../STATE.md)

Setiap sesi development (oleh AI Engineer maupun manusia) **WAJIB** mengikuti
lifecycle berikut. Tidak boleh melompati tahapan tanpa alasan yang dicatat.

---

## Fase 1 — Load Context

1. **Sync repository** — `git pull` / clone terbaru dari branch `main`.
2. **Baca `.sparkmind/README.md`** — peta SDOS.
3. **Baca `CONSTITUTION.md`** — aturan yang mengikat.
4. **Baca `STATE.md`** — kondisi terkini proyek.
5. **Identifikasi sprint aktif** — baca `CURRENT_SPRINT.md` (pointer sprint
   aktif), lalu buka file sprint yang dirujuk di `sprints/`.
6. **Baca `DECISION_LOG.md`** — indeks seluruh ADR; buka ADR yang relevan.
7. **Baca context terkait** — `context/` sesuai kebutuhan task.

## Fase 2 — Analisis

8. **Analisis requirement** — apa yang diminta pada misi/task ini?
9. **Analisis dampak** — file, dokumentasi, dan sistem apa yang terpengaruh?
10. **Cek kejelasan** — jika ada requirement tidak jelas atau butuh keputusan
   bisnis → **STOP**, buat Proposal di `proposals/` (pakai
   `templates/proposal.md`), minta persetujuan.

## Fase 3 — Rencana

11. **Susun rencana implementasi** — langkah konkret, urut, kecil.

## Fase 4 — Eksekusi

12. **Implementasi** — kerjakan sesuai rencana & standar di `standards/`.
13. **Testing** — pastikan code berjalan; jangan pernah commit kode yang
    tidak pernah dijalankan/ditest.

## Fase 5 — Dokumentasi & Rapikan

14. **Update dokumentasi terdampak** — README, docs/, context/
    (ikuti metadata standar di [documentation.md](../standards/documentation.md)).
15. **Update `STATE.md`** — wajib.
16. **Update `CURRENT_SPRINT.md`** — jika status/progress sprint berubah.
17. **Update `CHANGELOG.md`** (root) — untuk perubahan yang berarti.
18. **Catat keputusan besar** — buat ADR di `decisions/` + daftarkan ke
    `DECISION_LOG.md` jika ada.
19. **Rapikan repository** — hapus file sementara, jaga konsistensi struktur.

## Fase 6 — Review & Ship

20. **Self review** — baca ulang seluruh diff seperti reviewer eksternal.
21. **Commit** — ikuti `git-workflow.md`.
22. **Push** ke repository.
23. **Engineering Report** — buat di `reports/` (pakai
    `templates/engineering-report.md`).

---

## Checklist Ringkas (untuk akhir sesi)

```
[ ] Requirement terpenuhi & ditest
[ ] Dokumentasi terdampak di-update (dengan metadata standar)
[ ] STATE.md di-update
[ ] CURRENT_SPRINT.md di-update (jika status sprint berubah)
[ ] CHANGELOG.md di-update
[ ] ADR dibuat + terdaftar di DECISION_LOG.md (jika ada keputusan besar)
[ ] Repo bersih (tidak ada file sampah)
[ ] Self review selesai
[ ] Commit + push
[ ] Engineering Report dibuat
```
