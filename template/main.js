"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["main"],{

/***/ 94114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);



const routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'signin'
}, {
  path: '',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_core-component_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./core-component/core-component.module */ 1631)).then(m => m.CoreComponentModule)
}, {
  path: '',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./auth/auth.module */ 60841)).then(m => m.AuthModule)
}, {
  path: 'error-pages',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_error-pages_error-pages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./error-pages/error-pages.module */ 24079)).then(m => m.ErrorPagesModule)
}
// {
//   path: '**',
//   redirectTo: 'errorpages/error404',
//   pathMatch: 'full',
// },
];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 20092:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _core_core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/core.index */ 82351);
/* harmony import */ var _common_component_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-component/loader/loader.component */ 21866);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);






class AppComponent {
  constructor(router, spinner) {
    this.router = router;
    this.spinner = spinner;
    this.title = 'template';
    this.page = '';
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationStart) {
        const URL = event.url.split('/');
        this.page = URL[1];
        this.spinner.show();
      }
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd) {
        this.spinner.hide();
      }
    });
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationStart) {
        this.spinner.show();
      }
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd) {
        this.spinner.hide();
      }
    });
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_core_index__WEBPACK_IMPORTED_MODULE_0__.SpinnerService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 3,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-loader")(1, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "title");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "titlecase");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Dreams Pos ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 1, ctx.page), "");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _common_component_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__.LoaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 50635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 94114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 20092);
/* harmony import */ var _common_component_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common-component/loader/loader.component */ 21866);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/shared.module */ 93887);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ 43835);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);







class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.sharedModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _common_component_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__.LoaderComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.sharedModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule]
  });
})();

/***/ }),

/***/ 21866:
/*!*************************************************************!*\
  !*** ./src/app/common-component/loader/loader.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoaderComponent: () => (/* binding */ LoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/core.index */ 82351);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);



function LoaderComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class LoaderComponent {
  constructor(spinner) {
    this.spinner = spinner;
    this.loading$ = this.spinner.loading$;
  }
  static {
    this.ɵfac = function LoaderComponent_Factory(t) {
      return new (t || LoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.SpinnerService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoaderComponent,
      selectors: [["app-loader"]],
      decls: 2,
      vars: 3,
      consts: [[1, "global-loader"], [1, "whirly-loader"]],
      template: function LoaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoaderComponent_Conditional_0_Template, 2, 0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.loading$) ? 0 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
      styles: [".spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 999999;\n  color: #7638ff;\n}\n\n.spinner_lay[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  opacity: 0.4;\n  z-index: 1000000;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tbW9uLWNvbXBvbmVudC9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Bpbm5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB6LWluZGV4OiA5OTk5OTk7XHJcbiAgY29sb3I6ICM3NjM4ZmY7XHJcbn1cclxuXHJcbi5zcGlubmVyX2xheSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gIG9wYWNpdHk6IDAuNDtcclxuICB6LWluZGV4OiAxMDAwMDAwO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 42362:
/*!***********************************************************************************************!*\
  !*** ./src/app/core-component/settings/common/settings-sidebar/settings-sidebar.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsSidebarComponent: () => (/* binding */ SettingsSidebarComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_service_common_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/common/common.service */ 53410);
/* harmony import */ var src_app_core_service_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/sidebar/sidebar.service */ 79950);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);






const _c0 = a0 => ({
  "subdrop": a0
});
const _c1 = (a0, a1) => ({
  "d-block": a0,
  "d-none": a1
});
function SettingsSidebarComponent_For_7_For_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li")(1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const subMenu_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", subMenu_r4.routes);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](subMenu_r4.title);
  }
}
function SettingsSidebarComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SettingsSidebarComponent_For_7_Template_li_click_0_listener() {
      const menu_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.toggleSubMenu(menu_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](7, SettingsSidebarComponent_For_7_For_8_Template, 3, 2, "li", null, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const menu_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c0, menu_r2.expanded));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx_r2.page === menu_r2.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](menu_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](menu_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](9, _c1, menu_r2.expanded, !menu_r2.expanded));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](menu_r2.subMenu);
  }
}
class SettingsSidebarComponent {
  constructor(common, setting) {
    this.common = common;
    this.setting = setting;
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    this.base = '';
    this.page = '';
    this.last = '';
    this.menuItems = [];
    this.common.base.subscribe(base => {
      this.base = base;
    });
    this.common.page.subscribe(page => {
      this.page = page;
    });
    this.common.last.subscribe(last => {
      this.last = last;
    });
    this.menuItems = this.setting.settings_sidebar;
  }
  toggleSubMenu(menuItem) {
    menuItem.expanded = !menuItem.expanded;
  }
  static {
    this.ɵfac = function SettingsSidebarComponent_Factory(t) {
      return new (t || SettingsSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_service_common_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_service_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_2__.SidebarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: SettingsSidebarComponent,
      selectors: [["app-settings-sidebar"]],
      decls: 8,
      vars: 0,
      consts: [["id", "sidebar2", 1, "sidebars", "settings-sidebar", "stickybar"], [1, "sidebar-inner", "slimscroll"], ["id", "sidebar-menu5", 1, "sidebar-menu"], [1, "submenu-open"], [1, "submenu", 3, "ngClass"], [1, "submenu", 3, "click", "ngClass"], ["href", "javascript:void(0);"], [1, "menu-arrow"], [3, "ngClass"], ["routerLinkActive", "active", 3, "routerLink"]],
      template: function SettingsSidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "ul")(4, "li", 3)(5, "ul");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](6, SettingsSidebarComponent_For_7_Template, 9, 12, "li", 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx.menuItems);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 25165:
/*!********************************************************************************************!*\
  !*** ./src/app/core-component/settings/common/settings-sidebar/settings-sidebar.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsSidebarModule: () => (/* binding */ SettingsSidebarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _settings_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-sidebar.component */ 42362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




class SettingsSidebarModule {
  static {
    this.ɵfac = function SettingsSidebarModule_Factory(t) {
      return new (t || SettingsSidebarModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: SettingsSidebarModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SettingsSidebarModule, {
    declarations: [_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SettingsSidebarComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SettingsSidebarComponent]
  });
})();

/***/ }),

/***/ 82351:
/*!************************************!*\
  !*** ./src/app/core/core.index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* reexport safe */ _guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard),
/* harmony export */   CommonService: () => (/* reexport safe */ _service_common_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService),
/* harmony export */   DataService: () => (/* reexport safe */ _service_data_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService),
/* harmony export */   SettingsService: () => (/* reexport safe */ _service_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__.SettingsService),
/* harmony export */   SidebarService: () => (/* reexport safe */ _service_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__.SidebarService),
/* harmony export */   SpinnerService: () => (/* reexport safe */ _service_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_2__.SpinnerService),
/* harmony export */   routes: () => (/* reexport safe */ _helpers_routes__WEBPACK_IMPORTED_MODULE_6__.routes)
/* harmony export */ });
/* harmony import */ var _service_data_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/data/data.service */ 67812);
/* harmony import */ var _service_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/settings/settings.service */ 35026);
/* harmony import */ var _service_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/spinner/spinner.service */ 13970);
/* harmony import */ var _guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guard/auth/auth.guard */ 84436);
/* harmony import */ var _service_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/sidebar/sidebar.service */ 79950);
/* harmony import */ var _service_common_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/common/common.service */ 53410);
/* harmony import */ var _helpers_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/routes */ 4450);
/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/models */ 1637);









/***/ }),

