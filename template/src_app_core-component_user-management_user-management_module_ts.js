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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 22047);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/custom-pagination/custom-pagination.component */ 14860);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);

















const _c0 = () => ["Platform Admin", "Warehouse Admin", "Support Staff"];
const _c1 = (a0, a1) => ({
  "badge-linesuccess": a0,
  "badge-linedanger": a1
});
function UsersComponent_mat_option_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 17);
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
function UsersComponent_button_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UsersComponent_button_54_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.clearSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Searched Query: ", ctx_r2.savedSearchText, " \u2716 ");
  }
}
function UsersComponent_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "No data found");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_For_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 71)(3, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "a", 74);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "td")(14, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "td", 76)(17, "div", 77)(18, "a", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UsersComponent_For_74_Template_a_click_18_listener() {
      const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.viewUser(data_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UsersComponent_For_74_Template_a_click_20_listener() {
      const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.editUser(data_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", data_r5.profile_img_url || "assets/img/avatar/avatar-2.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", data_r5.first_name, " ", data_r5.last_name || "N/A", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r5.email || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((data_r5.user_role == null ? null : data_r5.user_role.role_name) || "No Role Assigned");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](7, _c1, data_r5.is_active === true, data_r5.is_active === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", data_r5.is_active ? "Active" : "Inactive", " ");
  }
}
function UsersComponent_div_91_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r2.profileImageBase64, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function UsersComponent_div_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 82)(1, "div", 83)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 84)(5, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, UsersComponent_div_91_div_6_Template, 2, 1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 86)(8, "div", 87)(9, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function UsersComponent_div_91_Template_input_change_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 89)(11, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Add Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.profileImageBase64);
  }
}
function UsersComponent_div_92_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "small", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "First name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 49)(1, "div", 50)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, UsersComponent_div_92_div_5_Template, 3, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r2.userForm.get("first_name")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r2.userForm.get("first_name")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_93_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "small", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Last name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 49)(1, "div", 50)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, UsersComponent_div_93_div_5_Template, 3, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r2.userForm.get("last_name")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r2.userForm.get("last_name")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_94_div_5_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Email is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function UsersComponent_div_94_div_5_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Enter a valid email. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function UsersComponent_div_94_div_5_small_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " This email is already in use. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function UsersComponent_div_94_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, UsersComponent_div_94_div_5_small_1_Template, 2, 0, "small", 95)(2, UsersComponent_div_94_div_5_small_2_Template, 2, 0, "small", 95)(3, UsersComponent_div_94_div_5_small_3_Template, 2, 0, "small", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r2.userForm.get("email")) == null ? null : tmp_2_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r2.userForm.get("email")) == null ? null : tmp_3_0.hasError("email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx_r2.userForm.get("email")) == null ? null : tmp_4_0.hasError("emailExists"));
  }
}
function UsersComponent_div_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 49)(1, "div", 50)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, UsersComponent_div_94_div_5_Template, 4, 3, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r2.userForm.get("email")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r2.userForm.get("email")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_95_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "small", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Enter a valid password.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 49)(1, "div", 50)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, UsersComponent_div_95_div_5_Template, 3, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r2.userForm.get("password")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r2.userForm.get("password")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 49)(1, "div", 50)(2, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Country Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_97_div_5_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Phone number is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function UsersComponent_div_97_div_5_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Enter a valid phone number. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function UsersComponent_div_97_div_5_small_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " This phone number is already in use. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function UsersComponent_div_97_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, UsersComponent_div_97_div_5_small_1_Template, 2, 0, "small", 95)(2, UsersComponent_div_97_div_5_small_2_Template, 2, 0, "small", 95)(3, UsersComponent_div_97_div_5_small_3_Template, 2, 0, "small", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r2.userForm.get("phone_number")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r2.userForm.get("phone_number")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx_r2.userForm.get("phone_number")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["phoneNumberExists"]);
  }
}
function UsersComponent_div_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 49)(1, "div", 50)(2, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, UsersComponent_div_97_div_5_Template, 4, 3, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r2.userForm.get("phone_number")) == null ? null : tmp_1_0.touched) && ((tmp_1_0 = ctx_r2.userForm.get("phone_number")) == null ? null : tmp_1_0.invalid));
  }
}
function UsersComponent_div_98_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "small", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Enter a valid address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_98_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 82)(1, "div", 50)(2, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Address Line 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, UsersComponent_div_98_div_5_Template, 3, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r2.userForm.get("address_line1")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r2.userForm.get("address_line1")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_99_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "small", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Enter a valid address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 82)(1, "div", 50)(2, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Address Line 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, UsersComponent_div_99_div_5_Template, 3, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r2.userForm.get("address_line2")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r2.userForm.get("address_line2")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_100_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "small", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Enter a valid landmark.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 82)(1, "div", 50)(2, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Landmark");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, UsersComponent_div_100_div_5_Template, 3, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r2.userForm.get("land_mark")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r2.userForm.get("land_mark")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_106_div_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "small", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Enter a valid state.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_106_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 49)(1, "div", 50)(2, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "select", 102)(5, "option", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Select State");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "option", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Andhra Pradesh");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "option", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " Arunachal Pradesh ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Assam");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "option", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Bihar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "option", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Chhattisgarh");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "option", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Goa");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "option", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Gujarat");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "option", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Haryana");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "option", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Himachal Pradesh");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "option", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Jharkhand");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "option", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Karnataka");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "option", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "Kerala");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "option", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "Madhya Pradesh");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "option", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "Maharashtra");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "option", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "Manipur");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "option", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "Meghalaya");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "option", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "Mizoram");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "option", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "Nagaland");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "option", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "Odisha");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "option", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "Punjab");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "option", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, "Rajasthan");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "option", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, "Sikkim");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "option", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, "Tamil Nadu");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "option", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54, "Telangana");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "option", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56, "Tripura");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "option", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, "Uttar Pradesh");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "option", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60, "Uttarakhand");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "option", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, "West Bengal");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "option", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64, " Andaman and Nicobar Islands ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "option", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66, "Chandigarh");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "option", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68, " Dadra and Nagar Haveli and Daman and Diu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "option", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](70, "Lakshadweep");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "option", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](72, "Delhi");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "option", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](74, "Puducherry");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "option", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](76, "Ladakh");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "option", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](78, " Jammu and Kashmir ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](79, UsersComponent_div_106_div_79_Template, 3, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r2.userForm.get("state")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r2.userForm.get("state")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_107_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "small", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Enter a valid city.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_107_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 49)(1, "div", 50)(2, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, UsersComponent_div_107_div_5_Template, 3, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r2.userForm.get("city")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r2.userForm.get("city")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_108_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "small", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Enter a valid pin code.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 49)(1, "div", 50)(2, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Pin Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, UsersComponent_div_108_div_5_Template, 3, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r2.userForm.get("pin_code")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r2.userForm.get("pin_code")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_109_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 59)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Selected File:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.selectedkycFileName, " ");
  }
}
function UsersComponent_div_109_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 86)(1, "div", 87)(2, "input", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function UsersComponent_div_109_Template_input_change_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.onDocSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 89)(4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Add Document");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, UsersComponent_div_109_div_6_Template, 4, 1, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.selectedkycFileName);
  }
}
function UsersComponent_div_130_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r2.profileImageBase64, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function UsersComponent_div_130_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 82)(1, "div", 83)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 84)(5, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, UsersComponent_div_130_div_6_Template, 2, 1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 86)(8, "div", 87)(9, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function UsersComponent_div_130_Template_input_change_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 89)(11, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Change Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.profileImageBase64);
  }
}
function UsersComponent_div_131_input_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "input", 91);
  }
}
function UsersComponent_div_131_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "small", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "First name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_131_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 49)(1, "div", 50)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, UsersComponent_div_131_input_4_Template, 1, 0, "input", 144)(5, UsersComponent_div_131_div_5_Template, 3, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.userEditForm.get("first_name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r2.userEditForm.get("first_name")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r2.userEditForm.get("first_name")) == null ? null : tmp_2_0.touched));
  }
}
function UsersComponent_div_132_input_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "input", 93);
  }
}
function UsersComponent_div_132_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "small", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Last name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_132_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 49)(1, "div", 50)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, UsersComponent_div_132_input_4_Template, 1, 0, "input", 145)(5, UsersComponent_div_132_div_5_Template, 3, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.userEditForm.get("last_name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r2.userEditForm.get("last_name")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r2.userEditForm.get("last_name")) == null ? null : tmp_2_0.touched));
  }
}
function UsersComponent_div_133_input_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "input", 147);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", true);
  }
}
function UsersComponent_div_133_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "small", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Enter a valid email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_133_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 49)(1, "div", 50)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, UsersComponent_div_133_input_4_Template, 1, 1, "input", 146)(5, UsersComponent_div_133_div_5_Template, 3, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.userEditForm.get("email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r2.userEditForm.get("email")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r2.userEditForm.get("email")) == null ? null : tmp_2_0.touched));
  }
}
function UsersComponent_div_134_div_1_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const role_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", role_r9.role_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", role_r9.role_name, " ");
  }
}
function UsersComponent_div_134_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 50)(1, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "User Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "select", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, UsersComponent_div_134_div_1_option_4_Template, 2, 2, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.allowedRoles);
  }
}
function UsersComponent_div_134_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, UsersComponent_div_134_div_1_Template, 5, 1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.userEditForm.get("user_role_id"));
  }
}
function UsersComponent_div_135_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 49)(1, "div", 50)(2, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Country Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_136_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "small", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Enter a valid phone number.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_136_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 49)(1, "div", 50)(2, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, UsersComponent_div_136_div_5_Template, 3, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r2.userForm.get("phone_number")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r2.userForm.get("phone_number")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_137_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "small", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Enter a valid address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_137_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 82)(1, "div", 50)(2, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Address Line 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, UsersComponent_div_137_div_5_Template, 3, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r2.userForm.get("address_line1")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r2.userForm.get("address_line1")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_138_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "small", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Enter a valid address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_138_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 82)(1, "div", 50)(2, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Address Line 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, UsersComponent_div_138_div_5_Template, 3, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r2.userForm.get("address_line2")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r2.userForm.get("address_line2")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_139_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "small", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Enter a valid landmark.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_139_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 82)(1, "div", 50)(2, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Landmark");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, UsersComponent_div_139_div_5_Template, 3, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r2.userForm.get("land_mark")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r2.userForm.get("land_mark")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_141_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 50)(1, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function UsersComponent_div_142_div_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "small", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Enter a valid state.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_142_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 49)(1, "div", 50)(2, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "select", 102)(5, "option", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Select State");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "option", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Andhra Pradesh");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "option", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " Arunachal Pradesh ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Assam");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "option", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Bihar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "option", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Chhattisgarh");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "option", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Goa");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "option", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Gujarat");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "option", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Haryana");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "option", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Himachal Pradesh");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "option", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Jharkhand");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "option", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Karnataka");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "option", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "Kerala");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "option", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "Madhya Pradesh");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "option", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "Maharashtra");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "option", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "Manipur");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "option", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "Meghalaya");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "option", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "Mizoram");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "option", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "Nagaland");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "option", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "Odisha");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "option", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "Punjab");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "option", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, "Rajasthan");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "option", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, "Sikkim");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "option", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, "Tamil Nadu");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "option", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54, "Telangana");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "option", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56, "Tripura");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "option", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, "Uttar Pradesh");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "option", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60, "Uttarakhand");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "option", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, "West Bengal");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "option", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64, " Andaman and Nicobar Islands ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "option", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66, "Chandigarh");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "option", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68, " Dadra and Nagar Haveli and Daman and Diu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "option", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](70, "Lakshadweep");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "option", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](72, "Delhi");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "option", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](74, "Puducherry");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "option", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](76, "Ladakh");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "option", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](78, " Jammu and Kashmir ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](79, UsersComponent_div_142_div_79_Template, 3, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r2.userForm.get("state")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r2.userForm.get("state")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_143_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "small", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Enter a valid city.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_143_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 49)(1, "div", 50)(2, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, UsersComponent_div_143_div_5_Template, 3, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r2.userForm.get("city")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r2.userForm.get("city")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_144_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "small", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Enter a valid pin code.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_144_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 49)(1, "div", 50)(2, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Pin Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, UsersComponent_div_144_div_5_Template, 3, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r2.userForm.get("pin_code")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r2.userForm.get("pin_code")) == null ? null : tmp_1_0.touched));
  }
}
function UsersComponent_div_152_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 149)(2, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Remark");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function UsersComponent_div_168_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Default");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function UsersComponent_div_168_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 152)(1, "div", 153)(2, "div", 13)(3, "div", 154)(4, "h5", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, UsersComponent_div_168_div_1_span_6_Template, 2, 0, "span", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "p", 157)(8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Phone:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "p", 157)(12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Address:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "p", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "p", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const addr_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", addr_r10.first_name, " ", addr_r10.last_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", addr_r10.is_default);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" +", addr_r10.country_code, " ", addr_r10.phone_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", addr_r10.address_line1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", addr_r10.address_line2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", addr_r10.land_mark, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate3"](" ", addr_r10.city, ", ", addr_r10.state, " - ", addr_r10.pin_code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Address ID: ", addr_r10.address_id, " |");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" User ID: ", addr_r10.user_id, " ");
  }
}
function UsersComponent_div_168_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, UsersComponent_div_168_div_1_Template, 26, 13, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.selectedUser == null ? null : ctx_r2.selectedUser.addresses);
  }
}
function UsersComponent_div_169_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " No addresses available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
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
      first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      phone_number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern(/^[+\d]?(?:[\d-.\s()]*)$/)]],
      is_active: [true],
      user_role_id: [6],
      profile_img: [''],
      country_code: ["+91"],
      address_line1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      address_line2: [""],
      country: ["India"],
      land_mark: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      pin_code: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      city: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      state: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
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
      this.userEditForm.addControl('first_name', new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data.first_name || '', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required));
      this.userEditForm.addControl('last_name', new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data.last_name || '', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required));
      this.userEditForm.addControl('email', new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data.email || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]));
      this.userEditForm.addControl('country_code', new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data.country_code || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]));
      this.userEditForm.addControl('phone_number', new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data.phone_number || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]));
      this.userEditForm.addControl('address_line1', new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data.addresses[0].address_line1 || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]));
      this.userEditForm.addControl('address_line2', new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data.addresses[0].address_line2 || ''));
      // console.log(data.land_mark)
      this.userEditForm.addControl('land_mark', new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data.addresses[0].land_mark || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]));
      this.userEditForm.addControl('pin_code', new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data.addresses[0].pin_code || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]));
      this.userEditForm.addControl('city', new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data.addresses[0].city || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]));
      this.userEditForm.addControl('state', new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(data.addresses[0].state || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]));
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
  static {
    this.ɵfac = function UsersComponent_Factory(t) {
      return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_4__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_5__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_4__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: UsersComponent,
      selectors: [["app-users"]],
      decls: 170,
      vars: 71,
      consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Excel", "matTooltipPosition", "above", 3, "click"], ["src", "assets/img/icons/excel.svg", "alt", "img"], [1, "page-btn"], [1, "dropdown"], ["type", "button", "id", "addUserDropdown", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-added", "dropdown-toggle"], [1, "feather", "icon-plus-circle", "me-2"], ["aria-labelledby", "addUserDropdown", 1, "dropdown-menu"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-units", 1, "dropdown-item", 3, "click"], [1, "card", "table-list-card"], [1, "card-body"], [1, "table-top"], [2, "display", "flex", "align-items", "flex-end"], [3, "ngModelChange", "selectionChange", "ngModel"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "ml-4"], [1, "search-set", "ml-4"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset", 3, "click"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["placeholder", "Search...", 1, "form-control", 3, "ngModelChange", "keydown.enter", "ngModel"], ["class", "btn btn-clear", 3, "click", 4, "ngIf"], [1, "table-responsive"], ["matSort", "", 1, "table", "datanew"], ["mat-sort-header", "userName"], ["mat-sort-header", "phone"], ["mat-sort-header", "email"], ["mat-sort-header", "role"], ["mat-sort-header", "status"], [1, "no-sort"], [3, "pageChange", "pagination"], ["id", "add-units", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "custom-modal-two"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header", "border-0", "custom-modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body"], [3, "ngSubmit", "formGroup"], [1, "row"], ["class", "col-lg-12", 4, "ngIf"], ["class", "col-lg-6", 4, "ngIf"], [1, "col-lg-6"], [1, "input-blocks"], [1, "form-label"], ["type", "text", "value", "India", "disabled", "", 1, "form-control"], ["class", "input-blocks mb-0", 4, "ngIf"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit", 3, "disabled"], ["id", "edit-units", 1, "modal", "fade"], ["class", "input-blocks", 4, "ngIf"], [1, "mt-2"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], [1, "status-label"], ["type", "checkbox", "id", "user3", "formControlName", "is_active", 1, "check"], ["for", "user3", 1, "checktoggle"], [4, "ngIf"], ["id", "details-units", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "custom-modal-one"], ["class", "row", 4, "ngIf"], ["class", "text-center text-muted mt-4", 4, "ngIf"], [1, "btn", "btn-clear", 3, "click"], ["colspan", "6", 1, "text-center", "text-muted"], [1, "userimgname"], ["href", "javascript:void(0);", 1, "userslist-img", "bg-img"], ["alt", "product", "width", "100px", "height", "100px", 1, "rounded", 3, "src"], ["href", "javascript:void(0);"], [1, "badge", 3, "ngClass"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-target", "#details-units", "data-bs-toggle", "modal", 1, "me-2", "p-2", "mb-0", 3, "click"], [1, "feather", "icon-eye", "action-eye"], ["data-bs-toggle", "modal", "data-bs-target", "#edit-units", 1, "me-2", "p-2", "mb-0", 3, "click"], [1, "feather", "icon-edit", "feather-edit"], [1, "col-lg-12"], [1, "new-employee-field"], [1, "profile-pic-upload", "mb-2"], [1, "profile-pic"], [1, "input-blocks", "mb-0"], [1, "image-upload", "mb-0"], ["type", "file", "accept", "image/*", 3, "change"], [1, "image-uploads"], ["alt", "Preview", 2, "max-width", "100px", "margin-top", "10px", 3, "src"], ["type", "text", "formControlName", "first_name", 1, "form-control"], [1, "text-danger"], ["type", "text", "formControlName", "last_name", 1, "form-control"], ["type", "text", "formControlName", "email", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["type", "text", "formControlName", "password", 1, "form-control"], ["id", "country_code", "type", "text", "value", "+91", "disabled", "", 1, "form-control"], ["id", "phone_number", "formControlName", "phone_number", "type", "text", "required", "", 1, "form-control"], ["id", "address_line_1", "formControlName", "address_line1", "type", "text", "required", "", 1, "form-control"], ["id", "address_line_2", "formControlName", "address_line2", "type", "text", 1, "form-control"], ["id", "landmark", "formControlName", "land_mark", "type", "text", 1, "form-control"], ["id", "state", "formControlName", "state", "required", "", 1, "form-control"], ["value", "", "disabled", "", "selected", ""], ["value", "Andhra Pradesh"], ["value", "Arunachal Pradesh"], ["value", "Assam"], ["value", "Bihar"], ["value", "Chhattisgarh"], ["value", "Goa"], ["value", "Gujarat"], ["value", "Haryana"], ["value", "Himachal Pradesh"], ["value", "Jharkhand"], ["value", "Karnataka"], ["value", "Kerala"], ["value", "Madhya Pradesh"], ["value", "Maharashtra"], ["value", "Manipur"], ["value", "Meghalaya"], ["value", "Mizoram"], ["value", "Nagaland"], ["value", "Odisha"], ["value", "Punjab"], ["value", "Rajasthan"], ["value", "Sikkim"], ["value", "Tamil Nadu"], ["value", "Telangana"], ["value", "Tripura"], ["value", "Uttar Pradesh"], ["value", "Uttarakhand"], ["value", "West Bengal"], ["value", "Andaman and Nicobar Islands"], ["value", "Chandigarh"], ["value", "Dadra and Nagar Haveli and Daman and Diu"], ["value", "Lakshadweep"], ["value", "Delhi"], ["value", "Puducherry"], ["value", "Ladakh"], ["value", "Jammu and Kashmir"], ["id", "city", "formControlName", "city", "type", "text", "required", "", 1, "form-control"], ["id", "pin_code", "formControlName", "pin_code", "type", "text", "required", "", 1, "form-control"], ["type", "file", "accept", "image/*,.pdf", 3, "change"], ["class", "mt-2", 4, "ngIf"], ["type", "text", "class", "form-control", "formControlName", "first_name", 4, "ngIf"], ["type", "text", "class", "form-control", "formControlName", "last_name", 4, "ngIf"], ["type", "text", "class", "form-control", "formControlName", "email", 3, "disabled", 4, "ngIf"], ["type", "text", "formControlName", "email", 1, "form-control", 3, "disabled"], ["formControlName", "user_role_id", 1, "form-control"], [1, "status-toggle", "modal-status", "justify-content-between", "align-items-center"], ["id", "remarks", "formControlName", "remarks", "type", "remarks", 1, "form-control"], ["class", "col-md-6 col-lg-6 mb-4", 4, "ngFor", "ngForOf"], [1, "col-md-6", "col-lg-6", "mb-4"], [1, "card", "shadow-sm"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "card-title", "mb-0"], ["class", "badge bg-primary", 4, "ngIf"], [1, "mb-1"], [1, "mb-1", "ms-3"], [1, "text-muted", "small", "mt-2", "mb-0"], [1, "badge", "bg-primary"], [1, "text-center", "text-muted", "mt-4"]],
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
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 12)(27, "div", 13)(28, "div", 14)(29, "div", 15)(30, "div")(31, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "Filter by Role");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "mat-select", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function UsersComponent_Template_mat_select_ngModelChange_33_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.filterSelectedRoleId, $event) || (ctx.filterSelectedRoleId = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function UsersComponent_Template_mat_select_selectionChange_33_listener() {
            return ctx.filterUsers();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "mat-option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "All");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, UsersComponent_mat_option_36_Template, 2, 2, "mat-option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 19)(38, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "Filter by Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "mat-select", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function UsersComponent_Template_mat_select_ngModelChange_40_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.filterSelectedStatus, $event) || (ctx.filterSelectedStatus = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function UsersComponent_Template_mat_select_selectionChange_40_listener() {
            return ctx.filterUsers();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "mat-option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "All");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "mat-option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "Active");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "mat-option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "Inactive");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 20)(48, "div", 21)(49, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UsersComponent_Template_a_click_49_listener() {
            return ctx.onSearchClick();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](50, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 24)(52, "label")(53, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function UsersComponent_Template_input_ngModelChange_53_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.filterSearchText, $event) || (ctx.filterSearchText = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keydown.enter", function UsersComponent_Template_input_keydown_enter_53_listener() {
            return ctx.onSearchClick();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](54, UsersComponent_button_54_Template, 2, 1, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "div", 27)(56, "table", 28)(57, "thead")(58, "tr")(59, "th", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60, "Profile Image");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "th", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, "Display Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "th", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64, "Contact");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "th", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66, "Role");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "th", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "th", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](70, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](72, UsersComponent_Conditional_72_Template, 3, 0, "tr");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterCreate"](73, UsersComponent_For_74_Template, 22, 10, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "app-custom-pagination", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("pageChange", function UsersComponent_Template_app_custom_pagination_pageChange_75_listener($event) {
            return ctx.onPageChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "div", 36)(77, "div", 37)(78, "div", 38)(79, "div", 39)(80, "div", 40)(81, "div", 41)(82, "div", 2)(83, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](84);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "button", 42)(86, "span", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](87, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "div", 44)(89, "form", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function UsersComponent_Template_form_ngSubmit_89_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](91, UsersComponent_div_91_Template, 13, 1, "div", 47)(92, UsersComponent_div_92_Template, 6, 1, "div", 48)(93, UsersComponent_div_93_Template, 6, 1, "div", 48)(94, UsersComponent_div_94_Template, 6, 1, "div", 48)(95, UsersComponent_div_95_Template, 6, 1, "div", 48)(96, UsersComponent_div_96_Template, 5, 0, "div", 48)(97, UsersComponent_div_97_Template, 6, 1, "div", 48)(98, UsersComponent_div_98_Template, 6, 1, "div", 47)(99, UsersComponent_div_99_Template, 6, 1, "div", 47)(100, UsersComponent_div_100_Template, 6, 1, "div", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](101, "div", 49)(102, "div", 50)(103, "label", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](104, "Country");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](105, "input", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](106, UsersComponent_div_106_Template, 80, 1, "div", 48)(107, UsersComponent_div_107_Template, 6, 1, "div", 48)(108, UsersComponent_div_108_Template, 6, 1, "div", 48)(109, UsersComponent_div_109_Template, 7, 1, "div", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](110, "div", 54)(111, "button", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](112, " Cancel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](113, "button", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](114, " Submit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](115, "div", 57)(116, "div", 37)(117, "div", 38)(118, "div", 39)(119, "div", 40)(120, "div", 41)(121, "div", 2)(122, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](123, "Edit User");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](124, "button", 42)(125, "span", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](126, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](127, "div", 44)(128, "form", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function UsersComponent_Template_form_ngSubmit_128_listener() {
            return ctx.onUpdate();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](129, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](130, UsersComponent_div_130_Template, 13, 1, "div", 47)(131, UsersComponent_div_131_Template, 6, 2, "div", 48)(132, UsersComponent_div_132_Template, 6, 2, "div", 48)(133, UsersComponent_div_133_Template, 6, 2, "div", 48)(134, UsersComponent_div_134_Template, 2, 1, "div", 48)(135, UsersComponent_div_135_Template, 5, 0, "div", 48)(136, UsersComponent_div_136_Template, 6, 1, "div", 48)(137, UsersComponent_div_137_Template, 6, 1, "div", 47)(138, UsersComponent_div_138_Template, 6, 1, "div", 47)(139, UsersComponent_div_139_Template, 6, 1, "div", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](140, "div", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](141, UsersComponent_div_141_Template, 4, 0, "div", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](142, UsersComponent_div_142_Template, 80, 1, "div", 48)(143, UsersComponent_div_143_Template, 6, 1, "div", 48)(144, UsersComponent_div_144_Template, 6, 1, "div", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](145, "div", 59)(146, "div", 60)(147, "span", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](148, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](149, "input", 62)(150, "label", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](151, "div", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](152, UsersComponent_div_152_Template, 5, 0, "div", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](153, "div", 54)(154, "button", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](155, " Cancel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](156, "button", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](157, " Submit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](158, "div", 65)(159, "div", 66)(160, "div", 38)(161, "div", 39)(162, "div", 40)(163, "div", 41)(164, "div", 2)(165, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](166, "User Address Details");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](167, "div", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](168, UsersComponent_div_168_Template, 2, 1, "div", 67)(169, UsersComponent_div_169_Template, 2, 0, "div", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          let tmp_44_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](33);
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
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.filterSearchText);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.savedSearchText);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](72, (ctx.tableData == null ? null : ctx.tableData.length) === 0 ? 72 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeater"](ctx.tableData);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pagination", ctx.pagination);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Add ", ctx.selectedRole, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.userForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](47, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](48, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
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
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](57, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](58, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](59, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](60, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.userForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.userEditForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](61, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.userEditForm.get("first_name"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.userEditForm.get("last_name"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.userEditForm.get("email"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.userEditForm.get("user_role_id"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](62, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](63, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](64, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](65, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](66, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](67, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](68, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](69, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](70, _c0).includes(ctx.selectedRole));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_44_0 = ctx.userEditForm.get("is_active")) == null ? null : tmp_44_0.value) !== ctx.selectedUser.is_active);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.userEditForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.selectedUser == null ? null : ctx.selectedUser.addresses == null ? null : ctx.selectedUser.addresses.length) > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.selectedUser == null ? null : ctx.selectedUser.addresses == null ? null : ctx.selectedUser.addresses.length) === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortHeader, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_6__.CustomPaginationComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_user-management_user-management_module_ts.js.map