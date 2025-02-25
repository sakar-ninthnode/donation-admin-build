"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_settings_other-settings_other-settings_module_ts"],{

/***/ 73519:
/*!***************************************************************************************************!*\
  !*** ./src/app/core-component/settings/other-settings/ban-ip-address/ban-ip-address.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BanIpAddressComponent: () => (/* binding */ BanIpAddressComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_service_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/sidebar/sidebar.service */ 79950);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/custom-pagination/custom-pagination.component */ 14860);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _common_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/settings-sidebar/settings-sidebar.component */ 42362);










const _c0 = () => ({
  standalone: true
});
const _c1 = (a0, a1) => ({
  "d-block": a0,
  "d-none": a1
});
function BanIpAddressComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 7);
  }
}
function BanIpAddressComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 8);
  }
}
function BanIpAddressComponent_For_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", data_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", data_r1.value, " ");
  }
}
function BanIpAddressComponent_For_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", data_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", data_r2.value, " ");
  }
}
class BanIpAddressComponent {
  constructor(sidebar) {
    this.sidebar = sidebar;
    this.selectedValue1 = '';
    this.selectedValue2 = '';
    this.selectedList1 = [{
      value: 'Sort by Datee'
    }, {
      value: 'Newest'
    }, {
      value: 'Oldest'
    }];
    this.selectedList2 = [{
      value: 'Choose IP'
    }, {
      value: '211.11.0.25'
    }, {
      value: '211.03.0.11'
    }];
    this.isCollapsed = false;
    this.filter = false;
  }
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  openFilter() {
    this.filter = !this.filter;
  }
  confirmColor() {
    const swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
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
      } else if (result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().DismissReason).cancel) {
        swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }
  static {
    this.ɵfac = function BanIpAddressComponent_Factory(t) {
      return new (t || BanIpAddressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_service_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__.SidebarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: BanIpAddressComponent,
      selectors: [["app-ban-ip-address"]],
      decls: 227,
      vars: 12,
      consts: [[1, "page-header", "settings-pg-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "feather", "icon-rotate-ccw", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "id", "collapse-header", "matTooltip", "Collapse", "matTooltipPosition", "above", 3, "click"], [1, "feather", "icon-chevron-up", "feather-chevron-up"], [1, "feather", "icon-chevron-down", "feather-chevron-down"], [1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "settings-page-wrap", "w-50"], [1, "setting-title"], [1, "page-header", "bank-settings", "justify-content-end"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-banip", 1, "btn", "btn-added"], [1, "feather", "icon-plus-circle", "me-2"], [1, "col-lg-12"], [1, "card", "table-list-card"], [1, "card-body"], [1, "table-top"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search...", 1, "form-control"], [1, "search-path"], [1, "d-flex", "align-items-center"], ["id", "filter_search", 1, "btn", "btn-filter", 3, "click"], [1, "feather", "icon-filter", "filter-icon"], ["src", "assets/img/icons/closes.svg", "alt", "img"], [1, "form-sort"], [1, "feather", "icon-sliders", "info-img"], ["placeholder", "Sort by Date", 1, "select", "space-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], ["id", "filter_inputs", 1, "card", 3, "ngClass"], [1, "card-body", "pb-0"], [1, "col-lg-4", "col-sm-6", "col-12"], [1, "input-blocks"], [1, "feather", "icon-zap", "info-img"], ["placeholder", "Choose IP", 1, "select", "space-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "col-lg-3", "col-sm-6", "col-12", "ms-auto"], [1, "btn", "btn-filters", "ms-auto"], [1, "table-responsive"], [1, "table", "datanew"], [1, "no-sort"], [1, "checkboxs"], ["type", "checkbox", "id", "select-all"], [1, "checkmarks"], [1, "no-sort", "text-end"], ["type", "checkbox"], [1, "action-table-data", "justify-content-end"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-banip", 1, "me-2", "p-2"], [1, "feather", "icon-edit", "feather-edit"], ["href", "javascript:void(0);", 1, "confirm-text", "p-2"], [1, "feather", "icon-trash-2", "feather-trash-2"], [1, "feather", "icon-trash-2", "feather-trash-2", 3, "click"], ["id", "add-banip", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "custom-modal-two"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header", "border-0", "custom-modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body"], [1, "mb-3"], [1, "form-label"], ["type", "text", 1, "form-control"], ["rows", "4", "placeholder", "Type your message", 1, "form-control"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], [1, "status-label"], ["type", "checkbox", "id", "user5", "checked", "", 1, "check"], ["for", "user5", 1, "checktoggle"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit"], ["id", "edit-banip", 1, "modal", "fade"], ["type", "text", "value", "211.11.0.25", 1, "form-control"], ["rows", "4", "placeholder", "Temporarily block to protect user accounts from internet fraudsters.", 1, "form-control"], ["type", "checkbox", "id", "user4", "checked", "", 1, "check"], ["for", "user4", 1, "checktoggle"]],
      template: function BanIpAddressComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Manage your settings on portal");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ul", 3)(8, "li")(9, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "li")(12, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BanIpAddressComponent_Template_a_click_12_listener() {
            return ctx.toggleCollapse();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, BanIpAddressComponent_Conditional_13_Template, 1, 0, "i", 7)(14, BanIpAddressComponent_Conditional_14_Template, 1, 0, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 9)(16, "div", 10)(17, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "app-settings-sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 12)(20, "div", 13)(21, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Ban IP Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 14)(24, "div", 15)(25, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Add New Ban IP");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 9)(29, "div", 18)(30, "div", 19)(31, "div", 20)(32, "div", 21)(33, "div", 22)(34, "div", 23)(35, "a", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 26)(38, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 28)(41, "div", 29)(42, "a", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BanIpAddressComponent_Template_a_click_42_listener() {
            return ctx.openFilter();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "i", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "img", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "mat-select", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function BanIpAddressComponent_Template_mat_select_ngModelChange_48_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue1, $event) || (ctx.selectedValue1 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](49, BanIpAddressComponent_For_50_Template, 2, 2, "mat-option", 36, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 37)(52, "div", 38)(53, "div", 9)(54, "div", 39)(55, "div", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](56, "i", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "mat-select", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function BanIpAddressComponent_Template_mat_select_ngModelChange_57_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue2, $event) || (ctx.selectedValue2 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](58, BanIpAddressComponent_For_59_Template, 2, 2, "mat-option", 36, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 43)(61, "div", 40)(62, "a", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](63, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, " Search ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 45)(66, "table", 46)(67, "thead")(68, "tr")(69, "th", 47)(70, "label", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](71, "input", 49)(72, "span", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "IP Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "Reason");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "th", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "tbody")(82, "tr")(83, "td")(84, "label", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](85, "input", 52)(86, "span", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, " 211.11.0.25 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "td")(90, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, "You can get on-demand services in order to find a nearby service.");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](93, " 12 Jul 2023 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "td", 53)(95, "div", 54)(96, "a", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](97, "i", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "a", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](99, "i", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "tr")(101, "td")(102, "label", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](103, "input", 52)(104, "span", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](106, " 211.03.0.11 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "td")(108, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](109, "Extract pricing information at inventory levels.");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](111, " 24 Aug 2023 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "td", 53)(113, "div", 54)(114, "a", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](115, "i", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "a", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](117, "i", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](118, "tr")(119, "td")(120, "label", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](121, "input", 52)(122, "span", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](123, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](124, " 211.24.0.17 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](125, "td")(126, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](127, "Fetching data for competitors to gain competitive advantage.");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](128, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](129, " 07 Sep 2023 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](130, "td", 53)(131, "div", 54)(132, "a", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](133, "i", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](134, "a", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](135, "i", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](136, "tr")(137, "td")(138, "label", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](139, "input", 52)(140, "span", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](141, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](142, " 211.12.0.34 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](143, "td")(144, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](145, "Temporarily block to protect user accounts from internet fraudsters.");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](146, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](147, " 13 Oct 2023 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](148, "td", 53)(149, "div", 54)(150, "a", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](151, "i", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](152, "a", 57)(153, "i", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BanIpAddressComponent_Template_i_click_153_listener() {
            return ctx.confirmColor();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](154, "app-custom-pagination");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](155, "div", 60)(156, "div", 61)(157, "div", 62)(158, "div", 63)(159, "div", 64)(160, "div", 65)(161, "div", 2)(162, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](163, "Add New Ban IP Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](164, "button", 66)(165, "span", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](166, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](167, "div", 68)(168, "form")(169, "div", 9)(170, "div", 18)(171, "div", 69)(172, "label", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](173, "IP Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](174, "input", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](175, "div", 18)(176, "div", 69)(177, "label", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](178, "Reason For Ban");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](179, "textarea", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](180, "div", 18)(181, "div", 73)(182, "span", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](183, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](184, "input", 75)(185, "label", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](186, "div", 77)(187, "button", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](188, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](189, "button", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](190, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](191, "div", 80)(192, "div", 61)(193, "div", 62)(194, "div", 63)(195, "div", 64)(196, "div", 65)(197, "div", 2)(198, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](199, "Edit Ban IP Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](200, "button", 66)(201, "span", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](202, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](203, "div", 68)(204, "form")(205, "div", 9)(206, "div", 18)(207, "div", 69)(208, "label", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](209, "IP Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](210, "input", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](211, "div", 18)(212, "div", 69)(213, "label", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](214, "Reason For Ban");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](215, "textarea", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](216, "div", 18)(217, "div", 73)(218, "span", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](219, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](220, "input", 83)(221, "label", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](222, "div", 77)(223, "button", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](224, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](225, "button", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](226, "Save Changes");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](13, !ctx.isCollapsed ? 13 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](14, ctx.isCollapsed ? 14 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx.selectedList1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](8, _c1, ctx.filter, !ctx.filter));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](11, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx.selectedList1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_2__.CustomPaginationComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltip, _common_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.SettingsSidebarComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 23980:
/*!*****************************************************************************************!*\
  !*** ./src/app/core-component/settings/other-settings/other-settings-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OtherSettingsRoutingModule: () => (/* binding */ OtherSettingsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _other_settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./other-settings.component */ 86714);
