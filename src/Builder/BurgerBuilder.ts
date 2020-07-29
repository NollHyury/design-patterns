import Burger from "./Burger";
import IBurgerBuilder from "./IBurgerBuilder";

export default class BurgerBuilder implements IBurgerBuilder {
  private burger: Burger;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.burger = new Burger();
  }

  addCheese() {
    this.burger.ingredients.push("Cheese");
    return this;
  }

  addLetuce() {
    this.burger.ingredients.push("Letuce");
    return this;
  }

  addTomato() {
    this.burger.ingredients.push("Tomato");
    return this;
  }

  addOnion() {
    this.burger.ingredients.push("Onion");
    return this;
  }

  addPickles() {
    this.burger.ingredients.push("Pickles");
    return this;
  }

  addKetchup() {
    this.burger.ingredients.push("Ketchup");
    return this;
  }

  addMustard() {
    this.burger.ingredients.push("Mustard");
    return this;
  }

  build() {
    this.burger.ingredients.push("Top Bread");
    const burger = this.burger;
    this.reset();
    return burger;
  }
}