/***/ 84436:
/*!***********************************************!*\
  !*** ./src/app/core/guard/auth/auth.guard.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);


class AuthGuard {
  constructor(router) {
    this.router = router;
  }
  canActivate() {
    if (localStorage.getItem('authorized')) {
      return true;
    } else {
      this.router.navigate(['/auth/signin']);
      return false;
    }
  }
  static {
    this.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4450:
/*!****************************************!*\
  !*** ./src/app/core/helpers/routes.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
class routes {
  static {
    this.base = '';
  }
  static get baseUrl() {
    return this.base;
  }
  // auth routes *start*
  static get signIn() {
    return this.base + '/signin';
  }
  static get signUp() {
    return this.base + '/signup';
  }
  static get forgotPassword() {
    return this.base + '/forgot-password';
  }
  static get forgotPassword2() {
    return this.base + '/forgot-password-2';
  }
  static get forgotPassword3() {
    return this.base + '/forgot-password-3';
  }
  // auth routes *end*
  // error pages routes *start*
  static get errorPages() {
    return this.baseUrl + '/error-pages';
  }
  static get error404() {
    return this.errorPages + '/error-404';
  }
  static get error500() {
    return this.errorPages + '/error-500';
  }
  // error pages routes *ends*
  // core pages routes *start*
  static get core() {
    return this.baseUrl;
  }
  static get dashboard() {
    return this.baseUrl + '/dashboard';
  }
  static get components() {
    return this.core + '/components';
  }
  static get blankPage() {
    return this.pages + '/blank-page';
  }
  static get product() {
    return this.core + '/product';
  }
  static get sales() {
    return this.core + '/sales';
  }
  static get purchase() {
    return this.core + '/purchase';
  }
  static get expense() {
    return this.core + '/expense';
  }
  static get quotation() {
    return this.core + '/quotation';
  }
  static get transfer() {
    return this.core + '/transfer';
  }
  static get return() {
    return this.core + '/return';
  }
  static get people() {
    return this.core + '/people';
  }
  static get places() {
    return this.core + '/places';
  }
  static get element() {
    return this.core + '/element';
  }
  static get charts() {
    return this.core + '/charts';
  }
  static get icons() {
    return this.core + '/icons';
  }
  static get forms() {
    return this.core + '/forms';
  }
  static get table() {
    return this.core + '/table';
  }
  static get application() {
    return this.core + '/application';
  }
  static get reports() {
    return this.core + '/reports';
  }
  static get usersManagement() {
    return this.core + '/user-management';
  }
  static get settings() {
    return this.core + '/settings';
  }
  static get profile() {
    return this.pages + '/profile';
  }
  static get refferal() {
    return this.pages + '/refferal';
  }
  static get activities() {
    return this.pages + '/activities';
  }
  // core pages routes *ends*
  // core pages child routes
  static get productList() {
    return this.inventory + '/product/product-list';
  }
  static get addProduct() {
    return this.inventory + '/product/add-product';
  }
  static get expiredProduct() {
    return this.inventory + '/product/expired-products';
  }
  static get categoryList() {
    return this.inventory + '/category/category-list';
  }
  static get addCategory() {
    return this.product + '/add-category';
  }
  static get subCategories() {
    return this.inventory + '/category/sub-categories';
  }
  static get addSubcategory() {
    return this.product + '/sub-add-category';
  }
  static get addBrand() {
    return this.product + '/add-brand';
  }
  static get importProduct() {
    return this.product + '/import-product';
  }
  static get editProduct() {
    return this.inventory + '/product/edit-product';
  }
  static get editCategory() {
    return this.product + '/edit-category';
  }
  static get editSubCategory() {
    return this.product + '/edit-subcategory';
  }
  static get editBrand() {
    return this.product + '/edit-brand';
  }
  static get productDetails() {
    return this.inventory + '/product/product-details';
  }
  static get announcementList() {
    return this.inventory + '/announcement-list';
  }
  static get salesList() {
    return this.sales + '/sales-list';
  }
  static get pos() {
    return this.sales + '/pos';
  }
  static get salesReturnLists() {
    return this.sales + '/sales-return-lists';
  }
  static get createSalesReturns() {
    return this.sales + '/create-sales-returns';
  }
  static get addSales() {
    return this.sales + '/add-sales';
  }
  static get editSalesReturns() {
    return this.sales + '/edit-sales-returns';
  }
  static get editSales() {
    return this.sales + '/edit-sales';
  }
  static get salesDetails() {
    return this.sales + '/sales-details';
  }
  static get purchaseList() {
    return this.purchase + '/purchase-list';
  }
  static get addPurchase() {
    return this.purchase + '/add-purchase';
  }
  static get importPurchase() {
    return this.purchase + '/import-purchase';
  }
  static get editPurchase() {
    return this.purchase + '/edit-purchase';
  }
  static get expenseList() {
    return this.expense + '/expense-list';
  }
  static get expenseCategory() {
    return this.expense + '/expense-category';
  }
  static get createExpense() {
    return this.expense + '/create-expense';
  }
  static get editExpense() {
    return this.expense + '/edit-expense';
  }
  static get addQuotation() {
    return this.quotation + '/add-quotation';
  }
  static get editQuotation() {
    return this.quotation + '/edit-quotation';
  }
  static get transferList() {
    return this.transfer + '/transfer-list';
  }
  static get addTransfer() {
    return this.transfer + '/add-transfer';
  }
  static get importTransfer() {
    return this.transfer + '/import-transfer';
  }
  static get editTransfer() {
    return this.transfer + '/edit-transfer';
  }
  static get salesReturnList() {
    return this.return + '/sales-return-list';
  }
  static get createSalesReturn() {
    return this.return + '/create-sales-return';
  }
  static get purchaseReturnList() {
    return this.return + '/purchase-return-list';
  }
  static get createPurchaseReturn() {
    return this.return + '/create-purchase-return';
  }
  static get editSalesReturn() {
    return this.return + '/edit-sales-return';
  }
  static get editPurchaseReturn() {
    return this.return + '/edit-purchase-return';
  }
  static get customerList() {
    return this.people + '/customer-list';
  }
  static get addCustomer() {
    return this.people + '/add-customer';
  }
  static get suppliers() {
    return this.people + '/suppliers-list';
  }
  static get addSupplier() {
    return this.people + '/add-supplier';
  }
  static get userList() {
    return this.people + '/user-list';
  }
  static get addUser() {
    return this.people + '/add-user';
  }
  static get storeList() {
    return this.people + '/store-list';
  }
  static get addStore() {
    return this.people + '/add-store';
  }
  static get editCustomer() {
    return this.people + '/edit-customer';
  }
  static get editSupplier() {
    return this.people + '/edit-supplier';
  }
  static get editUser() {
    return this.people + '/edit-user';
  }
  static get editStore() {
    return this.people + '/edit-store';
  }
  static get newCountry() {
    return this.places + '/new-country';
  }
  static get countriesList() {
    return this.places + '/countries-list';
  }
  static get newState() {
    return this.places + '/new-state';
  }
  static get stateList() {
    return this.places + '/state-list';
  }
  static get editCountry() {
    return this.places + '/edit-country';
  }
  static get editState() {
    return this.places + '/edit-state';
  }
  static get tooltip() {
    return this.element + '/tooltip';
  }
  static get popover() {
    return this.element + '/popover';
  }
  static get notification() {
    return this.element + '/notification';
  }
  static get lightbox() {
    return this.element + '/lightbox';
  }
  static get stickyNote() {
    return this.element + '/sticky-note';
  }
  static get formWizard() {
    return this.forms + '/form-wizard';
  }
  static get chartApex() {
    return this.charts + '/chart-apex';
  }
  static get chartNg2() {
    return this.charts + '/chart-ng2';
  }
  static get chartPrime() {
    return this.charts + '/prime-ng';
  }
  static get iconFontAwesome() {
    return this.icons + '/icon-fontawesome';
  }
  static get iconFeather() {
    return this.icons + '/icon-feather';
  }
  static get iconIonic() {
    return this.icons + '/icon-ionic';
  }
  static get iconMaterial() {
    return this.icons + '/icon-material';
  }
  static get iconPe7() {
    return this.icons + '/icon-pe7';
  }
  static get iconSimpleline() {
    return this.icons + '/icon-simpleline';
  }
  static get iconWeather() {
    return this.icons + '/icon-weather';
  }
  static get iconThemify() {
    return this.icons + '/icon-themify';
  }
  static get iconTypicon() {
    return this.icons + '/icon-typicon';
  }
  static get iconFlag() {
    return this.icons + '/icon-flag';
  }
  static get formBasicInputs() {
    return this.forms + '/form-basic-inputs';
  }
  static get formInputsGroups() {
    return this.forms + '/form-input-groups';
  }
  static get formHorizontal() {
    return this.forms + '/form-horizontal';
  }
  static get formVertical() {
    return this.forms + '/form-vertical';
  }
  static get formMask() {
    return this.forms + '/form-mask';
  }
  static get formValidation() {
    return this.forms + '/form-validation';
  }
  static get formSelect() {
    return this.forms + '/form-select';
  }
  static get formFileUpload() {
    return this.forms + '/form-fileupload';
  }
  static get formCheckboxRadios() {
    return this.forms + '/form-checkbox-radios';
  }
  static get formElements() {
    return this.forms + '/form-elements';
  }
  static get formGridGutters() {
    return this.forms + '/form-grid-gutters';
  }
  static get formSelect2() {
    return this.forms + '/form-select-2';
  }
  static get formFloatingLabels() {
    return this.forms + '/form-floating-labels';
  }
  static get basicTable() {
    return this.table + '/tables-basic';
  }
  static get dataTable() {
    return this.table + '/data-basic';
  }
  static get chat() {
    return this.application + '/chat';
  }
  static get calendar() {
    return this.application + '/calendar';
  }
  static get email() {
    return this.application + '/email';
  }
  static get purchaseOrderReport() {
    return this.purchase + '/purchase-order-report';
  }
  static get newUser() {
    return this.users + '/new-user';
  }
  static get usersUserList() {
    return this.users + '/user-lists';
  }
  static get editUsersUserList() {
    return this.users + '/new-user-edit';
  }
  static get generalSettings() {
    return this.settings + '/general-settings/profile';
  }
  static get paymentSettings() {
    return this.settings + '/payment-settings';
  }
  static get currencySettings() {
    return this.settings + '/financial-settings/currency-settings';
  }
  static get groupSettings() {
    return this.settings + '/group-permissions';
  }
  static get createPermission() {
    return this.settings + '/create-permission';
  }
  static get editPermission() {
    return this.settings + '/edit-permission';
  }
  static get advancedUi() {
    return this.core + '/advanced-ui';
  }
  static get counter() {
    return this.advancedUi + '/ui-counter';
  }
  static get clipboard() {
    return this.advancedUi + '/ui-clipboard';
  }
  static get ribbon() {
    return this.advancedUi + '/ui-ribbon';
  }
  static get rating() {
    return this.advancedUi + '/ui-rating';
  }
  static get textEditor() {
    return this.advancedUi + '/ui-text-editor';
  }
  static get scrollbar() {
    return this.advancedUi + '/ui-scrollbar';
  }
  static get timeline() {
    return this.advancedUi + '/ui-timeline';
  }
  static get dragDrop() {
    return this.advancedUi + '/ui-drag-drop';
  }
  static get banIpAddress() {
    return this.settings + '/other-settings/ban-ip-address';
  }
  static get register() {
    return this.base + '/register';
  }
  static get register2() {
    return this.base + '/register-2';
  }
  static get register3() {
    return this.base + '/register-3';
  }
  // base ui pages routes starts
  static get baseUi() {
    return this.core + '/base-ui';
  }
  static get avatar() {
    return this.baseUi + '/ui-avatar';
  }
  static get cards() {
    return this.baseUi + '/ui-cards';
  }
  static get buttons() {
    return this.baseUi + '/ui-buttons';
  }
  static get accordion() {
    return this.baseUi + '/ui-accordion';
  }
  static get uiPopovers() {
    return this.baseUi + '/ui-popovers';
  }
  static get uiPlaceholders() {
    return this.baseUi + '/ui-placeholders';
  }
  static get uiBadges() {
    return this.baseUi + '/ui-badges';
  }
  static get uiBreadcrumb() {
    return this.baseUi + '/ui-breadcrumb';
  }
  static get uiButtons() {
    return this.baseUi + '/ui-buttons';
  }
  static get uiButtonsGroup() {
    return this.baseUi + '/ui-buttons-group';
  }
  static get uiCards() {
    return this.baseUi + '/ui-cards';
  }
  static get uiCarousel() {
    return this.baseUi + '/ui-carousel';
  }
  static get uiCounter() {
    return this.baseUi + '/ui-counter';
  }
  static get uiDropdowns() {
    return this.baseUi + '/ui-dropdowns';
  }
  static get uiGrid() {
    return this.baseUi + '/ui-grid';
  }
  static get uiImages() {
    return this.baseUi + '/ui-images';
  }
  static get uiLightbox() {
    return this.baseUi + '/ui-lightbox';
  }
  static get uiMedia() {
    return this.baseUi + '/ui-media';
  }
  static get uiModals() {
    return this.baseUi + '/ui-modals';
  }
  static get uiNavTabs() {
    return this.baseUi + '/ui-nav-tabs';
  }
  static get uiOffcanvas() {
    return this.baseUi + '/ui-offcanvas';
  }
  static get uiPagination() {
    return this.baseUi + '/ui-pagination';
  }
  static get uiProgress() {
    return this.baseUi + '/ui-progress';
  }
  static get uiRangeSlider() {
    return this.baseUi + '/ui-rangeslider';
  }
  static get uiSpinner() {
    return this.baseUi + '/ui-spinner';
  }
  static get uiSweetAlerts() {
    return this.baseUi + '/ui-sweetalerts';
  }
  static get uiToasts() {
    return this.baseUi + '/ui-toasts';
  }
  static get uiTooltips() {
    return this.baseUi + '/ui-tooltips';
  }
  static get uiTypography() {
    return this.baseUi + '/ui-typography';
  }
  static get uiVideo() {
    return this.baseUi + '/ui-video';
  }
  static get uiAccordion() {
    return this.baseUi + '/ui-accordion';
  }
  static get uiAvatar() {
    return this.baseUi + '/ui-avatar';
  }
  static get uiBorders() {
    return this.baseUi + '/ui-borders';
  }
  static get uiColors() {
    return this.baseUi + '/ui-colors';
  }
  static get connectedapp() {
    return this.settings + '/general-settings/connected-app';
  }
  static get hrm() {
    return this.core + '/hrm';
  }
  static get addEmployee() {
    return this.hrm + '/employee/add-employee';
  }
  static get editEmployee() {
    return this.hrm + '/employee/edit-employee';
  }
  static get deleteaccount() {
    return this.usersManagement + '/delete-account';
  }
  static get uiAlerts() {
    return this.baseUi + '/ui-alerts';
  }
  // base ui pages routes ends
  static get promo() {
    return this.core + '/promo';
  }
  static get coupons() {
    return this.promo + '/coupons';
  }
  static get designation() {
    return this.hrm + '/designation';
  }
  static get department() {
    return this.hrm + '/department';
  }
  static get departmentList() {
    return this.department + '/department-list';
  }
  static get departmentGrid() {
    return this.department + '/department-grid';
  }
  static get inventory() {
    return this.base + '/inventory';
  }
  static get barCode() {
    return this.inventory + '/barcode';
  }
  static get attendance() {
    return this.hrm + '/attendance';
  }
  static get attendanceAdmin() {
    return this.attendance + '/attendance-admin';
  }
  static get attendanceEmployee() {
    return this.attendance + '/attendance-employee';
  }
  static get callHistory() {
    return this.application + '/call-history';
  }
  static get emailVerification() {
    return this.base + '/email-verification';
  }
  static get emailVerification2() {
    return this.base + '/email-verification-2';
  }
  static get emailVerification3() {
    return this.base + '/email-verification-3';
  }
  static get employeesList() {
    return this.hrm + '/employee/employee-list';
  }
  static get bankSettingsList() {
    return this.settings + '/financial-settings/bank-settings-list';
  }
  static get bankSettingsGrid() {
    return this.settings + '/financial-settings/bank-settings-grid';
  }
  static get warranty() {
    return this.inventory + '/warranty';
  }
  static get fileManager() {
    return this.application + '/file-manager';
  }
  static get fileArchived() {
    return this.application + '/file-archived';
  }
  static get fileDocument() {
    return this.application + '/file-document';
  }
  static get fileFavorites() {
    return this.application + '/file-favourites';
  }
  static get fileManagerDeleted() {
    return this.application + '/file-manager-deleted';
  }
  static get fileRecent() {
    return this.application + '/file-recent';
  }
  static get salesDashboard() {
    return this.dashboard + '/sales-dashboard';
  }
  static get audioCall() {
    return this.application + '/audio-call';
  }
  static get videoCall() {
    return this.application + '/video-call';
  }
  static get holidays() {
    return this.hrm + '/holidays';
  }
  static get pages() {
    return this.core + '/pages';
  }
  static get underMaintanance() {
    return this.pages + '/under-maintenance';
  }
  static get languageSettings() {
    return this.settings + '/website-settings/language-settings';
  }
  static get languageSettingsweb() {
    return this.settings + '/website-settings/language-settings-web';
  }
  static get adminDashboard() {
    return this.dashboard + '/admin-dashboard';
  }
  static get toDo() {
    return this.application + '/todo';
  }
  static get notes() {
    return this.application + '/notes';
  }
  static get stock() {
    return this.baseUrl + '/stock';
  }
  static get lowStock() {
    return this.inventory + '/stock/low-stocks';
  }
  static get units() {
    return this.inventory + '/units';
  }
  static get varriantAttributes() {
    return this.inventory + '/varriant-attributes';
  }
  static get qrCode() {
    return this.inventory + '/qrcode';
  }
  static get manageStocks() {
    return this.stock + '/manage-stocks';
  }
  static get stockAdjustment() {
    return this.stock + '/stock-adjustment';
  }
  static get stockTransfer() {
    return this.stock + '/stock-transfer';
  }
  static get securitySettings() {
    return this.settings + '/general-settings/security-settings';
  }
  static get settingsNotification() {
    return this.settings + '/general-settings/notification';
  }
  static get connectedApps() {
    return this.settings + '/general-settings/connected-apps';
  }
  static get systemSettings() {
    return this.settings + '/website-settings/system-settings';
  }
  static get companySettings() {
    return this.settings + '/website-settings/company-settings';
  }
  static get localizationSettings() {
    return this.settings + '/website-settings/localization-settings';
  }
  static get prefixes() {
    return this.settings + '/website-settings/prefixes';
  }
  static get appearance() {
    return this.settings + '/website-settings/appearance';
  }
  static get socialAuthentication() {
    return this.settings + '/website-settings/social-authentication';
  }
  static get preference() {
    return this.settings + '/website-settings/preference';
  }
  static get invoiceSettings() {
    return this.settings + '/app-settings/invoice-settings';
  }
  static get printerSettings() {
    return this.settings + '/app-settings/printer-settings';
  }
  static get posSettings() {
    return this.settings + '/app-settings/pos-settings';
  }
  static get customFields() {
    return this.settings + '/app-settings/custom-fields';
  }
  static get emailSettings() {
    return this.settings + '/system-settings/email-settings';
  }
  static get smsGateway() {
    return this.settings + '/system-settings/sms-gateway';
  }
  static get otpSettings() {
    return this.settings + '/system-settings/otp-settings';
  }
  static get gdprSettings() {
    return this.settings + '/system-settings/gdpr-settings';
  }
  static get paymentGatewaySettings() {
    return this.settings + '/financial-settings/payment-gateway-settings';
  }
  static get taxRates() {
    return this.settings + '/financial-settings/tax-rates';
  }
  static get storageSettings() {
    return this.settings + '/other-settings/storage-settings';
  }
  static get salesReturn() {
    return this.sales + '/sales-return';
  }
  static get quotationList() {
    return this.sales + '/quotation-list';
  }
  static get purchaseReturns() {
    return this.purchase + '/purchase-returns';
  }
  static get signIn2() {
    return this.base + '/signin-2';
  }
  static get signIn3() {
    return this.base + '/signin-3';
  }
  static get resetPassword() {
    return this.base + '/reset-password';
  }
  static get resetPassword2() {
    return this.base + '/reset-password-2';
  }
  static get resetPassword3() {
    return this.base + '/reset-password-3';
  }
  static get twoStepVerification() {
    return this.base + '/two-step-verification';
  }
  static get twoStepVerification2() {
    return this.base + '/two-step-verification-2';
  }
  static get twoStepVerification3() {
    return this.base + '/two-step-verification-3';
  }
  static get lockScreen() {
    return this.base + '/lock-screen';
  }
  static get countries() {
    return this.pages + '/places/countries';
  }
  static get states() {
    return this.pages + '/places/states';
  }
  static get comingSoon() {
    return this.pages + '/coming-soon';
  }
  static get wareHouse() {
    return this.people + '/warehouse';
  }
  static get customers() {
    return this.people + '/customers';
  }
  static get employeesGrid() {
    return this.hrm + '/employee/employee-grid';
  }
  static get shift() {
    return this.hrm + '/shift';
  }
  static get leavesAdmin() {
    return this.hrm + '/leaves/leaves-admin';
  }
  static get leavesEmployee() {
    return this.hrm + '/leaves/leaves-employee';
  }
  static get leavesType() {
    return this.hrm + '/leaves/leaves-type';
  }
  static get payrollList() {
    return this.hrm + '/payroll/payroll-list';
  }
  static get paySlip() {
    return this.hrm + '/payroll/payslip';
  }
  static get rolesPermission() {
    return this.usersManagement + '/roles-permissions';
  }
  static get users() {
    return this.usersManagement + '/users';
  }
  static get adminUsers() {
    return this.usersManagement + '/admin-users';
  }
  static get fileShared() {
    return this.application + '/file-shared';
  }
  static get customerReport() {
    return this.reports + '/customer-report';
  }
  static get expenseReport() {
    return this.reports + '/expense-report';
  }
  static get incomeReport() {
    return this.reports + '/income-report';
  }
  static get inventoryReport() {
    return this.reports + '/inventory-report';
  }
  static get invoiceReport() {
    return this.reports + '/invoice-report';
  }
  static get profitAndLoss() {
    return this.reports + '/profit-and-loss';
  }
  static get purchaseReport() {
    return this.reports + '/purchase-report';
  }
  static get salesReport() {
    return this.reports + '/sales-report';
  }
  static get supplierReport() {
    return this.reports + '/supplier-report';
  }
  static get taxReport() {
    return this.reports + '/tax-report';
  }
  static get success() {
    return this.base + '/success';
  }
  static get success2() {
    return this.base + '/success-2';
  }
  static get success3() {
    return this.base + '/success-3';
  }
  static get permissions() {
    return this.usersManagement + '/permissions';
  }
}

/***/ }),

/***/ 8326:
/*!*****************************************************************!*\
  !*** ./src/app/core/interceptor/spinner/spinner.interceptor.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpinnerInterceptor: () => (/* binding */ SpinnerInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 89475);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core.index */ 82351);



