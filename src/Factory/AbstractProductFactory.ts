import IProduct from "./IProduct";

export default abstract class AbstractProductFactory {
  public abstract factoryMethod(): IProduct;
  public someOperation(): string {
    const product = this.factoryMethod();
    return `Factory: ${product.operation()}`;
  }
}
