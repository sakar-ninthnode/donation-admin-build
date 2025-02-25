"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_base-ui_ui-grid_ui-grid_module_ts"],{

/***/ 95125:
/*!**************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-grid/ui-grid-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiGridRoutingModule: () => (/* binding */ UiGridRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ui_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-grid.component */ 30313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _ui_grid_component__WEBPACK_IMPORTED_MODULE_0__.UiGridComponent
}];
class UiGridRoutingModule {
  static {
    this.ɵfac = function UiGridRoutingModule_Factory(t) {
      return new (t || UiGridRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: UiGridRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UiGridRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 30313:
/*!*********************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-grid/ui-grid.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiGridComponent: () => (/* binding */ UiGridComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class UiGridComponent {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  static {
    this.ɵfac = function UiGridComponent_Factory(t) {
      return new (t || UiGridComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UiGridComponent,
      selectors: [["app-ui-grid"]],
      decls: 472,
      vars: 0,
      consts: [[1, "page-header"], [1, "page-title"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "mt-1", "f-m-light"], [1, "card-body"], [1, "table-responsive"], [1, "table", "table-bordered", "table-striped"], [1, "text-center"], [1, "digits"], ["scope", "row", 1, "text-nowrap"], ["colspan", "5"], ["colspan", "6"], [1, "card-body", "grid-showcase"], [1, "col-md-1", "text-center"], [1, "col-md-2", "text-center"], [1, "col-md-3", "text-center"], [1, "col-md-4", "text-center"], [1, "col-md-5", "text-center"], [1, "col-md-7", "text-center"], [1, "col-md-6", "text-center"], [1, "col-md-8", "text-center"], [1, "col-md-9", "text-center"], [1, "col-md-10", "text-center"], [1, "col-md-12", "text-center"], [1, "card-body", "grid-showcase", "mb-0"], [1, "col-lg-4"], [1, "row", "grid-vertical", "align-items-start", "m-1", "g-2", "bg-light"], [1, "col-6"], [1, "bg-white"], [1, "row", "grid-vertical", "align-items-center", "m-1", "g-2", "bg-light"], [1, "row", "grid-vertical", "align-items-end", "m-1", "g-2", "bg-light"], [1, "card-body", "grid-showcase", "grid-align"], [1, "row", "justify-content-start", "bg-light"], [1, "col-5"], [1, "bg-white", "text-dark"], [1, "row", "justify-content-center", "bg-light"], [1, "row", "justify-content-end", "bg-light"], [1, "row", "g-3"], [1, "col-3"], [1, "col-9"], [1, "grid-wrapper", "pb-0"], [1, "row", "g-2"], [1, "border", "border-2"], [1, "col-7"], [1, "col-8"], [1, "col-sm-2", "col-4"], [1, "col-sm-10", "col-8"], [1, "col-4"], [1, "col-3", "order-3"], [1, "col-5", "order-first"], [1, "col-4", "order-last"], [1, "col-3", "order-2"], [1, "col-sm-2", "col-4", "order-5"], [1, "col-sm-6", "col-4", "order-4"], [1, "col-sm-5", "col-4", "offset-sm-3", "offset-2"], [1, "col-sm-2", "col-4", "offset-sm-2", "offset-1"], [1, "col-sm-4", "col-5", "offset-2"], [1, "col-sm-3", "col-4", "offset-sm-2", "offset-1"], [1, "grid-showcase"], [1, "mb-4"], [1, "text-danger"], [1, "row", "mb-3"], [1, "col-md-4"], [1, "col-md-4", "ms-auto"], [1, "col-md-3", "ms-md-auto"], [1, "col-auto", "me-auto"], [1, "col-auto"], [1, "grid-showcase", "mb-3"], [1, "col-6", "col-sm-3"], [1, "w-100"], [1, "col-6", "col-sm-4"], [1, "w-100", "d-none", "d-md-block"], [1, "col-xl-12"], [1, "col-sm-9"], [1, "col-lg-6"], [1, "clearfix"], ["src", "assets/img/supplier/edit-supplier.jpg", "alt", "...", 1, "bd-placeholder-img", "col-md-6", "float-md-end", "mb-3", "ms-md-3", "rounded", "img-fluid"]],
      template: function UiGridComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Grid");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Grid options");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Bootstrap grid system allow all six breakpoints, and any breakpoints you can customize. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8)(13, "div", 9)(14, "table", 10)(15, "thead")(16, "tr");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th", 11)(19, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Extra small");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "small");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "<576px");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th", 11)(24, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Small");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "small");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "\u2265576px");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "th", 11)(29, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Medium");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "small");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\u2265768px");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "th", 11)(34, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Large");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "small");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\u2265992px");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "th", 11)(39, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Extra large");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "small");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\u22651200px");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "th", 11)(44, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Extra extra large");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "small", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\u22651400px");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "tbody")(49, "tr")(50, "th", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Grid behavior");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Horizontal at all times");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "td", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Collapsed to start, horizontal above breakpoints");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "tr")(57, "th", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Max container width");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "None (auto)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "540px");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "720px");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "960px");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "1140px");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "1320px");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "tr")(72, "th", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Class prefix");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "td")(75, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, ".col-");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "td")(78, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, ".col-sm-");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "td")(81, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, ".col-md-");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "td")(84, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, ".col-lg-");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "td")(87, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, ".col-xl-");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "td")(90, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, ".col-xxl-");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "tr")(93, "th", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "# of columns");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "td", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "12");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "tr")(98, "th", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Gutter width");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "td", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "1.5rem (.75rem on left and right)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "tr")(103, "th", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Nestable");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "td", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Yes");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "tr")(108, "th", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Offsets");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "td", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Yes");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "tr")(113, "th", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Column ordering");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "td", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Yes");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 3)(118, "div", 4)(119, "div", 5)(120, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Grid for column");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "You may use predefined grid classes. Using ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, ".col-md-* ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "you can set the grid system.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 16)(128, "div", 2)(129, "div", 17)(130, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "col-md-1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 18)(133, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "col-md-2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 18)(136, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "col-md-2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 19)(139, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "col-md-3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 20)(142, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "col-md-4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 21)(145, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "col-md-5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 22)(148, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "col-md-7");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 23)(151, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "col-md-6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 23)(154, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "col-md-6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 24)(157, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "col-md-8");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "div", 20)(160, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "col-md-4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 25)(163, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "col-md-9");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 19)(166, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "col-md-3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 26)(169, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "col-md-10");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div", 18)(172, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "col-md-2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 27)(175, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "col-md-12");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "div", 3)(178, "div", 4)(179, "div", 5)(180, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "Vertical alignment");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "You can use the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "align-items-*");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, " class to set the vertical alignment. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "div", 28)(188, "div", 2)(189, "div", 29)(190, "div", 30)(191, "div", 31)(192, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, "one column");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "div", 31)(195, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, "two column");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "div", 29)(198, "div", 33)(199, "div", 31)(200, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, "one column");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "div", 31)(203, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, "two column");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "div", 29)(206, "div", 34)(207, "div", 31)(208, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, "one column");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "div", 31)(211, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, "two column");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "div", 3)(214, "div", 4)(215, "div", 5)(216, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, "Horizontal alignment");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, "You can use the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](221, "justify-content-*");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](222, " class to set the horizontal alignment.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "div", 35)(224, "div", 36)(225, "div", 37)(226, "span", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](227, "One column");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "div", 37)(229, "span", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](230, "Two column");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "div", 39)(232, "div", 37)(233, "span", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](234, "One column");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "div", 37)(236, "span", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](237, "Two column");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "div", 40)(239, "div", 37)(240, "span", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](241, "One column");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "div", 37)(243, "span", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](244, "Two column");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "div", 3)(246, "div", 4)(247, "div", 5)(248, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](249, "Nesting");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](251, "To nest your content with the default grid, add a new");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](253, ".row");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](254, " and set of ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](256, ".col-sm-*");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](257, " columns within an existing ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](259, ".col-sm-*");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](260, " column. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "div", 16)(262, "div", 41)(263, "div", 42)(264, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](265, "Level 1: .col-3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "div", 43)(267, "div", 44)(268, "div", 45)(269, "div", 37)(270, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](271, "Level 2: .col-5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "div", 47)(273, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](274, "Level 2: .col-7");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](275, "div", 48)(276, "div", 44)(277, "div", 45)(278, "div", 49)(279, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](280, "Level 1: .col-2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](281, "div", 50)(282, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](283, "Level 1: .col-10");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "div", 51)(285, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](286, "Level 2: .col-4 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "div", 3)(288, "div", 4)(289, "div", 5)(290, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](291, "Order");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](292, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](293, "Using ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](295, ".order ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](296, "class, you can set the order position.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "div", 16)(298, "div", 45)(299, "div", 52)(300, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](301, "First Item (order-3)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "div", 53)(303, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](304, "Second Item (order-first)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](305, "div", 54)(306, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](307, "Third Item (order-last)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](308, "div", 55)(309, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](310, "Fourth Item (order-2)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "div", 56)(312, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](313, "fifth Item (order-5)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](314, "div", 57)(315, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](316, "sixth Item (order-4)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](317, "div", 3)(318, "div", 4)(319, "div", 5)(320, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](321, "Offset");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](322, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](323, "You can offset the grid column using ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](324, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](325, ".offset-*");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](326, " grid class.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](327, "div", 16)(328, "div", 45)(329, "div", 58)(330, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](331, "col-5 offset-3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](332, "div", 59)(333, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](334, "col-2 offset-2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](335, "div", 60)(336, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](337, "col-4 offset-2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](338, "div", 61)(339, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](340, "col-3 offset-2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](341, "div", 3)(342, "div", 4)(343, "div", 5)(344, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](345, " Column wrapping ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](346, "div", 8)(347, "div", 62)(348, "div", 2)(349, "div", 43)(350, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](351, ".col-9");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](352, "div", 51)(353, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](354, ".col-4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](355, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](356, "Since 9 + 4 = 13 > 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](357, "div", 31)(358, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](359, ".col-6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](360, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](361, "Subsequent columns continue along the new line.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](362, "div", 3)(363, "div", 4)(364, "div", 5)(365, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](366, " Margin utilities ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](367, "div", 8)(368, "p", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](369, "With the move to flexbox in v4, you can use margin utilities like ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](370, "span", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](371, ".me-auto");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](372, "to force sibling columns away from one another. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](373, "div", 62)(374, "div", 65)(375, "div", 66)(376, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](377, ".col-md-4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](378, "div", 67)(379, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](380, ".col-md-4 .ms-auto");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](381, "div", 65)(382, "div", 68)(383, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](384, ".col-md-3 .ms-md-auto");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](385, "div", 68)(386, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](387, ".col-md-3 .ms-md-auto");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](388, "div", 2)(389, "div", 69)(390, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](391, ".col-auto .me-auto");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](392, "div", 70)(393, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](394, ".col-auto");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](395, "div", 3)(396, "div", 4)(397, "div", 5)(398, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](399, " Column breaks ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](400, "div", 8)(401, "div", 71)(402, "div", 2)(403, "div", 72)(404, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](405, ".col-6 .col-sm-3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](406, "div", 72)(407, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](408, ".col-6 .col-sm-3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](409, "div", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](410, "div", 72)(411, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](412, ".col-6 .col-sm-3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](413, "div", 72)(414, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](415, ".col-6 .col-sm-3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](416, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](417, "You may also apply this break at specific breakpoints with our ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](418, "span", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](419, "responsive display utilities.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](420, "div", 62)(421, "div", 2)(422, "div", 74)(423, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](424, ".col-6 .col-sm-4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](425, "div", 74)(426, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](427, ".col-6 .col-sm-4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](428, "div", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](429, "div", 74)(430, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](431, ".col-6 .col-sm-4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](432, "div", 74)(433, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](434, ".col-6 .col-sm-4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](435, "div", 76)(436, "div", 4)(437, "div", 5)(438, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](439, " Standalone column classes ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](440, "div", 8)(441, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](442, "The ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](443, "span", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](444, ".col-*");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](445, " classes can also be used outside a ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](446, "span", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](447, ".row");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](448, " to give an element a specific width. Whenever column classes are used as non direct children of a row,the paddings are omitted.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](449, "div", 62)(450, "div", 42)(451, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](452, ".col-3: width of 25%");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](453, "div", 77)(454, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](455, ".col-sm-9: width of 75% above sm breakpoint");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](456, "div", 78)(457, "div", 4)(458, "div", 8)(459, "P");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](460, "The classes can be used together with utilities to create responsive floated images. Make sure to wrap the content in a ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](461, "span", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](462, ".clearfix");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](463, " wrapper to clear the float if the text is shorter.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](464, "div", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](465, "img", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](466, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](467, " A paragraph of placeholder text. We're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](468, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](469, "As you can see the paragraphs gracefully wrap around the floated image. Now imagine how this would look with some actual content in here, rather than just this boring placeholder text that goes on and on, but actually conveys no tangible information at. It simply takes up space and should not really be read. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](470, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](471, "And yet, here you are, still persevering in reading this placeholder text, hoping for some more insights, or some hidden easter egg of content. A joke, perhaps. Unfortunately, there's none of that here. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3868:
/*!******************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-grid/ui-grid.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiGridModule: () => (/* binding */ UiGridModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ui_grid_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-grid-routing.module */ 95125);
/* harmony import */ var _ui_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-grid.component */ 30313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);




class UiGridModule {
  static {
    this.ɵfac = function UiGridModule_Factory(t) {
      return new (t || UiGridModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: UiGridModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_grid_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiGridRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UiGridModule, {
    declarations: [_ui_grid_component__WEBPACK_IMPORTED_MODULE_1__.UiGridComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_grid_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiGridRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_base-ui_ui-grid_ui-grid_module_ts.js.map