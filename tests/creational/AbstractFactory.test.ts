import { ExcelReportFactory, PdfReportFactory } from "../../patterns/creational";

describe('Abstract Factory', () => {
  const excelFactory = new ExcelReportFactory();
  const pdfFactory = new PdfReportFactory();

  it('should create correct annual report', async () => {
    const excelReport = excelFactory.createAnnualReport();
    const pdfReport = pdfFactory.createAnnualReport();

    expect(excelReport.getTotal()).toEqual(200);
    expect(pdfReport.getTotal()).toEqual(1000);
  });

  it('should create correct user report', async () => {
    const excelReport = excelFactory.createReportForUser('john doe');
    const pdfReport = pdfFactory.createReportForUser('mary moore');
    expect(excelReport.getInfo()).toEqual('Excel Report result for john doe');
    expect(pdfReport.getInfo()).toEqual('Pdf Report result for mary moore');
  });
});