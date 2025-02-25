"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_icons_icon-fontawesome_icon-fontawesome_module_ts"],{

/***/ 35787:
/*!******************************************************************************************!*\
  !*** ./src/app/core-component/icons/icon-fontawesome/icon-fontawesome-routing.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconFontawesomeRoutingModule: () => (/* binding */ IconFontawesomeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _icon_fontawesome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon-fontawesome.component */ 4395);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _icon_fontawesome_component__WEBPACK_IMPORTED_MODULE_0__.IconFontawesomeComponent
}];
class IconFontawesomeRoutingModule {
  static {
    this.ɵfac = function IconFontawesomeRoutingModule_Factory(t) {
      return new (t || IconFontawesomeRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: IconFontawesomeRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](IconFontawesomeRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 4395:
/*!*************************************************************************************!*\
  !*** ./src/app/core-component/icons/icon-fontawesome/icon-fontawesome.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconFontawesomeComponent: () => (/* binding */ IconFontawesomeComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);



class IconFontawesomeComponent {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  static {
    this.ɵfac = function IconFontawesomeComponent_Factory(t) {
      return new (t || IconFontawesomeComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: IconFontawesomeComponent,
      selectors: [["app-icon-fontawesome"]],
      decls: 458,
      vars: 1,
      consts: [[1, "cardhead"], [1, "container-fluid"], [1, "page-header"], [1, "row"], [1, "col-sm-12"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "active"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "icons-items"], [1, "icons-list"], ["data-bs-toggle", "tooltip", "title", "fa fa-address-book", 1, "fa", "fa-address-book"], ["data-bs-toggle", "tooltip", "title", "fa fa-address-card", 1, "fa", "fa-address-card"], ["data-bs-toggle", "tooltip", "title", "fa fa-align-center", 1, "fa", "fa-align-center"], ["data-bs-toggle", "tooltip", "title", "fa fa-align-justify", 1, "fa", "fa-align-justify"], ["data-bs-toggle", "tooltip", "title", "fa fa-align-left", 1, "fa", "fa-align-left"], ["data-bs-toggle", "tooltip", "title", "fa fa-align-right", 1, "fa", "fa-align-right"], ["data-bs-toggle", "tooltip", "title", "fa fa-ambulance", 1, "fa", "fa-ambulance"], ["data-bs-toggle", "tooltip", "title", "fa fa-american-sign-language-interpreting", 1, "fa", "fa-american-sign-language-interpreting"], ["data-bs-toggle", "tooltip", "title", "fa fa-anchor", 1, "fa", "fa-anchor"], ["data-bs-toggle", "tooltip", "title", "fa fa-angle-double-down", 1, "fa", "fa-angle-double-down"], ["data-bs-toggle", "tooltip", "title", "fa fa-angle-double-left", 1, "fa", "fa-angle-double-left"], ["data-bs-toggle", "tooltip", "title", "fa fa-angle-double-right", 1, "fa", "fa-angle-double-right"], ["data-bs-toggle", "tooltip", "title", "fa fa-angle-double-up", 1, "fa", "fa-angle-double-up"], ["data-bs-toggle", "tooltip", "title", "fa fa-angle-down", 1, "fa", "fa-angle-down"], ["data-bs-toggle", "tooltip", "title", "fa fa-angle-left", 1, "fa", "fa-angle-left"], ["data-bs-toggle", "tooltip", "title", "fa fa-angle-right", 1, "fa", "fa-angle-right"], ["data-bs-toggle", "tooltip", "title", "fa fa-angle-up", 1, "fa", "fa-angle-up"], ["data-bs-toggle", "tooltip", "title", "fab fa-apple", 1, "fab", "fa-apple"], ["data-bs-toggle", "tooltip", "title", "fa fa-archive", 1, "fa", "fa-archive"], ["data-bs-toggle", "tooltip", "title", "fas fa-chart-area", 1, "fas", "fa-chart-area"], ["data-bs-toggle", "tooltip", "title", "fa fa-arrow-circle-down", 1, "fa", "fa-arrow-circle-down"], ["data-bs-toggle", "tooltip", "title", "fa fa-arrow-circle-left", 1, "fa", "fa-arrow-circle-left"], ["data-bs-toggle", "tooltip", "title", "fa fa-arrow-circle-right", 1, "fa", "fa-arrow-circle-right"], ["data-bs-toggle", "tooltip", "title", "fa fa-arrow-circle-up", 1, "fa", "fa-arrow-circle-up"], ["data-bs-toggle", "tooltip", "title", "fa fa-arrow-down", 1, "fa", "fa-arrow-down"], ["data-bs-toggle", "tooltip", "title", "fa fa-arrow-left", 1, "fa", "fa-arrow-left"], ["data-bs-toggle", "tooltip", "title", "fa fa-arrow-right", 1, "fa", "fa-arrow-right"], ["data-bs-toggle", "tooltip", "title", "fa fa-arrow-up", 1, "fa", "fa-arrow-up"], ["data-bs-toggle", "tooltip", "title", "fa fa-arrows-alt", 1, "fa", "fa-arrows-alt"], ["data-bs-toggle", "tooltip", "title", "fa fa-assistive-listening-systems", 1, "fa", "fa-assistive-listening-systems"], ["data-bs-toggle", "tooltip", "title", "fa fa-asterisk", 1, "fa", "fa-asterisk"], ["data-bs-toggle", "tooltip", "title", "fa fa-at", 1, "fa", "fa-at"], ["data-bs-toggle", "tooltip", "title", "fa fa-audio-description", 1, "fa", "fa-audio-description"], ["data-bs-toggle", "tooltip", "title", "fa fa-backward", 1, "fa", "fa-backward"], ["data-bs-toggle", "tooltip", "title", "fa fa-balance-scale", 1, "fa", "fa-balance-scale"], ["data-bs-toggle", "tooltip", "title", "fa fa-ban", 1, "fa", "fa-ban"], ["data-bs-toggle", "tooltip", "title", "fa fa-barcode", 1, "fa", "fa-barcode"], ["data-bs-toggle", "tooltip", "title", "fa fa-bars", 1, "fa", "fa-bars"], ["data-bs-toggle", "tooltip", "title", "fa fa-bath", 1, "fa", "fa-bath"], ["data-bs-toggle", "tooltip", "title", "fa fa-battery-empty", 1, "fa", "fa-battery-empty"], ["data-bs-toggle", "tooltip", "title", "fa fa-battery-full", 1, "fa", "fa-battery-full"], ["data-bs-toggle", "tooltip", "title", "fa fa-battery-half", 1, "fa", "fa-battery-half"], ["data-bs-toggle", "tooltip", "title", "fa fa-battery-quarter", 1, "fa", "fa-battery-quarter"], ["data-bs-toggle", "tooltip", "title", "fa fa-battery-three-quarters", 1, "fa", "fa-battery-three-quarters"], ["data-bs-toggle", "tooltip", "title", "fa fa-bed", 1, "fa", "fa-bed"], ["data-bs-toggle", "tooltip", "title", "fa fa-beer", 1, "fa", "fa-beer"], ["data-bs-toggle", "tooltip", "title", "fa fa-bell", 1, "fa", "fa-bell"], ["data-bs-toggle", "tooltip", "title", "fa fa-bell-slash", 1, "fa", "fa-bell-slash"], ["data-bs-toggle", "tooltip", "title", "fa fa-bicycle", 1, "fa", "fa-bicycle"], ["data-bs-toggle", "tooltip", "title", "fa fa-binoculars", 1, "fa", "fa-binoculars"], ["data-bs-toggle", "tooltip", "title", "fa fa-birthday-cake", 1, "fa", "fa-birthday-cake"], ["data-bs-toggle", "tooltip", "title", "fa fa-blind", 1, "fa", "fa-blind"], ["data-bs-toggle", "tooltip", "title", "fa fa-bold", 1, "fa", "fa-bold"], ["data-bs-toggle", "tooltip", "title", "fa fa-bolt", 1, "fa", "fa-bolt"], ["data-bs-toggle", "tooltip", "title", "fa fa-bomb", 1, "fa", "fa-bomb"], ["data-bs-toggle", "tooltip", "title", "fa fa-book", 1, "fa", "fa-book"], ["data-bs-toggle", "tooltip", "title", "fa fa-bookmark", 1, "fa", "fa-bookmark"], ["data-bs-toggle", "tooltip", "title", "fa fa-braille", 1, "fa", "fa-braille"], ["data-bs-toggle", "tooltip", "title", "fa fa-briefcase", 1, "fa", "fa-briefcase"], ["data-bs-toggle", "tooltip", "title", "fa fa-bug", 1, "fa", "fa-bug"], ["data-bs-toggle", "tooltip", "title", "fa fa-building", 1, "fa", "fa-building"], ["data-bs-toggle", "tooltip", "title", "fa fa-bullhorn", 1, "fa", "fa-bullhorn"], ["data-bs-toggle", "tooltip", "title", "fa fa-bullseye", 1, "fa", "fa-bullseye"], ["data-bs-toggle", "tooltip", "title", "fa fa-bus", 1, "fa", "fa-bus"], ["data-bs-toggle", "tooltip", "title", "fa fa-calculator", 1, "fa", "fa-calculator"], ["data-bs-toggle", "tooltip", "title", "fa fa-calendar", 1, "fa", "fa-calendar"], ["data-bs-toggle", "tooltip", "title", "fa fa-camera", 1, "fa", "fa-camera"], ["data-bs-toggle", "tooltip", "title", "fa fa-camera-retro", 1, "fa", "fa-camera-retro"], ["data-bs-toggle", "tooltip", "title", "fa fa-car", 1, "fa", "fa-car"], ["data-bs-toggle", "tooltip", "title", "fa fa-caret-down", 1, "fa", "fa-caret-down"], ["data-bs-toggle", "tooltip", "title", "fa fa-caret-left", 1, "fa", "fa-caret-left"], ["data-bs-toggle", "tooltip", "title", "fa fa-caret-right", 1, "fa", "fa-caret-right"], ["data-bs-toggle", "tooltip", "title", "fa fa-cart-arrow-down", 1, "fa", "fa-cart-arrow-down"], ["data-bs-toggle", "tooltip", "title", "fa fa-cart-plus", 1, "fa", "fa-cart-plus"], ["data-bs-toggle", "tooltip", "title", "fa fa-certificate", 1, "fa", "fa-certificate"], ["data-bs-toggle", "tooltip", "title", "fa fa-check", 1, "fa", "fa-check"], ["data-bs-toggle", "tooltip", "title", "fa fa-check-circle", 1, "fa", "fa-check-circle"], ["data-bs-toggle", "tooltip", "title", "fa fa-chevron-circle-left", 1, "fa", "fa-chevron-circle-left"], ["data-bs-toggle", "tooltip", "title", "fa fa-chevron-circle-right", 1, "fa", "fa-chevron-circle-right"], ["data-bs-toggle", "tooltip", "title", "fa fa-chevron-circle-up", 1, "fa", "fa-chevron-circle-up"], ["data-bs-toggle", "tooltip", "title", "fa fa-chevron-down", 1, "fa", "fa-chevron-down"], ["data-bs-toggle", "tooltip", "title", "fa fa-chevron-left", 1, "fa", "fa-chevron-left"], ["data-bs-toggle", "tooltip", "title", "fa fa-chevron-right", 1, "fa", "fa-chevron-right"], ["data-bs-toggle", "tooltip", "title", "fa fa-chevron-up", 1, "fa", "fa-chevron-up"], ["data-bs-toggle", "tooltip", "title", "fa fa-child", 1, "fa", "fa-child"], ["data-bs-toggle", "tooltip", "title", "fa fa-circle", 1, "fa", "fa-circle"], ["data-bs-toggle", "tooltip", "title", "fa fa-clipboard", 1, "fa", "fa-clipboard"], ["data-bs-toggle", "tooltip", "title", "fa fa-clone", 1, "fa", "fa-clone"], ["data-bs-toggle", "tooltip", "title", "fa fa-cloud", 1, "fa", "fa-cloud"], ["data-bs-toggle", "tooltip", "title", "fa fa-code", 1, "fa", "fa-code"], ["data-bs-toggle", "tooltip", "title", "fa fa-coffee", 1, "fa", "fa-coffee"], ["data-bs-toggle", "tooltip", "title", "fa fa-cog", 1, "fa", "fa-cog"], ["data-bs-toggle", "tooltip", "title", "fa fa-cogs", 1, "fa", "fa-cogs"], ["data-bs-toggle", "tooltip", "title", "fa fa-columns", 1, "fa", "fa-columns"], ["data-bs-toggle", "tooltip", "title", "fa fa-comment", 1, "fa", "fa-comment"], ["data-bs-toggle", "tooltip", "title", "fa fa-compress", 1, "fa", "fa-compress"], ["data-bs-toggle", "tooltip", "title", "fa fa-copyright", 1, "fa", "fa-copyright"], ["data-bs-toggle", "tooltip", "title", "fa fa-credit-card", 1, "fa", "fa-credit-card"], ["data-bs-toggle", "tooltip", "title", "fa fa-desktop", 1, "fa", "fa-desktop"], ["data-bs-toggle", "tooltip", "title", "fa fa-edit", 1, "fa", "fa-edit"], ["data-bs-toggle", "tooltip", "title", "fa fa-eject", 1, "fa", "fa-eject"], ["data-bs-toggle", "tooltip", "title", "fa fa-ellipsis-h", 1, "fa", "fa-ellipsis-h"], ["data-bs-toggle", "tooltip", "title", "fa fa-ellipsis-v", 1, "fa", "fa-ellipsis-v"], ["data-bs-toggle", "tooltip", "title", "fa fa-envelope", 1, "fa", "fa-envelope"], ["data-bs-toggle", "tooltip", "title", "fa fa-envelope-open", 1, "fa", "fa-envelope-open"], ["data-bs-toggle", "tooltip", "title", "fa fa-envelope-square", 1, "fa", "fa-envelope-square"], ["data-bs-toggle", "tooltip", "title", "fa fa-eraser", 1, "fa", "fa-eraser"], ["data-bs-toggle", "tooltip", "title", "fa fa-exclamation", 1, "fa", "fa-exclamation"], ["data-bs-toggle", "tooltip", "title", "fa fa-exclamation-circle", 1, "fa", "fa-exclamation-circle"], ["data-bs-toggle", "tooltip", "title", "fa fa-exclamation-triangle", 1, "fa", "fa-exclamation-triangle"], ["data-bs-toggle", "tooltip", "title", "fa fa-expand", 1, "fa", "fa-expand"], ["data-bs-toggle", "tooltip", "title", "fa fa-eye", 1, "fa", "fa-eye"], ["data-bs-toggle", "tooltip", "title", "fa fa-eye-slash", 1, "fa", "fa-eye-slash"], ["data-bs-toggle", "tooltip", "title", "fa fa-fast-backward", 1, "fa", "fa-fast-backward"], ["data-bs-toggle", "tooltip", "title", "fa fa-fast-forward", 1, "fa", "fa-fast-forward"], ["data-bs-toggle", "tooltip", "title", "fa fa-fax", 1, "fa", "fa-fax"], ["data-bs-toggle", "tooltip", "title", "fa fa-female", 1, "fa", "fa-female"], ["data-bs-toggle", "tooltip", "title", "fa fa-fighter-jet", 1, "fa", "fa-fighter-jet"], ["data-bs-toggle", "tooltip", "title", "fa fa-file", 1, "fa", "fa-file"], ["data-bs-toggle", "tooltip", "title", "fa fa-fire", 1, "fa", "fa-fire"], ["data-bs-toggle", "tooltip", "title", "fa fa-fire-extinguisher", 1, "fa", "fa-fire-extinguisher"], ["data-bs-toggle", "tooltip", "title", "fa fa-flag", 1, "fa", "fa-flag"], ["data-bs-toggle", "tooltip", "title", "fa fa-flag-checkered", 1, "fa", "fa-flag-checkered"], ["data-bs-toggle", "tooltip", "title", "fa fa-road", 1, "fa", "fa-road"], ["data-bs-toggle", "tooltip", "title", "fa fa-rocket", 1, "fa", "fa-rocket"], ["data-bs-toggle", "tooltip", "title", "fa fa-save", 1, "fa", "fa-save"], ["data-bs-toggle", "tooltip", "title", "fa fa-search", 1, "fa", "fa-search"], ["data-bs-toggle", "tooltip", "title", "fa fa-search-minus", 1, "fa", "fa-search-minus"], ["data-bs-toggle", "tooltip", "title", "fa fa-search-plus", 1, "fa", "fa-search-plus"], ["data-bs-toggle", "tooltip", "title", "fa fa-server", 1, "fa", "fa-server"], ["data-bs-toggle", "tooltip", "title", "fa fa-share", 1, "fa", "fa-share"], ["data-bs-toggle", "tooltip", "title", "fa fa-share-alt", 1, "fa", "fa-share-alt"], ["data-bs-toggle", "tooltip", "title", "fa fa-share-alt-square", 1, "fa", "fa-share-alt-square"], ["data-bs-toggle", "tooltip", "title", "fa fa-share-square", 1, "fa", "fa-share-square"], ["data-bs-toggle", "tooltip", "title", "fa fa-ship", 1, "fa", "fa-ship"], ["data-bs-toggle", "tooltip", "title", "fa fa-shopping-bag", 1, "fa", "fa-shopping-bag"], ["data-bs-toggle", "tooltip", "title", "fa fa-shopping-basket", 1, "fa", "fa-shopping-basket"], ["data-bs-toggle", "tooltip", "title", "fa fa-shopping-cart", 1, "fa", "fa-shopping-cart"], ["data-bs-toggle", "tooltip", "title", "fa fa-shower", 1, "fa", "fa-shower"], ["data-bs-toggle", "tooltip", "title", "fa fa-sign-language", 1, "fa", "fa-sign-language"], ["data-bs-toggle", "tooltip", "title", "fa fa-signal", 1, "fa", "fa-signal"], ["data-bs-toggle", "tooltip", "title", "fa fa-sitemap", 1, "fa", "fa-sitemap"], ["data-bs-toggle", "tooltip", "title", "fa fa-sort", 1, "fa", "fa-sort"], ["data-bs-toggle", "tooltip", "title", "fa fa-sort-down", 1, "fa", "fa-sort-down"], ["data-bs-toggle", "tooltip", "title", "fa fa-square", 1, "fa", "fa-square"], ["data-bs-toggle", "tooltip", "title", "fa fa-star", 1, "fa", "fa-star"], ["data-bs-toggle", "tooltip", "title", "fa fa-star-half", 1, "fa", "fa-star-half"], ["data-bs-toggle", "tooltip", "title", "fa fa-step-backward", 1, "fa", "fa-step-backward"], ["data-bs-toggle", "tooltip", "title", "fa fa-step-forward", 1, "fa", "fa-step-forward"], ["data-bs-toggle", "tooltip", "title", "fa fa-stethoscope", 1, "fa", "fa-stethoscope"], ["data-bs-toggle", "tooltip", "title", "fa fa-sticky-note", 1, "fa", "fa-sticky-note"], ["data-bs-toggle", "tooltip", "title", "fa fa-stop", 1, "fa", "fa-stop"], ["data-bs-toggle", "tooltip", "title", "fa fa-stop-circle", 1, "fa", "fa-stop-circle"], ["data-bs-toggle", "tooltip", "title", "fa fa-street-view", 1, "fa", "fa-street-view"], ["data-bs-toggle", "tooltip", "title", "fa fa-subscript", 1, "fa", "fa-subscript"], ["data-bs-toggle", "tooltip", "title", "fa fa-suitcase", 1, "fa", "fa-suitcase"], ["data-bs-toggle", "tooltip", "title", "fa fa-superscript", 1, "fa", "fa-superscript"], ["data-bs-toggle", "tooltip", "title", "fa fa-table", 1, "fa", "fa-table"], ["data-bs-toggle", "tooltip", "title", "fa fa-tag", 1, "fa", "fa-tag"], ["data-bs-toggle", "tooltip", "title", "fa fa-tags", 1, "fa", "fa-tags"], ["data-bs-toggle", "tooltip", "title", "fa fa-tasks", 1, "fa", "fa-tasks"], ["data-bs-toggle", "tooltip", "title", "fa fa-taxi", 1, "fa", "fa-taxi"], ["data-bs-toggle", "tooltip", "title", "fa fa-terminal", 1, "fa", "fa-terminal"], ["data-bs-toggle", "tooltip", "title", "fa fa-text-height", 1, "fa", "fa-text-height"], ["data-bs-toggle", "tooltip", "title", "fa fa-text-width", 1, "fa", "fa-text-width"], ["data-bs-toggle", "tooltip", "title", "fa fa-th", 1, "fa", "fa-th"], ["data-bs-toggle", "tooltip", "title", "fa fa-th-large", 1, "fa", "fa-th-large"], ["data-bs-toggle", "tooltip", "title", "fa fa-th-list", 1, "fa", "fa-th-list"], ["data-bs-toggle", "tooltip", "title", "fa fa-thermometer", 1, "fa", "fa-thermometer"], ["data-bs-toggle", "tooltip", "title", "fa fa-thermometer-empty", 1, "fa", "fa-thermometer-empty"], ["data-bs-toggle", "tooltip", "title", "fa fa-thermometer-full", 1, "fa", "fa-thermometer-full"], ["data-bs-toggle", "tooltip", "title", "fa fa-thermometer-half", 1, "fa", "fa-thermometer-half"], ["data-bs-toggle", "tooltip", "title", "fa fa-thermometer-quarter", 1, "fa", "fa-thermometer-quarter"], ["data-bs-toggle", "tooltip", "title", "fa fa-thermometer-three-quarters", 1, "fa", "fa-thermometer-three-quarters"], ["data-bs-toggle", "tooltip", "title", "fa fa-thumbs-down", 1, "fa", "fa-thumbs-down"], ["data-bs-toggle", "tooltip", "title", "fa fa-thumbs-up", 1, "fa", "fa-thumbs-up"], ["data-bs-toggle", "tooltip", "title", "fa fa-times", 1, "fa", "fa-times"], ["data-bs-toggle", "tooltip", "title", "fa fa-times-circle", 1, "fa", "fa-times-circle"], ["data-bs-toggle", "tooltip", "title", "fa fa-tint", 1, "fa", "fa-tint"], ["data-bs-toggle", "tooltip", "title", "fa fa-toggle-off", 1, "fa", "fa-toggle-off"], ["data-bs-toggle", "tooltip", "title", "fa fa-toggle-on", 1, "fa", "fa-toggle-on"], ["data-bs-toggle", "tooltip", "title", "fa fa-trademark", 1, "fa", "fa-trademark"], ["data-bs-toggle", "tooltip", "title", "fa fa-train", 1, "fa", "fa-train"], ["data-bs-toggle", "tooltip", "title", "fa fa-transgender", 1, "fa", "fa-transgender"], ["data-bs-toggle", "tooltip", "title", "fa fa-transgender-alt", 1, "fa", "fa-transgender-alt"], ["data-bs-toggle", "tooltip", "title", "fa fa-trash", 1, "fa", "fa-trash"], ["data-bs-toggle", "tooltip", "title", "fa fa-tree", 1, "fa", "fa-tree"], ["data-bs-toggle", "tooltip", "title", "fa fa-trophy", 1, "fa", "fa-trophy"], ["data-bs-toggle", "tooltip", "title", "fa fa-tty", 1, "fa", "fa-tty"], ["data-bs-toggle", "tooltip", "title", "fa fa-tv", 1, "fa", "fa-tv"], ["data-bs-toggle", "tooltip", "title", "fa fa-umbrella", 1, "fa", "fa-umbrella"], ["data-bs-toggle", "tooltip", "title", "fa fa-underline", 1, "fa", "fa-underline"], ["data-bs-toggle", "tooltip", "title", "fa fa-undo", 1, "fa", "fa-undo"], ["data-bs-toggle", "tooltip", "title", "fa fa-universal-access", 1, "fa", "fa-universal-access"], ["data-bs-toggle", "tooltip", "title", "fa fa-university", 1, "fa", "fa-university"], ["data-bs-toggle", "tooltip", "title", "fa fa-unlink", 1, "fa", "fa-unlink"], ["data-bs-toggle", "tooltip", "title", "fa fa-unlock", 1, "fa", "fa-unlock"], ["data-bs-toggle", "tooltip", "title", "fa fa-unlock-alt", 1, "fa", "fa-unlock-alt"], ["data-bs-toggle", "tooltip", "title", "fa fa-upload", 1, "fa", "fa-upload"], ["data-bs-toggle", "tooltip", "title", "fa fa-user-circle", 1, "fa", "fa-user-circle"], ["data-bs-toggle", "tooltip", "title", "fa fa-user-md", 1, "fa", "fa-user-md"], ["data-bs-toggle", "tooltip", "title", "fa fa-user-plus", 1, "fa", "fa-user-plus"], ["data-bs-toggle", "tooltip", "title", "fa fa-user-secret", 1, "fa", "fa-user-secret"], ["data-bs-toggle", "tooltip", "title", "fa fa-user-times", 1, "fa", "fa-user-times"], ["data-bs-toggle", "tooltip", "title", "fa fa-users", 1, "fa", "fa-users"], ["data-bs-toggle", "tooltip", "title", "fa fa-venus", 1, "fa", "fa-venus"], ["data-bs-toggle", "tooltip", "title", "fa fa-venus-double", 1, "fa", "fa-venus-double"], ["data-bs-toggle", "tooltip", "title", "fa fa-venus-mars", 1, "fa", "fa-venus-mars"], ["data-bs-toggle", "tooltip", "title", "fa fa-volume-down", 1, "fa", "fa-volume-down"], ["data-bs-toggle", "tooltip", "title", "fa fa-volume-off", 1, "fa", "fa-volume-off"], ["data-bs-toggle", "tooltip", "title", "fa fa-volume-up", 1, "fa", "fa-volume-up"], ["data-bs-toggle", "tooltip", "title", "fa fa-wheelchair", 1, "fa", "fa-wheelchair"], ["data-bs-toggle", "tooltip", "title", "fa fa-wifi", 1, "fa", "fa-wifi"], ["data-bs-toggle", "tooltip", "title", "fa fa-window-close", 1, "fa", "fa-window-close"], ["data-bs-toggle", "tooltip", "title", "fa fa-window-maximize", 1, "fa", "fa-window-maximize"], ["data-bs-toggle", "tooltip", "title", "fa fa-window-minimize", 1, "fa", "fa-window-minimize"], ["data-bs-toggle", "tooltip", "title", "fa fa-window-restore", 1, "fa", "fa-window-restore"], ["data-bs-toggle", "tooltip", "title", "fa fa-wrench", 1, "fa", "fa-wrench"]],
      template: function IconFontawesomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h3", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Fontawesome Icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 6)(8, "li", 7)(9, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Fontawesome");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 3)(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Fontawesome Icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14)(20, "div", 15)(21, "ul", 16)(22, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "i", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "i", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "i", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "i", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "i", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "i", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "i", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "i", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "i", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "i", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "i", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "i", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "i", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "i", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "i", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "i", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "i", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "i", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "i", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "i", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "i", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "i", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "i", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "i", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "i", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "i", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "i", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "i", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "i", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "i", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](115, "i", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "i", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "i", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "i", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "i", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "i", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "i", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](129, "i", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](131, "i", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](133, "i", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](135, "i", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "i", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](139, "i", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](141, "i", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](143, "i", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](145, "i", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](147, "i", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](149, "i", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](151, "i", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](153, "i", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](155, "i", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](157, "i", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](159, "i", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](161, "i", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](163, "i", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](165, "i", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](167, "i", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](169, "i", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](171, "i", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](173, "i", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](175, "i", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](177, "i", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](179, "i", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](181, "i", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](183, "i", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](185, "i", 98);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](187, "i", 99);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](189, "i", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](191, "i", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](193, "i", 102);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](195, "i", 103);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](197, "i", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](199, "i", 105);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](201, "i", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](203, "i", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](205, "i", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](207, "i", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](209, "i", 110);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](211, "i", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](213, "i", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](215, "i", 113);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](217, "i", 114);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](219, "i", 115);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](221, "i", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](223, "i", 117);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](225, "i", 118);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](227, "i", 119);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](229, "i", 120);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](231, "i", 121);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](233, "i", 122);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](235, "i", 123);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](237, "i", 124);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](239, "i", 125);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](241, "i", 126);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](243, "i", 127);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](245, "i", 128);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](247, "i", 129);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](249, "i", 130);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](251, "i", 131);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](253, "i", 132);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](255, "i", 133);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](257, "i", 134);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](259, "i", 135);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](261, "i", 136);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](263, "i", 137);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](265, "i", 138);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](267, "i", 139);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](269, "i", 140);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](271, "i", 141);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](273, "i", 142);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](275, "i", 143);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](277, "i", 144);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](279, "i", 145);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](281, "i", 146);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](282, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](283, "i", 147);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](285, "i", 148);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](286, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](287, "i", 149);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](288, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](289, "i", 150);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](290, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](291, "i", 151);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](292, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](293, "i", 152);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](295, "i", 153);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](296, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](297, "i", 154);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](298, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](299, "i", 155);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](301, "i", 156);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](303, "i", 157);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](304, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](305, "i", 158);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](306, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](307, "i", 159);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](308, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](309, "i", 160);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](310, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](311, "i", 161);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](312, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](313, "i", 162);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](314, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](315, "i", 163);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](316, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](317, "i", 164);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](318, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](319, "i", 165);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](320, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](321, "i", 166);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](322, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](323, "i", 167);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](324, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](325, "i", 168);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](326, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](327, "i", 169);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](328, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](329, "i", 170);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](330, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](331, "i", 171);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](332, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](333, "i", 172);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](334, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](335, "i", 173);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](336, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](337, "i", 174);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](338, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](339, "i", 175);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](340, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](341, "i", 176);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](342, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](343, "i", 177);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](344, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](345, "i", 178);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](346, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](347, "i", 179);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](348, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](349, "i", 180);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](350, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](351, "i", 181);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](352, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](353, "i", 182);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](354, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](355, "i", 183);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](356, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](357, "i", 184);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](358, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](359, "i", 185);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](360, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](361, "i", 186);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](362, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](363, "i", 187);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](364, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](365, "i", 188);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](366, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](367, "i", 189);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](368, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](369, "i", 190);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](370, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](371, "i", 191);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](372, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](373, "i", 192);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](374, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](375, "i", 193);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](376, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](377, "i", 194);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](378, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](379, "i", 195);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](380, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](381, "i", 196);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](382, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](383, "i", 197);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](384, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](385, "i", 198);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](386, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](387, "i", 199);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](388, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](389, "i", 200);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](390, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](391, "i", 201);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](392, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](393, "i", 202);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](394, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](395, "i", 203);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](396, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](397, "i", 204);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](398, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](399, "i", 205);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](400, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](401, "i", 206);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](402, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](403, "i", 207);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](404, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](405, "i", 208);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](406, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](407, "i", 209);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](408, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](409, "i", 210);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](410, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](411, "i", 211);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](412, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](413, "i", 212);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](414, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](415, "i", 213);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](416, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](417, "i", 214);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](418, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](419, "i", 215);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](420, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](421, "i", 216);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](422, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](423, "i", 217);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](424, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](425, "i", 218);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](426, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](427, "i", 219);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](428, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](429, "i", 220);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](430, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](431, "i", 221);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](432, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](433, "i", 222);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](434, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](435, "i", 223);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](436, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](437, "i", 224);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](438, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](439, "i", 225);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](440, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](441, "i", 226);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](442, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](443, "i", 227);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](444, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](445, "i", 228);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](446, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](447, "i", 229);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](448, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](449, "i", 230);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](450, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](451, "i", 231);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](452, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](453, "i", 232);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](454, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](455, "i", 233);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](456, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](457, "i", 234);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.dashboard);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 36362:
/*!**********************************************************************************!*\
  !*** ./src/app/core-component/icons/icon-fontawesome/icon-fontawesome.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconFontawesomeModule: () => (/* binding */ IconFontawesomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _icon_fontawesome_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon-fontawesome-routing.module */ 35787);
/* harmony import */ var _icon_fontawesome_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon-fontawesome.component */ 4395);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);




class IconFontawesomeModule {
  static {
    this.ɵfac = function IconFontawesomeModule_Factory(t) {
      return new (t || IconFontawesomeModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: IconFontawesomeModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _icon_fontawesome_routing_module__WEBPACK_IMPORTED_MODULE_0__.IconFontawesomeRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](IconFontawesomeModule, {
    declarations: [_icon_fontawesome_component__WEBPACK_IMPORTED_MODULE_1__.IconFontawesomeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _icon_fontawesome_routing_module__WEBPACK_IMPORTED_MODULE_0__.IconFontawesomeRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_icons_icon-fontawesome_icon-fontawesome_module_ts.js.map