"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_base-ui_ui-borders_ui-borders_module_ts"],{

/***/ 87119:
/*!********************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-borders/ui-borders-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiBordersRoutingModule: () => (/* binding */ UiBordersRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ui_borders_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-borders.component */ 74335);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _ui_borders_component__WEBPACK_IMPORTED_MODULE_0__.UiBordersComponent
}];
class UiBordersRoutingModule {
  static {
    this.ɵfac = function UiBordersRoutingModule_Factory(t) {
      return new (t || UiBordersRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: UiBordersRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UiBordersRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 74335:
/*!***************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-borders/ui-borders.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiBordersComponent: () => (/* binding */ UiBordersComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class UiBordersComponent {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  static {
    this.ɵfac = function UiBordersComponent_Factory(t) {
      return new (t || UiBordersComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UiBordersComponent,
      selectors: [["app-ui-borders"]],
      decls: 108,
      vars: 0,
      consts: [[1, "page-header"], [1, "page-title"], [1, "row"], [1, "col-xl-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "border", "border-container"], [1, "border-top", "border-container"], [1, "border-end", "border-container"], [1, "border-bottom", "border-container"], [1, "border-start", "border-container"], [1, "border-0", "border-container"], [1, "border", "border-top-0", "border-container"], [1, "border", "border-end-0", "border-container"], [1, "border", "border-bottom-0", "border-container"], [1, "border", "border-start-0", "border-container"], [1, "border", "border-container", "border-1"], [1, "border", "border-container", "border-2"], [1, "border", "border-container", "border-3"], [1, "border", "border-container", "border-4"], [1, "border", "border-container", "border-5"], [1, "border", "border-container", "border-primary"], [1, "border", "border-container", "border-secondary"], [1, "border", "border-container", "border-success"], [1, "border", "border-container", "border-danger"], [1, "border", "border-container", "border-warning"], [1, "border", "border-container", "border-info"], [1, "border", "border-container", "border-light"], [1, "border", "border-container", "border-dark"], [1, "border", "border-container", "border-white"], [1, "card-header", "justify-content-between"], [1, "mb-4"], ["for", "exampleFormControlInput1", 1, "form-label"], ["type", "email", "id", "exampleFormControlInput1", "placeholder", "name@example.com", 1, "form-control", "border-success"], [1, "h4", "pb-3", "mb-4", "text-danger", "border-bottom", "border-danger"], [1, "p-3", "bg-info", "bg-opacity-10", "border", "border-info", "border-start-0", "rounded-end", "mb-1", "text-muted"], [1, "border", "border-success", "p-2", "mb-2"], [1, "border", "border-success", "p-2", "mb-2", "border-opacity-75"], [1, "border", "border-success", "p-2", "mb-2", "border-opacity-50"], [1, "border", "border-success", "p-2", "mb-2", "border-opacity-25"], [1, "border", "border-success", "p-2", "border-opacity-10"], ["src", "assets/img/avatar/avatar-1.jpg", "alt", "img", 1, "avatar-xxl", "avatar", "bd-placeholder-img", "rounded", "me-1"], ["src", "assets/img/avatar/avatar-2.jpg", "alt", "img", 1, "avatar-xxl", "avatar", "d-placeholder-img", "rounded-top", "me-1"], ["src", "assets/img/avatar/avatar-3.jpg", "alt", "img", 1, "avatar-xxl", "avatar", "bd-placeholder-img", "rounded-end", "me-1"], ["src", "assets/img/avatar/avatar-7.jpg", "alt", "img", 1, "avatar-xxl", "avatar", "bd-placeholder-img", "rounded-bottom", "me-3"], ["src", "assets/img/avatar/avatar-4.jpg", "alt", "img", 1, "avatar-xxl", "avatar", "bd-placeholder-img", "rounded-start"], ["src", "assets/img/avatar/avatar-5.jpg", "alt", "img", 1, "avatar-xxl", "avatar", "bd-placeholder-img", "rounded-circle"], ["src", "assets/img/avatar/avatar-6.jpg", "alt", "img", 1, "avatar-xxl", "avatar", "bd-placeholder-img", "rounded-pill"], ["src", "assets/img/avatar/avatar-1.jpg", "alt", "img", 1, "avatar-xxl", "avatar", "bd-placeholder-img", "bd-placeholder-img", "rounded-0", "me-1"], ["src", "assets/img/avatar/avatar-2.jpg", "alt", "img", 1, "avatar-xxl", "avatar", "bd-placeholder-img", "bd-placeholder-img", "rounded-1", "me-1"], ["src", "assets/img/avatar/avatar-3.jpg", "alt", "img", 1, "avatar-xxl", "avatar", "bd-placeholder-img", "bd-placeholder-img", "rounded-2", "me-1"], ["src", "assets/img/avatar/avatar-4.jpg", "alt", "img", 1, "avatar-xxl", "avatar", "bd-placeholder-img", "bd-placeholder-img", "rounded-3", "me-2"], ["src", "assets/img/avatar/avatar-5.jpg", "alt", "img", 1, "avatar-xxl", "avatar", "bd-placeholder-img", "bd-placeholder-img", "rounded-4"], ["src", "assets/img/avatar/avatar-6.jpg", "alt", "img", 1, "avatar-xxl", "avatar", "bd-placeholder-img", "bd-placeholder-img", "rounded-5"]],
      template: function UiBordersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Borders");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Borders");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "span", 8)(12, "span", 9)(13, "span", 10)(14, "span", 11)(15, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 3)(17, "div", 4)(18, "div", 5)(19, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Remove Borders");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "span", 13)(23, "span", 14)(24, "span", 15)(25, "span", 16)(26, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 3)(28, "div", 4)(29, "div", 5)(30, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Border Widths ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "span", 18)(34, "span", 19)(35, "span", 20)(36, "span", 21)(37, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 3)(39, "div", 4)(40, "div", 5)(41, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Border Colors");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "span", 23)(45, "span", 24)(46, "span", 25)(47, "span", 26)(48, "span", 27)(49, "span", 28)(50, "span", 29)(51, "span", 30)(52, "span", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 3)(54, "div", 4)(55, "div", 32)(56, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " Border color Styling ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 7)(59, "div", 33)(60, "label", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Email address");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "input", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, " Below Shows Danger Border ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, " Customizing borders with backgrounud colors ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 3)(68, "div", 4)(69, "div", 32)(70, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, " Border with opacity ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 7)(73, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "This is default success border");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "This is 75% opacity success border ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "This is 50% opacity success border ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "This is 25% opacity success border ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "This is 10% opacity success border ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 3)(84, "div", 4)(85, "div", 5)(86, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Border Radius");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "img", 43)(90, "img", 44)(91, "img", 45)(92, "img", 46)(93, "img", 47)(94, "img", 48)(95, "img", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 3)(97, "div", 4)(98, "div", 5)(99, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Sizes");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "img", 50)(103, "img", 51)(104, "img", 52)(105, "img", 53)(106, "img", 54)(107, "img", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 77822:
/*!************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-borders/ui-borders.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiBordersModule: () => (/* binding */ UiBordersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ui_borders_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-borders-routing.module */ 87119);
/* harmony import */ var _ui_borders_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-borders.component */ 74335);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);




class UiBordersModule {
  static {
    this.ɵfac = function UiBordersModule_Factory(t) {
      return new (t || UiBordersModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: UiBordersModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_borders_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiBordersRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UiBordersModule, {
    declarations: [_ui_borders_component__WEBPACK_IMPORTED_MODULE_1__.UiBordersComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_borders_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiBordersRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_base-ui_ui-borders_ui-borders_module_ts.js.map