class SpinnerInterceptor {
  constructor(spinner) {
    this.spinner = spinner;
  }
  intercept(request, next) {
    this.spinner.show();
    return next.handle(request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.finalize)(() => {
      this.spinner.hide();
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      if (error) {
        this.spinner.hide();
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
    }));
  }
  static {
    this.ɵfac = function SpinnerInterceptor_Factory(t) {
      return new (t || SpinnerInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_core_index__WEBPACK_IMPORTED_MODULE_0__.SpinnerService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: SpinnerInterceptor,
      factory: SpinnerInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 1637:
/*!***************************************!*\
  !*** ./src/app/core/models/models.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 53410:
/*!*******************************************************!*\
  !*** ./src/app/core/service/common/common.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommonService: () => (/* binding */ CommonService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class CommonService {
  constructor() {
    this.base = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
    this.page = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
    this.last = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
    this._currency = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('USD');
    this.currency$ = this._currency.asObservable();
  }
  static {
    this.ɵfac = function CommonService_Factory(t) {
      return new (t || CommonService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CommonService,
      factory: CommonService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 67812:
/*!***************************************************!*\
  !*** ./src/app/core/service/data/data.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataService: () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 95429);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 45312);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);






class DataService {
  constructor(http) {
    this.http = http;
  }
  getCountryList() {
    return this.http.get('assets/JSON/countrys.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getExpenseCategory() {
    return this.http.get('assets/JSON/expense-category.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getExpenseList() {
    return this.http.get('assets/JSON/expense-list.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getCustomerList() {
    return this.http.get('assets/JSON/customerList.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getQuotationList() {
    return this.http.get('assets/JSON/quotation-list.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getTransferList() {
    return this.http.get('assets/JSON/transferList.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getUserList() {
    return this.http.get('assets/JSON/userList.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getProductList() {
    return this.http.get('assets/JSON/product-list.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  // public getCategoryList(): Observable<apiResultFormat> {
  //   return this.http
  //     .get<apiResultFormat>('assets/JSON/category-list.json')
  //     .pipe(
  //       map((res: apiResultFormat) => {
  //         return res;
  //       })
  //     );
  // }
  getCategoryList() {
    const token = localStorage.getItem('authToken'); // Get token from localStorage
    if (!token) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => new Error('No authentication token found'));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(fetch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND_URL}/admin/categories`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (!response.ok) {
        return response.json().then(err => {
          throw new Error(err.message || 'Failed to fetch users');
        });
      }
      return response.json();
    }).then(data => ({
      data: data.results || [],
      // Ensure it's an array
      totalData: data.results.length || 0 // Provide a default number
    }))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Fetch error:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => new Error(error.message || 'Something went wrong!'));
    }));
  }
  createCategory(categoryData) {
    const token = localStorage.getItem('authToken'); // Get token from localStorage
    const httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND_URL}/admin/categories`, categoryData, httpOptions);
  }
  updateCategory(editCategoryId, userData) {
    const token = localStorage.getItem('authToken'); // Get token from localStorage
    const httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      })
    };
    return this.http.patch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND_URL}/admin/categories/${editCategoryId}`, userData, httpOptions);
  }
  getSubcategoryList() {
    return this.http.get('assets/JSON/subcategoryList.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getBrandList() {
    return this.http.get('assets/JSON/brand-list.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getAnnouncementList() {
    const token = localStorage.getItem('authToken'); // Get token from localStorage
    if (!token) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => new Error('No authentication token found'));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(fetch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND_URL}/admin/announcements`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (!response.ok) {
        return response.json().then(err => {
          throw new Error(err.message || 'Failed to fetch users');
        });
      }
      return response.json();
    }).then(data => ({
      data: data.results.announcements || [],
      // Ensure it's an array
      totalData: data.results.announcements.length || 0 // Provide a default number
    }))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Fetch error:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => new Error(error.message || 'Something went wrong!'));
    }));
  }
  createAnnouncement(userData) {
    const token = localStorage.getItem('authToken'); // Get token from localStorage
    const httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND_URL}/admin/announcements`, userData, httpOptions);
  }
  updateAnnouncement(editAnnouncementId, userData) {
    const token = localStorage.getItem('authToken'); // Get token from localStorage
    const httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      })
    };
    return this.http.patch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND_URL}/admin/announcements/${editAnnouncementId}`, userData, httpOptions);
  }
  deleteAnnouncement(editAnnouncementId) {
    const token = localStorage.getItem('authToken') || '';
    const httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      })
    };
    return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND_URL}/admin/announcements/${editAnnouncementId}`, httpOptions);
  }
  getPurchaseList() {
    return this.http.get('assets/JSON/purchase-list.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getSalesReturnList() {
    return this.http.get('assets/JSON/salesreturnLists.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getPurchaseReturnList() {
    return this.http.get('assets/JSON/purchaseReturnList.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getSupplierList() {
    return this.http.get('assets/JSON/supplierList.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getPeopleUserList() {
    return this.http.get('assets/JSON/peopleUserList.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getStateList() {
    return this.http.get('assets/JSON/stateList.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getPurchaseOrderReport() {
    return this.http.get('assets/JSON/purchase-order-report.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getPurchaseReport() {
    return this.http.get('assets/JSON/purchase-report.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getPaymentSettings() {
    return this.http.get('assets/JSON/paymentSettings.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getCurrencySettings() {
    return this.http.get('assets/JSON/currency-setting.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getGroupPermission() {
    return this.http.get('assets/JSON/groupPermission.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getTaxRates() {
    return this.http.get('assets/JSON/taxRates.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getSupplierReport1() {
    return this.http.get('assets/JSON/supplierReport1.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getSupplierReport2() {
    return this.http.get('assets/JSON/supplierReport2.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getSupplierReport3() {
    return this.http.get('assets/JSON/supplierReport3.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getSalesListModal() {
    return this.http.get('assets/JSON/salesListModal.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getPos1() {
    return this.http.get('assets/JSON/pos1.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getPos2() {
    return this.http.get('assets/JSON/pos2.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getPos3() {
    return this.http.get('assets/JSON/pos3.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getEditPermission() {
    return this.http.get('assets/JSON/editpermisssion.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getEvents() {
    return this.http.get('assets/JSON/scheduleevents.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getDataTable() {
    return this.http.get('assets/JSON/datatables.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getDeleteAccount() {
    return this.http.get('assets/JSON/delete-account.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getCoupons() {
    return this.http.get('assets/JSON/coupons.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getDesignation() {
    return this.http.get('assets/JSON/designation.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getDepartment() {
    return this.http.get('assets/JSON/department-list.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getAttendanceAdmin() {
    return this.http.get('assets/JSON/attendance-admin.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getAttendanceEmployee() {
    return this.http.get('assets/JSON/attendance-employee.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getBarcode() {
    return this.http.get('assets/JSON/barcode.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getExpiredproduct() {
    return this.http.get('assets/JSON/expired-products.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getEmployeeList() {
    return this.http.get('assets/JSON/employee-list.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getCustomfield() {
    return this.http.get('assets/JSON/custom-field.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getBankSettingsList() {
    return this.http.get('assets/JSON/bank-settings-list.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getFile() {
    return this.http.get('assets/JSON/files.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getHolidays() {
    return this.http.get('assets/JSON/holidays.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getLanguageSetting() {
    return this.http.get('assets/JSON/language-setting.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getCallHistory() {
    return this.http.get('assets/JSON/call-history.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getExpiredProduct() {
    return this.http.get('assets/JSON/expired-product.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getUnit() {
    return this.http.get('assets/JSON/units.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getFileShared() {
    return this.http.get('assets/JSON/file-shared.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getCountry() {
    return this.http.get('assets/JSON/coutries.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getRolesPermissions() {
    return this.http.get('assets/JSON/roles-permissions.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getState() {
    return this.http.get('assets/JSON/state.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getCustomer() {
    return this.http.get('assets/JSON/customers.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getPrinterSetting() {
    return this.http.get('assets/JSON/printer-setting.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getSalesList() {
    return this.http.get('assets/JSON/sales-list.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getShift() {
    return this.http.get('assets/JSON/shift.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getLowStocks() {
    return this.http.get('assets/JSON/low-stocks.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getLowStocks2() {
    return this.http.get('assets/JSON/low-stocks.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getManageStocks() {
    return this.http.get('assets/JSON/manage-stocks.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getWarranty() {
    return this.http.get('assets/JSON/warranty.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getPayrollList() {
    return this.http.get('assets/JSON/payroll-list.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getSalesReport() {
    return this.http.get('assets/JSON/sales-report.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getSalesReturn() {
    return this.http.get('assets/JSON/sales-return.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getVarriantAttributes() {
    return this.http.get('assets/JSON/varriant-attributes.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getStocks() {
    return this.http.get('assets/JSON/stock-transfer.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getStockadjustment() {
    return this.http.get('assets/JSON/stock-adjustment.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  // public getUsers(): Observable<apiResultFormat> {
  //   return this.http.get<apiResultFormat>('assets/JSON/users.json').pipe(
  //     map((res: apiResultFormat) => {
  //       return res;
  //     })
  //   );
  // }
  deleteUser(userId) {
    const token = localStorage.getItem('authToken') || '';
    const httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      })
    };
    return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND_URL}/admin/users/${userId}`, httpOptions);
  }
  createUser(userData) {
    const token = localStorage.getItem('authToken'); // Get token from localStorage
    const httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND_URL}/admin/users`, userData, httpOptions);
  }
  updateUser(editUserId, userData) {
    const token = localStorage.getItem('authToken'); // Get token from localStorage
    const httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      })
    };
    return this.http.patch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND_URL}/admin/users/${editUserId}`, userData, httpOptions);
  }
  getUsers(roleId) {
    const token = localStorage.getItem('authToken'); // Get token from localStorage
    if (!token) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => new Error('No authentication token found'));
    }
    let apiUrl = '';
    if (roleId) {
      apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND_URL}/admin/users?filter_by_role_id=${roleId}&page=1&page_size=10`;
    } else {
      apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND_URL}/admin/users?page=1&page_size=10`;
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (!response.ok) {
        return response.json().then(err => {
          throw new Error(err.message || 'Failed to fetch users');
        });
      }
      return response.json();
    }).then(data => ({
      data: data.results.users || [],
      // Ensure it's an array
      totalData: data.results.users.length || 0 // Provide a default number
    }))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Fetch error:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => new Error(error.message || 'Something went wrong!'));
    }));
  }
  getUserRoles() {
    const token = localStorage.getItem('authToken'); // Get token from localStorage
    if (!token) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => new Error('No authentication token found'));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(fetch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND_URL}/admin/roles`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (!response.ok) {
        return response.json().then(err => {
          throw new Error(err.message || 'Failed to fetch users');
        });
      }
      return response.json();
    }).then(data => ({
      data: data.results || [],
      // Ensure it's an array
      totalData: data.results.length || 0 // Provide a default number
    }))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Fetch error:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => new Error(error.message || 'Something went wrong!'));
    }));
  }
  getQrCode() {
    return this.http.get('assets/JSON/qrcode.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getLeavesAdmin() {
    return this.http.get('assets/JSON/leaves-admin.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getLeavesType() {
    return this.http.get('assets/JSON/leaves-type.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getLeavesEmployee() {
    return this.http.get('assets/JSON/leaves-employee.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getStoreList() {
    return this.http.get('assets/JSON/store-list.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  // public getSubCategories(): Observable<apiResultFormat> {
  //   return this.http.get<apiResultFormat>('assets/JSON/sub-categories.json').pipe(
  //     map((res: apiResultFormat) => {
  //       return res;
  //     })
  //   );
  // }
  getSubCategories() {
    const token = localStorage.getItem('authToken'); // Get token from localStorage
    if (!token) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => new Error('No authentication token found'));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(fetch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND_URL}/admin/subcategories`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (!response.ok) {
        return response.json().then(err => {
          throw new Error(err.message || 'Failed to fetch users');
        });
      }
      return response.json();
    }).then(data => ({
      data: data.results || [],
      // Ensure it's an array
      totalData: data.results.length || 0 // Provide a default number
    }))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Fetch error:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => new Error(error.message || 'Something went wrong!'));
    }));
  }
  createSubCategory(categoryData) {
    const token = localStorage.getItem('authToken'); // Get token from localStorage
    const httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      })
    };
    const {
      category_id,
      ...filteredData
    } = categoryData;
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND_URL}/admin/subcategories/${category_id}`, [filteredData], httpOptions);
  }
  updateSubCategory(categoryData) {
    const token = localStorage.getItem('authToken'); // Get token from localStorage
    const httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      })
    };
    const {
      subcategory_id,
      ...filteredData
    } = categoryData;
    return this.http.patch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND_URL}/admin/subcategories/${subcategory_id}`, filteredData, httpOptions);
  }
  updateSubCategoryConditions(categoryData) {
    const token = localStorage.getItem('authToken'); // Get token from localStorage
    const httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      })
    };
    const {
      subcategory_id,
      ...filteredData
    } = categoryData;
    return this.http.patch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND_URL}/admin/subcategory/${subcategory_id}/condition`, filteredData.conditions, httpOptions);
  }
  getSupplier() {
    return this.http.get('assets/JSON/suppliers.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getWareHouse() {
    return this.http.get('assets/JSON/warehouse.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getPurchaseReturns() {
    return this.http.get('assets/JSON/purchase-returns.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getTaxRate() {
    return this.http.get('assets/JSON/tax-rates.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getInventoryReport() {
    return this.http.get('assets/JSON/inventory-report.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getInvoiceReport() {
    return this.http.get('assets/JSON/invoice-report.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getexpenseReport() {
    return this.http.get('assets/JSON/expense-report.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getCustomerReport() {
    return this.http.get('assets/JSON/customer-report.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getIncomeReport() {
    return this.http.get('assets/JSON/income-report.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getSupplierReport() {
    return this.http.get('assets/JSON/supplier-report.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getSupplierpaymentReport() {
    return this.http.get('assets/JSON/payment-report.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getSupplierReturnReport() {
    return this.http.get('assets/JSON/return-report.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getPermission() {
    return this.http.get('assets/JSON/permission.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getTaxReport1() {
    return this.http.get('assets/JSON/tax-reports1.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getTaxReport2() {
    return this.http.get('assets/JSON/tax-reports2.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  getPosPurchase() {
    return this.http.get('assets/JSON/pos-purchase.json').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      return res;
    }));
  }
  static {
    this.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: DataService,
      factory: DataService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 35026:
/*!***********************************************************!*\
  !*** ./src/app/core/service/settings/settings.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsService: () => (/* binding */ SettingsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class SettingsService {
  constructor() {
    // Theme Mode
    this.themeMode = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(localStorage.getItem('themeMode') || 'light_mode');
    // Layout Mode
    this.layoutMode = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(localStorage.getItem('layoutMode') || 'default_mode');
    // Navigation Color
    this.navigationColor = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(localStorage.getItem('navigationColor') || 'light_color');
  }
  changeThemeMode(theme) {
    this.themeMode.next(theme);
    localStorage.setItem('themeMode', theme);
  }
  changeLayoutMode(layout) {
    this.layoutMode.next(layout);
    localStorage.setItem('layoutMode', layout);
  }
  changeNavigationColor(color) {
    this.navigationColor.next(color);
    localStorage.setItem('navigationColor', color);
  }
  static {
    this.ɵfac = function SettingsService_Factory(t) {
      return new (t || SettingsService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: SettingsService,
      factory: SettingsService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 79950:
/*!*********************************************************!*\
  !*** ./src/app/core/service/sidebar/sidebar.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidebarService: () => (/* binding */ SidebarService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core.index */ 82351);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);



class SidebarService {
  constructor() {
    this.collapseSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
    this.collapse$ = this.collapseSubject.asObservable();
    this.sideBarPosition = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(localStorage.getItem('sideBarPosition') || 'false');
    this.toggleMobileSideBar = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(localStorage.getItem('isMobileSidebar') || 'false');
    this.expandSideBar = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
    this.sidebarData1 = [{
      tittle: 'Main',
      showAsTab: false,
      separateRoute: false,
      hasSubRoute: false,
      showSubRoute: true,
      access: ["Platform Admin", "Warehouse Admin", "Support Staff"],
      menu: [{
        menuValue: 'Dashboard',
        hasSubRoute: false,
        showSubRoute: false,
        icon: 'grid',
        base1: 'dashboard',
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.adminDashboard,
        access: ["Platform Admin", "Warehouse Admin", "Support Staff"]
      }, {
        menuValue: 'Users',
        icon: 'user-check',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.users,
        access: ["Platform Admin"]
      }
      // {
      //   menuValue: 'Admin Users',
      //   icon: 'user-check',
      //   hasSubRoute: false,
      //   showSubRoute: false,
      //   route: routes.adminUsers,
      // }
      ]
    }, {
      tittle: 'Inventory',
      showAsTab: false,
      separateRoute: false,
      hasSubRoute: false,
      showSubRoute: true,
      access: ["Platform Admin"],
      menu: [{
        menuValue: 'Category',
        icon: 'codepen',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.categoryList,
        subRoutes: [],
        access: ["Platform Admin"]
      }, {
        menuValue: 'Sub Category',
        icon: 'speaker',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.subCategories,
        subRoutes: [],
        access: ["Platform Admin"]
      }, {
        menuValue: 'Announcements',
        icon: 'tag',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.announcementList,
        subRoutes: [],
        access: ["Platform Admin"]
      }, {
        menuValue: 'Refferal',
        icon: 'user',
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.refferal,
        hasSubRoute: false,
        showSubRoute: false,
        access: ["Platform Admin"]
      }
      // {
      //         menuValue: 'Warehouses',
      //         icon: 'archive',
      //         route: routes.wareHouse,
      //         hasSubRoute: false,
      //         showSubRoute: false,
      //       },
      ]
    }
    // {
    //   tittle: 'Inventory',
    //   showAsTab: true,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'Products',
    //       icon: 'box',
    //       route: routes.productList,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //     {
    //       menuValue: 'Create Product',
    //       icon: 'plus-square',
    //       route: routes.addProduct,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //     {
    //       menuValue: 'Expired Products',
    //       icon: 'message-square',
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       route: routes.expiredProduct,
    //       subRoutes: [],
    //     },
    //     {
    //       menuValue: 'Low Stocks',
    //       icon: 'trending-down',
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       route: routes.lowStock,
    //       subRoutes: [],
    //     },
    //     {
    //       menuValue: 'Category',
    //       icon: 'codepen',
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       route: routes.categoryList,
    //       subRoutes: [],
    //     },
    //     {
    //       menuValue: 'Sub Category',
    //       icon: 'speaker',
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       route: routes.subCategories,
    //       subRoutes: [],
    //     },
    //     {
    //       menuValue: 'Brands',
    //       icon: 'tag',
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       route: routes.brandList,
    //       subRoutes: [],
    //     },
    //     {
    //       menuValue: 'Units',
    //       icon: 'speaker',
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       route: routes.units,
    //       subRoutes: [],
    //     },
    //     {
    //       menuValue: 'Variant Attributes',
    //       icon: 'layers',
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       route: routes.varriantAttributes,
    //       subRoutes: [],
    //     },
    //     {
    //       menuValue: 'Warranties',
    //       icon: 'bookmark',
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       route: routes.warranty,
    //       subRoutes: [],
    //     },
    //     {
    //       menuValue: 'Print Barcode',
    //       icon: 'align-justify',
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       route: routes.barCode,
    //       subRoutes: [],
    //     },
    //     {
    //       menuValue: 'Print QR Code',
    //       icon: 'maximize',
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //       route: routes.qrCode,
    //       subRoutes: [],
    //     },
    //   ],
    // },
    // {
    //   tittle: 'Stock',
    //   showAsTab: true,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'Manage Stock',
    //       icon: 'package',
    //       route: routes.manageStocks,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //     {
    //       menuValue: 'Stock Adjustment',
    //       icon: 'clipboard',
    //       route: routes.stockAdjustment,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //     {
    //       menuValue: 'Stock Transfer',
    //       icon: 'truck',
    //       route: routes.stockTransfer,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //   ],
    // },
    // {
    //   tittle: 'Sales',
    //   showAsTab: true,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'Sales',
    //       icon: 'shopping-cart',
    //       route: routes.salesList,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //     {
    //       menuValue: 'Sales Return',
    //       icon: 'copy',
    //       route: routes.salesReturn,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //     {
    //       menuValue: 'Quotation',
    //       icon: 'save',
    //       route: routes.quotationList,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //     {
    //       menuValue: 'POS',
    //       icon: 'hard-drive',
    //       route: routes.pos,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //   ],
    // },
    // {
    //   tittle: 'Promo',
    //   showAsTab: true,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'Coupons',
    //       icon: 'shopping-cart',
    //       route: routes.coupons,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //   ],
    // },
    // {
    //   tittle: 'Purchases',
    //   showAsTab: true,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'Purchases',
    //       icon: 'shopping-bag',
    //       route: routes.purchaseList,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //     {
    //       menuValue: 'Purchase Order',
    //       icon: 'file-minus',
    //       route: routes.purchaseOrderReport,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //     {
    //       menuValue: 'Purchase Return',
    //       icon: 'refresh-cw',
    //       route: routes.purchaseReturns,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //   ],
    // },
    // {
    //   tittle: 'Finance & Accounts',
    //   showAsTab: true,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'Expenses',
    //       base: 'expense',
    //       icon: 'file-text',
    //       hasSubRoute: true,
    //       showSubRoute: false,
    //       subMenus: [
    //         {
    //           menuValue: 'Expenses',
    //           route: routes.expenseList,
    //         },
    //         {
    //           menuValue: 'Expense Category',
    //           route: routes.expenseCategory,
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   tittle: 'Peoples',
    //   showAsTab: true,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'Customers',
    //       icon: 'user',
    //       route: routes.customers,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //     {
    //       menuValue: 'Suppliers',
    //       icon: 'users',
    //       route: routes.suppliers,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //     {
    //       menuValue: 'Stores',
    //       icon: 'home',
    //       route: routes.storeList,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //     {
    //       menuValue: 'Warehouses',
    //       icon: 'archive',
    //       route: routes.wareHouse,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //   ],
    // },
    // {
    //   tittle: 'HRM',
    //   showAsTab: true,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'Employees',
    //       icon: 'user',
    //       route: routes.employeesGrid,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //     {
    //       menuValue: 'Departments',
    //       icon: 'users',
    //       route: routes.departmentGrid,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //     {
    //       menuValue: 'Designation',
    //       icon: 'git-merge',
    //       route: routes.designation,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //     {
    //       menuValue: 'Shifts',
    //       icon: 'shuffle',
    //       route: routes.shift,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //     {
    //       menuValue: 'Attendance',
    //       icon: 'book-open',
    //       page: 'attendance',
    //       hasSubRoute: true,
    //       showSubRoute: false,
    //       subMenus: [
    //         {
    //           menuValue: 'Employee',
    //           route: routes.attendanceEmployee,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Admin',
    //           route: routes.attendanceAdmin,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //       ],
    //     },
    //     {
    //       menuValue: 'Leaves',
    //       icon: 'calendar',
    //       page: 'leaves',
    //       hasSubRoute: true,
    //       showSubRoute: false,
    //       subMenus: [
    //         {
    //           menuValue: 'Admin Leaves',
    //           route: routes.leavesAdmin,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Employee Leaves',
    //           route: routes.leavesEmployee,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Leave Types',
    //           route: routes.leavesType,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //       ],
    //     },
    //     {
    //       menuValue: 'Holidays',
    //       icon: 'credit-card',
    //       route: routes.holidays,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //     {
    //       menuValue: 'Payroll',
    //       icon: 'dollar-sign',
    //       page: 'payroll',
    //       hasSubRoute: true,
    //       showSubRoute: false,
    //       subMenus: [
    //         {
    //           menuValue: 'Employee Salary',
    //           route: routes.payrollList,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Payslip',
    //           route: routes.paySlip,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   tittle: 'Reports',
    //   showAsTab: true,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'Sales Report',
    //       icon: 'bar-chart-2',
    //       route: routes.salesReport,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //     {
    //       menuValue: 'Purchase Report',
    //       icon: 'pie-chart',
    //       route: routes.purchaseReport,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //     {
    //       menuValue: 'Inventory Report',
    //       icon: 'inbox',
    //       route: routes.inventoryReport,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //     {
    //       menuValue: 'Invoice Report',
    //       icon: 'file',
    //       route: routes.invoiceReport,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //     {
    //       menuValue: 'Supplier Report',
    //       icon: 'user-check',
    //       route: routes.supplierReport,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //     {
    //       menuValue: 'Customer Report',
    //       icon: 'user',
    //       route: routes.customerReport,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //     {
    //       menuValue: 'Expense Report',
    //       icon: 'file',
    //       route: routes.expenseReport,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //     {
    //       menuValue: 'Income Report',
    //       icon: 'bar-chart',
    //       route: routes.incomeReport,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //     {
    //       menuValue: 'Tax Report',
    //       icon: 'database',
    //       route: routes.taxReport,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //     {
    //       menuValue: 'Profit & Loss',
    //       icon: 'pie-chart',
    //       route: routes.profitAndLoss,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //   ],
    // },
    // {
    //   tittle: 'User Management',
    //   showAsTab: true,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'Users',
    //       icon: 'user-check',
    //       route: routes.users,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //     {
    //       menuValue: 'Roles & Permissions',
    //       icon: 'shield',
    //       route: routes.rolesPermission,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //     {
    //       menuValue: 'Delete Account Request',
    //       icon: 'lock',
    //       route: routes.deleteaccount,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //   ],
    // },
    // {
    //   tittle: 'Pages',
    //   showAsTab: true,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'Profile',
    //       icon: 'user',
    //       route: routes.profile,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //     {
    //       menuValue: 'Authentication',
    //       icon: 'shield',
    //       hasSubRouteTwo: true,
    //       showSubRoute: false,
    //       subMenus: [
    //         {
    //           menuValue: 'Login',
    //           customSubmenuTwo: false,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.signIn
    //         },
    //       ],
    //     },]}
    //     {
    //       menuValue: 'Error Pages',
    //       icon: 'file-minus',
    //       hasSubRoute: true,
    //       showSubRoute: false,
    //       subMenus: [
    //         {
    //           menuValue: '404 Error',
    //           route: routes.error404,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: '500 Error',
    //           route: routes.error500,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //       ],
    //     },
    //     {
    //       menuValue: 'Places',
    //       page: 'places',
    //       icon: 'map',
    //       hasSubRoute: true,
    //       showSubRoute: false,
    //       subMenus: [
    //         {
    //           menuValue: 'Countries',
    //           route: routes.countries,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'States',
    //           route: routes.states,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //       ],
    //     },
    //     {
    //       menuValue: 'Blank Page',
    //       icon: 'file',
    //       route: routes.blankPage,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //     {
    //       menuValue: 'Coming Soon',
    //       icon: 'send',
    //       route: routes.comingSoon,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //     {
    //       menuValue: 'Under Maintenance',
    //       icon: 'alert-triangle',
    //       route: routes.underMaintanance,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //   ],
    // },
    // {
    //   tittle: 'Settings',
    //   showAsTab: true,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'General Settings',
    //       icon: 'settings',
    //       hasSubRoute: true,
    //       showSubRoute: false,
    //       page: 'general-settings',
    //       subMenus: [
    //         {
    //           menuValue: 'Profile',
    //           route: routes.generalSettings,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Security',
    //           route: routes.securitySettings,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Notifications',
    //           route: routes.settingsNotification,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Connected Apps',
    //           route: routes.connectedApps,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //       ],
    //     },
    //     {
    //       menuValue: 'Website Settings',
    //       page: 'website-settings',
    //       icon: 'globe',
    //       hasSubRoute: true,
    //       showSubRoute: false,
    //       subMenus: [
    //         {
    //           menuValue: 'System Settings',
    //           route: routes.systemSettings,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Company Settings',
    //           route: routes.companySettings,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Localization',
    //           route: routes.localizationSettings,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Prefixes',
    //           route: routes.prefixes,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Preference',
    //           route: routes.preference,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Appearance',
    //           route: routes.appearance,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Social Authentication',
    //           route: routes.socialAuthentication,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Language',
    //           route: routes.languageSettings,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //       ],
    //     },
    //     {
    //       menuValue: 'App Settings',
    //       page: 'app-settings',
    //       icon: 'smartphone',
    //       hasSubRoute: true,
    //       showSubRoute: false,
    //       base: 'app-settings',
    //       subMenus: [
    //         {
    //           menuValue: 'Invoice',
    //           route: routes.invoiceSettings,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Printer',
    //           route: routes.printerSettings,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'POS',
    //           route: routes.posSettings,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Custom Fields',
    //           route: routes.customFields,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //       ],
    //     },
    //     {
    //       menuValue: 'System Settings',
    //       page: 'system-settings',
    //       icon: 'monitor',
    //       hasSubRoute: true,
    //       showSubRoute: false,
    //       subMenus: [
    //         {
    //           menuValue: 'Email',
    //           route: routes.emailSettings,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'SMS Gateways',
    //           route: routes.smsGateway,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'OTP',
    //           route: routes.otpSettings,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'GDPR Cookies',
    //           route: routes.gdprSettings,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //       ],
    //     },
    //     {
    //       menuValue: 'Financial Settings',
    //       page: 'financial-settings',
    //       icon: 'dollar-sign',
    //       hasSubRoute: true,
    //       showSubRoute: false,
    //       subMenus: [
    //         {
    //           menuValue: 'Payment Gateway',
    //           route: routes.paymentGatewaySettings,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Bank Accounts',
    //           route: routes.bankSettingsGrid,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Tax Rates',
    //           route: routes.taxRates,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Currencies',
    //           route: routes.currencySettings,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //       ],
    //     },
    //     {
    //       menuValue: 'Other Settings',
    //       page: 'other-settings',
    //       icon: 'octagon',
    //       hasSubRoute: true,
    //       showSubRoute: false,
    //       subMenus: [
    //         {
    //           menuValue: 'Storage',
    //           route: routes.storageSettings,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Ban IP Address',
    //           route: routes.banIpAddress,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //       ],
    //     },
    //     {
    //       menuValue: 'Logout',
    //       icon: 'log-out',
    //       route: routes.signIn,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //   ],
    // },
    // {
    //   tittle: 'UI Interface',
    //   showAsTab: true,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'Base UI',
    //       base: 'base-ui',
    //       icon: 'layers',
    //       hasSubRoute: true,
    //       showSubRoute: false,
    //       subMenus: [
    //         {
    //           menuValue: 'Alerts',
    //           route: routes.uiAlerts,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Accordion',
    //           route: routes.uiAccordion,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Avatar',
    //           route: routes.uiAvatar,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Badges',
    //           route: routes.uiBadges,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Border',
    //           route: routes.uiBorders,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Buttons',
    //           route: routes.uiButtons,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Button Group',
    //           route: routes.uiButtonsGroup,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Breadcrumb',
    //           route: routes.uiBreadcrumb,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Card',
    //           route: routes.uiCards,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Carousel',
    //           route: routes.uiCarousel,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Colors',
    //           route: routes.uiColors,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Dropdowns',
    //           route: routes.uiDropdowns,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Grid',
    //           route: routes.uiGrid,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Images',
    //           route: routes.uiImages,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Lightbox',
    //           route: routes.uiLightbox,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Media',
    //           route: routes.uiMedia,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Modals',
    //           route: routes.uiModals,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Offcanvas',
    //           route: routes.uiOffcanvas,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Pagination',
    //           route: routes.uiPagination,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Popovers',
    //           route: routes.uiPopovers,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Progress',
    //           route: routes.uiProgress,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Placeholders',
    //           route: routes.uiPlaceholders,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Range Slider',
    //           route: routes.uiRangeSlider,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Spinner',
    //           route: routes.uiSpinner,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Sweet Alerts',
    //           route: routes.uiSweetAlerts,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Tabs',
    //           route: routes.uiNavTabs,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Toasts',
    //           route: routes.uiToasts,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Tooltips',
    //           route: routes.uiTooltips,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Typography',
    //           route: routes.uiTypography,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Video',
    //           route: routes.uiVideo,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //       ],
    //     },
    //     {
    //       menuValue: 'Advanced UI',
    //       base: 'advanced-ui',
    //       icon: 'activity',
    //       hasSubRoute: true,
    //       showSubRoute: false,
    //       subMenus: [
    //         {
    //           menuValue: 'Ribbon',
    //           route: routes.ribbon,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Clipboard',
    //           route: routes.clipboard,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Drag & Drop',
    //           route: routes.dragDrop,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Rating',
    //           route: routes.rating,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Text Editor',
    //           route: routes.textEditor,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Counter',
    //           route: routes.counter,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Scrollbar',
    //           route: routes.scrollbar,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Timeline',
    //           route: routes.timeline,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //       ],
    //     },
    //     {
    //       menuValue: 'Charts',
    //       icon: 'bar-chart-2',
    //       hasSubRoute: true,
    //       showSubRoute: false,
    //       base: 'charts',
    //       subMenus: [
    //         {
    //           menuValue: 'Apex Charts',
    //           route: routes.chartApex,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Ng2 Charts',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.chartNg2,
    //           subRoutes: [],
    //         },
    //         {
    //           menuValue: 'Prime NG Charts',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           route: routes.chartPrime,
    //           subRoutes: [],
    //         },
    //       ],
    //     },
    //     {
    //       menuValue: 'Icons',
    //       icon: 'database',
    //       hasSubRoute: true,
    //       showSubRoute: false,
    //       base: 'icons',
    //       subMenus: [
    //         {
    //           menuValue: 'Fontawesome Icons',
    //           route: routes.iconFontAwesome,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Feather Icons',
    //           route: routes.iconFeather,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Ionic Icons',
    //           route: routes.iconIonic,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Material Icons',
    //           route: routes.iconMaterial,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Pe7 Icons',
    //           route: routes.iconPe7,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Simpleline Icons',
    //           route: routes.iconSimpleline,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Themify Icons',
    //           route: routes.iconThemify,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Weather Icons',
    //           route: routes.iconWeather,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Typicon Icons',
    //           route: routes.iconTypicon,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Flag Icons',
    //           route: routes.iconFlag,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //       ],
    //     },
    //     {
    //       menuValue: 'Forms',
    //       icon: 'edit',
    //       base: 'forms',
    //       hasSubRouteTwo: true,
    //       showSubRoute: false,
    //       subMenus: [
    //         {
    //           menuValue: 'Form Elements',
    //           page1: 'form-basic-inputs',
    //           page2: 'form-checkbox-radios',
    //           page3: 'form-input-groups',
    //           page4: 'form-grid-gutters',
    //           page5: 'form-select',
    //           page6: 'form-mask',
    //           page7: 'form-fileupload',
    //           page8: 'form-elements',
    //           customSubmenuTwo: true,
    //           hasSubRoute: true,
    //           showSubRoute: false,
    //           subMenusTwo: [
    //             {
    //               menuValue: 'Basic Inputs',
    //               route: routes.formBasicInputs,
    //               hasSubRoute: false,
    //               showSubRoute: false,
    //             },
    //             {
    //               menuValue: 'Checkbox & Radios',
    //               route: routes.formCheckboxRadios,
    //               hasSubRoute: false,
    //               showSubRoute: false,
    //             },
    //             {
    //               menuValue: 'Input Groups',
    //               route: routes.formInputsGroups,
    //               hasSubRoute: false,
    //               showSubRoute: false,
    //             },
    //             {
    //               menuValue: 'Grid & Gutters',
    //               route: routes.formGridGutters,
    //               hasSubRoute: false,
    //               showSubRoute: false,
    //             },
    //             {
    //               menuValue: 'Form Select',
    //               route: routes.formSelect,
    //               hasSubRoute: false,
    //               showSubRoute: false,
    //             },
    //             {
    //               menuValue: 'Input Masks',
    //               route: routes.formMask,
    //               hasSubRoute: false,
    //               showSubRoute: false,
    //             },
    //             {
    //               menuValue: 'File Uploads',
    //               route: routes.formFileUpload,
    //               hasSubRoute: false,
    //               showSubRoute: false,
    //             },
    //           ],
    //         },
    //         {
    //           menuValue: 'Layouts',
    //           customSubmenuTwo: true,
    //           page1: 'form-horizontal',
    //           page2: 'form-vertical',
    //           page3: 'form-floating-labels',
    //           hasSubRoute: true,
    //           showSubRoute: false,
    //           subMenusTwo: [
    //             {
    //               menuValue: 'Horizontal Form',
    //               route: routes.formHorizontal,
    //               hasSubRoute: false,
    //               showSubRoute: false,
    //             },
    //             {
    //               menuValue: 'Vertical Form',
    //               route: routes.formVertical,
    //               hasSubRoute: false,
    //               showSubRoute: false,
    //             },
    //             {
    //               menuValue: 'Floating Labels',
    //               route: routes.formFloatingLabels,
    //               hasSubRoute: false,
    //               showSubRoute: false,
    //             },
    //           ],
    //         },
    //         {
    //           menuValue: 'Form Validation',
    //           route: routes.formValidation,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           customSubmenuTwo: false,
    //         },
    //         {
    //           menuValue: 'Select2',
    //           route: routes.formSelect2,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           customSubmenuTwo: false,
    //         },
    //         {
    //           menuValue: 'Form Wizard',
    //           route: routes.formWizard,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           customSubmenuTwo: false,
    //         },
    //       ],
    //     },
    //     {
    //       menuValue: 'Tables',
    //       icon: 'layout',
    //       base: 'table',
    //       hasSubRoute: true,
    //       showSubRoute: false,
    //       subMenus: [
    //         {
    //           menuValue: 'Basic Tables',
    //           route: routes.basicTable,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //         {
    //           menuValue: 'Data Table',
    //           route: routes.dataTable,
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   tittle: 'Help',
    //   showAsTab: true,
    //   separateRoute: false,
    //   menu: [
    //     {
    //       menuValue: 'Documentation',
    //       icon: 'file-text',
    //       // route: routes.chat,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //     {
    //       menuValue: 'Changelog v2.0.3',
    //       icon: 'lock',
    //       // route: routes.chat,
    //       hasSubRoute: false,
    //       showSubRoute: false,
    //     },
    //     {
    //       menuValue: 'Multi Level',
    //       hasSubRouteThree: true,
    //       icon: 'file-minus',
    //       showSubRoute: false,
    //       subMenus: [
    //         {
    //           menuValue: 'Level 1.1',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           customSubmenuThree: false,
    //         },
    //         {
    //           menuValue: 'Level 1.2',
    //           hasSubRoute: false,
    //           showSubRoute: false,
    //           customSubmenuThree: true,
    //           subMenusTwo: [
    //             {
    //               menuValue: 'Level 2.1',
    //               hasSubRoute: false,
    //               showSubRoute: false,
    //               customSubmenuFour: false,
    //             },
    //             {
    //               menuValue: 'Level 2.2',
    //               hasSubRoute: false,
    //               showSubRoute: false,
    //               customSubmenuFour: true,
    //               subMenusThree: [
    //                 {
    //                   menuValue: 'Level 3.1',
    //                   hasSubRoute: false,
    //                   showSubRoute: false,
    //                   customSubmenuFour: true,
    //                 },
    //                 {
    //                   menuValue: 'Level 3.2',
    //                   hasSubRoute: false,
    //                   showSubRoute: false,
    //                   customSubmenuFour: true,
    //                 },
    //               ],
    //             },
    //           ],
    //         },
    //       ],
    //     },
    //   ],
    // },
    ];
    this.sidebarData2 = [{
      tittle: 'Main Menu',
      hasSubRoute: true,
      icon: 'assets/img/icons/menu-icon.svg',
      showSubRoute: false,
      subRoutes: [{
        tittle: 'Dashboard',
        hasSubRoute: true,
        icon: 'assets/img/icons/dashboard.svg',
        showSubRoute: true,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.dashboard,
        subRoutes: [{
          tittle: 'Admin Dashboard',
          hasSubRoute: false,
          showSubRoute: false,
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.adminDashboard,
          subRoutes: []
        }, {
          tittle: 'Sales Dashboard',
          hasSubRoute: false,
          showSubRoute: false,
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.salesDashboard,
          subRoutes: []
        }]
      }, {
        tittle: 'Application',
        hasSubRoute: true,
        showSubRoute: true,
        base: 'application',
        subRoutes: [{
          tittle: 'Chat',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.chat,
          hasSubRoute: false,
          showSubRoute: false,
          customSubmenuTwo: false
        }, {
          tittle: 'Call',
          hasSubRoute: true,
          showSubRoute: true,
          base: 'application',
          subRoutes: [{
            tittle: 'Video Call',
            route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.videoCall,
            hasSubRoute: false,
            showSubRoute: false,
            subRoutes: []
          }, {
            tittle: 'Audio Call',
            route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.audioCall,
            hasSubRoute: false,
            showSubRoute: false
          }, {
            tittle: 'Call History',
            route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.callHistory,
            hasSubRoute: false,
            showSubRoute: false
          }]
        }, {
          tittle: 'Calendar',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.calendar,
          hasSubRoute: false,
          showSubRoute: false,
          customSubmenuTwo: false
        }, {
          tittle: 'Email',
          hasSubRoute: false,
          showSubRoute: false,
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.email,
          customSubmenuTwo: false,
          subRoutes: []
        }, {
          tittle: 'To Do',
          hasSubRoute: false,
          showSubRoute: false,
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.toDo,
          customSubmenuTwo: false,
          subRoutes: []
        }, {
          tittle: 'Notes',
          hasSubRoute: false,
          showSubRoute: false,
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.notes,
          customSubmenuTwo: false,
          subRoutes: []
        }, {
          tittle: 'File Manager',
          hasSubRoute: false,
          showSubRoute: false,
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.fileManager,
          customSubmenuTwo: false,
          subRoutes: []
        }]
      }]
    }, {
      tittle: 'Inventory',
      hasSubRoute: true,
      icon: 'assets/img/icons/product.svg',
      showSubRoute: false,
      activeRoute: 'product',
      subRoutes: [{
        tittle: 'Products',
        hasSubRoute: false,
        showSubRoute: true,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.productList,
        subRoutes: []
      }, {
        tittle: 'Create Product',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.addProduct,
        subRoutes: []
      }, {
        tittle: 'Expired Products',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.expiredProduct,
        subRoutes: []
      }, {
        tittle: 'Low Stocks',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.lowStock,
        subRoutes: []
      }, {
        tittle: 'Category',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.categoryList,
        subRoutes: []
      }, {
        tittle: 'Sub Category',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.subCategories,
        subRoutes: []
      }, {
        tittle: 'Brands',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.announcementList,
        subRoutes: []
      }, {
        tittle: 'Units',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.units,
        subRoutes: []
      }, {
        tittle: 'Variant Attributes',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.varriantAttributes,
        subRoutes: []
      }, {
        tittle: 'Warranties',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.warranty,
        subRoutes: []
      }, {
        tittle: 'Print Barcode',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.barCode,
        subRoutes: []
      }, {
        tittle: 'Print QR Code',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.qrCode,
        subRoutes: []
      }]
    }, {
      tittle: 'Sales',
      hasSubRoute: true,
      showSubRoute: false,
      activeRoute: 'users',
      subRoutes: [{
        tittle: 'Sales',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.salesList,
        subRoutes: []
      }, {
        tittle: 'Invoice',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.invoiceSettings,
        subRoutes: []
      }, {
        tittle: 'Sales Return',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.salesReturn,
        subRoutes: []
      }, {
        tittle: 'Quotation',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.quotationList,
        subRoutes: []
      }, {
        tittle: 'POS',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.pos,
        subRoutes: []
      }]
    }, {
      tittle: 'Purchases',
      hasSubRoute: true,
      icon: 'assets/img/icons/purchase1.svg',
      showSubRoute: false,
      activeRoute: 'users',
      subRoutes: [{
        tittle: 'Purchases',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.purchaseList,
        subRoutes: []
      }, {
        tittle: 'Purchase Order',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.purchaseOrderReport,
        subRoutes: []
      }, {
        tittle: 'Purchase Return',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.purchaseReturns,
        subRoutes: []
      }, {
        tittle: 'ManageStock',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.manageStocks,
        subRoutes: []
      }, {
        tittle: 'Stock Adjustment',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.stockAdjustment,
        subRoutes: []
      }, {
        tittle: 'Sub Category',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.subCategories,
        subRoutes: []
      }, {
        tittle: 'Stock Transfer',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.stockTransfer,
        subRoutes: []
      }, {
        tittle: 'Expenses',
        hasSubRoute: true,
        showSubRoute: true,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.stockTransfer,
        subRoutes: [{
          tittle: 'Expenses',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.expenseList
        }, {
          tittle: 'Expense Category',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.expenseCategory
        }]
      }]
    }, {
      tittle: 'Customers',
      hasSubRoute: true,
      icon: 'assets/img/icons/users1.svg',
      showSubRoute: false,
      activeRoute: 'users',
      subRoutes: [{
        tittle: 'Customers',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.customers,
        subRoutes: []
      }, {
        tittle: 'Suppliers',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.suppliers,
        subRoutes: []
      }, {
        tittle: 'Stores',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.storeList,
        subRoutes: []
      }, {
        tittle: 'Warehouses',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.wareHouse,
        subRoutes: []
      }]
    }, {
      tittle: 'Employees',
      hasSubRoute: true,
      icon: 'assets/img/icons/product.svg',
      showSubRoute: false,
      activeRoute: 'users',
      subRoutes: [{
        tittle: 'Employees',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.employeesGrid,
        subRoutes: []
      }, {
        tittle: 'Departments',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.departmentGrid,
        subRoutes: []
      }, {
        tittle: 'Designation',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.designation,
        subRoutes: []
      }, {
        tittle: 'Shifts',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.shift,
        subRoutes: []
      }, {
        tittle: 'Attendence',
        hasSubRoute: true,
        showSubRoute: true,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.shift,
        subRoutes: [{
          tittle: 'Employees',
          hasSubRoute: false,
          showSubRoute: false,
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.attendanceEmployee,
          subRoutes: []
        }, {
          tittle: 'Admin',
          hasSubRoute: false,
          showSubRoute: false,
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.attendanceAdmin,
          subRoutes: []
        }]
      }, {
        tittle: 'Leaves',
        hasSubRoute: true,
        showSubRoute: true,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.shift,
        subRoutes: [{
          tittle: 'Admin Leaves',
          hasSubRoute: false,
          showSubRoute: false,
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.leavesAdmin,
          subRoutes: []
        }, {
          tittle: 'Employee Leaves',
          hasSubRoute: false,
          showSubRoute: false,
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.leavesEmployee,
          subRoutes: []
        }, {
          tittle: 'Leave Types',
          hasSubRoute: false,
          showSubRoute: false,
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.leavesType,
          subRoutes: []
        }]
      }, {
        tittle: 'Holidays',
        hasSubRoute: false,
        showSubRoute: true,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.holidays,
        subRoutes: []
      }, {
        tittle: 'Payroll',
        hasSubRoute: true,
        showSubRoute: true,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.holidays,
        subRoutes: [{
          tittle: 'Employee Salary',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.payrollList,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Payslip',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.paySlip,
          hasSubRoute: false,
          showSubRoute: false
        }]
      }]
    }, {
      tittle: 'Sales Report',
      hasSubRoute: true,
      icon: 'assets/img/icons/users1.svg',
      showSubRoute: false,
      activeRoute: 'users',
      subRoutes: [{
        tittle: 'Sales Report',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.salesReport,
        subRoutes: []
      }, {
        tittle: 'Purchase Report',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.purchaseReport,
        subRoutes: []
      }, {
        tittle: 'Inventory Report',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.inventoryReport,
        subRoutes: []
      }, {
        tittle: 'Invoice Report',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.invoiceReport,
        subRoutes: []
      }, {
        tittle: 'Supplier Report',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.supplierReport,
        subRoutes: []
      }, {
        tittle: 'Supplier Report',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.supplierReport,
        subRoutes: []
      }, {
        tittle: 'Customer Report',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.customerReport,
        subRoutes: []
      }, {
        tittle: 'Expense Report',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.expenseReport,
        subRoutes: []
      }, {
        tittle: 'Income Report',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.incomeReport,
        subRoutes: []
      }, {
        tittle: 'Tax Report',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.taxReport,
        subRoutes: []
      }]
    }, {
      tittle: 'Pages',
      hasSubRoute: true,
      icon: 'assets/img/icons/purchase1.svg',
      showSubRoute: false,
      activeRoute: 'users',
      subRoutes: [{
        tittle: 'Profile',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.profile,
        subRoutes: []
      }, {
        tittle: 'Authentication',
        hasSubRoute: true,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.purchaseReport,
        subRoutes: [{
          tittle: 'Login',
          hasSubRoute: true,
          showSubRoute: false,
          subRoutes: [{
            tittle: 'Cover',
            route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.signIn,
            hasSubRoute: false,
            showSubRoute: false
          }, {
            tittle: 'Illustration',
            route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.signIn2,
            hasSubRoute: false,
            showSubRoute: false
          }, {
            tittle: 'Basic',
            route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.signIn3,
            hasSubRoute: false,
            showSubRoute: false
          }]
        }]
      }, {
        tittle: 'Error Pages',
        hasSubRoute: true,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.inventoryReport,
        subRoutes: [{
          tittle: '404 Error',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.error404,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: '500 Error',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.error500,
          hasSubRoute: false,
          showSubRoute: false
        }]
      }, {
        tittle: 'Places',
        hasSubRoute: true,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.invoiceReport,
        subRoutes: [{
          tittle: 'Countries',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.countries,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'States',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.states,
          hasSubRoute: false,
          showSubRoute: false
        }]
      }, {
        tittle: 'Blank Page',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.blankPage,
        subRoutes: []
      }, {
        tittle: 'Coming Soon',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.comingSoon,
        subRoutes: []
      }, {
        tittle: 'Under Maintenance',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.underMaintanance,
        subRoutes: []
      }]
    }, {
      tittle: 'User Management',
      hasSubRoute: true,
      icon: 'assets/img/icons/printer.svg',
      showSubRoute: false,
      activeRoute: 'users',
      subRoutes: [{
        tittle: 'Users',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.users,
        subRoutes: []
      }, {
        tittle: 'Roles & Permissions',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.rolesPermission,
        subRoutes: []
      }, {
        tittle: 'Delete Account Request',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.deleteaccount,
        subRoutes: []
      }, {
        tittle: 'Base UI',
        hasSubRoute: true,
        icon: 'assets/img/icons/printer.svg',
        showSubRoute: false,
        activeRoute: 'users',
        subRoutes: [{
          tittle: 'Alerts',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiAlerts,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Accordion',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiAccordion,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Avatar',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiAvatar,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Badges',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiBadges,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Border',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiBorders,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Buttons',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiButtons,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Button Group',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiButtonsGroup,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Breadcrumb',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiBreadcrumb,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Card',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiCards,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Carousel',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiCarousel,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Colors',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiColors,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Dropdowns',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiDropdowns,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Grid',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiGrid,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Images',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiImages,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Lightbox',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiLightbox,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Media',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiMedia,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Modals',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiModals,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Offcanvas',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiOffcanvas,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Pagination',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiPagination,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Popovers',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiPopovers,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Progress',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiProgress,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Placeholders',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiPlaceholders,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Range Slider',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiRangeSlider,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Spinner',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiSpinner,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Sweet Alerts',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiSweetAlerts,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Tabs',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiNavTabs,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Toasts',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiToasts,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Tooltips',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiTooltips,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Typography',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiTypography,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Video',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiVideo,
          hasSubRoute: false,
          showSubRoute: false
        }]
      }, {
        tittle: 'Advanced UI',
        hasSubRoute: true,
        showSubRoute: false,
        activeRoute: 'users',
        subRoutes: [{
          tittle: 'Ribbon',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.ribbon,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Clipboard',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.clipboard,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Drag & Drop',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.dragDrop,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Rating',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.rating,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Text Editor',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.textEditor,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Counter',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.counter,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Scrollbar',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.scrollbar,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Timeline',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.timeline,
          hasSubRoute: false,
          showSubRoute: false
        }]
      }, {
        tittle: 'Charts',
        hasSubRoute: true,
        showSubRoute: false,
        activeRoute: 'users',
        subRoutes: [{
          tittle: 'Apex Charts',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.chartApex,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Ng2 Charts',
          hasSubRoute: false,
          showSubRoute: false,
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.chartNg2,
          subRoutes: []
        }, {
          tittle: 'Prime NG Charts',
          hasSubRoute: false,
          showSubRoute: false,
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.chartPrime,
          subRoutes: []
        }]
      }, {
        tittle: 'Icons',
        hasSubRoute: true,
        showSubRoute: false,
        activeRoute: 'users',
        subRoutes: [{
          tittle: 'Fontawesome Icons',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.iconFontAwesome,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Feather Icons',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.iconFeather,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Ionic Icons',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.iconIonic,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Material Icons',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.iconMaterial,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Pe7 Icons',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.iconPe7,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Simpleline Icons',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.iconSimpleline,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Themify Icons',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.iconThemify,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Weather Icons',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.iconWeather,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Typicon Icons',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.iconTypicon,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Flag Icons',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.iconFlag,
          hasSubRoute: false,
          showSubRoute: false
        }]
      }]
    }, {
      tittle: 'Settings',
      hasSubRoute: true,
      icon: 'assets/img/icons/product.svg',
      showSubRoute: false,
      activeRoute: 'users',
      subRoutes: [{
        tittle: 'General Settings',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.users,
        subRoutes: [{
          tittle: 'Profile',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.generalSettings,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Security',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.securitySettings,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Notifications',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.settingsNotification,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Connected Apps',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.connectedApps,
          hasSubRoute: false,
          showSubRoute: false
        }]
      }, {
        tittle: 'Website Settings',
        hasSubRoute: false,
        showSubRoute: false,
        subRoutes: [{
          tittle: 'System Settings',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.systemSettings,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Company Settings',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.companySettings,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Localization',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.localizationSettings,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Prefixes',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.prefixes,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Preference',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.preference,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Appearance',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.appearance,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Social Authentication',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.socialAuthentication,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Language',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.languageSettings,
          hasSubRoute: false,
          showSubRoute: false
        }]
      }, {
        tittle: 'App Settings',
        hasSubRoute: true,
        icon: 'assets/img/icons/printer.svg',
        showSubRoute: false,
        activeRoute: 'users',
        subRoutes: [{
          tittle: 'Invoice',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.invoiceSettings,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Printer',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.printerSettings,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'POS',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.posSettings,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Custom Fields',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.customFields,
          hasSubRoute: false,
          showSubRoute: false
        }]
      }, {
        tittle: 'System Settings',
        hasSubRoute: true,
        showSubRoute: false,
        activeRoute: 'users',
        subRoutes: [{
          tittle: 'Email',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.emailSettings,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'SMS Gateways',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.smsGateway,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'OTP',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.otpSettings,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'GDPR Cookies',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.gdprSettings,
          hasSubRoute: false,
          showSubRoute: false
        }]
      }, {
        tittle: 'Financial Settings',
        hasSubRoute: true,
        showSubRoute: false,
        activeRoute: 'users',
        subRoutes: [{
          tittle: 'Payment Gateway',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.paymentGatewaySettings,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Bank Accounts',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.bankSettingsGrid,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Tax Rates',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.taxRates,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Currencies',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.currencySettings,
          hasSubRoute: false,
          showSubRoute: false
        }]
      }, {
        tittle: 'Other Settings',
        hasSubRoute: true,
        showSubRoute: false,
        activeRoute: 'users',
        subRoutes: [{
          tittle: 'Storage',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.storageSettings,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Ban IP Address',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.banIpAddress,
          hasSubRoute: false,
          showSubRoute: false
        }]
      }, {
        tittle: 'Documentation',
        hasSubRoute: false,
        showSubRoute: false,
        activeRoute: 'users'
      }, {
        tittle: 'Changelog v2.0.3',
        hasSubRoute: false,
        showSubRoute: false,
        activeRoute: 'users'
      }]
    }];
    this.sidebarData3 = [{
      tittle: 'Main Menu',
      hasSubRoute: true,
      icon: 'assets/img/icons/menu-icon.svg',
      showSubRoute: false,
      subRoutes: [{
        tittle: 'Dashboard',
        hasSubRoute: true,
        icon: 'assets/img/icons/dashboard.svg',
        showSubRoute: true,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.dashboard,
        subRoutes: [{
          tittle: 'Admin Dashboard',
          hasSubRoute: false,
          showSubRoute: false,
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.adminDashboard,
          subRoutes: []
        }, {
          tittle: 'Sales Dashboard',
          hasSubRoute: false,
          showSubRoute: false,
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.salesDashboard,
          subRoutes: []
        }]
      }, {
        tittle: 'Application',
        hasSubRoute: true,
        showSubRoute: true,
        base: 'application',
        subRoutes: [{
          tittle: 'Chat',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.chat,
          hasSubRoute: false,
          showSubRoute: false,
          customSubmenuTwo: false
        }, {
          tittle: 'Call',
          hasSubRoute: true,
          showSubRoute: true,
          base: 'application',
          subRoutes: [{
            tittle: 'Video Call',
            route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.videoCall,
            hasSubRoute: false,
            showSubRoute: false,
            subRoutes: []
          }, {
            tittle: 'Audio Call',
            route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.audioCall,
            hasSubRoute: false,
            showSubRoute: false
          }, {
            tittle: 'Call History',
            route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.callHistory,
            hasSubRoute: false,
            showSubRoute: false
          }]
        }, {
          tittle: 'Calendar',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.calendar,
          hasSubRoute: false,
          showSubRoute: false,
          customSubmenuTwo: false
        }, {
          tittle: 'Email',
          hasSubRoute: false,
          showSubRoute: false,
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.email,
          customSubmenuTwo: false,
          subRoutes: []
        }, {
          tittle: 'To Do',
          hasSubRoute: false,
          showSubRoute: false,
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.toDo,
          customSubmenuTwo: false,
          subRoutes: []
        }, {
          tittle: 'Notes',
          hasSubRoute: false,
          showSubRoute: false,
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.notes,
          customSubmenuTwo: false,
          subRoutes: []
        }, {
          tittle: 'File Manager',
          hasSubRoute: false,
          showSubRoute: false,
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.fileManager,
          customSubmenuTwo: false,
          subRoutes: []
        }]
      }]
    }, {
      tittle: 'Inventory',
      hasSubRoute: true,
      icon: 'assets/img/icons/product.svg',
      showSubRoute: false,
      activeRoute: 'product',
      subRoutes: [{
        tittle: 'Products',
        hasSubRoute: false,
        showSubRoute: true,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.productList,
        subRoutes: []
      }, {
        tittle: 'Create Product',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.addProduct,
        subRoutes: []
      }, {
        tittle: 'Expired Products',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.expiredProduct,
        subRoutes: []
      }, {
        tittle: 'Low Stocks',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.lowStock,
        subRoutes: []
      }, {
        tittle: 'Category',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.categoryList,
        subRoutes: []
      }, {
        tittle: 'Sub Category',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.subCategories,
        subRoutes: []
      }, {
        tittle: 'Brands',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.announcementList,
        subRoutes: []
      }, {
        tittle: 'Units',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.units,
        subRoutes: []
      }, {
        tittle: 'Variant Attributes',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.varriantAttributes,
        subRoutes: []
      }, {
        tittle: 'Warranties',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.warranty,
        subRoutes: []
      }, {
        tittle: 'Print Barcode',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.barCode,
        subRoutes: []
      }, {
        tittle: 'Print QR Code',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.qrCode,
        subRoutes: []
      }]
    }, {
      tittle: 'Sales & Purchase',
      hasSubRoute: true,
      icon: 'assets/img/icons/purchase1.svg',
      showSubRoute: false,
      activeRoute: 'users',
      subRoutes: [{
        tittle: 'Sales',
        hasSubRoute: true,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.salesList,
        subRoutes: [{
          tittle: 'Sales',
          hasSubRoute: false,
          showSubRoute: false,
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.salesList,
          subRoutes: []
        }, {
          tittle: 'Invoice',
          hasSubRoute: false,
          showSubRoute: false,
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.invoiceSettings,
          subRoutes: []
        }, {
          tittle: 'Sales Return',
          hasSubRoute: false,
          showSubRoute: false,
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.salesReturn,
          subRoutes: []
        }, {
          tittle: 'Quotation',
          hasSubRoute: false,
          showSubRoute: false,
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.quotationList,
          subRoutes: []
        }, {
          tittle: 'POS',
          hasSubRoute: false,
          showSubRoute: false,
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.pos,
          subRoutes: []
        }]
      }, {
        tittle: 'Purchases',
        hasSubRoute: true,
        icon: 'assets/img/icons/purchase1.svg',
        showSubRoute: false,
        activeRoute: 'users',
        subRoutes: [{
          tittle: 'Purchases',
          hasSubRoute: false,
          showSubRoute: false,
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.purchaseList,
          subRoutes: []
        }, {
          tittle: 'Purchase Order',
          hasSubRoute: false,
          showSubRoute: false,
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.purchaseOrderReport,
          subRoutes: []
        }, {
          tittle: 'Purchase Return',
          hasSubRoute: false,
          showSubRoute: false,
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.purchaseReturns,
          subRoutes: []
        }, {
          tittle: 'ManageStock',
          hasSubRoute: false,
          showSubRoute: false,
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.manageStocks,
          subRoutes: []
        }, {
          tittle: 'Stock Adjustment',
          hasSubRoute: false,
          showSubRoute: false,
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.stockAdjustment,
          subRoutes: []
        }, {
          tittle: 'Sub Category',
          hasSubRoute: false,
          showSubRoute: false,
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.subCategories,
          subRoutes: []
        }, {
          tittle: 'Stock Transfer',
          hasSubRoute: false,
          showSubRoute: false,
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.stockTransfer,
          subRoutes: []
        }]
      }, {
        tittle: 'Expenses',
        hasSubRoute: true,
        showSubRoute: true,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.stockTransfer,
        subRoutes: [{
          tittle: 'Expenses',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.expenseList
        }, {
          tittle: 'Expense Category',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.expenseCategory
        }]
      }]
    }, {
      tittle: 'User Management',
      hasSubRoute: true,
      icon: 'assets/img/icons/users1.svg',
      showSubRoute: false,
      activeRoute: 'users',
      subRoutes: [{
        tittle: 'Roles & Permissions',
        hasSubRoute: true,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.users,
        subRoutes: [{
          tittle: 'Roles & Permissions',
          hasSubRoute: false,
          showSubRoute: false,
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.rolesPermission,
          subRoutes: []
        }, {
          tittle: 'Delete Account Request',
          hasSubRoute: false,
          showSubRoute: false,
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.deleteaccount,
          subRoutes: []
        }]
      }, {
        tittle: 'Base UI',
        hasSubRoute: true,
        icon: 'assets/img/icons/printer.svg',
        showSubRoute: false,
        activeRoute: 'users',
        subRoutes: [{
          tittle: 'Alerts',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiAlerts,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Accordion',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiAccordion,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Avatar',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiAvatar,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Badges',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiBadges,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Border',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiBorders,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Buttons',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiButtons,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Button Group',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiButtonsGroup,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Breadcrumb',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiBreadcrumb,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Card',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiCards,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Carousel',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiCarousel,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Colors',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiColors,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Dropdowns',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiDropdowns,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Grid',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiGrid,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Images',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiImages,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Lightbox',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiLightbox,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Media',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiMedia,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Modals',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiModals,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Offcanvas',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiOffcanvas,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Pagination',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiPagination,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Popovers',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiPopovers,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Progress',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiProgress,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Placeholders',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiPlaceholders,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Range Slider',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiRangeSlider,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Spinner',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiSpinner,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Sweet Alerts',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiSweetAlerts,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Tabs',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiNavTabs,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Toasts',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiToasts,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Tooltips',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiTooltips,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Typography',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiTypography,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Video',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.uiVideo,
          hasSubRoute: false,
          showSubRoute: false
        }]
      }, {
        tittle: 'Advanced UI',
        hasSubRoute: true,
        showSubRoute: false,
        activeRoute: 'users',
        subRoutes: [{
          tittle: 'Ribbon',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.ribbon,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Clipboard',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.clipboard,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Drag & Drop',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.dragDrop,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Rating',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.rating,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Text Editor',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.textEditor,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Counter',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.counter,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Scrollbar',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.scrollbar,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Timeline',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.timeline,
          hasSubRoute: false,
          showSubRoute: false
        }]
      }, {
        tittle: 'Charts',
        hasSubRoute: true,
        showSubRoute: false,
        activeRoute: 'users',
        subRoutes: [{
          tittle: 'Apex Charts',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.chartApex,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Ng2 Charts',
          hasSubRoute: false,
          showSubRoute: false,
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.chartNg2,
          subRoutes: []
        }, {
          tittle: 'Prime NG Charts',
          hasSubRoute: false,
          showSubRoute: false,
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.chartPrime,
          subRoutes: []
        }]
      }, {
        tittle: 'Primary-icons',
        hasSubRoute: true,
        showSubRoute: false,
        activeRoute: 'users',
        subRoutes: [{
          tittle: 'Fontawesome Icons',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.iconFontAwesome,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Feather Icons',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.iconFeather,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Ionic Icons',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.iconIonic,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Material Icons',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.iconMaterial,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Pe7 Icons',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.iconPe7,
          hasSubRoute: false,
          showSubRoute: false
        }]
      }, {
        tittle: 'Secondary-icons',
        hasSubRoute: true,
        showSubRoute: false,
        activeRoute: 'users',
        subRoutes: [{
          tittle: 'Simpleline Icons',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.iconSimpleline,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Themify Icons',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.iconThemify,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Weather Icons',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.iconWeather,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Typicon Icons',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.iconTypicon,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Flag Icons',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.iconFlag,
          hasSubRoute: false,
          showSubRoute: false
        }]
      }, {
        tittle: 'Forms',
        hasSubRoute: true,
        showSubRoute: false,
        activeRoute: 'users',
        subRoutes: [{
          tittle: 'Basic Inputs',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.formBasicInputs,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Checkbox & Radios',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.formCheckboxRadios,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Input Groups',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.formInputsGroups,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Form Select',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.formSelect,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Input Masks',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.formMask,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'File Uploads',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.formFileUpload,
          hasSubRoute: false,
          showSubRoute: false
        }]
      }]
    }, {
      tittle: 'Profile',
      hasSubRoute: true,
      icon: 'assets/img/icons/users1.svg',
      showSubRoute: false,
      subRoutes: [{
        tittle: 'Profile',
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.generalSettings,
        hasSubRoute: false,
        showSubRoute: false
      }, {
        tittle: 'Authentication',
        hasSubRoute: true,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.purchaseReport,
        subRoutes: [{
          tittle: 'Login',
          hasSubRoute: true,
          showSubRoute: false,
          subRoutes: [{
            tittle: 'Cover',
            route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.signIn,
            hasSubRoute: false,
            showSubRoute: false
          }, {
            tittle: 'Illustration',
            route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.signIn2,
            hasSubRoute: false,
            showSubRoute: false
          }, {
            tittle: 'Basic',
            route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.signIn3,
            hasSubRoute: false,
            showSubRoute: false
          }]
        }]
      }, {
        tittle: 'Pages',
        hasSubRoute: true,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.purchaseReport,
        subRoutes: [{
          tittle: '404 Error',
          hasSubRoute: true,
          showSubRoute: false,
          subRoutes: []
        }, {
          tittle: '500 Error',
          hasSubRoute: true,
          showSubRoute: false,
          subRoutes: []
        }, {
          tittle: 'Blank page',
          hasSubRoute: true,
          showSubRoute: false,
          subRoutes: []
        }, {
          tittle: 'Comming Soon',
          hasSubRoute: true,
          showSubRoute: false,
          subRoutes: []
        }]
      }]
    }, {
      tittle: 'Reports',
      hasSubRoute: true,
      icon: 'assets/img/icons/printer.svg',
      showSubRoute: false,
      activeRoute: 'users',
      subRoutes: [{
        tittle: 'Sales Report',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.salesReport,
        subRoutes: []
      }, {
        tittle: 'Purchase Report',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.purchaseReport,
        subRoutes: []
      }, {
        tittle: 'Inventory Report',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.inventoryReport,
        subRoutes: []
      }, {
        tittle: 'Invoice Report',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.invoiceReport,
        subRoutes: []
      }, {
        tittle: 'Supplier Report',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.supplierReport,
        subRoutes: []
      }, {
        tittle: 'Supplier Report',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.supplierReport,
        subRoutes: []
      }, {
        tittle: 'Customer Report',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.customerReport,
        subRoutes: []
      }, {
        tittle: 'Expense Report',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.expenseReport,
        subRoutes: []
      }, {
        tittle: 'Income Report',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.incomeReport,
        subRoutes: []
      }, {
        tittle: 'Tax Report',
        hasSubRoute: false,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.taxReport,
        subRoutes: []
      }]
    }, {
      tittle: 'Settings',
      hasSubRoute: true,
      icon: 'assets/img/icons/purchase1.svg',
      showSubRoute: false,
      activeRoute: 'users',
      subRoutes: [{
        tittle: 'General Settings',
        hasSubRoute: true,
        showSubRoute: false,
        route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.users,
        subRoutes: [{
          tittle: 'Profile',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.generalSettings,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Security',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.securitySettings,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Notifications',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.settingsNotification,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Connected Apps',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.connectedApps,
          hasSubRoute: false,
          showSubRoute: false
        }]
      }, {
        tittle: 'Website Settings',
        hasSubRoute: true,
        showSubRoute: false,
        subRoutes: [{
          tittle: 'System Settings',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.systemSettings,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Company Settings',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.companySettings,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Localization',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.localizationSettings,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Prefixes',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.prefixes,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Preference',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.preference,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Appearance',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.appearance,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Social Authentication',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.socialAuthentication,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Language',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.languageSettings,
          hasSubRoute: false,
          showSubRoute: false
        }]
      }, {
        tittle: 'App Settings',
        hasSubRoute: true,
        icon: 'assets/img/icons/printer.svg',
        showSubRoute: false,
        activeRoute: 'users',
        subRoutes: [{
          tittle: 'Invoice',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.invoiceSettings,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Printer',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.printerSettings,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'POS',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.posSettings,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Custom Fields',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.customFields,
          hasSubRoute: false,
          showSubRoute: false
        }]
      }, {
        tittle: 'System Settings',
        hasSubRoute: true,
        showSubRoute: false,
        activeRoute: 'users',
        subRoutes: [{
          tittle: 'Email',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.emailSettings,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'SMS Gateways',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.smsGateway,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'OTP',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.otpSettings,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'GDPR Cookies',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.gdprSettings,
          hasSubRoute: false,
          showSubRoute: false
        }]
      }, {
        tittle: 'Financial Settings',
        hasSubRoute: true,
        showSubRoute: false,
        activeRoute: 'users',
        subRoutes: [{
          tittle: 'Payment Gateway',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.paymentGatewaySettings,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Bank Accounts',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.bankSettingsGrid,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Tax Rates',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.taxRates,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Currencies',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.currencySettings,
          hasSubRoute: false,
          showSubRoute: false
        }]
      }, {
        tittle: 'Other Settings',
        hasSubRoute: true,
        showSubRoute: false,
        activeRoute: 'users',
        subRoutes: [{
          tittle: 'Storage',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.storageSettings,
          hasSubRoute: false,
          showSubRoute: false
        }, {
          tittle: 'Ban IP Address',
          route: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.banIpAddress,
          hasSubRoute: false,
          showSubRoute: false
        }]
      }, {
        tittle: 'Documentation',
        hasSubRoute: false,
        showSubRoute: false,
        activeRoute: 'users'
      }, {
        tittle: 'Changelog v2.0.3',
        hasSubRoute: false,
        showSubRoute: false,
        activeRoute: 'users'
      }]
    }];
    this.settings_sidebar = [{
      icon: 'feather icon-settings',
      title: 'General Settings',
      page: 'general-settings',
      subMenu: [{
        title: 'Profile',
        routes: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.generalSettings
      }, {
        title: 'Security',
        routes: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.securitySettings
      }, {
        title: 'Notifications',
        routes: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.settingsNotification
      }, {
        title: 'Connected Apps',
        routes: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.connectedApps
      }]
    }, {
      icon: 'feather icon-airplay',
      title: 'Website Settings',
      page: 'website-settings',
      subMenu: [{
        title: 'System Settings',
        routes: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.systemSettings
      }, {
        title: 'Company Settings',
        routes: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.companySettings
      }, {
        title: 'Localization',
        routes: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.localizationSettings
      }, {
        title: 'Prefixes',
        routes: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.prefixes
      }, {
        title: 'Preference',
        routes: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.preference
      }, {
        title: 'Appearance',
        routes: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.appearance
      }, {
        title: 'Social Authentication',
        routes: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.socialAuthentication
      }, {
        title: 'Language',
        routes: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.languageSettings
      }]
    }, {
      icon: 'feather icon-archive',
      title: 'App Settings',
      page: 'app-settings',
      subMenu: [{
        title: 'Invoice',
        routes: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.invoiceSettings
      }, {
        title: 'Printer',
        routes: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.printerSettings
      }, {
        title: 'POS',
        routes: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.posSettings
      }, {
        title: 'Custom Fields',
        routes: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.customFields
      }]
    }, {
      icon: 'feather icon-server',
      title: 'System Settings',
      page: 'system-settings',
      subMenu: [{
        title: 'Email',
        routes: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.emailSettings
      }, {
        title: 'SMS Gateways',
        routes: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.smsGateway
      }, {
        title: 'OTP',
        routes: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.otpSettings
      }, {
        title: 'GDPR Cookies',
        routes: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.gdprSettings
      }]
    }, {
      icon: 'feather icon-credit-card',
      title: 'Financial Settings',
      page: 'financial-settings',
      subMenu: [{
        title: 'Payment Gateway',
        routes: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.paymentGatewaySettings
      }, {
        title: 'Bank Accounts',
        routes: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.bankSettingsGrid
      }, {
        title: 'Tax Rates',
        routes: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.taxRates
      }, {
        title: 'Currencies',
        routes: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.currencySettings
      }]
    }, {
      icon: 'feather icon-layout',
      title: 'Other Settings',
      page: 'other-settings',
      subMenu: [{
        title: 'Storage',
        routes: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.storageSettings
      }, {
        title: 'Ban IP Address',
        routes: _core_index__WEBPACK_IMPORTED_MODULE_0__.routes.banIpAddress
      }]
    }];
    this.videocall = [{
      img: 'assets/img/users/user-01.jpg',
      name: 'Barbara'
    }, {
      img: 'assets/img/users/user-02.jpg',
      name: 'Linnea'
    }, {
      img: 'assets/img/users/user-05.jpg',
      name: 'Richard'
    }, {
      img: 'assets/img/users/user-03.jpg',
      name: 'Freda'
    }];
  }
  toggleCollapse() {
    this.collapseSubject.next(!this.collapseSubject.value);
  }
  switchSideMenuPosition() {
    if (localStorage.getItem('sideBarPosition')) {
      this.sideBarPosition.next('false');
      this.expandSideBar.next(true);
      localStorage.removeItem('sideBarPosition');
    } else {
      this.sideBarPosition.next('true');
      this.expandSideBar.next(false);
      localStorage.setItem('sideBarPosition', 'true');
    }
  }
  switchMobileSideBarPosition() {
    if (localStorage.getItem('isMobileSidebar')) {
      this.toggleMobileSideBar.next('false');
      localStorage.removeItem('isMobileSidebar');
    } else {
      this.toggleMobileSideBar.next('true');
      localStorage.setItem('isMobileSidebar', 'true');
    }
  }
  static {
    this.ɵfac = function SidebarService_Factory(t) {
      return new (t || SidebarService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: SidebarService,
      factory: SidebarService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 13970:
/*!*********************************************************!*\
  !*** ./src/app/core/service/spinner/spinner.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpinnerService: () => (/* binding */ SpinnerService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class SpinnerService {
  constructor() {
    this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.loading$ = this._loading.asObservable();
  }
  show() {
    this._loading.next(true);
  }
  hide() {
    setTimeout(() => {
      this._loading.next(false);
    }, 400);
  }
  static {
    this.ɵfac = function SpinnerService_Factory(t) {
      return new (t || SpinnerService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: SpinnerService,
      factory: SpinnerService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 14860:
/*!*************************************************************************!*\
  !*** ./src/app/shared/custom-pagination/custom-pagination.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomPaginationComponent: () => (/* binding */ CustomPaginationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _pagination_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination.service */ 96414);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);



const _c0 = a0 => ({
  disabled: a0
});
function CustomPaginationComponent_For_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomPaginationComponent_For_13_Conditional_3_Template_li_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.moveToPage(ctx_r2.currentPage - 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " ... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r2.currentPage === 1);
  }
}
function CustomPaginationComponent_For_13_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomPaginationComponent_For_13_Conditional_4_Template_li_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.moveToPage(ctx_r2.currentPage + 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " ... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r2.currentPage >= ctx_r2.pageNumberArray[ctx_r2.pageNumberArray.length - 2] || ctx_r2.totalData < ctx_r2.serialNumberArray[ctx_r2.serialNumberArray.length - 1]);
  }
}
function CustomPaginationComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 6)(1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomPaginationComponent_For_13_Template_a_click_1_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.moveToPage(item_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CustomPaginationComponent_For_13_Conditional_3_Template, 3, 1, "li", 11)(4, CustomPaginationComponent_For_13_Conditional_4_Template, 3, 1, "li", 11);
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r6 = ctx.$index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", item_r2 === ctx_r2.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r2.pageNumberArray[ctx_r2.currentPage - 2] > item_r2 && item_r2 !== 1 && ctx_r2.pageNumberArray.length > 6 || ctx_r2.pageNumberArray[ctx_r2.currentPage] < item_r2 && item_r2 !== 1 && ctx_r2.pageNumberArray.length > 6 && ctx_r2.pageNumberArray.length !== item_r2 ? "hide-page-no" : "show-page-no");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r2, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](3, i_r6 === 0 && ctx_r2.pageNumberArray.length > 6 && ctx_r2.currentPage > 2 ? 3 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](4, i_r6 === ctx_r2.pageNumberArray.length - 2 && ctx_r2.pageNumberArray.length > 6 ? 4 : -1);
  }
}
class CustomPaginationComponent {
  //** / pagination variables
  constructor(pagination) {
    this.pagination = pagination;
    this.pageSize = 10;
    this.tableData = [];
    // pagination variables
    this.lastIndex = 0;
    this.totalData = 0;
    this.skip = 0;
    this.limit = this.pageSize;
    this.pageIndex = 0;
    this.serialNumberArray = [];
    this.currentPage = 1;
    this.pageNumberArray = [];
    this.pageSelection = [];
    this.totalPages = 0;
    this.tableData = [];
    this.pagination.calculatePageSize.subscribe(res => {
      this.calculateTotalPages(res.totalData, res.pageSize, res.tableData, res.serialNumberArray);
      this.pageSize = res.pageSize;
    });
    this.pagination.changePagesize.subscribe(res => {
      this.changePageSize(res.pageSize);
    });
  }
  getMoreData(event) {
    if (event == 'next') {
      this.currentPage++;
      this.pageIndex = this.currentPage - 1;
      this.limit += this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      // this.getTableData();
      this.pagination.tablePageSize.next({
        skip: this.skip,
        limit: this.limit,
        pageSize: this.pageSize
      });
    } else if (event == 'previous') {
      this.currentPage--;
      this.pageIndex = this.currentPage - 1;
      this.limit -= this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      // this.getTableData();
      this.pagination.tablePageSize.next({
        skip: this.skip,
        limit: this.limit,
        pageSize: this.pageSize
      });
    }
  }
  moveToPage(pageNumber) {
    this.currentPage = pageNumber;
    this.skip = this.pageSelection[pageNumber - 1].skip;
    this.limit = this.pageSelection[pageNumber - 1].limit;
    if (pageNumber > this.currentPage) {
      this.pageIndex = pageNumber - 1;
    } else if (pageNumber < this.currentPage) {
      this.pageIndex = pageNumber + 1;
    }
    // this.getTableData();
    this.pagination.tablePageSize.next({
      skip: this.skip,
      limit: this.limit,
      pageSize: this.pageSize
    });
  }
  changePageSize(pageSize) {
    this.pageSelection = [];
    this.limit = pageSize;
    this.skip = 0;
    this.currentPage = 1;
    // this.getTableData();
    this.pagination.tablePageSize.next({
      skip: this.skip,
      limit: this.limit,
      pageSize: this.pageSize
    });
  }
  calculateTotalPages(totalData, pageSize, tableData, serialNumberArray) {
    this.tableData = tableData;
    this.pageNumberArray = [];
    this.serialNumberArray = serialNumberArray;
    this.totalData = totalData;
    this.totalPages = totalData / pageSize;
    if (this.totalPages % 1 != 0) {
      this.totalPages = Math.trunc(this.totalPages + 1);
    }
    for (let i = 1; i <= this.totalPages; i++) {
      const limit = pageSize * i;
      const skip = limit - pageSize;
      this.pageNumberArray.push(i);
      this.pageSelection.push({
        skip: skip,
        limit: limit
      });
    }
  }
  static {
    this.ɵfac = function CustomPaginationComponent_Factory(t) {
      return new (t || CustomPaginationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_pagination_service__WEBPACK_IMPORTED_MODULE_0__.PaginationService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CustomPaginationComponent,
      selectors: [["app-custom-pagination"]],
      decls: 17,
      vars: 8,
      consts: [[1, "table-footer"], [1, "dataTables_length"], [1, "pagination"], [1, "entries"], [1, "col-sm-12", "col-md-7"], [1, "pagination_section"], [1, "page-item", 3, "ngClass"], ["href", "javascript:void(0);", "tabindex", "-1", 1, "page-link", 3, "click"], [1, "fa", "fa-angle-left"], ["href", "javascript:void(0);", 1, "page-link", 3, "click"], [1, "fa", "fa-angle-right"], [1, "page-item", 3, "hidden"], [1, "page-item", 3, "click", "hidden"], ["href", "javascript:void(0);", 1, "page-link"]],
      template: function CustomPaginationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "ul", 2)(9, "li", 6)(10, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomPaginationComponent_Template_a_click_10_listener() {
            return ctx.getMoreData("previous");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](12, CustomPaginationComponent_For_13_Template, 5, 6, null, null, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 6)(15, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomPaginationComponent_Template_a_click_15_listener() {
            return ctx.getMoreData("next");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" Showing ", ctx.limit, " of ", ctx.totalData, " Results ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx.currentPage === 1));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.pageNumberArray);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx.currentPage === ctx.pageNumberArray[ctx.pageNumberArray.length - 1] || ctx.tableData.length === 0));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 52955:
/*!**********************************************************************!*\
  !*** ./src/app/shared/custom-pagination/custom-pagination.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomPaginationModule: () => (/* binding */ CustomPaginationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _custom_pagination_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-pagination.component */ 14860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




class CustomPaginationModule {
  static {
    this.ɵfac = function CustomPaginationModule_Factory(t) {
      return new (t || CustomPaginationModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: CustomPaginationModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CustomPaginationModule, {
    declarations: [_custom_pagination_component__WEBPACK_IMPORTED_MODULE_0__.CustomPaginationComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule],
    exports: [_custom_pagination_component__WEBPACK_IMPORTED_MODULE_0__.CustomPaginationComponent]
  });
})();

/***/ }),

/***/ 96414:
/*!****************************************************************!*\
  !*** ./src/app/shared/custom-pagination/pagination.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaginationService: () => (/* binding */ PaginationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class PaginationService {
  constructor() {
    this.tablePageSize = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({
      skip: 0,
      limit: 10,
      pageSize: 10
    });
    this.calculatePageSize = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({
      totalData: 0,
      pageSize: 10,
      tableData: [],
      tableDataCopy: [],
      serialNumberArray: []
    });
    this.changePagesize = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({
      pageSize: 10
    });
  }
  static {
    this.ɵfac = function PaginationService_Factory(t) {
      return new (t || PaginationService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: PaginationService,
      factory: PaginationService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 31747:
/*!**************************************************!*\
  !*** ./src/app/shared/feather/feather.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatherIconModule: () => (/* binding */ FeatherIconModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class FeatherIconModule {
  static {
    this.ɵfac = function FeatherIconModule_Factory(t) {
      return new (t || FeatherIconModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FeatherIconModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
  }
}

/***/ }),

/***/ 36403:
/*!****************************************************!*\
  !*** ./src/app/shared/material/material.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialModule: () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 77697);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ 22047);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/clipboard */ 52352);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 50854);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ 79975);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/stepper */ 56622);
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/stepper */ 63985);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ 39552);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-bar */ 26354);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ 12772);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);



















class MaterialModule {
  static {
    this.ɵfac = function MaterialModule_Factory(t) {
      return new (t || MaterialModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      providers: [{
        provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.STEPPER_GLOBAL_OPTIONS,
        useValue: {
          showError: true
        }
      }],
      imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__.MatSlideToggleModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSortModule, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_6__.ClipboardModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__.DragDropModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__.ScrollingModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__.MatStepperModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__.MatProgressBarModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipsModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepperModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__.MatSlideToggleModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSortModule, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_6__.ClipboardModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__.DragDropModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__.ScrollingModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__.MatStepperModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__.MatProgressBarModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipsModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepperModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
    imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__.MatSlideToggleModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSortModule, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_6__.ClipboardModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__.DragDropModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__.ScrollingModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__.MatStepperModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__.MatProgressBarModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipsModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepperModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule],
    exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__.MatSlideToggleModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSortModule, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_6__.ClipboardModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__.DragDropModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__.ScrollingModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__.MatStepperModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__.MatProgressBarModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipsModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepperModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule]
  });
})();

/***/ }),

/***/ 97086:
/*!*************************************************************!*\
  !*** ./src/app/shared/ngx-bootstrap/ngxbootstrap.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NgxbootstrapModule: () => (/* binding */ NgxbootstrapModule)
/* harmony export */ });
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/popover */ 64393);
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ 36465);
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-lightbox */ 36736);
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-scrollbar */ 74091);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);







