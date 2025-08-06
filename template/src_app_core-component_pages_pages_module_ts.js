"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_pages_pages_module_ts"],{

/***/ 10602:
/*!**************************************************************!*\
  !*** ./src/app/core-component/pages/pages-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagesRoutingModule: () => (/* binding */ PagesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages.component */ 32020);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile/profile.component */ 28015);
/* harmony import */ var _refferals_refferal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./refferals/refferal.component */ 91638);
/* harmony import */ var _payment_info_payment_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-info/payment-info.component */ 20095);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);







const routes = [{
  path: '',
  component: _pages_component__WEBPACK_IMPORTED_MODULE_0__.PagesComponent,
  children: [{
    path: 'profile',
    component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__.ProfileComponent
  }, {
    path: 'referral',
    component: _refferals_refferal_component__WEBPACK_IMPORTED_MODULE_2__.RefferalComponent
  }, {
    path: 'payment-info',
    component: _payment_info_payment_info_component__WEBPACK_IMPORTED_MODULE_3__.PaymentInfo
  }]
}];
class PagesRoutingModule {
  static {
    this.ɵfac = function PagesRoutingModule_Factory(t) {
      return new (t || PagesRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: PagesRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PagesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 32020:
/*!*********************************************************!*\
  !*** ./src/app/core-component/pages/pages.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagesComponent: () => (/* binding */ PagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);


class PagesComponent {
  static {
    this.ɵfac = function PagesComponent_Factory(t) {
      return new (t || PagesComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PagesComponent,
      selectors: [["app-pages"]],
      decls: 1,
      vars: 0,
      template: function PagesComponent_Template(rf, ctx) {
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

/***/ 67507:
/*!******************************************************!*\
  !*** ./src/app/core-component/pages/pages.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagesModule: () => (/* binding */ PagesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages-routing.module */ 10602);
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.component */ 32020);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/profile.component */ 28015);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _refferals_refferal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./refferals/refferal.component */ 91638);
/* harmony import */ var _payment_info_payment_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-info/payment-info.component */ 20095);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);








class PagesModule {
  static {
    this.ɵfac = function PagesModule_Factory(t) {
      return new (t || PagesModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: PagesModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.PagesRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.sharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PagesModule, {
    declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_1__.PagesComponent, _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__.ProfileComponent, _refferals_refferal_component__WEBPACK_IMPORTED_MODULE_4__.RefferalComponent, _payment_info_payment_info_component__WEBPACK_IMPORTED_MODULE_5__.PaymentInfo],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.PagesRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.sharedModule]
  });
})();

/***/ }),

/***/ 20095:
/*!*****************************************************************************!*\
  !*** ./src/app/core-component/pages/payment-info/payment-info.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentInfo: () => (/* binding */ PaymentInfo)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _payment_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-info.service */ 62455);
/* harmony import */ var _profile_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile/profile.service */ 43431);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);







function PaymentInfo_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Invalid Payee Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PaymentInfo_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Invalid UPI ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PaymentInfo_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Invalid Payment Note ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class PaymentInfo {
  constructor(fb, PaymentService, profileService) {
    this.fb = fb;
    this.PaymentService = PaymentService;
    this.profileService = profileService;
    this.copiedAndroid = false;
    this.copiedIOS = false;
    this.paymentInfoForm = this.fb.group({
      payee_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      // URL validation
      upi_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      payment_note: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
    });
    this.PaymentService.getPaymentInfoData().subscribe(data => {
      let Obj = data.results;
      this.paymentInfoForm.patchValue({
        payee_name: Obj.payee_name,
        upi_id: Obj.upi_id,
        payment_note: Obj.payment_note
      });
    });
  }
  updateReferral() {
    if (this.paymentInfoForm.invalid) {
      return;
    }
    this.PaymentService.updatePaymentInfoData(this.paymentInfoForm.value).subscribe(response => {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        icon: 'success',
        title: 'Updated Successfully!',
        text: 'Payment Info have been updated.',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      });
      console.log('Payment Info updated successfully', response);
    }, error => {
      console.error('Error updating referral data', error);
    });
  }
  copyText(text, type) {
    navigator.clipboard.writeText(text).then(() => {
      if (type === 'android') {
        this.copiedAndroid = true;
        setTimeout(() => this.copiedAndroid = false, 1000);
      } else if (type === 'ios') {
        this.copiedIOS = true;
        setTimeout(() => this.copiedIOS = false, 1000);
      }
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  }
  static {
    this.ɵfac = function PaymentInfo_Factory(t) {
      return new (t || PaymentInfo)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_payment_info_service__WEBPACK_IMPORTED_MODULE_1__.PaymentService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: PaymentInfo,
      selectors: [["app-profile"]],
      decls: 33,
      vars: 5,
      consts: [[1, "page-header"], [1, "page-title"], [1, "card"], [1, "card-body"], [1, "container", "mt-4"], [1, "card-header", "bg-primary", "text-white"], [1, "mb-0"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], [1, "d-flex", "justify-content-between"], ["for", "payee_name", 1, "form-label", "bg-gray"], ["id", "payee_name", "type", "text", "formControlName", "payee_name", 1, "form-control"], ["class", "text-danger small", 4, "ngIf"], ["for", "upi_id", 1, "form-label", "bg-gray"], ["id", "upi_id", "type", "text", "formControlName", "upi_id", 1, "form-control"], ["for", "payment_note", 1, "form-label", "bg-gray"], ["id", "payment_note", "type", "text", "formControlName", "payment_note", 1, "form-control"], ["type", "submit", 1, "btn", "btn-success", "w-100", 3, "disabled"], [1, "text-danger", "small"]],
      template: function PaymentInfo_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Payment Info");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 2)(8, "div", 5)(9, "h4", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Payment Info");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 3)(12, "form", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function PaymentInfo_Template_form_ngSubmit_12_listener() {
            return ctx.updateReferral();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 8)(14, "div", 9)(15, "label", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Payee Name:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, PaymentInfo_div_18_Template, 2, 0, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 8)(20, "div", 9)(21, "label", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "UPI ID:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, PaymentInfo_div_24_Template, 2, 0, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 8)(26, "div", 9)(27, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Payment Note:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, PaymentInfo_div_30_Template, 2, 0, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " Update Payment Info ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          let tmp_1_0;
          let tmp_2_0;
          let tmp_3_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.paymentInfoForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.paymentInfoForm.get("payee_name")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.paymentInfoForm.get("payee_name")) == null ? null : tmp_1_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.paymentInfoForm.get("upi_id")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.paymentInfoForm.get("upi_id")) == null ? null : tmp_2_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.paymentInfoForm.get("payment_note")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.paymentInfoForm.get("payment_note")) == null ? null : tmp_3_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.paymentInfoForm.invalid);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 62455:
/*!***************************************************************************!*\
  !*** ./src/app/core-component/pages/payment-info/payment-info.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentService: () => (/* binding */ PaymentService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 45312);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);




class PaymentService {
  constructor(http) {
    this.http = http;
  }
  getPaymentInfoData() {
    const token = localStorage.getItem('authToken'); // Retrieve token
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND_URL}/admin/payment/info`, {
      headers
    });
  }
  updatePaymentInfoData(profileData) {
    const token = localStorage.getItem('authToken'); // Retrieve token
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND_URL}/admin/payment/info`, profileData, {
      headers
    });
  }
  static {
    this.ɵfac = function PaymentService_Factory(t) {
      return new (t || PaymentService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: PaymentService,
      factory: PaymentService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 28015:
/*!*******************************************************************!*\
  !*** ./src/app/core-component/pages/profile/profile.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileComponent: () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.service */ 43431);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);






function ProfileComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.profileImage, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function ProfileComponent_div_54_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_div_54_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password must be at least 8 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_div_54_small_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password must contain at least 1 number and 1 special character (!@#$%^&*). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_div_54_small_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password cannot contain spaces. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProfileComponent_div_54_small_1_Template, 2, 0, "small", 27)(2, ProfileComponent_div_54_small_2_Template, 2, 0, "small", 27)(3, ProfileComponent_div_54_small_3_Template, 2, 0, "small", 27)(4, ProfileComponent_div_54_small_4_Template, 2, 0, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r0.passwordForm.get("password")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r0.passwordForm.get("password")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r0.passwordForm.get("password")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx_r0.passwordForm.get("password")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["pattern"]) && ((tmp_4_0 = ctx_r0.passwordForm.get("password")) == null ? null : tmp_4_0.value == null ? null : tmp_4_0.value.includes(" ")));
  }
}
class ProfileComponent {
  constructor(fb, profileService) {
    this.fb = fb;
    this.profileService = profileService;
    this.profileImage = ''; // Store Base64 Image
    this.passwordVisibility = false;
    this.profileForm = this.fb.group({
      first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      email: [{
        value: '',
        disabled: true
      }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      profile_img: [''] // Base64 image will be stored here
    });
    this.passwordForm = this.fb.group({
      email: [{
        value: '',
        disabled: true
      }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(/^[^\s]*$/)]]
    });
  }
  ngOnInit() {
    this.loadUserProfile();
  }
  onFileSelected(event) {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Read file as DataURL (Base64)
      reader.onload = () => {
        this.profileImage = reader.result; // Store Base64 string
        this.profileForm.patchValue({
          profile_img: this.profileImage
        }); // Update form value
      };
      reader.onerror = error => {
        console.error('Error converting image to Base64:', error);
      };
    }
  }
  loadUserProfile() {
    this.profileService.getProfile().subscribe(data => {
      let Obj = data.results;
      this.profileForm.patchValue({
        first_name: Obj.first_name,
        email: Obj.email,
        last_name: Obj.last_name,
        profile_image: Obj.profile_image // Base64 image from API
      });
      this.passwordForm.patchValue({
        email: Obj.email
      });
      this.profileImage = Obj.profile_img_url;
    });
  }
  togglePassword() {
    this.passwordVisibility = !this.passwordVisibility;
  }
  updateProfile() {
    if (this.profileForm.valid) {
      this.profileService.updateProfile(this.profileForm.value).subscribe(() => {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
          icon: 'success',
          title: 'Profile updated Successfully!',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        });
      });
    } else {
      alert('Please fill in all required fields.');
    }
  }
  updatePassword() {
    if (this.passwordForm.valid) {
      const formValue = this.passwordForm.getRawValue();
      this.profileService.updatePassword(formValue).subscribe(() => {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
          icon: 'success',
          title: 'Password updated Successfully!',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        });
      });
    }
  }
  onImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        this.profileImage = e.target.result; // Convert file to Base64
        this.profileForm.patchValue({
          profileImage: this.profileImage
        });
      };
      reader.readAsDataURL(file);
    }
  }
  static {
    this.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_profile_service__WEBPACK_IMPORTED_MODULE_1__.ProfileService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-profile"]],
      decls: 58,
      vars: 4,
      consts: [[1, "page-header"], [1, "page-title"], [1, "card"], [1, "card-body"], [1, "new-employee-field"], [1, "profile-pic-upload", "mb-2"], [1, "profile-pic"], [4, "ngIf"], [1, "input-blocks", "mb-0"], [1, "image-upload", "mb-0"], ["type", "file", "accept", "image/*", 3, "change"], [1, "image-uploads"], [3, "ngSubmit", "formGroup"], [1, "row"], [1, "col-lg-6", "col-sm-12"], [1, "input-blocks"], [1, "form-label"], ["type", "text", "formControlName", "first_name", 1, "form-control"], ["type", "text", "formControlName", "last_name", 1, "form-control"], ["type", "email", "formControlName", "email", 1, "form-control"], [1, "col-12"], ["type", "submit", 1, "btn", "btn-submit", "me-2"], [1, "mt-4"], [1, "row", "w-50"], [1, "col-lg-12", "col-sm-12"], ["type", "text", "formControlName", "password", 1, "form-control"], ["alt", "Preview", 2, "max-width", "100px", "margin-top", "10px", 3, "src"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Profile");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "User Profile");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 2)(7, "div", 3)(8, "div", 4)(9, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Avatar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5)(12, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ProfileComponent_div_13_Template, 2, 1, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 8)(15, "div", 9)(16, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ProfileComponent_Template_input_change_16_listener($event) {
            return ctx.onFileSelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 11)(18, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Change Image");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "form", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_20_listener() {
            return ctx.updateProfile();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 13)(22, "div", 14)(23, "div", 15)(24, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "First Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 14)(28, "div", 15)(29, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Last Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 14)(33, "div", 15)(34, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 20)(38, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "form", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_40_listener() {
            return ctx.updatePassword();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "h3", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Reset Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 23)(44, "div", 24)(45, "div", 15)(46, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 24)(50, "div", 15)(51, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, ProfileComponent_div_54_Template, 5, 4, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 20)(56, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          let tmp_3_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.profileImage);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.profileForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.passwordForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.passwordForm.get("password")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.passwordForm.get("password")) == null ? null : tmp_3_0.touched));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 91638:
/*!**********************************************************************!*\
  !*** ./src/app/core-component/pages/refferals/refferal.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RefferalComponent: () => (/* binding */ RefferalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 50854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _refferal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refferal.service */ 23130);
/* harmony import */ var _profile_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile/profile.service */ 43431);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);











