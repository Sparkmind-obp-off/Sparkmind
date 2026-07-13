# .sparkmind — Sparkmind Development Operating System (SDOS)

> **Versi**: 1.1 · **Status dokumen**: Aktif
> **Terakhir diperbarui**: 2026-07-13 (Sprint 001 — SDOS v1.1 Refinement)
> **Terkait**: [CONSTITUTION.md](CONSTITUTION.md) · [STATE.md](STATE.md) · [CURRENT_SPRINT.md](CURRENT_SPRINT.md) · [DECISION_LOG.md](DECISION_LOG.md)
> **Dibuat**: Mission 000 (Bootstrap) · Disempurnakan: Sprint 001

Folder ini adalah **Operating System** dari repository Sparkmind.

Repository adalah Single Source of Truth. Semua knowledge, aturan, state, dan
keputusan proyek hidup di sini — **bukan** di system prompt, bukan di chat,
bukan di kepala siapa pun.

---

## 🤖 Untuk AI Engineer: Mulai dari Sini

Setiap sesi kerja **WAJIB** dimulai dengan membaca file berikut, sesuai urutan:

| Urutan | File | Tujuan |
|--------|------|--------|
| 1 | [`CONSTITUTION.md`](CONSTITUTION.md) | Aturan dan prinsip yang tidak boleh dilanggar |
| 2 | [`STATE.md`](STATE.md) | Kondisi terkini proyek — apa yang sudah/belum ada |
| 3 | [`CURRENT_SPRINT.md`](CURRENT_SPRINT.md) | Pointer sprint aktif → buka file sprint yang dirujuk |
| 4 | [`DECISION_LOG.md`](DECISION_LOG.md) | Indeks seluruh ADR — keputusan yang mengikat |
| 5 | [`context/`](context/) | Konteks bisnis, produk, dan tech stack |
| 6 | [`workflows/session-lifecycle.md`](workflows/session-lifecycle.md) | Cara bekerja dalam satu sesi |

Setelah membaca keenam hal di atas, baru boleh mulai bekerja.

---

## 📁 Struktur SDOS

```
.sparkmind/
├── README.md                 ← Anda di sini
├── CONSTITUTION.md           ← Prinsip & aturan permanen
├── STATE.md                  ← Kondisi terkini proyek (selalu di-update)
├── CURRENT_SPRINT.md         ← Pointer sprint aktif (satu-satunya sumber)
├── DECISION_LOG.md           ← Indeks kanonis seluruh ADR
│
├── context/                  ← Knowledge (jarang berubah)
│   ├── company.md            ← Visi, misi, positioning Sparkmind
│   ├── product.md            ← Foundry, ClinicFlow AI, roadmap produk
│   └── tech-stack.md         ← Stack final v1.0 & alasan pemilihannya
│
├── workflows/                ← Cara bekerja
│   ├── session-lifecycle.md  ← Lifecycle wajib setiap sesi development
│   └── git-workflow.md       ← Branch, commit, push
│
├── standards/                ← Standar kualitas
│   ├── engineering.md        ← Standar penulisan kode
│   ├── documentation.md      ← Standar dokumentasi
│   └── repository.md         ← Standar struktur & kebersihan repo
│
├── sprints/                  ← Perencanaan kerja
│   ├── README.md             ← Cara kerja sprint & indeks
│   └── sprint-XXX-nama.md    ← Satu file per sprint
│
├── decisions/                ← ADR (Architecture Decision Records)
│   ├── README.md             ← Aturan penulisan ADR (indeks: DECISION_LOG.md)
│   └── ADR-XXXX-judul.md     ← Satu file per keputusan besar
│
├── templates/                ← Template dokumen
│   ├── proposal.md
│   ├── engineering-report.md
│   ├── sprint.md
│   └── adr.md
│
├── proposals/                ← Proposal menunggu keputusan Founder/CTO
│   └── README.md
│
└── reports/                  ← Engineering Report per sesi/misi
    └── XXX-judul.md
```

---

## 🧭 Aturan Pembagian Informasi

| Tempat | Isi |
|--------|-----|
| **System Prompt** | Identitas, perilaku, prinsip kerja (pendek & stabil) |
| **`.sparkmind/`** | Semua knowledge, standar, sprint, keputusan, state |
| **Task/Mission** | Pekerjaan spesifik untuk satu sesi |

Jangan pernah memindahkan knowledge ke system prompt. Jika ada aturan baru,
tambahkan ke file yang sesuai di dalam `.sparkmind/`.

---

## ✍️ Kewajiban Update

Setelah setiap sesi kerja, file berikut **wajib diperiksa dan di-update** jika terdampak:

- `STATE.md` — selalu update jika ada perubahan kondisi proyek
- `CURRENT_SPRINT.md` — update saat status/progress sprint berubah
- `CHANGELOG.md` (di root) — catat perubahan penting
- `decisions/` + `DECISION_LOG.md` — jika ada keputusan arsitektur baru
- `reports/` — buat Engineering Report baru setiap misi selesai
- Sprint aktif — update progress task

---

## 🏷 Metadata Standar Dokumen (sejak v1.1)

Setiap dokumen SDOS memiliki blok metadata di bawah judul (versi, status,
tanggal update, cross-reference). Aturan lengkap:
[standards/documentation.md](standards/documentation.md) §3.
Pengecualian: `templates/` (harus bersih agar bisa langsung disalin).
