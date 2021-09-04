import { AnnualReport } from "./AnnualReport";

export class PdfAnnualReport implements AnnualReport {
  getTotal(): number {
    return 1000;
  }
}