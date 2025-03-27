"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_sales_sales_module_ts"],{

/***/ 38739:
/*!*************************************************************************!*\
  !*** ./src/app/core-component/sales/sales-list/sales-list.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesListComponent: () => (/* binding */ SalesListComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/core.index */ 82351);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.index */ 31287);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _core_component_pages_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core-component/pages/profile/profile.service */ 43431);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 22047);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/custom-pagination/custom-pagination.component */ 14860);














const _c0 = (a0, a1, a2) => ({
  "text-success": a0,
  "text-warning": a1,
  "text-danger": a2
});
const _c1 = () => [];
function SalesListComponent_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SalesListComponent_button_17_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.clearSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Searched Query: ", ctx_r1.savedSearchText, " \u2716 ");
  }
}
function SalesListComponent_div_18_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stat_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", stat_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", stat_r4.value, " ");
  }
}
function SalesListComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Filter by Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SalesListComponent_div_18_Template_mat_select_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.selectedPickupStatusFilter, $event) || (ctx_r1.selectedPickupStatusFilter = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function SalesListComponent_div_18_Template_mat_select_selectionChange_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.filterRoles());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SalesListComponent_div_18_mat_option_4_Template, 2, 2, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selectedPickupStatusFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.statusOptions);
  }
}
function SalesListComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " No data found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function SalesListComponent_For_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td")(11, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td")(14, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td", 19)(17, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SalesListComponent_For_40_Template_a_click_17_listener() {
      const data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.viewDonation(data_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const data_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r6.product_details.product_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r6.product_details.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", data_r6.donation.user_details.first_name + " " + data_r6.donation.user_details.last_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](9, 8, data_r6.donation.donated_date, "yyyy-MM-dd HH:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", "badge-bgsuccess py-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r6.donation_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", "badge-bgsuccess py-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r6.pickup_status);
  }
}
function SalesListComponent_div_42_img_125_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 58);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r1.singleProduct.product_details.images[0].product_img_url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function SalesListComponent_div_42_th_146_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function SalesListComponent_div_42_option_155_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const condition_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", condition_r8.condition_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", condition_r8.condition, " ");
  }
}
function SalesListComponent_div_42_div_156_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "small", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Condition is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function SalesListComponent_div_42_td_157_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td")(1, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.conditionsForm.invalid);
  }
}
function SalesListComponent_div_42_h5_181_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h5", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Product Tracking History ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function SalesListComponent_div_42_table_182_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const history_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](history_r9 == null ? null : history_r9.pickup_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](history_r9 == null ? null : history_r9.donation_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](7, 4, history_r9 == null ? null : history_r9.status_date, "yyyy-MM-dd HH:mm:ss"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((tmp_7_0 = history_r9 == null ? null : history_r9.notes) !== null && tmp_7_0 !== undefined ? tmp_7_0 : "No additional notes");
  }
}
function SalesListComponent_div_42_table_182_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 45)(1, "thead", 51)(2, "tr")(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Pickup Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Donation Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Status Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, SalesListComponent_div_42_table_182_tr_12_Template, 10, 7, "tr", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.singleProduct.product_tracking_history);
  }
}
function SalesListComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 32)(1, "div", 33)(2, "div", 34)(3, "div", 35)(4, "div", 36)(5, "div", 37)(6, "div", 1)(7, "div", 38)(8, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div")(11, "div", 39)(12, "div", 4)(13, "form")(14, "div", 40)(15, "div", 41)(16, "div", 42)(17, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Customer Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "p")(20, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "User Reg Id: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "User Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "User Email: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "User Contact: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 42)(37, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Pickup Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Contact: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Address Line 1: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "Address Line 2: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "Land Mark: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](57, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "City: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](61, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "Pin Code: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](65, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 42)(67, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "Warehouse Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "p")(70, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, "ID: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](73, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "Warehouse Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](77, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79, "Contact: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](81, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83, "Email: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](85, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](87, "Address Line 1: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](89, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, "Address Line 2: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](93, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95, "City: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](97, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](99, "Pin Code: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](101, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](103, "State: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](105, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](106, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "div", 39)(108, "div", 4)(109, "div", 43)(110, "div", 44)(111, "table", 45)(112, "thead", 46)(113, "tr")(114, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](115, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](117, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](118, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](119, "Pickup Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](121, "Donation Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "tbody")(123, "tr")(124, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](125, SalesListComponent_div_42_img_125_Template, 1, 1, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](126, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](127, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](128);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](130);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](131, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](132);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](133, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](134);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](135, "div")(136, "h5", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](137, "Product Condition");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](138, "form", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function SalesListComponent_div_42_Template_form_ngSubmit_138_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onSubmitCondition());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](139, "table", 45)(140, "thead", 51)(141, "tr")(142, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](143, "User Condition");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](144, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](145, "Admin Condition");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](146, SalesListComponent_div_42_th_146_Template, 2, 0, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](147, "tbody")(148, "tr")(149, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](150);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](151, "td")(152, "select", 54)(153, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](154, " Select a condition ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](155, SalesListComponent_div_42_option_155_Template, 2, 2, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](156, SalesListComponent_div_42_div_156_Template, 3, 0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](157, SalesListComponent_div_42_td_157_Template, 3, 1, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](158, "h5", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](159, "Pickup Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](160, "table", 45)(161, "thead", 51)(162, "tr")(163, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](164, "Pickup Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](165, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](166, "Scheduled Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](167, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](168, "Pickup Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](169, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](170, "Warehouse Delivery Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](171, "tbody")(172, "tr")(173, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](174);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](175, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](176);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](177, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](178);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](179, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](180);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](181, SalesListComponent_div_42_h5_181_Template, 2, 0, "h5", 56)(182, SalesListComponent_div_42_table_182_Template, 13, 1, "table", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    let tmp_17_0;
    let tmp_18_0;
    let tmp_19_0;
    let tmp_20_0;
    let tmp_21_0;
    let tmp_32_0;
    let tmp_34_0;
    let tmp_35_0;
    let tmp_36_0;
    let tmp_37_0;
    let tmp_38_0;
    let tmp_39_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Product ID : ", ctx_r1.singleProduct.product_details.product_id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.user_details == null ? null : ctx_r1.singleProduct.donation.user_details.user_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.user_details == null ? null : ctx_r1.singleProduct.donation.user_details.first_name, " ", ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.user_details == null ? null : ctx_r1.singleProduct.donation.user_details.last_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", (tmp_4_0 = ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.user_details == null ? null : ctx_r1.singleProduct.donation.user_details.email) !== null && tmp_4_0 !== undefined ? tmp_4_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", (tmp_5_0 = ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.user_details == null ? null : ctx_r1.singleProduct.donation.user_details.phone_number) !== null && tmp_5_0 !== undefined ? tmp_5_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.pickup_address == null ? null : ctx_r1.singleProduct.donation.pickup_address.first_name, " ", ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.pickup_address == null ? null : ctx_r1.singleProduct.donation.pickup_address.last_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.pickup_address == null ? null : ctx_r1.singleProduct.donation.pickup_address.country_code, " ", (tmp_7_0 = ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.pickup_address == null ? null : ctx_r1.singleProduct.donation.pickup_address.phone_number) !== null && tmp_7_0 !== undefined ? tmp_7_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", (tmp_8_0 = ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.pickup_address == null ? null : ctx_r1.singleProduct.donation.pickup_address.address_line1) !== null && tmp_8_0 !== undefined ? tmp_8_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", (tmp_9_0 = ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.pickup_address == null ? null : ctx_r1.singleProduct.donation.pickup_address.address_line2) !== null && tmp_9_0 !== undefined ? tmp_9_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", (tmp_10_0 = ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.pickup_address == null ? null : ctx_r1.singleProduct.donation.pickup_address.land_mark) !== null && tmp_10_0 !== undefined ? tmp_10_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", (tmp_11_0 = ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.pickup_address == null ? null : ctx_r1.singleProduct.donation.pickup_address.city) !== null && tmp_11_0 !== undefined ? tmp_11_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", (tmp_12_0 = ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.pickup_address == null ? null : ctx_r1.singleProduct.donation.pickup_address.pin_code) !== null && tmp_12_0 !== undefined ? tmp_12_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (tmp_13_0 = ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.designated_warehouse == null ? null : ctx_r1.singleProduct.donation.designated_warehouse.warehouse_id) !== null && tmp_13_0 !== undefined ? tmp_13_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", (tmp_14_0 = ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.designated_warehouse == null ? null : ctx_r1.singleProduct.donation.designated_warehouse.warehouse_name) !== null && tmp_14_0 !== undefined ? tmp_14_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.designated_warehouse == null ? null : ctx_r1.singleProduct.donation.designated_warehouse.country_code, " ", (tmp_15_0 = ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.designated_warehouse == null ? null : ctx_r1.singleProduct.donation.designated_warehouse.phone_number) !== null && tmp_15_0 !== undefined ? tmp_15_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.designated_warehouse == null ? null : ctx_r1.singleProduct.donation.designated_warehouse.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", (tmp_17_0 = ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.designated_warehouse == null ? null : ctx_r1.singleProduct.donation.designated_warehouse.address_line1) !== null && tmp_17_0 !== undefined ? tmp_17_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", (tmp_18_0 = ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.designated_warehouse == null ? null : ctx_r1.singleProduct.donation.designated_warehouse.address_line2) !== null && tmp_18_0 !== undefined ? tmp_18_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", (tmp_19_0 = ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.designated_warehouse == null ? null : ctx_r1.singleProduct.donation.designated_warehouse.city) !== null && tmp_19_0 !== undefined ? tmp_19_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", (tmp_20_0 = ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.designated_warehouse == null ? null : ctx_r1.singleProduct.donation.designated_warehouse.pin_code) !== null && tmp_20_0 !== undefined ? tmp_20_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", (tmp_21_0 = ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.designated_warehouse == null ? null : ctx_r1.singleProduct.donation.designated_warehouse.state) !== null && tmp_21_0 !== undefined ? tmp_21_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.singleProduct.product_details.images.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.singleProduct.product_details.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.singleProduct.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.singleProduct.pickup_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.singleProduct.donation_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r1.conditionsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.userRole == "Platform Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](43, _c0, ctx_r1.singleProduct.product_condition_approval_status.user_condition.condition === "New", ctx_r1.singleProduct.product_condition_approval_status.user_condition.condition === "Used - Good", ctx_r1.singleProduct.product_condition_approval_status.user_condition.condition === "Damaged"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.singleProduct.product_condition_approval_status.user_condition.condition, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.conditionOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_32_0 = ctx_r1.conditionsForm.get("condition_id")) == null ? null : tmp_32_0.invalid) && ((tmp_32_0 = ctx_r1.conditionsForm.get("condition_id")) == null ? null : tmp_32_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.userRole == "Platform Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (tmp_34_0 = ctx_r1.singleProduct.pickup_details == null ? null : ctx_r1.singleProduct.pickup_details.pickup_status) !== null && tmp_34_0 !== undefined ? tmp_34_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (tmp_35_0 = ctx_r1.singleProduct.pickup_details == null ? null : ctx_r1.singleProduct.pickup_details.scheduled_date) !== null && tmp_35_0 !== undefined ? tmp_35_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (tmp_36_0 = ctx_r1.singleProduct.pickup_details == null ? null : ctx_r1.singleProduct.pickup_details.pickup_date) !== null && tmp_36_0 !== undefined ? tmp_36_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (tmp_37_0 = ctx_r1.singleProduct.pickup_details == null ? null : ctx_r1.singleProduct.pickup_details.warehouse_delivery_date) !== null && tmp_37_0 !== undefined ? tmp_37_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_38_0 = ctx_r1.singleProduct.product_tracking_history) !== null && tmp_38_0 !== undefined ? tmp_38_0 : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](47, _c1)).length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_39_0 = ctx_r1.singleProduct.product_tracking_history) !== null && tmp_39_0 !== undefined ? tmp_39_0 : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](48, _c1)).length > 0);
  }
}
class SalesListComponent {
  constructor(data, paginationService, router, sidebar, fb, profileService) {
    this.data = data;
    this.paginationService = paginationService;
    this.router = router;
    this.sidebar = sidebar;
    this.fb = fb;
    this.profileService = profileService;
    this.initChecked = false;
    this.selectedValue1 = '';
    this.selectedValue2 = '';
    this.selectedValue3 = '';
    this.selectedValue4 = '';
    this.selectedValue5 = '';
    this.selectedValue6 = '';
    this.selectedValue7 = '';
    this.selectedValue8 = '';
    this.selectedValue9 = '';
    this.selectedValue10 = '';
    this.selectedValue11 = '';
    this.selectedValue12 = '';
    this.routes = src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.routes;
    this.selectedList1 = [{
      value: 'Sort by Date'
    }, {
      value: '07 09 23'
    }, {
      value: '21 09 23'
    }];
    this.selectedList2 = [{
      value: 'Choose Customer Name'
    }, {
      value: 'Macbook pro'
    }, {
      value: 'Orange'
    }];
    this.selectedList3 = [{
      value: 'Choose Status'
    }, {
      value: 'Computers'
    }, {
      value: 'Fruits'
    }];
    this.selectedList4 = [{
      value: 'Choose Payment Status'
    }, {
      value: 'Computers'
    }, {
      value: 'Fruits'
    }];
    this.selectedList5 = [{
      value: 'Choose'
    }, {
      value: 'Customer Name'
    }];
    this.selectedList6 = [{
      value: 'Choose'
    }, {
      value: 'Supplier Name'
    }];
    this.selectedList7 = [{
      value: 'Choose'
    }, {
      value: 'Completed'
    }, {
      value: 'Inprogress'
    }];
    this.selectedList8 = [{
      value: 'Thomas'
    }, {
      value: 'Name'
    }];
    this.selectedList9 = [{
      value: 'Dazzle Shoes'
    }, {
      value: 'Supplier Name'
    }];
    this.selectedList10 = [{
      value: 'Choose'
    }, {
      value: 'Completed'
    }, {
      value: 'Inprogress'
    }];
    this.selectedList11 = [{
      value: 'Choose'
    }, {
      value: 'Online'
    }, {
      value: 'Cash'
    }];
    this.selectedList12 = [{
      value: 'Cash'
    }, {
      value: 'Online'
    }, {
      value: 'Inprogress'
    }];
    this.conditionOptions = [];
    this.conditionStatusOptions = [{
      label: 'PENDING',
      value: 'PENDING'
    }, {
      label: 'APPROVED',
      value: 'APPROVED'
    }, {
      label: 'UPGRADED',
      value: 'UPGRADED'
    }, {
      label: 'DOWNGRADED',
      value: 'DOWNGRADED'
    }];
    this.statusOptions = [{
      label: 'All',
      value: 'All'
    }, {
      label: 'Pickup Generated',
      value: 'Pickup Generated'
    }, {
      label: 'Pickup Pending',
      value: 'Pickup Pending'
    }, {
      label: 'In Progress',
      value: 'In Progress'
    }, {
      label: 'Items Completed',
      value: 'Items Completed'
    }, {
      label: 'Completed',
      value: 'Completed'
    }, {
      label: 'Items Collected',
      value: 'Items Collected'
    }, {
      label: 'Failed',
      value: 'Failed'
    }, {
      label: 'Cancelled',
      value: 'Cancelled'
    }];
    // pagination variables
    this.tableData = [];
    this.singleProduct = {};
    this.pageSize = 10;
    this.serialNumberArray = [];
    this.totalData = 0;
    this.showFilter = false;
    this.searchDataValue = '';
    //** / pagination variables
    this.expandedIndex = null;
    this.showScheduledDate = false;
    this.selectedPickupStatusFilter = 'All';
    this.userRole = "";
    this.filterSearchText = '';
    this.savedSearchText = '';
    this.page = 1;
    this.isCollapsed = false;
    this.filter = false;
    this.cartValue = [2, 2, 2, 2, 2, 2, 2, 2];
    this.statusForm = this.fb.group({
      status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      notes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      scheduled_date: ['']
    });
    this.conditionsForm = this.fb.group({
      // description: ['', Validators.required],
      // status: ['', Validators.required],
      condition_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
    });
    this.getTableData();
  }
  getTableData(stat) {
    this.data.getDonationList(this.page, stat, this.savedSearchText).subscribe(apiRes => {
      this.tableData = [];
      apiRes.results.products.forEach((res, index) => {
        this.tableData.push({
          ...res
        });
      });
      console.log(apiRes.results.pagination);
      this.paginationService.setPaginationData(apiRes.results.pagination);
      this.pagination = this.paginationService.getPaginationData();
    });
  }
  viewDonation(data) {
    this.statusForm.reset();
    this.conditionsForm.reset();
    this.singleProduct = data;
    this.data.getSubcategoryConditions(data.product_details.subcategories.subcategory_id).subscribe({
      next: apiRes => {
        this.conditionOptions = apiRes.results;
        if (this.singleProduct.product_condition_approval_status.admin_condition != null) {
          this.conditionsForm.patchValue({
            condition_id: this.singleProduct.product_condition_approval_status.admin_condition.condition_id
            // status:
            //   this.singleProduct.product_condition_approval_status.approval_status,
            // description:
            //   this.singleProduct.product_condition_approval_status
            //     .approval_status_description,
          });
        } else {
          this.conditionsForm.patchValue({
            status: 'PENDING'
          });
        }
      },
      error: err => {
        this.conditionsForm.get('condition_id')?.disable();
        // this.conditionsForm.get('status')?.disable();
        // this.conditionsForm.get('description')?.disable();
      }
    });
  }
  updateStatusForm(data) {
    this.singleProduct = data;
    this.statusForm.patchValue({
      status: data.pickup_status
    });
  }
  ngOnInit() {
    this.loadUserProfile();
  }
  loadUserProfile() {
    this.profileService.getProfile().subscribe(data => {
      this.userRole = data.results.user_role.role_name;
    });
  }
  onSubmitCondition() {
    if (this.conditionsForm.valid) {
      this.data.updateDonationCondition(this.singleProduct.donated_product_id, this.conditionsForm.value).subscribe(response => {
        this.getTableData();
        // Reset form after submission
        this.statusForm.reset();
        // Close the modal using Bootstrap's API
        const modalElement = document.getElementById('product-details-modal');
        if (modalElement) {
          const modal = bootstrap.Modal.getInstance(modalElement);
          modal.hide();
        }
      }, error => {
        console.error('Error creating user', error);
      });
    }
  }
  onStatusChange(event) {
    const selectedStatus = event.target.value;
    const scheduledDateControl = this.statusForm.get('scheduled_date');
    if (selectedStatus === 'Pickup Scheduled' || selectedStatus === 'Pickup Pending Scheduling') {
      this.showScheduledDate = true;
      scheduledDateControl?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]);
    } else {
      this.showScheduledDate = false;
      scheduledDateControl?.clearValidators();
      scheduledDateControl?.setValue(''); // Reset value
    }
    // **Ensure the form updates validation state**
    scheduledDateControl?.updateValueAndValidity();
  }
  approveCondition(product) {
    product.product_condition_approval_status.user_condition.condition = product.newCondition;
    console.log('Approved Condition:', product.newCondition);
    alert(`Condition approved: ${product.newCondition}`);
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
  toggleDetails(index) {
    // this.expandedIndex = this.expandedIndex === index ? null : index;
    // const subcategoryId =
    //   this.singleDonation.donated_products[index].product_details.subcategories
    //     .subcategory_id;
    //   this.data.getSubcategoryConditions(subcategoryId).subscribe({
    //     next: (apiRes: any) => {
    //       this.conditionOptions = apiRes.results;
    //       if (
    //         this.singleDonation.donated_products[index]
    //           .product_condition_approval_status.admin_condition != null
    //       ) {
    //         this.conditionsForm.patchValue({
    //           condition_id:
    //             this.singleDonation.donated_products[index]
    //               .product_condition_approval_status.admin_condition.
    //               condition_id,
    //           status:
    //             this.singleDonation.donated_products[index]
    //               .product_condition_approval_status.approval_status,
    //           description:
    //             this.singleDonation.donated_products[index].product_condition_approval_status
    //               .approval_status_description,
    //         });
    //       } else {
    //         this.conditionsForm.patchValue({
    //           status: 'PENDING',
    //         });
    //       }
    //     },
    //     error: (err) => {
    //       this.conditionsForm.get('condition_id')?.disable();
    //       this.conditionsForm.get('status')?.disable();
    //       this.conditionsForm.get('description')?.disable();
    //     }
    //   });
  }
  filterRoles() {
    this.getTableData(this.selectedPickupStatusFilter);
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
  searchData(value) {
    this.dataSource.filter = value.trim().toLowerCase();
    // this.tableData = this.dataSource.filteredData;
  }
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  openFilter() {
    this.filter = !this.filter;
  }
  addPos(i) {
    this.cartValue[i]++;
  }
  reducePos(i) {
    this.cartValue[i]--;
  }
  static {
    this.ɵfac = function SalesListComponent_Factory(t) {
      return new (t || SalesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_1__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_component_pages_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: SalesListComponent,
      selectors: [["app-sales-list"]],
      decls: 43,
      vars: 6,
      consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "card", "table-list-card"], [1, "card-body"], [1, "table-top"], [1, "search-set", "ml-4"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset", 3, "click"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["placeholder", "Search...", 1, "form-control", 3, "ngModelChange", "keydown.enter", "ngModel"], ["class", "btn btn-clear", 3, "click", 4, "ngIf"], ["class", "form-sort", 4, "ngIf"], [1, "table-responsive"], ["matSort", "", 1, "table", "datanew", 3, "matSortChange"], ["mat-sort-header", "customerName"], ["mat-sort-header", "reference"], ["mat-sort-header", "date"], [1, "text-center"], [1, "sales-list"], [3, "pageChange", "pagination"], ["class", "modal fade", "id", "product-details-modal", 4, "ngIf"], [1, "btn", "btn-clear", 3, "click"], [1, "form-sort"], [3, "ngModelChange", "selectionChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["colspan", "6", 1, "text-center", "text-muted"], [1, "badge", 3, "ngClass"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#product-details-modal", 1, "dropdown-item", 3, "click"], [1, "feather", "icon-eye", "info-img"], ["id", "product-details-modal", 1, "modal", "fade"], [1, "modal-dialog", "sales-details-modal"], [1, "modal-content"], [1, "page-wrapper", "details-blk"], [1, "content", "p-0"], [1, "page-header", "p-4", "mb-0"], [1, "page-title", "modal-datail"], [1, "card"], [1, "invoice-box", "table-height", 2, "max-width", "1600px", "width", "100%", "overflow", "auto", "padding", "0", "font-size", "14px", "line-height", "24px", "color", "#555"], [1, "sales-details-items", "d-flex"], [1, "details-item"], [1, "container"], [1, "mb-4"], [1, "table", "table-bordered"], [1, "thead-dark"], ["alt", "Product Image", "class", "img-thumbnail", "width", "50", 3, "src", 4, "ngIf"], [1, "text-muted"], [1, "my-2"], [3, "ngSubmit", "formGroup"], [1, "thead-light"], [4, "ngIf"], [3, "ngClass"], ["formControlName", "condition_id", 1, "form-select"], ["value", "", "disabled", "", "selected", ""], ["class", "my-2", 4, "ngIf"], ["class", "table table-bordered", 4, "ngIf"], ["alt", "Product Image", "width", "50", 1, "img-thumbnail", 3, "src"], [1, "text-danger"], [1, "btn", "btn-success", "btn-sm", 3, "disabled"], [4, "ngFor", "ngForOf"]],
      template: function SalesListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Donation List");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Manage Your Donations");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 3)(8, "div", 4)(9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SalesListComponent_Template_a_click_12_listener() {
            return ctx.onSearchClick();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 10)(15, "label")(16, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SalesListComponent_Template_input_ngModelChange_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.filterSearchText, $event) || (ctx.filterSearchText = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown.enter", function SalesListComponent_Template_input_keydown_enter_16_listener() {
            return ctx.onSearchClick();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, SalesListComponent_button_17_Template, 2, 1, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, SalesListComponent_div_18_Template, 5, 2, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 14)(20, "table", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("matSortChange", function SalesListComponent_Template_table_matSortChange_20_listener($event) {
            return ctx.sortData($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "thead")(22, "tr")(23, "th", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Product Id");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "th", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Title");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "th", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "User Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "th", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Donation Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "th", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Donation Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "th", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Pickup Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "th", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "tbody", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, SalesListComponent_Conditional_38_Template, 3, 0, "tr");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](39, SalesListComponent_For_40_Template, 19, 11, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "app-custom-pagination", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function SalesListComponent_Template_app_custom_pagination_pageChange_41_listener($event) {
            return ctx.onPageChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, SalesListComponent_div_42_Template, 183, 49, "div", 22);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.filterSearchText);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.savedSearchText);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.singleProduct);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](38, (ctx.tableData == null ? null : ctx.tableData.length) === 0 ? 38 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx.tableData);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pagination", ctx.pagination);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.singleProduct);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortHeader, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_3__.CustomPaginationComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 87138:
/*!**************************************************************!*\
  !*** ./src/app/core-component/sales/sales-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesRoutingModule: () => (/* binding */ SalesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _sales_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales.component */ 99676);
/* harmony import */ var _sales_list_sales_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sales-list/sales-list.component */ 38739);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);





