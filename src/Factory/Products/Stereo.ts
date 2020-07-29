import IProduct from "../IProduct";

export default class Stereo implements IProduct {
  public operation(): string {
    return "Hi, let's dance?!?!";
  }
}
