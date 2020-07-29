export default class Restaurant {
    private static instance: Restaurant
    private prop: number
    
    private constructor () {
      this.prop = Math.random()
    }
    
    public static getInstance (): Restaurant {
      if (!Restaurant.instance) Restaurant.instance = new Restaurant()
      return Restaurant.instance
    }
    
    public printValue () {
      console.log(this.prop)
    }
  }