/**
 * Global Formatters
 * 
 * Enforce deterministic localization for SSR to avoid hydration mismatches.
 * ALWAYS use these utilities instead of raw toLocaleString().
 */

const LOCALE = 'en-US';

export function formatNumber(value: number): string {
  // eslint-disable-next-line no-restricted-syntax
  return value.toLocaleString(LOCALE);
}

export function formatCurrency(value: number, currency: string = 'USD'): string {
  // eslint-disable-next-line no-restricted-syntax
  return value.toLocaleString(LOCALE, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

export function formatDate(value: Date | string | number): string {
  const date = new Date(value);
  return date.toLocaleDateString(LOCALE, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}