function RefferalComponent_a_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RefferalComponent_a_17_Template_a_click_0_listener() {
      let tmp_2_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.copyText((tmp_2_0 = ctx_r1.referralForm.get("android_link")) == null ? null : tmp_2_0.value, "android"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Copy Android Link ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RefferalComponent_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Copied!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RefferalComponent_input_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 47);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.userRole === "Warehouse Admin" || ctx_r1.userRole === "Support Staff");
  }
}
function RefferalComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Invalid Android URL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RefferalComponent_a_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RefferalComponent_a_25_Template_a_click_0_listener() {
      let tmp_2_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.copyText((tmp_2_0 = ctx_r1.referralForm.get("ios_link")) == null ? null : tmp_2_0.value, "ios"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Copy iOS Link ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RefferalComponent_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Copied!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RefferalComponent_input_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 49);
  }
}
function RefferalComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Invalid iOS URL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RefferalComponent_button_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Update Referral Links ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.referralForm.invalid);
  }
}
function RefferalComponent_div_30_input_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 55);
  }
}
function RefferalComponent_div_30_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Invalid Points ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RefferalComponent_div_30_input_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 56);
  }
}
function RefferalComponent_div_30_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Invalid Points ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RefferalComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 5)(2, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Referral Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3)(5, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function RefferalComponent_div_30_Template_form_ngSubmit_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.updateReferralPoints());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 8)(7, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Points for referrer:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, RefferalComponent_div_30_input_9_Template, 1, 0, "input", 52)(10, RefferalComponent_div_30_div_10_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8)(12, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Points for referee:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, RefferalComponent_div_30_input_14_Template, 1, 0, "input", 54)(15, RefferalComponent_div_30_div_15_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Update Referral Points ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_5_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.referralPointsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.referralPointsForm.get("points_for_referrer"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx_r1.referralPointsForm.get("points_for_referrer")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.referralPointsForm.get("points_for_referrer")) == null ? null : tmp_3_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.referralPointsForm.get("points_for_referee"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx_r1.referralPointsForm.get("points_for_referee")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.referralPointsForm.get("points_for_referee")) == null ? null : tmp_5_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.referralPointsForm.invalid);
  }
}
function RefferalComponent_div_31_li_8_img_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 67);
  }
  if (rf & 2) {
    const badge_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("alt", badge_r7.badge_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", badge_r7.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function RefferalComponent_div_31_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 61)(1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div")(4, "div", 64)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, RefferalComponent_div_31_li_8_img_7_Template, 1, 2, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "small", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RefferalComponent_div_31_li_8_Template_button_click_10_listener() {
      const badge_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.openBadgePopup(badge_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const badge_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](badge_r7.badge_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", badge_r7.image_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("Points: ", badge_r7.badge_points_required, " | Rank: ", badge_r7.badge_rank, "");
  }
}
function RefferalComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 57)(2, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Badge Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RefferalComponent_div_31_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.openBadgePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Create New Badge");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3)(7, "ul", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("cdkDropListDropped", function RefferalComponent_div_31_Template_ul_cdkDropListDropped_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onBadgeDrop($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, RefferalComponent_div_31_li_8_Template, 12, 4, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.badges);
  }
}
function RefferalComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Badge name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RefferalComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Points required must be a valid number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RefferalComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Badge color is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RefferalComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Badge rank is required and must be at least 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class RefferalComponent {
  constructor(fb, referralService, profileService, dialog, snackBar) {
    this.fb = fb;
    this.referralService = referralService;
    this.profileService = profileService;
    this.dialog = dialog;
    this.snackBar = snackBar;
    this.passwordVisibility = false;
    this.userRole = "";
    this.copiedAndroid = false;
    this.copiedIOS = false;
    this.badges = [];
    this.isEditMode = false;
    this.selectedBadge = null;
    this.selectedImageFile = null;
    this.referralForm = this.fb.group({
      android_link: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('https?://.+')]],
      ios_link: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('https?://.+')]]
    });
    this.referralPointsForm = this.fb.group({
      points_for_referrer: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[0-9]+$')]],
      points_for_referee: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[0-9]+$')]]
    });
    this.badgePointsForm = this.fb.group({
      badge_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      badge_points_required: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(0)]],
      badge_rank: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(1)]],
      colour: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      image: ['']
    });
  }
  ngOnInit() {
    this.loadUserProfile();
    this.loadBadges();
  }
  loadUserProfile() {
    this.profileService.getProfile().subscribe(data => {
      this.userRole = data.results.user_role.role_name;
      this.loadUserRefferalLinks();
      if (this.userRole == "Platform Admin") {
        this.loadUserRefferalPoints();
        this.loadBatchPoints();
      }
    });
  }
  loadUserRefferalLinks() {
    this.referralService.getReferralData().subscribe(data => {
      let Obj = data.results;
      this.referralForm.patchValue({
        android_link: Obj[Obj.length - 1].android_link,
        ios_link: Obj[Obj.length - 1].ios_link
      });
    });
    if (this.userRole == "Warehouse Admin" || this.userRole == "Support Staff") {
      this.referralForm.get('android_link')?.disable();
      this.referralForm.get('ios_link')?.disable();
    }
  }
  loadUserRefferalPoints() {
    this.referralService.getReferralPointsData().subscribe(data => {
      let Obj = data.results;
      this.referralPointsForm.patchValue({
        points_for_referrer: Obj[Obj.length - 1].points_for_referrer,
        points_for_referee: Obj[Obj.length - 1].points_for_referee
      });
    });
  }
  loadBatchPoints() {
    this.referralService.getBatchPointsData().subscribe(data => {
      let Obj = data.results;
      this.badgePointsForm.patchValue({
        bronze_points: Obj.bronze_points,
        silver_points: Obj.silver_points,
        gold_points: Obj.gold_points
      });
    });
  }
  togglePassword() {
    this.passwordVisibility = !this.passwordVisibility;
  }
  updateReferral() {
    if (this.referralForm.invalid) {
      return;
    }
    this.referralService.updateReferralData(this.referralForm.value).subscribe(response => {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        icon: 'success',
        title: 'Updated Successfully!',
        text: 'Referral links have been updated.',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      });
      console.log('Referral updated successfully', response);
    }, error => {
      console.error('Error updating referral data', error);
    });
  }
  updateReferralPoints() {
    if (this.referralPointsForm.invalid) {
      return;
    }
    this.referralService.updateReferralPointsData(this.referralPointsForm.value).subscribe(response => {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        icon: 'success',
        title: 'Updated Successfully!',
        text: 'Referral Points have been updated.',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      });
      console.log('Referral updated successfully', response);
    }, error => {
      console.error('Error updating referral data', error);
    });
  }
  updateBatchPoints() {
    if (this.badgePointsForm.invalid) {
      return;
    }
    this.referralService.updateBatchPointsData(this.badgePointsForm.value).subscribe(response => {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        icon: 'success',
        title: 'Updated Successfully!',
        text: 'Batch Points have been updated.',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      });
      console.log('Batch updated successfully', response);
    }, error => {
      console.error('Error updating batch data', error);
    });
  }
  copyText(text, type) {
    if (navigator?.clipboard?.writeText && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        this.showCopySuccess(type);
      }).catch(err => {
        console.error('Clipboard write failed:', err);
        this.fallbackCopyText(text, type);
      });
    } else {
      console.warn('Clipboard API not available, using fallback');
      this.fallbackCopyText(text, type);
    }
  }
  fallbackCopyText(text, type) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed'; // Avoid scrolling to bottom
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
      const success = document.execCommand('copy');
      if (success) {
        this.showCopySuccess(type);
      } else {
        console.error('Fallback: Copy command was unsuccessful');
      }
    } catch (err) {
      console.error('Fallback: Unable to copy', err);
    }
    document.body.removeChild(textarea);
  }
  showCopySuccess(type) {
    if (type === 'android') {
      this.copiedAndroid = true;
      setTimeout(() => this.copiedAndroid = false, 1000);
    } else {
      this.copiedIOS = true;
      setTimeout(() => this.copiedIOS = false, 1000);
    }
  }
  loadBadges() {
    this.referralService.getAllBadges().subscribe(data => {
      this.badges = data.results;
    });
  }
  openBadgePopup(badge) {
    this.isEditMode = !!badge;
    this.selectedBadge = badge;
    this.selectedImageFile = null;
    if (badge) {
      this.badgePointsForm.patchValue({
        badge_name: badge.badge_name,
        badge_points_required: badge.badge_points_required,
        badge_rank: badge.badge_rank,
        colour: badge.colour,
        image: badge.image
      });
    } else {
      this.badgePointsForm.reset();
    }
    const modalElement = document.getElementById('badgePointsModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
  closeModal() {
    const modalElement = document.getElementById('badgePointsModal');
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      modal.hide();
    }
  }
  onImageSelect(event) {
    const file = event.target.files[0];
    if (file) {
      this.selectedImageFile = file;
      // Convert file to base64
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result;
        this.badgePointsForm.patchValue({
          image: base64String
        });
      };
      reader.readAsDataURL(file);
    }
  }
  onSubmit() {
    if (this.badgePointsForm.valid) {
      const formValue = this.badgePointsForm.value;
      const badgeData = {
        badge_name: formValue.badge_name,
        badge_points_required: Number(formValue.badge_points_required),
        badge_rank: Number(formValue.badge_rank),
        colour: formValue.colour,
        image: formValue.image || ''
      };
      if (this.isEditMode && this.selectedBadge) {
        // Update existing badge
        this.referralService.updateBadge(this.selectedBadge.badge_id, badgeData).subscribe({
          next: response => {
            this.loadBadges();
            this.closeModal();
            this.selectedImageFile = null;
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              icon: 'success',
              title: 'Success!',
              text: 'Badge updated successfully',
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'OK'
            });
          },
          error: error => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              icon: 'error',
              title: 'Error!',
              text: error?.error?.status_message || 'Failed to update badge',
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'OK'
            });
            console.error('Error updating badge:', error);
          }
        });
      } else {
        // Create new badge
        this.referralService.createBadge(badgeData).subscribe({
          next: response => {
            this.loadBadges();
            this.closeModal();
            this.selectedImageFile = null;
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              icon: 'success',
              title: 'Success!',
              text: 'Badge created successfully',
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'OK'
            });
          },
          error: error => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              icon: 'error',
              title: 'Error!',
              text: 'Failed to create badge',
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'OK'
            });
            console.error('Error creating badge:', error);
          }
        });
      }
    }
  }
  onBadgeDrop(event) {
    (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__.moveItemInArray)(this.badges, event.previousIndex, event.currentIndex);
    // Update ranks based on new order
    this.badges.forEach((badge, index) => {
      badge.badge_rank = index + 1;
      // Update each badge individually using the existing API
      this.referralService.updateBadge(badge.badge_id, {
        badge_rank: badge.badge_rank
      }).subscribe({
        next: () => {
          if (index === this.badges.length - 1) {
            // Show success message only after the last badge is updated
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              icon: 'success',
              title: 'Success!',
              text: 'Badge ranks updated successfully',
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'OK'
            });
          }
        },
        error: error => {
          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            icon: 'error',
            title: 'Error!',
            text: 'Failed to update badge ranks',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
          });
          console.error('Error updating badge ranks:', error);
          // Reload badges to restore original order
          this.loadBadges();
        }
      });
    });
  }
  static {
    this.ɵfac = function RefferalComponent_Factory(t) {
      return new (t || RefferalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_refferal_service__WEBPACK_IMPORTED_MODULE_1__.ReferralService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: RefferalComponent,
      selectors: [["app-refferal"]],
      decls: 80,
      vars: 20,
      consts: [[1, "page-header"], [1, "page-title"], [1, "card"], [1, "card-body"], [1, "container", "mt-4"], [1, "card-header", "bg-primary", "text-white"], [1, "mb-0"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], [1, "d-flex", "justify-content-between"], ["for", "android", 1, "form-label", "bg-gray"], ["href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["style", "margin-left: 8px; color: green;", 4, "ngIf"], ["id", "android", "type", "url", "class", "form-control", "formControlName", "android_link", "placeholder", "Enter Android referral link", 3, "disabled", 4, "ngIf"], ["class", "text-danger small", 4, "ngIf"], ["for", "ios", 1, "form-label", "bg-gray"], ["id", "ios", "type", "url", "class", "form-control", "formControlName", "ios_link", "placeholder", "Enter iOS referral link", 4, "ngIf"], ["type", "submit", "class", "btn btn-success w-100", 3, "disabled", 4, "ngIf"], ["class", "card", 4, "ngIf"], ["id", "badgePointsModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "badgePointsModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "custom-modal-two"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header", "border-0", "custom-modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body"], [1, "row"], [1, "col-lg-6"], [1, "form-group", "mb-3"], ["for", "badge_name", 1, "form-label"], ["type", "text", "id", "badge_name", "formControlName", "badge_name", "placeholder", "Enter badge name", 1, "form-control"], ["for", "badge_points_required", 1, "form-label"], ["type", "number", "id", "badge_points_required", "formControlName", "badge_points_required", "placeholder", "Enter points required", 1, "form-control"], ["for", "colour", 1, "form-label"], ["type", "color", "id", "colour", "formControlName", "colour", "title", "Choose badge color", 1, "form-control", "form-control-color"], ["for", "badge_rank", 1, "form-label"], ["type", "number", "id", "badge_rank", "formControlName", "badge_rank", "placeholder", "Enter badge rank", "min", "1", 1, "form-control"], ["for", "image", 1, "form-label"], ["type", "file", "id", "image", "accept", "image/*", 1, "form-control", 3, "change"], [1, "text-muted"], [1, "modal-footer-btn"], ["type", "button", 1, "btn", "btn-cancel", "me-2", 3, "click"], ["type", "submit", 1, "btn", "btn-submit", 3, "disabled"], ["href", "javascript:void(0)", 3, "click"], [2, "margin-left", "8px", "color", "green"], ["id", "android", "type", "url", "formControlName", "android_link", "placeholder", "Enter Android referral link", 1, "form-control", 3, "disabled"], [1, "text-danger", "small"], ["id", "ios", "type", "url", "formControlName", "ios_link", "placeholder", "Enter iOS referral link", 1, "form-control"], ["type", "submit", 1, "btn", "btn-success", "w-100", 3, "disabled"], ["for", "android", 1, "form-label"], ["id", "android", "type", "number", "class", "form-control", "formControlName", "points_for_referrer", 4, "ngIf"], ["for", "ios", 1, "form-label"], ["id", "ios", "type", "number", "class", "form-control", "formControlName", "points_for_referee", 4, "ngIf"], ["id", "android", "type", "number", "formControlName", "points_for_referrer", 1, "form-control"], ["id", "ios", "type", "number", "formControlName", "points_for_referee", 1, "form-control"], [1, "card-header", "bg-primary", "text-white", "d-flex", "justify-content-between", "align-items-center"], [1, "btn", "btn-info", 3, "click"], ["cdkDropList", "", 1, "list-group", 3, "cdkDropListDropped"], ["class", "list-group-item d-flex justify-content-between align-items-center", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "list-group-item", "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "align-items-center"], ["cdkDragHandle", "", 1, "fas", "fa-grip-vertical", "me-3"], [1, "d-flex", "align-items-center", "mb-1"], ["class", "badge-image me-2", "style", "width: 30px; height: 30px; object-fit: cover;", 3, "src", "alt", 4, "ngIf"], [1, "btn", "btn-warning", 3, "click"], [1, "badge-image", "me-2", 2, "width", "30px", "height", "30px", "object-fit", "cover", 3, "src", "alt"]],
      template: function RefferalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Referral");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 2)(8, "div", 5)(9, "h4", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Referral Links");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 3)(12, "form", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function RefferalComponent_Template_form_ngSubmit_12_listener() {
            return ctx.updateReferral();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 8)(14, "div", 9)(15, "label", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Android Link:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, RefferalComponent_a_17_Template, 2, 0, "a", 11)(18, RefferalComponent_span_18_Template, 2, 0, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, RefferalComponent_input_19_Template, 1, 1, "input", 13)(20, RefferalComponent_div_20_Template, 2, 0, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 8)(22, "div", 9)(23, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "iOS Link:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, RefferalComponent_a_25_Template, 2, 0, "a", 11)(26, RefferalComponent_span_26_Template, 2, 0, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, RefferalComponent_input_27_Template, 1, 0, "input", 16)(28, RefferalComponent_div_28_Template, 2, 0, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, RefferalComponent_button_29_Template, 2, 1, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, RefferalComponent_div_30_Template, 18, 6, "div", 18)(31, RefferalComponent_div_31_Template, 9, 1, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 19)(33, "div", 20)(34, "div", 21)(35, "div", 22)(36, "div", 23)(37, "div", 24)(38, "div", 1)(39, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RefferalComponent_Template_button_click_41_listener() {
            return ctx.closeModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 27)(45, "form", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function RefferalComponent_Template_form_ngSubmit_45_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 28)(47, "div", 29)(48, "div", 30)(49, "label", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Badge Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, RefferalComponent_div_52_Template, 2, 0, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 30)(54, "label", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Points Required");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "input", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](57, RefferalComponent_div_57_Template, 2, 0, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 30)(59, "label", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Badge Color");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "input", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, RefferalComponent_div_62_Template, 2, 0, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 29)(64, "div", 30)(65, "label", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Badge Rank");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](67, "input", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](68, RefferalComponent_div_68_Template, 2, 0, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 30)(70, "label", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "Badge Image");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "input", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function RefferalComponent_Template_input_change_72_listener($event) {
            return ctx.onImageSelect($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "small", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Upload an image for the badge (optional)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 42)(76, "button", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RefferalComponent_Template_button_click_76_listener() {
            return ctx.closeModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, " Cancel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "button", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
        }
        if (rf & 2) {
          let tmp_4_0;
          let tmp_8_0;
          let tmp_14_0;
          let tmp_15_0;
          let tmp_16_0;
          let tmp_17_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.referralForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.copiedAndroid);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.copiedAndroid);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.referralForm.get("android_link"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.referralForm.get("android_link")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.referralForm.get("android_link")) == null ? null : tmp_4_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.copiedIOS);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.copiedIOS);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.referralForm.get("ios_link"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx.referralForm.get("ios_link")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx.referralForm.get("ios_link")) == null ? null : tmp_8_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.userRole === "Platform Admin");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.userRole === "Platform Admin");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.userRole === "Platform Admin");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.isEditMode ? "Edit Badge" : "Create Badge");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.badgePointsForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_14_0 = ctx.badgePointsForm.get("badge_name")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx.badgePointsForm.get("badge_name")) == null ? null : tmp_14_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_15_0 = ctx.badgePointsForm.get("badge_points_required")) == null ? null : tmp_15_0.invalid) && ((tmp_15_0 = ctx.badgePointsForm.get("badge_points_required")) == null ? null : tmp_15_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_16_0 = ctx.badgePointsForm.get("colour")) == null ? null : tmp_16_0.invalid) && ((tmp_16_0 = ctx.badgePointsForm.get("colour")) == null ? null : tmp_16_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_17_0 = ctx.badgePointsForm.get("badge_rank")) == null ? null : tmp_17_0.invalid) && ((tmp_17_0 = ctx.badgePointsForm.get("badge_rank")) == null ? null : tmp_17_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.badgePointsForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.isEditMode ? "Update" : "Create", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__.CdkDrag, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__.CdkDragHandle, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
      styles: [".cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.list-group-item[_ngcontent-%COMP%] {\n  cursor: move;\n}\n.list-group-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.list-group-item[_ngcontent-%COMP%]   .fa-grip-vertical[_ngcontent-%COMP%] {\n  color: #6c757d;\n  cursor: grab;\n}\n.list-group-item[_ngcontent-%COMP%]   .fa-grip-vertical[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS1jb21wb25lbnQvcGFnZXMvcmVmZmVyYWxzL3JlZmZlcmFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFIQUFBO0FBQ0Y7O0FBSUE7RUFDRSxVQUFBO0FBREY7O0FBSUE7RUFDRSxzREFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtBQURGO0FBR0U7RUFDRSx5QkFBQTtBQURKO0FBSUU7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQUZKO0FBSUk7RUFDRSxnQkFBQTtBQUZOIiwic291cmNlc0NvbnRlbnQiOlsiLmNkay1kcmFnLXByZXZpZXcge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4ubGlzdC1ncm91cC1pdGVtIHtcclxuICBjdXJzb3I6IG1vdmU7XHJcbiAgXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gIH1cclxuICBcclxuICAuZmEtZ3JpcC12ZXJ0aWNhbCB7XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgIGN1cnNvcjogZ3JhYjtcclxuICAgIFxyXG4gICAgJjphY3RpdmUge1xyXG4gICAgICBjdXJzb3I6IGdyYWJiaW5nO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 23130:
/*!********************************************************************!*\
  !*** ./src/app/core-component/pages/refferals/refferal.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReferralService: () => (/* binding */ ReferralService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);




class ReferralService {
  constructor(http) {
    this.http = http;
  }
  getReferralData() {
    const token = localStorage.getItem('authToken'); // Retrieve token
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND_URL}/admin/refferal`, {
      headers
    });
  }
  updateReferralData(profileData) {
    const token = localStorage.getItem('authToken'); // Retrieve token
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.patch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND_URL}/admin/refferal/1`, profileData, {
      headers
    });
  }
  getReferralPointsData() {
    const token = localStorage.getItem('authToken'); // Retrieve token
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND_URL}/admin/refferal-points`, {
      headers
    });
  }
  getBatchPointsData() {
    const token = localStorage.getItem('authToken'); // Retrieve token
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND_URL}/admin/badge-points`, {
      headers
    });
  }
  updateReferralPointsData(profileData) {
    const token = localStorage.getItem('authToken'); // Retrieve token
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.patch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND_URL}/admin/refferal-points/1`, profileData, {
      headers
    });
  }
  updateBatchPointsData(batchData) {
    const token = localStorage.getItem('authToken'); // Retrieve token
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND_URL}/admin/badge-points`, batchData, {
      headers
    });
  }
  getAllBadges() {
    const token = localStorage.getItem('authToken'); // Retrieve token
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND_URL}/admin/badge`, {
      headers
    });
  }
  createBadge(badgeData) {
    const token = localStorage.getItem('authToken'); // Retrieve token
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json');
    return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND_URL}/admin/badge`, badgeData, {
      headers
    });
  }
  updateBadge(badgeId, badgeData) {
    const token = localStorage.getItem('authToken'); // Retrieve token
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json');
    return this.http.patch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND_URL}/admin/badge/${badgeId}`, badgeData, {
      headers
    });
  }
  updateBadgeRanks(badges) {
    const token = localStorage.getItem('authToken');
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND_URL}/admin/badge-points/ranks`, {
      badges
    }, {
      headers
    });
  }
  static {
    this.ɵfac = function ReferralService_Factory(t) {
      return new (t || ReferralService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ReferralService,
      factory: ReferralService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 93482:
/*!*******************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/dialog.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdkDialogContainer: () => (/* binding */ CdkDialogContainer),
/* harmony export */   DEFAULT_DIALOG_CONFIG: () => (/* binding */ DEFAULT_DIALOG_CONFIG),
/* harmony export */   DIALOG_DATA: () => (/* binding */ DIALOG_DATA),
/* harmony export */   DIALOG_SCROLL_STRATEGY: () => (/* binding */ DIALOG_SCROLL_STRATEGY),
/* harmony export */   DIALOG_SCROLL_STRATEGY_PROVIDER: () => (/* binding */ DIALOG_SCROLL_STRATEGY_PROVIDER),
/* harmony export */   DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY: () => (/* binding */ DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY),
/* harmony export */   Dialog: () => (/* binding */ Dialog),
/* harmony export */   DialogConfig: () => (/* binding */ DialogConfig),
/* harmony export */   DialogModule: () => (/* binding */ DialogModule),
/* harmony export */   DialogRef: () => (/* binding */ DialogRef),
/* harmony export */   throwDialogContentAlreadyAttachedError: () => (/* binding */ throwDialogContentAlreadyAttachedError)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ 72102);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/overlay */ 81570);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ 17699);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/portal */ 9168);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/keycodes */ 74879);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 137);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/bidi */ 63680);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 63037);














