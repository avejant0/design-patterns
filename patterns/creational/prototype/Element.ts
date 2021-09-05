export interface Element {
  clone(): Element;
  getStatus(): string;
  getTimeStamp(): string;
}