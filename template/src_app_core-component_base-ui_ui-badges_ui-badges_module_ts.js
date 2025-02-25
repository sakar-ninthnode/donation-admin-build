"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_base-ui_ui-badges_ui-badges_module_ts"],{

/***/ 20209:
/*!******************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-badges/ui-badges-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiBadgesRoutingModule: () => (/* binding */ UiBadgesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ui_badges_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-badges.component */ 69333);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _ui_badges_component__WEBPACK_IMPORTED_MODULE_0__.UiBadgesComponent
}];
class UiBadgesRoutingModule {
  static {
    this.ɵfac = function UiBadgesRoutingModule_Factory(t) {
      return new (t || UiBadgesRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: UiBadgesRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UiBadgesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 69333:
/*!*************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-badges/ui-badges.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiBadgesComponent: () => (/* binding */ UiBadgesComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class UiBadgesComponent {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  static {
    this.ɵfac = function UiBadgesComponent_Factory(t) {
      return new (t || UiBadgesComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UiBadgesComponent,
      selectors: [["app-ui-badges"]],
      decls: 307,
      vars: 0,
      consts: [[1, "page-header"], [1, "page-title"], [1, "row"], [1, "col-xl-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body", "d-flex", "flex-wrap", "gap-2"], [1, "badge", "bg-primary"], [1, "badge", "bg-secondary"], [1, "badge", "bg-success"], [1, "badge", "bg-danger"], [1, "badge", "bg-warning"], [1, "badge", "bg-info"], [1, "badge", "bg-light", "text-dark"], [1, "badge", "bg-dark", "text-white"], [1, "badge", "rounded-pill", "bg-primary"], [1, "badge", "rounded-pill", "bg-secondary"], [1, "badge", "rounded-pill", "bg-success"], [1, "badge", "rounded-pill", "bg-danger"], [1, "badge", "rounded-pill", "bg-warning"], [1, "badge", "rounded-pill", "bg-info"], [1, "badge", "rounded-pill", "bg-light", "text-dark"], [1, "badge", "rounded-pill", "bg-dark", "text-white"], [1, "badge", "bg-outline-primary"], [1, "badge", "bg-outline-secondary"], [1, "badge", "bg-outline-success"], [1, "badge", "bg-outline-danger"], [1, "badge", "bg-outline-warning"], [1, "badge", "bg-outline-info"], [1, "badge", "bg-outline-light", "text-dark"], [1, "badge", "bg-outline-dark", "text-dark"], [1, "badge", "rounded-pill", "bg-outline-primary"], [1, "badge", "rounded-pill", "bg-outline-secondary"], [1, "badge", "rounded-pill", "bg-outline-success"], [1, "badge", "rounded-pill", "bg-outline-danger"], [1, "badge", "rounded-pill", "bg-outline-warning"], [1, "badge", "rounded-pill", "bg-outline-info"], [1, "badge", "rounded-pill", "bg-outline-light", "text-dark"], [1, "badge", "rounded-pill", "bg-outline-dark", "text-dark"], [1, "badge", "bg-soft-primary"], [1, "badge", "bg-soft-secondary"], [1, "badge", "bg-soft-success"], [1, "badge", "bg-soft-danger"], [1, "badge", "bg-soft-warning"], [1, "badge", "bg-soft-info"], [1, "badge", "bg-soft-light", "text-dark"], [1, "badge", "bg-soft-dark"], [1, "badge", "rounded-pill", "bg-soft-primary"], [1, "badge", "rounded-pill", "bg-soft-secondary"], [1, "badge", "rounded-pill", "bg-soft-success"], [1, "badge", "rounded-pill", "bg-soft-danger"], [1, "badge", "rounded-pill", "bg-soft-warning"], [1, "badge", "rounded-pill", "bg-soft-info"], [1, "badge", "rounded-pill", "bg-soft-light", "text-dark"], [1, "badge", "rounded-pill", "bg-soft-dark"], [1, "card-body"], [1, "badge", "bg-primary", "me-1"], [1, "badge", "badge-xs", "bg-primary", "me-1"], [1, "badge", "badge-sm", "bg-secondary", "me-1"], [1, "badge", "badge-md", "bg-success", "me-1"], [1, "badge", "badge-lg", "bg-danger", "me-1"], [1, "badge", "badge-xl", "bg-warning"], [1, "card-body", "d-flex", "flex-wrap", "gap-4"], ["type", "button", 1, "btn", "btn-primary", "position-relative"], [1, "position-absolute", "top-0", "start-100", "translate-middle", "badge", "rounded-pill", "bg-danger"], [1, "visually-hidden"], ["type", "button", 1, "btn", "btn-secondary", "position-relative"], [1, "position-absolute", "top-0", "start-100", "translate-middle", "p-2", "bg-success", "border", "border-light", "rounded-circle"], [1, "avatar"], ["src", "assets/img/profiles/avator1.jpg", "alt", "img"], [1, "position-absolute", "top-0", "start-100", "translate-middle", "p-1", "bg-success", "border", "border-light", "rounded-circle"], [1, "avatar", "avatar-rounded"], [1, "position-absolute", "top-0", "start-100", "translate-middle", "badge", "bg-secondary", "rounded-pill", "shadow-lg"], ["type", "button", 1, "btn", "btn-primary", "my-1", "me-2"], [1, "badge", "ms-2", "bg-secondary"], ["type", "button", 1, "btn", "btn-success", "my-1", "me-2"], [1, "badge", "ms-2", "bg-danger"], ["type", "button", 1, "btn", "btn-danger", "my-1", "me-2"], [1, "badge", "ms-2", "bg-white", "text-dark"], ["type", "button", 1, "btn", "btn-outline-primary", "my-1", "me-2"], [1, "badge", "bg-primary", "ms-2"], ["type", "button", 1, "btn", "btn-outline-success", "my-1", "me-2"], [1, "badge", "bg-success", "ms-2"], ["type", "button", 1, "btn", "btn-outline-danger", "my-1", "me-2"], [1, "badge", "bg-danger", "ms-2"], [1, "col-xl-12"], [1, "badge", "bg-secondary", "me-1"], [1, "badge-label"], [1, "feather", "icon-plus", "ms-1", 2, "height", "12px", "width", "12px"], [1, "badge", "bg-success", "me-1"], [1, "feather", "icon-check", "ms-1", 2, "height", "12px", "width", "12px"], [1, "badge", "bg-info", "me-1"], [1, "feather", "icon-info", "ms-1", 2, "height", "12px", "width", "12px"], [1, "badge", "bg-warning", "me-1"], [1, "feather", "icon-alert-octagon", "ms-1", 2, "height", "12px", "width", "12px"], [1, "badge", "bg-danger", "me-1"], [1, "feather", "icon-x", "ms-1", 2, "height", "12px", "width", "12px"], [1, "badge", "bg-outline-secondary", "me-1"], [1, "badge", "bg-outline-success", "me-1"], [1, "badge", "bg-outline-info", "me-1"], [1, "badge", "bg-outline-warning", "me-1"], [1, "badge", "bg-outline-danger", "me-1"]],
      template: function UiBadgesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Badges");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Badges");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7)(11, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Primary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Secondary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Success");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Danger");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Warning");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Info");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Light");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Dark");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 3)(28, "div", 4)(29, "div", 5)(30, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Rounded Badges");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 7)(33, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Primary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Secondary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Success");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Danger");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Warning");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Info");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Light");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Dark");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 3)(50, "div", 4)(51, "div", 5)(52, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Outline Badges");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 7)(55, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Primary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Secondary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Success");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Danger");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Warning");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Info");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "span", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Light");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "span", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Dark");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 3)(72, "div", 4)(73, "div", 5)(74, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Outline Rounded Badges");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 7)(77, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Primary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Secondary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "span", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Success");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "span", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Danger");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "span", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Warning");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "span", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Info");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "span", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Light");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "span", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Dark");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 3)(94, "div", 4)(95, "div", 5)(96, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Soft Badges");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 7)(99, "span", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Primary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "span", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Secondary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "span", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Success");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "span", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Danger");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "span", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Warning");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "span", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Info");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Light");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "span", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Dark");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 3)(116, "div", 4)(117, "div", 5)(118, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Soft Rounded Badges");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 7)(121, "span", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Primary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "span", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Secondary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "span", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Success");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Danger");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "span", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Warning");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "span", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "Info");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "span", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "Light");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "span", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Dark");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 3)(138, "div", 4)(139, "div", 5)(140, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "Badge Sizes");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "div", 56)(143, "span", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "Default");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "span", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "XS");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "span", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "SM");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "span", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "MD");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "span", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "LG");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "span", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "XL");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 3)(156, "div", 4)(157, "div", 5)(158, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "Badge Usage");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 63)(161, "button", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, " Inbox ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "span", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, " 99+ ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "span", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "unread messages");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "button", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, " Profile ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "span", 68)(170, "span", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, "New alerts");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "span", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](173, "img", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "span", 71)(175, "span", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "New alerts");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "span", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](178, "img", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "span", 71)(180, "span", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "New alerts");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "span", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](183, "img", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "span", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "1000+ ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "span", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "New alerts");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "div", 3)(189, "div", 4)(190, "div", 5)(191, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, "Buttons With Badges ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "div", 7)(194, "button", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, " Notifications ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "span", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "button", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, " Notifications ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "span", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, "15");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "button", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, " Notifications ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "span", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, "24");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "div", 3)(207, "div", 4)(208, "div", 5)(209, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, "Outline Buttons With Badges ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "div", 7)(212, "button", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](213, " Notifications ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "span", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "button", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, " Notifications ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "span", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, "15");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "button", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](221, " Notifications ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "span", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, "24");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "div", 3)(225, "div", 4)(226, "div", 5)(227, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](228, "Headings");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "div", 56)(230, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](231, "Example heading ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](233, "New");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](235, "Example heading ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](237, "New");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](239, "Example heading ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](241, "New");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](243, "Example heading ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](245, "New");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](247, "Example heading ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](249, "New");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](251, "Example heading ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](253, "New");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "div", 3)(255, "div", 2)(256, "div", 86)(257, "div", 4)(258, "div", 5)(259, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](260, "Badge with icons");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "div", 56)(262, "span", 87)(263, "span", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](264, "Secondary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](265, "span", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "span", 90)(267, "span", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](268, "Success");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](269, "span", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "span", 92)(271, "span", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](272, "Info");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](273, "span", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "span", 94)(275, "span", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](276, "Warning");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](277, "span", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "span", 96)(279, "span", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](280, "Danger");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](281, "span", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](282, "div", 4)(283, "div", 5)(284, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](285, "Outline Badge with icons");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](286, "div", 56)(287, "span", 98)(288, "span", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](289, "Secondary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](290, "span", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "span", 99)(292, "span", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](293, "Success");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](294, "span", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](295, "span", 100)(296, "span", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](297, "Info");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](298, "span", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](299, "span", 101)(300, "span", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](301, "Warning");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](302, "span", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](303, "span", 102)(304, "span", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](305, "Danger");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](306, "span", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 33384:
/*!**********************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-badges/ui-badges.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiBadgesModule: () => (/* binding */ UiBadgesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ui_badges_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-badges-routing.module */ 20209);
/* harmony import */ var _ui_badges_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-badges.component */ 69333);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);




class UiBadgesModule {
  static {
    this.ɵfac = function UiBadgesModule_Factory(t) {
      return new (t || UiBadgesModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: UiBadgesModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_badges_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiBadgesRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UiBadgesModule, {
    declarations: [_ui_badges_component__WEBPACK_IMPORTED_MODULE_1__.UiBadgesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_badges_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiBadgesRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_base-ui_ui-badges_ui-badges_module_ts.js.map