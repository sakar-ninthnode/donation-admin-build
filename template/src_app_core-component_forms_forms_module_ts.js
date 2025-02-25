"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_forms_forms_module_ts"],{

/***/ 49407:
/*!*****************************************************************************************************!*\
  !*** ./src/app/core-component/forms/form-elements/form-basic-inputs/form-basic-inputs.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormBasicInputsComponent: () => (/* binding */ FormBasicInputsComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);




class FormBasicInputsComponent {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    this.selectedValue = '';
    this.selectedList = [{
      value: '-- Select --'
    }, {
      value: 'Option 1'
    }, {
      value: 'Option 2'
    }, {
      value: 'Option 3'
    }, {
      value: 'Option 4'
    }, {
      value: 'Option 5'
    }];
  }
  static {
    this.ɵfac = function FormBasicInputsComponent_Factory(t) {
      return new (t || FormBasicInputsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FormBasicInputsComponent,
      selectors: [["app-form-basic-inputs"]],
      decls: 249,
      vars: 1,
      consts: [[1, "cardhead"], [1, "container-fluid"], [1, "page-header"], [1, "row"], [1, "col"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "active"], [1, "col-lg-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["action", "#"], [1, "mb-3", "row"], [1, "col-form-label", "col-lg-2"], [1, "col-lg-10"], [1, "input-group"], ["id", "basic-addon1", 1, "input-group-text"], ["type", "text", "placeholder", "Username", "aria-label", "Username", "aria-describedby", "basic-addon1", 1, "form-control"], ["type", "text", "placeholder", "Recipient's username", "aria-label", "Recipient's username", "aria-describedby", "basic-addon2", 1, "form-control"], ["id", "basic-addon2", 1, "input-group-text"], ["id", "basic-addon3", 1, "input-group-text"], ["type", "text", "id", "basic-url", "aria-describedby", "basic-addon3", 1, "form-control"], [1, "input-group-text"], ["type", "text", "aria-label", "Amount (to the nearest dollar)", 1, "form-control"], [1, "mb-3", "row", "mb-0"], [1, "input-group", "mb-3"], ["type", "text", 1, "form-control"], ["aria-label", "With textarea", 1, "form-control"], [1, "input-group", "input-group-lg"], ["id", "inputGroup-sizing-lg", 1, "input-group-text"], ["type", "text", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-lg", 1, "form-control"], ["id", "inputGroup-sizing-default", 1, "input-group-text"], ["type", "text", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-default", 1, "form-control"], [1, "input-group", "input-group-sm"], ["id", "inputGroup-sizing-sm", 1, "input-group-text"], ["type", "text", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-sm", 1, "form-control"], ["type", "checkbox", "value", "", "aria-label", "Checkbox for following text input", 1, "form-check-input"], ["type", "text", "aria-label", "Text input with checkbox", 1, "form-control"], ["type", "radio", "value", "", "aria-label", "Radio button for following text input", 1, "form-check-input"], ["type", "text", "aria-label", "Text input with radio button", 1, "form-control"], ["type", "checkbox"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "dropdown-divider"], ["type", "text", "aria-label", "Text input with dropdown button", 1, "form-control"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-primary", "dropdown-toggle"], [1, "dropdown-menu", "dropdown-menu-end"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-soft-primary", "dropdown-toggle"], ["type", "text", "aria-label", "Text input with 2 dropdown buttons", 1, "form-control"]],
      template: function FormBasicInputsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h3", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Basic Inputs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 6)(8, "li", 7)(9, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Basic Inputs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 3)(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "h5", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Basic Examples");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14)(20, "form", 15)(21, "div", 16)(22, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Group Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 18)(25, "div", 19)(26, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "@");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 16)(30, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Group Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 18)(33, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "@example.com");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 16)(38, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "URL Example");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 18)(41, "div", 19)(42, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "https://example.com/users/");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 16)(46, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Group with Price");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 18)(49, "div", 19)(50, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "$");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, ".00");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 28)(56, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Group with Price (Left)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 18)(59, "div", 29)(60, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "$");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "input", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 19)(66, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "$");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, ".00");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 28)(72, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "With textarea");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 18)(75, "div", 19)(76, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "With textarea");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "textarea", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 11)(80, "div", 12)(81, "h5", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Sizing");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 14)(84, "form", 15)(85, "div", 16)(86, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Input Group Large");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 18)(89, "div", 32)(90, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Large");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "input", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 16)(94, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Input Group Default");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 18)(97, "div", 19)(98, "span", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Default");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "input", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 28)(102, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Input Group Small");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 18)(105, "div", 37)(106, "span", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Small");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "input", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 11)(110, "div", 12)(111, "h5", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Checkbox and Radio Addons");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 14)(114, "form", 15)(115, "div", 16)(116, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Checkbox");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 18)(119, "div", 19)(120, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "input", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](122, "input", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 28)(124, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "Radio");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 18)(127, "div", 19)(128, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](129, "input", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "input", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 11)(132, "div", 12)(133, "h5", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "Multiple Addons");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 14)(136, "form", 15)(137, "div", 16)(138, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "Radio and Text Addons");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 18)(141, "div", 19)(142, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](143, "input", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "$");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "input", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 28)(148, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "Two Addons");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 18)(151, "div", 19)(152, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "$");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](156, "input", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 11)(158, "div", 12)(159, "h5", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "Buttons with dropdowns");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 14)(162, "form", 15)(163, "div", 16)(164, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "Left Dropdown Text Addons");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 18)(167, "div", 19)(168, "button", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "Dropdown");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "ul", 46)(171, "li")(172, "a", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "li")(175, "a", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "Another action");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "li")(178, "a", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "Something else here");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](181, "hr", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "li")(183, "a", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "Separated link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](185, "input", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "div", 28)(187, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "Right Dropdown Text Addons");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 18)(190, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](191, "input", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "button", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, "Dropdown");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "ul", 51)(195, "li")(196, "a", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "li")(199, "a", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, "Another action");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "li")(202, "a", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "Something else here");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](205, "hr", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "li")(207, "a", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](208, "Separated link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "div", 28)(210, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](211, "Right Dropdown Text Addons");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "div", 18)(213, "div", 19)(214, "button", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215, "Dropdown");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "ul", 46)(217, "li")(218, "a", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, "Action before");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "li")(221, "a", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](222, "Another action before");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "li")(224, "a", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](225, "Something else here");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](227, "hr", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "li")(229, "a", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](230, "Separated link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](231, "input", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "button", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](233, "Dropdown");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "ul", 51)(235, "li")(236, "a", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](237, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "li")(239, "a", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](240, "Another action");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "li")(242, "a", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](243, "Something else here");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](245, "hr", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "li")(247, "a", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](248, "Separated link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.dashboard);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 23575:
/*!***********************************************************************************************************!*\
  !*** ./src/app/core-component/forms/form-elements/form-checkbox-radios/form-checkbox-radios.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormCheckboxRadiosComponent: () => (/* binding */ FormCheckboxRadiosComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);



class FormCheckboxRadiosComponent {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  static {
    this.ɵfac = function FormCheckboxRadiosComponent_Factory(t) {
      return new (t || FormCheckboxRadiosComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FormCheckboxRadiosComponent,
      selectors: [["app-form-checkbox-radios"]],
      decls: 206,
      vars: 1,
      consts: [[1, "page-header"], [1, "row"], [1, "col"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "active"], [1, "col-xl-6"], [1, "card"], [1, "card-header", "justify-content-between"], [1, "card-title"], [1, "card-body"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input"], ["for", "flexCheckDefault", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "flexCheckChecked", "checked", "", 1, "form-check-input"], ["for", "flexCheckChecked", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "flexCheckDisabled", "disabled", "", 1, "form-check-input"], ["for", "flexCheckDisabled", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "flexCheckCheckedDisabled", "checked", "", "disabled", "", 1, "form-check-input"], ["for", "flexCheckCheckedDisabled", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault1", 1, "form-check-input"], ["for", "flexRadioDefault1", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault2", "checked", "", 1, "form-check-input"], ["for", "flexRadioDefault2", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDisabled", "id", "flexRadioDisabled", "disabled", "", 1, "form-check-input"], ["for", "flexRadioDisabled", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDisabled", "id", "flexRadioCheckedDisabled", "checked", "", "disabled", "", 1, "form-check-input"], ["for", "flexRadioCheckedDisabled", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "defaultCheck1", 1, "form-check-input"], ["for", "defaultCheck1", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "defaultCheck2", "disabled", "", 1, "form-check-input"], ["for", "defaultCheck2", 1, "form-check-label"], ["type", "radio", "name", "exampleRadios", "id", "exampleRadios1", "value", "option1", "checked", "", 1, "form-check-input"], ["for", "exampleRadios1", 1, "form-check-label"], [1, "form-check", "mb-0"], ["type", "radio", "name", "exampleRadios", "id", "exampleRadios3", "value", "option3", "disabled", "", 1, "form-check-input"], ["for", "exampleRadios3", 1, "form-check-label"], [1, "form-check", "form-switch"], ["type", "checkbox", "role", "switch", "id", "flexSwitchCheckDefault", 1, "form-check-input"], ["for", "flexSwitchCheckDefault", 1, "form-check-label"], ["type", "checkbox", "role", "switch", "id", "flexSwitchCheckChecked", "checked", "", 1, "form-check-input"], ["for", "flexSwitchCheckChecked", 1, "form-check-label"], ["type", "checkbox", "role", "switch", "id", "flexSwitchCheckDisabled", "disabled", "", 1, "form-check-input"], ["for", "flexSwitchCheckDisabled", 1, "form-check-label"], [1, "form-check", "form-switch", "mb-0"], ["type", "checkbox", "role", "switch", "id", "flexSwitchCheckCheckedDisabled", "checked", "", "disabled", "", 1, "form-check-input"], ["for", "flexSwitchCheckCheckedDisabled", 1, "form-check-label"], [1, "col-xxl-4", "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card-body", "d-sm-flex", "align-items-center", "justify-content-between"], ["type", "checkbox", "value", "", "id", "checkebox-sm", "checked", "", 1, "form-check-input"], ["for", "checkebox-sm", 1, "form-check-label"], [1, "form-check", "form-check-md", "d-flex", "align-items-center"], ["type", "checkbox", "value", "", "id", "checkebox-md", "checked", "", 1, "form-check-input"], ["for", "checkebox-md", 1, "form-check-label"], [1, "form-check", "form-check-lg", "d-flex", "align-items-center"], ["type", "checkbox", "value", "", "id", "checkebox-lg", "checked", "", 1, "form-check-input"], ["for", "checkebox-lg", 1, "form-check-label"], ["type", "radio", "name", "Radio", "id", "Radio-sm", 1, "form-check-input"], ["for", "Radio-sm", 1, "form-check-label"], [1, "form-check", "form-check-md"], ["type", "radio", "name", "Radio", "id", "Radio-md", 1, "form-check-input"], ["for", "Radio-md", 1, "form-check-label"], [1, "form-check", "form-check-lg"], ["type", "radio", "name", "Radio", "id", "Radio-lg", "checked", "", 1, "form-check-input"], ["for", "Radio-lg", 1, "form-check-label"], [1, "card-body", "d-sm-flex", "align-item-center", "justify-content-between"], ["type", "checkbox", "role", "switch", "id", "switch-sm", 1, "form-check-input"], ["for", "switch-sm", 1, "form-check-label"], [1, "form-check", "form-check-md", "form-switch"], ["type", "checkbox", "role", "switch", "id", "switch-md", 1, "form-check-input"], ["for", "switch-md", 1, "form-check-label"], [1, "form-check", "form-check-lg", "form-switch"], ["type", "checkbox", "role", "switch", "id", "switch-lg", 1, "form-check-input"], ["for", "switch-lg", 1, "form-check-label"], [1, "form-check", "form-check-inline"], ["type", "checkbox", "id", "inlineCheckbox1", "value", "option1", 1, "form-check-input", "mt-1"], ["for", "inlineCheckbox1", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox2", "value", "option2", 1, "form-check-input", "mt-1"], ["for", "inlineCheckbox2", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox3", "value", "option3", "disabled", "", 1, "form-check-input", "mt-1"], ["for", "inlineCheckbox3", 1, "form-check-label"], ["type", "radio", "name", "inlineRadioOptions", "id", "inlineRadio1", "value", "option1", 1, "form-check-input", "mt-1"], ["for", "inlineRadio1", 1, "form-check-label"], ["type", "radio", "name", "inlineRadioOptions", "id", "inlineRadio2", "value", "option2", 1, "form-check-input", "mt-1"], ["for", "inlineRadio2", 1, "form-check-label"], ["type", "radio", "name", "inlineRadioOptions", "id", "inlineRadio3", "value", "option3", "disabled", "", 1, "form-check-input", "mt-1"], ["for", "inlineRadio3", 1, "form-check-label"], [1, "card-body", "ms-4"], [1, "me-4"], ["type", "checkbox", "id", "checkboxNoLabel", "value", "", "aria-label", "...", 1, "form-check-input"], ["type", "radio", "name", "radioNoLabel", "id", "radioNoLabel1", "value", "", "aria-label", "...", 1, "form-check-input"]],
      template: function FormCheckboxRadiosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Checks & Radios");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 4)(6, "li", 5)(7, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Checks & Radios");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 1)(12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "h5", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Checkbox");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12)(18, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Default checkbox ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Checked checkbox ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 8)(27, "div", 9)(28, "div", 10)(29, "h5", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Disabled");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 12)(32, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Disabled checkbox ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " Disabled checked checkbox ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 8)(41, "div", 9)(42, "div", 10)(43, "h5", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Radios");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 12)(46, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " Default radio ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " Default checked radio ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 8)(55, "div", 9)(56, "div", 10)(57, "h5", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Radios");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 12)(60, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "label", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, " Disabled radio ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "label", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, " Disabled checked radio ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 8)(69, "div", 9)(70, "div", 10)(71, "h5", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Default (stacked)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 12)(74, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "input", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "label", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, " Default checkbox ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "label", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, " Disabled checkbox ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "input", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "label", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, " Default radio ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "input", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "label", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, " Disabled radio ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 8)(91, "div", 9)(92, "div", 10)(93, "h5", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Switches");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 12)(96, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "input", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "label", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Default switch checkbox input");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "input", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "label", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Checked switch checkbox input");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "input", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "label", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Disabled switch checkbox input");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "input", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "label", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Disabled checked switch checkbox input");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 49)(113, "div", 9)(114, "div", 10)(115, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, " Checkbox Sizes ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 50)(118, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "input", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "label", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, " Default ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "input", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "label", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, " Medium ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "input", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "label", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, " Large ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 49)(131, "div", 9)(132, "div", 10)(133, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, " Radio Sizes ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 50)(136, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "input", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "label", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, " Default ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](141, "input", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "label", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, " Medium ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](145, "input", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "label", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, " Large ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 49)(149, "div", 9)(150, "div", 10)(151, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, " Switch Sizes ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 67)(154, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](155, "input", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "label", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "Default");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](159, "input", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "label", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "Medium");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](163, "input", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "label", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "Large");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 8)(167, "div", 9)(168, "div", 10)(169, "h5", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "Inline");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div", 12)(172, "div", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](173, "input", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "label", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "div", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](177, "input", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "label", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](181, "input", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "label", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "3 (disabled)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](185, "input", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "label", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "div", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](189, "input", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "label", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "div", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](193, "input", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "label", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "3 (disabled)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "div", 8)(197, "div", 9)(198, "div", 10)(199, "h5", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, "Without labels");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "div", 89)(202, "span", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](203, "input", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](205, "input", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.adminDashboard);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 85551:
/*!*********************************************************************************************!*\
  !*** ./src/app/core-component/forms/form-elements/form-elements/form-elements.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormElementsComponent: () => (/* binding */ FormElementsComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ 36465);




class FormElementsComponent {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  static {
    this.ɵfac = function FormElementsComponent_Factory(t) {
      return new (t || FormElementsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FormElementsComponent,
      selectors: [["app-form-elements"]],
      decls: 228,
      vars: 0,
      consts: [[1, "page-header"], [1, "page-title"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "row", "gy-4"], [1, "col-xl-4", "col-lg-6", "col-md-6", "col-sm-12"], ["for", "input-label", 1, "form-label"], ["type", "text", "id", "input", 1, "form-control"], ["type", "text", "id", "input-label", 1, "form-control"], ["for", "input-placeholder", 1, "form-label"], ["type", "text", "id", "input-placeholder", "placeholder", "Placeholder", 1, "form-control"], ["for", "input-text", 1, "form-label"], ["type", "text", "id", "input-text", "placeholder", "Text", 1, "form-control"], ["for", "input-number", 1, "form-label"], ["type", "number", "id", "input-number", "placeholder", "Number", 1, "form-control"], ["for", "input-password", 1, "form-label"], ["type", "password", "id", "input-password", "placeholder", "Password", 1, "form-control"], ["for", "input-email", 1, "form-label"], ["type", "email", "id", "input-email", "placeholder", "Email@xyz.com", 1, "form-control"], ["for", "input-tel", 1, "form-label"], ["type", "tel", "id", "input-tel", "placeholder", "+1100-2031-1233", 1, "form-control"], ["for", "input-date", 1, "form-label"], ["type", "date", "id", "input-date", 1, "form-control"], ["for", "input-week", 1, "form-label"], ["type", "week", "id", "input-week", 1, "form-control"], ["for", "input-month", 1, "form-label"], ["type", "month", "id", "input-month", 1, "form-control"], ["for", "input-time", 1, "form-label"], ["type", "time", "id", "input-time", 1, "form-control"], ["for", "input-datetime-local", 1, "form-label"], ["type", "datetime-local", "id", "input-datetime-local", 1, "form-control"], ["for", "input-search", 1, "form-label"], ["type", "search", "id", "input-search", "placeholder", "Search", 1, "form-control"], ["for", "input-submit", 1, "form-label"], ["type", "submit", "id", "input-submit", "value", "Submit", 1, "form-control"], ["for", "input-reset", 1, "form-label"], ["type", "reset", "id", "input-reset", 1, "form-control"], ["for", "input-button", 1, "form-label"], ["type", "button", "id", "input-button", "value", "Button", 1, "form-control", "btn", "btn-primary"], [1, "col-xl-3"], [1, "form-label"], ["type", "color", "value", "#136bd0", 1, "form-control", "form-input-color"], [1, "col-xl-5"], [1, "form-check"], [1, "mb-3", "px-0", "text-muted"], ["type", "checkbox", "value", "", "checked", "", 1, "form-check-input", "ms-2"], [1, "col-xl-4"], ["type", "radio", "checked", "", 1, "form-check-input", "ms-2"], ["for", "input-file", 1, "form-label"], ["type", "file", "id", "input-file", 1, "form-control"], ["type", "url", "name", "website", "placeholder", "http://example.com", 1, "form-control"], ["for", "input-disabled", 1, "form-label"], ["type", "text", "id", "input-disabled", "placeholder", "Disabled input", "disabled", "", 1, "form-control"], ["for", "input-readonlytext", 1, "form-label"], ["type", "text", "readonly", "", "id", "input-readonlytext", "value", "email@example.com", 1, "form-control-plaintext"], ["for", "disabled-readonlytext", 1, "form-label"], ["type", "text", "value", "Disabled readonly input", "id", "disabled-readonlytext", "aria-label", "Disabled input example", "disabled", "", "readonly", "", 1, "form-control"], ["type", "text", "value", "Readonly input here...", "aria-label", "readonly input example", "readonly", "", 1, "form-control"], ["for", "text-area", 1, "form-label"], ["id", "text-area", "rows", "1", 1, "form-control"], ["for", "input-DataList", 1, "form-label"], ["list", "datalistOptions", "id", "input-DataList", "placeholder", "Type to search...", 1, "form-control"], ["id", "datalistOptions"], ["value", "San Francisco"], ["value", "New York"], ["value", "Seattle"], ["value", "Los Angeles"], ["value", "Chicago"], [1, "col-md-6"], [1, "row", "gy-3"], ["for", "input-noradius", 1, "form-label"], ["type", "text", "id", "input-noradius", "placeholder", "No Radius", 1, "form-control", "rounded-0"], ["for", "input-rounded", 1, "form-label"], ["type", "text", "id", "input-rounded", "placeholder", "Default Radius", 1, "form-control"], ["for", "input-rounded-pill", 1, "form-label"], ["type", "text", "id", "input-rounded-pill", "placeholder", "Rounded", 1, "form-control", "rounded-pill"], ["for", "input-rounded1", 1, "form-label"], ["type", "text", "id", "input-rounded1", "placeholder", "Default", 1, "form-control"], ["for", "input-rounded2", 1, "form-label"], ["type", "text", "id", "input-rounded2", "placeholder", "Dotted", 1, "form-control", "border-dotted"], ["for", "input-rounded3", 1, "form-label"], ["type", "text", "id", "input-rounded3", "placeholder", "Dashed", 1, "form-control", "border-dashed"], ["type", "text", "placeholder", ".form-control-sm", "aria-label", ".form-control-sm example", 1, "form-control", "form-control-sm", "mb-3"], ["type", "text", "placeholder", "Default input", "aria-label", "default input example", 1, "form-control", "mb-3"], ["type", "text", "placeholder", ".form-control-lg", "aria-label", ".form-control-lg example", 1, "form-control", "form-control-lg"], [1, "mb-3"], ["for", "disabledTextInput", 1, "form-label"], ["type", "text", "id", "disabledTextInput", "placeholder", "Disabled input", 1, "form-control"], ["for", "disabledSelect", 1, "form-label"], ["id", "disabledSelect", 1, "form-select"], ["type", "checkbox", "id", "disabledFieldsetCheck", "disabled", "", 1, "form-check-input"], ["for", "disabledFieldsetCheck", 1, "form-check-label"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "text", "data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "tooltip", "Tooltip on bottom", "placement", "bottom", "placeholder", "Bottom", 1, "form-control"], ["type", "text", "data-bs-toggle", "tooltip", "data-bs-placement", "Right", "tooltip", "Tooltip on right", "placement", "right", "placeholder", "Right", 1, "form-control"], ["type", "text", "data-bs-toggle", "tooltip", "data-bs-placement", "Top", "tooltip", "Tooltip on top", "placement", "top", "placeholder", "Top", 1, "form-control"], ["type", "text", "data-bs-toggle", "tooltip", "data-bs-placement", "Left", "tooltip", "Tooltip on left", "placement", "left", "placeholder", "Left", 1, "form-control"]],
      template: function FormElementsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Form Elements");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Input Types");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "label", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Basic Input:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9)(17, "label", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Form Input With Label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9)(21, "label", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Form Input With Placeholder");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 9)(25, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Type Text");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 9)(29, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Type Number");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 9)(33, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Type Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 9)(37, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Type Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 9)(41, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Type Tel");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 9)(45, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Type Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 9)(49, "label", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Type Week");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 9)(53, "label", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Type Month");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "input", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 9)(57, "label", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Type Time");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 9)(61, "label", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Type datetime-local");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "input", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 9)(65, "label", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Type Search");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "input", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 9)(69, "label", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Type Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "input", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 9)(73, "label", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Type Reset");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "input", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 9)(77, "label", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Type Button");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "input", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 9)(81, "div", 2)(82, "div", 43)(83, "label", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Type Color");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "input", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 46)(87, "div", 47)(88, "p", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Type Checkbox");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "input", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 50)(92, "div", 47)(93, "p", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Type Radio");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "input", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 9)(97, "label", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Type File");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "input", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 9)(101, "label", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Type Url");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "input", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 9)(105, "label", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Type Disabled");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "input", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 9)(109, "label", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Input Readonly Text");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "input", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 9)(113, "label", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Disabled Readonly Input");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](115, "input", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 9)(117, "label", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Type Readonly Input");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "input", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 9)(121, "label", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Textarea");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "textarea", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 9)(125, "label", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Datalist example");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "input", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "datalist", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](129, "option", 67)(130, "option", 68)(131, "option", 69)(132, "option", 70)(133, "option", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 72)(135, "div", 4)(136, "div", 5)(137, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "Input Shapes");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 7)(140, "div", 73)(141, "div", 3)(142, "label", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Input With No Radius");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](144, "input", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 3)(146, "label", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "Input With Radius");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](148, "input", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 3)(150, "label", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "Rounded Input");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](152, "input", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 72)(154, "div", 4)(155, "div", 5)(156, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "Input border Styles");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 7)(159, "div", 73)(160, "div", 3)(161, "label", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "Default");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](163, "input", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 3)(165, "label", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "Dotted Input");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](167, "input", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 3)(169, "label", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "Dashed Input");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](171, "input", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "div", 72)(173, "div", 4)(174, "div", 5)(175, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "Input Sizing");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](178, "input", 86)(179, "input", 87)(180, "input", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 72)(182, "div", 4)(183, "div", 5)(184, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "Disabled forms");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "div", 7)(187, "form")(188, "div", 89)(189, "label", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, "Disabled input");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](191, "input", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "div", 89)(193, "label", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, "Disabled select menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "select", 93)(196, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "Disabled select");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "div", 89)(199, "div", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](200, "input", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "label", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, " Can't check this ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "button", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "div", 72)(206, "div", 4)(207, "div", 5)(208, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, "Input With Tooltip");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "div", 7)(211, "div", 73)(212, "div", 3)(213, "label", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](214, "Tooltip Bottom");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](215, "input", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "div", 3)(217, "label", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](218, "Tooltip Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](219, "input", 98);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "div", 3)(221, "label", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](222, "Tooltip Top");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](223, "input", 99);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "div", 3)(225, "label", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](226, "Tooltip Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](227, "input", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__.TooltipDirective],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 80635:
/*!*************************************************************************************************!*\
  !*** ./src/app/core-component/forms/form-elements/form-fileupload/form-fileupload.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormFileuploadComponent: () => (/* binding */ FormFileuploadComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-dropzone */ 53947);




