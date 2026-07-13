# ADR-0005: Rescope Sprint 002 — Engineering Foundation Murni (Tanpa Landing Page, Tanpa Docker)

> **Versi**: 1.0 · **Status dokumen**: Final
> **Terakhir diperbarui**: 2026-07-13 (Sprint 002)
> **Terkait**: [DECISION_LOG.md](../DECISION_LOG.md) · [Sprint 002](../sprints/sprint-002-foundation.md) · [ADR-0001](ADR-0001-tech-stack-v1.md) · [ADR-0004](ADR-0004-sprint-renumbering.md)

- **Status**: ✅ Accepted
- **Tanggal**: 2026-07-13
- **Pengambil keputusan**: Founder/CTO (via sesi planning ChatGPT), dieksekusi AI Engineer

---

## Konteks

Draft awal Sprint 002 ("Foundation") mencakup landing page live di
`sparkmind.biz.id`, DNS Cloudflare, deploy Vercel, dan identitas visual —
sekaligus scaffold monorepo. Saat planning, Founder/CTO memutuskan sprint ini
harus menghasilkan **Engineering Foundation yang benar-benar siap** untuk
pengembangan produk, bukan fitur bisnis.

Pertimbangan yang dievaluasi:

1. **Docker?** Belum — belum ada multi-service, belum ada banyak developer,
   deploy target (Vercel) tidak membutuhkannya. Nilai Docker muncul nanti.
2. **CI/CD kompleks?** Belum — cukup checklist lokal (`lint`, `type-check`,
   `build`) sebelum commit; CI menyusul saat ada kebutuhan nyata.
3. **Monorepo?** Ya — sudah diputuskan di ADR-0001; scaffold minimal
   (`apps/web` + `packages/shared`) cukup, package lain menyusul on-demand.
4. **Landing page?** Dipisah — butuh kredensial Cloudflare/Vercel (blocker
   eksternal) dan merupakan fitur produk, bukan fondasi engineering.

## Keputusan

1. Sprint 002 = **Engineering Foundation murni**: workspace monorepo,
   tooling dasar, standar source code & environment, dokumentasi setup &
   arsitektur. **Tanpa** fitur produk, UI, API, database.
2. **Tanpa Docker, Kubernetes, microservices, CI/CD kompleks** — prinsip:
   bangun hanya yang dibutuhkan untuk MVP & pelanggan pertama.
3. Landing page + DNS + deploy + identitas visual → **sprint terpisah**
   setelah Sprint 002 (menunggu persetujuan Founder & kredensial).
4. Scaffold minimal: `apps/web` (Next.js 15) + `packages/shared`;
   `packages/ui|ai|foundry` dibuat saat sprint yang membutuhkannya.

## Konsekuensi

- ✅ Sprint 002 tidak terblokir kredensial eksternal — bisa selesai penuh.
- ✅ Menghindari overengineering di fase pre-MVP.
- ⚠️ Website publik mundur satu sprint — trade-off yang diterima Founder.
- Roadmap: sprint landing page disisipkan setelah 002; penomoran sprint
  berikutnya ditetapkan saat planning sprint tersebut.
