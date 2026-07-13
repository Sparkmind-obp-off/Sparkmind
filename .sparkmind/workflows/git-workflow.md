# Git Workflow

> **Versi**: 1.1 · **Status dokumen**: Aktif
> **Terakhir diperbarui**: 2026-07-13 (Sprint 001)
> **Terkait**: [session-lifecycle.md](session-lifecycle.md) · [repository.md](../standards/repository.md) · [engineering.md](../standards/engineering.md)

---

## Branch

- **`main`** adalah branch utama dan satu-satunya branch permanen.
- Fase bootstrap (tim sangat kecil): boleh commit langsung ke `main`
  **selama** lifecycle sesi (termasuk self-review) dipatuhi.
- Ketika tim bertambah atau produk sudah punya customer: pindah ke
  feature branch + Pull Request (akan diputuskan via ADR).

## Format Commit Message

Gunakan format **Conventional Commits**:

```
<type>(<scope opsional>): <deskripsi singkat, imperatif>

<body opsional: alasan perubahan>
```

### Types

| Type | Kapan |
|------|-------|
| `feat` | Fitur baru |
| `fix` | Perbaikan bug |
| `docs` | Perubahan dokumentasi saja |
| `chore` | Tooling, config, maintenance |
| `refactor` | Refactor tanpa mengubah perilaku |
| `test` | Menambah/memperbaiki test |
| `sdos` | Perubahan pada `.sparkmind/` (governance) |

### Contoh

```
sdos: bootstrap Sparkmind Development Operating System

feat(web): add landing page hero section

docs: update architecture diagram after Supabase decision
```

## Aturan

1. Commit harus **atomic** — satu commit = satu unit perubahan logis.
2. Jangan pernah commit:
   - Secret / API key / `.env`
   - `node_modules/`, artefak build, file sementara
3. Pesan commit menjelaskan **kenapa**, bukan hanya apa.
4. Push ke `origin main` setelah self-review selesai.
5. Jangan force-push ke `main` kecuali keadaan darurat + dicatat alasannya.
