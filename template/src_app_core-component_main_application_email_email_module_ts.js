"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_main_application_email_email_module_ts"],{

/***/ 87429:
/*!*******************************************************************************!*\
  !*** ./src/app/core-component/main/application/email/email-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailRoutingModule: () => (/* binding */ EmailRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _email_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email.component */ 22265);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _email_component__WEBPACK_IMPORTED_MODULE_0__.EmailComponent
}];
class EmailRoutingModule {
  static {
    this.ɵfac = function EmailRoutingModule_Factory(t) {
      return new (t || EmailRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: EmailRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EmailRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 22265:
/*!**************************************************************************!*\
  !*** ./src/app/core-component/main/application/email/email.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailComponent: () => (/* binding */ EmailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);


class EmailComponent {
  constructor() {
    this.checkAll = false;
    this.checkbox1 = false;
    this.checkbox2 = false;
    this.checkbox3 = false;
    this.checkbox4 = false;
    this.checkbox5 = false;
    this.checkbox6 = false;
    this.checkbox7 = false;
    this.checkbox8 = false;
    this.checkbox9 = false;
    this.checkbox10 = false;
  }
  toggleAllCheckboxes() {
    this.checkbox1 = this.checkAll;
    this.checkbox2 = this.checkAll;
    this.checkbox3 = this.checkAll;
    this.checkbox4 = this.checkAll;
    this.checkbox5 = this.checkAll;
    this.checkbox6 = this.checkAll;
    this.checkbox7 = this.checkAll;
    this.checkbox8 = this.checkAll;
    this.checkbox9 = this.checkAll;
    this.checkbox10 = this.checkAll;
  }
  static {
    this.ɵfac = function EmailComponent_Factory(t) {
      return new (t || EmailComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmailComponent,
      selectors: [["app-email"]],
      decls: 320,
      vars: 11,
      consts: [[1, "page-header"], [1, "row"], [1, "col"], [1, "page-title"], [1, "col-lg-3", "col-md-12"], [1, "compose-btn"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "btn-block", "w-100"], [1, "inbox-menu"], [1, "active"], ["href", "javascript:void(0);"], [1, "fas", "fa-download"], [1, "mail-count"], [1, "far", "fa-star"], [1, "far", "fa-paper-plane"], [1, "far", "fa-file-alt"], [1, "far", "fa-trash-alt"], [1, "col-lg-9", "col-md-12"], [1, "card", "bg-white"], [1, "card-body"], [1, "email-header"], [1, "col-lg-9", "top-action-left", "col-sm-12"], [1, "float-left"], [1, "btn-group", "dropdown-action", "me-1"], ["type", "button", "data-bs-toggle", "dropdown", 1, "btn", "btn-white", "dropdown-toggle"], [1, "fas", "fa-angle-down"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "dropdown-divider"], [1, "fas", "fa-folder"], ["role", "menu", 1, "dropdown-menu"], [1, "fas", "fa-tags"], [1, "btn-group", "dropdown-action", "mail-search"], ["type", "text", "placeholder", "Search Messages", 1, "form-control", "search-message"], [1, "col-lg-3", "top-action-right", "col-sm-12"], [1, "text-end"], ["type", "button", "title", "Refresh", "data-toggle", "tooltip", 1, "btn", "btn-white", "d-none", "d-md-inline-block", "me-1"], [1, "fas", "fa-sync-alt"], [1, "btn-group"], [1, "btn", "btn-white"], [1, "fas", "fa-angle-left"], [1, "fas", "fa-angle-right"], [1, "text-muted", "d-none", "d-md-inline-block"], [1, "email-content"], [1, "table-responsive"], [1, "table", "table-inbox", "table-hover"], ["colspan", "6"], [1, "checkboxs"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "change", "ngModel"], [1, "checkmarks"], [1, "unread", "clickable-row"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "mail-important"], [1, "fas", "fa-star", "starred"], [1, "name"], [1, "subject"], [1, "fas", "fa-paperclip"], [1, "mail-date"], [1, "clickable-row"], [1, "far", "fa-star", "starred"], [1, "searchpart"], [1, "searchcontent"], [1, "searchhead"], ["id", "closesearch"], ["aria-hidden", "true", 1, "fa", "fa-times-circle"], [1, "searchcontents"], [1, "searchparts"], ["type", "text", "placeholder", "search here"], [1, "btn", "btn-searchs"], [1, "recentsearch"], [1, "fa", "fa-search", "me-2"]],
      template: function EmailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Inbox");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1)(6, "div", 4)(7, "div", 5)(8, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Compose ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 7)(11, "li", 8)(12, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Inbox ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "(5)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li")(18, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Important");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li")(22, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Sent Mail");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li")(26, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Drafts ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "(13)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li")(32, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Trash");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16)(36, "div", 17)(37, "div", 18)(38, "div", 19)(39, "div", 1)(40, "div", 20)(41, "div", 21)(42, "div", 22)(43, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Select ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 25)(47, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "All");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "None");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Read");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Unread");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 22)(57, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Actions ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 25)(61, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Reply");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Forward");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Archive");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Mark As Read");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Mark As Unread");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Delete");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 22)(76, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 28)(78, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 29)(80, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Social");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Forums");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Updates");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Spam");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Trash");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "New");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 22)(95, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "i", 30)(97, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 29)(99, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Work");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Family");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Social");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Primary");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Promotions");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Forums");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 33)(115, "div", 34)(116, "button", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 37)(119, "a", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "i", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "i", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 34)(124, "span", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Showing 10 of 112 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 42)(127, "div", 43)(128, "table", 44)(129, "thead")(130, "tr")(131, "th", 45)(132, "label", 46)(133, "input", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmailComponent_Template_input_ngModelChange_133_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.checkAll, $event) || (ctx.checkAll = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EmailComponent_Template_input_change_133_listener() {
            return ctx.toggleAllCheckboxes();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "span", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "tbody")(136, "tr", 49)(137, "td")(138, "label", 46)(139, "input", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmailComponent_Template_input_ngModelChange_139_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.checkbox1, $event) || (ctx.checkbox1 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "span", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td")(142, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "i", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "td", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "John Doe");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "td", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "i", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "13:14");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "tr", 49)(153, "td")(154, "label", 46)(155, "input", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmailComponent_Template_input_ngModelChange_155_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.checkbox2, $event) || (ctx.checkbox2 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "span", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "td")(158, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Envato Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Important account security update from Envato");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "td", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "8:42");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "tr", 57)(168, "td")(169, "label", 46)(170, "input", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmailComponent_Template_input_ngModelChange_170_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.checkbox3, $event) || (ctx.checkbox3 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "span", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "td")(173, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "td", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Twitter");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "td", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "HRMS Bootstrap Admin Template");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "td", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "30 Nov");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "tr", 49)(183, "td")(184, "label", 46)(185, "input", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmailComponent_Template_input_ngModelChange_185_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.checkbox4, $event) || (ctx.checkbox4 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "span", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "td")(188, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "td", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Richard Parker");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "td", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "td", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "18 Sep");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "tr", 57)(198, "td")(199, "label", 46)(200, "input", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmailComponent_Template_input_ngModelChange_200_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.checkbox5, $event) || (ctx.checkbox5 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "span", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "td")(203, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "td", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "John Smith");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "td", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "td", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "21 Aug");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "tr", 57)(213, "td")(214, "label", 46)(215, "input", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmailComponent_Template_input_ngModelChange_215_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.checkbox6, $event) || (ctx.checkbox6 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "span", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "td")(218, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "td", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "me, Robert Smith (3)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "td", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "td", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "1 Aug");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "tr", 49)(228, "td")(229, "label", 46)(230, "input", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmailComponent_Template_input_ngModelChange_230_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.checkbox7, $event) || (ctx.checkbox7 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "span", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "td")(233, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "td", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Codecanyon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "td", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Welcome To Codecanyon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "td", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Jul 13");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "tr", 57)(243, "td")(244, "label", 46)(245, "input", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmailComponent_Template_input_ngModelChange_245_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.checkbox8, $event) || (ctx.checkbox8 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "span", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "td")(248, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "td", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Richard Miles");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "td", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "i", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "td", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "May 14");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "tr", 49)(259, "td")(260, "label", 46)(261, "input", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmailComponent_Template_input_ngModelChange_261_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.checkbox9, $event) || (ctx.checkbox9 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "span", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "td")(264, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "td", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "John Smith");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "td", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "td", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "11/11/16");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "tr", 57)(274, "td")(275, "label", 46)(276, "input", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function EmailComponent_Template_input_ngModelChange_276_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.checkbox10, $event) || (ctx.checkbox10 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](277, "span", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "td")(279, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "i", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "td", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "Mike Litorus");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "td", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](285, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "td", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "10/31/16");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "div", 59)(289, "div", 60)(290, "div", 61)(291, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "Search ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "a", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](294, "i", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 64)(296, "div", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](297, "input", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "a", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "Search");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "div", 68)(301, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "Recent Search");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "ul")(304, "li")(305, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](306, "i", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, " Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "li")(309, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](310, "i", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, " Report");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "li")(313, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](314, "i", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, " Invoice");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "li")(317, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](318, "i", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, " Sales");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](133);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.checkAll);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.checkbox1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.checkbox2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.checkbox3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.checkbox4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.checkbox5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.checkbox6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.checkbox7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.checkbox8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.checkbox9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.checkbox10);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 55820:
/*!***********************************************************************!*\
  !*** ./src/app/core-component/main/application/email/email.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailModule: () => (/* binding */ EmailModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _email_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email-routing.module */ 87429);
/* harmony import */ var _email_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email.component */ 22265);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);





class EmailModule {
  static {
    this.ɵfac = function EmailModule_Factory(t) {
      return new (t || EmailModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: EmailModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _email_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmailRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.sharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](EmailModule, {
    declarations: [_email_component__WEBPACK_IMPORTED_MODULE_1__.EmailComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _email_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmailRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.sharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_main_application_email_email_module_ts.js.map