/* harmony import */ var _ban_ip_address_ban_ip_address_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ban-ip-address/ban-ip-address.component */ 73519);
/* harmony import */ var _storage_settings_storage_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage-settings/storage-settings.component */ 15749);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);






const routes = [{
  path: '',
  component: _other_settings_component__WEBPACK_IMPORTED_MODULE_0__.OtherSettingsComponent,
  children: [{
    path: 'ban-ip-address',
    component: _ban_ip_address_ban_ip_address_component__WEBPACK_IMPORTED_MODULE_1__.BanIpAddressComponent
  }, {
    path: 'storage-settings',
    component: _storage_settings_storage_settings_component__WEBPACK_IMPORTED_MODULE_2__.StorageSettingsComponent
  }]
}];
class OtherSettingsRoutingModule {
  static {
    this.ɵfac = function OtherSettingsRoutingModule_Factory(t) {
      return new (t || OtherSettingsRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: OtherSettingsRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](OtherSettingsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 86714:
/*!************************************************************************************!*\
  !*** ./src/app/core-component/settings/other-settings/other-settings.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OtherSettingsComponent: () => (/* binding */ OtherSettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);


class OtherSettingsComponent {
  static {
    this.ɵfac = function OtherSettingsComponent_Factory(t) {
      return new (t || OtherSettingsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OtherSettingsComponent,
      selectors: [["app-other-settings"]],
      decls: 1,
      vars: 0,
      template: function OtherSettingsComponent_Template(rf, ctx) {
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

/***/ 2509:
/*!*********************************************************************************!*\
  !*** ./src/app/core-component/settings/other-settings/other-settings.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OtherSettingsModule: () => (/* binding */ OtherSettingsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _other_settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./other-settings-routing.module */ 23980);
/* harmony import */ var _other_settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./other-settings.component */ 86714);
/* harmony import */ var _ban_ip_address_ban_ip_address_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ban-ip-address/ban-ip-address.component */ 73519);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _storage_settings_storage_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage-settings/storage-settings.component */ 15749);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);







class OtherSettingsModule {
  static {
    this.ɵfac = function OtherSettingsModule_Factory(t) {
      return new (t || OtherSettingsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: OtherSettingsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _other_settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtherSettingsRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.sharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](OtherSettingsModule, {
    declarations: [_other_settings_component__WEBPACK_IMPORTED_MODULE_1__.OtherSettingsComponent, _ban_ip_address_ban_ip_address_component__WEBPACK_IMPORTED_MODULE_2__.BanIpAddressComponent, _storage_settings_storage_settings_component__WEBPACK_IMPORTED_MODULE_4__.StorageSettingsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _other_settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtherSettingsRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.sharedModule]
  });
})();

/***/ }),

/***/ 15749:
/*!*******************************************************************************************************!*\
  !*** ./src/app/core-component/settings/other-settings/storage-settings/storage-settings.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageSettingsComponent: () => (/* binding */ StorageSettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_service_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/service/sidebar/sidebar.service */ 79950);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _common_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/settings-sidebar/settings-sidebar.component */ 42362);





function StorageSettingsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 7);
  }
}
function StorageSettingsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 8);
  }
}
class StorageSettingsComponent {
  constructor(sidebar) {
    this.sidebar = sidebar;
    this.isCollapsed = false;
  }
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  static {
    this.ɵfac = function StorageSettingsComponent_Factory(t) {
      return new (t || StorageSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_service_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_0__.SidebarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: StorageSettingsComponent,
      selectors: [["app-storage-settings"]],
      decls: 114,
      vars: 2,
      consts: [[1, "page-header", "settings-pg-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "feather", "icon-rotate-ccw", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "feather", "icon-chevron-up", "feather-chevron-up"], [1, "feather", "icon-chevron-down", "feather-chevron-down"], [1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "settings-page-wrap"], [1, "setting-title"], [1, "page-header", "text-end", "justify-content-end"], ["href", "javascript:void(0);", 1, "btn-added", "btn-primary"], [1, "feather", "icon-mail", "me-2"], [1, "col-xxl-4", "col-lg-6", "col-md-4", "col-sm-6", "d-flex"], [1, "connected-app-card", "d-flex", "w-100"], [1, "w-100", "d-flex", "justify-content-between", "align-items-center"], [1, "storage-icon", "mb-0"], [1, "system-app-icon"], ["src", "assets/img/icons/storage-icon-01.svg", "alt", ""], [1, "setting-gateway", "d-flex", "align-items-center"], ["href", "javascript:void(0);"], [1, "feather", "icon-settings", "me-2"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center", "ms-2"], ["type", "checkbox", "id", "user1", "checked", "", 1, "check"], ["for", "user1", 1, "checktoggle"], [1, "col-xl-4", "col-lg-6", "col-md-4", "col-sm-6", "d-flex"], ["src", "assets/img/icons/storage-icon-02.svg", "alt", ""], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#aws-config"], ["type", "checkbox", "id", "user2", "checked", "", 1, "check"], ["for", "user2", 1, "checktoggle"], ["id", "aws-config", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "custom-modal-two"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header", "border-0", "custom-modal-header"], [1, "w-100", "status-toggle", "modal-status", "d-flex", "justify-content-end", "align-items-center", "ms-auto", "me-2"], ["type", "checkbox", "id", "user4", "checked", "", 1, "check"], ["for", "user4", 1, "checktoggle"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body"], [1, "col-lg-12"], [1, "mb-3"], [1, "form-label"], ["type", "text", 1, "form-control"], [1, "mb-0"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit"]],
      template: function StorageSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Manage your settings on portal");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul", 3)(8, "li")(9, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li")(12, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StorageSettingsComponent_Template_a_click_12_listener() {
            return ctx.toggleCollapse();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, StorageSettingsComponent_Conditional_13_Template, 1, 0, "i", 7)(14, StorageSettingsComponent_Conditional_14_Template, 1, 0, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9)(16, "div", 10)(17, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "app-settings-sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "div", 13)(21, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Storage");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14)(24, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Send test email");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 9)(28, "div", 17)(29, "div", 18)(30, "ul", 19)(31, "li", 20)(32, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "img", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Local Storage");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "li", 23)(37, "a", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "input", 27)(41, "label", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 29)(43, "div", 18)(44, "ul", 19)(45, "li", 20)(46, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "img", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "AWS");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "li", 23)(51, "a", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "input", 32)(55, "label", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 34)(57, "div", 35)(58, "div", 36)(59, "div", 37)(60, "div", 38)(61, "div", 39)(62, "div", 2)(63, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "AWS Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "input", 41)(67, "label", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "button", 43)(69, "span", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 45)(72, "form")(73, "div", 9)(74, "div", 46)(75, "div", 47)(76, "label", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "AWS Access Key ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "input", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 46)(82, "div", 47)(83, "label", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "Secret Key ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "input", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 46)(89, "div", 47)(90, "label", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, " Bucket Name ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](94, "input", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 46)(96, "div", 47)(97, "label", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, " Region ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](101, "input", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 46)(103, "div", 50)(104, "label", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, " Base URL ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](108, "input", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "div", 51)(110, "button", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "button", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](13, !ctx.isCollapsed ? 13 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](14, ctx.isCollapsed ? 14 : -1);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltip, _common_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SettingsSidebarComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_settings_other-settings_other-settings_module_ts.js.map