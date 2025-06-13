"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_main_application_application_module_ts"],{

/***/ 22486:
/*!*******************************************************************************!*\
  !*** ./src/app/core-component/main/application/application-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApplicationRoutingModule: () => (/* binding */ ApplicationRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _application_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application.component */ 2352);
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat/chat.component */ 89039);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);





const routes = [{
  path: '',
  component: _application_component__WEBPACK_IMPORTED_MODULE_0__.ApplicationComponent,
  children: [{
    path: 'chat',
    component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_1__.ChatComponent
  }]
}];
class ApplicationRoutingModule {
  static {
    this.ɵfac = function ApplicationRoutingModule_Factory(t) {
      return new (t || ApplicationRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: ApplicationRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ApplicationRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 2352:
/*!**************************************************************************!*\
  !*** ./src/app/core-component/main/application/application.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApplicationComponent: () => (/* binding */ ApplicationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);


class ApplicationComponent {
  static {
    this.ɵfac = function ApplicationComponent_Factory(t) {
      return new (t || ApplicationComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ApplicationComponent,
      selectors: [["app-application"]],
      decls: 1,
      vars: 0,
      template: function ApplicationComponent_Template(rf, ctx) {
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

/***/ 5247:
/*!***********************************************************************!*\
  !*** ./src/app/core-component/main/application/application.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApplicationModule: () => (/* binding */ ApplicationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _application_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application-routing.module */ 22486);
/* harmony import */ var _application_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./application.component */ 2352);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat/chat.component */ 89039);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);






class ApplicationModule {
  static {
    this.ɵfac = function ApplicationModule_Factory(t) {
      return new (t || ApplicationModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: ApplicationModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _application_routing_module__WEBPACK_IMPORTED_MODULE_0__.ApplicationRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.sharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ApplicationModule, {
    declarations: [_application_component__WEBPACK_IMPORTED_MODULE_1__.ApplicationComponent, _chat_chat_component__WEBPACK_IMPORTED_MODULE_3__.ChatComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _application_routing_module__WEBPACK_IMPORTED_MODULE_0__.ApplicationRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.sharedModule]
  });
})();

/***/ }),

/***/ 89039:
/*!************************************************************************!*\
  !*** ./src/app/core-component/main/application/chat/chat.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatComponent: () => (/* binding */ ChatComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/routes */ 4450);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_core_core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/core.index */ 82351);
/* harmony import */ var src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.index */ 31287);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/custom-pagination/custom-pagination.component */ 14860);
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-scrollbar */ 74091);













