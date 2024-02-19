import { Component, OnInit } from '@angular/core';
import { ImportColumns, ExportColumns } from './columns.enum';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onUpload(event: any) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsBinaryString(file);
      reader.onload = (e) => {
        const data = e.target?.result;
        const workbook = XLSX.read(data, { type: 'binary' });

        const content = {
          results: [],
          columns: [],
        };

        workbook.SheetNames.forEach((sheetName) => {
          const roa: any[] = XLSX.utils.sheet_to_json(
            workbook.Sheets[sheetName]
          );

          const header: any = XLSX.utils.sheet_to_json(
            workbook.Sheets[sheetName],
            { header: 1 }
          )[0];

          Array.prototype.push.apply(content.columns, header);
          Array.prototype.push.apply(content.results, roa);
        });


        console.log('%c content:', 'background: #015fcb; color: #fff; font-size: 14px; padding: 5px 5px 5px 0; border: 1px dashed ##fff; border-radius: 5px;', '\n', content);

        const rowsToDownload = this.createXLSX(content.results);
        console.log('%c rowsToDownload:', 'background: #ff0000; color: #fff; font-size: 14px; padding: 5px 5px 5px 0; border: 1px dashed #fff; border-radius: 5px;', '\n', rowsToDownload);

        this.downloadXLSX(rowsToDownload);
      };
    }
  }

  createXLSX(rawRows: { [key in ImportColumns]: string }[]) {
    return rawRows.reduce((modifiedFinalObj: any[], originalRow: { [key in ImportColumns]: string }) => {

      // פרטים של ההזמנה
      modifiedFinalObj.push({
        [ExportColumns.TYPE]: "1",
        [ExportColumns.COSTUMER_NUM]: "101162",
        [ExportColumns.COSTUMER_NAME]: `${originalRow[ImportColumns.COSTUMER_NAME]} ${originalRow[ImportColumns.COSTUMER_LAST_NAME]}`,
        [ExportColumns.ORDER_DATE]: originalRow[ImportColumns.ORDER_DATE],
        [ExportColumns.ORDER_NUM]: originalRow[ImportColumns.ORDER_NUM],
        [ExportColumns.DETAILS]: originalRow[ImportColumns.SHIPMENT_TYPE],
      })

      // פרטים של המוצר
      modifiedFinalObj.push({
        [ExportColumns.TYPE]: "2",
        [ExportColumns.ID]: originalRow[ImportColumns.PRODUCT_NAME],
        [ExportColumns.DESCRIPTION]: "",
        [ExportColumns.QUANTITY]: originalRow[ImportColumns.QUANTITY],
        [ExportColumns.PRICE_BEFORE_TAX]: `${(+originalRow[ImportColumns.PRICE_INC_TAX] / 1.17 / +originalRow[ImportColumns.QUANTITY]).toFixed(2)}`,
      })

      // משלוח
      modifiedFinalObj.push({
        [ExportColumns.TYPE]: "2",
        [ExportColumns.ID]: "2BF-24MONITOR",
        [ExportColumns.QUANTITY]: originalRow[ImportColumns.QUANTITY],
      })

      // משלוח
      modifiedFinalObj.push({
        [ExportColumns.TYPE]: "2",
        [ExportColumns.ID]: "5",
        [ExportColumns.QUANTITY]: "1",
      })

      // פרטים של הלקוח
      modifiedFinalObj.push({
        [ExportColumns.TYPE]: "3",
        [ExportColumns.COSTUMER_CONTACT]: `${originalRow[ImportColumns.COSTUMER_NAME]} ${originalRow[ImportColumns.COSTUMER_LAST_NAME]}`,
        [ExportColumns.TELEPHONE_NUM]: originalRow[ImportColumns.COSTUMER_TELEPHONE],
        [ExportColumns.EMAIL]: originalRow[ImportColumns.EMAIL],
        [ExportColumns.ADDRESS1]: originalRow[ImportColumns.ADDRESS],
        [ExportColumns.ADDRESS2]: originalRow[ImportColumns.TEXT_SHIPMENT],
        [ExportColumns.ADDRESS3]: `${originalRow[ImportColumns.COSTUMER_TELEPHONE]}`.includes(`${originalRow[ImportColumns.TELEPHONE_SHIPPING]}`) ? "" : originalRow[ImportColumns.TELEPHONE_SHIPPING],
        [ExportColumns.CITY]: originalRow[ImportColumns.CITY],
      })

      // טקסט להזמנה
      modifiedFinalObj.push({
        [ExportColumns.TYPE]: "4",
        [ExportColumns.TEXT]: originalRow[ImportColumns.TEXT_SHIPMENT],
      })

      return modifiedFinalObj;
    }, [])
  }

  downloadXLSX(rows: any[]) {
    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Data");

    XLSX.writeFile(wb, "2BF_ORDERS_EXPORT.xlsx")
  }
}

