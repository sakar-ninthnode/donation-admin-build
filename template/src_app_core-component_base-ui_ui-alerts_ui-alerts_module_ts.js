"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_base-ui_ui-alerts_ui-alerts_module_ts"],{

/***/ 93857:
/*!******************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-alerts/ui-alerts-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiAlertsRoutingModule: () => (/* binding */ UiAlertsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ui_alerts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-alerts.component */ 80453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _ui_alerts_component__WEBPACK_IMPORTED_MODULE_0__.UiAlertsComponent
}];
class UiAlertsRoutingModule {
  static {
    this.ɵfac = function UiAlertsRoutingModule_Factory(t) {
      return new (t || UiAlertsRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: UiAlertsRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UiAlertsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 80453:
/*!*************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-alerts/ui-alerts.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiAlertsComponent: () => (/* binding */ UiAlertsComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class UiAlertsComponent {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  static {
    this.ɵfac = function UiAlertsComponent_Factory(t) {
      return new (t || UiAlertsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UiAlertsComponent,
      selectors: [["app-ui-alerts"]],
      decls: 660,
      vars: 0,
      consts: [[1, "page-header"], [1, "page-title"], [1, "row"], [1, "col-xl-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["role", "alert", 1, "alert", "alert-primary"], ["role", "alert", 1, "alert", "alert-secondary"], ["role", "alert", 1, "alert", "alert-success"], ["role", "alert", 1, "alert", "alert-danger"], ["role", "alert", 1, "alert", "alert-warning"], ["role", "alert", 1, "alert", "alert-info"], ["role", "alert", 1, "alert", "alert-light"], ["role", "alert", 1, "alert", "alert-dark"], ["href", "javascript:void(0);", 1, "alert-link"], [1, "alert", "alert-solid-primary", "alert-dismissible", "fade", "show"], ["type", "button", "data-bs-dismiss", "alert", "aria-label", "Close", 1, "btn-close"], [1, "fas", "fa-xmark"], [1, "alert", "alert-solid-secondary", "alert-dismissible", "fade", "show"], [1, "alert", "alert-solid-info", "alert-dismissible", "fade", "show"], [1, "alert", "alert-solid-warning", "alert-dismissible", "fade", "show"], [1, "alert", "alert-solid-success", "alert-dismissible", "fade", "show"], [1, "alert", "alert-solid-danger", "alert-dismissible", "fade", "show"], [1, "alert", "alert-solid-light", "alert-dismissible", "fade", "show"], ["type", "button", "data-bs-dismiss", "alert", "aria-label", "Close", 1, "btn-close", "text-default"], [1, "alert", "alert-solid-dark", "alert-dismissible", "fade", "show", "text-white"], ["type", "button", "data-bs-dismiss", "alert", "aria-label", "Close", 1, "btn-close", "text-white"], [1, "alert", "alert-outline-primary", "alert-dismissible", "fade", "show"], [1, "alert", "alert-outline-secondary", "alert-dismissible", "fade", "show"], [1, "alert", "alert-outline-info", "alert-dismissible", "fade", "show"], [1, "alert", "alert-outline-warning", "alert-dismissible", "fade", "show"], [1, "alert", "alert-outline-success", "alert-dismissible", "fade", "show"], [1, "alert", "alert-outline-danger", "alert-dismissible", "fade", "show"], [1, "alert", "alert-outline-light", "alert-dismissible", "fade", "show"], [1, "alert", "alert-outline-dark", "alert-dismissible", "fade", "show"], [1, "alert", "alert-solid-primary", "rounded-pill", "alert-dismissible", "fade", "show"], [1, "alert", "alert-solid-secondary", "rounded-pill", "alert-dismissible", "fade", "show"], [1, "alert", "alert-solid-warning", "rounded-pill", "alert-dismissible", "fade", "show"], [1, "alert", "alert-solid-danger", "rounded-pill", "alert-dismissible", "fade", "show"], [1, "alert", "alert-outline-primary", "rounded-pill", "alert-dismissible", "fade", "show"], [1, "alert", "alert-outline-secondary", "rounded-pill", "alert-dismissible", "fade", "show"], [1, "alert", "alert-outline-warning", "rounded-pill", "alert-dismissible", "fade", "show"], [1, "alert", "alert-outline-danger", "rounded-pill", "alert-dismissible", "fade", "show"], [1, "card-header", "justify-content-between"], [1, "alert", "alert-primary", "rounded-pill", "alert-dismissible", "fade", "show"], [1, "alert", "alert-secondary", "rounded-pill", "alert-dismissible", "fade", "show"], [1, "alert", "alert-warning", "rounded-pill", "alert-dismissible", "fade", "show"], [1, "alert", "alert-danger", "rounded-pill", "alert-dismissible", "fade", "show"], ["type", "button", "data-bs-dismiss", "alert", "aria-label", "Close", 1, "btn-close", "custom-close"], ["role", "alert", 1, "alert", "alert-primary", "d-flex", "align-items-center"], [1, "feather", "icon-info", "flex-shrink-0", "me-2"], ["role", "alert", 1, "alert", "alert-success", "d-flex", "align-items-center"], [1, "feather", "icon-check-circle", "flex-shrink-0", "me-2"], ["role", "alert", 1, "alert", "alert-warning", "d-flex", "align-items-center"], [1, "feather", "icon-alert-triangle", "flex-shrink-0", "me-2"], ["role", "alert", 1, "alert", "alert-danger", "d-flex", "align-items-center"], [1, "feather", "icon-alert-octagon", "flex-shrink-0", "me-2"], ["role", "alert", 1, "alert", "alert-primary", "alert-dismissible", "fade", "show", "custom-alert-icon", "shadow-sm", "d-flex", "align-items-center"], ["role", "alert", 1, "alert", "alert-secondary", "alert-dismissible", "fade", "show", "custom-alert-icon", "shadow-sm", "d-flex", "align-items-center"], ["role", "alert", 1, "alert", "alert-warning", "alert-dismissible", "fade", "show", "custom-alert-icon", "shadow-sm", "d-flex", "align-items-center"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show", "custom-alert-icon", "shadow-sm", "d-flex", "align-items-centers"], [1, "col-xl-12"], [1, "card-body", "pb-0"], [1, "col-xl-3"], [1, "card", "border-0"], [1, "alert", "alert-primary", "border", "border-primary", "mb-0", "p-3"], [1, "d-flex", "align-items-start"], [1, "me-2"], [1, "feather", "icon-info", "flex-shrink-0"], [1, "text-primary", "w-100"], [1, "fw-semibold", "d-flex", "justify-content-between"], ["type", "button", "data-bs-dismiss", "alert", "aria-label", "Close", 1, "btn-close", "p-0"], [1, "fs-12", "op-8", "mb-1"], [1, "fs-12"], ["href", "javascript:void(0);", 1, "text-secondary", "fw-semibold", "me-2", "d-inline-block"], ["href", "javascript:void(0);", 1, "text-primary", "fw-semibold"], [1, "alert", "alert-secondary", "border", "border-secondary", "mb-0", "p-3"], [1, "feather", "icon-check-circle", "flex-shrink-0"], [1, "text-secondary", "w-100"], ["href", "javascript:void(0);", 1, "text-danger", "fw-semibold", "me-2", "d-inline-block"], ["href", "javascript:void(0);", 1, "text-secondary", "fw-semibold"], [1, "alert", "alert-warning", "border", "border-warning", "mb-0", "p-3"], [1, "feather", "icon-alert-triangle", "flex-shrink-0"], [1, "text-warning", "w-100"], ["href", "javascript:void(0);", 1, "text-dark", "fw-semibold", "me-2", "d-inline-block"], ["href", "javascript:void(0);", 1, "text-warning", "fw-semibold"], [1, "alert", "alert-danger", "border", "border-danger", "mb-0", "p-3"], [1, "feather", "icon-alert-octagon", "flex-shrink-0"], [1, "text-danger", "w-100"], ["href", "javascript:void(0);", 1, "text-info", "fw-semibold", "me-2", "d-inline-block"], ["href", "javascript:void(0);", 1, "text-danger", "fw-semibold"], [1, "alert", "alert-solid-primary", "border", "border-primary", "mb-0", "p-3"], [1, "text-fixed-white", "w-100"], ["href", "javascript:void(0);", 1, "text-fixed-white", "fw-semibold", "me-2", "op-7"], ["href", "javascript:void(0);", 1, "text-fixed-white", "fw-semibold"], [1, "alert", "alert-solid-secondary", "border", "border-secondary", "mb-0", "p-3"], ["href", "javascript:void(0);", 1, "text-fixed-white", "fw-semibold", "me-2"], [1, "alert", "alert-solid-warning", "border", "border-warning", "mb-0", "p-3"], [1, "alert", "alert-solid-danger", "border", "border-danger", "mb-0", "p-3"], ["role", "alert", 1, "alert", "alert-img", "alert-primary", "alert-dismissible", "fase", "show", "rounded-pill", "flex-wrap"], [1, "avatar", "avatar-sm", "me-3", "avatar-rounded"], ["src", "assets/img/profiles/avatar-01.jpg", "alt", "img"], ["role", "alert", 1, "alert", "alert-img", "alert-secondary", "alert-dismissible", "fase", "show", "rounded-pill", "flex-wrap"], ["src", "assets/img/profiles/avatar-02.jpg", "alt", "img"], ["role", "alert", 1, "alert", "alert-img", "alert-warning", "alert-dismissible", "fase", "show", "rounded-pill", "flex-wrap"], ["src", "assets/img/profiles/avatar-03.jpg", "alt", "img"], ["role", "alert", 1, "alert", "alert-img", "alert-danger", "alert-dismissible", "fase", "show", "rounded-pill", "flex-wrap"], ["src", "assets/img/profiles/avatar-04.jpg", "alt", "img"], ["role", "alert", 1, "alert", "alert-img", "alert-info", "alert-dismissible", "fase", "show", "rounded-pill", "flex-wrap"], ["src", "assets/img/profiles/avatar-05.jpg", "alt", "img"], ["role", "alert", 1, "alert", "alert-img", "alert-light", "alert-dismissible", "fase", "show", "rounded-pill", "flex-wrap"], ["src", "assets/img/profiles/avatar-06.jpg", "alt", "img"], ["role", "alert", 1, "alert", "alert-img", "alert-dark", "alert-dismissible", "fase", "show", "rounded-pill", "flex-wrap"], ["src", "assets/img/profiles/avatar-07.jpg", "alt", "img"], [1, "fas", "fa-xmark", "text-muted"], ["role", "alert", 1, "alert", "alert-img", "alert-primary", "alert-dismissible", "fase", "show", "flex-wrap"], [1, "avatar", "avatar-xs", "me-3"], ["role", "alert", 1, "alert", "alert-img", "alert-secondary", "alert-dismissible", "fase", "show", "flex-wrap"], [1, "avatar", "avatar-sm", "me-3"], ["role", "alert", 1, "alert", "alert-img", "alert-warning", "alert-dismissible", "fase", "show", "flex-wrap"], [1, "avatar", "me-3"], ["role", "alert", 1, "alert", "alert-img", "alert-danger", "alert-dismissible", "fase", "show", "flex-wrap"], [1, "avatar", "avatar-md", "me-3"], ["role", "alert", 1, "alert", "alert-img", "alert-info", "alert-dismissible", "fase", "show", "flex-wrap"], [1, "avatar", "avatar-lg", "me-3"], ["role", "alert", 1, "alert", "alert-img", "alert-dark", "alert-dismissible", "fase", "show", "flex-wrap"], [1, "avatar", "avatar-xl", "me-3"], [1, "col-xxl-3", "col-xl-6", "col-lg-6", "col-md-6", "col-sm-6", "col-12"], [1, "card", "bg-white", "border-0"], [1, "alert", "custom-alert1", "alert-primary"], ["type", "button", "data-bs-dismiss", "alert", "aria-label", "Close", 1, "btn-close", "ms-auto"], [1, "text-center", "px-5", "pb-0"], [1, "custom-alert-icon"], [1, ""], [1, "btn", "btn-sm", "btn-outline-danger", "m-1"], [1, "btn", "btn-sm", "btn-primary", "m-1"], [1, "alert", "custom-alert1", "alert-secondary"], [1, "btn", "btn-sm", "btn-secondary", "m-1"], [1, "alert", "custom-alert1", "alert-warning"], [1, "btn", "btn-sm", "btn-outline-secondary", "m-1"], [1, "btn", "btn-sm", "btn-warning", "m-1"], [1, "alert", "custom-alert1", "alert-danger"], [1, "btn", "btn-sm", "btn-danger", "m-1"], [1, "row", "gy-3"], ["role", "alert", 1, "alert", "alert-primary", "overflow-hidden", "p-0"], [1, "p-3", "bg-primary", "text-fixed-white", "d-flex", "justify-content-between"], [1, "aletr-heading", "mb-0", "text-fixed-white"], ["type", "button", "data-bs-dismiss", "alert", "aria-label", "Close", 1, "btn-close", "p-0", "text-fixed-white"], [1, "my-0"], [1, "p-3"], [1, "mb-0"], ["href", "javascript:void(0);", 1, "fw-semibold", "text-decoration-underline", "text-primary"], ["role", "alert", 1, "alert", "alert-secondary", "overflow-hidden", "p-0"], [1, "p-3", "bg-secondary", "text-fixed-white", "d-flex", "justify-content-between"], ["href", "javascript:void(0);", 1, "fw-semibold", "text-decoration-underline", "text-secondary"], ["role", "alert", 1, "alert", "alert-success", "overflow-hidden", "p-0"], [1, "p-3", "bg-success", "text-fixed-white", "d-flex", "justify-content-between"], ["href", "javascript:void(0);", 1, "fw-semibold", "text-decoration-underline", "text-success"], ["role", "alert", 1, "alert", "alert-warning", "overflow-hidden", "p-0"], [1, "p-3", "bg-warning", "text-fixed-white", "d-flex", "justify-content-between"], ["href", "javascript:void(0);", 1, "fw-semibold", "text-decoration-underline", "text-warning"]],
      template: function UiAlertsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Alerts");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Default Alerts");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7)(11, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " A simple primary alert\u2014check it out! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " A simple secondary alert\u2014check it out! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " A simple success alert\u2014check it out! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " A simple danger alert\u2014check it out! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " A simple warning alert\u2014check it out! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " A simple info alert\u2014check it out! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " A simple light alert\u2014check it out! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " A simple dark alert\u2014check it out! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 3)(28, "div", 4)(29, "div", 5)(30, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Links in alerts");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 7)(33, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " A simple primary alert with ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "an example link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, ". Give it a click if you like. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " A simple secondary alert with ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "an example link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, ". Give it a click if you like. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " A simple success alert with ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "an example link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, ". Give it a click if you like. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " A simple danger alert with ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "an example link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, ". Give it a click if you like. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " A simple warning alert with ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "an example link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, ". Give it a click if you like. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, " A simple info alert with ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "an example link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, ". Give it a click if you like. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, " A simple light alert with ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "an example link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, ". Give it a click if you like. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, " A simple dark alert with ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "an example link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, ". Give it a click if you like. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 3)(74, "div", 4)(75, "div", 5)(76, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Solid Colored Alerts");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 7)(79, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, " A simple solid primary alert\u2014check it out! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, " A simple solid secondary alert\u2014check it out! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, " A simple solid info alert\u2014check it out! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, " A simple solid warning alert\u2014check it out! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, " A simple solid success alert\u2014check it out! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, " A simple solid danger alert\u2014check it out! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, " A simple solid light alert\u2014check it out! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, " A simple solid dark alert\u2014check it out! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "button", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 3)(112, "div", 4)(113, "div", 5)(114, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Outline Alerts ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 7)(117, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, " A simple outline primary alert\u2014check it out! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](120, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, " A simple outline secondary alert\u2014check it out! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, " A simple outline info alert\u2014check it out! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](128, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, " A simple outline warning alert\u2014check it out! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, " A simple outline success alert\u2014check it out! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](136, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, " A simple outline danger alert\u2014check it out! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](140, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, " A simple outline light alert\u2014check it out! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](144, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, " A simple outline dark alert\u2014check it out! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](148, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 3)(150, "div", 4)(151, "div", 5)(152, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "Rounded Solid Alerts");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 7)(155, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, " A simple solid rounded primary alert\u2014check it out! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](158, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, " A simple solid rounded secondary alert\u2014check it out! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](162, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, " A simple solid rounded warning alert\u2014check it out! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](166, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "div", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, " A simple solid rounded danger alert\u2014check it out! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](170, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div", 3)(172, "div", 4)(173, "div", 5)(174, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "Rounded Outline Alerts");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "div", 7)(177, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, " A simple outline rounded primary alert\u2014check it out! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](180, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, " A simple outline rounded secondary alert\u2014check it out! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](184, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, " A simple outline rounded warning alert\u2014check it out! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](188, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, " A simple outline rounded danger alert\u2014check it out! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](192, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "div", 3)(194, "div", 4)(195, "div", 45)(196, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, " Rounded Default Alerts ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "div", 7)(199, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, " A simple rounded primary alert\u2014check it out! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](202, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "div", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, " A simple rounded secondary alert\u2014check it out! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](206, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "div", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](208, " A simple rounded warning alert\u2014check it out! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](210, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "div", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, " A simple rounded danger alert\u2014check it out! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](214, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "div", 3)(216, "div", 4)(217, "div", 45)(218, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, " Rounded Alerts With Custom Close Button ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "div", 7)(221, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](222, " A simple rounded primary alert\u2014check it out! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "button", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](224, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "div", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](226, " A simple rounded secondary alert\u2014check it out! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "button", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](228, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "div", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](230, " A simple rounded warning alert\u2014check it out! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "button", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](232, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "div", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](234, " A simple rounded danger alert\u2014check it out! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "button", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](236, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "div", 3)(238, "div", 4)(239, "div", 5)(240, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](241, "Alerts with icons");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "div", 7)(243, "div", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](244, "i", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](246, " An example alert with an icon ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "div", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](248, "i", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](250, " An example success alert with an icon ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "div", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](252, "i", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](254, " An example warning alert with an icon ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "div", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](256, "i", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](258, " An example danger alert with an icon ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "div", 3)(260, "div", 4)(261, "div", 5)(262, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](263, "Customized Alerts With Icons");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "div", 7)(265, "div", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](266, "i", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](267, " A customized primary alert with an icon ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](269, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "div", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](271, "i", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](272, " A customized secondary alert with an icon ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](274, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](275, "div", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](276, "i", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](277, " A customized warning alert with an icon ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](279, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "div", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](281, "i", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](282, " A customized danger alert with an icon ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](283, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](284, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](285, "div", 63)(286, "div", 4)(287, "div", 64)(288, "div", 2)(289, "div", 65)(290, "div", 66)(291, "div", 67)(292, "div", 68)(293, "div", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](294, "i", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](295, "div", 71)(296, "div", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](297, "Information Alert");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](298, "button", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](299, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "div", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](301, "Information alert to show to information message");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "div", 75)(303, "a", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](304, "cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](305, "a", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](306, "open");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](307, "div", 65)(308, "div", 66)(309, "div", 78)(310, "div", 68)(311, "div", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](312, "i", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](313, "div", 80)(314, "div", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](315, "Success Alert");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](316, "button", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](317, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](318, "div", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](319, "Success alert to show to success message");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](320, "div", 75)(321, "a", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](322, "cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](323, "a", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](324, "open");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](325, "div", 65)(326, "div", 66)(327, "div", 83)(328, "div", 68)(329, "div", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](330, "i", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](331, "div", 85)(332, "div", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](333, "Warning Alert");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](334, "button", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](335, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](336, "div", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](337, "Warning alert to show warning message");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](338, "div", 75)(339, "a", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](340, "cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](341, "a", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](342, "open");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](343, "div", 65)(344, "div", 66)(345, "div", 88)(346, "div", 68)(347, "div", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](348, "i", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](349, "div", 90)(350, "div", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](351, "Danger Alert");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](352, "button", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](353, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](354, "div", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](355, "Danger alert to show the danger message");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](356, "div", 75)(357, "a", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](358, "cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](359, "a", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](360, "open");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](361, "div", 2)(362, "div", 65)(363, "div", 66)(364, "div", 93)(365, "div", 68)(366, "div", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](367, "i", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](368, "div", 94)(369, "div", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](370, "Information Alert");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](371, "button", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](372, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](373, "div", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](374, "Information alert to show to information message");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](375, "div", 75)(376, "a", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](377, "cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](378, "a", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](379, "open");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](380, "div", 65)(381, "div", 66)(382, "div", 97)(383, "div", 68)(384, "div", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](385, "i", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](386, "div", 94)(387, "div", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](388, "Success Alert");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](389, "button", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](390, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](391, "div", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](392, "Success alert to show to success message");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](393, "div", 75)(394, "a", 98);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](395, "close");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](396, "div", 65)(397, "div", 66)(398, "div", 99)(399, "div", 68)(400, "div", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](401, "i", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](402, "div", 94)(403, "div", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](404, "Warning Alert");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](405, "button", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](406, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](407, "div", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](408, "Warning alert to show to warning message");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](409, "div", 75)(410, "a", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](411, "skip");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](412, "a", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](413, "open");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](414, "div", 65)(415, "div", 66)(416, "div", 100)(417, "div", 68)(418, "div", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](419, "i", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](420, "div", 94)(421, "div", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](422, "Danger Alert");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](423, "button", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](424, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](425, "div", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](426, "Danger alert to show to danger message");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](427, "div", 75)(428, "a", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](429, "close");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](430, "a", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](431, "continue");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](432, "div", 3)(433, "div", 4)(434, "div", 45)(435, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](436, " Alerts With Images ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](437, "div", 7)(438, "div", 101)(439, "div", 102);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](440, "img", 103);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](441, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](442, "A simple primary alert with image\u2014check it out!");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](443, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](444, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](445, "div", 104)(446, "div", 102);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](447, "img", 105);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](448, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](449, "A simple secondary alert with image\u2014check it out!");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](450, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](451, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](452, "div", 106)(453, "div", 102);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](454, "img", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](455, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](456, "A simple warning alert with image\u2014check it out!");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](457, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](458, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](459, "div", 108)(460, "div", 102);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](461, "img", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](462, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](463, "A simple danger alert with image\u2014check it out!");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](464, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](465, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](466, "div", 110)(467, "div", 102);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](468, "img", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](469, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](470, "A simple info alert with image\u2014check it out!");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](471, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](472, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](473, "div", 112)(474, "div", 102);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](475, "img", 113);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](476, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](477, "A simple light alert with image\u2014check it out!");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](478, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](479, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](480, "div", 114)(481, "div", 102);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](482, "img", 115);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](483, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](484, "A simple dark alert with image\u2014check it out!");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](485, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](486, "i", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](487, "div", 3)(488, "div", 4)(489, "div", 45)(490, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](491, " Alerts With Different size Images ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](492, "div", 7)(493, "div", 117)(494, "div", 118);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](495, "img", 105);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](496, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](497, "A simple primary alert with image\u2014check it out!");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](498, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](499, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](500, "div", 119)(501, "div", 120);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](502, "img", 105);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](503, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](504, "A simple secondary alert with image\u2014check it out!");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](505, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](506, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](507, "div", 121)(508, "div", 122);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](509, "img", 105);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](510, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](511, "A simple warning alert with image\u2014check it out!");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](512, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](513, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](514, "div", 123)(515, "div", 124);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](516, "img", 105);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](517, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](518, "A simple danger alert with image\u2014check it out!");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](519, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](520, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](521, "div", 125)(522, "div", 126);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](523, "img", 105);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](524, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](525, "A simple info alert with image\u2014check it out!");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](526, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](527, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](528, "div", 127)(529, "div", 128);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](530, "img", 105);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](531, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](532, "A simple info alert with image\u2014check it out!");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](533, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](534, "i", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](535, "div", 63)(536, "div", 2)(537, "div", 129)(538, "div", 130)(539, "div", 131)(540, "button", 132);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](541, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](542, "div", 133)(543, "div", 134);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](544, "i", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](545, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](546, "Information?");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](547, "p", 135);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](548, "This alert is created to just show the related information.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](549, "div", 135)(550, "button", 136);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](551, "Decline");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](552, "button", 137);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](553, "Accept");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](554, "div", 129)(555, "div", 130)(556, "div", 138)(557, "button", 132);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](558, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](559, "div", 133)(560, "div", 134);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](561, "i", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](562, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](563, "Confirmed");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](564, "p", 135);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](565, "This alert is created to just show the confirmation message.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](566, "div", 135)(567, "button", 139);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](568, "Close");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](569, "div", 129)(570, "div", 130)(571, "div", 140)(572, "button", 132);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](573, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](574, "div", 133)(575, "div", 134);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](576, "i", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](577, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](578, "Warning");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](579, "p", 135);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](580, "This alert is created to just show the warning message.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](581, "div", 135)(582, "button", 141);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](583, "Back");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](584, "button", 142);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](585, "Continue");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](586, "div", 129)(587, "div", 130)(588, "div", 143)(589, "button", 132);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](590, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](591, "div", 133)(592, "div", 134);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](593, "i", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](594, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](595, "danger");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](596, "p", 135);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](597, "This alert is created to just show the danger message.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](598, "div", 135)(599, "button", 144);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](600, "Delete");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](601, "div", 63)(602, "div", 4)(603, "div", 45)(604, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](605, " Additional content ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](606, "div", 7)(607, "div", 145)(608, "div", 3)(609, "div", 146)(610, "div", 147)(611, "h6", 148);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](612, "Thank you for reporting this.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](613, "button", 149);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](614, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](615, "hr", 150);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](616, "div", 151)(617, "p", 152);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](618, "We appreciate you to let us know the bug in the template and for warning us about future consequences ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](619, "a", 153);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](620, "Visit for support for queries ?");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](621, "div", 3)(622, "div", 154)(623, "div", 155)(624, "h6", 148);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](625, "Thank you for reporting this.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](626, "button", 149);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](627, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](628, "hr", 150);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](629, "div", 151)(630, "p", 152);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](631, "We appreciate you to let us know the bug in the template and for warning us about future consequences ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](632, "a", 156);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](633, "Visit for support for queries ?");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](634, "div", 3)(635, "div", 157)(636, "div", 158)(637, "h6", 148);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](638, "Thank you for reporting this.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](639, "button", 149);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](640, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](641, "hr", 150);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](642, "div", 151)(643, "p", 152);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](644, "We appreciate you to let us know the bug in the template and for warning us about future consequences ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](645, "a", 159);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](646, "Visit for support for queries ?");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](647, "div", 3)(648, "div", 160)(649, "div", 161)(650, "h6", 148);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](651, "Thank you for reporting this.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](652, "button", 149);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](653, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](654, "hr", 150);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](655, "div", 151)(656, "p", 152);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](657, "We appreciate you to let us know the bug in the template and for warning us about future consequences ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](658, "a", 162);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](659, "Visit for support for queries ?");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3736:
/*!**********************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-alerts/ui-alerts.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiAlertsModule: () => (/* binding */ UiAlertsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ui_alerts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-alerts-routing.module */ 93857);
/* harmony import */ var _ui_alerts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-alerts.component */ 80453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);




class UiAlertsModule {
  static {
    this.ɵfac = function UiAlertsModule_Factory(t) {
      return new (t || UiAlertsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: UiAlertsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_alerts_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiAlertsRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UiAlertsModule, {
    declarations: [_ui_alerts_component__WEBPACK_IMPORTED_MODULE_1__.UiAlertsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_alerts_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiAlertsRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_base-ui_ui-alerts_ui-alerts_module_ts.js.map