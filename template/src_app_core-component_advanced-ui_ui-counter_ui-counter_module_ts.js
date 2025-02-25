"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_advanced-ui_ui-counter_ui-counter_module_ts"],{

/***/ 33826:
/*!************************************************************************************!*\
  !*** ./src/app/core-component/advanced-ui/ui-counter/ui-counter-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiCounterRoutingModule: () => (/* binding */ UiCounterRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ui_counter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-counter.component */ 9500);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _ui_counter_component__WEBPACK_IMPORTED_MODULE_0__.UiCounterComponent
}];
class UiCounterRoutingModule {
  static {
    this.ɵfac = function UiCounterRoutingModule_Factory(t) {
      return new (t || UiCounterRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: UiCounterRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UiCounterRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 9500:
/*!*******************************************************************************!*\
  !*** ./src/app/core-component/advanced-ui/ui-counter/ui-counter.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormatTimePipe: () => (/* binding */ FormatTimePipe),
/* harmony export */   UiCounterComponent: () => (/* binding */ UiCounterComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 19240);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 14876);
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);




class UiCounterComponent {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    // counter
    this.counter = 1;
    this.maxValue = 300;
    this.counter1 = 1;
    this.maxValue1 = 1000;
    this.counter2 = 1;
    this.maxValue2 = 1500;
    this.counter4 = 180;
    this.tick4 = 1000;
    this.counter5 = 0;
    this.tick5 = 1000;
    this.counter6 = 30;
    this.tick6 = 1000;
    this.counter7 = 10;
    this.tick7 = 1000;
    this.countDownDate = new Date("Nov 27, 2022 10:25:20").getTime();
    this.x = setInterval(() => {
      const now = new Date().getTime();
      const distance = this.countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      const minutes = Math.floor(distance % (1000 * 60 * 60 * 60) / (1000 * 60));
      const seconds = Math.floor(distance % (1000 * 60) / 1000);
      this.demo = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    });
    this.timerSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.interval)(2).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(() => this.increment())).subscribe();
    this.timerSubscription1 = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.interval)(2).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(() => this.increment1())).subscribe();
    this.timerSubscription2 = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.interval)(2).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(() => this.increment2())).subscribe();
  }
  increment() {
    this.counter++;
    if (this.counter >= this.maxValue) {
      this.timerSubscription.unsubscribe();
    }
  }
  increment1() {
    this.counter1++;
    if (this.counter1 >= this.maxValue1) {
      this.timerSubscription1.unsubscribe();
    }
  }
  increment2() {
    this.counter2++;
    if (this.counter2 >= this.maxValue2) {
      this.timerSubscription2.unsubscribe();
    }
  }
  ngOnInit() {
    this.countDown4 = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.timer)(0, this.tick4).subscribe(count => {
      if (this.counter4 == 0 && count) {
        if (this.countDown4) {
          this.countDown4.unsubscribe();
        }
      }
      --this.counter4;
    });
    this.countDown5 = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.timer)(0, this.tick5).subscribe(count => {
      if (this.counter5 == 0 && count) {
        if (this.countDown5) {
          this.countDown5.unsubscribe();
        }
      }
      ++this.counter5;
    });
    this.countDown6 = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.timer)(0, this.tick6).subscribe(count => {
      if (this.counter6 == 0 && count) {
        if (this.countDown6) {
          this.countDown6.unsubscribe();
        }
      }
      --this.counter6;
    });
    this.countDown7 = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.timer)(0, this.tick7).subscribe(count => {
      if (this.counter7 == 0 && count) {
        if (this.countDown7) {
          this.countDown7.unsubscribe();
        }
      }
      --this.counter7;
    });
  }
  ngOnDestroy() {
    this.countDown4 = undefined;
    this.countDown5 = undefined;
    this.countDown6 = undefined;
    this.countDown7 = undefined;
  }
  static {
    this.ɵfac = function UiCounterComponent_Factory(t) {
      return new (t || UiCounterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: UiCounterComponent,
      selectors: [["app-ui-counter"]],
      decls: 82,
      vars: 17,
      consts: [[1, "cardhead"], [1, "container-fluid"], [1, "page-header"], [1, "row"], [1, "col-sm-12"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "active"], [1, "col-md-4"], [1, "card"], [1, "card-body", "number-display"], [1, "card-body"], [1, "card-header"], [1, "card-title"]],
      template: function UiCounterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h3", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Counter");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ul", 6)(8, "li", 7)(9, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "li", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Counter");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 3)(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Clients");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 10)(21, "div", 11)(22, "div", 12)(23, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Total Sales");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 10)(27, "div", 11)(28, "div", 13)(29, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Total Projects");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 10)(33, "div", 11)(34, "div", 14)(35, "h5", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Count Down");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 13)(38, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Time Count from 3");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](41, "formatTime");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 10)(43, "div", 11)(44, "div", 14)(45, "h5", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Count Up");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 13)(48, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "Time Counting From 0");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](51, "formatTime");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 10)(53, "div", 11)(54, "div", 14)(55, "h5", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "Count Inbetween");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 13)(58, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Time counting from 30 to 20");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](61, "formatTime");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "div", 10)(63, "div", 11)(64, "div", 14)(65, "h5", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "Count Callback");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "div", 13)(68, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, "Count from 10 to 0 and calls timer end callback");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](71, "formatTime");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 10)(73, "div", 11)(74, "div", 14)(75, "h5", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "Custom Output");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "div", 13)(78, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79, "Changed output pattern");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx.routes.dashboard);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.counter, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.counter1, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.counter2, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](41, 9, ctx.counter4), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](51, 11, ctx.counter5), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](61, 13, ctx.counter6), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](71, 15, ctx.counter7), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.demo);
        }
      },
      dependencies: () => [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, FormatTimePipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}
