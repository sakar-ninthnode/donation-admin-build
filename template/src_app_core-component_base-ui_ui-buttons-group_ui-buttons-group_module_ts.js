"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_base-ui_ui-buttons-group_ui-buttons-group_module_ts"],{

/***/ 30575:
/*!********************************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-buttons-group/ui-buttons-group-routing.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiButtonsGroupRoutingModule: () => (/* binding */ UiButtonsGroupRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ui_buttons_group_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-buttons-group.component */ 40991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _ui_buttons_group_component__WEBPACK_IMPORTED_MODULE_0__.UiButtonsGroupComponent
}];
class UiButtonsGroupRoutingModule {
  static {
    this.ɵfac = function UiButtonsGroupRoutingModule_Factory(t) {
      return new (t || UiButtonsGroupRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: UiButtonsGroupRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UiButtonsGroupRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 40991:
/*!***************************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-buttons-group/ui-buttons-group.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiButtonsGroupComponent: () => (/* binding */ UiButtonsGroupComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class UiButtonsGroupComponent {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  static {
    this.ɵfac = function UiButtonsGroupComponent_Factory(t) {
      return new (t || UiButtonsGroupComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UiButtonsGroupComponent,
      selectors: [["app-ui-buttons-group"]],
      decls: 715,
      vars: 0,
      consts: [[1, "page-header"], [1, "page-title"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body", "btn-group-showcase"], [1, "row", "g-3"], [1, "col-xxl-3", "col-md-6", "col-sm-12"], ["role", "group", "aria-label", "Basic example", 1, "btn-group"], ["type", "button", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-info"], ["type", "button", 1, "btn", "btn-warning"], ["type", "button", 1, "btn", "btn-danger"], ["type", "button", 1, "btn", "btn-light"], [1, "col-xxl-3", "col-md-6", "col-sm-12", "button-group-mb-sm"], ["type", "button", 1, "btn", "btn-dark"], ["type", "button", 1, "btn", "btn-outline-primary"], ["type", "button", 1, "btn", "btn-outline-secondary"], ["type", "button", 1, "btn", "btn-outline-success"], ["type", "button", 1, "btn", "btn-outline-info"], ["type", "button", 1, "btn", "btn-outline-warning"], ["type", "button", 1, "btn", "btn-outline-danger"], ["type", "button", 1, "btn", "btn-outline-light", "txt-dark"], ["type", "button", 1, "btn", "btn-outline-dark"], ["role", "group", "aria-label", "Basic example", 1, "btn-group", "btn-group-pill"], ["role", "group", "aria-label", "Basic example", 1, "btn-group", "btn-group-square"], [1, "col-xl-3"], [1, "card-body"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-soft-danger", "btn-outline-danger"], ["type", "button", 1, "btn", "btn-soft-danger"], [1, "col-xl-6"], [1, "card-header", "justify-content-between"], ["role", "group", "aria-label", "Basic mixed styles example", 1, "btn-group"], ["role", "group", "aria-label", "Button group with nested dropdown", 1, "btn-group"], ["role", "group", 1, "btn-group"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "btn-group", "me-2"], [1, "btn", "btn-primary"], [1, "fa", "fa-bold"], [1, "btn", "btn-secondary"], [1, "fa", "fa", "fa-italic"], [1, "btn", "btn-success"], [1, "fa", "fa-file-image"], [1, "btn", "btn-info"], [1, "fa", "fa-paperclip"], ["role", "group", "aria-label", "Basic checkbox toggle button group", 1, "btn-group"], ["type", "checkbox", "id", "btncheck1", 1, "btn-check"], ["for", "btncheck1", 1, "btn", "btn-outline-primary"], ["type", "checkbox", "id", "btncheck2", 1, "btn-check"], ["for", "btncheck2", 1, "btn", "btn-outline-primary"], ["type", "checkbox", "id", "btncheck3", 1, "btn-check"], ["for", "btncheck3", 1, "btn", "btn-outline-primary"], [1, "card-body", "radio-button-group"], ["role", "group", "aria-label", "Basic radio toggle button group", 1, "btn-group"], ["type", "radio", "name", "btnradio", "id", "btnradio1", "checked", "", 1, "btn-check"], ["for", "btnradio1", 1, "btn", "btn-outline-primary"], ["type", "radio", "name", "btnradio", "id", "btnradio2", 1, "btn-check"], ["for", "btnradio2", 1, "btn", "btn-outline-primary"], ["type", "radio", "name", "btnradio", "id", "btnradio3", 1, "btn-check"], ["for", "btnradio3", 1, "btn", "btn-outline-primary"], [1, "col-xl-12"], ["role", "group", "aria-label", "Large button group", 1, "btn-group", "btn-group-lg", "mb-3"], ["role", "group", "aria-label", "Default button group", 1, "btn-group", "mb-3"], ["role", "group", "aria-label", "Small button group", 1, "btn-group", "btn-group-sm"], ["role", "toolbar", "aria-label", "Toolbar with button groups", 1, "btn-toolbar", "mb-4"], ["role", "group", "aria-label", "First group", 1, "btn-group", "me-2", "my-1"], ["role", "group", "aria-label", "Second group", 1, "btn-group", "me-2", "my-1"], ["role", "group", "aria-label", "Third group", 1, "btn-group", "my-1"], ["role", "toolbar", "aria-label", "Toolbar with button groups", 1, "btn-toolbar", "mb-3"], [1, "input-group"], ["id", "btnGroupAddon", 1, "input-group-text"], ["type", "text", "placeholder", "Input group example", "aria-label", "Input group example", "aria-describedby", "btnGroupAddon", 1, "form-control"], ["role", "toolbar", "aria-label", "Toolbar with button groups", 1, "btn-toolbar", "justify-content-between"], ["role", "group", "aria-label", "First group", 1, "btn-group", "my-1"], ["id", "btnGroupAddon2", 1, "input-group-text"], ["type", "text", "placeholder", "Input group example", "aria-label", "Input group example", "aria-describedby", "btnGroupAddon2", 1, "form-control"], [1, "row", "gap-2"], [1, "col-sm-3"], ["role", "group", "aria-label", "Vertical button group", 1, "btn-group-vertical"], ["role", "group", 1, "btn-group", "dropstart"], ["role", "group", 1, "btn-group", "dropend"], ["role", "group", 1, "btn-group", "dropup"], ["role", "group", "aria-label", "Vertical radio toggle button group", 1, "btn-group-vertical"], ["type", "radio", "name", "vbtn-radio", "id", "vbtn-radio1", "checked", "", 1, "btn-check"], ["for", "vbtn-radio1", 1, "btn", "btn-outline-primary", "custom-space"], ["type", "radio", "name", "vbtn-radio", "id", "vbtn-radio2", 1, "btn-check"], ["for", "vbtn-radio2", 1, "btn", "btn-outline-primary", "custom-space"], ["type", "radio", "name", "vbtn-radio", "id", "vbtn-radio3", 1, "btn-check"], ["for", "vbtn-radio3", 1, "btn", "btn-outline-primary", "custom-space"]],
      template: function UiButtonsGroupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Buttons Group");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Basic button group");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9)(21, "div", 10)(22, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 9)(29, "div", 10)(30, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 9)(37, "div", 10)(38, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 9)(45, "div", 10)(46, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 9)(53, "div", 10)(54, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 9)(61, "div", 10)(62, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 18)(69, "div", 10)(70, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 3)(77, "div", 4)(78, "div", 5)(79, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Outline button group");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 7)(82, "div", 8)(83, "div", 9)(84, "div", 10)(85, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 9)(92, "div", 10)(93, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 9)(100, "div", 10)(101, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 9)(108, "div", 10)(109, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 9)(116, "div", 10)(117, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 9)(124, "div", 10)(125, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 9)(132, "div", 10)(133, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 18)(140, "div", 10)(141, "button", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "button", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "button", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 3)(148, "div", 4)(149, "div", 5)(150, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "Edges button group");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div", 7)(153, "div", 8)(154, "div", 9)(155, "div", 28)(156, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 9)(163, "div", 28)(164, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 9)(171, "div", 28)(172, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "div", 9)(179, "div", 28)(180, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "div", 9)(187, "div", 28)(188, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "div", 9)(195, "div", 28)(196, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "div", 9)(203, "div", 28)(204, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "div", 18)(211, "div", 28)(212, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](213, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "div", 3)(219, "div", 4)(220, "div", 5)(221, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](222, "Outline Edges button");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "div", 7)(224, "div", 8)(225, "div", 9)(226, "div", 28)(227, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](228, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](230, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "div", 9)(234, "div", 28)(235, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](236, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](238, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](240, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "div", 9)(242, "div", 28)(243, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](244, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](246, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](248, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "div", 9)(250, "div", 28)(251, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](252, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](254, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](256, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "div", 9)(258, "div", 28)(259, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](260, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](262, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](264, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "div", 9)(266, "div", 28)(267, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](268, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](270, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](272, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "div", 9)(274, "div", 28)(275, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](276, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](278, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](279, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](280, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](281, "div", 18)(282, "div", 28)(283, "button", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](284, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](285, "button", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](286, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "button", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](288, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "div", 3)(290, "div", 4)(291, "div", 5)(292, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](293, "Flat button group");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "div", 7)(295, "div", 8)(296, "div", 9)(297, "div", 29)(298, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](299, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](301, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](303, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](304, "div", 9)(305, "div", 29)(306, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](307, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](308, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](309, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](310, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](311, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](312, "div", 9)(313, "div", 29)(314, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](315, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](316, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](317, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](318, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](319, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](320, "div", 9)(321, "div", 29)(322, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](323, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](324, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](325, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](326, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](327, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](328, "div", 9)(329, "div", 29)(330, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](331, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](332, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](333, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](334, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](335, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](336, "div", 9)(337, "div", 29)(338, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](339, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](340, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](341, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](342, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](343, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](344, "div", 9)(345, "div", 29)(346, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](347, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](348, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](349, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](350, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](351, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](352, "div", 9)(353, "div", 29)(354, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](355, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](356, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](357, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](358, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](359, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](360, "div", 3)(361, "div", 4)(362, "div", 5)(363, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](364, "Outline flat button");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](365, "div", 7)(366, "div", 8)(367, "div", 9)(368, "div", 29)(369, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](370, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](371, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](372, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](373, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](374, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](375, "div", 9)(376, "div", 29)(377, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](378, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](379, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](380, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](381, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](382, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](383, "div", 9)(384, "div", 29)(385, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](386, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](387, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](388, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](389, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](390, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](391, "div", 9)(392, "div", 29)(393, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](394, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](395, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](396, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](397, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](398, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](399, "div", 9)(400, "div", 29)(401, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](402, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](403, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](404, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](405, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](406, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](407, "div", 9)(408, "div", 29)(409, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](410, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](411, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](412, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](413, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](414, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](415, "div", 9)(416, "div", 29)(417, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](418, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](419, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](420, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](421, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](422, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](423, "div", 18)(424, "div", 29)(425, "button", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](426, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](427, "button", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](428, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](429, "button", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](430, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](431, "div", 2)(432, "div", 30)(433, "div", 4)(434, "div", 5)(435, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](436, "Default Buttons");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](437, "div", 31)(438, "div", 32)(439, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](440, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](441, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](442, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](443, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](444, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](445, "div", 30)(446, "div", 4)(447, "div", 5)(448, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](449, "Default Buttons");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](450, "div", 31)(451, "div", 32)(452, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](453, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](454, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](455, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](456, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](457, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](458, "div", 30)(459, "div", 4)(460, "div", 5)(461, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](462, "Default Buttons");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](463, "div", 31)(464, "div", 32)(465, "button", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](466, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](467, "button", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](468, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](469, "button", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](470, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](471, "div", 30)(472, "div", 4)(473, "div", 5)(474, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](475, "Default Buttons");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](476, "div", 31)(477, "div", 32)(478, "button", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](479, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](480, "button", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](481, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](482, "button", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](483, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](484, "div", 35)(485, "div", 4)(486, "div", 36)(487, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](488, "Mixed styles");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](489, "div", 31)(490, "div", 37)(491, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](492, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](493, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](494, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](495, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](496, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](497, "div", 35)(498, "div", 4)(499, "div", 36)(500, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](501, " Nesting ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](502, "div", 31)(503, "div", 38)(504, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](505, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](506, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](507, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](508, "div", 39)(509, "button", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](510, " Dropdown ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](511, "ul", 41)(512, "li")(513, "a", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](514, "Dropdown link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](515, "li")(516, "a", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](517, "Dropdown link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](518, "div", 43)(519, "button", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](520, "i", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](521, "button", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](522, "i", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](523, "button", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](524, "i", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](525, "button", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](526, "i", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](527, "div", 35)(528, "div", 4)(529, "div", 36)(530, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](531, " Checkbox button groups ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](532, "div", 31)(533, "div", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](534, "input", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](535, "label", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](536, "Checkbox 1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](537, "input", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](538, "label", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](539, "Checkbox 2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](540, "input", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](541, "label", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](542, "Checkbox 3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](543, "div", 35)(544, "div", 4)(545, "div", 36)(546, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](547, " Radio button groups ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](548, "div", 59)(549, "div", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](550, "input", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](551, "label", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](552, "Radio 1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](553, "input", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](554, "label", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](555, "Radio 2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](556, "input", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](557, "label", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](558, "Radio 3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](559, "div", 2)(560, "div", 67)(561, "div", 4)(562, "div", 5)(563, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](564, "Sizing");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](565, "div", 31)(566, "div", 68)(567, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](568, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](569, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](570, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](571, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](572, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](573, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](574, "div", 69)(575, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](576, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](577, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](578, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](579, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](580, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](581, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](582, "div", 70)(583, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](584, "Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](585, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](586, "Middle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](587, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](588, "Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](589, "div", 35)(590, "div", 4)(591, "div", 36)(592, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](593, " Button toolbar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](594, "div", 31)(595, "div", 71)(596, "div", 72)(597, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](598, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](599, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](600, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](601, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](602, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](603, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](604, "4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](605, "div", 73)(606, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](607, "5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](608, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](609, "6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](610, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](611, "7");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](612, "div", 74)(613, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](614, "8");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](615, "div", 75)(616, "div", 72)(617, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](618, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](619, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](620, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](621, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](622, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](623, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](624, "4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](625, "div", 76)(626, "div", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](627, "@");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](628, "input", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](629, "div", 79)(630, "div", 80)(631, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](632, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](633, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](634, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](635, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](636, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](637, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](638, "4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](639, "div", 76)(640, "div", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](641, "@");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](642, "input", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](643, "div", 35)(644, "div", 4)(645, "div", 5)(646, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](647, "Vertical");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](648, "div", 31)(649, "div", 83)(650, "div", 84)(651, "div", 85)(652, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](653, "Button");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](654, "div", 39)(655, "button", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](656, " Dropdown ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](657, "ul", 41)(658, "li")(659, "a", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](660, "Dropdown link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](661, "li")(662, "a", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](663, "Dropdown link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](664, "div", 86)(665, "button", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](666, " Dropdown ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](667, "ul", 41)(668, "li")(669, "a", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](670, "Dropdown link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](671, "li")(672, "a", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](673, "Dropdown link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](674, "div", 87)(675, "button", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](676, " Dropdown ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](677, "ul", 41)(678, "li")(679, "a", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](680, "Dropdown link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](681, "li")(682, "a", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](683, "Dropdown link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](684, "div", 88)(685, "button", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](686, " Dropdown ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](687, "ul", 41)(688, "li")(689, "a", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](690, "Dropdown link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](691, "li")(692, "a", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](693, "Dropdown link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](694, "div", 84)(695, "div", 85)(696, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](697, "Button");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](698, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](699, "Button");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](700, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](701, "Button");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](702, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](703, "Button");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](704, "div", 84)(705, "div", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](706, "input", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](707, "label", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](708, "Radio 1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](709, "input", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](710, "label", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](711, "Radio 2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](712, "input", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](713, "label", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](714, "Radio 3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 54302:
/*!************************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-buttons-group/ui-buttons-group.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiButtonsGroupModule: () => (/* binding */ UiButtonsGroupModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ui_buttons_group_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-buttons-group-routing.module */ 30575);
/* harmony import */ var _ui_buttons_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-buttons-group.component */ 40991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);




class UiButtonsGroupModule {
  static {
    this.ɵfac = function UiButtonsGroupModule_Factory(t) {
      return new (t || UiButtonsGroupModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: UiButtonsGroupModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_buttons_group_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiButtonsGroupRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UiButtonsGroupModule, {
    declarations: [_ui_buttons_group_component__WEBPACK_IMPORTED_MODULE_1__.UiButtonsGroupComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_buttons_group_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiButtonsGroupRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_base-ui_ui-buttons-group_ui-buttons-group_module_ts.js.map