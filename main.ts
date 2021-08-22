import { 
  ImageFieldBuilder,
  SelectFieldBuilder,
  Singleton, 
  TextFieldBuilder 
} from "./patterns/creational";

// Singleton test
console.log('\n*** SINGLETONE TEST ***\n')
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

// Builder test
console.log('\n*** BUILDER TEST ***\n')

const textBuilder = new TextFieldBuilder();
const selectBuilder = new SelectFieldBuilder();
const imageBuilder = new ImageFieldBuilder();

const textField1 = textBuilder
  .setTitle('First Text Field')
  .setType()
  .build();

const textField2 = textBuilder
  .setTitle('Second Text Field')
  .setType()
  .build();

const selectField = selectBuilder
  .setTitle('Select Field')
  .setType()
  .setOptions(['One', 'Two', 'Three'])
  .build();

const imageField = imageBuilder
  .setTitle('Image Field')
  .setType()
  .setSize({ width: 100, height: 100 })
  .build();

console.log(textField1.getInfo());
console.log(textField2.getInfo());
console.log(selectField.getInfo());
console.log(imageField.getInfo());
// End of Builder test