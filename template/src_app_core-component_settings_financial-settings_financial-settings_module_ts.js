"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_settings_financial-settings_financial-settings_module_ts"],{

/***/ 2530:
/*!***************************************************************************************************************!*\
  !*** ./src/app/core-component/settings/financial-settings/bank-settings-grid/bank-settings-grid.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BankSettingsGridComponent: () => (/* binding */ BankSettingsGridComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_service_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/sidebar/sidebar.service */ 79950);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _common_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/settings-sidebar/settings-sidebar.component */ 42362);







function BankSettingsGridComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 7);
  }
}
function BankSettingsGridComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 8);
  }
}
class BankSettingsGridComponent {
  constructor(sidebar) {
    this.sidebar = sidebar;
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    this.isActive = 'Karur vysya bank';
    this.isCollapsed = false;
  }
  setActive(theme) {
    this.isActive = theme;
  }
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  static {
    this.ɵfac = function BankSettingsGridComponent_Factory(t) {
      return new (t || BankSettingsGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_service_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__.SidebarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: BankSettingsGridComponent,
      selectors: [["app-bank-settings-grid"]],
      decls: 235,
      vars: 10,
      consts: [[1, "page-header", "settings-pg-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "feather", "icon-rotate-ccw", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "feather", "icon-chevron-up", "feather-chevron-up"], [1, "feather", "icon-chevron-down", "feather-chevron-down"], [1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "settings-page-wrap", "w-50"], [1, "setting-title"], [1, "page-header", "bank-settings", "justify-content-end"], [1, "btn-list", "me-2", 3, "routerLink"], [1, "feather", "icon-list", "feather-user", "btn-list", "me-2"], [1, "btn-grid", "active", 3, "routerLink"], [1, "feather", "icon-grid", "feather-user"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-account", 1, "btn", "btn-added"], [1, "feather", "icon-plus-circle", "me-2"], [1, "col-xxl-4", "col-xl-6", "col-lg-12", "col-sm-6"], [1, "bank-box", "active", 3, "click"], [1, "bank-header"], [1, "bank-name"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "bank-info"], [1, "edit-delete-action", "bank-action-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-account", 1, "me-2", "p-2", "edit-bank"], [1, "feather", "icon-edit", "feather-edit"], ["href", "javascript:void(0);", 1, "confirm-text", "delete-bank", "p-2"], [1, "feather", "icon-trash-2", "feather-trash-2"], [1, "bank-box", 3, "click"], ["href", "javascript:void(0);", 1, "confirm-text", "p-2", "delete-bank"], ["id", "add-account", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "custom-modal-two"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header", "border-0", "custom-modal-header", "custom-class-modal"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center", "ms-auto", "me-2"], ["type", "checkbox", "id", "user1", "checked", "", 1, "check"], ["for", "user1", 1, "checktoggle"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body"], [1, "col-lg-12"], [1, "mb-3"], [1, "form-label"], ["type", "text", 1, "form-control"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "status-label"], ["type", "checkbox", "id", "user2", "checked", "", 1, "check"], ["for", "user2", 1, "checktoggle"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], ["type", "checkbox", "id", "user3", "checked", "", 1, "check"], ["for", "user3", 1, "checktoggle"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit"], ["id", "edit-account", 1, "modal", "fade"], ["type", "checkbox", "id", "user4", "checked", "", 1, "check"], ["for", "user4", 1, "checktoggle"], ["type", "text", "value", "HDFC", 1, "form-control"], ["type", "text", "value", "**** **** 1832", 1, "form-control"], ["type", "text", "value", "Mathew", 1, "form-control"], ["type", "text", "value", "Bringham", 1, "form-control"], ["type", "text", "value", "124547", 1, "form-control"], ["type", "checkbox", "id", "user5", "checked", "", 1, "check"], ["for", "user5", 1, "checktoggle"], ["type", "checkbox", "id", "user6", "checked", "", 1, "check"], ["for", "user6", 1, "checktoggle"], ["id", "setdata", 1, "customizer-links"], [1, "sticky-sidebar"], [1, "sidebar-icons"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "data-bs-placement", "left", "data-bs-original-title", "Theme", 1, "navigation-add"], [1, "feather", "icon-settings", "feather-five"]],
      template: function BankSettingsGridComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Manage your settings on portal");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ul", 3)(8, "li")(9, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "li")(12, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BankSettingsGridComponent_Template_a_click_12_listener() {
            return ctx.toggleCollapse();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, BankSettingsGridComponent_Conditional_13_Template, 1, 0, "i", 7)(14, BankSettingsGridComponent_Conditional_14_Template, 1, 0, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 9)(16, "div", 10)(17, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "app-settings-sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 12)(20, "div", 13)(21, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Bank Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 14)(24, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 19)(29, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Add New Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 9)(33, "div", 22)(34, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BankSettingsGridComponent_Template_div_click_34_listener() {
            return ctx.setActive("Karur vysya bank");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 24)(36, "div", 25)(37, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Karur vysya bank");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "**** **** 1982");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 26)(42, "div", 27)(43, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Holder Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "John Smith");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 28)(48, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "a", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 22)(53, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BankSettingsGridComponent_Template_div_click_53_listener() {
            return ctx.setActive("Swiss Bank");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 24)(55, "div", 25)(56, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Swiss Bank");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "**** **** 1796");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 26)(61, "div", 27)(62, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "Holder Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Andrew");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 28)(67, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "a", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](70, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 22)(72, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BankSettingsGridComponent_Template_div_click_72_listener() {
            return ctx.setActive("HDFC");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 24)(74, "div", 25)(75, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "HDFC");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "**** **** 1832");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 26)(80, "div", 27)(81, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "Holder Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "Mathew");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 28)(86, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](87, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "a", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](89, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 35)(91, "div", 36)(92, "div", 37)(93, "div", 38)(94, "div", 39)(95, "div", 40)(96, "div", 2)(97, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, "Add Bank Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](100, "input", 42)(101, "label", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "button", 44)(103, "span", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 46)(106, "form")(107, "div", 9)(108, "div", 47)(109, "div", 48)(110, "label", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](111, "Bank Name ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](114, "input", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "div", 47)(116, "div", 48)(117, "label", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](118, "Account Number ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](120, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](121, "input", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "div", 47)(123, "div", 48)(124, "label", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](125, "Account Name ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](127, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](128, "input", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "div", 47)(130, "div", 48)(131, "label", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](132, "Branch ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](134, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](135, "input", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "div", 47)(137, "div", 48)(138, "label", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](139, "IFSC ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](141, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](142, "input", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "div", 47)(144, "div", 51)(145, "span", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](146, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](147, "input", 53)(148, "label", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "div", 47)(150, "div", 55)(151, "span", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](152, "Make as default");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](153, "input", 56)(154, "label", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "div", 58)(156, "button", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](157, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "button", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](159, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](160, "div", 61)(161, "div", 36)(162, "div", 37)(163, "div", 38)(164, "div", 39)(165, "div", 40)(166, "div", 2)(167, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](168, "Edit Bank Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](169, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](170, "input", 62)(171, "label", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "button", 44)(173, "span", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](174, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](175, "div", 46)(176, "form")(177, "div", 9)(178, "div", 47)(179, "div", 48)(180, "label", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](181, "Bank Name ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](182, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](183, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](184, "input", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](185, "div", 47)(186, "div", 48)(187, "label", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](188, "Account Number ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](189, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](190, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](191, "input", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](192, "div", 47)(193, "div", 48)(194, "label", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](195, "Account Name ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](196, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](197, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](198, "input", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](199, "div", 47)(200, "div", 48)(201, "label", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](202, "Branch ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](203, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](204, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](205, "input", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](206, "div", 47)(207, "div", 48)(208, "label", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](209, "IFSC ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](210, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](211, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](212, "input", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](213, "div", 47)(214, "div", 51)(215, "span", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](216, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](217, "input", 69)(218, "label", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](219, "div", 47)(220, "div", 55)(221, "span", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](222, "Make as default");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](223, "input", 71)(224, "label", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](225, "div", 58)(226, "button", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](227, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](228, "button", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](229, "Save Changes");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](230, "div", 73)(231, "ul", 74)(232, "li", 75)(233, "a", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](234, "i", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](13, !ctx.isCollapsed ? 13 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](14, ctx.isCollapsed ? 14 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.bankSettingsList);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.bankSettingsGrid);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.isActive === "Karur vysya bank");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.isActive === "Swiss Bank");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.isActive === "HDFC");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltip, _common_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SettingsSidebarComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3886:
/*!***************************************************************************************************************!*\
  !*** ./src/app/core-component/settings/financial-settings/bank-settings-list/bank-settings-list.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BankSettingsListComponent: () => (/* binding */ BankSettingsListComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 77697);
/* harmony import */ var src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/core.index */ 82351);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.index */ 31287);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ 22047);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/custom-pagination/custom-pagination.component */ 14860);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _common_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/settings-sidebar/settings-sidebar.component */ 42362);















