import { Calabresa } from "./pizzas/calabresa.js";
import { FrangoComCatupiry } from "./pizzas/FrangoComCatupiry.js";
import { Mussarela } from "./pizzas/Mussarela.js";

export function PizzaFactory(flavor) {
  switch (flavor) {
    case "calabresa":
      return new Calabresa();
    case "frangoComCatupiry":
      return new FrangoComCatupiry();
    case "mussarela":
      return new Mussarela();
    default:
      throw new Error(
        `A pizza de sabor ${flavor} não esta disponível no momento.`
      );
  }
}
