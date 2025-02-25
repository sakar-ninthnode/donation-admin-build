"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_base-ui_ui-offcanvas_ui-offcanvas_module_ts"],{

/***/ 62911:
/*!************************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-offcanvas/ui-offcanvas-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiOffcanvasRoutingModule: () => (/* binding */ UiOffcanvasRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ui_offcanvas_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-offcanvas.component */ 53007);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _ui_offcanvas_component__WEBPACK_IMPORTED_MODULE_0__.UiOffcanvasComponent
}];
class UiOffcanvasRoutingModule {
  static {
    this.ɵfac = function UiOffcanvasRoutingModule_Factory(t) {
      return new (t || UiOffcanvasRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: UiOffcanvasRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UiOffcanvasRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 53007:
/*!*******************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-offcanvas/ui-offcanvas.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiOffcanvasComponent: () => (/* binding */ UiOffcanvasComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class UiOffcanvasComponent {
  static {
    this.ɵfac = function UiOffcanvasComponent_Factory(t) {
      return new (t || UiOffcanvasComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UiOffcanvasComponent,
      selectors: [["app-ui-offcanvas"]],
      decls: 247,
      vars: 0,
      consts: [[1, "page-header"], [1, "page-title"], [1, "row"], [1, "col-xl-6"], [1, "card"], [1, "card-body", "card-buttons"], [1, "header-title"], [1, "button-list"], ["data-bs-toggle", "offcanvas", "href", "#offcanvasExample", "role", "button", "aria-controls", "offcanvasExample", 1, "btn", "btn-primary", "mt-1", "me-1"], ["type", "button", "data-bs-toggle", "offcanvas", "data-bs-target", "#offcanvasExample", "aria-controls", "offcanvasExample", 1, "btn", "btn-primary", "mt-1"], ["tabindex", "-1", "id", "offcanvasExample", "aria-labelledby", "offcanvasExampleLabel", 1, "offcanvas", "offcanvas-start"], [1, "offcanvas-header"], ["id", "offcanvasExampleLabel", 1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "text-reset"], [1, "offcanvas-body"], [1, "mt-3"], [1, ""], ["type", "button", "data-bs-toggle", "offcanvas", "data-bs-target", "#offcanvasScrolling", "aria-controls", "offcanvasScrolling", 1, "btn", "btn-primary", "mt-2", "me-1"], ["type", "button", "data-bs-toggle", "offcanvas", "data-bs-target", "#offcanvasWithBackdrop", "aria-controls", "offcanvasWithBackdrop", 1, "btn", "btn-primary", "mt-2", "me-1"], ["type", "button", "data-bs-toggle", "offcanvas", "data-bs-target", "#offcanvasWithBothOptions", "aria-controls", "offcanvasWithBothOptions", 1, "btn", "btn-primary", "mt-2"], ["data-bs-scroll", "true", "data-bs-backdrop", "false", "tabindex", "-1", "id", "offcanvasScrolling", "aria-labelledby", "offcanvasScrollingLabel", 1, "offcanvas", "offcanvas-start"], ["id", "offcanvasScrollingLabel", 1, "offcanvas-title"], [1, "ps-3"], ["tabindex", "-1", "id", "offcanvasWithBackdrop", "aria-labelledby", "offcanvasWithBackdropLabel", 1, "offcanvas", "offcanvas-start"], ["id", "offcanvasWithBackdropLabel", 1, "offcanvas-title"], ["data-bs-scroll", "true", "tabindex", "-1", "id", "offcanvasWithBothOptions", "aria-labelledby", "offcanvasWithBothOptionsLabel", 1, "offcanvas", "offcanvas-start"], ["id", "offcanvasWithBothOptionsLabel", 1, "offcanvas-title"], [1, "ps-0", "mb-3"], ["type", "button", "data-bs-toggle", "offcanvas", "data-bs-target", "#offcanvasTop", "aria-controls", "offcanvasTop", 1, "btn", "btn-primary", "mt-2", "me-1"], ["type", "button", "data-bs-toggle", "offcanvas", "data-bs-target", "#offcanvasRight", "aria-controls", "offcanvasRight", 1, "btn", "btn-primary", "mt-2", "me-1"], ["type", "button", "data-bs-toggle", "offcanvas", "data-bs-target", "#offcanvasBottom", "aria-controls", "offcanvasBottom", 1, "btn", "btn-primary", "mt-2", "me-1"], ["type", "button", "data-bs-toggle", "offcanvas", "data-bs-target", "#offcanvasLeft", "aria-controls", "offcanvasLeft", 1, "btn", "btn-primary", "mt-2"], ["tabindex", "-1", "id", "offcanvasTop", "aria-labelledby", "offcanvasTopLabel", 1, "offcanvas", "offcanvas-top"], ["id", "offcanvasTopLabel"], ["tabindex", "-1", "id", "offcanvasRight", "aria-labelledby", "offcanvasRightLabel", 1, "offcanvas", "offcanvas-end"], ["id", "offcanvasRightLabel"], ["tabindex", "-1", "id", "offcanvasBottom", "aria-labelledby", "offcanvasBottomLabel", 1, "offcanvas", "offcanvas-bottom"], ["id", "offcanvasBottomLabel", 1, "offcanvas-title"], ["tabindex", "-1", "id", "offcanvasLeft", "aria-labelledby", "offcanvasLeftLabel", 1, "offcanvas", "offcanvas-start"], ["id", "offcanvasLeftLabel"]],
      template: function UiOffcanvasComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Offcanvas");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "h4", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Offcanvas");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "You can use a link with the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "href");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " attribute, or a button with the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "data-bs-target");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " attribute. In both cases, the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "data-bs-toggle=\"offcanvas\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " is required.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7)(22, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Link with href ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Button with data-bs-target ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10)(27, "div", 11)(28, "h5", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Offcanvas");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14)(32, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h5", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "List");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul", 16)(37, "li", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Nemo enim ipsam voluptatem quia aspernatur");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Neque porro quisquam est, qui dolorem");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Quis autem vel eum iure qui in ea");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul", 16)(44, "li", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "At vero eos et accusamus et iusto odio dignissimos");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Et harum quidem rerum facilis");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Temporibus autem quibusdam et aut officiis");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 4)(51, "div", 5)(52, "h4", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Offcanvas Backdrop");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Scrolling the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "<body>");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " element is disabled when an offcanvas and its backdrop are visible. Use the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "data-bs-scroll");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " attribute to toggle ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "<body>");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " scrolling and ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "data-bs-backdrop");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " to toggle the backdrop.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 7)(69, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Enable body scrolling");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Enable backdrop (default)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Enable both scrolling & backdrop");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 20)(76, "div", 11)(77, "h5", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Colored with scrolling");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 14)(81, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h5", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "List");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "ul", 22)(86, "li", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Nemo enim ipsam voluptatem quia aspernatur");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Neque porro quisquam est, qui dolorem");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Quis autem vel eum iure qui in ea");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "ul", 22)(93, "li", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "At vero eos et accusamus et iusto odio dignissimos");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Et harum quidem rerum facilis");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Temporibus autem quibusdam et aut officiis");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 23)(100, "div", 11)(101, "h5", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Offcanvas with backdrop");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 14)(105, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h5", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "List");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "ul", 22)(110, "li", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Nemo enim ipsam voluptatem quia aspernatur");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "li", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Neque porro quisquam est, qui dolorem");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "li", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Quis autem vel eum iure qui in ea");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "ul", 22)(117, "li", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "At vero eos et accusamus et iusto odio dignissimos");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Et harum quidem rerum facilis");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Temporibus autem quibusdam et aut officiis");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 25)(124, "div", 11)(125, "h5", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Backdroped with scrolling");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 14)(129, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "h5", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "List");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "ul", 22)(134, "li", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Nemo enim ipsam voluptatem quia aspernatur");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "li", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Neque porro quisquam est, qui dolorem");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "li", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Quis autem vel eum iure qui in ea");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "ul", 22)(141, "li", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "At vero eos et accusamus et iusto odio dignissimos");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "li", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Et harum quidem rerum facilis");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "li", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Temporibus autem quibusdam et aut officiis");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 3)(148, "div", 4)(149, "div", 5)(150, "h4", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Offcanvas Placement");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "ul", 27)(153, "li")(154, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, ".offcanvas-start");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " places offcanvas on the left of the viewport (shown above)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "li")(158, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, ".offcanvas-end");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " places offcanvas on the right of the viewport");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "li")(162, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, ".offcanvas-top");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " places offcanvas on the top of the viewport");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "li")(166, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, ".offcanvas-bottom");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " places offcanvas on the bottom of the viewport");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div")(170, "div", 7)(171, "button", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Toggle Top offcanvas");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "button", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Toggle right offcanvas");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Toggle bottom offcanvas");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "button", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Toggle Left offcanvas");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 32)(180, "div", 11)(181, "h5", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Offcanvas Top");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 14)(185, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, " Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "h5", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "List");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "ul", 22)(190, "li", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Nemo enim ipsam voluptatem quia aspernatur");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "li", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Neque porro quisquam est, qui dolorem");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "li", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Quis autem vel eum iure qui in ea");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 34)(197, "div", 11)(198, "h5", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Offcanvas right");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 14)(202, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, " Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "h5", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "List");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "ul", 22)(207, "li", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Nemo enim ipsam voluptatem quia aspernatur");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "li", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Neque porro quisquam est, qui dolorem");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "li", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Quis autem vel eum iure qui in ea");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 36)(214, "div", 11)(215, "h5", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Offcanvas bottom");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 14)(219, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, " Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "h5", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "List");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "ul", 22)(224, "li", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Nemo enim ipsam voluptatem quia aspernatur");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "li", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Neque porro quisquam est, qui dolorem");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "li", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Quis autem vel eum iure qui in ea");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 38)(231, "div", 11)(232, "h5", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Offcanvas Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 14)(236, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, " Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "h5", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "List");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "ul", 22)(241, "li", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Nemo enim ipsam voluptatem quia aspernatur");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "li", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Neque porro quisquam est, qui dolorem");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "li", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "Quis autem vel eum iure qui in ea");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 90350:
/*!****************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-offcanvas/ui-offcanvas.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiOffcanvasModule: () => (/* binding */ UiOffcanvasModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ui_offcanvas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-offcanvas-routing.module */ 62911);
/* harmony import */ var _ui_offcanvas_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-offcanvas.component */ 53007);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);




class UiOffcanvasModule {
  static {
    this.ɵfac = function UiOffcanvasModule_Factory(t) {
      return new (t || UiOffcanvasModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: UiOffcanvasModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_offcanvas_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiOffcanvasRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UiOffcanvasModule, {
    declarations: [_ui_offcanvas_component__WEBPACK_IMPORTED_MODULE_1__.UiOffcanvasComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_offcanvas_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiOffcanvasRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_base-ui_ui-offcanvas_ui-offcanvas_module_ts.js.map