const _c0 = () => ({
  standalone: true
});
const _c1 = a0 => ({
  "setclose": a0
});
const _c2 = (a0, a1) => ({
  "d-block": a0,
  "d-none": a1
});
function BankSettingsListComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 7);
  }
}
function BankSettingsListComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 8);
  }
}
function BankSettingsListComponent_For_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", data_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r1.value, " ");
  }
}
function BankSettingsListComponent_For_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", data_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r2.value, " ");
  }
}
function BankSettingsListComponent_For_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", data_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r3.value, " ");
  }
}
function BankSettingsListComponent_For_99_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td")(2, "label", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 102)(4, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "td", 103)(18, "div", 104)(19, "a", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "a", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BankSettingsListComponent_For_99_Template_a_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.confirmColor());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r6.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r6.bank, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r6.branch, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r6.accountNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r6.ifsc);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r6.createdOn);
  }
}
class BankSettingsListComponent {
  //** / pagination variables
  constructor(data, pagination, router, sidebar) {
    this.data = data;
    this.pagination = pagination;
    this.router = router;
    this.sidebar = sidebar;
    this.initChecked = false;
    this.routes = src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.routes;
    // pagination variables
    this.tableData = [];
    this.pageSize = 10;
    this.serialNumberArray = [];
    this.totalData = 0;
    this.showFilter = false;
    this.searchDataValue = '';
    this.selectedValue1 = '';
    this.selectedValue2 = '';
    this.selectedValue3 = '';
    this.selectedList1 = [{
      value: 'Sort by Date'
    }, {
      value: 'Newest'
    }, {
      value: 'Oldest'
    }];
    this.selectedList2 = [{
      value: 'Sort by Date'
    }, {
      value: 'Mathew'
    }, {
      value: 'John Smith'
    }, {
      value: 'Andrew'
    }];
    this.selectedList3 = [{
      value: 'Choose Bank'
    }, {
      value: 'HDFC'
    }, {
      value: 'Swiss Bank'
    }, {
      value: 'Canara Bank'
    }];
    this.isCollapsed = false;
    this.filter = false;
    this.data.getDataTable().subscribe(apiRes => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe(res => {
        if (this.router.url == this.routes.bankSettingsList) {
          this.getTableData({
            skip: res.skip,
            limit: this.totalData
          });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getBankSettingsList().subscribe(apiRes => {
      this.tableData = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res, index) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(this.tableData);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        serialNumberArray: this.serialNumberArray
      });
    });
  }
  sortData(sort) {
    const data = this.tableData.slice();
    if (!sort.active || sort.direction === '') {
      this.tableData = data;
    } else {
      this.tableData = data.sort((a, b) => {
        const aValue = a[sort.active];
        const bValue = b[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }
  confirmColor() {
    const swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().mixin({
      customClass: {
        confirmButton: ' btn btn-success',
        cancelButton: 'me-2 btn btn-danger'
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      confirmButtonText: 'Yes, delete it!',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      reverseButtons: true
    }).then(result => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire('Deleted!', 'Your file has been deleted.', 'success');
      } else if (result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().DismissReason).cancel) {
        swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }
  searchData(value) {
    this.dataSource.filter = value.trim().toLowerCase();
    this.tableData = this.dataSource.filteredData;
  }
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  selectAll(initChecked) {
    if (!initChecked) {
      this.tableData.forEach(f => {
        f.isSelected = true;
      });
    } else {
      this.tableData.forEach(f => {
        f.isSelected = false;
      });
    }
  }
  openFilter() {
    this.filter = !this.filter;
  }
  static {
    this.ɵfac = function BankSettingsListComponent_Factory(t) {
      return new (t || BankSettingsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_2__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.SidebarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: BankSettingsListComponent,
      selectors: [["app-bank-settings-list"]],
      decls: 241,
      vars: 24,
      consts: [[1, "page-header", "settings-pg-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "feather", "icon-rotate-ccw", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "feather", "icon-chevron-up", "feather-chevron-up"], [1, "feather", "icon-chevron-down", "feather-chevron-down"], [1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "settings-page-wrap", "w-50"], [1, "setting-title"], [1, "page-header", "bank-settings", "justify-content-end"], [1, "btn-list", "me-2", "active", 3, "routerLink"], [1, "feather", "icon-list", "feather-user"], [1, "btn-grid", 3, "routerLink"], [1, "feather", "icon-grid", "feather-user"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-account", 1, "btn", "btn-added"], [1, "feather", "icon-plus-circle", "me-2"], [1, "col-lg-12"], [1, "card", "table-list-card"], [1, "card-body"], [1, "table-top"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search...", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "search-path"], [1, "d-flex", "align-items-center"], ["id", "filter_search", 1, "btn", "btn-filter", 3, "click", "ngClass"], [1, "feather", "icon-filter", "filter-icon"], ["src", "assets/img/icons/closes.svg", "alt", "img"], [1, "form-sort"], [1, "feather", "icon-sliders", "info-img"], ["placeholder", "Sort by Date", 1, "select", "space-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], ["id", "filter_inputs", 1, "card", 3, "ngClass"], [1, "card-body", "pb-0"], [1, "col-lg-4", "col-sm-6", "col-12"], [1, "input-blocks"], [1, "feather", "icon-user", "info-img"], ["placeholder", "Choose Name", 1, "space-select", "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "feather", "icon-edit-2", "info-img"], ["placeholder", "Choose Bank", 1, "space-select", "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "col-lg-3", "col-sm-6", "col-12", "ms-auto"], [1, "btn", "btn-filters", "ms-auto"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table-responsive", 3, "matSortChange"], [1, "table", "datanew"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "name"], ["mat-sort-header", "bank"], ["mat-sort-header", "branch"], ["mat-sort-header", "accountNo"], ["mat-sort-header", "ifsc"], ["mat-sort-header", "createdOn"], ["id", "add-account", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "custom-modal-two"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header", "border-0", "custom-modal-header", "custom-class-modal"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center", "ms-auto", "me-2"], ["type", "checkbox", "id", "user1", "checked", "", 1, "check"], ["for", "user1", 1, "checktoggle"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body"], [1, "mb-3"], [1, "form-label"], ["type", "text", 1, "form-control"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "status-label"], ["type", "checkbox", "id", "user2", "checked", "", 1, "check"], ["for", "user2", 1, "checktoggle"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], ["type", "checkbox", "id", "user3", "checked", "", 1, "check"], ["for", "user3", 1, "checktoggle"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit"], ["id", "edit-account", 1, "modal", "fade"], [1, "modal-header", "border-0", "custom-modal-header"], ["type", "checkbox", "id", "user4", "checked", "", 1, "check"], ["for", "user4", 1, "checktoggle"], ["type", "text", "value", "HDFC", 1, "form-control"], ["type", "text", "value", "**** **** 1832", 1, "form-control"], ["type", "text", "value", "Mathew", 1, "form-control"], ["type", "text", "value", "Bringham", 1, "form-control"], ["type", "text", "value", "124547", 1, "form-control"], ["type", "checkbox", "id", "user5", "checked", "", 1, "check"], ["for", "user5", 1, "checktoggle"], ["type", "checkbox", "id", "user6", "checked", "", 1, "check"], ["for", "user6", 1, "checktoggle"], [1, "checkboxs"], ["type", "checkbox"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-account", 1, "me-2", "p-2"], [1, "feather", "icon-edit", "feather-edit"], ["href", "javascript:void(0);", 1, "confirm-text", "p-2", 3, "click"], [1, "feather", "icon-trash-2", "feather-trash-2"]],
      template: function BankSettingsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Manage your settings on portal");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ul", 3)(8, "li")(9, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li")(12, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BankSettingsListComponent_Template_a_click_12_listener() {
            return ctx.toggleCollapse();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, BankSettingsListComponent_Conditional_13_Template, 1, 0, "i", 7)(14, BankSettingsListComponent_Conditional_14_Template, 1, 0, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 9)(16, "div", 10)(17, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "app-settings-sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 12)(20, "div", 13)(21, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Bank Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 14)(24, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 19)(29, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Add New Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 9)(33, "div", 22)(34, "div", 23)(35, "div", 24)(36, "div", 25)(37, "div", 26)(38, "div", 27)(39, "a", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "i", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 30)(42, "label")(43, "input", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function BankSettingsListComponent_Template_input_ngModelChange_43_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function BankSettingsListComponent_Template_input_ngModelChange_43_listener() {
            return ctx.searchData(ctx.searchDataValue);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 32)(45, "div", 33)(46, "a", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BankSettingsListComponent_Template_a_click_46_listener() {
            return ctx.openFilter();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "i", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](49, "img", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](51, "i", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "mat-select", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function BankSettingsListComponent_Template_mat_select_ngModelChange_52_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.selectedValue1, $event) || (ctx.selectedValue1 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](53, BankSettingsListComponent_For_54_Template, 2, 2, "mat-option", 40, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 41)(56, "div", 42)(57, "div", 9)(58, "div", 43)(59, "div", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](60, "i", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "mat-select", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function BankSettingsListComponent_Template_mat_select_ngModelChange_61_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.selectedValue2, $event) || (ctx.selectedValue2 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](62, BankSettingsListComponent_For_63_Template, 2, 2, "mat-option", 40, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 43)(65, "div", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](66, "i", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "mat-select", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function BankSettingsListComponent_Template_mat_select_ngModelChange_67_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.selectedValue3, $event) || (ctx.selectedValue3 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](68, BankSettingsListComponent_For_69_Template, 2, 2, "mat-option", 40, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 49)(71, "div", 44)(72, "a", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](73, "i", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, " Search ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "div", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("matSortChange", function BankSettingsListComponent_Template_div_matSortChange_75_listener($event) {
            return ctx.sortData($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "table", 52)(77, "thead")(78, "tr")(79, "th", 53)(80, "label", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BankSettingsListComponent_Template_label_click_80_listener() {
            return ctx.selectAll(ctx.initChecked);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "input", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function BankSettingsListComponent_Template_input_ngModelChange_81_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.initChecked, $event) || (ctx.initChecked = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](82, "span", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "th", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "th", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86, "Bank");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "th", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88, "Branch");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "th", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, "Account No");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "th", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92, "IFSC");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "th", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](94, "Created On");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "th", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](98, BankSettingsListComponent_For_99_Template, 23, 6, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](100, "app-custom-pagination");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "div", 63)(102, "div", 64)(103, "div", 65)(104, "div", 66)(105, "div", 67)(106, "div", 68)(107, "div", 2)(108, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](109, "Add Bank Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "div", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](111, "input", 70)(112, "label", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "button", 72)(114, "span", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](115, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](116, "div", 74)(117, "form")(118, "div", 9)(119, "div", 22)(120, "div", 75)(121, "label", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](122, "Bank Name ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](123, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](124, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](125, "input", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](126, "div", 22)(127, "div", 75)(128, "label", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](129, "Account Number ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](130, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](131, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](132, "input", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](133, "div", 22)(134, "div", 75)(135, "label", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](136, "Account Name ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](137, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](138, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](139, "input", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](140, "div", 22)(141, "div", 75)(142, "label", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](143, "Branch ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](144, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](145, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](146, "input", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](147, "div", 22)(148, "div", 75)(149, "label", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](150, "IFSC ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](151, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](152, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](153, "input", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](154, "div", 22)(155, "div", 78)(156, "span", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](157, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](158, "input", 80)(159, "label", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](160, "div", 22)(161, "div", 82)(162, "span", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](163, "Make as default");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](164, "input", 83)(165, "label", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](166, "div", 85)(167, "button", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](168, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](169, "button", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](170, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](171, "div", 88)(172, "div", 64)(173, "div", 65)(174, "div", 66)(175, "div", 67)(176, "div", 89)(177, "div", 2)(178, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](179, "Edit Bank Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](180, "div", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](181, "input", 90)(182, "label", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](183, "button", 72)(184, "span", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](185, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](186, "div", 74)(187, "form")(188, "div", 9)(189, "div", 22)(190, "div", 75)(191, "label", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](192, "Bank Name ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](193, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](194, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](195, "input", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](196, "div", 22)(197, "div", 75)(198, "label", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](199, "Account Number ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](200, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](201, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](202, "input", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](203, "div", 22)(204, "div", 75)(205, "label", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](206, "Account Name ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](207, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](208, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](209, "input", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](210, "div", 22)(211, "div", 75)(212, "label", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](213, "Branch ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](214, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](215, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](216, "input", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](217, "div", 22)(218, "div", 75)(219, "label", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](220, "IFSC ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](221, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](222, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](223, "input", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](224, "div", 22)(225, "div", 78)(226, "span", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](227, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](228, "input", 97)(229, "label", 98);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](230, "div", 22)(231, "div", 82)(232, "span", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](233, "Make as default");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](234, "input", 99)(235, "label", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](236, "div", 85)(237, "button", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](238, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](239, "button", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](240, "Save Changes");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](13, !ctx.isCollapsed ? 13 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](14, ctx.isCollapsed ? 14 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx.routes.bankSettingsList);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx.routes.bankSettingsGrid);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.searchDataValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](15, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](16, _c1, ctx.filter === true));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](18, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.selectedList1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](19, _c2, ctx.filter, !ctx.filter));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](22, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.selectedList2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](23, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.selectedList3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.initChecked);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.tableData);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSortHeader, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgForm, _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_3__.CustomPaginationComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltip, _common_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_4__.SettingsSidebarComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 31506:
/*!*************************************************************************************************************!*\
  !*** ./src/app/core-component/settings/financial-settings/currency-settings/currency-settings.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrencySettingsComponent: () => (/* binding */ CurrencySettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 77697);
/* harmony import */ var src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/core.index */ 82351);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.index */ 31287);
/* harmony import */ var src_app_shared_sweetalert_sweetalert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/sweetalert/sweetalert.service */ 13718);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ 22047);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/custom-pagination/custom-pagination.component */ 14860);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _common_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/settings-sidebar/settings-sidebar.component */ 42362);















const _c0 = () => ({
  standalone: true
});
const _c1 = a0 => ({
  setclose: a0
});
const _c2 = (a0, a1) => ({
  "d-block": a0,
  "d-none": a1
});
function CurrencySettingsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 7);
  }
}
function CurrencySettingsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 8);
  }
}
function CurrencySettingsComponent_For_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", data_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r1.value, " ");
  }
}
function CurrencySettingsComponent_For_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", data_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r2.value, " ");
  }
}
function CurrencySettingsComponent_For_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td")(2, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 82)(4, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td", 83)(16, "div", 84)(17, "a", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const settings_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](settings_r3.currencyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](settings_r3.currencyCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](settings_r3.currencySymbol);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](settings_r3.exchangerate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](settings_r3.createdOn);
  }
}
class CurrencySettingsComponent {
  //** / pagination variables
  constructor(data, pagination, sweetalert, router, sidebar) {
    this.data = data;
    this.pagination = pagination;
    this.sweetalert = sweetalert;
    this.router = router;
    this.sidebar = sidebar;
    this.selectedValue1 = '';
    this.selectedValue2 = '';
    this.selectedValue3 = '';
    this.initChecked = false;
    this.tableData = [];
    this.routes = src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.routes;
    // pagination variables
    this.pageSize = 10;
    this.serialNumberArray = [];
    this.totalData = 0;
    this.showFilter = false;
    this.searchDataValue = '';
    this.isCollapsed = false;
    this.selectedList1 = [{
      value: 'Sort by Date'
    }, {
      value: 'Newest'
    }, {
      value: 'Oldest'
    }];
    this.selectedList2 = [{
      value: 'Choose Name'
    }, {
      value: 'Euro'
    }, {
      value: 'England Pound'
    }];
    this.filter = false;
    this.data.getDataTable().subscribe(apiRes => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe(res => {
        if (this.router.url == this.routes.currencySettings) {
          this.getTableData({
            skip: res.skip,
            limit: this.totalData
          });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getCurrencySettings().subscribe(apiRes => {
      this.tableData = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res, index) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(this.tableData);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        serialNumberArray: this.serialNumberArray
      });
    });
  }
  searchData(value) {
    this.dataSource.filter = value.trim().toLowerCase();
    this.tableData = this.dataSource.filteredData;
  }
  sortData(sort) {
    const data = this.tableData.slice();
    if (!sort.active || sort.direction === '') {
      this.tableData = data;
    } else {
      this.tableData = data.sort((a, b) => {
        const aValue = a[sort.active];
        const bValue = b[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }
  deleteBtn() {
    this.sweetalert.deleteBtn();
  }
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  openFilter() {
    this.filter = !this.filter;
  }
  static {
    this.ɵfac = function CurrencySettingsComponent_Factory(t) {
      return new (t || CurrencySettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_1__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_sweetalert_sweetalert_service__WEBPACK_IMPORTED_MODULE_2__.SweetalertService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.SidebarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: CurrencySettingsComponent,
      selectors: [["app-currency-settings"]],
      decls: 196,
      vars: 18,
      consts: [[1, "page-header", "settings-pg-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "feather", "icon-rotate-ccw", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "feather", "icon-chevron-up", "feather-chevron-up"], [1, "feather", "icon-chevron-down", "feather-chevron-down"], [1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "settings-page-wrap", "w-50"], [1, "setting-title"], [1, "page-header", "bank-settings", "justify-content-end"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-currency", 1, "btn", "btn-added"], [1, "feather", "icon-plus-circle", "me-2"], [1, "col-lg-12"], [1, "card", "table-list-card"], [1, "card-body"], [1, "table-top"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search...", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "search-path"], [1, "d-flex", "align-items-center"], ["id", "filter_search", 1, "btn", "btn-filter", 3, "click", "ngClass"], [1, "feather", "icon-filter", "filter-icon"], ["src", "assets/img/icons/closes.svg", "alt", "img"], [1, "form-sort"], [1, "feather", "icon-sliders", "info-img"], ["placeholder", "Sort by Date", 1, "select", "space-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], ["id", "filter_inputs", 1, "card", 3, "ngClass"], [1, "card-body", "pb-0"], [1, "col-lg-4", "col-sm-6", "col-12"], [1, "input-blocks"], [1, "feather", "icon-user", "info-img"], ["placeholder", "Choose", 1, "select", "space-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "col-lg-3", "col-sm-6", "col-12", "ms-auto"], [1, "btn", "btn-filters", "ms-auto"], [1, "feather", "icon", "searchfeather-search"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew"], [1, "checkboxs"], [1, "checkmarks"], ["mat-sort-header", "Currencyname"], ["mat-sort-header", "Currencycode"], ["mat-sort-header", "Currencysymbol"], ["mat-sort-header", "exchangerate"], ["mat-sort-header", "Createdon"], [1, "no-sort", "text-end"], ["id", "add-currency", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "custom-modal-two"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header", "border-0", "custom-modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body"], [1, "mb-3"], [1, "form-label"], ["type", "text", 1, "form-control"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], [1, "status-label"], ["type", "checkbox", "id", "user6", "checked", "", 1, "check"], ["for", "user6", 1, "checktoggle"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit"], ["id", "edit-currency", 1, "modal", "fade"], ["type", "text", "value", "Euro", 1, "form-control"], ["type", "text", "value", "EUR", 1, "form-control"], ["type", "text", "value", "\u20AC", 1, "form-control"], ["type", "text", "value", "Default", 1, "form-control"], ["type", "checkbox", "id", "user5", "checked", "", 1, "check"], ["for", "user5", 1, "checktoggle"], ["type", "checkbox"], [1, "action-table-data", "justify-content-end"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-currency", 1, "me-2", "p-2"], [1, "feather", "icon-edit", "feather-edit"], ["href", "javascript:void(0);", 1, "confirm-text", "p-2"], [1, "feather", "icon-trash-2", "feather-trash-2"]],
      template: function CurrencySettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Manage your settings on portal");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ul", 3)(8, "li")(9, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li")(12, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CurrencySettingsComponent_Template_a_click_12_listener() {
            return ctx.toggleCollapse();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, CurrencySettingsComponent_Conditional_13_Template, 1, 0, "i", 7)(14, CurrencySettingsComponent_Conditional_14_Template, 1, 0, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 9)(16, "div", 10)(17, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "app-settings-sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 12)(20, "div", 13)(21, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 14)(24, "div", 15)(25, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Add New Currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 9)(29, "div", 18)(30, "div", 19)(31, "div", 20)(32, "div", 21)(33, "div", 22)(34, "div", 23)(35, "a", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 26)(38, "label")(39, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function CurrencySettingsComponent_Template_input_ngModelChange_39_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CurrencySettingsComponent_Template_input_ngModelChange_39_listener() {
            return ctx.searchData(ctx.searchDataValue);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 28)(41, "div", 29)(42, "a", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CurrencySettingsComponent_Template_a_click_42_listener() {
            return ctx.openFilter();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "i", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](45, "img", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "mat-select", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function CurrencySettingsComponent_Template_mat_select_ngModelChange_48_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.selectedValue1, $event) || (ctx.selectedValue1 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](49, CurrencySettingsComponent_For_50_Template, 2, 2, "mat-option", 36, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 37)(52, "div", 38)(53, "div", 9)(54, "div", 39)(55, "div", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](56, "i", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "mat-select", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function CurrencySettingsComponent_Template_mat_select_ngModelChange_57_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.selectedValue2, $event) || (ctx.selectedValue2 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](58, CurrencySettingsComponent_For_59_Template, 2, 2, "mat-option", 36, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 43)(61, "div", 40)(62, "a", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](63, "i", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, " Search ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 46)(66, "table", 47)(67, "thead")(68, "tr")(69, "th")(70, "label", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](71, "span", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "th", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, "Currency Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "th", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "Code");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "th", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, "Symbol");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "th", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79, "Exchange Rate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "th", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, "Created On");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "th", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](85, CurrencySettingsComponent_For_86_Template, 21, 5, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](87, "app-custom-pagination");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "div", 56)(89, "div", 57)(90, "div", 58)(91, "div", 59)(92, "div", 60)(93, "div", 61)(94, "div", 2)(95, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "Add Currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "button", 62)(98, "span", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](99, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "div", 64)(101, "form")(102, "div", 9)(103, "div", 18)(104, "div", 65)(105, "label", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](106, "Currency Name ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](109, "input", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "div", 18)(111, "div", 65)(112, "label", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](113, "Currency Symbol ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](115, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](116, "input", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "div", 18)(118, "div", 65)(119, "label", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](120, "Currency Code ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](121, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](122, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](123, "input", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](124, "div", 18)(125, "div", 65)(126, "label", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](127, "Currency Rate ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](128, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](129, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](130, "input", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](131, "div", 18)(132, "div", 68)(133, "span", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](134, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](135, "input", 70)(136, "label", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](137, "div", 72)(138, "button", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](139, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](140, "button", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](141, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](142, "div", 75)(143, "div", 57)(144, "div", 58)(145, "div", 59)(146, "div", 60)(147, "div", 61)(148, "div", 2)(149, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](150, "Edit Currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](151, "button", 62)(152, "span", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](153, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](154, "div", 64)(155, "form")(156, "div", 9)(157, "div", 18)(158, "div", 65)(159, "label", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](160, "Currency Name ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](161, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](162, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](163, "input", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](164, "div", 18)(165, "div", 65)(166, "label", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](167, "Currency Symbol ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](168, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](169, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](170, "input", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](171, "div", 18)(172, "div", 65)(173, "label", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](174, "Currency Code ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](175, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](176, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](177, "input", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](178, "div", 18)(179, "div", 65)(180, "label", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](181, "Currency Rate ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](182, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](183, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](184, "input", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](185, "div", 18)(186, "div", 68)(187, "span", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](188, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](189, "input", 80)(190, "label", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](191, "div", 72)(192, "button", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](193, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](194, "button", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](195, "Save Changes");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](13, !ctx.isCollapsed ? 13 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](14, ctx.isCollapsed ? 14 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.searchDataValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](10, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](11, _c1, ctx.filter === true));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](13, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.selectedList1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](14, _c2, ctx.filter, !ctx.filter));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](17, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.selectedList2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.tableData);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSortHeader, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgForm, _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_3__.CustomPaginationComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltip, _common_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_4__.SettingsSidebarComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 73942:
/*!*************************************************************************************************!*\
  !*** ./src/app/core-component/settings/financial-settings/financial-settings-routing.module.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FinancialSettingsRoutingModule: () => (/* binding */ FinancialSettingsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _financial_settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./financial-settings.component */ 80208);
/* harmony import */ var _bank_settings_grid_bank_settings_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bank-settings-grid/bank-settings-grid.component */ 2530);
/* harmony import */ var _bank_settings_list_bank_settings_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bank-settings-list/bank-settings-list.component */ 3886);
/* harmony import */ var _currency_settings_currency_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./currency-settings/currency-settings.component */ 31506);
/* harmony import */ var _payment_gateway_settings_payment_gateway_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payment-gateway-settings/payment-gateway-settings.component */ 24314);
/* harmony import */ var _tax_rates_tax_rates_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tax-rates/tax-rates.component */ 71818);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);









const routes = [{
  path: '',
  component: _financial_settings_component__WEBPACK_IMPORTED_MODULE_0__.FinancialSettingsComponent,
  children: [{
    path: 'bank-settings-grid',
    component: _bank_settings_grid_bank_settings_grid_component__WEBPACK_IMPORTED_MODULE_1__.BankSettingsGridComponent
  }, {
    path: 'bank-settings-list',
    component: _bank_settings_list_bank_settings_list_component__WEBPACK_IMPORTED_MODULE_2__.BankSettingsListComponent
  }, {
    path: 'currency-settings',
    component: _currency_settings_currency_settings_component__WEBPACK_IMPORTED_MODULE_3__.CurrencySettingsComponent
  }, {
    path: 'payment-gateway-settings',
    component: _payment_gateway_settings_payment_gateway_settings_component__WEBPACK_IMPORTED_MODULE_4__.PaymentGatewaySettingsComponent
  }, {
    path: 'tax-rates',
    component: _tax_rates_tax_rates_component__WEBPACK_IMPORTED_MODULE_5__.TaxRatesComponent
  }]
}];
class FinancialSettingsRoutingModule {
  static {
    this.ɵfac = function FinancialSettingsRoutingModule_Factory(t) {
      return new (t || FinancialSettingsRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: FinancialSettingsRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](FinancialSettingsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 80208:
/*!********************************************************************************************!*\
  !*** ./src/app/core-component/settings/financial-settings/financial-settings.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FinancialSettingsComponent: () => (/* binding */ FinancialSettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);


class FinancialSettingsComponent {
  static {
    this.ɵfac = function FinancialSettingsComponent_Factory(t) {
      return new (t || FinancialSettingsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FinancialSettingsComponent,
      selectors: [["app-financial-settings"]],
      decls: 1,
      vars: 0,
      template: function FinancialSettingsComponent_Template(rf, ctx) {
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

/***/ 89535:
/*!*****************************************************************************************!*\
  !*** ./src/app/core-component/settings/financial-settings/financial-settings.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FinancialSettingsModule: () => (/* binding */ FinancialSettingsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _financial_settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./financial-settings-routing.module */ 73942);
/* harmony import */ var _financial_settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./financial-settings.component */ 80208);
/* harmony import */ var _currency_settings_currency_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currency-settings/currency-settings.component */ 31506);
/* harmony import */ var _bank_settings_grid_bank_settings_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bank-settings-grid/bank-settings-grid.component */ 2530);
/* harmony import */ var _bank_settings_list_bank_settings_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bank-settings-list/bank-settings-list.component */ 3886);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _payment_gateway_settings_payment_gateway_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment-gateway-settings/payment-gateway-settings.component */ 24314);
/* harmony import */ var _tax_rates_tax_rates_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tax-rates/tax-rates.component */ 71818);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);










class FinancialSettingsModule {
  static {
    this.ɵfac = function FinancialSettingsModule_Factory(t) {
      return new (t || FinancialSettingsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
      type: FinancialSettingsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _financial_settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.FinancialSettingsRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.sharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](FinancialSettingsModule, {
    declarations: [_financial_settings_component__WEBPACK_IMPORTED_MODULE_1__.FinancialSettingsComponent, _bank_settings_grid_bank_settings_grid_component__WEBPACK_IMPORTED_MODULE_3__.BankSettingsGridComponent, _bank_settings_list_bank_settings_list_component__WEBPACK_IMPORTED_MODULE_4__.BankSettingsListComponent, _currency_settings_currency_settings_component__WEBPACK_IMPORTED_MODULE_2__.CurrencySettingsComponent, _payment_gateway_settings_payment_gateway_settings_component__WEBPACK_IMPORTED_MODULE_6__.PaymentGatewaySettingsComponent, _tax_rates_tax_rates_component__WEBPACK_IMPORTED_MODULE_7__.TaxRatesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _financial_settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.FinancialSettingsRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.sharedModule]
  });
})();

/***/ }),

/***/ 24314:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/core-component/settings/financial-settings/payment-gateway-settings/payment-gateway-settings.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentGatewaySettingsComponent: () => (/* binding */ PaymentGatewaySettingsComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_service_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/sidebar/sidebar.service */ 79950);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _common_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/settings-sidebar/settings-sidebar.component */ 42362);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-feather */ 54341);







function PaymentGatewaySettingsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 7);
  }
}
function PaymentGatewaySettingsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 8);
  }
}
class PaymentGatewaySettingsComponent {
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  constructor(sidebar) {
    this.sidebar = sidebar;
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    this.isCollapsed = false;
  }
  static {
    this.ɵfac = function PaymentGatewaySettingsComponent_Factory(t) {
      return new (t || PaymentGatewaySettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_service_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__.SidebarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: PaymentGatewaySettingsComponent,
      selectors: [["app-payment-gateway-settings"]],
      decls: 383,
      vars: 2,
      consts: [[1, "page-header", "settings-pg-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "feather", "icon-rotate-ccw", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "feather", "icon-chevron-up", "feather-chevron-up"], [1, "feather", "icon-chevron-down", "feather-chevron-down"], [1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "settings-page-wrap"], [1, "setting-title"], [1, "row", "social-authent-settings"], [1, "col-xxl-4", "col-xl-6", "col-lg-12", "col-md-6", "d-flex"], [1, "connected-app-card", "d-flex", "w-100"], [1, "w-100"], [1, "flex-column", "align-items-start"], [1, "d-flex", "align-items-center", "justify-content-between", "w-100", "mb-2"], [1, "security-type", "d-flex", "align-items-center"], ["src", "assets/img/icons/payment-icon-01.svg", "alt", "Payment"], [1, "connect-btn"], ["href", "javascript:void(0);"], [1, "integration-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#payment-connect"], ["name", "tool", 1, "me-2"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center", "ms-2"], ["type", "checkbox", "id", "user1", "checked", "", 1, "check"], ["for", "user1", 1, "checktoggle"], ["src", "assets/img/icons/payment-icon-02.svg", "alt", "Payment"], [1, "connect-btn", "not-connect"], ["type", "checkbox", "id", "user2", "checked", "", 1, "check"], ["for", "user2", 1, "checktoggle"], ["src", "assets/img/icons/payment-icon-03.svg", "alt", "Payment"], ["type", "checkbox", "id", "user3", "checked", "", 1, "check"], ["for", "user3", 1, "checktoggle"], ["src", "assets/img/icons/payment-icon-04.svg", "alt", "Payment"], ["type", "checkbox", "id", "user4", 1, "check"], ["for", "user4", 1, "checktoggle"], ["src", "assets/img/icons/payment-icon-05.svg", "alt", "Payment"], ["type", "checkbox", "id", "user5", "checked", "", 1, "check"], ["for", "user5", 1, "checktoggle"], ["src", "assets/img/icons/payment-icon-06.svg", "alt", "Payment"], ["type", "checkbox", "id", "user6", 1, "check"], ["for", "user6", 1, "checktoggle"], ["src", "assets/img/icons/payment-icon-07.svg", "alt", "Payment"], ["type", "checkbox", "id", "user7", "checked", "", 1, "check"], ["for", "user7", 1, "checktoggle"], ["src", "assets/img/icons/payment-icon-08.svg", "alt", "Payment"], ["type", "checkbox", "id", "user8", 1, "check"], ["for", "user8", 1, "checktoggle"], ["src", "assets/img/icons/payment-icon-09.svg", "alt", "Payment"], ["type", "checkbox", "id", "user9", 1, "check"], ["for", "user9", 1, "checktoggle"], ["src", "assets/img/icons/payment-icon-10.svg", "alt", "Payment"], ["type", "checkbox", "id", "user10", "checked", "", 1, "check"], ["for", "user10", 1, "checktoggle"], ["src", "assets/img/icons/payment-icon-11.svg", "alt", "Payment"], ["type", "checkbox", "id", "user11", "checked", "", 1, "check"], ["for", "user11", 1, "checktoggle"], ["src", "assets/img/icons/payment-icon-12.svg", "alt", "Payment"], ["type", "checkbox", "id", "user12", "checked", "", 1, "check"], ["for", "user12", 1, "checktoggle"], ["src", "assets/img/icons/payment-icon-13.svg", "alt", "Payment"], ["type", "checkbox", "id", "user13", "checked", "", 1, "check"], ["for", "user13", 1, "checktoggle"], ["src", "assets/img/icons/payment-icon-14.svg", "alt", "Payment"], ["type", "checkbox", "id", "user14", "checked", "", 1, "check"], ["for", "user14", 1, "checktoggle"], ["src", "assets/img/icons/payment-icon-15.svg", "alt", "Payment"], ["type", "checkbox", "id", "user15", "checked", "", 1, "check"], ["for", "user15", 1, "checktoggle"], ["id", "payment-connect", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "custom-modal-two"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header", "border-0", "custom-modal-header", "custom-class-modal"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center", "ms-auto", "me-2"], ["type", "checkbox", "id", "user16", "checked", "", 1, "check"], ["for", "user16", 1, "checktoggle", "custom-class-checktoggle"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body"], [1, "col-lg-12"], [1, "mb-3"], [1, "form-label"], ["type", "email", 1, "form-control"], ["type", "text", 1, "form-control"], [1, "mb-0"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit"]],
      template: function PaymentGatewaySettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Manage your settings on portal");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ul", 3)(8, "li")(9, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "li")(12, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PaymentGatewaySettingsComponent_Template_a_click_12_listener() {
            return ctx.toggleCollapse();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, PaymentGatewaySettingsComponent_Conditional_13_Template, 1, 0, "i", 7)(14, PaymentGatewaySettingsComponent_Conditional_14_Template, 1, 0, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 9)(16, "div", 10)(17, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "app-settings-sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 12)(20, "div", 13)(21, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Payment Gateway");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 14)(24, "div", 15)(25, "div", 16)(26, "ul", 17)(27, "li", 18)(28, "div", 19)(29, "div", 20)(30, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "img", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 22)(33, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Connected");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "PayPal is the faster, safer way to send and receive money or make an online payment.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "li")(38, "div", 24)(39, "a", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "i-feather", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "View Integration");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "input", 28)(44, "label", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 15)(46, "div", 16)(47, "ul", 17)(48, "li", 18)(49, "div", 19)(50, "div", 20)(51, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "img", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 31)(54, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Not connected");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "APIs to accept credit cards, manage subscriptions, send money.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "li")(59, "div", 24)(60, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "i-feather", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Connect Now");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "input", 32)(65, "label", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 15)(67, "div", 16)(68, "ul", 17)(69, "li", 18)(70, "div", 19)(71, "div", 20)(72, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "img", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 31)(75, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "Not connected");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Braintree offers more fraud protection and security features.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "li")(80, "div", 24)(81, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](82, "i-feather", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "Connect Now");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](85, "input", 35)(86, "label", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "div", 15)(88, "div", 16)(89, "ul", 17)(90, "li", 18)(91, "div", 19)(92, "div", 20)(93, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](94, "img", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 31)(96, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "Not connected");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, "Razorpay is an India's all in one payment solution.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "li")(101, "div", 24)(102, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](103, "i-feather", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, "Connect Now");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](106, "input", 38)(107, "label", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "div", 15)(109, "div", 16)(110, "ul", 17)(111, "li", 18)(112, "div", 19)(113, "div", 20)(114, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](115, "img", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "div", 22)(117, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](118, "Connected");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](120, "Works stably and reliably and features are valuable and necessary for any software.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "li")(122, "div", 24)(123, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](124, "i-feather", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](125, "View Integration");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](127, "input", 41)(128, "label", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "div", 15)(130, "div", 16)(131, "ul", 17)(132, "li", 18)(133, "div", 19)(134, "div", 20)(135, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](136, "img", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "div", 31)(138, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](139, "Not connected");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](141, "Allows send international money transfers and payments quickly with low fees.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "li")(143, "div", 24)(144, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](145, "i-feather", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](146, "Connect Now");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](148, "input", 44)(149, "label", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "div", 15)(151, "div", 16)(152, "ul", 17)(153, "li", 18)(154, "div", 19)(155, "div", 20)(156, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](157, "img", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "div", 22)(159, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](160, "Connected");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](162, "Provide payment solution to individuals to make payments using credit card.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](163, "li")(164, "div", 24)(165, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](166, "i-feather", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](167, "View Integration");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](168, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](169, "input", 47)(170, "label", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](171, "div", 15)(172, "div", 16)(173, "ul", 17)(174, "li", 18)(175, "div", 19)(176, "div", 20)(177, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](178, "img", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](179, "div", 31)(180, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](181, "Not connected");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](182, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](183, "Replaces your physical cards and cash with an easier, safer, more private and secure ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](184, "li")(185, "div", 24)(186, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](187, "i-feather", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](188, "Connect Now");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](189, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](190, "input", 50)(191, "label", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](192, "div", 15)(193, "div", 16)(194, "ul", 17)(195, "li", 18)(196, "div", 19)(197, "div", 20)(198, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](199, "img", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](200, "div", 31)(201, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](202, "Not connected");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](203, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](204, "Fast, Low-Cost Solution for your International Business. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](205, "li")(206, "div", 24)(207, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](208, "i-feather", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](209, "Connect Now");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](210, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](211, "input", 53)(212, "label", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](213, "div", 15)(214, "div", 16)(215, "ul", 17)(216, "li", 18)(217, "div", 19)(218, "div", 20)(219, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](220, "img", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](221, "div", 31)(222, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](223, "Not connected");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](224, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](225, "Online payment platform that enables to send and receive money via emails. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](226, "li")(227, "div", 24)(228, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](229, "i-feather", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](230, "Connect Now");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](231, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](232, "input", 56)(233, "label", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](234, "div", 15)(235, "div", 16)(236, "ul", 17)(237, "li", 18)(238, "div", 19)(239, "div", 20)(240, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](241, "img", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](242, "div", 22)(243, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](244, "Connected");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](245, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](246, "Paytm stands for Pay through mobile and it is India's largest mobile payments. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](247, "li")(248, "div", 24)(249, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](250, "i-feather", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](251, "View Integration");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](252, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](253, "input", 59)(254, "label", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](255, "div", 15)(256, "div", 16)(257, "ul", 17)(258, "li", 18)(259, "div", 19)(260, "div", 20)(261, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](262, "img", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](263, "div", 31)(264, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](265, "Not connected");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](266, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](267, "Midtrans provides the maximum number of payment methods across payment gateways. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](268, "li")(269, "div", 24)(270, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](271, "i-feather", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](272, "Connect Now");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](273, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](274, "input", 62)(275, "label", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](276, "div", 15)(277, "div", 16)(278, "ul", 17)(279, "li", 18)(280, "div", 19)(281, "div", 20)(282, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](283, "img", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](284, "div", 31)(285, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](286, "Not connected");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](287, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](288, "PyTorch is a network through which your customers transfer funds to you.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](289, "li")(290, "div", 24)(291, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](292, "i-feather", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](293, "Connect Now");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](294, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](295, "input", 65)(296, "label", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](297, "div", 15)(298, "div", 16)(299, "ul", 17)(300, "li", 18)(301, "div", 19)(302, "div", 20)(303, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](304, "img", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](305, "div", 22)(306, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](307, "Connected");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](308, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](309, "Direct transfer of funds from one bank account into another.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](310, "li")(311, "div", 24)(312, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](313, "i-feather", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](314, "View Integration");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](315, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](316, "input", 68)(317, "label", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](318, "div", 15)(319, "div", 16)(320, "ul", 17)(321, "li", 18)(322, "div", 19)(323, "div", 20)(324, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](325, "img", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](326, "div", 31)(327, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](328, "Not connected");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](329, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](330, "Indicating that goods must be paid for at the time of delivery. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](331, "li")(332, "div", 24)(333, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](334, "i-feather", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](335, "Connect Now");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](336, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](337, "input", 71)(338, "label", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](339, "div", 73)(340, "div", 74)(341, "div", 75)(342, "div", 76)(343, "div", 77)(344, "div", 78)(345, "div", 2)(346, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](347, "Paypal");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](348, "div", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](349, "input", 80)(350, "label", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](351, "button", 82)(352, "span", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](353, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](354, "div", 84)(355, "form")(356, "div", 9)(357, "div", 85)(358, "div", 86)(359, "label", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](360, "Email Address ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](361, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](362, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](363, "input", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](364, "div", 85)(365, "div", 86)(366, "label", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](367, "API Key ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](368, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](369, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](370, "input", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](371, "div", 85)(372, "div", 90)(373, "label", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](374, "Secret Key ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](375, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](376, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](377, "input", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](378, "div", 91)(379, "button", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](380, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](381, "button", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](382, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](13, !ctx.isCollapsed ? 13 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](14, ctx.isCollapsed ? 14 : -1);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.MatTooltip, _common_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SettingsSidebarComponent, angular_feather__WEBPACK_IMPORTED_MODULE_6__.FeatherComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 71818:
/*!*********************************************************************************************!*\
  !*** ./src/app/core-component/settings/financial-settings/tax-rates/tax-rates.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaxRatesComponent: () => (/* binding */ TaxRatesComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 77697);
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/core.index */ 82351);
/* harmony import */ var src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.index */ 31287);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var src_app_core_service_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/service/sidebar/sidebar.service */ 79950);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ 22047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/custom-pagination/custom-pagination.component */ 14860);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _common_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/settings-sidebar/settings-sidebar.component */ 42362);













