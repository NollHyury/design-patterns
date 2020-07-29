import IBurgerBuilder from "./IBurgerBuilder";
import Burger from "./Burger";

export default class Clerk {
  private builder: IBurgerBuilder;

  setBuilder(builder: IBurgerBuilder): void {
    this.builder = builder;
  }

  buildCheeseburger(): Burger {
    return this.builder.addCheese().addKetchup().addMustard().build();
  }

  buildCompleteBurger(): Burger {
    return this.builder

      .addCheese()
      .addLetuce()
      .addPickles()
      .addTomato()
      .addOnion()
      .addKetchup()
      .addMustard()
      .build();
  }
}
