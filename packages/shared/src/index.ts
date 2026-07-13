/**
 * @sparkmind/shared — util & types bersama untuk seluruh apps/packages.
 *
 * Aturan (standards/engineering.md):
 * - Hanya kode yang benar-benar dipakai lintas package.
 * - Tanpa dependency runtime eksternal kecuali sangat diperlukan.
 */

export const APP_NAME = "Sparkmind" as const;

export type Result<T, E = Error> =
  { ok: true; value: T } | { ok: false; error: E };
