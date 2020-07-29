export default class Burger {
  public ingredients = ["Bottom bread", "Meat"];

  listIngredients(): void {
    console.log(`Your burger has: ${this.ingredients.join(", ")}`);
  }
}
