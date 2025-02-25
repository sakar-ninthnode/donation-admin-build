"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_settings_website-settings_website-settings_module_ts"],{

/***/ 8062:
/*!*********************************************************************************************!*\
  !*** ./src/app/core-component/settings/website-settings/appearance/appearance.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppearanceComponent: () => (/* binding */ AppearanceComponent)
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
function AppearanceComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 7);
  }
}
function AppearanceComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 8);
  }
}
function AppearanceComponent_For_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 34);
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
function AppearanceComponent_For_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", data_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data_r2.value, " ");
  }
}
class AppearanceComponent {
  constructor(sidebar) {
    this.sidebar = sidebar;
    this.isActive = null;
    this.selectedValue1 = '';
    this.selectedValue2 = '';
    this.selectedList1 = [{
      value: 'Small - 85px'
    }, {
      value: 'Large - 250px'
    }];
    this.selectedList2 = [{
      value: 'Nunito'
    }, {
      value: 'Poppins'
    }];
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
    this.ɵfac = function AppearanceComponent_Factory(t) {
      return new (t || AppearanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_service_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_0__.SidebarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AppearanceComponent,
      selectors: [["app-appearance"]],
      decls: 101,
      vars: 22,
      consts: [[1, "page-header", "settings-pg-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "feather", "icon-rotate-ccw", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "feather", "icon-chevron-up", "feather-chevron-up"], [1, "feather", "icon-chevron-down", "feather-chevron-down"], [1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "settings-page-wrap"], [1, "setting-title"], [1, "appearance-settings"], [1, "col-xl-4", "col-lg-12", "col-md-4"], [1, "setting-info", "mb-4"], [1, "col-xl-8", "col-lg-12", "col-md-8"], [1, "theme-type-images", "d-flex", "align-items-center", "mb-4"], [1, "theme-image", 3, "click"], [1, "theme-image-set"], ["src", "assets/img/theme/theme-img-08.jpg", "alt", ""], ["src", "assets/img/theme/theme-img-09.jpg", "alt", ""], ["src", "assets/img/theme/theme-img-10.jpg", "alt", ""], [1, "theme-colors", "mb-4"], [1, "themecolorset", "defaultcolor", 3, "click"], [1, "themecolorset", "theme-violet", 3, "click"], [1, "themecolorset", "theme-blue", 3, "click"], [1, "themecolorset", "theme-brown", 3, "click"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center", "ms-2"], ["type", "checkbox", "id", "user1", "checked", "", 1, "check"], ["for", "user1", 1, "checktoggle"], [1, "localization-select"], ["placeholder", "Small - 85px", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], ["placeholder", "Nunito", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"]],
      template: function AppearanceComponent_Template(rf, ctx) {
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
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppearanceComponent_Template_a_click_12_listener() {
            return ctx.toggleCollapse();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, AppearanceComponent_Conditional_13_Template, 1, 0, "i", 7)(14, AppearanceComponent_Conditional_14_Template, 1, 0, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9)(16, "div", 10)(17, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "app-settings-sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "div", 13)(21, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Appearance");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14)(24, "div", 9)(25, "div", 15)(26, "div", 16)(27, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Select Theme");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Choose accent colour of website");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 17)(32, "div", 18)(33, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppearanceComponent_Template_div_click_33_listener() {
            return ctx.setActive("Light");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "img", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Light");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppearanceComponent_Template_div_click_38_listener() {
            return ctx.setActive("Dark");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "img", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Dark");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppearanceComponent_Template_div_click_43_listener() {
            return ctx.setActive("Automatic");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "img", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Automatic");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 9)(49, "div", 15)(50, "div", 16)(51, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Accent Color");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Choose accent colour of website");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 15)(56, "div", 24)(57, "ul")(58, "li")(59, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppearanceComponent_Template_span_click_59_listener() {
            return ctx.setActive("defaultcolor");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "li")(61, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppearanceComponent_Template_span_click_61_listener() {
            return ctx.setActive("theme-violet");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "li")(63, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppearanceComponent_Template_span_click_63_listener() {
            return ctx.setActive("theme-blue");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "li")(65, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppearanceComponent_Template_span_click_65_listener() {
            return ctx.setActive("theme-brown");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 9)(67, "div", 15)(68, "div", 16)(69, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Expand Sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Choose accent colour of website");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 15)(74, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "input", 30)(76, "label", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 9)(78, "div", 15)(79, "div", 16)(80, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "Sidebar Size");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Select size of the sidebar to display");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 15)(85, "div", 32)(86, "mat-select", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function AppearanceComponent_Template_mat_select_ngModelChange_86_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.selectedValue1, $event) || (ctx.selectedValue1 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](87, AppearanceComponent_For_88_Template, 2, 2, "mat-option", 34, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 9)(90, "div", 15)(91, "div", 16)(92, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "Font Family");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "Select font family of website");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 15)(97, "div", 32)(98, "mat-select", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function AppearanceComponent_Template_mat_select_ngModelChange_98_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.selectedValue2, $event) || (ctx.selectedValue2 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](99, AppearanceComponent_For_100_Template, 2, 2, "mat-option", 34, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](13, !ctx.isCollapsed ? 13 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](14, ctx.isCollapsed ? 14 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.isActive === "Light");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.isActive === "Dark");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.isActive === "Automatic");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.isActive === "defaultcolor");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.isActive === "theme-violet");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.isActive === "theme-blue");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.isActive === "theme-brown");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](20, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx.selectedList1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](21, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx.selectedList2);
        }
      },
      dependencies: [_angular_material_select__WEBPACK_IMPORTED_MODULE_3__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltip, _common_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SettingsSidebarComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 88988:
/*!*********************************************************************************************************!*\
  !*** ./src/app/core-component/settings/website-settings/company-settings/company-settings.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompanySettingsComponent: () => (/* binding */ CompanySettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/core.index */ 82351);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _common_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/settings-sidebar/settings-sidebar.component */ 42362);





function CompanySettingsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 7);
  }
}
function CompanySettingsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 8);
  }
}
class CompanySettingsComponent {
  constructor(sidebar) {
    this.sidebar = sidebar;
    this.isCollapsed = false;
    this.filter = false;
  }
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  openFilter() {
    this.filter = !this.filter;
  }
  static {
    this.ɵfac = function CompanySettingsComponent_Factory(t) {
      return new (t || CompanySettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.SidebarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: CompanySettingsComponent,
      selectors: [["app-company-settings"]],
      decls: 188,
      vars: 2,
      consts: [[1, "page-header", "settings-pg-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "feather", "icon-rotate-ccw", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "feather", "icon-chevron-up", "feather-chevron-up"], [1, "feather", "icon-chevron-down", "feather-chevron-down"], [1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "settings-page-wrap"], [1, "setting-title"], [1, "company-info"], [1, "card-title-head"], [1, "feather", "icon-zap"], [1, "col-xl-4", "col-lg-6", "col-md-4"], [1, "mb-3"], [1, "form-label"], ["type", "text", 1, "form-control"], ["type", "email", 1, "form-control"], [1, "col-md-4"], [1, "company-info", "company-images"], [1, "feather", "icon-image"], [1, "logo-company"], [1, "d-flex", "align-items-center"], [1, "logo-info"], [1, "profile-pic-upload", "mb-0"], [1, "new-employee-field"], [1, "mb-0"], [1, "image-upload", "mb-0"], ["type", "file"], [1, "image-uploads"], [1, "feather", "icon-upload", "me-1"], [1, "new-logo", "ms-auto"], ["href", "javascript:void(0);"], ["src", "assets/img/logo-small.png", "alt", "Logo"], [1, "feather", "icon-x"], [1, "company-address"], [1, "feather", "icon-map-pin"], [1, "col-md-12"], [1, "col-xl-3", "col-lg-4", "col-md-3"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit"]],
      template: function CompanySettingsComponent_Template(rf, ctx) {
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
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CompanySettingsComponent_Template_a_click_12_listener() {
            return ctx.toggleCollapse();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CompanySettingsComponent_Conditional_13_Template, 1, 0, "i", 7)(14, CompanySettingsComponent_Conditional_14_Template, 1, 0, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9)(16, "div", 10)(17, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "app-settings-sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "form")(21, "div", 13)(22, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Company Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 14)(25, "div", 15)(26, "h6")(27, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Company Information");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 9)(31, "div", 17)(32, "div", 18)(33, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Company Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 17)(37, "div", 18)(38, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Company Email Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 22)(42, "div", 18)(43, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Phone Number");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 22)(47, "div", 18)(48, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Fax");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 22)(52, "div", 18)(53, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Website");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 23)(57, "div", 15)(58, "h6")(59, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Company Images");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "ul", 25)(63, "li", 26)(64, "div", 27)(65, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Company Logo");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Upload Logo of your Company to display in website");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 28)(70, "div", 29)(71, "div", 30)(72, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 33)(75, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Upload Photo");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "For better preview recommended size is 450px x 450px. Max size 5MB.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 35)(81, "a", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "img", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "i", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "li", 26)(86, "div", 27)(87, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "Company Icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "Upload Icon of your Company to display in website");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 28)(92, "div", 29)(93, "div", 30)(94, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](95, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 33)(97, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](98, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, "Upload Photo");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "For better preview recommended size is 450px x 450px. Max size 5MB.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 35)(103, "a", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](104, "img", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](106, "i", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "li", 26)(108, "div", 27)(109, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "Favicon");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "Upload Favicon of your Company to display in website");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "div", 28)(114, "div", 29)(115, "div", 30)(116, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](117, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "div", 33)(119, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](120, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, "Upload Photo");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, "For better preview recommended size is 450px x 450px. Max size 5MB.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "div", 35)(125, "a", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](126, "img", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](128, "i", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "li", 26)(130, "div", 27)(131, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](132, "Company Dark Logo");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "Upload Logo of your Company to display in website");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "div", 28)(136, "div", 29)(137, "div", 30)(138, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](139, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "div", 33)(141, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](142, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, "Upload Photo");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](145, "For better preview recommended size is 450px x 450px. Max size 5MB.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "div", 35)(147, "a", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](148, "img", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](150, "i", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "div", 39)(152, "div", 15)(153, "h6")(154, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](155, "i", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](156, "Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "div", 9)(158, "div", 41)(159, "div", 18)(160, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](161, "Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](162, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "div", 42)(164, "div", 18)(165, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](166, "Country");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](167, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "div", 42)(169, "div", 18)(170, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](171, "State / Province");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](172, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](173, "div", 42)(174, "div", 18)(175, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](176, "City");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](177, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "div", 42)(179, "div", 18)(180, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](181, "Postal Code");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](182, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "div", 43)(184, "button", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](185, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](186, "button", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](187, "Save Changes");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
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

