import { Singleton } from "./patterns/creational";

// Singleton test
const instance1 = Singleton.getInstance();

// Will raise error if will be called
// const instance2 = new Singleton();
const instance3 = Singleton.getInstance();

// Assert
const counter1 = instance1.getCounter();
const counter3 = instance3.getCounter();
if (counter1 !== counter3) {
  throw new Error(`Expected ${counter1} equals ${counter3} but it was not.`);
} else {
  console.log('Singleton works correctly.');
}

// End of Singleton test