import { validateCNPJ } from "./validations/validateCNPJ.js";
import { validateCPF } from "./validations/validateCPF.js";
import { validateEmail } from "./validations/validateEmail.js";

const strategies = {
  email: validateEmail,
  cpf: validateCPF,
  cnpj: validateCNPJ,
};

export function validateField(type, value) {
  const strategy = strategies[type];
  if (!strategy) {
    throw new Error(`Tipo de validação desconhecido: ${type}`);
  }
  return strategy(value);
}