const routes = [{
  path: '',
  component: _sales_component__WEBPACK_IMPORTED_MODULE_0__.SalesComponent,
  children: [{
    path: 'sales-list',
    component: _sales_list_sales_list_component__WEBPACK_IMPORTED_MODULE_1__.SalesListComponent
  }]
}];
class SalesRoutingModule {
  static {
    this.ɵfac = function SalesRoutingModule_Factory(t) {
      return new (t || SalesRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: SalesRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SalesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 99676:
/*!*********************************************************!*\
  !*** ./src/app/core-component/sales/sales.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesComponent: () => (/* binding */ SalesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);


class SalesComponent {
  static {
    this.ɵfac = function SalesComponent_Factory(t) {
      return new (t || SalesComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SalesComponent,
      selectors: [["app-sales"]],
      decls: 1,
      vars: 0,
      template: function SalesComponent_Template(rf, ctx) {
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

/***/ 43851:
/*!******************************************************!*\
  !*** ./src/app/core-component/sales/sales.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesModule: () => (/* binding */ SalesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _sales_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales-routing.module */ 87138);
/* harmony import */ var _sales_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sales.component */ 99676);
/* harmony import */ var _sales_list_sales_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sales-list/sales-list.component */ 38739);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);






class SalesModule {
  static {
    this.ɵfac = function SalesModule_Factory(t) {
      return new (t || SalesModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: SalesModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _sales_routing_module__WEBPACK_IMPORTED_MODULE_0__.SalesRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.sharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SalesModule, {
    declarations: [_sales_component__WEBPACK_IMPORTED_MODULE_1__.SalesComponent, _sales_list_sales_list_component__WEBPACK_IMPORTED_MODULE_2__.SalesListComponent, _sales_list_sales_list_component__WEBPACK_IMPORTED_MODULE_2__.SalesListComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _sales_routing_module__WEBPACK_IMPORTED_MODULE_0__.SalesRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.sharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_sales_sales_module_ts.js.map