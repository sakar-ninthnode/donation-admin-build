"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_base-ui_ui-avatar_ui-avatar_module_ts"],{

/***/ 78469:
/*!******************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-avatar/ui-avatar-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiAvatarRoutingModule: () => (/* binding */ UiAvatarRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ui_avatar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-avatar.component */ 17945);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _ui_avatar_component__WEBPACK_IMPORTED_MODULE_0__.UiAvatarComponent
}];
class UiAvatarRoutingModule {
  static {
    this.ɵfac = function UiAvatarRoutingModule_Factory(t) {
      return new (t || UiAvatarRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: UiAvatarRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UiAvatarRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 17945:
/*!*************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-avatar/ui-avatar.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiAvatarComponent: () => (/* binding */ UiAvatarComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/core.index */ 82351);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class UiAvatarComponent {
  constructor() {
    this.routes = src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  static {
    this.ɵfac = function UiAvatarComponent_Factory(t) {
      return new (t || UiAvatarComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UiAvatarComponent,
      selectors: [["app-ui-avatar"]],
      decls: 202,
      vars: 0,
      consts: [[1, "page-header"], [1, "page-title"], [1, "row"], [1, "col-xl-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body", "d-flex", "flex-wrap", "gap-2"], [1, "avatar", "avatar-xl", "me-2", "avatar-rounded"], ["src", "assets/img/profiles/avatar-02.jpg", "alt", "img"], [1, "avatar", "avatar-xl", "me-2", "avatar-radius-0"], [1, "avatar", "avatar-xl", "me-2"], [1, "avatar", "avatar-xl", "bg-primary", "avatar-rounded"], [1, "avatar-title"], [1, "avatar", "avatar-xl", "bg-success", "avatar-radius-0"], [1, "avatar", "avatar-xl", "bg-danger"], [1, "card-body"], [1, "avatar", "avatar-xs", "me-2"], [1, "avatar", "avatar-sm", "me-2"], [1, "avatar", "avatar-md", "me-2"], [1, "avatar", "avatar-lg", "me-2"], [1, "avatar", "avatar-xxl", "me-2"], [1, "avatar", "avatar-xxxl", "me-2"], [1, "avatar", "avatar-xs", "me-2", "online", "avatar-rounded", "me-1"], ["src", "assets/img/profiles/avatar-03.jpg", "alt", "img"], [1, "avatar", "avatar-sm", "online", "me-2", "avatar-rounded", "me-1"], [1, "avatar", "avatar-md", "me-2", "online", "avatar-rounded", "me-1"], [1, "avatar", "avatar-lg", "me-2", "online", "avatar-rounded", "me-1"], [1, "avatar", "avatar-xl", "me-2", "online", "avatar-rounded", "me-1"], [1, "avatar", "avatar-xxl", "me-2", "online", "avatar-rounded", "me-1"], [1, "avatar", "avatar-xs", "me-2", "avatar-rounded"], [1, "badge", "rounded-pill", "bg-primary", "avatar-badge"], [1, "avatar", "avatar-sm", "me-2", "avatar-rounded"], [1, "badge", "rounded-pill", "bg-secondary", "avatar-badge"], [1, "avatar", "avatar-md", "me-2", "avatar-rounded"], [1, "badge", "rounded-pill", "bg-warning", "avatar-badge"], [1, "avatar", "avatar-lg", "me-2", "avatar-rounded"], [1, "badge", "rounded-pill", "bg-info", "avatar-badge"], [1, "badge", "rounded-pill", "bg-success", "avatar-badge"], [1, "avatar", "avatar-xxl", "me-2", "avatar-rounded"], [1, "badge", "rounded-pill", "bg-danger", "avatar-badge"], [1, "avatar", "bg-primary", "avatar-rounded", "me-1"], [1, "avatar", "bg-danger", "avatar-rounded", "me-1"], [1, "avatar", "bg-success", "avatar-rounded", "me-1"], [1, "avatar", "bg-warning", "avatar-rounded", "me-1"], [1, "avatar", "bg-info", "avatar-rounded", "me-1"], [1, "avatar", "bg-soft-secondary", "avatar-rounded", "me-1"], [1, "avatar", "bg-soft-danger", "avatar-rounded", "me-1"], [1, "avatar", "bg-soft-success", "avatar-rounded", "me-1"], [1, "avatar", "bg-soft-info", "avatar-rounded", "me-1"], [1, "avatar-list-stacked", "avatar-group-lg", "mb-4"], [1, "avatar"], ["src", "assets/img/profiles/avatar-04.jpg", "alt", "img"], ["href", "javascript:void(0);", 1, "avatar", "bg-primary", "text-fixed-white"], [1, "avatar-list-stacked", "mb-4"], [1, "avatar-list-stacked", "avatar-group-sm"], [1, "avatar", "avatar-rounded"], ["src", "assets/img/profiles/avatar-05.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/profiles/avatar-05.jpg", "alt", "img"], ["href", "javascript:void(0);", 1, "avatar", "bg-primary", "avatar-rounded", "text-fixed-white"]],
      template: function UiAvatarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Avatars");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Avatars");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7)(11, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 12)(18, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "SR");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 14)(21, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "SR");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 15)(24, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "SR");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 3)(27, "div", 4)(28, "div", 5)(29, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Avatar Sizes");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 16)(32, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 3)(47, "div", 4)(48, "div", 5)(49, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Avatar With Badge");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 16)(52, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "img", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "img", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "img", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "img", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "img", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "img", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 3)(65, "div", 4)(66, "div", 5)(67, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Avatar With Badge");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 16)(70, "span", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "span", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "span", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "span", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "span", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "span", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "7");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "span", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "span", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "span", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "9");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 3)(95, "div", 4)(96, "div", 5)(97, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Avatar With Badge");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 16)(100, "span", 41)(101, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "SR");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "span", 42)(104, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "SR");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "span", 43)(107, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "SR");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "span", 44)(110, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "SR");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "span", 45)(113, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "SR");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 3)(116, "div", 4)(117, "div", 5)(118, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Avatar With Badge");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 16)(121, "span", 46)(122, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "SR");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "span", 47)(125, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "SR");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "span", 48)(128, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "SR");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "span", 47)(131, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "SR");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "span", 49)(134, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "SR");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 3)(137, "div", 4)(138, "div", 5)(139, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "Avatar With Badge");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 16)(142, "div", 50)(143, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](144, "img", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "img", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](148, "img", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "a", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, " +8 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "div", 54)(152, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](153, "img", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](155, "img", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](157, "img", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "a", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, " +8 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 55)(161, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](162, "img", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](164, "img", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](166, "img", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "a", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, " +8 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 3)(170, "div", 4)(171, "div", 5)(172, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "Avatar With Badge");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 16)(175, "div", 50)(176, "span", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](177, "img", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "span", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](179, "img", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "span", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](181, "img", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, " +8 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 54)(185, "span", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](186, "img", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "span", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](188, "img", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "span", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](190, "img", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, " +8 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "div", 55)(194, "span", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](195, "img", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "span", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](197, "img", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "span", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](199, "img", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, " +8 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 15980:
/*!**********************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-avatar/ui-avatar.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiAvatarModule: () => (/* binding */ UiAvatarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ui_avatar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-avatar-routing.module */ 78469);
/* harmony import */ var _ui_avatar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-avatar.component */ 17945);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);




class UiAvatarModule {
  static {
    this.ɵfac = function UiAvatarModule_Factory(t) {
      return new (t || UiAvatarModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: UiAvatarModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_avatar_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiAvatarRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UiAvatarModule, {
    declarations: [_ui_avatar_component__WEBPACK_IMPORTED_MODULE_1__.UiAvatarComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_avatar_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiAvatarRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_base-ui_ui-avatar_ui-avatar_module_ts.js.map