"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_base-ui_ui-breadcrumb_ui-breadcrumb_module_ts"],{

/***/ 98321:
/*!**************************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-breadcrumb/ui-breadcrumb-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiBreadcrumbRoutingModule: () => (/* binding */ UiBreadcrumbRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ui_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-breadcrumb.component */ 84149);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _ui_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.UiBreadcrumbComponent
}];
class UiBreadcrumbRoutingModule {
  static {
    this.ɵfac = function UiBreadcrumbRoutingModule_Factory(t) {
      return new (t || UiBreadcrumbRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: UiBreadcrumbRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UiBreadcrumbRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 84149:
/*!*********************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-breadcrumb/ui-breadcrumb.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiBreadcrumbComponent: () => (/* binding */ UiBreadcrumbComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class UiBreadcrumbComponent {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  static {
    this.ɵfac = function UiBreadcrumbComponent_Factory(t) {
      return new (t || UiBreadcrumbComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UiBreadcrumbComponent,
      selectors: [["app-ui-breadcrumb"]],
      decls: 373,
      vars: 0,
      consts: [[1, "page-header"], [1, "page-title"], [1, "row"], [1, "col-xl-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "breadcrumb-item"], ["href", "javascript:void(0);"], [1, "breadcrumb", "mb-0"], [1, "breadcrumb", "breadcrumb-arrow"], [1, "breadcrumb", "breadcrumb-arrow", "mb-0"], [1, "breadcrumb", "breadcrumb-pipe"], [1, "breadcrumb", "breadcrumb-pipe", "mb-0"], [1, "breadcrumb", "breadcrumb-line"], [1, "breadcrumb", "breadcrumb-line", "mb-0"], [1, "breadcrumb", "breadcrumb-dot"], [1, "breadcrumb", "breadcrumb-dot", "mb-0"], [1, "breadcrumb", "breadcrumb-divide"], [1, "breadcrumb", "breadcrumb-divide", "mb-0"], [1, "fas", "fa-home"], [1, "breadcrumb", "breadcrumb-separatorless"], [1, "fas", "fa-home", "me-1"], [1, "breadcrumb", "breadcrumb-separatorless", "mb-0"], [1, "breadcrumb", "breadcrumb-colored", "bg-primary"], [1, "breadcrumb", "breadcrumb-colored", "bg-secondary"], [1, "breadcrumb", "breadcrumb-colored", "bg-success"], [1, "breadcrumb", "breadcrumb-colored", "bg-info"], [1, "breadcrumb", "breadcrumb-colored", "bg-warning"], [1, "breadcrumb", "breadcrumb-colored", "bg-danger"], [1, "breadcrumb", "breadcrumb-colored", "bg-dark", "mb-0"], [1, "breadcrumb", "breadcrumb-colored", "bg-soft-primary"], [1, "breadcrumb", "breadcrumb-colored", "bg-soft-secondary"], [1, "breadcrumb", "breadcrumb-colored", "bg-soft-success"], [1, "breadcrumb", "breadcrumb-colored", "bg-soft-info"], [1, "breadcrumb", "breadcrumb-colored", "bg-soft-warning"], [1, "breadcrumb", "breadcrumb-colored", "bg-soft-danger"], [1, "breadcrumb", "breadcrumb-colored", "bg-soft-dark", "mb-0"]],
      template: function UiBreadcrumbComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Breadcrumb");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Default Breadcrumb");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7)(11, "nav", 8)(12, "ol", 9)(13, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "nav", 8)(16, "ol", 9)(17, "li", 11)(18, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Library");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "nav", 8)(23, "ol", 13)(24, "li", 11)(25, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li", 11)(28, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Library");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Data");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 3)(33, "div", 4)(34, "div", 5)(35, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Arrow Style");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 7)(38, "nav", 8)(39, "ol", 14)(40, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "nav", 8)(43, "ol", 14)(44, "li", 11)(45, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Library");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "nav", 8)(50, "ol", 15)(51, "li", 11)(52, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "li", 11)(55, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Library");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Data");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 3)(60, "div", 4)(61, "div", 5)(62, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Pipe Style");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 7)(65, "nav", 8)(66, "ol", 16)(67, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "nav", 8)(70, "ol", 16)(71, "li", 11)(72, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Library");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "nav", 8)(77, "ol", 17)(78, "li", 11)(79, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "li", 11)(82, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Library");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Data");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 3)(87, "div", 4)(88, "div", 5)(89, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Line Style");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 7)(92, "nav", 8)(93, "ol", 18)(94, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "nav", 8)(97, "ol", 18)(98, "li", 11)(99, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Library");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "nav", 8)(104, "ol", 19)(105, "li", 11)(106, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "li", 11)(109, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Library");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Data");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 3)(114, "div", 4)(115, "div", 5)(116, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Dot Style");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 7)(119, "nav", 8)(120, "ol", 20)(121, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "nav", 8)(124, "ol", 20)(125, "li", 11)(126, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "Library");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "nav", 8)(131, "ol", 21)(132, "li", 11)(133, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "li", 11)(136, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "Library");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "Data");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 3)(141, "div", 4)(142, "div", 5)(143, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "Dividers");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 7)(146, "nav", 8)(147, "ol", 22)(148, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "nav", 8)(151, "ol", 22)(152, "li", 11)(153, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "Library");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "nav", 8)(158, "ol", 23)(159, "li", 11)(160, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "li", 11)(163, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "Library");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "Data");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "div", 3)(168, "div", 4)(169, "div", 5)(170, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, "Breadcrumb with Icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "div", 7)(173, "nav", 8)(174, "ol", 9)(175, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](176, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "nav", 8)(178, "ol", 9)(179, "li", 11)(180, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](181, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "Library");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "nav", 8)(185, "ol", 13)(186, "li", 11)(187, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](188, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "li", 11)(190, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, "Library");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, "Data");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "div", 3)(195, "div", 4)(196, "div", 5)(197, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](198, "Without Separator");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "div", 7)(200, "nav", 8)(201, "ol", 25)(202, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](203, "i", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "nav", 8)(205, "ol", 25)(206, "li", 11)(207, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](208, "i", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, "Library");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "nav", 8)(212, "ol", 27)(213, "li", 11)(214, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](215, "i", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "li", 11)(217, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](218, "Library");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220, "Data");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "div", 3)(222, "div", 4)(223, "div", 5)(224, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](225, "Colored Breadcrumb");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "div", 7)(227, "nav", 8)(228, "ol", 28)(229, "li", 11)(230, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](231, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "li", 11)(233, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](234, "Library");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](236, "Data");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "nav", 8)(238, "ol", 29)(239, "li", 11)(240, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](241, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "li", 11)(243, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](244, "Library");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](246, "Data");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "nav", 8)(248, "ol", 30)(249, "li", 11)(250, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](251, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "li", 11)(253, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](254, "Library");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](256, "Data");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "nav", 8)(258, "ol", 31)(259, "li", 11)(260, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](261, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "li", 11)(263, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](264, "Library");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](266, "Data");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](267, "nav", 8)(268, "ol", 32)(269, "li", 11)(270, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](271, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "li", 11)(273, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](274, "Library");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](275, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](276, "Data");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "nav", 8)(278, "ol", 33)(279, "li", 11)(280, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](281, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](282, "li", 11)(283, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](284, "Library");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](285, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](286, "Data");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "nav", 8)(288, "ol", 34)(289, "li", 11)(290, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](291, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](292, "li", 11)(293, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](294, "Library");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](295, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](296, "Data");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "div", 3)(298, "div", 4)(299, "div", 5)(300, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](301, "Light Colored Breadcrumb");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "div", 7)(303, "nav", 8)(304, "ol", 35)(305, "li", 11)(306, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](307, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](308, "li", 11)(309, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](310, "Library");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](312, "Data");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](313, "nav", 8)(314, "ol", 36)(315, "li", 11)(316, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](317, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](318, "li", 11)(319, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](320, "Library");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](321, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](322, "Data");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](323, "nav", 8)(324, "ol", 37)(325, "li", 11)(326, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](327, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](328, "li", 11)(329, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](330, "Library");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](331, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](332, "Data");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](333, "nav", 8)(334, "ol", 38)(335, "li", 11)(336, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](337, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](338, "li", 11)(339, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](340, "Library");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](341, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](342, "Data");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](343, "nav", 8)(344, "ol", 39)(345, "li", 11)(346, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](347, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](348, "li", 11)(349, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](350, "Library");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](351, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](352, "Data");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](353, "nav", 8)(354, "ol", 40)(355, "li", 11)(356, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](357, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](358, "li", 11)(359, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](360, "Library");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](361, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](362, "Data");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](363, "nav", 8)(364, "ol", 41)(365, "li", 11)(366, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](367, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](368, "li", 11)(369, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](370, "Library");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](371, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](372, "Data");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 98888:
/*!******************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-breadcrumb/ui-breadcrumb.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiBreadcrumbModule: () => (/* binding */ UiBreadcrumbModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ui_breadcrumb_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-breadcrumb-routing.module */ 98321);
/* harmony import */ var _ui_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-breadcrumb.component */ 84149);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);




class UiBreadcrumbModule {
  static {
    this.ɵfac = function UiBreadcrumbModule_Factory(t) {
      return new (t || UiBreadcrumbModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: UiBreadcrumbModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_breadcrumb_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiBreadcrumbRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UiBreadcrumbModule, {
    declarations: [_ui_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.UiBreadcrumbComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_breadcrumb_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiBreadcrumbRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_base-ui_ui-breadcrumb_ui-breadcrumb_module_ts.js.map