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
/* harmony import */ var C_work_git_sakar_nithnode_admin_donation_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! xlsx */ 13857);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ 85841);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_core_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/core.index */ 82351);
/* harmony import */ var src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.index */ 31287);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ 22047);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/custom-pagination/custom-pagination.component */ 14860);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);


















const _c0 = () => ["Platform Admin", "Warehouse Admin", "Support Staff"];
const _c1 = (a0, a1) => ({
  "badge-linesuccess": a0,
  "badge-linedanger": a1
});
function UsersComponent_mat_option_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const role_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", role_r1.role_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", role_r1.role_name, " ");
  }
}
function UsersComponent_mat_option_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const state_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", state_r2.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", state_r2.state, " ");
  }
}
function UsersComponent_mat_option_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const city_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", city_r3.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", city_r3.city, " ");
  }
}
function UsersComponent_button_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UsersComponent_button_69_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.clearSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Searched Query: ", ctx_r4.savedSearchText, " \u2716 ");
  }
}
function UsersComponent_Conditional_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "No data found");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_For_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 72)(3, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "img", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "td")(16, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "td", 77)(19, "div", 78)(20, "a", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UsersComponent_For_93_Template_a_click_20_listener() {
      const data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.viewUser(data_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "a", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UsersComponent_For_93_Template_a_click_22_listener() {
      const data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.editUser(data_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", data_r7.profile_img_url || "assets/img/user.png", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", data_r7.first_name, " ", data_r7.last_name || "N/A", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r7.phone_number || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r7.email || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((data_r7.user_role == null ? null : data_r7.user_role.role_name) || "No Role Assigned");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](8, _c1, data_r7.is_active === true, data_r7.is_active === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", data_r7.is_active ? "Active" : "Inactive", " ");
  }
}
function UsersComponent_div_110_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r4.profileImageBase64, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function UsersComponent_div_110_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 83)(1, "div", 84)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 85)(5, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, UsersComponent_div_110_div_6_Template, 2, 1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 87)(8, "div", 88)(9, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function UsersComponent_div_110_Template_input_change_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 90)(11, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Add Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.profileImageBase64);
  }
}
function UsersComponent_div_111_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "small", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "First name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_111_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 51)(1, "div", 52)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, UsersComponent_div_111_div_5_Template, 3, 0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r4.userForm.get("first_name")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r4.userForm.get("first_name")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_112_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "small", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Last name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_112_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 51)(1, "div", 52)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, UsersComponent_div_112_div_5_Template, 3, 0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r4.userForm.get("last_name")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r4.userForm.get("last_name")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_113_div_5_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Email is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function UsersComponent_div_113_div_5_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Enter a valid email. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function UsersComponent_div_113_div_5_small_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " This email is already in use. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function UsersComponent_div_113_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, UsersComponent_div_113_div_5_small_1_Template, 2, 0, "small", 96)(2, UsersComponent_div_113_div_5_small_2_Template, 2, 0, "small", 96)(3, UsersComponent_div_113_div_5_small_3_Template, 2, 0, "small", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r4.userForm.get("email")) == null ? null : tmp_2_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r4.userForm.get("email")) == null ? null : tmp_3_0.hasError("email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx_r4.userForm.get("email")) == null ? null : tmp_4_0.hasError("emailExists"));
  }
}
function UsersComponent_div_113_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 51)(1, "div", 52)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, UsersComponent_div_113_div_5_Template, 4, 3, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r4.userForm.get("email")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r4.userForm.get("email")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_114_div_7_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Password is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function UsersComponent_div_114_div_7_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Password must be at least 8 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function UsersComponent_div_114_div_7_small_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Password must contain at least 1 number and 1 special character (!@#$%^&*). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function UsersComponent_div_114_div_7_small_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Password cannot contain spaces. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function UsersComponent_div_114_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, UsersComponent_div_114_div_7_small_1_Template, 2, 0, "small", 96)(2, UsersComponent_div_114_div_7_small_2_Template, 2, 0, "small", 96)(3, UsersComponent_div_114_div_7_small_3_Template, 2, 0, "small", 96)(4, UsersComponent_div_114_div_7_small_4_Template, 2, 0, "small", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r4.userForm.get("password")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r4.userForm.get("password")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx_r4.userForm.get("password")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx_r4.userForm.get("password")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["pattern"]) && ((tmp_5_0 = ctx_r4.userForm.get("password")) == null ? null : tmp_5_0.value == null ? null : tmp_5_0.value.includes(" ")));
  }
}
function UsersComponent_div_114_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 51)(1, "div", 52)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UsersComponent_div_114_Template_span_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.togglePassword(0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, UsersComponent_div_114_div_7_Template, 5, 4, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", ctx_r4.password[0] ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r4.password[0] ? "fa-eye" : "fa-eye-slash");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx_r4.userForm.get("password")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r4.userForm.get("password")) == null ? null : tmp_3_0.touched));
  }
}
function UsersComponent_div_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 51)(1, "div", 52)(2, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Country Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_116_div_5_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Phone number is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function UsersComponent_div_116_div_5_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Enter a valid phone number. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function UsersComponent_div_116_div_5_small_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " This phone number is already in use. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function UsersComponent_div_116_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, UsersComponent_div_116_div_5_small_1_Template, 2, 0, "small", 96)(2, UsersComponent_div_116_div_5_small_2_Template, 2, 0, "small", 96)(3, UsersComponent_div_116_div_5_small_3_Template, 2, 0, "small", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r4.userForm.get("phone_number")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r4.userForm.get("phone_number")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx_r4.userForm.get("phone_number")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["phoneNumberExists"]);
  }
}
function UsersComponent_div_116_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 51)(1, "div", 52)(2, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, UsersComponent_div_116_div_5_Template, 4, 3, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r4.userForm.get("phone_number")) == null ? null : tmp_1_0.touched) && ((tmp_1_0 = ctx_r4.userForm.get("phone_number")) == null ? null : tmp_1_0.invalid));
  }
}
function UsersComponent_div_117_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "small", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Enter a valid address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_117_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 83)(1, "div", 52)(2, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Address Line 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, UsersComponent_div_117_div_5_Template, 3, 0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r4.userForm.get("address_line1")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r4.userForm.get("address_line1")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_118_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "small", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Enter a valid address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_118_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 83)(1, "div", 52)(2, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Address Line 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, UsersComponent_div_118_div_5_Template, 3, 0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r4.userForm.get("address_line2")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r4.userForm.get("address_line2")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_119_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "small", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Enter a valid landmark.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_119_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 83)(1, "div", 52)(2, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Landmark");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, UsersComponent_div_119_div_5_Template, 3, 0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r4.userForm.get("land_mark")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r4.userForm.get("land_mark")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_120_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "small", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Enter a valid pin code.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_120_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 51)(1, "div", 52)(2, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Pin Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function UsersComponent_div_120_Template_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.onPincodeChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, UsersComponent_div_120_div_5_Template, 3, 0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r4.userForm.get("pin_code")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r4.userForm.get("pin_code")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_121_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "small", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Enter a valid city.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_121_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 51)(1, "div", 52)(2, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, UsersComponent_div_121_div_5_Template, 3, 0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r4.userForm.get("city")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r4.userForm.get("city")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_122_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "small", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Enter a valid state.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_122_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 51)(1, "div", 52)(2, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, UsersComponent_div_122_div_5_Template, 3, 0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r4.userForm.get("state")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r4.userForm.get("state")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_128_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 60)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Selected File:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r4.selectedkycFileName, " ");
  }
}
function UsersComponent_div_128_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 87)(1, "div", 88)(2, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function UsersComponent_div_128_Template_input_change_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.onDocSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 90)(4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Add Document");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, UsersComponent_div_128_div_6_Template, 4, 1, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.selectedkycFileName);
  }
}
function UsersComponent_div_149_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r4.profileImageBase64, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function UsersComponent_div_149_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 83)(1, "div", 84)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 85)(5, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, UsersComponent_div_149_div_6_Template, 2, 1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 87)(8, "div", 88)(9, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function UsersComponent_div_149_Template_input_change_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 90)(11, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Change Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.profileImageBase64);
  }
}
function UsersComponent_div_150_input_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "input", 92);
  }
}
function UsersComponent_div_150_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "small", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "First name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_150_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 51)(1, "div", 52)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, UsersComponent_div_150_input_4_Template, 1, 0, "input", 110)(5, UsersComponent_div_150_div_5_Template, 3, 0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.userEditForm.get("first_name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r4.userEditForm.get("first_name")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r4.userEditForm.get("first_name")) == null ? null : tmp_2_0.touched));
  }
}
function UsersComponent_div_151_input_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "input", 94);
  }
}
function UsersComponent_div_151_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "small", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Last name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_151_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 51)(1, "div", 52)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, UsersComponent_div_151_input_4_Template, 1, 0, "input", 111)(5, UsersComponent_div_151_div_5_Template, 3, 0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.userEditForm.get("last_name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r4.userEditForm.get("last_name")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r4.userEditForm.get("last_name")) == null ? null : tmp_2_0.touched));
  }
}
function UsersComponent_div_152_input_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "input", 113);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", true);
  }
}
function UsersComponent_div_152_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "small", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Enter a valid email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_152_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 51)(1, "div", 52)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, UsersComponent_div_152_input_4_Template, 1, 1, "input", 112)(5, UsersComponent_div_152_div_5_Template, 3, 0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.userEditForm.get("email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r4.userEditForm.get("email")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r4.userEditForm.get("email")) == null ? null : tmp_2_0.touched));
  }
}
function UsersComponent_div_153_div_1_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const role_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", role_r13.role_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", role_r13.role_name, " ");
  }
}
function UsersComponent_div_153_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 52)(1, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "User Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "select", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, UsersComponent_div_153_div_1_option_4_Template, 2, 2, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r4.allowedRoles);
  }
}
function UsersComponent_div_153_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, UsersComponent_div_153_div_1_Template, 5, 1, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.userEditForm.get("user_role_id"));
  }
}
function UsersComponent_div_154_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "small", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Enter a valid pin code.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_154_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 51)(1, "div", 52)(2, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Pin Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function UsersComponent_div_154_Template_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.onEditPincodeChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, UsersComponent_div_154_div_5_Template, 3, 0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r4.userEditForm.get("pin_code")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r4.userEditForm.get("pin_code")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_155_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "small", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Enter a valid city.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_155_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 51)(1, "div", 52)(2, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, UsersComponent_div_155_div_5_Template, 3, 0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r4.userEditForm.get("city")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r4.userEditForm.get("city")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_156_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "small", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Enter a valid state.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_156_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 51)(1, "div", 52)(2, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, UsersComponent_div_156_div_5_Template, 3, 0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r4.userEditForm.get("state")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r4.userEditForm.get("state")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_169_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 116)(2, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Remark");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_188_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Default");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function UsersComponent_div_188_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 119)(1, "div", 120)(2, "div", 13)(3, "div", 121)(4, "h5", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, UsersComponent_div_188_div_1_span_6_Template, 2, 0, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "p", 124)(8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Phone:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "p", 124)(12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Address:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "p", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "p", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const addr_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", addr_r15.first_name, " ", addr_r15.last_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", addr_r15.is_default);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", addr_r15.country_code, " ", addr_r15.phone_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", addr_r15.address_line1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", addr_r15.address_line2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", addr_r15.land_mark, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate3"](" ", addr_r15.city, ", ", addr_r15.state, " - ", addr_r15.pin_code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Address ID: ", addr_r15.address_id, " |");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" User ID: ", addr_r15.user_id, " ");
  }
}
function UsersComponent_div_188_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, UsersComponent_div_188_div_1_Template, 26, 13, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r4.selectedUser == null ? null : ctx_r4.selectedUser.addresses);
  }
}
function UsersComponent_div_189_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " No addresses available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
class UsersComponent {
  constructor(data, paginationService, sidebar, fb, http) {
    this.data = data;
    this.paginationService = paginationService;
    this.sidebar = sidebar;
    this.fb = fb;
    this.http = http;
    this.initChecked = false;
    this.selectedValue1 = '';
    this.selectedValue2 = '';
    this.selectedValue3 = '';
    this.selectedValue4 = '';
    this.selectedValue5 = '';
    this.selectedValue6 = '';
    this.selectedValue7 = '';
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_1__.routes;
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
    this.dataSize = 0;
    this.filterSelectedRoleId = 0;
    this.filterSelectedStatus = 'all';
    this.filterSearchText = '';
    this.savedSearchText = '';
    this.selectedRole = 'User';
    this.selectedRoleId = 0;
    this.userRoles = [];
    this.selectedUser = {};
    this.states = [];
    this.cities = [];
    this.filterSelectedState = 'all';
    this.filterSelectedCity = 'all';
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
      first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern(/^[^\s]*$/)]],
      phone_number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern(/^[+\d]?(?:[\d-.\s()]*)$/)]],
      is_active: [true],
      user_role_id: [6],
      profile_img: [''],
      country_code: ['+91'],
      address_line1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      address_line2: [''],
      country: ['India'],
      land_mark: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      pin_code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      document_file: ['']
    });
    this.userEditForm = this.fb.group({
      is_active: [true],
      remarks: ['']
    });
    this.getTableData();
    this.data.getUserRoles().subscribe(apiRes => {
      this.userRoles = apiRes.data;
    });
    this.loadFilters();
  }
  loadFilters() {
    this.data.getStates().subscribe(data => this.states = data.results);
    this.loadCities();
  }
  loadCities() {
    this.data.getCities(this.filterSelectedState).subscribe(data => {
      this.cities = data.results;
      // Reset city selection when state changes
      this.filterSelectedCity = 'all';
    });
  }
  onStateChange() {
    this.filterSelectedCity = 'all';
    if (this.filterSelectedState === 'all') {
      this.cities = [];
    } else {
      this.loadCities();
    }
    this.filterUsers();
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
      country_code: '+91'
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
      console.log(data);
      this.userEditForm.addControl('first_name', new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data.first_name || '', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required));
      this.userEditForm.addControl('last_name', new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data.last_name || '', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required));
      this.userEditForm.addControl('email', new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data.email || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]));
      this.userEditForm.addControl('country_code', new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data.country_code || ''));
      this.userEditForm.addControl('phone_number', new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data.phone_number || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]));
      if (data.addresses.length > 0) {
        this.userEditForm.addControl('address_line1', new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data.addresses[0].address_line1 || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]));
        this.userEditForm.addControl('address_line2', new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data.addresses[0].address_line2 || ''));
        // console.log(data.land_mark)
        this.userEditForm.addControl('land_mark', new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data.addresses[0].land_mark || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]));
        this.userEditForm.addControl('pin_code', new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data.addresses[0].pin_code || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]));
        this.userEditForm.addControl('city', new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data.addresses[0].city || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]));
        this.userEditForm.addControl('state', new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data.addresses[0].state || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]));
      }
      this.userEditForm.addControl('user_role_id', new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.selectedRoleId, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required));
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
      country_code: '+91'
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
    this.data.getUsers(this.filterSelectedRoleId, this.filterSelectedStatus, this.filterSelectedCity, this.filterSelectedState, this.page, this.savedSearchText).subscribe(apiRes => {
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
      this.dataSize = apiRes.results.pagination.total_items;
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
    const swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().mixin({
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
      } else if (result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().DismissReason).cancel) {
        swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }
  togglePassword(index) {
    this.password[index] = !this.password[index];
  }
  fetchAllPagesFiltered() {
    var _this = this;
    return (0,C_work_git_sakar_nithnode_admin_donation_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let allData = [];
      let page = 1;
      let pageSize = 10;
      let hasMore = true;
      while (hasMore) {
        const res = yield _this.data.getUsers('', 'all', page, '').toPromise();
        allData = allData.concat(res.results.users);
        hasMore = res.results.users.length === pageSize;
        page++;
      }
      const monitorFields = ['user_id', 'profile_img_url', 'first_name', 'last_name', 'country_code', 'phone_number', 'email', 'user_reg_id', 'user_role', 'is_active'];
      const filtered = allData.map(user => {
        const picked = {};
        monitorFields.forEach(field => {
          if (field === 'user_role') {
            picked['role_name'] = user.user_role?.role_name || '';
          } else {
            picked[field] = user[field];
          }
        });
        return picked;
      });
      return filtered;
    })();
  }
  exportAllData() {
    var _this2 = this;
    return (0,C_work_git_sakar_nithnode_admin_donation_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const allData = yield _this2.fetchAllPagesFiltered();
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
      file_saver__WEBPACK_IMPORTED_MODULE_3__.saveAs(blobData, 'users.xlsx');
    })();
  }
  fetchPincodeDetails(pincode, form) {
    var _this3 = this;
    return (0,C_work_git_sakar_nithnode_admin_donation_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!pincode || pincode.length !== 6) return;
      try {
        const response = yield _this3.data.getPincodeDetails(pincode).toPromise();
        if (response) {
          form.patchValue({
            city: response.city,
            state: response.state
          });
        }
      } catch (error) {
        console.error('Error fetching pincode details:', error);
      }
    })();
  }
  onPincodeChange(event) {
    const pincode = event.target.value;
    this.fetchPincodeDetails(pincode, this.userForm);
  }
  onEditPincodeChange(event) {
    const pincode = event.target.value;
    this.fetchPincodeDetails(pincode, this.userEditForm);
  }
  static {
    this.ɵfac = function UsersComponent_Factory(t) {
      return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_4__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_5__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_4__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: UsersComponent,
      selectors: [["app-users"]],
      decls: 190,
      vars: 67,
      consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Excel", "matTooltipPosition", "above", 3, "click"], ["src", "assets/img/icons/excel.svg", "alt", "img"], [1, "page-btn"], [1, "dropdown"], ["type", "button", "id", "addUserDropdown", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-added", "dropdown-toggle"], [1, "feather", "icon-plus-circle", "me-2"], ["aria-labelledby", "addUserDropdown", 1, "dropdown-menu"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-units", 1, "dropdown-item", 3, "click"], [1, "card", "table-list-card"], [1, "card-body"], [1, "table-top"], [1, "justify-content-between", "align-items-center", "w-100", "d-flex"], [2, "display", "flex", "align-items", "flex-end"], [3, "ngModelChange", "selectionChange", "ngModel"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "ml-4"], [3, "ngModelChange", "selectionChange", "ngModel", "disabled"], [1, "search-set", "ml-4"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset", 3, "click"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["placeholder", "Search...", 1, "form-control", 3, "ngModelChange", "keydown.enter", "ngModel"], ["class", "btn btn-clear", 3, "click", 4, "ngIf"], [1, "table-responsive"], ["matSort", "", 1, "table", "datanew"], ["mat-sort-header", "userName"], ["mat-sort-header", "phone"], ["mat-sort-header", "email"], ["mat-sort-header", "role"], ["mat-sort-header", "status"], [1, "no-sort"], [3, "pageChange", "pagination"], ["id", "add-units", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "custom-modal-two"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header", "border-0", "custom-modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body"], [3, "ngSubmit", "formGroup"], [1, "row"], ["class", "col-lg-12", 4, "ngIf"], ["class", "col-lg-6", 4, "ngIf"], [1, "col-lg-6"], [1, "input-blocks"], [1, "form-label"], ["type", "text", "value", "India", "disabled", "", 1, "form-control"], ["class", "input-blocks mb-0", 4, "ngIf"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit", 3, "disabled"], ["id", "edit-units", 1, "modal", "fade"], [1, "mt-2"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], [1, "status-label"], ["type", "checkbox", "id", "user3", "formControlName", "is_active", 1, "check"], ["for", "user3", 1, "checktoggle"], [4, "ngIf"], ["id", "details-units", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "custom-modal-one"], ["class", "row", 4, "ngIf"], ["class", "text-center text-muted mt-4", 4, "ngIf"], [1, "btn", "btn-clear", 3, "click"], ["colspan", "6", 1, "text-center", "text-muted"], [1, "userimgname"], ["href", "javascript:void(0);", 1, "userslist-img", "bg-img", 2, "overflow", "hidden"], ["alt", "product", "width", "100px", "height", "100px", 1, "rounded", 3, "src"], ["href", "javascript:void(0);"], [1, "badge", 3, "ngClass"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-target", "#details-units", "data-bs-toggle", "modal", 1, "me-2", "p-2", "mb-0", 3, "click"], [1, "feather", "icon-eye", "action-eye"], ["data-bs-toggle", "modal", "data-bs-target", "#edit-units", 1, "me-2", "p-2", "mb-0", 3, "click"], [1, "feather", "icon-edit", "feather-edit"], [1, "col-lg-12"], [1, "new-employee-field"], [1, "profile-pic-upload", "mb-2"], [1, "profile-pic"], [1, "input-blocks", "mb-0"], [1, "image-upload", "mb-0"], ["type", "file", "accept", "image/*", 3, "change"], [1, "image-uploads"], ["alt", "Preview", 2, "max-width", "100px", "margin-top", "10px", 3, "src"], ["type", "text", "formControlName", "first_name", 1, "form-control"], [1, "text-danger"], ["type", "text", "formControlName", "last_name", 1, "form-control"], ["type", "text", "formControlName", "email", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], [1, "pass-group"], ["formControlName", "password", 1, "form-control", 3, "type"], [1, "fas", "toggle-password", 3, "click", "ngClass"], ["id", "country_code", "type", "text", "value", "+91", "disabled", "", 1, "form-control"], ["id", "phone_number", "formControlName", "phone_number", "type", "text", "required", "", 1, "form-control"], ["id", "address_line_1", "formControlName", "address_line1", "type", "text", "required", "", 1, "form-control"], ["id", "address_line_2", "formControlName", "address_line2", "type", "text", 1, "form-control"], ["id", "landmark", "formControlName", "land_mark", "type", "text", 1, "form-control"], ["id", "pin_code", "formControlName", "pin_code", "type", "text", "required", "", 1, "form-control", 3, "input"], ["id", "city", "formControlName", "city", "type", "text", "required", "", "readonly", "", 1, "form-control"], ["id", "state", "formControlName", "state", "type", "text", "required", "", "readonly", "", 1, "form-control"], ["type", "file", "accept", "image/*,.pdf", 3, "change"], ["class", "mt-2", 4, "ngIf"], ["type", "text", "class", "form-control", "formControlName", "first_name", 4, "ngIf"], ["type", "text", "class", "form-control", "formControlName", "last_name", 4, "ngIf"], ["type", "text", "class", "form-control", "formControlName", "email", 3, "disabled", 4, "ngIf"], ["type", "text", "formControlName", "email", 1, "form-control", 3, "disabled"], ["class", "input-blocks", 4, "ngIf"], ["formControlName", "user_role_id", 1, "form-control"], [1, "status-toggle", "modal-status", "justify-content-between", "align-items-center"], ["id", "remarks", "formControlName", "remarks", "type", "remarks", 1, "form-control"], ["class", "col-md-6 col-lg-6 mb-4", 4, "ngFor", "ngForOf"], [1, "col-md-6", "col-lg-6", "mb-4"], [1, "card", "shadow-sm"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "card-title", "mb-0"], ["class", "badge bg-primary", 4, "ngIf"], [1, "mb-1"], [1, "mb-1", "ms-3"], [1, "text-muted", "small", "mt-2", "mb-0"], [1, "badge", "bg-primary"], [1, "text-center", "text-muted", "mt-4"]],
      template: function UsersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "User List");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Manage Your Users");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "ul", 3)(8, "li")(9, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UsersComponent_Template_a_click_9_listener() {
            return ctx.exportAllData();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 6)(12, "div", 7)(13, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " Add New User ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "ul", 10)(17, "li")(18, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UsersComponent_Template_a_click_18_listener() {
            return ctx.onRoleSelect("Platform Admin");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, " Add Platform Admin ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "li")(21, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UsersComponent_Template_a_click_21_listener() {
            return ctx.onRoleSelect("Warehouse Admin");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, " Add Warehouse Admin ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "li")(24, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UsersComponent_Template_a_click_24_listener() {
            return ctx.onRoleSelect("Support Staff");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, " Add Support Staff ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 12)(27, "div", 13)(28, "div", 14)(29, "div", 15)(30, "div", 16)(31, "div")(32, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "Filter by Role");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "mat-select", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function UsersComponent_Template_mat_select_ngModelChange_34_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.filterSelectedRoleId, $event) || (ctx.filterSelectedRoleId = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function UsersComponent_Template_mat_select_selectionChange_34_listener() {
            return ctx.filterUsers();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "mat-option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "All");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, UsersComponent_mat_option_37_Template, 2, 2, "mat-option", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 20)(39, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "Filter by Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "mat-select", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function UsersComponent_Template_mat_select_ngModelChange_41_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.filterSelectedStatus, $event) || (ctx.filterSelectedStatus = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function UsersComponent_Template_mat_select_selectionChange_41_listener() {
            return ctx.filterUsers();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "mat-option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "All");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "mat-option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "Active");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "mat-option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "Inactive");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div", 20)(49, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, "Filter by State");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "mat-select", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function UsersComponent_Template_mat_select_ngModelChange_51_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.filterSelectedState, $event) || (ctx.filterSelectedState = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function UsersComponent_Template_mat_select_selectionChange_51_listener() {
            return ctx.onStateChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "mat-option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "All");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](54, UsersComponent_mat_option_54_Template, 2, 2, "mat-option", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "div", 20)(56, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "Filter by City");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "mat-select", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function UsersComponent_Template_mat_select_ngModelChange_58_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.filterSelectedCity, $event) || (ctx.filterSelectedCity = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function UsersComponent_Template_mat_select_selectionChange_58_listener() {
            return ctx.filterUsers();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "mat-option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60, "All");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](61, UsersComponent_mat_option_61_Template, 2, 2, "mat-option", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "div", 22)(63, "div", 23)(64, "a", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UsersComponent_Template_a_click_64_listener() {
            return ctx.onSearchClick();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](65, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "div", 26)(67, "label")(68, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function UsersComponent_Template_input_ngModelChange_68_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.filterSearchText, $event) || (ctx.filterSearchText = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keydown.enter", function UsersComponent_Template_input_keydown_enter_68_listener() {
            return ctx.onSearchClick();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](69, UsersComponent_button_69_Template, 2, 1, "button", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](71);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "div", 29)(73, "table", 30)(74, "thead")(75, "tr")(76, "th", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](77, "Profile Image");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "th", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](79, "Display Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "th", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](81, "Contact");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "th", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](83, "Email Id");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "th", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](85, "Role");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](86, "th", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](87, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "th", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](89, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](91, UsersComponent_Conditional_91_Template, 3, 0, "tr");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterCreate"](92, UsersComponent_For_93_Template, 24, 11, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](94, "app-custom-pagination", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("pageChange", function UsersComponent_Template_app_custom_pagination_pageChange_94_listener($event) {
            return ctx.onPageChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "div", 38)(96, "div", 39)(97, "div", 40)(98, "div", 41)(99, "div", 42)(100, "div", 43)(101, "div", 2)(102, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](103);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](104, "button", 44)(105, "span", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](106, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](107, "div", 46)(108, "form", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function UsersComponent_Template_form_ngSubmit_108_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](109, "div", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](110, UsersComponent_div_110_Template, 13, 1, "div", 49)(111, UsersComponent_div_111_Template, 6, 1, "div", 50)(112, UsersComponent_div_112_Template, 6, 1, "div", 50)(113, UsersComponent_div_113_Template, 6, 1, "div", 50)(114, UsersComponent_div_114_Template, 8, 3, "div", 50)(115, UsersComponent_div_115_Template, 5, 0, "div", 50)(116, UsersComponent_div_116_Template, 6, 1, "div", 50)(117, UsersComponent_div_117_Template, 6, 1, "div", 49)(118, UsersComponent_div_118_Template, 6, 1, "div", 49)(119, UsersComponent_div_119_Template, 6, 1, "div", 49)(120, UsersComponent_div_120_Template, 6, 1, "div", 50)(121, UsersComponent_div_121_Template, 6, 1, "div", 50)(122, UsersComponent_div_122_Template, 6, 1, "div", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](123, "div", 51)(124, "div", 52)(125, "label", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](126, "Country");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](127, "input", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](128, UsersComponent_div_128_Template, 7, 1, "div", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](129, "div", 56)(130, "button", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](131, " Cancel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](132, "button", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](133, " Submit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](134, "div", 59)(135, "div", 39)(136, "div", 40)(137, "div", 41)(138, "div", 42)(139, "div", 43)(140, "div", 2)(141, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](142, "Edit User");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](143, "button", 44)(144, "span", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](145, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](146, "div", 46)(147, "form", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function UsersComponent_Template_form_ngSubmit_147_listener() {
            return ctx.onUpdate();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](148, "div", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](149, UsersComponent_div_149_Template, 13, 1, "div", 49)(150, UsersComponent_div_150_Template, 6, 2, "div", 50)(151, UsersComponent_div_151_Template, 6, 2, "div", 50)(152, UsersComponent_div_152_Template, 6, 2, "div", 50)(153, UsersComponent_div_153_Template, 2, 1, "div", 50)(154, UsersComponent_div_154_Template, 6, 1, "div", 50)(155, UsersComponent_div_155_Template, 6, 1, "div", 50)(156, UsersComponent_div_156_Template, 6, 1, "div", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](157, "div", 51)(158, "div", 52)(159, "label", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](160, "Country");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](161, "input", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](162, "div", 60)(163, "div", 61)(164, "span", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](165, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](166, "input", 63)(167, "label", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](168, "div", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](169, UsersComponent_div_169_Template, 5, 0, "div", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](170, "div", 56)(171, "button", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](172, " Cancel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](173, "button", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](174, " Submit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](175, "div", 66)(176, "div", 67)(177, "div", 40)(178, "div", 41)(179, "div", 42)(180, "div", 43)(181, "div", 2)(182, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](183, "User Address Details");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](184, "button", 44)(185, "span", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](186, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](187, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](188, UsersComponent_div_188_Template, 2, 1, "div", 68)(189, UsersComponent_div_189_Template, 2, 0, "div", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          let tmp_46_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.filterSelectedRoleId);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.userRoles);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.filterSelectedStatus);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", "all");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.filterSelectedState);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", "all");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.states);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.filterSelectedCity);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.filterSelectedState === "all");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", "all");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.cities);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.filterSearchText);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.savedSearchText);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Total Users: ", ctx.dataSize, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](91, (ctx.tableData == null ? null : ctx.tableData.length) === 0 ? 91 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeater"](ctx.tableData);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pagination", ctx.pagination);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Add ", ctx.selectedRole, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.userForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](49, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](50, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](51, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](52, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](53, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](54, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](55, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](56, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](57, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](58, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](59, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](60, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](61, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](62, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.userForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.userEditForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](63, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.userEditForm.get("first_name"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.userEditForm.get("last_name"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.userEditForm.get("email"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.userEditForm.get("user_role_id"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](64, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](65, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](66, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_46_0 = ctx.userEditForm.get("is_active")) == null ? null : tmp_46_0.value) !== ctx.selectedUser.is_active);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.userEditForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.selectedUser == null ? null : ctx.selectedUser.addresses == null ? null : ctx.selectedUser.addresses.length) > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.selectedUser == null ? null : ctx.selectedUser.addresses == null ? null : ctx.selectedUser.addresses.length) === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSortHeader, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_6__.CustomPaginationComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName],
      styles: [".mat-mdc-select-disabled .mat-mdc-select-value {\n  color: #e5e5e5 !important;\n}\n  .mat-mdc-select-disabled .mat-mdc-select-arrow {\n  color: #e5e5e5 !important;\n}\n  .mat-mdc-form-field-disabled .mat-mdc-form-field-label {\n  color: #e5e5e5 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS1jb21wb25lbnQvdXNlci1tYW5hZ2VtZW50L3VzZXJzL3VzZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UseUJBQUE7QUFETjtBQUdJO0VBQ0UseUJBQUE7QUFETjtBQU1JO0VBQ0UseUJBQUE7QUFKTiIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XHJcbiAgLm1hdC1tZGMtc2VsZWN0LWRpc2FibGVkIHtcclxuICAgIC5tYXQtbWRjLXNlbGVjdC12YWx1ZSB7XHJcbiAgICAgIGNvbG9yOiAjZTVlNWU1ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubWF0LW1kYy1zZWxlY3QtYXJyb3cge1xyXG4gICAgICBjb2xvcjogI2U1ZTVlNSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAubWF0LW1kYy1mb3JtLWZpZWxkLWRpc2FibGVkIHtcclxuICAgIC5tYXQtbWRjLWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgICBjb2xvcjogI2U1ZTVlNSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_user-management_user-management_module_ts.js.map