class NgxbootstrapModule {
  static {
    this.ɵfac = function NgxbootstrapModule_Factory(t) {
      return new (t || NgxbootstrapModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgxbootstrapModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_2__.PopoverModule.forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__.TooltipModule.forRoot(), ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__.LightboxModule, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_4__.NgScrollbarModule, ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_2__.PopoverModule, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__.TooltipModule, ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__.LightboxModule, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_4__.NgScrollbarModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgxbootstrapModule, {
    imports: [ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_2__.PopoverModule, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__.TooltipModule, ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__.LightboxModule, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_4__.NgScrollbarModule],
    exports: [ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_2__.PopoverModule, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__.TooltipModule, ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__.LightboxModule, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_4__.NgScrollbarModule]
  });
})();

/***/ }),

/***/ 93887:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sharedModule: () => (/* binding */ sharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-apexcharts */ 33117);
/* harmony import */ var _core_core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/core.index */ 82351);
/* harmony import */ var _core_interceptor_spinner_spinner_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/interceptor/spinner/spinner.interceptor */ 8326);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material/material.module */ 36403);
/* harmony import */ var _feather_feather_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feather/feather.module */ 31747);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-owl-carousel-o */ 96821);
/* harmony import */ var _custom_pagination_custom_pagination_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-pagination/custom-pagination.module */ 52955);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fullcalendar/angular */ 87997);
/* harmony import */ var src_app_shared_ngx_bootstrap_ngxbootstrap_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/ngx-bootstrap/ngxbootstrap.module */ 97086);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 50854);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng2-charts */ 57839);
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-editor */ 97283);
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-bootstrap/popover */ 64393);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 98379);
/* harmony import */ var _core_component_settings_common_settings_sidebar_settings_sidebar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core-component/settings/common/settings-sidebar/settings-sidebar.module */ 25165);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-mask */ 46015);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-dropzone */ 53947);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/stepper */ 56622);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/chips */ 12772);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/autocomplete */ 79771);
/* harmony import */ var lightgallery_angular__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! lightgallery/angular */ 4935);
/* harmony import */ var ngx_mat_intl_tel_input__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-mat-intl-tel-input */ 81503);
/* harmony import */ var ngx_countup__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-countup */ 67305);
/* harmony import */ var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/timepicker */ 3387);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! angular-feather */ 54341);
/* harmony import */ var angular_feather_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-feather/icons */ 51474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);





































