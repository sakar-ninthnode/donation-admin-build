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
/* harmony import */ var C_work_git_sakar_nithnode_admin_donation_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var src_app_core_core_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/core.index */ 82351);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! xlsx */ 13857);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ 85841);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.index */ 31287);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _core_component_pages_profile_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core-component/pages/profile/profile.service */ 43431);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ 22047);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/custom-pagination/custom-pagination.component */ 14860);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 98379);



















const _c0 = () => [];
function SalesListComponent_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SalesListComponent_button_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.clearSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Searched Query: ", ctx_r1.savedSearchText, " \u2716 ");
  }
}
function SalesListComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "No data found");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function SalesListComponent_For_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "td")(11, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "td")(14, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "td", 21)(17, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SalesListComponent_For_43_Template_a_click_17_listener() {
      const data_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.viewDonation(data_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r4.donated_product_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r4.product_details.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", data_r4.donation.user_details.first_name + " " + data_r4.donation.user_details.last_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](9, 8, data_r4.donation.donated_date, "yyyy-MM-dd HH:mm:ss"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", "badge-bgsuccess py-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r4.donation_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", "badge-bgsuccess py-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r4.pickup_status);
  }
}
function SalesListComponent_div_47_h6_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Shiprocket Pickup ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function SalesListComponent_div_47_h6_109_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Manual Pickup ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function SalesListComponent_div_47_span_110_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Warehouse is ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.designated_warehouse == null ? null : ctx_r1.singleProduct.donation.designated_warehouse.status), "");
  }
}
function SalesListComponent_div_47_button_111_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SalesListComponent_div_47_button_111_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.schedulePickup(ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donated_product_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Schedule Pickup ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function SalesListComponent_div_47_span_112_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.schedulingError);
  }
}
function SalesListComponent_div_47_a_114_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SalesListComponent_div_47_a_114_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.updateStatusForm(ctx_r1.singleProduct));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Update Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function SalesListComponent_div_47_img_116_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 69);
  }
  if (rf & 2) {
    const image_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", image_r8.product_img_url, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function SalesListComponent_div_47_th_176_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function SalesListComponent_div_47_option_185_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const condition_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", condition_r9.condition_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", condition_r9.condition, " ");
  }
}
function SalesListComponent_div_47_div_186_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "small", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Condition is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function SalesListComponent_div_47_div_189_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "small", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Remark is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function SalesListComponent_div_47_td_190_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td")(1, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r1.conditionsForm.invalid);
  }
}
function SalesListComponent_div_47_h5_214_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h5", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Product Tracking History ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function SalesListComponent_div_47_table_215_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const history_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](history_r10 == null ? null : history_r10.pickup_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](history_r10 == null ? null : history_r10.donation_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](7, 4, history_r10 == null ? null : history_r10.status_date, "yyyy-MM-dd HH:mm:ss"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (tmp_7_0 = history_r10 == null ? null : history_r10.notes) !== null && tmp_7_0 !== undefined ? tmp_7_0 : "No additional notes", " ");
  }
}
function SalesListComponent_div_47_table_215_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "table", 53)(1, "thead", 58)(2, "tr")(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Pickup Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Donation Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Status Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, SalesListComponent_div_47_table_215_tr_12_Template, 10, 7, "tr", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.singleProduct.product_tracking_history);
  }
}
function SalesListComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 34)(1, "div", 35)(2, "div", 36)(3, "div", 37)(4, "div", 1)(5, "div", 38)(6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div")(9, "div", 39)(10, "div", 40)(11, "form")(12, "div", 41)(13, "div", 42)(14, "div", 43)(15, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Customer Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "p")(18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "User Reg Id: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "User Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "User Email: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "User Contact: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](33, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 43)(35, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "Pickup Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](39, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "Contact: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](43, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "Address Line 1: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](47, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "Address Line 2: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](51, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "Land Mark: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](55, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "City: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](59, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](61, "Pin Code: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](63, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "div", 43)(65, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66, "Warehouse Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "p")(68, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](69, "ID: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](71, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](73, "Warehouse Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](75, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](77, "Contact: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](79, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](81, "Email: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](83, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](85, "Address Line 1: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](87, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](89, "Address Line 2: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](91, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](93, "City: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](95, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](96, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](97, "Pin Code: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](99, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](101, "State: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](103, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](104, "div", 43)(105, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](106);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](107, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](108, SalesListComponent_div_47_h6_108_Template, 2, 0, "h6", 45)(109, SalesListComponent_div_47_h6_109_Template, 2, 0, "h6", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](110, SalesListComponent_div_47_span_110_Template, 3, 3, "span", 46)(111, SalesListComponent_div_47_button_111_Template, 2, 0, "button", 47)(112, SalesListComponent_div_47_span_112_Template, 2, 1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](113, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](114, SalesListComponent_div_47_a_114_Template, 2, 0, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](115, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](116, SalesListComponent_div_47_img_116_Template, 1, 1, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](117, "div", 51)(118, "div", 7)(119, "div", 49)(120, "div", 52)(121, "table", 53)(122, "thead", 54)(123, "tr")(124, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](125, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](126, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](127, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](128, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](129, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](130, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](131, "Length");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](132, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](133, "Breadth");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](134, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](135, "Height");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](136, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](137, "Weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](138, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](139, "Pickup Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](140, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](141, "Donation Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](142, "tbody")(143, "tr")(144, "td")(145, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](146);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](147, "td")(148, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](149);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](150, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](151);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](152, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](153);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](154, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](155);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](156, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](157);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](158, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](159);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](160, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](161);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](162, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](163);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](164, "h5", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](165, "Product Condition");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](166, "form", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function SalesListComponent_div_47_Template_form_ngSubmit_166_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.onSubmitCondition());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](167, "table", 53)(168, "thead", 58)(169, "tr")(170, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](171, "User Condition");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](172, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](173, "Admin Condition");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](174, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](175, "Remark");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](176, SalesListComponent_div_47_th_176_Template, 2, 0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](177, "tbody")(178, "tr")(179, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](180);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](181, "td")(182, "select", 60)(183, "option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](184, " Select a condition ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](185, SalesListComponent_div_47_option_185_Template, 2, 2, "option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](186, SalesListComponent_div_47_div_186_Template, 3, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](187, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](188, "textarea", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](189, SalesListComponent_div_47_div_189_Template, 3, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](190, SalesListComponent_div_47_td_190_Template, 3, 1, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](191, "h5", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](192, "Pickup Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](193, "table", 53)(194, "thead", 58)(195, "tr")(196, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](197, "Pickup Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](198, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](199, "Scheduled Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](200, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](201, "Pickup Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](202, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](203, "Warehouse Delivery Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](204, "tbody")(205, "tr")(206, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](207);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](208, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](209);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](210, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](211);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](212, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](213);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](214, SalesListComponent_div_47_h5_214_Template, 2, 0, "h5", 64)(215, SalesListComponent_div_47_table_215_Template, 13, 1, "table", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()();
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
    let tmp_45_0;
    let tmp_46_0;
    let tmp_48_0;
    let tmp_49_0;
    let tmp_50_0;
    let tmp_51_0;
    let tmp_52_0;
    let tmp_53_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Product ID : ", ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.product_details == null ? null : ctx_r1.singleProduct.product_details.product_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.user_details == null ? null : ctx_r1.singleProduct.donation.user_details.user_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.user_details == null ? null : ctx_r1.singleProduct.donation.user_details.first_name, " ", ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.user_details == null ? null : ctx_r1.singleProduct.donation.user_details.last_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", (tmp_4_0 = ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.user_details == null ? null : ctx_r1.singleProduct.donation.user_details.email) !== null && tmp_4_0 !== undefined ? tmp_4_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", (tmp_5_0 = ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.user_details == null ? null : ctx_r1.singleProduct.donation.user_details.phone_number) !== null && tmp_5_0 !== undefined ? tmp_5_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.pickup_address == null ? null : ctx_r1.singleProduct.donation.pickup_address.first_name, " ", ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.pickup_address == null ? null : ctx_r1.singleProduct.donation.pickup_address.last_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.pickup_address == null ? null : ctx_r1.singleProduct.donation.pickup_address.country_code, " ", (tmp_7_0 = ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.pickup_address == null ? null : ctx_r1.singleProduct.donation.pickup_address.phone_number) !== null && tmp_7_0 !== undefined ? tmp_7_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", (tmp_8_0 = ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.pickup_address == null ? null : ctx_r1.singleProduct.donation.pickup_address.address_line1) !== null && tmp_8_0 !== undefined ? tmp_8_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", (tmp_9_0 = ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.pickup_address == null ? null : ctx_r1.singleProduct.donation.pickup_address.address_line2) !== null && tmp_9_0 !== undefined ? tmp_9_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", (tmp_10_0 = ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.pickup_address == null ? null : ctx_r1.singleProduct.donation.pickup_address.land_mark) !== null && tmp_10_0 !== undefined ? tmp_10_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", (tmp_11_0 = ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.pickup_address == null ? null : ctx_r1.singleProduct.donation.pickup_address.city) !== null && tmp_11_0 !== undefined ? tmp_11_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", (tmp_12_0 = ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.pickup_address == null ? null : ctx_r1.singleProduct.donation.pickup_address.pin_code) !== null && tmp_12_0 !== undefined ? tmp_12_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (tmp_13_0 = ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.designated_warehouse == null ? null : ctx_r1.singleProduct.donation.designated_warehouse.warehouse_id) !== null && tmp_13_0 !== undefined ? tmp_13_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", (tmp_14_0 = ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.designated_warehouse == null ? null : ctx_r1.singleProduct.donation.designated_warehouse.warehouse_name) !== null && tmp_14_0 !== undefined ? tmp_14_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.designated_warehouse == null ? null : ctx_r1.singleProduct.donation.designated_warehouse.country_code, " ", (tmp_15_0 = ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.designated_warehouse == null ? null : ctx_r1.singleProduct.donation.designated_warehouse.phone_number) !== null && tmp_15_0 !== undefined ? tmp_15_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.designated_warehouse == null ? null : ctx_r1.singleProduct.donation.designated_warehouse.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", (tmp_17_0 = ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.designated_warehouse == null ? null : ctx_r1.singleProduct.donation.designated_warehouse.address_line1) !== null && tmp_17_0 !== undefined ? tmp_17_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", (tmp_18_0 = ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.designated_warehouse == null ? null : ctx_r1.singleProduct.donation.designated_warehouse.address_line2) !== null && tmp_18_0 !== undefined ? tmp_18_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", (tmp_19_0 = ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.designated_warehouse == null ? null : ctx_r1.singleProduct.donation.designated_warehouse.city) !== null && tmp_19_0 !== undefined ? tmp_19_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", (tmp_20_0 = ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.designated_warehouse == null ? null : ctx_r1.singleProduct.donation.designated_warehouse.pin_code) !== null && tmp_20_0 !== undefined ? tmp_20_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", (tmp_21_0 = ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.designated_warehouse == null ? null : ctx_r1.singleProduct.donation.designated_warehouse.state) !== null && tmp_21_0 !== undefined ? tmp_21_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", "badge-linesuccess py-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.pickup_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.assigned_as_manual_pickup));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.assigned_as_manual_pickup);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.assigned_as_manual_pickup) && (ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.designated_warehouse == null ? null : ctx_r1.singleProduct.donation.designated_warehouse.status) != "OPERATIONAL" && (ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.pickup_scheduled_in_shiprocket) === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.assigned_as_manual_pickup) && (ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.donation == null ? null : ctx_r1.singleProduct.donation.designated_warehouse == null ? null : ctx_r1.singleProduct.donation.designated_warehouse.status) === "OPERATIONAL" && (ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.pickup_scheduled_in_shiprocket) === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.assigned_as_manual_pickup));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.assigned_as_manual_pickup);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.singleProduct.product_details.images);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.singleProduct.product_details.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.singleProduct.product_details.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.singleProduct.product_details.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.singleProduct.product_details.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.singleProduct.product_details.breadth);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.singleProduct.product_details.height);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.singleProduct.product_details.weight);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.singleProduct.pickup_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.singleProduct.donation_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r1.conditionsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.userRole == "Platform Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", "text-success");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.singleProduct == null ? null : ctx_r1.singleProduct.product_condition_approval_status == null ? null : ctx_r1.singleProduct.product_condition_approval_status.user_condition == null ? null : ctx_r1.singleProduct.product_condition_approval_status.user_condition.condition, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.conditionOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_45_0 = ctx_r1.conditionsForm.get("condition_id")) == null ? null : tmp_45_0.invalid) && ((tmp_45_0 = ctx_r1.conditionsForm.get("condition_id")) == null ? null : tmp_45_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_46_0 = ctx_r1.conditionsForm.get("remarks")) == null ? null : tmp_46_0.invalid) && ((tmp_46_0 = ctx_r1.conditionsForm.get("remarks")) == null ? null : tmp_46_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.userRole == "Platform Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (tmp_48_0 = ctx_r1.singleProduct.pickup_details == null ? null : ctx_r1.singleProduct.pickup_details.pickup_status) !== null && tmp_48_0 !== undefined ? tmp_48_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (tmp_49_0 = ctx_r1.singleProduct.pickup_details == null ? null : ctx_r1.singleProduct.pickup_details.scheduled_date) !== null && tmp_49_0 !== undefined ? tmp_49_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (tmp_50_0 = ctx_r1.singleProduct.pickup_details == null ? null : ctx_r1.singleProduct.pickup_details.pickup_date) !== null && tmp_50_0 !== undefined ? tmp_50_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (tmp_51_0 = ctx_r1.singleProduct.pickup_details == null ? null : ctx_r1.singleProduct.pickup_details.warehouse_delivery_date) !== null && tmp_51_0 !== undefined ? tmp_51_0 : "NA", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_52_0 = ctx_r1.singleProduct.product_tracking_history) !== null && tmp_52_0 !== undefined ? tmp_52_0 : _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](57, _c0)).length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_53_0 = ctx_r1.singleProduct.product_tracking_history) !== null && tmp_53_0 !== undefined ? tmp_53_0 : _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](58, _c0)).length > 0);
  }
}
function SalesListComponent_div_50_mat_option_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stat_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", stat_r12.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", stat_r12.value, " ");
  }
}
function SalesListComponent_div_50_div_17_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "small", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Scheduled date is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function SalesListComponent_div_50_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 79)(1, "div", 80)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Scheduled Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "i", 89)(6, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, SalesListComponent_div_50_div_17_div_7_Template, 3, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r1.statusForm.get("scheduled_date")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.statusForm.get("scheduled_date")) == null ? null : tmp_2_0.touched));
  }
}
function SalesListComponent_div_50_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "small", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Remarks is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function SalesListComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 34)(1, "div", 74)(2, "div", 2)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Update Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 75)(6, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 77)(9, "form", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function SalesListComponent_div_50_Template_form_ngSubmit_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.onSubmitStatus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 78)(11, "div", 79)(12, "div", 80)(13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "New Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "mat-select", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function SalesListComponent_div_50_Template_mat_select_selectionChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.onStatusChange($event.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, SalesListComponent_div_50_mat_option_16_Template, 2, 2, "mat-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, SalesListComponent_div_50_div_17_Template, 8, 1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 78)(19, "div", 83)(20, "div", 80)(21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "textarea", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, SalesListComponent_div_50_div_24_Template, 3, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 83)(26, "div", 85)(27, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r1.statusForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.manualStatusOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.showScheduledDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx_r1.statusForm.get("remarks")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.statusForm.get("remarks")) == null ? null : tmp_4_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r1.statusForm.invalid);
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
    this.routes = src_app_core_core_index__WEBPACK_IMPORTED_MODULE_1__.routes;
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
      label: 'PICKUP PENDING SCHEDULING',
      value: 'PICKUP PENDING SCHEDULING'
    }, {
      label: 'PICKUP SCHEDULED',
      value: 'PICKUP SCHEDULED'
    }, {
      label: 'PICKUP AGENT ASSIGNED',
      value: 'PICKUP AGENT ASSIGNED'
    }, {
      label: 'AGENT OUT FOR COLLECTION',
      value: 'AGENT OUT FOR COLLECTION'
    }, {
      label: 'ITEMS COLLECTED',
      value: 'ITEMS COLLECTED'
    }, {
      label: 'PICKUP COMPLETED',
      value: 'PICKUP COMPLETED'
    }, {
      label: 'PICKUP FAILED',
      value: 'PICKUP FAILED'
    }, {
      label: 'PICKUP CANCELLED',
      value: 'PICKUP CANCELLED'
    }];
    this.manualStatusOptions = [{
      label: 'PICKUP PENDING SCHEDULING',
      value: 'PICKUP PENDING SCHEDULING'
    }, {
      label: 'PICKUP SCHEDULED',
      value: 'PICKUP SCHEDULED'
    }, {
      label: 'PICKUP AGENT ASSIGNED',
      value: 'PICKUP AGENT ASSIGNED'
    }, {
      label: 'AGENT OUT FOR COLLECTION',
      value: 'AGENT OUT FOR COLLECTION'
    }, {
      label: 'ITEMS COLLECTED',
      value: 'ITEMS COLLECTED'
    }, {
      label: 'PICKUP COMPLETED',
      value: 'PICKUP COMPLETED'
    }, {
      label: 'PICKUP FAILED',
      value: 'PICKUP FAILED'
    }, {
      label: 'PICKUP CANCELLED',
      value: 'PICKUP CANCELLED'
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
    this.schedulingError = '';
    this.isCollapsed = false;
    this.filter = false;
    this.cartValue = [2, 2, 2, 2, 2, 2, 2, 2];
    this.statusForm = this.fb.group({
      status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      remarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      scheduled_date: ['']
    });
    this.conditionsForm = this.fb.group({
      remarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      // status: ['', Validators.required],
      condition_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]
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
      this.paginationService.setPaginationData(apiRes.results.pagination);
      this.pagination = this.paginationService.getPaginationData();
    });
  }
  viewDonation(data) {
    this.singleProduct = data;
    this.statusForm.reset();
    this.conditionsForm.reset();
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
    console.log(data.pickup_status);
    const scheduledDateControl = this.statusForm.get('scheduled_date');
    if (data.pickup_status === 'PICKUP PENDING SCHEDULING' || data.pickup_status === 'PICKUP SCHEDULED') {
      this.showScheduledDate = true;
      scheduledDateControl?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]);
    }
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
  onStatusChange(val) {
    const scheduledDateControl = this.statusForm.get('scheduled_date');
    if (val === 'PICKUP PENDING SCHEDULING' || val === 'PICKUP SCHEDULED') {
      this.showScheduledDate = true;
      scheduledDateControl?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]);
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
  schedulePickup(id) {
    this.data.scheduleProductPickupRequest(id).subscribe(response => {
      const modalElement = document.getElementById('product-details-modal');
      if (modalElement) {
        const modal = bootstrap.Modal.getInstance(modalElement);
        modal.hide();
      }
      sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
        icon: 'success',
        title: 'Pickup Scheduled',
        text: 'The product pickup has been successfully scheduled!',
        confirmButtonColor: '#28a745' // Bootstrap green
      });
    }, error => {
      console.error('Error creating user', error);
      this.schedulingError = error.error.status_message;
    });
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
  fetchAllPagesFiltered() {
    var _this = this;
    return (0,C_work_git_sakar_nithnode_admin_donation_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let allData = [];
      let page = 1;
      let pageSize = 10;
      let hasMore = true;
      while (hasMore) {
        const res = yield _this.data.getDonationList(page, null, '').toPromise();
        allData = allData.concat(res.results.products);
        hasMore = res.results.products.length === pageSize;
        page++;
      }
      const monitorFields = ["donated_product_id", "quantity", "donation", "donated_quantity", "pickup_status", "donation_status", "donation_started", "last_updated", "product_condition_approval_status", "product_details", "pickup_details", "product_tracking_history", "pickup_scheduled_in_shiprocket"];
      const filtered = allData.map(item => {
        const picked = {};
        monitorFields.forEach(field => {
          // Handle nested objects like product_details and pickup_details
          if (field === "product_details") {
            picked.product_title = item.product_details?.title;
            picked.product_description = item.product_details?.description;
            picked.product_quantity = item.product_details?.quantity;
            picked.product_length = item.product_details?.length;
            picked.product_breadth = item.product_details?.breadth;
            picked.product_height = item.product_details?.height;
            picked.product_weight = item.product_details?.weight;
            picked.product_condition = item.product_details?.product_condition;
            picked.product_subcategories = item.product_details?.subcategories.name;
            picked.product_images = item.product_details?.images?.map(img => img.product_img_url).join(", ");
          } else if (field === "donation") {
            picked.customer_name = item.donation.user_details?.first_name + " " + item.donation.user_details?.last_name;
            picked.customer_phone_number = item.donation.user_details?.phone_number;
            picked.customer_email = item.donation.user_details?.email;
            picked.pickup_id = item.donation.pickup_details?.pickup_id;
            picked.pickup_first_name = item.donation?.pickup_address?.first_name;
            picked.pickup_last_name = item.donation?.pickup_address?.last_name;
            picked.pickup_phone_number = item.donation?.pickup_address?.phone_number;
            picked.pickup_address_line1 = item.donation?.pickup_address?.address_line1;
            picked.pickup_address_line2 = item.donation?.pickup_address?.address_line2;
            picked.pickup_pin_code = item.donation?.pickup_address?.pin_code;
            picked.pickup_city = item.donation?.pickup_address?.city;
            picked.pickup_state = item.donation?.pickup_address?.state;
            picked.pickup_lat = item.donation?.pickup_address?.lat;
            picked.pickup_long = item.donation?.pickup_address?.long;
            picked.warehouse_id = item.donation.designated_warehouse?.warehouse_id;
            picked.warehouse_name = item.donation?.designated_warehouse?.warehouse_name;
            picked.warehouse_phone_number = item.donation?.designated_warehouse?.phone_number;
            picked.warehouse_email = item.donation?.designated_warehouse?.email;
            picked.warehouse_address_line1 = item.donation?.designated_warehouse?.address_line1;
            picked.warehouse_address_line2 = item.donation?.designated_warehouse?.address_line2;
            picked.warehouse_pin_code = item.donation?.designated_warehouse?.pin_code;
            picked.warehouse_city = item.donation?.designated_warehouse?.city;
            picked.warehouse_state = item.donation?.designated_warehouse?.state;
            picked.warehouse_lat = item.donation?.designated_warehouse?.lat;
            picked.warehouse_long = item.donation?.designated_warehouse?.long;
          } else if (field === "product_condition_approval_status") {
            picked.user_condition = item.product_condition_approval_status.user_condition.condition;
            picked.admin_condition = item.product_condition_approval_status.admin_condition;
          }
        });
        return picked;
      });
      return filtered;
    })();
  }
  onSubmitStatus() {
    var _this2 = this;
    return (0,C_work_git_sakar_nithnode_admin_donation_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.statusForm.valid) {
        _this2.data.updateDonationStatus(_this2.singleProduct.donated_product_id, _this2.statusForm.value).subscribe(response => {
          _this2.getTableData();
          // Reset form after submission
          _this2.statusForm.reset();
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
    })();
  }
  exportAllData() {
    var _this3 = this;
    return (0,C_work_git_sakar_nithnode_admin_donation_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const allData = yield _this3.fetchAllPagesFiltered();
      const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_9__.utils.json_to_sheet(allData);
      const workbook = {
        Sheets: {
          data: worksheet
        },
        SheetNames: ['data']
      };
      const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_9__.write(workbook, {
        bookType: 'xlsx',
        type: 'array'
      });
      const blobData = new Blob([excelBuffer], {
        type: 'application/octet-stream'
      });
      file_saver__WEBPACK_IMPORTED_MODULE_3__.saveAs(blobData, 'donation.xlsx');
    })();
  }
  static {
    this.ɵfac = function SalesListComponent_Factory(t) {
      return new (t || SalesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_4__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_1__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_component_pages_profile_profile_service__WEBPACK_IMPORTED_MODULE_5__.ProfileService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: SalesListComponent,
      selectors: [["app-sales-list"]],
      decls: 51,
      vars: 6,
      consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Excel", "matTooltipPosition", "above", 3, "click"], ["src", "assets/img/icons/excel.svg", "alt", "img"], [1, "card", "table-list-card"], [1, "card-body"], [1, "table-top"], [1, "search-set", "ml-4"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset", 3, "click"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["placeholder", "Search...", 1, "form-control", 3, "ngModelChange", "keydown.enter", "ngModel"], ["class", "btn btn-clear", 3, "click", 4, "ngIf"], [1, "table-responsive"], ["matSort", "", 1, "table", "datanew", 3, "matSortChange"], ["mat-sort-header", "customerName"], ["mat-sort-header", "reference"], ["mat-sort-header", "date"], [1, "text-center"], [1, "sales-list"], [3, "pageChange", "pagination"], ["id", "product-details-modal", 1, "modal", "fade"], [1, "modal-dialog", "sales-details-modal"], ["class", "modal-content", 4, "ngIf"], ["id", "update-status-modal", "tabindex", "-1", "aria-labelledby", "createpayment", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg", "modal-dialog-centered"], [1, "btn", "btn-clear", 3, "click"], ["colspan", "6", 1, "text-center", "text-muted"], [1, "badge", 3, "ngClass"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#product-details-modal", 1, "dropdown-item", 3, "click"], [1, "feather", "icon-eye", "info-img"], [1, "modal-content"], [1, "page-wrapper", "details-blk"], [1, "content", "p-0"], [1, "page-header", "p-4", "mb-0"], [1, "page-title", "modal-datail"], [1, "card", "mb-0"], [1, "card-body", "mb-0"], [1, "invoice-box", "table-height", 2, "max-width", "1600px", "width", "100%", "overflow", "auto", "padding", "0", "font-size", "14px", "line-height", "24px", "color", "#555"], [1, "sales-details-items", "d-flex"], [1, "details-item"], [1, "mt-2"], [4, "ngIf"], ["class", "text-danger small", 4, "ngIf"], ["class", "btn btn-success btn-sm mt-2", 3, "click", 4, "ngIf"], ["href", "javascript:void(0);", "class", "btn btn-success btn-sm mt-2", "data-bs-toggle", "modal", "data-bs-target", "#update-status-modal", 3, "click", 4, "ngIf"], [1, "container"], ["alt", "Product Image", "class", "img-thumbnail", "width", "300", 3, "src", 4, "ngFor", "ngForOf"], [1, "card"], [1, "mb-4"], [1, "table", "table-bordered"], [1, "thead-dark"], [1, "text-muted"], [1, "my-2"], [3, "ngSubmit", "formGroup"], [1, "thead-light"], [3, "ngClass"], ["formControlName", "condition_id", 1, "form-select"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "remarks"], ["class", "my-2", 4, "ngIf"], ["class", "table table-bordered", 4, "ngIf"], [1, "text-danger", "small"], [1, "btn", "btn-success", "btn-sm", "mt-2", 3, "click"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#update-status-modal", 1, "btn", "btn-success", "btn-sm", "mt-2", 3, "click"], ["alt", "Product Image", "width", "300", 1, "img-thumbnail", 3, "src"], [3, "value"], [1, "text-danger"], [1, "btn", "btn-success", "btn-sm", 3, "disabled"], [4, "ngFor", "ngForOf"], [1, "modal-header", "border-0", "custom-modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body"], [1, "row"], [1, "col-lg-6"], [1, "input-blocks"], ["formControlName", "status", 3, "selectionChange"], ["class", "col-lg-6", 4, "ngIf"], [1, "col-lg-12"], ["formControlName", "remarks", 1, "form-control"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit", 3, "disabled"], [1, "input-groupicon", "calender-input", "date-input3"], [1, "feather", "icon-calendar", "info-img"], ["formControlName", "scheduled_date", "type", "text", "bsDatepicker", "", "container", ".date-input3", "placeholder", "Choose Date", 1, "datetimepicker"]],
      template: function SalesListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Donation List");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Manage Your Donations");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "ul", 3)(8, "li")(9, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SalesListComponent_Template_a_click_9_listener() {
            return ctx.exportAllData();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 6)(12, "div", 7)(13, "div", 8)(14, "div", 9)(15, "div", 10)(16, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SalesListComponent_Template_a_click_16_listener() {
            return ctx.onSearchClick();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 13)(19, "label")(20, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function SalesListComponent_Template_input_ngModelChange_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.filterSearchText, $event) || (ctx.filterSearchText = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keydown.enter", function SalesListComponent_Template_input_keydown_enter_20_listener() {
            return ctx.onSearchClick();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, SalesListComponent_button_21_Template, 2, 1, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 16)(23, "table", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("matSortChange", function SalesListComponent_Template_table_matSortChange_23_listener($event) {
            return ctx.sortData($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "thead")(25, "tr")(26, "th", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Product Id");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "th", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Title");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "th", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "User Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "th", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "Donation Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "th", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "Donation Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "th", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "Pickup Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "th", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "tbody", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, SalesListComponent_Conditional_41_Template, 3, 0, "tr");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterCreate"](42, SalesListComponent_For_43_Template, 19, 11, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "app-custom-pagination", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("pageChange", function SalesListComponent_Template_app_custom_pagination_pageChange_44_listener($event) {
            return ctx.onPageChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 24)(46, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](47, SalesListComponent_div_47_Template, 216, 59, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div", 27)(49, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](50, SalesListComponent_div_50_Template, 31, 5, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.filterSearchText);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.savedSearchText);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](41, (ctx.tableData == null ? null : ctx.tableData.length) === 0 ? 41 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeater"](ctx.tableData);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pagination", ctx.pagination);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.singleProduct);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.singleProduct);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSortHeader, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_6__.CustomPaginationComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltip, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__.BsDatepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__.BsDatepickerInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_11__.LowerCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
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