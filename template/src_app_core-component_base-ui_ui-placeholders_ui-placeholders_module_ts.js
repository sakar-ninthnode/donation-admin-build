"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_base-ui_ui-placeholders_ui-placeholders_module_ts"],{

/***/ 33397:
/*!******************************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-placeholders/ui-placeholders-routing.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiPlaceholdersRoutingModule: () => (/* binding */ UiPlaceholdersRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ui_placeholders_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-placeholders.component */ 12905);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _ui_placeholders_component__WEBPACK_IMPORTED_MODULE_0__.UiPlaceholdersComponent
}];
class UiPlaceholdersRoutingModule {
  static {
    this.ɵfac = function UiPlaceholdersRoutingModule_Factory(t) {
      return new (t || UiPlaceholdersRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: UiPlaceholdersRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UiPlaceholdersRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 12905:
/*!*************************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-placeholders/ui-placeholders.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiPlaceholdersComponent: () => (/* binding */ UiPlaceholdersComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class UiPlaceholdersComponent {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  static {
    this.ɵfac = function UiPlaceholdersComponent_Factory(t) {
      return new (t || UiPlaceholdersComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UiPlaceholdersComponent,
      selectors: [["app-ui-placeholders"]],
      decls: 129,
      vars: 0,
      consts: [[1, "page-header"], [1, "page-title"], [1, "row"], [1, "col-xl-6"], [1, "card"], [1, "card-body", "card-buttons", "pb-0"], [1, "header-title"], [1, "text-muted"], [1, "col-md-6"], [1, "card", "border", "shadow-none"], ["src", "assets/img/img-1.jpg", "alt", "...", 1, "card-img-top"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["href", "javascript:void(0);", 1, "btn", "btn-primary"], ["aria-hidden", "true", 1, "card", "border", "shadow-none", "mb-0"], ["src", "assets/img/img-2.jpg", "alt", "...", 1, "card-img-top"], [1, "card-title", "placeholder-glow"], [1, "placeholder", "col-6"], [1, "card-text", "placeholder-glow"], [1, "placeholder", "col-7"], [1, "placeholder", "col-4"], [1, "placeholder", "col-8"], ["href", "javascript:void(0);", "tabindex", "-1", 1, "btn", "btn-primary", "disabled", "placeholder", "col-6"], [1, "card-body", "card-buttons"], [1, "placeholder", "w-75"], [1, "placeholder", 2, "width", "25%"], [1, "placeholder", "col-12", "placeholder-lg"], [1, "placeholder", "col-12"], [1, "placeholder", "col-12", "placeholder-sm"], [1, "placeholder", "col-12", "placeholder-xs"], [1, "placeholder", "col-12", "bg-primary"], [1, "placeholder", "col-12", "bg-secondary"], [1, "placeholder", "col-12", "bg-success"], [1, "placeholder", "col-12", "bg-danger"], [1, "placeholder", "col-12", "bg-warning"], [1, "placeholder", "col-12", "bg-info"], [1, "placeholder", "col-12", "bg-light"], [1, "placeholder", "col-12", "bg-dark"], ["aria-hidden", "true"], ["href", "javascript:void(0);", "aria-hidden", "true", 1, "btn", "btn-primary", "disabled", "placeholder", "col-4"], [1, "placeholder-glow"], [1, "placeholder-wave", "mb-0"]],
      template: function UiPlaceholdersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Placeholders");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "h4", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Placeholders");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "In the example below, we take a typical card component and recreate it with placeholders applied to create a \u201Cloading card\u201D. Size and proportions are the same between the two.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 2)(13, "div", 8)(14, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11)(17, "h5", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Card title");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Some quick example text to build on the card title and make up the bulk of the card's content.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Go somewhere");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 8)(24, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "img", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 11)(27, "p", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "span", 20)(31, "span", 21)(32, "span", 21)(33, "span", 18)(34, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 4)(37, "div", 24)(38, "h4", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Width");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "You can change the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "width");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " through grid column classes, width utilities, or inline styles.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "span", 18)(46, "span", 25)(47, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 4)(49, "div", 24)(50, "h4", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Sizing");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "The size of ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, ".placeholder");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "s are based on the typographic style of the parent element. Customize them with sizing modifiers: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, ".placeholder-lg");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, ", ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, ".placeholder-sm");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, ", or ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, ".placeholder-xs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "span", 27)(67, "span", 28)(68, "span", 29)(69, "span", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 3)(71, "div", 4)(72, "div", 24)(73, "h4", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Color");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "By default, the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "placeholder");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, " uses ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "currentColor");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, ". This can be overriden with a custom color or utility class.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "span", 28)(84, "span", 31)(85, "span", 32)(86, "span", 33)(87, "span", 34)(88, "span", 35)(89, "span", 36)(90, "span", 37)(91, "span", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 4)(93, "div", 24)(94, "h4", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "How it works");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Create placeholders with the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, ".placeholder");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, " class and a grid column class (e.g., ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, ".col-6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, ") to set the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "width");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, ". They can replace the text inside an element or as be added as a modifier class to an existing component.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "p", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "a", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 4)(111, "div", 24)(112, "h4", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Animation");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Animate placehodlers with ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, ".placeholder-glow");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, " or ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, ".placeholder-wave");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, " to better convey the perception of something being ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "em");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "actively");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, " loaded.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "p", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "p", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](128, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 39484:
/*!**********************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-placeholders/ui-placeholders.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiPlaceholdersModule: () => (/* binding */ UiPlaceholdersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ui_placeholders_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-placeholders-routing.module */ 33397);
/* harmony import */ var _ui_placeholders_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-placeholders.component */ 12905);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);




class UiPlaceholdersModule {
  static {
    this.ɵfac = function UiPlaceholdersModule_Factory(t) {
      return new (t || UiPlaceholdersModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: UiPlaceholdersModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_placeholders_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiPlaceholdersRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UiPlaceholdersModule, {
    declarations: [_ui_placeholders_component__WEBPACK_IMPORTED_MODULE_1__.UiPlaceholdersComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_placeholders_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiPlaceholdersRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_base-ui_ui-placeholders_ui-placeholders_module_ts.js.map