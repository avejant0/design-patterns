import { FieldType, FieldSize, Field } from "./Field";
import { FieldBuilder } from "./FieldBuilder";

export class TextFieldBuilder implements FieldBuilder {
  private field: Field;

  constructor() {
    this.field = new Field();
  }

  setTitle(title: string): FieldBuilder {
    this.field.setTitle(title);
    return this;
  }

  setType(): FieldBuilder {
    this.field.setType(FieldType.TEXT);
    return this;
  }

  setOptions(_: string[]): FieldBuilder {
    throw new Error(`'options' property is not supported by field of type '${FieldType.TEXT}'`);
  }
  setSize(_: FieldSize): FieldBuilder {
    throw new Error(`'size' property is not supported by field of type '${FieldType.TEXT}'`);
  }

  build(): Field {
    const fieldToReturn = this.field;
    this.field = new Field();
    return fieldToReturn;
  }

}