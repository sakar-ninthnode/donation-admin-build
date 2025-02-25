"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_main_dashboard_dashboard_module_ts"],{

/***/ 37635:
/*!********************************************************************************************!*\
  !*** ./src/app/core-component/main/dashboard/admin-dashboard/admin-dashboard.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminDashboardComponent: () => (/* binding */ AdminDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 77697);
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_service_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/common/common.service */ 53410);
/* harmony import */ var src_app_core_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/service/settings/settings.service */ 35026);
/* harmony import */ var src_app_core_service_data_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/service/data/data.service */ 67812);
/* harmony import */ var src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.index */ 31287);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ 22047);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-apexcharts */ 33117);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var ngx_countup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-countup */ 67305);













const _c0 = ["chart"];
const _c1 = () => ({
  duration: 10
});
function AdminDashboardComponent_For_202_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td")(2, "label", 66)(3, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_For_202_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td")(6, "div", 47)(7, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td")(12, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "td", 71)(19, "div", 72)(20, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminDashboardComponent_For_202_Template_a_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.confirmColor());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", data_r2.isSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", data_r2.img, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", data_r2.product, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r2.sku);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r2.manufacturedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r2.expiredDate);
  }
}
class AdminDashboardComponent {
  constructor(common, setting, data, pagination, router) {
    this.common = common;
    this.setting = setting;
    this.data = data;
    this.pagination = pagination;
    this.router = router;
    this.initChecked = false;
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    // pagination variables
    this.tableData = [];
    this.pageSize = 10;
    this.serialNumberArray = [];
    this.totalData = 0;
    this.showFilter = false;
    this.searchDataValue = '';
    this.chartOptions = {
      series: [{
        name: 'Sales',
        data: [130, 210, 300, 290, 150, 50, 210, 280, 105]
      }, {
        name: 'Purchase',
        data: [-150, -90, -50, -180, -50, -70, -100, -90, -105]
      }],
      colors: ['#28C76F', '#EA5455'],
      chart: {
        type: 'bar',
        height: 320,
        stacked: true,
        zoom: {
          enabled: true
        }
      },
      responsive: [{
        breakpoint: 280,
        options: {
          legend: {
            position: 'bottom',
            offsetY: 0
          }
        }
      }],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 4,
          borderRadiusApplication: 'end',
          borderRadiusWhenStacked: 'all',
          columnWidth: '20%'
        }
      },
      dataLabels: {
        enabled: false
      },
      yaxis: {
        min: -200,
        max: 300,
        tickAmount: 5
      },
      xaxis: {
        categories: [' Jan ', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
      },
      legend: {
        show: false
      },
      fill: {
        opacity: 1
      }
    };
    this.common.currency$.subscribe(res => {
      this.currency = res;
    });
    this.data.getDataTable().subscribe(apiRes => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe(res => {
        if (this.router.url == this.routes.adminDashboard) {
          this.getTableData({
            skip: res.skip,
            limit: this.totalData
          });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  //** / pagination variables
  getTableData(pageOption) {
    this.data.getExpiredProduct().subscribe(apiRes => {
      this.tableData = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res, index) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(this.tableData);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        serialNumberArray: this.serialNumberArray
      });
    });
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
    this.ɵfac = function AdminDashboardComponent_Factory(t) {
      return new (t || AdminDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_service_common_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_service_data_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_5__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: AdminDashboardComponent,
      selectors: [["app-admin-dashboard"]],
      viewQuery: function AdminDashboardComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
        }
      },
      decls: 203,
      vars: 28,
      consts: [[1, "row"], [1, "col-xl-3", "col-sm-6", "col-12", "d-flex"], [1, "dash-widget", "w-100"], [1, "dash-widgetimg"], ["src", "assets/img/icons/dash1.svg", "alt", "img"], [1, "dash-widgetcontent"], ["data-count", "307144", 1, "counters", 3, "countUp", "options"], [1, "dash-widget", "dash1", "w-100"], ["src", "assets/img/icons/dash2.svg", "alt", "img"], ["data-count", "4385.00", 1, "counters", 3, "countUp", "options"], [1, "dash-widget", "dash2", "w-100"], ["src", "assets/img/icons/dash3.svg", "alt", "img"], ["data-count", "385656.50", 1, "counters", 3, "countUp", "options"], [1, "dash-widget", "dash3", "w-100"], ["src", "assets/img/icons/dash4.svg", "alt", "img"], ["data-count", "40000.00", 1, "counters", 3, "countUp", "options"], [1, "dash-count"], [1, "dash-counts"], [1, "dash-imgs"], [1, "feather", "icon-user"], [1, "dash-count", "das1"], [1, "feather", "icon-user-check"], [1, "dash-count", "das2"], ["src", "assets/img/icons/file-text-icon-01.svg", "alt", "icon", 1, "img-fluid"], [1, "dash-count", "das3"], [1, "feather", "icon-file"], [1, "col-xl-7", "col-sm-12", "col-12", "d-flex"], [1, "card", "flex-fill"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "card-title", "mb-0"], [1, "graph-sets"], [1, "mb-0"], [1, "dropdown", "dropdown-wraper"], ["type", "button", "id", "dropdownMenuButton", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-light", "btn-sm", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "card-body"], ["id", "sales_charts"], [3, "series", "chart", "dataLabels", "plotOptions", "yaxis", "xaxis", "colors"], [1, "col-xl-5", "col-sm-12", "col-12", "d-flex"], [1, "card", "flex-fill", "default-cover", "mb-4"], [1, "view-all-link"], ["href", "javascript:void(0);", 1, "view-all", "d-flex", "align-items-center"], [1, "ps-2", "d-flex", "align-items-center"], [1, "feather", "icon-arrow-right", "feather-16"], [1, "table-responsive", "dataview"], [1, "table", "dashboard-recent-products"], [1, "productimgname"], [1, "product-img", 3, "routerLink"], ["src", "assets/img/products/stock-img-01.png", "alt", "product"], [3, "routerLink"], ["src", "assets/img/products/stock-img-06.png", "alt", "product"], ["src", "assets/img/products/stock-img-02.png", "alt", "product"], ["src", "assets/img/products/stock-img-03.png", "alt", "product"], [1, "card"], [1, "card-header"], [1, "card-title"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "dashboard-expired-products"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "product"], ["mat-sort-header", "sku"], ["mat-sort-header", "date"], ["mat-sort-header", "expireddate"], [1, "checkboxs"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", 1, "product-img", "stock-img"], ["alt", "product", 3, "src"], ["href", "javascript:void(0);"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", 1, "me-2", "p-2"], [1, "feather", "icon-edit", "feather-edit"], ["href", "javascript:void(0);", 1, "confirm-text", "p-2", 3, "click"], [1, "feather", "icon-trash-2", "feather-trash-2"]],
      template: function AdminDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "img", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5)(7, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " $");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "$307144");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Total Purchase Due");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 1)(14, "div", 7)(15, "div", 3)(16, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "img", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 5)(19, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, " $");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "$4385");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Total Sales Due");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 1)(26, "div", 10)(27, "div", 3)(28, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "img", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 5)(31, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, " $");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "$385656");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Total Sale Amount");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 1)(38, "div", 13)(39, "div", 3)(40, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "img", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 5)(43, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, " $");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "$400");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "Total Expense Amount");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 1)(50, "div", 16)(51, "div", 17)(52, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "100");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "Customers");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](57, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "div", 1)(59, "div", 20)(60, "div", 17)(61, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "110");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64, "Suppliers");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](66, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "div", 1)(68, "div", 22)(69, "div", 17)(70, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71, "150");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, "Purchase Invoice");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](75, "img", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "div", 1)(77, "div", 24)(78, "div", 17)(79, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](80, "170");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](82, "Sales Invoice");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](84, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "div", 0)(86, "div", 26)(87, "div", 27)(88, "div", 28)(89, "h5", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](90, "Purchase & Sales");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "div", 30)(92, "ul", 31)(93, "li")(94, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](95, "Sales");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "li")(97, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](98, "Purchase");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](99, "div", 32)(100, "button", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](101, " 2023 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "ul", 34)(103, "li")(104, "a", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](105, "2023");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "li")(107, "a", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](108, "2022");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](109, "li")(110, "a", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](111, "2021");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](112, "div", 36)(113, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](114, "apx-chart", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](115, "div", 39)(116, "div", 40)(117, "div", 28)(118, "h4", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](119, "Recent Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](120, "div", 41)(121, "a", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](122, " View All");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](123, "span", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](124, "i", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](125, "div", 36)(126, "div", 45)(127, "table", 46)(128, "thead")(129, "tr")(130, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](131, "#");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](132, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](133, "Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](134, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](135, "Price");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](136, "tbody")(137, "tr")(138, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](139, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](140, "td", 47)(141, "a", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](142, "img", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](143, "a", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](144, "Lenevo 3rd Generation");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](145, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](146, "$12500");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](147, "tr")(148, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](149, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](150, "td", 47)(151, "a", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](152, "img", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](153, "a", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](154, "Bold V3.2");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](155, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](156, "$1600");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](157, "tr")(158, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](159, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](160, "td", 47)(161, "a", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](162, "img", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](163, "a", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](164, "Nike Jordan");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](165, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](166, "$2000");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](167, "tr")(168, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](169, "4");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](170, "td", 47)(171, "a", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](172, "img", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](173, "a", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](174, "Apple Series 5 Watch");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](175, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](176, "$800");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](177, "div", 54)(178, "div", 55)(179, "h4", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](180, "Expired Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](181, "div", 36)(182, "div", 45)(183, "table", 57)(184, "thead")(185, "tr")(186, "th", 58)(187, "label", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminDashboardComponent_Template_label_click_187_listener() {
            return ctx.selectAll(ctx.initChecked);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](188, "input", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_188_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.initChecked, $event) || (ctx.initChecked = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](189, "span", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](190, "th", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](191, "Product");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](192, "th", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](193, "SKU");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](194, "th", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](195, "Manufactured Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](196, "th", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](197, "Expired Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](198, "th", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](199, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](200, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](201, AdminDashboardComponent_For_202_Template, 24, 6, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("countUp", 307144)("options", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](24, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("countUp", 4385)("options", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](25, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("countUp", 385656.5)("options", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](26, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("countUp", 40000)("options", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](27, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](69);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("dataLabels", ctx.chartOptions.dataLabels)("plotOptions", ctx.chartOptions.plotOptions)("yaxis", ctx.chartOptions.yaxis)("xaxis", ctx.chartOptions.xaxis)("colors", ctx.chartOptions.colors);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx.routes.productList);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx.routes.productList);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx.routes.productList);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx.routes.productList);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx.routes.productList);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx.routes.productList);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx.routes.productList);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx.routes.productList);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.initChecked);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](ctx.tableData);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSortHeader, ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__.ChartComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, ngx_countup__WEBPACK_IMPORTED_MODULE_12__.CountUpDirective],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 74578:
/*!***************************************************************************!*\
  !*** ./src/app/core-component/main/dashboard/dashboard-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardRoutingModule: () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 14988);
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ 37635);
/* harmony import */ var _sales_dashboard_sales_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sales-dashboard/sales-dashboard.component */ 29367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);






const routes = [{
  path: '',
  component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent,
  children: [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'admin-dashboard'
  }, {
    path: 'admin-dashboard',
    component: _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.AdminDashboardComponent
  }, {
    path: 'sales-dashboard',
    component: _sales_dashboard_sales_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.SalesDashboardComponent
  }]
}];
class DashboardRoutingModule {
  static {
    this.ɵfac = function DashboardRoutingModule_Factory(t) {
      return new (t || DashboardRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: DashboardRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DashboardRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 14988:
/*!**********************************************************************!*\
  !*** ./src/app/core-component/main/dashboard/dashboard.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);


class DashboardComponent {
  static {
    this.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 1,
      vars: 0,
      template: function DashboardComponent_Template(rf, ctx) {
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

/***/ 17147:
/*!*******************************************************************!*\
  !*** ./src/app/core-component/main/dashboard/dashboard.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardModule: () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 74578);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component */ 14988);
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ 37635);
/* harmony import */ var _sales_dashboard_sales_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sales-dashboard/sales-dashboard.component */ 29367);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);







