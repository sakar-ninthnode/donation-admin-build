"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_charts_chart-ng2_chart-ng2_module_ts"],{

/***/ 26950:
/*!*****************************************************************************!*\
  !*** ./src/app/core-component/charts/chart-ng2/chart-ng2-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartNg2RoutingModule: () => (/* binding */ ChartNg2RoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _chart_ng2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart-ng2.component */ 57472);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _chart_ng2_component__WEBPACK_IMPORTED_MODULE_0__.ChartNg2Component
}];
class ChartNg2RoutingModule {
  static {
    this.ɵfac = function ChartNg2RoutingModule_Factory(t) {
      return new (t || ChartNg2RoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ChartNg2RoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ChartNg2RoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 57472:
/*!************************************************************************!*\
  !*** ./src/app/core-component/charts/chart-ng2/chart-ng2.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartNg2Component: () => (/* binding */ ChartNg2Component)
/* harmony export */ });
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-charts */ 57839);
/* harmony import */ var src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/core.index */ 82351);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);





const _c0 = () => ({
  responsive: true
});
class ChartNg2Component {
  constructor() {
    this.routes = src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.routes;
    this.barChartData = {
      labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
      datasets: [{
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A'
      }, {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Series B'
      }]
    };
    this.transparencyChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        data: [14, 12, 34, 25, 24, 20],
        label: 'Sales',
        backgroundColor: '#ffff',
        borderColor: 'black',
        borderWidth: 1
      }]
    };
    this.gradientChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        data: [14, 12, 34, 25, 24, 20],
        label: 'Sales',
        backgroundColor: '#2b93df'
      }]
    };
    this.pieChartData = {
      labels: [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'],
      datasets: [{
        data: [300, 500, 100]
      }]
    };
  }
  static {
    this.ɵfac = function ChartNg2Component_Factory(t) {
      return new (t || ChartNg2Component)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ChartNg2Component,
      selectors: [["app-chart-ng2"]],
      viewQuery: function ChartNg2Component_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](ng2_charts__WEBPACK_IMPORTED_MODULE_2__.BaseChartDirective, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
        }
      },
      decls: 77,
      vars: 27,
      consts: [[1, "cardhead"], [1, "page-header"], [1, "row"], [1, "col-sm-12"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "active"], [1, "col-md-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "chartjs-wrapper-demo"], ["baseChart", "", "id", "chartBar1", 1, "chart", "h-300", 3, "data"], ["baseChart", "", "id", "chartBar2", 1, "chart", "h-300", 3, "data"], ["baseChart", "", 1, "chart", "h-300", 3, "type", "data", "options"], [1, "chartjs-wrapper-demo", "custom-chart"]],
      template: function ChartNg2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Charts");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 5)(7, "li", 6)(8, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Ng2 Chart");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 2)(13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Bar Chart");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13)(19, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "canvas", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 9)(22, "div", 10)(23, "div", 11)(24, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Transparency");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 13)(27, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "canvas", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 9)(30, "div", 10)(31, "div", 11)(32, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Line Chart");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 13)(35, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "canvas", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 9)(38, "div", 10)(39, "div", 11)(40, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Scatter Chart");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 13)(43, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "canvas", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 9)(46, "div", 10)(47, "div", 11)(48, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Radar Chart");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 13)(51, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "canvas", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 9)(54, "div", 10)(55, "div", 11)(56, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Doughnut Chart");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 13)(59, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "canvas", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 9)(62, "div", 10)(63, "div", 11)(64, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Pie Chart");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 13)(67, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "canvas", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 9)(70, "div", 10)(71, "div", 11)(72, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Polar Area Chart");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 13)(75, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "canvas", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.dashboard);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.barChartData);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.transparencyChartData);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", "line")("data", ctx.barChartData)("options", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](21, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", "scatter")("data", ctx.barChartData)("options", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](22, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", "radar")("data", ctx.barChartData)("options", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](23, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", "doughnut")("data", ctx.barChartData)("options", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](24, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", "pie")("data", ctx.pieChartData)("options", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](25, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", "polarArea")("data", ctx.barChartData)("options", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](26, _c0));
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, ng2_charts__WEBPACK_IMPORTED_MODULE_2__.BaseChartDirective],
      styles: [".custom-chart[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.custom-chart[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n  display: flex !important;\n  justify-content: center;\n  height: 400px !important;\n  width: 400px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS1jb21wb25lbnQvY2hhcnRzL2NoYXJ0LW5nMi9jaGFydC1uZzIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUFJO0VBQ0Usd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7QUFFTiIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tY2hhcnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY2FudmFzIHtcclxuICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgaGVpZ2h0OiA0MDBweCAhaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogNDAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 50991:
/*!*********************************************************************!*\
  !*** ./src/app/core-component/charts/chart-ng2/chart-ng2.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartNg2Module: () => (/* binding */ ChartNg2Module)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _chart_ng2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart-ng2-routing.module */ 26950);
/* harmony import */ var _chart_ng2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart-ng2.component */ 57472);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);





class ChartNg2Module {
  static {
    this.ɵfac = function ChartNg2Module_Factory(t) {
      return new (t || ChartNg2Module)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: ChartNg2Module
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _chart_ng2_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChartNg2RoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.sharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ChartNg2Module, {
    declarations: [_chart_ng2_component__WEBPACK_IMPORTED_MODULE_1__.ChartNg2Component],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _chart_ng2_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChartNg2RoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.sharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_charts_chart-ng2_chart-ng2_module_ts.js.map