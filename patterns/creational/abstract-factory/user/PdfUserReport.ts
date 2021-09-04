import { UserReport } from "./UserReport";

export class PdfUserReport implements UserReport {
  private readonly username: string;

  constructor(username: string) {
    this.username = username;
  }

  getInfo(): string {
    return `Pdf Report result for ${this.username}`;
  }
}