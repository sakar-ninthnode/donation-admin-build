"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_base-ui_ui-buttons_ui-buttons_module_ts"],{

/***/ 73987:
/*!********************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-buttons/ui-buttons-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiButtonsRoutingModule: () => (/* binding */ UiButtonsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ui_buttons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-buttons.component */ 64659);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _ui_buttons_component__WEBPACK_IMPORTED_MODULE_0__.UiButtonsComponent
}];
class UiButtonsRoutingModule {
  static {
    this.ɵfac = function UiButtonsRoutingModule_Factory(t) {
      return new (t || UiButtonsRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: UiButtonsRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UiButtonsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 64659:
/*!***************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-buttons/ui-buttons.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiButtonsComponent: () => (/* binding */ UiButtonsComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class UiButtonsComponent {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  static {
    this.ɵfac = function UiButtonsComponent_Factory(t) {
      return new (t || UiButtonsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UiButtonsComponent,
      selectors: [["app-ui-buttons"]],
      decls: 408,
      vars: 0,
      consts: [[1, "page-header"], [1, "page-title"], [1, "row"], [1, "col-xl-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "text-muted", "mb-0"], [1, "card-body"], [1, "btn-list"], ["type", "button", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-danger"], ["type", "button", 1, "btn", "btn-warning"], ["type", "button", 1, "btn", "btn-info"], ["type", "button", 1, "btn", "btn-light"], ["type", "button", 1, "btn", "btn-dark"], ["type", "button", 1, "btn", "btn-link"], ["type", "button", 1, "btn", "btn-primary", "rounded-pill"], ["type", "button", 1, "btn", "btn-secondary", "rounded-pill"], ["type", "button", 1, "btn", "btn-success", "rounded-pill"], ["type", "button", 1, "btn", "btn-danger", "rounded-pill"], ["type", "button", 1, "btn", "btn-warning", "rounded-pill"], ["type", "button", 1, "btn", "btn-info", "rounded-pill"], ["type", "button", 1, "btn", "btn-light", "rounded-pill"], ["type", "button", 1, "btn", "btn-dark", "rounded-pill"], ["type", "button", 1, "btn", "btn-link", "rounded-pill"], ["type", "button", 1, "btn", "btn-outline-primary"], ["type", "button", 1, "btn", "btn-outline-secondary"], ["type", "button", 1, "btn", "btn-outline-success"], ["type", "button", 1, "btn", "btn-outline-danger"], ["type", "button", 1, "btn", "btn-outline-warning"], ["type", "button", 1, "btn", "btn-outline-info"], ["type", "button", 1, "btn", "btn-outline-light"], ["type", "button", 1, "btn", "btn-outline-dark"], ["type", "button", 1, "btn", "btn-outline-primary", "rounded-pill"], ["type", "button", 1, "btn", "btn-outline-secondary", "rounded-pill"], ["type", "button", 1, "btn", "btn-outline-success", "rounded-pill"], ["type", "button", 1, "btn", "btn-outline-danger", "rounded-pill"], ["type", "button", 1, "btn", "btn-outline-warning", "rounded-pill"], ["type", "button", 1, "btn", "btn-outline-info", "rounded-pill"], ["type", "button", 1, "btn", "btn-outline-light", "rounded-pill"], ["type", "button", 1, "btn", "btn-outline-dark", "rounded-pill"], ["type", "button", 1, "btn", "btn-soft-primary"], ["type", "button", 1, "btn", "btn-soft-secondary"], ["type", "button", 1, "btn", "btn-soft-success"], ["type", "button", 1, "btn", "btn-soft-danger"], ["type", "button", 1, "btn", "btn-soft-warning"], ["type", "button", 1, "btn", "btn-soft-info"], ["type", "button", 1, "btn", "btn-soft-light"], ["type", "button", 1, "btn", "btn-soft-dark"], ["type", "button", 1, "btn", "btn-soft-primary", "rounded-pill"], ["type", "button", 1, "btn", "btn-soft-secondary", "rounded-pill"], ["type", "button", 1, "btn", "btn-soft-success", "rounded-pill"], ["type", "button", 1, "btn", "btn-soft-danger", "rounded-pill"], ["type", "button", 1, "btn", "btn-soft-warning", "rounded-pill"], ["type", "button", 1, "btn", "btn-soft-info", "rounded-pill"], ["type", "button", 1, "btn", "btn-soft-light", "rounded-pill"], ["type", "button", 1, "btn", "btn-soft-dark", "rounded-pill"], ["type", "button", 1, "btn", "btn-square", "btn-primary"], ["type", "button", 1, "btn", "btn-square", "btn-secondary"], ["type", "button", 1, "btn", "btn-square", "btn-success"], ["type", "button", 1, "btn", "btn-square", "btn-danger"], ["type", "button", 1, "btn", "btn-square", "btn-warning"], ["type", "button", 1, "btn", "btn-square", "btn-info"], ["type", "button", 1, "btn", "btn-square", "btn-light"], ["type", "button", 1, "btn", "btn-square", "btn-dark"], ["type", "button", 1, "btn", "btn-square", "btn-outline-primary"], ["type", "button", 1, "btn", "btn-square", "btn-outline-secondary"], ["type", "button", 1, "btn", "btn-square", "btn-outline-success"], ["type", "button", 1, "btn", "btn-square", "btn-outline-danger"], ["type", "button", 1, "btn", "btn-square", "btn-outline-warning"], ["type", "button", 1, "btn", "btn-square", "btn-outline-info"], ["type", "button", 1, "btn", "btn-square", "btn-outline-light"], ["type", "button", 1, "btn", "btn-square", "btn-outline-dark"], ["type", "button", 1, "btn", "btn-primary", "btn-sm"], ["type", "button", 1, "btn", "btn-success", "btn-lg"], ["href", "javascript:void(0);", "role", "button", 1, "btn", "btn-primary", "m-0", "me-1"], ["type", "submit", 1, "btn", "btn-primary", "m-0", "me-1"], ["type", "button", "value", "Input", 1, "btn", "btn-primary", "me-1"], ["type", "submit", "value", "Submit", 1, "btn", "btn-primary", "me-1"], ["type", "reset", "value", "Reset", 1, "btn", "btn-primary", "me-1"], [1, "btn-list", "d-flex", "flex-wrap"], ["type", "button", 1, "btn", "btn-primary", "btn-w-xs"], ["type", "button", 1, "btn", "btn-secondary", "btn-w-sm"], ["type", "button", 1, "btn", "btn-warning", "btn-w-md"], ["type", "button", 1, "btn", "btn-info", "btn-w-lg", "me-0"], ["type", "button", 1, "btn", "btn-primary", "disabled"], ["type", "button", 1, "btn", "btn-success", "disabled"], ["type", "button", 1, "btn", "btn-info", "disabled"], ["type", "button", 1, "btn", "btn-warning", "disabled"], [1, "fas", "fa-spinner", "fa-spin", "me-2"], [1, "btn-list", "d-md-flex", "d-block"], [1, "btn", "btn-icon", "btn-primary"], [1, "fas", "fa-bell"], [1, "btn", "btn-icon", "btn-success"], [1, "btn", "btn-icon", "btn-soft-primary", "rounded-pill"], [1, "btn", "btn-icon", "btn-soft-success", "rounded-pill"], [1, "btn", "btn-icon", "btn-outline-primary", "rounded-pill"], [1, "btn", "btn-icon", "btn-outline-success", "rounded-pill"], [1, "fas", "fa-bell", "me-2"], [1, "col-xl-12"], [1, "btn-list", "d-block"], [1, "d-grid", "gap-2", "mb-4"], [1, "d-grid", "gap-2", "d-md-block"], [1, "d-grid", "gap-2", "col-6", "mx-auto"], [1, "d-grid", "gap-2", "d-md-flex", "justify-content-md-end"], ["type", "button", 1, "btn", "btn-teal", "me-md-2"], ["type", "button", 1, "btn", "btn-purple"]],
      template: function UiButtonsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Buttons");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Default Buttons");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Use the button classes on an ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "<a>");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, ", ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "<button>");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, ", or ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "<input>");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " element.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 8)(22, "div", 9)(23, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Primary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Secondary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Success");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Danger");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Warning");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Info");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Light");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Dark");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 3)(42, "div", 4)(43, "div", 5)(44, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Rounded Buttons");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Add ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, ".rounded-pill");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " to default button to get rounded corners.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 8)(52, "div", 9)(53, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Primary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Secondary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Success");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Danger");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Warning");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Info");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Light");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Dark");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "button", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 3)(72, "div", 4)(73, "div", 5)(74, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Outline Buttons");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Use a classes ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, ".btn-outline-**");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, " to quickly create a bordered buttons.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 8)(82, "div", 9)(83, "button", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Primary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "button", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Secondary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Success");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "button", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Danger");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "button", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Warning");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "button", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Info");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "button", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Light");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "button", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Dark");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 3)(100, "div", 4)(101, "div", 5)(102, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Rounded Outline Buttons");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Use a classes ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, ".btn-outline-**");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, " to quickly create a bordered buttons.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 8)(110, "div", 9)(111, "button", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Primary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "button", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Secondary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "button", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Success");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "button", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Danger");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "button", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Warning");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "button", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Info");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "button", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Light");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "button", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Dark");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 3)(128, "div", 4)(129, "div", 5)(130, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "Soft Buttons");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "Use a classes ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, ".btn-soft-**");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, " to quickly create a bordered buttons.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 8)(138, "div", 9)(139, "button", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "Primary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "button", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "Secondary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "button", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "Success");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "button", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "Danger");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "button", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "Warning");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "button", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "Info");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "button", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "Light");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "button", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "Dark");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 3)(156, "div", 4)(157, "div", 5)(158, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "Soft Rounded Button");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "Use a classes ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, ".btn-soft-**");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, " to quickly create a bordered buttons.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 8)(166, "div", 9)(167, "button", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "Primary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "button", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "Secondary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "button", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "Success");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "button", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "Danger");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "button", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "Warning");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "button", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "Info");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "button", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "Light");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "button", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, "Dark");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "div", 3)(184, "div", 4)(185, "div", 5)(186, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "Square Button");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "add ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, ".btn-square");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, " to change the style.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "div", 8)(194, "div", 9)(195, "button", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, "Primary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "button", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](198, "Secondary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "button", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, "Success");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "button", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, "Danger");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "button", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, "Warning");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "button", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206, "Info");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "button", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](208, "Light");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "button", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, "Dark");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "div", 3)(212, "div", 4)(213, "div", 5)(214, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215, "Square Outline Button");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, "add ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, ".btn-square");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220, " to change the style.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "div", 8)(222, "div", 9)(223, "button", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](224, "Primary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "button", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](226, "Secondary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "button", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](228, "Success");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "button", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](230, "Danger");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "button", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, "Warning");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "button", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](234, "Info");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "button", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](236, "Light");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "button", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](238, "Dark");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "div", 3)(240, "div", 4)(241, "div", 5)(242, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](243, "Sizes");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](245, "Add ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](247, ".btn-lg");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](248, ", ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](250, ".btn-sm");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](251, ", or ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](253, ".btn-xs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](254, " for additional sizes.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "div", 8)(256, "div", 9)(257, "button", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](258, "Small Button");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](260, "Default Button");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "button", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](262, "Large Button");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "div", 3)(264, "div", 4)(265, "div", 5)(266, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](267, "Button Tags");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](269, "Use a classes ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](271, ".btn-outline-**");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](272, " to quickly create a bordered buttons.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "div", 8)(274, "div", 9)(275, "a", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](276, "Link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "button", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](278, "Button");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](279, "input", 80)(280, "input", 81)(281, "input", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](282, "div", 3)(283, "div", 4)(284, "div", 5)(285, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](286, "Button Widths");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](288, "Use a classes ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](290, ".btn-outline-**");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](291, " to quickly create a bordered buttons.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](292, "div", 8)(293, "div", 83)(294, "button", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](295, "XS");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](296, "button", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](297, "SM");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](298, "button", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](299, "MD");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "button", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](301, "LG");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "div", 3)(303, "div", 4)(304, "div", 5)(305, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](306, "Button Disabled");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](307, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](308, " Add the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](310, "disabled");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](311, " attribute to ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](312, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](313, "<button>");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](314, " buttons.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](315, "div", 8)(316, "div", 9)(317, "button", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](318, "Primary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](319, "button", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](320, "Success");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](321, "button", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](322, "Info");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](323, "button", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](324, "Warning");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](325, "div", 3)(326, "div", 4)(327, "div", 5)(328, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](329, "Button Loader");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](330, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](331, "Use a classes ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](332, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](333, ".btn-outline-**");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](334, " to quickly create a bordered buttons.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](335, "div", 8)(336, "div", 9)(337, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](338, "i", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](339, "Loading...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](340, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](341, "i", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](342, "Loading...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](343, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](344, "i", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](345, "Loading...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](346, "div", 3)(347, "div", 4)(348, "div", 5)(349, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](350, "Icon Buttons");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](351, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](352, "Use a classes ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](353, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](354, ".btn-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](355, " to quickly create a bordered buttons.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](356, "div", 8)(357, "div", 93)(358, "button", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](359, "i", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](360, "button", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](361, "i", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](362, "button", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](363, "i", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](364, "button", 98);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](365, "i", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](366, "button", 99);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](367, "i", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](368, "button", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](369, "i", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](370, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](371, "i", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](372, "Like ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](373, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](374, "i", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](375, "Like ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](376, "div", 102)(377, "div", 4)(378, "div", 5)(379, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](380, "Block buttons");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](381, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](382, "Create block level buttons by adding class ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](383, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](384, ".d-grid");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](385, " to parent div.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](386, "div", 8)(387, "div", 103)(388, "div", 104)(389, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](390, "Button");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](391, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](392, "Button");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](393, "div", 105)(394, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](395, "Button");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](396, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](397, "Button");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](398, "div", 106)(399, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](400, "Button");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](401, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](402, "Button");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](403, "div", 107)(404, "button", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](405, "Button");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](406, "button", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](407, "Button");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 31842:
/*!************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-buttons/ui-buttons.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiButtonsModule: () => (/* binding */ UiButtonsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ui_buttons_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-buttons-routing.module */ 73987);
/* harmony import */ var _ui_buttons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-buttons.component */ 64659);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);




class UiButtonsModule {
  static {
    this.ɵfac = function UiButtonsModule_Factory(t) {
      return new (t || UiButtonsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: UiButtonsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_buttons_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiButtonsRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UiButtonsModule, {
    declarations: [_ui_buttons_component__WEBPACK_IMPORTED_MODULE_1__.UiButtonsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_buttons_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiButtonsRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_base-ui_ui-buttons_ui-buttons_module_ts.js.map