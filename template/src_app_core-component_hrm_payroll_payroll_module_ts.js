"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_hrm_payroll_payroll_module_ts"],{

/***/ 5026:
/*!***********************************************************************************!*\
  !*** ./src/app/core-component/hrm/payroll/payroll-list/payroll-list.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PayrollListComponent: () => (/* binding */ PayrollListComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 77697);
/* harmony import */ var src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/core.index */ 82351);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.index */ 31287);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 22047);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/custom-pagination/custom-pagination.component */ 14860);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);














const _c0 = () => ({
  standalone: true
});
const _c1 = a0 => ({
  "setclose": a0
});
const _c2 = (a0, a1) => ({
  "d-block": a0,
  "d-none": a1
});
const _c3 = (a0, a1) => ({
  "badge-linesuccess": a0,
  "badge-linedanger": a1
});
function PayrollListComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 13);
  }
}
function PayrollListComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 14);
  }
}
function PayrollListComponent_For_105_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td")(2, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PayrollListComponent_For_105_Template_label_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.selectAll(ctx_r1.initChecked));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function PayrollListComponent_For_105_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.initChecked, $event) || (ctx_r1.initChecked = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td")(6, "div", 136)(7, "a", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 139)(10, "a", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "p", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Database Administrator");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "td")(21, "span", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "td", 143)(24, "div", 144)(25, "a", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "i", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "a", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "i", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "a", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "i", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "a", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PayrollListComponent_For_105_Template_a_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.confirmColor());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "i", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.initChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", data_r3.img, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r3.employee);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r3.employeeID);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r3.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r3.salary);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](8, _c3, data_r3.status === "Paid", data_r3.status === "UnPaid"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r3.status);
  }
}
class PayrollListComponent {
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  openFilter() {
    this.filter = !this.filter;
  }
  //** / pagination variables
  constructor(data, pagination, router, sidebar) {
    this.data = data;
    this.pagination = pagination;
    this.router = router;
    this.sidebar = sidebar;
    this.initChecked = false;
    this.selectedValue1 = '';
    this.selectedValue2 = '';
    this.selectedValue3 = '';
    this.selectedValue4 = '';
    this.selectedValue5 = '';
    this.routes = src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.routes;
    this.isCollapsed = false;
    this.filter = false;
    // pagination variables
    this.tableData = [];
    this.pageSize = 10;
    this.serialNumberArray = [];
    this.totalData = 0;
    this.showFilter = false;
    this.searchDataValue = '';
    this.data.getDataTable().subscribe(apiRes => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe(res => {
        if (this.router.url == this.routes.payrollList) {
          this.getTableData({
            skip: res.skip,
            limit: this.totalData
          });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getPayrollList().subscribe(apiRes => {
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
      this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(this.tableData);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        serialNumberArray: this.serialNumberArray
      });
    });
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
    this.ɵfac = function PayrollListComponent_Factory(t) {
      return new (t || PayrollListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_2__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.SidebarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: PayrollListComponent,
      selectors: [["app-payroll-list"]],
      decls: 429,
      vars: 28,
      consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Pdf", "matTooltipPosition", "above"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Excel", "matTooltipPosition", "above"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Print", "matTooltipPosition", "above"], [1, "feather", "icon-printer", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "feather", "icon-rotate-ccw", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "feather", "icon-chevron-up", "feather-chevron-up"], [1, "feather", "icon-chevron-down", "feather-chevron-down"], [1, "page-btn"], ["type", "button", "data-bs-toggle", "offcanvas", "data-bs-target", "#offcanvasRight-add", "aria-controls", "offcanvasRight-add", 1, "btn", "btn-primary", "add-em-payroll"], [1, "me-2"], [1, "card", "table-list-card"], [1, "card-body"], [1, "table-top"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather", "search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search...", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "search-path"], [1, "d-flex", "align-items-center", 3, "click", "ngClass"], ["id", "filter_search", 1, "btn", "btn-filter"], [1, "feather", "icon-filter", "filter-icon"], ["src", "assets/img/icons/closes.svg", "alt", "img"], [1, "form-sort"], [1, "feather", "icon-sliders", "feather", "icon-sliders", "info-img"], ["placeholder", "Sort by Date", 1, "space-select", "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "Sort by Date"], ["value", "12 09 23"], ["value", "26 09 23"], ["id", "filter_inputs", 1, "card", "mb-0", 3, "ngClass"], [1, "card-body", "pb-0"], [1, "row"], [1, "col-lg-12", "col-sm-12"], [1, "col-lg-3", "col-sm-6", "col-12"], [1, "input-blocks"], [1, "feather", "icon-user", "info-img"], ["placeholder", "Choose Name", 1, "space-select", "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "Choose Name"], ["value", "Macbook pro"], ["value", "Orange"], [1, "feather", "icon-stop-circle", "info-img"], ["placeholder", "Choose Status", 1, "space-select", "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "Choose Status"], ["value", "Computers"], ["value", "Fruits"], [1, "col-lg-6", "col-sm-6", "col-12"], [1, "btn", "btn-filters", "ms-auto"], [1, "feather", "icon-search", "feather-search"], [1, "table-responsive"], ["matSort", "", 1, "table", "datanew", 3, "matSortChange"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "employee"], ["mat-sort-header", "employeeID"], ["mat-sort-header", "email"], ["mat-sort-header", "salary"], ["mat-sort-header", "status"], ["tabindex", "-1", "id", "offcanvasRight-add", 1, "offcanvas", "offcanvas-end", "em-payrol-add"], [1, "offcanvas-body", "p-0"], [1, "page-wrapper-new"], [1, "content"], [1, "page-header", "justify-content-between"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-added"], [1, "feather", "icon-arrow-left", "me-2"], [1, "card"], [1, "mb-3"], [1, "form-label"], ["placeholder", "Choose", 1, "select", "select2", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "Choose"], [1, "text-title"], ["type", "text", 1, "text-form", "form-control"], [1, "payroll-info", "d-flex"], [1, "status-updates"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills", "list", "mb-3"], ["role", "presentation", 1, "nav-item"], ["id", "pills-home-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-home", "type", "button", "role", "tab", 1, "nav-link", "active"], [1, "form-check", "form-check-inline"], [1, "form-check-label"], ["id", "pills-profile-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-profile", "type", "button", "role", "tab", 1, "nav-link"], [1, "payroll-title"], ["type", "text", "id", "allowances-one", 1, "form-control"], ["type", "text", "id", "conveyance", 1, "form-control"], ["type", "text", "id", "medical-allowance", 1, "form-control"], ["type", "text", "id", "bonus", 1, "form-control"], [1, "sub-form"], [1, "mb-3", "flex-grow-1"], [1, "subadd-btn"], ["href", "javascript:void(0);", 1, "btn", "btn-add"], [1, "feather", "icon-plus-circle"], ["type", "text", "id", "pf-allowances", 1, "form-control"], ["type", "text", "id", "professional", 1, "form-control"], ["type", "text", "id", "tds-allowances", 1, "form-control"], ["type", "text", "id", "other-allowances", 1, "form-control"], [1, "col-lg-4", "col-sm-6", "col-12"], ["type", "text", "id", "total-allowances", 1, "form-control"], ["type", "text", "id", "total-deduction", 1, "form-control"], ["type", "text", "id", "salary-allowances", 1, "form-control"], [1, "col-lg-12"], [1, "view-btn"], ["type", "button", 1, "btn", "btn-previw", "me-2"], ["type", "button", 1, "btn", "btn-reset", "me-2"], ["type", "submit", 1, "btn", "btn-save"], ["tabindex", "-1", "id", "offcanvasRight", 1, "offcanvas", "offcanvas-end", "em-payrol-add"], ["placeholder", "Herald james", 1, "select", "select2", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "Herald james"], ["value", "Herald1"], ["type", "text", "value", "$32,000", 1, "form-control"], ["id", "pills-tab2", "role", "tablist", 1, "nav", "nav-pills", "list", "mb-3"], ["id", "pills-home-tab2", "data-bs-toggle", "pill", "data-bs-target", "#pills-home", "type", "button", "role", "tab", 1, "nav-link", "active"], ["id", "pills-profile-tab2", "data-bs-toggle", "pill", "data-bs-target", "#pills-profile", "type", "button", "role", "tab", 1, "nav-link"], ["type", "text", "id", "hra-allowances-one", "value", "0.00", 1, "form-control"], ["type", "text", "id", "conveyance-two", "value", "0.00", 1, "form-control"], ["type", "text", "id", "medical-allowance-three", "value", "0.00", 1, "form-control"], ["type", "text", "id", "bonus-allowances-four", "value", "0.00", 1, "form-control"], ["type", "text", "value", "0.00", 1, "form-control"], ["type", "text", "id", "pf-allowances-five", "value", "0.00", 1, "form-control"], ["type", "text", "id", "professional-allowances-six", "value", "0.00", 1, "form-control"], ["type", "text", "id", "tds-allowances-seven", "value", "0.00", 1, "form-control"], ["type", "text", "id", "other-allowances-eight", "value", "0.00", 1, "form-control"], ["type", "text", "value", "0.00", 1, "text-form", "form-control"], ["type", "text", "id", "total-allowances-nine", "value", "0.00", 1, "form-control"], ["type", "text", "id", "deductio-allowances-ten", "value", "0.00", 1, "form-control"], ["type", "text", "id", "salary-allowances-leven", "value", "$32.000", 1, "form-control"], ["type", "submit", 1, "btn", "btn-reset", "me-2"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "userimgname"], ["href", "javascript:void(0);", 1, "product-img"], ["alt", "product", 3, "src"], [1, "emp-name"], ["href", "javascript:void(0);"], [1, "role"], [1, "badge", 3, "ngClass"], [1, "action-table-data"], [1, "edit-delete-action", "data-view"], ["href", "javascript:void(0);", 1, "me-2"], [1, "feather", "icon-eye", "action-eye"], [1, "feather", "icon-download", "action-download"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#offcanvasRight", 1, "me-2"], [1, "feather", "icon-edit", "action-edit"], ["href", "javascript:void(0);", 1, "confirm-text", 3, "click"], [1, "feather", "icon-trash-2", "feather-trash-2"]],
      template: function PayrollListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Payroll");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Manage Your Employees");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ul", 3)(8, "li")(9, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "li")(12, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "li")(15, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "li")(18, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "li")(21, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PayrollListComponent_Template_a_click_21_listener() {
            return ctx.toggleCollapse();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, PayrollListComponent_Conditional_22_Template, 1, 0, "i", 13)(23, PayrollListComponent_Conditional_23_Template, 1, 0, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 15)(25, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Add New Payoll");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 18)(29, "div", 19)(30, "div", 20)(31, "div", 21)(32, "div", 22)(33, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 25)(36, "label")(37, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function PayrollListComponent_Template_input_ngModelChange_37_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PayrollListComponent_Template_input_ngModelChange_37_listener() {
            return ctx.searchData(ctx.searchDataValue);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 27)(39, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PayrollListComponent_Template_div_click_39_listener() {
            return ctx.openFilter();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "img", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "mat-select", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function PayrollListComponent_Template_mat_select_ngModelChange_46_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue1, $event) || (ctx.selectedValue1 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "mat-option", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Sort by Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "mat-option", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "12 09 23");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "mat-option", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "26 09 23");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 38)(54, "div", 39)(55, "div", 40)(56, "div", 41)(57, "div", 40)(58, "div", 42)(59, "div", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](60, "i", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "mat-select", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function PayrollListComponent_Template_mat_select_ngModelChange_61_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue2, $event) || (ctx.selectedValue2 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "mat-option", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "Choose Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "mat-option", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Macbook pro");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "mat-option", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "Orange");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 42)(69, "div", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](70, "i", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "mat-select", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function PayrollListComponent_Template_mat_select_ngModelChange_71_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue3, $event) || (ctx.selectedValue3 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "mat-option", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "Choose Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "mat-option", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "Computers");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "mat-option", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, "Fruits");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "div", 54)(79, "div", 43)(80, "a", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](81, "i", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, " Search ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div", 57)(84, "table", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("matSortChange", function PayrollListComponent_Template_table_matSortChange_84_listener($event) {
            return ctx.sortData($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "thead")(86, "tr")(87, "th", 59)(88, "label", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PayrollListComponent_Template_label_click_88_listener() {
            return ctx.selectAll(ctx.initChecked);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "input", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function PayrollListComponent_Template_input_ngModelChange_89_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.initChecked, $event) || (ctx.initChecked = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](90, "span", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "th", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92, "Employee");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "th", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](94, "Employee ID");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "th", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](96, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "th", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98, "Salary");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "th", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](100, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "th", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](102, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](104, PayrollListComponent_For_105_Template, 33, 11, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](106, "app-custom-pagination");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "div", 68)(108, "div", 69)(109, "div", 70)(110, "div", 71)(111, "div", 72)(112, "div", 2)(113, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](114, "Add New Payroll");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](115, "div", 15)(116, "a", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](117, "i", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](118, "Back To List");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](119, "div", 75)(120, "div", 19)(121, "form")(122, "div", 40)(123, "div", 42)(124, "div", 76)(125, "label", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](126, "Select Employee ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](127, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](128, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "mat-select", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function PayrollListComponent_Template_mat_select_ngModelChange_129_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue4, $event) || (ctx.selectedValue4 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](130, "mat-option", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](131, "Choose");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](132, "mat-option", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](133, "Computers");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](134, "div", 80)(135, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](136, "Salary Information");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](137, "div", 76)(138, "label", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](139, "Basic Salary ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](140, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](141, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](142, "input", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](143, "div", 82)(144, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](145, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](146, "div", 83)(147, "ul", 84)(148, "li", 85)(149, "button", 86)(150, "span", 87)(151, "span", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](152, "Paid");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](153, "li", 85)(154, "button", 89)(155, "span", 87)(156, "span", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](157, "Unpaid");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](158, "div", 90)(159, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](160, "Allowances");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](161, "div", 42)(162, "div", 76)(163, "label", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](164, "HRA Allowance ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](165, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](166, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](167, "input", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](168, "div", 42)(169, "div", 76)(170, "label", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](171, "Conveyance ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](172, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](173, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](174, "input", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](175, "div", 42)(176, "div", 76)(177, "label", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](178, "Medical Allowance ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](179, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](180, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](181, "input", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](182, "div", 42)(183, "div", 76)(184, "label", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](185, "Bonus ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](186, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](187, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](188, "input", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](189, "div", 95)(190, "div", 96)(191, "label", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](192, "Others");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](193, "input", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](194, "div", 97)(195, "a", 98);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](196, "i", 99);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](197, "div", 90)(198, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](199, "Deductions");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](200, "div", 42)(201, "div", 76)(202, "label", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](203, "PF ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](204, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](205, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](206, "input", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](207, "div", 42)(208, "div", 76)(209, "label", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](210, "Professional Tax ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](211, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](212, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](213, "input", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](214, "div", 42)(215, "div", 76)(216, "label", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](217, "TDS ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](218, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](219, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](220, "input", 102);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](221, "div", 42)(222, "div", 76)(223, "label", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](224, "Loans & Others ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](225, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](226, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](227, "input", 103);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](228, "div", 95)(229, "div", 96)(230, "label", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](231, "Others");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](232, "input", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](233, "div", 97)(234, "a", 98);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](235, "i", 99);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](236, "div", 90)(237, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](238, "Deductions");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](239, "div", 104)(240, "div", 76)(241, "label", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](242, "Total Allowance ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](243, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](244, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](245, "input", 105);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](246, "div", 104)(247, "div", 76)(248, "label", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](249, "Total Deduction ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](250, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](251, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](252, "input", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](253, "div", 104)(254, "div", 76)(255, "label", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](256, "Net Salary ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](257, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](258, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](259, "input", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](260, "div", 108)(261, "div", 109)(262, "button", 110);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](263, "Preview");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](264, "button", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](265, "Reset");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](266, "button", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](267, "Save");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](268, "div", 113)(269, "div", 69)(270, "div", 70)(271, "div", 71)(272, "div", 72)(273, "div", 2)(274, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](275, "Edit Payroll");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](276, "div", 15)(277, "a", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](278, "i", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](279, "Back To List");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](280, "div", 75)(281, "div", 19)(282, "form")(283, "div", 40)(284, "div", 42)(285, "div", 76)(286, "label", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](287, "Select Employee ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](288, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](289, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](290, "mat-select", 114);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function PayrollListComponent_Template_mat_select_ngModelChange_290_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue5, $event) || (ctx.selectedValue5 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](291, "mat-option", 115);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](292, "Herald james");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](293, "mat-option", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](294, "Herald1");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](295, "div", 80)(296, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](297, "Salary Information");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](298, "div", 76)(299, "label", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](300, "Basic Salary ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](301, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](302, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](303, "input", 117);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](304, "div", 82)(305, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](306, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](307, "div", 83)(308, "ul", 118)(309, "li", 85)(310, "button", 119)(311, "span", 87)(312, "span", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](313, "Paid");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](314, "li", 85)(315, "button", 120)(316, "span", 87)(317, "span", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](318, "Unpaid");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](319, "div", 90)(320, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](321, "Allowances");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](322, "div", 42)(323, "div", 76)(324, "label", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](325, "HRA Allowance ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](326, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](327, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](328, "input", 121);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](329, "div", 42)(330, "div", 76)(331, "label", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](332, "Conveyance ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](333, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](334, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](335, "input", 122);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](336, "div", 42)(337, "div", 76)(338, "label", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](339, "Medical Allowance ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](340, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](341, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](342, "input", 123);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](343, "div", 42)(344, "div", 76)(345, "label", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](346, "Bonus ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](347, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](348, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](349, "input", 124);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](350, "div", 95)(351, "div", 96)(352, "label", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](353, "Others");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](354, "input", 125);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](355, "div", 97)(356, "a", 98);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](357, "i", 99);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](358, "div", 90)(359, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](360, "Deductions");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](361, "div", 42)(362, "div", 76)(363, "label", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](364, "PF ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](365, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](366, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](367, "input", 126);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](368, "div", 42)(369, "div", 76)(370, "label", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](371, "Professional Tax ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](372, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](373, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](374, "input", 127);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](375, "div", 42)(376, "div", 76)(377, "label", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](378, "TDS ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](379, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](380, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](381, "input", 128);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](382, "div", 42)(383, "div", 76)(384, "label", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](385, "Loans & Others ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](386, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](387, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](388, "input", 129);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](389, "div", 95)(390, "div", 96)(391, "label", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](392, "Others");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](393, "input", 130);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](394, "div", 97)(395, "a", 98);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](396, "i", 99);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](397, "div", 90)(398, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](399, "Deductions");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](400, "div", 104)(401, "div", 76)(402, "label", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](403, "Total Allowance ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](404, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](405, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](406, "input", 131);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](407, "div", 104)(408, "div", 76)(409, "label", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](410, "Total Deduction ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](411, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](412, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](413, "input", 132);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](414, "div", 104)(415, "div", 76)(416, "label", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](417, "Net Salary ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](418, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](419, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](420, "input", 133);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](421, "div", 108)(422, "div", 109)(423, "button", 110);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](424, "Preview");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](425, "button", 134);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](426, "Reset");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](427, "button", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](428, "Save");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](22, !ctx.isCollapsed ? 22 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](23, ctx.isCollapsed ? 23 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.searchDataValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](17, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](18, _c1, ctx.filter === true));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](20, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](21, _c2, ctx.filter, !ctx.filter));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](24, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](25, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.initChecked);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx.tableData);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](26, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](161);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](27, _c0));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortHeader, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_3__.CustomPaginationComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatTooltip],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 95564:
