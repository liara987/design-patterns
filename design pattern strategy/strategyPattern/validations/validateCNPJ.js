export function validateCNPJ(value) {
  return value.replace(/\D/g, "").length === 14;
}
