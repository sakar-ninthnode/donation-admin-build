"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_base-ui_ui-popovers_ui-popovers_module_ts"],{

/***/ 20373:
/*!**********************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-popovers/ui-popovers-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiPopoversRoutingModule: () => (/* binding */ UiPopoversRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ui_popovers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-popovers.component */ 25769);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _ui_popovers_component__WEBPACK_IMPORTED_MODULE_0__.UiPopoversComponent
}];
class UiPopoversRoutingModule {
  static {
    this.ɵfac = function UiPopoversRoutingModule_Factory(t) {
      return new (t || UiPopoversRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: UiPopoversRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UiPopoversRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 25769:
/*!*****************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-popovers/ui-popovers.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiPopoversComponent: () => (/* binding */ UiPopoversComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/popover */ 64393);



class UiPopoversComponent {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  static {
    this.ɵfac = function UiPopoversComponent_Factory(t) {
      return new (t || UiPopoversComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UiPopoversComponent,
      selectors: [["app-ui-popovers"]],
      decls: 127,
      vars: 0,
      consts: [[1, "page-header"], [1, "page-title"], [1, "row"], [1, "col-xl-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "btn-list", "popover-list"], ["tabindex", "0", "role", "button", "popover", "And here's some amazing content. It's very engaging. Right?", "popoverTitle", "Popover Top", "placement", "top", "data-bs-toggle", "popover", "data-bs-placement", "top", "data-bs-content", "And here's some amazing content. It's very engaging. Right?", 1, "btn", "btn-outline-primary", "btn-wave"], ["tabindex", "0", "role", "button", "data-bs-toggle", "popover", "popover", "And here's some amazing content. It's very engaging. Right?", "popoverTitle", "Popover Right", "placement", "right", "data-bs-placement", "right", "data-bs-content", "And here's some amazing content. It's very engaging. Right?", 1, "btn", "btn-outline-primary", "btn-wave"], ["tabindex", "0", "role", "button", "data-bs-toggle", "popover", "popover", "And here's some amazing content. It's very engaging. Right?", "popoverTitle", "Popover Bottom", "placement", "bottom", "data-bs-placement", "bottom", "data-bs-content", "And here's some amazing content. It's very engaging. Right?", 1, "btn", "btn-outline-primary", "btn-wave"], ["tabindex", "0", "role", "button", "data-bs-toggle", "popover", "popover", "And here's some amazing content. It's very engaging. Right?", "popoverTitle", "Popover Left", "placement", "left", "data-bs-placement", "left", "data-bs-content", "And here's some amazing content. It's very engaging. Right?", 1, "btn", "btn-outline-primary", "btn-wave"], ["type", "button", "data-bs-toggle", "popover", "data-bs-content", "And here's some amazing content. It's very engaging. Right?", "popover", "And here's some amazing content. It's very engaging. Right?", "popoverTitle", "Popover Title", "data-bs-original-title", "Popover title", 1, "btn", "btn-primary"], ["tabindex", "0", "role", "button", "data-bs-toggle", "popover", "data-bs-trigger", "focus", "popover", "And here's some amazing content. It's very engaging. Right?", "popoverTitle", "Popover title", "triggers", "focus", "data-bs-content", "And here's some amazing content. It's very engaging. Right?", "data-bs-original-title", "Popover title", 1, "example-popover", "btn", "btn-primary"], ["type", "button", "data-bs-trigger", "hover", "data-container", "body", "data-bs-toggle", "popover", "data-bs-placement", "bottom", "popoverTitle", "Popover title", "popover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "triggers", "mouseenter:mouseleave", "data-offset", "-20px -20px", "data-bs-content", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "data-bs-original-title", "Popover title", 1, "example-popover", "btn", "btn-primary"], ["type", "button", "data-bs-toggle", "popover", "data-bs-placement", "top", "data-bs-custom-class", "header-primary", "data-bs-content", "Popover with primary header.", "popover", "Popover with primary header.", "popoverTitle", "Color Header", "placement", "top", "containerClass", "primary-color-popover", 1, "btn", "btn-outline-primary", "btn-wave"], ["type", "button", "data-bs-toggle", "popover", "data-bs-placement", "right", "data-bs-custom-class", "header-secondary", "data-bs-content", "Popover with secondary header.", "popover", "Popover with secondary header.", "popoverTitle", "Color Header", "placement", "right", "containerClass", "secondary-color-popover", 1, "btn", "btn-outline-secondary", "btn-wave"], ["type", "button", "data-bs-toggle", "popover", "data-bs-placement", "bottom", "data-bs-custom-class", "header-info", "data-bs-content", "Popover with info header.", "popover", "Popover with info header.", "popoverTitle", "Color Header", "placement", "bottom", "containerClass", "info-color-popover", 1, "btn", "btn-outline-info", "btn-wave"], ["type", "button", "data-bs-toggle", "popover", "data-bs-placement", "left", "data-bs-custom-class", "header-warning", "data-bs-content", "Popover with warning header.", "popover", "Popover with warning header.", "popoverTitle", "Color Header", "placement", "left", "containerClass", "warning-color-popover", 1, "btn", "btn-outline-warning", "btn-wave"], ["type", "button", "data-bs-toggle", "popover", "data-bs-placement", "top", "data-bs-custom-class", "header-success", "data-bs-content", "Popover with success header.", "popover", "Popover with success header.", "popoverTitle", "Color Header", "placement", "top", "containerClass", "success-color-popover", 1, "btn", "btn-outline-success", "btn-wave"], ["type", "button", "data-bs-toggle", "popover", "data-bs-placement", "top", "data-bs-custom-class", "header-danger", "data-bs-content", "Popover with danger header.", "popover", "Popover with danger header.", "popoverTitle", "Color Header", "placement", "top", "containerClass", "danger-color-popover", 1, "btn", "btn-outline-danger", "btn-wave"], ["type", "button", "data-bs-toggle", "popover", "data-bs-placement", "top", "data-bs-custom-class", "popover-primary", "data-bs-content", "Popover with primary background.", "popover", "Popover with primary background.", "popoverTitle", "Color Background", "placement", "top", "containerClass", "primary-background-popover", 1, "btn", "btn-primary", "btn-wave"], ["type", "button", "data-bs-toggle", "popover", "data-bs-placement", "right", "data-bs-custom-class", "popover-secondary", "data-bs-content", "Popover with secondary background.", "popover", "Popover with secondary background.", "popoverTitle", "Color Background", "placement", "right", "containerClass", "secondary-background-popover", 1, "btn", "btn-secondary", "btn-wave"], ["type", "button", "data-bs-toggle", "popover", "data-bs-placement", "bottom", "data-bs-custom-class", "popover-info", "data-bs-content", "Popover with info background.", "popover", "Popover with info background.", "popoverTitle", "Color Background", "placement", "bottom", "containerClass", "info-background-popover", 1, "btn", "btn-info", "btn-wave"], ["type", "button", "data-bs-toggle", "popover", "data-bs-placement", "left", "data-bs-custom-class", "popover-warning", "data-bs-content", "Popover with warning background.", "popover", "Popover with warning background.", "popoverTitle", "Color Background", "placement", "left", "containerClass", "warning-background-popover", 1, "btn", "btn-warning", "btn-wave"], ["type", "button", "data-bs-toggle", "popover", "data-bs-placement", "top", "data-bs-custom-class", "popover-success", "data-bs-content", "Popover with success background.", "popover", "Popover with success background.", "popoverTitle", "Color Background", "placement", "top", "containerClass", "success-background-popover", 1, "btn", "btn-success", "btn-wave"], ["type", "button", "data-bs-toggle", "popover", "data-bs-placement", "right", "data-bs-custom-class", "popover-danger", "data-bs-content", "Popover with danger background.", "popover", "Popover with danger background.", "popoverTitle", "Color Background", "placement", "right", "containerClass", "danger-background-popover", 1, "btn", "btn-danger", "btn-wave"], ["type", "button", "data-bs-toggle", "popover", "data-bs-placement", "bottom", "data-bs-custom-class", "popover-teal", "data-bs-content", "Popover with teal background.", "popover", "Popover with teal background.", "popoverTitle", "Color Background", "placement", "bottom", "containerClass", "teal-background-popover", 1, "btn", "btn-teal", "btn-wave"], ["type", "button", "data-bs-toggle", "popover", "data-bs-placement", "left", "data-bs-custom-class", "popover-purple", "data-bs-content", "Popover with purple background.", "popover", "Popover with purple background.", "popoverTitle", "Color Background", "placement", "left", "containerClass", "purple-background-popover", 1, "btn", "btn-purple", "btn-wave"], ["type", "button", "data-bs-toggle", "popover", "data-bs-placement", "top", "data-bs-custom-class", "popover-primary-light", "data-bs-content", "Popover with light primary background.", "popover", "Popover with light primary background.", "popoverTitle", "Light Background", "placement", "top", "containerClass", "primary-light-popover", 1, "btn", "btn-soft-primary", "btn-wave"], ["type", "button", "data-bs-toggle", "popover", "data-bs-placement", "right", "data-bs-custom-class", "popover-secondary-light", "data-bs-content", "Popover with light secondary background.", "popover", "Popover with light primary background.", "popoverTitle", "Light Background", "placement", "right", "containerClass", "secondary-light-popover", 1, "btn", "btn-soft-secondary", "btn-wave"], ["type", "button", "data-bs-toggle", "popover", "data-bs-placement", "bottom", "data-bs-custom-class", "popover-info-light", "data-bs-content", "Popover with light info background.", "popover", "Popover with light info background.", "popoverTitle", "Light Background", "placement", "bottom", "containerClass", "info-light-popover", 1, "btn", "btn-soft-info", "btn-wave"], ["type", "button", "data-bs-toggle", "popover", "data-bs-placement", "left", "data-bs-custom-class", "popover-warning-light", "data-bs-content", "Popover with light warning background.", "popover", "Popover with light warning background.", "popoverTitle", "Light Background", "placement", "left", "containerClass", "warning-light-popover", 1, "btn", "btn-soft-warning", "btn-wave"], ["type", "button", "data-bs-toggle", "popover", "data-bs-placement", "top", "data-bs-custom-class", "popover-success-light", "data-bs-content", "Popover with light success background.", "popover", "Popover with light success background.", "popoverTitle", "Light Background", "placement", "top", "containerClass", "success-light-popover", 1, "btn", "btn-soft-success", "btn-wave"], ["type", "button", "data-bs-toggle", "popover", "data-bs-placement", "right", "data-bs-custom-class", "popover-danger-light", "data-bs-content", "Popover with light danger background.", "popover", "Popover with light danger background.", "popoverTitle", "Light Background", "placement", "top", "containerClass", "danger-light-popover", 1, "btn", "btn-soft-danger", "btn-wave"], [1, "card", "custom-card"], [1, "card-header", "justify-content-between"], [1, "card-body", "d-flex", "flex-wrap", "justify-content-between"], ["tabindex", "0", "role", "button", "data-bs-toggle", "popover", "data-bs-trigger", "focus", "data-bs-placement", "top", "data-bs-content", "And here's some amazing content. It's very engaging. Right?", "popover", "And here's some amazing content. It's very engaging. Right?", "popoverTitle", "Dismissible popover", "triggers", "focus", 1, "custom-popover", "btn", "btn-primary", "m-1"], ["tabindex", "0", "role", "button", "data-bs-toggle", "popover", "data-bs-trigger", "focus", "data-bs-placement", "right", "data-bs-content", "And here's some amazing content. It's very engaging. Right?", "popover", "And here's some amazing content. It's very engaging. Right?", "popoverTitle", "Dismissible popover", "triggers", "focus", 1, "custom-popover", "btn", "btn-secondary", "m-1"], ["tabindex", "0", "role", "button", "data-bs-toggle", "popover", "data-bs-trigger", "focus", "data-bs-placement", "bottom", "data-bs-content", "And here's some amazing content. It's very engaging. Right?", "popover", "And here's some amazing content. It's very engaging. Right?", "popoverTitle", "Dismissible popover", "triggers", "focus", 1, "custom-popover", "btn", "btn-info", "m-1"], ["tabindex", "0", "role", "button", "data-bs-toggle", "popover", "data-bs-trigger", "focus", "data-bs-placement", "left", "data-bs-content", "And here's some amazing content. It's very engaging. Right?", "popover", "And here's some amazing content. It's very engaging. Right?", "popoverTitle", "Dismissible popover", "triggers", "focus", 1, "custom-popover", "btn", "btn-warning", "m-1"], ["tabindex", "0", "data-bs-toggle", "popover", "data-bs-trigger", "hover focus", "data-bs-content", "Disabled popover", "popover", "Disabled popover", "triggers", "mouseenter:mouseleave", 1, "d-inline-block", "custom-disabled-span"], ["type", "button", "disabled", "", 1, "btn", "btn-primary"], [1, "card-body", "d-flex"], ["href", "javascript:void(0)", "data-bs-toggle", "popover", "data-bs-placement", "top", "data-bs-custom-class", "popover-primary only-body", "data-bs-content", "This popover is used to provide details about this icon.", "popover", "This popover is used to provide details about this icon.", "placement", "top", "containerClass", "icon-popover-details", 1, "me-4", "feather-size", "d-block"], [1, "feather", "icon-alert-circle", "text-primary"], ["href", "javascript:void(0)", "data-bs-toggle", "popover", "data-bs-placement", "left", "data-bs-custom-class", "popover-secondary only-body", "data-bs-content", "This popover is used to provide information about this icon.", "popover", "This popover is used to provide information about this icon.", "containerClass", "icon-popover-information", 1, "me-4", "feather-size", "d-block"], [1, "feather", "icon-help-circle", "text-secondary"]],
      template: function UiPopoversComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Popovers");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Default Popovers");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Popover Top ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Popover Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Popover Bottom");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Popover Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 3)(21, "div", 4)(22, "div", 5)(23, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Basic Popovers");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 7)(26, "div", 8)(27, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Click to toggle popover");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Dismissible popover");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "On Hover Tooltip");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 3)(34, "div", 4)(35, "div", 5)(36, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Colored Headers");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 7)(39, "div", 8)(40, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " Header Primary ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " Header Secondary ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Header Info ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " Header Warning ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " Header Success ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " Header Danger ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 3)(53, "div", 4)(54, "div", 5)(55, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Colored Popovers");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 7)(58, "div", 8)(59, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " Primary ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " Secondary ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, " Info ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, " Warning ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " Success ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "button", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, " Danger ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "button", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, " Teal ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "button", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, " Purple ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 3)(76, "div", 4)(77, "div", 5)(78, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Light Colored Popovers");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 7)(81, "div", 8)(82, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, " Primary ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "button", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, " Secondary ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "button", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, " Info ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "button", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, " Warning ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "button", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, " Success ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "button", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, " Danger ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 3)(95, "div", 36)(96, "div", 37)(97, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, " Dismissible Popovers ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 38)(100, "a", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "Popover Dismiss ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "a", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Popover Dismiss ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "a", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Popover Dismiss ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "a", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Popover Dismiss ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 3)(109, "div", 4)(110, "div", 37)(111, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, " Disabled Popover ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 7)(114, "span", 43)(115, "button", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Disabled button");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 3)(118, "div", 4)(119, "div", 37)(120, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, " Icon Popovers ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 45)(123, "a", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "i", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "a", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "i", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
      },
      dependencies: [ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_2__.PopoverDirective],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 55676:
/*!**************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-popovers/ui-popovers.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiPopoversModule: () => (/* binding */ UiPopoversModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ui_popovers_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-popovers-routing.module */ 20373);
/* harmony import */ var _ui_popovers_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-popovers.component */ 25769);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);





class UiPopoversModule {
  static {
    this.ɵfac = function UiPopoversModule_Factory(t) {
      return new (t || UiPopoversModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: UiPopoversModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ui_popovers_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiPopoversRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.sharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](UiPopoversModule, {
    declarations: [_ui_popovers_component__WEBPACK_IMPORTED_MODULE_1__.UiPopoversComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ui_popovers_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiPopoversRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.sharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_base-ui_ui-popovers_ui-popovers_module_ts.js.map