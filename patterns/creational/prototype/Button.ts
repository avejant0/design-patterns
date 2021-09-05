import { Element } from "./Element";

export class Button implements Element {
  private x: number; y: number; width: number; height: number;
  private createdAt: Date;

  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.createdAt = new Date();
  }

  
  public getStatus(): string {
    return `x: ${this.x} | y: ${this.y} | width: ${this.width} | height: ${this.height}`;
  }

  public getTimeStamp(): string {
    return this.createdAt.toString();
  }
  
  clone(): Element {
    return new Button(this.x, this.y, this.width, this.height);
  }
}