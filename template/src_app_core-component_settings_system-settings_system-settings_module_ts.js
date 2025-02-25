"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_settings_system-settings_system-settings_module_ts"],{

/***/ 82552:
/*!****************************************************************************************************!*\
  !*** ./src/app/core-component/settings/system-settings/email-settings/email-settings.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailSettingsComponent: () => (/* binding */ EmailSettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/core.index */ 82351);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _common_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/settings-sidebar/settings-sidebar.component */ 42362);





function EmailSettingsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 7);
  }
}
function EmailSettingsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 8);
  }
}
class EmailSettingsComponent {
  constructor(sidebar) {
    this.sidebar = sidebar;
    this.isCollapsed = false;
  }
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  static {
    this.ɵfac = function EmailSettingsComponent_Factory(t) {
      return new (t || EmailSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.SidebarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: EmailSettingsComponent,
      selectors: [["app-email-settings"]],
      decls: 213,
      vars: 2,
      consts: [[1, "page-header", "settings-pg-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "feather", "icon-rotate-ccw", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "feather", "icon-chevron-up", "feather-chevron-up"], [1, "feather", "icon-chevron-down", "feather-chevron-down"], [1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "settings-page-wrap"], [1, "setting-title"], [1, "page-header", "text-end", "justify-content-end"], ["href", "javascript:void(0);", 1, "btn-added", "btn-primary"], [1, "feather", "icon-mail", "me-2"], [1, "col-xxl-4", "col-xl-6", "col-lg-12", "col-md-6", "d-flex"], [1, "connected-app-card", "email-setting", "d-flex", "w-100"], [1, "w-100"], [1, "flex-column", "align-items-start"], [1, "d-flex", "align-items-center", "justify-content-between", "w-100", "mb-2"], [1, "security-type", "d-flex", "align-items-center"], [1, "security-title"], [1, "integration-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#php-mail"], [1, "feather", "icon-tool", "me-2"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center", "ms-2"], ["type", "checkbox", "id", "user1", "checked", "", 1, "check"], ["for", "user1", 1, "checktoggle"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#smtp-mail"], ["type", "checkbox", "id", "user2", "checked", "", 1, "check"], ["for", "user2", 1, "checktoggle"], [1, "connect-btn"], ["href", "javascript:void(0);"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#test-mail"], ["type", "checkbox", "id", "user3", "checked", "", 1, "check"], ["for", "user3", 1, "checktoggle"], ["id", "php-mail", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "custom-modal-two"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header", "border-0", "custom-modal-header"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center", "ms-auto", "me-2"], ["type", "checkbox", "id", "user4", "checked", "", 1, "check"], ["for", "user4", 1, "checktoggle"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body"], [1, "col-lg-12"], [1, "mb-3"], [1, "form-label"], ["type", "email", 1, "form-control"], ["type", "password", 1, "form-control"], [1, "mb-0"], ["type", "text", 1, "form-control"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit"], ["id", "smtp-mail", 1, "modal", "fade"], ["type", "checkbox", "id", "user5", "checked", "", 1, "check"], ["for", "user5", 1, "checktoggle"], ["id", "test-mail", 1, "modal", "fade"], ["type", "checkbox", "id", "user6", "checked", "", 1, "check"], ["for", "user6", 1, "checktoggle"]],
      template: function EmailSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Manage your settings on portal");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul", 3)(8, "li")(9, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li")(12, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailSettingsComponent_Template_a_click_12_listener() {
            return ctx.toggleCollapse();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, EmailSettingsComponent_Conditional_13_Template, 1, 0, "i", 7)(14, EmailSettingsComponent_Conditional_14_Template, 1, 0, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9)(16, "div", 10)(17, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "app-settings-sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "div", 13)(21, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Email Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14)(24, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Send test email");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 9)(28, "div", 17)(29, "div", 18)(30, "ul", 19)(31, "li", 20)(32, "div", 21)(33, "div", 22)(34, "div", 23)(35, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "PHP Mailer");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Used to send emails safely and easily via PHP code from a web server.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "li")(40, "div", 24)(41, "a", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "i", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Connect");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "input", 28)(46, "label", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 17)(48, "div", 18)(49, "ul", 19)(50, "li", 20)(51, "div", 21)(52, "div", 22)(53, "div", 23)(54, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "SMTP");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "SMTP is used to send, relay or forward messages from a mail client.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "li")(59, "div", 24)(60, "a", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "i", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Connect");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "input", 31)(65, "label", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 17)(67, "div", 18)(68, "ul", 19)(69, "li", 20)(70, "div", 21)(71, "div", 22)(72, "div", 23)(73, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "SendGrid ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 33)(76, "a", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Connected");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Cloud-based email marketing tool that assists marketers and developers . ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "li")(81, "div", 24)(82, "a", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "i", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "View Integration");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "input", 36)(87, "label", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 38)(89, "div", 39)(90, "div", 40)(91, "div", 41)(92, "div", 42)(93, "div", 43)(94, "div", 2)(95, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "PHP Mailer");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](98, "input", 45)(99, "label", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "button", 47)(101, "span", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 49)(104, "form")(105, "div", 9)(106, "div", 50)(107, "div", 51)(108, "label", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "From Email Address ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](112, "input", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "div", 50)(114, "div", 51)(115, "label", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "Email Password ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](119, "input", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div", 50)(121, "div", 55)(122, "label", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, " From Email Name ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](126, "input", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "div", 57)(128, "button", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "button", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "div", 60)(133, "div", 39)(134, "div", 40)(135, "div", 41)(136, "div", 42)(137, "div", 43)(138, "div", 2)(139, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](140, "SMTP");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "div", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](142, "input", 61)(143, "label", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "button", 47)(145, "span", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "div", 49)(148, "form")(149, "div", 9)(150, "div", 50)(151, "div", 51)(152, "label", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153, "From Email Address ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](155, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](156, "input", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "div", 50)(158, "div", 51)(159, "label", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](160, "Email Password ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](162, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](163, "input", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "div", 50)(165, "div", 51)(166, "label", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](167, " Email Host ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](170, "input", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "div", 50)(172, "div", 55)(173, "label", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](174, " Port ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](175, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](176, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](177, "input", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "div", 57)(179, "button", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](180, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](181, "button", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](182, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "div", 63)(184, "div", 39)(185, "div", 40)(186, "div", 41)(187, "div", 42)(188, "div", 43)(189, "div", 2)(190, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](191, "Test Mail");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](192, "div", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](193, "input", 64)(194, "label", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](195, "button", 47)(196, "span", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](197, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](198, "div", 49)(199, "form")(200, "div", 9)(201, "div", 50)(202, "div", 55)(203, "label", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](204, "Enter Email Address ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](205, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](206, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](207, "input", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](208, "div", 57)(209, "button", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](210, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](211, "button", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](212, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](13, !ctx.isCollapsed ? 13 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](14, ctx.isCollapsed ? 14 : -1);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltip, _common_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SettingsSidebarComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 67674:
/*!**************************************************************************************************!*\
  !*** ./src/app/core-component/settings/system-settings/gdpr-settings/gdpr-settings.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GdprSettingsComponent: () => (/* binding */ GdprSettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/core.index */ 82351);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _common_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/settings-sidebar/settings-sidebar.component */ 42362);







const _c0 = () => ({
  standalone: true
});
function GdprSettingsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 7);
  }
}
function GdprSettingsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 8);
  }
}
function GdprSettingsComponent_For_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", data_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data_r1.value, " ");
  }
}
class GdprSettingsComponent {
  constructor(sidebar) {
    this.sidebar = sidebar;
    this.isCollapsed = false;
    this.selectedValue1 = '';
    this.selectedList1 = [{
      value: 'Left'
    }, {
      value: 'Center'
    }, {
      value: 'Right'
    }];
  }
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  static {
    this.ɵfac = function GdprSettingsComponent_Factory(t) {
      return new (t || GdprSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.SidebarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: GdprSettingsComponent,
      selectors: [["app-gdpr-settings"]],
      decls: 96,
      vars: 5,
      consts: [[1, "page-header", "settings-pg-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "feather", "icon-rotate-ccw", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "feather", "icon-chevron-up", "feather-chevron-up"], [1, "feather", "icon-chevron-down", "feather-chevron-down"], [1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "settings-page-wrap"], [1, "setting-title"], [1, "company-info", "border-0"], [1, "localization-info"], [1, "col-sm-4"], [1, "setting-info"], [1, "col-sm-8"], [1, "mb-3"], ["rows", "4", "placeholder", "Type your message", 1, "form-control"], [1, "row", "align-items-center"], [1, "localization-select"], ["placeholder", "Left", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], [1, "localization-select", "d-flex", "align-items-center"], ["type", "text", "value", "Agree", 1, "form-control"], ["type", "text", "value", "Decline", 1, "form-control"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center", "me-3"], ["type", "checkbox", "id", "user4", "checked", "", 1, "check"], ["for", "user4", 1, "checktoggle"], [1, "col-sm-6"], [1, "localization-select", "d-flex", "align-items-center", "w-100"], [1, "mb-3", "w-100"], ["type", "text", 1, "form-control"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit"]],
      template: function GdprSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Manage your settings on portal");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul", 3)(8, "li")(9, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li")(12, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GdprSettingsComponent_Template_a_click_12_listener() {
            return ctx.toggleCollapse();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, GdprSettingsComponent_Conditional_13_Template, 1, 0, "i", 7)(14, GdprSettingsComponent_Conditional_14_Template, 1, 0, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9)(16, "div", 10)(17, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "app-settings-sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "form")(21, "div", 13)(22, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "GDPR Cookies");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 14)(25, "div", 15)(26, "div", 9)(27, "div", 16)(28, "div", 17)(29, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Cookies Consent Text");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 18)(32, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "textarea", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 21)(35, "div", 16)(36, "div", 17)(37, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Cookies Position");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Your can configure the type");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 16)(42, "div", 22)(43, "mat-select", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function GdprSettingsComponent_Template_mat_select_ngModelChange_43_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.selectedValue1, $event) || (ctx.selectedValue1 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](44, GdprSettingsComponent_For_45_Template, 2, 2, "mat-option", 24, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 21)(47, "div", 16)(48, "div", 17)(49, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Agree Button Text");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Your can configure the text here");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 16)(54, "div", 25)(55, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 21)(58, "div", 16)(59, "div", 17)(60, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Decline Button Text");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Your can configure the text here");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 16)(65, "div", 25)(66, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 21)(69, "div", 16)(70, "div", 17)(71, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Show Decline Button");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "Your can configure the text here");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 16)(76, "div", 25)(77, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](78, "input", 29)(79, "label", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 21)(81, "div", 16)(82, "div", 17)(83, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "Link for Cookies Page");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "Your can configure the link here");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 31)(88, "div", 32)(89, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](90, "input", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 35)(92, "button", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "button", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "Save Changes");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](13, !ctx.isCollapsed ? 13 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](14, ctx.isCollapsed ? 14 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx.selectedList1);
        }
      },
      dependencies: [_angular_material_select__WEBPACK_IMPORTED_MODULE_3__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltip, _common_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SettingsSidebarComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 59458:
/*!************************************************************************************************!*\
  !*** ./src/app/core-component/settings/system-settings/otp-settings/otp-settings.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OtpSettingsComponent: () => (/* binding */ OtpSettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_service_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/service/sidebar/sidebar.service */ 79950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _common_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/settings-sidebar/settings-sidebar.component */ 42362);







