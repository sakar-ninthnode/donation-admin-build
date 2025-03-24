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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages.component */ 32020);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile/profile.component */ 28015);
/* harmony import */ var _refferals_refferal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./refferals/refferal.component */ 91638);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);






const routes = [{
  path: '',
  component: _pages_component__WEBPACK_IMPORTED_MODULE_0__.PagesComponent,
  children: [{
    path: 'profile',
    component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__.ProfileComponent
  }, {
    path: 'refferal',
    component: _refferals_refferal_component__WEBPACK_IMPORTED_MODULE_2__.RefferalComponent
  }]
}];
class PagesRoutingModule {
  static {
    this.ɵfac = function PagesRoutingModule_Factory(t) {
      return new (t || PagesRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: PagesRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PagesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages-routing.module */ 10602);
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.component */ 32020);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/profile.component */ 28015);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _refferals_refferal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./refferals/refferal.component */ 91638);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);







class PagesModule {
  static {
    this.ɵfac = function PagesModule_Factory(t) {
      return new (t || PagesModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: PagesModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.PagesRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.sharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PagesModule, {
    declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_1__.PagesComponent, _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__.ProfileComponent, _refferals_refferal_component__WEBPACK_IMPORTED_MODULE_4__.RefferalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.PagesRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.sharedModule]
  });
})();

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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.profileImage, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
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
      decls: 42,
      vars: 2,
      consts: [[1, "page-header"], [1, "page-title"], [1, "card"], [1, "card-body"], [1, "new-employee-field"], [1, "profile-pic-upload", "mb-2"], [1, "profile-pic"], [4, "ngIf"], [1, "input-blocks", "mb-0"], [1, "image-upload", "mb-0"], ["type", "file", "accept", "image/*", 3, "change"], [1, "image-uploads"], [3, "ngSubmit", "formGroup"], [1, "row"], [1, "col-lg-6", "col-sm-12"], [1, "input-blocks"], [1, "form-label"], ["type", "text", "formControlName", "first_name", 1, "form-control"], ["type", "text", "formControlName", "last_name", 1, "form-control"], ["type", "email", "formControlName", "email", 1, "form-control"], [1, "col-12"], ["type", "submit", 1, "btn", "btn-submit", "me-2"], ["href", "javascript:void(0);", 1, "btn", "btn-cancel"], ["alt", "Preview", 2, "max-width", "100px", "margin-top", "10px", 3, "src"]],
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
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.profileImage);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.profileForm);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _refferal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refferal.service */ 23130);
/* harmony import */ var _profile_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile/profile.service */ 43431);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);







