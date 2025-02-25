"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_sales_sales_module_ts"],{

/***/ 16179:
/*!***********************************************************!*\
  !*** ./src/app/core-component/sales/pos/pos.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PosComponent: () => (/* binding */ PosComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 77697);
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/core.index */ 82351);
/* harmony import */ var src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.index */ 31287);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 22047);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-owl-carousel-o */ 96821);
/* harmony import */ var _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/custom-pagination/custom-pagination.component */ 14860);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);














const _c0 = () => ({
  standalone: true
});
function PosComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 250)(1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h6")(4, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "All Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "80 Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PosComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 252)(1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h6")(4, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Headphones");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "4 Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PosComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 254)(1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h6")(4, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Shoes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "14 Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PosComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 256)(1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h6")(4, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Mobiles");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "7 Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PosComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 258)(1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h6")(4, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Watches");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "16 Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PosComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 260)(1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h6")(4, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Laptops");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "18 Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PosComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 262)(1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h6")(4, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "All Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "80 Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PosComponent_ng_template_30_Template(rf, ctx) {}
function PosComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 263)(1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h6")(4, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Headphones");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "4 Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PosComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 263)(1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h6")(4, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Headphones");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "4 Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PosComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 264)(1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h6")(4, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Shoes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "14 Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PosComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 265)(1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h6")(4, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Mobiles");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "7 Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PosComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 266)(1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h6")(4, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Watches");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "16 Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PosComponent_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 267)(1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h6")(4, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Laptops");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "18 Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PosComponent_For_1004_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", data_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r1.value, " ");
  }
}
function PosComponent_For_1010_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", data_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r2.value, " ");
  }
}
function PosComponent_For_1123_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", data_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r3.value, " ");
  }
}
function PosComponent_For_1130_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", data_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r4.value, " ");
  }
}
function PosComponent_For_1137_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", data_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r5.value, " ");
  }
}
function PosComponent_For_1532_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", data_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r6.value, " ");
  }
}
function PosComponent_For_1548_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", data_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r7.value, " ");
  }
}
function PosComponent_For_1564_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", data_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r8.value, " ");
  }
}
function PosComponent_For_1628_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td", 268)(10, "div", 269)(11, "a", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "i", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "a", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "a", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PosComponent_For_1628_Template_a_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.confirmColor());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r11.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r11.reference);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r11.customer);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r11.amount);
  }
}
function PosComponent_For_1666_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td", 268)(10, "div", 269)(11, "a", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "i", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "a", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "a", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PosComponent_For_1666_Template_a_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.confirmColor());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r13.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r13.reference);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r13.customer);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r13.amount);
  }
}
function PosComponent_For_1704_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td", 268)(10, "div", 269)(11, "a", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "i", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "a", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "a", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PosComponent_For_1704_Template_a_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.confirmColor());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r15.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r15.reference);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r15.customer);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r15.amount);
  }
}
class PosComponent {
  increment() {
    this.quantity++;
  }
  decrement() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  addPos(i) {
    this.cartValue[i]++;
  }
  reducePos(i) {
    this.cartValue[i]--;
  }
  //** / pagination variables
  constructor(data, pagination, router, sidebar) {
    this.data = data;
    this.pagination = pagination;
    this.router = router;
    this.sidebar = sidebar;
    this.selectedValue1 = '';
    this.selectedValue2 = '';
    this.selectedValue3 = '';
    this.selectedValue4 = '';
    this.selectedValue5 = '';
    this.selectedValue6 = '';
    this.selectedValue7 = '';
    this.selectedValue8 = '';
    this.selectedList1 = [{
      value: 'Walk in Customer'
    }, {
      value: 'John'
    }, {
      value: 'Smith'
    }, {
      value: 'Ana'
    }, {
      value: 'Elza'
    }];
    this.selectedList2 = [{
      value: 'Search Products'
    }, {
      value: 'IPhone 14 64GB'
    }, {
      value: 'MacBook Pro'
    }, {
      value: 'Rolex Tribute V3'
    }, {
      value: 'Red Nike Angelo'
    }, {
      value: 'Airpod 2'
    }, {
      value: 'Oldest'
    }];
    this.selectedList3 = [{
      value: 'GST 5%'
    }, {
      value: 'GST 10%'
    }, {
      value: 'GST 15%'
    }, {
      value: 'GST 20%'
    }, {
      value: 'GST 25%'
    }, {
      value: 'GST 30%'
    }, {
      value: 'GST 30%'
    }];
    this.selectedList4 = [{
      value: '15'
    }, {
      value: '20'
    }, {
      value: '25'
    }, {
      value: '30'
    }];
    this.selectedList5 = [{
      value: '10%'
    }, {
      value: '20%'
    }, {
      value: '25%'
    }, {
      value: '30%'
    }];
    this.selectedList6 = [{
      value: 'Kilogram'
    }, {
      value: 'Grams'
    }];
    this.selectedList7 = [{
      value: 'Percentage'
    }, {
      value: 'Early payment discounts'
    }, {
      value: '25%'
    }, {
      value: '30%'
    }];
    this.selectedList8 = [{
      value: 'Exclusive'
    }, {
      value: 'Inclusive'
    }];
    this.customOptions = {
      margin: 10,
      dots: false,
      nav: true,
      navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
      loop: false,
      touchDrag: false,
      mouseDrag: false,
      responsive: {
        0: {
          items: 2
        },
        768: {
          items: 6
        },
        1170: {
          items: 6
        }
      }
    };
    this.quantity = 4;
    this.cartValue = [4, 4];
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    // pagination variables
    this.tableData = [];
    this.tableData2 = [];
    this.tableData3 = [];
    this.pageSize = 10;
    this.serialNumberArray = [];
    this.totalData = 0;
    this.showFilter = false;
    this.searchDataValue = '';
    this.data.getPosPurchase().subscribe(apiRes => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe(res => {
        if (this.router.url == this.routes.pos) {
          this.getTableData({
            skip: res.skip,
            limit: this.totalData
          });
          this.pageSize = res.pageSize;
        }
      });
    });
    this.data.getPosPurchase().subscribe(apiRes => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe(res => {
        if (this.router.url == this.routes.pos) {
          this.getTableData2({
            skip: res.skip,
            limit: this.totalData
          });
          this.pageSize = res.pageSize;
        }
      });
    });
    this.data.getPosPurchase().subscribe(apiRes => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe(res => {
        if (this.router.url == this.routes.pos) {
          this.getTableData3({
            skip: res.skip,
            limit: this.totalData
          });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getPosPurchase().subscribe(apiRes => {
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
      this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(this.tableData);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        serialNumberArray: this.serialNumberArray
      });
    });
  }
  getTableData2(pageOption) {
    this.data.getPosPurchase().subscribe(apiRes => {
      this.tableData2 = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res, index) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData2.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(this.tableData2);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData2: this.tableData2,
        serialNumberArray: this.serialNumberArray,
        tableData: []
      });
    });
  }
  getTableData3(pageOption) {
    this.data.getPosPurchase().subscribe(apiRes => {
      this.tableData3 = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res, index) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData3.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(this.tableData2);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData2: this.tableData3,
        serialNumberArray: this.serialNumberArray,
        tableData: []
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
  static {
    this.ɵfac = function PosComponent_Factory(t) {
      return new (t || PosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_3__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_2__.SidebarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: PosComponent,
      selectors: [["app-pos"]],
      decls: 2163,
      vars: 29,
      consts: [[1, "content", "pos-design", "p-0"], [1, "btn-row", "d-sm-flex", "align-items-center"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#orders", 1, "btn", "btn-secondary", "mb-xs-3"], [1, "me-1", "d-flex", "align-items-center"], [1, "feather", "icon-shopping-cart", "feather-16"], ["href", "javascript:void(0);", 1, "btn", "btn-info"], [1, "feather", "icon-rotate-cw", "feather-16"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#recents", 1, "btn", "btn-primary"], [1, "feather", "icon-refresh-ccw", "feather-16"], [1, "row", "align-items-start", "pos-wrapper"], [1, "col-md-12", "col-lg-8"], [1, "pos-categories", "tabs_wrapper"], [1, "tabs", "owl-carousel", "pos-category"], [3, "options"], ["carouselSlide", ""], [1, "pos-products"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "mb-3"], [1, "tabs_container"], ["data-tab", "all", 1, "tab_content", "active"], [1, "row"], [1, "col-sm-2", "col-md-6", "col-lg-3", "col-xl-3"], [1, "product-info", "default-cover", "card"], ["href", "javascript:void(0);", 1, "img-bg"], ["src", "assets/img/products/pos-product-01.png", "alt", "Products"], [1, "feather", "icon-check", "feather-16"], [1, "cat-name"], ["href", "javascript:void(0);"], [1, "product-name"], [1, "d-flex", "align-items-center", "justify-content-between", "price"], [1, "col-sm-2", "col-md-6", "col-lg-3", "col-xl-3", "pe-2"], ["src", "assets/img/products/pos-product-02.png", "alt", "Products"], ["src", "assets/img/products/pos-product-03.png", "alt", "Products"], ["src", "assets/img/products/pos-product-04.png", "alt", "Products"], ["src", "assets/img/products/pos-product-05.png", "alt", "Products"], ["src", "assets/img/products/pos-product-06.png", "alt", "Products"], ["src", "assets/img/products/pos-product-07.png", "alt", "Products"], ["src", "assets/img/products/pos-product-08.png", "alt", "Products"], ["src", "assets/img/products/pos-product-09.png", "alt", "Products"], ["src", "assets/img/products/pos-product-10.png", "alt", "Products"], ["src", "assets/img/products/pos-product-11.png", "alt", "Products"], ["src", "assets/img/products/pos-product-18.png", "alt", "Products"], ["data-tab", "headphones", 1, "tab_content"], [1, "feather", "icon-feather-16"], ["data-tab", "shoes", 1, "tab_content"], ["data-tab", "mobiles", 1, "tab_content"], ["src", "assets/img/products/pos-product-14.png", "alt", "Products"], ["data-tab", "watches", 1, "tab_content"], ["data-tab", "laptops", 1, "tab_content"], ["src", "assets/img/products/pos-product-13.png", "alt", "Products"], ["data-tab", "allcategory", 1, "tab_content"], ["data-tab", "headphone", 1, "tab_content"], ["data-tab", "shoe", 1, "tab_content"], ["data-tab", "mobile", 1, "tab_content"], ["data-tab", "watche", 1, "tab_content"], ["data-tab", "laptop", 1, "tab_content"], [1, "col-md-12", "col-lg-4", "ps-0"], [1, "product-order-list"], [1, "head", "d-flex", "align-items-center", "justify-content-between", "w-100"], [1, ""], ["href", "javascript:void(0);", 1, "confirm-text"], [1, "feather", "icon-trash-2", "feather-16", "text-danger", "me-2", 3, "click"], ["href", "javascript:void(0);", 1, "text-default"], [1, "feather", "icon-more-vertical", "feather-16"], [1, "customer-info", "block-section"], [1, "input-block", "d-flex", "align-items-center"], [1, "flex-grow-1"], ["placeholder", "Walk in Customer", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#create", 1, "btn", "btn-primary", "btn-icon"], [1, "feather", "icon-user-plus", "feather-16"], [1, "input-block"], ["placeholder", "Search Products", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "product-added", "block-section"], [1, "head-text", "d-flex", "align-items-center", "justify-content-between"], [1, "d-flex", "align-items-center", "mb-0"], [1, "count"], ["href", "javascript:void(0);", 1, "d-flex", "align-items-center", "text-danger"], [1, "me-1"], [1, "feather", "icon-x", "feather-16"], [1, "product-wrap"], [1, "product-list", "d-flex", "align-items-center", "justify-content-between"], ["data-bs-toggle", "modal", "data-bs-target", "#products", 1, "d-flex", "align-items-center", "product-info"], ["src", "assets/img/products/pos-product-16.png", "alt", "Products"], [1, "info"], [1, "qty-item", "text-center"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "minus", "matTooltip", "minus", "matTooltipPosition", "above", 1, "dec", "d-flex", "justify-content-center", "align-items-center", 3, "click"], [1, "feather", "icon-minus-circle", "feather-14"], ["type", "text", "name", "qty", "value", "4", 1, "form-control", "text-center", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "plus", "matTooltip", "plus", "matTooltipPosition", "above", 1, "inc", "d-flex", "justify-content-center", "align-items-center", 3, "click"], [1, "feather", "icon-plus-circle", "feather-14"], [1, "d-flex", "align-items-center", "action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-product", 1, "btn-icon", "edit-icon", "me-2"], [1, "feather", "icon-edit", "feather-14"], ["href", "javascript:void(0);", 1, "btn-icon", "delete-icon", "confirm-text", 3, "click"], [1, "feather", "icon-trash-2", "feather-14"], ["src", "assets/img/products/pos-product-17.png", "alt", "Products"], ["type", "text", "name", "qty", "value", "3", 1, "form-control", "text-center", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0); ", 1, "btn-icon", "delete-icon", "confirm-text", 3, "click"], ["href", "javascript:void(0); confirmColor()", 1, "btn-icon", "delete-icon", "confirm-text"], [1, "feather", "icon-trash-2", "feather-14", 3, "click"], [1, "block-section"], [1, "selling-info"], [1, "col-12", "col-sm-4"], ["placeholder", "GST 5%", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["placeholder", "15", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["placeholder", "10%", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "order-total", "table-responsive"], [1, "table", "table-borderless"], [1, "text-end"], [1, "danger"], [1, "danger", "text-end"], [1, "block-section", "payment-method"], [1, "row", "d-flex", "align-items-center", "justify-content-center", "methods"], [1, "col-md-6", "col-lg-4", "item"], [1, "default-cover"], ["src", "assets/img/icons/cash-pay.svg", "alt", "Payment Method"], ["src", "assets/img/icons/credit-card.svg", "alt", "Payment Method"], ["src", "assets/img/icons/qr-scan.svg", "alt", "Payment Method"], [1, "d-grid", "btn-block"], ["href", "javascript:void(0);", 1, "btn", "btn-secondary"], [1, "btn-row", "d-sm-flex", "align-items-center", "justify-content-between"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#hold-order", 1, "btn", "btn-info", "btn-icon", "flex-fill"], [1, "feather", "icon-pause", "feather-16", "me-1"], ["href", "javascript:void(0);", 1, "btn", "btn-danger", "btn-icon", "flex-fill"], [1, "feather", "icon-trash-2", "feather-16", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#payment-completed", 1, "btn", "btn-success", "btn-icon", "flex-fill"], [1, "feather", "icon-credit-card", "feather-16", "me-1"], ["id", "payment-completed", "aria-labelledby", "payment-completed", 1, "modal", "fade", "modal-default"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body", "text-center"], [1, "icon-head"], [1, "feather", "icon-check-circle", "feather-40"], [1, "mb-0"], [1, "modal-footer", "d-sm-flex", "justify-content-between"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#print-receipt", 1, "btn", "btn-primary", "flex-fill"], [1, "feather-arrow-right-circle", "icon-me-5"], ["type", "submit", 1, "btn", "btn-secondary", "flex-fill"], ["id", "print-receipt", "aria-labelledby", "print-receipt", 1, "modal", "fade", "modal-default"], [1, "d-flex", "justify-content-end"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close", "p-0"], ["aria-hidden", "true"], [1, "modal-body"], [1, "icon-head", "text-center"], ["src", "assets/img/logo.png", "width", "100", "height", "30", "alt", "Receipt Logo"], [1, "text-center", "info", "text-center"], ["href", "mailto:examplegmail.com"], [1, "tax-invoice"], [1, "text-center"], [1, "col-sm-12", "col-md-6"], [1, "invoice-user-name"], [1, "table-borderless", "w-100", "table-fit"], ["colspan", "4"], [1, "text-center", "invoice-bar"], ["src", "assets/img/barcode/barcode-03.jpg", "alt", "Barcode"], ["href", "javascript:void(0);", 1, "btn", "btn-primary"], ["id", "products", "aria-labelledby", "products", 1, "modal", "fade", "modal-default", "pos-modal"], [1, "modal-header", "p-4", "d-flex", "align-items-center", "justify-content-between"], [1, "d-flex", "align-items-center"], [1, "me-4"], [1, "badge", "bg-info", "d-inline-block", "mb-0"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], [1, "modal-body", "p-4"], [1, "d-flex", "align-items-center", "flex-fill"], ["href", "javascript:void(0);", 1, "img-bg", "me-2"], [1, "info", "d-flex", "align-items-center", "justify-content-between", "flex-fill"], [1, "modal-footer", "d-sm-flex", "justify-content-end"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "submit", 1, "btn", "btn-primary"], ["id", "create", "tabindex", "-1", "aria-labelledby", "create", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-lg", "modal-dialog-centered"], [1, "modal-header"], [1, "modal-title"], [1, "col-lg-6", "col-sm-12", "col-12"], [1, "input-blocks"], ["type", "text", 1, "form-control"], ["type", "email", 1, "form-control"], ["type", "text"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel"], ["type", "submit", 1, "btn", "btn-submit", "me-2"], ["id", "hold-order", "aria-labelledby", "hold-order", 1, "modal", "fade", "modal-default", "pos-modal"], [1, "modal-header", "p-4"], [1, "text-center", "p-4"], ["type", "text", "value", "", "placeholder", "", 1, "form-control"], ["id", "edit-product", "aria-labelledby", "edit-product", 1, "modal", "fade", "modal-default", "pos-modal"], [1, "input-blocks", "add-product"], ["type", "text", "placeholder", "45"], ["placeholder", "Exclusive", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["type", "text", "placeholder", "% 15"], ["placeholder", "Percentage", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["type", "text", "placeholder", "15"], ["placeholder", "Kilogram", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["id", "recents", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade", "pos-modal"], [1, "tabs-sets"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], ["role", "presentation", 1, "nav-item"], ["id", "purchase-tab", "data-bs-toggle", "tab", "data-bs-target", "#purchase", "type", "button", "aria-controls", "purchase", "aria-selected", "true", "role", "tab", 1, "nav-link", "active"], ["id", "payment-tab", "data-bs-toggle", "tab", "data-bs-target", "#payment", "type", "button", "aria-controls", "payment", "aria-selected", "false", "role", "tab", 1, "nav-link"], ["id", "return-tab", "data-bs-toggle", "tab", "data-bs-target", "#return", "type", "button", "aria-controls", "return", "aria-selected", "false", "role", "tab", 1, "nav-link"], [1, "tab-content"], ["id", "purchase", "role", "tabpanel", "aria-labelledby", "purchase-tab", 1, "tab-pane", "fade", "show", "active"], [1, "table-top"], [1, "search-set"], [1, "search-input"], [1, "btn", "btn-searchset", "d-flex", "align-items-center", "h-100"], ["src", "assets/img/icons/search-white.svg", "alt", "img"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search...", 1, "form-control"], [1, "wordset"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf", "matTooltip", "Pdf", "matTooltipPosition", "above", 1, "d-flex", "align-items-center", "justify-content-center"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel", "matTooltip", "Excel", "matTooltipPosition", "above", 1, "d-flex", "align-items-center", "justify-content-center"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Print", "matTooltip", "Print", "matTooltipPosition", "above", 1, "d-flex", "align-items-center", "justify-content-center"], [1, "feather", "icon-printer", "feather-rotate-ccw"], [1, "table-responsive"], ["matSort", "", 1, "table", "datanew", 3, "matSortChange"], ["mat-sort-header", "date"], ["mat-sort-header", "reference"], ["mat-sort-header", "customer"], ["mat-sort-header", "amount"], [1, "no-sort"], ["id", "payment", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "return", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "orders", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade", "pos-modal"], ["role", "document", 1, "modal-dialog", "modal-md", "modal-dialog-centered"], ["id", "myTabs", "role", "tablist", 1, "nav", "nav-tabs"], ["id", "onhold-tab", "data-bs-toggle", "tab", "data-bs-target", "#onhold", "type", "button", "aria-controls", "onhold", "aria-selected", "true", "role", "tab", 1, "nav-link", "active"], ["id", "unpaid-tab", "data-bs-toggle", "tab", "data-bs-target", "#unpaid", "type", "button", "aria-controls", "unpaid", "aria-selected", "false", "role", "tab", 1, "nav-link"], ["id", "paid-tab", "data-bs-toggle", "tab", "data-bs-target", "#paid", "type", "button", "aria-controls", "paid", "aria-selected", "false", "role", "tab", 1, "nav-link"], ["id", "onhold", "role", "tabpanel", "aria-labelledby", "onhold-tab", 1, "tab-pane", "fade", "show", "active"], [1, "search-set", "w-100", "search-order"], [1, "search-input", "w-100"], [1, "order-body"], [1, "default-cover", "p-4", "mb-4"], [1, "badge", "bg-secondary", "d-inline-block", "mb-4"], [1, "col-sm-12", "col-md-6", "record", "mb-3"], [1, "colon"], [1, "text"], [1, "p-4"], ["href", "javascript:void(0);", 1, "btn", "btn-info", "btn-icon", "flex-fill"], ["href", "javascript:void(0);", 1, "btn", "btn-success", "btn-icon", "flex-fill"], [1, "btn-row", "d-flex", "align-items-center", "justify-content-between"], [1, "default-cover", "p-4"], [1, "p-4", "mb-4"], ["id", "unpaid", "role", "tabpanel", 1, "tab-pane", "fade"], [1, "badge", "bg-info", "d-inline-block", "mb-4"], ["id", "paid", "role", "tabpanel", 1, "tab-pane", "fade"], [1, "badge", "bg-primary", "d-inline-block", "mb-4"], ["id", "all"], ["src", "assets/img/categories/category-01.png", "alt", "Categories"], ["id", "headphones"], ["src", "assets/img/categories/category-02.png", "alt", "Categories"], ["id", "shoes"], ["src", "assets/img/categories/category-03.png", "alt", "Categories"], ["id", "mobiles"], ["src", "assets/img/categories/category-04.png", "alt", "Categories"], ["id", "watches"], ["src", "assets/img/categories/category-05.png", "alt", "Categories"], ["id", "laptops"], ["src", "assets/img/categories/category-06.png", "alt", "Categories"], ["id", "allcategory"], ["id", "headphone"], ["id", "shoe"], ["id", "mobile"], ["id", "watche"], ["id", "laptop"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", 1, "me-2", "p-2"], [1, "feather", "icon-eye", "feather-eye"], [1, "feather", "icon-edit", "feather-edit"], ["href", "javascript:void(0);", 1, "p-2", "confirm-text", 3, "click"], [1, "feather", "icon-trash-2", "feather-trash-2"]],
      template: function PosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2)(3, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "View Orders");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "a", 5)(7, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Reset");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "a", 7)(11, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Transaction");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 9)(15, "div", 10)(16, "div", 11)(17, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Select From Below Categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "ul", 12)(22, "owl-carousel-o", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, PosComponent_ng_template_23_Template, 8, 0, "ng-template", 14)(24, PosComponent_ng_template_24_Template, 8, 0, "ng-template", 14)(25, PosComponent_ng_template_25_Template, 8, 0, "ng-template", 14)(26, PosComponent_ng_template_26_Template, 8, 0, "ng-template", 14)(27, PosComponent_ng_template_27_Template, 8, 0, "ng-template", 14)(28, PosComponent_ng_template_28_Template, 8, 0, "ng-template", 14)(29, PosComponent_ng_template_29_Template, 8, 0, "ng-template", 14)(30, PosComponent_ng_template_30_Template, 0, 0, "ng-template", 14)(31, PosComponent_ng_template_31_Template, 8, 0, "ng-template", 14)(32, PosComponent_ng_template_32_Template, 8, 0, "ng-template", 14)(33, PosComponent_ng_template_33_Template, 8, 0, "ng-template", 14)(34, PosComponent_ng_template_34_Template, 8, 0, "ng-template", 14)(35, PosComponent_ng_template_35_Template, 8, 0, "ng-template", 14)(36, PosComponent_ng_template_36_Template, 8, 0, "ng-template", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 15)(38, "div", 16)(39, "h5", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 18)(42, "div", 19)(43, "div", 20)(44, "div", 21)(45, "div", 22)(46, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "img", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](49, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "h6", 26)(51, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Mobiles");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "h6", 28)(54, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "IPhone 14 64GB");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 29)(57, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "30 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "$15800");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 30)(62, "div", 22)(63, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](64, "img", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](66, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "h6", 26)(68, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69, "Computer");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "h6", 28)(71, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "MacBook Pro");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "div", 29)(74, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "140 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, "$1000");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 30)(79, "div", 22)(80, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](81, "img", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](83, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "h6", 26)(85, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86, "Watches");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "h6", 28)(88, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89, "Rolex Tribute V3");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "div", 29)(91, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92, "220 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](94, "$6800");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "div", 30)(96, "div", 22)(97, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](98, "img", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](100, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "h6", 26)(102, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](103, "Shoes");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "h6", 28)(105, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](106, "Red Nike Angelo");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "div", 29)(108, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](109, "78 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](111, "$7800");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "div", 30)(113, "div", 22)(114, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](115, "img", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](116, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](117, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "h6", 26)(119, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](120, "Headphones");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](121, "h6", 28)(122, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](123, "Airpod 2");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](124, "div", 29)(125, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](126, "47 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](127, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](128, "$5478");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](129, "div", 30)(130, "div", 22)(131, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](132, "img", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](133, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](134, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](135, "h6", 26)(136, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](137, "Shoes");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](138, "h6", 28)(139, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](140, "Blue White OGR");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](141, "div", 29)(142, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](143, "54 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](144, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](145, "$987");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](146, "div", 30)(147, "div", 22)(148, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](149, "img", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](150, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](151, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](152, "h6", 26)(153, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](154, "Laptop");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](155, "h6", 28)(156, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](157, "IdeaPad Slim 5 Gen 7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](158, "div", 29)(159, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](160, "74 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](161, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](162, "$1454");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](163, "div", 30)(164, "div", 22)(165, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](166, "img", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](167, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](168, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](169, "h6", 26)(170, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](171, "Headphones");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](172, "h6", 28)(173, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](174, "SWAGME");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](175, "div", 29)(176, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](177, "14 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](178, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](179, "$6587");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](180, "div", 30)(181, "div", 22)(182, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](183, "img", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](184, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](185, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](186, "h6", 26)(187, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](188, "Watches");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](189, "h6", 28)(190, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](191, "Timex Black SIlver");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](192, "div", 29)(193, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](194, "24 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](195, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](196, "$1457");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](197, "div", 30)(198, "div", 22)(199, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](200, "img", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](201, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](202, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](203, "h6", 26)(204, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](205, "Computer");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](206, "h6", 28)(207, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](208, "Tablet 1.02 inch");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](209, "div", 29)(210, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](211, "14 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](212, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](213, "$4744");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](214, "div", 30)(215, "div", 22)(216, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](217, "img", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](218, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](219, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](220, "h6", 26)(221, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](222, "Watches");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](223, "h6", 28)(224, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](225, "Fossil Pair Of 3 in 1 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](226, "div", 29)(227, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](228, "40 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](229, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](230, "$789");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](231, "div", 30)(232, "div", 22)(233, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](234, "img", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](235, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](236, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](237, "h6", 26)(238, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](239, "Shoes");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](240, "h6", 28)(241, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](242, "Green Nike Fe");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](243, "div", 29)(244, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](245, "78 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](246, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](247, "$7847");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](248, "div", 42)(249, "div", 20)(250, "div", 30)(251, "div", 22)(252, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](253, "img", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](254, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](255, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](256, "h6", 26)(257, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](258, "Headphones");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](259, "h6", 28)(260, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](261, "Airpod 2");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](262, "div", 29)(263, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](264, "47 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](265, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](266, "$5478");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](267, "div", 30)(268, "div", 22)(269, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](270, "img", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](271, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](272, "i", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](273, "h6", 26)(274, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](275, "Headphones");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](276, "h6", 28)(277, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](278, "SWAGME");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](279, "div", 29)(280, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](281, "14 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](282, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](283, "$6587");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](284, "div", 44)(285, "div", 20)(286, "div", 30)(287, "div", 22)(288, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](289, "img", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](290, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](291, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](292, "h6", 26)(293, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](294, "Shoes");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](295, "h6", 28)(296, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](297, "Red Nike Angelo");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](298, "div", 29)(299, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](300, "78 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](301, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](302, "$7800");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](303, "div", 30)(304, "div", 22)(305, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](306, "img", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](307, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](308, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](309, "h6", 26)(310, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](311, "Shoes");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](312, "h6", 28)(313, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](314, "Blue White OGR");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](315, "div", 29)(316, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](317, "54 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](318, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](319, "$987");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](320, "div", 30)(321, "div", 22)(322, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](323, "img", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](324, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](325, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](326, "h6", 26)(327, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](328, "Shoes");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](329, "h6", 28)(330, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](331, "Green Nike Fe");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](332, "div", 29)(333, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](334, "78 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](335, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](336, "$7847");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](337, "div", 45)(338, "div", 20)(339, "div", 21)(340, "div", 22)(341, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](342, "img", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](343, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](344, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](345, "h6", 26)(346, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](347, "Mobiles");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](348, "h6", 28)(349, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](350, "IPhone 14 64GB");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](351, "div", 29)(352, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](353, "30 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](354, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](355, "$15800");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](356, "div", 30)(357, "div", 22)(358, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](359, "img", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](360, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](361, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](362, "h6", 26)(363, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](364, "Mobiles");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](365, "h6", 28)(366, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](367, "Iphone 11");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](368, "div", 29)(369, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](370, "14 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](371, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](372, "$3654");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](373, "div", 47)(374, "div", 20)(375, "div", 30)(376, "div", 22)(377, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](378, "img", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](379, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](380, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](381, "h6", 26)(382, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](383, "Watches");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](384, "h6", 28)(385, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](386, "Rolex Tribute V3");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](387, "div", 29)(388, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](389, "220 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](390, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](391, "$6800");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](392, "div", 30)(393, "div", 22)(394, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](395, "img", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](396, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](397, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](398, "h6", 26)(399, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](400, "Watches");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](401, "h6", 28)(402, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](403, "Timex Black SIlver");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](404, "div", 29)(405, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](406, "24 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](407, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](408, "$1457");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](409, "div", 30)(410, "div", 22)(411, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](412, "img", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](413, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](414, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](415, "h6", 26)(416, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](417, "Watches");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](418, "h6", 28)(419, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](420, "Fossil Pair Of 3 in 1 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](421, "div", 29)(422, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](423, "40 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](424, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](425, "$789");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](426, "div", 48)(427, "div", 20)(428, "div", 30)(429, "div", 22)(430, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](431, "img", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](432, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](433, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](434, "h6", 26)(435, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](436, "Computer");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](437, "h6", 28)(438, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](439, "MacBook Pro");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](440, "div", 29)(441, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](442, "140 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](443, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](444, "$1000");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](445, "div", 30)(446, "div", 22)(447, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](448, "img", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](449, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](450, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](451, "h6", 26)(452, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](453, "Laptop");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](454, "h6", 28)(455, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](456, "IdeaPad Slim 5 Gen 7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](457, "div", 29)(458, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](459, "74 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](460, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](461, "$1454");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](462, "div", 30)(463, "div", 22)(464, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](465, "img", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](466, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](467, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](468, "h6", 26)(469, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](470, "Computer");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](471, "h6", 28)(472, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](473, "Tablet 1.02 inch");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](474, "div", 29)(475, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](476, "14 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](477, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](478, "$4744");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](479, "div", 30)(480, "div", 22)(481, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](482, "img", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](483, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](484, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](485, "h6", 26)(486, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](487, "Laptop");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](488, "h6", 28)(489, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](490, "Yoga Book 9i");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](491, "div", 29)(492, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](493, "65 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](494, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](495, "$4784");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](496, "div", 30)(497, "div", 22)(498, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](499, "img", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](500, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](501, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](502, "h6", 26)(503, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](504, "Laptop");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](505, "h6", 28)(506, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](507, "IdeaPad Slim 3i");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](508, "div", 29)(509, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](510, "47 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](511, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](512, "$1245");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](513, "div", 50)(514, "div", 20)(515, "div", 21)(516, "div", 22)(517, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](518, "img", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](519, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](520, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](521, "h6", 26)(522, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](523, "Mobiles");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](524, "h6", 28)(525, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](526, "IPhone 14 64GB");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](527, "div", 29)(528, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](529, "30 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](530, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](531, "$15800");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](532, "div", 30)(533, "div", 22)(534, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](535, "img", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](536, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](537, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](538, "h6", 26)(539, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](540, "Computer");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](541, "h6", 28)(542, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](543, "MacBook Pro");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](544, "div", 29)(545, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](546, "140 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](547, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](548, "$1000");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](549, "div", 30)(550, "div", 22)(551, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](552, "img", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](553, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](554, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](555, "h6", 26)(556, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](557, "Watches");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](558, "h6", 28)(559, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](560, "Rolex Tribute V3");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](561, "div", 29)(562, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](563, "220 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](564, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](565, "$6800");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](566, "div", 30)(567, "div", 22)(568, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](569, "img", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](570, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](571, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](572, "h6", 26)(573, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](574, "Shoes");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](575, "h6", 28)(576, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](577, "Red Nike Angelo");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](578, "div", 29)(579, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](580, "78 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](581, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](582, "$7800");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](583, "div", 30)(584, "div", 22)(585, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](586, "img", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](587, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](588, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](589, "h6", 26)(590, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](591, "Headphones");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](592, "h6", 28)(593, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](594, "Airpod 2");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](595, "div", 29)(596, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](597, "47 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](598, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](599, "$5478");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](600, "div", 30)(601, "div", 22)(602, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](603, "img", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](604, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](605, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](606, "h6", 26)(607, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](608, "Shoes");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](609, "h6", 28)(610, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](611, "Blue White OGR");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](612, "div", 29)(613, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](614, "54 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](615, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](616, "$987");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](617, "div", 30)(618, "div", 22)(619, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](620, "img", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](621, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](622, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](623, "h6", 26)(624, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](625, "Laptop");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](626, "h6", 28)(627, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](628, "IdeaPad Slim 5 Gen 7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](629, "div", 29)(630, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](631, "74 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](632, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](633, "$1454");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](634, "div", 30)(635, "div", 22)(636, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](637, "img", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](638, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](639, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](640, "h6", 26)(641, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](642, "Headphones");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](643, "h6", 28)(644, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](645, "SWAGME");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](646, "div", 29)(647, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](648, "14 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](649, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](650, "$6587");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](651, "div", 30)(652, "div", 22)(653, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](654, "img", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](655, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](656, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](657, "h6", 26)(658, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](659, "Watches");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](660, "h6", 28)(661, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](662, "Timex Black SIlver");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](663, "div", 29)(664, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](665, "24 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](666, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](667, "$1457");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](668, "div", 30)(669, "div", 22)(670, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](671, "img", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](672, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](673, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](674, "h6", 26)(675, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](676, "Computer");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](677, "h6", 28)(678, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](679, "Tablet 1.02 inch");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](680, "div", 29)(681, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](682, "14 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](683, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](684, "$4744");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](685, "div", 30)(686, "div", 22)(687, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](688, "img", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](689, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](690, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](691, "h6", 26)(692, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](693, "Watches");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](694, "h6", 28)(695, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](696, "Fossil Pair Of 3 in 1 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](697, "div", 29)(698, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](699, "40 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](700, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](701, "$789");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](702, "div", 30)(703, "div", 22)(704, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](705, "img", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](706, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](707, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](708, "h6", 26)(709, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](710, "Shoes");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](711, "h6", 28)(712, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](713, "Green Nike Fe");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](714, "div", 29)(715, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](716, "78 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](717, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](718, "$7847");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](719, "div", 51)(720, "div", 20)(721, "div", 30)(722, "div", 22)(723, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](724, "img", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](725, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](726, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](727, "h6", 26)(728, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](729, "Headphones");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](730, "h6", 28)(731, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](732, "Airpod 2");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](733, "div", 29)(734, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](735, "47 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](736, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](737, "$5478");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](738, "div", 30)(739, "div", 22)(740, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](741, "img", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](742, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](743, "i", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](744, "h6", 26)(745, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](746, "Headphones");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](747, "h6", 28)(748, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](749, "SWAGME");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](750, "div", 29)(751, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](752, "14 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](753, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](754, "$6587");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](755, "div", 52)(756, "div", 20)(757, "div", 30)(758, "div", 22)(759, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](760, "img", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](761, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](762, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](763, "h6", 26)(764, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](765, "Shoes");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](766, "h6", 28)(767, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](768, "Red Nike Angelo");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](769, "div", 29)(770, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](771, "78 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](772, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](773, "$7800");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](774, "div", 30)(775, "div", 22)(776, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](777, "img", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](778, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](779, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](780, "h6", 26)(781, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](782, "Shoes");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](783, "h6", 28)(784, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](785, "Blue White OGR");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](786, "div", 29)(787, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](788, "54 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](789, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](790, "$987");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](791, "div", 30)(792, "div", 22)(793, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](794, "img", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](795, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](796, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](797, "h6", 26)(798, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](799, "Shoes");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](800, "h6", 28)(801, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](802, "Green Nike Fe");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](803, "div", 29)(804, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](805, "78 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](806, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](807, "$7847");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](808, "div", 53)(809, "div", 20)(810, "div", 21)(811, "div", 22)(812, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](813, "img", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](814, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](815, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](816, "h6", 26)(817, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](818, "Mobiles");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](819, "h6", 28)(820, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](821, "IPhone 14 64GB");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](822, "div", 29)(823, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](824, "30 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](825, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](826, "$15800");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](827, "div", 30)(828, "div", 22)(829, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](830, "img", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](831, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](832, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](833, "h6", 26)(834, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](835, "Mobiles");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](836, "h6", 28)(837, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](838, "Iphone 11");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](839, "div", 29)(840, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](841, "14 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](842, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](843, "$3654");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](844, "div", 54)(845, "div", 20)(846, "div", 30)(847, "div", 22)(848, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](849, "img", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](850, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](851, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](852, "h6", 26)(853, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](854, "Watches");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](855, "h6", 28)(856, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](857, "Rolex Tribute V3");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](858, "div", 29)(859, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](860, "220 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](861, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](862, "$6800");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](863, "div", 30)(864, "div", 22)(865, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](866, "img", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](867, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](868, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](869, "h6", 26)(870, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](871, "Watches");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](872, "h6", 28)(873, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](874, "Timex Black SIlver");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](875, "div", 29)(876, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](877, "24 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](878, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](879, "$1457");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](880, "div", 30)(881, "div", 22)(882, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](883, "img", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](884, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](885, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](886, "h6", 26)(887, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](888, "Watches");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](889, "h6", 28)(890, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](891, "Fossil Pair Of 3 in 1 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](892, "div", 29)(893, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](894, "40 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](895, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](896, "$789");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](897, "div", 55)(898, "div", 20)(899, "div", 30)(900, "div", 22)(901, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](902, "img", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](903, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](904, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](905, "h6", 26)(906, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](907, "Computer");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](908, "h6", 28)(909, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](910, "MacBook Pro");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](911, "div", 29)(912, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](913, "140 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](914, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](915, "$1000");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](916, "div", 30)(917, "div", 22)(918, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](919, "img", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](920, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](921, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](922, "h6", 26)(923, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](924, "Laptop");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](925, "h6", 28)(926, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](927, "IdeaPad Slim 5 Gen 7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](928, "div", 29)(929, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](930, "74 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](931, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](932, "$1454");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](933, "div", 30)(934, "div", 22)(935, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](936, "img", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](937, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](938, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](939, "h6", 26)(940, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](941, "Computer");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](942, "h6", 28)(943, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](944, "Tablet 1.02 inch");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](945, "div", 29)(946, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](947, "14 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](948, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](949, "$4744");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](950, "div", 30)(951, "div", 22)(952, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](953, "img", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](954, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](955, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](956, "h6", 26)(957, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](958, "Laptop");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](959, "h6", 28)(960, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](961, "Yoga Book 9i");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](962, "div", 29)(963, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](964, "65 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](965, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](966, "$4784");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](967, "div", 30)(968, "div", 22)(969, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](970, "img", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](971, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](972, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](973, "h6", 26)(974, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](975, "Laptop");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](976, "h6", 28)(977, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](978, "IdeaPad Slim 3i");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](979, "div", 29)(980, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](981, "47 Pcs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](982, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](983, "$1245");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](984, "div", 56)(985, "aside", 57)(986, "div", 58)(987, "div", 59)(988, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](989, "Order List");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](990, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](991, "Transaction ID : #65565");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](992, "div", 59)(993, "a", 60)(994, "i", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PosComponent_Template_i_click_994_listener() {
            return ctx.confirmColor();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](995, "a", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](996, "i", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](997, "div", 64)(998, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](999, "Customer Information");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1000, "div", 65)(1001, "div", 66)(1002, "mat-select", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PosComponent_Template_mat_select_ngModelChange_1002_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.selectedValue1, $event) || (ctx.selectedValue1 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](1003, PosComponent_For_1004_Template, 2, 2, "mat-option", 68, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1005, "a", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1006, "i", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1007, "div", 71)(1008, "mat-select", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PosComponent_Template_mat_select_ngModelChange_1008_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.selectedValue2, $event) || (ctx.selectedValue2 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](1009, PosComponent_For_1010_Template, 2, 2, "mat-option", 68, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1011, "div", 73)(1012, "div", 74)(1013, "h6", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1014, " Product Added");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1015, "span", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1016, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1017, "a", 77)(1018, "span", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1019, "i", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1020, "Clear all");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1021, "div", 80)(1022, "div", 81)(1023, "div", 82)(1024, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1025, "img", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1026, "div", 84)(1027, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1028, "PT0005");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1029, "h6")(1030, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1031, "Red Nike Laser");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1032, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1033, "$2000");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1034, "div", 85)(1035, "a", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PosComponent_Template_a_click_1035_listener() {
            return ctx.reducePos(0);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1036, "i", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1037, "input", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PosComponent_Template_input_ngModelChange_1037_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.cartValue[0], $event) || (ctx.cartValue[0] = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1038, "a", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PosComponent_Template_a_click_1038_listener() {
            return ctx.addPos(0);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1039, "i", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1040, "div", 91)(1041, "a", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1042, "i", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1043, "a", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PosComponent_Template_a_click_1043_listener() {
            return ctx.confirmColor();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1044, "i", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1045, "div", 81)(1046, "div", 82)(1047, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1048, "img", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1049, "div", 84)(1050, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1051, "PT0235");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1052, "h6")(1053, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1054, "Iphone 14");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1055, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1056, "$3000");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1057, "div", 85)(1058, "a", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PosComponent_Template_a_click_1058_listener() {
            return ctx.reducePos(1);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1059, "i", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1060, "input", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PosComponent_Template_input_ngModelChange_1060_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.cartValue[1], $event) || (ctx.cartValue[1] = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1061, "a", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PosComponent_Template_a_click_1061_listener() {
            return ctx.addPos(1);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1062, "i", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1063, "div", 91)(1064, "a", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1065, "i", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1066, "a", 98);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PosComponent_Template_a_click_1066_listener() {
            return ctx.confirmColor();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1067, "i", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1068, "div", 81)(1069, "div", 82)(1070, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1071, "img", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1072, "div", 84)(1073, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1074, "PT0005");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1075, "h6")(1076, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1077, "Red Nike Laser");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1078, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1079, "$2000");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1080, "div", 85)(1081, "a", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PosComponent_Template_a_click_1081_listener() {
            return ctx.reducePos(1);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1082, "i", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1083, "input", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PosComponent_Template_input_ngModelChange_1083_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.cartValue[1], $event) || (ctx.cartValue[1] = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1084, "a", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PosComponent_Template_a_click_1084_listener() {
            return ctx.addPos(1);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1085, "i", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1086, "div", 91)(1087, "a", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1088, "i", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1089, "a", 99)(1090, "i", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PosComponent_Template_i_click_1090_listener() {
            return ctx.confirmColor();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1091, "div", 81)(1092, "div", 82)(1093, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1094, "img", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1095, "div", 84)(1096, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1097, "PT0005");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1098, "h6")(1099, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1100, "Red Nike Laser");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1101, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1102, "$2000");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1103, "div", 85)(1104, "a", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PosComponent_Template_a_click_1104_listener() {
            return ctx.reducePos(0);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1105, "i", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1106, "input", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PosComponent_Template_input_ngModelChange_1106_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.cartValue[0], $event) || (ctx.cartValue[0] = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1107, "a", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PosComponent_Template_a_click_1107_listener() {
            return ctx.addPos(0);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1108, "i", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1109, "div", 91)(1110, "a", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1111, "i", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1112, "a", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PosComponent_Template_a_click_1112_listener() {
            return ctx.confirmColor();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1113, "i", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1114, "div", 101)(1115, "div", 102)(1116, "div", 20)(1117, "div", 103)(1118, "div", 71)(1119, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1120, "Order Tax");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1121, "mat-select", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PosComponent_Template_mat_select_ngModelChange_1121_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.selectedValue3, $event) || (ctx.selectedValue3 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](1122, PosComponent_For_1123_Template, 2, 2, "mat-option", 68, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1124, "div", 103)(1125, "div", 71)(1126, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1127, "Shipping");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1128, "mat-select", 105);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PosComponent_Template_mat_select_ngModelChange_1128_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.selectedValue4, $event) || (ctx.selectedValue4 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](1129, PosComponent_For_1130_Template, 2, 2, "mat-option", 68, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1131, "div", 103)(1132, "div", 71)(1133, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1134, "Discount");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1135, "mat-select", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PosComponent_Template_mat_select_ngModelChange_1135_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.selectedValue5, $event) || (ctx.selectedValue5 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](1136, PosComponent_For_1137_Template, 2, 2, "mat-option", 68, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1138, "div", 107)(1139, "table", 108)(1140, "tbody")(1141, "tr")(1142, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1143, "Sub Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1144, "td", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1145, "$60,454");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1146, "tr")(1147, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1148, "Tax (GST 5%)");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1149, "td", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1150, "$40.21");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1151, "tr")(1152, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1153, "Shipping");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1154, "td", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1155, "$40.21");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1156, "tr")(1157, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1158, "Sub Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1159, "td", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1160, "$60,454");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1161, "tr")(1162, "td", 110);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1163, "Discount (10%)");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1164, "td", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1165, "$15.21");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1166, "tr")(1167, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1168, "Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1169, "td", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1170, "$64,024.5");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1171, "div", 112)(1172, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1173, "Payment Method");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1174, "div", 113)(1175, "div", 114)(1176, "div", 115)(1177, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1178, "img", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1179, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1180, "Cash");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1181, "div", 114)(1182, "div", 115)(1183, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1184, "img", 117);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1185, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1186, "Debit Card");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1187, "div", 114)(1188, "div", 115)(1189, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1190, "img", 118);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1191, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1192, "Scan");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1193, "div", 119)(1194, "a", 120);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1195, " Grand Total : $64,024.5 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1196, "div", 121)(1197, "a", 122)(1198, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1199, "i", 123);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1200, "Hold");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1201, "a", 124)(1202, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1203, "i", 125);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1204, "Void");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1205, "a", 126)(1206, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1207, "i", 127);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1208, "Payment");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1209, "div", 128)(1210, "div", 129)(1211, "div", 130)(1212, "div", 131)(1213, "form")(1214, "div", 132)(1215, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1216, "i", 133);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1217, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1218, "Payment Completed");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1219, "p", 134);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1220, " Do you want to Print Receipt for the Completed Order ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1221, "div", 135)(1222, "button", 136);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1223, " Print Receipt");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1224, "i", 137);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1225, "button", 138);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1226, " Next Order");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1227, "i", 137);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1228, "div", 139)(1229, "div", 129)(1230, "div", 130)(1231, "div", 140)(1232, "button", 141)(1233, "span", 142);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1234, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1235, "div", 143)(1236, "div", 144)(1237, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1238, "img", 145);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1239, "div", 146)(1240, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1241, "Dreamguys Technologies Pvt Ltd.,");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1242, "p", 134);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1243, "Phone Number: +1 5656665656");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1244, "p", 134);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1245, " Email: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1246, "a", 147);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1247, "examplegmail.com");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1248, "div", 148)(1249, "h6", 149);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1250, "Tax Invoice");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1251, "div", 20)(1252, "div", 150)(1253, "div", 151)(1254, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1255, "Name: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1256, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1257, "John Doe");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1258, "div", 151)(1259, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1260, "Invoice No: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1261, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1262, "CS132453");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1263, "div", 150)(1264, "div", 151)(1265, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1266, "Customer Id: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1267, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1268, "#LL93784");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1269, "div", 151)(1270, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1271, "Date: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1272, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1273, "01.07.2022");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1274, "table", 152)(1275, "thead")(1276, "tr")(1277, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1278, "# Item");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1279, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1280, "Price");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1281, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1282, "Qty");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1283, "th", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1284, "Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1285, "tbody")(1286, "tr")(1287, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1288, "1. Red Nike Laser");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1289, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1290, "$50");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1291, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1292, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1293, "td", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1294, "$150");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1295, "tr")(1296, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1297, "2. Iphone 14");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1298, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1299, "$50");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1300, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1301, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1302, "td", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1303, "$100");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1304, "tr")(1305, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1306, "3. Apple Series 8");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1307, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1308, "$50");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1309, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1310, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1311, "td", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1312, "$150");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1313, "tr")(1314, "td", 153)(1315, "table", 152)(1316, "tr")(1317, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1318, "Sub Total :");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1319, "td", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1320, "$700.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1321, "tr")(1322, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1323, "Discount :");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1324, "td", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1325, "-$50.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1326, "tr")(1327, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1328, "Shipping :");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1329, "td", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1330, "0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1331, "tr")(1332, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1333, "Tax (5%) :");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1334, "td", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1335, "$5.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1336, "tr")(1337, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1338, "Total Bill :");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1339, "td", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1340, "$655.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1341, "tr")(1342, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1343, "Due :");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1344, "td", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1345, "$0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1346, "tr")(1347, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1348, "Total Payable :");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1349, "td", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1350, "$655.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1351, "div", 154)(1352, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1353, " **VAT against this challan is payable through central registration. Thank you for your business! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1354, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1355, "img", 155);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1356, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1357, "Sale 31");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1358, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1359, "Thank You For Shopping With Us. Please Come Again");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1360, "a", 156);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1361, "Print Receipt");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1362, "div", 157)(1363, "div", 129)(1364, "div", 130)(1365, "div", 158)(1366, "div", 159)(1367, "h5", 160);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1368, "Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1369, "span", 161);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1370, "Order ID : #666614");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1371, "button", 162)(1372, "span", 142);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1373, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1374, "div", 163)(1375, "form")(1376, "div", 80)(1377, "div", 81)(1378, "div", 164)(1379, "a", 165);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1380, "img", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1381, "div", 166)(1382, "div")(1383, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1384, "PT0005");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1385, "h6")(1386, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1387, "Red Nike Laser");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1388, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1389, "$2000");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1390, "div", 81)(1391, "div", 164)(1392, "a", 165);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1393, "img", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1394, "div", 166)(1395, "div")(1396, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1397, "PT0235");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1398, "h6")(1399, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1400, "Iphone 14");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1401, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1402, "$3000");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1403, "div", 81)(1404, "div", 164)(1405, "a", 165);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1406, "img", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1407, "div", 166)(1408, "div")(1409, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1410, "PT0005");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1411, "h6")(1412, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1413, "Red Nike Laser");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1414, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1415, "$2000");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1416, "div", 81)(1417, "div", 164)(1418, "a", 165);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1419, "img", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1420, "div", 166)(1421, "div")(1422, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1423, "PT0005");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1424, "h6")(1425, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1426, "Red Nike Laser");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1427, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1428, "$2000");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1429, "div", 167)(1430, "button", 168);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1431, " Cancel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1432, "button", 169);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1433, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1434, "div", 170)(1435, "div", 171)(1436, "div", 130)(1437, "div", 172)(1438, "h5", 173);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1439, "Create");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1440, "button", 162)(1441, "span", 142);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1442, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1443, "div", 143)(1444, "form")(1445, "div", 20)(1446, "div", 174)(1447, "div", 175)(1448, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1449, "Customer Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1450, "input", 176);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1451, "div", 174)(1452, "div", 175)(1453, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1454, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1455, "input", 177);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1456, "div", 174)(1457, "div", 175)(1458, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1459, "Phone");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1460, "input", 176);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1461, "div", 174)(1462, "div", 175)(1463, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1464, "Country");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1465, "input", 176);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1466, "div", 174)(1467, "div", 175)(1468, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1469, "City");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1470, "input", 178);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1471, "div", 174)(1472, "div", 175)(1473, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1474, "Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1475, "input", 178);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1476, "div", 167)(1477, "button", 179);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1478, " Cancel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1479, "button", 180);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1480, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1481, "div", 181)(1482, "div", 129)(1483, "div", 130)(1484, "div", 182)(1485, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1486, "Hold order");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1487, "button", 162)(1488, "span", 142);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1489, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1490, "div", 163)(1491, "form")(1492, "h2", 183);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1493, "4500.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1494, "div", 71)(1495, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1496, "Order Reference");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1497, "input", 184);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1498, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1499, " The current order will be set on hold. You can retreive this order from the pending order button. Providing a reference to it might help you to identify the order more quickly. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1500, "div", 167)(1501, "button", 168);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1502, " Cancel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1503, "button", 169);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1504, "Confirm");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1505, "div", 185)(1506, "div", 129)(1507, "div", 130)(1508, "div", 182)(1509, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1510, "Red Nike Laser");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1511, "button", 162)(1512, "span", 142);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1513, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1514, "div", 163)(1515, "form")(1516, "div", 20)(1517, "div", 174)(1518, "div", 186)(1519, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1520, "Product Name ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1521, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1522, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1523, "input", 187);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1524, "div", 174)(1525, "div", 186)(1526, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1527, "Tax Type ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1528, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1529, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1530, "mat-select", 188);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PosComponent_Template_mat_select_ngModelChange_1530_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.selectedValue8, $event) || (ctx.selectedValue8 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](1531, PosComponent_For_1532_Template, 2, 2, "mat-option", 68, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1533, "div", 174)(1534, "div", 186)(1535, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1536, "Tax ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1537, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1538, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1539, "input", 189);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1540, "div", 174)(1541, "div", 186)(1542, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1543, "Discount Type ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1544, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1545, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1546, "mat-select", 190);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PosComponent_Template_mat_select_ngModelChange_1546_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.selectedValue6, $event) || (ctx.selectedValue6 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](1547, PosComponent_For_1548_Template, 2, 2, "mat-option", 68, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1549, "div", 174)(1550, "div", 186)(1551, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1552, "Discount ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1553, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1554, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1555, "input", 191);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1556, "div", 174)(1557, "div", 186)(1558, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1559, "Sale Unit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1560, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1561, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1562, "mat-select", 192);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PosComponent_Template_mat_select_ngModelChange_1562_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.selectedValue7, $event) || (ctx.selectedValue7 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](1563, PosComponent_For_1564_Template, 2, 2, "mat-option", 68, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1565, "div", 167)(1566, "button", 168);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1567, " Cancel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1568, "button", 169);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1569, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1570, "div", 193)(1571, "div", 171)(1572, "div", 130)(1573, "div", 182)(1574, "h5", 173);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1575, "Recent Transactions");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1576, "button", 162)(1577, "span", 142);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1578, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1579, "div", 163)(1580, "div", 194)(1581, "ul", 195)(1582, "li", 196)(1583, "button", 197);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1584, " Purchase ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1585, "li", 196)(1586, "button", 198);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1587, " Payment ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1588, "li", 196)(1589, "button", 199);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1590, " Return ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1591, "div", 200)(1592, "div", 201)(1593, "div", 202)(1594, "div", 203)(1595, "div", 204)(1596, "a", 205);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1597, "img", 206);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1598, "div", 207)(1599, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1600, "input", 208);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1601, "div", 209)(1602, "ul")(1603, "li")(1604, "a", 210);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1605, "img", 211);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1606, "li")(1607, "a", 212);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1608, "img", 213);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1609, "li")(1610, "a", 214);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1611, "i", 215);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1612, "div", 216)(1613, "table", 217);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("matSortChange", function PosComponent_Template_table_matSortChange_1613_listener($event) {
            return ctx.sortData($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1614, "thead")(1615, "tr")(1616, "th", 218);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1617, "Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1618, "th", 219);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1619, "Reference");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1620, "th", 220);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1621, "Customer");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1622, "th", 221);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1623, "Amount");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1624, "th", 222);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1625, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1626, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](1627, PosComponent_For_1628_Template, 17, 4, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1629, "app-custom-pagination");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1630, "div", 223)(1631, "div", 202)(1632, "div", 203)(1633, "div", 204)(1634, "a", 205);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1635, "img", 206);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1636, "div", 207)(1637, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1638, "input", 208);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1639, "div", 209)(1640, "ul")(1641, "li")(1642, "a", 210);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1643, "img", 211);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1644, "li")(1645, "a", 212);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1646, "img", 213);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1647, "li")(1648, "a", 214);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1649, "i", 215);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1650, "div", 216)(1651, "table", 217);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("matSortChange", function PosComponent_Template_table_matSortChange_1651_listener($event) {
            return ctx.sortData($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1652, "thead")(1653, "tr")(1654, "th", 218);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1655, "Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1656, "th", 219);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1657, "Reference");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1658, "th", 220);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1659, "Customer");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1660, "th", 221);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1661, "Amount");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1662, "th", 222);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1663, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1664, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](1665, PosComponent_For_1666_Template, 17, 4, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1667, "app-custom-pagination");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1668, "div", 224)(1669, "div", 202)(1670, "div", 203)(1671, "div", 204)(1672, "a", 205);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1673, "img", 206);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1674, "div", 207)(1675, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1676, "input", 208);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1677, "div", 209)(1678, "ul")(1679, "li")(1680, "a", 210);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1681, "img", 211);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1682, "li")(1683, "a", 212);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1684, "img", 213);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1685, "li")(1686, "a", 214);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1687, "i", 215);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1688, "div", 216)(1689, "table", 217);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("matSortChange", function PosComponent_Template_table_matSortChange_1689_listener($event) {
            return ctx.sortData($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1690, "thead")(1691, "tr")(1692, "th", 218);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1693, "Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1694, "th", 219);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1695, "Reference");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1696, "th", 220);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1697, "Customer");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1698, "th", 221);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1699, "Amount");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1700, "th", 222);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1701, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1702, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](1703, PosComponent_For_1704_Template, 17, 4, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1705, "app-custom-pagination");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1706, "div", 225)(1707, "div", 226)(1708, "div", 130)(1709, "div", 182)(1710, "h5", 173);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1711, "Orders");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1712, "button", 162)(1713, "span", 142);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1714, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1715, "div", 163)(1716, "div", 194)(1717, "ul", 227)(1718, "li", 196)(1719, "button", 228);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1720, " Onhold ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1721, "li", 196)(1722, "button", 229);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1723, " Unpaid ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1724, "li", 196)(1725, "button", 230);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1726, " Paid ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1727, "div", 200)(1728, "div", 231)(1729, "div", 202)(1730, "div", 232)(1731, "div", 233)(1732, "a", 205);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1733, "img", 206);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1734, "div", 207)(1735, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1736, "input", 208);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1737, "div", 234)(1738, "div", 235)(1739, "span", 236);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1740, "Order ID : #666659");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1741, "div", 20)(1742, "div", 237)(1743, "table")(1744, "tr", 17)(1745, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1746, "Cashier");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1747, "td", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1748, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1749, "td", 239);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1750, "admin");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1751, "tr")(1752, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1753, "Customer");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1754, "td", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1755, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1756, "td", 239);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1757, "Botsford");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1758, "div", 237)(1759, "table")(1760, "tr")(1761, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1762, "Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1763, "td", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1764, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1765, "td", 239);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1766, "$900");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1767, "tr")(1768, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1769, "Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1770, "td", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1771, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1772, "td", 239);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1773, "29-08-2023 13:39:11");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1774, "p", 240);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1775, "Customer need to recheck the product once");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1776, "div", 121)(1777, "a", 241);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1778, "Open");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1779, "a", 124);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1780, "Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1781, "a", 242);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1782, "Print");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1783, "div", 235)(1784, "span", 236);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1785, "Order ID : #666660");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1786, "div", 20)(1787, "div", 237)(1788, "table")(1789, "tr", 17)(1790, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1791, "Cashier");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1792, "td", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1793, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1794, "td", 239);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1795, "admin");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1796, "tr")(1797, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1798, "Customer");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1799, "td", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1800, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1801, "td", 239);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1802, "Smith");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1803, "div", 237)(1804, "table")(1805, "tr")(1806, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1807, "Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1808, "td", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1809, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1810, "td", 239);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1811, "$15000");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1812, "tr")(1813, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1814, "Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1815, "td", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1816, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1817, "td", 239);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1818, "30-08-2023 15:59:11");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1819, "p", 240);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1820, "Customer need to recheck the product once");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1821, "div", 243)(1822, "a", 241);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1823, "Open");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1824, "a", 124);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1825, "Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1826, "a", 242);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1827, "Print");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1828, "div", 244)(1829, "span", 236);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1830, "Order ID : #666661");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1831, "div", 20)(1832, "div", 237)(1833, "table")(1834, "tr", 17)(1835, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1836, "Cashier");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1837, "td", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1838, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1839, "td", 239);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1840, "admin");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1841, "tr")(1842, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1843, "Customer");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1844, "td", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1845, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1846, "td", 239);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1847, "John David");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1848, "div", 237)(1849, "table")(1850, "tr")(1851, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1852, "Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1853, "td", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1854, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1855, "td", 239);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1856, "$2000");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1857, "tr")(1858, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1859, "Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1860, "td", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1861, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1862, "td", 239);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1863, "01-09-2023 13:15:00");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1864, "p", 245);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1865, " Customer need to recheck the product once ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1866, "div", 243)(1867, "a", 241);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1868, "Open");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1869, "a", 124);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1870, "Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1871, "a", 242);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1872, "Print");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1873, "div", 246)(1874, "div", 202)(1875, "div", 232)(1876, "div", 204)(1877, "a", 205);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1878, "img", 206);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1879, "div", 207)(1880, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1881, "input", 208);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1882, "div", 234)(1883, "div", 235)(1884, "span", 247);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1885, "Order ID : #666662");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1886, "div", 20)(1887, "div", 237)(1888, "table")(1889, "tr", 17)(1890, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1891, "Cashier");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1892, "td", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1893, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1894, "td", 239);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1895, "admin");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1896, "tr")(1897, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1898, "Customer");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1899, "td", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1900, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1901, "td", 239);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1902, "Anastasia");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1903, "div", 237)(1904, "table")(1905, "tr")(1906, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1907, "Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1908, "td", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1909, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1910, "td", 239);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1911, "$2500");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1912, "tr")(1913, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1914, "Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1915, "td", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1916, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1917, "td", 239);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1918, "10-09-2023 17:15:11");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1919, "p", 240);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1920, "Customer need to recheck the product once");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1921, "div", 243)(1922, "a", 241);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1923, "Open");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1924, "a", 124);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1925, "Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1926, "a", 242);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1927, "Print");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1928, "div", 235)(1929, "span", 247);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1930, "Order ID : #666663");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1931, "div", 20)(1932, "div", 237)(1933, "table")(1934, "tr", 17)(1935, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1936, "Cashier");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1937, "td", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1938, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1939, "td", 239);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1940, "admin");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1941, "tr")(1942, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1943, "Customer");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1944, "td", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1945, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1946, "td", 239);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1947, "Lucia");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1948, "div", 237)(1949, "table")(1950, "tr")(1951, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1952, "Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1953, "td", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1954, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1955, "td", 239);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1956, "$1500");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1957, "tr")(1958, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1959, "Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1960, "td", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1961, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1962, "td", 239);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1963, "11-09-2023 14:50:11");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1964, "p", 240);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1965, "Customer need to recheck the product once");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1966, "div", 243)(1967, "a", 241);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1968, "Open");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1969, "a", 124);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1970, "Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1971, "a", 242);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1972, "Print");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1973, "div", 235)(1974, "span", 247);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1975, "Order ID : #666664");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1976, "div", 20)(1977, "div", 237)(1978, "table")(1979, "tr", 17)(1980, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1981, "Cashier");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1982, "td", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1983, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1984, "td", 239);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1985, "admin");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1986, "tr")(1987, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1988, "Customer");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1989, "td", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1990, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1991, "td", 239);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1992, "Diego");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1993, "div", 237)(1994, "table")(1995, "tr")(1996, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1997, "Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1998, "td", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1999, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2000, "td", 239);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2001, "$30000");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2002, "tr")(2003, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2004, "Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2005, "td", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2006, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2007, "td", 239);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2008, "12-09-2023 17:22:11");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2009, "p", 245);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2010, " Customer need to recheck the product once ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2011, "div", 243)(2012, "a", 241);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2013, "Open");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2014, "a", 124);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2015, "Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2016, "a", 242);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2017, "Print");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2018, "div", 248)(2019, "div", 202)(2020, "div", 232)(2021, "div", 204)(2022, "a", 205);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2023, "img", 206);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2024, "div", 207)(2025, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2026, "input", 208);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2027, "div", 234)(2028, "div", 235)(2029, "span", 249);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2030, "Order ID : #666665");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2031, "div", 20)(2032, "div", 237)(2033, "table")(2034, "tr", 17)(2035, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2036, "Cashier");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2037, "td", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2038, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2039, "td", 239);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2040, "admin");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2041, "tr")(2042, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2043, "Customer");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2044, "td", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2045, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2046, "td", 239);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2047, "Hugo");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2048, "div", 237)(2049, "table")(2050, "tr")(2051, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2052, "Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2053, "td", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2054, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2055, "td", 239);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2056, "$5000");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2057, "tr")(2058, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2059, "Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2060, "td", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2061, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2062, "td", 239);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2063, "13-09-2023 19:39:11");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2064, "p", 240);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2065, "Customer need to recheck the product once");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2066, "div", 243)(2067, "a", 241);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2068, "Open");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2069, "a", 124);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2070, "Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2071, "a", 242);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2072, "Print");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2073, "div", 235)(2074, "span", 249);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2075, "Order ID : #666666");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2076, "div", 20)(2077, "div", 237)(2078, "table")(2079, "tr", 17)(2080, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2081, "Cashier");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2082, "td", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2083, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2084, "td", 239);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2085, "admin");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2086, "tr")(2087, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2088, "Customer");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2089, "td", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2090, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2091, "td", 239);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2092, "Antonio");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2093, "div", 237)(2094, "table")(2095, "tr")(2096, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2097, "Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2098, "td", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2099, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2100, "td", 239);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2101, "$7000");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2102, "tr")(2103, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2104, "Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2105, "td", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2106, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2107, "td", 239);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2108, "15-09-2023 18:39:11");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2109, "p", 240);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2110, "Customer need to recheck the product once");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2111, "div", 243)(2112, "a", 241);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2113, "Open");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2114, "a", 124);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2115, "Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2116, "a", 242);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2117, "Print");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2118, "div", 235)(2119, "span", 249);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2120, "Order ID : #666667");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2121, "div", 20)(2122, "div", 237)(2123, "table")(2124, "tr", 17)(2125, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2126, "Cashier");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2127, "td", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2128, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2129, "td", 239);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2130, "admin");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2131, "tr")(2132, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2133, "Customer");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2134, "td", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2135, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2136, "td", 239);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2137, "MacQuoid");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2138, "div", 237)(2139, "table")(2140, "tr")(2141, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2142, "Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2143, "td", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2144, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2145, "td", 239);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2146, "$7050");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2147, "tr")(2148, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2149, "Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2150, "td", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2151, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2152, "td", 239);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2153, "17-09-2023 19:39:11");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2154, "p", 245);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2155, " Customer need to recheck the product once ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2156, "div", 243)(2157, "a", 241);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2158, "Open");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2159, "a", 124);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2160, "Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2161, "a", 242);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2162, "Print");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx.customOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](980);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](21, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.selectedList1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](22, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.selectedList2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.cartValue[0]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.cartValue[1]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.cartValue[1]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.cartValue[0]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](23, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.selectedList3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](24, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.selectedList4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](25, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.selectedList5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](394);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](26, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.selectedList8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](27, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.selectedList6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](28, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.selectedList7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](64);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.tableData);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](38);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.tableData2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](38);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.tableData3);
        }
      },
      dependencies: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortHeader, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__.CarouselSlideDirective, _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_4__.CustomPaginationComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltip],
      styles: ["#toggle_btn[_ngcontent-%COMP%] {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS1jb21wb25lbnQvc2FsZXMvcG9zL3Bvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIjdG9nZ2xlX2J0biB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 52311:
/*!*********************************************************************************!*\
  !*** ./src/app/core-component/sales/quotation-list/quotation-list.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuotationListComponent: () => (/* binding */ QuotationListComponent)
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
/* harmony import */ var _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/custom-pagination/custom-pagination.component */ 14860);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 98379);















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
const _c3 = (a0, a1, a2) => ({
  "status-badge": a0,
  "unstatus-badge": a1,
  "status-badge-ordered": a2
});
function QuotationListComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 13);
  }
}
function QuotationListComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 14);
  }
}
function QuotationListComponent_For_118_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td")(2, "label", 153)(3, "input", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function QuotationListComponent_For_118_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 105)(6, "div", 155)(7, "a", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td")(16, "span", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "td", 158)(21, "div", 159)(22, "a", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "i", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "a", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "i", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "a", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuotationListComponent_For_118_Template_a_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.confirmColor());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "i", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", data_r2.isSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", data_r2.img, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r2.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r2.reference);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r2.customerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](8, _c3, data_r2.status === "Sent", data_r2.status === "Pending", data_r2.status === "Ordered"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r2.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r2.grandTotal);
  }
}
class QuotationListComponent {
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
    this.selectedValue6 = '';
    this.selectedValue7 = '';
    this.selectedValue8 = '';
    this.routes = src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.routes;
    // pagination variables
    this.tableData = [];
    this.pageSize = 10;
    this.serialNumberArray = [];
    this.totalData = 0;
    this.showFilter = false;
    this.searchDataValue = '';
    this.isCollapsed = false;
    this.filter = false;
    this.cartValue = [2, 2, 2, 2, 2, 2, 2, 2];
    this.data.getDataTable().subscribe(apiRes => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe(res => {
        if (this.router.url == this.routes.quotationList) {
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
    this.data.getQuotationList().subscribe(apiRes => {
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
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  openFilter() {
    this.filter = !this.filter;
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
    this.ɵfac = function QuotationListComponent_Factory(t) {
      return new (t || QuotationListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_2__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.SidebarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: QuotationListComponent,
      selectors: [["app-quotation-list"]],
      decls: 522,
      vars: 43,
      consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Pdf", "matTooltipPosition", "above"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Excel", "matTooltipPosition", "above"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Print", "matTooltipPosition", "above"], [1, "feather", "icon-printer", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "feather", "icon-rotate-ccw", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "feather", "icon-chevron-up", "feather-chevron-up"], [1, "feather", "icon-chevron-down", "feather-chevron-down"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-units", 1, "btn", "btn-added"], [1, "feather", "icon-plus-circle", "me-2"], [1, "card", "table-list-card"], [1, "card-body"], [1, "table-top"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search...", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "search-path"], [1, "d-flex", "align-items-center"], ["id", "filter_search", 1, "btn", "btn-filter", 3, "click", "ngClass"], [1, "feather", "icon-filter", "filter-icon"], ["src", "assets/img/icons/closes.svg", "alt", "img"], [1, "form-sort"], [1, "feather", "icon-sliders", "info-img"], ["placeholder", "Sort by Date", 1, "space-select", "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "Sort by Date"], ["value", "25 9 23"], ["value", "12 9 23"], ["id", "filter_inputs", 1, "card", 3, "ngClass"], [1, "card-body", "pb-0"], [1, "row"], [1, "col-lg-2", "col-sm-6", "col-12"], [1, "input-blocks"], [1, "feather", "icon-box", "info-img"], ["placeholder", "Choose product", 1, "space-select", "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "Choose product"], ["value", "Bold V3.2"], ["value", "Apple Series 5 Watch"], [1, "feather", "icon-stop-circle", "info-img"], ["placeholder", "Choose Status", 1, "space-select", "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "Choose Status"], ["value", "Sent"], ["value", "Ordered"], [1, "feather", "icon-user", "info-img"], ["placeholder", "Choose Customer", 1, "space-select", "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "Choose Customer"], ["value", "walk-in-customer"], ["value", "John Smith"], [1, "feather", "icon-file-text", "info-img"], [1, "input-groupicon"], ["type", "text", "placeholder", "Enter Reference", 1, "form-control"], [1, "col-lg-4", "col-sm-6", "col-12"], [1, "btn", "btn-filters", "ms-auto"], [1, "table-responsive"], ["matSort", "", 1, "table", "datanew", 3, "matSortChange"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "productName"], ["mat-sort-header", "reference"], ["mat-sort-header", "customerName"], ["mat-sort-header", "status"], ["mat-sort-header", "grandTotal"], ["id", "add-units", 1, "modal", "fade"], [1, "modal-dialog", "purchase", "modal-dialog-centered", "stock-adjust-modal"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header", "border-0", "custom-modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body"], [1, "col-lg-4", "col-md-6", "col-sm-12"], [1, "input-blocks", "add-product"], [1, "col-lg-10", "col-sm-10", "col-10"], ["placeholder", "Choose", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "Choose"], ["value", "Benjamin"], ["value", "Nydia Fitzgerald"], [1, "col-lg-2", "col-sm-2", "col-2", "p-0"], [1, "add-icon", "tab"], ["data-bs-toggle", "modal", "data-bs-target", "#add-units", 1, "btn", "btn-filter"], ["src", "assets/img/icons/plus1.svg", "alt", "img"], [1, "input-groupicon", "calender-input", "date-input1"], [1, "feather", "icon-calendar", "info-img"], ["type", "text", "bsDatepicker", "", "container", ".date-input1", "placeholder", "Choose", 1, "datetimepicker"], ["type", "text", 1, "form-control"], [1, "col-lg-12"], [1, "input-groupicon", "select-code"], ["type", "text", "placeholder", "Please type product code and select"], [1, "addonset"], ["src", "assets/img/icons/qrcode-scan.svg", "alt", "img"], [1, "modal-body-table"], [1, "table", "datanew"], [1, "productimgname"], ["href", "javascript:void(0);", 1, "product-img", "stock-img"], ["src", "assets/img/products/stock-img-02.png", "alt", "product"], ["href", "javascript:void(0);"], [1, "product-quantity"], [1, "quantity-btn", 3, "click"], [1, "feather", "icon-minus-circle", "plus-circle"], ["type", "text", "value", "2", 1, "quntity-input", 3, "value"], [1, "feather", "icon-plus-circle", "feather-search"], ["src", "assets/img/products/stock-img-03.png", "alt", "product"], ["src", "assets/img/products/stock-img-05.png", "alt", "product"], [1, "col-lg-3", "col-md-6", "col-sm-12"], [1, "input-blocks", "mb-3"], ["type", "text", "value", "0"], [1, "input-blocks", "summer-description-box"], ["id", "summernote"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit"], ["id", "edit-units", 1, "modal", "fade"], [1, "modal-dialog", "edit-sales-modal"], [1, "page-wrapper", "p-0", "m-0"], [1, "content", "p-0"], [1, "page-header", "p-4", "mb-0"], [1, "add-item", "new-sale-items", "d-flex"], [1, "card"], ["value", "Thomas"], ["value", "Rose"], [1, "col-lg-2", "col-sm-2", "col-2", "ps-0"], [1, "add-icon"], [1, "choose-add"], [1, "feather", "icon-plus-circle", "plus"], [1, "input-groupicon", "calender-input", "date-input2"], ["type", "text", "bsDatepicker", "", "container", ".date-input1", "placeholder", "19 jan 2023", 1, "datetimepicker"], ["type", "text", "placeholder", "010203"], [1, "col-lg-12", "col-sm-6", "col-12"], ["src", "assets/img/icons/scanners.svg", "alt", "img"], [1, "table-responsive", "no-pagination"], [1, "col-lg-6", "ms-auto"], [1, "total-order", "w-100", "max-widthauto", "m-auto", "mb-4"], [1, "col-lg-3", "col-sm-6", "col-12"], ["type", "text", "placeholder", "0"], ["value", "Completed"], ["value", "Inprogress"], ["id", "summernote5"], [1, "col-lg-12", "text-end"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "add-cancel", "me-3"], ["type", "submit", 1, "btn", "btn-submit", "add-sale"], [1, "checkboxs"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "view-product", "me-2"], ["alt", "product", 3, "src"], [1, "badges", 3, "ngClass"], [1, "action-table-data"], [1, "edit-delete-action", "data-row"], ["href", "javascript:void(0);", 1, "me-2", "p-2", "mb-0"], [1, "feather", "icon-eye", "action-eye"], ["data-bs-toggle", "modal", "data-bs-target", "#edit-units", 1, "me-2", "p-2", "mb-0"], [1, "feather", "icon-edit", "feather-edit"], ["href", "javascript:void(0);", 1, "me-2", "confirm-text", "p-2", "mb-0", 3, "click"], [1, "feather", "icon-trash-2", "feather-trash-2"]],
      template: function QuotationListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Quotation List");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Manage Your Quotation");
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
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuotationListComponent_Template_a_click_21_listener() {
            return ctx.toggleCollapse();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, QuotationListComponent_Conditional_22_Template, 1, 0, "i", 13)(23, QuotationListComponent_Conditional_23_Template, 1, 0, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 15)(25, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Add New Quotation");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 18)(29, "div", 19)(30, "div", 20)(31, "div", 21)(32, "div", 22)(33, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 25)(36, "label")(37, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function QuotationListComponent_Template_input_ngModelChange_37_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function QuotationListComponent_Template_input_ngModelChange_37_listener() {
            return ctx.searchData(ctx.searchDataValue);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 27)(39, "div", 28)(40, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuotationListComponent_Template_a_click_40_listener() {
            return ctx.openFilter();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "img", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "mat-select", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function QuotationListComponent_Template_mat_select_ngModelChange_46_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue1, $event) || (ctx.selectedValue1 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "mat-option", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Sort by Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "mat-option", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "25 9 23");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "mat-option", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "12 9 23");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 38)(54, "div", 39)(55, "div", 40)(56, "div", 41)(57, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "i", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "mat-select", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function QuotationListComponent_Template_mat_select_ngModelChange_59_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue2, $event) || (ctx.selectedValue2 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "mat-option", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "Choose product");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "mat-option", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "Bold V3.2");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "mat-option", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Apple Series 5 Watch");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 41)(67, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](68, "i", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "mat-select", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function QuotationListComponent_Template_mat_select_ngModelChange_69_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue3, $event) || (ctx.selectedValue3 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "mat-option", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, "Choose Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "mat-option", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "Sent");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "mat-option", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "Ordered");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div", 41)(77, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](78, "i", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "mat-select", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function QuotationListComponent_Template_mat_select_ngModelChange_79_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue4, $event) || (ctx.selectedValue4 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "mat-option", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, "Choose Customer");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "mat-option", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83, "walk-in-customer");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "mat-option", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](85, "John Smith");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "div", 41)(87, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](88, "i", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "div", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](90, "input", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "div", 61)(92, "div", 42)(93, "a", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](94, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95, " Search ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "div", 63)(97, "table", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("matSortChange", function QuotationListComponent_Template_table_matSortChange_97_listener($event) {
            return ctx.sortData($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "thead")(99, "tr")(100, "th", 65)(101, "label", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuotationListComponent_Template_label_click_101_listener() {
            return ctx.selectAll(ctx.initChecked);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "input", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function QuotationListComponent_Template_input_ngModelChange_102_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.initChecked, $event) || (ctx.initChecked = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](103, "span", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "th", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](105, "Product Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "th", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107, "Reference");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "th", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](109, "Custmer Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "th", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](111, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "th", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](113, "Grand Total ($)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "th", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](115, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](117, QuotationListComponent_For_118_Template, 28, 12, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](119, "app-custom-pagination");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "div", 74)(121, "div", 75)(122, "div", 76)(123, "div", 77)(124, "div", 78)(125, "div", 79)(126, "div", 2)(127, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](128, "Add Quotation");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "button", 80)(130, "span", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](131, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](132, "div", 82)(133, "form")(134, "div", 40)(135, "div", 83)(136, "div", 84)(137, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](138, "Customer Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](139, "div", 40)(140, "div", 85)(141, "mat-select", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function QuotationListComponent_Template_mat_select_ngModelChange_141_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue5, $event) || (ctx.selectedValue5 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](142, "mat-option", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](143, "Choose");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](144, "mat-option", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](145, "Benjamin");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](146, "mat-option", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](147, "Nydia Fitzgerald");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](148, "div", 90)(149, "div", 91)(150, "a", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](151, "img", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](152, "div", 83)(153, "div", 42)(154, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](155, "Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](156, "div", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](157, "i", 95)(158, "input", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](159, "div", 83)(160, "div", 42)(161, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](162, "Reference Number");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](163, "input", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](164, "div", 40)(165, "div", 98)(166, "div", 42)(167, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](168, "Product Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](169, "div", 99);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](170, "input", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](171, "div", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](172, "img", 102);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](173, "div", 98)(174, "div", 103)(175, "div", 63)(176, "table", 104)(177, "thead")(178, "tr")(179, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](180, "Product");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](181, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](182, "Qty");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](183, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](184, "Purchase Price($)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](185, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](186, "Discount($)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](187, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](188, "Tax(%)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](189, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](190, "Tax Amount($)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](191, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](192, "Unit Cost($)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](193, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](194, "Total Cost(%)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](195, "tbody")(196, "tr")(197, "td")(198, "div", 105)(199, "a", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](200, "img", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](201, "a", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](202, "Nike Jordan");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](203, "td")(204, "div", 109)(205, "span", 110);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuotationListComponent_Template_span_click_205_listener() {
            return ctx.reducePos(1);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](206, "i", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](207, "input", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](208, "span", 110);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuotationListComponent_Template_span_click_208_listener() {
            return ctx.addPos(1);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](209, "i", 113);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](210, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](211, "2000");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](212, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](213, "500");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](214, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](215, " 0.00 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](216, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](217, "0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](218, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](219, "0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](220, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](221, "1500");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](222, "tr")(223, "td")(224, "div", 105)(225, "a", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](226, "img", 114);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](227, "a", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](228, "Apple Series 5 Watch");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](229, "td")(230, "div", 109)(231, "span", 110);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuotationListComponent_Template_span_click_231_listener() {
            return ctx.reducePos(2);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](232, "i", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](233, "input", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](234, "span", 110);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuotationListComponent_Template_span_click_234_listener() {
            return ctx.addPos(2);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](235, "i", 113);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](236, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](237, "3000");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](238, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](239, "400");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](240, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](241, " 0.00 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](242, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](243, "0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](244, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](245, "0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](246, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](247, "1700");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](248, "tr")(249, "td")(250, "div", 105)(251, "a", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](252, "img", 115);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](253, "a", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](254, "Lobar Handy");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](255, "td")(256, "div", 109)(257, "span", 110);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuotationListComponent_Template_span_click_257_listener() {
            return ctx.reducePos(3);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](258, "i", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](259, "input", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](260, "span", 110);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuotationListComponent_Template_span_click_260_listener() {
            return ctx.addPos(3);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](261, "i", 113);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](262, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](263, "2500");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](264, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](265, "500");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](266, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](267, " 0.00 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](268, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](269, "0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](270, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](271, "0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](272, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](273, "2000");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](274, "div", 40)(275, "div", 116)(276, "div", 117)(277, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](278, "Order Tax");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](279, "input", 118);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](280, "div", 116)(281, "div", 117)(282, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](283, "Discount");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](284, "input", 118);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](285, "div", 116)(286, "div", 117)(287, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](288, "Shipping");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](289, "input", 118);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](290, "div", 116)(291, "div", 117)(292, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](293, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](294, "mat-select", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function QuotationListComponent_Template_mat_select_ngModelChange_294_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue6, $event) || (ctx.selectedValue6 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](295, "mat-option", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](296, "Choose");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](297, "div", 98)(298, "div", 119)(299, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](300, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](301, "div", 120);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](302, "div", 121)(303, "button", 122);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](304, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](305, "button", 123);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](306, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](307, "div", 124)(308, "div", 125)(309, "div", 76)(310, "div", 126)(311, "div", 127)(312, "div", 128)(313, "div", 129)(314, "div", 2)(315, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](316, "Edit Quotation");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](317, "button", 80)(318, "span", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](319, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](320, "div", 130)(321, "div", 19)(322, "form")(323, "div", 40)(324, "div", 61)(325, "div", 42)(326, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](327, "Customer Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](328, "div", 40)(329, "div", 85)(330, "mat-select", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function QuotationListComponent_Template_mat_select_ngModelChange_330_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue7, $event) || (ctx.selectedValue7 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](331, "mat-option", 131);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](332, "Thomas");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](333, "mat-option", 132);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](334, "Rose");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](335, "div", 133)(336, "div", 134)(337, "span", 135);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](338, "i", 136);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](339, "div", 61)(340, "div", 42)(341, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](342, "Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](343, "div", 137);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](344, "i", 95)(345, "input", 138);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](346, "div", 61)(347, "div", 42)(348, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](349, "Reference Number");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](350, "input", 139);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](351, "div", 140)(352, "div", 42)(353, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](354, "Product Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](355, "div", 99);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](356, "input", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](357, "div", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](358, "img", 141);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](359, "div", 142)(360, "table", 104)(361, "thead")(362, "tr")(363, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](364, "Product");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](365, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](366, "Qty");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](367, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](368, "Purchase Price($)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](369, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](370, "Discount($)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](371, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](372, "Tax(%)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](373, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](374, "Tax Amount($)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](375, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](376, "Unit Cost($)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](377, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](378, "Total Cost(%)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](379, "tbody")(380, "tr")(381, "td")(382, "div", 105)(383, "a", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](384, "img", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](385, "a", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](386, "Nike Jordan");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](387, "td")(388, "div", 109)(389, "span", 110);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuotationListComponent_Template_span_click_389_listener() {
            return ctx.reducePos(4);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](390, "i", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](391, "input", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](392, "span", 110);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuotationListComponent_Template_span_click_392_listener() {
            return ctx.addPos(4);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](393, "i", 113);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](394, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](395, "2000");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](396, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](397, "500");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](398, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](399, " 0.00 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](400, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](401, "0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](402, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](403, "0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](404, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](405, "1500");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](406, "tr")(407, "td")(408, "div", 105)(409, "a", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](410, "img", 114);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](411, "a", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](412, "Apple Series 5 Watch");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](413, "td")(414, "div", 109)(415, "span", 110);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuotationListComponent_Template_span_click_415_listener() {
            return ctx.reducePos(5);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](416, "i", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](417, "input", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](418, "span", 110);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuotationListComponent_Template_span_click_418_listener() {
            return ctx.addPos(5);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](419, "i", 113);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](420, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](421, "3000");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](422, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](423, "400");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](424, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](425, " 0.00 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](426, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](427, "0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](428, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](429, "0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](430, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](431, "1700");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](432, "tr")(433, "td")(434, "div", 105)(435, "a", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](436, "img", 115);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](437, "a", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](438, "Lobar Handy");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](439, "td")(440, "div", 109)(441, "span", 110);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuotationListComponent_Template_span_click_441_listener() {
            return ctx.reducePos(6);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](442, "i", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](443, "input", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](444, "span", 110);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuotationListComponent_Template_span_click_444_listener() {
            return ctx.addPos(6);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](445, "i", 113);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](446, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](447, "2500");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](448, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](449, "500");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](450, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](451, " 0.00 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](452, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](453, "0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](454, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](455, "0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](456, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](457, "2000");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](458, "div", 40)(459, "div", 143)(460, "div", 144)(461, "ul")(462, "li")(463, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](464, "Order Tax");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](465, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](466, "$ 0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](467, "li")(468, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](469, "Discount");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](470, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](471, "$ 0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](472, "li")(473, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](474, "Shipping");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](475, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](476, "$ 0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](477, "li")(478, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](479, "Grand Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](480, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](481, "$5200.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](482, "div", 40)(483, "div", 145)(484, "div", 117)(485, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](486, "Order Tax");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](487, "div", 99);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](488, "input", 146);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](489, "div", 145)(490, "div", 117)(491, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](492, "Discount");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](493, "div", 99);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](494, "input", 146);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](495, "div", 145)(496, "div", 117)(497, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](498, "Shipping");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](499, "div", 99);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](500, "input", 146);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](501, "div", 145)(502, "div", 117)(503, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](504, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](505, "mat-select", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function QuotationListComponent_Template_mat_select_ngModelChange_505_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue8, $event) || (ctx.selectedValue8 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](506, "mat-option", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](507, "Sent");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](508, "mat-option", 147);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](509, "Completed");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](510, "mat-option", 148);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](511, "Inprogress");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](512, "div", 98)(513, "div", 119)(514, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](515, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](516, "div", 149);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](517, "div", 150)(518, "button", 151);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](519, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](520, "button", 152);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](521, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](22, !ctx.isCollapsed ? 22 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](23, ctx.isCollapsed ? 23 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.searchDataValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](29, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](30, _c1, ctx.filter === true));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](32, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](33, _c2, ctx.filter, !ctx.filter));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](36, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](37, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](38, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.initChecked);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx.tableData);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](39, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](66);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.cartValue[1]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.cartValue[2]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.cartValue[3]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](40, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](36);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](41, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](61);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.cartValue[4]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.cartValue[5]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.cartValue[6]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](62);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](42, _c0));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortHeader, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_3__.CustomPaginationComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatTooltip, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__.BsDatepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__.BsDatepickerInputDirective],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 38739:
/*!*************************************************************************!*\
  !*** ./src/app/core-component/sales/sales-list/sales-list.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesListComponent: () => (/* binding */ SalesListComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 77697);
/* harmony import */ var src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/core.index */ 82351);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.index */ 31287);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ 22047);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/custom-pagination/custom-pagination.component */ 14860);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 98379);














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
  "badge-bgsuccess": a0,
  "badge-bgdanger": a1
});
const _c4 = (a0, a1) => ({
  "badge-linesuccess": a0,
  "badge-linedanger": a1
});
function SalesListComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 12);
  }
}
function SalesListComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 13);
  }
}
function SalesListComponent_For_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", data_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r1.value, " ");
  }
}
function SalesListComponent_For_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", data_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r2.value, " ");
  }
}
function SalesListComponent_For_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", data_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r3.value, " ");
  }
}
function SalesListComponent_For_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", data_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r4.value, " ");
  }
}
function SalesListComponent_For_109_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td")(2, "label", 172)(3, "input", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function SalesListComponent_For_109_Template_input_ngModelChange_3_listener($event) {
      const data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](data_r6.isSelected, $event) || (data_r6.isSelected = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "span", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td")(12, "span", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "td")(21, "span", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "td", 64)(26, "a", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "i", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "ul", 178)(29, "li")(30, "a", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "i", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Sale Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "li")(34, "a", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "i", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Edit Sale");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "li")(38, "a", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "i", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Show Payments");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "li")(42, "a", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "i", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Create Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "li")(46, "a", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "i", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Download pdf");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "li")(50, "a", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "i", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Delete Sale");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const data_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", data_r6.isSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r6.customerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r6.reference);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r6.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](12, _c3, data_r6.status === "Completed", data_r6.status === "Pending"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r6.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r6.grandTotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r6.paid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r6.due);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](15, _c4, data_r6.paymentStatus === "Paid", data_r6.paymentStatus === "Due"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r6.paymentStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r6.biller);
  }
}
function SalesListComponent_For_135_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", data_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r7.value, " ");
  }
}
function SalesListComponent_For_153_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", data_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r8.value, " ");
  }
}
function SalesListComponent_For_241_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", data_r9.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r9.value, " ");
  }
}
function SalesListComponent_For_473_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", data_r10.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r10.value, " ");
  }
}
function SalesListComponent_For_491_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", data_r11.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r11.value, " ");
  }
}
function SalesListComponent_For_648_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", data_r12.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r12.value, " ");
  }
}
function SalesListComponent_For_753_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", data_r13.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r13.value, " ");
  }
}
function SalesListComponent_For_813_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", data_r14.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r14.value, " ");
  }
}
class SalesListComponent {
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
    // pagination variables
    this.tableData = [];
    this.pageSize = 10;
    this.serialNumberArray = [];
    this.totalData = 0;
    this.showFilter = false;
    this.searchDataValue = '';
    this.isCollapsed = false;
    this.filter = false;
    this.cartValue = [2, 2, 2, 2, 2, 2, 2, 2];
    this.data.getDataTable().subscribe(apiRes => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe(res => {
        if (this.router.url == this.routes.salesList) {
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
    this.data.getSalesList().subscribe(apiRes => {
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
      this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource(this.tableData);
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
      return new (t || SalesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_1__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.SidebarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: SalesListComponent,
      selectors: [["app-sales-list"]],
      decls: 827,
      vars: 55,
      consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Pdf", "matTooltipPosition", "above"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Excel", "matTooltipPosition", "above"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Print", "matTooltipPosition", "above"], [1, "feather", "icon-rotate-ccw", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "feather", "icon-chevron-up", "feather-chevron-up"], [1, "feather", "icon-chevron-down", "feather-chevron-down"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-sales-new", 1, "btn", "btn-added"], [1, "feather", "icon-plus-circle", "me-2"], [1, "card", "table-list-card"], [1, "card-body"], [1, "table-top"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search...", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "search-path"], [1, "d-flex", "align-items-center"], ["id", "filter_search", 1, "btn", "btn-filter", 3, "click", "ngClass"], [1, "feather", "icon-filter", "filter-icon"], ["src", "assets/img/icons/closes.svg", "alt", "img"], [1, "form-sort"], [1, "feather", "icon-sliders", "info-img"], ["placeholder", "Sort by Date", 1, "space-select", "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], ["id", "filter_inputs", 1, "card", 3, "ngClass"], [1, "card-body", "pb-0"], [1, "row"], [1, "col-lg-3", "col-sm-6", "col-12"], [1, "input-blocks"], [1, "feather", "icon-user", "info-img"], ["placeholder", "Choose Customer Name", 1, "select", "space-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "col-lg-2", "col-sm-6", "col-12"], [1, "feather", "icon-stop-circle", "info-img"], ["placeholder", "Choose Status", 1, "select", "space-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "feather", "icon-file-text", "info-img"], ["type", "text", "placeholder", "Enter Reference", 1, "form-control"], ["placeholder", "Choose Payment Status", 1, "select", "space-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "btn", "btn-filters", "ms-auto"], [1, "table-responsive"], ["matSort", "", 1, "table", "datanew", 3, "matSortChange"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "customerName"], ["mat-sort-header", "reference"], ["mat-sort-header", "date"], ["mat-sort-header", "status"], ["mat-sort-header", "grandTotal"], ["mat-sort-header", "paid"], ["mat-sort-header", "due"], ["mat-sort-header", "paymentStatus"], ["mat-sort-header", "biller"], [1, "text-center"], [1, "sales-list"], ["id", "add-sales-new", 1, "modal", "fade"], [1, "modal-dialog", "add-centered"], [1, "modal-content"], [1, "page-wrapper", "p-0", "m-0"], [1, "content", "p-0"], [1, "modal-header", "border-0", "custom-modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "card"], [1, "col-lg-4", "col-sm-6", "col-12"], [1, "col-lg-10", "col-sm-10", "col-10"], ["placeholder", "Choose", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "col-lg-2", "col-sm-2", "col-2", "ps-0"], [1, "add-icon"], ["href", "javascript:void(0);", 1, "choose-add"], [1, "feather", "icon-plus-circle", "plus"], [1, "input-groupicon", "calender-input", "date-input1"], [1, "feather", "icon-calendar", "info-img"], ["type", "text", "bsDatepicker", "", "container", ".date-input1", "placeholder", "Choose", 1, "datetimepicker"], [1, "col-lg-12", "col-sm-6", "col-12"], [1, "input-groupicon", "select-code"], ["type", "text", "placeholder", "Please type product code and select"], [1, "addonset"], ["src", "assets/img/icons/qrcode-scan.svg", "alt", "img"], [1, "table-responsive", "no-pagination"], [1, "table", "datanew"], [1, "col-lg-6", "ms-auto"], [1, "total-order", "w-100", "max-widthauto", "m-auto", "mb-4"], ["type", "text", "value", "0", 1, "p-2"], [1, "input-blocks", "mb-5"], [1, "col-lg-12", "text-end"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "add-cancel", "me-3"], ["type", "submit", 1, "btn", "btn-submit", "add-sale"], ["id", "sales-details-new", 1, "modal", "fade"], [1, "modal-dialog", "sales-details-modal"], [1, "page-wrapper", "details-blk"], [1, "page-header", "p-4", "mb-0"], [1, "page-title", "modal-datail"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-payroll-new", 1, "btn", "btn-added"], ["data-bs-toggle", "tooltip", "matTooltip", "Edit", "matTooltipPosition", "above", "data-bs-placement", "top", "title", "Pdf"], [1, "feather", "icon-edit", "action-edit", "sales-action"], ["data-bs-toggle", "tooltip", "matTooltip", "Pdf", "matTooltipPosition", "above", "data-bs-placement", "top", "title", "Pdf"], ["data-bs-toggle", "tooltip", "matTooltip", "Excel", "matTooltipPosition", "above", "data-bs-placement", "top", "title", "Excel"], ["data-bs-toggle", "tooltip", "matTooltip", "Print", "matTooltipPosition", "above", "data-bs-placement", "top", "title", "Print"], [1, "feather", "icon-printer", "feather-rotate-ccw"], [1, "invoice-box", "table-height", 2, "max-width", "1600px", "width", "100%", "overflow", "auto", "padding", "0", "font-size", "14px", "line-height", "24px", "color", "#555"], [1, "sales-details-items", "d-flex"], [1, "details-item"], [1, "order-text"], [1, "productimgname"], ["href", "javascript:void(0);", 1, "product-img", "stock-img"], ["src", "assets/img/products/stock-img-02.png", "alt", "product"], ["href", "javascript:void(0);"], [1, "product-quantity"], [1, "quantity-btn", 3, "click"], [1, "feather", "icon-minus-circle", "plus-circle"], ["type", "text", "value", "2", 1, "quntity-input", 3, "value"], [1, "feather", "icon-plus-circle", "feather-search"], ["src", "assets/img/products/stock-img-03.png", "alt", "product"], ["src", "assets/img/products/stock-img-05.png", "alt", "product"], ["id", "edit-sales-new", 1, "modal", "fade"], [1, "modal-dialog", "edit-sales-modal"], [1, "add-item", "new-sale-items", "d-flex"], ["placeholder", "Thomas", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "input-groupicon", "calender-input", "date-input2"], ["type", "text", "bsDatepicker", "", "container", ".date-input2", "placeholder", "19 jan 2023", 1, "datetimepicker"], ["placeholder", "Dazzle Shoes", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["src", "assets/img/icons/scanners.svg", "alt", "img"], ["type", "text", "placeholder", "0"], [1, "col-lg-12"], [1, "form-control"], ["id", "showpayment", "tabindex", "-1", "aria-labelledby", "showpayment", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "stock-adjust-modal"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-body", "custom-modal-body"], [1, "modal-body-table", "total-orders"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", 1, "me-3", "p-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#editpayment", 1, "me-3", "p-2"], [1, "feather", "icon-edit", "feather-edit"], ["href", "javascript:void(0);", 1, "confirm-text", "p-2"], [1, "feather", "icon-trash-2", "feather-trash-2"], ["id", "createpayment", "tabindex", "-1", "aria-labelledby", "createpayment", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg", "modal-dialog-centered"], [1, "col-lg-6"], [1, "input-groupicon", "calender-input", "date-input3"], ["type", "text", "bsDatepicker", "", "container", ".date-input3", "placeholder", "Choose Date", 1, "datetimepicker"], [1, "col-lg-6", "col-sm-12", "col-12"], ["type", "text", 1, "form-control"], [1, "col-lg-4", "col-sm-12", "col-12"], [1, "input-groupicon", "calender-input"], [1, "feather", "icon-dollar-sign", "info-img"], ["type", "text"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit"], ["id", "editpayment", "tabindex", "-1", "aria-labelledby", "editpayment", "aria-hidden", "true", 1, "modal", "fade"], [1, "input-groupicon", "calender-input", "date-input4"], ["type", "text", "bsDatepicker", "", "container", ".date-input4", "placeholder", "Select Date", 1, "datetimepicker", "form-control"], ["type", "text", "value", "INV/SL0101"], ["type", "text", "value", "1500"], ["placeholder", "Cash", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "input-blocks", "summer-description-box", "transfer"], [1, "modal-footer-btn", "mb-3", "me-3"], [1, "checkboxs"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "checkmarks", "ms-1"], [1, "badge", 3, "ngClass"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "true", 1, "action-set"], ["aria-hidden", "true", 1, "fa", "fa-ellipsis-v"], [1, "dropdown-menu"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#sales-details-new", 1, "dropdown-item"], [1, "feather", "icon-eye", "info-img"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-sales-new", 1, "dropdown-item"], [1, "feather", "icon-edit", "info-img"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#showpayment", 1, "dropdown-item"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#createpayment", 1, "dropdown-item"], [1, "feather", "icon-plus-circle", "info-img"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "feather", "icon-download", "info-img"], ["href", "javascript:void(0);", 1, "dropdown-item", "confirm-text", "mb-0"], [1, "feather", "icon-trash-2", "info-img"]],
      template: function SalesListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Sales List");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Manage Your Sales");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ul", 3)(8, "li")(9, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "li")(12, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "li")(15, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "li")(18, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "li")(21, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SalesListComponent_Template_a_click_21_listener() {
            return ctx.toggleCollapse();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, SalesListComponent_Conditional_22_Template, 1, 0, "i", 12)(23, SalesListComponent_Conditional_23_Template, 1, 0, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 14)(25, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " Add New Sales");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 17)(29, "div", 18)(30, "div", 19)(31, "div", 20)(32, "div", 21)(33, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 24)(36, "label")(37, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function SalesListComponent_Template_input_ngModelChange_37_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SalesListComponent_Template_input_ngModelChange_37_listener() {
            return ctx.searchData(ctx.searchDataValue);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 26)(39, "div", 27)(40, "a", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SalesListComponent_Template_a_click_40_listener() {
            return ctx.openFilter();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "i", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "img", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "mat-select", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function SalesListComponent_Template_mat_select_ngModelChange_46_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.selectedValue1, $event) || (ctx.selectedValue1 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](47, SalesListComponent_For_48_Template, 2, 2, "mat-option", 34, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 35)(50, "div", 36)(51, "div", 37)(52, "div", 38)(53, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "i", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "mat-select", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function SalesListComponent_Template_mat_select_ngModelChange_55_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.selectedValue2, $event) || (ctx.selectedValue2 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](56, SalesListComponent_For_57_Template, 2, 2, "mat-option", 34, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 42)(59, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "i", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "mat-select", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function SalesListComponent_Template_mat_select_ngModelChange_61_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.selectedValue3, $event) || (ctx.selectedValue3 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](62, SalesListComponent_For_63_Template, 2, 2, "mat-option", 34, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 42)(65, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "i", 45)(67, "input", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 38)(69, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](70, "i", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "mat-select", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function SalesListComponent_Template_mat_select_ngModelChange_71_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.selectedValue4, $event) || (ctx.selectedValue4 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](72, SalesListComponent_For_73_Template, 2, 2, "mat-option", 34, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 42)(75, "div", 39)(76, "a", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](77, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, " Search ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 49)(80, "table", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("matSortChange", function SalesListComponent_Template_table_matSortChange_80_listener($event) {
            return ctx.sortData($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "thead")(82, "tr")(83, "th", 51)(84, "label", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SalesListComponent_Template_label_click_84_listener() {
            return ctx.selectAll(ctx.initChecked);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "input", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function SalesListComponent_Template_input_ngModelChange_85_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.initChecked, $event) || (ctx.initChecked = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](86, "span", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "th", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "Customer Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "th", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "Reference");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "th", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, "Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "th", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "th", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "Grand Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "th", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, "Paid");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "th", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "Due");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "th", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, "Payment Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "th", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, "Biller");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "th", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "tbody", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](108, SalesListComponent_For_109_Template, 53, 18, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](110, "app-custom-pagination");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "div", 66)(112, "div", 67)(113, "div", 68)(114, "div", 69)(115, "div", 70)(116, "div", 71)(117, "div", 2)(118, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119, " Add Sales");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "button", 72)(121, "span", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](122, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "div", 74)(124, "div", 18)(125, "form")(126, "div", 37)(127, "div", 75)(128, "div", 39)(129, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](130, "Customer Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "div", 37)(132, "div", 76)(133, "mat-select", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function SalesListComponent_Template_mat_select_ngModelChange_133_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.selectedValue5, $event) || (ctx.selectedValue5 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](134, SalesListComponent_For_135_Template, 2, 2, "mat-option", 34, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "div", 78)(137, "div", 79)(138, "a", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](139, "i", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "div", 75)(141, "div", 39)(142, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](143, "Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "div", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](145, "i", 83)(146, "input", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "div", 75)(148, "div", 39)(149, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](150, "Supplier");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "mat-select", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function SalesListComponent_Template_mat_select_ngModelChange_151_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.selectedValue6, $event) || (ctx.selectedValue6 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](152, SalesListComponent_For_153_Template, 2, 2, "mat-option", 34, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "div", 85)(155, "div", 39)(156, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](157, "Product Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "div", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](159, "input", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](160, "div", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](161, "img", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](162, "div", 90)(163, "table", 91)(164, "thead")(165, "tr")(166, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](167, "Product");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](168, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](169, "Qty");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](170, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](171, "Purchase Price($)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](173, "Discount($)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](174, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](175, "Tax(%)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](176, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](177, "Tax Amount($)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](178, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](179, "Unit Cost($)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](180, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](181, "Total Cost(%)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](182, "tbody")(183, "tr");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](184, "td")(185, "td")(186, "td")(187, "td")(188, "td")(189, "td")(190, "td")(191, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](192, "div", 37)(193, "div", 92)(194, "div", 93)(195, "ul")(196, "li")(197, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](198, "Order Tax");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](199, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](200, "$ 0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](201, "li")(202, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](203, "Discount");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](204, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](205, "$ 0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](206, "li")(207, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](208, "Shipping");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](209, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](210, "$ 0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](211, "li")(212, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](213, "Grand Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](214, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](215, "$ 0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](216, "div", 37)(217, "div", 38)(218, "div", 39)(219, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](220, "Order Tax");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](221, "div", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](222, "input", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](223, "div", 38)(224, "div", 39)(225, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](226, "Discount");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](227, "div", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](228, "input", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](229, "div", 38)(230, "div", 39)(231, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](232, "Shipping");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](233, "div", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](234, "input", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](235, "div", 38)(236, "div", 95)(237, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](238, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](239, "mat-select", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function SalesListComponent_Template_mat_select_ngModelChange_239_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.selectedValue7, $event) || (ctx.selectedValue7 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](240, SalesListComponent_For_241_Template, 2, 2, "mat-option", 34, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](242, "div", 96)(243, "button", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](244, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](245, "button", 98);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](246, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](247, "div", 99)(248, "div", 100)(249, "div", 68)(250, "div", 101)(251, "div", 70)(252, "div", 102)(253, "div", 1)(254, "div", 103)(255, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](256, "Sales Detail : SL0101");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](257, "div", 14)(258, "a", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](259, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](260, " Add New Sales");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](261, "ul", 3)(262, "li")(263, "a", 105);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](264, "i", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](265, "li")(266, "a", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](267, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](268, "li")(269, "a", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](270, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](271, "li")(272, "a", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](273, "i", 110);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](274, "div", 74)(275, "div", 18)(276, "form")(277, "div", 111)(278, "div", 112)(279, "div", 113)(280, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](281, "Customer Info");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](282, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](283, "walk-in-customer");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](284, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](285, " walk-in-customer@example.com");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](286, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](287, " 123456780");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](288, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](289, " N45 , Dhaka ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](290, "div", 113)(291, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](292, "Company Info");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](293, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](294, "DGT");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](295, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](296, " admin@example.com");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](297, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](298, " 6315996770");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](299, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](300, " 3618 Abia Martin Drive ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](301, "div", 113)(302, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](303, "Invoice Info");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](304, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](305, "Reference");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](306, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](307, " Payment Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](308, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](309, " Status ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](310, "div", 113)(311, "h5")(312, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](313, "SL0101");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](314, "Paid");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](315, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](316, " Completed");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](317, "h5", 114);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](318, "Order Summary");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](319, "div", 90)(320, "table", 91)(321, "thead")(322, "tr")(323, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](324, "Product");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](325, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](326, "Qty");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](327, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](328, "Purchase Price($)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](329, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](330, "Discount($)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](331, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](332, "Tax(%)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](333, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](334, "Tax Amount($)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](335, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](336, "Unit Cost($)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](337, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](338, "Total Cost(%)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](339, "tbody")(340, "tr")(341, "td")(342, "div", 115)(343, "a", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](344, "img", 117);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](345, "a", 118);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](346, "Nike Jordan");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](347, "td")(348, "div", 119)(349, "span", 120);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SalesListComponent_Template_span_click_349_listener() {
            return ctx.reducePos(1);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](350, "i", 121);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](351, "input", 122);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](352, "span", 120);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SalesListComponent_Template_span_click_352_listener() {
            return ctx.addPos(1);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](353, "i", 123);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](354, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](355, "2000");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](356, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](357, "500");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](358, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](359, " 0.00 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](360, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](361, "0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](362, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](363, "0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](364, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](365, "1500");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](366, "tr")(367, "td")(368, "div", 115)(369, "a", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](370, "img", 124);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](371, "a", 118);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](372, "Apple Series 5 Watch");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](373, "td")(374, "div", 119)(375, "span", 120);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SalesListComponent_Template_span_click_375_listener() {
            return ctx.reducePos(2);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](376, "i", 121);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](377, "input", 122);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](378, "span", 120);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SalesListComponent_Template_span_click_378_listener() {
            return ctx.addPos(2);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](379, "i", 123);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](380, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](381, "3000");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](382, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](383, "400");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](384, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](385, " 0.00 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](386, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](387, "0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](388, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](389, "0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](390, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](391, "1700");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](392, "tr")(393, "td")(394, "div", 115)(395, "a", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](396, "img", 125);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](397, "a", 118);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](398, "Lobar Handy");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](399, "td")(400, "div", 119)(401, "span", 120);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SalesListComponent_Template_span_click_401_listener() {
            return ctx.reducePos(3);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](402, "i", 121);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](403, "input", 122);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](404, "span", 120);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SalesListComponent_Template_span_click_404_listener() {
            return ctx.addPos(3);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](405, "i", 123);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](406, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](407, "2500");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](408, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](409, "500");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](410, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](411, " 0.00 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](412, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](413, "0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](414, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](415, "0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](416, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](417, "2000");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](418, "div", 37)(419, "div", 37)(420, "div", 92)(421, "div", 93)(422, "ul")(423, "li")(424, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](425, "Order Tax");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](426, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](427, "$ 0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](428, "li")(429, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](430, "Discount");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](431, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](432, "$ 0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](433, "li")(434, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](435, "Grand Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](436, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](437, "$ 5200.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](438, "li")(439, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](440, "Paid");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](441, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](442, "$ 5200.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](443, "li")(444, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](445, "Due");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](446, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](447, "$ 0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](448, "div", 126)(449, "div", 127)(450, "div", 68)(451, "div", 69)(452, "div", 70)(453, "div", 102)(454, "div", 128)(455, "div", 2)(456, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](457, "Edit Sales");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](458, "button", 72)(459, "span", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](460, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](461, "div", 74)(462, "div", 18)(463, "form")(464, "div", 37)(465, "div", 75)(466, "div", 39)(467, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](468, "Customer");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](469, "div", 37)(470, "div", 76)(471, "mat-select", 129);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function SalesListComponent_Template_mat_select_ngModelChange_471_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.selectedValue8, $event) || (ctx.selectedValue8 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](472, SalesListComponent_For_473_Template, 2, 2, "mat-option", 34, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](474, "div", 78)(475, "div", 79)(476, "a", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](477, "i", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](478, "div", 75)(479, "div", 39)(480, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](481, "Purchase Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](482, "div", 130);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](483, "i", 83)(484, "input", 131);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](485, "div", 75)(486, "div", 39)(487, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](488, "Supplier");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](489, "mat-select", 132);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function SalesListComponent_Template_mat_select_ngModelChange_489_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.selectedValue9, $event) || (ctx.selectedValue9 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](490, SalesListComponent_For_491_Template, 2, 2, "mat-option", 34, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](492, "div", 85)(493, "div", 39)(494, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](495, "Product Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](496, "div", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](497, "input", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](498, "div", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](499, "img", 133);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](500, "div", 90)(501, "table", 91)(502, "thead")(503, "tr")(504, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](505, "Product");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](506, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](507, "Qty");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](508, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](509, "Purchase Price($)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](510, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](511, "Discount($)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](512, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](513, "Tax(%)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](514, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](515, "Tax Amount($)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](516, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](517, "Unit Cost($)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](518, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](519, "Total Cost(%)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](520, "tbody")(521, "tr")(522, "td")(523, "div", 115)(524, "a", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](525, "img", 117);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](526, "a", 118);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](527, "Nike Jordan");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](528, "td")(529, "div", 119)(530, "span", 120);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SalesListComponent_Template_span_click_530_listener() {
            return ctx.reducePos(4);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](531, "i", 121);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](532, "input", 122);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](533, "span", 120);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SalesListComponent_Template_span_click_533_listener() {
            return ctx.addPos(4);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](534, "i", 123);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](535, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](536, "2000");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](537, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](538, "500");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](539, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](540, " 0.00 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](541, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](542, "0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](543, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](544, "0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](545, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](546, "1500");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](547, "tr")(548, "td")(549, "div", 115)(550, "a", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](551, "img", 124);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](552, "a", 118);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](553, "Apple Series 5 Watch");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](554, "td")(555, "div", 119)(556, "span", 120);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SalesListComponent_Template_span_click_556_listener() {
            return ctx.reducePos(5);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](557, "i", 121);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](558, "input", 122);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](559, "span", 120);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SalesListComponent_Template_span_click_559_listener() {
            return ctx.addPos(5);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](560, "i", 123);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](561, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](562, "3000");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](563, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](564, "400");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](565, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](566, " 0.00 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](567, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](568, "0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](569, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](570, "0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](571, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](572, "1700");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](573, "tr")(574, "td")(575, "div", 115)(576, "a", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](577, "img", 125);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](578, "a", 118);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](579, "Lobar Handy");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](580, "td")(581, "div", 119)(582, "span", 120);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SalesListComponent_Template_span_click_582_listener() {
            return ctx.reducePos(6);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](583, "i", 121);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](584, "input", 122);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](585, "span", 120);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SalesListComponent_Template_span_click_585_listener() {
            return ctx.addPos(6);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](586, "i", 123);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](587, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](588, "2500");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](589, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](590, "500");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](591, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](592, " 0.00 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](593, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](594, "0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](595, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](596, "0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](597, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](598, "2000");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](599, "div", 37)(600, "div", 92)(601, "div", 93)(602, "ul")(603, "li")(604, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](605, "Order Tax");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](606, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](607, "$ 0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](608, "li")(609, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](610, "Discount");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](611, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](612, "$ 0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](613, "li")(614, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](615, "Shipping");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](616, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](617, "$ 0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](618, "li")(619, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](620, "Grand Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](621, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](622, "$5200.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](623, "div", 37)(624, "div", 38)(625, "div", 39)(626, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](627, "Order Tax");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](628, "div", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](629, "input", 134);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](630, "div", 38)(631, "div", 39)(632, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](633, "Discount");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](634, "div", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](635, "input", 134);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](636, "div", 38)(637, "div", 39)(638, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](639, "Shipping");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](640, "div", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](641, "input", 134);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](642, "div", 38)(643, "div", 95)(644, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](645, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](646, "mat-select", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function SalesListComponent_Template_mat_select_ngModelChange_646_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.selectedValue10, $event) || (ctx.selectedValue10 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](647, SalesListComponent_For_648_Template, 2, 2, "mat-option", 34, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](649, "div", 135)(650, "div", 39)(651, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](652, "Notes");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](653, "textarea", 136);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](654, "div", 96)(655, "button", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](656, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](657, "button", 98);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](658, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](659, "div", 137)(660, "div", 138)(661, "div", 68)(662, "div", 139)(663, "div", 140)(664, "div", 71)(665, "div", 2)(666, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](667, "Show Payments");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](668, "button", 72)(669, "span", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](670, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](671, "div", 141)(672, "div", 37)(673, "div", 135)(674, "div", 142)(675, "div", 49)(676, "table", 91)(677, "thead")(678, "tr")(679, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](680, "Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](681, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](682, "Reference");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](683, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](684, "Amount");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](685, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](686, "Paid By");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](687, "th", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](688, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](689, "tbody")(690, "tr")(691, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](692, "19 Jan 2023");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](693, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](694, "INV/SL0101");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](695, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](696, "$1500");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](697, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](698, "Cash");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](699, "td", 143)(700, "div", 144)(701, "a", 145);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](702, "i", 110);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](703, "a", 146);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](704, "i", 147);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](705, "a", 148);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](706, "i", 149);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](707, "div", 150)(708, "div", 151)(709, "div", 68)(710, "div", 71)(711, "div", 2)(712, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](713, "Create Payments");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](714, "button", 72)(715, "span", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](716, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](717, "div", 141)(718, "form")(719, "div", 37)(720, "div", 152)(721, "div", 39)(722, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](723, " Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](724, "div", 153);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](725, "i", 83)(726, "input", 154);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](727, "div", 155)(728, "div", 39)(729, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](730, "Reference");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](731, "input", 156);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](732, "div", 37)(733, "div", 157)(734, "div", 39)(735, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](736, "Received Amount");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](737, "div", 158);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](738, "i", 159)(739, "input", 160);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](740, "div", 157)(741, "div", 39)(742, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](743, "Paying Amount");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](744, "div", 158);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](745, "i", 159)(746, "input", 160);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](747, "div", 157)(748, "div", 39)(749, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](750, "Payment type");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](751, "mat-select", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function SalesListComponent_Template_mat_select_ngModelChange_751_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.selectedValue11, $event) || (ctx.selectedValue11 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](752, SalesListComponent_For_753_Template, 2, 2, "mat-option", 34, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](754, "div", 135)(755, "div", 39)(756, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](757, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](758, "textarea", 136);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](759, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](760, "Maximum 60 Characters");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](761, "div", 135)(762, "div", 161)(763, "button", 162);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](764, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](765, "button", 163);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](766, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](767, "div", 164)(768, "div", 151)(769, "div", 68)(770, "div", 71)(771, "div", 2)(772, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](773, "Edit Payments");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](774, "button", 72)(775, "span", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](776, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](777, "div", 141)(778, "form")(779, "div", 37)(780, "div", 152)(781, "div", 39)(782, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](783, "19 Jan 2023");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](784, "div", 165);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](785, "i", 83)(786, "input", 166);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](787, "div", 155)(788, "div", 39)(789, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](790, "Reference");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](791, "input", 167);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](792, "div", 37)(793, "div", 157)(794, "div", 39)(795, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](796, "Received Amount");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](797, "div", 158);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](798, "i", 159)(799, "input", 168);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](800, "div", 157)(801, "div", 39)(802, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](803, "Paying Amount");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](804, "div", 158);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](805, "i", 159)(806, "input", 168);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](807, "div", 157)(808, "div", 39)(809, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](810, "Payment type");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](811, "mat-select", 169);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function SalesListComponent_Template_mat_select_ngModelChange_811_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.selectedValue12, $event) || (ctx.selectedValue12 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](812, SalesListComponent_For_813_Template, 2, 2, "mat-option", 34, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](814, "div", 135)(815, "div", 170)(816, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](817, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](818, "textarea", 136);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](819, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](820, "Maximum 60 Characters");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](821, "div", 135)(822, "div", 171)(823, "button", 162);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](824, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](825, "button", 163);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](826, "Save Changes");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](22, !ctx.isCollapsed ? 22 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](23, ctx.isCollapsed ? 23 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.searchDataValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](37, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](38, _c1, ctx.filter === true));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](40, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx.selectedList1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](41, _c2, ctx.filter, !ctx.filter));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](44, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx.selectedList2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](45, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx.selectedList3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](46, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx.selectedList4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.initChecked);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx.tableData);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](47, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx.selectedList5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](48, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx.selectedList6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](87);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](49, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx.selectedList7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](111);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.cartValue[1]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.cartValue[2]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.cartValue[3]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](68);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](50, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx.selectedList8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](51, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx.selectedList9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](42);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.cartValue[4]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.cartValue[5]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.cartValue[6]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](62);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](52, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx.selectedList10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](104);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](53, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx.selectedList11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](59);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](54, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx.selectedList12);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSortHeader, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_2__.CustomPaginationComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltip, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__.BsDatepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__.BsDatepickerInputDirective],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 96987:
