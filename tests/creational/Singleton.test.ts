import { Singleton } from "../../patterns/creational";

describe('Singleton', () => {
  it('should create only one instance', async () => {
    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();

    const counter1 = instance1.getCounter();
    const counter2 = instance2.getCounter();

    expect(counter1).toEqual(counter2);
  });
});