/***/ 54172:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/core-component/settings/website-settings/language-settings-web/language-settings-web.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LanguageSettingsWebComponent: () => (/* binding */ LanguageSettingsWebComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _common_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/settings-sidebar/settings-sidebar.component */ 42362);




class LanguageSettingsWebComponent {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  static {
    this.ɵfac = function LanguageSettingsWebComponent_Factory(t) {
      return new (t || LanguageSettingsWebComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: LanguageSettingsWebComponent,
      selectors: [["app-language-settings-web"]],
      decls: 268,
      vars: 1,
      consts: [[1, "page-header", "settings-pg-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh"], [1, "feather", "icon-rotate-ccw", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "id", "collapse-header"], [1, "feather", "icon-chevron-up", "feather-chevron-up"], [1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "settings-page-wrap", "w-50"], [1, "setting-title"], [1, "page-header"], [1, "back-btn"], [1, "btn", "btn-translation", 3, "routerLink"], [1, "feather", "icon-arrow-left", "filter-icon", "me-2"], [1, "page-btn"], ["href", "javascript:void(0);", 1, "d-flex", "align-items-center", "selected-language"], ["src", "assets/img/icons/flag-02.svg", "alt", "", 1, "me-2"], [1, "col-lg-12"], [1, "card", "table-list-card"], [1, "card-body"], [1, "table-top"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "table-responsive"], [1, "table", "datanew"], [1, "no-sort"], [1, "checkboxs"], ["type", "checkbox", "id", "select-all"], [1, "checkmarks"], ["type", "checkbox"], [1, "file-data"], [1, "position-relative"], [1, "progress", "attendance", "language-progress"], ["role", "progressbar", 1, "progress-bar", "progress-bar-warning"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#offcanvasRight", 1, "me-2", "p-2"], [1, "feather", "icon-edit", "feather-edit"], ["href", "javascript:void(0);", 1, "confirm-text", "p-2"], [1, "feather", "icon-trash-2", "feather-trash-2"], ["role", "progressbar", 1, "progress-bar", "progress-bar-success"], ["role", "progressbar", 1, "progress-bar", "progress-bar-violet"], ["role", "progressbar", 1, "progress-bar", "progress-bar-violet-two"], ["tabindex", "-1", "id", "offcanvasRight", 1, "offcanvas", "offcanvas-end", "em-payrol-add"], [1, "offcanvas-body", "p-0"], [1, "page-wrapper-new"], [1, "content"], [1, "page-header", "justify-content-between"], [1, "page-title", "d-flex", "align-items-center"], [1, "page-btn", "mt-0"], ["href", "javascript:void(0);", 1, "d-flex", "align-items-center", "selected-language", "me-3"], [1, "mb-0"], [1, "d-flex", "align-items-center"], [1, "position-static", "ms-2"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-secondary"], [1, "feather", "icon-arrow-left", "me-2"], [1, "no-sort", "fixed-width"], ["type", "text", "value", "\u0627\u0644\u0628\u0642", 1, "form-control"], ["type", "text", "value", "\u0627\u0644\u0628\u0642 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A", 1, "form-control"], ["type", "text", "value", "\u0639\u0644\u0629 \u0627\u0644\u0645\u062E\u0635\u0635\u0629", 1, "form-control"]],
      template: function LanguageSettingsWebComponent_Template(rf, ctx) {
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
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 8)(15, "div", 9)(16, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "app-settings-sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 11)(19, "div", 12)(20, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Language");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 13)(23, "div", 14)(24, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Back to Translations ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 17)(28, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "img", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Arabic");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 8)(32, "div", 20)(33, "div", 21)(34, "div", 22)(35, "div", 23)(36, "div", 24)(37, "div", 25)(38, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 28)(41, "table", 29)(42, "thead")(43, "tr")(44, "th", 30)(45, "label", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "input", 32)(47, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Medium");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "File");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Complete");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Progress");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "th", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "tbody")(61, "tr")(62, "td")(63, "label", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "input", 34)(65, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, " Web ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "td")(69, "span", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Inventory");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "2145");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "1815");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "td")(76, "div", 36)(77, "div", 37)(78, "div", 38)(79, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "80%");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "td", 39)(82, "div", 40)(83, "a", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "i", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "a", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "i", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "tr")(88, "td")(89, "label", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](90, "input", 34)(91, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, " Web ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "td")(95, "span", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "Expense");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "2045");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "2045");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "td")(102, "div", 36)(103, "div", 37)(104, "div", 45)(105, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "100%");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "td", 39)(108, "div", 40)(109, "a", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](110, "i", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "a", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](112, "i", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "tr")(114, "td")(115, "label", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](116, "input", 34)(117, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, " Web ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "td")(121, "span", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, "Product");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, "2245");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, "295");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "td")(128, "div", 36)(129, "div", 37)(130, "div", 46)(131, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](132, "5%");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "td", 39)(134, "div", 40)(135, "a", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](136, "i", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "a", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](138, "i", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "tr")(140, "td")(141, "label", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](142, "input", 34)(143, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](145, " Web ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "td")(147, "span", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148, "Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](150, "2535");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](152, "1145");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "td")(154, "div", 36)(155, "div", 37)(156, "div", 47)(157, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158, "40%");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "td", 39)(160, "div", 40)(161, "a", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](162, "i", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "a", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](164, "i", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "div", 48)(166, "div", 49)(167, "div", 50)(168, "div", 51)(169, "div", 52)(170, "div", 53)(171, "div", 54)(172, "a", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](173, "img", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](174, "Arabic");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](175, "div", 36)(176, "p", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](177, "Progress");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "div", 57)(179, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](180, "div", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](181, "span", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](182, "40%");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "div", 17)(184, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](185, "i", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](186, "Back to Translations ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "div", 28)(188, "table", 29)(189, "thead")(190, "tr")(191, "th", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](192, "English");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](193, "th", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](194, "Arabic");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](195, "tbody")(196, "tr")(197, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](198, " Bugs");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](199, "td")(200, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](201, "input", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](202, "tr")(203, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](204, " Bugs Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](205, "td")(206, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](207, "input", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](208, "tr")(209, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](210, "Bug Assigned");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](211, "td")(212, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](213, "input", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](214, "tr")(215, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](216, " Bug Comments");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](217, "td")(218, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](219, "input", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](220, "tr")(221, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](222, "Bug Attachment");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](223, "td")(224, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](225, "input", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](226, "tr")(227, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](228, " Bug Updated");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](229, "td")(230, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](231, "input", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](232, "tr")(233, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](234, " Bug Reported");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](235, "td")(236, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](237, "input", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](238, "tr")(239, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](240, " Bugs infromation successfully updated");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](241, "td")(242, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](243, "input", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](244, "tr")(245, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](246, " Bugs infromation successfully Saved");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](247, "td")(248, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](249, "input", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](250, "tr")(251, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](252, " Timer infromation successfully Deleted");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](253, "td")(254, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](255, "input", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](256, "tr")(257, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](258, " Bugs infromation successfully Deleted");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](259, "td")(260, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](261, "input", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](262, "tr")(263, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](264, " Bug Updated");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](265, "td")(266, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](267, "input", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx.routes.languageSettings);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _common_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SettingsSidebarComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 77716:
/*!***********************************************************************************************************!*\
  !*** ./src/app/core-component/settings/website-settings/language-settings/language-settings.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LanguageSettingsComponent: () => (/* binding */ LanguageSettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 77697);
