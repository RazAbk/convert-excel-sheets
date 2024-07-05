import { Component, OnInit } from '@angular/core';
import { ImportColumns_1, ExportColumns_2, RegularPC, LaptopPC, ImportColumns_2, Options } from './columns.enum';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  readonly Options = Options;

  constructor() { }

  ngOnInit(): void {
  }

  onUpload(event: any, option: Options) {
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


        console.log('%c Excel input:', 'background: #015fcb; color: #fff; font-size: 14px; padding: 5px 5px 5px 0; border: 1px dashed ##fff; border-radius: 5px;', '\n', content);

        const rowsToDownload = this.createXLSX(content.results, option);

        console.log('%c Excel output:', 'background: #ff0000; color: #fff; font-size: 14px; padding: 5px 5px 5px 0; border: 1px dashed #fff; border-radius: 5px;', '\n', rowsToDownload);

        this.downloadXLSX(rowsToDownload, option);
      };
    }
  }

  createXLSX(rawRows: any[], option: Options) {
    switch (option) {
      case Options.BF_ORDERS_EXPORT:
        return rawRows.reduce((modifiedFinalObj: any[], originalRow: { [key in ImportColumns_1]: string }) => {

          switch (originalRow[ImportColumns_1.PRODUCT_NAME]) {
            case RegularPC.PC1:
            case RegularPC.PC2:
            case RegularPC.PC3:
              // פרטים של ההזמנה
              modifiedFinalObj.push({
                [ExportColumns_2.TYPE]: "1",
                [ExportColumns_2.COSTUMER_NUM]: "101162",
                [ExportColumns_2.COSTUMER_NAME]: `${originalRow[ImportColumns_1.COSTUMER_NAME]} ${originalRow[ImportColumns_1.COSTUMER_LAST_NAME]}`,
                [ExportColumns_2.ORDER_DATE]: originalRow[ImportColumns_1.ORDER_DATE],
                [ExportColumns_2.ORDER_NUM]: originalRow[ImportColumns_1.ORDER_NUM],
                [ExportColumns_2.DETAILS]: originalRow[ImportColumns_1.SHIPMENT_TYPE],
                [ExportColumns_2.PRIORITY_STATUS]: "",
              })

              // פרטים של המוצר
              modifiedFinalObj.push({
                [ExportColumns_2.TYPE]: "2",
                [ExportColumns_2.ID]: originalRow[ImportColumns_1.PRODUCT_NAME],
                [ExportColumns_2.DESCRIPTION]: "",
                [ExportColumns_2.QUANTITY]: originalRow[ImportColumns_1.QUANTITY],
                [ExportColumns_2.PRICE_BEFORE_TAX]: `${(+originalRow[ImportColumns_1.PRICE_INC_TAX] / 1.17 / +originalRow[ImportColumns_1.QUANTITY]).toFixed(2)}`,
              })

              // מסך
              modifiedFinalObj.push({
                [ExportColumns_2.TYPE]: "2",
                [ExportColumns_2.ID]: "2BF-24MONITOR",
                [ExportColumns_2.QUANTITY]: originalRow[ImportColumns_1.QUANTITY],
              });

              // משלוח
              modifiedFinalObj.push({
                [ExportColumns_2.TYPE]: "2",
                [ExportColumns_2.ID]: "5",
                [ExportColumns_2.QUANTITY]: "1",
              });

              // פרטים של הלקוח
              modifiedFinalObj.push({
                [ExportColumns_2.TYPE]: "3",
                [ExportColumns_2.COSTUMER_CONTACT]: `${originalRow[ImportColumns_1.COSTUMER_NAME]} ${originalRow[ImportColumns_1.COSTUMER_LAST_NAME]}`,
                [ExportColumns_2.TELEPHONE_NUM]: originalRow[ImportColumns_1.COSTUMER_TELEPHONE],
                [ExportColumns_2.EMAIL]: originalRow[ImportColumns_1.EMAIL],
                [ExportColumns_2.ADDRESS1]: originalRow[ImportColumns_1.ADDRESS],
                [ExportColumns_2.ADDRESS2]: originalRow[ImportColumns_1.TEXT_SHIPMENT],
                [ExportColumns_2.ADDRESS3]: `${originalRow[ImportColumns_1.COSTUMER_TELEPHONE]}`.includes(`${originalRow[ImportColumns_1.TELEPHONE_SHIPPING]}`) ? "" : originalRow[ImportColumns_1.TELEPHONE_SHIPPING],
                [ExportColumns_2.CITY]: originalRow[ImportColumns_1.CITY],
              });

              // טקסט להזמנה
              modifiedFinalObj.push({
                [ExportColumns_2.TYPE]: "4",
                [ExportColumns_2.TEXT]: originalRow[ImportColumns_1.TEXT_SHIPMENT],
              });
              break;
            case LaptopPC.LAPTOP1:
            case LaptopPC.LAPTOP2:

              // פרטים של ההזמנה
              modifiedFinalObj.push({
                [ExportColumns_2.TYPE]: "1",
                [ExportColumns_2.COSTUMER_NUM]: "101162",
                [ExportColumns_2.COSTUMER_NAME]: `${originalRow[ImportColumns_1.COSTUMER_NAME]} ${originalRow[ImportColumns_1.COSTUMER_LAST_NAME]}`,
                [ExportColumns_2.ORDER_DATE]: originalRow[ImportColumns_1.ORDER_DATE],
                [ExportColumns_2.ORDER_NUM]: originalRow[ImportColumns_1.ORDER_NUM],
                [ExportColumns_2.DETAILS]: originalRow[ImportColumns_1.SHIPMENT_TYPE],
                [ExportColumns_2.PRIORITY_STATUS]: "",
              });

              // פרטים של המוצר
              modifiedFinalObj.push({
                [ExportColumns_2.TYPE]: "2",
                [ExportColumns_2.ID]: originalRow[ImportColumns_1.PRODUCT_NAME],
                [ExportColumns_2.DESCRIPTION]: "",
                [ExportColumns_2.QUANTITY]: originalRow[ImportColumns_1.QUANTITY],
                [ExportColumns_2.PRICE_BEFORE_TAX]: `${(+originalRow[ImportColumns_1.PRICE_INC_TAX] / 1.17 / +originalRow[ImportColumns_1.QUANTITY]).toFixed(2)}`,
              });

              // משלוח
              modifiedFinalObj.push({
                [ExportColumns_2.TYPE]: "2",
                [ExportColumns_2.ID]: "5",
                [ExportColumns_2.QUANTITY]: "1",
              });

              // פרטים של הלקוח
              modifiedFinalObj.push({
                [ExportColumns_2.TYPE]: "3",
                [ExportColumns_2.COSTUMER_CONTACT]: `${originalRow[ImportColumns_1.COSTUMER_NAME]} ${originalRow[ImportColumns_1.COSTUMER_LAST_NAME]}`,
                [ExportColumns_2.TELEPHONE_NUM]: originalRow[ImportColumns_1.COSTUMER_TELEPHONE],
                [ExportColumns_2.EMAIL]: originalRow[ImportColumns_1.EMAIL],
                [ExportColumns_2.ADDRESS1]: originalRow[ImportColumns_1.ADDRESS],
                [ExportColumns_2.ADDRESS2]: originalRow[ImportColumns_1.TEXT_SHIPMENT],
                [ExportColumns_2.ADDRESS3]: `${originalRow[ImportColumns_1.COSTUMER_TELEPHONE]}`.includes(`${originalRow[ImportColumns_1.TELEPHONE_SHIPPING]}`) ? "" : originalRow[ImportColumns_1.TELEPHONE_SHIPPING],
                [ExportColumns_2.CITY]: originalRow[ImportColumns_1.CITY],
              });

              // טקסט להזמנה
              modifiedFinalObj.push({
                [ExportColumns_2.TYPE]: "4",
                [ExportColumns_2.TEXT]: originalRow[ImportColumns_1.TEXT_SHIPMENT],
              });

              break;
          }

          return modifiedFinalObj;
        }, []);
      case Options.PCN_ORDERS_EXPORT:

        const filteredByStatusRawRows = [...rawRows].filter((row: any) => {
          // Proceed only for these 3 order status types
          if (["wc-shippedil", "wc-processing", "wc-packabroad"].includes(row[ImportColumns_2.Order_Status])) {
            return true;
          } else {
            // If another OrderID has a 'good' status, keep the row inside the filtered results
            if (
              [...rawRows].some((anotherRow: any) => (anotherRow[ImportColumns_2.Order_ID] === row[ImportColumns_2.Order_ID] && ["wc-shippedil", "wc-processing", "wc-packabroad"].includes(anotherRow[ImportColumns_2.Order_Status])))
            ) {
              return true;
            }
            return false;
          }
        });

        const finalProductsToPush: { [order: string]: any[] } = {};


        const finalExcelWithoutProducts = filteredByStatusRawRows.reduce((modifiedFinalObj: any[], originalRow: { [key in ImportColumns_2]: string }) => {

          const orderDate = new Date(originalRow[ImportColumns_2.Order_Date]);
          const prettyDate = this._formatDate(orderDate);

          const startOrderIdx = modifiedFinalObj.findIndex((finalRow: any) => finalRow[ExportColumns_2.ORDER_NUM] === originalRow[ImportColumns_2.Order_ID])

          const orderFullName = `${originalRow?.[ImportColumns_2.Billing_First_Name] ?? ""} ${originalRow?.[ImportColumns_2.Billing_Last_Name] ?? ""} ${originalRow?.[ImportColumns_2.Billing_Company] ?? ""}`.trim();

          if (startOrderIdx !== -1) {
            // Order_Id already exists, just add new products to the order, [ExportColumns_2.TYPE]: "2",
            if (!finalProductsToPush[originalRow[ImportColumns_2.Order_ID]]) {
              finalProductsToPush[originalRow[ImportColumns_2.Order_ID]] = [];
            }

            finalProductsToPush[originalRow[ImportColumns_2.Order_ID]].push({
              [ExportColumns_2.TYPE]: "2",
              [ExportColumns_2.ID]: originalRow[ImportColumns_2.SKU] || "SPARE",
              [ExportColumns_2.DESCRIPTION]: "",
              [ExportColumns_2.QUANTITY]: originalRow[ImportColumns_2.Quantity],
              [ExportColumns_2.PRICE_BEFORE_TAX]: `${this._stringToNumber(`${originalRow[ImportColumns_2.Item_Cost]}`)}`,
            });

          } else {
            // Regular flow
            modifiedFinalObj.push({
              [ExportColumns_2.TYPE]: "1",
              [ExportColumns_2.COSTUMER_NUM]: "100881",
              [ExportColumns_2.COSTUMER_NAME]: orderFullName,
              [ExportColumns_2.ORDER_DATE]: prettyDate,
              [ExportColumns_2.ORDER_NUM]: originalRow[ImportColumns_2.Order_ID],
              [ExportColumns_2.PRIORITY_STATUS]: "PCN DRAFT",
            });

            if (!finalProductsToPush[originalRow[ImportColumns_2.Order_ID]]) {
              finalProductsToPush[originalRow[ImportColumns_2.Order_ID]] = [];
            }

            finalProductsToPush[originalRow[ImportColumns_2.Order_ID]].push({
              [ExportColumns_2.TYPE]: "2",
              [ExportColumns_2.ID]: originalRow[ImportColumns_2.SKU] || "SPARE",
              [ExportColumns_2.DESCRIPTION]: "",
              [ExportColumns_2.QUANTITY]: originalRow[ImportColumns_2.Quantity],
              [ExportColumns_2.PRICE_BEFORE_TAX]: `${this._stringToNumber(`${originalRow[ImportColumns_2.Item_Cost]}`)}`,
            });

            if (originalRow[ImportColumns_2.Shipping_Name]?.includes("משלוח")) {
              // משלוח
              modifiedFinalObj.push({
                [ExportColumns_2.TYPE]: "2",
                [ExportColumns_2.ID]: "5",
                [ExportColumns_2.QUANTITY]: "1",
                [ExportColumns_2.PRICE_BEFORE_TAX]: "50.43",
              });
            } else {
              // איסוף
              modifiedFinalObj.push({
                [ExportColumns_2.TYPE]: "2",
                [ExportColumns_2.ID]: "6",
                [ExportColumns_2.QUANTITY]: "1",
              });
            }

            if (!!originalRow?.[ImportColumns_2.Rivihit_Invoice]) {
              // רווחית
              modifiedFinalObj.push({
                [ExportColumns_2.TYPE]: "2",
                [ExportColumns_2.ID]: "הערה",
                [ExportColumns_2.QUANTITY]: "1",
                [ExportColumns_2.DESCRIPTION]: `חשבונית מס קבלה ${originalRow?.[ImportColumns_2.Rivihit_Invoice]}`
              });
            } else {
              // אין רווחית
              modifiedFinalObj.push({
                [ExportColumns_2.TYPE]: "2",
                [ExportColumns_2.ID]: "הערה",
                [ExportColumns_2.QUANTITY]: "1",
                [ExportColumns_2.DESCRIPTION]: "אין תקבול להזמנה"
              });
            }

            if (!!originalRow?.[ImportColumns_2.Customer_Note]) {
              //  יש הערת לקוח
              modifiedFinalObj.push({
                [ExportColumns_2.TYPE]: "2",
                [ExportColumns_2.ID]: "הערה",
                [ExportColumns_2.QUANTITY]: "1",
                [ExportColumns_2.DESCRIPTION]: "יש הערת לקוח"
              });
            }

            const shippingFullName = `${originalRow?.[ImportColumns_2.Shipping_First_Name] ?? ""} ${originalRow?.[ImportColumns_2.Shipping_Last_Name] ?? ""} ${originalRow?.[ImportColumns_2.Shipping_Company] ?? ""}`.trim();

            // פרטים של הלקוח
            modifiedFinalObj.push({
              [ExportColumns_2.TYPE]: "3",
              [ExportColumns_2.COSTUMER_CONTACT]: shippingFullName || orderFullName,
              [ExportColumns_2.TELEPHONE_NUM]: originalRow[ImportColumns_2.Shipping_Phone] || originalRow[ImportColumns_2.Billing_Phone] || "",
              [ExportColumns_2.EMAIL]: originalRow[ImportColumns_2.Billing_Email_Address] || "",
              [ExportColumns_2.ADDRESS1]: originalRow[ImportColumns_2.Shipping_Address_1],
              [ExportColumns_2.ADDRESS2]: originalRow[ImportColumns_2.Shipping_Address_2],
              [ExportColumns_2.ADDRESS3]: "",
              [ExportColumns_2.CITY]: originalRow[ImportColumns_2.Shipping_City],
            });

            if (!!originalRow?.[ImportColumns_2.Customer_Note]) {
              modifiedFinalObj.push({
                [ExportColumns_2.TYPE]: "5",
                [ExportColumns_2.TEXT]: originalRow?.[ImportColumns_2.Customer_Note],
              });
            }

            // טקסט פנימי
            modifiedFinalObj.push({
              [ExportColumns_2.TYPE]: "5",
              [ExportColumns_2.TEXT]: "נקלט ע״י מחולל ממשקים",
            });

          }

          return modifiedFinalObj;
        }, []);

        const finalExcelWithProducts: any[] = [];

        finalExcelWithoutProducts.forEach((row: any, currentIdx: number) => {
          finalExcelWithProducts.push(row);
          if (row[ExportColumns_2.TYPE] === "1") {
            finalProductsToPush[row[ExportColumns_2.ORDER_NUM]].forEach((item: any) => {
              finalExcelWithProducts.push(item);
            })
          }
        });

        return finalExcelWithProducts;
      default:
        return [];
    }
  }

  downloadXLSX(rows: any[], name: Options) {
    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Data");

    XLSX.writeFile(wb, `${name}.xlsx`);
  }

  private _formatDate(date: Date): string {
    const padZero = (num: number) => num.toString().padStart(2, '0');

    const day = padZero(date.getDate());
    const month = padZero(date.getMonth() + 1); // Months are 0-based, so we add 1
    const year = date.getFullYear().toString().slice(-2); // Get the last two digits of the year

    return `${day}/${month}/${year}`;
  }

  private _stringToNumber(str: string): number {
    // Remove any commas from the string
    let validStr = "";
    if (typeof str === 'string') {
      validStr = str;
    }

    const cleanedString = validStr?.replace(/,/g, '');

    // Parse the cleaned string to a floating-point number
    const number = parseFloat(cleanedString);

    return number;
  }
}

