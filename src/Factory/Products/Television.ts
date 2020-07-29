import IProduct from "../IProduct";

export default class Television implements IProduct {
  public operation(): string {
    return "Hi, let's see a movie?!?!";
  }
}
