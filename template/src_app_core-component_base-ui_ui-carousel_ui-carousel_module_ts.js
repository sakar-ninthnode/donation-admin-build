"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_base-ui_ui-carousel_ui-carousel_module_ts"],{

/***/ 51701:
/*!**********************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-carousel/ui-carousel-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiCarouselRoutingModule: () => (/* binding */ UiCarouselRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ui_carousel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-carousel.component */ 29161);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _ui_carousel_component__WEBPACK_IMPORTED_MODULE_0__.UiCarouselComponent
}];
class UiCarouselRoutingModule {
  static {
    this.ɵfac = function UiCarouselRoutingModule_Factory(t) {
      return new (t || UiCarouselRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: UiCarouselRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UiCarouselRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 29161:
/*!*****************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-carousel/ui-carousel.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiCarouselComponent: () => (/* binding */ UiCarouselComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class UiCarouselComponent {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  static {
    this.ɵfac = function UiCarouselComponent_Factory(t) {
      return new (t || UiCarouselComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UiCarouselComponent,
      selectors: [["app-ui-carousel"]],
      decls: 247,
      vars: 0,
      consts: [[1, "page-header"], [1, "page-title"], [1, "row"], [1, "col-lg-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "sub-header"], [1, "card-body"], ["id", "carouselExampleSlidesOnly", "data-bs-ride", "carousel", 1, "carousel", "slide"], ["role", "listbox", 1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "assets/img/img-1.jpg", "alt", "First slide", 1, "d-block", "img-fluid"], [1, "carousel-item"], ["src", "assets/img/img-3.jpg", "alt", "Second slide", 1, "d-block", "img-fluid"], ["src", "assets/img/img-4.jpg", "alt", "Third slide", 1, "d-block", "img-fluid"], ["id", "carouselExampleControls", "data-bs-ride", "carousel", 1, "carousel", "slide"], ["href", "#carouselExampleControls", "role", "button", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["href", "#carouselExampleControls", "role", "button", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], ["id", "carouselExampleIndicators", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "0", 1, "active"], ["data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "1"], ["data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "2"], ["src", "assets/img/img-2.jpg", "alt", "Second slide", 1, "d-block", "img-fluid"], ["href", "#carouselExampleIndicators", "role", "button", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["href", "#carouselExampleIndicators", "role", "button", "data-bs-slide", "next", 1, "carousel-control-next"], ["id", "carouselExampleCaption", "data-bs-ride", "carousel", 1, "carousel", "slide"], ["src", "assets/img/img-1.jpg", "alt", "Slide", 1, "d-block", "img-fluid"], [1, "carousel-caption", "d-none", "d-md-block"], [1, "text-white"], ["src", "assets/img/img-2.jpg", "alt", "Slide", 1, "d-block", "img-fluid"], ["src", "assets/img/img-3.jpg", "alt", "Slide", 1, "d-block", "img-fluid"], ["href", "#carouselExampleCaption", "role", "button", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["href", "#carouselExampleCaption", "role", "button", "data-bs-slide", "next", 1, "carousel-control-next"], ["id", "carouselExampleFade", "data-bs-ride", "carousel", 1, "carousel", "slide", "carousel-fade"], [1, "carousel-inner"], ["src", "assets/img/img-3.jpg", "alt", "Third slide", 1, "d-block", "img-fluid"], ["href", "#carouselExampleFade", "role", "button", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["href", "#carouselExampleFade", "role", "button", "data-bs-slide", "next", 1, "carousel-control-next"], ["id", "carouselExampleInterval", "data-bs-ride", "carousel", 1, "carousel", "slide"], ["src", "assets/img/img-2.jpg", "alt", "First slide", 1, "d-block", "img-fluid"], ["href", "#carouselExampleInterval", "role", "button", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["href", "#carouselExampleInterval", "role", "button", "data-bs-slide", "next", 1, "carousel-control-next"], [1, "card-header", "justify-content-between"], ["id", "carouselExampleControlsNoTouching", "data-bs-touch", "false", "data-bs-interval", "false", 1, "carousel", "slide"], ["src", "assets/img/img-2.jpg", "alt", "Slide", 1, "d-block", "w-100"], ["src", "assets/img/img-3.jpg", "alt", "Slide", 1, "d-block", "w-100"], ["src", "assets/img/img-4.jpg", "alt", "Slide", 1, "d-block", "w-100"], ["type", "button", "data-bs-target", "#carouselExampleControlsNoTouching", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["type", "button", "data-bs-target", "#carouselExampleControlsNoTouching", "data-bs-slide", "next", 1, "carousel-control-next"], ["id", "carouselExampleDark", "data-bs-ride", "carousel", 1, "carousel", "slide"], ["type", "button", "data-bs-target", "#carouselExampleDark", "data-bs-slide-to", "0", "aria-current", "true", "aria-label", "Slide 1", 1, "active"], ["type", "button", "data-bs-target", "#carouselExampleDark", "data-bs-slide-to", "1", "aria-label", "Slide 2"], ["type", "button", "data-bs-target", "#carouselExampleDark", "data-bs-slide-to", "2", "aria-label", "Slide 3"], ["data-bs-interval", "10000", 1, "carousel-item", "active"], [1, "text-fixed-white"], [1, "op-7"], ["data-bs-interval", "2000", 1, "carousel-item"], ["type", "button", "data-bs-target", "#carouselExampleDark", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["type", "button", "data-bs-target", "#carouselExampleDark", "data-bs-slide", "next", 1, "carousel-control-next"]],
      template: function UiCarouselComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Carousel");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Slides Only");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Here\u2019s a carousel with slides only. Note the presence of the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, ".d-block");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " and ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, ".img-fluid");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " on carousel images to prevent browser default image alignment.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 8)(19, "div", 9)(20, "div", 10)(21, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 3)(28, "div", 4)(29, "div", 5)(30, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "With Controls");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Adding in the previous and next controls:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 8)(35, "div", 16)(36, "div", 10)(37, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "img", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "img", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "img", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Previous");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Next");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 2)(52, "div", 3)(53, "div", 4)(54, "div", 5)(55, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "With Indicators");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "You can also add the indicators to the carousel, alongside the controls, too.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 8)(60, "div", 22)(61, "ol", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "li", 24)(63, "li", 25)(64, "li", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 10)(66, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "img", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "img", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "img", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "a", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Previous");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Next");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 3)(81, "div", 4)(82, "div", 5)(83, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "With Captions");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Add captions to your slides easily with the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, ".carousel-caption");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, " element within any ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, ".carousel-item");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 8)(94, "div", 30)(95, "div", 10)(96, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "img", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 32)(99, "h3", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "First slide label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "img", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 32)(106, "h3", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Second slide label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "img", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 32)(113, "h3", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Third slide label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "a", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](118, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Previous");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "a", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](122, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Next");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 2)(126, "div", 3)(127, "div", 4)(128, "div", 5)(129, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Crossfade");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "Add ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, ".carousel-fade");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, " to your carousel to animate slides with a fade transition instead of a slide.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 8)(137, "div", 38)(138, "div", 39)(139, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](140, "img", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](142, "img", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](144, "img", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "a", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "Previous");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "a", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](150, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "Next");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 3)(154, "div", 4)(155, "div", 5)(156, "h5", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "Individual Interval");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "Add ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "data-bs-interval=\"\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, " to a ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, ".carousel-item");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, " to change the amount of time to delay between automatically cycling to the next item.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 8)(167, "div", 43)(168, "div", 39)(169, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](170, "img", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](172, "img", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](174, "img", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "a", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](176, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "Previous");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "a", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](180, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, "Next");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "div", 2)(184, "div", 3)(185, "div", 4)(186, "div", 47)(187, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "Disable Touch Swiping");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 8)(190, "div", 48)(191, "div", 39)(192, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](193, "img", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](195, "img", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](197, "img", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "button", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](199, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, "Previous");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "button", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](203, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, "Next");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "div", 3)(207, "div", 4)(208, "div", 47)(209, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, "Dark Variant");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "div", 8)(212, "div", 54)(213, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](214, "button", 55)(215, "button", 56)(216, "button", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "div", 39)(218, "div", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](219, "img", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "div", 32)(221, "h5", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](222, "First slide label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "p", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](224, "Some representative placeholder content for the first slide.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "div", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](226, "img", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "div", 32)(228, "h5", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](229, "Second slide label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "p", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](231, "Some representative placeholder content for the second slide.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](233, "img", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "div", 32)(235, "h5", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](236, "Third slide label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "p", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](238, "Some representative placeholder content for the third slide.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "button", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](240, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](242, "Previous");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "button", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](244, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](246, "Next");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 20572:
/*!**************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-carousel/ui-carousel.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiCarouselModule: () => (/* binding */ UiCarouselModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ui_carousel_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-carousel-routing.module */ 51701);
/* harmony import */ var _ui_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-carousel.component */ 29161);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);




class UiCarouselModule {
  static {
    this.ɵfac = function UiCarouselModule_Factory(t) {
      return new (t || UiCarouselModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: UiCarouselModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_carousel_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiCarouselRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UiCarouselModule, {
    declarations: [_ui_carousel_component__WEBPACK_IMPORTED_MODULE_1__.UiCarouselComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_carousel_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiCarouselRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_base-ui_ui-carousel_ui-carousel_module_ts.js.map