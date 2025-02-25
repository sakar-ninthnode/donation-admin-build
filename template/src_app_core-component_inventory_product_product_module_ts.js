"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_inventory_product_product_module_ts"],{

/***/ 29079:
/*!***************************************************************************************!*\
  !*** ./src/app/core-component/inventory/product/add-product/add-product.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddProductComponent: () => (/* binding */ AddProductComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/core.index */ 82351);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 98379);










const _c0 = () => ({
  standalone: true
});
const _c1 = a0 => ({
  "d-none": a0
});
function AddProductComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 8);
  }
}
function AddProductComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 9);
  }
}
function AddProductComponent_For_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r1.value, " ");
  }
}
function AddProductComponent_For_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r2.value, " ");
  }
}
function AddProductComponent_For_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r3.value, " ");
  }
}
function AddProductComponent_For_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r4.value, " ");
  }
}
function AddProductComponent_For_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r5.value, " ");
  }
}
function AddProductComponent_For_107_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r6.value, " ");
  }
}
function AddProductComponent_For_119_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r7.value, " ");
  }
}
function AddProductComponent_For_126_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r8.value, " ");
  }
}
function AddProductComponent_For_134_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r9.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r9.value, " ");
  }
}
function AddProductComponent_For_197_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r10.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r10.value, " ");
  }
}
function AddProductComponent_For_205_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r11.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r11.value, " ");
  }
}
function AddProductComponent_For_393_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r12.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r12.value, " ");
  }
}
class AddProductComponent {
  constructor(sidebar) {
    this.sidebar = sidebar;
    this.isProductVisible = true;
    this.isProductVisible1 = true;
    this.routes = src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.routes;
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
    this.selectedList1 = [{
      value: 'Choose'
    }, {
      value: 'Thomas'
    }, {
      value: 'Rasmussen'
    }, {
      value: 'Fred john'
    }];
    this.selectedList2 = [{
      value: 'Choose'
    }, {
      value: 'Legendary'
    }, {
      value: 'Determined'
    }, {
      value: 'Sincere'
    }];
    this.selectedList3 = [{
      value: 'Choose'
    }, {
      value: 'Lenovo'
    }, {
      value: 'Electronics'
    }];
    this.selectedList4 = [{
      value: 'Choose'
    }, {
      value: 'Lenovo'
    }, {
      value: 'Electronics'
    }];
    this.selectedList5 = [{
      value: 'Choose'
    }, {
      value: 'Fruits'
    }, {
      value: 'Computers'
    }, {
      value: 'Shoes'
    }];
    this.selectedList6 = [{
      value: 'Choose'
    }, {
      value: 'Nike'
    }, {
      value: 'Bolt'
    }];
    this.selectedList7 = [{
      value: 'Choose'
    }, {
      value: 'Kg'
    }, {
      value: 'Pc'
    }];
    this.selectedList8 = [{
      value: 'Exclusive'
    }, {
      value: 'Sales Tax'
    }];
    this.selectedList9 = [{
      value: 'Choose'
    }, {
      value: 'Percentage'
    }, {
      value: 'Cash'
    }];
    this.selectedList10 = [{
      value: 'Choose'
    }, {
      value: 'Percentage'
    }, {
      value: 'Cash'
    }];
    this.selectedList11 = [{
      value: 'Choose'
    }, {
      value: 'Code34'
    }, {
      value: 'Code35'
    }, {
      value: 'Code36'
    }];
    this.selectedList12 = [{
      value: 'Choose'
    }, {
      value: 'Code34'
    }, {
      value: 'Code35'
    }, {
      value: 'Code36'
    }];
    this.isCollapsed = false;
    this.image = [true, true, true];
  }
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  removeImg(index) {
    this.image[index] = !this.image[index];
  }
  static {
    this.ɵfac = function AddProductComponent_Factory(t) {
      return new (t || AddProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.SidebarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AddProductComponent,
      selectors: [["app-add-product"]],
      decls: 661,
      vars: 49,
      consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], [1, "page-btn"], [1, "btn", "btn-secondary", 3, "routerLink"], [1, "feather", "icon-arrow-left", "me-2"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "id", "collapse-header", "matTooltip", "Collapse", 3, "click"], [1, "feather", "icon-chevron-up", "feather-chevron-up"], [1, "feather", "icon-chevron-down", "feather-chevron-down"], [1, "pb-2"], [1, "card", "mb-0"], [1, "card-body", "add-product", "pb-0"], ["id", "accordionExample", 1, "accordion-card-one", "accordion"], [1, "accordion-item"], ["id", "headingOne", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseOne", "aria-controls", "collapseOne", 1, "accordion-button"], [1, "addproduct-icon"], [1, "feather", "icon-info", "add-info"], ["href", "javascript:void(0);"], [1, "feather", "icon-chevron-down", "chevron-down-add"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse", "show"], [1, "accordion-body"], [1, "row"], [1, "col-lg-4", "col-sm-6", "col-12"], [1, "mb-3", "add-product"], [1, "form-label"], ["placeholder", "Choose", 1, "select", "custom-mat-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], ["type", "text", 1, "form-control"], [1, "input-blocks", "add-product", "list"], ["type", "text", "placeholder", "Enter SKU", 1, "form-control", "list"], ["type", "submit", 1, "btn", "btn-primaryadd"], [1, "addservice-info"], [1, "add-newplus"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-units-category"], [1, "feather", "icon-plus-circle", "plus-down-add"], [1, "add-product-new"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-units-brand"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-unit"], [1, "col-lg-6", "col-sm-6", "col-12"], ["type", "text", "placeholder", "Please Enter Item Code", 1, "form-control", "list"], [1, "col-lg-12"], [1, "input-blocks", "summer-description-box", "transfer", "mb-3"], ["rows", "5", 1, "form-control", "h-100"], [1, "mt-1"], ["id", "accordionExample2", 1, "accordion-card-one", "accordion"], ["id", "headingTwo", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseTwo", "aria-controls", "collapseTwo", 1, "accordion-button"], [1, "text-editor", "add-list"], [1, "addproduct-icon", "list", "icon"], [1, "feather", "icon-life-buoy", "add-info"], ["id", "collapseTwo", "aria-labelledby", "headingTwo", "data-bs-parent", "#accordionExample2", 1, "accordion-collapse", "collapse", "show"], [1, "input-blocks", "add-products"], [1, "d-block"], [1, "single-pill-product"], ["id", "pills-tab1", "role", "tablist", 1, "nav", "nav-pills"], ["role", "presentation", 1, "nav-item"], ["id", "pills-home-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-home", "role", "tab", "aria-controls", "pills-home", "aria-selected", "true", 1, "custom_radio", "me-4", "mb-0", "active"], ["type", "radio", "name", "payment", 1, "form-control"], [1, "checkmark"], ["id", "pills-profile-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-profile", "role", "tab", "aria-controls", "pills-profile", "aria-selected", "false", 1, "custom_radio", "me-2", "mb-0"], ["type", "radio", "name", "sign", 1, "form-control"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-home", "role", "tabpanel", "aria-labelledby", "pills-home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "input-blocks", "add-product"], ["type", "text", "placeholder", "Choose"], ["id", "accordionExample3", 1, "accordion-card-one", "accordion"], ["id", "headingThree", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseThree", "aria-controls", "collapseThree", 1, "accordion-button"], [1, "addproduct-icon", "list"], [1, "feather", "icon-image", "add-info"], ["id", "collapseThree", "aria-labelledby", "headingThree", "data-bs-parent", "#accordionExample3", 1, "accordion-collapse", "collapse", "show"], [1, "text-editor", "add-list", "add"], [1, "add-choosen"], [1, "input-blocks"], [1, "image-upload"], ["type", "file"], [1, "image-uploads"], [1, "feather", "icon-plus-circle", "plus-down-add", "me-0"], [1, "phone-img", 3, "ngClass"], ["src", "assets/img/products/phone-add-2.png", "alt", "image"], ["href", "javascript:void(0);", 3, "click"], [1, "feather", "icon-x", "x-square-add", "remove-product"], ["src", "assets/img/products/phone-add-1.png", "alt", "image"], ["id", "pills-profile", "role", "tabpanel", "aria-labelledby", "pills-profile-tab", 1, "tab-pane", "fade"], [1, "row", "select-color-add"], [1, "col-lg-10", "col-sm-10", "col-10"], ["id", "colorSelect", 1, "form-control", "variant-select", "select-option"], ["value", "red"], ["value", "black"], [1, "col-lg-2", "col-sm-2", "col-2", "ps-0"], [1, "add-icon", "tab"], ["data-bs-toggle", "modal", "data-bs-target", "#add-units", 1, "btn", "btn-filter"], [1, "feather", "icon-plus-circle"], ["id", "input-show", 1, "selected-hide-color"], [1, "row", "align-items-center"], [1, "col-sm-10"], ["id", "inputBox", "type", "text", "data-role", "tagsinput", "name", "specialist", "value", "red, black", 1, "input-tags", "form-control"], [1, "col-lg-2"], ["href", "javascript:void(0);", 1, "remove-color"], [1, "far", "fa-trash-alt"], ["id", "variant-table", 1, "modal-body-table", "variant-table"], [1, "table-responsive"], [1, "table"], [1, "no-sort"], [1, "add-product"], ["type", "text", "value", "color", 1, "form-control"], ["type", "text", "value", "red", 1, "form-control"], ["type", "text", "value", "1234", 1, "form-control"], [1, "product-quantity"], [1, "quantity-btn"], [1, "feather", "icon-minus-circle", "feather-search"], ["type", "text", "value", "2", 1, "quntity-input"], ["type", "text", "value", "50000", 1, "form-control"], [1, "action-table-data"], [1, "edit-delete-action"], [1, "input-block", "add-lists"], [1, "checkboxs"], ["type", "checkbox", "checked", ""], [1, "checkmarks"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-variation", 1, "me-2", "p-2"], [1, "feather", "icon-plus", "feather-edit"], ["href", "javascript:void(0);", 1, "confirm-text", "p-2"], [1, "feather", "icon-trash-2"], ["type", "text", "value", "black", 1, "form-control"], ["type", "text", "value", "2345", 1, "form-control"], ["type", "text", "value", "3", 1, "quntity-input"], [1, "feather", "icon-plus-circle", "plus-circle"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-units", 1, "me-2", "p-2"], [1, "feather", "icon-trash-2", "feather-trash-2"], ["id", "accordionExample4", 1, "accordion-card-one", "accordion"], ["id", "headingFour", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseFour", "aria-controls", "collapseFour", 1, "accordion-button"], [1, "feather", "icon-list", "add-info"], ["id", "collapseFour", "aria-labelledby", "headingFour", "data-bs-parent", "#accordionExample4", 1, "accordion-collapse", "collapse", "show"], [1, "custom-filed"], ["type", "checkbox"], [1, "input-groupicon", "calender-input", "date-input1"], [1, "feather", "icon-calendar", "info-img"], ["type", "text", "bsDatepicker", "", "placeholder", "Choose Date", "container", ".date-input1", 1, "datetimepicker"], [1, "input-groupicon", "calender-input", "date-input2"], ["type", "text", "bsDatepicker", "", "placeholder", "Choose Date", "container", ".date-input2", 1, "datetimepicker"], [1, "btn-addproduct", "mb-4"], ["type", "button", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit"], ["id", "add-units", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "stock-adjust-modal"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header", "border-0", "custom-modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body"], [1, "col-lg-6"], [1, "nav", "user-menu"], [1, "nav-item", "nav-searchinputs"], [1, "top-nav-search"], ["action", "#", 1, "dropdown"], ["id", "dropdownMenuClickable2", "data-bs-toggle", "dropdown", "data-bs-auto-close", "false", 1, "searchinputs", "list", "dropdown-toggle"], ["type", "text", "placeholder", "Search"], [1, "feather", "icon-search", "feather-16", "icon"], [1, "search-addon", "d-none"], [1, "feather", "icon-x-circle", "feather-14"], ["aria-labelledby", "dropdownMenuClickable2", 1, "dropdown-menu", "search-dropdown", "idea"], [1, "search-info"], [1, "modal-footer-btn", "popup"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-submit"], ["id", "add-units-category", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "custom-modal-two"], [1, "mb-3"], [1, "modal-footer-btn"], [1, "btn", "btn-submit", 3, "routerLink"], ["id", "add-units-brand", 1, "modal", "fade"], ["id", "add-unit", 1, "modal", "fade"], ["id", "add-variation", 1, "modal", "fade"], [1, "modal-title-head", "people-cust-avatar"], [1, "new-employee-field"], [1, "profile-pic-upload"], [1, "profile-pic"], [1, "image-upload", "mb-0"], [1, "col-lg-6", "pe-0"], [1, "select"], ["type", "text", "value", "455454478844", 1, "form-control", "list"], [1, "input-blocks", "image-upload-down"], [1, "image-upload", "download"], ["src", "assets/img/download-img.png", "alt", "img"], [1, "add-choosen", "mb-3"], [1, "phone-img", "ms-0"], [1, "phone-img"], [1, "col-lg-12", "pe-0"]],
      template: function AddProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "New Product");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Create new product");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 3)(8, "li")(9, "div", 4)(10, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Back to Product");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li")(14, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddProductComponent_Template_a_click_14_listener() {
            return ctx.toggleCollapse();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AddProductComponent_Conditional_15_Template, 1, 0, "i", 8)(16, AddProductComponent_Conditional_16_Template, 1, 0, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "form", 10)(18, "div", 11)(19, "div", 12)(20, "div", 13)(21, "div", 14)(22, "div", 15)(23, "div", 16)(24, "div", 17)(25, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Product Information");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 21)(32, "div", 22)(33, "div", 23)(34, "div", 24)(35, "div", 25)(36, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Store");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-select", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AddProductComponent_Template_mat_select_ngModelChange_38_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedValue1, $event) || (ctx.selectedValue1 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](39, AddProductComponent_For_40_Template, 2, 2, "mat-option", 28, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 24)(42, "div", 25)(43, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Warehouse");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-select", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AddProductComponent_Template_mat_select_ngModelChange_45_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedValue2, $event) || (ctx.selectedValue2 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](46, AddProductComponent_For_47_Template, 2, 2, "mat-option", 28, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 23)(49, "div", 24)(50, "div", 25)(51, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Product Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 24)(55, "div", 25)(56, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Slug");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 24)(60, "div", 30)(61, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "SKU");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "input", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "button", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, " Generate Code ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 33)(67, "div", 23)(68, "div", 24)(69, "div", 25)(70, "div", 34)(71, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "a", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Add New");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "mat-select", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AddProductComponent_Template_mat_select_ngModelChange_77_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedValue3, $event) || (ctx.selectedValue3 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](78, AddProductComponent_For_79_Template, 2, 2, "mat-option", 28, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 24)(81, "div", 25)(82, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Sub Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "mat-select", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AddProductComponent_Template_mat_select_ngModelChange_84_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedValue4, $event) || (ctx.selectedValue4 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](85, AddProductComponent_For_86_Template, 2, 2, "mat-option", 28, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 24)(88, "div", 25)(89, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Sub Sub Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "mat-select", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AddProductComponent_Template_mat_select_ngModelChange_91_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedValue5, $event) || (ctx.selectedValue5 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](92, AddProductComponent_For_93_Template, 2, 2, "mat-option", 28, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 37)(95, "div", 23)(96, "div", 24)(97, "div", 25)(98, "div", 34)(99, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Brand");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "a", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Add New");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "mat-select", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AddProductComponent_Template_mat_select_ngModelChange_105_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedValue6, $event) || (ctx.selectedValue6 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](106, AddProductComponent_For_107_Template, 2, 2, "mat-option", 28, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 24)(109, "div", 25)(110, "div", 34)(111, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Unit");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "a", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Add New");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "mat-select", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AddProductComponent_Template_mat_select_ngModelChange_117_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedValue7, $event) || (ctx.selectedValue7 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](118, AddProductComponent_For_119_Template, 2, 2, "mat-option", 28, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 24)(121, "div", 25)(122, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Selling Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "mat-select", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AddProductComponent_Template_mat_select_ngModelChange_124_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedValue7, $event) || (ctx.selectedValue7 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](125, AddProductComponent_For_126_Template, 2, 2, "mat-option", 28, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 23)(128, "div", 40)(129, "div", 25)(130, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "Barcode Symbology");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "mat-select", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AddProductComponent_Template_mat_select_ngModelChange_132_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedValue11, $event) || (ctx.selectedValue11 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](133, AddProductComponent_For_134_Template, 2, 2, "mat-option", 28, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 40)(136, "div", 30)(137, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "Item Code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](139, "input", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "button", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, " Generate Code ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "div", 42)(143, "div", 43)(144, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "textarea", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "p", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "Maximum 60 Characters");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 46)(150, "div", 14)(151, "div", 47)(152, "div", 48)(153, "div", 49)(154, "div", 50)(155, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](156, "i", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "Pricing & Stocks");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](160, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 52)(162, "div", 22)(163, "div", 53)(164, "label", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "Product Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 55)(167, "ul", 56)(168, "li", 57)(169, "span", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](170, "input", 59)(171, "span", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, " Single Product");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "li", 57)(174, "span", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](175, "input", 62)(176, "span", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, " Variable Product");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "div", 63)(179, "div", 64)(180, "div", 23)(181, "div", 24)(182, "div", 65)(183, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "Quantity");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](185, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "div", 24)(187, "div", 65)(188, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "Price");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](190, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "div", 24)(192, "div", 65)(193, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, "Tax Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "mat-select", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AddProductComponent_Template_mat_select_ngModelChange_195_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedValue8, $event) || (ctx.selectedValue8 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](196, AddProductComponent_For_197_Template, 2, 2, "mat-option", 28, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "div", 23)(199, "div", 24)(200, "div", 65)(201, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, "Discount Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "mat-select", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AddProductComponent_Template_mat_select_ngModelChange_203_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedValue9, $event) || (ctx.selectedValue9 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](204, AddProductComponent_For_205_Template, 2, 2, "mat-option", 28, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "div", 24)(207, "div", 65)(208, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, "Discount Value");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](210, "input", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "div", 24)(212, "div", 65)(213, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](214, "Quantity Alert");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](215, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "div", 67)(217, "div", 14)(218, "div", 68)(219, "div", 69)(220, "div", 70)(221, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](222, "i", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](224, "Images");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](226, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "div", 72)(228, "div", 22)(229, "div", 73)(230, "div", 42)(231, "div", 74)(232, "div", 75)(233, "div", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](234, "input", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "div", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](236, "i", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](238, "Add Images");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "div", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](240, "img", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "a", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddProductComponent_Template_a_click_241_listener() {
            return ctx.removeImg(1);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](242, "i", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "div", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](244, "img", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "a", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddProductComponent_Template_a_click_245_listener() {
            return ctx.removeImg(2);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](246, "i", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "div", 85)(248, "div", 86)(249, "div", 40)(250, "div", 65)(251, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](252, "Variant Attribute");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "div", 23)(254, "div", 87)(255, "select", 88)(256, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](257, "Choose");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](259, "Color");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "option", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](261, "Red");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "option", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](263, "Black");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "div", 91)(265, "div", 92)(266, "a", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](267, "i", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "div", 95)(269, "div", 96)(270, "div", 97)(271, "div", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](272, "input", 98);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "div", 99)(274, "div", 75)(275, "a", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](276, "i", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "div", 102)(278, "div", 103)(279, "table", 104)(280, "thead")(281, "tr")(282, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](283, "Variantion");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](285, "Variant Value");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](286, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](287, "SKU");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](288, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](289, "Quantity");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](290, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](291, "Price");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](292, "th", 105);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](293, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "tbody")(295, "tr")(296, "td")(297, "div", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](298, "input", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](299, "td")(300, "div", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](301, "input", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "td")(303, "div", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](304, "input", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](305, "td")(306, "div", 110)(307, "span", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](308, "i", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](309, "input", 113);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](310, "span", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](311, "+");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](312, "i", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](313, "td")(314, "div", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](315, "input", 114);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](316, "td", 115)(317, "div", 116)(318, "div", 117)(319, "label", 118);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](320, "input", 119)(321, "span", 120);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](322, "a", 121);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](323, "i", 122);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](324, "a", 123);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](325, "i", 124);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](326, "tr")(327, "td")(328, "div", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](329, "input", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](330, "td")(331, "div", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](332, "input", 125);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](333, "td")(334, "div", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](335, "input", 126);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](336, "td")(337, "div", 110)(338, "span", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](339, "i", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](340, "input", 127);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](341, "span", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](342, "+");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](343, "i", 128);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](344, "td")(345, "div", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](346, "input", 114);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](347, "td", 115)(348, "div", 116)(349, "div", 117)(350, "label", 118);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](351, "input", 119)(352, "span", 120);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](353, "a", 129);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](354, "i", 122);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](355, "a", 123);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](356, "i", 130);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](357, "div", 131)(358, "div", 14)(359, "div", 132)(360, "div", 133)(361, "div", 49)(362, "div", 70)(363, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](364, "i", 134);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](365, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](366, "Custom Fields");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](367, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](368, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](369, "div", 135)(370, "div", 22)(371, "div", 73)(372, "div", 136)(373, "div", 117)(374, "label", 118);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](375, "input", 137)(376, "span", 120);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](377, "Warranties ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](378, "label", 118);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](379, "input", 137)(380, "span", 120);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](381, "Manufacturer ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](382, "label", 118);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](383, "input", 137)(384, "span", 120);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](385, "Expiry ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](386, "div", 23)(387, "div", 24)(388, "div", 65)(389, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](390, "Discount Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](391, "mat-select", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AddProductComponent_Template_mat_select_ngModelChange_391_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedValue10, $event) || (ctx.selectedValue10 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](392, AddProductComponent_For_393_Template, 2, 2, "mat-option", 28, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](394, "div", 23)(395, "div", 24)(396, "div", 65)(397, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](398, "Quantity Alert");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](399, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](400, "div", 24)(401, "div", 75)(402, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](403, "Manufactured Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](404, "div", 138);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](405, "i", 139)(406, "input", 140);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](407, "div", 24)(408, "div", 75)(409, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](410, "Expiry On");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](411, "div", 141);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](412, "i", 139)(413, "input", 142);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](414, "div", 42)(415, "div", 143)(416, "button", 144);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](417, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](418, "button", 145);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](419, "Save Product");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](420, "div", 146)(421, "div", 147)(422, "div", 148)(423, "div", 149)(424, "div", 150)(425, "div", 151)(426, "div", 2)(427, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](428, "Add Variation Attribute");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](429, "button", 152)(430, "span", 153);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](431, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](432, "div", 154)(433, "div", 23)(434, "div", 42)(435, "div", 75)(436, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](437, "Attribute Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](438, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](439, "div", 42)(440, "div", 75)(441, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](442, "Add Value");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](443, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](444, "div", 23)(445, "div", 155)(446, "ul", 156)(447, "li", 157)(448, "div", 158)(449, "form", 159)(450, "div", 160);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](451, "input", 161)(452, "i", 162);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](453, "div", 163)(454, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](455, "i", 164);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](456, "div", 165)(457, "div", 166)(458, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](459, "Black ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](460, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](461, "Red");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](462, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](463, "Green");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](464, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](465, "S");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](466, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](467, "M");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](468, "div", 155)(469, "div", 167)(470, "a", 168);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](471, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](472, "a", 169);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](473, "Create Attribute");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](474, "div", 170)(475, "div", 171)(476, "div", 148)(477, "div", 149)(478, "div", 150)(479, "div", 151)(480, "div", 2)(481, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](482, "Add New Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](483, "button", 152)(484, "span", 153);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](485, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](486, "div", 154)(487, "div", 172)(488, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](489, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](490, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](491, "div", 173)(492, "a", 168);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](493, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](494, "a", 174);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](495, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](496, "div", 175)(497, "div", 171)(498, "div", 148)(499, "div", 149)(500, "div", 150)(501, "div", 151)(502, "div", 2)(503, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](504, "Add New Brand");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](505, "button", 152)(506, "span", 153);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](507, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](508, "div", 154)(509, "div", 172)(510, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](511, "Brand");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](512, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](513, "div", 173)(514, "a", 168);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](515, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](516, "a", 174);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](517, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](518, "div", 176)(519, "div", 171)(520, "div", 148)(521, "div", 149)(522, "div", 150)(523, "div", 151)(524, "div", 2)(525, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](526, "Add Unit");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](527, "button", 152)(528, "span", 153);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](529, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](530, "div", 154)(531, "div", 172)(532, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](533, "Unit");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](534, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](535, "div", 173)(536, "a", 168);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](537, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](538, "a", 174);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](539, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](540, "div", 177)(541, "div", 171)(542, "div", 148)(543, "div", 149)(544, "div", 150)(545, "div", 151)(546, "div", 2)(547, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](548, "Add Variation");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](549, "button", 152)(550, "span", 153);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](551, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](552, "div", 154)(553, "div", 178)(554, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](555, "Variant Thumbnail");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](556, "div", 179)(557, "div", 180)(558, "div", 181)(559, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](560, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](561, " Add Image");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](562, "div", 172)(563, "div", 182);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](564, "input", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](565, "div", 78)(566, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](567, "Change Image");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](568, "div", 23)(569, "div", 183)(570, "div", 172)(571, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](572, "Barcode Symbology");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](573, "select", 184)(574, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](575, "Choose");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](576, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](577, "Code34");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](578, "div", 183)(579, "div", 172)(580, "div", 30)(581, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](582, "Item Code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](583, "input", 185);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](584, "button", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](585, " Generate Code ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](586, "div", 42)(587, "div", 186)(588, "div", 187);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](589, "input", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](590, "div", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](591, "img", 188);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](592, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](593, "Drag and drop a ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](594, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](595, "file to upload");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](596, "div", 22)(597, "div", 73)(598, "div", 42)(599, "div", 189)(600, "div", 190);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](601, "img", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](602, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](603, "i", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](604, "div", 191);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](605, "img", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](606, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](607, "i", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](608, "div", 183)(609, "div", 172)(610, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](611, "Quantity");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](612, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](613, "div", 183)(614, "div", 172)(615, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](616, "Quantity Alert");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](617, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](618, "div", 183)(619, "div", 172)(620, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](621, "Tax Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](622, "select", 184)(623, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](624, "Choose");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](625, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](626, "Direct");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](627, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](628, "Indirect");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](629, "div", 183)(630, "div", 172)(631, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](632, "Tax ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](633, "select", 184)(634, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](635, "Choose");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](636, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](637, "Income Tax");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](638, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](639, "Service Tax");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](640, "div", 192)(641, "div", 172)(642, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](643, "Discount Type ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](644, "select", 184)(645, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](646, "Choose");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](647, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](648, "Percentage");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](649, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](650, "Early Payment");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](651, "div", 192)(652, "div")(653, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](654, "Discount Value");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](655, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](656, "div", 173)(657, "a", 168);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](658, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](659, "a", 174);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](660, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.productList);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](15, !ctx.isCollapsed ? 15 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](16, ctx.isCollapsed ? 16 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](33, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.selectedList1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](34, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.selectedList2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](35, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.selectedList3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](36, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.selectedList4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](37, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.selectedList5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](38, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.selectedList6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](39, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.selectedList7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](40, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.selectedList7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](41, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.selectedList11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](62);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](42, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.selectedList8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](43, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.selectedList9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](44, _c1, ctx.image[1] === false));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](46, _c1, ctx.image[2] === false));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](148);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](48, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.selectedList10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](102);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.addProduct);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.addProduct);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.addProduct);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](121);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.addProduct);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_select__WEBPACK_IMPORTED_MODULE_4__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatTooltip, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__.BsDatepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__.BsDatepickerInputDirective],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 86341:
