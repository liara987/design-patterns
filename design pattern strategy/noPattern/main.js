function validateEmail(value) {
  return /\S+@\S+\.\S+/.test(value);
}

function validateCPF(value) {
  return value.replace(/\D/g, "").length === 11;
}

function validateCNPJ(value) {
  return value.replace(/\D/g, "").length === 14;
}

function validateField(type, value) {
  if (type === "email") {
    return validateEmail(value);
  } else if (type === "cpf") {
    return validateCPF(value);
  } else if (type === "cnpj") {
    return validateCNPJ(value);
  } else {
    throw new Error(`Tipo de validação desconhecido: ${type}`);
  }
}

const fields = [
  { type: "email", value: "teste@gmail.com" },
  { type: "cpf", value: "123.456.789-00" },
  { type: "cnpj", value: "12.345.678/0001-99" },
];

fields.forEach(({ type, value }) => {
  const isValid = validateField(type, value);
  console.log(`${type.toUpperCase()} ${value} é válido? ${isValid}`);
});
