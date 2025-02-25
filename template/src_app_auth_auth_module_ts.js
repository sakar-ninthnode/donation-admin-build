"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_auth_auth_module_ts"],{

/***/ 80600:
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthRoutingModule: () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.component */ 40998);
/* harmony import */ var _email_verification_email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-verification/email-verification/email-verification.component */ 63602);
/* harmony import */ var _email_verification_email_verification_2_email_verification_2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-verification/email-verification-2/email-verification-2.component */ 44200);
/* harmony import */ var _email_verification_email_verification_3_email_verification_3_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email-verification/email-verification-3/email-verification-3.component */ 64630);
/* harmony import */ var _reset_password_reset_password_2_reset_password_2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reset-password/reset-password-2/reset-password-2.component */ 89533);
/* harmony import */ var _reset_password_reset_password_3_reset_password_3_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset-password/reset-password-3/reset-password-3.component */ 44347);
/* harmony import */ var _reset_password_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset-password/reset-password/reset-password.component */ 41091);
/* harmony import */ var _forgot_password_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forgot-password/forgot-password/forgot-password.component */ 44831);
/* harmony import */ var _forgot_password_forgot_password_2_forgot_password_2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forgot-password/forgot-password-2/forgot-password-2.component */ 55887);
/* harmony import */ var _register_register_2_register_2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register-2/register-2.component */ 95455);
/* harmony import */ var _register_register_3_register_3_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register-3/register-3.component */ 60481);
/* harmony import */ var _signin_signin_3_signin_3_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signin/signin-3/signin-3.component */ 21992);
/* harmony import */ var _two_step_verification_two_step_verification_2_two_step_verification_2_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./two-step-verification/two-step-verification-2/two-step-verification-2.component */ 27221);
/* harmony import */ var _two_step_verification_two_step_verification_two_step_verification_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./two-step-verification/two-step-verification/two-step-verification.component */ 21701);
/* harmony import */ var _two_step_verification_two_step_verification_3_two_step_verification_3_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./two-step-verification/two-step-verification-3/two-step-verification-3.component */ 83737);
/* harmony import */ var _lock_screen_lock_screen_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lock-screen/lock-screen.component */ 30531);
/* harmony import */ var _forgot_password_forgot_password_3_forgot_password_3_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./forgot-password/forgot-password-3/forgot-password-3.component */ 91567);
/* harmony import */ var _successs_success_success_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./successs/success/success.component */ 67808);
/* harmony import */ var _successs_success_2_success_2_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./successs/success-2/success-2.component */ 95104);
/* harmony import */ var _successs_success_3_success_3_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./successs/success-3/success-3.component */ 34872);
/* harmony import */ var _register_register_register_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./register/register/register.component */ 59885);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 37580);
























const routes = [{
  path: '',
  redirectTo: 'signin',
  pathMatch: 'full'
}, {
  path: '',
  component: _auth_component__WEBPACK_IMPORTED_MODULE_0__.AuthComponent,
  children: [{
    path: 'email-verification',
    component: _email_verification_email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_1__.EmailVerificationComponent
  }, {
    path: 'email-verification-2',
    component: _email_verification_email_verification_2_email_verification_2_component__WEBPACK_IMPORTED_MODULE_2__.EmailVerification2Component
  }, {
    path: 'email-verification-3',
    component: _email_verification_email_verification_3_email_verification_3_component__WEBPACK_IMPORTED_MODULE_3__.EmailVerification3Component
  }, {
    path: 'reset-password-2',
    component: _reset_password_reset_password_2_reset_password_2_component__WEBPACK_IMPORTED_MODULE_4__.ResetPassword2Component
  }, {
    path: 'reset-password-3',
    component: _reset_password_reset_password_3_reset_password_3_component__WEBPACK_IMPORTED_MODULE_5__.ResetPassword3Component
  }, {
    path: 'reset-password',
    component: _reset_password_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__.ResetPasswordComponent
  }, {
    path: 'forgot-password',
    component: _forgot_password_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__.ForgotPasswordComponent
  }, {
    path: 'forgot-password-2',
    component: _forgot_password_forgot_password_2_forgot_password_2_component__WEBPACK_IMPORTED_MODULE_8__.ForgotPassword2Component
  }, {
    path: 'forgot-password-3',
    component: _forgot_password_forgot_password_3_forgot_password_3_component__WEBPACK_IMPORTED_MODULE_16__.ForgotPassword3Component
  }, {
    path: 'register',
    component: _register_register_register_component__WEBPACK_IMPORTED_MODULE_20__.RegisterComponent
  }, {
    path: 'register-2',
    component: _register_register_2_register_2_component__WEBPACK_IMPORTED_MODULE_9__.Register2Component
  }, {
    path: 'register-3',
    component: _register_register_3_register_3_component__WEBPACK_IMPORTED_MODULE_10__.Register3Component
  }, {
    path: 'signin',
    component: _signin_signin_3_signin_3_component__WEBPACK_IMPORTED_MODULE_11__.Signin3Component
  }, {
    path: 'two-step-verification',
    component: _two_step_verification_two_step_verification_two_step_verification_component__WEBPACK_IMPORTED_MODULE_13__.TwoStepVerificationComponent
  }, {
    path: 'two-step-verification-2',
    component: _two_step_verification_two_step_verification_2_two_step_verification_2_component__WEBPACK_IMPORTED_MODULE_12__.TwoStepVerification2Component
  }, {
    path: 'two-step-verification-3',
    component: _two_step_verification_two_step_verification_3_two_step_verification_3_component__WEBPACK_IMPORTED_MODULE_14__.TwoStepVerification3Component
  }, {
    path: 'lock-screen',
    component: _lock_screen_lock_screen_component__WEBPACK_IMPORTED_MODULE_15__.LockScreenComponent
  }, {
    path: 'success',
    component: _successs_success_success_component__WEBPACK_IMPORTED_MODULE_17__.SuccessComponent
  }, {
    path: 'success-2',
    component: _successs_success_2_success_2_component__WEBPACK_IMPORTED_MODULE_18__.Success2Component
  }, {
    path: 'success-3',
    component: _successs_success_3_success_3_component__WEBPACK_IMPORTED_MODULE_19__.Success3Component
  }]
}];
class AuthRoutingModule {
  static {
    this.ɵfac = function AuthRoutingModule_Factory(t) {
      return new (t || AuthRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({
      type: AuthRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule]
  });
})();

/***/ }),

/***/ 40998:
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthComponent: () => (/* binding */ AuthComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _core_core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/core.index */ 82351);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);