function FormFileuploadComponent_For_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-dropzone-image-preview", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("removed", function FormFileuploadComponent_For_33_Template_ngx_dropzone_image_preview_removed_0_listener() {
      const f_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.onRemoveSingle(f_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const f_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("file", f_r2)("removable", true);
  }
}
function FormFileuploadComponent_For_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-dropzone-image-preview", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("removed", function FormFileuploadComponent_For_54_Template_ngx_dropzone_image_preview_removed_0_listener() {
      const f_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.onRemoveMultiple(f_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const f_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("file", f_r5)("removable", true);
  }
}
class FormFileuploadComponent {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    this.singleFile = [];
    this.multipleFiles = [];
  }
  onSingleSelect(event) {
    this.singleFile = [];
    this.singleFile.push(...event.addedFiles);
  }
  onMultipleSelect(event) {
    this.multipleFiles.push(...event.addedFiles);
  }
  onRemoveSingle(event) {
    this.singleFile.splice(this.singleFile.indexOf(event), 1);
  }
  onRemoveMultiple(event) {
    this.multipleFiles.splice(this.multipleFiles.indexOf(event), 1);
  }
  static {
    this.ɵfac = function FormFileuploadComponent_Factory(t) {
      return new (t || FormFileuploadComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FormFileuploadComponent,
      selectors: [["app-form-fileupload"]],
      decls: 56,
      vars: 2,
      consts: [[1, "page-header"], [1, "row"], [1, "col-sm-12"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "active"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["data-upload-id", "myFirstImage", 1, "custom-file-container"], ["href", "javascript:void(0)", "title", "Clear Image", 1, "custom-file-container__image-clear"], [1, "service-upload", 3, "change", "multiple"], [1, "drop-browse", "align-center"], ["src", "assets/img/icons/drop-icon.svg", "alt", "upload"], [1, "d-flex"], [1, "text-primary", "ms-1"], [1, "text-muted"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "file", "removable"], ["data-upload-id", "mySecondImage", 1, "custom-file-container"], [1, "service-upload", 3, "change"], [1, "custom-file-container__image-preview"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "removed", "file", "removable"]],
      template: function FormFileuploadComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "File Upload");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 4)(6, "li", 5)(7, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "File Upload");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 1)(12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "h5", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Single File Upload");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12)(18, "div", 13)(19, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Upload (Single File) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ngx-dropzone", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function FormFileuploadComponent_Template_ngx_dropzone_change_22_listener($event) {
            return ctx.onSingleSelect($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ngx-dropzone-label", 16)(24, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "img", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Drop your files here or");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "browse");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Maximum size: 50MB");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](32, FormFileuploadComponent_For_33_Template, 1, 2, "ngx-dropzone-image-preview", 21, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 9)(35, "div", 10)(36, "h5", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Multiple File Upload");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 12)(39, "div", 22)(40, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Upload (Allow Multiple) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "ngx-dropzone", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function FormFileuploadComponent_Template_ngx_dropzone_change_43_listener($event) {
            return ctx.onMultipleSelect($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "ngx-dropzone-label", 16)(45, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "img", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " Drop your files here or");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "browse");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Maximum size: 50MB");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](53, FormFileuploadComponent_For_54_Template, 1, 2, "ngx-dropzone-image-preview", 21, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.adminDashboard);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("multiple", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.singleFile);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.multipleFiles);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, ngx_dropzone__WEBPACK_IMPORTED_MODULE_3__.NgxDropzoneComponent, ngx_dropzone__WEBPACK_IMPORTED_MODULE_3__.NgxDropzoneLabelDirective, ngx_dropzone__WEBPACK_IMPORTED_MODULE_3__.NgxDropzoneImagePreviewComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 41243:
/*!*****************************************************************************************************!*\
  !*** ./src/app/core-component/forms/form-elements/form-grid-gutters/form-grid-gutters.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormGridGuttersComponent: () => (/* binding */ FormGridGuttersComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);




class FormGridGuttersComponent {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  static {
    this.ɵfac = function FormGridGuttersComponent_Factory(t) {
      return new (t || FormGridGuttersComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FormGridGuttersComponent,
      selectors: [["app-form-grid-gutters"]],
      decls: 147,
      vars: 1,
      consts: [[1, "page-header"], [1, "row"], [1, "col"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "active"], [1, "col-xl-6"], [1, "card"], [1, "card-header", "justify-content-between"], [1, "card-title"], [1, "card-body"], [1, "col-md-6", "mb-3"], [1, "form-label"], ["type", "text", "placeholder", "First Name", 1, "form-control"], ["type", "text", "placeholder", "Last Name", 1, "form-control"], [1, "col-xl-12", "mb-3"], ["type", "text", "placeholder", "Street", 1, "form-control"], ["type", "text", "placeholder", "Landmark", 1, "form-control"], [1, "col-xxl-6", "col-xl-12", "mb-3"], ["type", "text", "placeholder", "City", 1, "form-control"], ["id", "inputState1", 1, "form-select"], ["selected", ""], ["type", "text", "placeholder", "Postal/Zip code", 1, "form-control"], ["id", "inputCountry", 1, "form-select"], ["type", "email", "placeholder", "Email", 1, "form-control"], ["type", "date", 1, "form-control"], [1, "form-label", "mb-1"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "status-married", "required", "", 1, "form-check-input"], ["for", "status-married", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "status-unmarried", "required", "", 1, "form-check-input"], ["for", "status-unmarried", 1, "form-check-label"], [1, "col-xl-12"], ["type", "number", "placeholder", "Phone Number", 1, "form-control"], [1, "col-md-12"], [1, "form-check", "mb-3"], ["type", "checkbox", "id", "gridCheck", 1, "form-check-input"], ["for", "gridCheck", 1, "form-check-label"], ["type", "submit", 1, "btn", "btn-primary"], [1, "row", "g-3", "mt-0"], [1, "col-md-6"], ["for", "inputEmail4", 1, "form-label"], ["type", "email", "id", "inputEmail4", 1, "form-control"], ["for", "inputPassword4", 1, "form-label"], ["type", "password", "id", "inputPassword4", 1, "form-control"], [1, "col-12"], ["for", "inputAddress", 1, "form-label"], ["type", "text", "id", "inputAddress", 1, "form-control"], ["for", "inputAddress2", 1, "form-label"], ["type", "text", "id", "inputAddress2", 1, "form-control"], ["for", "inputCity", 1, "form-label"], ["type", "text", "id", "inputCity", 1, "form-control"], [1, "col-md-4"], ["for", "inputState", 1, "form-label"], ["id", "inputState", 1, "form-select"], [1, "col-md-2"], ["for", "inputZip", 1, "form-label"], ["type", "text", "id", "inputZip", 1, "form-control"], ["type", "checkbox", "id", "gridCheck3", 1, "form-check-input"], ["for", "gridCheck3", 1, "form-check-label"]],
      template: function FormGridGuttersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Grid & Gutters");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 4)(6, "li", 5)(7, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Vertical Form");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 1)(12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Form Grid ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12)(18, "div", 1)(19, "div", 13)(20, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "First Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 13)(24, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Last Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 13)(28, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 1)(31, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 20)(38, "select", 22)(39, "option", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "State");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 20)(46, "select", 25)(47, "option", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Country");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 13)(52, "div", 1)(53, "div", 17)(54, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 17)(58, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "DOB");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 17)(62, "div", 1)(63, "label", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Maritial Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 8)(66, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "input", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "label", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, " Married ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 8)(71, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "label", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, " Single ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 13)(77, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Contact Number");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "input", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 13)(81, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Alternative Contact");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "input", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 36)(85, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "input", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "label", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, " Check me out ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 36)(90, "button", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Sign in");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 8)(93, "div", 9)(94, "div", 10)(95, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, " Gutters ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 12)(98, "form", 41)(99, "div", 42)(100, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "First Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 42)(104, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Last Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 42)(108, "label", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "input", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 42)(112, "label", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "input", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 47)(116, "label", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](118, "input", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 47)(120, "label", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Address 2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](122, "input", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 42)(124, "label", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "City");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "input", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 54)(128, "label", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "State");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "select", 56)(131, "option", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "Choose...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 57)(136, "label", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "Zip");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](138, "input", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 47)(140, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](141, "input", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "label", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, " Check me out ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 47)(145, "button", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "Sign in");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.adminDashboard);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 72783:
/*!*****************************************************************************************************!*\
  !*** ./src/app/core-component/forms/form-elements/form-input-groups/form-input-groups.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormInputGroupsComponent: () => (/* binding */ FormInputGroupsComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);



class FormInputGroupsComponent {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  static {
    this.ɵfac = function FormInputGroupsComponent_Factory(t) {
      return new (t || FormInputGroupsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FormInputGroupsComponent,
      selectors: [["app-form-input-groups"]],
      decls: 246,
      vars: 0,
      consts: [[1, "page-header"], [1, "page-title", "my-auto"], [1, "breadcrumb", "mb-0"], [1, "breadcrumb-item"], ["href", "javascript:void(0)"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["action", "#"], [1, "mb-3", "row"], [1, "col-form-label", "col-lg-2"], [1, "col-lg-10"], [1, "input-group"], ["id", "basic-addon1", 1, "input-group-text"], ["type", "text", "placeholder", "Username", "aria-label", "Username", "aria-describedby", "basic-addon1", 1, "form-control"], ["type", "text", "placeholder", "Recipient's username", "aria-label", "Recipient's username", "aria-describedby", "basic-addon2", 1, "form-control"], ["id", "basic-addon2", 1, "input-group-text"], ["id", "basic-addon3", 1, "input-group-text"], ["type", "text", "id", "basic-url", "aria-describedby", "basic-addon3", 1, "form-control"], [1, "input-group-text"], ["type", "text", "aria-label", "Amount (to the nearest dollar)", 1, "form-control"], [1, "mb-3", "row", "mb-0"], [1, "input-group", "mb-3"], ["type", "text", 1, "form-control"], ["aria-label", "With textarea", 1, "form-control"], [1, "input-group", "input-group-lg"], ["id", "inputGroup-sizing-lg", 1, "input-group-text"], ["type", "text", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-lg", 1, "form-control"], ["id", "inputGroup-sizing-default", 1, "input-group-text"], ["type", "text", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-default", 1, "form-control"], [1, "input-group", "input-group-sm"], ["id", "inputGroup-sizing-sm", 1, "input-group-text"], ["type", "text", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-sm", 1, "form-control"], ["type", "checkbox", "value", "", "aria-label", "Checkbox for following text input", 1, "form-check-input"], ["type", "text", "aria-label", "Text input with checkbox", 1, "form-control"], ["type", "radio", "value", "", "aria-label", "Radio button for following text input", 1, "form-check-input"], ["type", "text", "aria-label", "Text input with radio button", 1, "form-control"], ["type", "checkbox"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "dropdown-divider"], ["type", "text", "aria-label", "Text input with dropdown button", 1, "form-control"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-primary", "dropdown-toggle"], [1, "dropdown-menu", "dropdown-menu-end"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-soft-primary", "dropdown-toggle"], ["type", "text", "aria-label", "Text input with 2 dropdown buttons", 1, "form-control"]],
      template: function FormInputGroupsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Input Groups");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div")(4, "ol", 2)(5, "li", 3)(6, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "UI Elements");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Input Groups");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "h5", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Basic Examples");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11)(17, "form", 12)(18, "div", 13)(19, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Group Left");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15)(22, "div", 16)(23, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "@");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 13)(27, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Group Right");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 15)(30, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "@example.com");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 13)(35, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "URL Example");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 15)(38, "div", 16)(39, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "https://example.com/users/");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 13)(43, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Group with Price");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 15)(46, "div", 16)(47, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "$");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, ".00");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 25)(53, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Group with Price (Left)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 15)(56, "div", 26)(57, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "$");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 16)(63, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "$");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, ".00");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 25)(69, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "With textarea");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 15)(72, "div", 16)(73, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "With textarea");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "textarea", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 8)(77, "div", 9)(78, "h5", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Sizing");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 11)(81, "form", 12)(82, "div", 13)(83, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Input Group Large");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 15)(86, "div", 29)(87, "span", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Large");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "input", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 13)(91, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Input Group Default");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 15)(94, "div", 16)(95, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Default");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "input", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 25)(99, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Input Group Small");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 15)(102, "div", 34)(103, "span", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Small");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "input", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 8)(107, "div", 9)(108, "h5", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Checkbox and Radio Addons");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 11)(111, "form", 12)(112, "div", 13)(113, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Checkbox");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 15)(116, "div", 16)(117, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](118, "input", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "input", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 25)(121, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Radio");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 15)(124, "div", 16)(125, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "input", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "input", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 8)(129, "div", 9)(130, "h5", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "Multiple Addons");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 11)(133, "form", 12)(134, "div", 13)(135, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Radio and Text Addons");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 15)(138, "div", 16)(139, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](140, "input", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "$");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](143, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 25)(145, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "Two Addons");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 15)(148, "div", 16)(149, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "$");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](153, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 8)(155, "div", 9)(156, "h5", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "Buttons with dropdowns");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 11)(159, "form", 12)(160, "div", 13)(161, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "Left Dropdown Text Addons");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 15)(164, "div", 16)(165, "button", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "Dropdown");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "ul", 43)(168, "li")(169, "a", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "li")(172, "a", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "Another action");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "li")(175, "a", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "Something else here");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](178, "hr", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "li")(180, "a", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "Separated link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](182, "input", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "div", 25)(184, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "Right Dropdown Text Addons");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "div", 15)(187, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](188, "input", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "button", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, "Dropdown");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "ul", 48)(192, "li")(193, "a", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "li")(196, "a", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "Another action");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "li")(199, "a", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, "Something else here");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](202, "hr", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "li")(204, "a", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, "Separated link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "div", 25)(207, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](208, "Right Dropdown Text Addons");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "div", 15)(210, "div", 16)(211, "button", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, "Dropdown");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "ul", 43)(214, "li")(215, "a", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](216, "Action before");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "li")(218, "a", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, "Another action before");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "li")(221, "a", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](222, "Something else here");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](224, "hr", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "li")(226, "a", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](227, "Separated link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](228, "input", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "button", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](230, "Dropdown");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "ul", 48)(232, "li")(233, "a", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](234, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "li")(236, "a", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](237, "Another action");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "li")(239, "a", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](240, "Something else here");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](242, "hr", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "li")(244, "a", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](245, "Separated link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()();
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 29771:
/*!*************************************************************************************!*\
  !*** ./src/app/core-component/forms/form-elements/form-mask/form-mask.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormMaskComponent: () => (/* binding */ FormMaskComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-mask */ 46015);