class DashboardModule {
  static {
    this.ɵfac = function DashboardModule_Factory(t) {
      return new (t || DashboardModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: DashboardModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.sharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](DashboardModule, {
    declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent, _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.AdminDashboardComponent, _sales_dashboard_sales_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.SalesDashboardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.sharedModule]
  });
})();

/***/ }),

/***/ 29367:
/*!********************************************************************************************!*\
  !*** ./src/app/core-component/main/dashboard/sales-dashboard/sales-dashboard.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesDashboardComponent: () => (/* binding */ SalesDashboardComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/core.index */ 82351);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-apexcharts */ 33117);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ 36465);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 98379);
/* harmony import */ var ngx_countup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-countup */ 67305);










const _c0 = ["chart"];
const _c1 = () => ({
  duration: 10
});
function SalesDashboardComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 11);
  }
}
function SalesDashboardComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 12);
  }
}
class SalesDashboardComponent {
  constructor(sidebar, common, renderer) {
    this.sidebar = sidebar;
    this.common = common;
    this.renderer = renderer;
    this.base = '';
    this.page = '';
    this.last = '';
    this.routes = src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.routes;
    this.bsValue = new Date();
    this.maxDate = new Date();
    this.isCollapsed = false;
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
    this.chartOptionsOne = {
      series: [{
        name: 'Sales Analysis',
        data: [25, 30, 18, 15, 22, 20, 30, 20, 22, 18, 15, 20]
      }],
      chart: {
        height: 273,
        type: 'area',
        zoom: {
          enabled: false
        }
      },
      colors: ['#FF9F43'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yaxis: {
        min: 10,
        max: 60,
        tickAmount: 5,
        labels: {
          formatter: val => {
            return val / 1 + 'K';
          }
        }
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left'
      }
    };
    this.common.base.subscribe(base => {
      this.base = base;
    });
    this.common.page.subscribe(page => {
      this.page = page;
    });
    this.common.last.subscribe(last => {
      this.last = last;
    });
    if (this.page == 'sales-dashboard') {
      this.renderer.addClass(document.body, 'date-picker-dashboard');
    }
  }
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  static {
    this.ɵfac = function SalesDashboardComponent_Factory(t) {
      return new (t || SalesDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SalesDashboardComponent,
      selectors: [["app-sales-dashboard"]],
      viewQuery: function SalesDashboardComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
        }
      },
      decls: 324,
      vars: 40,
      consts: [[1, "welcome", "d-lg-flex", "align-items-center", "justify-content-between"], [1, "d-flex", "align-items-center", "welcome-text"], [1, "d-flex", "align-items-center"], ["src", "assets/img/icons/hi.svg", "alt", "img"], [1, "position-relative", "daterange-wraper", "me-2"], [1, "input-groupicon", "calender-input", "date-input1"], ["type", "text", "placeholder", "Select", "value", "13 Aug 1992", "bsDaterangepicker", "", "container", ".date-input1", 1, "form-control", "date-range", "bookingrange", 3, "ngModelChange", "ngModel"], [1, "feather", "icon-calendar", "feather-14"], ["type", "button", "data-toggle", "tooltip", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above", 1, "btn", "btn-white-outline", "d-none", "d-md-inline-block"], [1, "feather", "icon-rotate-ccw", "feather-16"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 1, "d-none", "d-lg-inline-block", 3, "click"], [1, "feather", "icon-chevron-up", "feather-chevron-up"], [1, "feather", "icon-chevron-down", "feather-chevron-down"], [1, "row", "sales-cards"], [1, "col-xl-6", "col-sm-12", "col-12"], [1, "card", "d-flex", "align-items-center", "justify-content-between", "default-cover", "mb-4"], ["data-count", "95000.45", 1, "counters", 3, "countUp", "options"], [1, "sales-range"], [1, "text-success"], [1, "feather", "icon-chevron-up", "feather-16"], ["src", "assets/img/icons/weekly-earning.svg", "alt", "img"], [1, "col-xl-3", "col-sm-6", "col-12"], [1, "card", "color-info", "bg-primary", "mb-4"], ["src", "assets/img/icons/total-sales.svg", "alt", "img"], ["data-count", "10000.00", 1, "counters", 3, "countUp", "options"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above", 1, "feather", "icon-rotate-ccw", "feather-16"], [1, "card", "color-info", "bg-secondary", "mb-4"], ["src", "assets/img/icons/purchased-earnings.svg", "alt", "img"], ["data-count", "800.00", 1, "counters", 3, "countUp", "options"], [1, "row"], [1, "col-sm-12", "col-md-12", "col-xl-4", "d-flex"], [1, "card", "flex-fill", "default-cover", "w-100", "mb-4"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "card-title", "mb-0"], [1, "dropdown"], ["href", "javascript:void(0);", 1, "view-all", "d-flex", "align-items-center"], [1, "ps-2", "d-flex", "align-items-center"], [1, "feather", "icon-arrow-right", "feather-16"], [1, "card-body"], [1, "table-responsive"], [1, "table", "table-borderless", "best-seller"], [1, "product-info"], [1, "product-img", 3, "routerLink"], ["src", "assets/img/products/stock-img-01.png", "alt", "product"], [1, "info"], [3, "routerLink"], [1, "dull-text"], [1, "head-text"], ["src", "assets/img/products/stock-img-06.png", "alt", "product"], ["src", "assets/img/products/stock-img-02.png", "alt", "product"], ["src", "assets/img/products/stock-img-03.png", "alt", "product"], ["src", "assets/img/products/stock-img-04.png", "alt", "product"], [1, "col-sm-12", "col-md-12", "col-xl-8", "d-flex"], [1, "table", "table-borderless", "recent-transactions"], ["src", "assets/img/products/stock-img-05.png", "alt", "product"], [1, "dull-text", "d-flex", "align-items-center"], [1, "feather", "icon-clock", "feather-14"], [1, "d-block", "head-text"], [1, "text-blue"], [1, "badge", "background-less", "border-success"], ["src", "assets/img/products/expire-product-01.png", "alt", "product"], [1, "badge", "background-less", "border-danger"], ["src", "assets/img/products/expire-product-02.png", "alt", "product"], [1, "badge", "background-less", "border-primary"], ["src", "assets/img/products/expire-product-03.png", "alt", "product"], ["src", "assets/img/products/expire-product-04.png", "alt", "product"], [1, "row", "sales-board"], [1, "col-md-12", "col-lg-7", "col-sm-12", "col-12"], [1, "card", "flex-fill", "default-cover"], [1, "graph-sets"], [1, "dropdown", "dropdown-wraper"], ["type", "button", "id", "dropdown-sales", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-white", "btn-sm", "dropdown-toggle", "d-flex", "align-items-center"], ["aria-labelledby", "dropdown-sales", 1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], ["id", "sales-analysis", 1, "chart-set"], [3, "series", "chart", "xaxis", "stroke", "tooltip", "dataLabels", "fill", "colors"], [1, "col-md-12", "col-lg-5", "col-sm-12", "col-12"], [1, "card", "default-cover"], ["type", "button", "id", "dropdown-country-sales", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-white", "btn-sm", "dropdown-toggle", "d-flex", "align-items-center"], ["aria-labelledby", "dropdown-country-sales", 1, "dropdown-menu"], ["id", "sales_db_world_map", 2, "height", "265px"], ["src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtrustConstantResourceUrl"]`https://www.google.com/maps/embed`, "allowfullscreen", "", "loading", "lazy", "referrerpolicy", "no-referrer-when-downgrade", 1, "contact-map", 2, "height", "265px"]],
      template: function SalesDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u00A0Hi John Smilga,");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " \u00A0");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "here's what's happening with your store today.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2)(9, "div", 4)(10, "div", 5)(11, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function SalesDashboardComponent_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.bsRangeValue, $event) || (ctx.bsRangeValue = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SalesDashboardComponent_Template_a_click_15_listener() {
            return ctx.toggleCollapse();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, SalesDashboardComponent_Conditional_16_Template, 1, 0, "i", 11)(17, SalesDashboardComponent_Conditional_17_Template, 1, 0, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13)(19, "div", 14)(20, "div", 15)(21, "div")(22, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Weekly Earning");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "$");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "95000.45");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p", 17)(29, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "48%\u00A0");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "increase compare to last week ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 21)(35, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "img", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "h3", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "10,000+");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "No of Total Sales");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 21)(43, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "img", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "h3", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "800+");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "No of Total Sales");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 29)(51, "div", 30)(52, "div", 31)(53, "div", 32)(54, "h4", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Best Seller");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 34)(57, "a", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " View All");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "span", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "i", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 38)(62, "div", 39)(63, "table", 40)(64, "tbody")(65, "tr")(66, "td")(67, "div", 41)(68, "a", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "img", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 44)(71, "a", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Lenovo 3rd Generation");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "p", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "$4420");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "td")(76, "p", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Sales");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, " 6547 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "tr")(80, "td")(81, "div", 41)(82, "a", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "img", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 44)(85, "a", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Bold V3.2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "p", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "$1474");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "td")(90, "p", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Sales");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, " 3474 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "tr")(94, "td")(95, "div", 41)(96, "a", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "img", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 44)(99, "a", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Nike Jordan");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "p", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "$8784");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "td")(104, "p", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Sales");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, " 1478 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "tr")(108, "td")(109, "div", 41)(110, "a", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "img", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 44)(113, "a", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Apple Series 5 Watch");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "p", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "$3240");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "td")(118, "p", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Sales");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, " 987 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "tr")(122, "td")(123, "div", 41)(124, "a", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "img", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 44)(127, "a", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Amazon Echo Dot");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "p", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "$597");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "td")(132, "p", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "Sales");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, " 784 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 52)(136, "div", 31)(137, "div", 32)(138, "h4", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "Recent Transactions");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 34)(141, "a", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, " View All");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "span", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](144, "i", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 38)(146, "div", 39)(147, "table", 53)(148, "thead")(149, "tr")(150, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "#");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "Order Details");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "Payment");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "Amount");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "tbody")(161, "tr")(162, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "td")(165, "div", 41)(166, "a", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](167, "img", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 44)(169, "a", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "Lobar Handy");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "span", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](172, "i", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "15 Mins");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "td")(175, "span", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "Paypal");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "span", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "#416645453773");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "td")(180, "span", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "Success");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "$1,099.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "tr")(185, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "td")(188, "div", 41)(189, "a", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](190, "img", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "div", 44)(192, "a", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, "Red Premium Handy");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "span", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](195, "i", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, "10 Mins");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "td")(198, "span", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, "Apple Pay");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "span", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, "#147784454554");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "td")(203, "span", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, "Canceled");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206, "$600.55");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "tr")(208, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "td")(211, "div", 41)(212, "a", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](213, "img", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "div", 44)(215, "a", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](216, "Iphone 14 Pro");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "span", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](218, "i", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, "10 Mins");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "td")(221, "span", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](222, "Stripe");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "span", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](224, "#147784454554");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "td")(226, "span", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](227, "Pending");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](229, "$1,099.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "tr")(231, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, "4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "td")(234, "div", 41)(235, "a", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](236, "img", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "div", 44)(238, "a", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](239, "Black Slim 200");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "span", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](241, "i", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](242, "10 Mins");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "td")(244, "span", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](245, "PayU");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "span", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](247, "#147784454554");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "td")(249, "span", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](250, "Success");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](252, "$1,569.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "tr")(254, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](255, "5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "td")(257, "div", 41)(258, "a", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](259, "img", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "div", 44)(261, "a", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](262, "Woodcraft Sandal");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "span", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](264, "i", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](265, "15 Mins");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "td")(267, "span", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](268, "Paytm");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "span", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](270, "#147784454554");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "td")(272, "span", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](273, "Success");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](275, "$1,478.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "div", 66)(277, "div", 67)(278, "div", 68)(279, "div", 32)(280, "h5", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](281, "Sales Analytics");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](282, "div", 69)(283, "div", 70)(284, "button", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](285, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](286, "2023");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "ul", 72)(288, "li")(289, "a", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](290, "2023");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "li")(292, "a", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](293, "2022");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "li")(295, "a", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](296, "2021");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "div", 38)(298, "div", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](299, "apx-chart", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "div", 76)(301, "div", 77)(302, "div", 32)(303, "h5", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](304, "Sales by Countries");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](305, "div", 69)(306, "div", 70)(307, "button", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](308, "This Week");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "ul", 79)(310, "li")(311, "a", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](312, "This Month");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](313, "li")(314, "a", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](315, "This Year");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](316, "div", 38)(317, "div", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](318, "iframe", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](319, "p", 17)(320, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](321, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](322, "48%\u00A0");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](323, "increase compare to last week ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.bsRangeValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](16, !ctx.isCollapsed ? 16 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](17, ctx.isCollapsed ? 17 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("countUp", 95000.45)("options", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](37, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("countUp", 10000)("options", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](38, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("countUp", 800)("options", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](39, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.productList);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.productList);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.productList);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.productList);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.productList);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.productList);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.productList);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.productList);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.productList);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.productList);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.productList);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.productList);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.productList);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.productList);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.productList);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.productList);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.productList);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.productList);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.productList);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.productList);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.chartOptionsOne.series)("chart", ctx.chartOptionsOne.chart)("xaxis", ctx.chartOptionsOne.xaxis)("stroke", ctx.chartOptionsOne.stroke)("tooltip", ctx.chartOptionsOne.tooltip)("dataLabels", ctx.chartOptionsOne.dataLabels)("fill", ctx.chartOptionsOne.fill)("colors", ctx.chartOptionsOne.colors);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__.ChartComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__.TooltipDirective, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltip, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__.BsDaterangepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__.BsDaterangepickerInputDirective, ngx_countup__WEBPACK_IMPORTED_MODULE_8__.CountUpDirective],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_main_dashboard_dashboard_module_ts.js.map