/*!*******************************************************************************!*\
  !*** ./src/app/core-component/sales/sales-returns/sales-returns.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesReturnsComponent: () => (/* binding */ SalesReturnsComponent)
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
/* harmony import */ var _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/custom-pagination/custom-pagination.component */ 14860);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 98379);















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
const _c3 = (a0, a1, a2) => ({
  "bg-lightgreen": a0,
  "bg-lightred": a1,
  "bg-lightyellow": a2
});
function SalesReturnsComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 13);
  }
}
function SalesReturnsComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 14);
  }
}
function SalesReturnsComponent_For_120_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td")(2, "label", 122)(3, "input", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SalesReturnsComponent_For_120_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td")(6, "div", 117)(7, "a", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td")(16, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "td")(25, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "td", 126)(28, "div", 127)(29, "a", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "i", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "a", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SalesReturnsComponent_For_120_Template_a_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.confirmColor());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "i", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", data_r2.isSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", data_r2.img, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r2.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r2.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r2.customer);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](12, _c3, data_r2.status === "Received", data_r2.status === "Pending", data_r2.status === "Ordered"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r2.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r2.grandTotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r2.paid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r2.due);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](16, _c3, data_r2.paymentStatus === "Paid", data_r2.paymentStatus === "Unpaid", data_r2.paymentStatus === "Partial"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r2.paymentStatus);
  }
}
class SalesReturnsComponent {
  //** / pagination variables
  constructor(data, pagination, router, sidebar) {
    this.data = data;
    this.pagination = pagination;
    this.router = router;
    this.sidebar = sidebar;
    this.initChecked = false;
    this.routes = src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.routes;
    // pagination variables
    this.tableData = [];
    this.pageSize = 10;
    this.serialNumberArray = [];
    this.totalData = 0;
    this.showFilter = false;
    this.searchDataValue = '';
    this.selectedValue1 = '';
    this.selectedValue2 = '';
    this.selectedValue3 = '';
    this.selectedValue4 = '';
    this.selectedValue5 = '';
    this.selectedValue6 = '';
    this.selectedValue7 = '';
    this.selectedValue8 = '';
    this.isCollapsed = false;
    this.filter = false;
    this.data.getDataTable().subscribe(apiRes => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe(res => {
        if (this.router.url == this.routes.salesReturn) {
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
    this.data.getSalesReturn().subscribe(apiRes => {
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
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  openFilter() {
    this.filter = !this.filter;
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
    this.ɵfac = function SalesReturnsComponent_Factory(t) {
      return new (t || SalesReturnsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_2__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.SidebarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: SalesReturnsComponent,
      selectors: [["app-sales-returns"]],
      decls: 432,
      vars: 37,
      consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Pdf", "matTooltipPosition", "above"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Excel", "matTooltipPosition", "above"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Print", "matTooltipPosition", "above"], [1, "feather", "icon-printer", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "feather", "icon-rotate-ccw", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "feather", "icon-chevron-up", "feather-chevron-up"], [1, "feather", "icon-chevron-down", "feather-chevron-down"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-sales-new", 1, "btn", "btn-added"], [1, "feather", "icon-plus-circle", "me-2"], [1, "card", "table-list-card"], [1, "card-body"], [1, "table-top"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search...", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "search-path"], ["id", "filter_search", 1, "btn", "btn-filter", 3, "click", "ngClass"], [1, "feather", "icon-filter", "filter-icon"], ["src", "assets/img/icons/closes.svg", "alt", "img"], [1, "form-sort"], [1, "feather", "icon-sliders", "info-img"], ["placeholder", "Sort by Date", 1, "space-select", "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "Sort by Date"], ["value", "Newest"], ["value", "Oldest"], ["id", "filter_inputs", 1, "card", 3, "ngClass"], [1, "card-body", "pb-0"], [1, "row"], [1, "col-lg-3", "col-sm-6", "col-12"], [1, "input-blocks"], [1, "feather", "icon-user", "info-img"], ["placeholder", "Choose Customer", 1, "space-select", "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "Choose Customer"], ["value", "Thomas"], ["value", "James"], ["value", "Beverly"], [1, "feather", "icon-zap", "info-img"], ["placeholder", "Choose Status", 1, "space-select", "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "Choose Status"], ["value", "Received"], ["value", "Pending"], [1, "feather", "icon-stop-circle", "info-img"], ["placeholder", "Choose Payment Status", 1, "space-select", "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "Choose Payment Status"], ["value", "Unpaid"], ["value", "Paids"], [1, "col-lg-3", "col-sm-6", "col-12", "ms-auto"], [1, "btn", "btn-filters", "ms-auto"], [1, "table-responsive"], ["matSort", "", 1, "table", "datanew", 3, "matSortChange"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "productName"], ["mat-sort-header", "date"], ["mat-sort-header", "customer"], ["mat-sort-header", "status"], ["mat-sort-header", "grandTotal"], ["mat-sort-header", "paid"], ["mat-sort-header", "due"], ["mat-sort-header", "paymentStatus"], ["id", "add-sales-new", 1, "modal", "fade"], [1, "modal-dialog", "add-centered"], [1, "modal-content"], [1, "page-wrapper", "p-0", "m-0"], [1, "content", "p-0"], [1, "modal-header", "border-0", "custom-modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "card"], [1, "col-lg-4", "col-sm-6", "col-12"], [1, "form-label"], [1, "col-lg-10", "col-sm-10", "col-10"], ["placeholder", "Choose Customer", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "Benjamin"], ["value", "Bruklin"], [1, "col-lg-2", "col-sm-2", "col-2", "ps-0"], [1, "add-icon"], ["href", "javascript:void(0);", 1, "choose-add"], [1, "feather", "icon-plus-circle", "plus"], [1, "input-groupicon", "calender-input", "date-input1"], [1, "feather", "icon-calendar", "info-img"], ["type", "text", "bsDatepicker", "", "placeholder", "Choose", "container", ".date-input1", 1, "datetimepicker"], ["type", "text", 1, "form-control"], [1, "col-lg-12", "col-sm-6", "col-12"], [1, "input-groupicon", "select-code"], ["type", "text", "placeholder", "Please type product code and select"], [1, "addonset"], ["src", "assets/img/icons/qrcode-scan.svg", "alt", "img"], [1, "table-responsive", "no-pagination"], [1, "table", "datanew"], [1, "col-lg-6", "ms-auto"], [1, "total-order", "w-100", "max-widthauto", "m-auto", "mb-4"], ["type", "text", "value", "0", 1, "p-2"], [1, "input-blocks", "mb-5"], ["placeholder", "Choose", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "Choose"], [1, "col-lg-12", "text-end"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "add-cancel", "me-3"], ["type", "submit", 1, "btn", "btn-submit", "add-sale"], ["id", "edit-sales-new", 1, "modal", "fade"], [1, "input-groupicon", "calender-input", "date-input2"], ["type", "text", "bsDatepicker", "", "placeholder", "Choose", "container", ".date-input2", 1, "datetimepicker"], ["type", "text", "value", "555444", 1, "form-control"], [1, "productimgname"], ["href", "javascript:void(0);", 1, "product-img"], ["src", "assets/img/products/product6.jpg", "alt", "product"], ["href", "javascript:void(0);"], ["src", "assets/img/products/product7.jpg", "alt", "product"], [1, "checkboxs"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], ["alt", "product", 3, "src"], [1, "badges", 3, "ngClass"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-sales-new", 1, "me-2", "p-2"], [1, "feather", "icon-edit", "feather-edit"], ["href", "javascript:void(0);", 1, "confirm-text", "p-2", 3, "click"], [1, "feather", "icon-trash-2", "feather-trash-2"]],
      template: function SalesReturnsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Sales Return List");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Manage your Returns");
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
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SalesReturnsComponent_Template_a_click_21_listener() {
            return ctx.toggleCollapse();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, SalesReturnsComponent_Conditional_22_Template, 1, 0, "i", 13)(23, SalesReturnsComponent_Conditional_23_Template, 1, 0, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 15)(25, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Add New Sales Return");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 18)(29, "div", 19)(30, "div", 20)(31, "div", 21)(32, "div", 22)(33, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 25)(36, "label")(37, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SalesReturnsComponent_Template_input_ngModelChange_37_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SalesReturnsComponent_Template_input_ngModelChange_37_listener() {
            return ctx.searchData(ctx.searchDataValue);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 27)(39, "a", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SalesReturnsComponent_Template_a_click_39_listener() {
            return ctx.openFilter();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "i", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "img", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "mat-select", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SalesReturnsComponent_Template_mat_select_ngModelChange_45_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue1, $event) || (ctx.selectedValue1 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "mat-option", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Sort by Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "mat-option", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "Newest");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "mat-option", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "Oldest");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 37)(53, "div", 38)(54, "div", 39)(55, "div", 40)(56, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](57, "i", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "mat-select", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SalesReturnsComponent_Template_mat_select_ngModelChange_58_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue2, $event) || (ctx.selectedValue2 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "mat-option", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "Choose Customer");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "mat-option", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "Thomas");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "mat-option", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "James");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "mat-option", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "Beverly");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "div", 40)(68, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](69, "i", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "mat-select", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SalesReturnsComponent_Template_mat_select_ngModelChange_70_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue3, $event) || (ctx.selectedValue3 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "mat-option", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, "Choose Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "mat-option", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "Received");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "mat-option", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "Pending");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "div", 40)(78, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](79, "i", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "mat-select", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SalesReturnsComponent_Template_mat_select_ngModelChange_80_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue4, $event) || (ctx.selectedValue4 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "mat-option", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, "Choose Payment Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "mat-option", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, "Unpaid");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "mat-option", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, "Paids");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "div", 58)(88, "div", 41)(89, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](90, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, " Search ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "div", 60)(93, "table", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("matSortChange", function SalesReturnsComponent_Template_table_matSortChange_93_listener($event) {
            return ctx.sortData($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "thead")(95, "tr")(96, "th", 62)(97, "label", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SalesReturnsComponent_Template_label_click_97_listener() {
            return ctx.selectAll(ctx.initChecked);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "input", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SalesReturnsComponent_Template_input_ngModelChange_98_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.initChecked, $event) || (ctx.initChecked = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](99, "span", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "th", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101, "Product Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "th", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](103, "Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "th", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](105, "Customer");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "th", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "th", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](109, "Grand Total ($)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "th", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](111, "Paid ($)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "th", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](113, "Due ($)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "th", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](115, "Payment Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "th", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](117, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](118, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](119, SalesReturnsComponent_For_120_Template, 33, 20, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](121, "app-custom-pagination");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "div", 74)(123, "div", 75)(124, "div", 76)(125, "div", 77)(126, "div", 78)(127, "div", 79)(128, "div", 2)(129, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](130, " Add Sales Return");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](131, "button", 80)(132, "span", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](133, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](134, "div", 82)(135, "div", 19)(136, "form")(137, "div", 39)(138, "div", 83)(139, "div", 41)(140, "label", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](141, "Customer Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](142, "div", 39)(143, "div", 85)(144, "mat-select", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SalesReturnsComponent_Template_mat_select_ngModelChange_144_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue5, $event) || (ctx.selectedValue5 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](145, "mat-option", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](146, "Choose Customer");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](147, "mat-option", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](148, "Thomas");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](149, "mat-option", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](150, "Benjamin");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](151, "mat-option", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](152, "Bruklin");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](153, "div", 89)(154, "div", 90)(155, "a", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](156, "i", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](157, "div", 83)(158, "div", 41)(159, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](160, "Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](161, "div", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](162, "i", 94)(163, "input", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](164, "div", 83)(165, "div", 41)(166, "label", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](167, "Reference No.");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](168, "input", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](169, "div", 97)(170, "div", 41)(171, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](172, "Product Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](173, "div", 98);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](174, "input", 99);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](175, "div", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](176, "img", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](177, "div", 102)(178, "table", 103)(179, "thead")(180, "tr")(181, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](182, "Product Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](183, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](184, "Net Unit Price($) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](185, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](186, "Stock");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](187, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](188, "QTY ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](189, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](190, "Discount($) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](191, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](192, "Tax %");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](193, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](194, "Subtotal ($)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](195, "tbody")(196, "tr");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](197, "td")(198, "td")(199, "td")(200, "td")(201, "td")(202, "td")(203, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](204, "div", 39)(205, "div", 104)(206, "div", 105)(207, "ul")(208, "li")(209, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](210, "Order Tax");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](211, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](212, "$ 0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](213, "li")(214, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](215, "Discount");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](216, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](217, "$ 0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](218, "li")(219, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](220, "Shipping");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](221, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](222, "$ 0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](223, "li")(224, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](225, "Grand Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](226, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](227, "$ 0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](228, "div", 39)(229, "div", 40)(230, "div", 41)(231, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](232, "Order Tax");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](233, "div", 98);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](234, "input", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](235, "div", 40)(236, "div", 41)(237, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](238, "Discount");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](239, "div", 98);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](240, "input", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](241, "div", 40)(242, "div", 41)(243, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](244, "Shipping");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](245, "div", 98);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](246, "input", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](247, "div", 40)(248, "div", 107)(249, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](250, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](251, "mat-select", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SalesReturnsComponent_Template_mat_select_ngModelChange_251_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue6, $event) || (ctx.selectedValue6 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](252, "mat-option", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](253, "Choose");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](254, "mat-option", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](255, "Pending");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](256, "mat-option", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](257, "Received");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](258, "div", 110)(259, "button", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](260, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](261, "button", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](262, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](263, "div", 113)(264, "div", 75)(265, "div", 76)(266, "div", 77)(267, "div", 78)(268, "div", 79)(269, "div", 2)(270, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](271, " Edit Sales Return");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](272, "button", 80)(273, "span", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](274, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](275, "div", 82)(276, "div", 19)(277, "form")(278, "div", 39)(279, "div", 83)(280, "div", 41)(281, "label", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](282, "Customer Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](283, "div", 39)(284, "div", 85)(285, "mat-select", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SalesReturnsComponent_Template_mat_select_ngModelChange_285_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue7, $event) || (ctx.selectedValue7 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](286, "mat-option", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](287, "Thomas");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](288, "mat-option", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](289, "Benjamin");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](290, "mat-option", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](291, "Bruklin");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](292, "div", 89)(293, "div", 90)(294, "a", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](295, "i", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](296, "div", 83)(297, "div", 41)(298, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](299, "Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](300, "div", 114);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](301, "i", 94)(302, "input", 115);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](303, "div", 83)(304, "div", 41)(305, "label", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](306, "Reference No.");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](307, "input", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](308, "div", 97)(309, "div", 41)(310, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](311, "Product Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](312, "div", 98);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](313, "input", 99);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](314, "div", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](315, "img", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](316, "div", 102)(317, "table", 103)(318, "thead")(319, "tr")(320, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](321, "Product Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](322, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](323, "Net Unit Price($) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](324, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](325, "Stock");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](326, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](327, "QTY ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](328, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](329, "Discount($) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](330, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](331, "Tax %");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](332, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](333, "Subtotal ($)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](334, "tbody")(335, "tr")(336, "td")(337, "div", 117)(338, "a", 118);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](339, "img", 119);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](340, "a", 120);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](341, "Apple Earpods");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](342, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](343, "300");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](344, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](345, "400");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](346, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](347, "500");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](348, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](349, "100");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](350, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](351, "50");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](352, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](353, "300");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](354, "tr")(355, "td")(356, "div", 117)(357, "a", 118);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](358, "img", 121);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](359, "a", 120);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](360, "Apple Earpods");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](361, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](362, "150");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](363, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](364, "500");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](365, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](366, "300");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](367, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](368, "100");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](369, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](370, "50");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](371, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](372, "300");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](373, "div", 39)(374, "div", 104)(375, "div", 105)(376, "ul")(377, "li")(378, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](379, "Order Tax");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](380, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](381, "$ 0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](382, "li")(383, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](384, "Discount");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](385, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](386, "$ 0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](387, "li")(388, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](389, "Shipping");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](390, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](391, "$ 0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](392, "li")(393, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](394, "Grand Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](395, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](396, "$ 0.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](397, "div", 39)(398, "div", 40)(399, "div", 41)(400, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](401, "Order Tax");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](402, "div", 98);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](403, "input", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](404, "div", 40)(405, "div", 41)(406, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](407, "Discount");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](408, "div", 98);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](409, "input", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](410, "div", 40)(411, "div", 41)(412, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](413, "Shipping");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](414, "div", 98);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](415, "input", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](416, "div", 40)(417, "div", 107)(418, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](419, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](420, "mat-select", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SalesReturnsComponent_Template_mat_select_ngModelChange_420_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue8, $event) || (ctx.selectedValue8 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](421, "mat-option", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](422, "Choose");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](423, "mat-option", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](424, "Pending");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](425, "mat-option", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](426, "Received");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](427, "div", 110)(428, "button", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](429, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](430, "button", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](431, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](22, !ctx.isCollapsed ? 22 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](23, ctx.isCollapsed ? 23 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.searchDataValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](23, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](24, _c1, ctx.filter === true));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](26, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](27, _c2, ctx.filter, !ctx.filter));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](30, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](31, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](32, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.initChecked);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx.tableData);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](33, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](107);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](34, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](35, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](135);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](36, _c0));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortHeader, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_3__.CustomPaginationComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatTooltip, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__.BsDatepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__.BsDatepickerInputDirective],
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _sales_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales.component */ 99676);
/* harmony import */ var _sales_list_sales_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sales-list/sales-list.component */ 38739);
/* harmony import */ var _sales_returns_sales_returns_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sales-returns/sales-returns.component */ 96987);
/* harmony import */ var _quotation_list_quotation_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quotation-list/quotation-list.component */ 52311);
/* harmony import */ var _pos_pos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pos/pos.component */ 16179);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);