const _c0 = () => ({
  standalone: true
});
function OtpSettingsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 7);
  }
}
function OtpSettingsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 8);
  }
}
class OtpSettingsComponent {
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  constructor(sidebar) {
    this.sidebar = sidebar;
    this.selectedValue1 = '';
    this.selectedValue2 = '';
    this.selectedValue3 = '';
    this.isCollapsed = false;
  }
  static {
    this.ɵfac = function OtpSettingsComponent_Factory(t) {
      return new (t || OtpSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_service_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_0__.SidebarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: OtpSettingsComponent,
      selectors: [["app-otp-settings"]],
      decls: 73,
      vars: 11,
      consts: [[1, "page-header", "settings-pg-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "feather", "icon-rotate-ccw", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "feather", "icon-chevron-up", "feather-chevron-up"], [1, "feather", "icon-chevron-down", "feather-chevron-down"], [1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "settings-page-wrap"], [1, "setting-title"], [1, "company-info", "company-images"], [1, "localization-info"], [1, "row", "align-items-center"], [1, "col-sm-4"], [1, "setting-info"], [1, "localization-select"], ["placeholder", "SMS", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "SMS"], ["value", "Email"], ["placeholder", "4", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "4"], ["value", "5"], ["placeholder", "5 Mins", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "5 Mins"], ["value", "10 Mins"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit"]],
      template: function OtpSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Manage your settings on portal");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul", 3)(8, "li")(9, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li")(12, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OtpSettingsComponent_Template_a_click_12_listener() {
            return ctx.toggleCollapse();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, OtpSettingsComponent_Conditional_13_Template, 1, 0, "i", 7)(14, OtpSettingsComponent_Conditional_14_Template, 1, 0, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9)(16, "div", 10)(17, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "app-settings-sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "form")(21, "div", 13)(22, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "OTP Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 14)(25, "div", 15)(26, "div", 16)(27, "div", 17)(28, "div", 18)(29, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "OTP Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Your can configure the type");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 17)(34, "div", 19)(35, "mat-select", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function OtpSettingsComponent_Template_mat_select_ngModelChange_35_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.selectedValue1, $event) || (ctx.selectedValue1 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "mat-option", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "SMS");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "mat-option", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 16)(41, "div", 17)(42, "div", 18)(43, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "OTP Digit Limit");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Select size of the format ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 17)(48, "div", 19)(49, "mat-select", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function OtpSettingsComponent_Template_mat_select_ngModelChange_49_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.selectedValue2, $event) || (ctx.selectedValue2 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "mat-option", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "mat-option", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 16)(55, "div", 17)(56, "div", 18)(57, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "OTP Expire Time");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Select expire time of OTP ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 17)(62, "div", 19)(63, "mat-select", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function OtpSettingsComponent_Template_mat_select_ngModelChange_63_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.selectedValue3, $event) || (ctx.selectedValue3 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "mat-option", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "5 Mins");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "mat-option", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "10 Mins");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 29)(69, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "button", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Save Changes");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](13, !ctx.isCollapsed ? 13 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](14, ctx.isCollapsed ? 14 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c0));
        }
      },
      dependencies: [_angular_material_select__WEBPACK_IMPORTED_MODULE_3__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltip, _common_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SettingsSidebarComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 94118:
/*!**********************************************************************************************!*\
  !*** ./src/app/core-component/settings/system-settings/sms-gateway/sms-gateway.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SmsGatewayComponent: () => (/* binding */ SmsGatewayComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_service_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/service/sidebar/sidebar.service */ 79950);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _common_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/settings-sidebar/settings-sidebar.component */ 42362);





function SmsGatewayComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 7);
  }
}
function SmsGatewayComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 8);
  }
}
class SmsGatewayComponent {
  constructor(sidebar) {
    this.sidebar = sidebar;
    this.isCollapsed = false;
  }
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  static {
    this.ɵfac = function SmsGatewayComponent_Factory(t) {
      return new (t || SmsGatewayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_service_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_0__.SidebarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: SmsGatewayComponent,
      selectors: [["app-sms-gateway"]],
      decls: 193,
      vars: 2,
      consts: [[1, "page-header", "settings-pg-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "feather", "icon-rotate-ccw", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "feather", "icon-chevron-up", "feather-chevron-up"], [1, "feather", "icon-chevron-down", "feather-chevron-down"], [1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "settings-page-wrap"], [1, "setting-title"], [1, "page-header", "text-end", "justify-content-end"], ["href", "javascript:void(0);", 1, "btn-added", "btn-primary"], [1, "feather", "icon-mail", "me-2"], [1, "col-xl-4", "col-lg-6", "col-md-4", "col-sm-6", "d-flex"], [1, "connected-app-card", "d-flex", "w-100"], [1, "w-100", "d-flex", "justify-content-between", "align-items-center"], [1, "gateway-icon", "mb-0"], ["src", "assets/img/icons/sms-icon-01.svg", "alt", ""], [1, "setting-gateway", "d-flex", "align-items-center"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#nexmo-config"], [1, "feather", "icon-settings", "me-2"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center", "ms-2"], ["type", "checkbox", "id", "user1", "checked", "", 1, "check"], ["for", "user1", 1, "checktoggle"], ["src", "assets/img/icons/sms-icon-02.svg", "alt", ""], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#factor-config"], ["type", "checkbox", "id", "user2", "checked", "", 1, "check"], ["for", "user2", 1, "checktoggle"], ["src", "assets/img/icons/sms-icon-03.svg", "alt", ""], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#twilio-config"], ["type", "checkbox", "id", "user3", "checked", "", 1, "check"], ["for", "user3", 1, "checktoggle"], ["id", "nexmo-config", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "custom-modal-two"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header", "border-0", "custom-modal-header", "custom-class-modal"], [1, "w-100", "status-toggle", "modal-status", "d-flex", "justify-content-end", "align-items-center", "ms-auto", "me-2"], ["type", "checkbox", "id", "user4", "checked", "", 1, "check"], ["for", "user4", 1, "checktoggle"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body"], [1, "col-lg-12"], [1, "mb-3"], [1, "form-label"], ["type", "text", 1, "form-control"], [1, "mb-0"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit"], ["id", "factor-config", 1, "modal", "fade"], [1, "modal-header", "border-0", "custom-modal-header"], ["type", "checkbox", "id", "users4", "checked", "", 1, "check"], ["for", "users4", 1, "checktoggle"], ["id", "twilio-config", 1, "modal", "fade"], ["type", "checkbox", "id", "user14", "checked", "", 1, "check"], ["for", "user14", 1, "checktoggle"]],
      template: function SmsGatewayComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Manage your settings on portal");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul", 3)(8, "li")(9, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li")(12, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SmsGatewayComponent_Template_a_click_12_listener() {
            return ctx.toggleCollapse();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, SmsGatewayComponent_Conditional_13_Template, 1, 0, "i", 7)(14, SmsGatewayComponent_Conditional_14_Template, 1, 0, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9)(16, "div", 10)(17, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "app-settings-sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "div", 13)(21, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "SMS Gateways");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14)(24, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Send test email");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 9)(28, "div", 17)(29, "div", 18)(30, "ul", 19)(31, "li", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "img", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "li", 22)(34, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "input", 26)(38, "label", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 17)(40, "div", 18)(41, "ul", 19)(42, "li", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "img", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "li", 22)(45, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "input", 30)(49, "label", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 17)(51, "div", 18)(52, "ul", 19)(53, "li", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "img", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "li", 22)(56, "a", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "input", 34)(60, "label", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 36)(62, "div", 37)(63, "div", 38)(64, "div", 39)(65, "div", 40)(66, "div", 41)(67, "div", 2)(68, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Nexmo");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "input", 43)(72, "label", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "button", 45)(74, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 47)(77, "form")(78, "div", 9)(79, "div", 48)(80, "div", 49)(81, "label", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "API Key ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "input", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 48)(87, "div", 49)(88, "label", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "API Secret Key ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](92, "input", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 48)(94, "div", 52)(95, "label", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, " Sender ID ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "input", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 53)(101, "button", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "button", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 56)(106, "div", 37)(107, "div", 38)(108, "div", 39)(109, "div", 40)(110, "div", 57)(111, "div", 2)(112, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "2Factor");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](115, "input", 58)(116, "label", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "button", 45)(118, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div", 47)(121, "form")(122, "div", 9)(123, "div", 48)(124, "div", 49)(125, "label", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, "API Key ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](129, "input", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "div", 48)(131, "div", 49)(132, "label", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, "API Secret Key ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](135, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](136, "input", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "div", 48)(138, "div", 52)(139, "label", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](140, " Sender ID ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](142, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](143, "input", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "div", 53)(145, "button", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "button", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "div", 60)(150, "div", 37)(151, "div", 38)(152, "div", 39)(153, "div", 40)(154, "div", 57)(155, "div", 2)(156, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](157, "Twilio");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](159, "input", 61)(160, "label", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "button", 45)(162, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](163, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "div", 47)(165, "form")(166, "div", 9)(167, "div", 48)(168, "div", 49)(169, "label", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](170, "API Key ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](172, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](173, "input", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "div", 48)(175, "div", 49)(176, "label", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](177, "API Secret Key ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](179, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](180, "input", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](181, "div", 48)(182, "div", 52)(183, "label", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](184, " Sender ID ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](185, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](186, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](187, "input", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "div", 53)(189, "button", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](190, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](191, "button", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](192, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](13, !ctx.isCollapsed ? 13 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](14, ctx.isCollapsed ? 14 : -1);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltip, _common_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SettingsSidebarComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 77074:
/*!*******************************************************************************************!*\
  !*** ./src/app/core-component/settings/system-settings/system-settings-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SystemSettingsRoutingModule: () => (/* binding */ SystemSettingsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _system_settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./system-settings.component */ 22060);
/* harmony import */ var _email_settings_email_settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-settings/email-settings.component */ 82552);
/* harmony import */ var _gdpr_settings_gdpr_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gdpr-settings/gdpr-settings.component */ 67674);
/* harmony import */ var _sms_gateway_sms_gateway_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sms-gateway/sms-gateway.component */ 94118);
/* harmony import */ var _otp_settings_otp_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./otp-settings/otp-settings.component */ 59458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);








