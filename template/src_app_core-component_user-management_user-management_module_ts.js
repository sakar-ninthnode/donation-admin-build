"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_user-management_user-management_module_ts"],{

/***/ 27182:
/*!**********************************************************************************!*\
  !*** ./src/app/core-component/user-management/user-management-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserManagementRoutingModule: () => (/* binding */ UserManagementRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _user_management_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-management.component */ 68536);
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users/users.component */ 48486);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);





const routes = [{
  path: '',
  component: _user_management_component__WEBPACK_IMPORTED_MODULE_0__.UserManagementComponent,
  children: [{
    path: 'users',
    component: _users_users_component__WEBPACK_IMPORTED_MODULE_1__.UsersComponent
  }]
}];
class UserManagementRoutingModule {
  static {
    this.ɵfac = function UserManagementRoutingModule_Factory(t) {
      return new (t || UserManagementRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: UserManagementRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UserManagementRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 68536:
/*!*****************************************************************************!*\
  !*** ./src/app/core-component/user-management/user-management.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserManagementComponent: () => (/* binding */ UserManagementComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);


class UserManagementComponent {
  static {
    this.ɵfac = function UserManagementComponent_Factory(t) {
      return new (t || UserManagementComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserManagementComponent,
      selectors: [["app-user-management"]],
      decls: 1,
      vars: 0,
      template: function UserManagementComponent_Template(rf, ctx) {
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

/***/ 73559:
/*!**************************************************************************!*\
  !*** ./src/app/core-component/user-management/user-management.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserManagementModule: () => (/* binding */ UserManagementModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _user_management_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-management-routing.module */ 27182);
/* harmony import */ var _user_management_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-management.component */ 68536);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/users.component */ 48486);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);






class UserManagementModule {
  static {
    this.ɵfac = function UserManagementModule_Factory(t) {
      return new (t || UserManagementModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: UserManagementModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _user_management_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserManagementRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.sharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](UserManagementModule, {
    declarations: [_user_management_component__WEBPACK_IMPORTED_MODULE_1__.UserManagementComponent, _users_users_component__WEBPACK_IMPORTED_MODULE_3__.UsersComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _user_management_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserManagementRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.sharedModule]
  });
})();

/***/ }),

/***/ 48486:
/*!*************************************************************************!*\
  !*** ./src/app/core-component/user-management/users/users.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersComponent: () => (/* binding */ UsersComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/core.index */ 82351);
/* harmony import */ var src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.index */ 31287);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 22047);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/custom-pagination/custom-pagination.component */ 14860);













