# Sparkmind

> **Sparkmind — Building AI Employees for Modern Businesses.**

Repository resmi Sparkmind: platform **Foundry** dan produk vertikal AI
(ClinicFlow AI, dst.) yang dibangun di atasnya.

- **Website (target)**: https://sparkmind.biz.id
- **Status**: 🟡 Fase Bootstrap / Pre-product
- **Terakhir diperbarui**: 2026-07-13

---

## 🧭 Mulai dari Sini

Repository ini adalah **Single Source of Truth**. Semua knowledge, aturan,
keputusan, dan state proyek hidup di dalam repository — bukan di chat, bukan
di kepala siapa pun.

| Anda adalah... | Baca dulu |
|----------------|-----------|
| **AI Engineer / Engineer baru** | [`.sparkmind/README.md`](.sparkmind/README.md) → ikuti urutan bacaan wajib |
| **Founder / CTO** | [`.sparkmind/STATE.md`](.sparkmind/STATE.md) untuk kondisi terkini |
| **Ingin tahu keputusan teknis** | [`.sparkmind/DECISION_LOG.md`](.sparkmind/DECISION_LOG.md) (indeks seluruh ADR) |
| **Ingin tahu sprint aktif** | [`.sparkmind/CURRENT_SPRINT.md`](.sparkmind/CURRENT_SPRINT.md) |
| **Ingin tahu rencana kerja** | [`.sparkmind/sprints/`](.sparkmind/sprints/README.md) |

---

## 🎯 Misi

Membantu Sparkmind memperoleh **customer pertama secepat mungkin** dengan
software yang sederhana, berkualitas, dan mudah dipelihara.

Setiap keputusan engineering harus lolos pertanyaan:

> *"Apakah ini membantu kita mendapatkan klien pertama?"*

## 📦 Produk

| Produk | Deskripsi | Status |
|--------|-----------|--------|
| **Sparkmind Foundry** | Platform/engine bersama untuk semua AI Employee | Rencana (Sprint 003) |
| **ClinicFlow AI** | AI Receptionist untuk klinik kecil-menengah Indonesia | Rencana (Sprint 004) |
| DealerFlow / HotelFlow / PropertyFlow / RestaurantFlow AI | Produk vertikal berikutnya | Backlog |

Detail: [`.sparkmind/context/product.md`](.sparkmind/context/product.md)

## 🛠 Tech Stack (v1.0)

TypeScript · Next.js 15 · Tailwind CSS + shadcn/ui · Vercel · Cloudflare
(DNS/CDN) · Supabase · Clerk · Vercel AI SDK · pnpm + Turborepo

Detail & alasan: [`.sparkmind/context/tech-stack.md`](.sparkmind/context/tech-stack.md)
· Keputusan: [ADR-0001](.sparkmind/decisions/ADR-0001-tech-stack-v1.md)

---

## 🗂 Struktur Repository

```
Sparkmind/
├── .sparkmind/     ← SDOS: governance, knowledge, state, sprint, ADR, report
├── docs/           ← Dokumentasi teknis (arsitektur, onboarding)
├── README.md       ← Anda di sini
├── CHANGELOG.md    ← Riwayat perubahan penting
└── .gitignore
```

> `apps/` dan `packages/` (monorepo pnpm + Turborepo) akan dibuat di
> **Sprint 002 (Foundation)** — sengaja belum ada sekarang.

## 🔁 Cara Kerja (Ringkas)

1. Setiap sesi kerja mengikuti
   [`session-lifecycle.md`](.sparkmind/workflows/session-lifecycle.md).
2. Commit memakai **Conventional Commits**
   ([`git-workflow.md`](.sparkmind/workflows/git-workflow.md)).
3. Setiap misi selesai → Engineering Report di
   [`.sparkmind/reports/`](.sparkmind/reports/).
4. `STATE.md` dan `CHANGELOG.md` selalu diperbarui di akhir sesi.

## 🗺 Roadmap Sprint

| Sprint | Nama | Status | Output Utama |
|--------|------|--------|--------------|
| 000 | Bootstrap SDOS | 🏁 Done | `.sparkmind/` + fondasi repo |
| 001 | SDOS v1.1 Refinement | 🏁 Done | Metadata, cross-reference, CURRENT_SPRINT, DECISION_LOG |
| 002 | Foundation | 📝 Draft | Landing page live + monorepo scaffold |
| 003 | Foundry Core | Rencana | AI abstraction, prompts, knowledge layer |
| 004 | ClinicFlow AI | Rencana | Demo AI Receptionist |
| 005 | Sales | Rencana | Outreach & demo ke calon klien |

> Penomoran ulang roadmap (Foundation → 002) dicatat di
> [ADR-0004](.sparkmind/decisions/ADR-0004-sprint-renumbering.md).

---

## 📜 Lisensi

Proprietary — © 2026 Sparkmind. Seluruh hak cipta dilindungi.
