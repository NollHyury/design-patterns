import Clerk from './Clerk';
import BurgerBuilder from './BurgerBuilder';


function clientCode (clerk: Clerk) {
    const builder = new BurgerBuilder()
    clerk.setBuilder(builder)
    
    console.log('Building Cheeseburger')
    clerk.buildCheeseburger().listIngredients()
    
    console.log('Building Complete burger')
    clerk.buildCompleteBurger().listIngredients()
    
    console.log('Building custom burger')
    builder.addOnion().addCheese().addTomato().addKetchup().addPickles().build().listIngredients()
  }
    
  const clerk = new Clerk()
  clientCode(clerk)