const _c0 = a0 => ({
  "login-body": a0
});
class AuthComponent {
  constructor(Router, settings, renderer) {
    this.Router = Router;
    this.settings = settings;
    this.renderer = renderer;
    this.themeMode = '';
    this.base = '';
    this.page = '';
    this.last = '';
    this.Router.events.subscribe(data => {
      if (data instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationStart) {
        this.getRoutes(data);
      }
    });
    this.settings.themeMode.subscribe(mode => {
      this.themeMode = mode;
    });
    this.settings.themeMode.subscribe(res => {
      if (res == 'dark_mode') {
        this.renderer.addClass(document.body, 'dark-select');
      } else {
        this.renderer.removeClass(document.body, 'dark-select');
      }
    });
    this.getRoutes(this.Router);
  }
  getRoutes(data) {
    const splitVal = data.url.split('/');
    this.base = splitVal[1];
    this.page = splitVal[2];
    this.last = splitVal[3];
  }
  static {
    this.ɵfac = function AuthComponent_Factory(t) {
      return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_core_index__WEBPACK_IMPORTED_MODULE_0__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AuthComponent,
      selectors: [["app-auth"]],
      decls: 2,
      vars: 3,
      consts: [[1, "main-wrapper", 3, "ngClass"]],
      template: function AuthComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c0, ctx.base === "lock-screen"));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 60841:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthModule: () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 80600);
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.component */ 40998);
/* harmony import */ var _reset_password_reset_password_2_reset_password_2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset-password/reset-password-2/reset-password-2.component */ 89533);
/* harmony import */ var _reset_password_reset_password_3_reset_password_3_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset-password/reset-password-3/reset-password-3.component */ 44347);
/* harmony import */ var _reset_password_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reset-password/reset-password/reset-password.component */ 41091);
/* harmony import */ var _register_register_2_register_2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register-2/register-2.component */ 95455);
/* harmony import */ var _register_register_3_register_3_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register-3/register-3.component */ 60481);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ 93887);
/* harmony import */ var _lock_screen_lock_screen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lock-screen/lock-screen.component */ 30531);
/* harmony import */ var _successs_success_2_success_2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./successs/success-2/success-2.component */ 95104);
/* harmony import */ var _successs_success_3_success_3_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./successs/success-3/success-3.component */ 34872);
/* harmony import */ var _successs_success_success_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./successs/success/success.component */ 67808);
/* harmony import */ var _register_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register/register.component */ 59885);
/* harmony import */ var _email_verification_email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./email-verification/email-verification/email-verification.component */ 63602);
/* harmony import */ var _email_verification_email_verification_2_email_verification_2_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./email-verification/email-verification-2/email-verification-2.component */ 44200);
/* harmony import */ var _email_verification_email_verification_3_email_verification_3_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./email-verification/email-verification-3/email-verification-3.component */ 64630);
/* harmony import */ var _two_step_verification_two_step_verification_two_step_verification_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./two-step-verification/two-step-verification/two-step-verification.component */ 21701);
/* harmony import */ var _two_step_verification_two_step_verification_2_two_step_verification_2_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./two-step-verification/two-step-verification-2/two-step-verification-2.component */ 27221);
/* harmony import */ var _two_step_verification_two_step_verification_3_two_step_verification_3_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./two-step-verification/two-step-verification-3/two-step-verification-3.component */ 83737);
/* harmony import */ var _signin_signin_3_signin_3_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./signin/signin-3/signin-3.component */ 21992);
/* harmony import */ var _forgot_password_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./forgot-password/forgot-password/forgot-password.component */ 44831);
/* harmony import */ var _forgot_password_forgot_password_2_forgot_password_2_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./forgot-password/forgot-password-2/forgot-password-2.component */ 55887);
/* harmony import */ var _forgot_password_forgot_password_3_forgot_password_3_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./forgot-password/forgot-password-3/forgot-password-3.component */ 91567);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 37580);


























class AuthModule {
  static {
    this.ɵfac = function AuthModule_Factory(t) {
      return new (t || AuthModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({
      type: AuthModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.CommonModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.sharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetNgModuleScope"](AuthModule, {
    declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_1__.AuthComponent, _reset_password_reset_password_2_reset_password_2_component__WEBPACK_IMPORTED_MODULE_2__.ResetPassword2Component, _reset_password_reset_password_3_reset_password_3_component__WEBPACK_IMPORTED_MODULE_3__.ResetPassword3Component, _reset_password_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__.ResetPasswordComponent, _register_register_2_register_2_component__WEBPACK_IMPORTED_MODULE_5__.Register2Component, _register_register_3_register_3_component__WEBPACK_IMPORTED_MODULE_6__.Register3Component, _lock_screen_lock_screen_component__WEBPACK_IMPORTED_MODULE_8__.LockScreenComponent, _successs_success_success_component__WEBPACK_IMPORTED_MODULE_11__.SuccessComponent, _successs_success_2_success_2_component__WEBPACK_IMPORTED_MODULE_9__.Success2Component, _successs_success_3_success_3_component__WEBPACK_IMPORTED_MODULE_10__.Success3Component, _register_register_register_component__WEBPACK_IMPORTED_MODULE_12__.RegisterComponent, _email_verification_email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_13__.EmailVerificationComponent, _email_verification_email_verification_2_email_verification_2_component__WEBPACK_IMPORTED_MODULE_14__.EmailVerification2Component, _email_verification_email_verification_3_email_verification_3_component__WEBPACK_IMPORTED_MODULE_15__.EmailVerification3Component, _two_step_verification_two_step_verification_two_step_verification_component__WEBPACK_IMPORTED_MODULE_16__.TwoStepVerificationComponent, _two_step_verification_two_step_verification_2_two_step_verification_2_component__WEBPACK_IMPORTED_MODULE_17__.TwoStepVerification2Component, _two_step_verification_two_step_verification_3_two_step_verification_3_component__WEBPACK_IMPORTED_MODULE_18__.TwoStepVerification3Component, _signin_signin_3_signin_3_component__WEBPACK_IMPORTED_MODULE_19__.Signin3Component, _forgot_password_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_20__.ForgotPasswordComponent, _forgot_password_forgot_password_2_forgot_password_2_component__WEBPACK_IMPORTED_MODULE_21__.ForgotPassword2Component, _forgot_password_forgot_password_3_forgot_password_3_component__WEBPACK_IMPORTED_MODULE_22__.ForgotPassword3Component],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.CommonModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.sharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule]
  });
})();

/***/ }),

/***/ 44200:
/*!************************************************************************************************!*\
  !*** ./src/app/auth/email-verification/email-verification-2/email-verification-2.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailVerification2Component: () => (/* binding */ EmailVerification2Component)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);



class EmailVerification2Component {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  static {
    this.ɵfac = function EmailVerification2Component_Factory(t) {
      return new (t || EmailVerification2Component)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: EmailVerification2Component,
      selectors: [["app-email-verification-2"]],
      decls: 27,
      vars: 2,
      consts: [[1, "account-content"], [1, "login-wrapper"], [1, "login-content"], [1, "login-userset"], [1, "login-logo", "logo-normal"], ["src", "assets/img/logo.png", "alt", "img"], [1, "login-logo", "logo-white", 3, "routerLink"], ["src", "assets/img/logo-white.png", "alt", ""], [1, "login-userheading", "text-center"], [1, "verfy-mail-content"], [1, "signinform", "text-center"], ["href", "javascript:void(0);", 1, "hover-a", "resend"], [1, "form-login"], [1, "btn", "btn-login", 3, "routerLink"], [1, "my-4", "d-flex", "justify-content-center", "align-items-center", "copyright-text"], [1, "login-img"], ["src", "assets/img/authentication/email02.png", "alt", "img"]],
      template: function EmailVerification2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 3)(5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8)(10, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Verify Your Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h4", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "We've sent a link to your email ter4@example.com. Please follow the link inside to continue");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10)(15, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Didn't receive an email? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Resend Link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12)(20, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Skip Now");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14)(23, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Copyright \u00A9 2023 DreamsPOS. All rights reserved");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.adminDashboard);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.adminDashboard);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 64630:
/*!************************************************************************************************!*\
  !*** ./src/app/auth/email-verification/email-verification-3/email-verification-3.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailVerification3Component: () => (/* binding */ EmailVerification3Component)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);