const icons = {
  Tool: angular_feather_icons__WEBPACK_IMPORTED_MODULE_7__.Tool
};
class sharedModule {
  static {
    this.ɵfac = function sharedModule_Factory(t) {
      return new (t || sharedModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
      type: sharedModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
      providers: [_core_core_index__WEBPACK_IMPORTED_MODULE_0__.DataService, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe, ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_10__.TimepickerActions, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__.BsDatepickerConfig, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HTTP_INTERCEPTORS,
        useClass: _core_interceptor_spinner_spinner_interceptor__WEBPACK_IMPORTED_MODULE_1__.SpinnerInterceptor,
        multi: true
      }],
      imports: [_feather_feather_module__WEBPACK_IMPORTED_MODULE_3__.FeatherIconModule, _material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_13__.NgApexchartsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__.CarouselModule, _custom_pagination_custom_pagination_module__WEBPACK_IMPORTED_MODULE_4__.CustomPaginationModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__.DragDropModule, ngx_mask__WEBPACK_IMPORTED_MODULE_17__.NgxMaskModule.forRoot({
        showMaskTyped: false
      }), ng2_charts__WEBPACK_IMPORTED_MODULE_18__.NgChartsModule.forRoot(), _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_19__.FullCalendarModule, src_app_shared_ngx_bootstrap_ngxbootstrap_module__WEBPACK_IMPORTED_MODULE_5__.NgxbootstrapModule, ngx_editor__WEBPACK_IMPORTED_MODULE_20__.NgxEditorModule, ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_21__.PopoverModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__.MatTooltipModule, primeng_toast__WEBPACK_IMPORTED_MODULE_23__.ToastModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__.BsDatepickerModule.forRoot(), _core_component_settings_common_settings_sidebar_settings_sidebar_module__WEBPACK_IMPORTED_MODULE_6__.SettingsSidebarModule, ngx_mask__WEBPACK_IMPORTED_MODULE_17__.NgxMaskModule.forRoot({
        showMaskTyped: false
      }), ngx_dropzone__WEBPACK_IMPORTED_MODULE_24__.NgxDropzoneModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__.MatStepperModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatFormFieldModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_27__.MatChipsModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_28__.MatAutocompleteModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, lightgallery_angular__WEBPACK_IMPORTED_MODULE_29__.LightgalleryModule, ngx_mat_intl_tel_input__WEBPACK_IMPORTED_MODULE_30__.NgxMatIntlTelInputComponent, ngx_countup__WEBPACK_IMPORTED_MODULE_31__.CountUpModule, ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_10__.TimepickerModule, angular_feather__WEBPACK_IMPORTED_MODULE_32__.FeatherModule.pick(icons), _material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _feather_feather_module__WEBPACK_IMPORTED_MODULE_3__.FeatherIconModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_13__.NgApexchartsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__.CarouselModule, _custom_pagination_custom_pagination_module__WEBPACK_IMPORTED_MODULE_4__.CustomPaginationModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__.DragDropModule, ng2_charts__WEBPACK_IMPORTED_MODULE_18__.NgChartsModule, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_19__.FullCalendarModule, src_app_shared_ngx_bootstrap_ngxbootstrap_module__WEBPACK_IMPORTED_MODULE_5__.NgxbootstrapModule, ngx_mask__WEBPACK_IMPORTED_MODULE_17__.NgxMaskModule, ngx_editor__WEBPACK_IMPORTED_MODULE_20__.NgxEditorModule, ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_21__.PopoverModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__.MatTooltipModule, primeng_toast__WEBPACK_IMPORTED_MODULE_23__.ToastModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__.BsDatepickerModule, _core_component_settings_common_settings_sidebar_settings_sidebar_module__WEBPACK_IMPORTED_MODULE_6__.SettingsSidebarModule, ngx_mask__WEBPACK_IMPORTED_MODULE_17__.NgxMaskModule, ngx_dropzone__WEBPACK_IMPORTED_MODULE_24__.NgxDropzoneModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__.MatStepperModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatFormFieldModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_27__.MatChipsModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_28__.MatAutocompleteModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, lightgallery_angular__WEBPACK_IMPORTED_MODULE_29__.LightgalleryModule, ngx_countup__WEBPACK_IMPORTED_MODULE_31__.CountUpModule, ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_10__.TimepickerModule, angular_feather__WEBPACK_IMPORTED_MODULE_32__.FeatherModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](sharedModule, {
    imports: [_feather_feather_module__WEBPACK_IMPORTED_MODULE_3__.FeatherIconModule, _material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_13__.NgApexchartsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__.CarouselModule, _custom_pagination_custom_pagination_module__WEBPACK_IMPORTED_MODULE_4__.CustomPaginationModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__.DragDropModule, ngx_mask__WEBPACK_IMPORTED_MODULE_17__.NgxMaskModule, ng2_charts__WEBPACK_IMPORTED_MODULE_18__.NgChartsModule, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_19__.FullCalendarModule, src_app_shared_ngx_bootstrap_ngxbootstrap_module__WEBPACK_IMPORTED_MODULE_5__.NgxbootstrapModule, ngx_editor__WEBPACK_IMPORTED_MODULE_20__.NgxEditorModule, ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_21__.PopoverModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__.MatTooltipModule, primeng_toast__WEBPACK_IMPORTED_MODULE_23__.ToastModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__.BsDatepickerModule, _core_component_settings_common_settings_sidebar_settings_sidebar_module__WEBPACK_IMPORTED_MODULE_6__.SettingsSidebarModule, ngx_mask__WEBPACK_IMPORTED_MODULE_17__.NgxMaskModule, ngx_dropzone__WEBPACK_IMPORTED_MODULE_24__.NgxDropzoneModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__.MatStepperModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatFormFieldModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_27__.MatChipsModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_28__.MatAutocompleteModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, lightgallery_angular__WEBPACK_IMPORTED_MODULE_29__.LightgalleryModule, ngx_mat_intl_tel_input__WEBPACK_IMPORTED_MODULE_30__.NgxMatIntlTelInputComponent, ngx_countup__WEBPACK_IMPORTED_MODULE_31__.CountUpModule, ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_10__.TimepickerModule, angular_feather__WEBPACK_IMPORTED_MODULE_32__.FeatherModule],
    exports: [_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _feather_feather_module__WEBPACK_IMPORTED_MODULE_3__.FeatherIconModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_13__.NgApexchartsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__.CarouselModule, _custom_pagination_custom_pagination_module__WEBPACK_IMPORTED_MODULE_4__.CustomPaginationModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__.DragDropModule, ng2_charts__WEBPACK_IMPORTED_MODULE_18__.NgChartsModule, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_19__.FullCalendarModule, src_app_shared_ngx_bootstrap_ngxbootstrap_module__WEBPACK_IMPORTED_MODULE_5__.NgxbootstrapModule, ngx_mask__WEBPACK_IMPORTED_MODULE_17__.NgxMaskModule, ngx_editor__WEBPACK_IMPORTED_MODULE_20__.NgxEditorModule, ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_21__.PopoverModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__.MatTooltipModule, primeng_toast__WEBPACK_IMPORTED_MODULE_23__.ToastModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__.BsDatepickerModule, _core_component_settings_common_settings_sidebar_settings_sidebar_module__WEBPACK_IMPORTED_MODULE_6__.SettingsSidebarModule, ngx_mask__WEBPACK_IMPORTED_MODULE_17__.NgxMaskModule, ngx_dropzone__WEBPACK_IMPORTED_MODULE_24__.NgxDropzoneModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__.MatStepperModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatFormFieldModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_27__.MatChipsModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_28__.MatAutocompleteModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, lightgallery_angular__WEBPACK_IMPORTED_MODULE_29__.LightgalleryModule, ngx_mat_intl_tel_input__WEBPACK_IMPORTED_MODULE_30__.NgxMatIntlTelInputComponent, ngx_countup__WEBPACK_IMPORTED_MODULE_31__.CountUpModule, ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_10__.TimepickerModule, angular_feather__WEBPACK_IMPORTED_MODULE_32__.FeatherModule]
  });
})();

/***/ }),

/***/ 45312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  BACKEND_URL: 'http://donation.theninthnode.com/api/v1'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 84429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 50635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 45312);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(84429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map