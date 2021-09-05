import { 
  Button,
  Checkbox,
  ExcelReportFactory,
  ImageFieldBuilder,
  MySqlQueryExecutor,
  PdfReportFactory,
  PgQueryExecutor,
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

// Factory Method test
console.log('\n*** FACTORY METHOD TEST ***\n')

const executor1 = new PgQueryExecutor();
const executor2 = new MySqlQueryExecutor();

executor1.execute('test 1');
executor2.execute('test 2');
// End of Factory Method test

// Abstract Factory test
console.log('\n*** ABSTRACT FACTORY METHOD TEST ***\n')

const excelFactory = new ExcelReportFactory();
const pdfFactory = new PdfReportFactory();

const annualReport1 = excelFactory.createAnnualReport();
const annualReport2 = pdfFactory.createAnnualReport();

const userReport1 = excelFactory.createReportForUser("john.doe");
const userReport2 = pdfFactory.createReportForUser("mary.moore");

console.log(annualReport1.getTotal());
console.log(annualReport2.getTotal());
console.log(userReport1.getInfo());
console.log(userReport2.getInfo());
// End of Abstract Factory test

// Prototype test
console.log('\n*** PROTOTYPE TEST ***\n')
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const button = new Button(10,20,30,40);
const checkbox = new Checkbox(false);

delay(2000).then(() => {
  const buttonClone = button.clone();
  const checkboxClone = checkbox.clone();
  
  console.log(buttonClone.getStatus());
  console.log(checkboxClone.getStatus());
  
  console.log(button.getTimeStamp());
  console.log(buttonClone.getTimeStamp());
  
  console.log(checkbox.getTimeStamp());
  console.log(checkboxClone.getTimeStamp());
});

// End of Prototype test