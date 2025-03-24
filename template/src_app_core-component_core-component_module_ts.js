"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_core-component_module_ts"],{

/***/ 95182:
/*!*************************************************************!*\
  !*** ./src/app/common-component/header/header.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_core_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/core.index */ 82351);
/* harmony import */ var src_app_shared_webstorge_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/webstorge.service */ 96983);
/* harmony import */ var _core_component_pages_profile_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core-component/pages/profile/profile.service */ 43431);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);








const _c0 = a0 => ({
  "d-none": a0
});
function HeaderComponent_a_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 19)(1, "span", 20)(2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 23)(5, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r0.profileImage, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.userName || "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.userRole || "Loading...");
  }
}
class HeaderComponent {
  constructor(Router, common, sidebar, webStorage, profileService, router) {
    this.Router = Router;
    this.common = common;
    this.sidebar = sidebar;
    this.webStorage = webStorage;
    this.profileService = profileService;
    this.router = router;
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    this.activePath = '';
    this.showSearch = false;
    this.changeLayout = '1';
    this.darkTheme = false;
    this.logoPath = '';
    this.miniSidebar = false;
    this.elem = document.documentElement;
    this.addClass = false;
    this.base = '';
    this.page = '';
    this.last = '';
    this.profileImage = "";
    this.userName = "";
    this.userRole = "";
    this.activePath = this.Router.url.split('/')[2];
    this.Router.events.subscribe(data => {
      if (data instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationStart) {
        this.activePath = data.url.split('/')[2];
      }
    });
    this.sidebar.sideBarPosition.subscribe(res => {
      if (res == 'true') {
        this.miniSidebar = true;
      } else {
        this.miniSidebar = false;
      }
    });
    this.common.base.subscribe(base => {
      this.base = base;
    });
    this.common.page.subscribe(page => {
      this.page = page;
    });
    this.common.last.subscribe(last => {
      this.last = last;
    });
  }
  ngOnInit() {
    this.loadUserProfile();
  }
  loadUserProfile() {
    this.profileService.getProfile().subscribe({
      next: data => {
        console.log(data);
        this.userName = data.results.first_name + " " + data.results.last_name;
        this.userRole = data.results.user_role.role_name;
        this.profileImage = data.results.profile_img_url;
      },
      error: err => {
        console.error('Error fetching profile:', err);
        if (err.status === 401) {
          this.router.navigate(['/signin']);
        }
      }
    });
  }
  logout() {
    this.webStorage.Logout();
  }
  toggleSidebar() {
    this.sidebar.switchSideMenuPosition();
  }
  togglesMobileSideBar() {
    this.sidebar.switchMobileSideBarPosition();
  }
  miniSideBarMouseHover(position) {
    if (position == 'over') {
      this.sidebar.expandSideBar.next(true);
    } else {
      this.sidebar.expandSideBar.next(false);
    }
  }
  fullscreen() {
    if (!document.fullscreenElement) {
      this.elem.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }
  static {
    this.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_1__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_webstorge_service__WEBPACK_IMPORTED_MODULE_2__.WebstorgeService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_component_pages_profile_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 31,
      vars: 9,
      consts: [[1, "header"], [1, "header-left", "active", 3, "mouseover", "mouseout"], ["id", "mobile_btn", 1, "mobile_btn", 3, "click", "ngClass"], [1, "bar-icon"], [1, "nav", "user-menu"], [1, "nav-item", "nav-searchinputs"], [1, "nav-item", "dropdown", "has-arrow", "main-drop"], ["href", "javascript:void(0);", "class", "dropdown-toggle nav-link", "data-bs-toggle", "dropdown", 4, "ngIf"], [1, "dropdown-menu", "menu-drop-user"], [1, "profilename"], [1, "m-0"], [1, "dropdown-item", 3, "routerLink"], [1, "feather", "icon-user"], [1, "dropdown-item", "logout", "pb-0", 3, "routerLink"], ["src", "assets/img/icons/log-out.svg", "alt", "img", 1, "me-2"], [1, "dropdown", "mobile-user-menu"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "fa", "fa-ellipsis-v"], [1, "dropdown-menu", "dropdown-menu-right"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "nav-link"], [1, "user-info"], [1, "user-letter"], ["alt", "User Image", 1, "img-fluid", 3, "src"], [1, "user-detail"], [1, "user-name"], [1, "user-role"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseover", function HeaderComponent_Template_div_mouseover_1_listener() {
            return ctx.miniSideBarMouseHover("over");
          })("mouseout", function HeaderComponent_Template_div_mouseout_1_listener() {
            return ctx.miniSideBarMouseHover("out");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_2_listener() {
            return ctx.togglesMobileSideBar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "span")(5, "span")(6, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ul", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "li", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "li", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, HeaderComponent_a_10_Template, 9, 3, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 8)(12, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "hr", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " My Profile");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "hr", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "img", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Logout");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 15)(22, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 18)(25, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "My Profile");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Logout");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](7, _c0, ctx.page === "pos"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.userName);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx.routes.profile);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx.routes.signIn);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx.routes.profile);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx.routes.generalSettings);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx.routes.signIn);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 50372:
/*!*************************************************************!*\
  !*** ./src/app/common-component/layout/layout.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutComponent: () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/core.index */ 82351);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);






const _c0 = a0 => ({
  "show-settings": a0
});
class LayoutComponent {
  constructor(settings, router) {
    this.settings = settings;
    this.router = router;
    this.routes = src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.routes;
    this.showPreview = false;
    this.themeMode = 'light_mode';
    this.layoutMode = 'default_mode';
    this.navigationColor = 'light_color';
    this.settings.themeMode.subscribe(res => {
      this.themeMode = res;
    });
    this.settings.layoutMode.subscribe(res => {
      this.layoutMode = res;
    });
    this.settings.navigationColor.subscribe(res => {
      this.navigationColor = res;
    });
  }
  changeThemeMode(theme) {
    this.settings.themeMode.next(theme);
    localStorage.setItem('themeMode', theme);
  }
  changeLayoutMode(layout) {
    this.settings.layoutMode.next(layout);
    localStorage.setItem('layoutMode', layout);
  }
  changeNavigationColor(color) {
    this.settings.navigationColor.next(color);
    localStorage.setItem('navigationColor', color);
  }
  resetAllMode() {
    this.settings.changeThemeMode('light_mode');
    this.settings.changeLayoutMode('default_mode');
    this.settings.changeNavigationColor('light_color');
  }
  setRtlFormat() {
    window.location.href = 'https://dreamspos.dreamstechnologies.com/angular/template-rtl';
  }
  static {
    this.ɵfac = function LayoutComponent_Factory(t) {
      return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LayoutComponent,
      selectors: [["app-layout"]],
      decls: 164,
      vars: 23,
      consts: [["id", "layoutDiv", 1, "sidebar-settings", "nav-toggle", 3, "click", "ngClass"], [1, "sidebar-content", "sticky-sidebar-one"], [1, "sidebar-header"], [1, "sidebar-theme-title"], [1, "close-sidebar-icon", "d-flex"], [1, "sidebar-refresh", "me-2", 3, "click"], ["href", "javascript:void(0);", 1, "sidebar-close", 3, "click"], [1, "sidebar-body", "p-0"], ["id", "theme_color", "method", "post"], [1, "theme-mode", "mb-0"], [1, "theme-body-main"], [1, "theme-head"], [1, "row"], [1, "col-xl-6", "ere"], [1, "layout-wrap"], [1, "d-flex", "align-items-center"], [1, "status-toggle", "d-flex", "align-items-center", "me-2", 3, "click"], ["type", "radio", "name", "theme-mode", "id", "light_mode", "value", "light_mode", 1, "check", "color-check", "stylemode", "lmode"], ["for", "light_mode", 1, "checktoggles"], ["src", "assets/img/theme/theme-img-01.jpg", "alt", ""], [1, "theme-name"], ["type", "radio", "name", "theme-mode", "id", "dark_mode", "value", "dark_mode", 1, "check", "color-check", "stylemode"], ["for", "dark_mode", 1, "checktoggles"], ["src", "assets/img/theme/theme-img-02.jpg", "alt", ""], ["id", "template_direction", "method", "post"], [1, "theme-mode", "border-0"], [1, "status-toggle", "d-flex", "align-items-center", "me-2"], ["type", "radio", "name", "direction", "id", "ltr", "value", "ltr", 1, "check", "direction"], ["for", "ltr", 1, "checktoggles", "active"], ["href", "javascript:void(0);"], ["type", "radio", "name", "direction", "id", "rtl", "value", "rtl", 1, "check", "direction"], ["for", "rtl", 1, "checktoggles"], ["href", "javascript:void(0);", "target", "_blank"], ["src", "assets/img/theme/theme-img-03.jpg", "alt", ""], ["id", "layout_mode", "method", "post"], [1, "theme-mode", "border-0", "mb-0"], ["type", "radio", "name", "layout", "id", "default_layout", "value", "default", 1, "check", "layout-mode"], ["for", "default_layout", 1, "checktoggles"], ["type", "radio", "name", "layout", "id", "box_layout", "value", "box", 1, "check", "layout-mode"], ["for", "box_layout", 1, "checktoggles"], ["src", "assets/img/theme/theme-img-07.jpg", "alt", ""], ["type", "radio", "name", "layout", "id", "collapse_layout", "value", "collapsed", 1, "check", "layout-mode"], ["for", "collapse_layout", 1, "checktoggles"], ["src", "assets/img/theme/theme-img-05.jpg", "alt", ""], ["type", "radio", "name", "layout", "id", "horizontal_layout", "value", "horizontal", 1, "check", "layout-mode"], ["for", "horizontal_layout", 1, "checktoggles"], ["src", "assets/img/theme/theme-img-06.jpg", "alt", ""], ["type", "radio", "name", "layout", "id", "modern_layout", "value", "modern", 1, "check", "layout-mode"], ["for", "modern_layout", 1, "checktoggles"], ["src", "assets/img/theme/theme-img-04.jpg", "alt", ""], ["id", "nav_color", "method", "post"], [1, "theme-mode"], [1, "col-xl-4", "ere"], ["type", "radio", "name", "nav_color", "id", "light_color", "value", "light", 1, "check", "nav-color"], ["for", "light_color", 1, "checktoggles"], ["type", "radio", "name", "nav_color", "id", "grey_color", "value", "grey", 1, "check", "nav-color"], ["for", "grey_color", 1, "checktoggles"], ["type", "radio", "name", "nav_color", "id", "dark_color", "value", "dark", 1, "check", "nav-color"], ["for", "dark_color", 1, "checktoggles"], [1, "sidebar-footer"], [1, "col-xl-6"], [1, "footer-preview-btn"], ["type", "button", 1, "btn", "btn-secondary", "w-100", 3, "click"], [1, "footer-reset-btn"], ["href", "https://themeforest.net/item/dreamspos-pos-inventory-management-admin-dashboard-template/38834413", "target", "_blank", 1, "btn", "btn-primary", "w-100"]],
      template: function LayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LayoutComponent_Template_div_click_0_listener() {
            return ctx.showPreview = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Theme Customizer");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Customize & Preview in Real Time");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4)(9, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LayoutComponent_Template_a_click_9_listener() {
            return ctx.resetAllMode();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u27F3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LayoutComponent_Template_a_click_11_listener() {
            return ctx.showPreview = !ctx.showPreview;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "X");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7)(14, "form", 8)(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Theme Mode");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Enjoy Dark & Light modes.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 12)(23, "div", 13)(24, "div", 14)(25, "div", 15)(26, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LayoutComponent_Template_div_click_26_listener() {
            return ctx.changeThemeMode("light_mode");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "img", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Light Mode");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 13)(33, "div", 14)(34, "div", 15)(35, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LayoutComponent_Template_div_click_35_listener() {
            return ctx.changeThemeMode("dark_mode");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "img", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Dark Mode");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "form", 24)(42, "div", 25)(43, "div", 11)(44, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Direction");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Select the direction for your app.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 12)(49, "div", 13)(50, "div", 14)(51, "div", 15)(52, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "label", 28)(55, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "img", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "LTR");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 13)(60, "div", 14)(61, "div", 15)(62, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LayoutComponent_Template_div_click_62_listener() {
            return ctx.setRtlFormat();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "input", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "label", 31)(65, "a", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "img", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "RTL");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "form", 34)(70, "div", 35)(71, "div", 11)(72, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Layout Mode");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Select the primary layout style for your app.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 12)(77, "div", 13)(78, "div", 14)(79, "div", 15)(80, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LayoutComponent_Template_div_click_80_listener() {
            return ctx.changeLayoutMode("default_mode");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "input", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "label", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "img", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Default");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 13)(87, "div", 14)(88, "div", 15)(89, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LayoutComponent_Template_div_click_89_listener() {
            return ctx.changeLayoutMode("box_mode");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "input", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "label", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "img", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Box");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 13)(96, "div", 14)(97, "div", 15)(98, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LayoutComponent_Template_div_click_98_listener() {
            return ctx.changeLayoutMode("collapsed_mode");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "input", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "label", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "img", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Collapsed");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 13)(105, "div", 14)(106, "div", 15)(107, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LayoutComponent_Template_div_click_107_listener() {
            return ctx.changeLayoutMode("horizontal_mode");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "input", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "label", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "img", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Horizontal");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 13)(114, "div", 14)(115, "div", 15)(116, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LayoutComponent_Template_div_click_116_listener() {
            return ctx.changeLayoutMode("modern_mode");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "input", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "label", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "img", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Modern");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "form", 50)(123, "div", 51)(124, "div", 11)(125, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Navigation Colors");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Setup the color for the Navigation");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 12)(130, "div", 52)(131, "div", 14)(132, "div", 15)(133, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LayoutComponent_Template_div_click_133_listener() {
            return ctx.changeNavigationColor("light_color");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](134, "input", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "label", 54)(136, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "Light");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 52)(139, "div", 14)(140, "div", 15)(141, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LayoutComponent_Template_div_click_141_listener() {
            return ctx.changeNavigationColor("grey_color");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](142, "input", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "label", 56)(144, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "Grey");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 52)(147, "div", 14)(148, "div", 15)(149, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LayoutComponent_Template_div_click_149_listener() {
            return ctx.changeNavigationColor("dark_color");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](150, "input", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "label", 58)(152, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "Dark");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 59)(155, "div", 12)(156, "div", 60)(157, "div", 61)(158, "button", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LayoutComponent_Template_button_click_158_listener() {
            return ctx.resetAllMode();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "Reset");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 60)(161, "div", 63)(162, "a", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "Buy Now");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](21, _c0, ctx.showPreview));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.themeMode === "light_mode");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.themeMode === "dark_mode");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.layoutMode === "default_mode");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.layoutMode === "box_mode");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.layoutMode === "collapsed_mode");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.layoutMode === "horizontal_mode");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.layoutMode === "modern_mode");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.navigationColor === "light_color");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.navigationColor === "grey_color");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.navigationColor === "dark_color");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 59866:
/*!***********************************************************************!*\
  !*** ./src/app/common-component/sidebar-one/sidebar-one.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidebarOneComponent: () => (/* binding */ SidebarOneComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/core.index */ 82351);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _core_component_pages_profile_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-component/pages/profile/profile.service */ 43431);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-scrollbar */ 74091);








const _c0 = a0 => ({
  "subdrop": a0
});
function SidebarOneComponent_For_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h6", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const mainTittle_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](mainTittle_r1.tittle);
  }
}
function SidebarOneComponent_For_6_For_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 5)(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const menu_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", menu_r2 == null ? null : menu_r2.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("icon-" + menu_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](menu_r2 == null ? null : menu_r2.menuValue);
  }
}
function SidebarOneComponent_For_6_For_4_Conditional_1_For_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const subMenus_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", subMenus_r5.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](subMenus_r5.menuValue);
  }
}
function SidebarOneComponent_For_6_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 6)(1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidebarOneComponent_For_6_For_4_Conditional_1_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const menu_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.expandSubMenus(menu_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](7, SidebarOneComponent_For_6_For_4_Conditional_1_For_8_Template, 3, 2, "li", null, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const menu_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r3.base === menu_r2.base1 || ctx_r3.base === menu_r2.base || ctx_r3.page === menu_r2.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, menu_r2.showSubRoute === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("icon-" + menu_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](menu_r2.menuValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", menu_r2.showSubRoute === true ? "d-block" : "d-none");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](menu_r2.subMenus);
  }
}
function SidebarOneComponent_For_6_For_4_Conditional_2_For_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const subMenus_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", subMenus_r7.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](subMenus_r7.menuValue);
  }
}
function SidebarOneComponent_For_6_For_4_Conditional_2_For_8_Conditional_1_For_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const subMenuTwo_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", subMenuTwo_r9.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](subMenuTwo_r9.menuValue);
  }
}
function SidebarOneComponent_For_6_For_4_Conditional_2_For_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 14)(1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidebarOneComponent_For_6_For_4_Conditional_2_For_8_Conditional_1_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const subMenus_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.openSubmenuOne(subMenus_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](5, SidebarOneComponent_For_6_For_4_Conditional_2_For_8_Conditional_1_For_6_Template, 3, 2, "li", null, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const subMenus_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r3.page === subMenus_r7.page1 || ctx_r3.page === subMenus_r7.page2 || ctx_r3.page === subMenus_r7.page3 || ctx_r3.page === subMenus_r7.page4 || ctx_r3.page === subMenus_r7.page5 || ctx_r3.page === subMenus_r7.page6 || ctx_r3.page === subMenus_r7.page7 || ctx_r3.page === subMenus_r7.page8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, ctx_r3.openSubmenuOneItem === subMenus_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", subMenus_r7.menuValue, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r3.openSubmenuOneItem === subMenus_r7 ? "d-block" : "d-none");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](subMenus_r7.subMenusTwo);
  }
}
function SidebarOneComponent_For_6_For_4_Conditional_2_For_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SidebarOneComponent_For_6_For_4_Conditional_2_For_8_Conditional_0_Template, 3, 2, "li")(1, SidebarOneComponent_For_6_For_4_Conditional_2_For_8_Conditional_1_Template, 7, 7, "li", 14);
  }
  if (rf & 2) {
    const subMenus_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](0, subMenus_r7.customSubmenuTwo === false ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](1, subMenus_r7.customSubmenuTwo === true ? 1 : -1);
  }
}
function SidebarOneComponent_For_6_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 6)(1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidebarOneComponent_For_6_For_4_Conditional_2_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const menu_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.openMenu(menu_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](7, SidebarOneComponent_For_6_For_4_Conditional_2_For_8_Template, 2, 2, null, null, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const menu_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r3.base === menu_r2.base);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, ctx_r3.openMenuItem === menu_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("icon-" + menu_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", menu_r2.menuValue, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r3.openMenuItem === menu_r2 ? "d-block" : "d-none");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](menu_r2.subMenus);
  }
}
function SidebarOneComponent_For_6_For_4_Conditional_3_For_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const subMenus_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](subMenus_r11.menuValue);
  }
}
function SidebarOneComponent_For_6_For_4_Conditional_3_For_8_Conditional_1_For_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const subMenuTwo_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](subMenuTwo_r13.menuValue);
  }
}
function SidebarOneComponent_For_6_For_4_Conditional_3_For_8_Conditional_1_For_6_Conditional_1_For_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const subMenusThree_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](subMenusThree_r15.menuValue);
  }
}
function SidebarOneComponent_For_6_For_4_Conditional_3_For_8_Conditional_1_For_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 17)(1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidebarOneComponent_For_6_For_4_Conditional_3_For_8_Conditional_1_For_6_Conditional_1_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.multiLevelThree());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](5, SidebarOneComponent_For_6_For_4_Conditional_3_For_8_Conditional_1_For_6_Conditional_1_For_6_Template, 3, 1, "li", null, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const subMenuTwo_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, ctx_r3.multiLevel3 === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", subMenuTwo_r13.menuValue, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r3.multiLevel3 ? "d-block" : "d-none");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](subMenuTwo_r13.subMenusThree);
  }
}
function SidebarOneComponent_For_6_For_4_Conditional_3_For_8_Conditional_1_For_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SidebarOneComponent_For_6_For_4_Conditional_3_For_8_Conditional_1_For_6_Conditional_0_Template, 3, 1, "li")(1, SidebarOneComponent_For_6_For_4_Conditional_3_For_8_Conditional_1_For_6_Conditional_1_Template, 7, 5, "li", 17);
  }
  if (rf & 2) {
    const subMenuTwo_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](0, subMenuTwo_r13.customSubmenuFour === false ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](1, subMenuTwo_r13.customSubmenuFour === true ? 1 : -1);
  }
}
function SidebarOneComponent_For_6_For_4_Conditional_3_For_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 14)(1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidebarOneComponent_For_6_For_4_Conditional_3_For_8_Conditional_1_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.multiLevelTwo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](5, SidebarOneComponent_For_6_For_4_Conditional_3_For_8_Conditional_1_For_6_Template, 2, 2, null, null, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const subMenus_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, ctx_r3.multiLevel2 === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](subMenus_r11.menuValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r3.multiLevel2 ? "d-block" : "d-none");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](subMenus_r11.subMenusTwo);
  }
}
function SidebarOneComponent_For_6_For_4_Conditional_3_For_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SidebarOneComponent_For_6_For_4_Conditional_3_For_8_Conditional_0_Template, 3, 1, "li")(1, SidebarOneComponent_For_6_For_4_Conditional_3_For_8_Conditional_1_Template, 7, 5, "li", 14);
  }
  if (rf & 2) {
    const subMenus_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](0, subMenus_r11.customSubmenuThree === false ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](1, subMenus_r11.customSubmenuThree === true ? 1 : -1);
  }
}
function SidebarOneComponent_For_6_For_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 6)(1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidebarOneComponent_For_6_For_4_Conditional_3_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.multiLevelOne());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](7, SidebarOneComponent_For_6_For_4_Conditional_3_For_8_Template, 2, 2, null, null, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const menu_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, ctx_r3.multiLevel1 === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("icon-" + menu_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](menu_r2.menuValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r3.multiLevel1 ? "d-block" : "d-none");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](menu_r2.subMenus);
  }
}
function SidebarOneComponent_For_6_For_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SidebarOneComponent_For_6_For_4_Conditional_0_Template, 5, 4, "li", 5)(1, SidebarOneComponent_For_6_For_4_Conditional_1_Template, 9, 9, "li", 6)(2, SidebarOneComponent_For_6_For_4_Conditional_2_Template, 9, 9, "li", 6)(3, SidebarOneComponent_For_6_For_4_Conditional_3_Template, 9, 7, "li", 6);
  }
  if (rf & 2) {
    const menu_r2 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](0, (menu_r2 == null ? null : menu_r2.hasSubRoute) === false && (menu_r2 == null ? null : menu_r2.access == null ? null : menu_r2.access.includes(ctx_r3.userRole)) ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](1, menu_r2.hasSubRoute === true ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](2, menu_r2.hasSubRouteTwo === true ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](3, menu_r2.hasSubRouteThree === true ? 3 : -1);
  }
}
function SidebarOneComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidebarOneComponent_For_6_Conditional_1_Template, 2, 1, "h6", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](3, SidebarOneComponent_For_6_For_4_Template, 4, 4, null, null, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const mainTittle_r1 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](1, (mainTittle_r1 == null ? null : mainTittle_r1.access == null ? null : mainTittle_r1.access.includes(ctx_r3.userRole)) ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](mainTittle_r1 == null ? null : mainTittle_r1.menu);
  }
}
class SidebarOneComponent {
  constructor(Router, sidebar, router, profileService) {
    this.Router = Router;
    this.sidebar = sidebar;
    this.router = router;
    this.profileService = profileService;
    this.routes = src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.routes;
    this.base = '';
    this.page = '';
    this.currentUrl = '';
    this.userRole = "";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.side_bar_data = [];
    this.openMenuItem = null;
    this.openSubmenuOneItem = null;
    this.multiLevel1 = false;
    this.multiLevel2 = false;
    this.multiLevel3 = false;
    router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
        this.getRoutes(event);
      }
    });
    this.getRoutes(this.router);
    this.side_bar_data = this.sidebar.sidebarData1;
  }
  getRoutes(route) {
    const splitVal = route.url.split('/');
    this.currentUrl = route.url;
    this.base = splitVal[1];
    this.page = splitVal[2];
  }
  miniSideBarMouseHover(position) {
    if (position == 'over') {
      this.sidebar.expandSideBar.next(true);
    } else {
      this.sidebar.expandSideBar.next(false);
    }
  }
  ngOnInit() {
    this.loadUserProfile();
  }
  loadUserProfile() {
    this.profileService.getProfile().subscribe(data => {
      this.userRole = data.results.user_role.role_name;
    });
  }
  expandSubMenus(menu) {
    sessionStorage.setItem('menuValue', menu.menuValue);
    this.side_bar_data.forEach(mainMenus => {
      mainMenus.menu.forEach(resMenu => {
        if (resMenu.menuValue === menu.menuValue) {
          menu.showSubRoute = !menu.showSubRoute;
        } else {
          resMenu.showSubRoute = false;
        }
      });
    });
  }
  openMenu(menu) {
    if (this.openMenuItem === menu) {
      this.openMenuItem = null;
    } else {
      this.openMenuItem = menu;
    }
  }
  openSubmenuOne(subMenus) {
    if (this.openSubmenuOneItem === subMenus) {
      this.openSubmenuOneItem = null;
    } else {
      this.openSubmenuOneItem = subMenus;
    }
  }
  multiLevelOne() {
    this.multiLevel1 = !this.multiLevel1;
  }
  multiLevelTwo() {
    this.multiLevel2 = !this.multiLevel2;
  }
  multiLevelThree() {
    this.multiLevel3 = !this.multiLevel3;
  }
  static {
    this.ɵfac = function SidebarOneComponent_Factory(t) {
      return new (t || SidebarOneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_component_pages_profile_profile_service__WEBPACK_IMPORTED_MODULE_1__.ProfileService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: SidebarOneComponent,
      selectors: [["app-sidebar-one"]],
      decls: 7,
      vars: 0,
      consts: [["id", "sidebar", 1, "sidebar", 3, "mouseover", "mouseout"], [1, "sidebar-inner", "slimscroll"], ["id", "sidebar-menu", 1, "sidebar-menu"], [1, "submenu-open"], [1, "submenu-hdr"], ["routerLinkActive", "active"], [1, "submenu"], [1, "sub-active", 3, "routerLink"], [1, "feather"], ["href", "javascript:void(0)", 1, "sub-active", 3, "click", "ngClass"], [1, "menu-arrow"], [3, "ngClass"], ["routerLinkActive", "active", 3, "routerLink"], ["href", "javascript:void(0);", 3, "click", "ngClass"], [1, "submenu", "submenu-two"], [1, "menu-arrow", "inside-submenu"], ["href", "javascript:void(0);"], [1, "submenu", "submenu-two", "submenu-three"], [1, "menu-arrow", "inside-submenu", "inside-submenu-two"]],
      template: function SidebarOneComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseover", function SidebarOneComponent_Template_div_mouseover_0_listener() {
            return ctx.miniSideBarMouseHover("over");
          })("mouseout", function SidebarOneComponent_Template_div_mouseout_0_listener() {
            return ctx.miniSideBarMouseHover("out");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "ng-scrollbar")(3, "div", 2)(4, "ul");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](5, SidebarOneComponent_For_6_Template, 5, 1, "li", 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx.side_bar_data);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_5__.NgScrollbar],
      styles: ["#sidebar[_ngcontent-%COMP%]   .sidebar-inner[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tbW9uLWNvbXBvbmVudC9zaWRlYmFyLW9uZS9zaWRlYmFyLW9uZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIiNzaWRlYmFyIC5zaWRlYmFyLWlubmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 57686:
/*!*****************************************************************!*\
  !*** ./src/app/core-component/core-component-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoreComponentRoutingModule: () => (/* binding */ CoreComponentRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _core_component_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-component.component */ 4336);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _core_component_component__WEBPACK_IMPORTED_MODULE_0__.CoreComponentComponent,
  children: [{
    path: 'application',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_core-component_main_application_application_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ././main/application/application.module */ 5247)).then(m => m.ApplicationModule)
  }, {
    path: 'inventory',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_core-component_inventory_inventory_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./inventory/inventory.module */ 14847)).then(m => m.InventoryModule)
  }, {
    path: 'pages',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("src_app_core-component_pages_pages_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages.module */ 67507)).then(m => m.PagesModule)
  }, {
    path: 'dashboard',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_core-component_main_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./main/dashboard/dashboard.module */ 17147)).then(m => m.DashboardModule)
  }, {
    path: 'user-management',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_core-component_user-management_user-management_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./user-management/user-management.module */ 73559)).then(m => m.UserManagementModule)
  }, {
    path: 'sales',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_core-component_sales_sales_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sales/sales.module */ 43851)).then(m => m.SalesModule)
  }, {
    path: 'people',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_core-component_people_people_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./people/people.module */ 467)).then(m => m.PeopleModule)
  }]
}];
class CoreComponentRoutingModule {
  static {
    this.ɵfac = function CoreComponentRoutingModule_Factory(t) {
      return new (t || CoreComponentRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: CoreComponentRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CoreComponentRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 4336:
/*!************************************************************!*\
  !*** ./src/app/core-component/core-component.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoreComponentComponent: () => (/* binding */ CoreComponentComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _core_core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/core.index */ 82351);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _common_component_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common-component/header/header.component */ 95182);
/* harmony import */ var _common_component_sidebar_one_sidebar_one_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common-component/sidebar-one/sidebar-one.component */ 59866);
/* harmony import */ var _common_component_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common-component/layout/layout.component */ 50372);









