# Product Context — Sparkmind Foundry & Produk Vertikal

---

## 1. Sparkmind Foundry (Platform Core)

Foundry adalah **engine bersama** yang dipakai semua produk Sparkmind.
Rencana modul (dibangun bertahap, mulai Sprint 002):

```
packages/foundry/
├── agents/         ← definisi & runtime AI agent
├── memory/         ← memori percakapan/konteks
├── knowledge/      ← knowledge base per klien
├── workflows/      ← alur kerja agent (mis. FAQ → booking)
├── prompts/        ← prompt management terpusat
├── rag/            ← retrieval (pgvector di Supabase, saat dibutuhkan)
└── integrations/   ← WhatsApp, email, kalender, dsb. (saat dibutuhkan)
```

**Aturan**: modul hanya dibuat ketika produk aktif membutuhkannya.
Jangan membangun modul "untuk jaga-jaga".

---

## 2. ClinicFlow AI (Produk Pertama)

**Target user**: klinik kecil-menengah di Indonesia.

**MVP (Sprint 003)** — bukan website penuh, cukup demo yang bisa dijual:

1. **AI Receptionist** — menjawab FAQ klinik (jam buka, layanan, harga, lokasi).
2. **Booking redirect** — mengarahkan pengguna ke pemesanan/kontak.
3. Landing page produk sederhana.

**Bukan MVP** (backlog): dashboard admin, multi-klinik, integrasi rekam medis,
pembayaran.

---

## 3. Roadmap Sprint

| Sprint | Nama | Durasi | Output |
|--------|------|--------|--------|
| 000 | Bootstrap SDOS | 1 hari | `.sparkmind/` ✅ |
| 001 | Foundation | 2–3 hari | Landing page live di sparkmind.biz.id, monorepo scaffold, brand dasar |
| 002 | Foundry Core | 3–4 hari | AI abstraction, prompt management, knowledge layer |
| 003 | ClinicFlow AI | 5–7 hari | Demo AI Receptionist + landing page produk |
| 004 | Sales | berjalan | Video demo, daftar target klinik, outreach, demo ke calon klien |

Detail tiap sprint hidup di `.sparkmind/sprints/`.