const _c0 = () => ["Platform Admin", "Warehouse Admin", "Support Staff"];
function UsersComponent_mat_option_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const role_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", role_r1.role_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", role_r1.role_name, " ");
  }
}
function UsersComponent_button_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UsersComponent_button_50_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.clearSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Searched Query: ", ctx_r2.savedSearchText, " \u2716 ");
  }
}
function UsersComponent_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No data found");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_For_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 68)(3, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td")(14, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "td", 73)(17, "div", 74)(18, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UsersComponent_For_70_Template_a_click_18_listener() {
      const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.viewUser(data_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UsersComponent_For_70_Template_a_click_20_listener() {
      const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.editUser(data_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", data_r5.profile_img_url || "assets/img/avatar/avatar-2.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", data_r5.first_name, " ", data_r5.last_name || "N/A", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r5.email || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((data_r5.user_role == null ? null : data_r5.user_role.role_name) || "No Role Assigned");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("border-color", data_r5.is_active ? "green" : "red")("border-width", "2px")("border-style", "solid")("color", data_r5.is_active ? "green" : "red");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r5.is_active ? "Active" : "Inactive", " ");
  }
}
function UsersComponent_div_87_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r2.profileImageBase64, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function UsersComponent_div_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 79)(1, "div", 80)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 81)(5, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, UsersComponent_div_87_div_6_Template, 2, 1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 83)(8, "div", 84)(9, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function UsersComponent_div_87_Template_input_change_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 86)(11, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Add Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.profileImageBase64);
  }
}
function UsersComponent_div_88_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "small", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "First name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 46)(1, "div", 47)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, UsersComponent_div_88_div_5_Template, 3, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r2.userForm.get("first_name")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r2.userForm.get("first_name")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_89_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "small", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Last name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 46)(1, "div", 47)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, UsersComponent_div_89_div_5_Template, 3, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r2.userForm.get("last_name")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r2.userForm.get("last_name")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_90_div_5_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Email is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function UsersComponent_div_90_div_5_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Enter a valid email. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function UsersComponent_div_90_div_5_small_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " This email is already in use. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function UsersComponent_div_90_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UsersComponent_div_90_div_5_small_1_Template, 2, 0, "small", 92)(2, UsersComponent_div_90_div_5_small_2_Template, 2, 0, "small", 92)(3, UsersComponent_div_90_div_5_small_3_Template, 2, 0, "small", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r2.userForm.get("email")) == null ? null : tmp_2_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r2.userForm.get("email")) == null ? null : tmp_3_0.hasError("email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx_r2.userForm.get("email")) == null ? null : tmp_4_0.hasError("emailExists"));
  }
}
function UsersComponent_div_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 46)(1, "div", 47)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, UsersComponent_div_90_div_5_Template, 4, 3, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r2.userForm.get("email")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r2.userForm.get("email")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_91_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "small", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Enter a valid password.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 46)(1, "div", 47)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, UsersComponent_div_91_div_5_Template, 3, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r2.userForm.get("password")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r2.userForm.get("password")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 46)(1, "div", 47)(2, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Country Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_93_div_5_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Phone number is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function UsersComponent_div_93_div_5_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Enter a valid phone number. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function UsersComponent_div_93_div_5_small_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " This phone number is already in use. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function UsersComponent_div_93_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UsersComponent_div_93_div_5_small_1_Template, 2, 0, "small", 92)(2, UsersComponent_div_93_div_5_small_2_Template, 2, 0, "small", 92)(3, UsersComponent_div_93_div_5_small_3_Template, 2, 0, "small", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r2.userForm.get("phone_number")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r2.userForm.get("phone_number")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx_r2.userForm.get("phone_number")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["phoneNumberExists"]);
  }
}
function UsersComponent_div_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 46)(1, "div", 47)(2, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, UsersComponent_div_93_div_5_Template, 4, 3, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r2.userForm.get("phone_number")) == null ? null : tmp_1_0.touched) && ((tmp_1_0 = ctx_r2.userForm.get("phone_number")) == null ? null : tmp_1_0.invalid));
  }
}
function UsersComponent_div_94_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "small", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Enter a valid address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 79)(1, "div", 47)(2, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Address Line 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, UsersComponent_div_94_div_5_Template, 3, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r2.userForm.get("address_line1")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r2.userForm.get("address_line1")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_95_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "small", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Enter a valid address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 79)(1, "div", 47)(2, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Address Line 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, UsersComponent_div_95_div_5_Template, 3, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r2.userForm.get("address_line2")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r2.userForm.get("address_line2")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_96_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "small", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Enter a valid landmark.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 79)(1, "div", 47)(2, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Landmark");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, UsersComponent_div_96_div_5_Template, 3, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r2.userForm.get("land_mark")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r2.userForm.get("land_mark")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_102_div_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "small", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Enter a valid state.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_102_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 46)(1, "div", 47)(2, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "select", 99)(5, "option", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Select State");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "option", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Andhra Pradesh");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "option", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " Arunachal Pradesh ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "option", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Assam");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "option", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Bihar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "option", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Chhattisgarh");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Goa");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "option", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Gujarat");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "option", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Haryana");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "option", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Himachal Pradesh");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "option", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Jharkhand");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "option", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Karnataka");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "option", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Kerala");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "option", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Madhya Pradesh");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "option", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Maharashtra");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "option", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Manipur");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "option", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Meghalaya");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "option", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Mizoram");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "option", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Nagaland");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "option", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Odisha");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "option", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "Punjab");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "option", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Rajasthan");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "option", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Sikkim");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "option", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Tamil Nadu");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "option", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Telangana");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "option", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Tripura");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "option", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Uttar Pradesh");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "option", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Uttarakhand");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "option", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "West Bengal");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "option", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, " Andaman and Nicobar Islands ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "option", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "Chandigarh");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "option", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, " Dadra and Nagar Haveli and Daman and Diu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "option", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "Lakshadweep");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "option", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "Delhi");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "option", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "Puducherry");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "option", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "Ladakh");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "option", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, " Jammu and Kashmir ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](79, UsersComponent_div_102_div_79_Template, 3, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r2.userForm.get("state")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r2.userForm.get("state")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_103_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "small", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Enter a valid city.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_103_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 46)(1, "div", 47)(2, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, UsersComponent_div_103_div_5_Template, 3, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r2.userForm.get("city")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r2.userForm.get("city")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_104_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "small", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Enter a valid pin code.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_104_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 46)(1, "div", 47)(2, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Pin Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, UsersComponent_div_104_div_5_Template, 3, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r2.userForm.get("pin_code")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r2.userForm.get("pin_code")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_105_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 56)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Selected File:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.selectedkycFileName, " ");
  }
}
function UsersComponent_div_105_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 83)(1, "div", 84)(2, "input", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function UsersComponent_div_105_Template_input_change_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.onDocSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 86)(4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Add Document");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, UsersComponent_div_105_div_6_Template, 4, 1, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.selectedkycFileName);
  }
}
function UsersComponent_div_126_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r2.profileImageBase64, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function UsersComponent_div_126_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 79)(1, "div", 80)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 81)(5, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, UsersComponent_div_126_div_6_Template, 2, 1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 83)(8, "div", 84)(9, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function UsersComponent_div_126_Template_input_change_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 86)(11, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Change Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.profileImageBase64);
  }
}
function UsersComponent_div_127_input_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "input", 88);
  }
}
function UsersComponent_div_127_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "small", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "First name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_127_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 46)(1, "div", 47)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, UsersComponent_div_127_input_4_Template, 1, 0, "input", 141)(5, UsersComponent_div_127_div_5_Template, 3, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.userEditForm.get("first_name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r2.userEditForm.get("first_name")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r2.userEditForm.get("first_name")) == null ? null : tmp_2_0.touched));
  }
}
function UsersComponent_div_128_input_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "input", 90);
  }
}
function UsersComponent_div_128_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "small", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Last name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_128_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 46)(1, "div", 47)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, UsersComponent_div_128_input_4_Template, 1, 0, "input", 142)(5, UsersComponent_div_128_div_5_Template, 3, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.userEditForm.get("last_name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r2.userEditForm.get("last_name")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r2.userEditForm.get("last_name")) == null ? null : tmp_2_0.touched));
  }
}
function UsersComponent_div_129_input_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "input", 144);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", true);
  }
}
function UsersComponent_div_129_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "small", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Enter a valid email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_129_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 46)(1, "div", 47)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, UsersComponent_div_129_input_4_Template, 1, 1, "input", 143)(5, UsersComponent_div_129_div_5_Template, 3, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.userEditForm.get("email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r2.userEditForm.get("email")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r2.userEditForm.get("email")) == null ? null : tmp_2_0.touched));
  }
}
function UsersComponent_div_130_div_1_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const role_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", role_r9.role_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", role_r9.role_name, " ");
  }
}
function UsersComponent_div_130_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 47)(1, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "User Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "select", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, UsersComponent_div_130_div_1_option_4_Template, 2, 2, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.allowedRoles);
  }
}
function UsersComponent_div_130_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UsersComponent_div_130_div_1_Template, 5, 1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.userEditForm.get("user_role_id"));
  }
}
function UsersComponent_div_131_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 46)(1, "div", 47)(2, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Country Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_132_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "small", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Enter a valid phone number.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_132_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 46)(1, "div", 47)(2, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, UsersComponent_div_132_div_5_Template, 3, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r2.userForm.get("phone_number")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r2.userForm.get("phone_number")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_133_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "small", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Enter a valid address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_133_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 79)(1, "div", 47)(2, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Address Line 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, UsersComponent_div_133_div_5_Template, 3, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r2.userForm.get("address_line1")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r2.userForm.get("address_line1")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_134_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "small", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Enter a valid address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_134_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 79)(1, "div", 47)(2, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Address Line 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, UsersComponent_div_134_div_5_Template, 3, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r2.userForm.get("address_line2")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r2.userForm.get("address_line2")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_135_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "small", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Enter a valid landmark.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_135_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 79)(1, "div", 47)(2, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Landmark");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, UsersComponent_div_135_div_5_Template, 3, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r2.userForm.get("land_mark")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r2.userForm.get("land_mark")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_137_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 47)(1, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function UsersComponent_div_138_div_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "small", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Enter a valid state.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_138_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 46)(1, "div", 47)(2, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "select", 99)(5, "option", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Select State");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "option", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Andhra Pradesh");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "option", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " Arunachal Pradesh ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "option", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Assam");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "option", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Bihar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "option", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Chhattisgarh");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Goa");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "option", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Gujarat");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "option", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Haryana");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "option", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Himachal Pradesh");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "option", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Jharkhand");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "option", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Karnataka");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "option", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Kerala");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "option", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Madhya Pradesh");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "option", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Maharashtra");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "option", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Manipur");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "option", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Meghalaya");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "option", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Mizoram");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "option", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Nagaland");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "option", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Odisha");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "option", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "Punjab");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "option", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Rajasthan");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "option", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Sikkim");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "option", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Tamil Nadu");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "option", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Telangana");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "option", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Tripura");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "option", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Uttar Pradesh");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "option", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Uttarakhand");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "option", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "West Bengal");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "option", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, " Andaman and Nicobar Islands ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "option", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "Chandigarh");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "option", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, " Dadra and Nagar Haveli and Daman and Diu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "option", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "Lakshadweep");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "option", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "Delhi");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "option", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "Puducherry");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "option", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "Ladakh");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "option", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, " Jammu and Kashmir ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](79, UsersComponent_div_138_div_79_Template, 3, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r2.userForm.get("state")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r2.userForm.get("state")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_139_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "small", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Enter a valid city.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_139_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 46)(1, "div", 47)(2, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, UsersComponent_div_139_div_5_Template, 3, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r2.userForm.get("city")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r2.userForm.get("city")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_140_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "small", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Enter a valid pin code.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_140_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 46)(1, "div", 47)(2, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Pin Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, UsersComponent_div_140_div_5_Template, 3, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r2.userForm.get("pin_code")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r2.userForm.get("pin_code")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_148_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 146)(2, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Remark");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_164_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Default");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function UsersComponent_div_164_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 149)(1, "div", 150)(2, "div", 10)(3, "div", 151)(4, "h5", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, UsersComponent_div_164_div_1_span_6_Template, 2, 0, "span", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p", 154)(8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Phone:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "p", 154)(12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Address:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "p", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "p", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const addr_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", addr_r10.first_name, " ", addr_r10.last_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", addr_r10.is_default);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" +", addr_r10.country_code, " ", addr_r10.phone_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", addr_r10.address_line1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", addr_r10.address_line2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", addr_r10.land_mark, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"](" ", addr_r10.city, ", ", addr_r10.state, " - ", addr_r10.pin_code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Address ID: ", addr_r10.address_id, " |");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" User ID: ", addr_r10.user_id, " ");
  }
}
function UsersComponent_div_164_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UsersComponent_div_164_div_1_Template, 26, 13, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.selectedUser == null ? null : ctx_r2.selectedUser.addresses);
  }
}
function UsersComponent_div_165_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " No addresses available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
class UsersComponent {
  constructor(data, paginationService, sidebar, fb) {
    this.data = data;
    this.paginationService = paginationService;
    this.sidebar = sidebar;
    this.fb = fb;
    this.initChecked = false;
    this.selectedValue1 = '';
    this.selectedValue2 = '';
    this.selectedValue3 = '';
    this.selectedValue4 = '';
    this.selectedValue5 = '';
    this.selectedValue6 = '';
    this.selectedValue7 = '';
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    // pagination variables
    this.tableData = [];
    this.pageSize = 10;
    this.serialNumberArray = [];
    this.totalData = 0;
    this.showFilter = false;
    this.searchDataValue = '';
    this.profileImageBase64 = '';
    this.kycDocumentBase64 = '';
    this.selectedkycFileName = '';
    this.page = 0;
    this.filterSelectedRoleId = 0;
    this.filterSelectedStatus = 'all';
    this.filterSearchText = '';
    this.savedSearchText = '';
    this.selectedRole = 'User';
    this.selectedRoleId = 0;
    this.userRoles = [];
    this.selectedUser = {};
    this.allowedRoles = [{
      role_id: 5,
      role_name: 'Platform Admin'
    }, {
      role_id: 6,
      role_name: 'Warehouse Admin'
    }, {
      role_id: 7,
      role_name: 'Support Staff'
    }];
    this.isCollapsed = false;
    this.filter = false;
    this.password = [false];
    this.userForm = this.fb.group({
      first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      phone_number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(/^[+\d]?(?:[\d-.\s()]*)$/)]],
      is_active: [true],
      user_role_id: [6],
      profile_img: [''],
      country_code: ["91"],
      address_line1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      address_line2: [""],
      country: ["India"],
      land_mark: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      pin_code: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      city: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      state: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      document_file: [""]
    });
    this.userEditForm = this.fb.group({
      is_active: [true],
      remarks: ['']
    });
    this.getTableData();
    this.data.getUserRoles().subscribe(apiRes => {
      this.userRoles = apiRes.data;
    });
  }
  onRoleSelect(role) {
    this.userForm.reset();
    this.selectedRole = role;
    this.selectedRoleId = this.getRoleId(role);
  }
  getRoleId(roleName) {
    const role = this.userRoles.find(r => r.role_name === roleName);
    return role ? role.role_id : 0; // Returns 0 if role not found (avoid undefined)
  }
  onFileSelected(event) {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Read file as DataURL (Base64)
      reader.onload = () => {
        this.profileImageBase64 = reader.result; // Store Base64 string
        this.userForm.patchValue({
          profile_img: this.profileImageBase64
        }); // Update form value
      };
      reader.onerror = error => {
        console.error('Error converting image to Base64:', error);
      };
    }
  }
  onDocSelected(event) {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      this.selectedkycFileName = file.name;
      const reader = new FileReader();
      reader.readAsDataURL(file); // Read file as DataURL (Base64)
      reader.onload = () => {
        this.kycDocumentBase64 = reader.result; // Store Base64 string
        this.userForm.patchValue({
          document_file: this.kycDocumentBase64
        }); // Update form value
      };
      reader.onerror = error => {
        console.error('Error converting image to Base64:', error);
      };
    }
  }
  onSubmit() {
    this.userForm.patchValue({
      is_active: true
    });
    this.userForm.patchValue({
      country: 'India'
    });
    this.userForm.patchValue({
      country_code: '91'
    });
    if (this.userForm.valid) {
      let updatedData = {
        ...this.userForm.value,
        role_name: this.selectedRole,
        user_role_id: this.selectedRoleId,
        admin_creation: true
      };
      this.data.createUser(updatedData).subscribe(response => {
        this.getTableData();
        // Reset form after submission
        this.userForm.reset();
        this.profileImageBase64 = '';
        // Close the modal using Bootstrap's API
        const modalElement = document.getElementById('add-units');
        if (modalElement) {
          const modal = bootstrap.Modal.getInstance(modalElement);
          modal.hide();
        }
      }, error => {
        if (error.error.status_message && error.error.status_message.toLowerCase().includes('this email')) {
          this.userForm.get('email')?.setErrors({
            emailExists: true
          });
        }
        if (error.error.status_message && error.error.status_message.toLowerCase().includes('this phone number already exists')) {
          this.userForm.get('phone_number')?.setErrors({
            phoneNumberExists: true
          });
        }
      });
    }
  }
  viewUser(data) {
    this.selectedUser = data;
  }
  editUser(data) {
    this.selectedUser = data;
    this.userEditForm = this.fb.group({
      is_active: [data.is_active ?? true],
      // Default to true if undefined
      remarks: data.remarks // Default to true if undefined
    });
    const rolesRequiringFullDetails = ['Platform Admin', 'Warehouse Admin', 'Support Staff'];
    const userRole = data.user_role.role_name;
    this.selectedRole = data.user_role.role_name;
    this.selectedRoleId = this.getRoleId(data.user_role.role_name);
    if (rolesRequiringFullDetails.includes(userRole)) {
      this.userEditForm.addControl('first_name', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data.first_name || '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required));
      this.userEditForm.addControl('last_name', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data.last_name || '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required));
      this.userEditForm.addControl('email', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data.email || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]));
      this.userEditForm.addControl('country_code', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data.country_code || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]));
      this.userEditForm.addControl('phone_number', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data.phone_number || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]));
      this.userEditForm.addControl('address_line1', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data.addresses[0].address_line1 || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]));
      this.userEditForm.addControl('address_line2', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data.addresses[0].address_line2 || ''));
      // console.log(data.land_mark)
      this.userEditForm.addControl('land_mark', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data.addresses[0].land_mark || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]));
      this.userEditForm.addControl('pin_code', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data.addresses[0].pin_code || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]));
      this.userEditForm.addControl('city', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data.addresses[0].city || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]));
      this.userEditForm.addControl('state', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data.addresses[0].state || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]));
      this.userEditForm.addControl('user_role_id', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.selectedRoleId, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required));
    }
    this.editUserId = data.user_id;
    this.userEditForm.get('email')?.disable(); // Disables the email field
    this.profileImageBase64 = data.profile_img_url || '';
  }
  onUpdate() {
    this.userEditForm.patchValue({
      country: 'India'
    });
    this.userEditForm.patchValue({
      country_code: '91'
    });
    if (this.userEditForm.valid) {
      let updatedData = this.userEditForm.value;
      if (this.profileImageBase64.includes('http://')) {
        updatedData = {
          ...this.userEditForm.value
        };
      } else {
        updatedData = {
          ...this.userEditForm.value,
          profile_img: this.profileImageBase64
        };
      }
      this.data.updateUser(this.editUserId, updatedData).subscribe(response => {
        this.getTableData();
        // Reset form after submission
        this.userForm.reset();
        this.profileImageBase64 = '';
        // Close the modal using Bootstrap's API
        const modalElement = document.getElementById('edit-units');
        if (modalElement) {
          const modal = bootstrap.Modal.getInstance(modalElement);
          modal.hide();
        }
      }, error => {
        console.error('Error creating user', error);
      });
    }
  }
  getTableData() {
    this.data.getUsers(this.filterSelectedRoleId, this.filterSelectedStatus, this.page, this.savedSearchText).subscribe(apiRes => {
      this.tableData = [];
      apiRes.results.users.forEach((res, index) => {
        // Push data to the table array
        this.tableData.push({
          ...res,
          user_role: res.user_role || {
            role_id: 0,
            role_name: 'Unknown Role'
          }
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
  filterUsers() {
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
  togglePassword(index) {
    this.password[index] = !this.password[index];
  }
  static {
    this.ɵfac = function UsersComponent_Factory(t) {
      return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_3__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_2__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: UsersComponent,
      selectors: [["app-users"]],
      decls: 166,
      vars: 71,
      consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "page-btn"], [1, "dropdown"], ["type", "button", "id", "addUserDropdown", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-added", "dropdown-toggle"], [1, "feather", "icon-plus-circle", "me-2"], ["aria-labelledby", "addUserDropdown", 1, "dropdown-menu"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-units", 1, "dropdown-item", 3, "click"], [1, "card", "table-list-card"], [1, "card-body"], [1, "table-top"], [2, "display", "flex", "align-items", "flex-end"], [3, "ngModelChange", "selectionChange", "ngModel"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "ml-4"], [1, "search-set", "ml-4"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset", 3, "click"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["placeholder", "Search...", 1, "form-control", 3, "ngModelChange", "keydown.enter", "ngModel"], ["class", "btn btn-clear", 3, "click", 4, "ngIf"], [1, "table-responsive"], ["matSort", "", 1, "table", "datanew"], ["mat-sort-header", "userName"], ["mat-sort-header", "phone"], ["mat-sort-header", "email"], ["mat-sort-header", "role"], ["mat-sort-header", "status"], [1, "no-sort"], [3, "pageChange", "pagination"], ["id", "add-units", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "custom-modal-two"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header", "border-0", "custom-modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body"], [3, "ngSubmit", "formGroup"], [1, "row"], ["class", "col-lg-12", 4, "ngIf"], ["class", "col-lg-6", 4, "ngIf"], [1, "col-lg-6"], [1, "input-blocks"], [1, "form-label"], ["type", "text", "value", "India", "disabled", "", 1, "form-control"], ["class", "input-blocks mb-0", 4, "ngIf"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit", 3, "disabled"], ["id", "edit-units", 1, "modal", "fade"], ["class", "input-blocks", 4, "ngIf"], [1, "mt-2"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], [1, "status-label"], ["type", "checkbox", "id", "user3", "formControlName", "is_active", 1, "check"], ["for", "user3", 1, "checktoggle"], [4, "ngIf"], ["id", "details-units", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "custom-modal-one"], ["class", "row", 4, "ngIf"], ["class", "text-center text-muted mt-4", 4, "ngIf"], [1, "btn", "btn-clear", 3, "click"], ["colspan", "6", 1, "text-center", "text-muted"], [1, "userimgname"], ["href", "javascript:void(0);", 1, "userslist-img", "bg-img"], ["alt", "product", "width", "100px", "height", "100px", 1, "rounded", 3, "src"], ["href", "javascript:void(0);"], [1, "badge"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-target", "#details-units", "data-bs-toggle", "modal", 1, "me-2", "p-2", "mb-0", 3, "click"], [1, "feather", "icon-eye", "action-eye"], ["data-bs-toggle", "modal", "data-bs-target", "#edit-units", 1, "me-2", "p-2", "mb-0", 3, "click"], [1, "feather", "icon-edit", "feather-edit"], [1, "col-lg-12"], [1, "new-employee-field"], [1, "profile-pic-upload", "mb-2"], [1, "profile-pic"], [1, "input-blocks", "mb-0"], [1, "image-upload", "mb-0"], ["type", "file", "accept", "image/*", 3, "change"], [1, "image-uploads"], ["alt", "Preview", 2, "max-width", "100px", "margin-top", "10px", 3, "src"], ["type", "text", "formControlName", "first_name", 1, "form-control"], [1, "text-danger"], ["type", "text", "formControlName", "last_name", 1, "form-control"], ["type", "text", "formControlName", "email", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["type", "text", "formControlName", "password", 1, "form-control"], ["id", "country_code", "type", "text", "value", "91", "disabled", "", 1, "form-control"], ["id", "phone_number", "formControlName", "phone_number", "type", "text", "required", "", 1, "form-control"], ["id", "address_line_1", "formControlName", "address_line1", "type", "text", "required", "", 1, "form-control"], ["id", "address_line_2", "formControlName", "address_line2", "type", "text", 1, "form-control"], ["id", "landmark", "formControlName", "land_mark", "type", "text", 1, "form-control"], ["id", "state", "formControlName", "state", "required", "", 1, "form-control"], ["value", "", "disabled", "", "selected", ""], ["value", "Andhra Pradesh"], ["value", "Arunachal Pradesh"], ["value", "Assam"], ["value", "Bihar"], ["value", "Chhattisgarh"], ["value", "Goa"], ["value", "Gujarat"], ["value", "Haryana"], ["value", "Himachal Pradesh"], ["value", "Jharkhand"], ["value", "Karnataka"], ["value", "Kerala"], ["value", "Madhya Pradesh"], ["value", "Maharashtra"], ["value", "Manipur"], ["value", "Meghalaya"], ["value", "Mizoram"], ["value", "Nagaland"], ["value", "Odisha"], ["value", "Punjab"], ["value", "Rajasthan"], ["value", "Sikkim"], ["value", "Tamil Nadu"], ["value", "Telangana"], ["value", "Tripura"], ["value", "Uttar Pradesh"], ["value", "Uttarakhand"], ["value", "West Bengal"], ["value", "Andaman and Nicobar Islands"], ["value", "Chandigarh"], ["value", "Dadra and Nagar Haveli and Daman and Diu"], ["value", "Lakshadweep"], ["value", "Delhi"], ["value", "Puducherry"], ["value", "Ladakh"], ["value", "Jammu and Kashmir"], ["id", "city", "formControlName", "city", "type", "text", "required", "", 1, "form-control"], ["id", "pin_code", "formControlName", "pin_code", "type", "text", "required", "", 1, "form-control"], ["type", "file", "accept", "image/*,.pdf", 3, "change"], ["class", "mt-2", 4, "ngIf"], ["type", "text", "class", "form-control", "formControlName", "first_name", 4, "ngIf"], ["type", "text", "class", "form-control", "formControlName", "last_name", 4, "ngIf"], ["type", "text", "class", "form-control", "formControlName", "email", 3, "disabled", 4, "ngIf"], ["type", "text", "formControlName", "email", 1, "form-control", 3, "disabled"], ["formControlName", "user_role_id", 1, "form-control"], [1, "status-toggle", "modal-status", "justify-content-between", "align-items-center"], ["id", "remarks", "formControlName", "remarks", "type", "remarks", 1, "form-control"], ["class", "col-md-6 col-lg-6 mb-4", 4, "ngFor", "ngForOf"], [1, "col-md-6", "col-lg-6", "mb-4"], [1, "card", "shadow-sm"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "card-title", "mb-0"], ["class", "badge bg-primary", 4, "ngIf"], [1, "mb-1"], [1, "mb-1", "ms-3"], [1, "text-muted", "small", "mt-2", "mb-0"], [1, "badge", "bg-primary"], [1, "text-center", "text-muted", "mt-4"]],
      template: function UsersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "User List");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Manage Your Users");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 3)(8, "div", 4)(9, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " Add New User ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ul", 7)(13, "li")(14, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UsersComponent_Template_a_click_14_listener() {
            return ctx.onRoleSelect("Platform Admin");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " Add Platform Admin ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "li")(17, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UsersComponent_Template_a_click_17_listener() {
            return ctx.onRoleSelect("Warehouse Admin");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " Add Warehouse Admin ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "li")(20, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UsersComponent_Template_a_click_20_listener() {
            return ctx.onRoleSelect("Support Staff");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, " Add Support Staff ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 9)(23, "div", 10)(24, "div", 11)(25, "div", 12)(26, "div")(27, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Filter by Role");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "mat-select", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function UsersComponent_Template_mat_select_ngModelChange_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.filterSelectedRoleId, $event) || (ctx.filterSelectedRoleId = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectionChange", function UsersComponent_Template_mat_select_selectionChange_29_listener() {
            return ctx.filterUsers();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "mat-option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "All");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, UsersComponent_mat_option_32_Template, 2, 2, "mat-option", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 16)(34, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Filter by Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "mat-select", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function UsersComponent_Template_mat_select_ngModelChange_36_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.filterSelectedStatus, $event) || (ctx.filterSelectedStatus = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectionChange", function UsersComponent_Template_mat_select_selectionChange_36_listener() {
            return ctx.filterUsers();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "mat-option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "All");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "mat-option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Active");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "mat-option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Inactive");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 17)(44, "div", 18)(45, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UsersComponent_Template_a_click_45_listener() {
            return ctx.onSearchClick();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 21)(48, "label")(49, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function UsersComponent_Template_input_ngModelChange_49_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.filterSearchText, $event) || (ctx.filterSearchText = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keydown.enter", function UsersComponent_Template_input_keydown_enter_49_listener() {
            return ctx.onSearchClick();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, UsersComponent_button_50_Template, 2, 1, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 24)(52, "table", 25)(53, "thead")(54, "tr")(55, "th", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Profile Image");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "th", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Display Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "th", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Contact");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "th", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "Role");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "th", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "th", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](68, UsersComponent_Conditional_68_Template, 3, 0, "tr");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](69, UsersComponent_For_70_Template, 22, 14, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "app-custom-pagination", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function UsersComponent_Template_app_custom_pagination_pageChange_71_listener($event) {
            return ctx.onPageChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 33)(73, "div", 34)(74, "div", 35)(75, "div", 36)(76, "div", 37)(77, "div", 38)(78, "div", 2)(79, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "button", 39)(82, "span", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "div", 41)(85, "form", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function UsersComponent_Template_form_ngSubmit_85_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "div", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](87, UsersComponent_div_87_Template, 13, 1, "div", 44)(88, UsersComponent_div_88_Template, 6, 1, "div", 45)(89, UsersComponent_div_89_Template, 6, 1, "div", 45)(90, UsersComponent_div_90_Template, 6, 1, "div", 45)(91, UsersComponent_div_91_Template, 6, 1, "div", 45)(92, UsersComponent_div_92_Template, 5, 0, "div", 45)(93, UsersComponent_div_93_Template, 6, 1, "div", 45)(94, UsersComponent_div_94_Template, 6, 1, "div", 44)(95, UsersComponent_div_95_Template, 6, 1, "div", 44)(96, UsersComponent_div_96_Template, 6, 1, "div", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "div", 46)(98, "div", 47)(99, "label", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100, "Country");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](101, "input", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](102, UsersComponent_div_102_Template, 80, 1, "div", 45)(103, UsersComponent_div_103_Template, 6, 1, "div", 45)(104, UsersComponent_div_104_Template, 6, 1, "div", 45)(105, UsersComponent_div_105_Template, 7, 1, "div", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "div", 51)(107, "button", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108, " Cancel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "button", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](110, " Submit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "div", 54)(112, "div", 34)(113, "div", 35)(114, "div", 36)(115, "div", 37)(116, "div", 38)(117, "div", 2)(118, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](119, "Edit User");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "button", 39)(121, "span", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](122, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](123, "div", 41)(124, "form", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function UsersComponent_Template_form_ngSubmit_124_listener() {
            return ctx.onUpdate();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "div", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](126, UsersComponent_div_126_Template, 13, 1, "div", 44)(127, UsersComponent_div_127_Template, 6, 2, "div", 45)(128, UsersComponent_div_128_Template, 6, 2, "div", 45)(129, UsersComponent_div_129_Template, 6, 2, "div", 45)(130, UsersComponent_div_130_Template, 2, 1, "div", 45)(131, UsersComponent_div_131_Template, 5, 0, "div", 45)(132, UsersComponent_div_132_Template, 6, 1, "div", 45)(133, UsersComponent_div_133_Template, 6, 1, "div", 44)(134, UsersComponent_div_134_Template, 6, 1, "div", 44)(135, UsersComponent_div_135_Template, 6, 1, "div", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](136, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](137, UsersComponent_div_137_Template, 4, 0, "div", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](138, UsersComponent_div_138_Template, 80, 1, "div", 45)(139, UsersComponent_div_139_Template, 6, 1, "div", 45)(140, UsersComponent_div_140_Template, 6, 1, "div", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](141, "div", 56)(142, "div", 57)(143, "span", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](144, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](145, "input", 59)(146, "label", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](147, "div", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](148, UsersComponent_div_148_Template, 5, 0, "div", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](149, "div", 51)(150, "button", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](151, " Cancel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](152, "button", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](153, " Submit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](154, "div", 62)(155, "div", 63)(156, "div", 35)(157, "div", 36)(158, "div", 37)(159, "div", 38)(160, "div", 2)(161, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](162, "User Address Details");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](163, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](164, UsersComponent_div_164_Template, 2, 1, "div", 64)(165, UsersComponent_div_165_Template, 2, 0, "div", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          let tmp_44_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.filterSelectedRoleId);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.userRoles);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.filterSelectedStatus);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", "all");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.filterSearchText);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.savedSearchText);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](68, (ctx.tableData == null ? null : ctx.tableData.length) === 0 ? 68 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.tableData);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pagination", ctx.pagination);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Add ", ctx.selectedRole, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.userForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](47, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](48, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](49, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](50, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](51, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](52, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](53, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](54, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](55, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](56, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](57, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](58, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](59, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](60, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.userForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.userEditForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](61, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.userEditForm.get("first_name"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.userEditForm.get("last_name"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.userEditForm.get("email"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.userEditForm.get("user_role_id"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](62, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](63, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](64, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](65, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](66, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](67, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](68, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](69, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](70, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_44_0 = ctx.userEditForm.get("is_active")) == null ? null : tmp_44_0.value) !== ctx.selectedUser.is_active);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.userEditForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.selectedUser == null ? null : ctx.selectedUser.addresses == null ? null : ctx.selectedUser.addresses.length) > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.selectedUser == null ? null : ctx.selectedUser.addresses == null ? null : ctx.selectedUser.addresses.length) === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortHeader, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_4__.CustomPaginationComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_user-management_user-management_module_ts.js.map