class FormatTimePipe {
  transform(value) {
    const minutes = Math.floor(value / 60);
    return '00' + ' ' + 'Day' + ' ' + '00' + ':' + ('00' + '' + minutes).slice(-2) + ':' + ('00' + Math.floor(value - minutes * 60)).slice(-2);
  }
  transform1(value) {
    const minutes = Math.floor(value / 60);
    return '00' + ' ' + 'Day' + ' ' + ('00' + '' + minutes).slice(-2) + ':' + ('00' + Math.floor(value - minutes * 60)).slice(-2);
  }
  transform2(value) {
    const minutes = Math.floor(value / 60);
    return '00' + ' ' + 'Day' + ' ' + ('00' + '' + minutes).slice(-2) + ':' + ('00' + Math.floor(value - minutes * 60)).slice(-2);
  }
  transform3(value) {
    const minutes = Math.floor(value / 60);
    return '00' + ' ' + 'Day' + ' ' + '00' + ':' + ('00' + '' + minutes).slice(-2) + ':' + ('00' + Math.floor(value - minutes * 60)).slice(-2);
  }
  static {
    this.ɵfac = function FormatTimePipe_Factory(t) {
      return new (t || FormatTimePipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefinePipe"]({
      name: "formatTime",
      type: FormatTimePipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 76939:
/*!****************************************************************************!*\
  !*** ./src/app/core-component/advanced-ui/ui-counter/ui-counter.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiCounterModule: () => (/* binding */ UiCounterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ui_counter_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-counter-routing.module */ 33826);
/* harmony import */ var _ui_counter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-counter.component */ 9500);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);





class UiCounterModule {
  static {
    this.ɵfac = function UiCounterModule_Factory(t) {
      return new (t || UiCounterModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: UiCounterModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_counter_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiCounterRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UiCounterModule, {
    declarations: [_ui_counter_component__WEBPACK_IMPORTED_MODULE_1__.UiCounterComponent, _ui_counter_component__WEBPACK_IMPORTED_MODULE_1__.FormatTimePipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_counter_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiCounterRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_advanced-ui_ui-counter_ui-counter_module_ts.js.map