class FormMaskComponent {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  static {
    this.ɵfac = function FormMaskComponent_Factory(t) {
      return new (t || FormMaskComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FormMaskComponent,
      selectors: [["app-form-mask"]],
      decls: 75,
      vars: 10,
      consts: [[1, "page-header"], [1, "row"], [1, "col-sm-12"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "active"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-text"], [1, "card-body"], ["action", "#"], [1, "mb-3"], ["for", "phone", 1, "mb-2"], ["type", "text", "id", "phone", "mask", "(000) 000-0000", 1, "form-control", 3, "showMaskTyped"], [1, "form-text", "text-muted"], ["for", "date", 1, "mb-2"], ["type", "text", "id", "date", "mask", "00/00/0000", 1, "form-control", 3, "showMaskTyped"], ["for", "field", 1, "mb-2"], ["type", "text", "id", "ssn", "mask", "000-00-0000", 1, "form-control", 3, "showMaskTyped"], ["type", "text", "id", "phoneExt", "mask", "000 000 000", 1, "form-control", 3, "showMaskTyped"], ["for", "product-key", 1, "mb-2"], ["type", "text", "id", "product", "mask", "-000-A000", 1, "form-control", 3, "showMaskTyped"], ["for", "currency", 1, "mb-2"], ["type", "text", "id", "currency", "mask", "099,099,099.99", 1, "form-control", 3, "showMaskTyped"], ["for", "eye-script", 1, "mb-2"], ["type", "text", "id", "eyescript", "mask", "V0.00V0.00 000", 1, "form-control", 3, "showMaskTyped"], ["for", "percent", 1, "mb-2"], ["type", "text", "id", "pct", "mask", "00", 1, "form-control", 3, "showMaskTyped"], [1, "mb-0"], ["for", "credit-card-number", 1, "mb-2"], ["type", "text", "id", "ccn", "mask", "099.099.099.0999", 1, "form-control", 3, "showMaskTyped"]],
      template: function FormMaskComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Form Select");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 4)(6, "li", 5)(7, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Form Select");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 1)(12, "div", 2)(13, "div", 8)(14, "div", 9)(15, "h5", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Form Mask");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Input masks can be used to force the user to enter data conform a specific format. Unlike validation, the user can't enter any other key than the ones specified by the mask.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12)(20, "form", 13)(21, "div", 14)(22, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Phone");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "(999) 999-9999");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 14)(28, "label", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "dd/mm/yyyy");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 14)(34, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "SSN field 1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "e.g \"999-99-9999\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 14)(40, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Phone field + ext.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "+40 999 999 999");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 14)(46, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Product Key");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "e.g a*-999-a999");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 14)(52, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "$ 999,999,999.99");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 14)(58, "label", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Eye Script");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "~9.99 ~9.99 999");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 14)(64, "label", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Percent");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "input", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "e.g \"99%\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 31)(70, "label", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Credit Card Number");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "input", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "e.g \"999.999.999.9999\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.adminDashboard);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showMaskTyped", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showMaskTyped", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showMaskTyped", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showMaskTyped", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showMaskTyped", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showMaskTyped", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showMaskTyped", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showMaskTyped", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showMaskTyped", true);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, ngx_mask__WEBPACK_IMPORTED_MODULE_4__.NgxMaskDirective],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 66371:
/*!*****************************************************************************************!*\
  !*** ./src/app/core-component/forms/form-elements/form-select/form-select.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormSelectComponent: () => (/* binding */ FormSelectComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);




class FormSelectComponent {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  static {
    this.ɵfac = function FormSelectComponent_Factory(t) {
      return new (t || FormSelectComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FormSelectComponent,
      selectors: [["app-form-select"]],
      decls: 66,
      vars: 1,
      consts: [[1, "page-header"], [1, "row"], [1, "col-sm-12"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "active"], [1, "col-md-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["aria-label", "Default select example", 1, "form-select"], ["selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["aria-label", ".form-select-lg example", 1, "form-select", "form-select-lg", "mb-3"], ["aria-label", ".form-select-sm example", 1, "form-select", "form-select-sm"], ["multiple", "", "aria-label", "multiple select example", 1, "form-select"]],
      template: function FormSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Form Select");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 4)(6, "li", 5)(7, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Form Select");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 1)(12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "h5", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Basics");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12)(18, "select", 13)(19, "option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Open this select menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "option", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "One");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "option", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Two");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Three");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 8)(28, "div", 9)(29, "div", 10)(30, "h5", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Sizing");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 12)(33, "select", 18)(34, "option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Open this select menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "option", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "One");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "option", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Two");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Three");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "select", 19)(43, "option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Open this select menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "option", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "One");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "option", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Two");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Three");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 8)(52, "div", 9)(53, "div", 10)(54, "h5", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Multiple Select");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 12)(57, "select", 20)(58, "option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Open this select menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "option", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "One");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "option", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Two");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Three");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.adminDashboard);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"]],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 18640:
/*!*******************************************************************************!*\
  !*** ./src/app/core-component/forms/form-select-2/form-select-2.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormSelect2Component: () => (/* binding */ FormSelect2Component)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/keycodes */ 74879);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 77697);
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/chips */ 12772);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/autocomplete */ 79771);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 60316);















const _c0 = ["fruitInput1"];
const _c1 = ["fruitInput2"];
const _c2 = () => ({
  standalone: true
});
function FormSelect2Component_For_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r2.value, " ");
  }
}
function FormSelect2Component_For_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip-row", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("removed", function FormSelect2Component_For_31_Template_mat_chip_row_removed_0_listener() {
      const fruit_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.remove2(fruit_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 42)(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const fruit_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", fruit_r4, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "remove " + fruit_r4);
  }
}
function FormSelect2Component_For_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const fruit_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", fruit_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", fruit_r6, " ");
  }
}
function FormSelect2Component_For_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r7.value, " ");
  }
}
function FormSelect2Component_For_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip-row", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("removed", function FormSelect2Component_For_58_Template_mat_chip_row_removed_0_listener() {
      const fruit_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.remove1(fruit_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 42)(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const fruit_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", fruit_r9, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "remove " + fruit_r9);
  }
}
function FormSelect2Component_For_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const fruit_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", fruit_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", fruit_r10, " ");
  }
}
function FormSelect2Component_For_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r11.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r11.value, " ");
  }
}
class FormSelect2Component {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    this.selectedValue1 = '';
    this.categories = '';
    this.selectedValue2 = '';
    this.searchInputCategory = '';
    this.selectedCategory = '';
    this.selectedList1 = [{
      value: 'Selection-1'
    }, {
      value: 'Selection-2'
    }, {
      value: 'Selection-3'
    }, {
      value: 'Selection-4'
    }, {
      value: 'Selection-5'
    }];
    this.selectedList2 = [{
      value: 'Texas'
    }, {
      value: 'Georgia'
    }, {
      value: 'California'
    }, {
      value: 'Washington D.C'
    }, {
      value: 'Virginia'
    }];
    this.selectedValue3 = '';
    this.selectedValue4 = '';
    this.selectedValue5 = '';
    this.selectedValue6 = '';
    this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.ENTER, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.COMMA];
    this.fruitCtrl1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('');
    this.fruitCtrl2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('');
    this.fruits1 = ['Appple'];
    this.allFruits1 = ['Appple'];
    this.fruits2 = ['Multiple-1', 'Multiple-2', 'Multiple-3', 'Multiple-4', 'Multiple-5'];
    this.allFruits2 = ['Apple', 'Mango', 'Orange', 'Guava', 'Pineapple'];
    this.selectedList3 = [{
      value: 'orange'
    }, {
      value: 'white'
    }, {
      value: 'purple'
    }];
    this.categoriesDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource();
    this.filteredFruits1 = this.fruitCtrl1.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.startWith)(null), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(fruit => fruit ? this._filter1(fruit) : this.allFruits1.slice()));
    this.filteredFruits2 = this.fruitCtrl2.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.startWith)(null), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(fruit => fruit ? this._filter2(fruit) : this.allFruits2.slice()));
  }
  add1(event) {
    const value = (event.value || '').trim();
    if (value) {
      this.fruits1.push(value);
    }
    event.chipInput?.clear();
    this.fruitCtrl1.setValue(null);
  }
  add2(event) {
    const value = (event.value || '').trim();
    if (value) {
      this.fruits2.push(value);
    }
    event.chipInput?.clear();
    this.fruitCtrl2.setValue(null);
  }
  remove1(fruit) {
    const index = this.fruits1.indexOf(fruit);
    if (index >= 0) {
      this.fruits1.splice(index, 1);
    }
  }
  remove2(fruit) {
    const index = this.fruits2.indexOf(fruit);
    if (index >= 0) {
      this.fruits2.splice(index, 1);
    }
  }
  selected(event) {
    this.fruits1.push(event.option.viewValue);
    this.fruits2.push(event.option.viewValue);
    this.fruitInput1.nativeElement.value = '';
    this.fruitInput2.nativeElement.value = '';
    this.fruitCtrl1.setValue(null);
    this.fruitCtrl2.setValue(null);
  }
  _filter1(value) {
    const filterValue1 = value.toLowerCase();
    return this.allFruits1.filter(fruit => fruit.toLowerCase().includes(filterValue1));
  }
  _filter2(value) {
    const filterValue2 = value.toLowerCase();
    return this.allFruits2.filter(fruit => fruit.toLowerCase().includes(filterValue2));
  }
  static {
    this.ɵfac = function FormSelect2Component_Factory(t) {
      return new (t || FormSelect2Component)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FormSelect2Component,
      selectors: [["app-form-select-2"]],
      viewQuery: function FormSelect2Component_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.fruitInput1 = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.fruitInput2 = _t.first);
        }
      },
      decls: 198,
      vars: 22,
      consts: [["chipGrid2", ""], ["fruitInput2", ""], ["auto", "matAutocomplete"], ["chipGrid1", ""], ["fruitInput1", ""], [1, "page-header"], [1, "row"], [1, "col-sm-12"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "active"], [1, "col-md-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["placeholder", "Selection-1", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], ["appearance", "fill", 1, "example-chip-list"], ["aria-label", "Fruit selection"], [3, "matChipInputTokenEnd", "formControl", "matChipInputFor", "matAutocomplete", "matChipInputSeparatorKeyCodes"], [3, "optionSelected"], ["placeholder", "California", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "col-md-12"], [1, "form-control", "nested"], ["label", "Group1"], ["selected", "selected"], ["label", "Group2"], ["label", "Group3"], [1, "placeholder", "js-states", "form-control"], ["value", "one"], ["value", "two"], ["value", "three"], ["value", "four"], ["value", "five"], ["multiple", "multiple", 1, "form-control", "tagging"], [1, "form-control", "form-small", "select"], [1, "form-control", "disabled-results"], ["value", "two", "disabled", "disabled"], [3, "removed"], ["matChipRemove", ""]],
      template: function FormSelect2Component_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "h3", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Form Select2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 9)(6, "li", 10)(7, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Form Select2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6)(12, "div", 13)(13, "div", 14)(14, "div", 15)(15, "h5", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Basic Select2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 17)(18, "mat-select", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function FormSelect2Component_Template_mat_select_ngModelChange_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedValue1, $event) || (ctx.selectedValue1 = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](19, FormSelect2Component_For_20_Template, 2, 2, "mat-option", 19, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13)(22, "div", 14)(23, "div", 15)(24, "h5", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Multiple Select");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 17)(27, "mat-form-field", 20)(28, "mat-chip-grid", 21, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](30, FormSelect2Component_For_31_Template, 5, 2, "mat-chip-row", null, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "input", 22, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("matChipInputTokenEnd", function FormSelect2Component_Template_input_matChipInputTokenEnd_32_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.add2($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-autocomplete", 23, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("optionSelected", function FormSelect2Component_Template_mat_autocomplete_optionSelected_34_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.selected($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](36, FormSelect2Component_For_37_Template, 2, 2, "mat-option", 19, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 13)(40, "div", 14)(41, "div", 15)(42, "h5", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Single Select With Placeholder");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 17)(45, "mat-select", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function FormSelect2Component_Template_mat_select_ngModelChange_45_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedValue2, $event) || (ctx.selectedValue2 = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](46, FormSelect2Component_For_47_Template, 2, 2, "mat-option", 19, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 13)(49, "div", 14)(50, "div", 15)(51, "h5", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Multiple Select With Placeholder");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 17)(54, "mat-form-field", 20)(55, "mat-chip-grid", 21, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](57, FormSelect2Component_For_58_Template, 5, 2, "mat-chip-row", null, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "input", 22, 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("matChipInputTokenEnd", function FormSelect2Component_Template_input_matChipInputTokenEnd_59_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.add1($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "mat-autocomplete", 23, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("optionSelected", function FormSelect2Component_Template_mat_autocomplete_optionSelected_61_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.selected($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](63, FormSelect2Component_For_64_Template, 2, 2, "mat-option", 19, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](65, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 6)(67, "div", 13)(68, "div", 14)(69, "div", 15)(70, "h5", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Basic");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 17)(73, "div", 6)(74, "div", 25)(75, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, " Use select2() function on select element to convert it to Select 2. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "mat-select", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function FormSelect2Component_Template_mat_select_ngModelChange_77_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedValue3, $event) || (ctx.selectedValue3 = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](78, FormSelect2Component_For_79_Template, 2, 2, "mat-option", 19, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 14)(81, "div", 15)(82, "h5", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Nested");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 17)(85, "div", 6)(86, "div", 25)(87, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Add options inside the optgroups to for group options.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "select", 26)(90, "optgroup", 27)(91, "option", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "orange");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "white");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "purple");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "optgroup", 29)(98, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "purple");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "orange");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "white");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "optgroup", 30)(105, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "white");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "purple");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "orange");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 14)(112, "div", 15)(113, "h5", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Placeholder");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 17)(116, "div", 6)(117, "div", 25)(118, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Apply Placeholder by setting option placeholder option.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "select", 31)(121, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Choose...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "option", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "First");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "option", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Second");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "option", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Third");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "option", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Fourth");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "option", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "Fifth");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 14)(134, "div", 15)(135, "h5", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Tagging with multi-value select boxes");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 17)(138, "div", 6)(139, "div", 25)(140, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "Set tags: true to convert select 2 in Tag mode.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "select", 37)(143, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "orange");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "white");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "purple");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 13)(150, "div", 14)(151, "div", 15)(152, "h5", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "Small Select2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 17)(155, "div", 6)(156, "div", 25)(157, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "Use data('select2') function to get container of select2.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "select", 38)(160, "option", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "orange");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "white");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "purple");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 14)(167, "div", 15)(168, "h5", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "Disabling options");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 17)(171, "div", 6)(172, "div", 25)(173, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "Disable Select using disabled attribute.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "select", 39)(176, "option", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, "First");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "option", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "Second");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "option", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "Third");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 14)(183, "div", 15)(184, "h5", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "Limiting the number of Tagging");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "div", 17)(187, "div", 6)(188, "div", 25)(189, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, " Set maximumSelectionLength: 2 with tags: true to limit selectin in Tag mode. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "select", 37)(192, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, "orange");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "white");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "purple");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          const chipGrid2_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](29);
          const auto_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](35);
          const chipGrid1_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.adminDashboard);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](19, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.selectedList1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.fruits2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.fruitCtrl2)("matChipInputFor", chipGrid2_r12)("matAutocomplete", auto_r13)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 15, ctx.filteredFruits2));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](20, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.selectedList2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.fruits1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.fruitCtrl1)("matChipInputFor", chipGrid1_r14)("matAutocomplete", auto_r13)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](65, 17, ctx.filteredFruits1));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](21, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.selectedList3);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__.MatChipGrid, _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__.MatChipInput, _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__.MatChipRemove, _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__.MatChipRow, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 89080:
