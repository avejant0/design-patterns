import { Element } from "./Element";

export class Checkbox implements Element {
  private isChecked: boolean;
  private createdAt: Date;
  
  constructor(isChecked: boolean) {
    this.isChecked = isChecked;
    this.createdAt = new Date();
  }

  public getStatus(): string {
    return this.isChecked ? 'checked' : 'not checked';
  }

  public getTimeStamp(): string {
    return this.createdAt.toString();
  }
  
  public clone(): Element {
    return new Checkbox(this.isChecked);
  }
}