const _c0 = (a0, a1, a2, a3) => ({
  "expand-menu": a0,
  "mini-sidebar": a1,
  "menu-opened": a2,
  "slide-nav": a3
});
const _c1 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) => ({
  "light": a0,
  "dark": a1,
  "default": a2,
  "box": a3,
  "collapsed": a4,
  "horizontal": a5,
  "modern": a6,
  "nav-light": a7,
  "nav-grey": a8,
  "nav-dark": a9,
  "main-chat-blk": a10
});
const _c2 = (a0, a1, a2, a3, a4, a5) => ({
  "ms-0": a0,
  "pos-pg-wrapper": a1,
  "cardhead": a2,
  "notes-page-wrapper": a3,
  "file-manager": a4,
  "chat-page-wrapper": a5
});
const _c3 = (a0, a1) => ({
  "settings-content": a0,
  "pos-design p-0": a1
});
const _c4 = a0 => ({
  "d-none": a0
});
function CoreComponentComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CoreComponentComponent_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-sidebar-one");
  }
}
function CoreComponentComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CoreComponentComponent_Conditional_3_Conditional_2_Template, 1, 0, "app-sidebar-one");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 6)(4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "app-layout", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("header-collapse", ctx_r0.isCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunctionV"](7, _c1, [ctx_r0.themeMode === "light_mode", ctx_r0.themeMode === "dark_mode", ctx_r0.layoutMode === "default_mode", ctx_r0.layoutMode === "box_mode", ctx_r0.layoutMode === "collapsed_mode", ctx_r0.layoutMode === "horizontal_mode", ctx_r0.layoutMode === "modern_mode", ctx_r0.navigationColor === "light_color", ctx_r0.navigationColor === "grey_color", ctx_r0.navigationColor === "dark_color", ctx_r0.page === "chat"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](2, ctx_r0.page !== "pos" ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction6"](19, _c2, ctx_r0.sideBaractivePath === true, ctx_r0.page === "pos", ctx_r0.page === "ui-counter", ctx_r0.page === "file-archived" || ctx_r0.page === "file-document" || ctx_r0.page === "file-archived" || ctx_r0.page === "file-favourites" || ctx_r0.page === "file-recent" || ctx_r0.page === "file-manager" || ctx_r0.page === "file-shared" || ctx_r0.page === "todo" || ctx_r0.page === "notes" || ctx_r0.page === "qrcode" || ctx_r0.page === "file-manager-deleted", ctx_r0.page === "file-shared" || ctx_r0.page === "file-archived" || ctx_r0.page === "file-document" || ctx_r0.page === "file-archived" || ctx_r0.page === "file-favourites" || ctx_r0.page === "file-recent" || ctx_r0.page === "file-manager" || ctx_r0.page === "file-manager-deleted", ctx_r0.page === "chat"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](26, _c3, ctx_r0.last === "bank-settings-grid" || ctx_r0.last === "bank-settings-list" || ctx_r0.last === "email-settings" || ctx_r0.base === "settings" || ctx_r0.last === "storage-settings", ctx_r0.page === "pos"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](29, _c4, ctx_r0.page === "pos"));
  }
}
function CoreComponentComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
class CoreComponentComponent {
  constructor(Router, settings, sidebar, common, renderer) {
    this.Router = Router;
    this.settings = settings;
    this.sidebar = sidebar;
    this.common = common;
    this.renderer = renderer;
    this.miniSidebar = false;
    this.expandMenu = false;
    this.mobileSidebar = false;
    this.sideBaractivePath = false;
    this.themeMode = '';
    this.layoutMode = '';
    this.navigationColor = '';
    this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(false);
    this.loading$ = this._loading.asObservable();
    this.base = '';
    this.page = '';
    this.last = '';
    this.isCollapsed = false;
    this.sidebar.toggleMobileSideBar.subscribe(res => {
      if (res == 'true' || res == 'true') {
        this.mobileSidebar = true;
      } else {
        this.mobileSidebar = false;
      }
    });
    this.sidebar.expandSideBar.subscribe(res => {
      this.expandMenu = res;
    });
    this.Router.events.subscribe(data => {
      if (data instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationStart) {
        this.getRoutes(data);
      }
      if (data instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd) {
        localStorage.removeItem('isMobileSidebar');
        this.mobileSidebar = false;
      }
      if (this.page === 'pos') {
        localStorage.removeItem('sideBarPosition');
      }
    });
    this.sidebar.sideBarPosition.subscribe(res => {
      if (res == 'true' && this.page !== 'pos') {
        this.miniSidebar = true;
      } else {
        this.miniSidebar = false;
      }
    });
    this.settings.themeMode.subscribe(mode => {
      this.themeMode = mode;
    });
    this.settings.layoutMode.subscribe(layout => {
      this.layoutMode = layout;
    });
    this.settings.navigationColor.subscribe(color => {
      this.navigationColor = color;
    });
    this.settings.themeMode.subscribe(res => {
      if (res == 'dark_mode') {
        this.renderer.addClass(document.body, 'dark-select');
      } else {
        this.renderer.removeClass(document.body, 'dark-select');
      }
    });
    this.getRoutes(this.Router);
  }
  getRoutes(data) {
    const splitVal = data.url.split('/');
    this.base = splitVal[1];
    this.page = splitVal[2];
    this.last = splitVal[3];
    this.common.base.next(splitVal[1]);
    this.common.page.next(splitVal[2]);
    this.common.last.next(splitVal[3]);
    if (data.url.split('/')[1] === 'errorpages' || data.url.split('/')[2] === 'pos' || data.url.split('/')[1] === 'auth') {
      this.sideBaractivePath = true;
    } else {
      this.sideBaractivePath = false;
    }
    if (data.url.split('/')[2] === 'pos') {
      this.sideBaractivePath = true;
    }
    if (this.page === 'pos') {
      this.miniSidebar = false;
    }
  }
  ngOnInit() {
    this.sidebar.collapse$.subscribe(collapse => {
      this.isCollapsed = collapse;
    });
  }
  showLoader() {
    this._loading.next(true);
  }
  hideLoader() {
    setTimeout(() => {
      this._loading.next(false);
      window.scrollTo(0, 0);
    }, 1200);
  }
  static {
    this.ɵfac = function CoreComponentComponent_Factory(t) {
      return new (t || CoreComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_core_index__WEBPACK_IMPORTED_MODULE_0__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_core_index__WEBPACK_IMPORTED_MODULE_0__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_core_index__WEBPACK_IMPORTED_MODULE_0__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: CoreComponentComponent,
      selectors: [["app-core-component"]],
      decls: 5,
      vars: 11,
      consts: [[3, "ngClass"], ["id", "global-loader"], [1, "main-wrapper", 3, "ngClass", "header-collapse"], [1, "main-wrapper"], [1, "whirly-loader"], [1, "main-wrapper", 3, "ngClass"], [1, "page-wrapper", 3, "ngClass"], [1, "content", 3, "ngClass"]],
      template: function CoreComponentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CoreComponentComponent_Conditional_1_Template, 2, 0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CoreComponentComponent_Conditional_3_Template, 7, 31, "div", 2)(4, CoreComponentComponent_Conditional_4_Template, 2, 0, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction4"](6, _c0, ctx.miniSidebar === true && ctx.expandMenu === true && ctx.layoutMode !== "horizontal_mode" && ctx.layoutMode !== "modern_mode", ctx.miniSidebar === true && ctx.layoutMode !== "horizontal_mode" && ctx.layoutMode !== "modern_mode", ctx.mobileSidebar === true, ctx.mobileSidebar === true));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 4, ctx.loading$) ? 1 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](3, ctx.page !== "coming-soon" && ctx.page !== "under-maintenance" ? 3 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](4, ctx.page === "coming-soon" || ctx.page === "under-maintenance" ? 4 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _common_component_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _common_component_sidebar_one_sidebar_one_component__WEBPACK_IMPORTED_MODULE_2__.SidebarOneComponent, _common_component_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__.LayoutComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1631:
/*!*********************************************************!*\
  !*** ./src/app/core-component/core-component.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoreComponentModule: () => (/* binding */ CoreComponentModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _core_component_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-component-routing.module */ 57686);
/* harmony import */ var _core_component_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-component.component */ 4336);
/* harmony import */ var _common_component_sidebar_one_sidebar_one_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common-component/sidebar-one/sidebar-one.component */ 59866);
/* harmony import */ var _common_component_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common-component/header/header.component */ 95182);
/* harmony import */ var _common_component_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common-component/layout/layout.component */ 50372);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ 93887);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);









