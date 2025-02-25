"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_base-ui_ui-spinner_ui-spinner_module_ts"],{

/***/ 64331:
/*!********************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-spinner/ui-spinner-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiSpinnerRoutingModule: () => (/* binding */ UiSpinnerRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ui_spinner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-spinner.component */ 77931);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _ui_spinner_component__WEBPACK_IMPORTED_MODULE_0__.UiSpinnerComponent
}];
class UiSpinnerRoutingModule {
  static {
    this.ɵfac = function UiSpinnerRoutingModule_Factory(t) {
      return new (t || UiSpinnerRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: UiSpinnerRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UiSpinnerRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 77931:
/*!***************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-spinner/ui-spinner.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiSpinnerComponent: () => (/* binding */ UiSpinnerComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class UiSpinnerComponent {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  static {
    this.ɵfac = function UiSpinnerComponent_Factory(t) {
      return new (t || UiSpinnerComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UiSpinnerComponent,
      selectors: [["app-ui-spinner"]],
      decls: 197,
      vars: 0,
      consts: [[1, "page-header"], [1, "row"], [1, "col-sm-12"], [1, "page-title"], [1, "col-md-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["role", "status", 1, "spinner-border"], [1, "sr-only"], ["role", "status", 1, "spinner-border", "text-primary", "me-1"], ["role", "status", 1, "spinner-border", "text-secondary", "me-1"], ["role", "status", 1, "spinner-border", "text-success", "me-1"], ["role", "status", 1, "spinner-border", "text-danger", "me-1"], ["role", "status", 1, "spinner-border", "text-warning", "me-1"], ["role", "status", 1, "spinner-border", "text-info", "me-1"], ["role", "status", 1, "spinner-border", "text-light", "me-1"], ["role", "status", 1, "spinner-border", "text-dark"], ["role", "status", 1, "spinner-grow"], ["role", "status", 1, "spinner-grow", "text-primary", "me-1"], ["role", "status", 1, "spinner-grow", "text-secondary", "me-1"], ["role", "status", 1, "spinner-grow", "text-success", "me-1"], ["role", "status", 1, "spinner-grow", "text-danger", "me-1"], ["role", "status", 1, "spinner-grow", "text-warning", "me-1"], ["role", "status", 1, "spinner-grow", "text-info", "me-1"], ["role", "status", 1, "spinner-grow", "text-light", "me-1"], ["role", "status", 1, "spinner-grow", "text-dark"], [1, "d-flex", "justify-content-center", "mb-4"], [1, "visually-hidden"], [1, "d-flex", "align-items-center", "justify-content-between"], ["role", "status", "aria-hidden", "true", 1, "spinner-border"], [1, "clearfix"], ["role", "status", 1, "spinner-border", "float-end", "mb-4"], ["role", "status", 1, "spinner-border", "float-start"], [1, "text-center"], ["role", "status", 1, "spinner-border", "m-5"], [1, "col-md-12"], ["role", "status", 1, "spinner-border", "spinner-border-sm"], ["role", "status", 1, "spinner-grow", "spinner-grow-sm", "mr-3"], ["role", "status", 1, "spinner-grow", "mr-3"], ["role", "status", 1, "spinner-border", "spinner-border-lg"], ["role", "status", 1, "spinner-grow", "spinner-grow-lg"], [1, "btn-list"], ["type", "button", "disabled", "", 1, "btn", "btn-primary-light"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "align-middle"], ["role", "status", "aria-hidden", "true", 1, "spinner-grow", "spinner-grow-sm", "align-middle"], ["type", "button", "disabled", "", 1, "btn", "btn-secondary-light"], ["type", "button", "disabled", "", 1, "btn", "btn-success-light"], ["type", "button", "disabled", "", 1, "btn", "btn-info-light"], ["type", "button", "disabled", "", 1, "btn", "btn-warning-light"], ["type", "button", "disabled", "", 1, "btn", "btn-danger-light"], ["type", "button", "disabled", "", 1, "btn", "btn-light"], ["type", "button", "disabled", "", 1, "btn", "btn-dark", "text-fixed-white"]],
      template: function UiSpinnerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Spinner");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "h5", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Border Spinner");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Loading...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 4)(16, "div", 5)(17, "div", 6)(18, "h5", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Colored Spinner");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 8)(21, "div", 11)(22, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Loading...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 12)(25, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Loading...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 13)(28, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Loading...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 14)(31, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Loading...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 15)(34, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Loading...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 16)(37, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Loading...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 17)(40, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Loading...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 18)(43, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Loading...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 4)(46, "div", 5)(47, "div", 6)(48, "h5", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Grow Spinner");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 8)(51, "div", 19)(52, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Loading...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 4)(55, "div", 5)(56, "div", 6)(57, "h5", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Colored Grow Spinner");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 8)(60, "div", 20)(61, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Loading...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 21)(64, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Loading...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 22)(67, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Loading...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 23)(70, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Loading...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 24)(73, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Loading...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 25)(76, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Loading...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 26)(79, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Loading...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 27)(82, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Loading...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 4)(85, "div", 5)(86, "div", 6)(87, "h5", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Flex Alignment");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 8)(90, "div", 28)(91, "div", 9)(92, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Loading...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 30)(95, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Loading...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 4)(99, "div", 5)(100, "div", 6)(101, "h5", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Float Alignment");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 8)(104, "div", 32)(105, "div", 33)(106, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Loading...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 32)(109, "div", 34)(110, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Loading...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 4)(113, "div", 5)(114, "div", 6)(115, "h5", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Alignment Text center");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 8)(118, "div", 35)(119, "div", 9)(120, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Loading...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 4)(123, "div", 5)(124, "div", 6)(125, "h5", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Alignment Margin");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 8)(128, "div", 36)(129, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Loading...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 37)(132, "div", 5)(133, "div", 6)(134, "h5", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "Different Sizes");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 8)(137, "div", 38)(138, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "Loading...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 39)(141, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "Loading...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 9)(144, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "Loading...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 40)(147, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "Loading...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 41)(150, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "Loading...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div", 42)(153, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "Loading...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 37)(156, "div", 5)(157, "div", 6)(158, "h5", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "Buttons");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 8)(161, "div", 43)(162, "button", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](163, "span", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "Loading...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "button", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](167, "span", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, " Loading... ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "button", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](170, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "Loading...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "button", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](174, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, " Loading... ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "button", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](177, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, " Loading... ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "button", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](180, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, " Loading... ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "button", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](183, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, " Loading... ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "button", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](186, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, " Loading... ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "button", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](189, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, " Loading... ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "button", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](192, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, " Loading... ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "button", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](195, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, " Loading... ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 21898:
/*!************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-spinner/ui-spinner.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiSpinnerModule: () => (/* binding */ UiSpinnerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ui_spinner_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-spinner-routing.module */ 64331);
/* harmony import */ var _ui_spinner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-spinner.component */ 77931);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);




class UiSpinnerModule {
  static {
    this.ɵfac = function UiSpinnerModule_Factory(t) {
      return new (t || UiSpinnerModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: UiSpinnerModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_spinner_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiSpinnerRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UiSpinnerModule, {
    declarations: [_ui_spinner_component__WEBPACK_IMPORTED_MODULE_1__.UiSpinnerComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_spinner_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiSpinnerRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_base-ui_ui-spinner_ui-spinner_module_ts.js.map