class EmailVerification3Component {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  static {
    this.ɵfac = function EmailVerification3Component_Factory(t) {
      return new (t || EmailVerification3Component)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: EmailVerification3Component,
      selectors: [["app-email-verification-3"]],
      decls: 26,
      vars: 3,
      consts: [[1, "account-content"], [1, "login-wrapper", "login-new"], [1, "login-content", "user-login"], [1, "login-logo"], ["src", "assets/img/logo.png", "alt", "img"], [1, "login-logo", "logo-white", 3, "routerLink"], ["src", "assets/img/logo-white.png", "alt", ""], [1, "login-userset"], [1, "login-userheading", "text-center"], [1, "verfy-mail-content"], [1, "signinform", "text-center"], ["href", "javascript:void(0);", 1, "hover-a", "resend"], [1, "form-login"], [1, "btn", "btn-login", 3, "routerLink"], [1, "my-4", "d-flex", "justify-content-center", "align-items-center", "copyright-text"]],
      template: function EmailVerification3Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7)(8, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8)(11, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Verify Your Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h4", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "We've sent a link to your email ter4@example.com. Please follow the link inside to continue");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10)(16, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Didn't receive an email? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Resend Link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12)(21, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Skip Now");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14)(24, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Copyright \u00A9 2023 DreamsPOS. All rights reserved");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.adminDashboard);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.adminDashboard);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.adminDashboard);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 63602:
/*!********************************************************************************************!*\
  !*** ./src/app/auth/email-verification/email-verification/email-verification.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailVerificationComponent: () => (/* binding */ EmailVerificationComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);



