export class Singleton {
  private static instance: Singleton = null;

  // for test purposes
  private counter = 0;

  private constructor() {
    this.counter++;
  }

  public static getInstance(): Singleton {
    if (this.instance === null) {
      this.instance = new Singleton();
    }

    return this.instance;
  }

  // for test purposes
  public getCounter(): number {
    return this.counter;
  }
}