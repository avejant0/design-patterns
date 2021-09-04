import { AnnualReport } from "./annual/AnnualReport";
import { ExcelAnnualReport } from "./annual/ExcelAnnualReport";
import ReportFactory from "./ReportFactory";
import { ExcelUserReport } from "./user/ExcelUserReport";
import { UserReport } from "./user/UserReport";

export class ExcelReportFactory implements ReportFactory {
  createAnnualReport(): AnnualReport {
    return new ExcelAnnualReport();
  }
  createReportForUser(username: string): UserReport {
    return new ExcelUserReport(username);
  }
}