/*!***********************************************************************************!*\
  !*** ./src/app/core-component/forms/form-validation/form-validation.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormValidationComponent: () => (/* binding */ FormValidationComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);




class FormValidationComponent {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  static {
    this.ɵfac = function FormValidationComponent_Factory(t) {
      return new (t || FormValidationComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FormValidationComponent,
      selectors: [["app-form-validation"]],
      decls: 294,
      vars: 1,
      consts: [[1, "page-header"], [1, "row"], [1, "col-sm-12"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "active"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-text"], ["href", "https://getbootstrap.com/docs/4.1/components/forms/#server-side", "target", "_blank"], [1, "card-body"], [1, "col-sm"], ["novalidate", "", 1, "needs-validation"], [1, "form-row", "row"], [1, "col-md-4", "mb-3"], ["for", "validationCustom01"], ["type", "text", "id", "validationCustom01", "placeholder", "First name", "value", "Mark", "required", "", 1, "form-control"], [1, "valid-feedback"], ["for", "validationCustom02"], ["type", "text", "id", "validationCustom02", "placeholder", "Last name", "value", "Otto", "required", "", 1, "form-control"], ["for", "validationCustomUsername"], [1, "input-group"], ["id", "inputGroupPrepend", 1, "input-group-text"], ["type", "text", "id", "validationCustomUsername", "placeholder", "Username", "aria-describedby", "inputGroupPrepend", "required", "", 1, "form-control"], [1, "invalid-feedback"], [1, "col-md-6", "mb-3"], ["for", "validationCustom03"], ["type", "text", "id", "validationCustom03", "placeholder", "City", "required", "", 1, "form-control"], [1, "col-md-3", "mb-3"], ["for", "validationCustom04"], ["type", "text", "id", "validationCustom04", "placeholder", "State", "required", "", 1, "form-control"], ["for", "validationCustom05"], ["type", "text", "id", "validationCustom05", "placeholder", "Zip", "required", "", 1, "form-control"], [1, "form-group"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "invalidCheck", "required", "", 1, "form-check-input"], ["for", "invalidCheck", 1, "form-check-label"], ["type", "submit", 1, "btn", "btn-primary"], ["for", "validationDefault01"], ["type", "text", "id", "validationDefault01", "placeholder", "First name", "value", "Mark", "required", "", 1, "form-control"], ["for", "validationDefault02"], ["type", "text", "id", "validationDefault02", "placeholder", "Last name", "value", "Otto", "required", "", 1, "form-control"], ["for", "validationDefaultUsername"], ["id", "inputGroupPrepend2", 1, "input-group-text"], ["type", "text", "id", "validationDefaultUsername", "placeholder", "Username", "aria-describedby", "inputGroupPrepend2", "required", "", 1, "form-control"], ["for", "validationDefault03"], ["type", "text", "id", "validationDefault03", "placeholder", "City", "required", "", 1, "form-control"], ["for", "validationDefault04"], ["type", "text", "id", "validationDefault04", "placeholder", "State", "required", "", 1, "form-control"], ["for", "validationDefault05"], ["type", "text", "id", "validationDefault05", "placeholder", "Zip", "required", "", 1, "form-control"], ["type", "checkbox", "value", "", "id", "invalidCheck2", "required", "", 1, "form-check-input"], ["for", "invalidCheck2", 1, "form-check-label"], ["for", "validationServer01"], ["type", "text", "id", "validationServer01", "placeholder", "First name", "value", "Mark", "required", "", 1, "form-control", "is-valid"], ["for", "validationServer02"], ["type", "text", "id", "validationServer02", "placeholder", "Last name", "value", "Otto", "required", "", 1, "form-control", "is-valid"], ["for", "validationServerUsername"], [1, "input-group", "input-grp"], ["id", "inputGroupPrepend3", 1, "input-group-text"], ["type", "text", "id", "validationServerUsername", "placeholder", "Username", "aria-describedby", "inputGroupPrepend3", "required", "", 1, "form-control", "is-invalid"], ["for", "validationServer03"], ["type", "text", "id", "validationServer03", "placeholder", "City", "required", "", 1, "form-control", "is-invalid"], ["for", "validationServer04"], ["type", "text", "id", "validationServer04", "placeholder", "State", "required", "", 1, "form-control", "is-invalid"], ["for", "validationServer05"], ["type", "text", "id", "validationServer05", "placeholder", "Zip", "required", "", 1, "form-control", "is-invalid"], ["type", "checkbox", "value", "", "id", "invalidCheck3", "required", "", 1, "form-check-input", "is-invalid"], ["for", "invalidCheck3", 1, "form-check-label"], [1, "was-validated"], [1, "mb-3"], ["for", "validationTextarea", 1, "form-label"], ["id", "validationTextarea", "placeholder", "Required example textarea", "required", "", 1, "form-control", "is-invalid"], [1, "form-check", "mb-3"], ["type", "checkbox", "id", "validationFormCheck1", "required", "", 1, "form-check-input"], ["for", "validationFormCheck1", 1, "form-check-label"], ["type", "radio", "id", "validationFormCheck2", "name", "radio-stacked", "required", "", 1, "form-check-input"], ["for", "validationFormCheck2", 1, "form-check-label"], ["type", "radio", "id", "validationFormCheck3", "name", "radio-stacked", "required", "", 1, "form-check-input"], ["for", "validationFormCheck3", 1, "form-check-label"], ["required", "", "aria-label", "select example", 1, "form-select"], ["value", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["type", "file", "aria-label", "file example", "required", "", 1, "form-control"], ["for", "validationTooltip01"], ["type", "text", "id", "validationTooltip01", "placeholder", "First name", "value", "Mark", "required", "", 1, "form-control"], [1, "valid-tooltip"], ["for", "validationTooltip02"], ["type", "text", "id", "validationTooltip02", "placeholder", "Last name", "value", "Otto", "required", "", 1, "form-control"], ["for", "validationTooltipUsername"], ["type", "text", "id", "validationTooltipUsername", "placeholder", "Username", "required", "", 1, "form-control"], [1, "invalid-tooltip"], ["for", "validationTooltip03"], ["type", "text", "id", "validationTooltip03", "placeholder", "City", "required", "", 1, "form-control"], ["for", "validationTooltip04"], ["type", "text", "id", "validationTooltip04", "placeholder", "State", "required", "", 1, "form-control"], ["for", "validationTooltip05"], ["type", "text", "id", "validationTooltip05", "placeholder", "Zip", "required", "", 1, "form-control"]],
      template: function FormValidationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Form Validation");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 4)(6, "li", 5)(7, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Form Validation");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 1)(12, "div", 2)(13, "div", 8)(14, "div", 9)(15, "h5", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Custom Bootstrap Form Validation");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "For custom Bootstrap form validation messages, you\u2019ll need to add the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "novalidate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " boolean attribute to your form. For server side validation ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "read full documentation");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13)(26, "div", 1)(27, "div", 14)(28, "form", 15)(29, "div", 16)(30, "div", 17)(31, "label", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "First name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Looks good! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 17)(37, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Last name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " Looks good! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 17)(43, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 24)(46, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "@");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " Please choose a username. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 16)(52, "div", 28)(53, "label", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "City");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "input", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " Please provide a valid city. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 31)(59, "label", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "State");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "input", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, " Please provide a valid state. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 31)(65, "label", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Zip");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "input", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, " Please provide a valid zip. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 36)(71, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "input", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "label", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, " Agree to terms and conditions ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, " You must agree before submitting. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "button", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Submit form");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 8)(80, "div", 9)(81, "h5", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Browser defaults");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 13)(86, "div", 1)(87, "div", 14)(88, "form")(89, "div", 16)(90, "div", 17)(91, "label", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "First name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "input", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 17)(95, "label", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Last name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "input", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 17)(99, "label", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 24)(102, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "@");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "input", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 16)(106, "div", 28)(107, "label", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "City");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "input", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 31)(111, "label", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "State");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "input", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 31)(115, "label", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Zip");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "input", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 36)(119, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](120, "input", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "label", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, " Agree to terms and conditions ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "button", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Submit form");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 8)(126, "div", 9)(127, "h5", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Server side");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "We recommend using client side validation, but in case you require server side, you can indicate invalid and valid form fields with ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, ".is-invalid");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, " and ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, ".is-valid");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, ". Note that ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, ".invalid-feedback");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, " is also supported with these classes.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 13)(141, "form")(142, "div", 16)(143, "div", 17)(144, "label", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "First name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "input", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, " Looks good! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 17)(150, "label", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "Last name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](152, "input", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, " Looks good! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 17)(156, "label", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 61)(159, "span", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "@");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](161, "input", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, " Please choose a username. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 16)(165, "div", 28)(166, "label", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "City");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](168, "input", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, " Please provide a valid city. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div", 31)(172, "label", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "State");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](174, "input", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, " Please provide a valid state. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "div", 31)(178, "label", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "Zip");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](180, "input", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, " Please provide a valid zip. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "div", 36)(184, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](185, "input", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "label", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, " Agree to terms and conditions ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, " You must agree before submitting. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "button", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, "Submit form");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "div", 8)(193, "div", 9)(194, "h5", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "Supported elements");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "Form validation styles are also available for bootstrap custom form controls.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "div", 13)(199, "div", 1)(200, "div", 14)(201, "form", 72)(202, "div", 73)(203, "label", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, "Textarea");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](205, "textarea", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, " Please enter a message in the textarea. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "div", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](209, "input", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "label", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](211, "Check this checkbox");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](213, "Example invalid feedback text");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](215, "input", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "label", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, "Toggle this radio");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "div", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](219, "input", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "label", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](221, "Or toggle this other radio");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, "More example invalid feedback text");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "div", 73)(225, "select", 83)(226, "option", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](227, "Open this select menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "option", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](229, "One");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "option", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](231, "Two");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "option", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](233, "Three");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](235, "Example invalid select feedback");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "div", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](237, "input", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](239, "Example invalid form file feedback");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "div", 8)(241, "div", 9)(242, "h5", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](243, "Tooltips");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](245, "You can swap the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](247, ".valid|invalid-feedback");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](248, " classes for ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](250, ".valid|invalid-tooltip");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](251, " classes to display validation feedback in a styled tooltip.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "div", 13)(253, "form", 15)(254, "div", 16)(255, "div", 17)(256, "label", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](257, "First name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](258, "input", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "div", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](260, " Looks good! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "div", 17)(262, "label", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](263, "Last name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](264, "input", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "div", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](266, " Looks good! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](267, "div", 17)(268, "label", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](269, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](270, "input", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "div", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](272, " Please choose a unique and valid username. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "div", 16)(274, "div", 28)(275, "label", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](276, "City");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](277, "input", 98);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "div", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](279, " Please provide a valid city. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "div", 31)(281, "label", 99);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](282, "State");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](283, "input", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "div", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](285, " Please provide a valid state. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](286, "div", 31)(287, "label", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](288, "Zip");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](289, "input", 102);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](290, "div", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](291, " Please provide a valid zip. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](292, "button", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](293, "Submit form");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.dashboard);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 55548:
/*!***************************************************************************!*\
  !*** ./src/app/core-component/forms/form-wizard/form-wizard.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormWizardComponent: () => (/* binding */ FormWizardComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/stepper */ 56622);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ 26354);










function FormWizardComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Fill out your name");
  }
}
function FormWizardComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Fill out your address");
  }
}
function FormWizardComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Done");
  }
}
function FormWizardComponent_ng_template_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Fill out your name");
  }
}
function FormWizardComponent_ng_template_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Fill out your address");
  }
}
function FormWizardComponent_ng_template_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Done");
  }
}
class FormWizardComponent {
  constructor(_formBuilder) {
    this._formBuilder = _formBuilder;
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
  }
  static {
    this.ɵfac = function FormWizardComponent_Factory(t) {
      return new (t || FormWizardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FormWizardComponent,
      selectors: [["app-form-wizard"]],
      decls: 96,
      vars: 9,
      consts: [["stepper", ""], ["stepperTwo", ""], [1, "page-header"], [1, "row"], [1, "col-sm-12"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "active"], [1, "col-md-12"], [1, "card"], [1, "card-body"], ["errorMessage", "Name is required.", 3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["appearance", "fill"], ["matInput", "", "formControlName", "firstCtrl", "required", "", 1, "form-control"], ["mat-button", "", "matStepperNext", "", 1, "btn", "btn-primary"], ["errorMessage", "Address is required.", 3, "stepControl"], ["matInput", "", "formControlName", "secondCtrl", "required", ""], ["mat-button", "", "matStepperPrevious", "", 1, "btn", "btn-primary", "me-1"], ["mat-button", "", 1, "btn", "btn-primary", 3, "click"], ["mode", "determinate", "value", "33"], ["mode", "determinate", "value", "66"], ["mode", "determinate", "value", "100"]],
      template: function FormWizardComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "h3", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Form Wizard");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 6)(6, "li", 7)(7, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Form Wizard");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 3)(12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "mat-stepper", null, 0)(17, "mat-step", 13)(18, "form", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, FormWizardComponent_ng_template_19_Template, 1, 0, "ng-template", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-form-field", 16)(21, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div")(25, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Go to a different step to see the error state");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Next");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-step", 19)(30, "form", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, FormWizardComponent_ng_template_31_Template, 1, 0, "ng-template", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-form-field", 16)(33, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div")(37, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Go to a different step to see the error state");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Back");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Next");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-step");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, FormWizardComponent_ng_template_44_Template, 1, 0, "ng-template", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "You are now done.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div")(48, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Back");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormWizardComponent_Template_button_click_50_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            const stepper_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](stepper_r2.reset());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Reset");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 3)(53, "div", 10)(54, "div", 11)(55, "div", 12)(56, "mat-stepper", null, 1)(58, "mat-step", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "mat-progress-bar", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "form", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, FormWizardComponent_ng_template_61_Template, 1, 0, "ng-template", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "mat-form-field", 16)(63, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div")(67, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Go to a different step to see the error state");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Next");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "mat-step", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "mat-progress-bar", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "form", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, FormWizardComponent_ng_template_74_Template, 1, 0, "ng-template", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "mat-form-field", 16)(76, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div")(80, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Go to a different step to see the error state");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Back");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Next");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "mat-step");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "mat-progress-bar", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](88, FormWizardComponent_ng_template_88_Template, 1, 0, "ng-template", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "You are now done.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div")(92, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Back");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormWizardComponent_Template_button_click_94_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            const stepperTwo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](57);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](stepperTwo_r3.reset());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Reset");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.adminDashboard);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepControl", ctx.firstFormGroup);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.firstFormGroup);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepControl", ctx.secondFormGroup);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.secondFormGroup);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepControl", ctx.firstFormGroup);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.firstFormGroup);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepControl", ctx.secondFormGroup);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.secondFormGroup);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__.MatStep, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__.MatStepLabel, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__.MatStepper, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__.MatStepperNext, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__.MatStepperPrevious, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__.MatProgressBar, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 18722:
/*!**************************************************************!*\
  !*** ./src/app/core-component/forms/forms-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormsRoutingModule: () => (/* binding */ FormsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _forms_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms.component */ 30684);
/* harmony import */ var _form_elements_form_basic_inputs_form_basic_inputs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-elements/form-basic-inputs/form-basic-inputs.component */ 49407);
/* harmony import */ var _form_elements_form_checkbox_radios_form_checkbox_radios_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-elements/form-checkbox-radios/form-checkbox-radios.component */ 23575);
/* harmony import */ var _form_elements_form_elements_form_elements_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-elements/form-elements/form-elements.component */ 85551);
/* harmony import */ var _form_elements_form_fileupload_form_fileupload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-elements/form-fileupload/form-fileupload.component */ 80635);
/* harmony import */ var _form_elements_form_grid_gutters_form_grid_gutters_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-elements/form-grid-gutters/form-grid-gutters.component */ 41243);
/* harmony import */ var _form_elements_form_input_groups_form_input_groups_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-elements/form-input-groups/form-input-groups.component */ 72783);
/* harmony import */ var _form_elements_form_mask_form_mask_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form-elements/form-mask/form-mask.component */ 29771);
/* harmony import */ var _form_elements_form_select_form_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form-elements/form-select/form-select.component */ 66371);
/* harmony import */ var _form_select_2_form_select_2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form-select-2/form-select-2.component */ 18640);
/* harmony import */ var _form_validation_form_validation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form-validation/form-validation.component */ 89080);
/* harmony import */ var _form_wizard_form_wizard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./form-wizard/form-wizard.component */ 55548);
/* harmony import */ var _layouts_form_floating_labels_form_floating_labels_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layouts/form-floating-labels/form-floating-labels.component */ 61092);
/* harmony import */ var _layouts_form_horizontal_form_horizontal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layouts/form-horizontal/form-horizontal.component */ 79692);
/* harmony import */ var _layouts_form_vertical_form_vertical_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layouts/form-vertical/form-vertical.component */ 61556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37580);


















const routes = [{
  path: '',
  component: _forms_component__WEBPACK_IMPORTED_MODULE_0__.FormsComponent,
  children: [{
    path: 'form-basic-inputs',
    component: _form_elements_form_basic_inputs_form_basic_inputs_component__WEBPACK_IMPORTED_MODULE_1__.FormBasicInputsComponent
  }, {
    path: 'form-checkbox-radios',
    component: _form_elements_form_checkbox_radios_form_checkbox_radios_component__WEBPACK_IMPORTED_MODULE_2__.FormCheckboxRadiosComponent
  }, {
    path: 'form-elements',
    component: _form_elements_form_elements_form_elements_component__WEBPACK_IMPORTED_MODULE_3__.FormElementsComponent
  }, {
    path: 'form-fileupload',
    component: _form_elements_form_fileupload_form_fileupload_component__WEBPACK_IMPORTED_MODULE_4__.FormFileuploadComponent
  }, {
    path: 'form-grid-gutters',
    component: _form_elements_form_grid_gutters_form_grid_gutters_component__WEBPACK_IMPORTED_MODULE_5__.FormGridGuttersComponent
  }, {
    path: 'form-input-groups',
    component: _form_elements_form_input_groups_form_input_groups_component__WEBPACK_IMPORTED_MODULE_6__.FormInputGroupsComponent
  }, {
    path: 'form-mask',
    component: _form_elements_form_mask_form_mask_component__WEBPACK_IMPORTED_MODULE_7__.FormMaskComponent
  }, {
    path: 'form-select',
    component: _form_elements_form_select_form_select_component__WEBPACK_IMPORTED_MODULE_8__.FormSelectComponent
  }, {
    path: 'form-select-2',
    component: _form_select_2_form_select_2_component__WEBPACK_IMPORTED_MODULE_9__.FormSelect2Component
  }, {
    path: 'form-validation',
    component: _form_validation_form_validation_component__WEBPACK_IMPORTED_MODULE_10__.FormValidationComponent
  }, {
    path: 'form-wizard',
    component: _form_wizard_form_wizard_component__WEBPACK_IMPORTED_MODULE_11__.FormWizardComponent
  }, {
    path: 'form-floating-labels',
    component: _layouts_form_floating_labels_form_floating_labels_component__WEBPACK_IMPORTED_MODULE_12__.FormFloatingLabelsComponent
  }, {
    path: 'form-horizontal',
    component: _layouts_form_horizontal_form_horizontal_component__WEBPACK_IMPORTED_MODULE_13__.FormHorizontalComponent
  }, {
    path: 'form-vertical',
    component: _layouts_form_vertical_form_vertical_component__WEBPACK_IMPORTED_MODULE_14__.FormVerticalComponent
  }]
}];
class FormsRoutingModule {
  static {
    this.ɵfac = function FormsRoutingModule_Factory(t) {
      return new (t || FormsRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
      type: FormsRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](FormsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule]
  });
})();

/***/ }),

/***/ 30684:
/*!*********************************************************!*\
  !*** ./src/app/core-component/forms/forms.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormsComponent: () => (/* binding */ FormsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);


class FormsComponent {
  static {
    this.ɵfac = function FormsComponent_Factory(t) {
      return new (t || FormsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormsComponent,
      selectors: [["app-forms"]],
      decls: 1,
      vars: 0,
      template: function FormsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 64299:
/*!******************************************************!*\
  !*** ./src/app/core-component/forms/forms.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormsModule: () => (/* binding */ FormsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _forms_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms-routing.module */ 18722);
/* harmony import */ var _forms_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms.component */ 30684);
/* harmony import */ var _form_elements_form_basic_inputs_form_basic_inputs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-elements/form-basic-inputs/form-basic-inputs.component */ 49407);
/* harmony import */ var _form_elements_form_checkbox_radios_form_checkbox_radios_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-elements/form-checkbox-radios/form-checkbox-radios.component */ 23575);
/* harmony import */ var _form_elements_form_elements_form_elements_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-elements/form-elements/form-elements.component */ 85551);
/* harmony import */ var _form_elements_form_fileupload_form_fileupload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-elements/form-fileupload/form-fileupload.component */ 80635);
/* harmony import */ var _form_elements_form_grid_gutters_form_grid_gutters_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-elements/form-grid-gutters/form-grid-gutters.component */ 41243);
/* harmony import */ var _form_elements_form_input_groups_form_input_groups_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form-elements/form-input-groups/form-input-groups.component */ 72783);
/* harmony import */ var _form_elements_form_mask_form_mask_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form-elements/form-mask/form-mask.component */ 29771);
/* harmony import */ var _form_elements_form_select_form_select_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form-elements/form-select/form-select.component */ 66371);
/* harmony import */ var _form_select_2_form_select_2_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form-select-2/form-select-2.component */ 18640);
/* harmony import */ var _form_validation_form_validation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./form-validation/form-validation.component */ 89080);
/* harmony import */ var _form_wizard_form_wizard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./form-wizard/form-wizard.component */ 55548);
/* harmony import */ var _layouts_form_floating_labels_form_floating_labels_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layouts/form-floating-labels/form-floating-labels.component */ 61092);
/* harmony import */ var _layouts_form_horizontal_form_horizontal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layouts/form-horizontal/form-horizontal.component */ 79692);
/* harmony import */ var _layouts_form_vertical_form_vertical_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layouts/form-vertical/form-vertical.component */ 61556);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 37580);



















class FormsModule {
  static {
    this.ɵfac = function FormsModule_Factory(t) {
      return new (t || FormsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({
      type: FormsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _forms_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormsRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_16__.sharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](FormsModule, {
    declarations: [_forms_component__WEBPACK_IMPORTED_MODULE_1__.FormsComponent, _form_elements_form_basic_inputs_form_basic_inputs_component__WEBPACK_IMPORTED_MODULE_2__.FormBasicInputsComponent, _form_elements_form_checkbox_radios_form_checkbox_radios_component__WEBPACK_IMPORTED_MODULE_3__.FormCheckboxRadiosComponent, _form_elements_form_elements_form_elements_component__WEBPACK_IMPORTED_MODULE_4__.FormElementsComponent, _form_elements_form_fileupload_form_fileupload_component__WEBPACK_IMPORTED_MODULE_5__.FormFileuploadComponent, _form_elements_form_grid_gutters_form_grid_gutters_component__WEBPACK_IMPORTED_MODULE_6__.FormGridGuttersComponent, _form_elements_form_input_groups_form_input_groups_component__WEBPACK_IMPORTED_MODULE_7__.FormInputGroupsComponent, _form_elements_form_mask_form_mask_component__WEBPACK_IMPORTED_MODULE_8__.FormMaskComponent, _form_elements_form_select_form_select_component__WEBPACK_IMPORTED_MODULE_9__.FormSelectComponent, _form_select_2_form_select_2_component__WEBPACK_IMPORTED_MODULE_10__.FormSelect2Component, _form_validation_form_validation_component__WEBPACK_IMPORTED_MODULE_11__.FormValidationComponent, _form_wizard_form_wizard_component__WEBPACK_IMPORTED_MODULE_12__.FormWizardComponent, _layouts_form_floating_labels_form_floating_labels_component__WEBPACK_IMPORTED_MODULE_13__.FormFloatingLabelsComponent, _layouts_form_horizontal_form_horizontal_component__WEBPACK_IMPORTED_MODULE_14__.FormHorizontalComponent, _layouts_form_vertical_form_vertical_component__WEBPACK_IMPORTED_MODULE_15__.FormVerticalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _forms_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormsRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_16__.sharedModule]
  });
})();

/***/ }),

/***/ 61092:
/*!*****************************************************************************************************!*\
  !*** ./src/app/core-component/forms/layouts/form-floating-labels/form-floating-labels.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormFloatingLabelsComponent: () => (/* binding */ FormFloatingLabelsComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);




