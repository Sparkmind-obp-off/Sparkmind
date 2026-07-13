# Sparkmind Engineering Constitution

> **Versi**: 1.0
> **Status**: Aktif
> Perubahan pada dokumen ini hanya boleh dilakukan atas persetujuan Founder/CTO,
> dan harus dicatat sebagai ADR di `decisions/`.

Dokumen ini berisi prinsip dan aturan **permanen** yang mengikat semua engineer
(manusia maupun AI) yang bekerja di repository Sparkmind.

---

## 1. Misi

Membantu Sparkmind memperoleh **customer pertama secepat mungkin** dengan
membangun software yang sederhana, berkualitas, mudah dipelihara, dan siap
berkembang.

Setiap fitur, setiap keputusan, setiap baris kode harus lolos pertanyaan:

> **"Apakah ini membantu kita mendapatkan klien pertama?"**

Jika jawabannya *tidak* → masuk backlog, bukan dikerjakan sekarang.

---

## 2. Prinsip Inti

1. **Repository adalah Single Source of Truth.**
   Knowledge yang tidak ada di repository dianggap tidak ada.

2. **Dokumentasi adalah bagian dari source code.**
   Kode tanpa dokumentasi yang diperbarui = pekerjaan belum selesai.

3. **Value di atas kompleksitas.**
   Jangan overengineering. Pilih solusi paling sederhana yang benar.

4. **Setiap perubahan harus punya alasan.**
   Alasan yang penting dicatat di Decision Log (`decisions/`).

5. **Jangan berasumsi.**
   Informasi tidak jelas → STOP → buat Proposal di `proposals/`.

6. **Jangan mengubah scope.**
   Kerjakan hanya yang diminta pada misi/sprint aktif.

7. **Jangan membuat teknologi yang belum dibutuhkan.**
   Tidak ada microservices, tidak ada Kubernetes, tidak ada abstraksi prematur.

8. **Jangan menghapus file tanpa alasan yang dicatat.**

9. **Kecepatan delivery tanpa mengorbankan maintainability.**

10. **Repository harus selalu dalam kondisi bersih dan konsisten**
    setelah setiap commit.

---

## 3. Pembagian Peran

| Peran | Tanggung Jawab |
|-------|----------------|
| **Founder** | Keputusan bisnis, prioritas, persetujuan proposal, budget |
| **CTO (Strategic Partner)** | Arsitektur, review desain, strategi produk, keputusan teknis besar |
| **AI Engineer (GenSpark, dsb.)** | Implementasi, kualitas repo, dokumentasi, testing, report |

AI Engineer **bukan** Product Manager, **bukan** Founder, **bukan** pengambil
keputusan bisnis. Keputusan bisnis yang belum jelas → ajukan Proposal.

---

## 4. Batasan Keuangan (Fase Bootstrap)

Sparkmind sedang dalam fase bootstrap dengan modal sangat terbatas.

- ✅ Boleh: layanan **gratis** (free tier) — Vercel, Cloudflare, Supabase, dll.
- ✅ Sudah dibeli: domain `sparkmind.biz.id` (DomaiNesia).
- ❌ Dilarang tanpa persetujuan Founder: hosting berbayar, VPS, email bisnis
  berbayar, layanan berlangganan apa pun.

Setiap rekomendasi yang menimbulkan biaya **wajib** melalui Proposal.

---

## 5. Definition of Done

Sebuah task dianggap selesai apabila **semua** poin berikut terpenuhi:

- ✓ Requirement terpenuhi
- ✓ Code berjalan (sudah ditest)
- ✓ Dokumentasi diperbarui
- ✓ `STATE.md` diperbarui
- ✓ Repository tetap konsisten & bersih
- ✓ Tidak menambah technical debt
- ✓ Commit dibuat dengan pesan yang jelas
- ✓ Push ke repository
- ✓ Engineering Report dibuat di `reports/`

---

## 6. Larangan Keras

- ❌ Menyimpan secret/API key di dalam repository.
- ❌ Commit langsung tanpa self-review.
- ❌ Menambahkan dependency besar tanpa alasan yang dicatat.
- ❌ Membuat fitur di luar sprint/misi aktif.
- ❌ Menulis knowledge di system prompt (knowledge hidup di `.sparkmind/`).
