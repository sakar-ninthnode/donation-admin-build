"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_charts_charts_module_ts"],{

/***/ 64026:
/*!****************************************************************!*\
  !*** ./src/app/core-component/charts/charts-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartsRoutingModule: () => (/* binding */ ChartsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-apexcharts */ 33117);
/* harmony import */ var _charts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts.component */ 54468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);







[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__.NgApexchartsModule];
const routes = [{
  path: '',
  redirectTo: 'chart-apex',
  pathMatch: 'full'
}, {
  path: '',
  component: _charts_component__WEBPACK_IMPORTED_MODULE_0__.ChartsComponent,
  children: [{
    path: 'chart-apex',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_charts_chart-apex_chart-apex_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./chart-apex/chart-apex.module */ 23311)).then(m => m.ChartApexModule)
  }, {
    path: 'chart-ng2',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_charts_chart-ng2_chart-ng2_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./chart-ng2/chart-ng2.module */ 50991)).then(m => m.ChartNg2Module)
  }, {
    path: 'prime-ng',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_charts_prime-ng_prime-ng_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./prime-ng/prime-ng.module */ 82843)).then(m => m.PrimeNgModule)
  }]
}];
class ChartsRoutingModule {
  static {
    this.ɵfac = function ChartsRoutingModule_Factory(t) {
      return new (t || ChartsRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: ChartsRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ChartsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 54468:
/*!***********************************************************!*\
  !*** ./src/app/core-component/charts/charts.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartsComponent: () => (/* binding */ ChartsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);


class ChartsComponent {
  static {
    this.ɵfac = function ChartsComponent_Factory(t) {
      return new (t || ChartsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChartsComponent,
      selectors: [["app-charts"]],
      decls: 1,
      vars: 0,
      template: function ChartsComponent_Template(rf, ctx) {
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

/***/ 15587:
/*!********************************************************!*\
  !*** ./src/app/core-component/charts/charts.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartsModule: () => (/* binding */ ChartsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _charts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts-routing.module */ 64026);
/* harmony import */ var _charts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charts.component */ 54468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);




class ChartsModule {
  static {
    this.ɵfac = function ChartsModule_Factory(t) {
      return new (t || ChartsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: ChartsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _charts_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChartsRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ChartsModule, {
    declarations: [_charts_component__WEBPACK_IMPORTED_MODULE_1__.ChartsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _charts_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChartsRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_charts_charts_module_ts.js.map