/** Configuration for opening a modal dialog. */
function CdkDialogContainer_ng_template_0_Template(rf, ctx) {}
class DialogConfig {
  constructor() {
    /** The ARIA role of the dialog element. */
    this.role = 'dialog';
    /** Optional CSS class or classes applied to the overlay panel. */
    this.panelClass = '';
    /** Whether the dialog has a backdrop. */
    this.hasBackdrop = true;
    /** Optional CSS class or classes applied to the overlay backdrop. */
    this.backdropClass = '';
    /** Whether the dialog closes with the escape key or pointer events outside the panel element. */
    this.disableClose = false;
    /** Width of the dialog. */
    this.width = '';
    /** Height of the dialog. */
    this.height = '';
    /** Data being injected into the child component. */
    this.data = null;
    /** ID of the element that describes the dialog. */
    this.ariaDescribedBy = null;
    /** ID of the element that labels the dialog. */
    this.ariaLabelledBy = null;
    /** Dialog label applied via `aria-label` */
    this.ariaLabel = null;
    /** Whether this is a modal dialog. Used to set the `aria-modal` attribute. */
    this.ariaModal = true;
    /**
     * Where the dialog should focus on open.
     * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or
     * AutoFocusTarget instead.
     */
    this.autoFocus = 'first-tabbable';
    /**
     * Whether the dialog should restore focus to the previously-focused element upon closing.
     * Has the following behavior based on the type that is passed in:
     * - `boolean` - when true, will return focus to the element that was focused before the dialog
     *    was opened, otherwise won't restore focus at all.
     * - `string` - focus will be restored to the first element that matches the CSS selector.
     * - `HTMLElement` - focus will be restored to the specific element.
     */
    this.restoreFocus = true;
    /**
     * Whether the dialog should close when the user navigates backwards or forwards through browser
     * history. This does not apply to navigation via anchor element unless using URL-hash based
     * routing (`HashLocationStrategy` in the Angular router).
     */
    this.closeOnNavigation = true;
    /**
     * Whether the dialog should close when the dialog service is destroyed. This is useful if
     * another service is wrapping the dialog and is managing the destruction instead.
     */
    this.closeOnDestroy = true;
    /**
     * Whether the dialog should close when the underlying overlay is detached. This is useful if
     * another service is wrapping the dialog and is managing the destruction instead. E.g. an
     * external detachment can happen as a result of a scroll strategy triggering it or when the
     * browser location changes.
     */
    this.closeOnOverlayDetachments = true;
  }
}
function throwDialogContentAlreadyAttachedError() {
  throw Error('Attempting to attach dialog content after content is already attached');
}
/**
 * Internal component that wraps user-provided dialog content.
 * @docs-private
 */
class CdkDialogContainer extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__.BasePortalOutlet {
  constructor(_elementRef, _focusTrapFactory, _document, _config, _interactivityChecker, _ngZone, _overlayRef, _focusMonitor) {
    super();
    this._elementRef = _elementRef;
    this._focusTrapFactory = _focusTrapFactory;
    this._config = _config;
    this._interactivityChecker = _interactivityChecker;
    this._ngZone = _ngZone;
    this._overlayRef = _overlayRef;
    this._focusMonitor = _focusMonitor;
    this._platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform);
    /** The class that traps and manages focus within the dialog. */
    this._focusTrap = null;
    /** Element that was focused before the dialog was opened. Save this to restore upon close. */
    this._elementFocusedBeforeDialogWasOpened = null;
    /**
     * Type of interaction that led to the dialog being closed. This is used to determine
     * whether the focus style will be applied when returning focus to its original location
     * after the dialog is closed.
     */
    this._closeInteractionType = null;
    /**
     * Queue of the IDs of the dialog's label element, based on their definition order. The first
     * ID will be used as the `aria-labelledby` value. We use a queue here to handle the case
     * where there are two or more titles in the DOM at a time and the first one is destroyed while
     * the rest are present.
     */
    this._ariaLabelledByQueue = [];
    this._changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef);
    /**
     * Attaches a DOM portal to the dialog container.
     * @param portal Portal to be attached.
     * @deprecated To be turned into a method.
     * @breaking-change 10.0.0
     */
    this.attachDomPortal = portal => {
      if (this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throwDialogContentAlreadyAttachedError();
      }
      const result = this._portalOutlet.attachDomPortal(portal);
      this._contentAttached();
      return result;
    };
    this._document = _document;
    if (this._config.ariaLabelledBy) {
      this._ariaLabelledByQueue.push(this._config.ariaLabelledBy);
    }
  }
  _addAriaLabelledBy(id) {
    this._ariaLabelledByQueue.push(id);
    this._changeDetectorRef.markForCheck();
  }
  _removeAriaLabelledBy(id) {
    const index = this._ariaLabelledByQueue.indexOf(id);
    if (index > -1) {
      this._ariaLabelledByQueue.splice(index, 1);
      this._changeDetectorRef.markForCheck();
    }
  }
  _contentAttached() {
    this._initializeFocusTrap();
    this._handleBackdropClicks();
    this._captureInitialFocus();
  }
  /**
   * Can be used by child classes to customize the initial focus
   * capturing behavior (e.g. if it's tied to an animation).
   */
  _captureInitialFocus() {
    this._trapFocus();
  }
  ngOnDestroy() {
    this._restoreFocus();
  }
  /**
   * Attach a ComponentPortal as content to this dialog container.
   * @param portal Portal to be attached as the dialog content.
   */
  attachComponentPortal(portal) {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throwDialogContentAlreadyAttachedError();
    }
    const result = this._portalOutlet.attachComponentPortal(portal);
    this._contentAttached();
    return result;
  }
  /**
   * Attach a TemplatePortal as content to this dialog container.
   * @param portal Portal to be attached as the dialog content.
   */
  attachTemplatePortal(portal) {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throwDialogContentAlreadyAttachedError();
    }
    const result = this._portalOutlet.attachTemplatePortal(portal);
    this._contentAttached();
    return result;
  }
  // TODO(crisbeto): this shouldn't be exposed, but there are internal references to it.
  /** Captures focus if it isn't already inside the dialog. */
  _recaptureFocus() {
    if (!this._containsFocus()) {
      this._trapFocus();
    }
  }
  /**
   * Focuses the provided element. If the element is not focusable, it will add a tabIndex
   * attribute to forcefully focus it. The attribute is removed after focus is moved.
   * @param element The element to focus.
   */
  _forceFocus(element, options) {
    if (!this._interactivityChecker.isFocusable(element)) {
      element.tabIndex = -1;
      // The tabindex attribute should be removed to avoid navigating to that element again
      this._ngZone.runOutsideAngular(() => {
        const callback = () => {
          element.removeEventListener('blur', callback);
          element.removeEventListener('mousedown', callback);
          element.removeAttribute('tabindex');
        };
        element.addEventListener('blur', callback);
        element.addEventListener('mousedown', callback);
      });
    }
    element.focus(options);
  }
  /**
   * Focuses the first element that matches the given selector within the focus trap.
   * @param selector The CSS selector for the element to set focus to.
   */
  _focusByCssSelector(selector, options) {
    let elementToFocus = this._elementRef.nativeElement.querySelector(selector);
    if (elementToFocus) {
      this._forceFocus(elementToFocus, options);
    }
  }
  /**
   * Moves the focus inside the focus trap. When autoFocus is not set to 'dialog', if focus
   * cannot be moved then focus will go to the dialog container.
   */
  _trapFocus() {
    const element = this._elementRef.nativeElement;
    // If were to attempt to focus immediately, then the content of the dialog would not yet be
    // ready in instances where change detection has to run first. To deal with this, we simply
    // wait for the microtask queue to be empty when setting focus when autoFocus isn't set to
    // dialog. If the element inside the dialog can't be focused, then the container is focused
    // so the user can't tab into other elements behind it.
    switch (this._config.autoFocus) {
      case false:
      case 'dialog':
        // Ensure that focus is on the dialog container. It's possible that a different
        // component tried to move focus while the open animation was running. See:
        // https://github.com/angular/components/issues/16215. Note that we only want to do this
        // if the focus isn't inside the dialog already, because it's possible that the consumer
        // turned off `autoFocus` in order to move focus themselves.
        if (!this._containsFocus()) {
          element.focus();
        }
        break;
      case true:
      case 'first-tabbable':
        this._focusTrap?.focusInitialElementWhenReady().then(focusedSuccessfully => {
          // If we weren't able to find a focusable element in the dialog, then focus the dialog
          // container instead.
          if (!focusedSuccessfully) {
            this._focusDialogContainer();
          }
        });
        break;
      case 'first-heading':
        this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');
        break;
      default:
        this._focusByCssSelector(this._config.autoFocus);
        break;
    }
  }
  /** Restores focus to the element that was focused before the dialog opened. */
  _restoreFocus() {
    const focusConfig = this._config.restoreFocus;
    let focusTargetElement = null;
    if (typeof focusConfig === 'string') {
      focusTargetElement = this._document.querySelector(focusConfig);
    } else if (typeof focusConfig === 'boolean') {
      focusTargetElement = focusConfig ? this._elementFocusedBeforeDialogWasOpened : null;
    } else if (focusConfig) {
      focusTargetElement = focusConfig;
    }
    // We need the extra check, because IE can set the `activeElement` to null in some cases.
    if (this._config.restoreFocus && focusTargetElement && typeof focusTargetElement.focus === 'function') {
      const activeElement = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getFocusedElementPierceShadowDom)();
      const element = this._elementRef.nativeElement;
      // Make sure that focus is still inside the dialog or is on the body (usually because a
      // non-focusable element like the backdrop was clicked) before moving it. It's possible that
      // the consumer moved it themselves before the animation was done, in which case we shouldn't
      // do anything.
      if (!activeElement || activeElement === this._document.body || activeElement === element || element.contains(activeElement)) {
        if (this._focusMonitor) {
          this._focusMonitor.focusVia(focusTargetElement, this._closeInteractionType);
          this._closeInteractionType = null;
        } else {
          focusTargetElement.focus();
        }
      }
    }
    if (this._focusTrap) {
      this._focusTrap.destroy();
    }
  }
  /** Focuses the dialog container. */
  _focusDialogContainer() {
    // Note that there is no focus method when rendering on the server.
    if (this._elementRef.nativeElement.focus) {
      this._elementRef.nativeElement.focus();
    }
  }
  /** Returns whether focus is inside the dialog. */
  _containsFocus() {
    const element = this._elementRef.nativeElement;
    const activeElement = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getFocusedElementPierceShadowDom)();
    return element === activeElement || element.contains(activeElement);
  }
  /** Sets up the focus trap. */
  _initializeFocusTrap() {
    if (this._platform.isBrowser) {
      this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
      // Save the previously focused element. This element will be re-focused
      // when the dialog closes.
      if (this._document) {
        this._elementFocusedBeforeDialogWasOpened = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getFocusedElementPierceShadowDom)();
      }
    }
  }
  /** Sets up the listener that handles clicks on the dialog backdrop. */
  _handleBackdropClicks() {
    // Clicking on the backdrop will move focus out of dialog.
    // Recapture it if closing via the backdrop is disabled.
    this._overlayRef.backdropClick().subscribe(() => {
      if (this._config.disableClose) {
        this._recaptureFocus();
      }
    });
  }
  static {
    this.ɵfac = function CdkDialogContainer_Factory(t) {
      return new (t || CdkDialogContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.FocusTrapFactory), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DialogConfig), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.OverlayRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.FocusMonitor));
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CdkDialogContainer,
      selectors: [["cdk-dialog-container"]],
      viewQuery: function CdkDialogContainer_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__.CdkPortalOutlet, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._portalOutlet = _t.first);
        }
      },
      hostAttrs: ["tabindex", "-1", 1, "cdk-dialog-container"],
      hostVars: 6,
      hostBindings: function CdkDialogContainer_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx._config.id || null)("role", ctx._config.role)("aria-modal", ctx._config.ariaModal)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledByQueue[0])("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 0,
      consts: [["cdkPortalOutlet", ""]],
      template: function CdkDialogContainer_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CdkDialogContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
        }
      },
      dependencies: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__.CdkPortalOutlet],
      styles: [".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],
      encapsulation: 2
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkDialogContainer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'cdk-dialog-container',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.Default,
      standalone: true,
      imports: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__.CdkPortalOutlet],
      host: {
        'class': 'cdk-dialog-container',
        'tabindex': '-1',
        '[attr.id]': '_config.id || null',
        '[attr.role]': '_config.role',
        '[attr.aria-modal]': '_config.ariaModal',
        '[attr.aria-labelledby]': '_config.ariaLabel ? null : _ariaLabelledByQueue[0]',
        '[attr.aria-label]': '_config.ariaLabel',
        '[attr.aria-describedby]': '_config.ariaDescribedBy || null'
      },
      template: "<ng-template cdkPortalOutlet />\n",
      styles: [".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.FocusTrapFactory
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [DialogConfig]
    }]
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.InteractivityChecker
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
  }, {
    type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.OverlayRef
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.FocusMonitor
  }], {
    _portalOutlet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__.CdkPortalOutlet, {
        static: true
      }]
    }]
  });
})();

/**
 * Reference to a dialog opened via the Dialog service.
 */
class DialogRef {
  constructor(overlayRef, config) {
    this.overlayRef = overlayRef;
    this.config = config;
    /** Emits when the dialog has been closed. */
    this.closed = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.disableClose = config.disableClose;
    this.backdropClick = overlayRef.backdropClick();
    this.keydownEvents = overlayRef.keydownEvents();
    this.outsidePointerEvents = overlayRef.outsidePointerEvents();
    this.id = config.id; // By the time the dialog is created we are guaranteed to have an ID.
    this.keydownEvents.subscribe(event => {
      if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ESCAPE && !this.disableClose && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.hasModifierKey)(event)) {
        event.preventDefault();
        this.close(undefined, {
          focusOrigin: 'keyboard'
        });
      }
    });
    this.backdropClick.subscribe(() => {
      if (!this.disableClose) {
        this.close(undefined, {
          focusOrigin: 'mouse'
        });
      }
    });
    this._detachSubscription = overlayRef.detachments().subscribe(() => {
      // Check specifically for `false`, because we want `undefined` to be treated like `true`.
      if (config.closeOnOverlayDetachments !== false) {
        this.close();
      }
    });
  }
  /**
   * Close the dialog.
   * @param result Optional result to return to the dialog opener.
   * @param options Additional options to customize the closing behavior.
   */
  close(result, options) {
    if (this.containerInstance) {
      const closedSubject = this.closed;
      this.containerInstance._closeInteractionType = options?.focusOrigin || 'program';
      // Drop the detach subscription first since it can be triggered by the
      // `dispose` call and override the result of this closing sequence.
      this._detachSubscription.unsubscribe();
      this.overlayRef.dispose();
      closedSubject.next(result);
      closedSubject.complete();
      this.componentInstance = this.containerInstance = null;
    }
  }
  /** Updates the position of the dialog based on the current position strategy. */
  updatePosition() {
    this.overlayRef.updatePosition();
    return this;
  }
  /**
   * Updates the dialog's width and height.
   * @param width New width of the dialog.
   * @param height New height of the dialog.
   */
  updateSize(width = '', height = '') {
    this.overlayRef.updateSize({
      width,
      height
    });
    return this;
  }
  /** Add a CSS class or an array of classes to the overlay pane. */
  addPanelClass(classes) {
    this.overlayRef.addPanelClass(classes);
    return this;
  }
  /** Remove a CSS class or an array of classes from the overlay pane. */
  removePanelClass(classes) {
    this.overlayRef.removePanelClass(classes);
    return this;
  }
}

/** Injection token for the Dialog's ScrollStrategy. */
const DIALOG_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('DialogScrollStrategy', {
  providedIn: 'root',
  factory: () => {
    const overlay = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.Overlay);
    return () => overlay.scrollStrategies.block();
  }
});
/** Injection token for the Dialog's Data. */
const DIALOG_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('DialogData');
/** Injection token that can be used to provide default options for the dialog module. */
const DEFAULT_DIALOG_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('DefaultDialogConfig');
/**
 * @docs-private
 * @deprecated No longer used. To be removed.
 * @breaking-change 19.0.0
 */
function DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
  return () => overlay.scrollStrategies.block();
}
/**
 * @docs-private
 * @deprecated No longer used. To be removed.
 * @breaking-change 19.0.0
 */
const DIALOG_SCROLL_STRATEGY_PROVIDER = {
  provide: DIALOG_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.Overlay],
  useFactory: DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY
};

