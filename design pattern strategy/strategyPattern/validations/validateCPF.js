export function validateCPF(value) {
  return value.replace(/\D/g, "").length === 11;
}