function RefferalComponent_input_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 16);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r0.userRole === "Warehouse Admin" || ctx_r0.userRole === "Support Staff");
  }
}
function RefferalComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Invalid Android URL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RefferalComponent_input_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 18);
  }
}
function RefferalComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Invalid iOS URL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RefferalComponent_button_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Update Referral Links ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r0.referralForm.invalid);
  }
}
function RefferalComponent_div_24_input_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 22);
  }
}
function RefferalComponent_div_24_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Invalid Points ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RefferalComponent_div_24_input_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 23);
  }
}
function RefferalComponent_div_24_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Invalid Points ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RefferalComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 5)(2, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Update Referral Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3)(5, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function RefferalComponent_div_24_Template_form_ngSubmit_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.updateReferralPoints());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 8)(7, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Points for referrer:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, RefferalComponent_div_24_input_9_Template, 1, 0, "input", 20)(10, RefferalComponent_div_24_div_10_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8)(12, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Points for referee:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, RefferalComponent_div_24_input_14_Template, 1, 0, "input", 21)(15, RefferalComponent_div_24_div_15_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Update Referral Points ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_5_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.referralPointsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.referralPointsForm.get("points_for_referrer"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx_r0.referralPointsForm.get("points_for_referrer")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r0.referralPointsForm.get("points_for_referrer")) == null ? null : tmp_3_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.referralPointsForm.get("points_for_referee"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx_r0.referralPointsForm.get("points_for_referee")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r0.referralPointsForm.get("points_for_referee")) == null ? null : tmp_5_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r0.referralPointsForm.invalid);
  }
}
function RefferalComponent_div_25_input_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 27);
  }
}
function RefferalComponent_div_25_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Invalid Points ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RefferalComponent_div_25_input_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 28);
  }
}
function RefferalComponent_div_25_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Invalid Points ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RefferalComponent_div_25_input_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 29);
  }
}
function RefferalComponent_div_25_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Invalid Points ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RefferalComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 5)(2, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Update Batch Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3)(5, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function RefferalComponent_div_25_Template_form_ngSubmit_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.updateBatchPoints());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 8)(7, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Bronze Points:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, RefferalComponent_div_25_input_9_Template, 1, 0, "input", 24)(10, RefferalComponent_div_25_div_10_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8)(12, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Silver Points:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, RefferalComponent_div_25_input_14_Template, 1, 0, "input", 25)(15, RefferalComponent_div_25_div_15_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 8)(17, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Silver Points:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, RefferalComponent_div_25_input_19_Template, 1, 0, "input", 26)(20, RefferalComponent_div_25_div_20_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Update Batch Points ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_5_0;
    let tmp_7_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.batchPointsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.batchPointsForm.get("bronze_points"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx_r0.batchPointsForm.get("bronze_points")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r0.batchPointsForm.get("bronze_points")) == null ? null : tmp_3_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.batchPointsForm.get("silver_points"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx_r0.batchPointsForm.get("silver_points")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r0.batchPointsForm.get("silver_points")) == null ? null : tmp_5_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.batchPointsForm.get("gold_points"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx_r0.batchPointsForm.get("gold_points")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r0.batchPointsForm.get("gold_points")) == null ? null : tmp_7_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r0.batchPointsForm.invalid);
  }
}
class RefferalComponent {
  constructor(fb, referralService, profileService) {
    this.fb = fb;
    this.referralService = referralService;
    this.profileService = profileService;
    this.passwordVisibility = false;
    this.userRole = "";
    this.referralForm = this.fb.group({
      android_link: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('https?://.+')]],
      // URL validation
      ios_link: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('https?://.+')]]
    });
    this.referralPointsForm = this.fb.group({
      points_for_referrer: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[0-9]+$')]],
      points_for_referee: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[0-9]+$')]]
    });
    this.batchPointsForm = this.fb.group({
      bronze_points: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[0-9]+$')]],
      silver_points: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[0-9]+$')]],
      gold_points: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[0-9]+$')]]
    });
  }
  ngOnInit() {
    this.loadUserProfile();
  }
  loadUserProfile() {
    this.profileService.getProfile().subscribe(data => {
      this.userRole = data.results.user_role.role_name;
      this.loadUserRefferalLinks();
      if (this.userRole == "Warehouse Admin" || this.userRole == "Support Staff") {
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
      this.batchPointsForm.patchValue({
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
    if (this.batchPointsForm.invalid) {
      return;
    }
    this.referralService.updateBatchPointsData(this.batchPointsForm.value).subscribe(response => {
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
  static {
    this.ɵfac = function RefferalComponent_Factory(t) {
      return new (t || RefferalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_refferal_service__WEBPACK_IMPORTED_MODULE_1__.ReferralService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: RefferalComponent,
      selectors: [["app-profile"]],
      decls: 26,
      vars: 8,
      consts: [[1, "page-header"], [1, "page-title"], [1, "card"], [1, "card-body"], [1, "container", "mt-4"], [1, "card-header", "bg-primary", "text-white"], [1, "mb-0"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], ["for", "android", 1, "form-label"], ["id", "android", "type", "url", "class", "form-control", "formControlName", "android_link", "placeholder", "Enter Android referral link", 3, "disabled", 4, "ngIf"], ["class", "text-danger small", 4, "ngIf"], ["for", "ios", 1, "form-label"], ["id", "ios", "type", "url", "class", "form-control", "formControlName", "ios_link", "placeholder", "Enter iOS referral link", 4, "ngIf"], ["type", "submit", "class", "btn btn-success w-100", 3, "disabled", 4, "ngIf"], ["class", "card", 4, "ngIf"], ["id", "android", "type", "url", "formControlName", "android_link", "placeholder", "Enter Android referral link", 1, "form-control", 3, "disabled"], [1, "text-danger", "small"], ["id", "ios", "type", "url", "formControlName", "ios_link", "placeholder", "Enter iOS referral link", 1, "form-control"], ["type", "submit", 1, "btn", "btn-success", "w-100", 3, "disabled"], ["id", "android", "type", "number", "class", "form-control", "formControlName", "points_for_referrer", 4, "ngIf"], ["id", "ios", "type", "number", "class", "form-control", "formControlName", "points_for_referee", 4, "ngIf"], ["id", "android", "type", "number", "formControlName", "points_for_referrer", 1, "form-control"], ["id", "ios", "type", "number", "formControlName", "points_for_referee", 1, "form-control"], ["id", "android", "type", "number", "class", "form-control", "formControlName", "bronze_points", 4, "ngIf"], ["id", "ios", "type", "number", "class", "form-control", "formControlName", "silver_points", 4, "ngIf"], ["id", "ios", "type", "number", "class", "form-control", "formControlName", "gold_points", 4, "ngIf"], ["id", "android", "type", "number", "formControlName", "bronze_points", 1, "form-control"], ["id", "ios", "type", "number", "formControlName", "silver_points", 1, "form-control"], ["id", "ios", "type", "number", "formControlName", "gold_points", 1, "form-control"]],
      template: function RefferalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Referral");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 2)(8, "div", 5)(9, "h4", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Update Referral Links");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 3)(12, "form", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function RefferalComponent_Template_form_ngSubmit_12_listener() {
            return ctx.updateReferral();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 8)(14, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Android Link:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, RefferalComponent_input_16_Template, 1, 1, "input", 10)(17, RefferalComponent_div_17_Template, 2, 0, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 8)(19, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "iOS Link:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, RefferalComponent_input_21_Template, 1, 0, "input", 13)(22, RefferalComponent_div_22_Template, 2, 0, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, RefferalComponent_button_23_Template, 2, 1, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, RefferalComponent_div_24_Template, 18, 6, "div", 15)(25, RefferalComponent_div_25_Template, 23, 8, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          let tmp_2_0;
          let tmp_4_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.referralForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.referralForm.get("android_link"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.referralForm.get("android_link")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.referralForm.get("android_link")) == null ? null : tmp_2_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.referralForm.get("ios_link"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.referralForm.get("ios_link")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.referralForm.get("ios_link")) == null ? null : tmp_4_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.userRole === "Warehouse Admin" || ctx.userRole === "Support Staff") && ctx.referralForm.valid);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.userRole === "Platform Admin" && ctx.referralForm.valid);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.userRole === "Platform Admin" && ctx.referralForm.valid);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 45312);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);




class ReferralService {
  constructor(http) {
    this.http = http;
  }
  getReferralData() {
    const token = localStorage.getItem('authToken'); // Retrieve token
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND_URL}/admin/refferal`, {
      headers
    });
  }
  updateReferralData(profileData) {
    const token = localStorage.getItem('authToken'); // Retrieve token
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.patch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND_URL}/admin/refferal/1`, profileData, {
      headers
    });
  }
  getReferralPointsData() {
    const token = localStorage.getItem('authToken'); // Retrieve token
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND_URL}/admin/refferal-points`, {
      headers
    });
  }
  getBatchPointsData() {
    const token = localStorage.getItem('authToken'); // Retrieve token
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND_URL}/admin/badge-points`, {
      headers
    });
  }
  updateReferralPointsData(profileData) {
    const token = localStorage.getItem('authToken'); // Retrieve token
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.patch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND_URL}/admin/refferal-points/1`, profileData, {
      headers
    });
  }
  updateBatchPointsData(batchData) {
    const token = localStorage.getItem('authToken'); // Retrieve token
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND_URL}/admin/badge-points`, batchData, {
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

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_pages_pages_module_ts.js.map