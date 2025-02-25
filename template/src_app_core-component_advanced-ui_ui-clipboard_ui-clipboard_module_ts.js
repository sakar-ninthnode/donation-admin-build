"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_advanced-ui_ui-clipboard_ui-clipboard_module_ts"],{

/***/ 53814:
/*!****************************************************************************************!*\
  !*** ./src/app/core-component/advanced-ui/ui-clipboard/ui-clipboard-routing.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiClipboardRoutingModule: () => (/* binding */ UiClipboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ui_clipboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-clipboard.component */ 99312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _ui_clipboard_component__WEBPACK_IMPORTED_MODULE_0__.UiClipboardComponent
}];
class UiClipboardRoutingModule {
  static {
    this.ɵfac = function UiClipboardRoutingModule_Factory(t) {
      return new (t || UiClipboardRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: UiClipboardRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UiClipboardRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 99312:
/*!***********************************************************************************!*\
  !*** ./src/app/core-component/advanced-ui/ui-clipboard/ui-clipboard.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiClipboardComponent: () => (/* binding */ UiClipboardComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);




class UiClipboardComponent {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  copyInputMessage(inputElement) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }
  cutInputMessage(inputElement) {
    inputElement.select();
    document.execCommand('cut');
    inputElement.setSelectionRange(0, 0);
  }
  copySpanContent(spanId) {
    const spanElement = document.getElementById(spanId);
    if (spanElement) {
      const range = document.createRange();
      range.selectNode(spanElement);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
      document.execCommand('copy');
      // Clear the selection range
      window.getSelection()?.removeAllRanges();
    }
  }
  static {
    this.ɵfac = function UiClipboardComponent_Factory(t) {
      return new (t || UiClipboardComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UiClipboardComponent,
      selectors: [["app-ui-clipboard"]],
      decls: 77,
      vars: 1,
      consts: [["userinput", ""], ["textareas", ""], ["inputpara", ""], ["advpara", ""], [1, "cardhead"], [1, "page-header"], [1, "row"], [1, "col-sm-12"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "active"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "clipboard"], [1, "form-horizontal"], ["type", "text", "value", "http://www.admin-dashboard.com", 1, "form-control", "mb-4"], ["href", "javascript:void(0);", 1, "mb-1", "btn", "clip-btn", "btn-primary", "me-1", 3, "click"], [1, "far", "fa-copy"], ["href", "javascript:void(0);", 1, "mb-1", "btn", "clip-btn", "btn-dark", 3, "click"], [1, "fas", "fa-cut"], ["rows", "3", 1, "form-control", "mb-4"], ["href", "javascript:void(0);", 1, "mb-1", "me-1", "btn", "clip-btn", "btn-primary", 3, "click"], [1, "clipboard", "copy-txt"], [1, "otp-pass"], ["type", "text", "value", "22991"], [1, "mb-4"], ["href", "javascript:void(0);", 1, "mb-1", "btn", "clip-btn", "btn-primary", 3, "click"], ["type", "text", "value", "http://www.example.com/example", 1, "input-link"], ["href", "javascript:void(0);", "data-clipboard-action", "copy", "data-clipboard-text", "2291", 1, "mb-1", "btn", "clip-btn", "btn-warning"]],
      template: function UiClipboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "h3", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Clipboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 9)(7, "li", 10)(8, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Clipboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6)(13, "div", 13)(14, "div", 14)(15, "div", 15)(16, "h5", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Copy from input");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 17)(19, "div", 18)(20, "form", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 20, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UiClipboardComponent_Template_a_click_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            const userinput_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.copyInputMessage(userinput_r2));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Copy from Input");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UiClipboardComponent_Template_a_click_26_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            const userinput_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.cutInputMessage(userinput_r2));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Cut from Input");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 14)(30, "div", 15)(31, "h5", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Copy from Text Area");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 17)(34, "div", 18)(35, "form", 19)(36, "textarea", 25, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Lorem ipsum dolor sit amet, consectetur adipiscing elit...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UiClipboardComponent_Template_a_click_39_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            const textareas_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](37);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.copyInputMessage(textareas_r3));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " Copy from Input");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UiClipboardComponent_Template_a_click_42_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            const textareas_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](37);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.cutInputMessage(textareas_r3));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " Cut from Input");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 14)(46, "div", 15)(47, "h5", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Copy Text from Paragraph");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 17)(50, "div", 27)(51, "p", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Here is your OTP ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "input", 29, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "p", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Please do not share it to anyone");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "a", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UiClipboardComponent_Template_a_click_58_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            const inputpara_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](54);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.copyInputMessage(inputpara_r4));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " Copy from Input");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 14)(62, "div", 15)(63, "h5", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Copy Hidden Text (Advanced)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 17)(66, "div", 27)(67, "p", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Link -> ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "input", 32, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "a", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UiClipboardComponent_Template_a_click_71_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            const advpara_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](70);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.copyInputMessage(advpara_r5));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, " Copy Link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "a", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, " Copy Hidden Code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.dashboard);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 62143:
/*!********************************************************************************!*\
  !*** ./src/app/core-component/advanced-ui/ui-clipboard/ui-clipboard.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiClipboardModule: () => (/* binding */ UiClipboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ui_clipboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-clipboard-routing.module */ 53814);
/* harmony import */ var _ui_clipboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-clipboard.component */ 99312);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);





class UiClipboardModule {
  static {
    this.ɵfac = function UiClipboardModule_Factory(t) {
      return new (t || UiClipboardModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: UiClipboardModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ui_clipboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiClipboardRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.sharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](UiClipboardModule, {
    declarations: [_ui_clipboard_component__WEBPACK_IMPORTED_MODULE_1__.UiClipboardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ui_clipboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiClipboardRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.sharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_advanced-ui_ui-clipboard_ui-clipboard_module_ts.js.map