const routes = [{
  path: '',
  component: _system_settings_component__WEBPACK_IMPORTED_MODULE_0__.SystemSettingsComponent,
  children: [{
    path: 'email-settings',
    component: _email_settings_email_settings_component__WEBPACK_IMPORTED_MODULE_1__.EmailSettingsComponent
  }, {
    path: 'gdpr-settings',
    component: _gdpr_settings_gdpr_settings_component__WEBPACK_IMPORTED_MODULE_2__.GdprSettingsComponent
  }, {
    path: 'sms-gateway',
    component: _sms_gateway_sms_gateway_component__WEBPACK_IMPORTED_MODULE_3__.SmsGatewayComponent
  }, {
    path: 'otp-settings',
    component: _otp_settings_otp_settings_component__WEBPACK_IMPORTED_MODULE_4__.OtpSettingsComponent
  }]
}];
class SystemSettingsRoutingModule {
  static {
    this.ɵfac = function SystemSettingsRoutingModule_Factory(t) {
      return new (t || SystemSettingsRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: SystemSettingsRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SystemSettingsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 22060:
/*!**************************************************************************************!*\
  !*** ./src/app/core-component/settings/system-settings/system-settings.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SystemSettingsComponent: () => (/* binding */ SystemSettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);


class SystemSettingsComponent {
  static {
    this.ɵfac = function SystemSettingsComponent_Factory(t) {
      return new (t || SystemSettingsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SystemSettingsComponent,
      selectors: [["app-system-settings"]],
      decls: 1,
      vars: 0,
      template: function SystemSettingsComponent_Template(rf, ctx) {
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

/***/ 74971:
/*!***********************************************************************************!*\
  !*** ./src/app/core-component/settings/system-settings/system-settings.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SystemSettingsModule: () => (/* binding */ SystemSettingsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _system_settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./system-settings-routing.module */ 77074);
/* harmony import */ var _system_settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./system-settings.component */ 22060);
/* harmony import */ var _gdpr_settings_gdpr_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gdpr-settings/gdpr-settings.component */ 67674);
/* harmony import */ var _email_settings_email_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email-settings/email-settings.component */ 82552);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _otp_settings_otp_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./otp-settings/otp-settings.component */ 59458);
/* harmony import */ var _sms_gateway_sms_gateway_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sms-gateway/sms-gateway.component */ 94118);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);









class SystemSettingsModule {
  static {
    this.ɵfac = function SystemSettingsModule_Factory(t) {
      return new (t || SystemSettingsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
      type: SystemSettingsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _system_settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SystemSettingsRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.sharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](SystemSettingsModule, {
    declarations: [_system_settings_component__WEBPACK_IMPORTED_MODULE_1__.SystemSettingsComponent, _gdpr_settings_gdpr_settings_component__WEBPACK_IMPORTED_MODULE_2__.GdprSettingsComponent, _email_settings_email_settings_component__WEBPACK_IMPORTED_MODULE_3__.EmailSettingsComponent, _otp_settings_otp_settings_component__WEBPACK_IMPORTED_MODULE_5__.OtpSettingsComponent, _sms_gateway_sms_gateway_component__WEBPACK_IMPORTED_MODULE_6__.SmsGatewayComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _system_settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SystemSettingsRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.sharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_settings_system-settings_system-settings_module_ts.js.map