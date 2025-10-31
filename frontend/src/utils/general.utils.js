export function asNumber(n) {
  // Coerce "0.02" -> 0.02, leave numbers as-is, else null
  if (n === null || n === undefined) return null;
  const x = Number(n);
  return Number.isNaN(x) ? null : x;
}