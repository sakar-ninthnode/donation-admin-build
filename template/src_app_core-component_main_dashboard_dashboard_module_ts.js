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
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_service_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/common/common.service */ 53410);
/* harmony import */ var src_app_core_service_data_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/service/data/data.service */ 67812);
/* harmony import */ var src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.index */ 31287);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-apexcharts */ 33117);








const _c0 = ["chart"];
const _c1 = (a0, a1) => ({
  "badge badge-success": a0,
  "badge badge-danger": a1
});
function AdminDashboardComponent_tr_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td")(8, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ticket_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ticket_r1.subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ticket_r1.users.first_name, " ", ticket_r1.users.last_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((tmp_4_0 = ticket_r1 == null ? null : ticket_r1.addresses == null ? null : ticket_r1.addresses.city) !== null && tmp_4_0 !== undefined ? tmp_4_0 : "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](6, _c1, ticket_r1.ticket_status === "Open", ticket_r1.ticket_status === "Closed"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ticket_r1.ticket_status, " ");
  }
}
function AdminDashboardComponent_Conditional_113_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No data found");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function AdminDashboardComponent_For_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "td")(11, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td")(14, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r2.donated_product_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r2.product_details.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r2.donation.user_details.first_name + " " + data_r2.donation.user_details.last_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](9, 8, data_r2.donation.donated_date, "yyyy-MM-dd HH:mm:ss"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", "badge-bgsuccess py-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r2.donation_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", "badge-bgsuccess py-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r2.pickup_status);
  }
}
class AdminDashboardComponent {
  constructor(common, data, pagination) {
    this.common = common;
    this.data = data;
    this.pagination = pagination;
    this.initChecked = false;
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    // pagination variables
    this.tableData = [];
    this.pageSize = 10;
    this.serialNumberArray = [];
    this.totalData = 0;
    this.showFilter = false;
    this.searchDataValue = '';
    //** / pagination variables
    this.DonationCount = 0;
    this.UsersCount = 0;
    this.WareHouseCount = 0;
    this.HelpDeskCount = 0;
    this.ticketsData = [];
    this.donationData = [];
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
    this.getDonations();
    this.getUsers();
    this.getWareHouse();
    this.getHelpDeskTickets();
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
  getDonations() {
    this.data.getDonationList(1, '', '').subscribe(apiRes => {
      this.donationData = apiRes.results.products;
      this.DonationCount = apiRes.results.pagination.total_items;
    });
  }
  getUsers() {
    this.data.getUsers(1, 'all', 1, '').subscribe(apiRes => {
      this.UsersCount = apiRes.results.pagination.total_items;
    });
  }
  getWareHouse() {
    this.data.getWareHouse(1, '').subscribe(apiRes => {
      this.WareHouseCount = apiRes.results.length;
    });
  }
  getHelpDeskTickets() {
    this.data.getHelpDeskTickets(1, 'Open', 'All').subscribe(apiRes => {
      this.HelpDeskCount = apiRes.results.pagination.total_items;
      this.ticketsData = apiRes.results.tickets;
    });
  }
  static {
    this.ɵfac = function AdminDashboardComponent_Factory(t) {
      return new (t || AdminDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_service_common_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_service_data_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_4__.PaginationService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: AdminDashboardComponent,
      selectors: [["app-admin-dashboard"]],
      viewQuery: function AdminDashboardComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
        }
      },
      decls: 116,
      vars: 13,
      consts: [[1, "row"], [1, "col-xl-3", "col-sm-6", "col-12", "d-flex"], [1, "dash-count"], [1, "dash-counts"], [1, "dash-imgs"], [1, "feather", "icon-user"], [1, "dash-count", "das1"], [1, "feather", "icon-user-check"], [1, "dash-count", "das2"], ["src", "assets/img/icons/file-text-icon-01.svg", "alt", "icon", 1, "img-fluid"], [1, "dash-count", "das3"], [1, "feather", "icon-file"], [1, "col-xl-7", "col-sm-12", "col-12", "d-flex"], [1, "card", "flex-fill"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "card-title", "mb-0"], [1, "graph-sets"], [1, "mb-0"], [1, "dropdown", "dropdown-wraper"], ["type", "button", "id", "dropdownMenuButton", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-light", "btn-sm", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "card-body"], ["id", "sales_charts"], [3, "series", "chart", "dataLabels", "plotOptions", "yaxis", "xaxis", "colors"], [1, "col-xl-5", "col-sm-12", "col-12", "d-flex"], [1, "card", "flex-fill", "default-cover", "mb-4"], [1, "view-all-link"], ["href", "/application/chat", 1, "view-all", "d-flex", "align-items-center"], [1, "ps-2", "d-flex", "align-items-center"], [1, "feather", "icon-arrow-right", "feather-16"], [1, "table-responsive", "dataview"], [1, "table", "table-hover", "mb-0"], [4, "ngFor", "ngForOf"], [1, "card"], [1, "card-header", "d-flex", "justify-content-between"], [1, "card-title"], ["href", "/sales/sales-list", 1, "view-all", "d-flex", "align-items-center"], [1, "table-responsive"], [1, "table"], [1, "px-2", 3, "ngClass"], ["colspan", "6", 1, "text-center", "text-muted"], [1, "badge", 3, "ngClass"]],
      template: function AdminDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Total Donations");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 1)(11, "div", 6)(12, "div", 3)(13, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "App Users");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 1)(20, "div", 8)(21, "div", 3)(22, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Total WareHouse");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 1)(29, "div", 10)(30, "div", 3)(31, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "HelpDesk Open Tickets");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 0)(38, "div", 12)(39, "div", 13)(40, "div", 14)(41, "h5", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Donations");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 16)(44, "ul", 17)(45, "li")(46, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "Complete");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "li")(49, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Pending");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 18)(52, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, " 2025 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "ul", 20)(55, "li")(56, "a", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 22)(59, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](60, "apx-chart", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 25)(62, "div", 26)(63, "div", 14)(64, "h4", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "Open Tickets");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 27)(67, "a", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, " View All");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](70, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 22)(72, "div", 31)(73, "table", 32)(74, "thead")(75, "tr")(76, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, "Subject");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79, "User");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, "City");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](85, AdminDashboardComponent_tr_85_Template, 10, 9, "tr", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "div", 34)(87, "div", 35)(88, "h4", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89, "Recent Donations");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "div", 27)(91, "a", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92, " View All");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](94, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "div", 22)(96, "div", 38)(97, "table", 39)(98, "thead")(99, "tr")(100, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](101, "Product Id");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](103, "Title");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](105, "User Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](107, "Donation Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](109, "Donation Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](111, "Pickup Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](113, AdminDashboardComponent_Conditional_113_Template, 3, 0, "tr");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](114, AdminDashboardComponent_For_115_Template, 16, 11, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.DonationCount);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.UsersCount);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.WareHouseCount);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.HelpDeskCount);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("dataLabels", ctx.chartOptions.dataLabels)("plotOptions", ctx.chartOptions.plotOptions)("yaxis", ctx.chartOptions.yaxis)("xaxis", ctx.chartOptions.xaxis)("colors", ctx.chartOptions.colors);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.ticketsData);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](113, (ctx.donationData == null ? null : ctx.donationData.length) === 0 ? 113 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.donationData);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__.ChartComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
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

/***/ }),