const _c0 = () => ({
  standalone: true
});
function TaxRatesComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 7);
  }
}
function TaxRatesComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 8);
  }
}
function TaxRatesComponent_For_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td")(2, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "input", 62)(4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "td", 63)(12, "div", 64)(13, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TaxRatesComponent_For_58_Template_a_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.confirmColor());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", data_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", data_r3.taxRates, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", data_r3.createdOn, " ");
  }
}
class TaxRatesComponent {
  //** / pagination variables
  constructor(data, pagination, router, sidebar) {
    this.data = data;
    this.pagination = pagination;
    this.router = router;
    this.sidebar = sidebar;
    this.initChecked = false;
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    // pagination variables
    this.tableData = [];
    this.pageSize = 10;
    this.serialNumberArray = [];
    this.totalData = 0;
    this.showFilter = false;
    this.searchDataValue = '';
    this.filter = false;
    this.isCollapsed = false;
    this.data.getDataTable().subscribe(apiRes => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe(res => {
        if (this.router.url == this.routes.taxRates) {
          this.getTableData({
            skip: res.skip,
            limit: this.totalData
          });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getTaxRate().subscribe(apiRes => {
      this.tableData = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res, index) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(this.tableData);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        serialNumberArray: this.serialNumberArray
      });
    });
  }
  sortData(sort) {
    const data = this.tableData.slice();
    if (!sort.active || sort.direction === '') {
      this.tableData = data;
    } else {
      this.tableData = data.sort((a, b) => {
        const aValue = a[sort.active];
        const bValue = b[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }
  searchData(value) {
    this.dataSource.filter = value.trim().toLowerCase();
    this.tableData = this.dataSource.filteredData;
  }
  confirmColor() {
    const swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().mixin({
      customClass: {
        confirmButton: ' btn btn-success',
        cancelButton: 'me-2 btn btn-danger'
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      confirmButtonText: 'Yes, delete it!',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      reverseButtons: true
    }).then(result => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire('Deleted!', 'Your file has been deleted.', 'success');
      } else if (result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().DismissReason).cancel) {
        swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }
  openFilter() {
    this.filter = !this.filter;
  }
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  selectAll(initChecked) {
    if (!initChecked) {
      this.tableData.forEach(f => {
        f.isSelected = true;
      });
    } else {
      this.tableData.forEach(f => {
        f.isSelected = false;
      });
    }
  }
  static {
    this.ɵfac = function TaxRatesComponent_Factory(t) {
      return new (t || TaxRatesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_3__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_service_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__.SidebarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: TaxRatesComponent,
      selectors: [["app-tax-rates"]],
      decls: 134,
      vars: 6,
      consts: [[1, "page-header", "settings-pg-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "feather", "icon-rotate-ccw", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "feather", "icon-chevron-up", "feather-chevron-up"], [1, "feather", "icon-chevron-down", "feather-chevron-down"], [1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "settings-page-wrap", "w-50"], [1, "setting-title"], [1, "page-header", "bank-settings", "justify-content-end"], [1, "page-btn"], ["href", "#", "data-bs-toggle", "modal", "data-bs-target", "#add-tax", 1, "btn", "btn-added"], [1, "feather", "icon-plus-circle", "me-2"], [1, "col-lg-12"], [1, "card", "table-list-card"], [1, "card-body"], [1, "table-top"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search...", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew", 3, "matSortChange"], [1, "no-sort"], [1, "checkboxs"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "name"], ["mat-sort-header", "tax"], ["mat-sort-header", "created"], [1, "no-sort", "text-end"], ["id", "add-tax", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "custom-modal-two"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header", "border-0", "custom-modal-header"], [1, "w-100", "status-toggle", "modal-status", "d-flex", "justify-content-end", "align-items-center", "ms-auto", "me-2"], ["type", "checkbox", "id", "user1", "checked", "", 1, "check"], ["for", "user1", 1, "checktoggle"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body"], [1, "mb-3"], [1, "form-label"], ["type", "text", 1, "form-control"], [1, "mb-0"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit"], ["id", "edit-tax", 1, "modal", "fade"], ["type", "checkbox", "id", "user4", "checked", "", 1, "check"], ["for", "user4", 1, "checktoggle"], ["type", "text", "value", "VAT", 1, "form-control"], ["type", "text", "value", "16", 1, "form-control"], ["type", "checkbox"], [1, "action-table-data", "justify-content-end"], [1, "edit-delete-action"], ["href", "#", "data-bs-toggle", "modal", "data-bs-target", "#edit-tax", 1, "me-2", "p-2"], [1, "feather", "icon-edit", "feather-edit"], ["href", "javascript:void(0);", 1, "confirm-text", "p-2", 3, "click"], [1, "feather", "icon-trash-2", "feather-trash-2"]],
      template: function TaxRatesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Manage your settings on portal");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "ul", 3)(8, "li")(9, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "li")(12, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TaxRatesComponent_Template_a_click_12_listener() {
            return ctx.toggleCollapse();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, TaxRatesComponent_Conditional_13_Template, 1, 0, "i", 7)(14, TaxRatesComponent_Conditional_14_Template, 1, 0, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 9)(16, "div", 10)(17, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "app-settings-sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 12)(20, "div", 13)(21, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Tax Rates");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 14)(24, "div", 15)(25, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Add New Tax Rate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 9)(29, "div", 18)(30, "div", 19)(31, "div", 20)(32, "div", 21)(33, "div", 22)(34, "div", 23)(35, "a", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 26)(38, "label")(39, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function TaxRatesComponent_Template_input_ngModelChange_39_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function TaxRatesComponent_Template_input_ngModelChange_39_listener() {
            return ctx.searchData(ctx.searchDataValue);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 28)(41, "table", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("matSortChange", function TaxRatesComponent_Template_table_matSortChange_41_listener($event) {
            return ctx.sortData($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "thead")(43, "tr")(44, "th", 30)(45, "label", 31)(46, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function TaxRatesComponent_Template_input_ngModelChange_46_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.initChecked, $event) || (ctx.initChecked = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](47, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "th", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "th", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "Tax rates% ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "th", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "Created On");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "th", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterCreate"](57, TaxRatesComponent_For_58_Template, 17, 3, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](59, "app-custom-pagination");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "div", 38)(61, "div", 39)(62, "div", 40)(63, "div", 41)(64, "div", 42)(65, "div", 43)(66, "div", 2)(67, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68, "Add Tax Rates");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "div", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](70, "input", 45)(71, "label", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "button", 47)(73, "span", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](74, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "div", 49)(76, "form")(77, "div", 9)(78, "div", 18)(79, "div", 50)(80, "label", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](81, "Name ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](83, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](84, "input", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "div", 18)(86, "div", 53)(87, "label", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](88, "Tax Rate % ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](90, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](91, "input", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "div", 54)(93, "button", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](94, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "button", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](96, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](97, "div", 57)(98, "div", 39)(99, "div", 40)(100, "div", 41)(101, "div", 42)(102, "div", 43)(103, "div", 2)(104, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](105, "Edit Tax Rates");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](106, "div", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](107, "input", 58)(108, "label", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](109, "button", 47)(110, "span", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](111, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](112, "div", 49)(113, "form")(114, "div", 9)(115, "div", 18)(116, "div", 50)(117, "label", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](118, "Name ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](119, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](120, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](121, "input", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](122, "div", 18)(123, "div", 53)(124, "label", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](125, "Tax Rate % ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](126, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](127, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](128, "input", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](129, "div", 54)(130, "button", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](131, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](132, "button", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](133, "Save Changes");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](13, !ctx.isCollapsed ? 13 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](14, ctx.isCollapsed ? 14 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.searchDataValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](5, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.initChecked);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeater"](ctx.tableData);
        }
      },
      dependencies: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSortHeader, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_5__.CustomPaginationComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatTooltip, _common_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_6__.SettingsSidebarComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_settings_financial-settings_financial-settings_module_ts.js.map