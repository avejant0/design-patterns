import { AnnualReport } from "./AnnualReport";

export class ExcelAnnualReport implements AnnualReport {
  getTotal(): number {
    return 200;
  }
}