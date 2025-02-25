"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_base-ui_ui-tooltips_ui-tooltips_module_ts"],{

/***/ 92569:
/*!**********************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-tooltips/ui-tooltips-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiTooltipsRoutingModule: () => (/* binding */ UiTooltipsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ui_tooltips_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-tooltips.component */ 64301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _ui_tooltips_component__WEBPACK_IMPORTED_MODULE_0__.UiTooltipsComponent
}];
class UiTooltipsRoutingModule {
  static {
    this.ɵfac = function UiTooltipsRoutingModule_Factory(t) {
      return new (t || UiTooltipsRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: UiTooltipsRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UiTooltipsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 64301:
/*!*****************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-tooltips/ui-tooltips.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiTooltipsComponent: () => (/* binding */ UiTooltipsComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ 36465);



function UiTooltipsComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 63);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", ctx_r0.primary, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function UiTooltipsComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 63);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", ctx_r0.secondary, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function UiTooltipsComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 63);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", ctx_r0.warning, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function UiTooltipsComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 63);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", ctx_r0.info, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function UiTooltipsComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 63);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", ctx_r0.success, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function UiTooltipsComponent_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 63);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", ctx_r0.danger, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function UiTooltipsComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 63);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", ctx_r0.light, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function UiTooltipsComponent_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 63);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", ctx_r0.dark, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function UiTooltipsComponent_ng_template_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 63);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", ctx_r0.html, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function UiTooltipsComponent_ng_template_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 63);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", ctx_r0.html, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function UiTooltipsComponent_ng_template_110_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 63);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", ctx_r0.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function UiTooltipsComponent_ng_template_122_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 63);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", ctx_r0.icon1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function UiTooltipsComponent_ng_template_126_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 63);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", ctx_r0.icon2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function UiTooltipsComponent_ng_template_130_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 63);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", ctx_r0.icon3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
class UiTooltipsComponent {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    this.html = `<em>Tooltip</em> <u>with</u> <b>HTML</b>`;
    this.content = 'Disabled tooltip';
    this.primary = `<p class="btn-primary">Primary Tooltip</p>`;
    this.secondary = `<div class="btn-secondary">Secondary Tooltip</div>`;
    this.warning = `<div>Warning Tooltip</div>`;
    this.info = `<div>Info Tooltip</div>`;
    this.success = `<div class="btn-success">Success Tooltip</div>`;
    this.danger = `<div class="btn-danger">Danger Tooltip</div>`;
    this.light = `<div class="btn-light">Light Tooltip</div>`;
    this.dark = `<div class="btn-dark">Dark Tooltip</div>`;
    this.icon1 = `Marina Kai`;
    this.icon2 = `Alex Carey`;
    this.icon3 = `Maria John`;
    this.link = `Link Tooltip`;
  }
  static {
    this.ɵfac = function UiTooltipsComponent_Factory(t) {
      return new (t || UiTooltipsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UiTooltipsComponent,
      selectors: [["app-ui-tooltips"]],
      decls: 132,
      vars: 14,
      consts: [["popTemplate1", ""], ["popTemplate2", ""], ["popTemplate3", ""], ["popTemplate4", ""], ["popTemplate5", ""], ["popTemplate6", ""], ["popTemplate7", ""], ["popTemplate8", ""], ["popTemplate9", ""], ["popTemplate10", ""], ["popTemplate14", ""], ["popTemplate11", ""], ["popTemplate12", ""], ["popTemplate13", ""], [1, "page-header"], [1, "row"], [1, "col-sm-12"], [1, "page-title"], [1, "col-xl-12"], [1, "card"], [1, "card-header", "justify-content-between"], [1, "card-title"], [1, "card-body"], [1, "btn-list", "custom-btn-tooptip-class"], [1, "tooltip-content-primary"], ["type", "button", 1, "btn", "btn-primary", 3, "tooltip"], [1, "tooltip-content-secondary"], ["type", "button", 1, "btn", "btn-secondary", 3, "tooltip"], [1, "tooltip-content-warning"], ["type", "button", 1, "btn", "btn-warning", 3, "tooltip"], [1, "tooltip-content-info"], ["type", "button", 1, "btn", "btn-info", 3, "tooltip"], [1, "tooltip-content-success"], ["type", "button", 1, "btn", "btn-success", 3, "tooltip"], [1, "tooltip-content-danger"], ["type", "button", 1, "btn", "btn-danger", 3, "tooltip"], [1, "tooltip-content-light"], ["type", "button", 1, "btn", "btn-light", 3, "tooltip"], [1, "tooltip-content-dark"], ["type", "button", 1, "btn", "btn-dark", 3, "tooltip"], [1, "col-md-12"], [1, "card-header"], [1, "popover-list"], ["type", "button", "data-container", "body", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "", "data-bs-original-title", "Popover title", "tooltip", "Popover title", "placement", "top", 1, "example-popover", "btn", "btn-primary"], [1, "tooltip-list"], ["type", "button", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "", "data-bs-original-title", "Tooltip on top", "tooltip", "Tooltip on top", "placement", "top", 1, "btn", "btn-primary", "me-1"], ["type", "button", "data-bs-toggle", "tooltip", "data-bs-placement", "right", "title", "", "data-bs-original-title", "Tooltip on right", "tooltip", "Tooltip on right", "placement", "right", 1, "btn", "btn-primary", "me-1"], ["type", "button", "data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "title", "", "data-bs-original-title", "Tooltip on bottom", "tooltip", "Tooltip on bottom", "placement", "bottom", 1, "btn", "btn-primary", "me-1"], ["type", "button", "data-bs-toggle", "tooltip", "data-bs-placement", "left", "title", "", "data-bs-original-title", "Tooltip on left", "tooltip", "Tooltip on left", "placement", "left", 1, "btn", "btn-primary"], [1, "col-md-6"], ["type", "button", 1, "btn", "btn-primary", "me-1", 3, "tooltip"], ["type", "button", "triggers", "click", 1, "btn", "btn-primary", "me-1", 3, "tooltip"], ["tabindex", "0", "data-bs-toggle", "tooltip", 1, "d-inline-block"], ["type", "button", "placement", "top", "container", "body", 1, "custom-disabled", "btn", "btn-primary", 3, "tooltip"], [1, "text-muted", "mb-0", "custom-link-tooltip"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "data-bs-custom-class", "tooltip-primary", "tooltip", "Link Tooltip", "placement", "auto", 1, "text-primary"], [1, "card-body", "tooltip-icon-custom-wrapper"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "data-bs-custom-class", "tooltip-primary", "placement", "auto", 1, "avatar", "avatar-md", "me-2", "online", "avatar-rounded", 3, "tooltip"], ["src", "assets/img/avatar/avatar-1.jpg", "alt", "img"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "data-bs-custom-class", "tooltip-primary", "placement", "auto", 1, "avatar", "avatar-lg", "me-2", "online", "avatar-rounded", 3, "tooltip"], ["src", "assets/img/avatar/avatar-2.jpg", "alt", "img"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "data-bs-custom-class", "tooltip-primary", "placement", "auto", 1, "avatar", "avatar-xl", "me-2", "online", "avatar-rounded", 3, "tooltip"], ["src", "assets/img/avatar/avatar-3.jpg", "alt", "img"], [3, "innerHtml"]],
      template: function UiTooltipsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "div", 16)(3, "h3", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Tooltip");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 15)(6, "div", 18)(7, "div", 19)(8, "div", 20)(9, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Colored Tooltips ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 22)(12, "div", 23)(13, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, UiTooltipsComponent_ng_template_14_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Primary Tooltip ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, UiTooltipsComponent_ng_template_19_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Secondary Tooltip ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, UiTooltipsComponent_ng_template_24_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Warning Tooltip ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, UiTooltipsComponent_ng_template_29_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Info Tooltip ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, UiTooltipsComponent_ng_template_34_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Success Tooltip ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, UiTooltipsComponent_ng_template_39_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Danger Tooltip ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, UiTooltipsComponent_ng_template_44_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " Light Tooltip ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, UiTooltipsComponent_ng_template_49_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "button", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " Dark Tooltip ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 15)(54, "div", 40)(55, "div", 19)(56, "div", 41)(57, "h5", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Html Element");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 22)(60, "div", 42)(61, "button", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Hover Me");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 40)(64, "div", 19)(65, "div", 41)(66, "h5", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Direction Tooltip");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 22)(69, "div", 44)(70, "button", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, " Tooltip on top ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "button", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, " Tooltip on right ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "button", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, " Tooltip on bottom ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "button", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, " Tooltip on left ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 49)(79, "div", 19)(80, "div", 41)(81, "h5", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Html Element");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 22)(84, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](85, UiTooltipsComponent_ng_template_85_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "button", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, " Tooltip with HTML ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](89, UiTooltipsComponent_ng_template_89_Template, 1, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "button", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, " Click Me ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 49)(94, "div", 19)(95, "div", 41)(96, "h5", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Disabled Elements");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 22)(99, "span", 52)(100, "button", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, " Disabled button ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 49)(103, "div", 19)(104, "div", 41)(105, "h5", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Tooltips on Links");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 22)(108, "p", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, " Hover on the link to view the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](110, UiTooltipsComponent_ng_template_110_Template, 1, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "a", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Tooltip");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 49)(115, "div", 19)(116, "div", 41)(117, "h5", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Tooltip For Images");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 56)(120, "a", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "img", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](122, UiTooltipsComponent_ng_template_122_Template, 1, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "img", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](126, UiTooltipsComponent_ng_template_126_Template, 1, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "a", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](129, "img", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](130, UiTooltipsComponent_ng_template_130_Template, 1, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          const popTemplate1_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
          const popTemplate2_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);
          const popTemplate3_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](25);
          const popTemplate4_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](30);
          const popTemplate5_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](35);
          const popTemplate6_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](40);
          const popTemplate7_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](45);
          const popTemplate8_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](50);
          const popTemplate9_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](86);
          const popTemplate10_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](90);
          const popTemplate11_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](123);
          const popTemplate12_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](127);
          const popTemplate13_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](131);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tooltip", popTemplate1_r2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tooltip", popTemplate2_r3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tooltip", popTemplate3_r4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tooltip", popTemplate4_r5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tooltip", popTemplate5_r6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tooltip", popTemplate6_r7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tooltip", popTemplate7_r8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tooltip", popTemplate8_r9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tooltip", popTemplate9_r10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tooltip", popTemplate10_r11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tooltip", ctx.content);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tooltip", popTemplate11_r12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tooltip", popTemplate12_r13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tooltip", popTemplate13_r14);
        }
      },
      dependencies: [ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_2__.TooltipDirective],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 65808:
/*!**************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-tooltips/ui-tooltips.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiTooltipsModule: () => (/* binding */ UiTooltipsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ui_tooltips_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-tooltips-routing.module */ 92569);
/* harmony import */ var _ui_tooltips_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-tooltips.component */ 64301);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);





class UiTooltipsModule {
  static {
    this.ɵfac = function UiTooltipsModule_Factory(t) {
      return new (t || UiTooltipsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: UiTooltipsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ui_tooltips_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiTooltipsRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.sharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](UiTooltipsModule, {
    declarations: [_ui_tooltips_component__WEBPACK_IMPORTED_MODULE_1__.UiTooltipsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ui_tooltips_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiTooltipsRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.sharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_base-ui_ui-tooltips_ui-tooltips_module_ts.js.map