/*!*****************************************************************************************!*\
  !*** ./src/app/core-component/inventory/product/edit-product/edit-product.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditProductComponent: () => (/* binding */ EditProductComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/core.index */ 82351);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 98379);










const _c0 = () => ({
  standalone: true
});
const _c1 = a0 => ({
  "d-none": a0
});
function EditProductComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 8);
  }
}
function EditProductComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 9);
  }
}
function EditProductComponent_For_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r1.value, " ");
  }
}
function EditProductComponent_For_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r2.value, " ");
  }
}
function EditProductComponent_For_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r3.value, " ");
  }
}
function EditProductComponent_For_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r4.value, " ");
  }
}
function EditProductComponent_For_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r5.value, " ");
  }
}
function EditProductComponent_For_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r6.value, " ");
  }
}
function EditProductComponent_For_117_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r7.value, " ");
  }
}
function EditProductComponent_For_124_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r8.value, " ");
  }
}
function EditProductComponent_For_132_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r9.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r9.value, " ");
  }
}
function EditProductComponent_For_196_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r10.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r10.value, " ");
  }
}
function EditProductComponent_For_204_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r11.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r11.value, " ");
  }
}
function EditProductComponent_For_256_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r12.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r12.value, " ");
  }
}
function EditProductComponent_For_386_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r13.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r13.value, " ");
  }
}
function EditProductComponent_For_568_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r14.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r14.value, " ");
  }
}
function EditProductComponent_For_615_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r15.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r15.value, " ");
  }
}
function EditProductComponent_For_622_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r16.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r16.value, " ");
  }
}
function EditProductComponent_For_629_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r17.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r17.value, " ");
  }
}
class EditProductComponent {
  constructor(sidebar) {
    this.sidebar = sidebar;
    this.routes = src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.routes;
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
    this.selectedValue13 = '';
    this.selectedValue14 = '';
    this.selectedValue15 = '';
    this.selectedValue16 = '';
    this.selectedValue17 = '';
    this.image = [true, true, true];
    this.selectedList1 = [{
      value: 'Thomas'
    }, {
      value: 'Rasmussen'
    }, {
      value: 'Fred john'
    }];
    this.selectedList2 = [{
      value: 'Legendary'
    }, {
      value: 'Determined'
    }, {
      value: 'Sincere'
    }];
    this.selectedList3 = [{
      value: 'Lenovo'
    }, {
      value: 'Electronics'
    }];
    this.selectedList4 = [{
      value: 'Lenovo'
    }, {
      value: 'Electronics'
    }];
    this.selectedList5 = [{
      value: 'Fruits'
    }, {
      value: 'Computers'
    }, {
      value: 'Shoes'
    }];
    this.selectedList6 = [{
      value: 'Nike'
    }, {
      value: 'Bolt'
    }];
    this.selectedList7 = [{
      value: 'Kg'
    }, {
      value: 'Pc'
    }];
    this.selectedList8 = [{
      value: 'Transactional selling'
    }, {
      value: 'Solution selling'
    }];
    this.selectedList9 = [{
      value: 'Code34'
    }, {
      value: 'Code35'
    }, {
      value: 'Code36'
    }];
    this.selectedList10 = [{
      value: 'Exclusive'
    }, {
      value: 'Sales Tax'
    }];
    this.selectedList11 = [{
      value: 'Percentage'
    }, {
      value: 'Cash'
    }];
    this.selectedList12 = [{
      value: 'Choose'
    }, {
      value: 'Color'
    }, {
      value: 'Red'
    }, {
      value: 'Black'
    }];
    this.selectedList13 = [{
      value: 'Percentage'
    }, {
      value: 'Cash'
    }];
    this.selectedList14 = [{
      value: 'Choose'
    }, {
      value: 'Code34'
    }];
    this.selectedList15 = [{
      value: 'Choose'
    }, {
      value: 'Direct'
    }, {
      value: 'Indirect'
    }];
    this.selectedList16 = [{
      value: 'Choose'
    }, {
      value: 'Income Tax'
    }, {
      value: 'Service Tax'
    }];
    this.selectedList17 = [{
      value: 'Choose'
    }, {
      value: 'Percentage'
    }, {
      value: 'Early Payment'
    }];
    this.isCollapsed = false;
  }
  removeImg(index) {
    this.image[index] = !this.image[index];
  }
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  static {
    this.ɵfac = function EditProductComponent_Factory(t) {
      return new (t || EditProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.SidebarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: EditProductComponent,
      selectors: [["app-edit-product"]],
      decls: 640,
      vars: 64,
      consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], [1, "page-btn"], [1, "btn", "btn-secondary", 3, "routerLink"], [1, "feather", "icon-arrow-left", "me-2"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "id", "collapse-header", "matTooltip", "Collapse", "matTooltipPosition", "above", 3, "click"], [1, "feather", "icon-chevron-up", "feather-chevron-up"], [1, "feather", "icon-chevron-down", "feather-chevron-down"], [1, "card"], [1, "card-body", "add-product", "pb-0"], ["id", "accordionExample", 1, "accordion-card-one", "accordion"], [1, "accordion-item"], ["id", "headingOne", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseOne", "aria-controls", "collapseOne", 1, "accordion-button"], [1, "addproduct-icon"], [1, "feather", "icon-info", "add-info"], ["href", "javascript:void(0);"], [1, "feather", "icon-chevron-down", "chevron-down-add"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse", "show"], [1, "accordion-body"], [1, "row"], [1, "col-lg-4", "col-sm-6", "col-12"], [1, "mb-3", "add-product"], [1, "form-label"], ["placeholder", "Thomas", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], ["placeholder", "Legendary", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["type", "text", "value", "Nike Jordan", 1, "form-control"], ["type", "text", "value", "Shoe", 1, "form-control"], [1, "input-blocks", "add-product", "list"], ["type", "text", "placeholder", "Enter SKU", "value", "PT003", 1, "form-control", "list"], ["type", "submit", 1, "btn", "btn-primaryadd"], [1, "addservice-info"], [1, "add-newplus"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-units-category"], [1, "feather", "icon-plus-circle", "plus-down-add"], ["placeholder", "Lenovo", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["placeholder", "Fruits", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "add-product-new"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-units-brand"], ["placeholder", "Nike", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-unit"], ["placeholder", "Kg", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["placeholder", "Transactional selling", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "col-lg-6", "col-sm-6", "col-12"], ["placeholder", "Code34", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["type", "text", "placeholder", "Please Enter Item Code", 1, "form-control", "list"], [1, "col-lg-12"], [1, "input-blocks", "summer-description-box", "transfer", "mb-3"], ["rows", "5", 1, "form-control", "h-100"], [1, "mt-1"], ["id", "accordionExample2", 1, "accordion-card-one", "accordion"], ["id", "headingTwo", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseTwo", "aria-controls", "collapseTwo", 1, "accordion-button"], [1, "text-editor", "add-list"], [1, "addproduct-icon", "list", "icon"], [1, "feather", "icon-life-buoy", "add-info"], ["id", "collapseTwo", "aria-labelledby", "headingTwo", "data-bs-parent", "#accordionExample2", 1, "accordion-collapse", "collapse", "show"], [1, "input-blocks", "add-products"], [1, "d-block"], [1, "single-pill-product"], ["id", "pills-tab1", "role", "tablist", 1, "nav", "nav-pills"], ["role", "presentation", 1, "nav-item"], ["id", "pills-home-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-home", "role", "tab", "aria-controls", "pills-home", "aria-selected", "true", 1, "custom_radio", "me-4", "mb-0", "active"], ["type", "radio", "name", "payment", 1, "form-control"], [1, "checkmark"], ["id", "pills-profile-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-profile", "role", "tab", "aria-controls", "pills-profile", "aria-selected", "false", 1, "custom_radio", "me-2", "mb-0"], ["type", "radio", "name", "sign", 1, "form-control"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-home", "role", "tabpanel", "aria-labelledby", "pills-home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "input-blocks", "add-product"], ["type", "text", "value", "5", 1, "form-control"], ["type", "text", "value", "300", 1, "form-control"], ["placeholder", "Exclusive", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["placeholder", "Percentage", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["type", "text", "placeholder", "10%"], ["type", "text", "value", "100", 1, "form-control"], ["id", "accordionExample3", 1, "accordion-card-one", "accordion"], ["id", "headingThree", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseThree", "aria-controls", "collapseThree", 1, "accordion-button"], [1, "addproduct-icon", "list"], [1, "feather", "icon-image", "add-info"], ["id", "collapseThree", "aria-labelledby", "headingThree", "data-bs-parent", "#accordionExample3", 1, "accordion-collapse", "collapse", "show"], [1, "text-editor", "add-list", "add"], [1, "add-choosen"], [1, "input-blocks"], [1, "image-upload"], ["type", "file"], [1, "image-uploads"], [1, "feather", "icon-plus-circle", "plus-down-add", "me-0"], [1, "phone-img", 3, "ngClass"], ["src", "assets/img/products/phone-add-2.png", "alt", "image"], ["href", "javascript:void(0);", 3, "click"], [1, "feather", "icon-x", "x-square-add", "remove-product"], ["src", "assets/img/products/phone-add-1.png", "alt", "image"], ["id", "pills-profile", "role", "tabpanel", "aria-labelledby", "pills-profile-tab", 1, "tab-pane", "fade"], [1, "row", "select-color-add"], [1, "col-lg-10", "col-sm-10", "col-10"], ["placeholder", "Choose", 1, "variant-select", "select-option", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "col-lg-2", "col-sm-2", "col-2", "ps-0"], [1, "add-icon", "tab"], ["data-bs-toggle", "modal", "data-bs-target", "#add-units", 1, "btn", "btn-filter"], [1, "feather", "icon-plus-circle", "feather-plus-circle"], ["id", "input-show", 1, "selected-hide-color"], [1, "row", "align-items-center"], [1, "col-sm-10"], ["id", "inputBox", "type", "text", "data-role", "tagsinput", "name", "specialist", "value", "red, black", 1, "input-tags", "form-control"], [1, "col-lg-2"], ["href", "javascript:void(0);", 1, "remove-color"], [1, "far", "fa-trash-alt"], ["id", "variant-table", 1, "modal-body-table", "variant-table"], [1, "table-responsive"], [1, "table"], [1, "no-sort"], [1, "add-product"], ["type", "text", "value", "color", 1, "form-control"], ["type", "text", "value", "red", 1, "form-control"], ["type", "text", "value", "1234", 1, "form-control"], [1, "product-quantity"], [1, "quantity-btn"], [1, "feather", "icon-minus-circle", "feather-search"], ["type", "text", "value", "2", 1, "quntity-input"], [1, "feather", "icon-plus-circle", "plus-circle"], ["type", "text", "value", "50000", 1, "form-control"], [1, "action-table-data"], [1, "edit-delete-action"], [1, "input-block", "add-lists"], [1, "checkboxs"], ["type", "checkbox", "checked", ""], [1, "checkmarks"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-variation", 1, "me-2", "p-2"], [1, "feather", "icon-plus", "feather-edit"], ["href", "javascript:void(0);", 1, "confirm-text", "p-2"], [1, "feather", "icon-trash-2", "feather-trash-2"], ["type", "text", "value", "black", 1, "form-control"], ["type", "text", "value", "2345", 1, "form-control"], ["type", "text", "value", "3", 1, "quntity-input"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-units", 1, "me-2", "p-2"], ["id", "accordionExample4", 1, "accordion-card-one", "accordion"], ["id", "headingFour", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseFour", "aria-controls", "collapseFour", 1, "accordion-button"], [1, "feather", "icon-list", "add-info"], ["id", "collapseFour", "aria-labelledby", "headingFour", "data-bs-parent", "#accordionExample4", 1, "accordion-collapse", "collapse", "show"], [1, "custom-filed"], ["type", "checkbox"], [1, "input-groupicon", "calender-input", "date-input1"], [1, "feather", "icon-calendar", "info-img"], ["type", "text", "bsDatepicker", "", "placeholder", "Choose Date", "container", ".date-input1", 1, "datetimepicker"], [1, "input-groupicon", "calender-input", "date-input2"], ["type", "text", "bsDatepicker", "", "placeholder", "Choose Date", "container", ".date-input2", 1, "datetimepicker"], [1, "btn-addproduct", "mb-4"], ["type", "button", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit"], ["id", "add-units", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "stock-adjust-modal"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header", "border-0", "custom-modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body"], ["type", "text", 1, "form-control"], [1, "col-lg-6"], [1, "nav", "user-menu"], [1, "nav-item", "nav-searchinputs"], [1, "top-nav-search"], ["action", "#", 1, "dropdown"], ["id", "dropdownMenuClickable2", "data-bs-toggle", "dropdown", "data-bs-auto-close", "false", 1, "searchinputs", "list", "dropdown-toggle"], ["type", "text", "placeholder", "Search"], [1, "feather", "icon-search", "feather-16", "icon"], [1, "search-addon", "d-none"], [1, "feather", "icon-x-circle", "feather-14"], ["aria-labelledby", "dropdownMenuClickable2", 1, "dropdown-menu", "search-dropdown", "idea"], [1, "search-info"], [1, "modal-footer-btn", "popup"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-submit"], ["id", "add-units-category", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "custom-modal-two"], [1, "mb-3"], [1, "modal-footer-btn"], [1, "btn", "btn-submit", 3, "routerLink"], ["id", "add-units-brand", 1, "modal", "fade"], ["id", "add-unit", 1, "modal", "fade"], ["id", "add-variation", 1, "modal", "fade"], [1, "modal-title-head", "people-cust-avatar"], [1, "new-employee-field"], [1, "profile-pic-upload"], [1, "profile-pic"], [1, "image-upload", "mb-0"], [1, "col-lg-6", "pe-0"], ["placeholder", "Choose", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["type", "text", "value", "455454478844", 1, "form-control", "list"], [1, "input-blocks", "image-upload-down"], [1, "image-upload", "download"], ["src", "assets/img/download-img.png", "alt", "img"], [1, "add-choosen", "mb-3"], [1, "phone-img", "ms-0"], [1, "phone-img"], [1, "col-lg-12", "pe-0"]],
      template: function EditProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Edit Product");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 3)(6, "li")(7, "div", 4)(8, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Back to Product");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditProductComponent_Template_a_click_12_listener() {
            return ctx.toggleCollapse();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, EditProductComponent_Conditional_13_Template, 1, 0, "i", 8)(14, EditProductComponent_Conditional_14_Template, 1, 0, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "form")(16, "div", 10)(17, "div", 11)(18, "div", 12)(19, "div", 13)(20, "div", 14)(21, "div", 15)(22, "div", 16)(23, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Product Information");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 20)(30, "div", 21)(31, "div", 22)(32, "div", 23)(33, "div", 24)(34, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Store");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-select", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function EditProductComponent_Template_mat_select_ngModelChange_36_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedValue1, $event) || (ctx.selectedValue1 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](37, EditProductComponent_For_38_Template, 2, 2, "mat-option", 27, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 23)(40, "div", 24)(41, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Warehouse");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-select", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function EditProductComponent_Template_mat_select_ngModelChange_43_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedValue2, $event) || (ctx.selectedValue2 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](44, EditProductComponent_For_45_Template, 2, 2, "mat-option", 27, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 22)(47, "div", 23)(48, "div", 24)(49, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Product Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 23)(53, "div", 24)(54, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Slug");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "input", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 23)(58, "div", 31)(59, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "SKU");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "button", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, " Generate Code ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 34)(65, "div", 22)(66, "div", 23)(67, "div", 24)(68, "div", 35)(69, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "a", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "i", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Add New");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "mat-select", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function EditProductComponent_Template_mat_select_ngModelChange_75_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedValue3, $event) || (ctx.selectedValue3 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](76, EditProductComponent_For_77_Template, 2, 2, "mat-option", 27, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 23)(79, "div", 24)(80, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Choose Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "mat-select", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function EditProductComponent_Template_mat_select_ngModelChange_82_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedValue4, $event) || (ctx.selectedValue4 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](83, EditProductComponent_For_84_Template, 2, 2, "mat-option", 27, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 23)(86, "div", 24)(87, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Sub Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "mat-select", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function EditProductComponent_Template_mat_select_ngModelChange_89_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedValue5, $event) || (ctx.selectedValue5 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](90, EditProductComponent_For_91_Template, 2, 2, "mat-option", 27, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 40)(93, "div", 22)(94, "div", 23)(95, "div", 24)(96, "div", 35)(97, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Brand");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "a", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "i", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Add new");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "mat-select", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function EditProductComponent_Template_mat_select_ngModelChange_103_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedValue6, $event) || (ctx.selectedValue6 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](104, EditProductComponent_For_105_Template, 2, 2, "mat-option", 27, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 23)(107, "div", 24)(108, "div", 35)(109, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Unit");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "a", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "i", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Add New");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "mat-select", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function EditProductComponent_Template_mat_select_ngModelChange_115_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedValue7, $event) || (ctx.selectedValue7 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](116, EditProductComponent_For_117_Template, 2, 2, "mat-option", 27, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 23)(119, "div", 24)(120, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Selling Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "mat-select", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function EditProductComponent_Template_mat_select_ngModelChange_122_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedValue8, $event) || (ctx.selectedValue8 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](123, EditProductComponent_For_124_Template, 2, 2, "mat-option", 27, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 22)(126, "div", 46)(127, "div", 24)(128, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "Barcode Symbology");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "mat-select", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function EditProductComponent_Template_mat_select_ngModelChange_130_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedValue9, $event) || (ctx.selectedValue9 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](131, EditProductComponent_For_132_Template, 2, 2, "mat-option", 27, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 46)(134, "div", 31)(135, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Item Code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "input", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "button", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, " Generate Code ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 22)(141, "div", 49)(142, "div", 50)(143, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](145, "textarea", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "p", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "Maximum 60 Characters");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 53)(149, "div", 13)(150, "div", 54)(151, "div", 55)(152, "div", 56)(153, "div", 57)(154, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](155, "i", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "Pricing & Stocks");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](159, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 59)(161, "div", 21)(162, "div", 60)(163, "label", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "Product Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 62)(166, "ul", 63)(167, "li", 64)(168, "span", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](169, "input", 66)(170, "span", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, " Single Product");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "li", 64)(173, "span", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](174, "input", 69)(175, "span", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, " Variable Product");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "div", 70)(178, "div", 71)(179, "div", 22)(180, "div", 23)(181, "div", 72)(182, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "Quantity");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](184, "input", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 23)(186, "div", 72)(187, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "Price");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](189, "input", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "div", 23)(191, "div", 72)(192, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, "Tax Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "mat-select", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function EditProductComponent_Template_mat_select_ngModelChange_194_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedValue10, $event) || (ctx.selectedValue10 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](195, EditProductComponent_For_196_Template, 2, 2, "mat-option", 27, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "div", 22)(198, "div", 23)(199, "div", 72)(200, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, "Discount Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "mat-select", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function EditProductComponent_Template_mat_select_ngModelChange_202_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedValue11, $event) || (ctx.selectedValue11 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](203, EditProductComponent_For_204_Template, 2, 2, "mat-option", 27, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "div", 23)(206, "div", 72)(207, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](208, "Discount Value");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](209, "input", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "div", 23)(211, "div", 72)(212, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](213, "Quantity Alert");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](214, "input", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "div", 79)(216, "div", 13)(217, "div", 80)(218, "div", 81)(219, "div", 82)(220, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](221, "i", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, "Images");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](225, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "div", 84)(227, "div", 21)(228, "div", 85)(229, "div", 49)(230, "div", 86)(231, "div", 87)(232, "div", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](233, "input", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "div", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](235, "i", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](237, "Add Images");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "div", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](239, "img", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "a", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditProductComponent_Template_a_click_240_listener() {
            return ctx.removeImg(1);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](241, "i", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "div", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](243, "img", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "a", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditProductComponent_Template_a_click_244_listener() {
            return ctx.removeImg(2);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](245, "i", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "div", 97)(247, "div", 98)(248, "div", 46)(249, "div", 72)(250, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](251, "Variant Attribute");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "div", 22)(253, "div", 99)(254, "mat-select", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function EditProductComponent_Template_mat_select_ngModelChange_254_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedValue12, $event) || (ctx.selectedValue12 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](255, EditProductComponent_For_256_Template, 2, 2, "mat-option", 27, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "div", 101)(258, "div", 102)(259, "a", 103);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](260, "i", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "div", 105)(262, "div", 106)(263, "div", 107)(264, "div", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](265, "input", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "div", 109)(267, "div", 87)(268, "a", 110);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](269, "i", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "div", 112)(271, "div", 113)(272, "table", 114)(273, "thead")(274, "tr")(275, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](276, "Variantion");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](278, "Variant Value");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](279, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](280, "SKU");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](281, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](282, "Quantity");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](283, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](284, "Price");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](285, "th", 115);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](286, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "tbody")(288, "tr")(289, "td")(290, "div", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](291, "input", 117);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](292, "td")(293, "div", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](294, "input", 118);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](295, "td")(296, "div", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](297, "input", 119);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](298, "td")(299, "div", 120)(300, "span", 121);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](301, "i", 122);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](302, "input", 123);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](303, "span", 121);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](304, "+");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](305, "i", 124);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](306, "td")(307, "div", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](308, "input", 125);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "td", 126)(310, "div", 127)(311, "div", 128)(312, "label", 129);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](313, "input", 130)(314, "span", 131);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](315, "a", 132);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](316, "i", 133);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](317, "a", 134);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](318, "i", 135);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](319, "tr")(320, "td")(321, "div", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](322, "input", 117);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](323, "td")(324, "div", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](325, "input", 136);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](326, "td")(327, "div", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](328, "input", 137);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](329, "td")(330, "div", 120)(331, "span", 121);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](332, "i", 122);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](333, "input", 138);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](334, "span", 121);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](335, "+");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](336, "i", 124);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](337, "td")(338, "div", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](339, "input", 125);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](340, "td", 126)(341, "div", 127)(342, "div", 128)(343, "label", 129);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](344, "input", 130)(345, "span", 131);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](346, "a", 139);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](347, "i", 133);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](348, "a", 134);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](349, "i", 135);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](350, "div", 140)(351, "div", 13)(352, "div", 141)(353, "div", 142)(354, "div", 56)(355, "div", 82)(356, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](357, "i", 143);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](358, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](359, "Custom Fields");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](360, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](361, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](362, "div", 144)(363, "div", 21)(364, "div", 85)(365, "div", 145)(366, "div", 128)(367, "label", 129);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](368, "input", 146)(369, "span", 131);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](370, "Warranties ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](371, "label", 129);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](372, "input", 146)(373, "span", 131);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](374, "Manufacturer ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](375, "label", 129);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](376, "input", 146)(377, "span", 131);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](378, "Expiry ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](379, "div", 22)(380, "div", 23)(381, "div", 72)(382, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](383, "Discount Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](384, "mat-select", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function EditProductComponent_Template_mat_select_ngModelChange_384_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedValue11, $event) || (ctx.selectedValue11 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](385, EditProductComponent_For_386_Template, 2, 2, "mat-option", 27, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](387, "div", 22)(388, "div", 23)(389, "div", 72)(390, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](391, "Quantity Alert");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](392, "input", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](393, "div", 23)(394, "div", 87)(395, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](396, "Manufactured Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](397, "div", 147);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](398, "i", 148)(399, "input", 149);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](400, "div", 23)(401, "div", 87)(402, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](403, "Expiry On");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](404, "div", 150);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](405, "i", 148)(406, "input", 151);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](407, "div", 49)(408, "div", 152)(409, "button", 153);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](410, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](411, "button", 154);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](412, "Save Product");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](413, "div", 155)(414, "div", 156)(415, "div", 157)(416, "div", 158)(417, "div", 159)(418, "div", 160)(419, "div", 2)(420, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](421, "Add Variation Attribute");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](422, "button", 161)(423, "span", 162);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](424, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](425, "div", 163)(426, "div", 22)(427, "div", 49)(428, "div", 87)(429, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](430, "Attribute Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](431, "input", 164);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](432, "div", 49)(433, "div", 87)(434, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](435, "Add Value");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](436, "input", 164);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](437, "div", 22)(438, "div", 165)(439, "ul", 166)(440, "li", 167)(441, "div", 168)(442, "form", 169)(443, "div", 170);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](444, "input", 171)(445, "i", 172);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](446, "div", 173)(447, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](448, "i", 174);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](449, "div", 175)(450, "div", 176)(451, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](452, "Black ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](453, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](454, "Red");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](455, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](456, "Green");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](457, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](458, "S");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](459, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](460, "M");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](461, "div", 165)(462, "div", 177)(463, "a", 178);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](464, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](465, "a", 179);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](466, "Create Attribute");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](467, "div", 180)(468, "div", 181)(469, "div", 157)(470, "div", 158)(471, "div", 159)(472, "div", 160)(473, "div", 2)(474, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](475, "Add New Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](476, "button", 161)(477, "span", 162);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](478, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](479, "div", 163)(480, "div", 182)(481, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](482, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](483, "input", 164);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](484, "div", 183)(485, "a", 178);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](486, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](487, "a", 184);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](488, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](489, "div", 185)(490, "div", 181)(491, "div", 157)(492, "div", 158)(493, "div", 159)(494, "div", 160)(495, "div", 2)(496, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](497, "Add New Brand");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](498, "button", 161)(499, "span", 162);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](500, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](501, "div", 163)(502, "div", 182)(503, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](504, "Brand");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](505, "input", 164);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](506, "div", 183)(507, "a", 178);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](508, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](509, "a", 184);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](510, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](511, "div", 186)(512, "div", 181)(513, "div", 157)(514, "div", 158)(515, "div", 159)(516, "div", 160)(517, "div", 2)(518, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](519, "Add Unit");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](520, "button", 161)(521, "span", 162);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](522, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](523, "div", 163)(524, "div", 182)(525, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](526, "Unit");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](527, "input", 164);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](528, "div", 183)(529, "a", 178);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](530, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](531, "a", 184);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](532, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](533, "div", 187)(534, "div", 181)(535, "div", 157)(536, "div", 158)(537, "div", 159)(538, "div", 160)(539, "div", 2)(540, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](541, "Add Variation");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](542, "button", 161)(543, "span", 162);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](544, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](545, "div", 163)(546, "div", 188)(547, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](548, "Variant Thumbnail");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](549, "div", 189)(550, "div", 190)(551, "div", 191)(552, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](553, "i", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](554, " Add Image");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](555, "div", 182)(556, "div", 192);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](557, "input", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](558, "div", 90)(559, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](560, "Change Image");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](561, "div", 22)(562, "div", 193)(563, "div", 182)(564, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](565, "Barcode Symbology");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](566, "mat-select", 194);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function EditProductComponent_Template_mat_select_ngModelChange_566_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedValue14, $event) || (ctx.selectedValue14 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](567, EditProductComponent_For_568_Template, 2, 2, "mat-option", 27, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](569, "div", 193)(570, "div", 182)(571, "div", 31)(572, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](573, "Item Code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](574, "input", 195);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](575, "button", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](576, " Generate Code ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](577, "div", 49)(578, "div", 196)(579, "div", 197);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](580, "input", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](581, "div", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](582, "img", 198);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](583, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](584, "Drag and drop a ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](585, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](586, "file to upload");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](587, "div", 21)(588, "div", 85)(589, "div", 49)(590, "div", 199)(591, "div", 200);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](592, "img", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](593, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](594, "i", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](595, "div", 201);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](596, "img", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](597, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](598, "i", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](599, "div", 193)(600, "div", 182)(601, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](602, "Quantity");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](603, "input", 164);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](604, "div", 193)(605, "div", 182)(606, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](607, "Quantity Alert");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](608, "input", 164);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](609, "div", 193)(610, "div", 182)(611, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](612, "Tax Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](613, "mat-select", 194);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function EditProductComponent_Template_mat_select_ngModelChange_613_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedValue15, $event) || (ctx.selectedValue15 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](614, EditProductComponent_For_615_Template, 2, 2, "mat-option", 27, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](616, "div", 193)(617, "div", 182)(618, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](619, "Tax ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](620, "mat-select", 194);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function EditProductComponent_Template_mat_select_ngModelChange_620_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedValue16, $event) || (ctx.selectedValue16 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](621, EditProductComponent_For_622_Template, 2, 2, "mat-option", 27, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](623, "div", 202)(624, "div", 182)(625, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](626, "Discount Type ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](627, "mat-select", 194);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function EditProductComponent_Template_mat_select_ngModelChange_627_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedValue16, $event) || (ctx.selectedValue16 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](628, EditProductComponent_For_629_Template, 2, 2, "mat-option", 27, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](630, "div", 202)(631, "div")(632, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](633, "Discount Value");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](634, "input", 164);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](635, "div", 183)(636, "a", 178);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](637, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](638, "a", 184);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](639, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.productList);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](13, !ctx.isCollapsed ? 13 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](14, ctx.isCollapsed ? 14 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](43, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.selectedList1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](44, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.selectedList2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](45, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.selectedList3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](46, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.selectedList4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](47, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.selectedList5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](48, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.selectedList6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](49, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.selectedList7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](50, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.selectedList8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](51, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.selectedList9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](63);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](52, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.selectedList10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](53, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.selectedList11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](54, _c1, ctx.image[1] === false));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](56, _c1, ctx.image[2] === false));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](58, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.selectedList12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](129);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](59, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.selectedList11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](102);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.addProduct);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.addProduct);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.addProduct);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](60, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.selectedList11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](61, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.selectedList15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](62, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.selectedList16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](63, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.selectedList16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.addProduct);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_select__WEBPACK_IMPORTED_MODULE_4__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatTooltip, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__.BsDatepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__.BsDatepickerInputDirective],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 14137:
/*!*************************************************************************************************!*\
  !*** ./src/app/core-component/inventory/product/expired-products/expired-products.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpiredProductsComponent: () => (/* binding */ ExpiredProductsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 77697);
/* harmony import */ var src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/core.index */ 82351);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_service_data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/data/data.service */ 67812);
/* harmony import */ var src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.index */ 31287);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ 22047);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/custom-pagination/custom-pagination.component */ 14860);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 98379);
















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
function ExpiredProductsComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 13);
  }
}
function ExpiredProductsComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 14);
  }
}
function ExpiredProductsComponent_For_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 32);
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
function ExpiredProductsComponent_For_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 32);
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
function ExpiredProductsComponent_For_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td")(2, "label", 55)(3, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ExpiredProductsComponent_For_84_Template_input_ngModelChange_3_listener($event) {
      const data_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](data_r4.isSelected, $event) || (data_r4.isSelected = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td")(6, "div", 57)(7, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "td", 61)(18, "div", 62)(19, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ExpiredProductsComponent_For_84_Template_a_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.confirmColor());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", data_r4.isSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", data_r4.img, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", data_r4.product, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r4.sku);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r4.manufacturedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r4.expiredDate);
  }
}
class ExpiredProductsComponent {
  //** / pagination variables
  constructor(data, pagination, router, sidebar) {
    this.data = data;
    this.pagination = pagination;
    this.router = router;
    this.sidebar = sidebar;
    this.initChecked = false;
    this.routes = src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.routes;
    this.selectedValue1 = '';
    this.selectedValue2 = '';
    // pagination variables
    this.tableData = [];
    this.pageSize = 10;
    this.serialNumberArray = [];
    this.totalData = 0;
    this.showFilter = false;
    this.searchDataValue = '';
    this.selectedList1 = [{
      value: 'Sort by Date'
    }, {
      value: 'Newest'
    }, {
      value: 'Oldest'
    }];
    this.selectedList2 = [{
      value: 'Choose Type'
    }, {
      value: 'Lenovo 3rd Generation'
    }, {
      value: 'Nike Jordan'
    }];
    this.filter = false;
    this.isCollapsed = false;
    this.data.getDataTable().subscribe(apiRes => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe(res => {
        if (this.router.url == this.routes.expiredProduct) {
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
    this.data.getExpiredproduct().subscribe(apiRes => {
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
  openFilter() {
    this.filter = !this.filter;
  }
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
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
    this.ɵfac = function ExpiredProductsComponent_Factory(t) {
      return new (t || ExpiredProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_service_data_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_3__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.SidebarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ExpiredProductsComponent,
      selectors: [["app-expired-products"]],
      decls: 86,
      vars: 19,
      consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-placement", "top", "title", "Pdf", "matTooltip", "Pdf", "matTooltipPosition", "above", "data-bs-toggle", "modal", "data-bs-target", "#add-units"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel", "matTooltip", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Print", "matTooltip", "Print"], [1, "feather", "icon-printer", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "feather", "icon-rotate-ccw", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "id", "collapse-header", "matTooltip", "Collapse", "matTooltipPosition", "above", 3, "click"], [1, "feather", "icon-chevron-up", "feather-chevron-up"], [1, "feather", "icon-chevron-down", "feather-chevron-down"], [1, "card", "table-list-card"], [1, "card-body"], [1, "table-top"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search...", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "search-path"], [1, "d-flex", "align-items-center"], ["id", "filter_search", 1, "btn", "btn-filter", 3, "click", "ngClass"], [1, "feather", "icon-filter", "filter-icon"], ["src", "assets/img/icons/closes.svg", "alt", "img"], [1, "form-sort"], [1, "feather", "icon-sliders", "info-img"], ["placeholder", "Sort by Date", 1, "select", "space-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], ["id", "filter_inputs", 1, "card", 3, "ngClass"], [1, "card-body", "pb-0"], [1, "row"], [1, "col-lg-3", "col-sm-6", "col-12"], [1, "input-blocks"], [1, "feather", "icon-box", "info-img"], ["placeholder", "Choose Type", 1, "select", "space-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "feather", "icon-calendar", "info-img", "date-input1"], [1, "input-groupicon"], ["type", "text", "bsDatepicker", "", "placeholder", "Choose Date", "container", ".date-input1", 1, "datetimepicker"], [1, "col-lg-3", "col-sm-6", "col-12", "ms-auto"], [1, "btn", "btn-filters", "ms-auto"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew", 3, "matSortChange"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "product"], ["mat-sort-header", "sku"], ["mat-sort-header", "manufacturedDate"], ["mat-sort-header", "expiredDate"], [1, "checkboxs"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "productimgname"], ["href", "javascript:void(0);", 1, "product-img", "stock-img"], ["alt", "product", 3, "src"], ["href", "javascript:void(0);"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", 1, "me-2", "p-2"], [1, "feather", "icon-edit", "feather-edit"], ["href", "javascript:void(0);", 1, "confirm-text", "p-2", 3, "click"], [1, "feather", "icon-trash-2", "feather-trash-2"]],
      template: function ExpiredProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Expired Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Manage your expired products");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ul", 3)(8, "li")(9, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li")(12, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "li")(15, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "li")(18, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "li")(21, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ExpiredProductsComponent_Template_a_click_21_listener() {
            return ctx.toggleCollapse();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, ExpiredProductsComponent_Conditional_22_Template, 1, 0, "i", 13)(23, ExpiredProductsComponent_Conditional_23_Template, 1, 0, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 15)(25, "div", 16)(26, "div", 17)(27, "div", 18)(28, "div", 19)(29, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 22)(32, "label")(33, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ExpiredProductsComponent_Template_input_ngModelChange_33_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ExpiredProductsComponent_Template_input_ngModelChange_33_listener() {
            return ctx.searchData(ctx.searchDataValue);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 24)(35, "div", 25)(36, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ExpiredProductsComponent_Template_a_click_36_listener() {
            return ctx.openFilter();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](39, "img", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "mat-select", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ExpiredProductsComponent_Template_mat_select_ngModelChange_42_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.selectedValue1, $event) || (ctx.selectedValue1 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](43, ExpiredProductsComponent_For_44_Template, 2, 2, "mat-option", 32, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 33)(46, "div", 34)(47, "div", 35)(48, "div", 36)(49, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](50, "i", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "mat-select", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ExpiredProductsComponent_Template_mat_select_ngModelChange_51_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.selectedValue2, $event) || (ctx.selectedValue2 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](52, ExpiredProductsComponent_For_53_Template, 2, 2, "mat-option", 32, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 36)(55, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](56, "i", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](58, "input", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 43)(60, "div", 37)(61, "a", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](62, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, " Search ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 45)(65, "table", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("matSortChange", function ExpiredProductsComponent_Template_table_matSortChange_65_listener($event) {
            return ctx.sortData($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "thead")(67, "tr")(68, "th", 47)(69, "label", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ExpiredProductsComponent_Template_label_click_69_listener() {
            return ctx.selectAll(ctx.initChecked);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "input", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ExpiredProductsComponent_Template_input_ngModelChange_70_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.initChecked, $event) || (ctx.initChecked = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](71, "span", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "th", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, "Product");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "th", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "SKU");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "th", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, "Manufactured Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "th", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79, "Expired Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "th", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](83, ExpiredProductsComponent_For_84_Template, 23, 6, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](85, "app-custom-pagination");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](22, !ctx.isCollapsed ? 22 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](23, ctx.isCollapsed ? 23 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.searchDataValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](11, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](12, _c1, ctx.filter === true));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](14, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.selectedList1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](15, _c2, ctx.filter, !ctx.filter));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](18, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.selectedList2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.initChecked);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.tableData);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSortHeader, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_4__.CustomPaginationComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltip, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__.BsDatepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__.BsDatepickerInputDirective],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 59131:
/*!***********************************************************************************************!*\
  !*** ./src/app/core-component/inventory/product/product-details/product-details.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductDetailsComponent: () => (/* binding */ ProductDetailsComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-owl-carousel-o */ 96821);



function ProductDetailsComponent_ng_template_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "macbookpro.jpg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "581kb");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ProductDetailsComponent_ng_template_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "macbookpro.jpg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "581kb");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class ProductDetailsComponent {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    this.customOptions = {
      loop: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        }
      },
      nav: true
    };
  }
  static {
    this.ɵfac = function ProductDetailsComponent_Factory(t) {
      return new (t || ProductDetailsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ProductDetailsComponent,
      selectors: [["app-product-details"]],
      decls: 88,
      vars: 1,
      consts: [[1, "page-header"], [1, "page-title"], [1, "row"], [1, "col-lg-8", "col-sm-12"], [1, "card"], [1, "card-body"], [1, "bar-code-view"], ["src", "assets/img/barcode/barcode1.png", "alt", "barcode"], [1, "printimg"], ["src", "assets/img/icons/printer.svg", "alt", "print"], [1, "productdetails"], [1, "product-bar"], [1, "col-lg-4", "col-sm-12"], [1, "slider-product-details"], [1, "owl-theme", "product-slide", 3, "options"], ["carouselSlide", ""], [1, "slider-product"], ["src", "assets/img/products/product69.jpg", "alt", "img"], ["carouselSlide", "", 1, "slider-product"]],
      template: function ProductDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Product Details");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Full details of a product");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2)(7, "div", 3)(8, "div", 4)(9, "div", 5)(10, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10)(15, "ul", 11)(16, "li")(17, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Product");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Macbook pro\t");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li")(22, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Computers");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li")(27, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Sub Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "None");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li")(32, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Brand");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "None");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li")(37, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Unit");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Piece");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "li")(42, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "SKU");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "PT0001");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "li")(47, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Minimum Qty");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "li")(52, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Quantity");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "50");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "li")(57, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Tax");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "0.00 %");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "li")(62, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Discount Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Percentage");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "li")(67, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Price");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "1500.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "li")(72, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Active");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "li")(77, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 12)(82, "div", 4)(83, "div", 5)(84, "div", 13)(85, "owl-carousel-o", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](86, ProductDetailsComponent_ng_template_86_Template, 6, 0, "ng-template", 15)(87, ProductDetailsComponent_ng_template_87_Template, 6, 0, "ng-template", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](85);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.customOptions);
        }
      },
      dependencies: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselSlideDirective],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 65153:
/*!*****************************************************************************************!*\
  !*** ./src/app/core-component/inventory/product/product-list/product-list.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductListComponent: () => (/* binding */ ProductListComponent)
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
function ProductListComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 13);
  }
}
function ProductListComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 14);
  }
}
function ProductListComponent_For_144_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td")(2, "label", 201)(3, "input", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ProductListComponent_For_144_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td")(6, "div", 293)(7, "a", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "td")(24, "div", 296)(25, "a", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "img", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "a", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "td", 198)(30, "div", 199)(31, "a", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "i", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "a", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "i", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "a", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductListComponent_For_144_Template_a_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.confirmColor());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "i", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", data_r2.isSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", data_r2.img1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", data_r2.product, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", data_r2.SKU, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r2.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r2.brand);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r2.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r2.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r2.qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", data_r2.img2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r2.createdBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx_r2.routes.productDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx_r2.routes.editProduct);
  }
}
class ProductListComponent {
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
    this.selectedValue13 = '';
    this.selectedValue14 = '';
    this.selectedValue15 = '';
    this.selectedValue16 = '';
    this.selectedValue17 = '';
    this.selectedValue18 = '';
    this.selectedValue19 = '';
    this.selectedValue20 = '';
    this.selectedValue21 = '';
    this.selectedValue22 = '';
    this.selectedValue23 = '';
    this.selectedValue24 = '';
    this.selectedValue25 = '';
    this.selectedValue26 = '';
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
    this.data.getDataTable().subscribe(apiRes => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe(res => {
        if (this.router.url == this.routes.productList) {
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
    this.data.getProductList().subscribe(apiRes => {
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
    this.ɵfac = function ProductListComponent_Factory(t) {
      return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_2__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.SidebarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: ProductListComponent,
      selectors: [["app-product-list"]],
      decls: 919,
      vars: 99,
      consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Pdf", "matTooltipPosition", "above"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Excel", "matTooltipPosition", "above"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Print", "matTooltipPosition", "above"], [1, "feather", "icon-printer", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "feather", "icon-rotate-ccw", "feather-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "feather", "icon-chevron-up", "feather-chevron-up"], [1, "feather", "icon-chevron-down", "feather-chevron-down"], [1, "page-btn"], [1, "btn", "btn-added", 3, "routerLink"], [1, "feather", "icon-plus-circle", "me-2"], [1, "page-btn", "import"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#view-notes", 1, "btn", "btn-added", "color"], [1, "feather", "icon-download", "me-2"], [1, "card", "table-list-card"], [1, "card-body"], [1, "table-top"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search...", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "search-path"], ["id", "filter_search", 1, "btn", "btn-filter", 3, "click", "ngClass"], [1, "feather", "icon-filter", "filter-icon"], ["src", "assets/img/icons/closes.svg", "alt", "img"], [1, "form-sort"], [1, "feather", "icon-sliders", "info-img"], ["placeholder", "Sort by Date", 1, "space-select", "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "Sort by Date"], ["value", "14 09 23"], ["value", "11 09 23"], ["id", "filter_inputs", 1, "card", "mb-0", 3, "ngClass"], [1, "card-body", "pb-0"], [1, "row"], [1, "col-lg-12", "col-sm-12"], [1, "col-lg-2", "col-sm-6", "col-12"], [1, "input-blocks"], [1, "feather", "icon-box", "info-img"], ["placeholder", "Choose Product", 1, "space-select", "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "Choose Product"], ["value", "Lenovo 3rd Generation"], ["value", "Nike Jordan"], [1, "feather", "icon-stop-circle", "info-img"], ["placeholder", "Choose Category", 1, "space-select", "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "Choose Category"], ["value", "Laptop"], ["value", "Shoe"], [1, "feather", "icon-git-merge", "info-img"], ["placeholder", "Choose Sub Category", 1, "space-select", "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "Choose Sub Category"], ["value", "Computers"], ["value", "Fruits"], ["placeholder", "All Brand", 1, "space-select", "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "All Brand"], ["value", "Lenovo"], ["value", "Nike"], [1, "fas", "fa-money-bill", "info-img"], ["placeholder", "Price", 1, "space-select", "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "Price"], ["value", "$12500.00"], [1, "btn", "btn-filters", "ms-auto"], [1, "table-responsive", "product-list"], [1, "table", "datanew"], ["matSort", "", 3, "matSortChange"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "product"], ["mat-sort-header", "SKU"], ["mat-sort-header", "category"], ["mat-sort-header", "brand"], ["mat-sort-header", "price"], ["mat-sort-header", "unit"], ["mat-sort-header", "qty"], ["mat-sort-header", "createdBy"], ["tabindex", "-1", "id", "offcanvasRight-add", 1, "offcanvas", "offcanvas-end", "em-payrol-add"], [1, "offcanvas-body", "p-0"], [1, "page-wrapper-new"], [1, "content"], [1, "page-header", "justify-content-between"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-added"], [1, "feather", "icon-arrow-left", "me-2"], [1, "card", "mb-0"], [1, "card-body", "add-product", "pb-0", "ps-0", "pe-0"], ["id", "accordionExample", 1, "accordion-card-one", "accordion"], [1, "accordion-item"], ["id", "headingOne", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseOne", "aria-controls", "collapseOne", 1, "accordion-button"], [1, "addproduct-icon"], [1, "feather", "icon-info", "add-info"], ["href", "javascript:void(0);"], [1, "feather", "icon-chevron-down", "chevron-down-add"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse", "show"], [1, "accordion-body"], [1, "col-lg-4", "col-sm-6", "col-12"], [1, "mb-3", "add-product"], [1, "form-label"], ["placeholder", "Choose", 1, "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "Choose"], ["type", "text", 1, "form-control"], [1, "form-group", "add-product", "list"], ["type", "text", "placeholder", "Enter SKU", 1, "form-control", "list"], ["type", "submit", 1, "btn", "btn-primaryadd"], [1, "addservice-info"], [1, "add-newplus"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-units-category"], [1, "feather", "icon-plus-circle", "plus-down-add"], [1, "add-product-new"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-units-brand"], ["value", "Bolt"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-unit"], ["value", "Kg"], ["value", "Pc"], [1, "col-lg-6", "col-sm-6", "col-12"], ["value", "Code34"], ["type", "text", "placeholder", "Please Enter Item Code", 1, "form-control", "list"], [1, "col-lg-12"], [1, "form-group", "summer-description-box", "transfer", "mb-3"], ["id", "summernote3"], ["id", "accordionExample2", 1, "accordion-card-one", "accordion"], ["id", "headingTwo", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseTwo", "aria-controls", "collapseTwo", 1, "accordion-button"], [1, "text-editor", "add-list"], [1, "addproduct-icon", "list", "icon"], [1, "feather", "icon-life-buoy", "add-info"], ["id", "collapseTwo", "aria-labelledby", "headingTwo", "data-bs-parent", "#accordionExample2", 1, "accordion-collapse", "collapse", "show"], [1, "form-group", "add-products"], [1, "d-block"], [1, "single-pill-product"], ["id", "pills-tab1", "role", "tablist", 1, "nav", "nav-pills"], ["role", "presentation", 1, "nav-item"], ["id", "pills-home-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-home", "role", "tab", "aria-controls", "pills-home", "aria-selected", "true", 1, "custom_radio", "me-4", "mb-0", "active"], ["type", "radio", "name", "payment", 1, "form-control"], [1, "checkmark"], ["id", "pills-profile-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-profile", "role", "tab", "aria-controls", "pills-profile", "aria-selected", "false", 1, "custom_radio", "me-2", "mb-0"], ["type", "radio", "name", "sign", 1, "form-control"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-home", "role", "tabpanel", "aria-labelledby", "pills-home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "form-group", "add-product"], ["value", "Type"], ["type", "text", "placeholder", "Choose"], ["id", "accordionExample3", 1, "accordion-card-one", "accordion"], ["id", "headingThree", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseThree", "aria-controls", "collapseThree", 1, "accordion-button"], [1, "addproduct-icon", "list"], [1, "feather", "icon-image", "add-info"], ["id", "collapseThree", "aria-labelledby", "headingThree", "data-bs-parent", "#accordionExample3", 1, "accordion-collapse", "collapse", "show"], [1, "text-editor", "add-list", "add"], [1, "add-choosen"], [1, "image-upload"], ["type", "file"], [1, "image-uploads"], [1, "phone-img"], ["src", "assets/img/products/phone-add-2.png", "alt", "image"], [1, "feather", "icon-x", "x-square-add", "remove-product"], ["src", "assets/img/products/phone-add-1.png", "alt", "image"], ["id", "pills-profile", "role", "tabpanel", "aria-labelledby", "pills-profile-tab", 1, "tab-pane", "fade"], [1, "row", "select-color-add"], [1, "col-lg-10", "col-sm-10", "col-10"], ["placeholder", "Choose", "id", "colorSelect", 1, "form-control", "variant-select", "select-option", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "Color"], ["value", "red"], ["value", "black"], [1, "col-lg-2", "col-sm-2", "col-2", "ps-0"], [1, "add-icon", "tab"], ["data-bs-toggle", "modal", "data-bs-target", "#add-units", 1, "btn", "btn-filter"], [1, "feather", "feather-plus-circle"], ["id", "input-show", 1, "selected-hide-color"], [1, "row", "align-items-center"], [1, "col-sm-10"], ["id", "inputBox", "type", "text", "data-role", "tagsinput", "name", "specialist", "value", "red, black", 1, "input-tags", "form-control"], [1, "col-sm-2"], [1, "form-group"], ["href", "javascript:void(0);", 1, "remove-color", 3, "click"], [1, "far", "fa-trash-alt"], ["id", "variant-table", 1, "modal-body-table", "variant-table"], [1, "table-responsive"], [1, "table"], [1, "add-product"], ["type", "text", "value", "color", 1, "form-control"], ["type", "text", "value", "red", 1, "form-control"], ["type", "text", "value", "1234", 1, "form-control"], [1, "product-quantity"], [1, "quantity-btn"], [1, "feather", "icon-plus-circle", "plus-circle"], ["type", "text", "value", "2", 1, "quntity-input"], [1, "feather", "icon-minus-circle", "feather-search"], ["type", "text", "value", "50000", 1, "form-control"], [1, "action-table-data"], [1, "edit-delete-action"], [1, "input-block", "add-lists"], [1, "checkboxs"], ["type", "checkbox", "checked", ""], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-variation", 1, "me-2", "p-2"], [1, "feather", "icon-plus", "feather-edit"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-variation", 1, "confirm-text", "p-2"], [1, "feather", "icon-trash-2", "feather-trash-2"], ["type", "text", "value", "black", 1, "form-control"], ["type", "text", "value", "2345", 1, "form-control"], ["type", "text", "value", "3", 1, "quntity-input"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-units", 1, "me-2", "p-2"], ["href", "javascript:void(0);", 1, "confirm-text", "p-2"], ["id", "accordionExample4", 1, "accordion-card-one", "accordion"], ["id", "headingFour", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseFour", "aria-controls", "collapseFour", 1, "accordion-button"], [1, "feather", "icon-list", "add-info"], ["id", "collapseFour", "aria-labelledby", "headingFour", "data-bs-parent", "#accordionExample4", 1, "accordion-collapse", "collapse", "show"], [1, "custom-filed"], ["type", "checkbox"], [1, "input-groupicon", "calender-input", "date-input1"], [1, "feather", "icon-calendar", "info-img"], ["type", "text", "bsDatepicker", "", "container", ".date-input1", "placeholder", "Choose Date", 1, "datetimepicker"], [1, "input-groupicon", "calender-input", "date-input2"], ["type", "text", "bsDatepicker", "", "container", ".date-input2", "placeholder", "Choose Date", 1, "datetimepicker"], [1, "btn-addproduct", "mb-4"], [1, "btn", "btn-cancel", 3, "routerLink"], ["href", "javascript:void(0);", 1, "btn", "btn-submit", "me-2"], ["id", "add-units", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "stock-adjust-modal"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "modal-header", "border-0", "custom-modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body"], [1, "col-lg-6"], [1, "nav", "user-menu"], [1, "nav-item", "nav-searchinputs"], [1, "top-nav-search"], ["action", "#", 1, "dropdown"], ["id", "dropdownMenuClickable2", "data-bs-toggle", "dropdown", "data-bs-auto-close", "false", 1, "searchinputs", "list", "dropdown-toggle"], ["type", "text", "placeholder", "Search"], [1, "feather", "icon-search", "feather-16", "icon"], [1, "search-addon", "d-none"], [1, "feather", "icon-x-circle", "feather-14"], ["aria-labelledby", "dropdownMenuClickable", 1, "dropdown-menu", "search-dropdown", "idea"], [1, "search-info"], [1, "modal-footer-btn", "popup"], ["href", "javascript:void(0);", 1, "btn", "btn-cancel", "me-2"], ["href", "javascript:void(0);", 1, "btn", "btn-submit"], ["id", "add-units-category", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "custom-modal-two"], [1, "mb-3"], [1, "modal-footer-btn"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], [1, "btn", "btn-submit", 3, "routerLink"], ["id", "add-units-brand", 1, "modal", "fade"], ["id", "add-unit", 1, "modal", "fade"], ["id", "add-variation", 1, "modal", "fade"], [1, "modal-title-head", "people-cust-avatar"], [1, "new-employee-field"], [1, "profile-pic-upload"], [1, "profile-pic"], [1, "image-upload", "mb-0"], [1, "col-lg-6", "pe-0"], ["type", "text", "value", "455454478844", 1, "form-control", "list"], [1, "form-group", "image-upload-down"], [1, "image-upload", "download"], ["src", "assets/img/download-img.png", "alt", "img"], [1, "add-choosen", "mb-3"], [1, "phone-img", "ms-0"], ["value", "Direct"], ["value", "Indirect"], ["value", "Income Tax"], ["value", "Service Tax"], [1, "col-lg-12", "pe-0"], ["value", "Percentage"], ["value", "Early Payment"], ["id", "view-notes", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], ["value", "Bold V3.2"], ["value", "Iphone 14 Pro"], ["value", "Electronics"], [1, "col-lg-12", "col-sm-6", "col-12"], [1, "modal-footer-btn", "download-file"], ["href", "javascript:void(0)", 1, "btn", "btn-submit"], [1, "input-blocks", "image-upload-down"], [1, "mb-3", "input-blocks"], [1, "form-control"], [1, "mt-1"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "productimgname"], ["href", "javascript:void(0);", 1, "product-img", "stock-img"], ["alt", "product", 3, "src"], [1, "userimgname"], ["href", "javascript:void(0);", 1, "product-img"], [1, "me-2", "edit-icon", "p-2", 3, "routerLink"], [1, "feather", "icon-eye", "feather-eye"], [1, "me-2", "p-2", 3, "routerLink"], [1, "feather", "icon-edit", "feather-edit"], ["href", "javascript:void(0);", 1, "confirm-text", "p-2", 3, "click"]],
      template: function ProductListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Product List");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Manage your products");
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
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductListComponent_Template_a_click_21_listener() {
            return ctx.toggleCollapse();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, ProductListComponent_Conditional_22_Template, 1, 0, "i", 13)(23, ProductListComponent_Conditional_23_Template, 1, 0, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 15)(25, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Add New Product");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 18)(29, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Import Product");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 21)(33, "div", 22)(34, "div", 23)(35, "div", 24)(36, "div", 25)(37, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 28)(40, "label")(41, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ProductListComponent_Template_input_ngModelChange_41_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ProductListComponent_Template_input_ngModelChange_41_listener() {
            return ctx.searchData(ctx.searchDataValue);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 30)(43, "a", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductListComponent_Template_a_click_43_listener() {
            return ctx.openFilter();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "img", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "i", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "mat-select", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_49_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue1, $event) || (ctx.selectedValue1 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "mat-option", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "Sort by Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "mat-option", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "14 09 23");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "mat-option", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "11 09 23");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 40)(57, "div", 41)(58, "div", 42)(59, "div", 43)(60, "div", 42)(61, "div", 44)(62, "div", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](63, "i", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "mat-select", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_64_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue2, $event) || (ctx.selectedValue2 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "mat-option", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "Choose Product");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "mat-option", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "Lenovo 3rd Generation");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "mat-option", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "Nike Jordan");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 44)(72, "div", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](73, "i", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "mat-select", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_74_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue3, $event) || (ctx.selectedValue3 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "mat-option", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "Choose Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "mat-option", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "Laptop");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "mat-option", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, "Shoe");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "div", 44)(82, "div", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](83, "i", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "mat-select", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_84_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue4, $event) || (ctx.selectedValue4 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "mat-option", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, "Choose Sub Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "mat-option", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, "Computers");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "mat-option", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, "Fruits");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "div", 44)(92, "div", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](93, "i", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "mat-select", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_94_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue5, $event) || (ctx.selectedValue5 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "mat-option", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](96, "All Brand");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "mat-option", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98, "Lenovo");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "mat-option", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](100, "Nike");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "div", 44)(102, "div", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](103, "i", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "mat-select", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_104_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue6, $event) || (ctx.selectedValue6 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "mat-option", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](106, "Price");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "mat-option", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](108, "$12500.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "mat-option", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](110, "$12500.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "div", 44)(112, "div", 45)(113, "a", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](114, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](115, " Search ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "div", 70)(117, "table", 71)(118, "thead")(119, "tr", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("matSortChange", function ProductListComponent_Template_tr_matSortChange_119_listener($event) {
            return ctx.sortData($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "th", 73)(121, "label", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductListComponent_Template_label_click_121_listener() {
            return ctx.selectAll(ctx.initChecked);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "input", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ProductListComponent_Template_input_ngModelChange_122_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.initChecked, $event) || (ctx.initChecked = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](123, "span", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "th", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](125, "Product");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](126, "th", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](127, "SKU");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](128, "th", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](129, "Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](130, "th", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](131, "Brand");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](132, "th", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](133, "Price");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](134, "th", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](135, "Unit");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](136, "th", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](137, "Qty");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](138, "th", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](139, "Created by");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](140, "th", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](141, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](142, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](143, ProductListComponent_For_144_Template, 37, 13, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](145, "app-custom-pagination");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](146, "div", 85)(147, "div", 86)(148, "div", 87)(149, "div", 88)(150, "div", 89)(151, "div", 2)(152, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](153, "Create New Product");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](154, "div", 15)(155, "a", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](156, "i", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](157, "Back to Product List");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](158, "div", 92)(159, "div", 93)(160, "div", 94)(161, "div", 95)(162, "div", 96)(163, "div", 97)(164, "div", 98)(165, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](166, "i", 99);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](167, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](168, "Product Information");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](169, "a", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](170, "i", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](171, "div", 102)(172, "div", 103)(173, "div", 42)(174, "div", 104)(175, "div", 105)(176, "label", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](177, "Store");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](178, "mat-select", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_178_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue7, $event) || (ctx.selectedValue7 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](179, "mat-option", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](180, "Choose");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](181, "mat-option", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](182, "Computers");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](183, "div", 104)(184, "div", 105)(185, "label", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](186, "Warehouse");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](187, "mat-select", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_187_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue8, $event) || (ctx.selectedValue8 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](188, "mat-option", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](189, "Choose");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](190, "mat-option", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](191, "Computers");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](192, "div", 42)(193, "div", 104)(194, "div", 105)(195, "label", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](196, "Product Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](197, "input", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](198, "div", 104)(199, "div", 105)(200, "label", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](201, "Slug");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](202, "input", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](203, "div", 104)(204, "div", 110)(205, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](206, "SKU");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](207, "input", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](208, "button", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](209, " Generate Code ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](210, "div", 113)(211, "div", 42)(212, "div", 104)(213, "div", 105)(214, "div", 114)(215, "label", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](216, "Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](217, "a", 115);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](218, "i", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](219, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](220, "Add New");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](221, "mat-select", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_221_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue9, $event) || (ctx.selectedValue9 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](222, "mat-option", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](223, "Choose");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](224, "mat-option", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](225, "Computers");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](226, "div", 104)(227, "div", 105)(228, "label", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](229, "Choose Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](230, "mat-select", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_230_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue10, $event) || (ctx.selectedValue10 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](231, "mat-option", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](232, "Choose");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](233, "mat-option", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](234, "Computers");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](235, "div", 104)(236, "div", 105)(237, "label", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](238, "Sub Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](239, "mat-select", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_239_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue11, $event) || (ctx.selectedValue11 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](240, "mat-option", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](241, "Choose");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](242, "mat-option", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](243, "Computers");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](244, "div", 117)(245, "div", 42)(246, "div", 104)(247, "div", 105)(248, "div", 114)(249, "label", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](250, "Brand");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](251, "a", 118);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](252, "i", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](253, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](254, "Add new");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](255, "mat-select", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_255_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue12, $event) || (ctx.selectedValue12 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](256, "mat-option", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](257, "Choose");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](258, "mat-option", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](259, "Nike");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](260, "mat-option", 119);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](261, "Bolt");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](262, "div", 104)(263, "div", 105)(264, "div", 114)(265, "label", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](266, "Unit");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](267, "a", 120);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](268, "i", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](269, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](270, "Add New");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](271, "mat-select", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_271_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue13, $event) || (ctx.selectedValue13 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](272, "mat-option", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](273, "Choose");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](274, "mat-option", 121);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](275, "Kg");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](276, "mat-option", 122);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](277, "Pc");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](278, "div", 104)(279, "div", 105)(280, "label", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](281, "Selling Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](282, "mat-select", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_282_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue14, $event) || (ctx.selectedValue14 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](283, "mat-option", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](284, "Choose");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](285, "mat-option", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](286, "Computers");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](287, "div", 42)(288, "div", 123)(289, "div", 105)(290, "label", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](291, "Barcode Symbology");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](292, "mat-select", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_292_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue15, $event) || (ctx.selectedValue15 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](293, "mat-option", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](294, "Choose");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](295, "mat-option", 124);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](296, "Code34");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](297, "div", 123)(298, "div", 110)(299, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](300, "Item Code");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](301, "input", 125);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](302, "button", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](303, " Generate Code ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](304, "div", 42)(305, "div", 126)(306, "div", 127)(307, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](308, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](309, "div", 128);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](310, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](311, "Maximum 60 Characters");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](312, "div", 129)(313, "div", 95)(314, "div", 130)(315, "div", 131)(316, "div", 132)(317, "div", 133)(318, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](319, "i", 134);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](320, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](321, "Pricing & Stocks");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](322, "a", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](323, "i", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](324, "div", 135)(325, "div", 103)(326, "div", 136)(327, "label", 137);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](328, "Product Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](329, "div", 138)(330, "ul", 139)(331, "li", 140)(332, "span", 141);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](333, "input", 142)(334, "span", 143);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](335, " Single Product");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](336, "li", 140)(337, "span", 144);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](338, "input", 145)(339, "span", 143);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](340, " Variable Product");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](341, "div", 146)(342, "div", 147)(343, "div", 42)(344, "div", 104)(345, "div", 148)(346, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](347, "Quantity");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](348, "input", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](349, "div", 104)(350, "div", 148)(351, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](352, "Price");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](353, "input", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](354, "div", 104)(355, "div", 148)(356, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](357, "Tax Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](358, "mat-select", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_358_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue16, $event) || (ctx.selectedValue16 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](359, "mat-option", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](360, "Choose");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](361, "mat-option", 149);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](362, "Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](363, "div", 42)(364, "div", 104)(365, "div", 148)(366, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](367, "Discount Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](368, "mat-select", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_368_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue17, $event) || (ctx.selectedValue17 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](369, "mat-option", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](370, "Choose");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](371, "mat-option", 149);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](372, "Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](373, "div", 104)(374, "div", 148)(375, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](376, "Discount Value");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](377, "input", 150);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](378, "div", 104)(379, "div", 148)(380, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](381, "Quantity Alert");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](382, "input", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](383, "div", 151)(384, "div", 95)(385, "div", 152)(386, "div", 153)(387, "div", 154)(388, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](389, "i", 155);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](390, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](391, "Images");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](392, "a", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](393, "i", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](394, "div", 156)(395, "div", 103)(396, "div", 157)(397, "div", 126)(398, "div", 158)(399, "div", 45)(400, "div", 159);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](401, "input", 160);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](402, "div", 161);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](403, "i", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](404, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](405, "Add Images");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](406, "div", 162);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](407, "img", 163);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](408, "a", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](409, "i", 164);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](410, "div", 162);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](411, "img", 165);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](412, "a", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](413, "i", 164);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](414, "div", 166)(415, "div", 167)(416, "div", 123)(417, "div", 148)(418, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](419, "Variant Attribute");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](420, "div", 42)(421, "div", 168)(422, "mat-select", 169);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_422_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue18, $event) || (ctx.selectedValue18 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](423, "mat-option", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](424, "Choose");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](425, "mat-option", 170);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](426, "Color");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](427, "mat-option", 171);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](428, "Red");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](429, "mat-option", 172);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](430, "Black");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](431, "div", 173)(432, "div", 174)(433, "a", 175);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](434, "i", 176);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](435, "div", 177)(436, "div", 178)(437, "div", 179)(438, "div", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](439, "input", 180);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](440, "div", 181)(441, "div", 182)(442, "a", 183);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductListComponent_Template_a_click_442_listener() {
            return ctx.confirmColor();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](443, "i", 184);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](444, "div", 185)(445, "div", 186)(446, "table", 187)(447, "thead")(448, "tr")(449, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](450, "Variantion");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](451, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](452, "Variant Value");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](453, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](454, "SKU");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](455, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](456, "Quantity");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](457, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](458, "Price");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](459, "th", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](460, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](461, "tbody")(462, "tr")(463, "td")(464, "div", 188);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](465, "input", 189);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](466, "td")(467, "div", 188);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](468, "input", 190);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](469, "td")(470, "div", 188);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](471, "input", 191);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](472, "td")(473, "div", 192)(474, "span", 193);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](475, "+");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](476, "i", 194);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](477, "input", 195);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](478, "span", 193);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](479, "i", 196);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](480, "td")(481, "div", 188);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](482, "input", 197);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](483, "td", 198)(484, "div", 199)(485, "div", 200)(486, "label", 201);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](487, "input", 202)(488, "span", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](489, "a", 203);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](490, "i", 204);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](491, "a", 205);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](492, "i", 206);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](493, "tr")(494, "td")(495, "div", 188);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](496, "input", 189);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](497, "td")(498, "div", 188);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](499, "input", 207);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](500, "td")(501, "div", 188);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](502, "input", 208);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](503, "td")(504, "div", 192)(505, "span", 193);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](506, "+");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](507, "i", 194);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](508, "input", 209);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](509, "span", 193);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](510, "i", 196);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](511, "td")(512, "div", 188);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](513, "input", 197);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](514, "td", 198)(515, "div", 199)(516, "div", 200)(517, "label", 201);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](518, "input", 202)(519, "span", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](520, "a", 210);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](521, "i", 204);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](522, "a", 211);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](523, "i", 206);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](524, "div", 212)(525, "div", 95)(526, "div", 213)(527, "div", 214)(528, "div", 132)(529, "div", 154)(530, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](531, "i", 215);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](532, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](533, "Custom Fields");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](534, "a", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](535, "i", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](536, "div", 216)(537, "div", 103)(538, "div", 157)(539, "div", 217)(540, "div", 200)(541, "label", 201);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](542, "input", 218)(543, "span", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](544, "Warranties ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](545, "label", 201);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](546, "input", 218)(547, "span", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](548, "Manufacturer ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](549, "label", 201);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](550, "input", 218)(551, "span", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](552, "Expiry ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](553, "div", 42)(554, "div", 104)(555, "div", 148)(556, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](557, "Discount Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](558, "mat-select", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_558_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue19, $event) || (ctx.selectedValue19 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](559, "mat-option", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](560, "Choose");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](561, "mat-option", 149);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](562, "Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](563, "div", 42)(564, "div", 104)(565, "div", 148)(566, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](567, "Quantity Alert");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](568, "input", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](569, "div", 104)(570, "div", 45)(571, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](572, "Manufactured Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](573, "div", 219);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](574, "i", 220)(575, "input", 221);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](576, "div", 104)(577, "div", 45)(578, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](579, "Expiry On");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](580, "div", 222);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](581, "i", 220)(582, "input", 223);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](583, "div", 224)(584, "a", 225);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](585, "Reset");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](586, "a", 226);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](587, "Save Product");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](588, "div", 227)(589, "div", 228)(590, "div", 229)(591, "div", 230)(592, "div", 88)(593, "div", 231)(594, "div", 2)(595, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](596, "Add Variation Attribute");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](597, "button", 232)(598, "span", 233);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](599, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](600, "div", 234)(601, "div", 42)(602, "div", 126)(603, "div", 45)(604, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](605, "Attribute Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](606, "input", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](607, "div", 126)(608, "div", 45)(609, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](610, "Add Value");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](611, "input", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](612, "div", 42)(613, "div", 235)(614, "ul", 236)(615, "li", 237)(616, "div", 238)(617, "form", 239)(618, "div", 240);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](619, "input", 241)(620, "i", 242);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](621, "div", 243)(622, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](623, "i", 244);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](624, "div", 245)(625, "div", 246)(626, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](627, "Black ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](628, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](629, "Red");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](630, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](631, "Green");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](632, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](633, "S");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](634, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](635, "M");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](636, "div", 235)(637, "div", 247)(638, "a", 248);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](639, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](640, "a", 249);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](641, "Create Adjustment");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](642, "div", 250)(643, "div", 251)(644, "div", 229)(645, "div", 230)(646, "div", 88)(647, "div", 231)(648, "div", 2)(649, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](650, "Add New Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](651, "button", 232)(652, "span", 233);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](653, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](654, "div", 234)(655, "div", 252)(656, "label", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](657, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](658, "input", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](659, "div", 253)(660, "a", 254);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](661, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](662, "a", 255);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](663, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](664, "div", 256)(665, "div", 251)(666, "div", 229)(667, "div", 230)(668, "div", 88)(669, "div", 231)(670, "div", 2)(671, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](672, "Add New Brand");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](673, "button", 232)(674, "span", 233);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](675, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](676, "div", 234)(677, "div", 252)(678, "label", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](679, "Brand");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](680, "input", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](681, "div", 253)(682, "a", 254);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](683, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](684, "a", 255);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](685, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](686, "div", 257)(687, "div", 251)(688, "div", 229)(689, "div", 230)(690, "div", 88)(691, "div", 231)(692, "div", 2)(693, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](694, "Add Unit");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](695, "button", 232)(696, "span", 233);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](697, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](698, "div", 234)(699, "div", 252)(700, "label", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](701, "Unit");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](702, "input", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](703, "div", 253)(704, "a", 254);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](705, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](706, "a", 255);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](707, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](708, "div", 258)(709, "div", 251)(710, "div", 229)(711, "div", 230)(712, "div", 88)(713, "div", 231)(714, "div", 2)(715, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](716, "Add Variation");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](717, "button", 232)(718, "span", 233);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](719, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](720, "div", 234)(721, "div", 259)(722, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](723, "Variant Thumbnail");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](724, "div", 260)(725, "div", 261)(726, "div", 262)(727, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](728, "i", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](729, " Add Image");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](730, "div", 252)(731, "div", 263);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](732, "input", 160);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](733, "div", 161)(734, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](735, "Change Image");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](736, "div", 42)(737, "div", 264)(738, "div", 252)(739, "label", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](740, "Barcode Symbology");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](741, "mat-select", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_741_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue20, $event) || (ctx.selectedValue20 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](742, "mat-option", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](743, "Choose");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](744, "mat-option", 124);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](745, "Code34");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](746, "div", 264)(747, "div", 252)(748, "div", 110)(749, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](750, "Item Code");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](751, "input", 265);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](752, "button", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](753, " Generate Code ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](754, "div", 126)(755, "div", 266)(756, "div", 267);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](757, "input", 160);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](758, "div", 161);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](759, "img", 268);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](760, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](761, "Drag and drop a ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](762, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](763, "file to upload");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](764, "div", 103)(765, "div", 157)(766, "div", 126)(767, "div", 269)(768, "div", 270);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](769, "img", 163);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](770, "a", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](771, "i", 164);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](772, "div", 162);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](773, "img", 165);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](774, "a", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](775, "i", 164);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](776, "div", 264)(777, "div", 252)(778, "label", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](779, "Quantity");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](780, "input", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](781, "div", 264)(782, "div", 252)(783, "label", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](784, "Quantity Alert");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](785, "input", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](786, "div", 264)(787, "div", 252)(788, "label", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](789, "Tax Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](790, "mat-select", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_790_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue21, $event) || (ctx.selectedValue21 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](791, "mat-option", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](792, "Choose");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](793, "mat-option", 271);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](794, "Direct");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](795, "mat-option", 272);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](796, "Indirect");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](797, "div", 264)(798, "div", 252)(799, "label", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](800, "Tax ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](801, "mat-select", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_801_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue22, $event) || (ctx.selectedValue22 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](802, "mat-option", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](803, "Choose");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](804, "mat-option", 273);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](805, "Income Tax");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](806, "mat-option", 274);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](807, "Service Tax");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](808, "div", 275)(809, "div", 252)(810, "label", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](811, "Discount Type ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](812, "mat-select", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_812_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue23, $event) || (ctx.selectedValue23 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](813, "mat-option", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](814, "Choose");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](815, "mat-option", 276);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](816, "Percentage");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](817, "mat-option", 277);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](818, "Early Payment");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](819, "div", 275)(820, "div")(821, "label", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](822, "Discount Value");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](823, "input", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](824, "div", 253)(825, "a", 254);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](826, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](827, "a", 255);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](828, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](829, "div", 278)(830, "div", 279)(831, "div", 229)(832, "div", 230)(833, "div", 88)(834, "div", 231)(835, "div", 2)(836, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](837, "Import Product");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](838, "button", 232)(839, "span", 233);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](840, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](841, "div", 234)(842, "form")(843, "div", 42)(844, "div", 104)(845, "div", 45)(846, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](847, "Product");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](848, "mat-select", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_848_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue24, $event) || (ctx.selectedValue24 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](849, "mat-option", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](850, "Choose");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](851, "mat-option", 280);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](852, "Bold V3.2");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](853, "mat-option", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](854, "Nike Jordan");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](855, "mat-option", 281);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](856, "Iphone 14 Pro");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](857, "div", 104)(858, "div", 45)(859, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](860, "Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](861, "mat-select", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_861_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue25, $event) || (ctx.selectedValue25 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](862, "mat-option", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](863, "Choose");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](864, "mat-option", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](865, "Laptop");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](866, "mat-option", 282);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](867, "Electronics");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](868, "mat-option", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](869, "Shoe");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](870, "div", 104)(871, "div", 45)(872, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](873, "Satus");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](874, "mat-select", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ProductListComponent_Template_mat_select_ngModelChange_874_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue26, $event) || (ctx.selectedValue26 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](875, "mat-option", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](876, "Choose");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](877, "mat-option", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](878, "Lenovo");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](879, "mat-option", 119);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](880, "Bolt");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](881, "mat-option", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](882, "Nike");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](883, "div", 283)(884, "div", 42)(885, "div")(886, "div", 284)(887, "a", 285);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](888, "Download Sample File");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](889, "div", 126)(890, "div", 286)(891, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](892, " Upload CSV File");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](893, "div", 267);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](894, "input", 160);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](895, "div", 161);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](896, "img", 268);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](897, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](898, "Drag and drop a ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](899, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](900, "file to upload");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](901, "div", 283)(902, "div", 252)(903, "label", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](904, "Created by");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](905, "input", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](906, "div", 126)(907, "div", 287)(908, "label", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](909, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](910, "textarea", 288);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](911, "p", 289);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](912, "Maximum 60 Characters");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](913, "div", 126)(914, "div", 253)(915, "button", 290);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](916, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](917, "button", 291);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](918, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](22, !ctx.isCollapsed ? 22 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](23, ctx.isCollapsed ? 23 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx.routes.addProduct);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.searchDataValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](66, _c0))("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](67, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](68, _c1, ctx.filter === true));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](70, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](71, _c2, ctx.filter, !ctx.filter));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](74, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](75, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](76, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](77, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](78, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.initChecked);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx.tableData);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](79, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](80, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](81, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](82, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](83, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](84, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](85, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](86, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](87, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](66);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](88, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](89, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](54);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](90, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](136);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](91, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx.routes.productList);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](78);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx.routes.units);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx.routes.units);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx.routes.units);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](92, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](49);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](93, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](94, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](95, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx.routes.wareHouse);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](96, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](97, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](98, _c0));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortHeader, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_3__.CustomPaginationComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatTooltip, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__.BsDatepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__.BsDatepickerInputDirective],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 42827:
/*!****************************************************************************!*\
  !*** ./src/app/core-component/inventory/product/product-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductRoutingModule: () => (/* binding */ ProductRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _product_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.component */ 93451);