/** Unique id for the created dialog. */
let uniqueId = 0;
class Dialog {
  /** Keeps track of the currently-open dialogs. */
  get openDialogs() {
    return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
  }
  /** Stream that emits when a dialog has been opened. */
  get afterOpened() {
    return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
  }
  constructor(_overlay, _injector, _defaultOptions, _parentDialog, _overlayContainer, scrollStrategy) {
    this._overlay = _overlay;
    this._injector = _injector;
    this._defaultOptions = _defaultOptions;
    this._parentDialog = _parentDialog;
    this._overlayContainer = _overlayContainer;
    this._openDialogsAtThisLevel = [];
    this._afterAllClosedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this._afterOpenedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this._ariaHiddenElements = new Map();
    /**
     * Stream that emits when all open dialog have finished closing.
     * Will emit on subscribe if there are no open dialogs to begin with.
     */
    this.afterAllClosed = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.defer)(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(undefined)));
    this._scrollStrategy = scrollStrategy;
  }
  open(componentOrTemplateRef, config) {
    const defaults = this._defaultOptions || new DialogConfig();
    config = {
      ...defaults,
      ...config
    };
    config.id = config.id || `cdk-dialog-${uniqueId++}`;
    if (config.id && this.getDialogById(config.id) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error(`Dialog with id "${config.id}" exists already. The dialog id must be unique.`);
    }
    const overlayConfig = this._getOverlayConfig(config);
    const overlayRef = this._overlay.create(overlayConfig);
    const dialogRef = new DialogRef(overlayRef, config);
    const dialogContainer = this._attachContainer(overlayRef, dialogRef, config);
    dialogRef.containerInstance = dialogContainer;
    this._attachDialogContent(componentOrTemplateRef, dialogRef, dialogContainer, config);
    // If this is the first dialog that we're opening, hide all the non-overlay content.
    if (!this.openDialogs.length) {
      this._hideNonDialogContentFromAssistiveTechnology();
    }
    this.openDialogs.push(dialogRef);
    dialogRef.closed.subscribe(() => this._removeOpenDialog(dialogRef, true));
    this.afterOpened.next(dialogRef);
    return dialogRef;
  }
  /**
   * Closes all of the currently-open dialogs.
   */
  closeAll() {
    reverseForEach(this.openDialogs, dialog => dialog.close());
  }
  /**
   * Finds an open dialog by its id.
   * @param id ID to use when looking up the dialog.
   */
  getDialogById(id) {
    return this.openDialogs.find(dialog => dialog.id === id);
  }
  ngOnDestroy() {
    // Make one pass over all the dialogs that need to be untracked, but should not be closed. We
    // want to stop tracking the open dialog even if it hasn't been closed, because the tracking
    // determines when `aria-hidden` is removed from elements outside the dialog.
    reverseForEach(this._openDialogsAtThisLevel, dialog => {
      // Check for `false` specifically since we want `undefined` to be interpreted as `true`.
      if (dialog.config.closeOnDestroy === false) {
        this._removeOpenDialog(dialog, false);
      }
    });
    // Make a second pass and close the remaining dialogs. We do this second pass in order to
    // correctly dispatch the `afterAllClosed` event in case we have a mixed array of dialogs
    // that should be closed and dialogs that should not.
    reverseForEach(this._openDialogsAtThisLevel, dialog => dialog.close());
    this._afterAllClosedAtThisLevel.complete();
    this._afterOpenedAtThisLevel.complete();
    this._openDialogsAtThisLevel = [];
  }
  /**
   * Creates an overlay config from a dialog config.
   * @param config The dialog configuration.
   * @returns The overlay configuration.
   */
  _getOverlayConfig(config) {
    const state = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.OverlayConfig({
      positionStrategy: config.positionStrategy || this._overlay.position().global().centerHorizontally().centerVertically(),
      scrollStrategy: config.scrollStrategy || this._scrollStrategy(),
      panelClass: config.panelClass,
      hasBackdrop: config.hasBackdrop,
      direction: config.direction,
      minWidth: config.minWidth,
      minHeight: config.minHeight,
      maxWidth: config.maxWidth,
      maxHeight: config.maxHeight,
      width: config.width,
      height: config.height,
      disposeOnNavigation: config.closeOnNavigation
    });
    if (config.backdropClass) {
      state.backdropClass = config.backdropClass;
    }
    return state;
  }
  /**
   * Attaches a dialog container to a dialog's already-created overlay.
   * @param overlay Reference to the dialog's underlying overlay.
   * @param config The dialog configuration.
   * @returns A promise resolving to a ComponentRef for the attached container.
   */
  _attachContainer(overlay, dialogRef, config) {
    const userInjector = config.injector || config.viewContainerRef?.injector;
    const providers = [{
      provide: DialogConfig,
      useValue: config
    }, {
      provide: DialogRef,
      useValue: dialogRef
    }, {
      provide: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.OverlayRef,
      useValue: overlay
    }];
    let containerType;
    if (config.container) {
      if (typeof config.container === 'function') {
        containerType = config.container;
      } else {
        containerType = config.container.type;
        providers.push(...config.container.providers(config));
      }
    } else {
      containerType = CdkDialogContainer;
    }
    const containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__.ComponentPortal(containerType, config.viewContainerRef, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector.create({
      parent: userInjector || this._injector,
      providers
    }), config.componentFactoryResolver);
    const containerRef = overlay.attach(containerPortal);
    return containerRef.instance;
  }
  /**
   * Attaches the user-provided component to the already-created dialog container.
   * @param componentOrTemplateRef The type of component being loaded into the dialog,
   *     or a TemplateRef to instantiate as the content.
   * @param dialogRef Reference to the dialog being opened.
   * @param dialogContainer Component that is going to wrap the dialog content.
   * @param config Configuration used to open the dialog.
   */
  _attachDialogContent(componentOrTemplateRef, dialogRef, dialogContainer, config) {
    if (componentOrTemplateRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef) {
      const injector = this._createInjector(config, dialogRef, dialogContainer, undefined);
      let context = {
        $implicit: config.data,
        dialogRef
      };
      if (config.templateContext) {
        context = {
          ...context,
          ...(typeof config.templateContext === 'function' ? config.templateContext() : config.templateContext)
        };
      }
      dialogContainer.attachTemplatePortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__.TemplatePortal(componentOrTemplateRef, null, context, injector));
    } else {
      const injector = this._createInjector(config, dialogRef, dialogContainer, this._injector);
      const contentRef = dialogContainer.attachComponentPortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__.ComponentPortal(componentOrTemplateRef, config.viewContainerRef, injector, config.componentFactoryResolver));
      dialogRef.componentRef = contentRef;
      dialogRef.componentInstance = contentRef.instance;
    }
  }
  /**
   * Creates a custom injector to be used inside the dialog. This allows a component loaded inside
   * of a dialog to close itself and, optionally, to return a value.
   * @param config Config object that is used to construct the dialog.
   * @param dialogRef Reference to the dialog being opened.
   * @param dialogContainer Component that is going to wrap the dialog content.
   * @param fallbackInjector Injector to use as a fallback when a lookup fails in the custom
   * dialog injector, if the user didn't provide a custom one.
   * @returns The custom injector that can be used inside the dialog.
   */
  _createInjector(config, dialogRef, dialogContainer, fallbackInjector) {
    const userInjector = config.injector || config.viewContainerRef?.injector;
    const providers = [{
      provide: DIALOG_DATA,
      useValue: config.data
    }, {
      provide: DialogRef,
      useValue: dialogRef
    }];
    if (config.providers) {
      if (typeof config.providers === 'function') {
        providers.push(...config.providers(dialogRef, config, dialogContainer));
      } else {
        providers.push(...config.providers);
      }
    }
    if (config.direction && (!userInjector || !userInjector.get(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, null, {
      optional: true
    }))) {
      providers.push({
        provide: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality,
        useValue: {
          value: config.direction,
          change: (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)()
        }
      });
    }
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector.create({
      parent: userInjector || fallbackInjector,
      providers
    });
  }
  /**
   * Removes a dialog from the array of open dialogs.
   * @param dialogRef Dialog to be removed.
   * @param emitEvent Whether to emit an event if this is the last dialog.
   */
  _removeOpenDialog(dialogRef, emitEvent) {
    const index = this.openDialogs.indexOf(dialogRef);
    if (index > -1) {
      this.openDialogs.splice(index, 1);
      // If all the dialogs were closed, remove/restore the `aria-hidden`
      // to a the siblings and emit to the `afterAllClosed` stream.
      if (!this.openDialogs.length) {
        this._ariaHiddenElements.forEach((previousValue, element) => {
          if (previousValue) {
            element.setAttribute('aria-hidden', previousValue);
          } else {
            element.removeAttribute('aria-hidden');
          }
        });
        this._ariaHiddenElements.clear();
        if (emitEvent) {
          this._getAfterAllClosed().next();
        }
      }
    }
  }
  /** Hides all of the content that isn't an overlay from assistive technology. */
  _hideNonDialogContentFromAssistiveTechnology() {
    const overlayContainer = this._overlayContainer.getContainerElement();
    // Ensure that the overlay container is attached to the DOM.
    if (overlayContainer.parentElement) {
      const siblings = overlayContainer.parentElement.children;
      for (let i = siblings.length - 1; i > -1; i--) {
        const sibling = siblings[i];
        if (sibling !== overlayContainer && sibling.nodeName !== 'SCRIPT' && sibling.nodeName !== 'STYLE' && !sibling.hasAttribute('aria-live')) {
          this._ariaHiddenElements.set(sibling, sibling.getAttribute('aria-hidden'));
          sibling.setAttribute('aria-hidden', 'true');
        }
      }
    }
  }
  _getAfterAllClosed() {
    const parent = this._parentDialog;
    return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
  }
  static {
    this.ɵfac = function Dialog_Factory(t) {
      return new (t || Dialog)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DEFAULT_DIALOG_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](Dialog, 12), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.OverlayContainer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DIALOG_SCROLL_STRATEGY));
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: Dialog,
      factory: Dialog.ɵfac,
      providedIn: 'root'
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Dialog, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.Overlay
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector
  }, {
    type: DialogConfig,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [DEFAULT_DIALOG_CONFIG]
    }]
  }, {
    type: Dialog,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.SkipSelf
    }]
  }, {
    type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.OverlayContainer
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [DIALOG_SCROLL_STRATEGY]
    }]
  }], null);
})();
/**
 * Executes a callback against all elements in an array while iterating in reverse.
 * Useful if the array is being modified as it is being iterated.
 */
function reverseForEach(items, callback) {
  let i = items.length;
  while (i--) {
    callback(items[i]);
  }
}
class DialogModule {
  static {
    this.ɵfac = function DialogModule_Factory(t) {
      return new (t || DialogModule)();
    };
  }
  static {
    this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: DialogModule
    });
  }
  static {
    this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      providers: [Dialog],
      imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__.PortalModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.A11yModule,
      // Re-export the PortalModule so that people extending the `CdkDialogContainer`
      // don't have to remember to import it or be faced with an unhelpful error.
      _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__.PortalModule]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DialogModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__.PortalModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.A11yModule, CdkDialogContainer],
      exports: [
      // Re-export the PortalModule so that people extending the `CdkDialogContainer`
      // don't have to remember to import it or be faced with an unhelpful error.
      _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__.PortalModule, CdkDialogContainer],
      providers: [Dialog]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 12587:
/*!************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/dialog.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_DIALOG_DATA: () => (/* binding */ MAT_DIALOG_DATA),
/* harmony export */   MAT_DIALOG_DEFAULT_OPTIONS: () => (/* binding */ MAT_DIALOG_DEFAULT_OPTIONS),
/* harmony export */   MAT_DIALOG_SCROLL_STRATEGY: () => (/* binding */ MAT_DIALOG_SCROLL_STRATEGY),
/* harmony export */   MAT_DIALOG_SCROLL_STRATEGY_PROVIDER: () => (/* binding */ MAT_DIALOG_SCROLL_STRATEGY_PROVIDER),
/* harmony export */   MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY: () => (/* binding */ MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY),
/* harmony export */   MatDialog: () => (/* binding */ MatDialog),
/* harmony export */   MatDialogActions: () => (/* binding */ MatDialogActions),
/* harmony export */   MatDialogClose: () => (/* binding */ MatDialogClose),
/* harmony export */   MatDialogConfig: () => (/* binding */ MatDialogConfig),
/* harmony export */   MatDialogContainer: () => (/* binding */ MatDialogContainer),
/* harmony export */   MatDialogContent: () => (/* binding */ MatDialogContent),
/* harmony export */   MatDialogModule: () => (/* binding */ MatDialogModule),
/* harmony export */   MatDialogRef: () => (/* binding */ MatDialogRef),
/* harmony export */   MatDialogState: () => (/* binding */ MatDialogState),
/* harmony export */   MatDialogTitle: () => (/* binding */ MatDialogTitle),
/* harmony export */   _closeDialogVia: () => (/* binding */ _closeDialogVia),
/* harmony export */   _defaultParams: () => (/* binding */ _defaultParams),
/* harmony export */   matDialogAnimations: () => (/* binding */ matDialogAnimations)
/* harmony export */ });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/overlay */ 81570);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ 72102);
/* harmony import */ var _angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/dialog */ 93482);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/coercion */ 2814);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/portal */ 9168);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 63617);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 137);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 64334);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 63037);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/keycodes */ 74879);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/animations */ 47172);
















/**
 * Configuration for opening a modal dialog with the MatDialog service.
 */
function MatDialogContainer_ng_template_2_Template(rf, ctx) {}
class MatDialogConfig {
  constructor() {
    /** The ARIA role of the dialog element. */
    this.role = 'dialog';
    /** Custom class for the overlay pane. */
    this.panelClass = '';
    /** Whether the dialog has a backdrop. */
    this.hasBackdrop = true;
    /** Custom class for the backdrop. */
    this.backdropClass = '';
    /** Whether the user can use escape or clicking on the backdrop to close the modal. */
    this.disableClose = false;
    /** Width of the dialog. */
    this.width = '';
    /** Height of the dialog. */
    this.height = '';
    /** Data being injected into the child component. */
    this.data = null;
    /** ID of the element that describes the dialog. */
    this.ariaDescribedBy = null;
    /** ID of the element that labels the dialog. */
    this.ariaLabelledBy = null;
    /** Aria label to assign to the dialog element. */
    this.ariaLabel = null;
    /** Whether this is a modal dialog. Used to set the `aria-modal` attribute. */
    this.ariaModal = true;
    /**
     * Where the dialog should focus on open.
     * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or
     * AutoFocusTarget instead.
     */
    this.autoFocus = 'first-tabbable';
    /**
     * Whether the dialog should restore focus to the
     * previously-focused element, after it's closed.
     */
    this.restoreFocus = true;
    /** Whether to wait for the opening animation to finish before trapping focus. */
    this.delayFocusTrap = true;
    /**
     * Whether the dialog should close when the user goes backwards/forwards in history.
     * Note that this usually doesn't include clicking on links (unless the user is using
     * the `HashLocationStrategy`).
     */
    this.closeOnNavigation = true;
    // TODO(jelbourn): add configuration for lifecycle hooks, ARIA labelling.
  }
}

