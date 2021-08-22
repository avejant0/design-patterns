export enum FieldType {
  TEXT = 'text',
  SELECT = 'select',
  IMAGE = 'image'
};

export type FieldSize = {
  width: number;
  height: number;
}

export class Field {
  private title: string;
  private type: FieldType;
  private options?: string[];
  private size?: FieldSize;

  public setTitle(title: string) {
    this.title = title;
  }

  public setType(type: FieldType) {
    this.type = type;
  }

  public setOptions(options: string[]) {
    this.options = options;
  }

  public setSize(size: FieldSize) {
    this.size = size;
  }

  public getInfo(): string {
    let info = "";
    info += "Field info\n";
    info += `title: ${this.title}\n`;
    info += `type: ${this.type}\n`;

    if (this.options) {
      info += `options: ${this.options}\n`;
    }

    if (this.size) {
      info += `size: ${this.size.width} x ${this.size.height}\n`;
    }
    return info;
  }
}