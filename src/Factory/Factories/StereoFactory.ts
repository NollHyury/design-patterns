import Stereo from '../Products/Stereo';
import IProduct from '../IProduct';
import AbstractProductFactory from '../AbstractProductFactory';

export default class StereoFactory extends AbstractProductFactory {
  public factoryMethod(): IProduct {
    return new Stereo();
  }
}
