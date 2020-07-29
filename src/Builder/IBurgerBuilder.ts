import Burger from './Burger';

export default interface IBurgerBuilder {
  addLetuce(): IBurgerBuilder;
  addTomato(): IBurgerBuilder;
  addCheese(): IBurgerBuilder;
  addOnion(): IBurgerBuilder;
  addPickles(): IBurgerBuilder;
  addKetchup(): IBurgerBuilder;
  addMustard(): IBurgerBuilder;
  build(): Burger;
}
