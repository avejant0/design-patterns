import { AnnualReport } from "./annual/AnnualReport";
import { UserReport } from "./user/UserReport";

export default interface ReportFactory {
  createAnnualReport(): AnnualReport;
  
  createReportForUser(username: string): UserReport;
}