import { validateField } from "./strategyContext.js";

const fields = [
  { type: "email", value: "liara@gmail.com" },
  { type: "cpf", value: "123.456.789-00" },
  { type: "cnpj", value: "12.345.678/0001-99" },
];

fields.forEach(({ type, value }) => {
  const isValid = validateField(type, value);
  console.log(`${type.toUpperCase()} ${value} é válido? ${isValid}`);
});