/* harmony import */ var _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-product/edit-product.component */ 86341);
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-list/product-list.component */ 65153);
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-product/add-product.component */ 29079);
/* harmony import */ var _expired_products_expired_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./expired-products/expired-products.component */ 14137);
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-details/product-details.component */ 59131);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);









const routes = [{
  path: '',
  component: _product_component__WEBPACK_IMPORTED_MODULE_0__.ProductComponent,
  children: [{
    path: 'edit-product',
    component: _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_1__.EditProductComponent
  }, {
    path: 'product-list',
    component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__.ProductListComponent
  }, {
    path: 'add-product',
    component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_3__.AddProductComponent
  }, {
    path: 'expired-products',
    component: _expired_products_expired_products_component__WEBPACK_IMPORTED_MODULE_4__.ExpiredProductsComponent
  }, {
    path: 'product-details',
    component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__.ProductDetailsComponent
  }]
}];
class ProductRoutingModule {
  static {
    this.ɵfac = function ProductRoutingModule_Factory(t) {
      return new (t || ProductRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: ProductRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ProductRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 93451:
/*!***********************************************************************!*\
  !*** ./src/app/core-component/inventory/product/product.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductComponent: () => (/* binding */ ProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);


class ProductComponent {
  static {
    this.ɵfac = function ProductComponent_Factory(t) {
      return new (t || ProductComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductComponent,
      selectors: [["app-product"]],
      decls: 1,
      vars: 0,
      template: function ProductComponent_Template(rf, ctx) {
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

/***/ 37770:
/*!********************************************************************!*\
  !*** ./src/app/core-component/inventory/product/product.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductModule: () => (/* binding */ ProductModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-routing.module */ 42827);
/* harmony import */ var _product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.component */ 93451);
/* harmony import */ var _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-product/edit-product.component */ 86341);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-list/product-list.component */ 65153);
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-product/add-product.component */ 29079);
/* harmony import */ var _expired_products_expired_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./expired-products/expired-products.component */ 14137);
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-details/product-details.component */ 59131);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);










class ProductModule {
  static {
    this.ɵfac = function ProductModule_Factory(t) {
      return new (t || ProductModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
      type: ProductModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _product_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.sharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](ProductModule, {
    declarations: [_product_component__WEBPACK_IMPORTED_MODULE_1__.ProductComponent, _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_2__.EditProductComponent, _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__.ProductListComponent, _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_5__.AddProductComponent, _expired_products_expired_products_component__WEBPACK_IMPORTED_MODULE_6__.ExpiredProductsComponent, _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_7__.ProductDetailsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _product_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.sharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_inventory_product_product_module_ts.js.map