/** Class added when the dialog is open. */
const OPEN_CLASS = 'mdc-dialog--open';
/** Class added while the dialog is opening. */
const OPENING_CLASS = 'mdc-dialog--opening';
/** Class added while the dialog is closing. */
const CLOSING_CLASS = 'mdc-dialog--closing';
/** Duration of the opening animation in milliseconds. */
const OPEN_ANIMATION_DURATION = 150;
/** Duration of the closing animation in milliseconds. */
const CLOSE_ANIMATION_DURATION = 75;
class MatDialogContainer extends _angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_0__.CdkDialogContainer {
  constructor(elementRef, focusTrapFactory, _document, dialogConfig, interactivityChecker, ngZone, overlayRef, _animationMode, focusMonitor) {
    super(elementRef, focusTrapFactory, _document, dialogConfig, interactivityChecker, ngZone, overlayRef, focusMonitor);
    this._animationMode = _animationMode;
    /** Emits when an animation state changes. */
    this._animationStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /** Whether animations are enabled. */
    this._animationsEnabled = this._animationMode !== 'NoopAnimations';
    /** Number of actions projected in the dialog. */
    this._actionSectionCount = 0;
    /** Host element of the dialog container component. */
    this._hostElement = this._elementRef.nativeElement;
    /** Duration of the dialog open animation. */
    this._enterAnimationDuration = this._animationsEnabled ? parseCssTime(this._config.enterAnimationDuration) ?? OPEN_ANIMATION_DURATION : 0;
    /** Duration of the dialog close animation. */
    this._exitAnimationDuration = this._animationsEnabled ? parseCssTime(this._config.exitAnimationDuration) ?? CLOSE_ANIMATION_DURATION : 0;
    /** Current timer for dialog animations. */
    this._animationTimer = null;
    /**
     * Completes the dialog open by clearing potential animation classes, trapping
     * focus and emitting an opened event.
     */
    this._finishDialogOpen = () => {
      this._clearAnimationClasses();
      this._openAnimationDone(this._enterAnimationDuration);
    };
    /**
     * Completes the dialog close by clearing potential animation classes, restoring
     * focus and emitting a closed event.
     */
    this._finishDialogClose = () => {
      this._clearAnimationClasses();
      this._animationStateChanged.emit({
        state: 'closed',
        totalTime: this._exitAnimationDuration
      });
    };
  }
  _contentAttached() {
    // Delegate to the original dialog-container initialization (i.e. saving the
    // previous element, setting up the focus trap and moving focus to the container).
    super._contentAttached();
    // Note: Usually we would be able to use the MDC dialog foundation here to handle
    // the dialog animation for us, but there are a few reasons why we just leverage
    // their styles and not use the runtime foundation code:
    //   1. Foundation does not allow us to disable animations.
    //   2. Foundation contains unnecessary features we don't need and aren't
    //      tree-shakeable. e.g. background scrim, keyboard event handlers for ESC button.
    //   3. Foundation uses unnecessary timers for animations to work around limitations
    //      in React's `setState` mechanism.
    //      https://github.com/material-components/material-components-web/pull/3682.
    this._startOpenAnimation();
  }
  /** Starts the dialog open animation if enabled. */
  _startOpenAnimation() {
    this._animationStateChanged.emit({
      state: 'opening',
      totalTime: this._enterAnimationDuration
    });
    if (this._animationsEnabled) {
      this._hostElement.style.setProperty(TRANSITION_DURATION_PROPERTY, `${this._enterAnimationDuration}ms`);
      // We need to give the `setProperty` call from above some time to be applied.
      // One would expect that the open class is added once the animation finished, but MDC
      // uses the open class in combination with the opening class to start the animation.
      this._requestAnimationFrame(() => this._hostElement.classList.add(OPENING_CLASS, OPEN_CLASS));
      this._waitForAnimationToComplete(this._enterAnimationDuration, this._finishDialogOpen);
    } else {
      this._hostElement.classList.add(OPEN_CLASS);
      // Note: We could immediately finish the dialog opening here with noop animations,
      // but we defer until next tick so that consumers can subscribe to `afterOpened`.
      // Executing this immediately would mean that `afterOpened` emits synchronously
      // on `dialog.open` before the consumer had a change to subscribe to `afterOpened`.
      Promise.resolve().then(() => this._finishDialogOpen());
    }
  }
  /**
   * Starts the exit animation of the dialog if enabled. This method is
   * called by the dialog ref.
   */
  _startExitAnimation() {
    this._animationStateChanged.emit({
      state: 'closing',
      totalTime: this._exitAnimationDuration
    });
    this._hostElement.classList.remove(OPEN_CLASS);
    if (this._animationsEnabled) {
      this._hostElement.style.setProperty(TRANSITION_DURATION_PROPERTY, `${this._exitAnimationDuration}ms`);
      // We need to give the `setProperty` call from above some time to be applied.
      this._requestAnimationFrame(() => this._hostElement.classList.add(CLOSING_CLASS));
      this._waitForAnimationToComplete(this._exitAnimationDuration, this._finishDialogClose);
    } else {
      // This subscription to the `OverlayRef#backdropClick` observable in the `DialogRef` is
      // set up before any user can subscribe to the backdrop click. The subscription triggers
      // the dialog close and this method synchronously. If we'd synchronously emit the `CLOSED`
      // animation state event if animations are disabled, the overlay would be disposed
      // immediately and all other subscriptions to `DialogRef#backdropClick` would be silently
      // skipped. We work around this by waiting with the dialog close until the next tick when
      // all subscriptions have been fired as expected. This is not an ideal solution, but
      // there doesn't seem to be any other good way. Alternatives that have been considered:
      //   1. Deferring `DialogRef.close`. This could be a breaking change due to a new microtask.
      //      Also this issue is specific to the MDC implementation where the dialog could
      //      technically be closed synchronously. In the non-MDC one, Angular animations are used
      //      and closing always takes at least a tick.
      //   2. Ensuring that user subscriptions to `backdropClick`, `keydownEvents` in the dialog
      //      ref are first. This would solve the issue, but has the risk of memory leaks and also
      //      doesn't solve the case where consumers call `DialogRef.close` in their subscriptions.
      // Based on the fact that this is specific to the MDC-based implementation of the dialog
      // animations, the defer is applied here.
      Promise.resolve().then(() => this._finishDialogClose());
    }
  }
  /**
   * Updates the number action sections.
   * @param delta Increase/decrease in the number of sections.
   */
  _updateActionSectionCount(delta) {
    this._actionSectionCount += delta;
    this._changeDetectorRef.markForCheck();
  }
  /** Clears all dialog animation classes. */
  _clearAnimationClasses() {
    this._hostElement.classList.remove(OPENING_CLASS, CLOSING_CLASS);
  }
  _waitForAnimationToComplete(duration, callback) {
    if (this._animationTimer !== null) {
      clearTimeout(this._animationTimer);
    }
    // Note that we want this timer to run inside the NgZone, because we want
    // the related events like `afterClosed` to be inside the zone as well.
    this._animationTimer = setTimeout(callback, duration);
  }
  /** Runs a callback in `requestAnimationFrame`, if available. */
  _requestAnimationFrame(callback) {
    this._ngZone.runOutsideAngular(() => {
      if (typeof requestAnimationFrame === 'function') {
        requestAnimationFrame(callback);
      } else {
        callback();
      }
    });
  }
  _captureInitialFocus() {
    if (!this._config.delayFocusTrap) {
      this._trapFocus();
    }
  }
  /**
   * Callback for when the open dialog animation has finished. Intended to
   * be called by sub-classes that use different animation implementations.
   */
  _openAnimationDone(totalTime) {
    if (this._config.delayFocusTrap) {
      this._trapFocus();
    }
    this._animationStateChanged.next({
      state: 'opened',
      totalTime
    });
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._animationTimer !== null) {
      clearTimeout(this._animationTimer);
    }
  }
  attachComponentPortal(portal) {
    // When a component is passed into the dialog, the host element interrupts
    // the `display:flex` from affecting the dialog title, content, and
    // actions. To fix this, we make the component host `display: contents` by
    // marking its host with the `mat-mdc-dialog-component-host` class.
    //
    // Note that this problem does not exist when a template ref is used since
    // the title, contents, and actions are then nested directly under the
    // dialog surface.
    const ref = super.attachComponentPortal(portal);
    ref.location.nativeElement.classList.add('mat-mdc-dialog-component-host');
    return ref;
  }
  static {
    this.ɵfac = function MatDialogContainer_Factory(t) {
      return new (t || MatDialogContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusTrapFactory), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MatDialogConfig), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.OverlayRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusMonitor));
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatDialogContainer,
      selectors: [["mat-dialog-container"]],
      hostAttrs: ["tabindex", "-1", 1, "mat-mdc-dialog-container", "mdc-dialog"],
      hostVars: 10,
      hostBindings: function MatDialogContainer_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("id", ctx._config.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-modal", ctx._config.ariaModal)("role", ctx._config.role)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledByQueue[0])("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("_mat-animation-noopable", !ctx._animationsEnabled)("mat-mdc-dialog-container-with-actions", ctx._actionSectionCount > 0);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 0,
      consts: [[1, "mdc-dialog__container"], [1, "mat-mdc-dialog-surface", "mdc-dialog__surface"], ["cdkPortalOutlet", ""]],
      template: function MatDialogContainer_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MatDialogContainer_ng_template_2_Template, 0, 0, "ng-template", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
      },
      dependencies: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__.CdkPortalOutlet],
      styles: [".mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:none}@media(max-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 112px)}}@media(max-width: 720px)and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:560px}}@media(max-width: 720px)and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media(max-width: 720px)and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media(max-width: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 400px),(max-width: 600px),(min-width: 720px)and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(min-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto;outline:0;transform:scale(0.8)}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media screen and (forced-colors: active){.mdc-dialog__surface::before{border-color:CanvasText}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:\"\";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid rgba(0,0,0,0);display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}@media screen and (forced-colors: active){.mdc-dialog--fullscreen .mdc-dialog__header{border-bottom-color:CanvasText}}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--fullscreen--titleless .mdc-dialog__close{margin-top:4px}.mdc-dialog--fullscreen--titleless.mdc-dialog--scrollable .mdc-dialog__close{margin-top:0}.mdc-dialog__content{flex-grow:1;box-sizing:border-box;margin:0;overflow:auto}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--closing .mdc-dialog__surface{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{opacity:1}.mdc-dialog--open .mdc-dialog__surface{transform:none}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%;z-index:1}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}.mdc-dialog--no-content-padding .mdc-dialog__content{padding:0}.mdc-dialog--sheet .mdc-dialog__container .mdc-dialog__close{right:12px;top:9px;position:absolute;z-index:1}.mdc-dialog__scrim--removed{pointer-events:none}.mdc-dialog__scrim--removed .mdc-dialog__scrim,.mdc-dialog__scrim--removed .mdc-dialog__surface-scrim{display:none}.mat-mdc-dialog-content{max-height:65vh}.mat-mdc-dialog-container{position:static;display:block}.mat-mdc-dialog-container,.mat-mdc-dialog-container .mdc-dialog__container,.mat-mdc-dialog-container .mdc-dialog__surface{max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mat-mdc-dialog-container .mdc-dialog__surface{width:100%;height:100%}.mat-mdc-dialog-component-host{display:contents}.mat-mdc-dialog-container{--mdc-dialog-container-elevation: var(--mdc-dialog-container-elevation-shadow);outline:0}.mat-mdc-dialog-container .mdc-dialog__surface{background-color:var(--mdc-dialog-container-color, white)}.mat-mdc-dialog-container .mdc-dialog__surface{box-shadow:var(--mdc-dialog-container-elevation, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}.mat-mdc-dialog-container .mdc-dialog__surface{border-radius:var(--mdc-dialog-container-shape, 4px)}.mat-mdc-dialog-container .mdc-dialog__title{font-family:var(--mdc-dialog-subhead-font, Roboto, sans-serif);line-height:var(--mdc-dialog-subhead-line-height, 1.5rem);font-size:var(--mdc-dialog-subhead-size, 1rem);font-weight:var(--mdc-dialog-subhead-weight, 400);letter-spacing:var(--mdc-dialog-subhead-tracking, 0.03125em)}.mat-mdc-dialog-container .mdc-dialog__title{color:var(--mdc-dialog-subhead-color, rgba(0, 0, 0, 0.87))}.mat-mdc-dialog-container .mdc-dialog__content{font-family:var(--mdc-dialog-supporting-text-font, Roboto, sans-serif);line-height:var(--mdc-dialog-supporting-text-line-height, 1.5rem);font-size:var(--mdc-dialog-supporting-text-size, 1rem);font-weight:var(--mdc-dialog-supporting-text-weight, 400);letter-spacing:var(--mdc-dialog-supporting-text-tracking, 0.03125em)}.mat-mdc-dialog-container .mdc-dialog__content{color:var(--mdc-dialog-supporting-text-color, rgba(0, 0, 0, 0.6))}.mat-mdc-dialog-container .mdc-dialog__container{transition:opacity linear var(--mat-dialog-transition-duration, 0ms)}.mat-mdc-dialog-container .mdc-dialog__surface{transition:transform var(--mat-dialog-transition-duration, 0ms) 0ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-dialog-container._mat-animation-noopable .mdc-dialog__container,.mat-mdc-dialog-container._mat-animation-noopable .mdc-dialog__surface{transition:none}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 80vw);min-width:var(--mat-dialog-container-min-width, 0)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, 80vw)}}.mat-mdc-dialog-title{padding:var(--mat-dialog-headline-padding, 0 24px 9px)}.mat-mdc-dialog-content{display:block}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{padding:var(--mat-dialog-actions-padding, 8px);justify-content:var(--mat-dialog-actions-alignment, start)}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}"],
      encapsulation: 2
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatDialogContainer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'mat-dialog-container',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.Default,
      standalone: true,
      imports: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__.CdkPortalOutlet],
      host: {
        'class': 'mat-mdc-dialog-container mdc-dialog',
        'tabindex': '-1',
        '[attr.aria-modal]': '_config.ariaModal',
        '[id]': '_config.id',
        '[attr.role]': '_config.role',
        '[attr.aria-labelledby]': '_config.ariaLabel ? null : _ariaLabelledByQueue[0]',
        '[attr.aria-label]': '_config.ariaLabel',
        '[attr.aria-describedby]': '_config.ariaDescribedBy || null',
        '[class._mat-animation-noopable]': '!_animationsEnabled',
        '[class.mat-mdc-dialog-container-with-actions]': '_actionSectionCount > 0'
      },
      template: "<div class=\"mdc-dialog__container\">\n  <div class=\"mat-mdc-dialog-surface mdc-dialog__surface\">\n    <ng-template cdkPortalOutlet />\n  </div>\n</div>\n",
      styles: [".mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:none}@media(max-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 112px)}}@media(max-width: 720px)and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:560px}}@media(max-width: 720px)and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media(max-width: 720px)and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media(max-width: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 400px),(max-width: 600px),(min-width: 720px)and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(min-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto;outline:0;transform:scale(0.8)}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media screen and (forced-colors: active){.mdc-dialog__surface::before{border-color:CanvasText}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:\"\";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid rgba(0,0,0,0);display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}@media screen and (forced-colors: active){.mdc-dialog--fullscreen .mdc-dialog__header{border-bottom-color:CanvasText}}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--fullscreen--titleless .mdc-dialog__close{margin-top:4px}.mdc-dialog--fullscreen--titleless.mdc-dialog--scrollable .mdc-dialog__close{margin-top:0}.mdc-dialog__content{flex-grow:1;box-sizing:border-box;margin:0;overflow:auto}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--closing .mdc-dialog__surface{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{opacity:1}.mdc-dialog--open .mdc-dialog__surface{transform:none}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%;z-index:1}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}.mdc-dialog--no-content-padding .mdc-dialog__content{padding:0}.mdc-dialog--sheet .mdc-dialog__container .mdc-dialog__close{right:12px;top:9px;position:absolute;z-index:1}.mdc-dialog__scrim--removed{pointer-events:none}.mdc-dialog__scrim--removed .mdc-dialog__scrim,.mdc-dialog__scrim--removed .mdc-dialog__surface-scrim{display:none}.mat-mdc-dialog-content{max-height:65vh}.mat-mdc-dialog-container{position:static;display:block}.mat-mdc-dialog-container,.mat-mdc-dialog-container .mdc-dialog__container,.mat-mdc-dialog-container .mdc-dialog__surface{max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mat-mdc-dialog-container .mdc-dialog__surface{width:100%;height:100%}.mat-mdc-dialog-component-host{display:contents}.mat-mdc-dialog-container{--mdc-dialog-container-elevation: var(--mdc-dialog-container-elevation-shadow);outline:0}.mat-mdc-dialog-container .mdc-dialog__surface{background-color:var(--mdc-dialog-container-color, white)}.mat-mdc-dialog-container .mdc-dialog__surface{box-shadow:var(--mdc-dialog-container-elevation, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}.mat-mdc-dialog-container .mdc-dialog__surface{border-radius:var(--mdc-dialog-container-shape, 4px)}.mat-mdc-dialog-container .mdc-dialog__title{font-family:var(--mdc-dialog-subhead-font, Roboto, sans-serif);line-height:var(--mdc-dialog-subhead-line-height, 1.5rem);font-size:var(--mdc-dialog-subhead-size, 1rem);font-weight:var(--mdc-dialog-subhead-weight, 400);letter-spacing:var(--mdc-dialog-subhead-tracking, 0.03125em)}.mat-mdc-dialog-container .mdc-dialog__title{color:var(--mdc-dialog-subhead-color, rgba(0, 0, 0, 0.87))}.mat-mdc-dialog-container .mdc-dialog__content{font-family:var(--mdc-dialog-supporting-text-font, Roboto, sans-serif);line-height:var(--mdc-dialog-supporting-text-line-height, 1.5rem);font-size:var(--mdc-dialog-supporting-text-size, 1rem);font-weight:var(--mdc-dialog-supporting-text-weight, 400);letter-spacing:var(--mdc-dialog-supporting-text-tracking, 0.03125em)}.mat-mdc-dialog-container .mdc-dialog__content{color:var(--mdc-dialog-supporting-text-color, rgba(0, 0, 0, 0.6))}.mat-mdc-dialog-container .mdc-dialog__container{transition:opacity linear var(--mat-dialog-transition-duration, 0ms)}.mat-mdc-dialog-container .mdc-dialog__surface{transition:transform var(--mat-dialog-transition-duration, 0ms) 0ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-dialog-container._mat-animation-noopable .mdc-dialog__container,.mat-mdc-dialog-container._mat-animation-noopable .mdc-dialog__surface{transition:none}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 80vw);min-width:var(--mat-dialog-container-min-width, 0)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, 80vw)}}.mat-mdc-dialog-title{padding:var(--mat-dialog-headline-padding, 0 24px 9px)}.mat-mdc-dialog-content{display:block}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{padding:var(--mat-dialog-actions-padding, 8px);justify-content:var(--mat-dialog-actions-alignment, start)}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}"]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusTrapFactory
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT]
    }]
  }, {
    type: MatDialogConfig
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.InteractivityChecker
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
  }, {
    type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.OverlayRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE]
    }]
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusMonitor
  }], null);
})();
const TRANSITION_DURATION_PROPERTY = '--mat-dialog-transition-duration';
// TODO(mmalerba): Remove this function after animation durations are required
//  to be numbers.
/**
 * Converts a CSS time string to a number in ms. If the given time is already a
 * number, it is assumed to be in ms.
 */
function parseCssTime(time) {
  if (time == null) {
    return null;
  }
  if (typeof time === 'number') {
    return time;
  }
  if (time.endsWith('ms')) {
    return (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__.coerceNumberProperty)(time.substring(0, time.length - 2));
  }
  if (time.endsWith('s')) {
    return (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__.coerceNumberProperty)(time.substring(0, time.length - 1)) * 1000;
  }
  if (time === '0') {
    return 0;
  }
  return null; // anything else is invalid.
}
var MatDialogState;
(function (MatDialogState) {
  MatDialogState[MatDialogState["OPEN"] = 0] = "OPEN";
  MatDialogState[MatDialogState["CLOSING"] = 1] = "CLOSING";
  MatDialogState[MatDialogState["CLOSED"] = 2] = "CLOSED";
})(MatDialogState || (MatDialogState = {}));
/**
 * Reference to a dialog opened via the MatDialog service.
 */
