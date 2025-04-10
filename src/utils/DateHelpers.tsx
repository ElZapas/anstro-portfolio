// src/utils/helpers.ts
/**
 * Extrae todos los años (4 dígitos) de un string.
 * Ej: "Oct 2021 - Dic 2024" → [2021, 2024]
 */
export function extractYears(dateStr: string): number[] {
    const matches = dateStr.match(/\d{4}/g);
    return matches ? matches.map((y) => parseInt(y, 10)) : [];
  }
  