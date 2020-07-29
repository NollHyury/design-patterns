import AbstractProductFactory from "./AbstractProductFactory";
import StereoFactory from "./Factories/StereoFactory";
import TelevisionFactory from "./Factories/TelevisionFactory";

function clientCode(creator: AbstractProductFactory) {
  console.log(creator.someOperation());
}

console.log("App: Stereo.");
clientCode(new StereoFactory());
console.log("");

console.log("App: Television.");
clientCode(new TelevisionFactory());
