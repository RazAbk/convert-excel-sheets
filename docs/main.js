(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/razabekasis/Desktop/Projects/convert-excel-sheets/src/main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _columns_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./columns.enum */ "vQ8J");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xlsx */ "EUZL");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class AppComponent {
    constructor() {
        this.Options = _columns_enum__WEBPACK_IMPORTED_MODULE_0__["Options"];
    }
    ngOnInit() {
    }
    onUpload(event, option) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsBinaryString(file);
            reader.onload = (e) => {
                var _a;
                const data = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                const workbook = xlsx__WEBPACK_IMPORTED_MODULE_1__["read"](data, { type: 'binary' });
                const content = {
                    results: [],
                    columns: [],
                };
                workbook.SheetNames.forEach((sheetName) => {
                    const roa = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].sheet_to_json(workbook.Sheets[sheetName]);
                    const header = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].sheet_to_json(workbook.Sheets[sheetName], { header: 1 })[0];
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
    createXLSX(rawRows, option) {
        switch (option) {
            case _columns_enum__WEBPACK_IMPORTED_MODULE_0__["Options"].BF_ORDERS_EXPORT:
                return rawRows.reduce((modifiedFinalObj, originalRow) => {
                    switch (originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].PRODUCT_NAME]) {
                        case _columns_enum__WEBPACK_IMPORTED_MODULE_0__["RegularPC"].PC1:
                        case _columns_enum__WEBPACK_IMPORTED_MODULE_0__["RegularPC"].PC2:
                        case _columns_enum__WEBPACK_IMPORTED_MODULE_0__["RegularPC"].PC3:
                            // פרטים של ההזמנה
                            modifiedFinalObj.push({
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].TYPE]: "1",
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].COSTUMER_NUM]: "101162",
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].COSTUMER_NAME]: `${originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].COSTUMER_NAME]} ${originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].COSTUMER_LAST_NAME]}`,
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].ORDER_DATE]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].ORDER_DATE],
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].ORDER_NUM]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].ORDER_NUM],
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].DETAILS]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].SHIPMENT_TYPE],
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].PRIORITY_STATUS]: "",
                            });
                            // פרטים של המוצר
                            modifiedFinalObj.push({
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].TYPE]: "2",
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].ID]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].PRODUCT_NAME],
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].DESCRIPTION]: "",
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].QUANTITY]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].QUANTITY],
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].PRICE_BEFORE_TAX]: `${(+originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].PRICE_INC_TAX] / 1.17 / +originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].QUANTITY]).toFixed(2)}`,
                            });
                            // מסך
                            modifiedFinalObj.push({
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].TYPE]: "2",
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].ID]: "2BF-24MONITOR",
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].QUANTITY]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].QUANTITY],
                            });
                            // משלוח
                            modifiedFinalObj.push({
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].TYPE]: "2",
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].ID]: "5",
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].QUANTITY]: "1",
                            });
                            // פרטים של הלקוח
                            modifiedFinalObj.push({
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].TYPE]: "3",
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].COSTUMER_CONTACT]: `${originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].COSTUMER_NAME]} ${originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].COSTUMER_LAST_NAME]}`,
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].TELEPHONE_NUM]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].COSTUMER_TELEPHONE],
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].EMAIL]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].EMAIL],
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].ADDRESS1]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].ADDRESS],
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].ADDRESS2]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].TEXT_SHIPMENT],
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].ADDRESS3]: `${originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].COSTUMER_TELEPHONE]}`.includes(`${originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].TELEPHONE_SHIPPING]}`) ? "" : originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].TELEPHONE_SHIPPING],
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].CITY]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].CITY],
                            });
                            // טקסט להזמנה
                            modifiedFinalObj.push({
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].TYPE]: "4",
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].TEXT]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].TEXT_SHIPMENT],
                            });
                            break;
                        case _columns_enum__WEBPACK_IMPORTED_MODULE_0__["LaptopPC"].LAPTOP1:
                        case _columns_enum__WEBPACK_IMPORTED_MODULE_0__["LaptopPC"].LAPTOP2:
                            // פרטים של ההזמנה
                            modifiedFinalObj.push({
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].TYPE]: "1",
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].COSTUMER_NUM]: "101162",
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].COSTUMER_NAME]: `${originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].COSTUMER_NAME]} ${originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].COSTUMER_LAST_NAME]}`,
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].ORDER_DATE]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].ORDER_DATE],
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].ORDER_NUM]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].ORDER_NUM],
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].DETAILS]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].SHIPMENT_TYPE],
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].PRIORITY_STATUS]: "",
                            });
                            // פרטים של המוצר
                            modifiedFinalObj.push({
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].TYPE]: "2",
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].ID]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].PRODUCT_NAME],
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].DESCRIPTION]: "",
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].QUANTITY]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].QUANTITY],
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].PRICE_BEFORE_TAX]: `${(+originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].PRICE_INC_TAX] / 1.17 / +originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].QUANTITY]).toFixed(2)}`,
                            });
                            // משלוח
                            modifiedFinalObj.push({
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].TYPE]: "2",
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].ID]: "5",
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].QUANTITY]: "1",
                            });
                            // פרטים של הלקוח
                            modifiedFinalObj.push({
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].TYPE]: "3",
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].COSTUMER_CONTACT]: `${originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].COSTUMER_NAME]} ${originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].COSTUMER_LAST_NAME]}`,
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].TELEPHONE_NUM]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].COSTUMER_TELEPHONE],
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].EMAIL]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].EMAIL],
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].ADDRESS1]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].ADDRESS],
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].ADDRESS2]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].TEXT_SHIPMENT],
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].ADDRESS3]: `${originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].COSTUMER_TELEPHONE]}`.includes(`${originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].TELEPHONE_SHIPPING]}`) ? "" : originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].TELEPHONE_SHIPPING],
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].CITY]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].CITY],
                            });
                            // טקסט להזמנה
                            modifiedFinalObj.push({
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].TYPE]: "4",
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].TEXT]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_1"].TEXT_SHIPMENT],
                            });
                            break;
                    }
                    return modifiedFinalObj;
                }, []);
            case _columns_enum__WEBPACK_IMPORTED_MODULE_0__["Options"].PCN_ORDERS_EXPORT:
                const filteredByStatusRawRows = [...rawRows].filter((row) => {
                    // Proceed only for these 3 order status types
                    if (["wc-shippedil", "wc-processing", "wc-packabroad"].includes(row[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_2"].Order_Status])) {
                        return true;
                    }
                    else {
                        // If another OrderID has a 'good' status, keep the row inside the filtered results
                        if ([...rawRows].some((anotherRow) => (anotherRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_2"].Order_ID] === row[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_2"].Order_ID] && ["wc-shippedil", "wc-processing", "wc-packabroad"].includes(anotherRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_2"].Order_Status])))) {
                            return true;
                        }
                        return false;
                    }
                });
                const finalProductsToPush = {};
                const finalExcelWithoutProducts = filteredByStatusRawRows.reduce((modifiedFinalObj, originalRow) => {
                    var _a, _b, _c, _d, _e, _f, _g;
                    const orderDate = new Date(originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_2"].Order_Date]);
                    const prettyDate = this._formatDate(orderDate);
                    const startOrderIdx = modifiedFinalObj.findIndex((finalRow) => finalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].ORDER_NUM] === originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_2"].Order_ID]);
                    const orderFullName = `${(_a = originalRow === null || originalRow === void 0 ? void 0 : originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_2"].Billing_First_Name]) !== null && _a !== void 0 ? _a : ""} ${(_b = originalRow === null || originalRow === void 0 ? void 0 : originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_2"].Billing_Last_Name]) !== null && _b !== void 0 ? _b : ""} ${(_c = originalRow === null || originalRow === void 0 ? void 0 : originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_2"].Billing_Company]) !== null && _c !== void 0 ? _c : ""}`.trim();
                    if (startOrderIdx !== -1) {
                        // Order_Id already exists, just add new products to the order, [ExportColumns_2.TYPE]: "2",
                        if (!finalProductsToPush[originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_2"].Order_ID]]) {
                            finalProductsToPush[originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_2"].Order_ID]] = [];
                        }
                        finalProductsToPush[originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_2"].Order_ID]].push({
                            [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].TYPE]: "2",
                            [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].ID]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_2"].SKU] || "SPARE",
                            [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].DESCRIPTION]: "",
                            [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].QUANTITY]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_2"].Quantity],
                            [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].PRICE_BEFORE_TAX]: `${this._stringToNumber(`${originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_2"].Item_Cost]}`)}`,
                        });
                    }
                    else {
                        // Regular flow
                        modifiedFinalObj.push({
                            [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].TYPE]: "1",
                            [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].COSTUMER_NUM]: "100881",
                            [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].COSTUMER_NAME]: orderFullName,
                            [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].ORDER_DATE]: prettyDate,
                            [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].ORDER_NUM]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_2"].Order_ID],
                            [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].PRIORITY_STATUS]: "PCN DRAFT",
                        });
                        if (!finalProductsToPush[originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_2"].Order_ID]]) {
                            finalProductsToPush[originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_2"].Order_ID]] = [];
                        }
                        finalProductsToPush[originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_2"].Order_ID]].push({
                            [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].TYPE]: "2",
                            [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].ID]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_2"].SKU] || "SPARE",
                            [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].DESCRIPTION]: "",
                            [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].QUANTITY]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_2"].Quantity],
                            [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].PRICE_BEFORE_TAX]: `${this._stringToNumber(`${originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_2"].Item_Cost]}`)}`,
                        });
                        if ((_d = originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_2"].Shipping_Name]) === null || _d === void 0 ? void 0 : _d.includes("משלוח")) {
                            // משלוח
                            modifiedFinalObj.push({
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].TYPE]: "2",
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].ID]: "5",
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].QUANTITY]: "1",
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].PRICE_BEFORE_TAX]: "50.43",
                            });
                        }
                        else {
                            // איסוף
                            modifiedFinalObj.push({
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].TYPE]: "2",
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].ID]: "6",
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].QUANTITY]: "1",
                            });
                        }
                        if (!!(originalRow === null || originalRow === void 0 ? void 0 : originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_2"].Rivihit_Invoice])) {
                            // רווחית
                            modifiedFinalObj.push({
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].TYPE]: "2",
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].ID]: "הערה",
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].QUANTITY]: "1",
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].DESCRIPTION]: `חשבונית מס קבלה ${originalRow === null || originalRow === void 0 ? void 0 : originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_2"].Rivihit_Invoice]}`
                            });
                        }
                        else {
                            // אין רווחית
                            modifiedFinalObj.push({
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].TYPE]: "2",
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].ID]: "הערה",
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].QUANTITY]: "1",
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].DESCRIPTION]: "אין תקבול להזמנה"
                            });
                        }
                        if (!!(originalRow === null || originalRow === void 0 ? void 0 : originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_2"].Customer_Note])) {
                            //  יש הערת לקוח
                            modifiedFinalObj.push({
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].TYPE]: "2",
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].ID]: "הערה",
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].QUANTITY]: "1",
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].DESCRIPTION]: "יש הערת לקוח"
                            });
                        }
                        const shippingFullName = `${(_e = originalRow === null || originalRow === void 0 ? void 0 : originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_2"].Shipping_First_Name]) !== null && _e !== void 0 ? _e : ""} ${(_f = originalRow === null || originalRow === void 0 ? void 0 : originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_2"].Shipping_Last_Name]) !== null && _f !== void 0 ? _f : ""} ${(_g = originalRow === null || originalRow === void 0 ? void 0 : originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_2"].Shipping_Company]) !== null && _g !== void 0 ? _g : ""}`.trim();
                        // פרטים של הלקוח
                        modifiedFinalObj.push({
                            [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].TYPE]: "3",
                            [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].COSTUMER_CONTACT]: shippingFullName || orderFullName,
                            [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].TELEPHONE_NUM]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_2"].Shipping_Phone] || originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_2"].Billing_Phone] || "",
                            [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].EMAIL]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_2"].Billing_Email_Address] || "",
                            [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].ADDRESS1]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_2"].Shipping_Address_1],
                            [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].ADDRESS2]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_2"].Shipping_Address_2],
                            [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].ADDRESS3]: "",
                            [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].CITY]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_2"].Shipping_City],
                        });
                        if (!!(originalRow === null || originalRow === void 0 ? void 0 : originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_2"].Customer_Note])) {
                            modifiedFinalObj.push({
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].TYPE]: "5",
                                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].TEXT]: originalRow === null || originalRow === void 0 ? void 0 : originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns_2"].Customer_Note],
                            });
                        }
                        // טקסט פנימי
                        modifiedFinalObj.push({
                            [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].TYPE]: "5",
                            [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].TEXT]: "נקלט ע״י מחולל ממשקים",
                        });
                    }
                    return modifiedFinalObj;
                }, []);
                const finalExcelWithProducts = [];
                finalExcelWithoutProducts.forEach((row, currentIdx) => {
                    finalExcelWithProducts.push(row);
                    if (row[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].TYPE] === "1") {
                        finalProductsToPush[row[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns_2"].ORDER_NUM]].forEach((item) => {
                            finalExcelWithProducts.push(item);
                        });
                    }
                });
                return finalExcelWithProducts;
            default:
                return [];
        }
    }
    downloadXLSX(rows, name) {
        const ws = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].json_to_sheet(rows);
        const wb = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].book_append_sheet(wb, ws, "Data");
        xlsx__WEBPACK_IMPORTED_MODULE_1__["writeFile"](wb, `${name}.xlsx`);
    }
    _formatDate(date) {
        const padZero = (num) => num.toString().padStart(2, '0');
        const day = padZero(date.getDate());
        const month = padZero(date.getMonth() + 1); // Months are 0-based, so we add 1
        const year = date.getFullYear().toString().slice(-2); // Get the last two digits of the year
        return `${day}/${month}/${year}`;
    }
    _stringToNumber(str) {
        // Remove any commas from the string
        let validStr = "";
        if (typeof str === 'string') {
            validStr = str;
        }
        const cleanedString = validStr === null || validStr === void 0 ? void 0 : validStr.replace(/,/g, '');
        // Parse the cleaned string to a floating-point number
        const number = parseFloat(cleanedString);
        return number;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 0, consts: [[1, "main-container"], ["type", "file", "accept", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel", 3, "change"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Convert Excel files:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "2B Friendly:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AppComponent_Template_input_change_5_listener($event) { return ctx.onUpload($event, ctx.Options.BF_ORDERS_EXPORT); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "PC NASDAQ:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AppComponent_Template_input_change_8_listener($event) { return ctx.onUpload($event, ctx.Options.PCN_ORDERS_EXPORT); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, styles: [".main-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDIwcHg7XG5cbiAgICBcbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "vQ8J":
/*!*********************************!*\
  !*** ./src/app/columns.enum.ts ***!
  \*********************************/
/*! exports provided: Options, ImportColumns_1, ExportColumns_2, ImportColumns_2, RegularPC, LaptopPC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Options", function() { return Options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportColumns_1", function() { return ImportColumns_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportColumns_2", function() { return ExportColumns_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportColumns_2", function() { return ImportColumns_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularPC", function() { return RegularPC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaptopPC", function() { return LaptopPC; });
var Options;
(function (Options) {
    Options["BF_ORDERS_EXPORT"] = "2BF_ORDERS_EXPORT";
    Options["PCN_ORDERS_EXPORT"] = "PCN_ORDERS_EXPORT";
})(Options || (Options = {}));
var ImportColumns_1;
(function (ImportColumns_1) {
    ImportColumns_1["ORDER_NUM"] = "\u05DE\u05E1\u05E4\u05E8 \u05D4\u05D6\u05DE\u05E0\u05D4";
    ImportColumns_1["ORDER_DATE"] = "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D4\u05D6\u05DE\u05E0\u05D4";
    ImportColumns_1["ORDER_STATUS"] = "\u05E1\u05D8\u05D8\u05D5\u05E1 \u05D4\u05D6\u05DE\u05E0\u05D4";
    ImportColumns_1["COSTUMER_NAME"] = "\u05D4\u05E9\u05DD \u05D4\u05E4\u05E8\u05D8\u05D9 \u05E9\u05DC \u05D4\u05DC\u05E7\u05D5\u05D7";
    ImportColumns_1["COSTUMER_LAST_NAME"] = "\u05E9\u05DD \u05D4\u05DE\u05E9\u05E4\u05D7\u05D4 \u05E9\u05DC \u05D4\u05DC\u05E7\u05D5\u05D7";
    ImportColumns_1["COSTUMER_TELEPHONE"] = "\u05D8\u05DC\u05E4\u05D5\u05DF \u05D4\u05DC\u05E7\u05D5\u05D7";
    ImportColumns_1["EMAIL"] = "\u05DE\u05D9\u05D9\u05DC";
    ImportColumns_1["PRODUCT_NAME"] = "\u05E9\u05DD \u05D4\u05DE\u05D5\u05E6\u05E8";
    ImportColumns_1["QUANTITY"] = "\u05DB\u05DE\u05D5\u05EA";
    ImportColumns_1["PRICE_INC_TAX"] = "\u05E1\u05D4\u05F4\u05DB \u05DB\u05D5\u05DC\u05DC \u05DE\u05E2\u05F4\u05DE";
    ImportColumns_1["CURRENCY"] = "\u05DE\u05D8\u05D1\u05E2";
    ImportColumns_1["SHIPMENT_TYPE"] = "\u05D0\u05D5\u05E4\u05DF \u05D4\u05DE\u05E9\u05DC\u05D5\u05D7";
    ImportColumns_1["ADDRESS"] = "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05DE\u05E9\u05DC\u05D5\u05D7";
    ImportColumns_1["CITY"] = "\u05E2\u05D9\u05E8";
    ImportColumns_1["TELEPHONE_SHIPPING"] = "\u05D8\u05DC\u05E4\u05D5\u05DF \u05D4\u05DE\u05E9\u05DC\u05D5\u05D7";
    ImportColumns_1["TEXT_ORDER"] = "\u05D4\u05E2\u05E8\u05D4 \u05DC\u05D4\u05D6\u05DE\u05E0\u05D4";
    ImportColumns_1["TEXT_SHIPMENT"] = "\u05D4\u05E2\u05E8\u05D4 \u05DC\u05DE\u05E9\u05DC\u05D5\u05D7";
    ImportColumns_1["INTERNAL_COMMENT"] = "\u05D4\u05E2\u05E8\u05D4 \u05E4\u05E0\u05D9\u05DE\u05D9\u05EA";
})(ImportColumns_1 || (ImportColumns_1 = {}));
var ExportColumns_2;
(function (ExportColumns_2) {
    ExportColumns_2["TYPE"] = "\u05E8\u05E9\u05D5\u05DE\u05D4";
    ExportColumns_2["COSTUMER_NUM"] = "\u05DE\u05E1.\u05DC\u05E7\u05D5\u05D7";
    ExportColumns_2["COSTUMER_NAME"] = "\u05E9\u05DD \u05DC\u05E7\u05D5\u05D7";
    ExportColumns_2["ORDER_DATE"] = "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D4\u05D6\u05DE\u05E0\u05D4";
    ExportColumns_2["ORDER_NUM"] = "\u05DE\u05E1.\u05D4\u05D6\u05DE\u05E0\u05D4";
    ExportColumns_2["DETAILS"] = "\u05E4\u05E8\u05D8\u05D9\u05DD";
    ExportColumns_2["ID"] = "\u05DE\u05E7\u05D8";
    ExportColumns_2["DESCRIPTION"] = "\u05EA\u05D9\u05D0\u05D5\u05E8";
    ExportColumns_2["QUANTITY"] = "\u05DB\u05DE\u05D5\u05EA";
    ExportColumns_2["PRICE_BEFORE_TAX"] = "\u05DE\u05D7\u05D9\u05E8 \u05DC\u05E4\u05E0\u05D9 \u05DE\u05E2\u05DE";
    ExportColumns_2["COSTUMER_CONTACT"] = "\u05D0\u05D9\u05E9 \u05E7\u05E9\u05E8";
    ExportColumns_2["TELEPHONE_NUM"] = "\u05D8\u05DC\u05E4\u05D5\u05DF";
    ExportColumns_2["EMAIL"] = "\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC";
    ExportColumns_2["ADDRESS1"] = "\u05DB\u05EA\u05D5\u05D1\u05EA 1";
    ExportColumns_2["ADDRESS2"] = "\u05DB\u05EA\u05D5\u05D1\u05EA 2";
    ExportColumns_2["ADDRESS3"] = "\u05DB\u05EA\u05D5\u05D1\u05EA 3";
    ExportColumns_2["CITY"] = "\u05E2\u05D9\u05E8";
    ExportColumns_2["TEXT"] = "\u05D8\u05E7\u05E1\u05D8 \u05DC\u05D4\u05D6\u05DE\u05E0\u05D4";
    ExportColumns_2["PRIORITY_STATUS"] = "\u05E1\u05D8\u05D8\u05D5\u05E1 \u05E4\u05E8\u05D9\u05D5\u05E8\u05D9\u05D8\u05D9";
})(ExportColumns_2 || (ExportColumns_2 = {}));
var ImportColumns_2;
(function (ImportColumns_2) {
    ImportColumns_2["Order_ID"] = "Order ID";
    ImportColumns_2["Order_Date"] = "Order Date";
    ImportColumns_2["Order_Status"] = "Order Status";
    ImportColumns_2["SKU"] = "SKU";
    ImportColumns_2["Quantity"] = "Quantity";
    ImportColumns_2["Item_Cost"] = "Item Cost";
    ImportColumns_2["Billing_First_Name"] = "Billing First Name";
    ImportColumns_2["Billing_Last_Name"] = "Billing Last Name";
    ImportColumns_2["Billing_Company"] = "Billing Company";
    ImportColumns_2["Billing_Email_Address"] = "Billing Email Address";
    ImportColumns_2["Billing_Phone"] = "Billing Phone";
    ImportColumns_2["Shipping_First_Name"] = "Shipping First Name";
    ImportColumns_2["Shipping_Last_Name"] = "Shipping Last Name";
    ImportColumns_2["Shipping_Company"] = "Shipping Company";
    ImportColumns_2["Shipping_Address_1"] = "Shipping Address 1";
    ImportColumns_2["Shipping_Address_2"] = "Shipping Address 2";
    ImportColumns_2["Shipping_City"] = "Shipping City";
    ImportColumns_2["Shipping_Postcode"] = "Shipping Postcode";
    ImportColumns_2["Shipping_Phone"] = "Shipping Phone";
    ImportColumns_2["Customer_Note"] = "Customer Note";
    ImportColumns_2["Rivihit_Invoice"] = "Rivihit Invoice";
    ImportColumns_2["Shipping_Name"] = "Shipping Name";
})(ImportColumns_2 || (ImportColumns_2 = {}));
var RegularPC;
(function (RegularPC) {
    RegularPC["PC1"] = "2BF-M92I58GB-KIT";
    RegularPC["PC2"] = "2BF-M92I34GB-KIT";
    RegularPC["PC3"] = "2BF-M92I38GB-KIT";
})(RegularPC || (RegularPC = {}));
var LaptopPC;
(function (LaptopPC) {
    LaptopPC["LAPTOP1"] = "2BF-HP640G3I5-7TH8240";
    LaptopPC["LAPTOP2"] = "2BF-HP640G3I5-6TH8240";
})(LaptopPC || (LaptopPC = {}));


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map