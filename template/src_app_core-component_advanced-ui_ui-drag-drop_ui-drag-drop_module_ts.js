"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_advanced-ui_ui-drag-drop_ui-drag-drop_module_ts"],{

/***/ 3450:
/*!****************************************************************************************!*\
  !*** ./src/app/core-component/advanced-ui/ui-drag-drop/ui-drag-drop-routing.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiDragDropRoutingModule: () => (/* binding */ UiDragDropRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ui_drag_drop_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-drag-drop.component */ 64644);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _ui_drag_drop_component__WEBPACK_IMPORTED_MODULE_0__.UiDragDropComponent
}];
class UiDragDropRoutingModule {
  static {
    this.ɵfac = function UiDragDropRoutingModule_Factory(t) {
      return new (t || UiDragDropRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: UiDragDropRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UiDragDropRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 64644:
/*!***********************************************************************************!*\
  !*** ./src/app/core-component/advanced-ui/ui-drag-drop/ui-drag-drop.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiDragDropComponent: () => (/* binding */ UiDragDropComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 50854);
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);






const _c0 = a0 => ({
  "card-fullscreen": a0
});
function UiDragDropComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 15)(3, "blockquote", 60)(4, "h6", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "footer", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "cite", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.tittle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r1.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("-", item_r1.person, "");
  }
}
function UiDragDropComponent_Conditional_106_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27)(1, "div", 11)(2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Card With Close Button ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UiDragDropComponent_Conditional_106_Template_a_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.toggleCardVisibility());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 15)(7, "h6", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Closed Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 18)(12, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Read More");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
class UiDragDropComponent {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    this.isFullscreen = false;
    this.dragCardOne = [{
      tittle: 'The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart..',
      content: 'Someone famous as ',
      person: '-Helen Keller'
    }];
    this.basicListGroup = [{
      tittle: 'Card With Fullscreen Button',
      person: 'FullScreen Card',
      content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words'
    }];
    this.todoList = ['Cras justo odio', 'Dapibus ac facilisis in', 'Morbi leo risus', 'Porta ac consectetur ac', 'Vestibulum at eros'];
    this.doneList = ['Cras justo odio', 'Dapibus ac facilisis in', 'Morbi leo risus', 'Porta ac consectetur ac', 'Vestibulum at eros'];
    this.isCardFullscreen = false;
    this.isCardVisible = true;
  }
  drop(event) {
    (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__.moveItemInArray)(this.basicListGroup, event.previousIndex, event.currentIndex);
  }
  dropTodo(event) {
    if (event.previousContainer === event.container) {
      (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__.moveItemInArray)(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__.transferArrayItem)(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
  toggleFullscreen() {
    this.isCardFullscreen = !this.isCardFullscreen;
  }
  toggleCardVisibility() {
    this.isCardVisible = !this.isCardVisible;
  }
  static {
    this.ɵfac = function UiDragDropComponent_Factory(t) {
      return new (t || UiDragDropComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UiDragDropComponent,
      selectors: [["app-ui-drag-drop"]],
      decls: 107,
      vars: 5,
      consts: [[1, "page-header"], [1, "row"], [1, "col-sm-12"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "active"], ["id", "draggable-left", 1, "col-xl-6"], ["cdkDrag", "", 1, "card", "custom-card", "card-bg-primary"], ["cdkDrag", "", 1, "card", "custom-card", 3, "ngClass"], [1, "card-header", "justify-content-between"], [1, "card-title"], ["href", "javascript:void(0);", "data-bs-toggle", "card-fullscreen", 3, "click"], [1, "feather", "icon-maximize", "feather-zap"], [1, "card-body"], [1, "card-text", "fw-semibold"], [1, "card-text", "mb-0"], [1, "card-footer"], [1, "btn", "btn-primary"], ["cdkDrag", "", 1, "card", "custom-card", "overlay-card", "text-fixed-white"], ["src", "assets/img/media/media-35.jpg", "alt", "...", 1, "card-img"], [1, "card-img-overlay", "d-flex", "flex-column", "p-0"], [1, "card-header", "text-fixed-white"], [1, "card-body", "overflow-hidden", "text-fixed-white"], [1, "card-text", "mb-2"], [1, "card-text"], ["cdkDrag", "", 1, "card", "custom-card"], ["href", "javascript:void(0);", 1, "card-anchor"], [1, "d-flex", "align-items-center"], [1, "me-3"], [1, "avatar", "avatar-md"], ["src", "assets/img/avatar/avatar-1.jpg", "alt", "img"], [1, "card-text", "mb-0", "fs-14", "fw-semibold"], [1, "card-title", "text-muted", "fs-12", "mb-0"], ["cdkDrag", "", 1, "card", "custom-card", "border", "border-info"], [1, "avatar", "avatar-xl"], ["src", "assets/img/avatar/avatar-10.jpg", "alt", "img"], [1, "card-text", "text-info", "mb-1", "fs-14", "fw-semibold"], [1, "card-title", "fs-12", "mb-1"], [1, "card-title", "text-muted", "fs-11", "mb-0"], ["id", "draggable-right", 1, "col-xl-6"], ["cdkDrag", "", 1, "card", "custom-card", "overlay-card"], ["src", "assets/img/media/media-36.jpg", "alt", "...", 1, "card-img"], [1, "card-img-overlay", "d-flex", "flex-column", "p-0", "over-content-bottom"], [1, "card-body", "text-fixed-white"], [1, "card-footer", "text-fixed-white"], ["cdkDrag", "", 1, "card", "custom-card", "card-bg-success"], [1, "d-flex", "align-items-center", "w-100"], [1, "me-2"], [1, "avatar", "avatar-rounded"], ["src", "assets/img/avatar/avatar-11.jpg", "alt", "img"], [1, ""], [1, "fs-15", "fw-semibold"], [1, "mb-0", "text-fixed-white", "op-7", "fs-12"], [1, "card-header", "border-bottom-0", "justify-content-between"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapseExample", "aria-expanded", "false", "aria-controls", "collapseExample"], [1, "feather", "icon-chevron-down", "fs-18", "collapse-open"], [1, "feather", "icon-chevron-up", "collapse-close", "fs-18"], ["id", "collapseExample", 1, "collapse", "show", "border-top"], [1, "blockquote", "mb-0", "text-center"], [1, "text-fixed-white"], [1, "blockquote-footer", "mt-3", "fs-14", "text-fixed-white", "op-7"], ["title", "Source Title"], ["href", "javascript:void(0);", "data-bs-toggle", "card-remove", 3, "click"], [1, "feather", "icon-x", "fs-18"]],
      template: function UiDragDropComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Drag & Drop");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 4)(6, "li", 5)(7, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Drag & Drop");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 1)(12, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](13, UiDragDropComponent_For_14_Template, 10, 3, "div", 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10)(16, "div", 11)(17, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Card With Fullscreen Button ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UiDragDropComponent_Template_a_click_19_listener() {
            return ctx.toggleFullscreen();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15)(22, "h6", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "FullScreen Card");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 18)(27, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Read More");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "img", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 22)(32, "div", 23)(33, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Image Overlays Are Awesome! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 24)(36, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Last updated 3 mins ago");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "a", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 15)(43, "div", 29)(44, "div", 30)(45, "span", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "img", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div")(48, "p", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Atharva Simon.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Correspondent Professor");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "a", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 15)(55, "div", 29)(56, "div", 30)(57, "span", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "img", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div")(60, "p", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Alicia Keys.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Department Of Commerce");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "24 Years, Female");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 41)(67, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "img", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 44)(70, "div", 45)(71, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, " Image Overlays Are Awesome! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Last updated 3 mins ago");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Last updated 3 mins ago");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 47)(80, "div", 15)(81, "div", 48)(82, "div", 49)(83, "span", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "img", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 52)(86, "div", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Samantha sid");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "p", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "In leave for 1 month");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 27)(91, "div", 55)(92, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, " Card With Collapse Button ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "a", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "i", 57)(96, "i", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 59)(98, "div", 15)(99, "h6", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Collapsible Card");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "p", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 18)(104, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Read More");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](106, UiDragDropComponent_Conditional_106_Template, 14, 0, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.dashboard);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.dragCardOne);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx.isCardFullscreen));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](91);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](106, ctx.isCardVisible ? 106 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__.CdkDrag],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 92035:
/*!********************************************************************************!*\
  !*** ./src/app/core-component/advanced-ui/ui-drag-drop/ui-drag-drop.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiDragDropModule: () => (/* binding */ UiDragDropModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ui_drag_drop_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-drag-drop-routing.module */ 3450);
/* harmony import */ var _ui_drag_drop_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-drag-drop.component */ 64644);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);





class UiDragDropModule {
  static {
    this.ɵfac = function UiDragDropModule_Factory(t) {
      return new (t || UiDragDropModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: UiDragDropModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ui_drag_drop_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiDragDropRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.sharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](UiDragDropModule, {
    declarations: [_ui_drag_drop_component__WEBPACK_IMPORTED_MODULE_1__.UiDragDropComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ui_drag_drop_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiDragDropRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.sharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_advanced-ui_ui-drag-drop_ui-drag-drop_module_ts.js.map