/* harmony import */ var src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/core.index */ 82351);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_service_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/data/data.service */ 67812);
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
const _c1 = (a0, a1) => ({
  "badge-linesuccess": a0,
  "badge-linedanger": a1
});
function LanguageSettingsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 7);
  }
}
function LanguageSettingsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 8);
  }
}
function LanguageSettingsComponent_For_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 25);
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
function LanguageSettingsComponent_For_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td")(2, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 54)(4, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td")(6, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td")(12, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "input", 58)(14, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "td")(20, "div", 60)(21, "div", 61)(22, "div", 62)(23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "td")(26, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "td", 64)(29, "div", 65)(30, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 68)(33, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "input", 70)(35, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Web");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "App");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", data_r2.img, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r2.language, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r2.code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r2.total, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r2.done, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r2.progress);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](9, _c1, data_r2.status === "Active", data_r2.status === "Inactive"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r2.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r2.routes.languageSettingsweb);
  }
}
class LanguageSettingsComponent {
  //** / pagination variables
  constructor(data, pagination, router, sidebar) {
    this.data = data;
    this.pagination = pagination;
    this.router = router;
    this.sidebar = sidebar;
    this.initChecked = false;
    this.routes = src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.routes;
    this.selectedValue1 = '';
    // pagination variables
    this.tableData = [];
    this.pageSize = 10;
    this.serialNumberArray = [];
    this.totalData = 0;
    this.showFilter = false;
    this.searchDataValue = '';
    this.isCollapsed = false;
    this.selectedList1 = [{
      value: 'Select Language'
    }, {
      value: 'English'
    }, {
      value: 'Arabic'
    }, {
      value: 'Chinese'
    }];
    this.data.getDataTable().subscribe(apiRes => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe(res => {
        if (this.router.url == this.routes.languageSettings) {
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
    this.data.getLanguageSetting().subscribe(apiRes => {
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
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
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
  static {
    this.ɵfac = function LanguageSettingsComponent_Factory(t) {
      return new (t || LanguageSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_service_data_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_2__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.SidebarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: LanguageSettingsComponent,
      selectors: [["app-language-settings"]],
      decls: 86,
      vars: 9,
      consts: [[1, "page-header", "settings-pg-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "feather", "icon-rotate-ccw", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "feather", "icon-chevron-up", "feather-chevron-up"], [1, "feather", "icon-chevron-down", "feather-chevron-down"], [1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "settings-page-wrap", "w-50"], [1, "setting-title"], [1, "page-header", "justify-content-end"], [1, "table-top-head", "me-auto"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf", "matTooltip", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel", "matTooltip", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Print", "matTooltip", "Print"], [1, "feather", "icon-printer", "feather-rotate-ccw"], [1, "page-btn", "d-flex", "align-items-center", "ms-0"], [1, "select-language"], ["placeholder", "Select Language", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], ["href", "javascript:void(0);", 1, "btn", "btn-added", "ms-3"], [1, "col-lg-12"], [1, "card", "table-list-card"], [1, "card-body"], [1, "table-top"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search...", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "search-path"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "btn", "btn-secondary"], [1, "feather", "icon-filter", "filter-icon"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew", 3, "matSortChange"], [1, "no-sort"], [1, "checkboxs"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "language"], ["mat-sort-header", "code"], ["mat-sort-header", "rtl"], ["mat-sort-header", "total"], ["mat-sort-header", "done"], ["mat-sort-header", "progress"], ["mat-sort-header", "status"], ["type", "checkbox"], [1, "language-name", "d-flex", "align-items-center"], ["alt", "", 1, "me-2", 3, "src"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], ["type", "checkbox", "id", "user1", "checked", "", 1, "check"], ["for", "user1", 1, "checktoggle"], [1, "position-relative"], [1, "progress", "attendance", "language-progress"], ["role", "progressbar", 1, "progress-bar", "progress-bar-warning"], [1, "badge", 3, "ngClass"], [1, "action-table-data"], [1, "edit-delete-action", "language-action"], ["href", "javascript:void(0);", 1, "me-2", "language-import"], [1, "feather", "icon-download", "feather-download"], [1, "custom-control", "custom-checkbox"], [1, "checkboxs", "ps-4", "mb-0", "pb-0", "line-height-1"], ["type", "checkbox", "checked", ""], [1, "btn", "btn-secondary", "me-2", 3, "routerLink"], ["href", "javascript:void(0);", 1, "btn", "btn-secondary", "me-2"], ["href", "javascript:void(0);", 1, "confirm-text", "p-0"], [1, "feather", "icon-trash-2", "feather-trash-2"]],
      template: function LanguageSettingsComponent_Template(rf, ctx) {
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
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LanguageSettingsComponent_Template_a_click_12_listener() {
            return ctx.toggleCollapse();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, LanguageSettingsComponent_Conditional_13_Template, 1, 0, "i", 7)(14, LanguageSettingsComponent_Conditional_14_Template, 1, 0, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 9)(16, "div", 10)(17, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "app-settings-sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 12)(20, "div", 13)(21, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Language");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 14)(24, "ul", 15)(25, "li")(26, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "img", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "li")(29, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "img", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "li")(32, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 22)(35, "div", 23)(36, "mat-select", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function LanguageSettingsComponent_Template_mat_select_ngModelChange_36_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.selectedValue1, $event) || (ctx.selectedValue1 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](37, LanguageSettingsComponent_For_38_Template, 2, 2, "mat-option", 25, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Add Translation");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 9)(42, "div", 27)(43, "div", 28)(44, "div", 29)(45, "div", 30)(46, "div", 31)(47, "div", 32)(48, "a", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](49, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 35)(51, "label")(52, "input", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function LanguageSettingsComponent_Template_input_ngModelChange_52_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LanguageSettingsComponent_Template_input_ngModelChange_52_listener() {
            return ctx.searchData(ctx.searchDataValue);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 37)(54, "div", 38)(55, "a", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](56, "i", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, " Import Sample ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 41)(59, "table", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("matSortChange", function LanguageSettingsComponent_Template_table_matSortChange_59_listener($event) {
            return ctx.sortData($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "thead")(61, "tr")(62, "th", 43)(63, "label", 44)(64, "input", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function LanguageSettingsComponent_Template_input_ngModelChange_64_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.initChecked, $event) || (ctx.initChecked = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](65, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "th", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "Language");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "th", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69, "Code");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "th", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "RTL");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "th", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, "Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "th", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "Done");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "th", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, "Progress");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "th", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "th", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](83, LanguageSettingsComponent_For_84_Template, 44, 12, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](85, "app-custom-pagination");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](13, !ctx.isCollapsed ? 13 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](14, ctx.isCollapsed ? 14 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](7, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.selectedList1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.searchDataValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](8, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.initChecked);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.tableData);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSortHeader, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_3__.CustomPaginationComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltip, _common_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_4__.SettingsSidebarComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 39472:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/core-component/settings/website-settings/localization-settings/localization-settings.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalizationSettingsComponent: () => (/* binding */ LocalizationSettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ 74879);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/core.index */ 82351);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/chips */ 12772);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _common_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/settings-sidebar/settings-sidebar.component */ 42362);











const _c0 = () => ({
  standalone: true
});
function LocalizationSettingsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 8);
  }
}
function LocalizationSettingsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 9);
  }
}
function LocalizationSettingsComponent_For_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", data_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data_r2.value, " ");
  }
}
function LocalizationSettingsComponent_For_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", data_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data_r3.value, " ");
  }
}
function LocalizationSettingsComponent_For_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", data_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data_r4.value, " ");
  }
}
function LocalizationSettingsComponent_For_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", data_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data_r5.value, " ");
  }
}
function LocalizationSettingsComponent_For_102_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", data_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data_r6.value, " ");
  }
}
function LocalizationSettingsComponent_For_114_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", data_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data_r7.value, " ");
  }
}
function LocalizationSettingsComponent_For_133_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", data_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data_r8.value, " ");
  }
}
function LocalizationSettingsComponent_For_145_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", data_r9.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data_r9.value, " ");
  }
}
function LocalizationSettingsComponent_For_157_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", data_r10.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data_r10.value, " ");
  }
}
function LocalizationSettingsComponent_For_169_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", data_r11.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data_r11.value, " ");
  }
}
function LocalizationSettingsComponent_For_181_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", data_r12.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data_r12.value, " ");
  }
}
function LocalizationSettingsComponent_For_200_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", data_r13.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data_r13.value, " ");
  }
}
function LocalizationSettingsComponent_For_222_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-chip-row", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("removed", function LocalizationSettingsComponent_For_222_Template_mat_chip_row_removed_0_listener() {
      const fruit_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14).$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.remove(fruit_r15));
    })("edited", function LocalizationSettingsComponent_For_222_Template_mat_chip_row_edited_0_listener($event) {
      const fruit_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14).$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.edit(fruit_r15, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 57)(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const fruit_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("editable", true)("aria-description", "press enter to edit " + fruit_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", fruit_r15.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "remove " + fruit_r15.name);
  }
}
class LocalizationSettingsComponent {
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  constructor(sidebar) {
    this.sidebar = sidebar;
    this.selectedValue1 = '';
    this.selectedValue2 = '';
    this.selectedValue3 = '';
    this.selectedValue4 = '';
    this.selectedValue5 = '';
    this.selectedValue6 = '';
    this.selectedValue7 = '';
    this.selectedValue8 = '';
    this.selectedValue9 = '';
    this.selectedValue10 = '';
    this.selectedValue11 = '';
    this.selectedValue12 = '';
    this.selectedList1 = [{
      value: 'English'
    }, {
      value: 'Spanish'
    }];
    this.selectedList2 = [{
      value: 'UTC 5:30'
    }, {
      value: '(UTC+11:00) INR'
    }];
    this.selectedList3 = [{
      value: '22 Jul 2023'
    }, {
      value: 'Jul 22 2023'
    }];
    this.selectedList4 = [{
      value: '12 Hours'
    }, {
      value: '24 Hours'
    }];
    this.selectedList5 = [{
      value: '2023'
    }, {
      value: '2022'
    }];
    this.selectedList6 = [{
      value: 'January'
    }, {
      value: 'February'
    }, {
      value: 'March'
    }];
    this.selectedList7 = [{
      value: 'United Stated of America'
    }, {
      value: 'India'
    }];
    this.selectedList8 = [{
      value: '$'
    }, {
      value: '€'
    }, {
      value: '¥'
    }];
    this.selectedList9 = [{
      value: '$100'
    }, {
      value: '$400'
    }];
    this.selectedList10 = [{
      value: '.'
    }, {
      value: '.'
    }];
    this.selectedList11 = [{
      value: ','
    }, {
      value: ','
    }];
    this.selectedList12 = [{
      value: 'Allow All Countries'
    }, {
      value: 'Deny All Countries'
    }];
    this.isCollapsed = false;
    this.addOnBlur = true;
    this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__.ENTER, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__.COMMA];
    this.fruits = [{
      name: 'JPG'
    }, {
      name: 'GIF'
    }, {
      name: 'PNG'
    }];
  }
  add(event) {
    const value = (event.value || '').trim();
    if (value) {
      this.fruits.push({
        name: value
      });
    }
    event.chipInput?.clear();
  }
  remove(fruit) {
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
  edit(fruit, event) {
    const value = event.value.trim();
    if (!value) {
      this.remove(fruit);
      return;
    }
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
      this.fruits[index].name = value;
    }
  }
  static {
    this.ɵfac = function LocalizationSettingsComponent_Factory(t) {
      return new (t || LocalizationSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.SidebarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: LocalizationSettingsComponent,
      selectors: [["app-localization-settings"]],
      decls: 241,
      vars: 41,
      consts: [["chipGrid", ""], [1, "page-header", "settings-pg-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "feather", "icon-rotate-ccw", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "id", "collapse-header", "matTooltip", "Collapse", "matTooltipPosition", "above", 3, "click"], [1, "feather", "icon-chevron-up", "feather-chevron-up"], [1, "feather", "icon-chevron-down", "feather-chevron-down"], [1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "settings-page-wrap"], [1, "setting-title"], [1, "company-info", "company-images"], [1, "card-title-head"], [1, "feather", "icon-list"], [1, "localization-info"], [1, "row", "align-items-center"], [1, "col-sm-4"], [1, "setting-info"], [1, "localization-select"], ["placeholder", "English", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], ["type", "checkbox", "id", "user3", "checked", "", 1, "check"], ["for", "user3", 1, "checktoggle"], ["placeholder", "UTC 5:30", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["placeholder", "22 Jul 2023", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["placeholder", "12 Hours", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["placeholder", "2023", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["placeholder", "January", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "feather", "icon-credit-card"], ["placeholder", "United Stated of America", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["placeholder", "$", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["placeholder", "$100", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["placeholder", ".", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["placeholder", ",", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "feather", "icon-map"], ["placeholder", "Allow All Countries", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "company-images"], [1, "col-xl-6", "col-lg-8", "col-sm-4"], [1, "localization-select", "w-100"], [1, "input-blocks"], [1, "example-chip-list"], ["aria-label", "Enter fruits"], [3, "editable", "aria-description"], [3, "matChipInputTokenEnd", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [1, "setting-info", "mb-sm-0"], [1, "localization-select", "d-flex", "align-items-center", "mb-0"], ["type", "text", "value", "5000", 1, "form-control"], [1, "ms-2"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit"], [3, "removed", "edited", "editable", "aria-description"], ["matChipRemove", ""]],
      template: function LocalizationSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Manage your settings on portal");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul", 4)(8, "li")(9, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li")(12, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LocalizationSettingsComponent_Template_a_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.toggleCollapse());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, LocalizationSettingsComponent_Conditional_13_Template, 1, 0, "i", 8)(14, LocalizationSettingsComponent_Conditional_14_Template, 1, 0, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 10)(16, "div", 11)(17, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "app-settings-sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 13)(20, "form")(21, "div", 14)(22, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Localization");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 15)(25, "div", 16)(26, "h6")(27, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Basic Information");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 18)(31, "div", 19)(32, "div", 20)(33, "div", 21)(34, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Language");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Select Language of the Website");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 20)(39, "div", 22)(40, "mat-select", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function LocalizationSettingsComponent_Template_mat_select_ngModelChange_40_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.selectedValue1, $event) || (ctx.selectedValue1 = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](41, LocalizationSettingsComponent_For_42_Template, 2, 2, "mat-option", 24, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 19)(44, "div", 20)(45, "div", 21)(46, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Language Switcher");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "To display in all the pages");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 20)(51, "div", 22)(52, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "input", 26)(54, "label", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 19)(56, "div", 20)(57, "div", 21)(58, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Timezone");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Select Time zone in website");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 20)(63, "div", 22)(64, "mat-select", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function LocalizationSettingsComponent_Template_mat_select_ngModelChange_64_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.selectedValue2, $event) || (ctx.selectedValue2 = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](65, LocalizationSettingsComponent_For_66_Template, 2, 2, "mat-option", 24, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 19)(68, "div", 20)(69, "div", 21)(70, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Date format");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Select date format to display in website");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 20)(75, "div", 22)(76, "mat-select", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function LocalizationSettingsComponent_Template_mat_select_ngModelChange_76_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.selectedValue3, $event) || (ctx.selectedValue3 = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](77, LocalizationSettingsComponent_For_78_Template, 2, 2, "mat-option", 24, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 19)(80, "div", 20)(81, "div", 21)(82, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Time Format");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Select time format to display in website");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 20)(87, "div", 22)(88, "mat-select", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function LocalizationSettingsComponent_Template_mat_select_ngModelChange_88_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.selectedValue4, $event) || (ctx.selectedValue4 = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](89, LocalizationSettingsComponent_For_90_Template, 2, 2, "mat-option", 24, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 19)(92, "div", 20)(93, "div", 21)(94, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "Financial Year");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "Select year for finance ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 20)(99, "div", 22)(100, "mat-select", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function LocalizationSettingsComponent_Template_mat_select_ngModelChange_100_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.selectedValue5, $event) || (ctx.selectedValue5 = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](101, LocalizationSettingsComponent_For_102_Template, 2, 2, "mat-option", 24, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 19)(104, "div", 20)(105, "div", 21)(106, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "Starting Month");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "Select starting month to display ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 20)(111, "div", 22)(112, "mat-select", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function LocalizationSettingsComponent_Template_mat_select_ngModelChange_112_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.selectedValue6, $event) || (ctx.selectedValue6 = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](113, LocalizationSettingsComponent_For_114_Template, 2, 2, "mat-option", 24, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "div", 15)(116, "div", 16)(117, "h6")(118, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](119, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "Currency Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "div", 18)(122, "div", 19)(123, "div", 20)(124, "div", 21)(125, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, "Currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "Select currency ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "div", 20)(130, "div", 22)(131, "mat-select", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function LocalizationSettingsComponent_Template_mat_select_ngModelChange_131_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.selectedValue7, $event) || (ctx.selectedValue7 = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](132, LocalizationSettingsComponent_For_133_Template, 2, 2, "mat-option", 24, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "div", 19)(135, "div", 20)(136, "div", 21)(137, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](138, "Currency Symbol");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](140, "Select currency symbol");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "div", 20)(142, "div", 22)(143, "mat-select", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function LocalizationSettingsComponent_Template_mat_select_ngModelChange_143_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.selectedValue8, $event) || (ctx.selectedValue8 = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](144, LocalizationSettingsComponent_For_145_Template, 2, 2, "mat-option", 24, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "div", 19)(147, "div", 20)(148, "div", 21)(149, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](150, "Currency Position");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](152, "Select currency position");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "div", 20)(154, "div", 22)(155, "mat-select", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function LocalizationSettingsComponent_Template_mat_select_ngModelChange_155_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.selectedValue9, $event) || (ctx.selectedValue9 = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](156, LocalizationSettingsComponent_For_157_Template, 2, 2, "mat-option", 24, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "div", 19)(159, "div", 20)(160, "div", 21)(161, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](162, "Decimal Separator");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](164, "Select decimal");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "div", 20)(166, "div", 22)(167, "mat-select", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function LocalizationSettingsComponent_Template_mat_select_ngModelChange_167_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.selectedValue10, $event) || (ctx.selectedValue10 = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](168, LocalizationSettingsComponent_For_169_Template, 2, 2, "mat-option", 24, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "div", 19)(171, "div", 20)(172, "div", 21)(173, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](174, "Thousand Separator");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](175, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](176, "Select thousand");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](177, "div", 20)(178, "div", 22)(179, "mat-select", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function LocalizationSettingsComponent_Template_mat_select_ngModelChange_179_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.selectedValue11, $event) || (ctx.selectedValue11 = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](180, LocalizationSettingsComponent_For_181_Template, 2, 2, "mat-option", 24, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "div", 15)(183, "div", 16)(184, "h6")(185, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](186, "i", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](187, "Country Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "div", 18)(189, "div", 19)(190, "div", 20)(191, "div", 21)(192, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](193, "Countries Restriction");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](194, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](195, "Select country ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](196, "div", 20)(197, "div", 22)(198, "mat-select", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function LocalizationSettingsComponent_Template_mat_select_ngModelChange_198_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.selectedValue12, $event) || (ctx.selectedValue12 = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](199, LocalizationSettingsComponent_For_200_Template, 2, 2, "mat-option", 24, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](201, "div", 41)(202, "div", 16)(203, "h6")(204, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](205, "i", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](206, "File Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "div", 18)(208, "div", 19)(209, "div", 20)(210, "div", 21)(211, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](212, "Allowed Files");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](213, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](214, "Select files ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](215, "div", 42)(216, "div", 43)(217, "div", 44)(218, "mat-form-field", 45)(219, "mat-chip-grid", 46, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](221, LocalizationSettingsComponent_For_222_Template, 5, 4, "mat-chip-row", 47, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](223, "input", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("matChipInputTokenEnd", function LocalizationSettingsComponent_Template_input_matChipInputTokenEnd_223_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.add($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](224, "div", 19)(225, "div", 20)(226, "div", 49)(227, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](228, "Max File Size");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](229, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](230, "File size ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](231, "div", 20)(232, "div", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](233, "input", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](234, "span", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](235, " MB");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](236, "div", 53)(237, "button", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](238, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](239, "button", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](240, "Save Changes");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          const chipGrid_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](220);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](13, !ctx.isCollapsed ? 13 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](14, ctx.isCollapsed ? 14 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](29, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx.selectedList1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](30, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx.selectedList2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](31, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx.selectedList3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](32, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx.selectedList4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](33, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx.selectedList5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](34, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx.selectedList6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](35, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx.selectedList7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](36, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx.selectedList8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](37, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx.selectedList9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](38, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx.selectedList10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](39, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx.selectedList11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](40, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx.selectedList12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx.fruits);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matChipInputFor", chipGrid_r17)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes)("matChipInputAddOnBlur", ctx.addOnBlur);
        }
      },
      dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__.MatChipGrid, _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__.MatChipInput, _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__.MatChipRemove, _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__.MatChipRow, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltip, _common_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SettingsSidebarComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 79412:
/*!*********************************************************************************************!*\
  !*** ./src/app/core-component/settings/website-settings/preference/preference.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreferenceComponent: () => (/* binding */ PreferenceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_service_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/service/sidebar/sidebar.service */ 79950);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _common_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/settings-sidebar/settings-sidebar.component */ 42362);




function PreferenceComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 7);
  }
}
function PreferenceComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 8);
  }
}
class PreferenceComponent {
  constructor(sidebar) {
    this.sidebar = sidebar;
    this.isCollapsed = false;
  }
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  static {
    this.ɵfac = function PreferenceComponent_Factory(t) {
      return new (t || PreferenceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_service_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_0__.SidebarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: PreferenceComponent,
      selectors: [["app-preference"]],
      decls: 145,
      vars: 2,
      consts: [[1, "page-header", "settings-pg-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "feather", "icon-rotate-ccw", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "feather", "icon-chevron-up", "feather-chevron-up"], [1, "feather", "icon-chevron-down", "feather-chevron-down"], [1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "settings-page-wrap"], [1, "setting-title"], [1, "col-xl-4", "col-lg-6", "col-md-4", "col-sm-6"], [1, "connected-app-card"], [1, "security-type"], [1, "security-title"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center", "ms-2"], ["type", "checkbox", "id", "user1", "checked", "", 1, "check"], ["for", "user1", 1, "checktoggle"], ["type", "checkbox", "id", "user2", "checked", "", 1, "check"], ["for", "user2", 1, "checktoggle"], ["type", "checkbox", "id", "user3", "checked", "", 1, "check"], ["for", "user3", 1, "checktoggle"], ["type", "checkbox", "id", "user4", "checked", "", 1, "check"], ["for", "user4", 1, "checktoggle"], ["type", "checkbox", "id", "user5", "checked", "", 1, "check"], ["for", "user5", 1, "checktoggle"], ["type", "checkbox", "id", "user6", "checked", "", 1, "check"], ["for", "user6", 1, "checktoggle"], ["type", "checkbox", "id", "user7", "checked", "", 1, "check"], ["for", "user7", 1, "checktoggle"], ["type", "checkbox", "id", "user8", "checked", "", 1, "check"], ["for", "user8", 1, "checktoggle"], ["type", "checkbox", "id", "user9", "checked", "", 1, "check"], ["for", "user9", 1, "checktoggle"], ["type", "checkbox", "id", "user10", "checked", "", 1, "check"], ["for", "user10", 1, "checktoggle"], ["type", "checkbox", "id", "user11", "checked", "", 1, "check"], ["for", "user11", 1, "checktoggle"]],
      template: function PreferenceComponent_Template(rf, ctx) {
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
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PreferenceComponent_Template_a_click_12_listener() {
            return ctx.toggleCollapse();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, PreferenceComponent_Conditional_13_Template, 1, 0, "i", 7)(14, PreferenceComponent_Conditional_14_Template, 1, 0, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9)(16, "div", 10)(17, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "app-settings-sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "div", 13)(21, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Preference");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 9)(24, "div", 14)(25, "div", 15)(26, "ul")(27, "li")(28, "div", 16)(29, "div", 17)(30, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Maintenance Mode");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "input", 19)(34, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 14)(36, "div", 15)(37, "ul")(38, "li")(39, "div", 16)(40, "div", 17)(41, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Copoun");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "input", 21)(45, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 14)(47, "div", 15)(48, "ul")(49, "li")(50, "div", 16)(51, "div", 17)(52, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Offers");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "input", 23)(56, "label", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 14)(58, "div", 15)(59, "ul")(60, "li")(61, "div", 16)(62, "div", 17)(63, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "MultiLanguage");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "input", 25)(67, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 14)(69, "div", 15)(70, "ul")(71, "li")(72, "div", 16)(73, "div", 17)(74, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Multicurrency");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "input", 27)(78, "label", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 14)(80, "div", 15)(81, "ul")(82, "li")(83, "div", 16)(84, "div", 17)(85, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "SMS");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](88, "input", 29)(89, "label", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 14)(91, "div", 15)(92, "ul")(93, "li")(94, "div", 16)(95, "div", 17)(96, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "Stores");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "input", 31)(100, "label", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "div", 14)(102, "div", 15)(103, "ul")(104, "li")(105, "div", 16)(106, "div", 17)(107, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "Warehouses");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](110, "input", 33)(111, "label", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div", 14)(113, "div", 15)(114, "ul")(115, "li")(116, "div", 16)(117, "div", 17)(118, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "Barcode");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](121, "input", 35)(122, "label", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "div", 14)(124, "div", 15)(125, "ul")(126, "li")(127, "div", 16)(128, "div", 17)(129, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](130, "QR Code");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](132, "input", 37)(133, "label", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "div", 14)(135, "div", 15)(136, "ul")(137, "li")(138, "div", 16)(139, "div", 17)(140, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "HRMS");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](143, "input", 39)(144, "label", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](13, !ctx.isCollapsed ? 13 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](14, ctx.isCollapsed ? 14 : -1);
        }
      },
      dependencies: [_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__.MatTooltip, _common_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SettingsSidebarComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 39230:
/*!*****************************************************************************************!*\
  !*** ./src/app/core-component/settings/website-settings/prefixes/prefixes.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrefixesComponent: () => (/* binding */ PrefixesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_service_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/service/sidebar/sidebar.service */ 79950);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _common_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/settings-sidebar/settings-sidebar.component */ 42362);





function PrefixesComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 7);
  }
}
function PrefixesComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 8);
  }
}
class PrefixesComponent {
  constructor(sidebar) {
    this.sidebar = sidebar;
    this.isCollapsed = false;
    this.filter = false;
  }
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  openFilter() {
    this.filter = !this.filter;
  }
  static {
    this.ɵfac = function PrefixesComponent_Factory(t) {
      return new (t || PrefixesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_service_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_0__.SidebarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: PrefixesComponent,
      selectors: [["app-prefixes"]],
      decls: 106,
      vars: 2,
      consts: [[1, "page-header", "settings-pg-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "feather", "icon-rotate-ccw", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "feather", "icon-chevron-up", "feather-chevron-up"], [1, "feather", "icon-chevron-down", "feather-chevron-down"], [1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "settings-page-wrap"], [1, "setting-title"], [1, "col-xl-3", "col-lg-6", "col-md-4", "col-sm-6"], [1, "mb-3"], [1, "form-label"], ["type", "text", "placeholder", "SKU -", 1, "form-control"], ["type", "text", "placeholder", "SUP -", 1, "form-control"], ["type", "text", "placeholder", "PU -", 1, "form-control"], ["type", "text", "placeholder", "PR -", 1, "form-control"], ["type", "text", "placeholder", "SA -", 1, "form-control"], ["type", "text", "placeholder", "SR -", 1, "form-control"], ["type", "text", "placeholder", "CT -", 1, "form-control"], ["type", "text", "placeholder", "EX -", 1, "form-control"], ["type", "text", "placeholder", "ST -", 1, "form-control"], ["type", "text", "placeholder", "SO -", 1, "form-control"], ["type", "text", "placeholder", "PINV -", 1, "form-control"], ["type", "text", "placeholder", "EST -", 1, "form-control"], ["type", "text", "placeholder", "TRN -", 1, "form-control"], ["type", "text", "placeholder", "EMP -", 1, "form-control"], [1, "prefix-settings"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit"]],
      template: function PrefixesComponent_Template(rf, ctx) {
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
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PrefixesComponent_Template_a_click_12_listener() {
            return ctx.toggleCollapse();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, PrefixesComponent_Conditional_13_Template, 1, 0, "i", 7)(14, PrefixesComponent_Conditional_14_Template, 1, 0, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9)(16, "div", 10)(17, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "app-settings-sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "form")(21, "div", 13)(22, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Prefixes");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 9)(25, "div", 14)(26, "div", 15)(27, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Product (SKU)");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 14)(31, "div", 15)(32, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Supplier");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 14)(36, "div", 15)(37, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Purchase");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 14)(41, "div", 15)(42, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Purchase Return");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 14)(46, "div", 15)(47, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Sales");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 14)(51, "div", 15)(52, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Sales Return");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 14)(56, "div", 15)(57, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Customer");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 14)(61, "div", 15)(62, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Expense");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 14)(66, "div", 15)(67, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Stock Transfer");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 14)(71, "div", 15)(72, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Stock Adjustmentt");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 14)(76, "div", 15)(77, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Sales Order");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 14)(81, "div", 15)(82, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "POS Invoice");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 14)(86, "div", 15)(87, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "Estimation");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](89, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 14)(91, "div", 15)(92, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "Transaction");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](94, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 14)(96, "div", 15)(97, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "Employee");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "input", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 31)(101, "div", 32)(102, "button", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "button", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "Save Changes");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
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

/***/ 980:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/core-component/settings/website-settings/social-authentication/social-authentication.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SocialAuthenticationComponent: () => (/* binding */ SocialAuthenticationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_service_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/service/sidebar/sidebar.service */ 79950);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _common_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/settings-sidebar/settings-sidebar.component */ 42362);





function SocialAuthenticationComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 7);
  }
}
function SocialAuthenticationComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 8);
  }
}
class SocialAuthenticationComponent {
  constructor(sidebar) {
    this.sidebar = sidebar;
    this.isCollapsed = false;
  }
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  static {
    this.ɵfac = function SocialAuthenticationComponent_Factory(t) {
      return new (t || SocialAuthenticationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_service_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_0__.SidebarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: SocialAuthenticationComponent,
      selectors: [["app-social-authentication"]],
      decls: 290,
      vars: 2,
      consts: [[1, "page-header", "settings-pg-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "feather", "icon-rotate-ccw", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "feather", "icon-chevron-up", "feather-chevron-up"], [1, "feather", "icon-chevron-down", "feather-chevron-down"], [1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "settings-page-wrap"], [1, "setting-title"], [1, "row", "social-authent-settings"], [1, "col-xxl-4", "col-xl-6", "col-lg-12", "col-md-6", "d-flex"], [1, "connected-app-card", "d-flex", "w-100"], [1, "w-100"], [1, "flex-column", "align-items-start"], [1, "d-flex", "align-items-center", "justify-content-between", "w-100"], [1, "security-type", "d-flex", "align-items-center"], [1, "system-app-icon"], ["src", "assets/img/icons/fb-icon.svg", "alt", ""], [1, "security-title"], [1, "connect-btn"], ["href", "javascript:void(0);"], [1, "integration-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#fb-connect"], [1, "feather", "icon-tool", "me-2"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center", "ms-2"], ["type", "checkbox", "id", "user1", "checked", "", 1, "check"], ["for", "user1", 1, "checktoggle"], ["src", "assets/img/icons/twitter-icon.svg", "alt", ""], [1, "connect-btn", "not-connect"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#twitter-connect"], ["type", "checkbox", "id", "user2", "checked", "", 1, "check"], ["for", "user2", 1, "checktoggle"], ["src", "assets/img/icons/google-icon.svg", "alt", ""], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#google-connect"], ["type", "checkbox", "id", "user3", "checked", "", 1, "check"], ["for", "user3", 1, "checktoggle"], ["src", "assets/img/icons/linkedin-icon.svg", "alt", ""], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#linkedin-connect"], ["type", "checkbox", "id", "user4", "checked", "", 1, "check"], ["for", "user4", 1, "checktoggle"], ["id", "fb-connect", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "custom-modal-two"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header", "border-0", "custom-modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body"], [1, "col-lg-12"], [1, "mb-3"], [1, "form-label"], ["type", "text", 1, "form-control"], [1, "mb-0"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit"], ["id", "twitter-connect", 1, "modal", "fade"], [1, "input-notify-info"], ["id", "google-connect", 1, "modal", "fade"], ["id", "linkedin-connect", 1, "modal", "fade"]],
      template: function SocialAuthenticationComponent_Template(rf, ctx) {
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
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SocialAuthenticationComponent_Template_a_click_12_listener() {
            return ctx.toggleCollapse();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, SocialAuthenticationComponent_Conditional_13_Template, 1, 0, "i", 7)(14, SocialAuthenticationComponent_Conditional_14_Template, 1, 0, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9)(16, "div", 10)(17, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "app-settings-sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "div", 13)(21, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "System Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14)(24, "div", 15)(25, "div", 16)(26, "ul", 17)(27, "li", 18)(28, "div", 19)(29, "div", 20)(30, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "img", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 23)(33, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Facebook");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 24)(36, "a", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Connected");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Connect with friends, family and other people you know.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "li")(41, "div", 26)(42, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "View Integration");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "input", 30)(47, "label", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 15)(49, "div", 16)(50, "ul", 17)(51, "li", 18)(52, "div", 19)(53, "div", 20)(54, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "img", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 23)(57, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Twitter");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 33)(60, "a", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Not connected");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Communicate and stay connected through the exchange of quick, frequent messages");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "li")(65, "div", 26)(66, "a", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Connect Now");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "input", 35)(71, "label", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 15)(73, "div", 16)(74, "ul", 17)(75, "li", 18)(76, "div", 19)(77, "div", 20)(78, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "img", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 23)(81, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Google");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 33)(84, "a", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Not connected");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Google has many special features to help you find exactly what you're looking for.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "li")(89, "div", 26)(90, "a", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "Connect Now");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](94, "input", 39)(95, "label", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 15)(97, "div", 16)(98, "ul", 17)(99, "li", 18)(100, "div", 19)(101, "div", 20)(102, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](103, "img", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 23)(105, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "Linkedin");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 24)(108, "a", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "Connected");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, "Network with people and professional organizations in your industry.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "li")(113, "div", 26)(114, "a", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](115, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "View Integration");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](118, "input", 43)(119, "label", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div", 45)(121, "div", 46)(122, "div", 47)(123, "div", 48)(124, "div", 49)(125, "div", 50)(126, "div", 2)(127, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "Facebook Login Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "button", 51)(130, "span", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "div", 53)(133, "form")(134, "div", 9)(135, "div", 54)(136, "div", 55)(137, "label", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](138, "App ID ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](140, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](141, "input", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "div", 54)(143, "div", 55)(144, "label", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](145, "App Secret ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](147, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](148, "input", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "div", 54)(150, "div", 58)(151, "label", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](152, "Login Redirect URL ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](154, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](155, "input", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "div", 59)(157, "button", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "button", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](160, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "div", 62)(162, "div", 46)(163, "div", 47)(164, "div", 48)(165, "div", 49)(166, "div", 50)(167, "div", 2)(168, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169, "Twitter Login Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "button", 51)(171, "span", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](172, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](173, "div", 53)(174, "form")(175, "div", 9)(176, "div", 54)(177, "div", 55)(178, "label", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](179, "Consumer Key (API Key) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](181, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](182, "input", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "p", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](184, "If you are not sure what is your APP ID, Please head over to ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](185, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](186, "Getting Started.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "div", 55)(188, "label", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](189, "Consumer Secret (Secret Key) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](190, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](191, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](192, "input", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](193, "div", 58)(194, "label", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](195, "Login Redirect URL ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](196, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](197, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](198, "input", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](199, "div", 59)(200, "button", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](201, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](202, "button", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](203, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](204, "div", 64)(205, "div", 46)(206, "div", 47)(207, "div", 48)(208, "div", 49)(209, "div", 50)(210, "div", 2)(211, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](212, "Google Login Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](213, "button", 51)(214, "span", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](215, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](216, "div", 53)(217, "form")(218, "div", 9)(219, "div", 54)(220, "div", 55)(221, "label", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](222, "Client ID ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](223, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](224, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](225, "input", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](226, "p", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](227, "If you are not sure what is your APP ID, Please head over to ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](228, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](229, "Getting Started.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](230, "div", 55)(231, "label", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](232, "Client Secret Key ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](233, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](234, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](235, "input", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](236, "div", 58)(237, "label", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](238, "Login Redirect URL ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](239, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](240, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](241, "input", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](242, "div", 59)(243, "button", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](244, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](245, "button", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](246, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](247, "div", 65)(248, "div", 46)(249, "div", 47)(250, "div", 48)(251, "div", 49)(252, "div", 50)(253, "div", 2)(254, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](255, "LinkedIn Login Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](256, "button", 51)(257, "span", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](258, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](259, "div", 53)(260, "form")(261, "div", 9)(262, "div", 54)(263, "div", 55)(264, "label", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](265, "Client ID ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](266, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](267, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](268, "input", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](269, "p", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](270, "If you are not sure what is your APP ID, Please head over to ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](271, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](272, "Getting Started.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](273, "div", 55)(274, "label", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](275, "Client Secret Key ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](276, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](277, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](278, "input", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](279, "div", 58)(280, "label", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](281, "Login Redirect URL ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](282, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](283, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](284, "input", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](285, "div", 59)(286, "button", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](287, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](288, "button", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](289, "Submit");
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

/***/ 38364:
/*!*******************************************************************************************************!*\
  !*** ./src/app/core-component/settings/website-settings/system-settings/system-settings.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SystemSettingsComponent: () => (/* binding */ SystemSettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_service_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/service/sidebar/sidebar.service */ 79950);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _common_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/settings-sidebar/settings-sidebar.component */ 42362);





function SystemSettingsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 7);
  }
}
function SystemSettingsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 8);
  }
}
class SystemSettingsComponent {
  constructor(sidebar) {
    this.sidebar = sidebar;
    this.isCollapsed = false;
    this.filter = false;
  }
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  openFilter() {
    this.filter = !this.filter;
  }
  static {
    this.ɵfac = function SystemSettingsComponent_Factory(t) {
      return new (t || SystemSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_service_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_0__.SidebarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: SystemSettingsComponent,
      selectors: [["app-system-settings"]],
      decls: 223,
      vars: 2,
      consts: [[1, "page-header", "settings-pg-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "feather", "icon-rotate-ccw", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "feather", "icon-chevron-up", "feather-chevron-up"], [1, "feather", "icon-chevron-down", "feather-chevron-down"], [1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "settings-page-wrap"], [1, "setting-title"], [1, "col-xxl-4", "col-xl-6", "col-lg-12", "col-md-6", "d-flex"], [1, "connected-app-card", "d-flex", "w-100"], [1, "w-100"], [1, "flex-column", "align-items-start"], [1, "d-flex", "align-items-center", "justify-content-between", "w-100"], [1, "security-type", "d-flex", "align-items-center"], [1, "system-app-icon"], ["src", "assets/img/icons/app-icon-07.svg", "alt", ""], [1, "security-title"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center", "ms-2"], ["type", "checkbox", "id", "user1", "checked", "", 1, "check"], ["for", "user1", 1, "checktoggle"], [1, "integration-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#google-captcha"], [1, "feather", "icon-tool", "me-2"], ["src", "assets/img/icons/app-icon-08.svg", "alt", ""], ["type", "checkbox", "id", "user2", "checked", "", 1, "check"], ["for", "user2", 1, "checktoggle"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#google-analytics"], ["src", "assets/img/icons/app-icon-09.svg", "alt", ""], ["type", "checkbox", "id", "user3", "checked", "", 1, "check"], ["for", "user3", 1, "checktoggle"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#google-adsense"], ["src", "assets/img/icons/app-icon-10.svg", "alt", ""], ["type", "checkbox", "id", "user4", "checked", "", 1, "check"], ["for", "user4", 1, "checktoggle"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#google-map"], ["id", "google-captcha", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "custom-modal-two"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header", "border-0", "custom-modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body"], [1, "col-lg-12"], [1, "mb-3"], [1, "form-label"], ["type", "text", 1, "form-control"], [1, "mb-0"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit"], ["id", "google-analytics", 1, "modal", "fade"], ["id", "google-adsense", 1, "modal", "fade"], ["id", "google-map", 1, "modal", "fade"]],
      template: function SystemSettingsComponent_Template(rf, ctx) {
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
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SystemSettingsComponent_Template_a_click_12_listener() {
            return ctx.toggleCollapse();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, SystemSettingsComponent_Conditional_13_Template, 1, 0, "i", 7)(14, SystemSettingsComponent_Conditional_14_Template, 1, 0, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9)(16, "div", 10)(17, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "app-settings-sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "div", 13)(21, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "System Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 9)(24, "div", 14)(25, "div", 15)(26, "ul", 16)(27, "li", 17)(28, "div", 18)(29, "div", 19)(30, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "img", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 22)(33, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Google Captcha");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "input", 24)(37, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Captcha helps protect you from spam and password decryption");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "li")(41, "div", 26)(42, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "View Integration");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 14)(46, "div", 15)(47, "ul", 16)(48, "li", 17)(49, "div", 18)(50, "div", 19)(51, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "img", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 22)(54, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Google Analytics");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "input", 30)(58, "label", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Provides statistics and basic analytical tools for SEO and marketing purposes.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "li")(62, "div", 26)(63, "a", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "View Integration");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 14)(67, "div", 15)(68, "ul", 16)(69, "li", 17)(70, "div", 18)(71, "div", 19)(72, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "img", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 22)(75, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "Google Adsense Code");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](78, "input", 34)(79, "label", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "Provides a way for publishers to earn money from their online content.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "li")(83, "div", 26)(84, "a", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "View Integration");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 14)(88, "div", 15)(89, "ul", 16)(90, "li", 17)(91, "div", 18)(92, "div", 19)(93, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](94, "img", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 22)(96, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "Google Map");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "input", 38)(100, "label", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "Provides detailed information about geographical regions and sites worldwide.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "li")(104, "div", 26)(105, "a", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](106, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "View Integration");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "div", 41)(109, "div", 42)(110, "div", 43)(111, "div", 44)(112, "div", 45)(113, "div", 46)(114, "div", 2)(115, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "Configure Google Captcha");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "button", 47)(118, "span", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div", 49)(121, "form")(122, "div", 9)(123, "div", 50)(124, "div", 51)(125, "label", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, "Google Rechaptcha Site Key ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](129, "input", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "div", 50)(131, "div", 54)(132, "label", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, "Google Rechaptcha Secret Key ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](135, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](136, "input", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "div", 55)(138, "button", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "button", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "div", 58)(143, "div", 42)(144, "div", 43)(145, "div", 44)(146, "div", 45)(147, "div", 46)(148, "div", 2)(149, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](150, "Configure Google Analytics");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "button", 47)(152, "span", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "div", 49)(155, "form")(156, "div", 9)(157, "div", 50)(158, "div", 54)(159, "label", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](160, "Google Analytics ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](162, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](163, "input", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "div", 55)(165, "button", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](166, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "button", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](168, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "div", 59)(170, "div", 42)(171, "div", 43)(172, "div", 44)(173, "div", 45)(174, "div", 46)(175, "div", 2)(176, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](177, "Configure Google Adsense Code");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "button", 47)(179, "span", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](180, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](181, "div", 49)(182, "form")(183, "div", 9)(184, "div", 50)(185, "div", 54)(186, "label", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](187, "Google Adsense Code ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](189, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](190, "input", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](191, "div", 55)(192, "button", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](193, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](194, "button", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](195, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](196, "div", 60)(197, "div", 42)(198, "div", 43)(199, "div", 44)(200, "div", 45)(201, "div", 46)(202, "div", 2)(203, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](204, "Configure Google Map ID");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](205, "button", 47)(206, "span", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](207, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](208, "div", 49)(209, "form")(210, "div", 9)(211, "div", 50)(212, "div", 54)(213, "label", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](214, "Enter Map ID ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](215, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](216, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](217, "input", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](218, "div", 55)(219, "button", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](220, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](221, "button", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](222, "Submit");
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

/***/ 91570:
/*!*********************************************************************************************!*\
  !*** ./src/app/core-component/settings/website-settings/website-settings-routing.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebsiteSettingsRoutingModule: () => (/* binding */ WebsiteSettingsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _website_settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website-settings.component */ 98700);
/* harmony import */ var _company_settings_company_settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company-settings/company-settings.component */ 88988);
/* harmony import */ var _language_settings_language_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language-settings/language-settings.component */ 77716);
/* harmony import */ var _language_settings_web_language_settings_web_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./language-settings-web/language-settings-web.component */ 54172);
/* harmony import */ var _appearance_appearance_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./appearance/appearance.component */ 8062);
/* harmony import */ var _system_settings_system_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./system-settings/system-settings.component */ 38364);
/* harmony import */ var _prefixes_prefixes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prefixes/prefixes.component */ 39230);
/* harmony import */ var _preference_preference_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./preference/preference.component */ 79412);
/* harmony import */ var _localization_settings_localization_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./localization-settings/localization-settings.component */ 39472);
/* harmony import */ var _social_authentication_social_authentication_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./social-authentication/social-authentication.component */ 980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);













