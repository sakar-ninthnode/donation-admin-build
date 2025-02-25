"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_base-ui_ui-colors_ui-colors_module_ts"],{

/***/ 23489:
/*!******************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-colors/ui-colors-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiColorsRoutingModule: () => (/* binding */ UiColorsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ui_colors_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-colors.component */ 24581);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _ui_colors_component__WEBPACK_IMPORTED_MODULE_0__.UiColorsComponent
}];
class UiColorsRoutingModule {
  static {
    this.ɵfac = function UiColorsRoutingModule_Factory(t) {
      return new (t || UiColorsRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: UiColorsRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UiColorsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 24581:
/*!*************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-colors/ui-colors.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiColorsComponent: () => (/* binding */ UiColorsComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class UiColorsComponent {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  static {
    this.ɵfac = function UiColorsComponent_Factory(t) {
      return new (t || UiColorsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UiColorsComponent,
      selectors: [["app-ui-colors"]],
      decls: 467,
      vars: 0,
      consts: [[1, "page-header"], [1, "page-title"], [1, "row"], [1, "col-lg-12", "col-sm-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "d-flex", "flex-wrap", "colors_parent"], [1, "color-box", "bg-primary", "p-4"], [1, "flex-1", "text-sm", "my-1", "pt-1"], [1, "flex-0", "text-sm"], [1, "color-box", "bg-secondary", "p-4"], [1, "color-box", "bg-warning", "p-4"], [1, "color-box", "bg-info", "p-4"], [1, "color-box", "bg-success", "p-4"], [1, "color-box", "bg-danger", "p-4"], [1, "color-box", "bg-light", "border", "p-4"], [1, "color-box", "bg-dark", "p-4"], [1, "row", "row-cols-12", "d-flex", "align-items-center"], [1, "p-3", "col"], [1, "m-2", "bg-primary", "mx-auto", "color-container"], [1, "pb-0", "mb-0", "fw-semibold", "text-center"], [1, "m-2", "bg-secondary", "mx-auto", "color-container"], [1, "m-2", "bg-warning", "mx-auto", "color-container"], [1, "m-2", "bg-info", "mx-auto", "color-container"], [1, "m-2", "bg-success", "mx-auto", "color-container"], [1, "m-2", "bg-danger", "mx-auto", "color-container"], [1, "m-2", "bg-light", "mx-auto", "color-container"], [1, "m-2", "bg-dark", "mx-auto", "color-container"], [1, "m-2", "bg-soft-primary", "mx-auto", "color-container", "shadow-none"], [1, "m-2", "bg-soft-secondary", "mx-auto", "color-container", "shadow-none"], [1, "m-2", "bg-soft-warning", "mx-auto", "color-container", "shadow-none"], [1, "m-2", "bg-soft-info", "mx-auto", "color-container", "shadow-none"], [1, "m-2", "bg-soft-success", "mx-auto", "color-container", "shadow-none"], [1, "m-2", "bg-soft-danger", "mx-auto", "color-container", "shadow-none"], [1, "m-2", "bg-soft-light", "mx-auto", "color-container"], [1, "m-2", "bg-soft-dark", "mx-auto", "color-container", "shadow-none"], [1, "m-2", "bg-primary-gradient", "mx-auto", "color-container"], [1, "m-2", "bg-secondary-gradient", "mx-auto", "color-container"], [1, "m-2", "bg-warning-gradient", "mx-auto", "color-container"], [1, "m-2", "bg-info-gradient", "mx-auto", "color-container"], [1, "m-2", "bg-success-gradient", "mx-auto", "color-container"], [1, "m-2", "bg-danger-gradient", "mx-auto", "color-container"], [1, "m-2", "bg-light-gradient", "mx-auto", "color-container"], [1, "m-2", "bg-dark-gradient", "mx-auto", "color-container"], [1, "card", "custom-card"], [1, "m-2", "bg-outline-primary", "mx-auto", "color-container"], [1, "feather", "icon-smile", "fs-18"], [1, "m-2", "bg-outline-secondary", "mx-auto", "color-container"], [1, "m-2", "bg-outline-warning", "mx-auto", "color-container"], [1, "m-2", "bg-outline-info", "mx-auto", "color-container"], [1, "m-2", "bg-outline-success", "mx-auto", "color-container"], [1, "m-2", "bg-outline-danger", "mx-auto", "color-container"], [1, "m-2", "bg-outline-light", "mx-auto", "color-container"], [1, "m-2", "bg-outline-dark", "mx-auto", "color-container"], [1, "m-2", "border", "border-primary", "mx-auto", "color-container"], [1, "m-2", "border", "border-secondary", "mx-auto", "color-container"], [1, "m-2", "border", "border-warning", "mx-auto", "color-container"], [1, "m-2", "border", "border-info", "mx-auto", "color-container"], [1, "m-2", "border", "border-success", "mx-auto", "color-container"], [1, "m-2", "border", "border-danger", "mx-auto", "color-container"], [1, "m-2", "border", "border-light", "mx-auto", "color-container"], [1, "m-2", "border", "border-dark", "mx-auto", "color-container"], [1, "m-2", "text-primary", "fw-semibold", "fs-14", "text-center"], [1, "m-2", "text-secondary", "fw-semibold", "fs-14", "text-center"], [1, "m-2", "text-warning", "fw-semibold", "fs-14", "text-center"], [1, "m-2", "text-info", "fw-semibold", "fs-14", "text-center"], [1, "m-2", "text-success", "fw-semibold", "fs-14", "text-center"], [1, "m-2", "text-danger", "fw-semibold", "fs-14", "text-center"], [1, "m-2", "text-light", "bg-dark", "fw-semibold", "fs-14", "text-center"], [1, "m-2", "text-dark", "fw-semibold", "fs-14", "text-center"], [1, "m-2", "text-muted", "fw-semibold", "fs-14", "text-center"], [1, "m-2", "text-primary", "text-opacity-75", "fw-semibold", "fs-14", "text-center"], [1, "m-2", "text-primary", "text-opacity-50", "fw-semibold", "fs-14", "text-center"], [1, "m-2", "text-primary", "text-opacity-25", "fw-semibold", "fs-14", "text-center"], [1, "card-body", "d-xl-flex"], [1, "flex-fill", "p-3", "bg-gray-100"], [1, "flex-fill", "p-3", "bg-gray-200"], [1, "flex-fill", "p-3", "bg-gray-300"], [1, "flex-fill", "p-3", "bg-gray-400"], [1, "flex-fill", "p-3", "bg-gray-500"], [1, "flex-fill", "p-3", "bg-gray-600"], [1, "flex-fill", "p-3", "bg-gray-700"], [1, "flex-fill", "p-3", "bg-gray-800"], [1, "flex-fill", "p-3", "bg-gray-900"], [1, "flex-fill", "p-3", "bg-gray"], [1, "m-2", "bg-primary", "bg-opacity-100", "text-fixed-white", "mx-auto", "color-container"], [1, "m-2", "bg-primary", "text-fixed-white", "bg-opacity-75", "mx-auto", "color-container"], [1, "m-2", "bg-primary", "text-fixed-black", "bg-opacity-50", "mx-auto", "color-container"], [1, "m-2", "bg-primary", "text-fixed-black", "bg-opacity-25", "mx-auto", "color-container"], [1, "m-2", "bg-primary", "text-fixed-black", "bg-opacity-10", "mx-auto", "color-container"], [1, "col-xl-12"], [1, "callout"], [1, "callout", "callout-info"], [1, "callout", "callout-warning"], [1, "callout", "callout-danger"]],
      template: function UiColorsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Colors");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Background Colors");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Primary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "#FF9F43");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Secondary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "#092C4C");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "warning");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "#FF9900");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "info");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "#17a2b8");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "success");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "#28C76F");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "danger");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "#FF0000");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "light");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "#f8f9fa");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "dark");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "#29344a");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 19)(61, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "p", 22)(64, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, ".bg-primary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "p", 22)(69, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, ".bg-secondary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "p", 22)(74, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, ".bg-warning");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "p", 22)(79, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, ".bg-info");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "p", 22)(84, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, ".bg-success");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "p", 22)(89, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, ".bg-danger");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "p", 22)(94, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, ".bg-light");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "p", 22)(99, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, ".bg-dark");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 3)(102, "div", 4)(103, "div", 5)(104, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Background transparent colors");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 7)(107, "div", 19)(108, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "p", 22)(111, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, ".bg-primary-transparent");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "p", 22)(116, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, ".bg-secondary-transparent");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "p", 22)(121, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, ".bg-warning-transparent");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "p", 22)(126, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, ".bg-info-transparent");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](129, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "p", 22)(131, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, ".bg-success-transparent");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](134, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "p", 22)(136, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, ".bg-danger-transparent");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](139, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "p", 22)(141, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, ".bg-light-transparent");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](144, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "p", 22)(146, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, ".bg-dark-transparent");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 3)(149, "div", 4)(150, "div", 5)(151, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, " Background gradients ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 7)(154, "div", 19)(155, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](156, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "p", 22)(158, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, ".bg-primary-gradient");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](161, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "p", 22)(163, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, ".bg-secondary-gradient");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](166, "div", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "p", 22)(168, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, ".bg-warning-gradient");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](171, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "p", 22)(173, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, ".bg-info-gradient");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](176, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "p", 22)(178, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, ".bg-success-gradient");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](181, "div", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "p", 22)(183, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, ".bg-danger-gradient");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](186, "div", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "p", 22)(188, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, ".bg-light-gradient");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](191, "div", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "p", 22)(193, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, ".bg-dark-gradient");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "div", 3)(196, "div", 46)(197, "div", 5)(198, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, " Background outline colors ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "div", 7)(201, "div", 19)(202, "div", 20)(203, "div", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](204, "i", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "p", 22)(206, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, ".bg-outline-primary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "div", 20)(209, "div", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](210, "i", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "p", 22)(212, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](213, ".bg-outline-secondary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "div", 20)(215, "div", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](216, "i", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "p", 22)(218, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, ".bg-outline-warning");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "div", 20)(221, "div", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](222, "i", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "p", 22)(224, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](225, ".bg-outline-info");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "div", 20)(227, "div", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](228, "i", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "p", 22)(230, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](231, ".bg-outline-success");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "div", 20)(233, "div", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](234, "i", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "p", 22)(236, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](237, ".bg-outline-danger");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "div", 20)(239, "div", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](240, "i", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "p", 22)(242, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](243, ".bg-outline-light");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "div", 20)(245, "div", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](246, "i", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "p", 22)(248, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](249, ".bg-outline-dark");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "div", 3)(251, "div", 4)(252, "div", 5)(253, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](254, "Border Colors");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "div", 7)(256, "div", 19)(257, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](258, "div", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "p", 22)(260, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](261, ".border-primary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](263, "div", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "p", 22)(265, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](266, ".border-secondary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](267, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](268, "div", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "p", 22)(270, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](271, ".border-warning");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](273, "div", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "p", 22)(275, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](276, ".border-info");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](278, "div", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](279, "p", 22)(280, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](281, ".border-success");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](282, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](283, "div", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "p", 22)(285, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](286, ".border-danger");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](288, "div", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "p", 22)(290, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](291, ".border-light");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](292, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](293, "div", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "p", 22)(295, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](296, ".border-dark");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "div", 3)(298, "div", 4)(299, "div", 5)(300, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](301, "Text Colors");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "div", 7)(303, "div", 19)(304, "div", 20)(305, "div", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](306, "primary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](307, "p", 22)(308, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](309, ".text-primary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](310, "div", 20)(311, "div", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](312, "secondary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](313, "p", 22)(314, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](315, ".text-secondary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](316, "div", 20)(317, "div", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](318, "warning");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](319, "p", 22)(320, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](321, ".text-warning");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](322, "div", 20)(323, "div", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](324, "info");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](325, "p", 22)(326, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](327, ".text-info");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](328, "div", 20)(329, "div", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](330, "success");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](331, "p", 22)(332, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](333, ".text-success");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](334, "div", 20)(335, "div", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](336, "danger");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](337, "p", 22)(338, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](339, ".text-danger");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](340, "div", 20)(341, "div", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](342, "light");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](343, "p", 22)(344, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](345, ".text-light");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](346, "div", 20)(347, "div", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](348, "dark");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](349, "p", 22)(350, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](351, ".text-dark");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](352, "div", 20)(353, "div", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](354, "muted");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](355, "p", 22)(356, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](357, ".text-muted");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](358, "div", 3)(359, "div", 4)(360, "div", 5)(361, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](362, " Text Opacity ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](363, "div", 7)(364, "div", 19)(365, "div", 20)(366, "div", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](367, "Opacity-100");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](368, "p", 22)(369, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](370, "100% opacity");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](371, "div", 20)(372, "div", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](373, "Opacity-100");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](374, "p", 22)(375, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](376, ".text-opacity-75");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](377, "div", 20)(378, "div", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](379, "Opacity-100");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](380, "p", 22)(381, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](382, ".text-opacity-50");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](383, "div", 20)(384, "div", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](385, "Opacity-100");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](386, "p", 22)(387, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](388, ".text-opacity-25");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](389, "div", 3)(390, "div", 4)(391, "div", 5)(392, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](393, "Other Colors");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](394, "div", 76)(395, "div", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](396, "$gray-100");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](397, "div", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](398, "$gray-200");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](399, "div", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](400, "$gray-300");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](401, "div", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](402, "$gray-400");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](403, "div", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](404, "$gray-500");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](405, "div", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](406, "$gray-600");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](407, "div", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](408, "$gray-700");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](409, "div", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](410, "$gray-800");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](411, "div", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](412, "$gray-900");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](413, "div", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](414, "$gray");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](415, "div", 3)(416, "div", 4)(417, "div", 5)(418, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](419, "Background Opacity");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](420, "div", 7)(421, "div", 19)(422, "div", 20)(423, "div", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](424, "100%");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](425, "p", 22)(426, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](427, ".bg-opacity-100");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](428, "div", 20)(429, "div", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](430, "75%");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](431, "p", 22)(432, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](433, ".bg-opacity-75");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](434, "div", 20)(435, "div", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](436, "50%");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](437, "p", 22)(438, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](439, ".bg-opacity-50");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](440, "div", 20)(441, "div", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](442, "25%");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](443, "p", 22)(444, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](445, ".bg-opacity-25");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](446, "div", 20)(447, "div", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](448, "10%");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](449, "p", 22)(450, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](451, ".bg-opacity-10");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](452, "div", 92)(453, "div", 4)(454, "div", 5)(455, "div", 6)(456, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](457, "Callout");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](458, "div", 7)(459, "div", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](460, "Lorem ipsum dolor sit amet consectetur adipisicing elit. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](461, "div", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](462, "Lorem ipsum dolor sit amet consectetur adipisicing elit. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](463, "div", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](464, "Lorem ipsum dolor sit amet consectetur adipisicing elit. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](465, "div", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](466, "Lorem ipsum dolor sit amet consectetur adipisicing elit. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 89112:
/*!**********************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-colors/ui-colors.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiColorsModule: () => (/* binding */ UiColorsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ui_colors_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-colors-routing.module */ 23489);
/* harmony import */ var _ui_colors_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-colors.component */ 24581);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);




class UiColorsModule {
  static {
    this.ɵfac = function UiColorsModule_Factory(t) {
      return new (t || UiColorsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: UiColorsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_colors_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiColorsRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UiColorsModule, {
    declarations: [_ui_colors_component__WEBPACK_IMPORTED_MODULE_1__.UiColorsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_colors_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiColorsRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_base-ui_ui-colors_ui-colors_module_ts.js.map