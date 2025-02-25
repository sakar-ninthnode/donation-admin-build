"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_base-ui_ui-sweetalerts_ui-sweetalerts_module_ts"],{

/***/ 62539:
/*!****************************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-sweetalerts/ui-sweetalerts-routing.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiSweetalertsRoutingModule: () => (/* binding */ UiSweetalertsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ui_sweetalerts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-sweetalerts.component */ 59051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _ui_sweetalerts_component__WEBPACK_IMPORTED_MODULE_0__.UiSweetalertsComponent
}];
class UiSweetalertsRoutingModule {
  static {
    this.ɵfac = function UiSweetalertsRoutingModule_Factory(t) {
      return new (t || UiSweetalertsRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: UiSweetalertsRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UiSweetalertsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 59051:
/*!***********************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-sweetalerts/ui-sweetalerts.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiSweetalertsComponent: () => (/* binding */ UiSweetalertsComponent)
/* harmony export */ });
/* harmony import */ var C_work_git_sakar_nithnode_admin_donation_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);




class UiSweetalertsComponent {
  constructor() {
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_1__.routes;
  }
  basicAlert() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire("Any fool can use a computer");
  }
  withTitle() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
      title: "The Internet?",
      text: "That thing is still around?"
    });
  }
  footerAlert() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="javascript:void(0);">Why do I have this issue?</a>'
    });
  }
  topStart() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
      position: "top-start",
      text: "Your work has been saved"
    });
  }
  topEnd() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
      position: "top-end",
      text: "Your work has been saved"
    });
  }
  bottomStart() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
      position: "bottom-start",
      text: "Your work has been saved"
    });
  }
  bottomEnd() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
      position: "bottom-end",
      text: "Your work has been saved"
    });
  }
  typeSuccess() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
      title: "Good Job!",
      text: "You clicked the button!"
    });
  }
  typeInfo() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
      title: "Info",
      text: "You clicked the button!"
    });
  }
  typeWarning() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
      title: "Warning",
      text: "You clicked the button!"
    });
  }
  typeError() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
      title: "Error",
      text: "You clicked the button!"
    });
  }
  confirmText() {
    const swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'me-2 btn btn-danger'
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then(result => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire('Deleted!', 'Your file has been deleted.', 'success');
      } else if ( /* Read more about handling dismissals below */
      result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().DismissReason).cancel) {
        swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
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
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      confirmButtonText: 'Yes, delete it!',
      reverseButtons: true
    }).then(result => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire('Deleted!', 'Your file has been deleted.', 'success');
      } else if ( /* Read more about handling dismissals below */
      result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().DismissReason).cancel) {
        swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }
  clickout() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
      title: "Click outside to close!",
      text: "This is a cool message!"
    });
  }
  autoclose() {
    let timerInterval;
    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
      title: 'Auto close alert!',
      html: 'I will close in <b></b> milliseconds.',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        timerInterval = setInterval(() => {
          const content = sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().getHtmlContainer();
          if (content) {
            const b = content.querySelector('b');
            if (b) {
              // Use optional chaining operator to safely access getTimerLeft() result
              b.textContent = sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().getTimerLeft()?.toString() ?? '';
            }
          }
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    });
  }
  showPrompt() {
    return (0,C_work_git_sakar_nithnode_admin_donation_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const steps = ['1', '2', '3'];
      const answers = [];
      for (const step of steps) {
        const result = yield sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
          title: `Question ${step}`,
          input: 'text',
          confirmButtonText: 'Next &rarr;',
          showCancelButton: true,
          customClass: {
            confirmButton: 'btn btn-primary',
            cancelButton: 'btn btn-danger ml-1'
          },
          buttonsStyling: false
        });
        if (result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().DismissReason).cancel) {
          // Handle cancel button press if needed
          return; // You may choose to handle this differently
        }
        if (typeof result.value === 'string') {
          // Ensure result.value is a string
          answers.push(result.value);
        }
      }
    })();
  }
  static {
    this.ɵfac = function UiSweetalertsComponent_Factory(t) {
      return new (t || UiSweetalertsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: UiSweetalertsComponent,
      selectors: [["app-ui-sweetalerts"]],
      decls: 88,
      vars: 0,
      consts: [[1, "cardhead"], [1, "page-header"], [1, "row"], [1, "col-sm-12"], [1, "page-title"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["type", "button", 1, "btn", "btn-outline-primary", "mr-1", "mb-1", "me-1", 3, "click"], ["type", "button", 1, "btn", "btn-outline-primary", "mr-1", "mb-1", 3, "click"], [1, "btn", "btn-outline-success", "mr-1", "mb-1", "me-1", 3, "click"], [1, "btn", "btn-outline-success", "mr-1", "mb-1", 3, "click"], ["type", "button", 1, "btn", "btn-outline-success", "mr-1", "mb-1", "me-1", 3, "click"], ["type", "button", 1, "btn", "btn-outline-info", "mr-1", "mb-1", "me-1", 3, "click"], ["type", "button", 1, "btn", "btn-outline-warning", "mr-1", "mb-1", "me-1", 3, "click"], ["type", "button", 1, "btn", "btn-outline-danger", "mr-1", "mb-1", 3, "click"], ["type", "button", "id", "auto-close", 1, "btn", "btn-outline-primary", "mr-1", "mb-1", 3, "click"], ["type", "button", "id", "outside-click", 1, "btn", "btn-outline-primary", "mr-1", "mb-1", 3, "click"], ["type", "button", "id", "prompt-function", 1, "btn", "btn-outline-primary", "mr-1", "mb-1", 3, "click"], ["type", "button", 1, "btn", "btn-outline-primary", "mb-3", 3, "click"], ["type", "button", 1, "btn", "btn-outline-primary", "mb-2", 3, "click"]],
      template: function UiSweetalertsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Sweetalerts");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 2)(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "h4", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Basic Examples");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9)(13, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " SweetAlert automatically centers itself on the page and looks great no matter if you're using a desktop computer, mobile or tablet. It's even highly customizable, as you can see below! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UiSweetalertsComponent_Template_button_click_15_listener() {
            return ctx.basicAlert();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " Basic ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UiSweetalertsComponent_Template_button_click_17_listener() {
            return ctx.withTitle();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " With Title ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UiSweetalertsComponent_Template_button_click_19_listener() {
            return ctx.footerAlert();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " With Footer ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 6)(22, "div", 7)(23, "h4", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Position");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 9)(26, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " You can specify position of your alert with ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "position : [ top-start | top-end | bottom-start | bottom-end ] ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, " in js. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UiSweetalertsComponent_Template_button_click_31_listener() {
            return ctx.topStart();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " Top Start ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UiSweetalertsComponent_Template_button_click_33_listener() {
            return ctx.topEnd();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, " Top End ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UiSweetalertsComponent_Template_button_click_35_listener() {
            return ctx.bottomStart();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, " Bottom Starts ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UiSweetalertsComponent_Template_button_click_37_listener() {
            return ctx.bottomEnd();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, " Bottom End ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 6)(40, "div", 7)(41, "h4", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Types");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 9)(44, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, " The type of the modal. SweetAlert comes with 4 built-in types which will show a corresponding icon animation: \"warning\", \"error\", \"success\" and \"info\". You can also set it as \"input\" to get a prompt modal. It can either be put in the object under the key \"icon\" or passed as the third parameter of the function. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UiSweetalertsComponent_Template_button_click_46_listener() {
            return ctx.typeSuccess();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, " Success ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UiSweetalertsComponent_Template_button_click_48_listener() {
            return ctx.typeInfo();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, " Info ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UiSweetalertsComponent_Template_button_click_50_listener() {
            return ctx.typeWarning();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, " Warning ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UiSweetalertsComponent_Template_button_click_52_listener() {
            return ctx.typeError();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, " Error ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 6)(55, "div", 7)(56, "h4", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Options");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 9)(59, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UiSweetalertsComponent_Template_button_click_59_listener() {
            return ctx.autoclose();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, " Auto Close ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UiSweetalertsComponent_Template_button_click_61_listener() {
            return ctx.clickout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, " Click Outside ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UiSweetalertsComponent_Template_button_click_63_listener() {
            return ctx.showPrompt();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, " Question ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 6)(66, "div", 7)(67, "h4", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "Confirm Options");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 9)(70, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "Confirm Button Text");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, " Use ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "confirmButtonText: \"Your text here!\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, " option to change the text of the \"Confirm\" button. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UiSweetalertsComponent_Template_button_click_77_listener() {
            return ctx.confirmText();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, " Confirm Text ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "Confirm Button Color");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, " Use ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "confirmButtonClass: \"btn btn-[colorName]\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, " option to change the color of the \"Confirm\" button. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UiSweetalertsComponent_Template_button_click_86_listener() {
            return ctx.confirmColor();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, " Confirm Button Color ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3402:
/*!********************************************************************************!*\
  !*** ./src/app/core-component/base-ui/ui-sweetalerts/ui-sweetalerts.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiSweetalertsModule: () => (/* binding */ UiSweetalertsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ui_sweetalerts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-sweetalerts-routing.module */ 62539);
/* harmony import */ var _ui_sweetalerts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-sweetalerts.component */ 59051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);




class UiSweetalertsModule {
  static {
    this.ɵfac = function UiSweetalertsModule_Factory(t) {
      return new (t || UiSweetalertsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: UiSweetalertsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_sweetalerts_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiSweetalertsRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UiSweetalertsModule, {
    declarations: [_ui_sweetalerts_component__WEBPACK_IMPORTED_MODULE_1__.UiSweetalertsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ui_sweetalerts_routing_module__WEBPACK_IMPORTED_MODULE_0__.UiSweetalertsRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_base-ui_ui-sweetalerts_ui-sweetalerts_module_ts.js.map