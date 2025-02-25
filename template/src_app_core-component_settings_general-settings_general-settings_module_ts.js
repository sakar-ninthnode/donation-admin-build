"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_settings_general-settings_general-settings_module_ts"],{

/***/ 88313:
/*!*****************************************************************************************************!*\
  !*** ./src/app/core-component/settings/general-settings/connected-apps/connected-apps.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConnectedAppsComponent: () => (/* binding */ ConnectedAppsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/core.index */ 82351);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _common_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/settings-sidebar/settings-sidebar.component */ 42362);




function ConnectedAppsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 7);
  }
}
function ConnectedAppsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 8);
  }
}
class ConnectedAppsComponent {
  constructor(sidebar) {
    this.sidebar = sidebar;
    this.isCollapsed = false;
  }
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  static {
    this.ɵfac = function ConnectedAppsComponent_Factory(t) {
      return new (t || ConnectedAppsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.SidebarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ConnectedAppsComponent,
      selectors: [["app-connected-apps"]],
      decls: 126,
      vars: 2,
      consts: [[1, "page-header", "settings-pg-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "feather", "icon-rotate-ccw", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "feather", "icon-chevron-up", "feather-chevron-up"], [1, "feather", "icon-chevron-down", "feather-chevron-down"], [1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "settings-page-wrap"], [1, "setting-title"], [1, "col-xl-4", "col-lg-6", "col-md-4", "col-sm-6"], [1, "connected-app-card"], [1, "app-icon"], ["src", "assets/img/icons/app-icon-01.svg", "alt", ""], [1, "connect-btn"], ["href", "javascript:void(0);"], [1, "security-type"], [1, "security-title"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center", "ms-2"], ["type", "checkbox", "id", "user1", "checked", "", 1, "check"], ["for", "user1", 1, "checktoggle"], ["src", "assets/img/icons/app-icon-02.svg", "alt", ""], [1, "connect-btn", "not-connect"], ["type", "checkbox", "id", "user2", "checked", "", 1, "check"], ["for", "user2", 1, "checktoggle"], ["src", "assets/img/icons/app-icon-03.svg", "alt", ""], ["type", "checkbox", "id", "user3", "checked", "", 1, "check"], ["for", "user3", 1, "checktoggle"], ["src", "assets/img/icons/app-icon-04.svg", "alt", ""], ["type", "checkbox", "id", "user4", "checked", "", 1, "check"], ["for", "user4", 1, "checktoggle"], ["src", "assets/img/icons/app-icon-05.svg", "alt", ""], ["type", "checkbox", "id", "user5", "checked", "", 1, "check"], ["for", "user5", 1, "checktoggle"], ["src", "assets/img/icons/app-icon-06.svg", "alt", ""], ["type", "checkbox", "id", "user6", "checked", "", 1, "check"], ["for", "user6", 1, "checktoggle"]],
      template: function ConnectedAppsComponent_Template(rf, ctx) {
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
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConnectedAppsComponent_Template_a_click_12_listener() {
            return ctx.toggleCollapse();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ConnectedAppsComponent_Conditional_13_Template, 1, 0, "i", 7)(14, ConnectedAppsComponent_Conditional_14_Template, 1, 0, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9)(16, "div", 10)(17, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "app-settings-sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "div", 13)(21, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Connected Apps");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 9)(24, "div", 14)(25, "div", 15)(26, "ul")(27, "li")(28, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "img", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 18)(31, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Connected");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "li")(34, "div", 20)(35, "div", 21)(36, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Calendar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "input", 23)(40, "label", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 14)(42, "div", 15)(43, "ul")(44, "li")(45, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "img", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 26)(48, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Connect");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "li")(51, "div", 20)(52, "div", 21)(53, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Figma");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "input", 27)(57, "label", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 14)(59, "div", 15)(60, "ul")(61, "li")(62, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "img", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 18)(65, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Connected");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "li")(68, "div", 20)(69, "div", 21)(70, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Dropbox");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "input", 30)(74, "label", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 14)(76, "div", 15)(77, "ul")(78, "li")(79, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "img", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 26)(82, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Connect");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "li")(85, "div", 20)(86, "div", 21)(87, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "Slack");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](90, "input", 33)(91, "label", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 14)(93, "div", 15)(94, "ul")(95, "li")(96, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](97, "img", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 26)(99, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "Connect");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "li")(102, "div", 20)(103, "div", 21)(104, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "Github");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](107, "input", 36)(108, "label", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "div", 14)(110, "div", 15)(111, "ul")(112, "li")(113, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](114, "img", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "div", 18)(116, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, "Connected");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "li")(119, "div", 20)(120, "div", 21)(121, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, "Gmail");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](124, "input", 39)(125, "label", 40);
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