const routes = [{
  path: '',
  component: _website_settings_component__WEBPACK_IMPORTED_MODULE_0__.WebsiteSettingsComponent,
  children: [{
    path: 'company-settings',
    component: _company_settings_company_settings_component__WEBPACK_IMPORTED_MODULE_1__.CompanySettingsComponent
  }, {
    path: 'language-settings',
    component: _language_settings_language_settings_component__WEBPACK_IMPORTED_MODULE_2__.LanguageSettingsComponent
  }, {
    path: 'language-settings-web',
    component: _language_settings_web_language_settings_web_component__WEBPACK_IMPORTED_MODULE_3__.LanguageSettingsWebComponent
  }, {
    path: 'appearance',
    component: _appearance_appearance_component__WEBPACK_IMPORTED_MODULE_4__.AppearanceComponent
  }, {
    path: 'system-settings',
    component: _system_settings_system_settings_component__WEBPACK_IMPORTED_MODULE_5__.SystemSettingsComponent
  }, {
    path: 'prefixes',
    component: _prefixes_prefixes_component__WEBPACK_IMPORTED_MODULE_6__.PrefixesComponent
  }, {
    path: 'preference',
    component: _preference_preference_component__WEBPACK_IMPORTED_MODULE_7__.PreferenceComponent
  }, {
    path: 'localization-settings',
    component: _localization_settings_localization_settings_component__WEBPACK_IMPORTED_MODULE_8__.LocalizationSettingsComponent
  }, {
    path: 'social-authentication',
    component: _social_authentication_social_authentication_component__WEBPACK_IMPORTED_MODULE_9__.SocialAuthenticationComponent
  }]
}];
class WebsiteSettingsRoutingModule {
  static {
    this.ɵfac = function WebsiteSettingsRoutingModule_Factory(t) {
      return new (t || WebsiteSettingsRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
      type: WebsiteSettingsRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](WebsiteSettingsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
  });
})();

