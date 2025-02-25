"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_icons_icon-typicon_icon-typicon_module_ts"],{

/***/ 21731:
/*!**********************************************************************************!*\
  !*** ./src/app/core-component/icons/icon-typicon/icon-typicon-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconTypiconRoutingModule: () => (/* binding */ IconTypiconRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _icon_typicon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon-typicon.component */ 69779);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _icon_typicon_component__WEBPACK_IMPORTED_MODULE_0__.IconTypiconComponent
}];
class IconTypiconRoutingModule {
  static {
    this.ɵfac = function IconTypiconRoutingModule_Factory(t) {
      return new (t || IconTypiconRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: IconTypiconRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](IconTypiconRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 69779:
/*!*****************************************************************************!*\
  !*** ./src/app/core-component/icons/icon-typicon/icon-typicon.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconTypiconComponent: () => (/* binding */ IconTypiconComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);



class IconTypiconComponent {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  static {
    this.ɵfac = function IconTypiconComponent_Factory(t) {
      return new (t || IconTypiconComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: IconTypiconComponent,
      selectors: [["app-icon-typicon"]],
      decls: 426,
      vars: 1,
      consts: [[1, "cardhead"], [1, "container-fluid"], [1, "page-header"], [1, "row"], [1, "col-sm-12"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "active"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "icons-items"], [1, "icons-list"], [1, "icons-list-item"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-chart-pie-outline", 1, "typcn", "typcn-chart-pie-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-chart-pie", 1, "typcn", "typcn-chart-pie"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-chevron-left-outline", 1, "typcn", "typcn-chevron-left-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-chevron-left", 1, "typcn", "typcn-chevron-left"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-chevron-right-outline", 1, "typcn", "typcn-chevron-right-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-chevron-right", 1, "typcn", "typcn-chevron-right"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-clipboard", 1, "typcn", "typcn-clipboard"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-cloud-storage", 1, "typcn", "typcn-cloud-storage"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-cloud-storage-outline", 1, "typcn", "typcn-cloud-storage-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-code-outline", 1, "typcn", "typcn-code-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-code", 1, "typcn", "typcn-code"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-coffee", 1, "typcn", "typcn-coffee"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-cog-outline", 1, "typcn", "typcn-cog-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-cog", 1, "typcn", "typcn-cog"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-compass", 1, "typcn", "typcn-compass"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-contacts", 1, "typcn", "typcn-contacts"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-credit-card", 1, "typcn", "typcn-credit-card"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-css3", 1, "typcn", "typcn-css3"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-database", 1, "typcn", "typcn-database"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-delete-outline", 1, "typcn", "typcn-delete-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-delete", 1, "typcn", "typcn-delete"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-device-desktop", 1, "typcn", "typcn-device-desktop"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-device-laptop", 1, "typcn", "typcn-device-laptop"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-device-phone", 1, "typcn", "typcn-device-phone"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-device-tablet", 1, "typcn", "typcn-device-tablet"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-directions", 1, "typcn", "typcn-directions"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-divide-outline", 1, "typcn", "typcn-divide-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-divide", 1, "typcn", "typcn-divide"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-document-add", 1, "typcn", "typcn-document-add"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-document-delete", 1, "typcn", "typcn-document-delete"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-document-text", 1, "typcn", "typcn-document-text"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-document", 1, "typcn", "typcn-document"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-download-outline", 1, "typcn", "typcn-download-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-download", 1, "typcn", "typcn-download"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-dropbox", 1, "typcn", "typcn-dropbox"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-edit", 1, "typcn", "typcn-edit"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-eject-outline", 1, "typcn", "typcn-eject-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-eject", 1, "typcn", "typcn-eject"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-equals-outline", 1, "typcn", "typcn-equals-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-equals", 1, "typcn", "typcn-equals"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-export-outline", 1, "typcn", "typcn-export-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-export", 1, "typcn", "typcn-export"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-eye-outline", 1, "typcn", "typcn-eye-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-eye", 1, "typcn", "typcn-eye"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-feather", 1, "typcn", "typcn-feather"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-film", 1, "typcn", "typcn-film"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-filter", 1, "typcn", "typcn-filter"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-flag-outline", 1, "typcn", "typcn-flag-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-flag", 1, "typcn", "typcn-flag"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-flash-outline", 1, "typcn", "typcn-flash-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-flash", 1, "typcn", "typcn-flash"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-flow-children", 1, "typcn", "typcn-flow-children"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-flow-merge", 1, "typcn", "typcn-flow-merge"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-flow-parallel", 1, "typcn", "typcn-flow-parallel"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-flow-switch", 1, "typcn", "typcn-flow-switch"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-folder-add", 1, "typcn", "typcn-folder-add"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-folder-delete", 1, "typcn", "typcn-folder-delete"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-folder-open", 1, "typcn", "typcn-folder-open"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-folder", 1, "typcn", "typcn-folder"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-gift", 1, "typcn", "typcn-gift"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-globe-outline", 1, "typcn", "typcn-globe-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-globe", 1, "typcn", "typcn-globe"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-group-outline", 1, "typcn", "typcn-group-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-group", 1, "typcn", "typcn-group"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-headphones", 1, "typcn", "typcn-headphones"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-heart-full-outline", 1, "typcn", "typcn-heart-full-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-heart-half-outline", 1, "typcn", "typcn-heart-half-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-heart-outline", 1, "typcn", "typcn-heart-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-heart", 1, "typcn", "typcn-heart"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-home-outline", 1, "typcn", "typcn-home-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-home", 1, "typcn", "typcn-home"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-html5", 1, "typcn", "typcn-html5"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-image-outline", 1, "typcn", "typcn-image-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-image", 1, "typcn", "typcn-image"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-infinity-outline", 1, "typcn", "typcn-infinity-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-info-large-outline", 1, "typcn", "typcn-info-large-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-info-large", 1, "typcn", "typcn-info-large"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-info-outline", 1, "typcn", "typcn-info-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-info", 1, "typcn", "typcn-info"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-input-checked-outline", 1, "typcn", "typcn-input-checked-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-input-checked", 1, "typcn", "typcn-input-checked"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-key-outline", 1, "typcn", "typcn-key-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-key", 1, "typcn", "typcn-key"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-keyboard", 1, "typcn", "typcn-keyboard"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-leaf", 1, "typcn", "typcn-leaf"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-lightbulb", 1, "typcn", "typcn-lightbulb"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-link-outline", 1, "typcn", "typcn-link-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-link", 1, "typcn", "typcn-link"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-location-arrow-outline", 1, "typcn", "typcn-location-arrow-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-location-arrow", 1, "typcn", "typcn-location-arrow"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-location-outline", 1, "typcn", "typcn-location-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-location", 1, "typcn", "typcn-location"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-lock-closed-outline", 1, "typcn", "typcn-lock-closed-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-lock-closed", 1, "typcn", "typcn-lock-closed"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-lock-open-outline", 1, "typcn", "typcn-lock-open-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-lock-open", 1, "typcn", "typcn-lock-open"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-mail", 1, "typcn", "typcn-mail"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-map", 1, "typcn", "typcn-map"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-media-eject-outline", 1, "typcn", "typcn-media-eject-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-media-eject", 1, "typcn", "typcn-media-eject"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-media-fast-forward-outline", 1, "typcn", "typcn-media-fast-forward-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-media-fast-forward", 1, "typcn", "typcn-media-fast-forward"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-media-pause-outline", 1, "typcn", "typcn-media-pause-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-media-pause", 1, "typcn", "typcn-media-pause"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-media-play-outline", 1, "typcn", "typcn-media-play-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-media-play-reverse-outline", 1, "typcn", "typcn-media-play-reverse-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-media-play-reverse", 1, "typcn", "typcn-media-play-reverse"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-media-play", 1, "typcn", "typcn-media-play"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-media-record-outline", 1, "typcn", "typcn-media-record-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-media-record", 1, "typcn", "typcn-media-record"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-media-rewind-outline", 1, "typcn", "typcn-media-rewind-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-media-rewind", 1, "typcn", "typcn-media-rewind"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-media-stop-outline", 1, "typcn", "typcn-media-stop-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-media-stop", 1, "typcn", "typcn-media-stop"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-message-typing", 1, "typcn", "typcn-message-typing"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-message", 1, "typcn", "typcn-message"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-messages", 1, "typcn", "typcn-messages"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-microphone-outline", 1, "typcn", "typcn-microphone-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-microphone", 1, "typcn", "typcn-microphone"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-minus-outline", 1, "typcn", "typcn-minus-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-minus", 1, "typcn", "typcn-minus"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-mortar-board", 1, "typcn", "typcn-mortar-board"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-news", 1, "typcn", "typcn-news"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-notes-outline", 1, "typcn", "typcn-notes-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-notes", 1, "typcn", "typcn-notes"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-pen", 1, "typcn", "typcn-pen"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-pencil", 1, "typcn", "typcn-pencil"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-phone-outline", 1, "typcn", "typcn-phone-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-phone", 1, "typcn", "typcn-phone"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-pi-outline", 1, "typcn", "typcn-pi-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-pi", 1, "typcn", "typcn-pi"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-pin-outline", 1, "typcn", "typcn-pin-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-pin", 1, "typcn", "typcn-pin"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-pipette", 1, "typcn", "typcn-pipette"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-plane-outline", 1, "typcn", "typcn-plane-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-plane", 1, "typcn", "typcn-plane"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-plug", 1, "typcn", "typcn-plug"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-plus-outline", 1, "typcn", "typcn-plus-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-plus", 1, "typcn", "typcn-plus"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-point-of-interest-outline", 1, "typcn", "typcn-point-of-interest-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-point-of-interest", 1, "typcn", "typcn-point-of-interest"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-power-outline", 1, "typcn", "typcn-power-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-power", 1, "typcn", "typcn-power"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-printer", 1, "typcn", "typcn-printer"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-puzzle-outline", 1, "typcn", "typcn-puzzle-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-puzzle", 1, "typcn", "typcn-puzzle"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-radar-outline", 1, "typcn", "typcn-radar-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-radar", 1, "typcn", "typcn-radar"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-refresh-outline", 1, "typcn", "typcn-refresh-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-refresh", 1, "typcn", "typcn-refresh"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-rss-outline", 1, "typcn", "typcn-rss-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-rss", 1, "typcn", "typcn-rss"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-scissors-outline", 1, "typcn", "typcn-scissors-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-scissors", 1, "typcn", "typcn-scissors"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-shopping-bag", 1, "typcn", "typcn-shopping-bag"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-shopping-cart", 1, "typcn", "typcn-shopping-cart"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-social-at-circular", 1, "typcn", "typcn-social-at-circular"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-social-dribbble-circular", 1, "typcn", "typcn-social-dribbble-circular"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-social-dribbble", 1, "typcn", "typcn-social-dribbble"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-social-facebook-circular", 1, "typcn", "typcn-social-facebook-circular"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-social-facebook", 1, "typcn", "typcn-social-facebook"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-social-flickr-circular", 1, "typcn", "typcn-social-flickr-circular"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-social-flickr", 1, "typcn", "typcn-social-flickr"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-social-github-circular", 1, "typcn", "typcn-social-github-circular"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-social-github", 1, "typcn", "typcn-social-github"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-social-google-plus-circular", 1, "typcn", "typcn-social-google-plus-circular"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-social-google-plus", 1, "typcn", "typcn-social-google-plus"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-social-instagram-circular", 1, "typcn", "typcn-social-instagram-circular"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-social-instagram", 1, "typcn", "typcn-social-instagram"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-social-last-fm-circular", 1, "typcn", "typcn-social-last-fm-circular"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-social-last-fm", 1, "typcn", "typcn-social-last-fm"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-social-linkedin-circular", 1, "typcn", "typcn-social-linkedin-circular"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-social-linkedin", 1, "typcn", "typcn-social-linkedin"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-social-pinterest-circular", 1, "typcn", "typcn-social-pinterest-circular"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-social-pinterest", 1, "typcn", "typcn-social-pinterest"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-social-skype-outline", 1, "typcn", "typcn-social-skype-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-social-skype", 1, "typcn", "typcn-social-skype"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-social-tumbler-circular", 1, "typcn", "typcn-social-tumbler-circular"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-social-tumbler", 1, "typcn", "typcn-social-tumbler"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-social-twitter-circular", 1, "typcn", "typcn-social-twitter-circular"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-social-twitter", 1, "typcn", "typcn-social-twitter"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-social-vimeo-circular", 1, "typcn", "typcn-social-vimeo-circular"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-social-vimeo", 1, "typcn", "typcn-social-vimeo"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-social-youtube-circular", 1, "typcn", "typcn-social-youtube-circular"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-social-youtube", 1, "typcn", "typcn-social-youtube"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-sort-alphabetically-outline", 1, "typcn", "typcn-sort-alphabetically-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-sort-alphabetically", 1, "typcn", "typcn-sort-alphabetically"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-sort-numerically-outline", 1, "typcn", "typcn-sort-numerically-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-sort-numerically", 1, "typcn", "typcn-sort-numerically"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-spanner-outline", 1, "typcn", "typcn-spanner-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-spanner", 1, "typcn", "typcn-spanner"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-spiral", 1, "typcn", "typcn-spiral"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-star-full-outline", 1, "typcn", "typcn-star-full-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-star-half-outline", 1, "typcn", "typcn-star-half-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-star-half", 1, "typcn", "typcn-star-half"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-star-outline", 1, "typcn", "typcn-star-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-star", 1, "typcn", "typcn-star"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-starburst-outline", 1, "typcn", "typcn-starburst-outline"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-starburst", 1, "typcn", "typcn-starburst"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-stopwatch", 1, "typcn", "typcn-stopwatch"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-support", 1, "typcn", "typcn-support"], ["data-bs-toggle", "tooltip", "title", "typcn typcn-tabs-outline", 1, "typcn", "typcn-tabs-outline"]],
      template: function IconTypiconComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h3", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Typicon Icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 6)(8, "li", 7)(9, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Typicon Icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 3)(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Typicon Icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14)(20, "div", 15)(21, "ul", 16)(22, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "i", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "i", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "i", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "i", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "i", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "i", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "i", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "i", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "i", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "i", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "i", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "i", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "i", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "i", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "i", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "i", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "i", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "i", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "i", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "i", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "i", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "i", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "i", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "i", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "i", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "i", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "i", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "i", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "i", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "i", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "i", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](115, "i", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "i", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "i", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "i", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "i", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "i", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "i", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](129, "i", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](131, "i", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](133, "i", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](135, "i", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "i", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](139, "i", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](141, "i", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](143, "i", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](145, "i", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](147, "i", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](149, "i", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](151, "i", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](153, "i", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](155, "i", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](157, "i", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](159, "i", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](161, "i", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](163, "i", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](165, "i", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](167, "i", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](169, "i", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](171, "i", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](173, "i", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](175, "i", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](177, "i", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](179, "i", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](181, "i", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](183, "i", 98);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](185, "i", 99);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](187, "i", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](189, "i", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](191, "i", 102);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](193, "i", 103);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](195, "i", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](197, "i", 105);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](199, "i", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](201, "i", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](203, "i", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](205, "i", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](207, "i", 110);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](209, "i", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](211, "i", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](213, "i", 113);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](215, "i", 114);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](217, "i", 115);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](219, "i", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](221, "i", 117);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](223, "i", 118);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](225, "i", 119);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](227, "i", 120);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](229, "i", 121);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](231, "i", 122);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](233, "i", 123);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](235, "i", 124);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](237, "i", 125);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](239, "i", 126);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](241, "i", 127);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](243, "i", 128);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](245, "i", 129);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](247, "i", 130);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](249, "i", 131);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](251, "i", 132);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](253, "i", 133);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](255, "i", 134);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](257, "i", 135);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](259, "i", 136);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](261, "i", 137);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](263, "i", 138);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](265, "i", 139);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](267, "i", 140);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](269, "i", 141);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](271, "i", 142);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](273, "i", 143);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](275, "i", 144);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](277, "i", 145);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](279, "i", 146);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](281, "i", 147);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](282, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](283, "i", 148);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](285, "i", 149);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](286, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](287, "i", 150);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](288, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](289, "i", 151);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](290, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](291, "i", 152);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](292, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](293, "i", 153);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](295, "i", 154);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](296, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](297, "i", 155);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](298, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](299, "i", 156);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](301, "i", 157);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](303, "i", 158);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](304, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](305, "i", 159);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](306, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](307, "i", 160);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](308, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](309, "i", 161);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](310, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](311, "i", 162);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](312, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](313, "i", 163);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](314, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](315, "i", 164);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](316, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](317, "i", 165);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](318, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](319, "i", 166);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](320, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](321, "i", 167);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](322, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](323, "i", 168);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](324, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](325, "i", 169);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](326, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](327, "i", 170);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](328, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](329, "i", 171);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](330, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](331, "i", 172);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](332, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](333, "i", 173);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](334, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](335, "i", 174);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](336, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](337, "i", 175);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](338, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](339, "i", 176);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](340, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](341, "i", 177);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](342, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](343, "i", 178);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](344, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](345, "i", 179);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](346, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](347, "i", 180);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](348, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](349, "i", 181);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](350, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](351, "i", 182);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](352, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](353, "i", 183);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](354, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](355, "i", 184);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](356, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](357, "i", 185);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](358, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](359, "i", 186);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](360, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](361, "i", 187);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](362, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](363, "i", 188);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](364, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](365, "i", 189);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](366, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](367, "i", 190);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](368, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](369, "i", 191);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](370, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](371, "i", 192);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](372, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](373, "i", 193);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](374, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](375, "i", 194);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](376, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](377, "i", 195);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](378, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](379, "i", 196);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](380, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](381, "i", 197);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](382, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](383, "i", 198);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](384, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](385, "i", 199);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](386, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](387, "i", 200);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](388, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](389, "i", 201);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](390, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](391, "i", 202);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](392, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](393, "i", 203);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](394, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](395, "i", 204);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](396, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](397, "i", 205);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](398, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](399, "i", 206);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](400, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](401, "i", 207);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](402, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](403, "i", 208);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](404, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](405, "i", 209);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](406, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](407, "i", 210);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](408, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](409, "i", 211);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](410, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](411, "i", 212);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](412, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](413, "i", 213);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](414, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](415, "i", 214);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](416, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](417, "i", 215);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](418, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](419, "i", 216);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](420, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](421, "i", 217);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](422, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](423, "i", 218);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](424, "li", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](425, "i", 219);
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

/***/ 95970:
/*!**************************************************************************!*\
  !*** ./src/app/core-component/icons/icon-typicon/icon-typicon.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconTypiconModule: () => (/* binding */ IconTypiconModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _icon_typicon_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon-typicon-routing.module */ 21731);
/* harmony import */ var _icon_typicon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon-typicon.component */ 69779);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);




class IconTypiconModule {
  static {
    this.ɵfac = function IconTypiconModule_Factory(t) {
      return new (t || IconTypiconModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: IconTypiconModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _icon_typicon_routing_module__WEBPACK_IMPORTED_MODULE_0__.IconTypiconRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](IconTypiconModule, {
    declarations: [_icon_typicon_component__WEBPACK_IMPORTED_MODULE_1__.IconTypiconComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _icon_typicon_routing_module__WEBPACK_IMPORTED_MODULE_0__.IconTypiconRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_icons_icon-typicon_icon-typicon_module_ts.js.map