/*!**********************************************************************!*\
  !*** ./src/app/core-component/hrm/payroll/payroll-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PayrollRoutingModule: () => (/* binding */ PayrollRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _payroll_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payroll.component */ 89562);
/* harmony import */ var _payslip_payslip_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payslip/payslip.component */ 16584);
/* harmony import */ var _payroll_list_payroll_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payroll-list/payroll-list.component */ 5026);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);






const routes = [{
  path: '',
  component: _payroll_component__WEBPACK_IMPORTED_MODULE_0__.PayrollComponent,
  children: [{
    path: 'payroll-list',
    component: _payroll_list_payroll_list_component__WEBPACK_IMPORTED_MODULE_2__.PayrollListComponent
  }, {
    path: 'payslip',
    component: _payslip_payslip_component__WEBPACK_IMPORTED_MODULE_1__.PayslipComponent
  }]
}];
class PayrollRoutingModule {
  static {
    this.ɵfac = function PayrollRoutingModule_Factory(t) {
      return new (t || PayrollRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: PayrollRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PayrollRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 89562:
/*!*****************************************************************!*\
  !*** ./src/app/core-component/hrm/payroll/payroll.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PayrollComponent: () => (/* binding */ PayrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);


class PayrollComponent {
  static {
    this.ɵfac = function PayrollComponent_Factory(t) {
      return new (t || PayrollComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PayrollComponent,
      selectors: [["app-payroll"]],
      decls: 1,
      vars: 0,
      template: function PayrollComponent_Template(rf, ctx) {
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

/***/ 63757:
/*!**************************************************************!*\
  !*** ./src/app/core-component/hrm/payroll/payroll.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PayrollModule: () => (/* binding */ PayrollModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _payroll_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payroll-routing.module */ 95564);
/* harmony import */ var _payroll_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payroll.component */ 89562);
/* harmony import */ var _payroll_list_payroll_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payroll-list/payroll-list.component */ 5026);
/* harmony import */ var _payslip_payslip_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payslip/payslip.component */ 16584);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);







class PayrollModule {
  static {
    this.ɵfac = function PayrollModule_Factory(t) {
      return new (t || PayrollModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: PayrollModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _payroll_routing_module__WEBPACK_IMPORTED_MODULE_0__.PayrollRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.sharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PayrollModule, {
    declarations: [_payroll_component__WEBPACK_IMPORTED_MODULE_1__.PayrollComponent, _payroll_list_payroll_list_component__WEBPACK_IMPORTED_MODULE_2__.PayrollListComponent, _payslip_payslip_component__WEBPACK_IMPORTED_MODULE_3__.PayslipComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _payroll_routing_module__WEBPACK_IMPORTED_MODULE_0__.PayrollRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.sharedModule]
  });
})();

/***/ }),

/***/ 16584:
/*!*************************************************************************!*\
  !*** ./src/app/core-component/hrm/payroll/payslip/payslip.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PayslipComponent: () => (/* binding */ PayslipComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class PayslipComponent {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  static {
    this.ɵfac = function PayslipComponent_Factory(t) {
      return new (t || PayslipComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: PayslipComponent,
      selectors: [["app-payslip"]],
      decls: 141,
      vars: 0,
      consts: [["id", "pay-slip", 1, "pay-slip-box"], [1, "modal-dialog", "modal-dialog-centered", "stock-adjust-modal"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "contents"], [1, "modal-header", "border-0", "custom-modal-header"], [1, "page-header", "mb-0", "w-100"], [1, "add-item", "payslip-list", "d-flex", "justify-content-between"], [1, "page-title"], [1, "page-btn", "d-flex", "align-items-center", "mt-3", "mt-md-0"], [1, "d-block", "d-sm-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "btn", "btn-added", "me-2"], [1, "feather", "icon-mail", "me-2"], ["href", "javascript:void(0);", 1, "btn", "btn-added", "downloader", "mt-3", "mb-3", "m-sm-0"], [1, "feather", "icon-download", "me-2"], ["href", "javascript:void(0);", 1, "btn", "btn-added", "printer", "ms-2"], [1, "feather", "icon-printer", "me-2"], [1, "modal-body", "custom-modal-body"], [1, "card", "mb-0"], [1, "card-body", "border-0"], [1, "payslip-month", "d-flex"], [1, "slip-logo"], ["src", "assets/img/logo-small.png", "alt", "Logo"], [1, "month-of-slip"], [1, "emp-details", "d-flex"], [1, "emp-name-id"], [1, "emp-location-info"], [1, "row"], [1, "table-responsive"], [1, "w-100"], [1, "paysilp-table-border"], ["colspan", "2"], [1, "paysilp-table-borders"], [1, "payslip-border-bottom"], [1, "emp-details", "d-flex", "justify-content-start"], [1, "emp-name-id", "pay-slip-salery"], [1, "emp-location-info", "pay-slip-salery"], [1, "product-name-slip", "text-center"]],
      template: function PayslipComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Payslip");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9)(12, "div", 10)(13, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Send Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Download");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Print Barcode");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 17)(23, "div", 18)(24, "div", 19)(25, "div", 20)(26, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "img", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 23)(29, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Payslip for the Month of Sep 2023");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 24)(32, "div", 25)(33, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Emp Name : ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Herald james");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Emp Id : ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "POS1234");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 26)(42, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Location : ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "USA");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Pay Period : ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Sep 2023");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 27)(51, "div", 28)(52, "table", 29)(53, "thead")(54, "tr", 30)(55, "th", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Earnings");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "th", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Deduction");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "tr", 30)(60, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Pay Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Amount");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Pay Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Amount");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "tbody", 32)(69, "tr")(70, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Basic Salary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "$32,000");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "PF");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "tr")(79, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "HRA Allowance");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Professional Tax");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "tr")(88, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Conveyance");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "TDS");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "tr")(97, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Medical Allowance");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Loans & Others");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "tr")(106, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Bonus");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Bonus");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "tr", 33)(115, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Total Earnings");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "$32,000");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Total Earnings");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 34)(124, "div", 35)(125, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Net Salary");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Inwords");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 36)(130, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "$32,000");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "Thirty Two Thousand Only");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 37)(135, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "DreamsPOS");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "81, Randall Drive,Hornchurch ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](139, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, " RM126TA.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_hrm_payroll_payroll_module_ts.js.map