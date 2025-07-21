import { PizzaFactory } from "./PizzaFactory.js";

const pedido = "peperoni";

try {
  const pizza = PizzaFactory(pedido);
  pizza.prepare();
  pizza.bake();
  pizza.delivery();
} catch (error) {
  console.error(error.message);
}
