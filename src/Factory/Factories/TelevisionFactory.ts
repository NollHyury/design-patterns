import Television from '../Products/Television';
import IProduct from '../IProduct';
import AbstractProductFactory from '../AbstractProductFactory';

export default class TelevisionFactory extends AbstractProductFactory {
  public factoryMethod(): IProduct {
    return new Television();
  }
}