class EmailVerificationComponent {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  static {
    this.ɵfac = function EmailVerificationComponent_Factory(t) {
      return new (t || EmailVerificationComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: EmailVerificationComponent,
      selectors: [["app-email-verification"]],
      decls: 25,
      vars: 2,
      consts: [[1, "account-content"], [1, "login-wrapper", "email-veri-wrap", "bg-img"], [1, "login-content"], [1, "login-userset"], [1, "login-logo", "logo-normal"], ["src", "assets/img/logo.png", "alt", "img"], [1, "login-logo", "logo-white", 3, "routerLink"], ["src", "assets/img/logo-white.png", "alt", ""], [1, "login-userheading", "text-center"], [1, "verfy-mail-content"], [1, "signinform", "text-center"], ["href", "javascript:void(0);", 1, "hover-a", "resend"], [1, "form-login"], [1, "btn", "btn-login", 3, "routerLink"], [1, "my-4", "d-flex", "justify-content-center", "align-items-center", "copyright-text"]],
      template: function EmailVerificationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 3)(5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8)(10, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Verify Your Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h4", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "We've sent a link to your email ter4@example.com. Please follow the link inside to continue");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10)(15, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Didn't receive an email? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Resend Link");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12)(20, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Skip Now");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14)(23, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Copyright \u00A9 2023 DreamsPOS. All rights reserved");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.adminDashboard);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.adminDashboard);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 55887:
/*!***************************************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password-2/forgot-password-2.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgotPassword2Component: () => (/* binding */ ForgotPassword2Component)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);




class ForgotPassword2Component {
  constructor(router) {
    this.router = router;
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  navigation() {
    this.router.navigate([src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes.signIn]);
  }
  static {
    this.ɵfac = function ForgotPassword2Component_Factory(t) {
      return new (t || ForgotPassword2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ForgotPassword2Component,
      selectors: [["app-forgot-password-2"]],
      decls: 47,
      vars: 2,
      consts: [[1, "account-content"], [1, "login-wrapper"], [1, "login-content"], [1, "login-userset"], [1, "login-logo", "logo-normal"], ["src", "assets/img/logo.png", "alt", "img"], [1, "login-logo", "logo-white", 3, "routerLink"], ["src", "assets/img/logo-white.png", "alt", ""], [1, "login-userheading"], [1, "form-login"], [1, "form-addons"], ["type", "email", 1, "form-control"], ["src", "assets/img/icons/mail.svg", "alt", "img"], ["type", "button", 1, "btn", "btn-login", 3, "click"], [1, "signinform", "text-center"], [1, "hover-a", 3, "routerLink"], [1, "form-setlogin", "or-text"], [1, "form-sociallink"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", 1, "facebook-logo"], ["src", "assets/img/icons/facebook-logo.svg", "alt", "Facebook"], ["href", "javascript:void(0);"], ["src", "assets/img/icons/google.png", "alt", "Google"], ["href", "javascript:void(0);", 1, "apple-logo"], ["src", "assets/img/icons/apple-logo.svg", "alt", "Apple"], [1, "my-4", "d-flex", "justify-content-center", "align-items-center", "copyright-text"], [1, "login-img"], ["src", "assets/img/authentication/forgot-02.png", "alt", "img"]],
      template: function ForgotPassword2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "form")(4, "div", 3)(5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8)(10, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Forgot password?");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "If you forgot your password, well, then we\u2019ll email you instructions to reset your password.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9)(15, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 11)(19, "img", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9)(21, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ForgotPassword2Component_Template_button_click_21_listener() {
            return ctx.navigation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14)(24, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Return to");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " login ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 16)(29, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "OR");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 17)(32, "ul", 18)(33, "li")(34, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "img", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li")(37, "a", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "img", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li")(40, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "img", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 25)(43, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Copyright \u00A9 2023 DreamsPOS. All rights reserved");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "img", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.adminDashboard);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.signIn2);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 91567:
/*!***************************************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password-3/forgot-password-3.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgotPassword3Component: () => (/* binding */ ForgotPassword3Component)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);




class ForgotPassword3Component {
  constructor(router) {
    this.router = router;
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  navigation() {
    this.router.navigate([src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes.signIn]);
  }
  static {
    this.ɵfac = function ForgotPassword3Component_Factory(t) {
      return new (t || ForgotPassword3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ForgotPassword3Component,
      selectors: [["app-forgot-password-3"]],
      decls: 46,
      vars: 2,
      consts: [[1, "account-content"], [1, "login-wrapper", "login-new"], [1, "container"], [1, "login-content", "user-login"], [1, "login-logo"], ["src", "assets/img/logo.png", "alt", "img"], [1, "login-logo", "logo-white", 3, "routerLink"], ["src", "assets/img/logo-white.png", "alt", ""], [1, "login-userset"], [1, "login-userheading"], [1, "form-login"], [1, "form-addons"], ["type", "email", 1, "form-control"], ["src", "assets/img/icons/mail.svg", "alt", "img"], ["type", "button", 1, "btn", "btn-login", 3, "click"], [1, "signinform", "text-center"], [1, "hover-a", 3, "routerLink"], [1, "form-setlogin", "or-text"], [1, "form-sociallink"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", 1, "facebook-logo"], ["src", "assets/img/icons/facebook-logo.svg", "alt", "Facebook"], ["href", "javascript:void(0);"], ["src", "assets/img/icons/google.png", "alt", "Google"], ["href", "javascript:void(0);", 1, "apple-logo"], ["src", "assets/img/icons/apple-logo.svg", "alt", "Apple"], [1, "my-4", "d-flex", "justify-content-center", "align-items-center", "copyright-text"]],
      template: function ForgotPassword3Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form")(9, "div", 8)(10, "div", 9)(11, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Forgot password?");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "If you forgot your password, well, then we\u2019ll email you instructions to reset your password.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10)(16, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 12)(20, "img", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 10)(22, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ForgotPassword3Component_Template_button_click_22_listener() {
            return ctx.navigation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 15)(25, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Return to");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " login ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 17)(30, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "OR");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 18)(33, "ul", 19)(34, "li")(35, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "img", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "li")(38, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "img", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "li")(41, "a", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "img", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 26)(44, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Copyright \u00A9 2023 DreamsPOS. All rights reserved");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.adminDashboard);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.signIn3);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 44831:
/*!***********************************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password/forgot-password.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgotPasswordComponent: () => (/* binding */ ForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);




class ForgotPasswordComponent {
  constructor(router) {
    this.router = router;
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  navigation() {
    this.router.navigate([src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes.signIn]);
  }
  static {
    this.ɵfac = function ForgotPasswordComponent_Factory(t) {
      return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ForgotPasswordComponent,
      selectors: [["app-forgot-password"]],
      decls: 45,
      vars: 2,
      consts: [[1, "account-content"], [1, "login-wrapper", "forgot-pass-wrap", "bg-img"], [1, "login-content"], [1, "login-userset"], [1, "login-logo", "logo-normal"], ["src", "assets/img/logo.png", "alt", "img"], [1, "login-logo", "logo-white", 3, "routerLink"], ["src", "assets/img/logo-white.png", "alt", ""], [1, "login-userheading"], [1, "form-login"], [1, "form-addons"], ["type", "email", 1, "form-control"], ["src", "assets/img/icons/mail.svg", "alt", "img"], ["type", "button", 1, "btn", "btn-login", 3, "click"], [1, "signinform", "text-center"], [1, "hover-a", 3, "routerLink"], [1, "form-setlogin", "or-text"], [1, "form-sociallink"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", 1, "facebook-logo"], ["src", "assets/img/icons/facebook-logo.svg", "alt", "Facebook"], ["href", "javascript:void(0);"], ["src", "assets/img/icons/google.png", "alt", "Google"], ["href", "javascript:void(0);", 1, "apple-logo"], ["src", "assets/img/icons/apple-logo.svg", "alt", "Apple"], [1, "my-4", "d-flex", "justify-content-center", "align-items-center", "copyright-text"]],
      template: function ForgotPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "form")(4, "div", 3)(5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8)(10, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Forgot password?");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "If you forgot your password, well, then we\u2019ll email you instructions to reset your password.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9)(15, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 11)(19, "img", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9)(21, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ForgotPasswordComponent_Template_button_click_21_listener() {
            return ctx.navigation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14)(24, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Return to");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " login ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 16)(29, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "OR");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 17)(32, "ul", 18)(33, "li")(34, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "img", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li")(37, "a", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "img", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li")(40, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "img", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 25)(43, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Copyright \u00A9 2023 DreamsPOS. All rights reserved");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.adminDashboard);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.signIn);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 30531:
/*!***********************************************************!*\
  !*** ./src/app/auth/lock-screen/lock-screen.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LockScreenComponent: () => (/* binding */ LockScreenComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);




class LockScreenComponent {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    this.password = [false];
  }
  togglePassword(index) {
    this.password[index] = !this.password[index];
  }
  static {
    this.ɵfac = function LockScreenComponent_Factory(t) {
      return new (t || LockScreenComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LockScreenComponent,
      selectors: [["app-lock-screen"]],
      decls: 41,
      vars: 2,
      consts: [[1, "login-wrapper"], [1, "container"], ["src", "assets/img/logo.png", "alt", "Logo", 1, "img-fluid", "logo-dark", "mb-5"], [1, "loginbox"], [1, "login-right"], [1, "login-right-wrap"], [1, "login-info"], [1, "account-subtitle"], ["src", "assets/img/login-user.png", "alt", "User-Img", 1, "img-fluid"], ["action", "#"], [1, "input-blocks"], [1, "pass-group"], ["placeholder", "Enter your password", 1, "pass-input", 3, "type"], [1, "fas", "toggle-password", 3, "click", "ngClass"], ["type", "submit", 1, "btn", "btn-lg", "btn-block", "btn-primary"], [1, "row"], [1, "terms", "d-flex"], [1, "has-submenu"], ["href", "javascript:void(0);"], [1, "fas", "fa-chevron-down"], [1, "submenu", "dropdown-menu"], ["href", "javascript:"], [1, "my-4", "d-flex", "justify-content-center", "align-items-center", "copyright-text"]],
      template: function LockScreenComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Welcome back!");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "John Smilga");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 9)(13, "div", 10)(14, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LockScreenComponent_Template_span_click_16_listener() {
            return ctx.togglePassword(1);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Log In");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15)(20, "ul", 16)(21, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Terms & Condition");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Privacy");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Help");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li", 17)(28, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "English ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ul", 20)(32, "li")(33, "a", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "American");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li")(36, "a", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "British");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 22)(39, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Copyright \u00A9 2024 DreamsPOS. All rights reserved");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.password[1] ? "text" : "password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.password[1] ? "fa-eye" : "fa-eye-slash");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 95455:
/*!******************************************************************!*\
  !*** ./src/app/auth/register/register-2/register-2.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Register2Component: () => (/* binding */ Register2Component)
/* harmony export */ });
/* harmony import */ var src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/core.index */ 82351);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);





class Register2Component {
  togglePassword(index) {
    this.password[index] = !this.password[index];
  }
  constructor(router) {
    this.router = router;
    this.routes = src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.routes;
    this.password = [false];
  }
  navigation() {
    this.router.navigate([src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.routes.signIn2]);
  }
  static {
    this.ɵfac = function Register2Component_Factory(t) {
      return new (t || Register2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: Register2Component,
      selectors: [["app-register-2"]],
      decls: 75,
      vars: 6,
      consts: [[1, "login-wrapper"], [1, "login-content"], [1, "login-userset"], [1, "login-logo", "logo-normal"], ["src", "assets/img/logo.png", "alt", "img"], [1, "login-logo", "logo-white", 3, "routerLink"], ["src", "assets/img/logo-white.png", "alt", ""], [1, "login-userheading"], [1, "form-login"], [1, "form-addons"], ["type", "text", 1, "form-control"], ["src", "assets/img/icons/user-icon.svg", "alt", "img"], ["src", "assets/img/icons/mail.svg", "alt", "img"], [1, "pass-group"], [1, "pass-input", 3, "type"], [1, "fas", "toggle-password", 3, "click", "ngClass"], [1, "fas", "toggle-passwords", 3, "click", "ngClass"], [1, "form-login", "authentication-check"], [1, "row"], [1, "col-sm-8"], [1, "custom-control", "custom-checkbox", "custom-class-check", "justify-content-start"], [1, "custom-control", "custom-checkbox", "custom-class-check"], [1, "checkboxs", "ps-4", "mb-0", "pb-0", "line-height-1"], ["type", "checkbox"], [1, "checkmarks"], ["href", "javascript:void(0);", 1, "hover-a"], ["type", "button", 1, "btn", "btn-login", 3, "click"], [1, "signinform"], [1, "hover-a", 3, "routerLink"], [1, "form-setlogin", "or-text"], [1, "form-sociallink"], [1, "d-flex"], ["href", "javascript:void(0);", 1, "facebook-logo"], ["src", "assets/img/icons/facebook-logo.svg", "alt", "Facebook"], ["href", "javascript:void(0);"], ["src", "assets/img/icons/google.png", "alt", "Google"], ["href", "javascript:void(0);", 1, "apple-logo"], ["src", "assets/img/icons/apple-logo.svg", "alt", "Apple"], [1, "my-4", "d-flex", "justify-content-center", "align-items-center", "copyright-text"], [1, "login-img"], ["src", "assets/img/authentication/register02.png", "alt", "img"]],
      template: function Register2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form")(3, "div", 2)(4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7)(9, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Register");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Create New Dreamspos Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8)(14, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 10)(18, "img", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 8)(20, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Email Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 10)(24, "img", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 8)(26, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Register2Component_Template_span_click_30_listener() {
            return ctx.togglePassword(1);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 8)(32, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Confirm Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Register2Component_Template_span_click_36_listener() {
            return ctx.togglePassword(2);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 17)(38, "div", 18)(39, "div", 19)(40, "div", 20)(41, "div", 21)(42, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 23)(44, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "I agree to the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "a", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Terms & Privacy");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 8)(49, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Register2Component_Template_button_click_49_listener() {
            return ctx.navigation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Sign Up");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 27)(52, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Already have an account ? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "a", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Sign In Instead");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 29)(57, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "OR");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 30)(60, "ul", 31)(61, "li")(62, "a", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "img", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "li")(65, "a", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "img", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "li")(68, "a", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "img", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 38)(71, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Copyright \u00A9 2023 DreamsPOS. All rights reserved");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "img", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.dashboard);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.password[1] ? "text" : "password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.password[1] ? "fa-eye" : "fa-eye-slash");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.password[2] ? "text" : "password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.password[2] ? "fa-eye" : "fa-eye-slash");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.signIn2);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 60481:
/*!******************************************************************!*\
  !*** ./src/app/auth/register/register-3/register-3.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Register3Component: () => (/* binding */ Register3Component)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);





class Register3Component {
  togglePassword(index) {
    this.password[index] = !this.password[index];
  }
  constructor(router) {
    this.router = router;
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    this.password = [false];
  }
  navigation() {
    this.router.navigate([src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes.signIn3]);
  }
  static {
    this.ɵfac = function Register3Component_Factory(t) {
      return new (t || Register3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: Register3Component,
      selectors: [["app-register-3"]],
      decls: 73,
      vars: 6,
      consts: [[1, "login-wrapper", "login-new"], [1, "login-content", "user-login"], [1, "login-logo"], ["src", "assets/img/logo.png", "alt", "img"], [1, "login-logo", "logo-white", 3, "routerLink"], ["src", "assets/img/logo-white.png", "alt", ""], [1, "login-userset"], [1, "login-userheading"], [1, "form-login"], [1, "form-addons"], ["type", "text", 1, "form-control"], ["src", "assets/img/icons/user-icon.svg", "alt", "img"], ["src", "assets/img/icons/mail.svg", "alt", "img"], [1, "pass-group"], [1, "pass-input", 3, "type"], [1, "fas", "toggle-password", 3, "click", "ngClass"], [1, "fas", "toggle-passwords", 3, "click", "ngClass"], [1, "form-login", "authentication-check"], [1, "row"], [1, "col-sm-8"], [1, "custom-control", "custom-checkbox", "custom-class-check", "justify-content-start"], [1, "custom-control", "custom-checkbox", "custom-class-check"], [1, "checkboxs", "ps-4", "mb-0", "pb-0", "line-height-1"], ["type", "checkbox"], [1, "checkmarks"], ["href", "javascript:void(0);", 1, "hover-a"], ["type", "button", 1, "btn", "btn-login", 3, "click"], [1, "signinform"], [1, "hover-a", 3, "routerLink"], [1, "form-setlogin", "or-text"], [1, "form-sociallink"], [1, "d-flex"], ["href", "javascript:void(0);", 1, "facebook-logo"], ["src", "assets/img/icons/facebook-logo.svg", "alt", "Facebook"], ["href", "javascript:void(0);"], ["src", "assets/img/icons/google.png", "alt", "Google"], ["href", "javascript:void(0);", 1, "apple-logo"], ["src", "assets/img/icons/apple-logo.svg", "alt", "Apple"], [1, "my-4", "d-flex", "justify-content-center", "align-items-center", "copyright-text"]],
      template: function Register3Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form")(7, "div", 6)(8, "div", 7)(9, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Register");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Create New Dreamspos Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8)(14, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 10)(18, "img", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 8)(20, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Email Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 10)(24, "img", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 8)(26, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Register3Component_Template_span_click_30_listener() {
            return ctx.togglePassword(1);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 8)(32, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Confirm Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Register3Component_Template_span_click_36_listener() {
            return ctx.togglePassword(2);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 17)(38, "div", 18)(39, "div", 19)(40, "div", 20)(41, "div", 21)(42, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 23)(44, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "I agree to the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "a", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Terms & Privacy");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 8)(49, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Register3Component_Template_button_click_49_listener() {
            return ctx.navigation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Sign Up");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 27)(52, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Already have an account ? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "a", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Sign In Instead");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 29)(57, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "OR");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 30)(60, "ul", 31)(61, "li")(62, "a", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "img", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "li")(65, "a", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "img", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "li")(68, "a", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "img", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 38)(71, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Copyright \u00A9 2023 DreamsPOS. All rights reserved.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.adminDashboard);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.password[1] ? "text" : "password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.password[1] ? "fa-eye" : "fa-eye-slash");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.password[2] ? "text" : "password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.password[2] ? "fa-eye" : "fa-eye-slash");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.signIn3);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 59885:
/*!**************************************************************!*\
  !*** ./src/app/auth/register/register/register.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);





class RegisterComponent {
  togglePassword(index) {
    this.password[index] = !this.password[index];
  }
  constructor(router) {
    this.router = router;
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    this.password = [false];
  }
  navigation() {
    this.router.navigate([src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes.signIn]);
  }
  static {
    this.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 74,
      vars: 6,
      consts: [[1, "account-content"], [1, "login-wrapper", "register-wrap", "bg-img"], [1, "login-content"], [1, "login-userset"], [1, "login-logo", "logo-normal"], ["src", "assets/img/logo.png", "alt", "img"], [1, "login-logo", "logo-white", 3, "routerLink"], ["src", "assets/img/logo-white.png", "alt", ""], [1, "login-userheading"], [1, "form-login"], [1, "form-addons"], ["type", "text", 1, "form-control"], ["src", "assets/img/icons/user-icon.svg", "alt", "img"], ["src", "assets/img/icons/mail.svg", "alt", "img"], [1, "pass-group"], [1, "pass-input", 3, "type"], [1, "fas", "toggle-password", 3, "click", "ngClass"], [1, "fas", "toggle-passwords", 3, "click", "ngClass"], [1, "form-login", "authentication-check"], [1, "row"], [1, "col-sm-8"], [1, "custom-control", "custom-checkbox", "custom-class-check", "justify-content-start"], [1, "custom-control", "custom-checkbox", "custom-class-check"], [1, "checkboxs", "ps-4", "mb-0", "pb-0", "line-height-1"], ["type", "checkbox"], [1, "checkmarks"], ["href", "javascript:void(0);", 1, "hover-a"], ["type", "submit", 1, "btn", "btn-login", 3, "click"], [1, "signinform"], [1, "hover-a", 3, "routerLink"], [1, "form-setlogin", "or-text"], [1, "form-sociallink"], [1, "d-flex"], ["href", "javascript:void(0);", 1, "facebook-logo"], ["src", "assets/img/icons/facebook-logo.svg", "alt", "Facebook"], ["href", "javascript:void(0);"], ["src", "assets/img/icons/google.png", "alt", "Google"], ["href", "javascript:void(0);", 1, "apple-logo"], ["src", "assets/img/icons/apple-logo.svg", "alt", "Apple"], [1, "my-4", "d-flex", "justify-content-center", "align-items-center", "copyright-text"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "form")(4, "div", 3)(5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8)(10, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Register");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Create New Dreamspos Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9)(15, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 11)(19, "img", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9)(21, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Email Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 11)(25, "img", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 9)(27, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_span_click_31_listener() {
            return ctx.togglePassword(1);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 9)(33, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Confirm Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_span_click_37_listener() {
            return ctx.togglePassword(2);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 18)(39, "div", 19)(40, "div", 20)(41, "div", 21)(42, "div", 22)(43, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "input", 24)(45, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "I agree to the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Terms & Privacy");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 9)(50, "button", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_50_listener() {
            return ctx.navigation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Sign Up");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 28)(53, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Already have an account ? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Sign In Instead");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 30)(58, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "OR");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 31)(61, "ul", 32)(62, "li")(63, "a", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "img", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "li")(66, "a", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "img", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "li")(69, "a", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "img", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 39)(72, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Copyright \u00A9 2023 DreamsPOS. All rights reserved");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.adminDashboard);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.password[1] ? "text" : "password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.password[1] ? "fa-eye" : "fa-eye-slash");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.password[2] ? "text" : "password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.password[2] ? "fa-eye" : "fa-eye-slash");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.signIn);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 89533:
/*!************************************************************************************!*\
  !*** ./src/app/auth/reset-password/reset-password-2/reset-password-2.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResetPassword2Component: () => (/* binding */ ResetPassword2Component)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);





class ResetPassword2Component {
  togglePassword(index) {
    this.password[index] = !this.password[index];
  }
  constructor(router) {
    this.router = router;
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    this.password = [false];
  }
  navigation() {
    this.router.navigate([src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes.success2]);
  }
  static {
    this.ɵfac = function ResetPassword2Component_Factory(t) {
      return new (t || ResetPassword2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ResetPassword2Component,
      selectors: [["app-reset-password-2"]],
      decls: 45,
      vars: 8,
      consts: [[1, "account-content"], [1, "login-wrapper", "bg-img"], [1, "login-content"], [1, "login-userset"], [1, "login-logo", "logo-normal"], ["src", "assets/img/logo.png", "alt", "img"], [1, "login-logo", "logo-white", 3, "routerLink"], ["src", "assets/img/logo-white.png", "alt", ""], [1, "login-userheading"], [1, "form-login"], [1, "pass-group"], [1, "pass-input", 3, "type"], [1, "fas", "toggle-password", 3, "click", "ngClass"], ["type", "button", 1, "btn", "btn-login", 3, "click"], [1, "signinform", "text-center"], [1, "hover-a", 3, "routerLink"], [1, "my-4", "d-flex", "justify-content-center", "align-items-center", "copyright-text"], [1, "login-img"], ["src", "assets/img/authentication/reset02.png", "alt", "img"]],
      template: function ResetPassword2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "form")(4, "div", 3)(5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8)(10, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Reset password?");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Enter New Password & Confirm Password to get inside");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9)(15, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Old Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResetPassword2Component_Template_span_click_19_listener() {
            return ctx.togglePassword(1);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9)(21, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "New Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResetPassword2Component_Template_span_click_25_listener() {
            return ctx.togglePassword(2);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 9)(27, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " New Confirm Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResetPassword2Component_Template_span_click_31_listener() {
            return ctx.togglePassword(3);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 9)(33, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResetPassword2Component_Template_button_click_33_listener() {
            return ctx.navigation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Change Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 14)(36, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Return to ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " login ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 16)(41, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Copyright \u00A9 2023 DreamsPOS. All rights reserved");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "img", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.adminDashboard);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.password[1] ? "text" : "password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.password[1] ? "fa-eye" : "fa-eye-slash");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.password[2] ? "text" : "password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.password[2] ? "fa-eye" : "fa-eye-slash");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.password[3] ? "text" : "password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.password[3] ? "fa-eye" : "fa-eye-slash");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.signIn2);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 44347:
/*!************************************************************************************!*\
  !*** ./src/app/auth/reset-password/reset-password-3/reset-password-3.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResetPassword3Component: () => (/* binding */ ResetPassword3Component)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);





class ResetPassword3Component {
  togglePassword(index) {
    this.password[index] = !this.password[index];
  }
  constructor(router) {
    this.router = router;
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    this.password = [false];
  }
  navigation() {
    this.router.navigate([src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes.success3]);
  }
  static {
    this.ɵfac = function ResetPassword3Component_Factory(t) {
      return new (t || ResetPassword3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ResetPassword3Component,
      selectors: [["app-reset-password-3"]],
      decls: 43,
      vars: 8,
      consts: [[1, "account-content"], [1, "login-wrapper", "login-new"], [1, "login-content", "user-login"], [1, "login-logo"], ["src", "assets/img/logo.png", "alt", "img"], [1, "login-logo", "logo-white", 3, "routerLink"], ["src", "assets/img/logo-white.png", "alt", ""], [1, "login-userset"], [1, "login-userheading"], [1, "form-login"], [1, "pass-group"], [1, "pass-input", 3, "type"], [1, "fas", "toggle-password", 3, "click", "ngClass"], ["type", "button", 1, "btn", "btn-login", 3, "click"], [1, "signinform", "text-center"], [1, "hover-a", 3, "routerLink"], [1, "my-4", "d-flex", "justify-content-center", "align-items-center", "copyright-text"]],
      template: function ResetPassword3Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form")(8, "div", 7)(9, "div", 8)(10, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Reset password?");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Enter New Password & Confirm Password to get inside");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9)(15, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Old Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResetPassword3Component_Template_span_click_19_listener() {
            return ctx.togglePassword(1);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9)(21, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "New Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResetPassword3Component_Template_span_click_25_listener() {
            return ctx.togglePassword(2);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 9)(27, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " New Confirm Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResetPassword3Component_Template_span_click_31_listener() {
            return ctx.togglePassword(3);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 9)(33, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResetPassword3Component_Template_button_click_33_listener() {
            return ctx.navigation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Change Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 14)(36, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Return to ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " login ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 16)(41, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Copyright \u00A9 2023 DreamsPOS. All rights reserved");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.adminDashboard);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.password[1] ? "text" : "password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.password[1] ? "fa-eye" : "fa-eye-slash");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.password[2] ? "text" : "password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.password[2] ? "fa-eye" : "fa-eye-slash");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.password[3] ? "text" : "password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.password[3] ? "fa-eye" : "fa-eye-slash");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.signIn3);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 41091:
/*!********************************************************************************!*\
  !*** ./src/app/auth/reset-password/reset-password/reset-password.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResetPasswordComponent: () => (/* binding */ ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);





class ResetPasswordComponent {
  togglePassword(index) {
    this.password[index] = !this.password[index];
  }
  constructor(router) {
    this.router = router;
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    this.password = [false];
  }
  navigation() {
    this.router.navigate([src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes.success]);
  }
  static {
    this.ɵfac = function ResetPasswordComponent_Factory(t) {
      return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ResetPasswordComponent,
      selectors: [["app-reset-password"]],
      decls: 43,
      vars: 8,
      consts: [[1, "account-content"], [1, "login-wrapper", "reset-pass-wrap", "bg-img"], [1, "login-content"], [1, "login-userset"], [1, "login-logo", "logo-normal"], ["src", "assets/img/logo.png", "alt", "img"], [1, "login-logo", "logo-white", 3, "routerLink"], ["src", "assets/img/logo-white.png", "alt", ""], [1, "login-userheading"], [1, "form-login"], [1, "pass-group"], [1, "pass-input", 3, "type"], [1, "fas", "toggle-password", 3, "click", "ngClass"], [1, "pass-inputs", 3, "type"], [1, "fas", "toggle-passwords", 3, "click", "ngClass"], [1, "pass-inputa", 3, "type"], [1, "fas", "toggle-passworda", 3, "click", "ngClass"], ["type", "button", 1, "btn", "btn-login", 3, "click"], [1, "signinform", "text-center"], [1, "hover-a", 3, "routerLink"], [1, "my-4", "d-flex", "justify-content-center", "align-items-center", "copyright-text"]],
      template: function ResetPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "form")(4, "div", 3)(5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8)(10, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Reset password?");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Enter New Password & Confirm Password to get inside");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9)(15, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Old Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_span_click_19_listener() {
            return ctx.togglePassword(1);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9)(21, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "New Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_span_click_25_listener() {
            return ctx.togglePassword(2);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 9)(27, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " New Confirm Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_span_click_31_listener() {
            return ctx.togglePassword(3);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 9)(33, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_33_listener() {
            return ctx.navigation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Change Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 18)(36, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Return to ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " login ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 20)(41, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Copyright \u00A9 2023 DreamsPOS. All rights reserved");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.adminDashboard);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.password[1] ? "text" : "password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.password[1] ? "fa-eye" : "fa-eye-slash");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.password[2] ? "text" : "password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.password[2] ? "fa-eye" : "fa-eye-slash");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.password[3] ? "text" : "password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.password[3] ? "fa-eye" : "fa-eye-slash");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.signUp);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 21992:
/*!************************************************************!*\
  !*** ./src/app/auth/signin/signin-3/signin-3.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Signin3Component: () => (/* binding */ Signin3Component)
/* harmony export */ });
/* harmony import */ var C_work_git_sakar_nithnode_admin_donation_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);







class Signin3Component {
  constructor(router) {
    this.router = router;
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_1__.routes;
    this.email = '';
    this.passwordInput = '';
    this.passwordVisible = false;
  }
  navigation() {
    var _this = this;
    return (0,C_work_git_sakar_nithnode_admin_donation_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const formData = new FormData();
      formData.append('username', _this.email);
      formData.append('password', _this.passwordInput);
      try {
        const response = yield fetch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.BACKEND_URL}/auth/admin/login`, {
          method: 'POST',
          body: formData
        });
        if (response.status != 200) alert('Invalid email or password');else {
          const data = yield response.json();
          localStorage.setItem('authToken', data.results.access_token);
          setTimeout(() => {
            _this.router.navigate([src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_1__.routes.adminDashboard]);
          }, 1000);
          // console.log(data.results.access_token)
        }
      } catch (error) {
        console.error('Login failed:', error);
        alert('Invalid email or password');
      }
    })();
  }
  togglePassword() {
    this.passwordVisible = !this.passwordVisible;
  }
  static {
    this.ɵfac = function Signin3Component_Factory(t) {
      return new (t || Signin3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: Signin3Component,
      selectors: [["app-signin-3"]],
      decls: 34,
      vars: 5,
      consts: [["loginForm", "ngForm"], [1, "account-content"], [1, "login-wrapper", "login-new"], [1, "container"], [1, "login-content", "user-login"], [1, "login-logo"], [2, "min-width", "500px", 3, "ngSubmit"], [1, "login-userset"], [1, "login-userheading"], [1, "form-login"], [1, "form-label"], [1, "form-addons"], ["type", "email", "name", "email", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["src", "assets/img/icons/mail.svg", "alt", "img"], [1, "pass-group"], ["name", "password", "required", "", 1, "pass-input", 3, "ngModelChange", "type", "ngModel"], [1, "fas", "toggle-password", 3, "click", "ngClass"], [1, "form-login", "authentication-check"], [1, "row"], [1, "col-6"], [1, "custom-control", "custom-checkbox", "custom-class-check"], [1, "checkboxs", "ps-4", "mb-0", "pb-0", "line-height-1"], ["type", "checkbox"], [1, "checkmarks"], ["type", "submit", 1, "btn", "btn-login", 3, "disabled"]],
      template: function Signin3Component_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 6, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function Signin3Component_Template_form_ngSubmit_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.navigation());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7)(8, "div", 8)(9, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Sign In");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9)(12, "label", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Email Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 11)(15, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function Signin3Component_Template_input_ngModelChange_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.email, $event) || (ctx.email = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "img", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 9)(18, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 14)(21, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function Signin3Component_Template_input_ngModelChange_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.passwordInput, $event) || (ctx.passwordInput = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Signin3Component_Template_span_click_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.togglePassword());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 17)(24, "div", 18)(25, "div", 19)(26, "div", 20)(27, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "input", 22)(29, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Remember me ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 9)(32, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, " Sign In ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          const loginForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.passwordVisible ? "text" : "password");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.passwordInput);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.passwordVisible ? "fa-eye" : "fa-eye-slash");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", loginForm_r2.invalid);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 95104:
/*!****************************************************************!*\
  !*** ./src/app/auth/successs/success-2/success-2.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Success2Component: () => (/* binding */ Success2Component)
/* harmony export */ });
/* harmony import */ var src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/core.index */ 82351);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);



class Success2Component {
  constructor() {
    this.routes = src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  static {
    this.ɵfac = function Success2Component_Factory(t) {
      return new (t || Success2Component)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: Success2Component,
      selectors: [["app-success-2"]],
      decls: 23,
      vars: 2,
      consts: [[1, "account-content"], [1, "login-wrapper"], [1, "login-content"], [1, "login-userset"], [1, "login-logo", "logo-normal"], ["src", "assets/img/logo.png", "alt", "img"], [1, "login-logo", "logo-white", 3, "routerLink"], ["src", "assets/img/logo-white.png", "alt", ""], [1, "login-userheading", "text-center"], ["src", "assets/img/icons/check-icon.svg", "alt", "Icon"], [1, "text-center"], [1, "verfy-mail-content", "text-center"], [1, "form-login"], [1, "btn", "btn-login", "mt-0", 3, "routerLink"], [1, "my-4", "d-flex", "justify-content-center", "align-items-center", "copyright-text"], [1, "login-img"], ["src", "assets/img/authentication/step-two.png", "alt", "img"]],
      template: function Success2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 3)(5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h3", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Success");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h4", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Your Passwrod Reset Successfully!");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12)(16, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Back to Login");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14)(19, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Copyright \u00A9 2023-Dreamspos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.adminDashboard);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.signIn2);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 34872:
/*!****************************************************************!*\
  !*** ./src/app/auth/successs/success-3/success-3.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Success3Component: () => (/* binding */ Success3Component)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);



class Success3Component {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  static {
    this.ɵfac = function Success3Component_Factory(t) {
      return new (t || Success3Component)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: Success3Component,
      selectors: [["app-success-3"]],
      decls: 23,
      vars: 2,
      consts: [[1, "account-content"], [1, "login-wrapper", "login-new"], [1, "login-content", "user-login"], [1, "login-logo"], ["src", "assets/img/logo.png", "alt", "img"], [1, "login-logo", "logo-white", 3, "routerLink"], ["src", "assets/img/logo-white.png", "alt", ""], [1, "login-userset"], [1, "login-userheading", "text-center"], ["src", "assets/img/icons/check-icon.svg", "alt", "Icon"], [1, "text-center"], [1, "verfy-mail-content", "text-center"], [1, "form-login"], [1, "btn", "btn-login", "mt-0", 3, "routerLink"], [1, "my-4", "d-flex", "justify-content-center", "align-items-center", "copyright-text"]],
      template: function Success3Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7)(8, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h3", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Success");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h4", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Your Passwrod Reset Successfully!");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12)(15, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Back to Login");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14)(18, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Copyright \u00A9 2023-Dreamspos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14)(21, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Copyright \u00A9 2023 DreamsPOS. All rights reserved");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.adminDashboard);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.signIn3);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 67808:
/*!************************************************************!*\
  !*** ./src/app/auth/successs/success/success.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuccessComponent: () => (/* binding */ SuccessComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);



class SuccessComponent {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  static {
    this.ɵfac = function SuccessComponent_Factory(t) {
      return new (t || SuccessComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SuccessComponent,
      selectors: [["app-success"]],
      decls: 21,
      vars: 2,
      consts: [[1, "account-content"], [1, "login-wrapper", "register-wrap", "bg-img"], [1, "login-content"], [1, "login-userset"], [1, "login-logo", "logo-normal"], ["src", "assets/img/logo.png", "alt", "img"], [1, "login-logo", "logo-white", 3, "routerLink"], ["src", "assets/img/logo-white.png", "alt", ""], [1, "login-userheading", "text-center"], ["src", "assets/img/icons/check-icon.svg", "alt", "Icon"], [1, "text-center"], [1, "verfy-mail-content", "text-center"], [1, "form-login"], [1, "btn", "btn-login", "mt-0", 3, "routerLink"], [1, "my-4", "d-flex", "justify-content-center", "align-items-center", "copyright-text"]],
      template: function SuccessComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 3)(5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h3", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Success");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h4", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Your Passwrod Reset Successfully!");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12)(16, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Back to Login");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14)(19, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Copyright \u00A9 2023-Dreamspos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.adminDashboard);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.signIn);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 27221:
/*!*********************************************************************************************************!*\
  !*** ./src/app/auth/two-step-verification/two-step-verification-2/two-step-verification-2.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TwoStepVerification2Component: () => (/* binding */ TwoStepVerification2Component)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);




class TwoStepVerification2Component {
  constructor(router) {
    this.router = router;
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  navigation() {
    this.router.navigate([src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes.adminDashboard]);
  }
  static {
    this.ɵfac = function TwoStepVerification2Component_Factory(t) {
      return new (t || TwoStepVerification2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: TwoStepVerification2Component,
      selectors: [["app-two-step-verification-2"]],
      decls: 33,
      vars: 1,
      consts: [[1, "account-content"], [1, "login-wrapper"], [1, "login-content"], [1, "login-userset"], [1, "login-logo", "logo-normal"], ["src", "assets/img/logo.png", "alt", "img"], [1, "login-logo", "logo-white", 3, "routerLink"], ["src", "assets/img/logo-white.png", "alt", ""], [1, "login-userheading"], [1, "verfy-mail-content"], [1, "digit-group"], [1, "wallet-add"], [1, "otp-box"], [1, "forms-block", "text-center"], ["type", "text", "id", "digit-1", "maxlength", "1", "value", ""], ["type", "text", "id", "digit-2", "maxlength", "1", "value", ""], ["type", "text", "id", "digit-3", "maxlength", "1", "value", ""], ["type", "text", "id", "digit-4", "maxlength", "1", "value", ""], [1, "Otp-expire", "text-center"], [1, "form-login", "mt-4"], ["type", "button", 1, "btn", "btn-login", 3, "click"], [1, "my-4", "d-flex", "justify-content-center", "align-items-center", "copyright-text"], [1, "login-img"], ["src", "assets/img/authentication/step-two.png", "alt", "img"]],
      template: function TwoStepVerification2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 3)(5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8)(10, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Login With Your Email Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h4", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "We sent a verification code to your email. Enter the code from the email in the field below");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "form", 10)(15, "div", 11)(16, "div", 12)(17, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 14)(19, "input", 15)(20, "input", 16)(21, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 18)(23, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Otp will expire in 09 :10");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 19)(26, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TwoStepVerification2Component_Template_button_click_26_listener() {
            return ctx.navigation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Verify My Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 21)(29, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Copyright \u00A9 2023 DreamsPOS. All rights reserved");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "img", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.adminDashboard);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 83737:
/*!*********************************************************************************************************!*\
  !*** ./src/app/auth/two-step-verification/two-step-verification-3/two-step-verification-3.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TwoStepVerification3Component: () => (/* binding */ TwoStepVerification3Component)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);




class TwoStepVerification3Component {
  constructor(router) {
    this.router = router;
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  navigation() {
    this.router.navigate([src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes.adminDashboard]);
  }
  static {
    this.ɵfac = function TwoStepVerification3Component_Factory(t) {
      return new (t || TwoStepVerification3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: TwoStepVerification3Component,
      selectors: [["app-two-step-verification-3"]],
      decls: 30,
      vars: 1,
      consts: [[1, "account-content"], [1, "login-wrapper", "login-new"], [1, "login-content", "user-login"], [1, "login-logo"], ["src", "assets/img/logo.png", "alt", "img"], [1, "login-logo", "logo-white", 3, "routerLink"], ["src", "assets/img/logo-white.png", "alt", ""], [1, "login-userset"], [1, "login-userheading"], [1, "verfy-mail-content"], [1, "digit-group"], [1, "wallet-add"], [1, "otp-box"], [1, "forms-block", "text-center"], ["type", "text", "id", "digit-1", "maxlength", "1", "value", ""], ["type", "text", "id", "digit-2", "maxlength", "1", "value", ""], ["type", "text", "id", "digit-3", "maxlength", "1", "value", ""], ["type", "text", "id", "digit-4", "maxlength", "1", "value", ""], [1, "Otp-expire", "text-center"], [1, "form-login", "mt-4"], ["type", "button", 1, "btn", "btn-login", 3, "click"], [1, "my-4", "d-flex", "justify-content-center", "align-items-center", "copyright-text"]],
      template: function TwoStepVerification3Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7)(8, "div", 8)(9, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Login With Your Email Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h4", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "We sent a verification code to your email. Enter the code from the email in the field below");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "form", 10)(14, "div", 11)(15, "div", 12)(16, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 14)(18, "input", 15)(19, "input", 16)(20, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 18)(22, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Otp will expire in 09 :10");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 19)(25, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TwoStepVerification3Component_Template_button_click_25_listener() {
            return ctx.navigation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Verify My Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 21)(28, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Copyright \u00A9 2023 DreamsPOS. All rights reserved");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.adminDashboard);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 21701:
/*!*****************************************************************************************************!*\
  !*** ./src/app/auth/two-step-verification/two-step-verification/two-step-verification.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TwoStepVerificationComponent: () => (/* binding */ TwoStepVerificationComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);




class TwoStepVerificationComponent {
  constructor(router) {
    this.router = router;
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
  }
  navigation() {
    this.router.navigate([src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes.adminDashboard]);
  }
  static {
    this.ɵfac = function TwoStepVerificationComponent_Factory(t) {
      return new (t || TwoStepVerificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: TwoStepVerificationComponent,
      selectors: [["app-two-step-verification"]],
      decls: 31,
      vars: 1,
      consts: [[1, "account-content"], [1, "login-wrapper", "bg-img"], [1, "login-content"], [1, "login-userset"], [1, "login-logo", "logo-normal"], ["src", "assets/img/logo.png", "alt", "img"], [1, "login-logo", "logo-white", 3, "routerLink"], ["src", "assets/img/logo-white.png", "alt", ""], [1, "login-userheading"], [1, "verfy-mail-content"], [1, "digit-group"], [1, "wallet-add"], [1, "otp-box"], [1, "forms-block", "text-center"], ["type", "text", "id", "digit-1", "maxlength", "1", "value", ""], ["type", "text", "id", "digit-2", "maxlength", "1", "value", ""], ["type", "text", "id", "digit-3", "maxlength", "1", "value", ""], ["type", "text", "id", "digit-4", "maxlength", "1", "value", ""], [1, "Otp-expire", "text-center"], [1, "form-login", "mt-4"], ["type", "button", 1, "btn", "btn-login", 3, "click"], [1, "my-4", "d-flex", "justify-content-center", "align-items-center", "copyright-text"]],
      template: function TwoStepVerificationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 3)(5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8)(10, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Login With Your Email Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h4", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "We sent a verification code to your email. Enter the code from the email in the field below");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "form", 10)(15, "div", 11)(16, "div", 12)(17, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 14)(19, "input", 15)(20, "input", 16)(21, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 18)(23, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Otp will expire in 09 :10");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 19)(26, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TwoStepVerificationComponent_Template_button_click_26_listener() {
            return ctx.navigation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Verify My Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 21)(29, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Copyright \u00A9 2023 DreamsPOS. All rights reserved");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.adminDashboard);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_auth_auth_module_ts.js.map