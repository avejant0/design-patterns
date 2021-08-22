import { FieldSize, Field, FieldType } from "./Field";
import { FieldBuilder } from "./FieldBuilder";

export class ImageFieldBuilder implements FieldBuilder {
  private field: Field;

  constructor() {
    this.field = new Field();
  }
  
  setTitle(title: string): FieldBuilder {
    this.field.setTitle(title);
    return this;
  }

  setType(): FieldBuilder {
    this.field.setType(FieldType.IMAGE);
    return this;
  }

  setOptions(_: string[]): FieldBuilder {
    throw new Error(`'options' property is not supported by field of type '${FieldType.IMAGE}'`);
  }

  setSize(size: FieldSize): FieldBuilder {
    this.field.setSize(size);
    return this;
  }

  build(): Field {
    const fieldToReturn = this.field;
    this.field = new Field();
    return fieldToReturn;
  }

}