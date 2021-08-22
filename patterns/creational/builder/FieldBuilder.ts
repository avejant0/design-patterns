import { Field, FieldSize, FieldType } from "./Field";

export interface FieldBuilder {
  setTitle(title: string): FieldBuilder;
  setType(): FieldBuilder;
  setOptions(options: string[]): FieldBuilder;
  setSize(size: FieldSize): FieldBuilder;
  build(): Field;
}