/***/ }),

/***/ 98700:
/*!****************************************************************************************!*\
  !*** ./src/app/core-component/settings/website-settings/website-settings.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebsiteSettingsComponent: () => (/* binding */ WebsiteSettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);


class WebsiteSettingsComponent {
  static {
    this.ɵfac = function WebsiteSettingsComponent_Factory(t) {
      return new (t || WebsiteSettingsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WebsiteSettingsComponent,
      selectors: [["app-website-settings"]],
      decls: 1,
      vars: 0,
      template: function WebsiteSettingsComponent_Template(rf, ctx) {
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

/***/ 69755:
/*!*************************************************************************************!*\
  !*** ./src/app/core-component/settings/website-settings/website-settings.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebsiteSettingsModule: () => (/* binding */ WebsiteSettingsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _website_settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website-settings-routing.module */ 91570);
/* harmony import */ var _website_settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./website-settings.component */ 98700);
/* harmony import */ var _company_settings_company_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company-settings/company-settings.component */ 88988);
/* harmony import */ var _language_settings_web_language_settings_web_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./language-settings-web/language-settings-web.component */ 54172);
/* harmony import */ var _language_settings_language_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./language-settings/language-settings.component */ 77716);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _appearance_appearance_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appearance/appearance.component */ 8062);
/* harmony import */ var _prefixes_prefixes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./prefixes/prefixes.component */ 39230);
/* harmony import */ var _localization_settings_localization_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./localization-settings/localization-settings.component */ 39472);
/* harmony import */ var _preference_preference_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./preference/preference.component */ 79412);
/* harmony import */ var _social_authentication_social_authentication_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./social-authentication/social-authentication.component */ 980);
/* harmony import */ var _system_settings_system_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./system-settings/system-settings.component */ 38364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37580);














class WebsiteSettingsModule {
  static {
    this.ɵfac = function WebsiteSettingsModule_Factory(t) {
      return new (t || WebsiteSettingsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
      type: WebsiteSettingsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _website_settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.WebsiteSettingsRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.sharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](WebsiteSettingsModule, {
    declarations: [_website_settings_component__WEBPACK_IMPORTED_MODULE_1__.WebsiteSettingsComponent, _company_settings_company_settings_component__WEBPACK_IMPORTED_MODULE_2__.CompanySettingsComponent, _language_settings_language_settings_component__WEBPACK_IMPORTED_MODULE_4__.LanguageSettingsComponent, _language_settings_web_language_settings_web_component__WEBPACK_IMPORTED_MODULE_3__.LanguageSettingsWebComponent, _appearance_appearance_component__WEBPACK_IMPORTED_MODULE_6__.AppearanceComponent, _prefixes_prefixes_component__WEBPACK_IMPORTED_MODULE_7__.PrefixesComponent, _localization_settings_localization_settings_component__WEBPACK_IMPORTED_MODULE_8__.LocalizationSettingsComponent, _preference_preference_component__WEBPACK_IMPORTED_MODULE_9__.PreferenceComponent, _social_authentication_social_authentication_component__WEBPACK_IMPORTED_MODULE_10__.SocialAuthenticationComponent, _system_settings_system_settings_component__WEBPACK_IMPORTED_MODULE_11__.SystemSettingsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _website_settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.WebsiteSettingsRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.sharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_settings_website-settings_website-settings_module_ts.js.map