"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_base-ui_ui-toasts_ui-toasts_module_ts"],{

/***/ 6481:
/*!******************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-toasts/ui-toasts-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiToastsRoutingModule: () => (/* binding */ UiToastsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ui_toasts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-toasts.component */ 22869);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _ui_toasts_component__WEBPACK_IMPORTED_MODULE_0__.UiToastsComponent
}];
class UiToastsRoutingModule {
  static {
    this.ɵfac = function UiToastsRoutingModule_Factory(t) {
      return new (t || UiToastsRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: UiToastsRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UiToastsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 22869:
/*!*************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-toasts/ui-toasts.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiToastsComponent: () => (/* binding */ UiToastsComponent)
/* harmony export */ });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/toast */ 61225);





class UiToastsComponent {
  constructor(messageService) {
    this.messageService = messageService;
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  show() {
    this.messageService.add({
      summary: 'Toast',
      detail: 'Hello, world! This is a toast message.'
    });
  }
  showPrimaryColor() {
    this.messageService.add({
      summary: 'Toast',
      detail: 'Your,toast message here.',
      styleClass: 'primary-light-popover'
    });
  }
  showSecondaryColor() {
    this.messageService.add({
      summary: 'Toast',
      detail: 'Your,toast message here.',
      styleClass: 'secondary-light-popover'
    });
  }
  showWarningColor() {
    this.messageService.add({
      summary: 'Toast',
      detail: 'Your,toast message here.',
      styleClass: 'primary-light-popover'
    });
  }
  showInfoColor() {
    this.messageService.add({
      summary: 'Toast',
      detail: 'Your,toast message here.',
      styleClass: 'info-light-popover'
    });
  }
  showSuccessColor() {
    this.messageService.add({
      summary: 'Toast',
      detail: 'Your,toast message here.',
      styleClass: 'success-light-popover'
    });
  }
  showDangerColor() {
    this.messageService.add({
      summary: 'Toast',
      detail: 'Your,toast message here.',
      styleClass: 'danger-light-popover'
    });
  }
  showPrimaryBackground() {
    this.messageService.add({
      summary: 'Toast',
      detail: 'Your,toast message here.',
      styleClass: 'primary-background-popover'
    });
  }
  showSecondaryBackground() {
    this.messageService.add({
      summary: 'Toast',
      detail: 'Your,toast message here.',
      styleClass: 'secondary-background-popover'
    });
  }
  showWarningBackground() {
    this.messageService.add({
      summary: 'Toast',
      detail: 'Your,toast message here.',
      styleClass: 'warning-background-popover'
    });
  }
  showInfoBackground() {
    this.messageService.add({
      summary: 'Toast',
      detail: 'Your,toast message here.',
      styleClass: 'info-background-popover'
    });
  }
  showSuccessBackground() {
    this.messageService.add({
      summary: 'Toast',
      detail: 'Your,toast message here.',
      styleClass: 'success-background-popover'
    });
  }
  showDangerBackground() {
    this.messageService.add({
      summary: 'Toast',
      detail: 'Your,toast message here.',
      styleClass: 'danger-background-popover'
    });
  }
  showTopLeft() {
    this.messageService.add({
      key: 'tl',
      summary: 'Toast',
      detail: 'Your,toast message here.',
      styleClass: 'primary-light-popover'
    });
  }
  showTopCenter() {
    this.messageService.add({
      key: 'tc',
      summary: 'Toast',
      detail: 'Your,toast message here.',
      styleClass: 'primary-light-popover'
    });
  }
  showTopRight() {
    this.messageService.add({
      key: 'tr',
      summary: 'Toast',
      detail: 'Your,toast message here.',
      styleClass: 'primary-light-popover'
    });
  }
  showMiddleLeft() {
    this.messageService.add({
      key: 'ml',
      summary: 'Toast',
      detail: 'Your,toast message here.',
      styleClass: 'primary-light-popover'
    });
  }
  showBottomLeft() {
    this.messageService.add({
      key: 'bl',
      summary: 'Toast',
      detail: 'Your,toast message here.',
      styleClass: 'primary-light-popover'
    });
  }
  showBottomCenter() {
    this.messageService.add({
      key: 'bc',
      summary: 'Toast',
      detail: 'Your,toast message here.',
      styleClass: 'primary-light-popover'
    });
  }
  showBottomRight() {
    this.messageService.add({
      key: 'br',
      summary: 'Toast',
      detail: 'Your,toast message here.',
      styleClass: 'primary-light-popover'
    });
  }
  static {
    this.ɵfac = function UiToastsComponent_Factory(t) {
      return new (t || UiToastsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.MessageService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UiToastsComponent,
      selectors: [["app-ui-toasts"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_2__.MessageService])],
      decls: 371,
      vars: 0,
      consts: [[1, "page-header"], [1, "page-title"], [1, "row"], [1, "col-xl-4"], [1, "card"], [1, "card-header", "justify-content-between"], [1, "card-title"], [1, "card-body"], ["type", "button", "id", "liveToastBtn", "pButton", "", "pRipple", "", "label", "Show", 1, "btn", "btn-primary", "btn-wave", 3, "click"], [1, "toast-container", "position-fixed", "top-0", "end-0", "p-3"], ["id", "liveToast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast"], [1, "toast-header", "text-default"], [1, "me-auto"], ["type", "button", "data-bs-dismiss", "toast", "aria-label", "Close", 1, "btn-close"], [1, "toast-body"], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "align-items-center", "text-bg-primary", "border-0", "fade", "show", "mb-4"], [1, "d-flex"], ["type", "button", "data-bs-dismiss", "toast", "aria-label", "Close", 1, "btn-close", "btn-close-white", "me-2", "m-auto"], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "align-items-center", "text-bg-secondary", "border-0", "fade", "show", "mb-4"], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "align-items-center", "text-bg-success", "border-0", "fade", "show", "mb-4"], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "align-items-center", "text-bg-info", "border-0", "fade", "show"], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "fade", "show"], [1, "toast-container", "position-static"], [1, "text-muted"], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "align-items-center", "fade", "show", "mb-3"], ["type", "button", "data-bs-dismiss", "toast", "aria-label", "Close", 1, "btn-close", "me-2", "m-auto"], [1, "my-4", "text-muted"], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "fade", "show", "mt-2"], [1, "mt-2", "pt-2", "border-top"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "btn-wave", "me-1"], ["type", "button", "data-bs-dismiss", "toast", 1, "btn", "btn-secondary", "btn-sm", "btn-wave"], [1, "col-xl-6"], [1, "btn-list"], ["type", "button", "id", "primaryToastBtn", 1, "btn", "btn-primary-light", "me-2", "btn-wave", 3, "click"], ["key", "toast1"], ["type", "button", "id", "secondaryToastBtn", 1, "btn", "btn-secondary-light", "me-2", "btn-wave", 3, "click"], ["key", "toast2"], ["type", "button", "id", "warningToastBtn", 1, "btn", "btn-warning-light", "me-2", "btn-wave", 3, "click"], ["key", "toast3"], ["type", "button", "id", "infoToastBtn", 1, "btn", "btn-info-light", "me-2", "btn-wave", 3, "click"], ["key", "toast4"], ["type", "button", "id", "successToastBtn", 1, "btn", "btn-success-light", "me-2", "btn-wave", 3, "click"], ["key", "toast5"], ["type", "button", "id", "dangerToastBtn", 1, "btn", "btn-danger-light", "me-2", "btn-wave", 3, "click"], ["key", "toast6"], ["id", "primaryToast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-primary-transparent"], [1, "toast-header", "bg-primary", "text-fixed-white"], ["id", "secondaryToast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-secondary-transparent"], [1, "toast-header", "bg-secondary", "text-fixed-white"], ["id", "warningToast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-warning-transparent"], [1, "toast-header", "bg-warning", "text-fixed-white"], ["id", "infoToast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-info-transparent"], [1, "toast-header", "bg-info", "text-fixed-white"], ["id", "successToast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-success-transparent"], [1, "toast-header", "bg-success", "text-fixed-white"], ["id", "dangerToast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-danger-transparent"], [1, "toast-header", "bg-danger", "text-fixed-white"], ["type", "button", "id", "solidprimaryToastBtn", 1, "btn", "btn-primary", "me-2", "btn-wave", 3, "click"], ["type", "button", "id", "solidsecondaryToastBtn", 1, "btn", "btn-secondary", "me-2", "btn-wave", 3, "click"], ["type", "button", "id", "solidwarningToastBtn", 1, "btn", "btn-warning", "me-2", "btn-wave", 3, "click"], ["type", "button", "id", "solidinfoToastBtn", 1, "btn", "btn-info", "me-2", "btn-wave", 3, "click"], ["type", "button", "id", "solidsuccessToastBtn", 1, "btn", "btn-success", "me-2", "btn-wave", 3, "click"], ["type", "button", "id", "soliddangerToastBtn", 1, "btn", "btn-danger", "me-2", "btn-wave", 3, "click"], ["id", "solid-primaryToast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-primary", "text-fixed-white"], ["id", "solid-secondaryToast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-secondary", "text-fixed-white"], ["id", "solid-warningToast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-warning", "text-fixed-white"], ["id", "solid-infoToast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-info", "text-fixed-white"], ["id", "solid-successToast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-success", "text-fixed-white"], ["id", "solid-dangerToast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-danger", "text-fixed-white"], [1, "col-xl-12"], ["type", "button", "id", "topleftToastBtn", 1, "btn", "btn-outline-primary", "me-2", "btn-wave", 3, "click"], ["position", "top-left", "key", "tl"], ["type", "button", "id", "topcenterToastBtn", 1, "btn", "btn-outline-primary", "me-2", "btn-wave", 3, "click"], ["position", "top-center", "key", "tc"], ["type", "button", "id", "toprightToastBtn", 1, "btn", "btn-outline-primary", "me-2", "btn-wave", 3, "click"], ["position", "top-right", "key", "tr"], ["type", "button", "id", "bottomleftToastBtn", 1, "btn", "btn-outline-primary", "me-2", "btn-wave", 3, "click"], ["position", "bottom-left", "key", "bl"], ["type", "button", "id", "bottomcenterToastBtn", 1, "btn", "btn-outline-primary", "me-2", "btn-wave", 3, "click"], ["position", "bottom-center", "key", "bc"], ["type", "button", "id", "bottomrightToastBtn", 1, "btn", "btn-outline-primary", "me-2", "btn-wave", 3, "click"], ["position", "bottom-right", "key", "br"], [1, "toast-container", "position-fixed", "top-0", "start-0", "p-3"], ["id", "topleft-Toast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-primary-transparent", "text-primary"], [1, "toast-container", "position-fixed", "top-0", "start-50", "translate-middle-x", "p-3"], ["id", "topcenter-Toast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-primary-transparent", "text-primary"], ["id", "topright-Toast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-primary-transparent", "text-primary"], [1, "toast-container", "position-fixed", "top-50", "start-0", "translate-middle-y", "p-3"], ["id", "middleleft-Toast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-primary-transparent", "text-primary"], [1, "toast-container", "position-fixed", "top-50", "start-50", "translate-middle"], ["id", "middlecenter-Toast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-primary-transparent", "text-primary"], [1, "toast-container", "position-fixed", "top-50", "end-0", "translate-middle-y", "p-3"], ["id", "middleright-Toast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-primary-transparent", "text-primary"], [1, "toast-container", "position-fixed", "bottom-0", "start-0", "p-3"], ["id", "bottomleft-Toast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-primary-transparent", "text-primary"], [1, "toast-container", "position-fixed", "bottom-0", "start-50", "translate-middle-x", "p-3"], ["id", "bottomcenter-Toast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-primary-transparent", "text-primary"], [1, "toast-container", "position-fixed", "bottom-0", "end-0", "p-3"], ["id", "bottomright-Toast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "colored-toast", "bg-primary-transparent", "text-primary"], [1, "bd-example", "bd-example-toasts", "d-flex", "p-2"], ["aria-live", "polite", "aria-atomic", "true", 1, "d-flex", "justify-content-center", "align-items-center", "w-100"], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "fade", "show", "shadow-lg"]],
      template: function UiToastsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Toastr");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Live example ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "p-toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UiToastsComponent_Template_button_click_12_listener() {
            return ctx.show();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Show live toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9)(15, "div", 10)(16, "div", 11)(17, "strong", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "small");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "11 mins ago");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Hello, world! This is a toast message. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 4)(25, "div", 5)(26, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Color schemes ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 7)(29, "div", 15)(30, "div", 16)(31, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Hello, world! This is the Primary toast message. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 18)(35, "div", 16)(36, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Hello, world! This is the Secondary toast. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 19)(40, "div", 16)(41, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Hello, world! This is the Success toast message. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 20)(45, "div", 16)(46, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " Hello, world! This is the info toast message. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 3)(50, "div", 4)(51, "div", 5)(52, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " Basic example ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 7)(55, "div", 21)(56, "div", 11)(57, "strong", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "small");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "11 mins ago");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, " Hello, world! This is a toast message. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 4)(65, "div", 5)(66, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, " Stacking ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 7)(69, "div", 22)(70, "div", 21)(71, "div", 11)(72, "strong", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "small", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "just now");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, " See? Just like this. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 21)(80, "div", 11)(81, "strong", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "small", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "2 seconds ago");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, " Heads up, toasts will stack automatically ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 3)(89, "div", 4)(90, "div", 5)(91, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, " Translucent ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 7)(94, "div", 21)(95, "div", 11)(96, "strong", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "small", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "11 mins ago");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, " Hello, world! This is a toast message. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 4)(104, "div", 5)(105, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, " Custom content ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 7)(108, "div", 24)(109, "div", 16)(110, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, " Hello, world! This is a toast message. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div")(114, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, " Alternatively, you can also add additional controls and components to toasts. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 27)(117, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, " Hello, world! This is a toast message. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 28)(120, "button", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Take action");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Close");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 2)(125, "div", 31)(126, "div", 4)(127, "div", 5)(128, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, " Color Variants Live ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 7)(131, "div", 32)(132, "button", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UiToastsComponent_Template_button_click_132_listener() {
            return ctx.showPrimaryColor();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "Primary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](134, "p-toast", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "button", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UiToastsComponent_Template_button_click_135_listener() {
            return ctx.showSecondaryColor();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "secondary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "p-toast", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "button", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UiToastsComponent_Template_button_click_138_listener() {
            return ctx.showWarningColor();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "warning");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](140, "p-toast", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "button", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UiToastsComponent_Template_button_click_141_listener() {
            return ctx.showInfoColor();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "info");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](143, "p-toast", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "button", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UiToastsComponent_Template_button_click_144_listener() {
            return ctx.showSuccessColor();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "success");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "p-toast", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "button", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UiToastsComponent_Template_button_click_147_listener() {
            return ctx.showDangerColor();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "danger");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](149, "p-toast", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 9)(151, "div", 45)(152, "div", 46)(153, "strong", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "Toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](155, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, " Your,toast message here. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 47)(159, "div", 48)(160, "strong", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "Toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](162, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, " Your,toast message here. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 49)(166, "div", 50)(167, "strong", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "Toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](169, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, " Your,toast message here. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "div", 51)(173, "div", 52)(174, "strong", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "Toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](176, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, " Your,toast message here. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "div", 53)(180, "div", 54)(181, "strong", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, "Toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](183, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, " Your,toast message here. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "div", 55)(187, "div", 56)(188, "strong", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "Toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](190, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, " Your,toast message here. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "div", 31)(194, "div", 4)(195, "div", 5)(196, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, " Solid Background Toasts ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "div", 7)(199, "div", 32)(200, "button", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UiToastsComponent_Template_button_click_200_listener() {
            return ctx.showPrimaryBackground();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, "Primary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "button", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UiToastsComponent_Template_button_click_202_listener() {
            return ctx.showSecondaryBackground();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "secondary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "button", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UiToastsComponent_Template_button_click_204_listener() {
            return ctx.showWarningBackground();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, "warning");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "button", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UiToastsComponent_Template_button_click_206_listener() {
            return ctx.showInfoBackground();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, "info");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "button", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UiToastsComponent_Template_button_click_208_listener() {
            return ctx.showSuccessBackground();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, "success");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "button", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UiToastsComponent_Template_button_click_210_listener() {
            return ctx.showDangerBackground();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](211, "danger");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "div", 9)(213, "div", 63)(214, "div", 46)(215, "strong", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](216, "Toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](217, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, " Your,toast message here. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "div", 64)(221, "div", 48)(222, "strong", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, "Toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](224, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](226, " Your,toast message here. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "div", 65)(228, "div", 50)(229, "strong", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](230, "Toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](231, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](233, " Your,toast message here. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "div", 66)(235, "div", 52)(236, "strong", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](237, "Toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](238, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](240, " Your,toast message here. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "div", 67)(242, "div", 54)(243, "strong", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](244, "Toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](245, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](247, " Your,toast message here. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "div", 68)(249, "div", 56)(250, "strong", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](251, "Toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](252, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](254, " Your,toast message here. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "div", 2)(256, "div", 69)(257, "div", 4)(258, "div", 5)(259, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](260, " Toast Placements ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "div", 7)(262, "div", 32)(263, "button", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UiToastsComponent_Template_button_click_263_listener() {
            return ctx.showTopLeft();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](264, "Top Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](265, "p-toast", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "button", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UiToastsComponent_Template_button_click_266_listener() {
            return ctx.showTopCenter();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](267, "Top Center");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](268, "p-toast", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "button", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UiToastsComponent_Template_button_click_269_listener() {
            return ctx.showTopRight();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](270, "Top Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](271, "p-toast", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "button", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UiToastsComponent_Template_button_click_272_listener() {
            return ctx.showBottomLeft();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](273, "Bottom Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](274, "p-toast", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](275, "button", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UiToastsComponent_Template_button_click_275_listener() {
            return ctx.showBottomCenter();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](276, "Bottom Center");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](277, "p-toast", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "button", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UiToastsComponent_Template_button_click_278_listener() {
            return ctx.showBottomRight();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](279, "Bottom Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](280, "p-toast", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](281, "div", 82)(282, "div", 83)(283, "div", 46)(284, "strong", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](285, "Toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](286, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](288, " Your,toast message here. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "div", 84)(290, "div", 85)(291, "div", 46)(292, "strong", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](293, "Toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](294, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](295, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](296, " Your,toast message here. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "div", 9)(298, "div", 86)(299, "div", 46)(300, "strong", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](301, "Toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](302, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](303, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](304, " Your,toast message here. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](305, "div", 87)(306, "div", 88)(307, "div", 46)(308, "strong", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](309, "Toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](310, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](312, " Your,toast message here. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](313, "div", 89)(314, "div", 90)(315, "div", 46)(316, "strong", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](317, "Toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](318, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](319, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](320, " Your,toast message here. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](321, "div", 91)(322, "div", 92)(323, "div", 46)(324, "strong", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](325, "Toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](326, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](327, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](328, " Your,toast message here. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](329, "div", 93)(330, "div", 94)(331, "div", 46)(332, "strong", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](333, "Toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](334, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](335, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](336, " Your,toast message here. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](337, "div", 95)(338, "div", 96)(339, "div", 46)(340, "strong", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](341, "Toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](342, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](343, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](344, " Your,toast message here. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](345, "div", 97)(346, "div", 98)(347, "div", 46)(348, "strong", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](349, "Toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](350, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](351, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](352, " Your,toast message here. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](353, "div", 2)(354, "div", 69)(355, "div", 4)(356, "div", 5)(357, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](358, " Aligning Toast Using Flexbox ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](359, "div", 7)(360, "div", 99)(361, "div", 100)(362, "div", 101)(363, "div", 11)(364, "strong", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](365, "Toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](366, "small");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](367, "11 mins ago");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](368, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](369, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](370, " Hello, world! This is a toast message. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        }
      },
      dependencies: [primeng_toast__WEBPACK_IMPORTED_MODULE_3__.Toast],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 52008:
/*!**********************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-toasts/ui-toasts.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiToastsModule: () => (/* binding */ UiToastsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ui_toasts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-toasts-routing.module */ 6481);
/* harmony import */ var _ui_toasts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-toasts.component */ 22869);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);





class UiToastsModule {
  static {
    this.ɵfac = function UiToastsModule_Factory(t) {
      return new (t || UiToastsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: UiToastsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ui_toasts_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiToastsRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.sharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](UiToastsModule, {
    declarations: [_ui_toasts_component__WEBPACK_IMPORTED_MODULE_1__.UiToastsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ui_toasts_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiToastsRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.sharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_base-ui_ui-toasts_ui-toasts_module_ts.js.map