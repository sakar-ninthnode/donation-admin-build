"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_advanced-ui_ui-ribbon_ui-ribbon_module_ts"],{

/***/ 15090:
/*!**********************************************************************************!*\
  !*** ./src/app/core-component/advanced-ui/ui-ribbon/ui-ribbon-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiRibbonRoutingModule: () => (/* binding */ UiRibbonRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ui_ribbon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-ribbon.component */ 268);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _ui_ribbon_component__WEBPACK_IMPORTED_MODULE_0__.UiRibbonComponent
}];
class UiRibbonRoutingModule {
  static {
    this.ɵfac = function UiRibbonRoutingModule_Factory(t) {
      return new (t || UiRibbonRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: UiRibbonRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UiRibbonRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 268:
/*!*****************************************************************************!*\
  !*** ./src/app/core-component/advanced-ui/ui-ribbon/ui-ribbon.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiRibbonComponent: () => (/* binding */ UiRibbonComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);



class UiRibbonComponent {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  static {
    this.ɵfac = function UiRibbonComponent_Factory(t) {
      return new (t || UiRibbonComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UiRibbonComponent,
      selectors: [["app-ui-ribbon"]],
      decls: 281,
      vars: 1,
      consts: [[1, "page-header"], [1, "row"], [1, "col-sm-12"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "active"], [1, "fw-semibold", "mb-4"], [1, "col-xl-3", "col-md-6"], [1, "card", "ribbone-card"], [1, "power-ribbone", "power-ribbone-top-left", "text-warning"], [1, "bg-warning"], [1, "feather", "icon-zap"], [1, "card-body", "p-6"], [1, "card-subtitle", "mb-2", "text-dark", "fw-bold"], [1, "card-text"], [1, "power-ribbone", "power-ribbone-bottom-left", "text-primary"], [1, "bg-primary"], [1, "power-ribbone", "power-ribbone-top-right", "text-danger"], [1, "bg-danger"], [1, "power-ribbone", "power-ribbone-bottom-right", "text-success"], [1, "bg-success"], [1, "ribbone", "ribbone-top-left", "text-primary"], [1, "card-subtitle", "mb-2", "text-dark", "fw-bold", "text-end"], [1, "card", "ribbone-card", "sold-out"], [1, "ribbone", "ribbone-top-right", "text-danger"], [1, "ribbone", "ribbone-top-left", "text-success"], [1, "ribbone", "ribbone-top-right", "text-warning"], [1, "arrow-ribbone-left", "bg-secondary"], [1, "arrow-ribbone-right", "bg-info"], [1, "arrow-ribbone-left", "bg-warning"], [1, "arrow-ribbone-right", "bg-teal"], [1, "row", "ribbone-row"], [1, "card"], [1, "ribbone-success-left"], [1, "ribbone-warning-right"], [1, "ribbone-info-left"], [1, "ribbone-danger-right"], [1, "bookmark-ribbone-danger-left"], [1, "bookmark-ribbone-secondary-right"], [1, "bookmark-sideleft-ribbone-success-left"], [1, "bookmark-sideright-ribbone-primary-right"], [1, "col-xxl-2", "col-lg-4", "col-md-4", "col-sm-10", "mx-0", "mx-sm-7"], [1, "card", "br-0"], [1, "fullwidth-secondary-ribbons"], [1, "bar"], [1, "fullwidth-primary-ribbons"], [1, "fullwidth-arrow-warning-ribbons"], [1, "fullwidth-arrow-danger-ribbons-right"]],
      template: function UiRibbonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Ribbons");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 4)(6, "li", 5)(7, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Ribbons");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 1)(12, "h5", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Ribbon Style 1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9)(15, "div", 10)(16, "div", 11)(17, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14)(20, "h6", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Card subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Some quick example text to build on the card title. Some quick example text to build on the card title");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 9)(25, "div", 10)(26, "div", 17)(27, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 14)(30, "h6", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Card subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Some quick example text to build on the card title. some quick example text to build on the card title");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 9)(35, "div", 10)(36, "div", 19)(37, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 14)(40, "h6", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Card subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Some quick example text to build on the card title. Some quick example text to build on the card title");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 9)(45, "div", 10)(46, "div", 21)(47, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 14)(50, "h6", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Card subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Some quick example text to build on the card title. Some quick example text to build on the card title");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 1)(55, "h5", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Ribbon Style 2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 9)(58, "div", 10)(59, "div", 23)(60, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "sold out");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 14)(63, "h6", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Card subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Some quick example text to build on the card title. Some quick example text to build on the card title");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 9)(68, "div", 25)(69, "div", 26)(70, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Offer");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 14)(73, "h6", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Card subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Some quick example text to build on the card title. Some quick example text to build on the card title");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 9)(78, "div", 10)(79, "div", 27)(80, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Update");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 14)(83, "h6", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Card subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Some quick example text to build on the card title. Some quick example text to build on the card title");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 9)(88, "div", 25)(89, "div", 28)(90, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Open");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 14)(93, "h6", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Card subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Some quick example text to build on the card title. Some quick example text to build on the card title");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 1)(98, "h5", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Ribbon Style 3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 9)(101, "div", 10)(102, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Sale");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 14)(105, "h6", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Card subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Some quick example text to build on the card title. Some quick example text to build on the card title");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 9)(110, "div", 10)(111, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Price");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 14)(114, "h6", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Card subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Some quick example text to build on the card title. Some quick example text to build on the card title");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 9)(119, "div", 10)(120, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Service");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 14)(123, "h6", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Card subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Some quick example text to build on the card title. Some quick example text to build on the card title");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 9)(128, "div", 10)(129, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Offer");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 14)(132, "h6", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "Card subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "Some quick example text to build on the card title. Some quick example text to build on the card title");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 33)(137, "h5", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "Ribbon Style 4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 9)(140, "div", 34)(141, "span", 35)(142, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](143, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 14)(145, "h6", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "Card subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "Some quick example text to build on the card title. Some quick example text to build on the card title");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 9)(150, "div", 34)(151, "span", 36)(152, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](153, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 14)(155, "h6", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "Card subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "Some quick example text to build on the card title. Some quick example text to build on the card title");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "div", 9)(160, "div", 34)(161, "span", 37)(162, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](163, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 14)(165, "h6", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "Card subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "Some quick example text to build on the card title. Some quick example text to build on the card title");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 9)(170, "div", 34)(171, "span", 38)(172, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](173, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 14)(175, "h6", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "Card subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "Some quick example text to build on the card title. Some quick example text to build on the card title");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "div", 1)(180, "h5", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "Ribbon Style 5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 9)(183, "div", 34)(184, "span", 39)(185, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, "Jul");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "div", 14)(188, "h6", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "Card subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, "Some quick example text to build on the card title. Some quick example text to build on the card title");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "div", 9)(193, "div", 34)(194, "span", 40)(195, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, "Aug");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "div", 14)(198, "h6", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, "Card subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, "Some quick example text to build on the card title. Some quick example text to build on the card title");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "div", 9)(203, "div", 34)(204, "span", 41)(205, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206, "Sept");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "div", 14)(208, "h6", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, "Card subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](211, "Some quick example text to build on the card title. Some quick example text to build on the card title");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "div", 9)(213, "div", 34)(214, "span", 42)(215, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](216, "Oct");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "div", 14)(218, "h6", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, "Card subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](221, "Some quick example text to build on the card title. Some quick example text to build on the card title");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "div", 1)(223, "h5", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](224, "Ribbon Style 6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "div", 43)(226, "div", 44)(227, "div", 45)(228, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](229, " CSS Ribbon ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](230, "span")(231, "span")(232, "span")(233, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "div", 14)(235, "h6", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](236, "Card subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](238, "Some quick example text to build on the card title. Some quick example text to build on the card title");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "div", 43)(240, "div", 44)(241, "div", 47)(242, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](243, " CSS Ribbon ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](244, "span")(245, "span")(246, "span")(247, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "div", 14)(249, "h6", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](250, "Card subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](252, "Some quick example text to build on the card title. Some quick example text to build on the card title");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "div", 43)(254, "div", 44)(255, "div", 48)(256, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](257, " CSS Ribbon ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](258, "span")(259, "span")(260, "span")(261, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "div", 14)(263, "h6", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](264, "Card subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](266, "Some quick example text to build on the card title. Some quick example text to build on the card title");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](267, "div", 43)(268, "div", 44)(269, "div", 49)(270, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](271, " CSS Ribbon ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](272, "span")(273, "span")(274, "span")(275, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "div", 14)(277, "h6", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](278, "Card subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](279, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](280, "Some quick example text to build on the card title. Some quick example text to build on the card title");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.adminDashboard);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 53371:
/*!**************************************************************************!*\
  !*** ./src/app/core-component/advanced-ui/ui-ribbon/ui-ribbon.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiRibbonModule: () => (/* binding */ UiRibbonModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ui_ribbon_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-ribbon-routing.module */ 15090);
/* harmony import */ var _ui_ribbon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-ribbon.component */ 268);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);




class UiRibbonModule {
  static {
    this.ɵfac = function UiRibbonModule_Factory(t) {
      return new (t || UiRibbonModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: UiRibbonModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_ribbon_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiRibbonRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UiRibbonModule, {
    declarations: [_ui_ribbon_component__WEBPACK_IMPORTED_MODULE_1__.UiRibbonComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_ribbon_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiRibbonRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_advanced-ui_ui-ribbon_ui-ribbon_module_ts.js.map