import { Button, Checkbox } from "../../patterns/creational";

describe('Prototype', () => {
  it('should clone correctly', async () => {
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

    const button = new Button(10,20,30,40);
    const checkbox = new Checkbox(false);
    
    await delay(2000);
    const buttonClone = button.clone();
    const checkboxClone = checkbox.clone();

    expect(buttonClone.getStatus()).toEqual('x: 10 | y: 20 | width: 30 | height: 40');
    expect(checkboxClone.getStatus()).toEqual('not checked');

    expect(button.getTimeStamp()).not.toEqual(buttonClone.getTimeStamp());
    expect(checkbox.getTimeStamp()).not.toEqual(checkboxClone.getTimeStamp());
  })
});