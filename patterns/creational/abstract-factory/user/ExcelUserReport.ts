import { UserReport } from "./UserReport";

export class ExcelUserReport implements UserReport {
  private readonly username: string;

  constructor(username: string) {
    this.username = username;
  }

  getInfo(): string {
    return `Excel Report result for ${this.username}`;
  }
}