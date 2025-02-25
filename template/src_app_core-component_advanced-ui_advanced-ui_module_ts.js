"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_advanced-ui_advanced-ui_module_ts"],{

/***/ 11874:
/*!**************************************************************************!*\
  !*** ./src/app/core-component/advanced-ui/advanced-ui-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvancedUiRoutingModule: () => (/* binding */ AdvancedUiRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _advanced_ui_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./advanced-ui.component */ 60348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _advanced_ui_component__WEBPACK_IMPORTED_MODULE_0__.AdvancedUiComponent,
  children: [{
    path: 'ui-timeline',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_advanced-ui_ui-timeline_ui-timeline_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ui-timeline/ui-timeline.module */ 49415)).then(m => m.UiTimelineModule)
  }, {
    path: 'ui-text-editor',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_advanced-ui_ui-text-editor_ui-text-editor_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ui-text-editor/ui-text-editor.module */ 61045)).then(m => m.UiTextEditorModule)
  }, {
    path: 'ui-scrollbar',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_advanced-ui_ui-scrollbar_ui-scrollbar_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ui-scrollbar/ui-scrollbar.module */ 75615)).then(m => m.UiScrollbarModule)
  }, {
    path: 'ui-ribbon',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_advanced-ui_ui-ribbon_ui-ribbon_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ui-ribbon/ui-ribbon.module */ 53371)).then(m => m.UiRibbonModule)
  }, {
    path: 'ui-rating',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_advanced-ui_ui-rating_ui-rating_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ui-rating/ui-rating.module */ 56427)).then(m => m.UiRatingModule)
  }, {
    path: 'ui-drag-drop',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_advanced-ui_ui-drag-drop_ui-drag-drop_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ui-drag-drop/ui-drag-drop.module */ 92035)).then(m => m.UiDragDropModule)
  }, {
    path: 'ui-counter',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_advanced-ui_ui-counter_ui-counter_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ui-counter/ui-counter.module */ 76939)).then(m => m.UiCounterModule)
  }, {
    path: 'ui-clipboard',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_advanced-ui_ui-clipboard_ui-clipboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ui-clipboard/ui-clipboard.module */ 62143)).then(m => m.UiClipboardModule)
  }]
}, {
  path: 'ui-stickynote',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_advanced-ui_ui-stickynote_ui-stickynote_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ui-stickynote/ui-stickynote.module */ 37375)).then(m => m.UiStickynoteModule)
}];
class AdvancedUiRoutingModule {
  static {
    this.ɵfac = function AdvancedUiRoutingModule_Factory(t) {
      return new (t || AdvancedUiRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AdvancedUiRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdvancedUiRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 60348:
/*!*********************************************************************!*\
  !*** ./src/app/core-component/advanced-ui/advanced-ui.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvancedUiComponent: () => (/* binding */ AdvancedUiComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);


class AdvancedUiComponent {
  static {
    this.ɵfac = function AdvancedUiComponent_Factory(t) {
      return new (t || AdvancedUiComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdvancedUiComponent,
      selectors: [["app-advanced-ui"]],
      decls: 1,
      vars: 0,
      template: function AdvancedUiComponent_Template(rf, ctx) {
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

/***/ 41099:
/*!******************************************************************!*\
  !*** ./src/app/core-component/advanced-ui/advanced-ui.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvancedUiModule: () => (/* binding */ AdvancedUiModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _advanced_ui_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./advanced-ui-routing.module */ 11874);
/* harmony import */ var _advanced_ui_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./advanced-ui.component */ 60348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);




class AdvancedUiModule {
  static {
    this.ɵfac = function AdvancedUiModule_Factory(t) {
      return new (t || AdvancedUiModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AdvancedUiModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _advanced_ui_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdvancedUiRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AdvancedUiModule, {
    declarations: [_advanced_ui_component__WEBPACK_IMPORTED_MODULE_1__.AdvancedUiComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _advanced_ui_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdvancedUiRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_advanced-ui_advanced-ui_module_ts.js.map