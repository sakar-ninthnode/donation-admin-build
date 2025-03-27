"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_people_people_module_ts"],{

/***/ 82890:
/*!****************************************************************!*\
  !*** ./src/app/core-component/people/people-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PeopleRoutingModule: () => (/* binding */ PeopleRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _people_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./people.component */ 72980);
/* harmony import */ var _warehouse_warehouse_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warehouse/warehouse.component */ 83250);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);





const routes = [{
  path: '',
  component: _people_component__WEBPACK_IMPORTED_MODULE_0__.PeopleComponent,
  children: [{
    path: 'warehouse',
    component: _warehouse_warehouse_component__WEBPACK_IMPORTED_MODULE_1__.WarehouseComponent
  }]
}];
class PeopleRoutingModule {
  static {
    this.ɵfac = function PeopleRoutingModule_Factory(t) {
      return new (t || PeopleRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: PeopleRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PeopleRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 72980:
/*!***********************************************************!*\
  !*** ./src/app/core-component/people/people.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PeopleComponent: () => (/* binding */ PeopleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);


class PeopleComponent {
  static {
    this.ɵfac = function PeopleComponent_Factory(t) {
      return new (t || PeopleComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PeopleComponent,
      selectors: [["app-people"]],
      decls: 1,
      vars: 0,
      template: function PeopleComponent_Template(rf, ctx) {
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

/***/ 467:
/*!********************************************************!*\
  !*** ./src/app/core-component/people/people.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PeopleModule: () => (/* binding */ PeopleModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _people_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./people-routing.module */ 82890);
/* harmony import */ var _people_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./people.component */ 72980);
/* harmony import */ var _warehouse_warehouse_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./warehouse/warehouse.component */ 83250);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);






class PeopleModule {
  static {
    this.ɵfac = function PeopleModule_Factory(t) {
      return new (t || PeopleModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: PeopleModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _people_routing_module__WEBPACK_IMPORTED_MODULE_0__.PeopleRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.sharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PeopleModule, {
    declarations: [_people_component__WEBPACK_IMPORTED_MODULE_1__.PeopleComponent, _warehouse_warehouse_component__WEBPACK_IMPORTED_MODULE_2__.WarehouseComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _people_routing_module__WEBPACK_IMPORTED_MODULE_0__.PeopleRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.sharedModule]
  });
})();

/***/ }),

/***/ 83250:
/*!************************************************************************!*\
  !*** ./src/app/core-component/people/warehouse/warehouse.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WarehouseComponent: () => (/* binding */ WarehouseComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/core.index */ 82351);
/* harmony import */ var src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.index */ 31287);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ 22047);
/* harmony import */ var _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/custom-pagination/custom-pagination.component */ 14860);