class FormFloatingLabelsComponent {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  static {
    this.ɵfac = function FormFloatingLabelsComponent_Factory(t) {
      return new (t || FormFloatingLabelsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FormFloatingLabelsComponent,
      selectors: [["app-form-floating-labels"]],
      decls: 151,
      vars: 1,
      consts: [[1, "page-header"], [1, "row"], [1, "col"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "active"], [1, "col-xl-6"], [1, "card"], [1, "card-header", "justify-content-between"], [1, "card-title"], [1, "card-body"], [1, "form-floating", "mb-3"], ["type", "email", "id", "floatingInput", "placeholder", "name@example.com", 1, "form-control"], ["for", "floatingInput"], [1, "form-floating"], ["type", "password", "id", "floatingPassword", "placeholder", "Password", 1, "form-control"], ["for", "floatingPassword"], ["type", "email", "readonly", "", "id", "floatingEmptyPlaintextInput", "placeholder", "name@example.com", 1, "form-control-plaintext"], ["for", "floatingEmptyPlaintextInput"], ["type", "email", "readonly", "", "id", "floatingPlaintextInput", "placeholder", "name@example.com", "value", "name@example.com", 1, "form-control-plaintext"], ["for", "floatingPlaintextInput"], [1, "form-floating", "my-3"], ["type", "email", "id", "floatingInputValue", "placeholder", "name@example.com", "value", "test@example.com", 1, "form-control"], ["for", "floatingInputValue"], [1, "form-floatin"], ["type", "email", "id", "floatingInputInvalid", "placeholder", "name@example.com", "value", "test@example.com", 1, "form-control", "is-invalid"], ["for", "floatingInputInvalid"], [1, "form-floating", "mb-4"], ["placeholder", "Leave a comment here", "id", "floatingTextarea", 1, "form-control"], ["for", "floatingTextarea"], ["placeholder", "Leave a comment here", "id", "floatingTextarea2", "rows", "1", "disabled", "", 1, "form-control"], ["for", "floatingTextarea2"], ["id", "floatingSelect", "aria-label", "Floating label select example", 1, "form-select"], ["selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["for", "floatingSelect"], [1, "row", "g-2"], [1, "col-md"], ["type", "email", "id", "floatingInputGrid", "placeholder", "name@example.com", "value", "mdo@example.com", 1, "form-control"], ["for", "floatingInputGrid"], ["id", "floatingSelectGrid", 1, "form-select"], ["for", "floatingSelectGrid"], [1, "col-xl-12"], [1, "row", "gy-4"], [1, "col-xl-4"], [1, "form-floating", "mb-4", "floating-primary"], ["type", "email", "id", "floatingInputprimary", "placeholder", "name@example.com", 1, "form-control"], ["for", "floatingInputprimary"], [1, "form-floating", "mb-4", "floating-secondary"], ["type", "email", "id", "floatingInputsecondary", "placeholder", "name@example.com", 1, "form-control"], ["for", "floatingInputsecondary"], [1, "form-floating", "mb-4", "floating-warning"], ["type", "email", "id", "floatingInputwarning", "placeholder", "name@example.com", 1, "form-control"], ["for", "floatingInputwarning"], [1, "form-floating", "mb-4", "floating-info"], ["type", "email", "id", "floatingInputinfo", "placeholder", "name@example.com", 1, "form-control"], ["for", "floatingInputinfo"], [1, "form-floating", "mb-4", "floating-success"], ["type", "email", "id", "floatingInputsuccess", "placeholder", "name@example.com", 1, "form-control"], ["for", "floatingInputsuccess"], [1, "form-floating", "mb-4", "floating-danger"], ["type", "email", "id", "floatingInputdanger", "placeholder", "name@example.com", 1, "form-control"], ["for", "floatingInputdanger"]],
      template: function FormFloatingLabelsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Floating Label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 4)(6, "li", 5)(7, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Floating Label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 1)(12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Basic Examples ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12)(18, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Email address");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 8)(27, "div", 9)(28, "div", 10)(29, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Readonly plain text ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 12)(32, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Empty input");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Input with value");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 1)(41, "div", 8)(42, "div", 9)(43, "div", 10)(44, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Floating Labels With Pre Defined Values ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 12)(47, "form", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Input with value");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "form", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "label", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Invalid input");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 8)(56, "div", 9)(57, "div", 10)(58, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, " Textareas ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 12)(61, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "textarea", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "label", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "textarea", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "label", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Disabled");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 1)(70, "div", 8)(71, "div", 9)(72, "div", 10)(73, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, " Floating Labels In Select ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 12)(76, "div", 16)(77, "select", 34)(78, "option", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Open this select menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "option", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "One");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "option", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Two");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "option", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Three");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "label", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Works with selects");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 8)(89, "div", 9)(90, "div", 10)(91, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, " Floating Labels With Layouts ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 12)(94, "div", 40)(95, "div", 41)(96, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "input", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "label", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Email address");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 41)(101, "div", 16)(102, "select", 44)(103, "option", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Open this select menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "option", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "One");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "option", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Two");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "option", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Three");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "label", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Works with selects");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 1)(114, "div", 46)(115, "div", 9)(116, "div", 10)(117, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, " Floating Label Colors ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 12)(120, "div", 47)(121, "div", 48)(122, "div", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "input", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "label", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "primary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 48)(127, "div", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](128, "input", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "label", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "secondary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 48)(132, "div", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](133, "input", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "label", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "warning");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 48)(137, "div", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](138, "input", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "label", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "info");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 48)(142, "div", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](143, "input", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "label", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "success");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 48)(147, "div", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](148, "input", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "label", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "danger");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.adminDashboard);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 79692:
/*!*******************************************************************************************!*\
  !*** ./src/app/core-component/forms/layouts/form-horizontal/form-horizontal.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormHorizontalComponent: () => (/* binding */ FormHorizontalComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);






const _c0 = () => ({
  standalone: true
});
function FormHorizontalComponent_For_132_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r1.value, " ");
  }
}
function FormHorizontalComponent_For_225_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r2.value, " ");
  }
}
function FormHorizontalComponent_For_265_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r3.value, " ");
  }
}
function FormHorizontalComponent_For_347_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r4.value, " ");
  }
}
function FormHorizontalComponent_For_375_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r5.value, " ");
  }
}
class FormHorizontalComponent {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    this.selectedValue1 = '';
    this.selectedValue2 = '';
    this.selectedValue3 = '';
    this.selectedValue4 = '';
    this.selectedValue5 = '';
    this.selectedList1 = [{
      value: 'A+'
    }, {
      value: 'O+'
    }, {
      value: 'B+'
    }, {
      value: 'AB+'
    }];
    this.selectedList2 = [{
      value: 'Select State'
    }, {
      value: 'California'
    }, {
      value: 'Texas'
    }, {
      value: 'Florida'
    }];
    this.selectedList3 = [{
      value: 'Select Country'
    }, {
      value: 'USA'
    }, {
      value: 'France'
    }, {
      value: 'India'
    }, {
      value: 'Spain'
    }];
    this.selectedList4 = [{
      value: 'Choose...'
    }, {
      value: 'One'
    }, {
      value: 'Two'
    }, {
      value: 'Three'
    }];
    this.selectedList5 = [{
      value: 'Choose...'
    }, {
      value: 'One'
    }, {
      value: 'Two'
    }, {
      value: 'Three'
    }];
  }
  static {
    this.ɵfac = function FormHorizontalComponent_Factory(t) {
      return new (t || FormHorizontalComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FormHorizontalComponent,
      selectors: [["app-form-horizontal"]],
      decls: 384,
      vars: 16,
      consts: [[1, "page-header"], [1, "row"], [1, "col"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "active"], [1, "col-xl-6", "d-flex"], [1, "card", "flex-fill"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["action", "#"], [1, "row", "mb-3"], [1, "col-lg-3", "col-form-label"], [1, "col-lg-9"], ["type", "text", 1, "form-control"], ["type", "email", 1, "form-control"], ["type", "password", 1, "form-control"], [1, "text-end"], ["type", "submit", 1, "btn", "btn-primary"], [1, "col-md-12"], [1, "card"], [1, "mb-3"], [1, "col-xl-6"], [1, "form-check", "form-check-inline"], ["type", "radio", "name", "gender", "id", "gender_male", "value", "option1", "checked", "", 1, "form-check-input"], ["for", "gender_male", 1, "form-check-label"], ["type", "radio", "name", "gender", "id", "gender_female", "value", "option2", 1, "form-check-input"], ["for", "gender_female", 1, "form-check-label"], ["placeholder", "Select", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], ["placeholder", "Select State", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["rows", "4", "cols", "5", "placeholder", "Enter message", 1, "form-control"], [1, "col-md-6"], ["type", "text", "placeholder", "First Name", 1, "form-control"], ["type", "text", "placeholder", "Last Name", 1, "form-control"], [1, "row", "mt-4"], ["placeholder", "Select Country", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["type", "text", "placeholder", "ZIP code", 1, "form-control"], ["type", "text", "placeholder", "State/Province", 1, "form-control"], ["type", "text", "placeholder", "City", 1, "form-control"], [1, "card-header", "justify-content-between"], ["for", "inputEmail1", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], [1, "input-group"], ["type", "email", "id", "inputEmail1", 1, "form-control"], [1, "input-group-text"], [1, "feather", "icon-mail"], ["for", "inputPassword1", 1, "col-sm-2", "col-form-label"], ["type", "password", "id", "inputPassword1", 1, "form-control"], [1, "feather", "icon-lock"], ["for", "colFormLabelSm", 1, "col-sm-2", "col-form-label", "col-form-label-sm"], ["type", "email", "id", "colFormLabelSm", "placeholder", "col-form-label-sm", 1, "form-control", "form-control-sm"], ["for", "colFormLabel", 1, "col-sm-2", "col-form-label"], ["type", "email", "id", "colFormLabel", "placeholder", "col-form-label", 1, "form-control"], ["for", "colFormLabelLg", 1, "col-sm-2", "col-form-label", "col-form-label-lg"], ["type", "email", "id", "colFormLabelLg", "placeholder", "col-form-label-lg", 1, "form-control", "form-control-lg"], [1, "col-xl-12"], [1, "row", "gy-2", "gx-3", "align-items-center", "mb-4"], [1, "col-auto"], ["for", "autoSizingInput", 1, "visually-hidden"], ["type", "text", "id", "autoSizingInput", "placeholder", "Jane Doe", 1, "form-control"], ["for", "autoSizingInputGroup", 1, "visually-hidden"], ["type", "text", "id", "autoSizingInputGroup", "placeholder", "Username", 1, "form-control"], ["for", "autoSizingSelect", 1, "visually-hidden"], ["placeholder", "Choose...", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "form-check"], ["type", "checkbox", "id", "autoSizingCheck", 1, "form-check-input"], ["for", "autoSizingCheck", 1, "form-check-label"], [1, "fw-semibold", "mb-1", "text-muted"], [1, "row", "gx-3", "gy-2", "align-items-center", "mt-0"], [1, "col-sm-3"], ["for", "specificSizeInputName", 1, "visually-hidden"], ["type", "text", "id", "specificSizeInputName", "placeholder", "Jane Doe", 1, "form-control"], ["for", "specificSizeInputGroupUsername", 1, "visually-hidden"], ["type", "text", "id", "specificSizeInputGroupUsername", "placeholder", "Username", 1, "form-control"], ["for", "specificSizeSelect", 1, "visually-hidden"], ["type", "checkbox", "id", "autoSizingCheck2", 1, "form-check-input"], ["for", "autoSizingCheck2", 1, "form-check-label"]],
      template: function FormHorizontalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Horizontal Form");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 4)(6, "li", 5)(7, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Horizontal Form");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 1)(12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "h5", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Basic Form");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12)(18, "form", 13)(19, "div", 14)(20, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "First Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 14)(25, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Last Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 14)(30, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Email Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 14)(35, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 14)(40, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 14)(45, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Repeat Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 20)(50, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 8)(53, "div", 9)(54, "div", 10)(55, "h5", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Address Form");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 12)(58, "form", 13)(59, "div", 14)(60, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Address 1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 14)(65, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Address 2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 14)(70, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "City");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 14)(75, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "State");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 14)(80, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Country");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 14)(85, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Postal Code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 20)(90, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 1)(93, "div", 22)(94, "div", 23)(95, "div", 10)(96, "h5", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Two Column Horizontal Form");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 12)(99, "h6", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Personal Information");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "form", 13)(102, "div", 1)(103, "div", 25)(104, "div", 14)(105, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "First Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 14)(110, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Last Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 14)(115, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Gender");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 16)(118, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "label", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, " Male ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "label", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, " Female ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 14)(127, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Blood Group");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 16)(130, "mat-select", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function FormHorizontalComponent_Template_mat_select_ngModelChange_130_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedValue1, $event) || (ctx.selectedValue1 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](131, FormHorizontalComponent_For_132_Template, 2, 2, "mat-option", 32, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 25)(134, "div", 14)(135, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](138, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 14)(140, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](143, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 14)(145, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](148, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 14)(150, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "Repeat Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](153, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "h6", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 1)(157, "div", 25)(158, "div", 14)(159, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "Address Line 1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](162, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 14)(164, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "Address Line 2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](167, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 14)(169, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "State");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](172, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 25)(174, "div", 14)(175, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "City");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](178, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "div", 14)(180, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "Country");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](183, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 14)(185, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, "Postal Code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](188, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 20)(190, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "div", 1)(193, "div", 22)(194, "div", 23)(195, "div", 10)(196, "h5", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "Two Column Horizontal Form 2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "div", 12)(199, "form", 13)(200, "div", 1)(201, "div", 25)(202, "h6", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "Personal Information");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "div", 14)(205, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206, "First Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](208, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "div", 14)(210, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](211, "Last Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](213, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "div", 14)(215, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](216, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](218, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "div", 14)(220, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](221, "State");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "div", 16)(223, "mat-select", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function FormHorizontalComponent_Template_mat_select_ngModelChange_223_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedValue2, $event) || (ctx.selectedValue2 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](224, FormHorizontalComponent_For_225_Template, 2, 2, "mat-option", 32, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "div", 14)(227, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](228, "About");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](230, "textarea", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "div", 25)(232, "h6", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](233, "Personal Details");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "div", 1)(235, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](236, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "div", 16)(238, "div", 1)(239, "div", 35)(240, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](241, "input", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "div", 35)(243, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](244, "input", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "div", 14)(246, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](247, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](249, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "div", 14)(251, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](252, "Phone");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](254, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "div", 14)(256, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](257, "Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](259, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "div", 38)(261, "div", 35)(262, "div", 24)(263, "mat-select", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function FormHorizontalComponent_Template_mat_select_ngModelChange_263_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedValue3, $event) || (ctx.selectedValue3 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](264, FormHorizontalComponent_For_265_Template, 2, 2, "mat-option", 32, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](267, "input", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "div", 35)(269, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](270, "input", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](272, "input", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "div", 20)(274, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](275, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "div", 1)(277, "div", 25)(278, "div", 23)(279, "div", 43)(280, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](281, " Horizontal form With Icons ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](282, "div", 12)(283, "form")(284, "div", 14)(285, "label", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](286, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "div", 45)(288, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](289, "input", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](290, "div", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](291, "i", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](292, "div", 14)(293, "label", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](294, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](295, "div", 45)(296, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](297, "input", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](298, "div", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](299, "i", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](301, "Sign in");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "div", 25)(303, "div", 23)(304, "div", 43)(305, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](306, " Horizontal form label sizing ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](307, "div", 12)(308, "div", 14)(309, "label", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](310, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "div", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](312, "input", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](313, "div", 14)(314, "label", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](315, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](316, "div", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](317, "input", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](318, "div", 1)(319, "label", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](320, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](321, "div", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](322, "input", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](323, "div", 1)(324, "div", 59)(325, "div", 23)(326, "div", 43)(327, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](328, " Auto sizing ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](329, "div", 12)(330, "form", 60)(331, "div", 61)(332, "label", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](333, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](334, "input", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](335, "div", 61)(336, "label", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](337, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](338, "div", 46)(339, "div", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](340, "@");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](341, "input", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](342, "div", 61)(343, "label", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](344, "Preference");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](345, "mat-select", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function FormHorizontalComponent_Template_mat_select_ngModelChange_345_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedValue4, $event) || (ctx.selectedValue4 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](346, FormHorizontalComponent_For_347_Template, 2, 2, "mat-option", 32, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](348, "div", 61)(349, "div", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](350, "input", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](351, "label", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](352, " Remember me ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](353, "div", 61)(354, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](355, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](356, "span", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](357, "You can then remix that once again with size-specific column classes.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](358, "form", 72)(359, "div", 73)(360, "label", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](361, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](362, "input", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](363, "div", 73)(364, "label", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](365, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](366, "div", 46)(367, "div", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](368, "@");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](369, "input", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](370, "div", 73)(371, "label", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](372, "Preference");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](373, "mat-select", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function FormHorizontalComponent_Template_mat_select_ngModelChange_373_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedValue5, $event) || (ctx.selectedValue5 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](374, FormHorizontalComponent_For_375_Template, 2, 2, "mat-option", 32, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](376, "div", 61)(377, "div", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](378, "input", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](379, "label", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](380, " Remember me ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](381, "div", 61)(382, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](383, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.adminDashboard);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](123);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.selectedList1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](92);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.selectedList2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.selectedList3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](81);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.selectedList4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.selectedList5);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_material_select__WEBPACK_IMPORTED_MODULE_3__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 61556:
/*!***************************************************************************************!*\
  !*** ./src/app/core-component/forms/layouts/form-vertical/form-vertical.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormVerticalComponent: () => (/* binding */ FormVerticalComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);