const routes = [{
  path: '',
  component: _sales_component__WEBPACK_IMPORTED_MODULE_0__.SalesComponent,
  children: [{
    path: 'sales-list',
    component: _sales_list_sales_list_component__WEBPACK_IMPORTED_MODULE_1__.SalesListComponent
  }, {
    path: 'sales-return',
    component: _sales_returns_sales_returns_component__WEBPACK_IMPORTED_MODULE_2__.SalesReturnsComponent
  }, {
    path: 'quotation-list',
    component: _quotation_list_quotation_list_component__WEBPACK_IMPORTED_MODULE_3__.QuotationListComponent
  }, {
    path: 'pos',
    component: _pos_pos_component__WEBPACK_IMPORTED_MODULE_4__.PosComponent
  }]
}];
class SalesRoutingModule {
  static {
    this.ɵfac = function SalesRoutingModule_Factory(t) {
      return new (t || SalesRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: SalesRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SalesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _sales_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales-routing.module */ 87138);
/* harmony import */ var _sales_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sales.component */ 99676);
/* harmony import */ var _sales_returns_sales_returns_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sales-returns/sales-returns.component */ 96987);
/* harmony import */ var _quotation_list_quotation_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quotation-list/quotation-list.component */ 52311);
/* harmony import */ var _pos_pos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pos/pos.component */ 16179);
/* harmony import */ var _sales_list_sales_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sales-list/sales-list.component */ 38739);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);









class SalesModule {
  static {
    this.ɵfac = function SalesModule_Factory(t) {
      return new (t || SalesModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
      type: SalesModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _sales_routing_module__WEBPACK_IMPORTED_MODULE_0__.SalesRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.sharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](SalesModule, {
    declarations: [_sales_component__WEBPACK_IMPORTED_MODULE_1__.SalesComponent, _sales_returns_sales_returns_component__WEBPACK_IMPORTED_MODULE_2__.SalesReturnsComponent, _quotation_list_quotation_list_component__WEBPACK_IMPORTED_MODULE_3__.QuotationListComponent, _pos_pos_component__WEBPACK_IMPORTED_MODULE_4__.PosComponent, _sales_list_sales_list_component__WEBPACK_IMPORTED_MODULE_5__.SalesListComponent, _sales_list_sales_list_component__WEBPACK_IMPORTED_MODULE_5__.SalesListComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _sales_routing_module__WEBPACK_IMPORTED_MODULE_0__.SalesRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.sharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_sales_sales_module_ts.js.map