const _c0 = (a0, a1, a2) => ({
  "badge-linesuccess": a0,
  "badge-linedanger": a1,
  "badge-linewarning": a2
});
function WarehouseComponent_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function WarehouseComponent_button_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.clearSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Searched Query: ", ctx_r1.savedSearchText, " \u2716 ");
  }
}
function WarehouseComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " No data found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function WarehouseComponent_For_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td")(16, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "td", 103)(19, "div", 104)(20, "a", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function WarehouseComponent_For_45_Template_a_click_20_listener() {
      const data_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.editeWarehouse(data_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r4.warehouse_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r4.warehouse_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r4.address_line_1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r4.address_line_2, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r4.city, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r4.phone_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r4.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](9, _c0, data_r4.status === "OPERATIONAL", data_r4.status === "NON OPERATIONAL", data_r4.status === "NOT ACCEPTING DONATIONS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r4.status === "NON OPERATIONAL" ? "NON OPERATIONAL" : data_r4.status === "NOT ACCEPTING DONATIONS" ? "NOT ACCEPTING DONATIONS" : "OPERATIONAL", " ");
  }
}
function WarehouseComponent_small_166_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " This city is already in use. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function WarehouseComponent_select_355_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stat_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", stat_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", stat_r5.label, " ");
  }
}
function WarehouseComponent_select_355_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "select", 108)(1, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Select a category");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, WarehouseComponent_select_355_option_3_Template, 2, 2, "option", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.statusOptions);
  }
}
function WarehouseComponent_div_356_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 43)(1, "div", 96)(2, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Remark");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
class WarehouseComponent {
  constructor(data, paginationService, router, sidebar, fb) {
    this.data = data;
    this.paginationService = paginationService;
    this.router = router;
    this.sidebar = sidebar;
    this.fb = fb;
    this.initChecked = false;
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    // pagination variables
    this.tableData = [];
    this.pageSize = 10;
    this.serialNumberArray = [];
    this.totalData = 0;
    this.showFilter = false;
    this.searchDataValue = '';
    this.filterSearchText = '';
    this.savedSearchText = '';
    this.page = 0;
    this.selectedwarehouse = {};
    this.statusOptions = [{
      label: 'OPERATIONAL',
      value: 'OPERATIONAL'
    }, {
      label: 'NON OPERATIONAL',
      value: 'NON OPERATIONAL'
    }, {
      label: 'NOT ACCEPTING DONATIONS',
      value: 'NOT ACCEPTING DONATIONS'
    }];
    this.selectedValue1 = '';
    this.selectedValue2 = '';
    this.selectedValue3 = '';
    this.selectedValue4 = '';
    this.selectedValue5 = '';
    this.selectedValue6 = '';
    this.selectedValue7 = '';
    this.selectedValue8 = '';
    this.selectedValue9 = '';
    this.selectedList1 = [{
      value: 'Sort by Date'
    }, {
      value: 'Newest'
    }, {
      value: 'Oldest'
    }];
    this.selectedList2 = [{
      value: 'Choose Warehouse'
    }, {
      value: 'Legendary'
    }, {
      value: 'Determined'
    }, {
      value: 'Sincere'
    }, {
      value: 'Pretty'
    }];
    this.selectedList3 = [{
      value: 'Choose Person'
    }, {
      value: 'Steven'
    }, {
      value: 'Gravely'
    }];
    this.selectedList4 = [{
      value: 'Choose Status'
    }, {
      value: 'Active'
    }, {
      value: 'Inactive'
    }];
    this.selectedList5 = [{
      value: 'Choose Status'
    }, {
      value: 'Active'
    }, {
      value: 'Inactive'
    }];
    this.selectedList6 = [{
      value: 'Choose'
    }, {
      value: 'Steven'
    }, {
      value: 'Gravely'
    }];
    this.selectedList7 = [{
      value: 'Choose'
    }, {
      value: 'United Kingdom'
    }, {
      value: 'United State'
    }];
    this.selectedList8 = [{
      value: 'Choose'
    }, {
      value: 'Steven'
    }, {
      value: 'Gravely'
    }];
    this.selectedList9 = [{
      value: 'United Kingdom'
    }, {
      value: 'United State'
    }];
    this.filter = false;
    this.isCollapsed = false;
    this.showBox = false;
    this.getTableData();
    this.warehouseForm = this.fb.group({
      warehouse_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      address_line_1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      address_line_2: [''],
      landmark: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      warehouse_sq_ft: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      country: ['India'],
      pin_code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      phone_number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      country_code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]]
    });
    this.editWarehouseForm = this.fb.group({
      warehouse_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      address_line_1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      address_line_2: [''],
      landmark: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      warehouse_sq_ft: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      country: ['India'],
      pin_code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      phone_number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      country_code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]],
      status: [''],
      remarks: ['']
    });
  }
  getTableData() {
    this.data.getWareHouse(this.page, this.savedSearchText).subscribe(apiRes => {
      this.tableData = [];
      apiRes.results.forEach((res, index) => {
        // Push data to the table array
        this.tableData.push({
          ...res
        });
      });
      this.paginationService.setPaginationData(apiRes.results.pagination);
      this.pagination = this.paginationService.getPaginationData();
    });
  }
  onPageChange(page) {
    this.page = page;
    this.getTableData();
  }
  clearSearch() {
    this.filterSearchText = '';
    this.savedSearchText = '';
    this.getTableData();
  }
  onSearchClick() {
    this.savedSearchText = this.filterSearchText;
    this.getTableData();
  }
  editeWarehouse(data) {
    this.selectedwarehouse = data;
    this.editWarehouseId = data.warehouse_id;
    this.editWarehouseForm.patchValue({
      warehouse_name: data.warehouse_name,
      address_line_1: data.address_line_1,
      address_line_2: data.address_line_2,
      land_mark: data.land_mark,
      warehouse_sq_ft: data.warehouse_sq_ft,
      city: data.city,
      state: data.state,
      country: data.country,
      pin_code: data.pin_code,
      phone_number: data.phone_number,
      country_code: data.country_code,
      email: data.email,
      status: data.status
    });
  }
  onSubmit() {
    if (this.warehouseForm.valid) {
      this.data.createWareHouse(this.warehouseForm.value).subscribe(response => {
        this.getTableData();
        // Reset form after submission
        this.warehouseForm.reset();
        // Close the modal using Bootstrap's API
        const modalElement = document.getElementById('add-units');
        if (modalElement) {
          const modal = bootstrap.Modal.getInstance(modalElement);
          modal.hide();
        }
      }, error => {
        console.error('Error creating user', error);
        if (error.error.status_message && error.error.status_message.toLowerCase().includes('warehouse with this city already exists')) {
          this.warehouseForm.get('city')?.setErrors({
            cityExists: true
          });
        }
      });
    }
  }
  onUpdate() {
    if (this.editWarehouseForm.valid) {
      const formData = {
        ...this.editWarehouseForm.value
      };
      this.data.updateWareHouse(this.editWarehouseId, formData).subscribe(response => {
        console.log('Announcement updated successfully', response);
        this.getTableData();
        const modalElement = document.getElementById('edit-units');
        if (modalElement) {
          const modal = bootstrap.Modal.getInstance(modalElement);
          modal.hide();
        }
        // this.resetEditForm();
      }, error => {
        console.error('Error updating announcement', error);
      });
    }
  }
  sortData(sort) {
    const data = this.tableData.slice();
    if (!sort.active || sort.direction === '') {
      this.tableData = data;
    } else {
      this.tableData = data.sort((a, b) => {
        const aValue = a[sort.active];
        const bValue = b[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }
  searchData(value) {
    this.dataSource.filter = value.trim().toLowerCase();
    this.tableData = this.dataSource.filteredData;
  }
  confirmColor() {
    const swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().mixin({
      customClass: {
        confirmButton: ' btn btn-success',
        cancelButton: 'me-2 btn btn-danger'
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      confirmButtonText: 'Yes, delete it!',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      reverseButtons: true
    }).then(result => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire('Deleted!', 'Your file has been deleted.', 'success');
      } else if (result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().DismissReason).cancel) {
        swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }
  openFilter() {
    this.filter = !this.filter;
  }
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  toggleBox() {
    this.showBox = !this.showBox;
  }
  selectAll(initChecked) {
    if (!initChecked) {
      this.tableData.forEach(f => {
        f.isSelected = true;
      });
    } else {
      this.tableData.forEach(f => {
        f.isSelected = false;
      });
    }
  }
  static {
    this.ɵfac = function WarehouseComponent_Factory(t) {
      return new (t || WarehouseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_3__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_2__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: WarehouseComponent,
      selectors: [["app-warehouse"]],
      decls: 362,
      vars: 11,
      consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-units", 1, "btn", "btn-added"], [1, "feather", "icon-plus-circle", "me-2"], [1, "card", "table-list-card"], [1, "card-body"], [1, "table-top"], [1, "search-set", "ml-4"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset", 3, "click"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["placeholder", "Search...", 1, "form-control", 3, "ngModelChange", "keydown.enter", "ngModel"], ["class", "btn btn-clear", 3, "click", 4, "ngIf"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew", 3, "matSortChange"], ["mat-sort-header", "warehouse"], ["mat-sort-header", "contact"], ["mat-sort-header", "phone"], ["mat-sort-header", "totalproduct"], ["mat-sort-header", "createdOn"], ["mat-sort-header", "status"], [1, "no-sort"], [3, "pageChange", "pagination"], ["id", "add-units", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "custom-modal-two"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header", "border-0", "custom-modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body"], [3, "ngSubmit", "formGroup"], [1, "row"], [1, "col-lg-12"], [1, "mb-3"], [1, "form-label"], ["id", "warehouse_name", "formControlName", "warehouse_name", "type", "text", "required", "", 1, "form-control"], ["id", "address_line_1", "formControlName", "address_line_1", "type", "text", "required", "", 1, "form-control"], ["id", "address_line_2", "formControlName", "address_line_2", "type", "text", 1, "form-control"], [1, "col-lg-6"], ["id", "country", "formControlName", "country", "type", "text", "readonly", "", 1, "form-control"], ["id", "state", "formControlName", "state", "required", "", 1, "form-control"], ["value", "", "disabled", "", "selected", ""], ["value", "Andhra Pradesh"], ["value", "Arunachal Pradesh"], ["value", "Assam"], ["value", "Bihar"], ["value", "Chhattisgarh"], ["value", "Goa"], ["value", "Gujarat"], ["value", "Haryana"], ["value", "Himachal Pradesh"], ["value", "Jharkhand"], ["value", "Karnataka"], ["value", "Kerala"], ["value", "Madhya Pradesh"], ["value", "Maharashtra"], ["value", "Manipur"], ["value", "Meghalaya"], ["value", "Mizoram"], ["value", "Nagaland"], ["value", "Odisha"], ["value", "Punjab"], ["value", "Rajasthan"], ["value", "Sikkim"], ["value", "Tamil Nadu"], ["value", "Telangana"], ["value", "Tripura"], ["value", "Uttar Pradesh"], ["value", "Uttarakhand"], ["value", "West Bengal"], ["value", "Andaman and Nicobar Islands"], ["value", "Chandigarh"], ["value", "Dadra and Nagar Haveli and Daman and Diu"], ["value", "Lakshadweep"], ["value", "Delhi"], ["value", "Puducherry"], ["value", "Ladakh"], ["value", "Jammu and Kashmir"], [1, "mb-3", "mb-0"], ["id", "city", "formControlName", "city", "type", "text", "required", "", 1, "form-control"], ["class", "text-danger mb-2", 4, "ngIf"], ["id", "pin_code", "formControlName", "pin_code", "type", "text", "required", "", 1, "form-control"], ["id", "country_code", "formControlName", "country_code", "type", "text", "required", "", 1, "form-control"], ["id", "landmark", "formControlName", "landmark", "type", "text", "required", "", 1, "form-control"], ["id", "warehouse_sq_ft", "formControlName", "warehouse_sq_ft", "type", "text", "required", "", 1, "form-control"], ["id", "phone_number", "formControlName", "phone_number", "type", "text", "required", "", 1, "form-control"], ["id", "email", "formControlName", "email", "type", "email", "required", "", 1, "form-control"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit", 3, "disabled"], ["id", "edit-units", 1, "modal", "fade"], [1, "status-toggle", "modal-status", "justify-content-between", "align-items-center"], [1, "status-label"], ["class", "form-select", "formControlName", "status", 4, "ngIf"], ["class", "col-lg-6", 4, "ngIf"], [1, "btn", "btn-clear", 3, "click"], ["colspan", "6", 1, "text-center", "text-muted"], [1, "badge", 3, "ngClass"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-units", 1, "me-2", "p-2", 3, "click"], [1, "feather", "icon-edit", "feather-edit"], [1, "text-danger", "mb-2"], ["formControlName", "status", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["id", "remarks", "formControlName", "remarks", "type", "remarks", 1, "form-control"]],
      template: function WarehouseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Warehouse");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Manage your warehouse");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 3)(8, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Add New Warehouse");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 6)(12, "div", 7)(13, "div", 8)(14, "div", 9)(15, "div", 10)(16, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function WarehouseComponent_Template_a_click_16_listener() {
            return ctx.onSearchClick();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 13)(19, "label")(20, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function WarehouseComponent_Template_input_ngModelChange_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.filterSearchText, $event) || (ctx.filterSearchText = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keydown.enter", function WarehouseComponent_Template_input_keydown_enter_20_listener() {
            return ctx.onSearchClick();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, WarehouseComponent_button_21_Template, 2, 1, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 16)(23, "table", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("matSortChange", function WarehouseComponent_Template_table_matSortChange_23_listener($event) {
            return ctx.sortData($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "thead")(25, "tr")(26, "th", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Id");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "th", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "th", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "th", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "City");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "th", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Phone_number");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "th", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "th", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Donations Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "th", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, WarehouseComponent_Conditional_43_Template, 3, 0, "tr");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](44, WarehouseComponent_For_45_Template, 22, 13, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "app-custom-pagination", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function WarehouseComponent_Template_app_custom_pagination_pageChange_46_listener($event) {
            return ctx.onPageChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 26)(48, "div", 27)(49, "div", 28)(50, "div", 29)(51, "div", 30)(52, "div", 31)(53, "div", 2)(54, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "Add Warehouse");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "button", 32)(57, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 34)(60, "form", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function WarehouseComponent_Template_form_ngSubmit_60_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 36)(62, "div", 37)(63, "div", 38)(64, "label", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "Warehouse Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](66, "input", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 37)(68, "div", 38)(69, "label", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "Address Line 1");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](71, "input", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 37)(73, "div", 38)(74, "label", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "Address Line 2");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](76, "input", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 43)(78, "div", 38)(79, "label", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80, "Country");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](81, "input", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "div", 43)(83, "div", 38)(84, "label", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85, "State");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "select", 45)(87, "option", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88, "Select State");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "option", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, "Andhra Pradesh");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "option", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92, "Arunachal Pradesh");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "option", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](94, "Assam");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "option", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "Bihar");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "option", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](98, "Chhattisgarh");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "option", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100, "Goa");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "option", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](102, "Gujarat");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "option", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](104, "Haryana");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "option", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](106, "Himachal Pradesh");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "option", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108, "Jharkhand");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "option", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](110, "Karnataka");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "option", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](112, "Kerala");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "option", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](114, "Madhya Pradesh");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](115, "option", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](116, "Maharashtra");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "option", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](118, "Manipur");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](119, "option", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](120, "Meghalaya");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](121, "option", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](122, "Mizoram");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](123, "option", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](124, "Nagaland");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "option", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](126, "Odisha");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](127, "option", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](128, "Punjab");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](129, "option", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](130, "Rajasthan");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](131, "option", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](132, "Sikkim");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](133, "option", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](134, "Tamil Nadu");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](135, "option", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](136, "Telangana");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](137, "option", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](138, "Tripura");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](139, "option", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](140, "Uttar Pradesh");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](141, "option", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](142, "Uttarakhand");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](143, "option", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](144, "West Bengal");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](145, "option", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](146, "Andaman and Nicobar Islands");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](147, "option", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](148, "Chandigarh");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](149, "option", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](150, "Dadra and Nagar Haveli and Daman and Diu");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](151, "option", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](152, "Lakshadweep");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](153, "option", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](154, "Delhi");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](155, "option", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](156, "Puducherry");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](157, "option", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](158, "Ladakh");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](159, "option", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](160, "Jammu and Kashmir");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](161, "div", 43)(162, "div", 83)(163, "label", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](164, "City");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](165, "input", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](166, WarehouseComponent_small_166_Template, 2, 0, "small", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](167, "div", 43)(168, "div", 83)(169, "label", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](170, "Pin Code");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](171, "input", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](172, "div", 43)(173, "div", 83)(174, "label", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](175, "Country Code");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](176, "input", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](177, "div", 43)(178, "div", 83)(179, "label", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](180, "Landmark");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](181, "input", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](182, "div", 43)(183, "div", 83)(184, "label", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](185, "Warehouse Size (Sq.ft)");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](186, "input", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](187, "div", 43)(188, "div", 83)(189, "label", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](190, "Phone Number");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](191, "input", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](192, "div", 43)(193, "div", 83)(194, "label", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](195, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](196, "input", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](197, "div", 92)(198, "button", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](199, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](200, "button", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](201, "Create Warehouse");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](202, "div", 95)(203, "div", 27)(204, "div", 28)(205, "div", 29)(206, "div", 30)(207, "div", 31)(208, "div", 2)(209, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](210, "Edit Warehouse");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](211, "button", 32)(212, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](213, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](214, "div", 34)(215, "form", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function WarehouseComponent_Template_form_ngSubmit_215_listener() {
            return ctx.onUpdate();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](216, "div", 36)(217, "div", 37)(218, "div", 38)(219, "label", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](220, "Warehouse Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](221, "input", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](222, "div", 37)(223, "div", 38)(224, "label", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](225, "Address Line 1");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](226, "input", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](227, "div", 37)(228, "div", 38)(229, "label", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](230, "Address Line 2");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](231, "input", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](232, "div", 43)(233, "div", 83)(234, "label", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](235, "Landmark");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](236, "input", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](237, "div", 43)(238, "div", 83)(239, "label", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](240, "Warehouse Size (Sq.ft)");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](241, "input", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](242, "div", 43)(243, "div", 38)(244, "label", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](245, "Country");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](246, "input", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](247, "div", 43)(248, "div", 38)(249, "label", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](250, "State");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](251, "select", 45)(252, "option", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](253, "Select State");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](254, "option", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](255, "Andhra Pradesh");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](256, "option", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](257, "Arunachal Pradesh");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](258, "option", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](259, "Assam");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](260, "option", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](261, "Bihar");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](262, "option", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](263, "Chhattisgarh");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](264, "option", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](265, "Goa");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](266, "option", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](267, "Gujarat");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](268, "option", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](269, "Haryana");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](270, "option", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](271, "Himachal Pradesh");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](272, "option", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](273, "Jharkhand");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](274, "option", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](275, "Karnataka");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](276, "option", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](277, "Kerala");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](278, "option", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](279, "Madhya Pradesh");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](280, "option", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](281, "Maharashtra");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](282, "option", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](283, "Manipur");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](284, "option", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](285, "Meghalaya");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](286, "option", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](287, "Mizoram");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](288, "option", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](289, "Nagaland");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](290, "option", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](291, "Odisha");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](292, "option", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](293, "Punjab");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](294, "option", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](295, "Rajasthan");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](296, "option", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](297, "Sikkim");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](298, "option", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](299, "Tamil Nadu");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](300, "option", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](301, "Telangana");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](302, "option", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](303, "Tripura");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](304, "option", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](305, "Uttar Pradesh");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](306, "option", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](307, "Uttarakhand");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](308, "option", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](309, "West Bengal");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](310, "option", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](311, "Andaman and Nicobar Islands");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](312, "option", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](313, "Chandigarh");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](314, "option", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](315, "Dadra and Nagar Haveli and Daman and Diu");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](316, "option", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](317, "Lakshadweep");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](318, "option", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](319, "Delhi");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](320, "option", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](321, "Puducherry");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](322, "option", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](323, "Ladakh");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](324, "option", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](325, "Jammu and Kashmir");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](326, "div", 43)(327, "div", 83)(328, "label", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](329, "City");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](330, "input", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](331, "div", 43)(332, "div", 83)(333, "label", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](334, "Pin Code");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](335, "input", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](336, "div", 43)(337, "div", 83)(338, "label", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](339, "Country Code");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](340, "input", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](341, "div", 43)(342, "div", 83)(343, "label", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](344, "Phone Number");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](345, "input", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](346, "div", 43)(347, "div", 83)(348, "label", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](349, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](350, "input", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](351, "div", 43)(352, "div", 96)(353, "span", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](354, "Donation Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](355, WarehouseComponent_select_355_Template, 4, 1, "select", 98);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](356, WarehouseComponent_div_356_Template, 5, 0, "div", 99);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](357, "div", 92)(358, "button", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](359, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](360, "button", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](361, "Create Warehouse");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()();
        }
        if (rf & 2) {
          let tmp_6_0;
          let tmp_10_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.filterSearchText);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.savedSearchText);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](43, (ctx.tableData == null ? null : ctx.tableData.length) === 0 ? 43 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.tableData);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pagination", ctx.pagination);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.warehouseForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](106);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx.warehouseForm.get("city")) == null ? null : tmp_6_0.hasError("cityExists"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.warehouseForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.editWarehouseForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](140);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.statusOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_10_0 = ctx.editWarehouseForm.get("status")) == null ? null : tmp_10_0.value) !== ctx.selectedwarehouse.status);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.editWarehouseForm.invalid);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSortHeader, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_4__.CustomPaginationComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_people_people_module_ts.js.map