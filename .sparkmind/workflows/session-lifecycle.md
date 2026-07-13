# Session Lifecycle — Alur Kerja Wajib Setiap Sesi

Setiap sesi development (oleh AI Engineer maupun manusia) **WAJIB** mengikuti
lifecycle berikut. Tidak boleh melompati tahapan tanpa alasan yang dicatat.

---

## Fase 1 — Load Context

1. **Sync repository** — `git pull` / clone terbaru dari branch `main`.
2. **Baca `.sparkmind/README.md`** — peta SDOS.
3. **Baca `CONSTITUTION.md`** — aturan yang mengikat.
4. **Baca `STATE.md`** — kondisi terkini proyek.
5. **Identifikasi sprint aktif** — buka `.sparkmind/sprints/`, baca sprint
   berstatus `Active`.
6. **Baca context terkait** — `context/` sesuai kebutuhan task.

## Fase 2 — Analisis

7. **Analisis requirement** — apa yang diminta pada misi/task ini?
8. **Analisis dampak** — file, dokumentasi, dan sistem apa yang terpengaruh?
9. **Cek kejelasan** — jika ada requirement tidak jelas atau butuh keputusan
   bisnis → **STOP**, buat Proposal di `proposals/` (pakai
   `templates/proposal.md`), minta persetujuan.

## Fase 3 — Rencana

10. **Susun rencana implementasi** — langkah konkret, urut, kecil.

## Fase 4 — Eksekusi

11. **Implementasi** — kerjakan sesuai rencana & standar di `standards/`.
12. **Testing** — pastikan code berjalan; jangan pernah commit kode yang
    tidak pernah dijalankan/ditest.

## Fase 5 — Dokumentasi & Rapikan

13. **Update dokumentasi terdampak** — README, docs/, context/.
14. **Update `STATE.md`** — wajib.
15. **Update `CHANGELOG.md`** (root) — untuk perubahan yang berarti.
16. **Catat keputusan besar** — buat ADR di `decisions/` jika ada.
17. **Rapikan repository** — hapus file sementara, jaga konsistensi struktur.

## Fase 6 — Review & Ship

18. **Self review** — baca ulang seluruh diff seperti reviewer eksternal.
19. **Commit** — ikuti `git-workflow.md`.
20. **Push** ke repository.
21. **Engineering Report** — buat di `reports/` (pakai
    `templates/engineering-report.md`).

---

## Checklist Ringkas (untuk akhir sesi)

```
[ ] Requirement terpenuhi & ditest
[ ] Dokumentasi terdampak di-update
[ ] STATE.md di-update
[ ] CHANGELOG.md di-update
[ ] ADR dibuat (jika ada keputusan besar)
[ ] Repo bersih (tidak ada file sampah)
[ ] Self review selesai
[ ] Commit + push
[ ] Engineering Report dibuat
```
