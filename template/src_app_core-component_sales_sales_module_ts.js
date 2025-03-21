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
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 98379);
















const _c0 = () => ({
  standalone: true
});
const _c1 = a0 => ({
  "table-success": a0
});
const _c2 = (a0, a1, a2) => ({
  "text-success": a0,
  "text-warning": a1,
  "text-danger": a2
});
const _c3 = () => [];
function SalesListComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 12);
  }
}
function SalesListComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 13);
  }
}
function SalesListComponent_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SalesListComponent_button_34_Template_button_click_0_listener() {
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
function SalesListComponent_mat_option_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stat_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", stat_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", stat_r3.value, " ");
  }
}
function SalesListComponent_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " No data found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function SalesListComponent_For_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td")(9, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td")(12, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td", 34)(17, "a", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "i", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "ul", 115)(20, "li")(21, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SalesListComponent_For_64_Template_a_click_21_listener() {
      const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.viewDonation(data_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Donation Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "li")(25, "a", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SalesListComponent_For_64_Template_a_click_25_listener() {
      const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.viewDonation(data_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Products Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r5.donation_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", data_r5.user_details.first_name + " " + data_r5.user_details.last_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](7, 8, data_r5.donated_date, "yyyy-MM-dd HH:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", "badge-bgsuccess py-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r5.donation_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", "badge-bgsuccess py-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r5.pickup_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r5.donated_products.length);
  }
}
function SalesListComponent_For_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", data_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", data_r6.value, " ");
  }
}
function SalesListComponent_For_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", data_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", data_r7.value, " ");
  }
}
function SalesListComponent_For_196_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", data_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", data_r8.value, " ");
  }
}
function SalesListComponent_tr_379_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 120)(1, "td");
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
    const first_r10 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c1, first_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](history_r9.donation_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](history_r9.pickup_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](7, 5, history_r9.status_date, "yyyy-MM-dd HH:mm:ss"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((tmp_7_0 = history_r9.notes) !== null && tmp_7_0 !== undefined ? tmp_7_0 : "No additional notes");
  }
}
function SalesListComponent_div_403_div_6_img_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 128);
  }
  if (rf & 2) {
    const product_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", product_r12.product_details.images[0].product_img_url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function SalesListComponent_div_403_div_6_div_30_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function SalesListComponent_div_403_div_6_div_30_option_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const condition_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", condition_r15.condition_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", condition_r15.condition, " ");
  }
}
function SalesListComponent_div_403_div_6_div_30_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "small", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Condition is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function SalesListComponent_div_403_div_6_div_30_option_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const statusCondition_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", statusCondition_r16.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", statusCondition_r16.label, " ");
  }
}
function SalesListComponent_div_403_div_6_div_30_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "small", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Status is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function SalesListComponent_div_403_div_6_div_30_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "small", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Description is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function SalesListComponent_div_403_div_6_div_30_td_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td")(1, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.conditionsForm.invalid);
  }
}
function SalesListComponent_div_403_div_6_div_30_h5_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h5", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Product Tracking History ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function SalesListComponent_div_403_div_6_div_30_table_60_tr_12_Template(rf, ctx) {
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
    let tmp_11_0;
    const history_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](history_r17 == null ? null : history_r17.pickup_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](history_r17 == null ? null : history_r17.donation_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](7, 4, history_r17 == null ? null : history_r17.status_date, "yyyy-MM-dd HH:mm:ss"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((tmp_11_0 = history_r17 == null ? null : history_r17.notes) !== null && tmp_11_0 !== undefined ? tmp_11_0 : "No additional notes");
  }
}
function SalesListComponent_div_403_div_6_div_30_table_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 89)(1, "thead", 90)(2, "tr")(3, "th");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, SalesListComponent_div_403_div_6_div_30_table_60_tr_12_Template, 10, 7, "tr", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", product_r12.product_tracking_history);
  }
}
function SalesListComponent_div_403_div_6_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 129)(1, "h5", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Product Condition");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "form", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function SalesListComponent_div_403_div_6_div_30_Template_form_ngSubmit_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onSubmitCondition());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "table", 89)(5, "thead", 90)(6, "tr")(7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "User Condition");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Admin Condition");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, SalesListComponent_div_403_div_6_div_30_th_15_Template, 2, 0, "th", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "tbody")(17, "tr")(18, "td", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "td")(21, "select", 131)(22, "option", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Select a condition ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, SalesListComponent_div_403_div_6_div_30_option_24_Template, 2, 2, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, SalesListComponent_div_403_div_6_div_30_div_25_Template, 3, 0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "td")(27, "select", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function SalesListComponent_div_403_div_6_div_30_Template_select_change_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onStatusChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "option", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Select a status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, SalesListComponent_div_403_div_6_div_30_option_30_Template, 2, 2, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, SalesListComponent_div_403_div_6_div_30_div_31_Template, 3, 0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "textarea", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, SalesListComponent_div_403_div_6_div_30_div_34_Template, 3, 0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, SalesListComponent_div_403_div_6_div_30_td_35_Template, 3, 1, "td", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "h5", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Pickup Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "table", 89)(39, "thead", 90)(40, "tr")(41, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Pickup Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Scheduled Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Pickup Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Warehouse Delivery Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "tbody")(50, "tr")(51, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](59, SalesListComponent_div_403_div_6_div_30_h5_59_Template, 2, 0, "h5", 134)(60, SalesListComponent_div_403_div_6_div_30_table_60_Template, 13, 1, "table", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_15_0;
    let tmp_16_0;
    let tmp_17_0;
    let tmp_18_0;
    let tmp_19_0;
    let tmp_20_0;
    const product_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r1.conditionsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.userRole == "Platform Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](16, _c2, product_r12.product_condition_approval_status.user_condition.condition === "New", product_r12.product_condition_approval_status.user_condition.condition === "Used - Good", product_r12.product_condition_approval_status.user_condition.condition === "Damaged"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", product_r12.product_condition_approval_status.user_condition.condition, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.conditionOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_10_0 = ctx_r1.conditionsForm.get("condition_id")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r1.conditionsForm.get("condition_id")) == null ? null : tmp_10_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.conditionStatusOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_12_0 = ctx_r1.conditionsForm.get("status")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx_r1.conditionsForm.get("status")) == null ? null : tmp_12_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_13_0 = ctx_r1.conditionsForm.get("description")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx_r1.conditionsForm.get("description")) == null ? null : tmp_13_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.userRole == "Platform Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (tmp_15_0 = product_r12.pickup_details == null ? null : product_r12.pickup_details.pickup_status) !== null && tmp_15_0 !== undefined ? tmp_15_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (tmp_16_0 = product_r12.pickup_details == null ? null : product_r12.pickup_details.scheduled_date) !== null && tmp_16_0 !== undefined ? tmp_16_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (tmp_17_0 = product_r12.pickup_details == null ? null : product_r12.pickup_details.pickup_date) !== null && tmp_17_0 !== undefined ? tmp_17_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (tmp_18_0 = product_r12.pickup_details == null ? null : product_r12.pickup_details.warehouse_delivery_date) !== null && tmp_18_0 !== undefined ? tmp_18_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_19_0 = product_r12.product_tracking_history) !== null && tmp_19_0 !== undefined ? tmp_19_0 : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](20, _c3)).length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_20_0 = product_r12.product_tracking_history) !== null && tmp_20_0 !== undefined ? tmp_20_0 : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](21, _c3)).length > 0);
  }
}
function SalesListComponent_div_403_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 123)(1, "table", 89)(2, "thead", 93)(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Pickup Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Donation Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "tbody")(15, "tr")(16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, SalesListComponent_div_403_div_6_img_17_Template, 1, 1, "img", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "p", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "td")(28, "button", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SalesListComponent_div_403_div_6_Template_button_click_28_listener() {
      const i_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.toggleDetails(i_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, SalesListComponent_div_403_div_6_div_30_Template, 61, 22, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", product_r12.product_details.images.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", product_r12.product_details.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](product_r12.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](product_r12.pickup_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](product_r12.donation_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.expandedIndex === i_r13 ? "Hide Details" : "Show Details", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.expandedIndex === i_r13);
  }
}
function SalesListComponent_div_403_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 45)(2, "div", 15)(3, "div", 88)(4, "h4", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Donated Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, SalesListComponent_div_403_div_6_Template, 31, 7, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.singleDonation == null ? null : ctx_r1.singleDonation.donated_products);
  }
}
function SalesListComponent_option_424_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r18.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", option_r18.label, " ");
  }
}
function SalesListComponent_div_425_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "small", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Scheduled date is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function SalesListComponent_div_425_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 102)(1, "div", 48)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Scheduled Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 56)(6, "input", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, SalesListComponent_div_425_div_7_Template, 3, 0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r1.statusForm.get("scheduled_date")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r1.statusForm.get("scheduled_date")) == null ? null : tmp_1_0.touched));
  }
}
function SalesListComponent_div_432_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "small", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Note is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
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
    this.singleDonation = {};
    this.pageSize = 10;
    this.serialNumberArray = [];
    this.totalData = 0;
    this.showFilter = false;
    this.searchDataValue = '';
    //** / pagination variables
    this.expandedIndex = null;
    this.showScheduledDate = false;
    this.selectedPickupStatusFilter = 0;
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
      description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      condition_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
    });
    this.getTableData();
  }
  getTableData(stat) {
    this.data.getDonationList(this.page, stat, this.savedSearchText).subscribe(apiRes => {
      this.tableData = [];
      apiRes.results.donations.forEach((res, index) => {
        this.tableData.push({
          ...res
        });
      });
      this.paginationService.setPaginationData(apiRes.results.pagination);
      this.pagination = this.paginationService.getPaginationData();
    });
  }
  viewDonation(data) {
    this.statusForm.reset();
    this.conditionsForm.reset();
    this.expandedIndex = null;
    this.singleDonation = data;
  }
  updateStatusForm(data) {
    this.singleDonation = data;
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
  onSubmitStatus() {
    if (this.statusForm.valid) {
      this.data.updateDonationStatus(this.singleDonation.donation_id, this.statusForm.value).subscribe(response => {
        this.getTableData();
        // Reset form after submission
        this.statusForm.reset();
        // Close the modal using Bootstrap's API
        const modalElement = document.getElementById('update-status-modal');
        if (modalElement) {
          const modal = bootstrap.Modal.getInstance(modalElement);
          modal.hide();
        }
      }, error => {
        console.error('Error creating user', error);
      });
    }
  }
  onSubmitCondition() {
    if (this.conditionsForm.valid) {
      if (this.expandedIndex !== null) {
        this.data.updateDonationCondition(this.singleDonation.donated_products[this.expandedIndex].donated_product_id, this.conditionsForm.value).subscribe(response => {
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
    this.expandedIndex = this.expandedIndex === index ? null : index;
    const subcategoryId = this.singleDonation.donated_products[index].product_details.subcategories.subcategory_id;
    this.data.getSubcategoryConditions(subcategoryId).subscribe({
      next: apiRes => {
        this.conditionOptions = apiRes.results;
        if (this.singleDonation.donated_products[index].product_condition_approval_status.admin_condition != null) {
          this.conditionsForm.patchValue({
            condition_id: this.singleDonation.donated_products[index].product_condition_approval_status.admin_condition.condition_id,
            status: this.singleDonation.donated_products[index].product_condition_approval_status.approval_status,
            description: this.singleDonation.donated_products[index].product_condition_approval_status.approval_status_description
          });
        } else {
          this.conditionsForm.patchValue({
            status: 'PENDING'
          });
        }
      },
      error: err => {
        this.conditionsForm.get('condition_id')?.disable();
        this.conditionsForm.get('status')?.disable();
        this.conditionsForm.get('description')?.disable();
      }
    });
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
    this.tableData = this.dataSource.filteredData;
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
    this.ɵfac = function SalesListComponent_Factory(t) {
      return new (t || SalesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_1__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_component_pages_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: SalesListComponent,
      selectors: [["app-sales-list"]],
      decls: 439,
      vars: 61,
      consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Pdf", "matTooltipPosition", "above"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Excel", "matTooltipPosition", "above"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Print", "matTooltipPosition", "above"], [1, "feather", "icon-rotate-ccw", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "feather", "icon-chevron-up", "feather-chevron-up"], [1, "feather", "icon-chevron-down", "feather-chevron-down"], [1, "card", "table-list-card"], [1, "card-body"], [1, "table-top"], [1, "search-set", "ml-4"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset", 3, "click"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["placeholder", "Search...", 1, "form-control", 3, "ngModelChange", "ngModel"], ["class", "btn btn-clear", 3, "click", 4, "ngIf"], [1, "search-path"], [1, "form-sort"], [3, "ngModelChange", "selectionChange", "ngModel"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "table-responsive"], ["matSort", "", 1, "table", "datanew", 3, "matSortChange"], ["mat-sort-header", "customerName"], ["mat-sort-header", "reference"], ["mat-sort-header", "date"], [1, "text-center"], [1, "sales-list"], [3, "pageChange", "pagination"], ["id", "add-sales-new", 1, "modal", "fade"], [1, "modal-dialog", "add-centered"], [1, "modal-content"], [1, "page-wrapper", "p-0", "m-0"], [1, "content", "p-0"], [1, "modal-header", "border-0", "custom-modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "card"], [1, "row"], [1, "col-lg-4", "col-sm-6", "col-12"], [1, "input-blocks"], [1, "col-lg-10", "col-sm-10", "col-10"], ["placeholder", "Choose", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "col-lg-2", "col-sm-2", "col-2", "ps-0"], [1, "add-icon"], ["href", "javascript:void(0);", 1, "choose-add"], [1, "feather", "icon-plus-circle", "plus"], [1, "input-groupicon", "calender-input", "date-input1"], [1, "feather", "icon-calendar", "info-img"], ["type", "text", "bsDatepicker", "", "container", ".date-input1", "placeholder", "Choose", 1, "datetimepicker"], [1, "col-lg-12", "col-sm-6", "col-12"], [1, "input-groupicon", "select-code"], ["type", "text", "placeholder", "Please type product code and select"], [1, "addonset"], ["src", "assets/img/icons/qrcode-scan.svg", "alt", "img"], [1, "table-responsive", "no-pagination"], [1, "table", "datanew"], [1, "col-lg-6", "ms-auto"], [1, "total-order", "w-100", "max-widthauto", "m-auto", "mb-4"], [1, "col-lg-3", "col-sm-6", "col-12"], ["type", "text", "value", "0", 1, "p-2"], [1, "input-blocks", "mb-5"], [1, "col-lg-12", "text-end"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "add-cancel", "me-3"], ["type", "submit", 1, "btn", "btn-submit", "add-sale"], ["id", "donation-details-modal", 1, "modal", "fade"], [1, "modal-dialog", "sales-details-modal"], [1, "page-wrapper", "details-blk"], [1, "page-header", "p-4", "mb-0"], [1, "page-title", "modal-datail"], ["data-bs-toggle", "tooltip", "matTooltip", "Edit", "matTooltipPosition", "above", "data-bs-placement", "top", "title", "Pdf"], [1, "feather", "icon-edit", "action-edit", "sales-action"], ["data-bs-toggle", "tooltip", "matTooltip", "Pdf", "matTooltipPosition", "above", "data-bs-placement", "top", "title", "Pdf"], ["data-bs-toggle", "tooltip", "matTooltip", "Excel", "matTooltipPosition", "above", "data-bs-placement", "top", "title", "Excel"], ["data-bs-toggle", "tooltip", "matTooltip", "Print", "matTooltipPosition", "above", "data-bs-placement", "top", "title", "Print"], [1, "feather", "icon-printer", "feather-rotate-ccw"], [1, "invoice-box", "table-height", 2, "max-width", "1600px", "width", "100%", "overflow", "auto", "padding", "0", "font-size", "14px", "line-height", "24px", "color", "#555"], [1, "sales-details-items", "d-flex"], [1, "details-item"], [1, "badge", 3, "ngClass"], [1, "container", "mt-4"], [1, "table", "table-bordered"], [1, "thead-light"], ["colspan", "2", 1, "text-center", "bg-primary", "text-white"], [1, "table", "table-bordered", "mt-4"], [1, "thead-dark"], ["colspan", "4", 1, "text-left", "bg-secondary", "text-white"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["id", "product-details-modal", 1, "modal", "fade"], [4, "ngIf"], ["id", "update-status-modal", "tabindex", "-1", "aria-labelledby", "createpayment", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg", "modal-dialog-centered"], [1, "modal-body", "custom-modal-body"], [3, "ngSubmit", "formGroup"], [1, "col-lg-6"], ["formControlName", "status", "required", "", 1, "form-control", 3, "change"], ["value", "", "disabled", "", "selected", ""], ["class", "col-lg-6", 4, "ngIf"], [1, "col-lg-12"], ["formControlName", "notes", 1, "form-control"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit", 3, "disabled"], [1, "btn", "btn-clear", 3, "click"], ["colspan", "6", 1, "text-center", "text-muted"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "true", 1, "action-set"], ["aria-hidden", "true", 1, "fa", "fa-ellipsis-v"], [1, "dropdown-menu"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#donation-details-modal", 1, "dropdown-item", 3, "click"], [1, "feather", "icon-eye", "info-img"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#product-details-modal", 1, "dropdown-item", 3, "click"], [1, "feather", "icon-edit", "info-img"], [3, "ngClass"], [1, "my-2"], ["class", "mb-4", 4, "ngFor", "ngForOf"], [1, "mb-4"], ["alt", "Product Image", "class", "img-thumbnail", "width", "50", 3, "src", 4, "ngIf"], [1, "text-muted"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], ["class", "bg-light px-2", 4, "ngIf"], ["alt", "Product Image", "width", "50", 1, "img-thumbnail", 3, "src"], [1, "bg-light", "px-2"], [2, "min-width", "100px"], ["formControlName", "condition_id", 1, "form-select"], ["formControlName", "status", 1, "form-select", 3, "change"], ["formControlName", "description"], ["class", "my-2", 4, "ngIf"], ["class", "table table-bordered", 4, "ngIf"], [1, "text-danger"], [1, "btn", "btn-success", "btn-sm", 3, "disabled"], [4, "ngFor", "ngForOf"], [1, "input-groupicon", "calender-input", "date-input3"], ["formControlName", "scheduled_date", "type", "text", "bsDatepicker", "", "container", ".date-input3", "placeholder", "Choose Date", 1, "datetimepicker"]],
      template: function SalesListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Donation List");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Manage Your Donations");
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
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "li")(21, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SalesListComponent_Template_a_click_21_listener() {
            return ctx.toggleCollapse();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, SalesListComponent_Conditional_22_Template, 1, 0, "i", 12)(23, SalesListComponent_Conditional_23_Template, 1, 0, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 14)(25, "div", 15)(26, "div", 16)(27, "div", 17)(28, "div", 18)(29, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SalesListComponent_Template_a_click_29_listener() {
            return ctx.onSearchClick();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 21)(32, "label")(33, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SalesListComponent_Template_input_ngModelChange_33_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.filterSearchText, $event) || (ctx.filterSearchText = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, SalesListComponent_button_34_Template, 2, 1, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 25)(37, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Filter by Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "mat-select", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SalesListComponent_Template_mat_select_ngModelChange_39_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedPickupStatusFilter, $event) || (ctx.selectedPickupStatusFilter = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function SalesListComponent_Template_mat_select_selectionChange_39_listener() {
            return ctx.filterRoles();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "mat-option", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "All");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, SalesListComponent_mat_option_42_Template, 2, 2, "mat-option", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 29)(44, "table", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("matSortChange", function SalesListComponent_Template_table_matSortChange_44_listener($event) {
            return ctx.sortData($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "thead")(46, "tr")(47, "th", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Donation Id");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "th", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "User Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "th", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Donation Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "th", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Donation Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "th", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "Pickup Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "th", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Donated Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "th", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "tbody", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](62, SalesListComponent_Conditional_62_Template, 3, 0, "tr");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](63, SalesListComponent_For_64_Template, 28, 11, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "app-custom-pagination", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function SalesListComponent_Template_app_custom_pagination_pageChange_65_listener($event) {
            return ctx.onPageChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 37)(67, "div", 38)(68, "div", 39)(69, "div", 40)(70, "div", 41)(71, "div", 42)(72, "div", 2)(73, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "Add Sales");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "button", 43)(76, "span", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "div", 45)(79, "div", 15)(80, "form")(81, "div", 46)(82, "div", 47)(83, "div", 48)(84, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](85, "Customer Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "div", 46)(87, "div", 49)(88, "mat-select", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SalesListComponent_Template_mat_select_ngModelChange_88_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue5, $event) || (ctx.selectedValue5 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](89, SalesListComponent_For_90_Template, 2, 2, "mat-option", 27, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "div", 51)(92, "div", 52)(93, "a", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](94, "i", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "div", 47)(96, "div", 48)(97, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98, "Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "div", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](100, "i", 56)(101, "input", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "div", 47)(103, "div", 48)(104, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](105, "Supplier");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "mat-select", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SalesListComponent_Template_mat_select_ngModelChange_106_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue6, $event) || (ctx.selectedValue6 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](107, SalesListComponent_For_108_Template, 2, 2, "mat-option", 27, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "div", 58)(110, "div", 48)(111, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](112, "Product Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](113, "div", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](114, "input", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](115, "div", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](116, "img", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](117, "div", 63)(118, "table", 64)(119, "thead")(120, "tr")(121, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](122, "Product");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](123, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](124, "Qty");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](125, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](126, "Purchase Price($)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](127, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](128, "Discount($)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](130, "Tax(%)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](131, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](132, "Tax Amount($)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](133, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](134, "Unit Cost($)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](135, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](136, "Total Cost(%)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](137, "tbody")(138, "tr");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](139, "td")(140, "td")(141, "td")(142, "td")(143, "td")(144, "td")(145, "td")(146, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](147, "div", 46)(148, "div", 65)(149, "div", 66)(150, "ul")(151, "li")(152, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](153, "Order Tax");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](154, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](155, "$ 0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](156, "li")(157, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](158, "Discount");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](159, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](160, "$ 0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](161, "li")(162, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](163, "Shipping");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](164, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](165, "$ 0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](166, "li")(167, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](168, "Grand Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](169, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](170, "$ 0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](171, "div", 46)(172, "div", 67)(173, "div", 48)(174, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](175, "Order Tax");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](176, "div", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](177, "input", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](178, "div", 67)(179, "div", 48)(180, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](181, "Discount");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](182, "div", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](183, "input", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](184, "div", 67)(185, "div", 48)(186, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](187, "Shipping");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](188, "div", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](189, "input", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](190, "div", 67)(191, "div", 69)(192, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](193, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](194, "mat-select", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SalesListComponent_Template_mat_select_ngModelChange_194_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue7, $event) || (ctx.selectedValue7 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](195, SalesListComponent_For_196_Template, 2, 2, "mat-option", 27, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](197, "div", 70)(198, "button", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](199, " Cancel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](200, "button", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](201, " Submit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](202, "div", 73)(203, "div", 74)(204, "div", 39)(205, "div", 75)(206, "div", 41)(207, "div", 76)(208, "div", 1)(209, "div", 77)(210, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](211);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](212, "ul", 3)(213, "li")(214, "a", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](215, "i", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](216, "li")(217, "a", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](218, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](219, "li")(220, "a", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](221, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](222, "li")(223, "a", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](224, "i", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](225, "div", 45)(226, "div", 15)(227, "form")(228, "div", 84)(229, "div", 85)(230, "div", 86)(231, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](232, "Customer Info");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](233, "p")(234, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](235, "User Reg Id: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](236);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](237, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](238, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](239, "User Name: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](240);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](241, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](242, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](243, "User Email: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](244);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](245, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](246, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](247, "User Contact: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](248);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](249, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](250, "div", 86)(251, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](252, "Pickup Info");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](253, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](254);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](255, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](256, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](257, "Contact: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](258);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](259, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](260, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](261, "Address Line 1: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](262);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](263, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](264, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](265, "Address Line 2: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](266);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](267, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](268, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](269, "Land Mark: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](270);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](271, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](272, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](273, "City: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](274);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](275, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](276, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](277, "Pin Code: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](278);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](279, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](280, "div", 86)(281, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](282, "Warehouse Info");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](283, "p")(284, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](285, "ID: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](286);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](287, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](288, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](289, "Warehouse Name: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](290);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](291, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](292, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](293, "Contact: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](294);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](295, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](296, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](297, "Email: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](298);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](299, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](300, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](301, "Address Line 1: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](302);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](303, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](304, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](305, "Address Line 2: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](306);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](307, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](308, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](309, "City: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](310);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](311, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](312, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](313, "Pin Code: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](314);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](315, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](316, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](317, "State: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](318);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](319, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](320, "div", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](321, "div", 86)(322, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](323, "Donation Info");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](324, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](325, "Donated date: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](326);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](327, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](328, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](329, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](330, "Donated Status: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](331, "span", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](332);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](333, "div", 88)(334, "table", 89)(335, "thead", 90)(336, "tr")(337, "th", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](338, " Current Pickup Status ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](339, "tbody")(340, "tr")(341, "td")(342, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](343, "Pickup Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](344, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](345);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](346, "tr")(347, "td")(348, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](349, "Scheduled Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](350, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](351);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](352, "tr")(353, "td")(354, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](355, "Pickup Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](356, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](357);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](358, "tr")(359, "td")(360, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](361, "Warehouse Delivery Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](362, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](363);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](364, "table", 92)(365, "thead", 93)(366, "tr")(367, "th", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](368, " Donation History ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](369, "tr")(370, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](371, "Donation Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](372, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](373, "Pickup Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](374, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](375, "Status Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](376, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](377, "Notes");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](378, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](379, SalesListComponent_tr_379_Template, 10, 10, "tr", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](380, "div", 96)(381, "div", 74)(382, "div", 39)(383, "div", 75)(384, "div", 41)(385, "div", 76)(386, "div", 1)(387, "div", 77)(388, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](389);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](390, "ul", 3)(391, "li")(392, "a", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](393, "i", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](394, "li")(395, "a", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](396, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](397, "li")(398, "a", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](399, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](400, "li")(401, "a", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](402, "i", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](403, SalesListComponent_div_403_Template, 7, 1, "div", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](404, "div", 98)(405, "div", 99)(406, "div", 39)(407, "div", 42)(408, "div", 2)(409, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](410, "Update Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](411, "button", 43)(412, "span", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](413, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](414, "div", 100)(415, "form", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function SalesListComponent_Template_form_ngSubmit_415_listener() {
            return ctx.onSubmitStatus();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](416, "div", 46)(417, "div", 102)(418, "div", 48)(419, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](420, "New Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](421, "select", 103);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function SalesListComponent_Template_select_change_421_listener($event) {
            return ctx.onStatusChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](422, "option", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](423, "Select Option");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](424, SalesListComponent_option_424_Template, 2, 2, "option", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](425, SalesListComponent_div_425_Template, 8, 1, "div", 105);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](426, "div", 46)(427, "div", 106)(428, "div", 48)(429, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](430, "Notes");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](431, "textarea", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](432, SalesListComponent_div_432_Template, 3, 0, "div", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](433, "div", 106)(434, "div", 108)(435, "button", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](436, " Cancel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](437, "button", 110);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](438, " Submit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          let tmp_22_0;
          let tmp_23_0;
          let tmp_25_0;
          let tmp_26_0;
          let tmp_27_0;
          let tmp_28_0;
          let tmp_29_0;
          let tmp_30_0;
          let tmp_31_0;
          let tmp_32_0;
          let tmp_33_0;
          let tmp_35_0;
          let tmp_36_0;
          let tmp_37_0;
          let tmp_38_0;
          let tmp_39_0;
          let tmp_40_0;
          let tmp_43_0;
          let tmp_44_0;
          let tmp_45_0;
          let tmp_46_0;
          let tmp_49_0;
          let tmp_53_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](22, !ctx.isCollapsed ? 22 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](23, ctx.isCollapsed ? 23 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.filterSearchText);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.savedSearchText);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedPickupStatusFilter);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.statusOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](62, (ctx.tableData == null ? null : ctx.tableData.length) === 0 ? 62 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx.tableData);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pagination", ctx.pagination);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](58, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx.selectedList5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](59, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx.selectedList6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](87);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](60, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx.selectedList7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Donation ID : ", ctx.singleDonation.donation_id, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.singleDonation == null ? null : ctx.singleDonation.user_details == null ? null : ctx.singleDonation.user_details.user_reg_id, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx.singleDonation == null ? null : ctx.singleDonation.user_details == null ? null : ctx.singleDonation.user_details.first_name, " ", ctx.singleDonation == null ? null : ctx.singleDonation.user_details == null ? null : ctx.singleDonation.user_details.last_name, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", (tmp_22_0 = ctx.singleDonation == null ? null : ctx.singleDonation.user_details == null ? null : ctx.singleDonation.user_details.email) !== null && tmp_22_0 !== undefined ? tmp_22_0 : "NA", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", (tmp_23_0 = ctx.singleDonation == null ? null : ctx.singleDonation.user_details == null ? null : ctx.singleDonation.user_details.phone_number) !== null && tmp_23_0 !== undefined ? tmp_23_0 : "NA", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx.singleDonation == null ? null : ctx.singleDonation.pickup_address == null ? null : ctx.singleDonation.pickup_address.first_name, " ", ctx.singleDonation == null ? null : ctx.singleDonation.pickup_address == null ? null : ctx.singleDonation.pickup_address.last_name, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx.singleDonation == null ? null : ctx.singleDonation.pickup_address == null ? null : ctx.singleDonation.pickup_address.country_code, " ", (tmp_25_0 = ctx.singleDonation == null ? null : ctx.singleDonation.pickup_address == null ? null : ctx.singleDonation.pickup_address.phone_number) !== null && tmp_25_0 !== undefined ? tmp_25_0 : "NA", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", (tmp_26_0 = ctx.singleDonation == null ? null : ctx.singleDonation.pickup_address == null ? null : ctx.singleDonation.pickup_address.address_line1) !== null && tmp_26_0 !== undefined ? tmp_26_0 : "NA", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", (tmp_27_0 = ctx.singleDonation == null ? null : ctx.singleDonation.pickup_address == null ? null : ctx.singleDonation.pickup_address.address_line2) !== null && tmp_27_0 !== undefined ? tmp_27_0 : "NA", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", (tmp_28_0 = ctx.singleDonation == null ? null : ctx.singleDonation.pickup_address == null ? null : ctx.singleDonation.pickup_address.land_mark) !== null && tmp_28_0 !== undefined ? tmp_28_0 : "NA", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", (tmp_29_0 = ctx.singleDonation == null ? null : ctx.singleDonation.pickup_address == null ? null : ctx.singleDonation.pickup_address.city) !== null && tmp_29_0 !== undefined ? tmp_29_0 : "NA", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", (tmp_30_0 = ctx.singleDonation == null ? null : ctx.singleDonation.pickup_address == null ? null : ctx.singleDonation.pickup_address.pin_code) !== null && tmp_30_0 !== undefined ? tmp_30_0 : "NA", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (tmp_31_0 = ctx.singleDonation == null ? null : ctx.singleDonation.designated_warehouse == null ? null : ctx.singleDonation.designated_warehouse.warehouse_id) !== null && tmp_31_0 !== undefined ? tmp_31_0 : "NA", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", (tmp_32_0 = ctx.singleDonation == null ? null : ctx.singleDonation.designated_warehouse == null ? null : ctx.singleDonation.designated_warehouse.warehouse_name) !== null && tmp_32_0 !== undefined ? tmp_32_0 : "NA", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx.singleDonation == null ? null : ctx.singleDonation.designated_warehouse == null ? null : ctx.singleDonation.designated_warehouse.country_code, " ", (tmp_33_0 = ctx.singleDonation == null ? null : ctx.singleDonation.designated_warehouse == null ? null : ctx.singleDonation.designated_warehouse.phone_number) !== null && tmp_33_0 !== undefined ? tmp_33_0 : "NA", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.singleDonation == null ? null : ctx.singleDonation.designated_warehouse == null ? null : ctx.singleDonation.designated_warehouse.email, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", (tmp_35_0 = ctx.singleDonation == null ? null : ctx.singleDonation.designated_warehouse == null ? null : ctx.singleDonation.designated_warehouse.address_line1) !== null && tmp_35_0 !== undefined ? tmp_35_0 : "NA", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", (tmp_36_0 = ctx.singleDonation == null ? null : ctx.singleDonation.designated_warehouse == null ? null : ctx.singleDonation.designated_warehouse.address_line2) !== null && tmp_36_0 !== undefined ? tmp_36_0 : "NA", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", (tmp_37_0 = ctx.singleDonation == null ? null : ctx.singleDonation.designated_warehouse == null ? null : ctx.singleDonation.designated_warehouse.city) !== null && tmp_37_0 !== undefined ? tmp_37_0 : "NA", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", (tmp_38_0 = ctx.singleDonation == null ? null : ctx.singleDonation.designated_warehouse == null ? null : ctx.singleDonation.designated_warehouse.pin_code) !== null && tmp_38_0 !== undefined ? tmp_38_0 : "NA", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", (tmp_39_0 = ctx.singleDonation == null ? null : ctx.singleDonation.designated_warehouse == null ? null : ctx.singleDonation.designated_warehouse.state) !== null && tmp_39_0 !== undefined ? tmp_39_0 : "NA", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](327, 55, (tmp_40_0 = ctx.singleDonation == null ? null : ctx.singleDonation.donated_date) !== null && tmp_40_0 !== undefined ? tmp_40_0 : "NA", "yyyy-MM-dd HH:mm:ss"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", "badge-bgsuccess");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.singleDonation.donation_status);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (tmp_43_0 = ctx.singleDonation == null ? null : ctx.singleDonation.pickup_details == null ? null : ctx.singleDonation.pickup_details.pickup_status) !== null && tmp_43_0 !== undefined ? tmp_43_0 : "NA", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (tmp_44_0 = ctx.singleDonation == null ? null : ctx.singleDonation.pickup_details == null ? null : ctx.singleDonation.pickup_details.scheduled_date) !== null && tmp_44_0 !== undefined ? tmp_44_0 : "NA", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (tmp_45_0 = ctx.singleDonation == null ? null : ctx.singleDonation.pickup_details == null ? null : ctx.singleDonation.pickup_details.pickup_date) !== null && tmp_45_0 !== undefined ? tmp_45_0 : "NA", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (tmp_46_0 = ctx.singleDonation == null ? null : ctx.singleDonation.pickup_details == null ? null : ctx.singleDonation.pickup_details.warehouse_delivery_date) !== null && tmp_46_0 !== undefined ? tmp_46_0 : "NA", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.singleDonation == null ? null : ctx.singleDonation.overall_donation_tracking_history);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Donation ID : ", ctx.singleDonation.donation_id, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_49_0 = ctx.singleDonation == null ? null : ctx.singleDonation.donated_products == null ? null : ctx.singleDonation.donated_products.length) !== null && tmp_49_0 !== undefined ? tmp_49_0 : 0) > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.statusForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.statusOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showScheduledDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_53_0 = ctx.statusForm.get("notes")) == null ? null : tmp_53_0.invalid) && ((tmp_53_0 = ctx.statusForm.get("notes")) == null ? null : tmp_53_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.statusForm.invalid);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortHeader, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_3__.CustomPaginationComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatTooltip, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__.BsDatepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__.BsDatepickerInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
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