class MatDialogRef {
  constructor(_ref, config, _containerInstance) {
    this._ref = _ref;
    this._containerInstance = _containerInstance;
    /** Subject for notifying the user that the dialog has finished opening. */
    this._afterOpened = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    /** Subject for notifying the user that the dialog has started closing. */
    this._beforeClosed = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    /** Current state of the dialog. */
    this._state = MatDialogState.OPEN;
    this.disableClose = config.disableClose;
    this.id = _ref.id;
    // Used to target panels specifically tied to dialogs.
    _ref.addPanelClass('mat-mdc-dialog-panel');
    // Emit when opening animation completes
    _containerInstance._animationStateChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(event => event.state === 'opened'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe(() => {
      this._afterOpened.next();
      this._afterOpened.complete();
    });
    // Dispose overlay when closing animation is complete
    _containerInstance._animationStateChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(event => event.state === 'closed'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe(() => {
      clearTimeout(this._closeFallbackTimeout);
      this._finishDialogClose();
    });
    _ref.overlayRef.detachments().subscribe(() => {
      this._beforeClosed.next(this._result);
      this._beforeClosed.complete();
      this._finishDialogClose();
    });
    (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.merge)(this.backdropClick(), this.keydownEvents().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(event => event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__.ESCAPE && !this.disableClose && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__.hasModifierKey)(event)))).subscribe(event => {
      if (!this.disableClose) {
        event.preventDefault();
        _closeDialogVia(this, event.type === 'keydown' ? 'keyboard' : 'mouse');
      }
    });
  }
  /**
   * Close the dialog.
   * @param dialogResult Optional result to return to the dialog opener.
   */
  close(dialogResult) {
    this._result = dialogResult;
    // Transition the backdrop in parallel to the dialog.
    this._containerInstance._animationStateChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(event => event.state === 'closing'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe(event => {
      this._beforeClosed.next(dialogResult);
      this._beforeClosed.complete();
      this._ref.overlayRef.detachBackdrop();
      // The logic that disposes of the overlay depends on the exit animation completing, however
      // it isn't guaranteed if the parent view is destroyed while it's running. Add a fallback
      // timeout which will clean everything up if the animation hasn't fired within the specified
      // amount of time plus 100ms. We don't need to run this outside the NgZone, because for the
      // vast majority of cases the timeout will have been cleared before it has the chance to fire.
      this._closeFallbackTimeout = setTimeout(() => this._finishDialogClose(), event.totalTime + 100);
    });
    this._state = MatDialogState.CLOSING;
    this._containerInstance._startExitAnimation();
  }
  /**
   * Gets an observable that is notified when the dialog is finished opening.
   */
  afterOpened() {
    return this._afterOpened;
  }
  /**
   * Gets an observable that is notified when the dialog is finished closing.
   */
  afterClosed() {
    return this._ref.closed;
  }
  /**
   * Gets an observable that is notified when the dialog has started closing.
   */
  beforeClosed() {
    return this._beforeClosed;
  }
  /**
   * Gets an observable that emits when the overlay's backdrop has been clicked.
   */
  backdropClick() {
    return this._ref.backdropClick;
  }
  /**
   * Gets an observable that emits when keydown events are targeted on the overlay.
   */
  keydownEvents() {
    return this._ref.keydownEvents;
  }
  /**
   * Updates the dialog's position.
   * @param position New dialog position.
   */
  updatePosition(position) {
    let strategy = this._ref.config.positionStrategy;
    if (position && (position.left || position.right)) {
      position.left ? strategy.left(position.left) : strategy.right(position.right);
    } else {
      strategy.centerHorizontally();
    }
    if (position && (position.top || position.bottom)) {
      position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
    } else {
      strategy.centerVertically();
    }
    this._ref.updatePosition();
    return this;
  }
  /**
   * Updates the dialog's width and height.
   * @param width New width of the dialog.
   * @param height New height of the dialog.
   */
  updateSize(width = '', height = '') {
    this._ref.updateSize(width, height);
    return this;
  }
  /** Add a CSS class or an array of classes to the overlay pane. */
  addPanelClass(classes) {
    this._ref.addPanelClass(classes);
    return this;
  }
  /** Remove a CSS class or an array of classes from the overlay pane. */
  removePanelClass(classes) {
    this._ref.removePanelClass(classes);
    return this;
  }
  /** Gets the current state of the dialog's lifecycle. */
  getState() {
    return this._state;
  }
  /**
   * Finishes the dialog close by updating the state of the dialog
   * and disposing the overlay.
   */
  _finishDialogClose() {
    this._state = MatDialogState.CLOSED;
    this._ref.close(this._result, {
      focusOrigin: this._closeInteractionType
    });
    this.componentInstance = null;
  }
}
/**
 * Closes the dialog with the specified interaction type. This is currently not part of
 * `MatDialogRef` as that would conflict with custom dialog ref mocks provided in tests.
 * More details. See: https://github.com/angular/components/pull/9257#issuecomment-651342226.
 */
// TODO: Move this back into `MatDialogRef` when we provide an official mock dialog ref.
function _closeDialogVia(ref, interactionType, result) {
  ref._closeInteractionType = interactionType;
  return ref.close(result);
}

/** Injection token that can be used to access the data that was passed in to a dialog. */
const MAT_DIALOG_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('MatMdcDialogData');
/** Injection token that can be used to specify default dialog options. */
const MAT_DIALOG_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('mat-mdc-dialog-default-options');
/** Injection token that determines the scroll handling while the dialog is open. */
const MAT_DIALOG_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('mat-mdc-dialog-scroll-strategy', {
  providedIn: 'root',
  factory: () => {
    const overlay = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.Overlay);
    return () => overlay.scrollStrategies.block();
  }
});
/**
 * @docs-private
 * @deprecated No longer used. To be removed.
 * @breaking-change 19.0.0
 */
function MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
  return () => overlay.scrollStrategies.block();
}
/**
 * @docs-private
 * @deprecated No longer used. To be removed.
 * @breaking-change 19.0.0
 */
const MAT_DIALOG_SCROLL_STRATEGY_PROVIDER = {
  provide: MAT_DIALOG_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.Overlay],
  useFactory: MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY
};
// Counter for unique dialog ids.
let uniqueId = 0;
/**
 * Service to open Material Design modal dialogs.
 */
class MatDialog {
  /** Keeps track of the currently-open dialogs. */
  get openDialogs() {
    return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
  }
  /** Stream that emits when a dialog has been opened. */
  get afterOpened() {
    return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
  }
  _getAfterAllClosed() {
    const parent = this._parentDialog;
    return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
  }
  constructor(_overlay, injector,
  /**
   * @deprecated `_location` parameter to be removed.
   * @breaking-change 10.0.0
   */
  location, _defaultOptions, _scrollStrategy, _parentDialog,
  /**
   * @deprecated No longer used. To be removed.
   * @breaking-change 15.0.0
   */
  _overlayContainer,
  /**
   * @deprecated No longer used. To be removed.
   * @breaking-change 14.0.0
   */
  _animationMode) {
    this._overlay = _overlay;
    this._defaultOptions = _defaultOptions;
    this._scrollStrategy = _scrollStrategy;
    this._parentDialog = _parentDialog;
    this._openDialogsAtThisLevel = [];
    this._afterAllClosedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this._afterOpenedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.dialogConfigClass = MatDialogConfig;
    /**
     * Stream that emits when all open dialog have finished closing.
     * Will emit on subscribe if there are no open dialogs to begin with.
     */
    this.afterAllClosed = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.defer)(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.startWith)(undefined)));
    this._dialog = injector.get(_angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_0__.Dialog);
    this._dialogRefConstructor = MatDialogRef;
    this._dialogContainerType = MatDialogContainer;
    this._dialogDataToken = MAT_DIALOG_DATA;
  }
  open(componentOrTemplateRef, config) {
    let dialogRef;
    config = {
      ...(this._defaultOptions || new MatDialogConfig()),
      ...config
    };
    config.id = config.id || `mat-mdc-dialog-${uniqueId++}`;
    config.scrollStrategy = config.scrollStrategy || this._scrollStrategy();
    const cdkRef = this._dialog.open(componentOrTemplateRef, {
      ...config,
      positionStrategy: this._overlay.position().global().centerHorizontally().centerVertically(),
      // Disable closing since we need to sync it up to the animation ourselves.
      disableClose: true,
      // Disable closing on destroy, because this service cleans up its open dialogs as well.
      // We want to do the cleanup here, rather than the CDK service, because the CDK destroys
      // the dialogs immediately whereas we want it to wait for the animations to finish.
      closeOnDestroy: false,
      // Disable closing on detachments so that we can sync up the animation.
      // The Material dialog ref handles this manually.
      closeOnOverlayDetachments: false,
      container: {
        type: this._dialogContainerType,
        providers: () => [
        // Provide our config as the CDK config as well since it has the same interface as the
        // CDK one, but it contains the actual values passed in by the user for things like
        // `disableClose` which we disable for the CDK dialog since we handle it ourselves.
        {
          provide: this.dialogConfigClass,
          useValue: config
        }, {
          provide: _angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_0__.DialogConfig,
          useValue: config
        }]
      },
      templateContext: () => ({
        dialogRef
      }),
      providers: (ref, cdkConfig, dialogContainer) => {
        dialogRef = new this._dialogRefConstructor(ref, config, dialogContainer);
        dialogRef.updatePosition(config?.position);
        return [{
          provide: this._dialogContainerType,
          useValue: dialogContainer
        }, {
          provide: this._dialogDataToken,
          useValue: cdkConfig.data
        }, {
          provide: this._dialogRefConstructor,
          useValue: dialogRef
        }];
      }
    });
    // This can't be assigned in the `providers` callback, because
    // the instance hasn't been assigned to the CDK ref yet.
    dialogRef.componentRef = cdkRef.componentRef;
    dialogRef.componentInstance = cdkRef.componentInstance;
    this.openDialogs.push(dialogRef);
    this.afterOpened.next(dialogRef);
    dialogRef.afterClosed().subscribe(() => {
      const index = this.openDialogs.indexOf(dialogRef);
      if (index > -1) {
        this.openDialogs.splice(index, 1);
        if (!this.openDialogs.length) {
          this._getAfterAllClosed().next();
        }
      }
    });
    return dialogRef;
  }
  /**
   * Closes all of the currently-open dialogs.
   */
  closeAll() {
    this._closeDialogs(this.openDialogs);
  }
  /**
   * Finds an open dialog by its id.
   * @param id ID to use when looking up the dialog.
   */
  getDialogById(id) {
    return this.openDialogs.find(dialog => dialog.id === id);
  }
  ngOnDestroy() {
    // Only close the dialogs at this level on destroy
    // since the parent service may still be active.
    this._closeDialogs(this._openDialogsAtThisLevel);
    this._afterAllClosedAtThisLevel.complete();
    this._afterOpenedAtThisLevel.complete();
  }
  _closeDialogs(dialogs) {
    let i = dialogs.length;
    while (i--) {
      dialogs[i].close();
    }
  }
  static {
    this.ɵfac = function MatDialog_Factory(t) {
      return new (t || MatDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MAT_DIALOG_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MAT_DIALOG_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MatDialog, 12), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.OverlayContainer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE, 8));
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: MatDialog,
      factory: MatDialog.ɵfac,
      providedIn: 'root'
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatDialog, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.Overlay
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }]
  }, {
    type: MatDialogConfig,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [MAT_DIALOG_DEFAULT_OPTIONS]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [MAT_DIALOG_SCROLL_STRATEGY]
    }]
  }, {
    type: MatDialog,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.SkipSelf
    }]
  }, {
    type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.OverlayContainer
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE]
    }]
  }], null);
})();

/** Counter used to generate unique IDs for dialog elements. */
let dialogElementUid = 0;
/**
 * Button that will close the current dialog.
 */
class MatDialogClose {
  constructor(
  // The dialog title directive is always used in combination with a `MatDialogRef`.
  // tslint:disable-next-line: lightweight-tokens
  dialogRef, _elementRef, _dialog) {
    this.dialogRef = dialogRef;
    this._elementRef = _elementRef;
    this._dialog = _dialog;
    /** Default to "button" to prevents accidental form submits. */
    this.type = 'button';
  }
  ngOnInit() {
    if (!this.dialogRef) {
      // When this directive is included in a dialog via TemplateRef (rather than being
      // in a Component), the DialogRef isn't available via injection because embedded
      // views cannot be given a custom injector. Instead, we look up the DialogRef by
      // ID. This must occur in `onInit`, as the ID binding for the dialog container won't
      // be resolved at constructor time.
      this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
    }
  }
  ngOnChanges(changes) {
    const proxiedChange = changes['_matDialogClose'] || changes['_matDialogCloseResult'];
    if (proxiedChange) {
      this.dialogResult = proxiedChange.currentValue;
    }
  }
  _onButtonClick(event) {
    // Determinate the focus origin using the click event, because using the FocusMonitor will
    // result in incorrect origins. Most of the time, close buttons will be auto focused in the
    // dialog, and therefore clicking the button won't result in a focus change. This means that
    // the FocusMonitor won't detect any origin change, and will always output `program`.
    _closeDialogVia(this.dialogRef, event.screenX === 0 && event.screenY === 0 ? 'keyboard' : 'mouse', this.dialogResult);
  }
  static {
    this.ɵfac = function MatDialogClose_Factory(t) {
      return new (t || MatDialogClose)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MatDialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MatDialog));
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatDialogClose,
      selectors: [["", "mat-dialog-close", ""], ["", "matDialogClose", ""]],
      hostVars: 2,
      hostBindings: function MatDialogClose_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatDialogClose_click_HostBindingHandler($event) {
            return ctx._onButtonClick($event);
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.ariaLabel || null)("type", ctx.type);
        }
      },
      inputs: {
        ariaLabel: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInputFlags"].None, "aria-label", "ariaLabel"],
        type: "type",
        dialogResult: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInputFlags"].None, "mat-dialog-close", "dialogResult"],
        _matDialogClose: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInputFlags"].None, "matDialogClose", "_matDialogClose"]
      },
      exportAs: ["matDialogClose"],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatDialogClose, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[mat-dialog-close], [matDialogClose]',
      exportAs: 'matDialogClose',
      standalone: true,
      host: {
        '(click)': '_onButtonClick($event)',
        '[attr.aria-label]': 'ariaLabel || null',
        '[attr.type]': 'type'
      }
    }]
  }], () => [{
    type: MatDialogRef,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
  }, {
    type: MatDialog
  }], {
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['aria-label']
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    dialogResult: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['mat-dialog-close']
    }],
    _matDialogClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['matDialogClose']
    }]
  });
})();
class MatDialogLayoutSection {
  constructor(
  // The dialog title directive is always used in combination with a `MatDialogRef`.
  // tslint:disable-next-line: lightweight-tokens
  _dialogRef, _elementRef, _dialog) {
    this._dialogRef = _dialogRef;
    this._elementRef = _elementRef;
    this._dialog = _dialog;
  }
  ngOnInit() {
    if (!this._dialogRef) {
      this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
    }
    if (this._dialogRef) {
      Promise.resolve().then(() => {
        this._onAdd();
      });
    }
  }
  ngOnDestroy() {
    // Note: we null check because there are some internal
    // tests that are mocking out `MatDialogRef` incorrectly.
    const instance = this._dialogRef?._containerInstance;
    if (instance) {
      Promise.resolve().then(() => {
        this._onRemove();
      });
    }
  }
  static {
    this.ɵfac = function MatDialogLayoutSection_Factory(t) {
      return new (t || MatDialogLayoutSection)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MatDialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MatDialog));
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatDialogLayoutSection,
      standalone: true
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatDialogLayoutSection, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      standalone: true
    }]
  }], () => [{
    type: MatDialogRef,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
  }, {
    type: MatDialog
  }], null);
})();
/**
 * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.
 */
class MatDialogTitle extends MatDialogLayoutSection {
  constructor() {
    super(...arguments);
    this.id = `mat-mdc-dialog-title-${dialogElementUid++}`;
  }
  _onAdd() {
    // Note: we null check the queue, because there are some internal
    // tests that are mocking out `MatDialogRef` incorrectly.
    this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id);
  }
  _onRemove() {
    this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id);
  }
  static {
    this.ɵfac = /* @__PURE__ */(() => {
      let ɵMatDialogTitle_BaseFactory;
      return function MatDialogTitle_Factory(t) {
        return (ɵMatDialogTitle_BaseFactory || (ɵMatDialogTitle_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatDialogTitle)))(t || MatDialogTitle);
      };
    })();
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatDialogTitle,
      selectors: [["", "mat-dialog-title", ""], ["", "matDialogTitle", ""]],
      hostAttrs: [1, "mat-mdc-dialog-title", "mdc-dialog__title"],
      hostVars: 1,
      hostBindings: function MatDialogTitle_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("id", ctx.id);
        }
      },
      inputs: {
        id: "id"
      },
      exportAs: ["matDialogTitle"],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatDialogTitle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[mat-dialog-title], [matDialogTitle]',
      exportAs: 'matDialogTitle',
      standalone: true,
      host: {
        'class': 'mat-mdc-dialog-title mdc-dialog__title',
        '[id]': 'id'
      }
    }]
  }], null, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
/**
 * Scrollable content container of a dialog.
 */
class MatDialogContent {
  static {
    this.ɵfac = function MatDialogContent_Factory(t) {
      return new (t || MatDialogContent)();
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatDialogContent,
      selectors: [["", "mat-dialog-content", ""], ["mat-dialog-content"], ["", "matDialogContent", ""]],
      hostAttrs: [1, "mat-mdc-dialog-content", "mdc-dialog__content"],
      standalone: true
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatDialogContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: `[mat-dialog-content], mat-dialog-content, [matDialogContent]`,
      host: {
        'class': 'mat-mdc-dialog-content mdc-dialog__content'
      },
      standalone: true
    }]
  }], null, null);
})();
/**
 * Container for the bottom action buttons in a dialog.
 * Stays fixed to the bottom when scrolling.
 */
