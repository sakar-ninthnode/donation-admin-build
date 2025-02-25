"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_base-ui_ui-typography_ui-typography_module_ts"],{

/***/ 90365:
/*!**************************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-typography/ui-typography-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiTypographyRoutingModule: () => (/* binding */ UiTypographyRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ui_typography_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-typography.component */ 31585);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _ui_typography_component__WEBPACK_IMPORTED_MODULE_0__.UiTypographyComponent
}];
class UiTypographyRoutingModule {
  static {
    this.ɵfac = function UiTypographyRoutingModule_Factory(t) {
      return new (t || UiTypographyRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: UiTypographyRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UiTypographyRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 31585:
/*!*********************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-typography/ui-typography.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiTypographyComponent: () => (/* binding */ UiTypographyComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class UiTypographyComponent {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  static {
    this.ɵfac = function UiTypographyComponent_Factory(t) {
      return new (t || UiTypographyComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UiTypographyComponent,
      selectors: [["app-ui-typography"]],
      decls: 547,
      vars: 0,
      consts: [[1, "page-header"], [1, "page-title"], [1, "row"], [1, "col-xl-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "mb-3"], [1, "mb-0"], [1, "h1", "mb-3"], [1, "h2", "mb-3"], [1, "h3", "mb-3"], [1, "h4", "mb-3"], [1, "h5", "mb-3"], [1, "h6", "mb-0"], [1, "mb-0", "display-1"], [1, "mb-0", "display-2"], [1, "mb-0", "display-3"], [1, "mb-0", "display-4"], [1, "mb-0", "display-5"], [1, "mb-0", "display-6"], [1, "font-monospace", "mb-0"], ["href", "javascript:void(0);", 1, "text-primary"], ["href", "javascript:void(0);", 1, "text-secondary"], ["href", "javascript:void(0);", 1, "text-success"], ["href", "javascript:void(0);", 1, "text-danger"], ["href", "javascript:void(0);", 1, "text-warning"], ["href", "javascript:void(0);", 1, "text-info"], ["href", "javascript:void(0);", 1, "text-light", "bg-dark"], ["href", "javascript:void(0);", 1, "text-dark"], ["href", "javascript:void(0);", 1, "text-muted"], ["href", "javascript:void(0);", 1, "text-white", "bg-dark", "mb-0"], [1, "text-primary"], [1, "text-secondary"], [1, "text-success"], [1, "text-danger"], [1, "text-warning"], [1, "text-info"], [1, "text-light", "bg-dark"], [1, "text-dark"], [1, "text-muted"], [1, "text-white", "bg-dark", "mb-0"], [1, "list-disc"], [1, "mb-2"], [1, "list-decimal"], [1, "col-md-12"], [1, "lead", "mb-0"], [1, "col-md-6"], [1, "blockquote-container"], [1, "blockquote", "mb-2"], [1, "blockquote-footer", "mt-0", "mb-0", "text-muted", "op-7"], ["title", "Source Title"], [1, "blockquote-container", "text-end"], [1, "col-xl-4"], [1, "blockquote", "custom-blockquote", "primary", "mb-3", "text-center"], [1, "blockquote-footer", "mt-3", "fs-14", "text-muted", "op-7", "mb-0"], [1, "blockquote", "custom-blockquote", "secondary", "mb-3", "text-center"], [1, "blockquote", "custom-blockquote", "info", "mb-3", "text-center"], [1, "blockquote", "custom-blockquote", "warning", "mb-3", "text-center"], [1, "blockquote", "custom-blockquote", "success", "mb-3", "text-center"], [1, "blockquote", "custom-blockquote", "danger", "mb-3", "text-center"], [1, "card-header", "justify-content-between"], [1, "row", "mb-0"], [1, "col-sm-3"], [1, "col-sm-9"], [1, "col-sm-3", "text-truncate"], [1, "col-sm-9", "mb-0"], [1, "col-sm-4"], [1, "col-sm-8", "mb-0"], [1, "list-unstyled"], [1, "list-circle"], [1, "list-inline", "mb-0"], [1, "list-inline-item"], ["title", "attribute"], ["title", "HyperText Markup Language", 1, "initialism"], [1, "mb-1"], [1, "border-danger", "border-2", "opacity-50"], [1, "border-primary", "border-3", "opacity-75"], [1, "text-lowercase"], [1, "text-uppercase"], [1, "text-capitalize", "mb-0"], [1, "text-decoration-underline"], [1, "text-decoration-line-through"], ["href", "javascript:void(0);", 1, "text-decoration-none"], [1, "fw-bold"], [1, "fw-bolder"], [1, "fw-semibold"], [1, "fw-normal"], [1, "fw-light"], [1, "fw-lighter"], [1, "fst-italic"], [1, "fst-normal", "mb-0"], [1, "lh-1"], [1, "lh-sm"], [1, "lh-base"], [1, "lh-lg", "mb-0"], [1, "col-xl-3"], [1, "text-muted", "mb-0"], ["href", "javascript:void(0);", 1, "text-reset", "text-decoration-underline", "text-dark"], [1, "visible", "mb-0"], [1, "invisible", "mb-0"], [1, "text-start"], [1, "text-center"], [1, "text-end"], [1, "text-sm-start"], [1, "text-md-start"], [1, "text-lg-start"], [1, "text-xl-start"], [1, "badge", "bg-primary", "text-wrap", "mb-3", 2, "width", "6rem"], [1, "text-muted", "mb-2"], [1, "text-nowrap", "bg-light", "border", "text-dark", 2, "width", "8rem"], [1, "text-break", "mb-0"]],
      template: function UiTypographyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Typography");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Headings Tags");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7)(11, "h1", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "h1. Bootstrap heading");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h2", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "h2. Bootstrap heading");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h3", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "h3. Bootstrap heading");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h4", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "h4. Bootstrap heading");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h5", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "h5. Bootstrap heading");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h6", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "h6. Bootstrap heading");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 3)(24, "div", 4)(25, "div", 5)(26, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Heading Class Names");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 7)(29, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "h1. Bootstrap heading");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "h2. Bootstrap heading");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "h3. Bootstrap heading");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "h4. Bootstrap heading");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "h5. Bootstrap heading");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "h6. Bootstrap heading");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 3)(42, "div", 4)(43, "div", 5)(44, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Display Headings");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 7)(47, "h1", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Display 1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "h1", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Display 2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "h1", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Display 3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "h1", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Display 4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "h1", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Display 5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "h1", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Display 6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 3)(60, "div", 4)(61, "div", 5)(62, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Text Element");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 7)(65, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "You can use the mark tag to ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "mark");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "highlight");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, " text.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "p")(71, "del");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "This line of text is meant to be treated as deleted text.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "p")(74, "s");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "This line of text is meant to be treated as no longer accurate.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "p")(77, "ins");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "This line of text is meant to be treated as an addition to the document.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "p")(80, "u");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "This line of text will render as underlined");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "p")(83, "small");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "This line of text is meant to be treated as fine print.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "p")(86, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "This line rendered as bold text.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "p")(89, "em");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "This line rendered as italicized text.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "p", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "This is in monospace");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 3)(94, "div", 4)(95, "div", 5)(96, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Coloured Link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 7)(99, "p")(100, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "Primary link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "p")(103, "a", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Secondary link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "p")(106, "a", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Success link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "p")(109, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Danger link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "p")(112, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Warning link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "p")(115, "a", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Info link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "p")(118, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Light link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "p")(121, "a", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Dark link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "p")(124, "a", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "Muted link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "p")(127, "a", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "White link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 3)(130, "div", 4)(131, "div", 5)(132, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "Coloured Text");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 7)(135, "p", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, ".text-primary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "p", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, ".text-secondary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "p", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, ".text-success");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "p", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, ".text-danger");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "p", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, ".text-warning");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "p", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, ".text-info");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "p", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, ".text-light");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "p", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, ".text-dark");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "p", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, ".text-muted");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "p", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, ".text-white");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 3)(156, "div", 4)(157, "div", 5)(158, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "Bullet Lists");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 7)(161, "ul", 43)(162, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "Consectetur adipiscing elit");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "Integer molestie lorem at massa");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "Facilisis in pretium nisl aliquet");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "li", 44)(169, "ul")(170, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, "Phasellus iaculis neque");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "Purus sodales ultricies");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "Ac tristique libero volutpat at");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, "Faucibus porta lacus fringilla vel");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "Aenean sit amet erat nunc");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "Eget porttitor lorem");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 3)(183, "div", 4)(184, "div", 5)(185, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, "Number Lists");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "div", 7)(188, "ul", 45)(189, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, "Consectetur adipiscing elit");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, "Integer molestie lorem at massa");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, "Facilisis in pretium nisl aliquet");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "li", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, " Facilisis in pretium nisl aliquet ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "ol")(198, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, "Phasellus iaculis neque");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, "Purus sodales ultricies");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "Ac tristique libero volutpat at");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, "Faucibus porta lacus fringilla vel");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, "Aenean sit amet erat nunc");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, "Eget porttitor lorem");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "div", 46)(211, "div", 4)(212, "div", 5)(213, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](214, "Lead Paragraph");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "div", 7)(216, "p", 47)(217, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](218, "This is a lead paragraph. It stands out from regular paragraphs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, ".There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "div", 48)(221, "div", 4)(222, "div", 5)(223, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](224, "Blockquote Left Aligned");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "div", 7)(226, "figure", 49)(227, "blockquote", 50)(228, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](229, "The greatest glory in living lies not in never falling, but in rising every time we fall.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "figcaption", 51)(231, "cite", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, "Nelson Mandela");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "div", 48)(234, "div", 4)(235, "div", 5)(236, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](237, "Blockquote Right Aligned");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "div", 7)(239, "figure", 53)(240, "blockquote", 50)(241, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](242, "The greatest glory in living lies not in never falling, but in rising every time we fall.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "figcaption", 51)(244, "cite", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](245, "Nelson Mandela");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "div", 46)(247, "div", 4)(248, "div", 5)(249, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](250, "Custom Color Blockquote");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "div", 7)(252, "div", 2)(253, "div", 54)(254, "blockquote", 55)(255, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](256, "The future belongs to those who believe in the beauty of their dreams..");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "footer", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](258, "Someone famous as ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "cite", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](260, "-Eleanor Roosevelt");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "div", 54)(262, "blockquote", 57)(263, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](264, "The future belongs to those who believe in the beauty of their dreams..");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "footer", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](266, "Someone famous as ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](267, "cite", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](268, "-Eleanor Roosevelt");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "div", 54)(270, "blockquote", 58)(271, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](272, "The future belongs to those who believe in the beauty of their dreams..");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "footer", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](274, "Someone famous as ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](275, "cite", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](276, "-Eleanor Roosevelt");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "div", 54)(278, "blockquote", 59)(279, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](280, "The future belongs to those who believe in the beauty of their dreams..");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](281, "footer", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](282, "Someone famous as ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](283, "cite", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](284, "-Eleanor Roosevelt");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](285, "div", 54)(286, "blockquote", 60)(287, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](288, "The future belongs to those who believe in the beauty of their dreams..");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "footer", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](290, "Someone famous as ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "cite", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](292, "-Eleanor Roosevelt");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](293, "div", 54)(294, "blockquote", 61)(295, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](296, "The future belongs to those who believe in the beauty of their dreams..");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "footer", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](298, "Someone famous as ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](299, "cite", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](300, "-Eleanor Roosevelt");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](301, "div", 3)(302, "div", 4)(303, "div", 62)(304, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](305, " Description List Alignment ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](306, "div", 7)(307, "dl", 63)(308, "dt", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](309, "Description lists");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](310, "dd", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](311, "A description list is perfect for defining terms.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](312, "dt", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](313, "Term");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](314, "dd", 65)(315, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](316, "Definition for the term.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](317, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](318, "And some more placeholder definition text.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](319, "dt", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](320, "Another term");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](321, "dd", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](322, "This definition is short, so no extra paragraphs or anything.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](323, "dt", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](324, "Truncated term is truncated");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](325, "dd", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](326, "This can be useful when space is tight. Adds an ellipsis at the end.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](327, "dt", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](328, "Nesting");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](329, "dd", 67)(330, "dl", 63)(331, "dt", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](332, "Nested definition list");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](333, "dd", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](334, "I heard you like definition lists. Let me put a definition list inside your definition list.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](335, "div", 3)(336, "div", 4)(337, "div", 62)(338, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](339, " List Unstyled ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](340, "div", 7)(341, "ul", 70)(342, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](343, "This is a list.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](344, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](345, "It appears completely unstyled.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](346, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](347, "Structurally, it's still a list.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](348, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](349, "However, this style only applies to immediate child elements.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](350, "li", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](351, "Nested lists: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](352, "ul", 71)(353, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](354, "are unaffected by this style");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](355, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](356, "will still show a bullet");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](357, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](358, "and have appropriate left margin");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](359, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](360, "This may still come in handy in some situations.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](361, "div", 4)(362, "div", 62)(363, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](364, " List Inline ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](365, "div", 7)(366, "ul", 72)(367, "li", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](368, "This is a list item.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](369, "li", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](370, "And another one.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](371, "li", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](372, "But they're displayed inline.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](373, "div", 3)(374, "div", 4)(375, "div", 62)(376, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](377, " Abbreviations ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](378, "div", 7)(379, "p")(380, "abbr", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](381, "attr");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](382, "p", 9)(383, "abbr", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](384, "HTML");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](385, "div", 4)(386, "div", 62)(387, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](388, " Customizing headings ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](389, "div", 7)(390, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](391, " Fancy display heading ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](392, "small", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](393, "With faded secondary text");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](394, "div", 3)(395, "div", 4)(396, "div", 62)(397, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](398, " Horizontal Rules ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](399, "div", 7)(400, "p", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](401, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolorem fuga iste obcaecati natus eos officiis adipisci voluptatibus ipsum, architecto veniam delectus vel dolor magni a vero sunt ut harum.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](402, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](403, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](404, "p", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](405, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto perspiciatis, magni numquam quos perferendis nulla magnam odit amet excepturi quisquam provident.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](406, "hr", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](407, "p", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](408, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquid consequatur aut doloremque assumenda voluptatem, id qui vero adipisci! Nostrum ipsam praesentium!");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](409, "hr", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](410, "div", 3)(411, "div", 4)(412, "div", 62)(413, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](414, " Text Transform ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](415, "div", 7)(416, "p", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](417, "Lowercased text.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](418, "p", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](419, "Uppercased text.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](420, "p", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](421, "CapiTaliZed text.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](422, "div", 3)(423, "div", 4)(424, "div", 62)(425, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](426, " Text Decoration ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](427, "div", 7)(428, "p", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](429, "This text has a line underneath it. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](430, "p", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](431, "This text has a line going through it. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](432, "a", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](433, "This link has its text decoration removed ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](434, "div", 3)(435, "div", 4)(436, "div", 62)(437, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](438, " Font Weight and Italics ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](439, "div", 7)(440, "p", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](441, "Bold text.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](442, "p", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](443, "Bolder weight text (relative to the parent element).");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](444, "p", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](445, "Semibold weight text.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](446, "p", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](447, "Normal weight text.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](448, "p", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](449, "Light weight text.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](450, "p", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](451, "Lighter weight text (relative to the parent element).");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](452, "p", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](453, "Italic text.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](454, "p", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](455, "Text with normal font style");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](456, "div", 3)(457, "div", 4)(458, "div", 62)(459, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](460, " Line Height ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](461, "div", 7)(462, "p", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](463, "This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](464, "p", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](465, "This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](466, "p", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](467, "This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](468, "p", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](469, "This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](470, "div", 97)(471, "div", 4)(472, "div", 62)(473, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](474, " Monospace ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](475, "div", 7)(476, "p", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](477, "This is in monospace");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](478, "div", 97)(479, "div", 4)(480, "div", 62)(481, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](482, " Reset Color ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](483, "div", 7)(484, "p", 98);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](485, " Muted text with a ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](486, "a", 99);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](487, "reset link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](488, ". ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](489, "div", 97)(490, "div", 4)(491, "div", 62)(492, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](493, " Visible Text ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](494, "div", 7)(495, "p", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](496, "This is visible text");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](497, "div", 97)(498, "div", 4)(499, "div", 62)(500, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](501, " Invisible Text ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](502, "div", 7)(503, "p", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](504, "This is invisible text");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](505, "div", 3)(506, "div", 4)(507, "div", 62)(508, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](509, " Text Alignment ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](510, "div", 7)(511, "p", 102);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](512, "Start aligned text on all viewport sizes.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](513, "p", 103);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](514, "Center aligned text on all viewport sizes.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](515, "p", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](516, "End aligned text on all viewport sizes.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](517, "p", 105);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](518, "Start aligned text on viewports sized SM (small) or wider. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](519, "p", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](520, "Start aligned text on viewports sized MD (medium) or wider. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](521, "p", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](522, "Start aligned text on viewports sized LG (large) or wider. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](523, "p", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](524, "Start aligned text on viewports sized XL (extra-large) or wider.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](525, "div", 3)(526, "div", 4)(527, "div", 62)(528, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](529, " Text Wrapping and Overflow ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](530, "div", 7)(531, "div", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](532, " This text should wrap. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](533, "p", 110);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](534, " use class ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](535, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](536, ".text-nowrap");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](537, " to prevent text from wrapping");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](538, "div", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](539, " This text should overflow the parent. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](540, "div", 4)(541, "div", 62)(542, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](543, " Word break ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](544, "div", 7)(545, "p", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](546, " mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 76644:
/*!******************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-typography/ui-typography.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiTypographyModule: () => (/* binding */ UiTypographyModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ui_typography_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-typography-routing.module */ 90365);
/* harmony import */ var _ui_typography_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-typography.component */ 31585);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);




class UiTypographyModule {
  static {
    this.ɵfac = function UiTypographyModule_Factory(t) {
      return new (t || UiTypographyModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: UiTypographyModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_typography_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiTypographyRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UiTypographyModule, {
    declarations: [_ui_typography_component__WEBPACK_IMPORTED_MODULE_1__.UiTypographyComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_typography_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiTypographyRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_base-ui_ui-typography_ui-typography_module_ts.js.map