/***/ 96414:
/*!****************************************************************!*\
  !*** ./src/app/shared/custom-pagination/pagination.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaginationService: () => (/* binding */ PaginationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class PaginationService {
  constructor() {
    this.paginationData = {
      total_items: 0,
      total_pages: 0,
      current_page: 1,
      page_size: 10,
      has_next: false,
      has_prev: false,
      next_page: null,
      prev_page: null
    };
  }
  setPaginationData(data) {
    this.paginationData = data;
  }
  getPaginationData() {
    return this.paginationData;
  }
  getNextPage() {
    return this.paginationData.has_next ? this.paginationData.next_page : null;
  }
  getPrevPage() {
    return this.paginationData.has_prev ? this.paginationData.prev_page : null;
  }
  static {
    this.ɵfac = function PaginationService_Factory(t) {
      return new (t || PaginationService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PaginationService,
      factory: PaginationService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 31287:
/*!****************************************!*\
  !*** ./src/app/shared/shared.index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaginationService: () => (/* reexport safe */ _custom_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_1__.PaginationService),
/* harmony export */   sharedModule: () => (/* reexport safe */ _shared_module__WEBPACK_IMPORTED_MODULE_0__.sharedModule)
/* harmony export */ });
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ 93887);
/* harmony import */ var _custom_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-pagination/pagination.service */ 96414);



/***/ })

}]);
//# sourceMappingURL=src_app_core-component_main_dashboard_dashboard_module_ts.js.map