class MatDialogActions extends MatDialogLayoutSection {
  _onAdd() {
    this._dialogRef._containerInstance?._updateActionSectionCount?.(1);
  }
  _onRemove() {
    this._dialogRef._containerInstance?._updateActionSectionCount?.(-1);
  }
  static {
    this.ɵfac = /* @__PURE__ */(() => {
      let ɵMatDialogActions_BaseFactory;
      return function MatDialogActions_Factory(t) {
        return (ɵMatDialogActions_BaseFactory || (ɵMatDialogActions_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatDialogActions)))(t || MatDialogActions);
      };
    })();
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatDialogActions,
      selectors: [["", "mat-dialog-actions", ""], ["mat-dialog-actions"], ["", "matDialogActions", ""]],
      hostAttrs: [1, "mat-mdc-dialog-actions", "mdc-dialog__actions"],
      hostVars: 6,
      hostBindings: function MatDialogActions_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-mdc-dialog-actions-align-start", ctx.align === "start")("mat-mdc-dialog-actions-align-center", ctx.align === "center")("mat-mdc-dialog-actions-align-end", ctx.align === "end");
        }
      },
      inputs: {
        align: "align"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatDialogActions, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: `[mat-dialog-actions], mat-dialog-actions, [matDialogActions]`,
      standalone: true,
      host: {
        'class': 'mat-mdc-dialog-actions mdc-dialog__actions',
        '[class.mat-mdc-dialog-actions-align-start]': 'align === "start"',
        '[class.mat-mdc-dialog-actions-align-center]': 'align === "center"',
        '[class.mat-mdc-dialog-actions-align-end]': 'align === "end"'
      }
    }]
  }], null, {
    align: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
/**
 * Finds the closest MatDialogRef to an element by looking at the DOM.
 * @param element Element relative to which to look for a dialog.
 * @param openDialogs References to the currently-open dialogs.
 */
function getClosestDialog(element, openDialogs) {
  let parent = element.nativeElement.parentElement;
  while (parent && !parent.classList.contains('mat-mdc-dialog-container')) {
    parent = parent.parentElement;
  }
  return parent ? openDialogs.find(dialog => dialog.id === parent.id) : null;
}
const DIRECTIVES = [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent];
class MatDialogModule {
  static {
    this.ɵfac = function MatDialogModule_Factory(t) {
      return new (t || MatDialogModule)();
    };
  }
  static {
    this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MatDialogModule
    });
  }
  static {
    this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      providers: [MatDialog],
      imports: [_angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_0__.DialogModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__.PortalModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatCommonModule]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatDialogModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_0__.DialogModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__.PortalModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatCommonModule, ...DIRECTIVES],
      exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatCommonModule, ...DIRECTIVES],
      providers: [MatDialog]
    }]
  }], null, null);
})();

/**
 * Default parameters for the animation for backwards compatibility.
 * @docs-private
 */
const _defaultParams = {
  params: {
    enterAnimationDuration: '150ms',
    exitAnimationDuration: '75ms'
  }
};
/**
 * Animations used by MatDialog.
 * @docs-private
 */
const matDialogAnimations = {
  /** Animation that is applied on the dialog container by default. */
  dialogContainer: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.trigger)('dialogContainer', [
  // Note: The `enter` animation transitions to `transform: none`, because for some reason
  // specifying the transform explicitly, causes IE both to blur the dialog content and
  // decimate the animation performance. Leaving it as `none` solves both issues.
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.state)('void, exit', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.style)({
    opacity: 0,
    transform: 'scale(0.7)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.state)('enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.style)({
    transform: 'none'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.transition)('* => enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.animate)('{{enterAnimationDuration}} cubic-bezier(0, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.style)({
    transform: 'none',
    opacity: 1
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.query)('@*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.animateChild)(), {
    optional: true
  })]), _defaultParams), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.transition)('* => void, * => exit', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.animate)('{{exitAnimationDuration}} cubic-bezier(0.4, 0.0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.style)({
    opacity: 0
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.query)('@*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.animateChild)(), {
    optional: true
  })]), _defaultParams)])
};

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 3347:
/*!***************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/snack-bar.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_SNACK_BAR_DATA: () => (/* binding */ MAT_SNACK_BAR_DATA),
/* harmony export */   MAT_SNACK_BAR_DEFAULT_OPTIONS: () => (/* binding */ MAT_SNACK_BAR_DEFAULT_OPTIONS),
/* harmony export */   MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY: () => (/* binding */ MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   MatSnackBar: () => (/* binding */ MatSnackBar),
/* harmony export */   MatSnackBarAction: () => (/* binding */ MatSnackBarAction),
/* harmony export */   MatSnackBarActions: () => (/* binding */ MatSnackBarActions),
/* harmony export */   MatSnackBarConfig: () => (/* binding */ MatSnackBarConfig),
/* harmony export */   MatSnackBarContainer: () => (/* binding */ MatSnackBarContainer),
/* harmony export */   MatSnackBarLabel: () => (/* binding */ MatSnackBarLabel),
/* harmony export */   MatSnackBarModule: () => (/* binding */ MatSnackBarModule),
/* harmony export */   MatSnackBarRef: () => (/* binding */ MatSnackBarRef),
/* harmony export */   SimpleSnackBar: () => (/* binding */ SimpleSnackBar),
/* harmony export */   matSnackBarAnimations: () => (/* binding */ matSnackBarAnimations)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 47172);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ 9168);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ 17699);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/a11y */ 72102);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ 87912);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/overlay */ 81570);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 33900);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 74646);
















/** Maximum amount of milliseconds that can be passed into setTimeout. */
function SimpleSnackBar_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SimpleSnackBar_Conditional_2_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.action());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.data.action, " ");
  }
}
const _c0 = ["label"];
function MatSnackBarContainer_ng_template_4_Template(rf, ctx) {}
const MAX_TIMEOUT = Math.pow(2, 31) - 1;
/**
 * Reference to a snack bar dispatched from the snack bar service.
 */
class MatSnackBarRef {
  constructor(containerInstance, _overlayRef) {
    this._overlayRef = _overlayRef;
    /** Subject for notifying the user that the snack bar has been dismissed. */
    this._afterDismissed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Subject for notifying the user that the snack bar has opened and appeared. */
    this._afterOpened = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Subject for notifying the user that the snack bar action was called. */
    this._onAction = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Whether the snack bar was dismissed using the action button. */
    this._dismissedByAction = false;
    this.containerInstance = containerInstance;
    containerInstance._onExit.subscribe(() => this._finishDismiss());
  }
  /** Dismisses the snack bar. */
  dismiss() {
    if (!this._afterDismissed.closed) {
      this.containerInstance.exit();
    }
    clearTimeout(this._durationTimeoutId);
  }
  /** Marks the snackbar action clicked. */
  dismissWithAction() {
    if (!this._onAction.closed) {
      this._dismissedByAction = true;
      this._onAction.next();
      this._onAction.complete();
      this.dismiss();
    }
    clearTimeout(this._durationTimeoutId);
  }
  /**
   * Marks the snackbar action clicked.
   * @deprecated Use `dismissWithAction` instead.
   * @breaking-change 8.0.0
   */
  closeWithAction() {
    this.dismissWithAction();
  }
  /** Dismisses the snack bar after some duration */
  _dismissAfter(duration) {
    // Note that we need to cap the duration to the maximum value for setTimeout, because
    // it'll revert to 1 if somebody passes in something greater (e.g. `Infinity`). See #17234.
    this._durationTimeoutId = setTimeout(() => this.dismiss(), Math.min(duration, MAX_TIMEOUT));
  }
  /** Marks the snackbar as opened */
  _open() {
    if (!this._afterOpened.closed) {
      this._afterOpened.next();
      this._afterOpened.complete();
    }
  }
  /** Cleans up the DOM after closing. */
  _finishDismiss() {
    this._overlayRef.dispose();
    if (!this._onAction.closed) {
      this._onAction.complete();
    }
    this._afterDismissed.next({
      dismissedByAction: this._dismissedByAction
    });
    this._afterDismissed.complete();
    this._dismissedByAction = false;
  }
  /** Gets an observable that is notified when the snack bar is finished closing. */
  afterDismissed() {
    return this._afterDismissed;
  }
  /** Gets an observable that is notified when the snack bar has opened and appeared. */
  afterOpened() {
    return this.containerInstance._onEnter;
  }
  /** Gets an observable that is notified when the snack bar action is called. */
  onAction() {
    return this._onAction;
  }
}

/** Injection token that can be used to access the data that was passed in to a snack bar. */
const MAT_SNACK_BAR_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatSnackBarData');
/**
 * Configuration used when opening a snack-bar.
 */
class MatSnackBarConfig {
  constructor() {
    /** The politeness level for the MatAriaLiveAnnouncer announcement. */
    this.politeness = 'assertive';
    /**
     * Message to be announced by the LiveAnnouncer. When opening a snackbar without a custom
     * component or template, the announcement message will default to the specified message.
     */
    this.announcementMessage = '';
    /** The length of time in milliseconds to wait before automatically dismissing the snack bar. */
    this.duration = 0;
    /** Data being injected into the child component. */
    this.data = null;
    /** The horizontal position to place the snack bar. */
    this.horizontalPosition = 'center';
    /** The vertical position to place the snack bar. */
    this.verticalPosition = 'bottom';
  }
}

/** Directive that should be applied to the text element to be rendered in the snack bar. */
class MatSnackBarLabel {
  static {
    this.ɵfac = function MatSnackBarLabel_Factory(t) {
      return new (t || MatSnackBarLabel)();
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatSnackBarLabel,
      selectors: [["", "matSnackBarLabel", ""]],
      hostAttrs: [1, "mat-mdc-snack-bar-label", "mdc-snackbar__label"],
      standalone: true
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSnackBarLabel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `[matSnackBarLabel]`,
      standalone: true,
      host: {
        'class': 'mat-mdc-snack-bar-label mdc-snackbar__label'
      }
    }]
  }], null, null);
})();
/** Directive that should be applied to the element containing the snack bar's action buttons. */
class MatSnackBarActions {
  static {
    this.ɵfac = function MatSnackBarActions_Factory(t) {
      return new (t || MatSnackBarActions)();
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatSnackBarActions,
      selectors: [["", "matSnackBarActions", ""]],
      hostAttrs: [1, "mat-mdc-snack-bar-actions", "mdc-snackbar__actions"],
      standalone: true
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSnackBarActions, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `[matSnackBarActions]`,
      standalone: true,
      host: {
        'class': 'mat-mdc-snack-bar-actions mdc-snackbar__actions'
      }
    }]
  }], null, null);
})();
/** Directive that should be applied to each of the snack bar's action buttons. */
class MatSnackBarAction {
  static {
    this.ɵfac = function MatSnackBarAction_Factory(t) {
      return new (t || MatSnackBarAction)();
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatSnackBarAction,
      selectors: [["", "matSnackBarAction", ""]],
      hostAttrs: [1, "mat-mdc-snack-bar-action", "mdc-snackbar__action"],
      standalone: true
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSnackBarAction, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `[matSnackBarAction]`,
      standalone: true,
      host: {
        'class': 'mat-mdc-snack-bar-action mdc-snackbar__action'
      }
    }]
  }], null, null);
})();
class SimpleSnackBar {
  constructor(snackBarRef, data) {
    this.snackBarRef = snackBarRef;
    this.data = data;
  }
  /** Performs the action on the snack bar. */
  action() {
    this.snackBarRef.dismissWithAction();
  }
  /** If the action button should be shown. */
  get hasAction() {
    return !!this.data.action;
  }
  static {
    this.ɵfac = function SimpleSnackBar_Factory(t) {
      return new (t || SimpleSnackBar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatSnackBarRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_SNACK_BAR_DATA));
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SimpleSnackBar,
      selectors: [["simple-snack-bar"]],
      hostAttrs: [1, "mat-mdc-simple-snack-bar"],
      exportAs: ["matSnackBar"],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 2,
      consts: [["matSnackBarLabel", ""], ["matSnackBarActions", ""], ["mat-button", "", "matSnackBarAction", "", 3, "click"]],
      template: function SimpleSnackBar_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SimpleSnackBar_Conditional_2_Template, 3, 1, "div", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.message, "\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](2, ctx.hasAction ? 2 : -1);
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction],
      styles: [".mat-mdc-simple-snack-bar{display:flex}"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimpleSnackBar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'simple-snack-bar',
      exportAs: 'matSnackBar',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction],
      standalone: true,
      host: {
        'class': 'mat-mdc-simple-snack-bar'
      },
      template: "<div matSnackBarLabel>\n  {{data.message}}\n</div>\n\n@if (hasAction) {\n  <div matSnackBarActions>\n    <button mat-button matSnackBarAction (click)=\"action()\">\n      {{data.action}}\n    </button>\n  </div>\n}\n",
      styles: [".mat-mdc-simple-snack-bar{display:flex}"]
    }]
  }], () => [{
    type: MatSnackBarRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [MAT_SNACK_BAR_DATA]
    }]
  }], null);
})();

/**
 * Animations used by the Material snack bar.
 * @docs-private
 */
const matSnackBarAnimations = {
  /** Animation that shows and hides a snack bar. */
  snackBarState: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('state', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)('void, hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
    transform: 'scale(0.8)',
    opacity: 0
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)('visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
    transform: 'scale(1)',
    opacity: 1
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('* => visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('150ms cubic-bezier(0, 0, 0.2, 1)')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('* => void, * => hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('75ms cubic-bezier(0.4, 0.0, 1, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
    opacity: 0
  })))])
};
let uniqueId = 0;
/**
 * Internal component that wraps user-provided snack bar content.
 * @docs-private
 */