const _c0 = () => ({
  standalone: true
});
function FormVerticalComponent_For_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r1.value, " ");
  }
}
function FormVerticalComponent_For_191_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r2.value, " ");
  }
}
function FormVerticalComponent_For_234_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r3.value, " ");
  }
}
class FormVerticalComponent {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    this.selectedValue1 = '';
    this.selectedValue2 = '';
    this.selectedValue3 = '';
    this.selectedList1 = [{
      value: 'Select'
    }, {
      value: 'A+'
    }, {
      value: 'O+'
    }, {
      value: 'B+'
    }, {
      value: 'AB+'
    }];
    this.selectedList2 = [{
      value: 'Select State'
    }, {
      value: 'California'
    }, {
      value: 'Texas'
    }, {
      value: 'Florida'
    }];
    this.selectedList3 = [{
      value: 'Select Country'
    }, {
      value: 'USA'
    }, {
      value: 'France'
    }, {
      value: 'India'
    }, {
      value: 'Spain'
    }];
  }
  static {
    this.ɵfac = function FormVerticalComponent_Factory(t) {
      return new (t || FormVerticalComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FormVerticalComponent,
      selectors: [["app-form-vertical"]],
      decls: 302,
      vars: 10,
      consts: [[1, "page-header"], [1, "row"], [1, "col"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "active"], [1, "col-md-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["action", "#"], [1, "mb-3"], [1, "form-label"], ["type", "text", 1, "form-control"], ["type", "email", 1, "form-control"], ["type", "password", 1, "form-control"], [1, "text-end"], ["type", "submit", 1, "btn", "btn-primary"], [1, "col-md-12"], ["placeholder", "Select", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], [1, "d-block"], [1, "form-check", "form-check-inline"], ["type", "radio", "name", "gender", "id", "gender_male", "value", "option1", 1, "form-check-input"], ["for", "gender_male", 1, "form-check-label"], ["type", "radio", "name", "gender", "id", "gender_female", "value", "option2", 1, "form-check-input"], ["for", "gender_female", 1, "form-check-label"], ["placeholder", "Select State", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["rows", "5", "cols", "5", "placeholder", "Enter message", 1, "form-control"], ["placeholder", "Select Country", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "col-xl-6"], [1, "card-header", "justify-content-between"], ["for", "form-text1", 1, "form-label", "fs-14"], [1, "input-group"], [1, "input-group-text"], [1, "feather", "icon-user", "feather-user"], ["type", "text", "id", "form-text1", "placeholder", "", 1, "form-control"], ["for", "form-password1", 1, "form-label", "fs-14"], [1, "feather", "icon-lock", "feather-lock"], ["type", "password", "id", "form-password1", "placeholder", "", 1, "form-control"], [1, "feather-lock"], ["for", "colFormLabelSm", 1, "col-form-label", "col-form-label-sm"], ["type", "email", "id", "colFormLabelSm", "placeholder", "col-form-label-sm", 1, "form-control", "form-control-sm"], ["for", "colFormLabel", 1, "col-form-label"], ["type", "email", "id", "colFormLabel", "placeholder", "col-form-label", 1, "form-control"], ["for", "colFormLabelLg", 1, "col-form-label", "col-form-label-lg"], ["type", "email", "id", "colFormLabelLg", "placeholder", "col-form-label-lg", 1, "form-control", "form-control-lg"]],
      template: function FormVerticalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Vertical Form");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 4)(6, "li", 5)(7, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Vertical Form");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 1)(12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "h5", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Basic Form");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12)(18, "form", 13)(19, "div", 14)(20, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "First Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14)(24, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Last Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 14)(28, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Email Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 14)(32, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 14)(36, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 14)(40, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Repeat Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 19)(44, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 8)(47, "div", 9)(48, "div", 10)(49, "h5", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Address Form");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 12)(52, "form", 13)(53, "div", 14)(54, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Address Line 1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 14)(58, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Address Line 2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 14)(62, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "City");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 14)(66, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "State");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 14)(70, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Country");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 14)(74, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Postal Code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 19)(78, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 1)(81, "div", 21)(82, "div", 9)(83, "div", 10)(84, "h5", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Two Column Vertical Form");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 12)(87, "form", 13)(88, "h5", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Personal Information");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 1)(91, "div", 8)(92, "div", 14)(93, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "First Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 14)(97, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Last Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 14)(101, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Blood Group");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "mat-select", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function FormVerticalComponent_Template_mat_select_ngModelChange_103_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedValue1, $event) || (ctx.selectedValue1 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](104, FormVerticalComponent_For_105_Template, 2, 2, "mat-option", 23, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 14)(107, "label", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Gender:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "label", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Male");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "label", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Female");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 8)(118, "div", 14)(119, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 14)(123, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 14)(127, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](129, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 14)(131, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "Repeat Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](133, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "h5", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "Postal Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 1)(137, "div", 8)(138, "div", 14)(139, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "Address Line 1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](141, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "div", 14)(143, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "Address Line 2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](145, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 14)(147, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "State");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](149, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 8)(151, "div", 14)(152, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "City");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](154, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 14)(156, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "Country");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](158, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "div", 14)(160, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "Postal Code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](162, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 19)(164, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 1)(167, "div", 21)(168, "div", 9)(169, "div", 10)(170, "h5", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, "Two Column Vertical Form");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "div", 12)(173, "form", 13)(174, "div", 1)(175, "div", 8)(176, "h5", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, "Personal details");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "div", 14)(179, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "Name:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](181, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 14)(183, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "Password:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](185, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "div", 14)(187, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "State:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "mat-select", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function FormVerticalComponent_Template_mat_select_ngModelChange_189_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedValue2, $event) || (ctx.selectedValue2 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](190, FormVerticalComponent_For_191_Template, 2, 2, "mat-option", 23, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "div", 14)(193, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, "Your Message:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](195, "textarea", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "div", 8)(197, "h5", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](198, "Personal details");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "div", 1)(200, "div", 8)(201, "div", 14)(202, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "First Name:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](204, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "div", 8)(206, "div", 14)(207, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](208, "Last Name:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](209, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "div", 1)(211, "div", 8)(212, "div", 14)(213, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](214, "Email:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](215, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "div", 8)(217, "div", 14)(218, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, "Phone:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](220, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "div", 1)(222, "div", 21)(223, "div", 14)(224, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](225, "Address line:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](226, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "div", 1)(228, "div", 8)(229, "div", 14)(230, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](231, "Country:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "mat-select", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function FormVerticalComponent_Template_mat_select_ngModelChange_232_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedValue3, $event) || (ctx.selectedValue3 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](233, FormVerticalComponent_For_234_Template, 2, 2, "mat-option", 23, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "div", 8)(236, "div", 14)(237, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](238, "State/Province:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](239, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "div", 1)(241, "div", 8)(242, "div", 14)(243, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](244, "ZIP code:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](245, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "div", 8)(247, "div", 14)(248, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](249, "City:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](250, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "div", 19)(252, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](253, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "div", 1)(255, "div", 33)(256, "div", 9)(257, "div", 34)(258, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](259, " Vertical Forms with icon ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "div", 12)(261, "div", 14)(262, "label", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](263, "Enter name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "div", 36)(265, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](266, "i", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](267, "input", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "div", 14)(269, "label", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](270, "Enter Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "div", 36)(272, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](273, "i", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](274, "input", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](275, "div", 14)(276, "label", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](277, "Enter Repeat Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "div", 36)(279, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](280, "i", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](281, "input", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](282, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](283, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "div", 33)(285, "div", 9)(286, "div", 34)(287, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](288, " Horizontal form label sizing ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "div", 12)(290, "div", 14)(291, "label", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](292, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](293, "input", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "div", 14)(295, "label", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](296, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](297, "input", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](298, "div")(299, "label", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](300, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](301, "input", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.adminDashboard);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.selectedList1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](85);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.selectedList2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.selectedList3);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_material_select__WEBPACK_IMPORTED_MODULE_3__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_forms_forms_module_ts.js.map