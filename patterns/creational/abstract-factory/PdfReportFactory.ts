import { AnnualReport } from "./annual/AnnualReport";
import { PdfAnnualReport } from "./annual/PdfAnnualReport";
import ReportFactory from "./ReportFactory";
import { PdfUserReport } from "./user/PdfUserReport";
import { UserReport } from "./user/UserReport";

export class PdfReportFactory implements ReportFactory {
  createAnnualReport(): AnnualReport {
    return new PdfAnnualReport();
  }
  createReportForUser(username: string): UserReport {
    return new PdfUserReport(username);
  }
}