class MatSnackBarContainer extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.BasePortalOutlet {
  constructor(_ngZone, _elementRef, _changeDetectorRef, _platform, /** The snack bar configuration. */
  snackBarConfig) {
    super();
    this._ngZone = _ngZone;
    this._elementRef = _elementRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._platform = _platform;
    this.snackBarConfig = snackBarConfig;
    this._document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT);
    this._trackedModals = new Set();
    /** The number of milliseconds to wait before announcing the snack bar's content. */
    this._announceDelay = 150;
    /** Whether the component has been destroyed. */
    this._destroyed = false;
    /** Subject for notifying that the snack bar has announced to screen readers. */
    this._onAnnounce = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Subject for notifying that the snack bar has exited from view. */
    this._onExit = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Subject for notifying that the snack bar has finished entering the view. */
    this._onEnter = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** The state of the snack bar animations. */
    this._animationState = 'void';
    /** Unique ID of the aria-live element. */
    this._liveElementId = `mat-snack-bar-container-live-${uniqueId++}`;
    /**
     * Attaches a DOM portal to the snack bar container.
     * @deprecated To be turned into a method.
     * @breaking-change 10.0.0
     */
    this.attachDomPortal = portal => {
      this._assertNotAttached();
      const result = this._portalOutlet.attachDomPortal(portal);
      this._afterPortalAttached();
      return result;
    };
    // Use aria-live rather than a live role like 'alert' or 'status'
    // because NVDA and JAWS have show inconsistent behavior with live roles.
    if (snackBarConfig.politeness === 'assertive' && !snackBarConfig.announcementMessage) {
      this._live = 'assertive';
    } else if (snackBarConfig.politeness === 'off') {
      this._live = 'off';
    } else {
      this._live = 'polite';
    }
    // Only set role for Firefox. Set role based on aria-live because setting role="alert" implies
    // aria-live="assertive" which may cause issues if aria-live is set to "polite" above.
    if (this._platform.FIREFOX) {
      if (this._live === 'polite') {
        this._role = 'status';
      }
      if (this._live === 'assertive') {
        this._role = 'alert';
      }
    }
  }
  /** Attach a component portal as content to this snack bar container. */
  attachComponentPortal(portal) {
    this._assertNotAttached();
    const result = this._portalOutlet.attachComponentPortal(portal);
    this._afterPortalAttached();
    return result;
  }
  /** Attach a template portal as content to this snack bar container. */
  attachTemplatePortal(portal) {
    this._assertNotAttached();
    const result = this._portalOutlet.attachTemplatePortal(portal);
    this._afterPortalAttached();
    return result;
  }
  /** Handle end of animations, updating the state of the snackbar. */
  onAnimationEnd(event) {
    const {
      fromState,
      toState
    } = event;
    if (toState === 'void' && fromState !== 'void' || toState === 'hidden') {
      this._completeExit();
    }
    if (toState === 'visible') {
      // Note: we shouldn't use `this` inside the zone callback,
      // because it can cause a memory leak.
      const onEnter = this._onEnter;
      this._ngZone.run(() => {
        onEnter.next();
        onEnter.complete();
      });
    }
  }
  /** Begin animation of snack bar entrance into view. */
  enter() {
    if (!this._destroyed) {
      this._animationState = 'visible';
      // _animationState lives in host bindings and `detectChanges` does not refresh host bindings
      // so we have to call `markForCheck` to ensure the host view is refreshed eventually.
      this._changeDetectorRef.markForCheck();
      this._changeDetectorRef.detectChanges();
      this._screenReaderAnnounce();
    }
  }
  /** Begin animation of the snack bar exiting from view. */
  exit() {
    // It's common for snack bars to be opened by random outside calls like HTTP requests or
    // errors. Run inside the NgZone to ensure that it functions correctly.
    this._ngZone.run(() => {
      // Note: this one transitions to `hidden`, rather than `void`, in order to handle the case
      // where multiple snack bars are opened in quick succession (e.g. two consecutive calls to
      // `MatSnackBar.open`).
      this._animationState = 'hidden';
      this._changeDetectorRef.markForCheck();
      // Mark this element with an 'exit' attribute to indicate that the snackbar has
      // been dismissed and will soon be removed from the DOM. This is used by the snackbar
      // test harness.
      this._elementRef.nativeElement.setAttribute('mat-exit', '');
      // If the snack bar hasn't been announced by the time it exits it wouldn't have been open
      // long enough to visually read it either, so clear the timeout for announcing.
      clearTimeout(this._announceTimeoutId);
    });
    return this._onExit;
  }
  /** Makes sure the exit callbacks have been invoked when the element is destroyed. */
  ngOnDestroy() {
    this._destroyed = true;
    this._clearFromModals();
    this._completeExit();
  }
  /**
   * Removes the element in a microtask. Helps prevent errors where we end up
   * removing an element which is in the middle of an animation.
   */
  _completeExit() {
    queueMicrotask(() => {
      this._onExit.next();
      this._onExit.complete();
    });
  }
  /**
   * Called after the portal contents have been attached. Can be
   * used to modify the DOM once it's guaranteed to be in place.
   */
  _afterPortalAttached() {
    const element = this._elementRef.nativeElement;
    const panelClasses = this.snackBarConfig.panelClass;
    if (panelClasses) {
      if (Array.isArray(panelClasses)) {
        // Note that we can't use a spread here, because IE doesn't support multiple arguments.
        panelClasses.forEach(cssClass => element.classList.add(cssClass));
      } else {
        element.classList.add(panelClasses);
      }
    }
    this._exposeToModals();
    // Check to see if the attached component or template uses the MDC template structure,
    // specifically the MDC label. If not, the container should apply the MDC label class to this
    // component's label container, which will apply MDC's label styles to the attached view.
    const label = this._label.nativeElement;
    const labelClass = 'mdc-snackbar__label';
    label.classList.toggle(labelClass, !label.querySelector(`.${labelClass}`));
  }
  /**
   * Some browsers won't expose the accessibility node of the live element if there is an
   * `aria-modal` and the live element is outside of it. This method works around the issue by
   * pointing the `aria-owns` of all modals to the live element.
   */
  _exposeToModals() {
    // TODO(http://github.com/angular/components/issues/26853): consider de-duplicating this with the
    // `LiveAnnouncer` and any other usages.
    //
    // Note that the selector here is limited to CDK overlays at the moment in order to reduce the
    // section of the DOM we need to look through. This should cover all the cases we support, but
    // the selector can be expanded if it turns out to be too narrow.
    const id = this._liveElementId;
    const modals = this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');
    for (let i = 0; i < modals.length; i++) {
      const modal = modals[i];
      const ariaOwns = modal.getAttribute('aria-owns');
      this._trackedModals.add(modal);
      if (!ariaOwns) {
        modal.setAttribute('aria-owns', id);
      } else if (ariaOwns.indexOf(id) === -1) {
        modal.setAttribute('aria-owns', ariaOwns + ' ' + id);
      }
    }
  }
  /** Clears the references to the live element from any modals it was added to. */
  _clearFromModals() {
    this._trackedModals.forEach(modal => {
      const ariaOwns = modal.getAttribute('aria-owns');
      if (ariaOwns) {
        const newValue = ariaOwns.replace(this._liveElementId, '').trim();
        if (newValue.length > 0) {
          modal.setAttribute('aria-owns', newValue);
        } else {
          modal.removeAttribute('aria-owns');
        }
      }
    });
    this._trackedModals.clear();
  }
  /** Asserts that no content is already attached to the container. */
  _assertNotAttached() {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error('Attempting to attach snack bar content after content is already attached');
    }
  }
  /**
   * Starts a timeout to move the snack bar content to the live region so screen readers will
   * announce it.
   */
  _screenReaderAnnounce() {
    if (!this._announceTimeoutId) {
      this._ngZone.runOutsideAngular(() => {
        this._announceTimeoutId = setTimeout(() => {
          const inertElement = this._elementRef.nativeElement.querySelector('[aria-hidden]');
          const liveElement = this._elementRef.nativeElement.querySelector('[aria-live]');
          if (inertElement && liveElement) {
            // If an element in the snack bar content is focused before being moved
            // track it and restore focus after moving to the live region.
            let focusedElement = null;
            if (this._platform.isBrowser && document.activeElement instanceof HTMLElement && inertElement.contains(document.activeElement)) {
              focusedElement = document.activeElement;
            }
            inertElement.removeAttribute('aria-hidden');
            liveElement.appendChild(inertElement);
            focusedElement?.focus();
            this._onAnnounce.next();
            this._onAnnounce.complete();
          }
        }, this._announceDelay);
      });
    }
  }
  static {
    this.ɵfac = function MatSnackBarContainer_Factory(t) {
      return new (t || MatSnackBarContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatSnackBarConfig));
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatSnackBarContainer,
      selectors: [["mat-snack-bar-container"]],
      viewQuery: function MatSnackBarContainer_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.CdkPortalOutlet, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._portalOutlet = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._label = _t.first);
        }
      },
      hostAttrs: [1, "mdc-snackbar", "mat-mdc-snack-bar-container", "mdc-snackbar--open"],
      hostVars: 1,
      hostBindings: function MatSnackBarContainer_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostListener"]("@state.done", function MatSnackBarContainer_animation_state_done_HostBindingHandler($event) {
            return ctx.onAnimationEnd($event);
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostProperty"]("@state", ctx._animationState);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 3,
      consts: [["label", ""], [1, "mdc-snackbar__surface"], [1, "mat-mdc-snack-bar-label"], ["aria-hidden", "true"], ["cdkPortalOutlet", ""]],
      template: function MatSnackBarContainer_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2, 0)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatSnackBarContainer_ng_template_4_Template, 0, 0, "ng-template", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-live", ctx._live)("role", ctx._role)("id", ctx._liveElementId);
        }
      },
      dependencies: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.CdkPortalOutlet],
      styles: [".mdc-snackbar{display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media screen and (forced-colors: active){.mdc-snackbar__surface::before{border-color:CanvasText}}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1)}.mdc-snackbar__label{padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}.mat-mdc-snack-bar-container{margin:8px;position:static}.mat-mdc-snack-bar-container .mdc-snackbar__surface{min-width:344px}@media(max-width: 480px),(max-width: 344px){.mat-mdc-snack-bar-container .mdc-snackbar__surface{min-width:100%}}@media(max-width: 480px),(max-width: 344px){.mat-mdc-snack-bar-container{width:100vw}}.mat-mdc-snack-bar-container .mdc-snackbar__surface{max-width:672px}.mat-mdc-snack-bar-container .mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.mat-mdc-snack-bar-container .mdc-snackbar__surface{background-color:var(--mdc-snackbar-container-color)}.mat-mdc-snack-bar-container .mdc-snackbar__surface{border-radius:var(--mdc-snackbar-container-shape)}.mat-mdc-snack-bar-container .mdc-snackbar__label{color:var(--mdc-snackbar-supporting-text-color)}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-size:var(--mdc-snackbar-supporting-text-size);font-family:var(--mdc-snackbar-supporting-text-font);font-weight:var(--mdc-snackbar-supporting-text-weight);line-height:var(--mdc-snackbar-supporting-text-line-height)}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){color:var(--mat-snack-bar-button-color);--mat-text-button-state-layer-color:currentColor;--mat-text-button-ripple-color:currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{opacity:.1}.mat-mdc-snack-bar-container .mdc-snackbar__label::before{display:none}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-handset .mdc-snackbar__surface{width:100%}"],
      encapsulation: 2,
      data: {
        animation: [matSnackBarAnimations.snackBarState]
      }
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSnackBarContainer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-snack-bar-container',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      animations: [matSnackBarAnimations.snackBarState],
      standalone: true,
      imports: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.CdkPortalOutlet],
      host: {
        'class': 'mdc-snackbar mat-mdc-snack-bar-container mdc-snackbar--open',
        '[@state]': '_animationState',
        '(@state.done)': 'onAnimationEnd($event)'
      },
      template: "<div class=\"mdc-snackbar__surface\">\n  <!--\n    This outer label wrapper will have the class `mdc-snackbar__label` applied if\n    the attached template/component does not contain it.\n  -->\n  <div class=\"mat-mdc-snack-bar-label\" #label>\n    <!-- Initialy holds the snack bar content, will be empty after announcing to screen readers. -->\n    <div aria-hidden=\"true\">\n      <ng-template cdkPortalOutlet />\n    </div>\n\n    <!-- Will receive the snack bar content from the non-live div, move will happen a short delay after opening -->\n    <div [attr.aria-live]=\"_live\" [attr.role]=\"_role\" [attr.id]=\"_liveElementId\"></div>\n  </div>\n</div>\n",
      styles: [".mdc-snackbar{display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media screen and (forced-colors: active){.mdc-snackbar__surface::before{border-color:CanvasText}}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1)}.mdc-snackbar__label{padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}.mat-mdc-snack-bar-container{margin:8px;position:static}.mat-mdc-snack-bar-container .mdc-snackbar__surface{min-width:344px}@media(max-width: 480px),(max-width: 344px){.mat-mdc-snack-bar-container .mdc-snackbar__surface{min-width:100%}}@media(max-width: 480px),(max-width: 344px){.mat-mdc-snack-bar-container{width:100vw}}.mat-mdc-snack-bar-container .mdc-snackbar__surface{max-width:672px}.mat-mdc-snack-bar-container .mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.mat-mdc-snack-bar-container .mdc-snackbar__surface{background-color:var(--mdc-snackbar-container-color)}.mat-mdc-snack-bar-container .mdc-snackbar__surface{border-radius:var(--mdc-snackbar-container-shape)}.mat-mdc-snack-bar-container .mdc-snackbar__label{color:var(--mdc-snackbar-supporting-text-color)}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-size:var(--mdc-snackbar-supporting-text-size);font-family:var(--mdc-snackbar-supporting-text-font);font-weight:var(--mdc-snackbar-supporting-text-weight);line-height:var(--mdc-snackbar-supporting-text-line-height)}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){color:var(--mat-snack-bar-button-color);--mat-text-button-state-layer-color:currentColor;--mat-text-button-ripple-color:currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{opacity:.1}.mat-mdc-snack-bar-container .mdc-snackbar__label::before{display:none}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-handset .mdc-snackbar__surface{width:100%}"]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__.Platform
  }, {
    type: MatSnackBarConfig
  }], {
    _portalOutlet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.CdkPortalOutlet, {
        static: true
      }]
    }],
    _label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['label', {
        static: true
      }]
    }]
  });
})();

/** @docs-private */
function MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY() {
  return new MatSnackBarConfig();
}
/** Injection token that can be used to specify default snack bar. */
const MAT_SNACK_BAR_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-snack-bar-default-options', {
  providedIn: 'root',
  factory: MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY
});
/**
 * Service to dispatch Material Design snack bar messages.
 */
class MatSnackBar {
  /** Reference to the currently opened snackbar at *any* level. */
  get _openedSnackBarRef() {
    const parent = this._parentSnackBar;
    return parent ? parent._openedSnackBarRef : this._snackBarRefAtThisLevel;
  }
  set _openedSnackBarRef(value) {
    if (this._parentSnackBar) {
      this._parentSnackBar._openedSnackBarRef = value;
    } else {
      this._snackBarRefAtThisLevel = value;
    }
  }
  constructor(_overlay, _live, _injector, _breakpointObserver, _parentSnackBar, _defaultConfig) {
    this._overlay = _overlay;
    this._live = _live;
    this._injector = _injector;
    this._breakpointObserver = _breakpointObserver;
    this._parentSnackBar = _parentSnackBar;
    this._defaultConfig = _defaultConfig;
    /**
     * Reference to the current snack bar in the view *at this level* (in the Angular injector tree).
     * If there is a parent snack-bar service, all operations should delegate to that parent
     * via `_openedSnackBarRef`.
     */
    this._snackBarRefAtThisLevel = null;
    /** The component that should be rendered as the snack bar's simple component. */
    this.simpleSnackBarComponent = SimpleSnackBar;
    /** The container component that attaches the provided template or component. */
    this.snackBarContainerComponent = MatSnackBarContainer;
    /** The CSS class to apply for handset mode. */
    this.handsetCssClass = 'mat-mdc-snack-bar-handset';
  }
  /**
   * Creates and dispatches a snack bar with a custom component for the content, removing any
   * currently opened snack bars.
   *
   * @param component Component to be instantiated.
   * @param config Extra configuration for the snack bar.
   */
  openFromComponent(component, config) {
    return this._attach(component, config);
  }
  /**
   * Creates and dispatches a snack bar with a custom template for the content, removing any
   * currently opened snack bars.
   *
   * @param template Template to be instantiated.
   * @param config Extra configuration for the snack bar.
   */
  openFromTemplate(template, config) {
    return this._attach(template, config);
  }
  /**
   * Opens a snackbar with a message and an optional action.
   * @param message The message to show in the snackbar.
   * @param action The label for the snackbar action.
   * @param config Additional configuration options for the snackbar.
   */
  open(message, action = '', config) {
    const _config = {
      ...this._defaultConfig,
      ...config
    };
    // Since the user doesn't have access to the component, we can
    // override the data to pass in our own message and action.
    _config.data = {
      message,
      action
    };
    // Since the snack bar has `role="alert"`, we don't
    // want to announce the same message twice.
    if (_config.announcementMessage === message) {
      _config.announcementMessage = undefined;
    }
    return this.openFromComponent(this.simpleSnackBarComponent, _config);
  }
  /**
   * Dismisses the currently-visible snack bar.
   */
  dismiss() {
    if (this._openedSnackBarRef) {
      this._openedSnackBarRef.dismiss();
    }
  }
  ngOnDestroy() {
    // Only dismiss the snack bar at the current level on destroy.
    if (this._snackBarRefAtThisLevel) {
      this._snackBarRefAtThisLevel.dismiss();
    }
  }
  /**
   * Attaches the snack bar container component to the overlay.
   */
  _attachSnackBarContainer(overlayRef, config) {
    const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
    const injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector.create({
      parent: userInjector || this._injector,
      providers: [{
        provide: MatSnackBarConfig,
        useValue: config
      }]
    });
    const containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.ComponentPortal(this.snackBarContainerComponent, config.viewContainerRef, injector);
    const containerRef = overlayRef.attach(containerPortal);
    containerRef.instance.snackBarConfig = config;
    return containerRef.instance;
  }
  /**
   * Places a new component or a template as the content of the snack bar container.
   */
  _attach(content, userConfig) {
    const config = {
      ...new MatSnackBarConfig(),
      ...this._defaultConfig,
      ...userConfig
    };
    const overlayRef = this._createOverlay(config);
    const container = this._attachSnackBarContainer(overlayRef, config);
    const snackBarRef = new MatSnackBarRef(container, overlayRef);
    if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef) {
      const portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.TemplatePortal(content, null, {
        $implicit: config.data,
        snackBarRef
      });
      snackBarRef.instance = container.attachTemplatePortal(portal);
    } else {
      const injector = this._createInjector(config, snackBarRef);
      const portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.ComponentPortal(content, undefined, injector);
      const contentRef = container.attachComponentPortal(portal);
      // We can't pass this via the injector, because the injector is created earlier.
      snackBarRef.instance = contentRef.instance;
    }
    // Subscribe to the breakpoint observer and attach the mat-snack-bar-handset class as
    // appropriate. This class is applied to the overlay element because the overlay must expand to
    // fill the width of the screen for full width snackbars.
    this._breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__.Breakpoints.HandsetPortrait).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(overlayRef.detachments())).subscribe(state => {
      overlayRef.overlayElement.classList.toggle(this.handsetCssClass, state.matches);
    });
    if (config.announcementMessage) {
      // Wait until the snack bar contents have been announced then deliver this message.
      container._onAnnounce.subscribe(() => {
        this._live.announce(config.announcementMessage, config.politeness);
      });
    }
    this._animateSnackBar(snackBarRef, config);
    this._openedSnackBarRef = snackBarRef;
    return this._openedSnackBarRef;
  }
  /** Animates the old snack bar out and the new one in. */
  _animateSnackBar(snackBarRef, config) {
    // When the snackbar is dismissed, clear the reference to it.
    snackBarRef.afterDismissed().subscribe(() => {
      // Clear the snackbar ref if it hasn't already been replaced by a newer snackbar.
      if (this._openedSnackBarRef == snackBarRef) {
        this._openedSnackBarRef = null;
      }
      if (config.announcementMessage) {
        this._live.clear();
      }
    });
    if (this._openedSnackBarRef) {
      // If a snack bar is already in view, dismiss it and enter the
      // new snack bar after exit animation is complete.
      this._openedSnackBarRef.afterDismissed().subscribe(() => {
        snackBarRef.containerInstance.enter();
      });
      this._openedSnackBarRef.dismiss();
    } else {
      // If no snack bar is in view, enter the new snack bar.
      snackBarRef.containerInstance.enter();
    }
    // If a dismiss timeout is provided, set up dismiss based on after the snackbar is opened.
    if (config.duration && config.duration > 0) {
      snackBarRef.afterOpened().subscribe(() => snackBarRef._dismissAfter(config.duration));
    }
  }
  /**
   * Creates a new overlay and places it in the correct location.
   * @param config The user-specified snack bar config.
   */
  _createOverlay(config) {
    const overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.OverlayConfig();
    overlayConfig.direction = config.direction;
    let positionStrategy = this._overlay.position().global();
    // Set horizontal position.
    const isRtl = config.direction === 'rtl';
    const isLeft = config.horizontalPosition === 'left' || config.horizontalPosition === 'start' && !isRtl || config.horizontalPosition === 'end' && isRtl;
    const isRight = !isLeft && config.horizontalPosition !== 'center';
    if (isLeft) {
      positionStrategy.left('0');
    } else if (isRight) {
      positionStrategy.right('0');
    } else {
      positionStrategy.centerHorizontally();
    }
    // Set horizontal position.
    if (config.verticalPosition === 'top') {
      positionStrategy.top('0');
    } else {
      positionStrategy.bottom('0');
    }
    overlayConfig.positionStrategy = positionStrategy;
    return this._overlay.create(overlayConfig);
  }
  /**
   * Creates an injector to be used inside of a snack bar component.
   * @param config Config that was used to create the snack bar.
   * @param snackBarRef Reference to the snack bar.
   */
  _createInjector(config, snackBarRef) {
    const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
    return _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector.create({
      parent: userInjector || this._injector,
      providers: [{
        provide: MatSnackBarRef,
        useValue: snackBarRef
      }, {
        provide: MAT_SNACK_BAR_DATA,
        useValue: config.data
      }]
    });
  }
  static {
    this.ɵfac = function MatSnackBar_Factory(t) {
      return new (t || MatSnackBar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.LiveAnnouncer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MatSnackBar, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MAT_SNACK_BAR_DEFAULT_OPTIONS));
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MatSnackBar,
      factory: MatSnackBar.ɵfac,
      providedIn: 'root'
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSnackBar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.Overlay
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.LiveAnnouncer
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
  }, {
    type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__.BreakpointObserver
  }, {
    type: MatSnackBar,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
    }]
  }, {
    type: MatSnackBarConfig,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [MAT_SNACK_BAR_DEFAULT_OPTIONS]
    }]
  }], null);
})();
const DIRECTIVES = [MatSnackBarContainer, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction];
class MatSnackBarModule {
  static {
    this.ɵfac = function MatSnackBarModule_Factory(t) {
      return new (t || MatSnackBarModule)();
    };
  }
  static {
    this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatSnackBarModule
    });
  }
  static {
    this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      providers: [MatSnackBar],
      imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.PortalModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatCommonModule, SimpleSnackBar, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatCommonModule]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSnackBarModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.PortalModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatCommonModule, SimpleSnackBar, ...DIRECTIVES],
      exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatCommonModule, ...DIRECTIVES],
      providers: [MatSnackBar]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_core-component_pages_pages_module_ts.js.map