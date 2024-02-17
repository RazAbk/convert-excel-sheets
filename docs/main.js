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
    constructor() { }
    ngOnInit() {
    }
    onUpload(event) {
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
                console.log('%c content:', 'background: #015fcb; color: #fff; font-size: 14px; padding: 5px 5px 5px 0; border: 1px dashed ##fff; border-radius: 5px;', '\n', content);
                const rowsToDownload = this.createXLSX(content.results);
                console.log('%c rowsToDownload:', 'background: #ff0000; color: #fff; font-size: 14px; padding: 5px 5px 5px 0; border: 1px dashed #fff; border-radius: 5px;', '\n', rowsToDownload);
                this.downloadXLSX(rowsToDownload);
            };
        }
    }
    createXLSX(rawRows) {
        return rawRows.reduce((modifiedFinalObj, originalRow) => {
            // פרטים של ההזמנה
            modifiedFinalObj.push({
                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns"].TYPE]: "1",
                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns"].COSTUMER_NUM]: "101162",
                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns"].COSTUMER_NAME]: `${originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns"].COSTUMER_NAME]} ${originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns"].COSTUMER_LAST_NAME]}`,
                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns"].ORDER_DATE]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns"].ORDER_DATE],
                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns"].ORDER_NUM]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns"].ORDER_NUM],
                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns"].DETAILS]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns"].SHIPMENT_TYPE],
            });
            // פרטים של המוצר
            modifiedFinalObj.push({
                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns"].TYPE]: "2",
                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns"].ID]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns"].PRODUCT_NAME],
                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns"].DESCRIPTION]: "",
                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns"].QUANTITY]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns"].QUANTITY],
                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns"].PRICE_BEFORE_TAX]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns"].PRIVE_INC_TAX],
            });
            // משלוח
            modifiedFinalObj.push({
                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns"].TYPE]: "2",
                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns"].ID]: "5",
                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns"].QUANTITY]: "1",
            });
            // פרטים של הלקוח
            modifiedFinalObj.push({
                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns"].TYPE]: "3",
                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns"].COSTUMER_CONTACT]: `${originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns"].COSTUMER_NAME]} ${originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns"].COSTUMER_LAST_NAME]}`,
                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns"].TELEPHONE_NUM]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns"].COSTUMER_TELEPHONE],
                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns"].EMAIL]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns"].EMAIL],
                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns"].ADDRESS1]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns"].ADDRESS],
                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns"].ADDRESS2]: "",
                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns"].ADDRESS3]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns"].TELEPHONE_SHIPPING],
                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns"].CITY]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns"].CITY],
            });
            // טקסט להזמנה
            modifiedFinalObj.push({
                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns"].TYPE]: "4",
                [_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ExportColumns"].TEXT]: originalRow[_columns_enum__WEBPACK_IMPORTED_MODULE_0__["ImportColumns"].TEXT_SHIPMENT],
            });
            return modifiedFinalObj;
        }, []);
    }
    downloadXLSX(rows) {
        const ws = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].json_to_sheet(rows);
        const wb = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].book_append_sheet(wb, ws, "Data");
        xlsx__WEBPACK_IMPORTED_MODULE_1__["writeFile"](wb, "asdf.xlsx");
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [["type", "file", "accept", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel", 3, "change"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Upload excel file:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AppComponent_Template_input_change_3_listener($event) { return ctx.onUpload($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


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
/*! exports provided: ImportColumns, ExportColumns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportColumns", function() { return ImportColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportColumns", function() { return ExportColumns; });
var ImportColumns;
(function (ImportColumns) {
    ImportColumns["ORDER_NUM"] = "\u05DE\u05E1\u05E4\u05E8 \u05D4\u05D6\u05DE\u05E0\u05D4";
    ImportColumns["ORDER_DATE"] = "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D4\u05D6\u05DE\u05E0\u05D4";
    ImportColumns["ORDER_STATUS"] = "\u05E1\u05D8\u05D8\u05D5\u05E1 \u05D4\u05D6\u05DE\u05E0\u05D4";
    ImportColumns["COSTUMER_NAME"] = "\u05D4\u05E9\u05DD \u05D4\u05E4\u05E8\u05D8\u05D9 \u05E9\u05DC \u05D4\u05DC\u05E7\u05D5\u05D7";
    ImportColumns["COSTUMER_LAST_NAME"] = "\u05E9\u05DD \u05D4\u05DE\u05E9\u05E4\u05D7\u05D4 \u05E9\u05DC \u05D4\u05DC\u05E7\u05D5\u05D7";
    ImportColumns["COSTUMER_TELEPHONE"] = "\u05D8\u05DC\u05E4\u05D5\u05DF \u05D4\u05DC\u05E7\u05D5\u05D7";
    ImportColumns["EMAIL"] = "\u05DE\u05D9\u05D9\u05DC";
    ImportColumns["PRODUCT_NAME"] = "\u05E9\u05DD \u05D4\u05DE\u05D5\u05E6\u05E8";
    ImportColumns["QUANTITY"] = "\u05DB\u05DE\u05D5\u05EA";
    ImportColumns["PRIVE_INC_TAX"] = "\u05E1\u05D4\u05F4\u05DB \u05DB\u05D5\u05DC\u05DC \u05DE\u05E2\u05F4\u05DE";
    ImportColumns["CURRENCY"] = "\u05DE\u05D8\u05D1\u05E2";
    ImportColumns["SHIPMENT_TYPE"] = "\u05D0\u05D5\u05E4\u05DF \u05D4\u05DE\u05E9\u05DC\u05D5\u05D7";
    ImportColumns["ADDRESS"] = "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05DE\u05E9\u05DC\u05D5\u05D7";
    ImportColumns["CITY"] = "\u05E2\u05D9\u05E8";
    ImportColumns["TELEPHONE_SHIPPING"] = "\u05D8\u05DC\u05E4\u05D5\u05DF \u05D4\u05DE\u05E9\u05DC\u05D5\u05D7";
    ImportColumns["TEXT_ORDER"] = "\u05D4\u05E2\u05E8\u05D4 \u05DC\u05D4\u05D6\u05DE\u05E0\u05D4";
    ImportColumns["TEXT_SHIPMENT"] = "\u05D4\u05E2\u05E8\u05D4 \u05DC\u05DE\u05E9\u05DC\u05D5\u05D7";
    ImportColumns["INTERNAL_COMMENT"] = "\u05D4\u05E2\u05E8\u05D4 \u05E4\u05E0\u05D9\u05DE\u05D9\u05EA";
})(ImportColumns || (ImportColumns = {}));
var ExportColumns;
(function (ExportColumns) {
    ExportColumns["TYPE"] = "\u05E8\u05E9\u05D5\u05DE\u05D4";
    ExportColumns["COSTUMER_NUM"] = "\u05DE\u05E1.\u05DC\u05E7\u05D5\u05D7";
    ExportColumns["COSTUMER_NAME"] = "\u05E9\u05DD \u05DC\u05E7\u05D5\u05D7";
    ExportColumns["ORDER_DATE"] = "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D4\u05D6\u05DE\u05E0\u05D4";
    ExportColumns["ORDER_NUM"] = "\u05DE\u05E1.\u05D4\u05D6\u05DE\u05E0\u05D4";
    ExportColumns["DETAILS"] = "\u05E4\u05E8\u05D8\u05D9\u05DD";
    ExportColumns["ID"] = "\u05DE\u05E7\u05D8";
    ExportColumns["DESCRIPTION"] = "\u05EA\u05D9\u05D0\u05D5\u05E8";
    ExportColumns["QUANTITY"] = "\u05DB\u05DE\u05D5\u05EA";
    ExportColumns["PRICE_BEFORE_TAX"] = "\u05DE\u05D7\u05D9\u05E8 \u05DC\u05E4\u05E0\u05D9 \u05DE\u05E2\u05DE";
    ExportColumns["COSTUMER_CONTACT"] = "\u05D0\u05D9\u05E9 \u05E7\u05E9\u05E8";
    ExportColumns["TELEPHONE_NUM"] = "\u05D8\u05DC\u05E4\u05D5\u05DF";
    ExportColumns["EMAIL"] = "\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC";
    ExportColumns["ADDRESS1"] = "\u05DB\u05EA\u05D5\u05D1\u05EA 1";
    ExportColumns["ADDRESS2"] = "\u05DB\u05EA\u05D5\u05D1\u05EA 2";
    ExportColumns["ADDRESS3"] = "\u05DB\u05EA\u05D5\u05D1\u05EA 3";
    ExportColumns["CITY"] = "\u05E2\u05D9\u05E8";
    ExportColumns["TEXT"] = "\u05D8\u05E7\u05E1\u05D8 \u05DC\u05D4\u05D6\u05DE\u05E0\u05D4";
})(ExportColumns || (ExportColumns = {}));


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