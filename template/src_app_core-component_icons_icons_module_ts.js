"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_icons_icons_module_ts"],{

/***/ 98982:
/*!**************************************************************!*\
  !*** ./src/app/core-component/icons/icons-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconsRoutingModule: () => (/* binding */ IconsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);



const routes = [{
  path: '',
  redirectTo: 'icon-fontawesome',
  pathMatch: 'full'
}, {
  path: '',
  children: [{
    path: 'icon-fontawesome',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_icons_icon-fontawesome_icon-fontawesome_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./icon-fontawesome/icon-fontawesome.module */ 36362)).then(m => m.IconFontawesomeModule)
  }, {
    path: 'icon-feather',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_icons_icon-feather_icon-feather_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./icon-feather/icon-feather.module */ 70792)).then(m => m.IconFeatherModule)
  }, {
    path: 'icon-ionic',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_icons_icon-ionic_icon-ionic_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./icon-ionic/icon-ionic.module */ 28410)).then(m => m.IconIonicModule)
  }, {
    path: 'icon-material',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_icons_icon-material_icon-material_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./icon-material/icon-material.module */ 65688)).then(m => m.IconMaterialModule)
  }, {
    path: 'icon-pe7',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_icons_icon-pe7_icon-pe7_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./icon-pe7/icon-pe7.module */ 41398)).then(m => m.IconPe7Module)
  }, {
    path: 'icon-simpleline',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_icons_icon-simpleline_icon-simpleline_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./icon-simpleline/icon-simpleline.module */ 65380)).then(m => m.IconSimplelineModule)
  }, {
    path: 'icon-themify',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_icons_icon-themify_icon-themify_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./icon-themify/icon-themify.module */ 53626)).then(m => m.IconThemifyModule)
  }, {
    path: 'icon-weather',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_icons_icon-weather_icon-weather_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./icon-weather/icon-weather.module */ 78134)).then(m => m.IconWeatherModule)
  }, {
    path: 'icon-typicon',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_icons_icon-typicon_icon-typicon_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./icon-typicon/icon-typicon.module */ 95970)).then(m => m.IconTypiconModule)
  }, {
    path: 'icon-flag',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_icons_icon-flag_icon-flag_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./icon-flag/icon-flag.module */ 13928)).then(m => m.IconFlagModule)
  }]
}];
class IconsRoutingModule {
  static {
    this.ɵfac = function IconsRoutingModule_Factory(t) {
      return new (t || IconsRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: IconsRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IconsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 14976:
/*!*********************************************************!*\
  !*** ./src/app/core-component/icons/icons.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconsComponent: () => (/* binding */ IconsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);


class IconsComponent {
  static {
    this.ɵfac = function IconsComponent_Factory(t) {
      return new (t || IconsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IconsComponent,
      selectors: [["app-icons"]],
      decls: 1,
      vars: 0,
      template: function IconsComponent_Template(rf, ctx) {
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

/***/ 59631:
/*!******************************************************!*\
  !*** ./src/app/core-component/icons/icons.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconsModule: () => (/* binding */ IconsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _icons_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons-routing.module */ 98982);
/* harmony import */ var _icons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons.component */ 14976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);




class IconsModule {
  static {
    this.ɵfac = function IconsModule_Factory(t) {
      return new (t || IconsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: IconsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _icons_routing_module__WEBPACK_IMPORTED_MODULE_0__.IconsRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](IconsModule, {
    declarations: [_icons_component__WEBPACK_IMPORTED_MODULE_1__.IconsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _icons_routing_module__WEBPACK_IMPORTED_MODULE_0__.IconsRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_icons_icons_module_ts.js.map