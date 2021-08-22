import { FieldSize, Field, FieldType } from "./Field";
import { FieldBuilder } from "./FieldBuilder";

export class SelectFieldBuilder implements FieldBuilder {
  private field: Field;

  constructor() {
    this.field = new Field();
  }

  setTitle(title: string): FieldBuilder {
    this.field.setTitle(title);
    return this;
  }

  setType(): FieldBuilder {
    this.field.setType(FieldType.SELECT);
    return this;
  }

  setOptions(options: string[]): FieldBuilder {
    this.field.setOptions(options);
    return this;
  }

  setSize(_: FieldSize): FieldBuilder {
    throw new Error(`'size' property is not supported by field of type '${FieldType.SELECT}'`);
  }

  build(): Field {
    const fieldToReturn = this.field;
    this.field = new Field();
    return fieldToReturn;
  }

}