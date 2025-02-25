"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_charts_prime-ng_prime-ng_module_ts"],{

/***/ 45394:
/*!***************************************************************************!*\
  !*** ./src/app/core-component/charts/prime-ng/prime-ng-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrimeNgRoutingModule: () => (/* binding */ PrimeNgRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _prime_ng_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prime-ng.component */ 66956);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _prime_ng_component__WEBPACK_IMPORTED_MODULE_0__.PrimeNgComponent
}];
class PrimeNgRoutingModule {
  static {
    this.ɵfac = function PrimeNgRoutingModule_Factory(t) {
      return new (t || PrimeNgRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: PrimeNgRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PrimeNgRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 66956:
/*!**********************************************************************!*\
  !*** ./src/app/core-component/charts/prime-ng/prime-ng.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrimeNgComponent: () => (/* binding */ PrimeNgComponent)
/* harmony export */ });
/* harmony import */ var node_modules_chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node_modules/chart.js */ 36792);
/* harmony import */ var src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/core.index */ 82351);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);




node_modules_chart_js__WEBPACK_IMPORTED_MODULE_1__.Chart.register(...node_modules_chart_js__WEBPACK_IMPORTED_MODULE_1__.registerables);
class PrimeNgComponent {
  constructor() {
    this.routes = src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  ngOnInit() {
    this.RenderChart();
    this.transchart();
    this.gradchart();
    this.horizonchart();
    this.stackchart();
    this.doughcharts();
    this.verstack();
    this.piecharts();
    this.areacharts();
  }
  RenderChart() {
    new node_modules_chart_js__WEBPACK_IMPORTED_MODULE_1__.Chart("pieschart", {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Sales',
          data: [19, 3, 7, 5, 2, 3],
          backgroundColor: [' #0dcaf0'],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  transchart() {
    new node_modules_chart_js__WEBPACK_IMPORTED_MODULE_1__.Chart("piechart", {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Sales',
          data: [12, 9, 3, 5, 2, 3],
          backgroundColor: ['#6610f2'],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  gradchart() {
    new node_modules_chart_js__WEBPACK_IMPORTED_MODULE_1__.Chart("piecharts", {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Sales',
          data: [12, 9, 3, 5, 2, 3],
          backgroundColor: ['#44c4fa']
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  horizonchart() {
    new node_modules_chart_js__WEBPACK_IMPORTED_MODULE_1__.Chart("horcharts", {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Sales',
          data: [12, 9, 3, 5, 2, 3],
          backgroundColor: ['#664dc9', '#44c4fa', '#38cb89', '#3e80eb', '#ffab00', '#ef4b4b'],
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: 'y'
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
      }
    });
  }
  stackchart() {
    new node_modules_chart_js__WEBPACK_IMPORTED_MODULE_1__.Chart("stackcharts", {
      type: 'bar',
      data: {
        labels: ['2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13', '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17'],
        datasets: [{
          label: "Sales",
          data: ['467', '576', '572', '79', '92', '574', '573', '576'],
          backgroundColor: '#664dc9'
        }, {
          label: "Profit",
          data: ['542', '542', '536', '327', '17', '0.00', '538', '541'],
          backgroundColor: '#3e80eb'
        }]
      },
      options: {
        indexAxis: 'y',
        elements: {
          bar: {
            borderWidth: 2
          }
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'right'
          },
          title: {
            display: true,
            text: 'Chart.js Horizontal Bar Chart'
          }
        }
      }
    });
  }
  verstack() {
    new node_modules_chart_js__WEBPACK_IMPORTED_MODULE_1__.Chart("verstackcharts", {
      type: 'bar',
      //this denotes tha type of chart
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [{
          label: "Sales",
          data: ['467', '576', '572', '79', '92', '574', '573', '576'],
          backgroundColor: '#664dc9'
        }, {
          label: "Profit",
          data: ['542', '542', '536', '327', '17', '0.00', '538', '541'],
          backgroundColor: '#3e80eb'
        }]
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }
  doughcharts() {
    new node_modules_chart_js__WEBPACK_IMPORTED_MODULE_1__.Chart("doughcharts", {
      type: 'doughnut',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          data: [12, 9, 3, 5, 2, 3],
          backgroundColor: ['#664dc9', '#44c4fa', '#38cb89', '#3e80eb', '#ffab00', '#ef4b4b'],
          borderWidth: 1
        }]
      }
    });
  }
  piecharts() {
    new node_modules_chart_js__WEBPACK_IMPORTED_MODULE_1__.Chart("peichrt", {
      type: 'pie',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          data: [12, 9, 3, 5, 2, 3],
          backgroundColor: ['#664dc9', '#44c4fa', '#38cb89', '#3e80eb', '#ffab00', '#ef4b4b'],
          borderWidth: 1
        }]
      }
    });
  }
  areacharts() {
    new node_modules_chart_js__WEBPACK_IMPORTED_MODULE_1__.Chart("MyChart", {
      type: 'line',
      //this denotes tha type of chart
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [{
          label: "Sales",
          data: ['467', '576', '572', '79', '92', '574', '573', '576'],
          backgroundColor: 'blue'
        }, {
          label: "Profit",
          data: ['542', '542', '536', '327', '17', '0.00', '538', '541'],
          backgroundColor: 'limegreen'
        }]
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }
  static {
    this.ɵfac = function PrimeNgComponent_Factory(t) {
      return new (t || PrimeNgComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: PrimeNgComponent,
      selectors: [["app-prime-ng"]],
      decls: 85,
      vars: 1,
      consts: [[1, "cardhead"], [1, "page-header"], [1, "row"], [1, "col-sm-12"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "active"], [1, "col-md-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["id", "piechart", 1, "h-300"], ["id", "pieschart", 1, "h-300"], ["id", "piecharts", 1, "h-300"], [1, "chartjs-wrapper-demo"], ["id", "horcharts", 1, "h-300"], ["id", "stackcharts", 1, "h-300"], ["id", "verstackcharts", 1, "h-300"], ["id", "doughcharts", 1, "h-300"], ["id", "peichrt", 1, "h-300"], ["id", "MyChart", 1, "h-300"]],
      template: function PrimeNgComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Charts");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul", 5)(7, "li", 6)(8, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Charts JS");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 2)(13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Bar Chart");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 13)(19, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "canvas", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 9)(22, "div", 10)(23, "div", 11)(24, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Transparency ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 13)(27, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "canvas", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 9)(30, "div", 10)(31, "div", 11)(32, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Gradient Bar Chart");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 13)(35, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "canvas", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 9)(38, "div", 10)(39, "div", 11)(40, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Horizontal Bar Chart");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 13)(43, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "canvas", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 9)(46, "div", 10)(47, "div", 11)(48, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Horizontal Bar Chart Style2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 13)(51, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "canvas", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 9)(54, "div", 10)(55, "div", 11)(56, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Vertical Stacked Bar Chart");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 13)(59, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "canvas", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 9)(62, "div", 10)(63, "div", 11)(64, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Donut Chart");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 13)(67, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "canvas", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 9)(70, "div", 10)(71, "div", 11)(72, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Pie Chart");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 13)(75, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "canvas", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 9)(78, "div", 10)(79, "div", 11)(80, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "Area Chart");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 13)(83, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "canvas", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx.routes.dashboard);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 82843:
/*!*******************************************************************!*\
  !*** ./src/app/core-component/charts/prime-ng/prime-ng.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrimeNgModule: () => (/* binding */ PrimeNgModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _prime_ng_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prime-ng-routing.module */ 45394);
/* harmony import */ var _prime_ng_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prime-ng.component */ 66956);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);




class PrimeNgModule {
  static {
    this.ɵfac = function PrimeNgModule_Factory(t) {
      return new (t || PrimeNgModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: PrimeNgModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _prime_ng_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrimeNgRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PrimeNgModule, {
    declarations: [_prime_ng_component__WEBPACK_IMPORTED_MODULE_1__.PrimeNgComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _prime_ng_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrimeNgRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_charts_prime-ng_prime-ng_module_ts.js.map