const _c0 = ["chatContainer"];
const _c1 = (a0, a1) => ({
  "badge badge-danger": a0,
  "badge badge-success": a1
});
const _c2 = a0 => ({
  chats: true,
  "chats-right": a0
});
const _c3 = a0 => ({
  "justify-content-end": a0
});
function ChatComponent_div_2_a_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ChatComponent_div_2_a_6_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.submitCloseTicket());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Close Ticket");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ChatComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7)(1, "div")(2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ChatComponent_div_2_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.selectTicket(null, "hide"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ChatComponent_div_2_a_6_Template, 2, 0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.selectedTicketMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.selectedTicketStatus === "Open");
  }
}
function ChatComponent_div_3_mat_option_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const filter_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", filter_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", filter_r5.lable, " ");
  }
}
function ChatComponent_div_3_mat_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const filter_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", filter_r6.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", filter_r6.city, " ");
  }
}
function ChatComponent_div_3_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ChatComponent_div_3_tr_32_Template_tr_click_0_listener() {
      const ticket_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.selectTicket(ticket_r8, "show"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td")(8, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ticket_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ticket_r8.subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ticket_r8.users.first_name, " ", ticket_r8.users.last_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((tmp_5_0 = ticket_r8 == null ? null : ticket_r8.addresses == null ? null : ticket_r8.addresses.city) !== null && tmp_5_0 !== undefined ? tmp_5_0 : "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](6, _c1, ticket_r8.ticket_status === "Open", ticket_r8.ticket_status === "Closed"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ticket_r8.ticket_status, " ");
  }
}
function ChatComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "div", 14)(3, "h5", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Tickets");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 16)(6, "div", 17)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Filter by Ticket Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ChatComponent_div_3_Template_mat_select_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.filterSelectedTicket, $event) || (ctx_r1.filterSelectedTicket = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectionChange", function ChatComponent_div_3_Template_mat_select_selectionChange_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterTicketType());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, ChatComponent_div_3_mat_option_10_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 20)(12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Filter by City");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ChatComponent_div_3_Template_mat_select_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.filterSelectedCity, $event) || (ctx_r1.filterSelectedCity = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectionChange", function ChatComponent_div_3_Template_mat_select_selectionChange_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterTicketType());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, ChatComponent_div_3_mat_option_17_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 22)(19, "div", 23)(20, "table", 24)(21, "thead", 25)(22, "tr")(23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Subject");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, ChatComponent_div_3_tr_32_Template, 10, 9, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "app-custom-pagination", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function ChatComponent_div_3_Template_app_custom_pagination_pageChange_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onPageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.filterSelectedTicket);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.ticketFilters);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.filterSelectedCity);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.cities);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.ticketsData);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pagination", ctx_r1.pagination);
  }
}
function ChatComponent_ng_scrollbar_4_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const message_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", message_r9.user.profile_img_url || "assets/img/avatar/avatar-2.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function ChatComponent_ng_scrollbar_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ChatComponent_ng_scrollbar_4_div_4_div_1_Template, 2, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 35)(3, "div", 36)(4, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const message_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](11, _c2, message_r9.is_admin));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !message_r9.is_admin);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](13, _c3, message_r9.is_admin));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"](" ", message_r9.user.first_name, " ", message_r9.user.last_name, " ", message_r9.is_admin ? "(Admin)" : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](8, 8, message_r9.created_at, "MMM d, y, h:mm a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", message_r9.message, " ");
  }
}
function ChatComponent_ng_scrollbar_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-scrollbar", null, 0)(2, "div", 30)(3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ChatComponent_ng_scrollbar_4_div_4_Template, 11, 15, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.messagesData);
  }
}
function ChatComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 40)(1, "form", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function ChatComponent_div_5_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.submitMessage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ChatComponent_div_5_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.messageText, $event) || (ctx_r1.messageText = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 43)(4, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.messageText);
  }
}
class ChatComponent {
  constructor(data, paginationService, route) {
    this.data = data;
    this.paginationService = paginationService;
    this.route = route;
    this.usersData = [];
    this.ticketsData = [];
    this.cities = [];
    this.messagesData = [];
    this.selectedUser = null;
    this.selectedTicketId = 0;
    this.selectedTicketMessage = '';
    this.selectedTicketStatus = '';
    this.showMessages = false;
    this.messageText = '';
    this.routes = src_app_core_helpers_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    this.filterSearchText = '';
    this.savedSearchText = '';
    this.page = 0;
    this.filterSelectedTicket = 'All';
    this.filterSelectedCity = 'All';
    this.ticketFilters = [{
      value: 'All',
      lable: 'All'
    }, {
      value: 'Open',
      lable: 'Open'
    }, {
      value: 'Closed',
      lable: 'Closed'
    }];
    this.getHelpDeskTickets();
    this.data.getCities().subscribe(apiRes => {
      apiRes.results.forEach((res, index) => {
        // Push data to the table array
        this.cities.push({
          ...res
        });
      });
    });
  }
  ngAfterViewChecked() {
    this.scrollToBottom();
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['ticketId']) {
        const ticket = {
          ticket_id: params['ticketId'],
          subject: params['subject'],
          ticket_status: params['status']
        };
        this.selectTicket(ticket, 'show');
      }
    });
  }
  scrollToBottom() {
    if (this.chatContainer) {
      this.chatContainer.scrollTo({
        bottom: 0,
        duration: 0
      });
    }
  }
  getHelpDeskTickets() {
    this.data.getHelpDeskTickets(this.page, this.filterSelectedTicket, this.filterSelectedCity).subscribe(apiRes => {
      this.ticketsData = [];
      apiRes.results.tickets.forEach((res, index) => {
        // Push data to the table array
        this.ticketsData.push({
          ...res
        });
      });
      this.paginationService.setPaginationData(apiRes.results.pagination);
      this.pagination = this.paginationService.getPaginationData();
    });
  }
  onPageChange(page) {
    this.page = page;
    this.getHelpDeskTickets();
  }
  clearSearch() {
    this.filterSearchText = '';
    this.savedSearchText = '';
    this.getHelpDeskTickets();
  }
  onSearchClick() {
    this.savedSearchText = this.filterSearchText;
    this.getHelpDeskTickets();
  }
  filterTicketType() {
    this.getHelpDeskTickets();
  }
  submitCloseTicket() {
    this.selectedTicketStatus = 'Closed';
    this.data.closeTicket(this.selectedTicketId).subscribe({
      next: res => {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
          icon: 'success',
          title: 'Ticket Closed',
          text: 'The ticket has been closed successfully.',
          confirmButtonText: 'OK'
        });
      },
      error: err => {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
          icon: 'error',
          title: 'Failed to Close Ticket',
          text: 'Something went wrong. Please try again.',
          confirmButtonText: 'Retry'
        });
      }
    });
  }
  getTicketsData(userId, name) {
    if (userId) this.data.getTicketsByUserId(userId).subscribe(apiRes => {
      this.ticketsData = [];
      this.ticketsData = apiRes.results.tickets;
    });
  }
  getMessagesData(ticketId) {
    if (ticketId) this.data.getMessagesByTicketId(ticketId).subscribe(apiRes => {
      this.messagesData = [];
      this.messagesData = apiRes.results.messages;
    });
  }
  selectUser(user) {
    this.getTicketsData(user.user_id, user.first_name + ' ' + user.last_name);
    this.selectedUser = {
      userId: user.user_id,
      name: (user.first_name || '-') + ' ' + (user.last_name || '-'),
      profile_img_url: user.profile_img_url
    };
  }
  selectTicket(ticket, event) {
    if (event == 'show') {
      this.getMessagesData(ticket.ticket_id);
      this.selectedTicketId = ticket.ticket_id;
      this.selectedTicketMessage = ticket.subject;
      this.selectedTicketStatus = ticket.ticket_status;
      this.showMessages = true;
    } else {
      this.showMessages = false;
    }
  }
  submitMessage() {
    if (!this.messageText.trim()) {
      console.warn('Message cannot be empty');
      return;
    }
    if (this.messageText != '') this.data.submitMessage(this.selectedTicketId, this.messageText).subscribe(apiRes => {
      this.getMessagesData(this.selectedTicketId);
      this.messageText = '';
    });
  }
  static {
    this.ɵfac = function ChatComponent_Factory(t) {
      return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_3__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ChatComponent,
      selectors: [["app-chat"]],
      viewQuery: function ChatComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.chatContainer = _t.first);
        }
      },
      decls: 6,
      vars: 4,
      consts: [["chatContainer", ""], ["id", "middle", 1, "chat", "chat-messages"], [1, "slimscroll"], ["class", "chat-header justify-content-start", 4, "ngIf"], ["class", "col-lg-12 mt-4", 4, "ngIf"], [4, "ngIf"], ["class", "chat-footer", 4, "ngIf"], [1, "chat-header", "justify-content-start"], ["href", "javascript:void(0)", 1, "btn", "btn-outline-light", 3, "click"], [1, "bx", "bx-arrow-back"], ["class", "btn btn-primary ml-4 rounded", "href", "javascript:void(0);", 3, "click", 4, "ngIf"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "ml-4", "rounded", 3, "click"], [1, "col-lg-12", "mt-4"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "p-4", "mt-2", "d-flex"], [2, "width", "300px"], [3, "ngModelChange", "selectionChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "ml-2", 2, "width", "300px"], [3, "value"], [1, "card-body"], [1, "table-responsive", 2, "max-height", "400px", "overflow-y", "auto"], [1, "table", "datanew", "table-hover", "mb-0"], [1, "thead-sticky"], [3, "click", 4, "ngFor", "ngForOf"], [3, "pageChange", "pagination"], [3, "click"], [1, "px-2", 3, "ngClass"], [1, "chat-body"], [1, "messages", 2, "padding-bottom", "200px"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], ["class", "chat-avatar", 4, "ngIf"], [1, "chat-content"], [1, "chat-profile-name", 3, "ngClass"], [1, "message-content"], [1, "chat-avatar"], ["alt", "image", 1, "rounded-circle", "dreams_chat", 3, "src"], [1, "chat-footer"], [3, "ngSubmit"], ["type", "text", "placeholder", "Type your message here...", "name", "message", "required", "", 1, "form-control", "chat_form", 3, "ngModelChange", "ngModel"], [1, "form-buttons"], ["type", "submit", 1, "btn", "send-btn"], [1, "bx", "bx-paper-plane"]],
      template: function ChatComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ChatComponent_div_2_Template, 7, 2, "div", 3)(3, ChatComponent_div_3_Template, 34, 7, "div", 4)(4, ChatComponent_ng_scrollbar_4_Template, 5, 1, "ng-scrollbar", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ChatComponent_div_5_Template, 6, 1, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showMessages);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.showMessages);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showMessages);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.selectedTicketStatus === "Open" && ctx.showMessages);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_4__.CustomPaginationComponent, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_12__.NgScrollbar, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
      styles: [".chat[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 60px);\n  background: #fff;\n}\n.chat[_ngcontent-%COMP%]   .slimscroll[_ngcontent-%COMP%] {\n  height: 100% !important;\n  overflow: hidden;\n}\n.chat[_ngcontent-%COMP%]   .chat-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 15px 24px;\n  border-bottom: 1px solid rgba(145, 158, 171, 0.3);\n  background: #FFF;\n  box-shadow: 0px 4px 60px 0px rgba(231, 231, 231, 0.47);\n  flex-shrink: 0;\n}\n.chat[_ngcontent-%COMP%]   .chat-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-left: 15px;\n}\n.chat[_ngcontent-%COMP%]   .chat-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: hidden;\n  position: relative;\n}\n.chat[_ngcontent-%COMP%]   .chat-body[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%] {\n  padding: 20px;\n  height: 100%;\n  overflow-y: auto;\n}\n.chat[_ngcontent-%COMP%]   .chat-body[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .chats[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n}\n.chat[_ngcontent-%COMP%]   .chat-body[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .chats.chats-right[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.chat[_ngcontent-%COMP%]   .chat-body[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .chats.chats-right[_ngcontent-%COMP%]   .chat-content[_ngcontent-%COMP%] {\n  margin-right: 15px;\n  margin-left: 0;\n}\n.chat[_ngcontent-%COMP%]   .chat-body[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .chats[_ngcontent-%COMP%]   .chat-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n.chat[_ngcontent-%COMP%]   .chat-body[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .chats[_ngcontent-%COMP%]   .chat-content[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  max-width: 70%;\n}\n.chat[_ngcontent-%COMP%]   .chat-body[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .chats[_ngcontent-%COMP%]   .chat-content[_ngcontent-%COMP%]   .chat-profile-name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 5px;\n}\n.chat[_ngcontent-%COMP%]   .chat-body[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .chats[_ngcontent-%COMP%]   .chat-content[_ngcontent-%COMP%]   .chat-profile-name[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 500;\n}\n.chat[_ngcontent-%COMP%]   .chat-body[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .chats[_ngcontent-%COMP%]   .chat-content[_ngcontent-%COMP%]   .chat-profile-name[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n  margin-left: 10px;\n}\n.chat[_ngcontent-%COMP%]   .chat-body[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .chats[_ngcontent-%COMP%]   .chat-content[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  padding: 10px 15px;\n  border-radius: 8px;\n  font-size: 14px;\n}\n.chat[_ngcontent-%COMP%]   .chat-footer[_ngcontent-%COMP%] {\n  padding: 15px 24px;\n  border-top: 1px solid rgba(145, 158, 171, 0.3);\n  background: #fff;\n  flex-shrink: 0;\n}\n.chat[_ngcontent-%COMP%]   .chat-footer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.chat[_ngcontent-%COMP%]   .chat-footer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .chat_form[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  padding: 10px 15px;\n  margin-right: 10px;\n}\n.chat[_ngcontent-%COMP%]   .chat-footer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .send-btn[_ngcontent-%COMP%] {\n  background: #007bff;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  padding: 10px 20px;\n}\n\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS1jb21wb25lbnQvbWFpbi9hcHBsaWNhdGlvbi9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0U7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaURBQUE7RUFDQSxnQkFBQTtFQUNBLHNEQUFBO0VBQ0EsY0FBQTtBQUFKO0FBRUk7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7QUFBTjtBQUlFO0VBQ0UsT0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFGSjtBQUlJO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUZOO0FBSU07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFGUjtBQUlRO0VBQ0UsMkJBQUE7QUFGVjtBQUlVO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FBRlo7QUFPVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFMWjtBQVNRO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBUFY7QUFTVTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBUFo7QUFTWTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFQZDtBQVNjO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQVBoQjtBQVlVO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVZaO0FBaUJFO0VBQ0Usa0JBQUE7RUFDQSw4Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQWZKO0FBaUJJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBZk47QUFpQk07RUFDRSxPQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFmUjtBQWtCTTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBaEJSOztBQXlCTTtFQUNFLGVBQUE7QUF0QlI7QUF1QlE7RUFDRSx5QkFBQTtBQXJCViIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0IHtcclxuICBmbGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cclxuICAuc2xpbXNjcm9sbCB7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAuY2hhdC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDI0cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxNDUsIDE1OCwgMTcxLCAwLjMwKTtcclxuICAgIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDYwcHggMHB4IHJnYmEoMjMxLCAyMzEsIDIzMSwgMC40Nyk7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuXHJcbiAgICBoNSB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2hhdC1ib2R5IHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIC5tZXNzYWdlcyB7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuXHJcbiAgICAgIC5jaGF0cyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgICAgICAmLmNoYXRzLXJpZ2h0IHtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuXHJcbiAgICAgICAgICAuY2hhdC1jb250ZW50IHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jaGF0LWF2YXRhciB7XHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2hhdC1jb250ZW50IHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA3MCU7XHJcblxyXG4gICAgICAgICAgLmNoYXQtcHJvZmlsZS1uYW1lIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cclxuICAgICAgICAgICAgaDYge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbiAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5tZXNzYWdlLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNoYXQtZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMjRweDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDE0NSwgMTU4LCAxNzEsIDAuMzApO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG5cclxuICAgIGZvcm0ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgLmNoYXRfZm9ybSB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2VuZC1idG4ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDdiZmY7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi50YWJsZS1yZXNwb25zaXZlIHtcclxuICAudGFibGUge1xyXG4gICAgdGJvZHkge1xyXG4gICAgICB0ciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 96414:
/*!****************************************************************!*\
  !*** ./src/app/shared/custom-pagination/pagination.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaginationService: () => (/* binding */ PaginationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class PaginationService {
  constructor() {
    this.paginationData = {
      total_items: 0,
      total_pages: 0,
      current_page: 1,
      page_size: 10,
      has_next: false,
      has_prev: false,
      next_page: null,
      prev_page: null
    };
  }
  setPaginationData(data) {
    this.paginationData = data;
  }
  getPaginationData() {
    return this.paginationData;
  }
  getNextPage() {
    return this.paginationData.has_next ? this.paginationData.next_page : null;
  }
  getPrevPage() {
    return this.paginationData.has_prev ? this.paginationData.prev_page : null;
  }
  static {
    this.ɵfac = function PaginationService_Factory(t) {
      return new (t || PaginationService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PaginationService,
      factory: PaginationService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 31287:
/*!****************************************!*\
  !*** ./src/app/shared/shared.index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaginationService: () => (/* reexport safe */ _custom_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_1__.PaginationService),
/* harmony export */   sharedModule: () => (/* reexport safe */ _shared_module__WEBPACK_IMPORTED_MODULE_0__.sharedModule)
/* harmony export */ });
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ 93887);
/* harmony import */ var _custom_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-pagination/pagination.service */ 96414);



/***/ })

}]);
//# sourceMappingURL=src_app_core-component_main_application_application_module_ts.js.map