class CoreComponentModule {
  static {
    this.ɵfac = function CoreComponentModule_Factory(t) {
      return new (t || CoreComponentModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: CoreComponentModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _core_component_routing_module__WEBPACK_IMPORTED_MODULE_0__.CoreComponentRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.sharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](CoreComponentModule, {
    declarations: [_core_component_component__WEBPACK_IMPORTED_MODULE_1__.CoreComponentComponent, _common_component_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _common_component_sidebar_one_sidebar_one_component__WEBPACK_IMPORTED_MODULE_2__.SidebarOneComponent, _common_component_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__.LayoutComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _core_component_routing_module__WEBPACK_IMPORTED_MODULE_0__.CoreComponentRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.sharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ }),

/***/ 43431:
/*!*****************************************************************!*\
  !*** ./src/app/core-component/pages/profile/profile.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileService: () => (/* binding */ ProfileService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 45312);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);




class ProfileService {
  constructor(http) {
    this.http = http;
  }
  getProfile() {
    const token = localStorage.getItem('authToken'); // Retrieve token
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND_URL}/admin/profile`, {
      headers
    });
  }
  updateProfile(profileData) {
    const token = localStorage.getItem('authToken'); // Retrieve token
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.patch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND_URL}/admin/profile/update`, profileData, {
      headers
    });
  }
  static {
    this.ɵfac = function ProfileService_Factory(t) {
      return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ProfileService,
      factory: ProfileService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 96983:
/*!*********************************************!*\
  !*** ./src/app/shared/webstorge.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebstorgeService: () => (/* binding */ WebstorgeService)
/* harmony export */ });
/* harmony import */ var _core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);



class WebstorgeService {
  constructor(router) {
    this.router = router;
  }
  login() {
    localStorage.setItem('authenticated', 'true');
    this.router.navigate([_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes.dashboard]);
  }
  submit() {
    localStorage.setItem('authenticated', 'true');
    this.router.navigate([_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes.dashboard]);
  }
  Logout() {
    localStorage.removeItem('authorized');
    localStorage.removeItem('loginTime');
    this.router.navigate(['/auth/signin']);
  }
  static {
    this.ɵfac = function WebstorgeService_Factory(t) {
      return new (t || WebstorgeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: WebstorgeService,
      factory: WebstorgeService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_core-component_module_ts.js.map