/***/ 5976:
/*!*********************************************************************************************!*\
  !*** ./src/app/core-component/settings/general-settings/general-settings-routing.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeneralSettingsRoutingModule: () => (/* binding */ GeneralSettingsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _general_settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general-settings.component */ 30214);
/* harmony import */ var _connected_apps_connected_apps_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connected-apps/connected-apps.component */ 88313);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/profile.component */ 53487);
/* harmony import */ var _security_settings_security_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./security-settings/security-settings.component */ 3111);
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notification/notification.component */ 25531);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);








const routes = [{
  path: '',
  component: _general_settings_component__WEBPACK_IMPORTED_MODULE_0__.GeneralSettingsComponent,
  children: [{
    path: 'connected-apps',
    component: _connected_apps_connected_apps_component__WEBPACK_IMPORTED_MODULE_1__.ConnectedAppsComponent
  }, {
    path: 'notification',
    component: _notification_notification_component__WEBPACK_IMPORTED_MODULE_4__.NotificationComponent
  }, {
    path: 'profile',
    component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__.ProfileComponent
  }, {
    path: 'security-settings',
    component: _security_settings_security_settings_component__WEBPACK_IMPORTED_MODULE_3__.SecuritySettingsComponent
  }]
}];
class GeneralSettingsRoutingModule {
  static {
    this.ɵfac = function GeneralSettingsRoutingModule_Factory(t) {
      return new (t || GeneralSettingsRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: GeneralSettingsRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](GeneralSettingsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 30214:
/*!****************************************************************************************!*\
  !*** ./src/app/core-component/settings/general-settings/general-settings.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeneralSettingsComponent: () => (/* binding */ GeneralSettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);


class GeneralSettingsComponent {
  static {
    this.ɵfac = function GeneralSettingsComponent_Factory(t) {
      return new (t || GeneralSettingsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GeneralSettingsComponent,
      selectors: [["app-general-settings"]],
      decls: 1,
      vars: 0,
      template: function GeneralSettingsComponent_Template(rf, ctx) {
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

/***/ 48553:
/*!*************************************************************************************!*\
  !*** ./src/app/core-component/settings/general-settings/general-settings.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeneralSettingsModule: () => (/* binding */ GeneralSettingsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _general_settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general-settings-routing.module */ 5976);
/* harmony import */ var _general_settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./general-settings.component */ 30214);
/* harmony import */ var _connected_apps_connected_apps_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connected-apps/connected-apps.component */ 88313);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ 53487);
/* harmony import */ var _security_settings_security_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./security-settings/security-settings.component */ 3111);
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification/notification.component */ 25531);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);









class GeneralSettingsModule {
  static {
    this.ɵfac = function GeneralSettingsModule_Factory(t) {
      return new (t || GeneralSettingsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
      type: GeneralSettingsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _general_settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.GeneralSettingsRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.sharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](GeneralSettingsModule, {
    declarations: [_general_settings_component__WEBPACK_IMPORTED_MODULE_1__.GeneralSettingsComponent, _connected_apps_connected_apps_component__WEBPACK_IMPORTED_MODULE_2__.ConnectedAppsComponent, _security_settings_security_settings_component__WEBPACK_IMPORTED_MODULE_4__.SecuritySettingsComponent, _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__.ProfileComponent, _notification_notification_component__WEBPACK_IMPORTED_MODULE_5__.NotificationComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _general_settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.GeneralSettingsRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.sharedModule]
  });
})();

/***/ }),

/***/ 25531:
/*!*************************************************************************************************!*\
  !*** ./src/app/core-component/settings/general-settings/notification/notification.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationComponent: () => (/* binding */ NotificationComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/core.index */ 82351);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _common_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/settings-sidebar/settings-sidebar.component */ 42362);






function NotificationComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 7);
  }
}
function NotificationComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 8);
  }
}
class NotificationComponent {
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  constructor(sidebar) {
    this.sidebar = sidebar;
    this.routes = src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.routes;
    this.isCollapsed = false;
  }
  static {
    this.ɵfac = function NotificationComponent_Factory(t) {
      return new (t || NotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.SidebarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: NotificationComponent,
      selectors: [["app-notification"]],
      decls: 165,
      vars: 3,
      consts: [[1, "page-header", "settings-pg-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "feather", "icon-rotate-ccw", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "feather", "icon-chevron-up", "feather-chevron-up"], [1, "feather", "icon-chevron-down", "feather-chevron-down"], [1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "settings-page-wrap"], [1, "setting-title"], [1, "security-settings"], [1, "security-type"], [1, "security-title"], [1, "status-toggle", "modal-status"], ["type", "checkbox", "id", "user1", "checked", "", 1, "check"], ["for", "user1", 1, "checktoggle"], ["type", "checkbox", "id", "user2", "checked", "", 1, "check"], ["for", "user2", 1, "checktoggle"], ["type", "checkbox", "id", "user3", "checked", "", 1, "check"], ["for", "user3", 1, "checktoggle"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center", "ms-2"], ["type", "checkbox", "id", "user4", "checked", "", 1, "check"], ["for", "user4", 1, "checktoggle"], [1, "table-responsive", "no-pagination"], [1, "table", "datanew"], [1, "custom-table-data"], ["type", "checkbox", "id", "users4", "checked", "", 1, "check"], ["for", "users4", 1, "checktoggle"], ["type", "checkbox", "id", "users5", "checked", "", 1, "check"], ["for", "users5", 1, "checktoggle"], ["type", "checkbox", "id", "users6", "checked", "", 1, "check"], ["for", "users6", 1, "checktoggle"], ["type", "checkbox", "id", "user5", "checked", "", 1, "check"], ["for", "user5", 1, "checktoggle"], ["type", "checkbox", "id", "user6", "checked", "", 1, "check"], ["for", "user6", 1, "checktoggle"], ["type", "checkbox", "id", "user7", "checked", "", 1, "check"], ["for", "user7", 1, "checktoggle"], ["type", "checkbox", "id", "user8", "checked", "", 1, "check"], ["for", "user8", 1, "checktoggle"], ["type", "checkbox", "id", "user9", "checked", "", 1, "check"], ["for", "user9", 1, "checktoggle"], ["type", "checkbox", "id", "user10", "checked", "", 1, "check"], ["for", "user10", 1, "checktoggle"], ["type", "checkbox", "id", "user11", "checked", "", 1, "check"], ["for", "user11", 1, "checktoggle"], ["type", "checkbox", "id", "user12", "checked", "", 1, "check"], ["for", "user12", 1, "checktoggle"], ["type", "checkbox", "id", "user13", "checked", "", 1, "check"], ["for", "user13", 1, "checktoggle"], ["type", "checkbox", "id", "user14", "checked", "", 1, "check"], ["for", "user14", 1, "checktoggle"], ["type", "checkbox", "id", "user15", "checked", "", 1, "check"], ["for", "user15", 1, "checktoggle"], ["type", "checkbox", "id", "user16", "checked", "", 1, "check"], ["for", "user16", 1, "checktoggle"], ["type", "checkbox", "id", "user17", "checked", "", 1, "check"], ["for", "user17", 1, "checktoggle"], ["type", "checkbox", "id", "user18", "checked", "", 1, "check"], ["for", "user18", 1, "checktoggle"], ["type", "checkbox", "id", "user19", "checked", "", 1, "check"], ["for", "user19", 1, "checktoggle"], [1, "text-end", "settings-bottom-btn"], ["href", "javascript:void(0);", 1, "btn", "btn-cancel", "me-2"], [1, "btn", "btn-submit", 3, "routerLink"]],
      template: function NotificationComponent_Template(rf, ctx) {
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
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotificationComponent_Template_a_click_12_listener() {
            return ctx.toggleCollapse();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, NotificationComponent_Conditional_13_Template, 1, 0, "i", 7)(14, NotificationComponent_Conditional_14_Template, 1, 0, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9)(16, "div", 10)(17, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "app-settings-sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "div", 13)(21, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Notification Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14)(24, "ul")(25, "li")(26, "div", 15)(27, "div", 16)(28, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Mobile Push Notifications");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 18)(32, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "li")(34, "div", 15)(35, "div", 16)(36, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Desktop Notifications");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "input", 20)(40, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "li")(42, "div", 15)(43, "div", 16)(44, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Email Notifications");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "input", 22)(48, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "li")(50, "div", 15)(51, "div", 16)(52, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "MSMS Notifications");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "input", 25)(56, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 27)(58, "table", 28)(59, "thead")(60, "tr")(61, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "General Notification");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Push");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "SMS");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "tbody", 29)(70, "tr")(71, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, " Legendary ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "td")(74, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "input", 30)(76, "label", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "td")(78, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "input", 32)(80, "label", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "td")(82, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "input", 34)(84, "label", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "tr")(86, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, " Transaction ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "td")(89, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](90, "input", 36)(91, "label", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "td")(93, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](94, "input", 38)(95, "label", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "td")(97, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](98, "input", 40)(99, "label", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "tr")(101, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, " Email Verification ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "td")(104, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](105, "input", 42)(106, "label", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "td")(108, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](109, "input", 44)(110, "label", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "td")(112, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](113, "input", 46)(114, "label", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "tr")(116, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, " OTP ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "td")(119, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](120, "input", 48)(121, "label", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "td")(123, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](124, "input", 50)(125, "label", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "td")(127, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](128, "input", 52)(129, "label", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "tr")(131, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](132, " Activity ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "td")(134, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](135, "input", 54)(136, "label", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "td")(138, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](139, "input", 56)(140, "label", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "td")(142, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](143, "input", 58)(144, "label", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "tr")(146, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](147, " Account ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "td")(149, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](150, "input", 60)(151, "label", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "td")(153, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](154, "input", 62)(155, "label", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "td")(157, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](158, "input", 64)(159, "label", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "div", 66)(161, "a", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](162, "Reset");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "a", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](164, "Save Changes");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](13, !ctx.isCollapsed ? 13 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](14, ctx.isCollapsed ? 14 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](149);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx.routes.generalSettings);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltip, _common_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SettingsSidebarComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 53487:
/*!***************************************************************************************!*\
  !*** ./src/app/core-component/settings/general-settings/profile/profile.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileComponent: () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/core.index */ 82351);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _common_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/settings-sidebar/settings-sidebar.component */ 42362);







function ProfileComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 7);
  }
}
function ProfileComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 8);
  }
}
class ProfileComponent {
  constructor(sidebar, router) {
    this.sidebar = sidebar;
    this.router = router;
    this.routes = src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.routes;
    this.isCollapsed = false;
  }
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  navigation() {
    this.router.navigate([src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.routes.generalSettings]);
  }
  static {
    this.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-profile"]],
      decls: 105,
      vars: 2,
      consts: [[1, "page-header", "settings-pg-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "feather", "icon-rotate-ccw", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "feather", "icon-chevron-up", "feather-chevron-up"], [1, "feather", "icon-chevron-down", "feather-chevron-down"], [1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "settings-page-wrap"], [1, "setting-title"], [1, "card-title-head"], [1, "feather", "icon-user", "feather-chevron-up"], [1, "profile-pic-upload"], [1, "profile-pic"], [1, "feather", "icon-plus-circle", "plus-down-add"], [1, "new-employee-field"], [1, "mb-0"], [1, "image-upload", "mb-0"], ["type", "file"], [1, "image-uploads"], [1, "col-md-4"], [1, "mb-3"], [1, "form-label"], ["type", "text", 1, "form-control"], ["type", "email", 1, "form-control"], [1, "feather", "icon-map-pin", "feather-chevron-up"], [1, "col-md-12"], [1, "col-xl-3", "col-lg-4", "col-md-3"], [1, "text-end", "settings-bottom-btn"], ["type", "button", 1, "btn", "btn-cancel", "me-2"], ["type", "button", 1, "btn", "btn-submit", 3, "click"]],
      template: function ProfileComponent_Template(rf, ctx) {
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
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileComponent_Template_a_click_12_listener() {
            return ctx.toggleCollapse();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ProfileComponent_Conditional_13_Template, 1, 0, "i", 7)(14, ProfileComponent_Conditional_14_Template, 1, 0, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9)(16, "div", 10)(17, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "app-settings-sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "form")(21, "div", 13)(22, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Profile Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 14)(25, "h6")(26, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Employee Information");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 16)(30, "div", 17)(31, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " Profile Photo");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 19)(35, "div", 20)(36, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 23)(39, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Change Image");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "For better preview recommended size is 450px x 450px. Max size 5MB.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 9)(44, "div", 24)(45, "div", 25)(46, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "First Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 24)(50, "div", 25)(51, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Last Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 24)(55, "div", 25)(56, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "User Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 24)(60, "div", 25)(61, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Phone Number");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 24)(65, "div", 25)(66, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 14)(70, "h6")(71, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "i", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Our Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 9)(75, "div", 30)(76, "div", 25)(77, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 31)(81, "div", 25)(82, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Country");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 31)(86, "div", 25)(87, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "State / Province");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](89, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 31)(91, "div", 25)(92, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "City");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](94, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 31)(96, "div", 25)(97, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "Postal Code");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 32)(101, "button", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "button", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_103_listener() {
            return ctx.navigation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "Save Changes");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](13, !ctx.isCollapsed ? 13 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](14, ctx.isCollapsed ? 14 : -1);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.MatTooltip, _common_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SettingsSidebarComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3111:
/*!***********************************************************************************************************!*\
  !*** ./src/app/core-component/settings/general-settings/security-settings/security-settings.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SecuritySettingsComponent: () => (/* binding */ SecuritySettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_service_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/service/sidebar/sidebar.service */ 79950);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _common_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/settings-sidebar/settings-sidebar.component */ 42362);




function SecuritySettingsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 7);
  }
}
function SecuritySettingsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 8);
  }
}
class SecuritySettingsComponent {
  constructor(sidebar) {
    this.sidebar = sidebar;
    this.isCollapsed = false;
  }
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  static {
    this.ɵfac = function SecuritySettingsComponent_Factory(t) {
      return new (t || SecuritySettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_service_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_0__.SidebarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: SecuritySettingsComponent,
      selectors: [["app-security-settings"]],
      decls: 147,
      vars: 2,
      consts: [[1, "page-header", "settings-pg-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "feather", "icon-rotate-ccw", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "id", "collapse-header", "matTooltip", "Collapse", "matTooltipPosition", "above", 3, "click"], [1, "feather", "icon-chevron-up", "feather-chevron-up"], [1, "feather", "icon-chevron-down", "feather-chevron-down"], [1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "settings-page-wrap"], [1, "setting-title"], [1, "security-settings"], [1, "security-type"], [1, "security-icon"], [1, "feather", "icon-eye-off"], [1, "security-title"], [1, "security-btn"], ["href", "javascript:void(0);", 1, "btn", "btn-primary"], [1, "feather", "icon-shield"], [1, "security-btn", "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "btn", "btn-danger"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center", "ms-2"], ["type", "checkbox", "id", "user3", "checked", "", 1, "check"], ["for", "user3", 1, "checktoggle"], [1, "badges-connected"], ["type", "checkbox", "id", "user4", "checked", "", 1, "check"], ["for", "user4", 1, "checktoggle"], [1, "feather", "icon-phone"], [1, "fa", "fa-check-circle", "me-2"], ["href", "javascript:void(0);", 1, "remove-red", "ms-2"], [1, "feather", "icon-mail"], [1, "feather", "icon-tool"], ["href", "javascript:void(0);", 1, "manage-btn"], [1, "feather", "icon-box"], [1, "feather", "icon-slash"], [1, "feather", "icon-trash-2"]],
      template: function SecuritySettingsComponent_Template(rf, ctx) {
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
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SecuritySettingsComponent_Template_a_click_12_listener() {
            return ctx.toggleCollapse();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, SecuritySettingsComponent_Conditional_13_Template, 1, 0, "i", 7)(14, SecuritySettingsComponent_Conditional_14_Template, 1, 0, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9)(16, "div", 10)(17, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "app-settings-sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "div", 13)(21, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Security");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14)(24, "ul")(25, "li")(26, "div", 15)(27, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 18)(30, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Last Changed 22 July 2023, 10:30 AM");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 19)(35, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Change Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "li")(38, "div", 15)(39, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 18)(42, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Two Factor");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Receive codes via SMS or email every time you login");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 22)(47, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Disable");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "input", 25)(51, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "li")(53, "div", 15)(54, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 18)(57, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Google Authentication");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Connect to Google");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 22)(62, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Connected");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "input", 28)(66, "label", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "li")(68, "div", 15)(69, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 18)(72, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Phone Number Verification");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Verified Mobile Number : +81699799974");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 22)(77, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](78, "i", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "Change");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "a", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Remove");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "li")(84, "div", 15)(85, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 18)(88, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "Email Verification");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "Verified Email : infoexample.com");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 22)(93, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](94, "i", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "Change");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "a", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "Remove");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "li")(100, "div", 15)(101, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](102, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 18)(104, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "Device Management");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "Last Changed 22 July 2023, 10:30 AM");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "div", 22)(109, "a", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "Manage");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "li")(112, "div", 15)(113, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](114, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "div", 18)(116, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, "Account Activity");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "Last Changed 25 July 2023, 11:00 AM");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div", 22)(121, "a", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, "View");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "li")(124, "div", 15)(125, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](126, "i", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "div", 18)(128, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129, "Deactivate Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, "Last Changed 21 July 2023, 09:37 AM");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "div", 22)(133, "a", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "Deactivate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "li")(136, "div", 15)(137, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](138, "i", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "div", 18)(140, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "Delete Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, "Last Changed 26 July 2023, 11:40 AM");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "div", 22)(145, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, "Delete");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
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

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_settings_general-settings_general-settings_module_ts.js.map