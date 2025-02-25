"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_main_application_calendar_calendar_module_ts"],{

/***/ 4915:
/*!*************************************************************************************!*\
  !*** ./src/app/core-component/main/application/calendar/calendar-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalendarRoutingModule: () => (/* binding */ CalendarRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _calendar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar.component */ 31299);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _calendar_component__WEBPACK_IMPORTED_MODULE_0__.CalendarComponent
}];
class CalendarRoutingModule {
  static {
    this.ɵfac = function CalendarRoutingModule_Factory(t) {
      return new (t || CalendarRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: CalendarRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CalendarRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 31299:
/*!********************************************************************************!*\
  !*** ./src/app/core-component/main/application/calendar/calendar.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalendarComponent: () => (/* binding */ CalendarComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/core.index */ 82351);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/daygrid */ 75660);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/interaction */ 19426);
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/timegrid */ 76863);
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/list */ 64342);
/* harmony import */ var _event_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-utils */ 77798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fullcalendar/angular */ 87997);









function CalendarComponent_Conditional_35_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const arg_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](arg_r1.timeText);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](arg_r1.event.title);
  }
}
function CalendarComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "full-calendar", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CalendarComponent_Conditional_35_ng_template_1_Template, 4, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r1.calendarOptions);
  }
}
class CalendarComponent {
  constructor(changeDetector) {
    this.changeDetector = changeDetector;
    this.routes = src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.routes;
    this.country = 'India';
    this.calendarVisible = true;
    this.calendarOptions = {
      plugins: [_fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_3__["default"], _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5__["default"], _fullcalendar_list__WEBPACK_IMPORTED_MODULE_6__["default"]],
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },
      initialView: 'dayGridMonth',
      initialEvents: _event_utils__WEBPACK_IMPORTED_MODULE_1__.INITIAL_EVENTS,
      weekends: true,
      editable: true,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true,
      select: this.handleDateSelect.bind(this),
      eventClick: this.handleEventClick.bind(this),
      eventsSet: this.handleEvents.bind(this)
    };
    this.currentEvents = [];
  }
  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }
  handleWeekendsToggle() {
    const {
      calendarOptions
    } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }
  handleDateSelect(selectInfo) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();
    if (title) {
      calendarApi.addEvent({
        id: (0,_event_utils__WEBPACK_IMPORTED_MODULE_1__.createEventId)(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }
  handleEventClick(clickInfo) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }
  handleEvents(events) {
    this.currentEvents = events;
    this.changeDetector.detectChanges();
  }
  static {
    this.ɵfac = function CalendarComponent_Factory(t) {
      return new (t || CalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: CalendarComponent,
      selectors: [["app-calendar"]],
      decls: 94,
      vars: 1,
      consts: [["eventContent", ""], [1, "page-header"], [1, "row", "align-items-center", "w-100"], [1, "col-lg-10", "col-sm-12"], [1, "page-title"], [1, "row"], [1, "col-lg-3", "col-md-4"], [1, "card-title"], ["id", "calendar-events", 1, "mb-3"], ["data-class", "bg-info", 1, "calendar-events"], [1, "fas", "fa-circle", "text-info"], ["data-class", "bg-success", 1, "calendar-events"], [1, "fas", "fa-circle", "text-success"], ["data-class", "bg-danger", 1, "calendar-events"], [1, "fas", "fa-circle", "text-danger"], ["data-class", "bg-warning", 1, "calendar-events"], [1, "fas", "fa-circle", "text-warning"], [1, "checkbox", "mb-3"], ["id", "drop-remove", "type", "checkbox", 1, "margin-drop", "me-1"], ["for", "drop-remove"], ["href", "javascript:void(0)", "data-bs-toggle", "modal", "data-bs-target", "#add_new_event", 1, "btn", "mb-3", "btn-primary", "btn-block", "w-100"], [1, "fas", "fa-plus"], [1, "col-lg-9", "col-md-8"], [1, "col-auto", "d-flex", "justify-content-end", "mb-2"], ["href", "javascript:void(0)", "data-bs-toggle", "modal", "data-bs-target", "#add_event", 1, "btn", "btn-primary"], [1, "card", "bg-white"], [1, "card-body"], [3, "options"], ["id", "add_event", "role", "dialog", 1, "modal", "custom-modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group"], [1, "text-danger"], ["type", "text", 1, "form-control"], [1, "cal-icon"], ["type", "text", "name", "dp", 1, "form-control"], [1, "submit-section"], [1, "btn", "btn-primary", "submit-btn"], ["id", "add_new_event", 1, "modal", "custom-modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], ["type", "button", "data-bs-dismiss", "modal", "aria-hidden", "true", 1, "btn-close"], ["placeholder", "Enter name", "type", "text", "name", "category-name", 1, "form-control", "form-white"], [1, "form-group", "mb-0"], [1, "form-white", "form-select"], ["value", "success"], ["value", "danger"], ["value", "info"], ["value", "primary"], ["value", "warning"], ["value", "inverse"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "save-category", "submit-btn"]],
      template: function CalendarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h3", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Calendar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "h4", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Drag & Drop Event");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8)(10, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " My Event One ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " My Event Two ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " My Event Three ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " My Event Four ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Remove after drop ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Add Category ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 22)(30, "div", 23)(31, "a", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Create Event");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 25)(34, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, CalendarComponent_Conditional_35_Template, 3, 1, "full-calendar", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 28)(37, "div", 29)(38, "div", 30)(39, "div", 31)(40, "h5", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Add Event");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "button", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "span", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 35)(45, "form")(46, "div", 36)(47, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Event Name ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "span", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "input", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 36)(53, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Event Date ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "span", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "input", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 41)(60, "button", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 43)(63, "div", 44)(64, "div", 30)(65, "div", 31)(66, "h4", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Add Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "button", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 35)(70, "form")(71, "div", 36)(72, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Category Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "input", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 47)(76, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Choose Category Color");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "select", 48)(79, "option", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "Success");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "option", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Danger");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "option", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "Info");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "option", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "Primary");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "option", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "Warning");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "option", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "Inverse");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 41)(92, "button", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, " Save ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](35, ctx.calendarVisible ? 35 : -1);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_8__.FullCalendarComponent],
      styles: ["#drop-remove {\n  margin: 1;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS1jb21wb25lbnQvbWFpbi9hcHBsaWNhdGlvbi9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFNBQUE7QUFBSiIsInNvdXJjZXNDb250ZW50IjpbIiNkcm9wLXJlbW92ZVxyXG57XHJcbiAgICBtYXJnaW46IDE7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 38770:
/*!*****************************************************************************!*\
  !*** ./src/app/core-component/main/application/calendar/calendar.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalendarModule: () => (/* binding */ CalendarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar-routing.module */ 4915);
/* harmony import */ var _calendar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar.component */ 31299);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);





class CalendarModule {
  static {
    this.ɵfac = function CalendarModule_Factory(t) {
      return new (t || CalendarModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: CalendarModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__.CalendarRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.sharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CalendarModule, {
    declarations: [_calendar_component__WEBPACK_IMPORTED_MODULE_1__.CalendarComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__.CalendarRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.sharedModule]
  });
})();

/***/ }),

/***/ 77798:
/*!*************************************************************************!*\
  !*** ./src/app/core-component/main/application/calendar/event-utils.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   INITIAL_EVENTS: () => (/* binding */ INITIAL_EVENTS),
/* harmony export */   createEventId: () => (/* binding */ createEventId)
/* harmony export */ });
let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today
const INITIAL_EVENTS = [{
  id: createEventId(),
  title: 'All-day event',
  start: TODAY_STR
}, {
  id: createEventId(),
  title: 'Timed event',
  start: TODAY_STR + 'T00:00:00',
  end: TODAY_STR + 'T03:00:00'
}, {
  id: createEventId(),
  title: 'Timed event',
  start: TODAY_STR + 'T12:00:00',
  end: TODAY_STR + 'T15:00:00'
}];
function createEventId() {
  return String(eventGuid++);
}

/***/ }),

/***/ 75660:
/*!*****************************************************!*\
  !*** ./node_modules/@fullcalendar/daygrid/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core/index.js */ 46633);
/* harmony import */ var _internal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal.js */ 78107);




var index = (0,_fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_0__.createPlugin)({
  name: '@fullcalendar/daygrid',
  initialView: 'dayGridMonth',
  views: {
    dayGrid: {
      component: _internal_js__WEBPACK_IMPORTED_MODULE_1__.DayGridView,
      dateProfileGeneratorClass: _internal_js__WEBPACK_IMPORTED_MODULE_1__.TableDateProfileGenerator
    },
    dayGridDay: {
      type: 'dayGrid',
      duration: {
        days: 1
      }
    },
    dayGridWeek: {
      type: 'dayGrid',
      duration: {
        weeks: 1
      }
    },
    dayGridMonth: {
      type: 'dayGrid',
      duration: {
        months: 1
      },
      fixedWeekCount: true
    },
    dayGridYear: {
      type: 'dayGrid',
      duration: {
        years: 1
      }
    }
  }
});


/***/ }),

/***/ 78107:
/*!********************************************************!*\
  !*** ./node_modules/@fullcalendar/daygrid/internal.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayGridView: () => (/* binding */ DayTableView),
/* harmony export */   DayTable: () => (/* binding */ DayTable),
/* harmony export */   DayTableSlicer: () => (/* binding */ DayTableSlicer),
/* harmony export */   Table: () => (/* binding */ Table),
/* harmony export */   TableDateProfileGenerator: () => (/* binding */ TableDateProfileGenerator),
/* harmony export */   TableRows: () => (/* binding */ TableRows),
/* harmony export */   TableView: () => (/* binding */ TableView),
/* harmony export */   buildDayTableModel: () => (/* binding */ buildDayTableModel),
/* harmony export */   buildDayTableRenderRange: () => (/* binding */ buildDayTableRenderRange)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core/internal.js */ 3436);
/* harmony import */ var _fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/core/preact.js */ 78048);



/* An abstract class for the daygrid views, as well as month view. Renders one or more rows of day cells.
----------------------------------------------------------------------------------------------------------------------*/
// It is a manager for a Table subcomponent, which does most of the heavy lifting.
// It is responsible for managing width/height.
class TableView extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.be {
  constructor() {
    super(...arguments);
    this.headerElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
  }
  renderSimpleLayout(headerRowContent, bodyContent) {
    let {
      props,
      context
    } = this;
    let sections = [];
    let stickyHeaderDates = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cc)(context.options);
    if (headerRowContent) {
      sections.push({
        type: 'header',
        key: 'header',
        isSticky: stickyHeaderDates,
        chunk: {
          elRef: this.headerElRef,
          tableClassName: 'fc-col-header',
          rowContent: headerRowContent
        }
      });
    }
    sections.push({
      type: 'body',
      key: 'body',
      liquid: true,
      chunk: {
        content: bodyContent
      }
    });
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ct, {
      elClasses: ['fc-daygrid'],
      viewSpec: context.viewSpec
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b$, {
      liquid: !props.isHeightAuto && !props.forPrint,
      collapsibleWidth: props.forPrint,
      cols: [] /* TODO: make optional? */,
      sections: sections
    }));
  }
  renderHScrollLayout(headerRowContent, bodyContent, colCnt, dayMinWidth) {
    let ScrollGrid = this.context.pluginHooks.scrollGridImpl;
    if (!ScrollGrid) {
      throw new Error('No ScrollGrid implementation');
    }
    let {
      props,
      context
    } = this;
    let stickyHeaderDates = !props.forPrint && (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cc)(context.options);
    let stickyFooterScrollbar = !props.forPrint && (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cb)(context.options);
    let sections = [];
    if (headerRowContent) {
      sections.push({
        type: 'header',
        key: 'header',
        isSticky: stickyHeaderDates,
        chunks: [{
          key: 'main',
          elRef: this.headerElRef,
          tableClassName: 'fc-col-header',
          rowContent: headerRowContent
        }]
      });
    }
    sections.push({
      type: 'body',
      key: 'body',
      liquid: true,
      chunks: [{
        key: 'main',
        content: bodyContent
      }]
    });
    if (stickyFooterScrollbar) {
      sections.push({
        type: 'footer',
        key: 'footer',
        isSticky: true,
        chunks: [{
          key: 'main',
          content: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ca
        }]
      });
    }
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ct, {
      elClasses: ['fc-daygrid'],
      viewSpec: context.viewSpec
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ScrollGrid, {
      liquid: !props.isHeightAuto && !props.forPrint,
      forPrint: props.forPrint,
      collapsibleWidth: props.forPrint,
      colGroups: [{
        cols: [{
          span: colCnt,
          minWidth: dayMinWidth
        }]
      }],
      sections: sections
    }));
  }
}
function splitSegsByRow(segs, rowCnt) {
  let byRow = [];
  for (let i = 0; i < rowCnt; i += 1) {
    byRow[i] = [];
  }
  for (let seg of segs) {
    byRow[seg.row].push(seg);
  }
  return byRow;
}
function splitSegsByFirstCol(segs, colCnt) {
  let byCol = [];
  for (let i = 0; i < colCnt; i += 1) {
    byCol[i] = [];
  }
  for (let seg of segs) {
    byCol[seg.firstCol].push(seg);
  }
  return byCol;
}
function splitInteractionByRow(ui, rowCnt) {
  let byRow = [];
  if (!ui) {
    for (let i = 0; i < rowCnt; i += 1) {
      byRow[i] = null;
    }
  } else {
    for (let i = 0; i < rowCnt; i += 1) {
      byRow[i] = {
        affectedInstances: ui.affectedInstances,
        isEvent: ui.isEvent,
        segs: []
      };
    }
    for (let seg of ui.segs) {
      byRow[seg.row].segs.push(seg);
    }
  }
  return byRow;
}
const DEFAULT_TABLE_EVENT_TIME_FORMAT = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.x)({
  hour: 'numeric',
  minute: '2-digit',
  omitZeroMinute: true,
  meridiem: 'narrow'
});
function hasListItemDisplay(seg) {
  let {
    display
  } = seg.eventRange.ui;
  return display === 'list-item' || display === 'auto' && !seg.eventRange.def.allDay && seg.firstCol === seg.lastCol &&
  // can't be multi-day
  seg.isStart &&
  // "
  seg.isEnd // "
  ;
}
class TableBlockEvent extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
  render() {
    let {
      props
    } = this;
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cj, Object.assign({}, props, {
      elClasses: ['fc-daygrid-event', 'fc-daygrid-block-event', 'fc-h-event'],
      defaultTimeFormat: DEFAULT_TABLE_EVENT_TIME_FORMAT,
      defaultDisplayEventEnd: props.defaultDisplayEventEnd,
      disableResizing: !props.seg.eventRange.def.allDay
    }));
  }
}
class TableListItemEvent extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
  render() {
    let {
      props,
      context
    } = this;
    let {
      options
    } = context;
    let {
      seg
    } = props;
    let timeFormat = options.eventTimeFormat || DEFAULT_TABLE_EVENT_TIME_FORMAT;
    let timeText = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bQ)(seg, timeFormat, context, true, props.defaultDisplayEventEnd);
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cn, Object.assign({}, props, {
      elTag: "a",
      elClasses: ['fc-daygrid-event', 'fc-daygrid-dot-event'],
      elAttrs: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bU)(props.seg, context),
      defaultGenerator: renderInnerContent,
      timeText: timeText,
      isResizing: false,
      isDateSelecting: false
    }));
  }
}
function renderInnerContent(renderProps) {
  return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "fc-daygrid-event-dot",
    style: {
      borderColor: renderProps.borderColor || renderProps.backgroundColor
    }
  }), renderProps.timeText && (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "fc-event-time"
  }, renderProps.timeText), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "fc-event-title"
  }, renderProps.event.title || (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, "\u00A0")));
}
class TableCellMoreLink extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
  constructor() {
    super(...arguments);
    this.compileSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(compileSegs);
  }
  render() {
    let {
      props
    } = this;
    let {
      allSegs,
      invisibleSegs
    } = this.compileSegs(props.singlePlacements);
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cr, {
      elClasses: ['fc-daygrid-more-link'],
      dateProfile: props.dateProfile,
      todayRange: props.todayRange,
      allDayDate: props.allDayDate,
      moreCnt: props.moreCnt,
      allSegs: allSegs,
      hiddenSegs: invisibleSegs,
      alignmentElRef: props.alignmentElRef,
      alignGridTop: props.alignGridTop,
      extraDateSpan: props.extraDateSpan,
      popoverContent: () => {
        let isForcedInvisible = (props.eventDrag ? props.eventDrag.affectedInstances : null) || (props.eventResize ? props.eventResize.affectedInstances : null) || {};
        return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, allSegs.map(seg => {
          let instanceId = seg.eventRange.instance.instanceId;
          return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
            className: "fc-daygrid-event-harness",
            key: instanceId,
            style: {
              visibility: isForcedInvisible[instanceId] ? 'hidden' : ''
            }
          }, hasListItemDisplay(seg) ? (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableListItemEvent, Object.assign({
            seg: seg,
            isDragging: false,
            isSelected: instanceId === props.eventSelection,
            defaultDisplayEventEnd: false
          }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bS)(seg, props.todayRange))) : (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableBlockEvent, Object.assign({
            seg: seg,
            isDragging: false,
            isResizing: false,
            isDateSelecting: false,
            isSelected: instanceId === props.eventSelection,
            defaultDisplayEventEnd: false
          }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bS)(seg, props.todayRange))));
        }));
      }
    });
  }
}
function compileSegs(singlePlacements) {
  let allSegs = [];
  let invisibleSegs = [];
  for (let placement of singlePlacements) {
    allSegs.push(placement.seg);
    if (!placement.isVisible) {
      invisibleSegs.push(placement.seg);
    }
  }
  return {
    allSegs,
    invisibleSegs
  };
}
const DEFAULT_WEEK_NUM_FORMAT = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.x)({
  week: 'narrow'
});
class TableCell extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.be {
  constructor() {
    super(...arguments);
    this.rootElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    this.state = {
      dayNumberId: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a5)()
    };
    this.handleRootEl = el => {
      (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.Y)(this.rootElRef, el);
      (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.Y)(this.props.elRef, el);
    };
  }
  render() {
    let {
      context,
      props,
      state,
      rootElRef
    } = this;
    let {
      options,
      dateEnv
    } = context;
    let {
      date,
      dateProfile
    } = props;
    // TODO: memoize this?
    const isMonthStart = props.showDayNumber && shouldDisplayMonthStart(date, dateProfile.currentRange, dateEnv);
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cl, {
      elTag: "td",
      elRef: this.handleRootEl,
      elClasses: ['fc-daygrid-day', ...(props.extraClassNames || [])],
      elAttrs: Object.assign(Object.assign(Object.assign({}, props.extraDataAttrs), props.showDayNumber ? {
        'aria-labelledby': state.dayNumberId
      } : {}), {
        role: 'gridcell'
      }),
      defaultGenerator: renderTopInner,
      date: date,
      dateProfile: dateProfile,
      todayRange: props.todayRange,
      showDayNumber: props.showDayNumber,
      isMonthStart: isMonthStart,
      extraRenderProps: props.extraRenderProps
    }, (InnerContent, renderProps) => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      ref: props.innerElRef,
      className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner",
      style: {
        minHeight: props.minHeight
      }
    }, props.showWeekNumber && (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cq, {
      elTag: "a",
      elClasses: ['fc-daygrid-week-number'],
      elAttrs: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b0)(context, date, 'week'),
      date: date,
      defaultFormat: DEFAULT_WEEK_NUM_FORMAT
    }), !renderProps.isDisabled && (props.showDayNumber || (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cm)(options) || props.forceDayTop) ? (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-daygrid-day-top"
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, {
      elTag: "a",
      elClasses: ['fc-daygrid-day-number', isMonthStart && 'fc-daygrid-month-start'],
      elAttrs: Object.assign(Object.assign({}, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b0)(context, date)), {
        id: state.dayNumberId
      })
    })) : props.showDayNumber ?
    // for creating correct amount of space (see issue #7162)
    (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-daygrid-day-top",
      style: {
        visibility: 'hidden'
      }
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", {
      className: "fc-daygrid-day-number"
    }, "\u00A0")) : undefined, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-daygrid-day-events",
      ref: props.fgContentElRef
    }, props.fgContent, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-daygrid-day-bottom",
      style: {
        marginTop: props.moreMarginTop
      }
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableCellMoreLink, {
      allDayDate: date,
      singlePlacements: props.singlePlacements,
      moreCnt: props.moreCnt,
      alignmentElRef: rootElRef,
      alignGridTop: !props.showDayNumber,
      extraDateSpan: props.extraDateSpan,
      dateProfile: props.dateProfile,
      eventSelection: props.eventSelection,
      eventDrag: props.eventDrag,
      eventResize: props.eventResize,
      todayRange: props.todayRange
    }))), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-daygrid-day-bg"
    }, props.bgContent)));
  }
}
function renderTopInner(props) {
  return props.dayNumberText || (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, "\u00A0");
}
function shouldDisplayMonthStart(date, currentRange, dateEnv) {
  const {
    start: currentStart,
    end: currentEnd
  } = currentRange;
  const currentEndIncl = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bg)(currentEnd, -1);
  const currentFirstYear = dateEnv.getYear(currentStart);
  const currentFirstMonth = dateEnv.getMonth(currentStart);
  const currentLastYear = dateEnv.getYear(currentEndIncl);
  const currentLastMonth = dateEnv.getMonth(currentEndIncl);
  // spans more than one month?
  return !(currentFirstYear === currentLastYear && currentFirstMonth === currentLastMonth) && Boolean(
  // first date in current view?
  date.valueOf() === currentStart.valueOf() ||
  // a month-start that's within the current range?
  dateEnv.getDay(date) === 1 && date.valueOf() < currentEnd.valueOf());
}
function generateSegKey(seg) {
  return seg.eventRange.instance.instanceId + ':' + seg.firstCol;
}
function generateSegUid(seg) {
  return generateSegKey(seg) + ':' + seg.lastCol;
}
function computeFgSegPlacement(segs,
// assumed already sorted
dayMaxEvents, dayMaxEventRows, strictOrder, segHeights, maxContentHeight, cells) {
  let hierarchy = new DayGridSegHierarchy(segEntry => {
    // TODO: more DRY with generateSegUid
    let segUid = segs[segEntry.index].eventRange.instance.instanceId + ':' + segEntry.span.start + ':' + (segEntry.span.end - 1);
    // if no thickness known, assume 1 (if 0, so small it always fits)
    return segHeights[segUid] || 1;
  });
  hierarchy.allowReslicing = true;
  hierarchy.strictOrder = strictOrder;
  if (dayMaxEvents === true || dayMaxEventRows === true) {
    hierarchy.maxCoord = maxContentHeight;
    hierarchy.hiddenConsumes = true;
  } else if (typeof dayMaxEvents === 'number') {
    hierarchy.maxStackCnt = dayMaxEvents;
  } else if (typeof dayMaxEventRows === 'number') {
    hierarchy.maxStackCnt = dayMaxEventRows;
    hierarchy.hiddenConsumes = true;
  }
  // create segInputs only for segs with known heights
  let segInputs = [];
  let unknownHeightSegs = [];
  for (let i = 0; i < segs.length; i += 1) {
    let seg = segs[i];
    let segUid = generateSegUid(seg);
    let eventHeight = segHeights[segUid];
    if (eventHeight != null) {
      segInputs.push({
        index: i,
        span: {
          start: seg.firstCol,
          end: seg.lastCol + 1
        }
      });
    } else {
      unknownHeightSegs.push(seg);
    }
  }
  let hiddenEntries = hierarchy.addSegs(segInputs);
  let segRects = hierarchy.toRects();
  let {
    singleColPlacements,
    multiColPlacements,
    leftoverMargins
  } = placeRects(segRects, segs, cells);
  let moreCnts = [];
  let moreMarginTops = [];
  // add segs with unknown heights
  for (let seg of unknownHeightSegs) {
    multiColPlacements[seg.firstCol].push({
      seg,
      isVisible: false,
      isAbsolute: true,
      absoluteTop: 0,
      marginTop: 0
    });
    for (let col = seg.firstCol; col <= seg.lastCol; col += 1) {
      singleColPlacements[col].push({
        seg: resliceSeg(seg, col, col + 1, cells),
        isVisible: false,
        isAbsolute: false,
        absoluteTop: 0,
        marginTop: 0
      });
    }
  }
  // add the hidden entries
  for (let col = 0; col < cells.length; col += 1) {
    moreCnts.push(0);
  }
  for (let hiddenEntry of hiddenEntries) {
    let seg = segs[hiddenEntry.index];
    let hiddenSpan = hiddenEntry.span;
    multiColPlacements[hiddenSpan.start].push({
      seg: resliceSeg(seg, hiddenSpan.start, hiddenSpan.end, cells),
      isVisible: false,
      isAbsolute: true,
      absoluteTop: 0,
      marginTop: 0
    });
    for (let col = hiddenSpan.start; col < hiddenSpan.end; col += 1) {
      moreCnts[col] += 1;
      singleColPlacements[col].push({
        seg: resliceSeg(seg, col, col + 1, cells),
        isVisible: false,
        isAbsolute: false,
        absoluteTop: 0,
        marginTop: 0
      });
    }
  }
  // deal with leftover margins
  for (let col = 0; col < cells.length; col += 1) {
    moreMarginTops.push(leftoverMargins[col]);
  }
  return {
    singleColPlacements,
    multiColPlacements,
    moreCnts,
    moreMarginTops
  };
}
// rects ordered by top coord, then left
function placeRects(allRects, segs, cells) {
  let rectsByEachCol = groupRectsByEachCol(allRects, cells.length);
  let singleColPlacements = [];
  let multiColPlacements = [];
  let leftoverMargins = [];
  for (let col = 0; col < cells.length; col += 1) {
    let rects = rectsByEachCol[col];
    // compute all static segs in singlePlacements
    let singlePlacements = [];
    let currentHeight = 0;
    let currentMarginTop = 0;
    for (let rect of rects) {
      let seg = segs[rect.index];
      singlePlacements.push({
        seg: resliceSeg(seg, col, col + 1, cells),
        isVisible: true,
        isAbsolute: false,
        absoluteTop: rect.levelCoord,
        marginTop: rect.levelCoord - currentHeight
      });
      currentHeight = rect.levelCoord + rect.thickness;
    }
    // compute mixed static/absolute segs in multiPlacements
    let multiPlacements = [];
    currentHeight = 0;
    currentMarginTop = 0;
    for (let rect of rects) {
      let seg = segs[rect.index];
      let isAbsolute = rect.span.end - rect.span.start > 1; // multi-column?
      let isFirstCol = rect.span.start === col;
      currentMarginTop += rect.levelCoord - currentHeight; // amount of space since bottom of previous seg
      currentHeight = rect.levelCoord + rect.thickness; // height will now be bottom of current seg
      if (isAbsolute) {
        currentMarginTop += rect.thickness;
        if (isFirstCol) {
          multiPlacements.push({
            seg: resliceSeg(seg, rect.span.start, rect.span.end, cells),
            isVisible: true,
            isAbsolute: true,
            absoluteTop: rect.levelCoord,
            marginTop: 0
          });
        }
      } else if (isFirstCol) {
        multiPlacements.push({
          seg: resliceSeg(seg, rect.span.start, rect.span.end, cells),
          isVisible: true,
          isAbsolute: false,
          absoluteTop: rect.levelCoord,
          marginTop: currentMarginTop // claim the margin
        });
        currentMarginTop = 0;
      }
    }
    singleColPlacements.push(singlePlacements);
    multiColPlacements.push(multiPlacements);
    leftoverMargins.push(currentMarginTop);
  }
  return {
    singleColPlacements,
    multiColPlacements,
    leftoverMargins
  };
}
function groupRectsByEachCol(rects, colCnt) {
  let rectsByEachCol = [];
  for (let col = 0; col < colCnt; col += 1) {
    rectsByEachCol.push([]);
  }
  for (let rect of rects) {
    for (let col = rect.span.start; col < rect.span.end; col += 1) {
      rectsByEachCol[col].push(rect);
    }
  }
  return rectsByEachCol;
}
function resliceSeg(seg, spanStart, spanEnd, cells) {
  if (seg.firstCol === spanStart && seg.lastCol === spanEnd - 1) {
    return seg;
  }
  let eventRange = seg.eventRange;
  let origRange = eventRange.range;
  let slicedRange = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.o)(origRange, {
    start: cells[spanStart].date,
    end: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.t)(cells[spanEnd - 1].date, 1)
  });
  return Object.assign(Object.assign({}, seg), {
    firstCol: spanStart,
    lastCol: spanEnd - 1,
    eventRange: {
      def: eventRange.def,
      ui: Object.assign(Object.assign({}, eventRange.ui), {
        durationEditable: false
      }),
      instance: eventRange.instance,
      range: slicedRange
    },
    isStart: seg.isStart && slicedRange.start.valueOf() === origRange.start.valueOf(),
    isEnd: seg.isEnd && slicedRange.end.valueOf() === origRange.end.valueOf()
  });
}
class DayGridSegHierarchy extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bA {
  constructor() {
    super(...arguments);
    // config
    this.hiddenConsumes = false;
    // allows us to keep hidden entries in the hierarchy so they take up space
    this.forceHidden = {};
  }
  addSegs(segInputs) {
    const hiddenSegs = super.addSegs(segInputs);
    const {
      entriesByLevel
    } = this;
    const excludeHidden = entry => !this.forceHidden[(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bB)(entry)];
    // remove the forced-hidden segs
    for (let level = 0; level < entriesByLevel.length; level += 1) {
      entriesByLevel[level] = entriesByLevel[level].filter(excludeHidden);
    }
    return hiddenSegs;
  }
  handleInvalidInsertion(insertion, entry, hiddenEntries) {
    const {
      entriesByLevel,
      forceHidden
    } = this;
    const {
      touchingEntry,
      touchingLevel,
      touchingLateral
    } = insertion;
    // the entry that the new insertion is touching must be hidden
    if (this.hiddenConsumes && touchingEntry) {
      const touchingEntryId = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bB)(touchingEntry);
      if (!forceHidden[touchingEntryId]) {
        if (this.allowReslicing) {
          // split up the touchingEntry, reinsert it
          const hiddenEntry = Object.assign(Object.assign({}, touchingEntry), {
            span: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bF)(touchingEntry.span, entry.span)
          });
          // reinsert the area that turned into a "more" link (so no other entries try to
          // occupy the space) but mark it forced-hidden
          const hiddenEntryId = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bB)(hiddenEntry);
          forceHidden[hiddenEntryId] = true;
          entriesByLevel[touchingLevel][touchingLateral] = hiddenEntry;
          hiddenEntries.push(hiddenEntry);
          this.splitEntry(touchingEntry, entry, hiddenEntries);
        } else {
          forceHidden[touchingEntryId] = true;
          hiddenEntries.push(touchingEntry);
        }
      }
    }
    // will try to reslice...
    super.handleInvalidInsertion(insertion, entry, hiddenEntries);
  }
}
class TableRow extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.be {
  constructor() {
    super(...arguments);
    this.cellElRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cf(); // the <td>
    this.frameElRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cf(); // the fc-daygrid-day-frame
    this.fgElRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cf(); // the fc-daygrid-day-events
    this.segHarnessRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cf(); // indexed by "instanceId:firstCol"
    this.rootElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    this.state = {
      framePositions: null,
      maxContentHeight: null,
      segHeights: {}
    };
    this.handleResize = isForced => {
      if (isForced) {
        this.updateSizing(true); // isExternal=true
      }
    };
  }
  render() {
    let {
      props,
      state,
      context
    } = this;
    let {
      options
    } = context;
    let colCnt = props.cells.length;
    let businessHoursByCol = splitSegsByFirstCol(props.businessHourSegs, colCnt);
    let bgEventSegsByCol = splitSegsByFirstCol(props.bgEventSegs, colCnt);
    let highlightSegsByCol = splitSegsByFirstCol(this.getHighlightSegs(), colCnt);
    let mirrorSegsByCol = splitSegsByFirstCol(this.getMirrorSegs(), colCnt);
    let {
      singleColPlacements,
      multiColPlacements,
      moreCnts,
      moreMarginTops
    } = computeFgSegPlacement((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bR)(props.fgEventSegs, options.eventOrder), props.dayMaxEvents, props.dayMaxEventRows, options.eventOrderStrict, state.segHeights, state.maxContentHeight, props.cells);
    let isForcedInvisible =
    // TODO: messy way to compute this
    props.eventDrag && props.eventDrag.affectedInstances || props.eventResize && props.eventResize.affectedInstances || {};
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", {
      ref: this.rootElRef,
      role: "row"
    }, props.renderIntro && props.renderIntro(), props.cells.map((cell, col) => {
      let normalFgNodes = this.renderFgSegs(col, props.forPrint ? singleColPlacements[col] : multiColPlacements[col], props.todayRange, isForcedInvisible);
      let mirrorFgNodes = this.renderFgSegs(col, buildMirrorPlacements(mirrorSegsByCol[col], multiColPlacements), props.todayRange, {}, Boolean(props.eventDrag), Boolean(props.eventResize), false);
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableCell, {
        key: cell.key,
        elRef: this.cellElRefs.createRef(cell.key),
        innerElRef: this.frameElRefs.createRef(cell.key) /* FF <td> problem, but okay to use for left/right. TODO: rename prop */,
        dateProfile: props.dateProfile,
        date: cell.date,
        showDayNumber: props.showDayNumbers,
        showWeekNumber: props.showWeekNumbers && col === 0,
        forceDayTop: props.showWeekNumbers /* even displaying weeknum for row, not necessarily day */,
        todayRange: props.todayRange,
        eventSelection: props.eventSelection,
        eventDrag: props.eventDrag,
        eventResize: props.eventResize,
        extraRenderProps: cell.extraRenderProps,
        extraDataAttrs: cell.extraDataAttrs,
        extraClassNames: cell.extraClassNames,
        extraDateSpan: cell.extraDateSpan,
        moreCnt: moreCnts[col],
        moreMarginTop: moreMarginTops[col],
        singlePlacements: singleColPlacements[col],
        fgContentElRef: this.fgElRefs.createRef(cell.key),
        fgContent:
        // Fragment scopes the keys
        (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, normalFgNodes), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, mirrorFgNodes)),
        bgContent:
        // Fragment scopes the keys
        (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, this.renderFillSegs(highlightSegsByCol[col], 'highlight'), this.renderFillSegs(businessHoursByCol[col], 'non-business'), this.renderFillSegs(bgEventSegsByCol[col], 'bg-event')),
        minHeight: props.cellMinHeight
      });
    }));
  }
  componentDidMount() {
    this.updateSizing(true);
    this.context.addResizeHandler(this.handleResize);
  }
  componentDidUpdate(prevProps, prevState) {
    let currentProps = this.props;
    this.updateSizing(!(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.E)(prevProps, currentProps));
  }
  componentWillUnmount() {
    this.context.removeResizeHandler(this.handleResize);
  }
  getHighlightSegs() {
    let {
      props
    } = this;
    if (props.eventDrag && props.eventDrag.segs.length) {
      // messy check
      return props.eventDrag.segs;
    }
    if (props.eventResize && props.eventResize.segs.length) {
      // messy check
      return props.eventResize.segs;
    }
    return props.dateSelectionSegs;
  }
  getMirrorSegs() {
    let {
      props
    } = this;
    if (props.eventResize && props.eventResize.segs.length) {
      // messy check
      return props.eventResize.segs;
    }
    return [];
  }
  renderFgSegs(col, segPlacements, todayRange, isForcedInvisible, isDragging, isResizing, isDateSelecting) {
    let {
      context
    } = this;
    let {
      eventSelection
    } = this.props;
    let {
      framePositions
    } = this.state;
    let defaultDisplayEventEnd = this.props.cells.length === 1; // colCnt === 1
    let isMirror = isDragging || isResizing || isDateSelecting;
    let nodes = [];
    if (framePositions) {
      for (let placement of segPlacements) {
        let {
          seg
        } = placement;
        let {
          instanceId
        } = seg.eventRange.instance;
        let isVisible = placement.isVisible && !isForcedInvisible[instanceId];
        let isAbsolute = placement.isAbsolute;
        let left = '';
        let right = '';
        if (isAbsolute) {
          if (context.isRtl) {
            right = 0;
            left = framePositions.lefts[seg.lastCol] - framePositions.lefts[seg.firstCol];
          } else {
            left = 0;
            right = framePositions.rights[seg.firstCol] - framePositions.rights[seg.lastCol];
          }
        }
        /*
        known bug: events that are force to be list-item but span multiple days still take up space in later columns
        todo: in print view, for multi-day events, don't display title within non-start/end segs
        */
        nodes.push((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: 'fc-daygrid-event-harness' + (isAbsolute ? ' fc-daygrid-event-harness-abs' : ''),
          key: generateSegKey(seg),
          ref: isMirror ? null : this.segHarnessRefs.createRef(generateSegUid(seg)),
          style: {
            visibility: isVisible ? '' : 'hidden',
            marginTop: isAbsolute ? '' : placement.marginTop,
            top: isAbsolute ? placement.absoluteTop : '',
            left,
            right
          }
        }, hasListItemDisplay(seg) ? (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableListItemEvent, Object.assign({
          seg: seg,
          isDragging: isDragging,
          isSelected: instanceId === eventSelection,
          defaultDisplayEventEnd: defaultDisplayEventEnd
        }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bS)(seg, todayRange))) : (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableBlockEvent, Object.assign({
          seg: seg,
          isDragging: isDragging,
          isResizing: isResizing,
          isDateSelecting: isDateSelecting,
          isSelected: instanceId === eventSelection,
          defaultDisplayEventEnd: defaultDisplayEventEnd
        }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bS)(seg, todayRange)))));
      }
    }
    return nodes;
  }
  renderFillSegs(segs, fillType) {
    let {
      isRtl
    } = this.context;
    let {
      todayRange
    } = this.props;
    let {
      framePositions
    } = this.state;
    let nodes = [];
    if (framePositions) {
      for (let seg of segs) {
        let leftRightCss = isRtl ? {
          right: 0,
          left: framePositions.lefts[seg.lastCol] - framePositions.lefts[seg.firstCol]
        } : {
          left: 0,
          right: framePositions.rights[seg.firstCol] - framePositions.rights[seg.lastCol]
        };
        nodes.push((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          key: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bT)(seg.eventRange),
          className: "fc-daygrid-bg-harness",
          style: leftRightCss
        }, fillType === 'bg-event' ? (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cp, Object.assign({
          seg: seg
        }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bS)(seg, todayRange))) : (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.co)(fillType)));
      }
    }
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}, ...nodes);
  }
  updateSizing(isExternalSizingChange) {
    let {
      props,
      state,
      frameElRefs
    } = this;
    if (!props.forPrint && props.clientWidth !== null // positioning ready?
    ) {
      if (isExternalSizingChange) {
        let frameEls = props.cells.map(cell => frameElRefs.currentMap[cell.key]);
        if (frameEls.length) {
          let originEl = this.rootElRef.current;
          let newPositionCache = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ba(originEl, frameEls, true,
          // isHorizontal
          false);
          if (!state.framePositions || !state.framePositions.similarTo(newPositionCache)) {
            this.setState({
              framePositions: new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ba(originEl, frameEls, true,
              // isHorizontal
              false)
            });
          }
        }
      }
      const oldSegHeights = this.state.segHeights;
      const newSegHeights = this.querySegHeights();
      const limitByContentHeight = props.dayMaxEvents === true || props.dayMaxEventRows === true;
      this.safeSetState({
        // HACK to prevent oscillations of events being shown/hidden from max-event-rows
        // Essentially, once you compute an element's height, never null-out.
        // TODO: always display all events, as visibility:hidden?
        segHeights: Object.assign(Object.assign({}, oldSegHeights), newSegHeights),
        maxContentHeight: limitByContentHeight ? this.computeMaxContentHeight() : null
      });
    }
  }
  querySegHeights() {
    let segElMap = this.segHarnessRefs.currentMap;
    let segHeights = {};
    // get the max height amongst instance segs
    for (let segUid in segElMap) {
      let height = Math.round(segElMap[segUid].getBoundingClientRect().height);
      segHeights[segUid] = Math.max(segHeights[segUid] || 0, height);
    }
    return segHeights;
  }
  computeMaxContentHeight() {
    let firstKey = this.props.cells[0].key;
    let cellEl = this.cellElRefs.currentMap[firstKey];
    let fcContainerEl = this.fgElRefs.currentMap[firstKey];
    return cellEl.getBoundingClientRect().bottom - fcContainerEl.getBoundingClientRect().top;
  }
  getCellEls() {
    let elMap = this.cellElRefs.currentMap;
    return this.props.cells.map(cell => elMap[cell.key]);
  }
}
TableRow.addStateEquality({
  segHeights: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.E
});
function buildMirrorPlacements(mirrorSegs, colPlacements) {
  if (!mirrorSegs.length) {
    return [];
  }
  let topsByInstanceId = buildAbsoluteTopHash(colPlacements); // TODO: cache this at first render?
  return mirrorSegs.map(seg => ({
    seg,
    isVisible: true,
    isAbsolute: true,
    absoluteTop: topsByInstanceId[seg.eventRange.instance.instanceId],
    marginTop: 0
  }));
}
function buildAbsoluteTopHash(colPlacements) {
  let topsByInstanceId = {};
  for (let placements of colPlacements) {
    for (let placement of placements) {
      topsByInstanceId[placement.seg.eventRange.instance.instanceId] = placement.absoluteTop;
    }
  }
  return topsByInstanceId;
}
class TableRows extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.be {
  constructor() {
    super(...arguments);
    this.splitBusinessHourSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitSegsByRow);
    this.splitBgEventSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitSegsByRow);
    this.splitFgEventSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitSegsByRow);
    this.splitDateSelectionSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitSegsByRow);
    this.splitEventDrag = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitInteractionByRow);
    this.splitEventResize = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitInteractionByRow);
    this.rowRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cf();
  }
  render() {
    let {
      props,
      context
    } = this;
    let rowCnt = props.cells.length;
    let businessHourSegsByRow = this.splitBusinessHourSegs(props.businessHourSegs, rowCnt);
    let bgEventSegsByRow = this.splitBgEventSegs(props.bgEventSegs, rowCnt);
    let fgEventSegsByRow = this.splitFgEventSegs(props.fgEventSegs, rowCnt);
    let dateSelectionSegsByRow = this.splitDateSelectionSegs(props.dateSelectionSegs, rowCnt);
    let eventDragByRow = this.splitEventDrag(props.eventDrag, rowCnt);
    let eventResizeByRow = this.splitEventResize(props.eventResize, rowCnt);
    // for DayGrid view with many rows, force a min-height on cells so doesn't appear squished
    // choose 7 because a month view will have max 6 rows
    let cellMinHeight = rowCnt >= 7 && props.clientWidth ? props.clientWidth / context.options.aspectRatio / 6 : null;
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ch, {
      unit: "day"
    }, (nowDate, todayRange) => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, props.cells.map((cells, row) => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableRow, {
      ref: this.rowRefs.createRef(row),
      key: cells.length ? cells[0].date.toISOString() /* best? or put key on cell? or use diff formatter? */ : row // in case there are no cells (like when resource view is loading)
      ,
      showDayNumbers: rowCnt > 1,
      showWeekNumbers: props.showWeekNumbers,
      todayRange: todayRange,
      dateProfile: props.dateProfile,
      cells: cells,
      renderIntro: props.renderRowIntro,
      businessHourSegs: businessHourSegsByRow[row],
      eventSelection: props.eventSelection,
      bgEventSegs: bgEventSegsByRow[row].filter(isSegAllDay) /* hack */,
      fgEventSegs: fgEventSegsByRow[row],
      dateSelectionSegs: dateSelectionSegsByRow[row],
      eventDrag: eventDragByRow[row],
      eventResize: eventResizeByRow[row],
      dayMaxEvents: props.dayMaxEvents,
      dayMaxEventRows: props.dayMaxEventRows,
      clientWidth: props.clientWidth,
      clientHeight: props.clientHeight,
      cellMinHeight: cellMinHeight,
      forPrint: props.forPrint
    }))));
  }
  componentDidMount() {
    this.registerInteractiveComponent();
  }
  componentDidUpdate() {
    // for if started with zero cells
    this.registerInteractiveComponent();
  }
  registerInteractiveComponent() {
    if (!this.rootEl) {
      // HACK: need a daygrid wrapper parent to do positioning
      // NOTE: a daygrid resource view w/o resources can have zero cells
      const firstCellEl = this.rowRefs.currentMap[0].getCellEls()[0];
      const rootEl = firstCellEl ? firstCellEl.closest('.fc-daygrid-body') : null;
      if (rootEl) {
        this.rootEl = rootEl;
        this.context.registerInteractiveComponent(this, {
          el: rootEl,
          isHitComboAllowed: this.props.isHitComboAllowed
        });
      }
    }
  }
  componentWillUnmount() {
    if (this.rootEl) {
      this.context.unregisterInteractiveComponent(this);
      this.rootEl = null;
    }
  }
  // Hit System
  // ----------------------------------------------------------------------------------------------------
  prepareHits() {
    this.rowPositions = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ba(this.rootEl, this.rowRefs.collect().map(rowObj => rowObj.getCellEls()[0]),
    // first cell el in each row. TODO: not optimal
    false, true);
    this.colPositions = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ba(this.rootEl, this.rowRefs.currentMap[0].getCellEls(),
    // cell els in first row
    true,
    // horizontal
    false);
  }
  queryHit(positionLeft, positionTop) {
    let {
      colPositions,
      rowPositions
    } = this;
    let col = colPositions.leftToIndex(positionLeft);
    let row = rowPositions.topToIndex(positionTop);
    if (row != null && col != null) {
      let cell = this.props.cells[row][col];
      return {
        dateProfile: this.props.dateProfile,
        dateSpan: Object.assign({
          range: this.getCellRange(row, col),
          allDay: true
        }, cell.extraDateSpan),
        dayEl: this.getCellEl(row, col),
        rect: {
          left: colPositions.lefts[col],
          right: colPositions.rights[col],
          top: rowPositions.tops[row],
          bottom: rowPositions.bottoms[row]
        },
        layer: 0
      };
    }
    return null;
  }
  getCellEl(row, col) {
    return this.rowRefs.currentMap[row].getCellEls()[col]; // TODO: not optimal
  }
  getCellRange(row, col) {
    let start = this.props.cells[row][col].date;
    let end = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.t)(start, 1);
    return {
      start,
      end
    };
  }
}
function isSegAllDay(seg) {
  return seg.eventRange.def.allDay;
}
class Table extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.be {
  constructor() {
    super(...arguments);
    this.elRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    this.needsScrollReset = false;
  }
  render() {
    let {
      props
    } = this;
    let {
      dayMaxEventRows,
      dayMaxEvents,
      expandRows
    } = props;
    let limitViaBalanced = dayMaxEvents === true || dayMaxEventRows === true;
    // if rows can't expand to fill fixed height, can't do balanced-height event limit
    // TODO: best place to normalize these options?
    if (limitViaBalanced && !expandRows) {
      limitViaBalanced = false;
      dayMaxEventRows = null;
      dayMaxEvents = null;
    }
    let classNames = ['fc-daygrid-body', limitViaBalanced ? 'fc-daygrid-body-balanced' : 'fc-daygrid-body-unbalanced', expandRows ? '' : 'fc-daygrid-body-natural' // will height of one row depend on the others?
    ];
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      ref: this.elRef,
      className: classNames.join(' '),
      style: {
        // these props are important to give this wrapper correct dimensions for interactions
        // TODO: if we set it here, can we avoid giving to inner tables?
        width: props.clientWidth,
        minWidth: props.tableMinWidth
      }
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", {
      role: "presentation",
      className: "fc-scrollgrid-sync-table",
      style: {
        width: props.clientWidth,
        minWidth: props.tableMinWidth,
        height: expandRows ? props.clientHeight : ''
      }
    }, props.colGroupNode, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", {
      role: "presentation"
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableRows, {
      dateProfile: props.dateProfile,
      cells: props.cells,
      renderRowIntro: props.renderRowIntro,
      showWeekNumbers: props.showWeekNumbers,
      clientWidth: props.clientWidth,
      clientHeight: props.clientHeight,
      businessHourSegs: props.businessHourSegs,
      bgEventSegs: props.bgEventSegs,
      fgEventSegs: props.fgEventSegs,
      dateSelectionSegs: props.dateSelectionSegs,
      eventSelection: props.eventSelection,
      eventDrag: props.eventDrag,
      eventResize: props.eventResize,
      dayMaxEvents: dayMaxEvents,
      dayMaxEventRows: dayMaxEventRows,
      forPrint: props.forPrint,
      isHitComboAllowed: props.isHitComboAllowed
    }))));
  }
  componentDidMount() {
    this.requestScrollReset();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.dateProfile !== this.props.dateProfile) {
      this.requestScrollReset();
    } else {
      this.flushScrollReset();
    }
  }
  requestScrollReset() {
    this.needsScrollReset = true;
    this.flushScrollReset();
  }
  flushScrollReset() {
    if (this.needsScrollReset && this.props.clientWidth // sizes computed?
    ) {
      const subjectEl = getScrollSubjectEl(this.elRef.current, this.props.dateProfile);
      if (subjectEl) {
        const originEl = subjectEl.closest('.fc-daygrid-body');
        const scrollEl = originEl.closest('.fc-scroller');
        const scrollTop = subjectEl.getBoundingClientRect().top - originEl.getBoundingClientRect().top;
        scrollEl.scrollTop = scrollTop ? scrollTop + 1 : 0; // overcome border
      }
      this.needsScrollReset = false;
    }
  }
}
function getScrollSubjectEl(containerEl, dateProfile) {
  let el;
  if (dateProfile.currentRangeUnit.match(/year|month/)) {
    el = containerEl.querySelector(`[data-date="${(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bx)(dateProfile.currentDate)}-01"]`);
    // even if view is month-based, first-of-month might be hidden...
  }
  if (!el) {
    el = containerEl.querySelector(`[data-date="${(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bv)(dateProfile.currentDate)}"]`);
    // could still be hidden if an interior-view hidden day
  }
  return el;
}
class DayTableSlicer extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bW {
  constructor() {
    super(...arguments);
    this.forceDayIfListItem = true;
  }
  sliceRange(dateRange, dayTableModel) {
    return dayTableModel.sliceRange(dateRange);
  }
}
class DayTable extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.be {
  constructor() {
    super(...arguments);
    this.slicer = new DayTableSlicer();
    this.tableRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
  }
  render() {
    let {
      props,
      context
    } = this;
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(Table, Object.assign({
      ref: this.tableRef
    }, this.slicer.sliceProps(props, props.dateProfile, props.nextDayThreshold, context, props.dayTableModel), {
      dateProfile: props.dateProfile,
      cells: props.dayTableModel.cells,
      colGroupNode: props.colGroupNode,
      tableMinWidth: props.tableMinWidth,
      renderRowIntro: props.renderRowIntro,
      dayMaxEvents: props.dayMaxEvents,
      dayMaxEventRows: props.dayMaxEventRows,
      showWeekNumbers: props.showWeekNumbers,
      expandRows: props.expandRows,
      headerAlignElRef: props.headerAlignElRef,
      clientWidth: props.clientWidth,
      clientHeight: props.clientHeight,
      forPrint: props.forPrint
    }));
  }
}
class DayTableView extends TableView {
  constructor() {
    super(...arguments);
    this.buildDayTableModel = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(buildDayTableModel);
    this.headerRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    this.tableRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    // can't override any lifecycle methods from parent
  }
  render() {
    let {
      options,
      dateProfileGenerator
    } = this.context;
    let {
      props
    } = this;
    let dayTableModel = this.buildDayTableModel(props.dateProfile, dateProfileGenerator);
    let headerContent = options.dayHeaders && (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bK, {
      ref: this.headerRef,
      dateProfile: props.dateProfile,
      dates: dayTableModel.headerDates,
      datesRepDistinctDays: dayTableModel.rowCnt === 1
    });
    let bodyContent = contentArg => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(DayTable, {
      ref: this.tableRef,
      dateProfile: props.dateProfile,
      dayTableModel: dayTableModel,
      businessHours: props.businessHours,
      dateSelection: props.dateSelection,
      eventStore: props.eventStore,
      eventUiBases: props.eventUiBases,
      eventSelection: props.eventSelection,
      eventDrag: props.eventDrag,
      eventResize: props.eventResize,
      nextDayThreshold: options.nextDayThreshold,
      colGroupNode: contentArg.tableColGroupNode,
      tableMinWidth: contentArg.tableMinWidth,
      dayMaxEvents: options.dayMaxEvents,
      dayMaxEventRows: options.dayMaxEventRows,
      showWeekNumbers: options.weekNumbers,
      expandRows: !props.isHeightAuto,
      headerAlignElRef: this.headerElRef,
      clientWidth: contentArg.clientWidth,
      clientHeight: contentArg.clientHeight,
      forPrint: props.forPrint
    });
    return options.dayMinWidth ? this.renderHScrollLayout(headerContent, bodyContent, dayTableModel.colCnt, options.dayMinWidth) : this.renderSimpleLayout(headerContent, bodyContent);
  }
}
function buildDayTableModel(dateProfile, dateProfileGenerator) {
  let daySeries = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bO(dateProfile.renderRange, dateProfileGenerator);
  return new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bV(daySeries, /year|month|week/.test(dateProfile.currentRangeUnit));
}
class TableDateProfileGenerator extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.U {
  // Computes the date range that will be rendered
  buildRenderRange(currentRange, currentRangeUnit, isRangeAllDay) {
    let renderRange = super.buildRenderRange(currentRange, currentRangeUnit, isRangeAllDay);
    let {
      props
    } = this;
    return buildDayTableRenderRange({
      currentRange: renderRange,
      snapToWeek: /^(year|month)$/.test(currentRangeUnit),
      fixedWeekCount: props.fixedWeekCount,
      dateEnv: props.dateEnv
    });
  }
}
function buildDayTableRenderRange(props) {
  let {
    dateEnv,
    currentRange
  } = props;
  let {
    start,
    end
  } = currentRange;
  let endOfWeek;
  // year and month views should be aligned with weeks. this is already done for week
  if (props.snapToWeek) {
    start = dateEnv.startOfWeek(start);
    // make end-of-week if not already
    endOfWeek = dateEnv.startOfWeek(end);
    if (endOfWeek.valueOf() !== end.valueOf()) {
      end = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bh)(endOfWeek, 1);
    }
  }
  // ensure 6 weeks
  if (props.fixedWeekCount) {
    // TODO: instead of these date-math gymnastics (for multimonth view),
    // compute dateprofiles of all months, then use start of first and end of last.
    let lastMonthRenderStart = dateEnv.startOfWeek(dateEnv.startOfMonth((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.t)(currentRange.end, -1)));
    let rowCnt = Math.ceil(
    // could be partial weeks due to hiddenDays
    (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bi)(lastMonthRenderStart, end));
    end = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bh)(end, 6 - rowCnt);
  }
  return {
    start,
    end
  };
}
var css_248z = ":root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:\"\";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;margin:0 2px}.fc .fc-daygrid-day-bottom:after,.fc .fc-daygrid-day-bottom:before{clear:both;content:\"\";display:table}.fc .fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc .fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-more-link{float:left}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-more-link{float:right}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}";
(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cw)(css_248z);


/***/ }),

/***/ 19426:
/*!*********************************************************!*\
  !*** ./node_modules/@fullcalendar/interaction/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Draggable: () => (/* binding */ ExternalDraggable),
/* harmony export */   ThirdPartyDraggable: () => (/* binding */ ThirdPartyDraggable),
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/core/index.js */ 46633);
/* harmony import */ var _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core/internal.js */ 3436);


_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bI.touchMouseIgnoreWait = 500;
let ignoreMouseDepth = 0;
let listenerCnt = 0;
let isWindowTouchMoveCancelled = false;
/*
Uses a "pointer" abstraction, which monitors UI events for both mouse and touch.
Tracks when the pointer "drags" on a certain element, meaning down+move+up.

Also, tracks if there was touch-scrolling.
Also, can prevent touch-scrolling from happening.
Also, can fire pointermove events when scrolling happens underneath, even when no real pointer movement.

emits:
- pointerdown
- pointermove
- pointerup
*/
class PointerDragging {
  constructor(containerEl) {
    this.subjectEl = null;
    // options that can be directly assigned by caller
    this.selector = ''; // will cause subjectEl in all emitted events to be this element
    this.handleSelector = '';
    this.shouldIgnoreMove = false;
    this.shouldWatchScroll = true; // for simulating pointermove on scroll
    // internal states
    this.isDragging = false;
    this.isTouchDragging = false;
    this.wasTouchScroll = false;
    // Mouse
    // ----------------------------------------------------------------------------------------------------
    this.handleMouseDown = ev => {
      if (!this.shouldIgnoreMouse() && isPrimaryMouseButton(ev) && this.tryStart(ev)) {
        let pev = this.createEventFromMouse(ev, true);
        this.emitter.trigger('pointerdown', pev);
        this.initScrollWatch(pev);
        if (!this.shouldIgnoreMove) {
          document.addEventListener('mousemove', this.handleMouseMove);
        }
        document.addEventListener('mouseup', this.handleMouseUp);
      }
    };
    this.handleMouseMove = ev => {
      let pev = this.createEventFromMouse(ev);
      this.recordCoords(pev);
      this.emitter.trigger('pointermove', pev);
    };
    this.handleMouseUp = ev => {
      document.removeEventListener('mousemove', this.handleMouseMove);
      document.removeEventListener('mouseup', this.handleMouseUp);
      this.emitter.trigger('pointerup', this.createEventFromMouse(ev));
      this.cleanup(); // call last so that pointerup has access to props
    };
    // Touch
    // ----------------------------------------------------------------------------------------------------
    this.handleTouchStart = ev => {
      if (this.tryStart(ev)) {
        this.isTouchDragging = true;
        let pev = this.createEventFromTouch(ev, true);
        this.emitter.trigger('pointerdown', pev);
        this.initScrollWatch(pev);
        // unlike mouse, need to attach to target, not document
        // https://stackoverflow.com/a/45760014
        let targetEl = ev.target;
        if (!this.shouldIgnoreMove) {
          targetEl.addEventListener('touchmove', this.handleTouchMove);
        }
        targetEl.addEventListener('touchend', this.handleTouchEnd);
        targetEl.addEventListener('touchcancel', this.handleTouchEnd); // treat it as a touch end
        // attach a handler to get called when ANY scroll action happens on the page.
        // this was impossible to do with normal on/off because 'scroll' doesn't bubble.
        // http://stackoverflow.com/a/32954565/96342
        window.addEventListener('scroll', this.handleTouchScroll, true);
      }
    };
    this.handleTouchMove = ev => {
      let pev = this.createEventFromTouch(ev);
      this.recordCoords(pev);
      this.emitter.trigger('pointermove', pev);
    };
    this.handleTouchEnd = ev => {
      if (this.isDragging) {
        // done to guard against touchend followed by touchcancel
        let targetEl = ev.target;
        targetEl.removeEventListener('touchmove', this.handleTouchMove);
        targetEl.removeEventListener('touchend', this.handleTouchEnd);
        targetEl.removeEventListener('touchcancel', this.handleTouchEnd);
        window.removeEventListener('scroll', this.handleTouchScroll, true); // useCaptured=true
        this.emitter.trigger('pointerup', this.createEventFromTouch(ev));
        this.cleanup(); // call last so that pointerup has access to props
        this.isTouchDragging = false;
        startIgnoringMouse();
      }
    };
    this.handleTouchScroll = () => {
      this.wasTouchScroll = true;
    };
    this.handleScroll = ev => {
      if (!this.shouldIgnoreMove) {
        let pageX = window.scrollX - this.prevScrollX + this.prevPageX;
        let pageY = window.scrollY - this.prevScrollY + this.prevPageY;
        this.emitter.trigger('pointermove', {
          origEvent: ev,
          isTouch: this.isTouchDragging,
          subjectEl: this.subjectEl,
          pageX,
          pageY,
          deltaX: pageX - this.origPageX,
          deltaY: pageY - this.origPageY
        });
      }
    };
    this.containerEl = containerEl;
    this.emitter = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.F();
    containerEl.addEventListener('mousedown', this.handleMouseDown);
    containerEl.addEventListener('touchstart', this.handleTouchStart, {
      passive: true
    });
    listenerCreated();
  }
  destroy() {
    this.containerEl.removeEventListener('mousedown', this.handleMouseDown);
    this.containerEl.removeEventListener('touchstart', this.handleTouchStart, {
      passive: true
    });
    listenerDestroyed();
  }
  tryStart(ev) {
    let subjectEl = this.querySubjectEl(ev);
    let downEl = ev.target;
    if (subjectEl && (!this.handleSelector || (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.$)(downEl, this.handleSelector))) {
      this.subjectEl = subjectEl;
      this.isDragging = true; // do this first so cancelTouchScroll will work
      this.wasTouchScroll = false;
      return true;
    }
    return false;
  }
  cleanup() {
    isWindowTouchMoveCancelled = false;
    this.isDragging = false;
    this.subjectEl = null;
    // keep wasTouchScroll around for later access
    this.destroyScrollWatch();
  }
  querySubjectEl(ev) {
    if (this.selector) {
      return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.$)(ev.target, this.selector);
    }
    return this.containerEl;
  }
  shouldIgnoreMouse() {
    return ignoreMouseDepth || this.isTouchDragging;
  }
  // can be called by user of this class, to cancel touch-based scrolling for the current drag
  cancelTouchScroll() {
    if (this.isDragging) {
      isWindowTouchMoveCancelled = true;
    }
  }
  // Scrolling that simulates pointermoves
  // ----------------------------------------------------------------------------------------------------
  initScrollWatch(ev) {
    if (this.shouldWatchScroll) {
      this.recordCoords(ev);
      window.addEventListener('scroll', this.handleScroll, true); // useCapture=true
    }
  }
  recordCoords(ev) {
    if (this.shouldWatchScroll) {
      this.prevPageX = ev.pageX;
      this.prevPageY = ev.pageY;
      this.prevScrollX = window.scrollX;
      this.prevScrollY = window.scrollY;
    }
  }
  destroyScrollWatch() {
    if (this.shouldWatchScroll) {
      window.removeEventListener('scroll', this.handleScroll, true); // useCaptured=true
    }
  }
  // Event Normalization
  // ----------------------------------------------------------------------------------------------------
  createEventFromMouse(ev, isFirst) {
    let deltaX = 0;
    let deltaY = 0;
    // TODO: repeat code
    if (isFirst) {
      this.origPageX = ev.pageX;
      this.origPageY = ev.pageY;
    } else {
      deltaX = ev.pageX - this.origPageX;
      deltaY = ev.pageY - this.origPageY;
    }
    return {
      origEvent: ev,
      isTouch: false,
      subjectEl: this.subjectEl,
      pageX: ev.pageX,
      pageY: ev.pageY,
      deltaX,
      deltaY
    };
  }
  createEventFromTouch(ev, isFirst) {
    let touches = ev.touches;
    let pageX;
    let pageY;
    let deltaX = 0;
    let deltaY = 0;
    // if touch coords available, prefer,
    // because FF would give bad ev.pageX ev.pageY
    if (touches && touches.length) {
      pageX = touches[0].pageX;
      pageY = touches[0].pageY;
    } else {
      pageX = ev.pageX;
      pageY = ev.pageY;
    }
    // TODO: repeat code
    if (isFirst) {
      this.origPageX = pageX;
      this.origPageY = pageY;
    } else {
      deltaX = pageX - this.origPageX;
      deltaY = pageY - this.origPageY;
    }
    return {
      origEvent: ev,
      isTouch: true,
      subjectEl: this.subjectEl,
      pageX,
      pageY,
      deltaX,
      deltaY
    };
  }
}
// Returns a boolean whether this was a left mouse click and no ctrl key (which means right click on Mac)
function isPrimaryMouseButton(ev) {
  return ev.button === 0 && !ev.ctrlKey;
}
// Ignoring fake mouse events generated by touch
// ----------------------------------------------------------------------------------------------------
function startIgnoringMouse() {
  ignoreMouseDepth += 1;
  setTimeout(() => {
    ignoreMouseDepth -= 1;
  }, _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bI.touchMouseIgnoreWait);
}
// We want to attach touchmove as early as possible for Safari
// ----------------------------------------------------------------------------------------------------
function listenerCreated() {
  listenerCnt += 1;
  if (listenerCnt === 1) {
    window.addEventListener('touchmove', onWindowTouchMove, {
      passive: false
    });
  }
}
function listenerDestroyed() {
  listenerCnt -= 1;
  if (!listenerCnt) {
    window.removeEventListener('touchmove', onWindowTouchMove, {
      passive: false
    });
  }
}
function onWindowTouchMove(ev) {
  if (isWindowTouchMoveCancelled) {
    ev.preventDefault();
  }
}

/*
An effect in which an element follows the movement of a pointer across the screen.
The moving element is a clone of some other element.
Must call start + handleMove + stop.
*/
class ElementMirror {
  constructor() {
    this.isVisible = false; // must be explicitly enabled
    this.sourceEl = null;
    this.mirrorEl = null;
    this.sourceElRect = null; // screen coords relative to viewport
    // options that can be set directly by caller
    this.parentNode = document.body; // HIGHLY SUGGESTED to set this to sidestep ShadowDOM issues
    this.zIndex = 9999;
    this.revertDuration = 0;
  }
  start(sourceEl, pageX, pageY) {
    this.sourceEl = sourceEl;
    this.sourceElRect = this.sourceEl.getBoundingClientRect();
    this.origScreenX = pageX - window.scrollX;
    this.origScreenY = pageY - window.scrollY;
    this.deltaX = 0;
    this.deltaY = 0;
    this.updateElPosition();
  }
  handleMove(pageX, pageY) {
    this.deltaX = pageX - window.scrollX - this.origScreenX;
    this.deltaY = pageY - window.scrollY - this.origScreenY;
    this.updateElPosition();
  }
  // can be called before start
  setIsVisible(bool) {
    if (bool) {
      if (!this.isVisible) {
        if (this.mirrorEl) {
          this.mirrorEl.style.display = '';
        }
        this.isVisible = bool; // needs to happen before updateElPosition
        this.updateElPosition(); // because was not updating the position while invisible
      }
    } else if (this.isVisible) {
      if (this.mirrorEl) {
        this.mirrorEl.style.display = 'none';
      }
      this.isVisible = bool;
    }
  }
  // always async
  stop(needsRevertAnimation, callback) {
    let done = () => {
      this.cleanup();
      callback();
    };
    if (needsRevertAnimation && this.mirrorEl && this.isVisible && this.revertDuration && (
    // if 0, transition won't work
    this.deltaX || this.deltaY) // if same coords, transition won't work
    ) {
      this.doRevertAnimation(done, this.revertDuration);
    } else {
      setTimeout(done, 0);
    }
  }
  doRevertAnimation(callback, revertDuration) {
    let mirrorEl = this.mirrorEl;
    let finalSourceElRect = this.sourceEl.getBoundingClientRect(); // because autoscrolling might have happened
    mirrorEl.style.transition = 'top ' + revertDuration + 'ms,' + 'left ' + revertDuration + 'ms';
    (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aP)(mirrorEl, {
      left: finalSourceElRect.left,
      top: finalSourceElRect.top
    });
    (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b2)(mirrorEl, () => {
      mirrorEl.style.transition = '';
      callback();
    });
  }
  cleanup() {
    if (this.mirrorEl) {
      (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aO)(this.mirrorEl);
      this.mirrorEl = null;
    }
    this.sourceEl = null;
  }
  updateElPosition() {
    if (this.sourceEl && this.isVisible) {
      (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aP)(this.getMirrorEl(), {
        left: this.sourceElRect.left + this.deltaX,
        top: this.sourceElRect.top + this.deltaY
      });
    }
  }
  getMirrorEl() {
    let sourceElRect = this.sourceElRect;
    let mirrorEl = this.mirrorEl;
    if (!mirrorEl) {
      mirrorEl = this.mirrorEl = this.sourceEl.cloneNode(true); // cloneChildren=true
      // we don't want long taps or any mouse interaction causing selection/menus.
      // would use preventSelection(), but that prevents selectstart, causing problems.
      mirrorEl.style.userSelect = 'none';
      mirrorEl.style.webkitUserSelect = 'none';
      mirrorEl.style.pointerEvents = 'none';
      mirrorEl.classList.add('fc-event-dragging');
      (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aP)(mirrorEl, {
        position: 'fixed',
        zIndex: this.zIndex,
        visibility: '',
        boxSizing: 'border-box',
        width: sourceElRect.right - sourceElRect.left,
        height: sourceElRect.bottom - sourceElRect.top,
        right: 'auto',
        bottom: 'auto',
        margin: 0
      });
      this.parentNode.appendChild(mirrorEl);
    }
    return mirrorEl;
  }
}

/*
Is a cache for a given element's scroll information (all the info that ScrollController stores)
in addition the "client rectangle" of the element.. the area within the scrollbars.

The cache can be in one of two modes:
- doesListening:false - ignores when the container is scrolled by someone else
- doesListening:true - watch for scrolling and update the cache
*/
class ScrollGeomCache extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bb {
  constructor(scrollController, doesListening) {
    super();
    this.handleScroll = () => {
      this.scrollTop = this.scrollController.getScrollTop();
      this.scrollLeft = this.scrollController.getScrollLeft();
      this.handleScrollChange();
    };
    this.scrollController = scrollController;
    this.doesListening = doesListening;
    this.scrollTop = this.origScrollTop = scrollController.getScrollTop();
    this.scrollLeft = this.origScrollLeft = scrollController.getScrollLeft();
    this.scrollWidth = scrollController.getScrollWidth();
    this.scrollHeight = scrollController.getScrollHeight();
    this.clientWidth = scrollController.getClientWidth();
    this.clientHeight = scrollController.getClientHeight();
    this.clientRect = this.computeClientRect(); // do last in case it needs cached values
    if (this.doesListening) {
      this.getEventTarget().addEventListener('scroll', this.handleScroll);
    }
  }
  destroy() {
    if (this.doesListening) {
      this.getEventTarget().removeEventListener('scroll', this.handleScroll);
    }
  }
  getScrollTop() {
    return this.scrollTop;
  }
  getScrollLeft() {
    return this.scrollLeft;
  }
  setScrollTop(top) {
    this.scrollController.setScrollTop(top);
    if (!this.doesListening) {
      // we are not relying on the element to normalize out-of-bounds scroll values
      // so we need to sanitize ourselves
      this.scrollTop = Math.max(Math.min(top, this.getMaxScrollTop()), 0);
      this.handleScrollChange();
    }
  }
  setScrollLeft(top) {
    this.scrollController.setScrollLeft(top);
    if (!this.doesListening) {
      // we are not relying on the element to normalize out-of-bounds scroll values
      // so we need to sanitize ourselves
      this.scrollLeft = Math.max(Math.min(top, this.getMaxScrollLeft()), 0);
      this.handleScrollChange();
    }
  }
  getClientWidth() {
    return this.clientWidth;
  }
  getClientHeight() {
    return this.clientHeight;
  }
  getScrollWidth() {
    return this.scrollWidth;
  }
  getScrollHeight() {
    return this.scrollHeight;
  }
  handleScrollChange() {}
}
class ElementScrollGeomCache extends ScrollGeomCache {
  constructor(el, doesListening) {
    super(new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bc(el), doesListening);
  }
  getEventTarget() {
    return this.scrollController.el;
  }
  computeClientRect() {
    return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b3)(this.scrollController.el);
  }
}
class WindowScrollGeomCache extends ScrollGeomCache {
  constructor(doesListening) {
    super(new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bd(), doesListening);
  }
  getEventTarget() {
    return window;
  }
  computeClientRect() {
    return {
      left: this.scrollLeft,
      right: this.scrollLeft + this.clientWidth,
      top: this.scrollTop,
      bottom: this.scrollTop + this.clientHeight
    };
  }
  // the window is the only scroll object that changes it's rectangle relative
  // to the document's topleft as it scrolls
  handleScrollChange() {
    this.clientRect = this.computeClientRect();
  }
}

// If available we are using native "performance" API instead of "Date"
// Read more about it on MDN:
// https://developer.mozilla.org/en-US/docs/Web/API/Performance
const getTime = typeof performance === 'function' ? performance.now : Date.now;
/*
For a pointer interaction, automatically scrolls certain scroll containers when the pointer
approaches the edge.

The caller must call start + handleMove + stop.
*/
class AutoScroller {
  constructor() {
    // options that can be set by caller
    this.isEnabled = true;
    this.scrollQuery = [window, '.fc-scroller'];
    this.edgeThreshold = 50; // pixels
    this.maxVelocity = 300; // pixels per second
    // internal state
    this.pointerScreenX = null;
    this.pointerScreenY = null;
    this.isAnimating = false;
    this.scrollCaches = null;
    // protect against the initial pointerdown being too close to an edge and starting the scroll
    this.everMovedUp = false;
    this.everMovedDown = false;
    this.everMovedLeft = false;
    this.everMovedRight = false;
    this.animate = () => {
      if (this.isAnimating) {
        // wasn't cancelled between animation calls
        let edge = this.computeBestEdge(this.pointerScreenX + window.scrollX, this.pointerScreenY + window.scrollY);
        if (edge) {
          let now = getTime();
          this.handleSide(edge, (now - this.msSinceRequest) / 1000);
          this.requestAnimation(now);
        } else {
          this.isAnimating = false; // will stop animation
        }
      }
    };
  }
  start(pageX, pageY, scrollStartEl) {
    if (this.isEnabled) {
      this.scrollCaches = this.buildCaches(scrollStartEl);
      this.pointerScreenX = null;
      this.pointerScreenY = null;
      this.everMovedUp = false;
      this.everMovedDown = false;
      this.everMovedLeft = false;
      this.everMovedRight = false;
      this.handleMove(pageX, pageY);
    }
  }
  handleMove(pageX, pageY) {
    if (this.isEnabled) {
      let pointerScreenX = pageX - window.scrollX;
      let pointerScreenY = pageY - window.scrollY;
      let yDelta = this.pointerScreenY === null ? 0 : pointerScreenY - this.pointerScreenY;
      let xDelta = this.pointerScreenX === null ? 0 : pointerScreenX - this.pointerScreenX;
      if (yDelta < 0) {
        this.everMovedUp = true;
      } else if (yDelta > 0) {
        this.everMovedDown = true;
      }
      if (xDelta < 0) {
        this.everMovedLeft = true;
      } else if (xDelta > 0) {
        this.everMovedRight = true;
      }
      this.pointerScreenX = pointerScreenX;
      this.pointerScreenY = pointerScreenY;
      if (!this.isAnimating) {
        this.isAnimating = true;
        this.requestAnimation(getTime());
      }
    }
  }
  stop() {
    if (this.isEnabled) {
      this.isAnimating = false; // will stop animation
      for (let scrollCache of this.scrollCaches) {
        scrollCache.destroy();
      }
      this.scrollCaches = null;
    }
  }
  requestAnimation(now) {
    this.msSinceRequest = now;
    requestAnimationFrame(this.animate);
  }
  handleSide(edge, seconds) {
    let {
      scrollCache
    } = edge;
    let {
      edgeThreshold
    } = this;
    let invDistance = edgeThreshold - edge.distance;
    let velocity =
    // the closer to the edge, the faster we scroll
    invDistance * invDistance / (edgeThreshold * edgeThreshold) *
    // quadratic
    this.maxVelocity * seconds;
    let sign = 1;
    switch (edge.name) {
      case 'left':
        sign = -1;
      // falls through
      case 'right':
        scrollCache.setScrollLeft(scrollCache.getScrollLeft() + velocity * sign);
        break;
      case 'top':
        sign = -1;
      // falls through
      case 'bottom':
        scrollCache.setScrollTop(scrollCache.getScrollTop() + velocity * sign);
        break;
    }
  }
  // left/top are relative to document topleft
  computeBestEdge(left, top) {
    let {
      edgeThreshold
    } = this;
    let bestSide = null;
    let scrollCaches = this.scrollCaches || [];
    for (let scrollCache of scrollCaches) {
      let rect = scrollCache.clientRect;
      let leftDist = left - rect.left;
      let rightDist = rect.right - left;
      let topDist = top - rect.top;
      let bottomDist = rect.bottom - top;
      // completely within the rect?
      if (leftDist >= 0 && rightDist >= 0 && topDist >= 0 && bottomDist >= 0) {
        if (topDist <= edgeThreshold && this.everMovedUp && scrollCache.canScrollUp() && (!bestSide || bestSide.distance > topDist)) {
          bestSide = {
            scrollCache,
            name: 'top',
            distance: topDist
          };
        }
        if (bottomDist <= edgeThreshold && this.everMovedDown && scrollCache.canScrollDown() && (!bestSide || bestSide.distance > bottomDist)) {
          bestSide = {
            scrollCache,
            name: 'bottom',
            distance: bottomDist
          };
        }
        /*
        TODO: fix broken RTL scrolling. canScrollLeft always returning false
        https://github.com/fullcalendar/fullcalendar/issues/4837
        */
        if (leftDist <= edgeThreshold && this.everMovedLeft && scrollCache.canScrollLeft() && (!bestSide || bestSide.distance > leftDist)) {
          bestSide = {
            scrollCache,
            name: 'left',
            distance: leftDist
          };
        }
        if (rightDist <= edgeThreshold && this.everMovedRight && scrollCache.canScrollRight() && (!bestSide || bestSide.distance > rightDist)) {
          bestSide = {
            scrollCache,
            name: 'right',
            distance: rightDist
          };
        }
      }
    }
    return bestSide;
  }
  buildCaches(scrollStartEl) {
    return this.queryScrollEls(scrollStartEl).map(el => {
      if (el === window) {
        return new WindowScrollGeomCache(false); // false = don't listen to user-generated scrolls
      }
      return new ElementScrollGeomCache(el, false); // false = don't listen to user-generated scrolls
    });
  }
  queryScrollEls(scrollStartEl) {
    let els = [];
    for (let query of this.scrollQuery) {
      if (typeof query === 'object') {
        els.push(query);
      } else {
        /*
        TODO: in the future, always have auto-scroll happen on element where current Hit came from
        Ticket: https://github.com/fullcalendar/fullcalendar/issues/4593
        */
        els.push(...Array.prototype.slice.call(scrollStartEl.getRootNode().querySelectorAll(query)));
      }
    }
    return els;
  }
}

/*
Monitors dragging on an element. Has a number of high-level features:
- minimum distance required before dragging
- minimum wait time ("delay") before dragging
- a mirror element that follows the pointer
*/
class FeaturefulElementDragging extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bH {
  constructor(containerEl, selector) {
    super(containerEl);
    this.containerEl = containerEl;
    // options that can be directly set by caller
    // the caller can also set the PointerDragging's options as well
    this.delay = null;
    this.minDistance = 0;
    this.touchScrollAllowed = true; // prevents drag from starting and blocks scrolling during drag
    this.mirrorNeedsRevert = false;
    this.isInteracting = false; // is the user validly moving the pointer? lasts until pointerup
    this.isDragging = false; // is it INTENTFULLY dragging? lasts until after revert animation
    this.isDelayEnded = false;
    this.isDistanceSurpassed = false;
    this.delayTimeoutId = null;
    this.onPointerDown = ev => {
      if (!this.isDragging) {
        // so new drag doesn't happen while revert animation is going
        this.isInteracting = true;
        this.isDelayEnded = false;
        this.isDistanceSurpassed = false;
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ar)(document.body);
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.at)(document.body);
        // prevent links from being visited if there's an eventual drag.
        // also prevents selection in older browsers (maybe?).
        // not necessary for touch, besides, browser would complain about passiveness.
        if (!ev.isTouch) {
          ev.origEvent.preventDefault();
        }
        this.emitter.trigger('pointerdown', ev);
        if (this.isInteracting &&
        // not destroyed via pointerdown handler
        !this.pointer.shouldIgnoreMove) {
          // actions related to initiating dragstart+dragmove+dragend...
          this.mirror.setIsVisible(false); // reset. caller must set-visible
          this.mirror.start(ev.subjectEl, ev.pageX, ev.pageY); // must happen on first pointer down
          this.startDelay(ev);
          if (!this.minDistance) {
            this.handleDistanceSurpassed(ev);
          }
        }
      }
    };
    this.onPointerMove = ev => {
      if (this.isInteracting) {
        this.emitter.trigger('pointermove', ev);
        if (!this.isDistanceSurpassed) {
          let minDistance = this.minDistance;
          let distanceSq; // current distance from the origin, squared
          let {
            deltaX,
            deltaY
          } = ev;
          distanceSq = deltaX * deltaX + deltaY * deltaY;
          if (distanceSq >= minDistance * minDistance) {
            // use pythagorean theorem
            this.handleDistanceSurpassed(ev);
          }
        }
        if (this.isDragging) {
          // a real pointer move? (not one simulated by scrolling)
          if (ev.origEvent.type !== 'scroll') {
            this.mirror.handleMove(ev.pageX, ev.pageY);
            this.autoScroller.handleMove(ev.pageX, ev.pageY);
          }
          this.emitter.trigger('dragmove', ev);
        }
      }
    };
    this.onPointerUp = ev => {
      if (this.isInteracting) {
        this.isInteracting = false;
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.as)(document.body);
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.au)(document.body);
        this.emitter.trigger('pointerup', ev); // can potentially set mirrorNeedsRevert
        if (this.isDragging) {
          this.autoScroller.stop();
          this.tryStopDrag(ev); // which will stop the mirror
        }
        if (this.delayTimeoutId) {
          clearTimeout(this.delayTimeoutId);
          this.delayTimeoutId = null;
        }
      }
    };
    let pointer = this.pointer = new PointerDragging(containerEl);
    pointer.emitter.on('pointerdown', this.onPointerDown);
    pointer.emitter.on('pointermove', this.onPointerMove);
    pointer.emitter.on('pointerup', this.onPointerUp);
    if (selector) {
      pointer.selector = selector;
    }
    this.mirror = new ElementMirror();
    this.autoScroller = new AutoScroller();
  }
  destroy() {
    this.pointer.destroy();
    // HACK: simulate a pointer-up to end the current drag
    // TODO: fire 'dragend' directly and stop interaction. discourage use of pointerup event (b/c might not fire)
    this.onPointerUp({});
  }
  startDelay(ev) {
    if (typeof this.delay === 'number') {
      this.delayTimeoutId = setTimeout(() => {
        this.delayTimeoutId = null;
        this.handleDelayEnd(ev);
      }, this.delay); // not assignable to number!
    } else {
      this.handleDelayEnd(ev);
    }
  }
  handleDelayEnd(ev) {
    this.isDelayEnded = true;
    this.tryStartDrag(ev);
  }
  handleDistanceSurpassed(ev) {
    this.isDistanceSurpassed = true;
    this.tryStartDrag(ev);
  }
  tryStartDrag(ev) {
    if (this.isDelayEnded && this.isDistanceSurpassed) {
      if (!this.pointer.wasTouchScroll || this.touchScrollAllowed) {
        this.isDragging = true;
        this.mirrorNeedsRevert = false;
        this.autoScroller.start(ev.pageX, ev.pageY, this.containerEl);
        this.emitter.trigger('dragstart', ev);
        if (this.touchScrollAllowed === false) {
          this.pointer.cancelTouchScroll();
        }
      }
    }
  }
  tryStopDrag(ev) {
    // .stop() is ALWAYS asynchronous, which we NEED because we want all pointerup events
    // that come from the document to fire beforehand. much more convenient this way.
    this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, ev));
  }
  stopDrag(ev) {
    this.isDragging = false;
    this.emitter.trigger('dragend', ev);
  }
  // fill in the implementations...
  setIgnoreMove(bool) {
    this.pointer.shouldIgnoreMove = bool;
  }
  setMirrorIsVisible(bool) {
    this.mirror.setIsVisible(bool);
  }
  setMirrorNeedsRevert(bool) {
    this.mirrorNeedsRevert = bool;
  }
  setAutoScrollEnabled(bool) {
    this.autoScroller.isEnabled = bool;
  }
}

/*
When this class is instantiated, it records the offset of an element (relative to the document topleft),
and continues to monitor scrolling, updating the cached coordinates if it needs to.
Does not access the DOM after instantiation, so highly performant.

Also keeps track of all scrolling/overflow:hidden containers that are parents of the given element
and an determine if a given point is inside the combined clipping rectangle.
*/
class OffsetTracker {
  constructor(el) {
    this.el = el;
    this.origRect = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b6)(el);
    // will work fine for divs that have overflow:hidden
    this.scrollCaches = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b5)(el).map(scrollEl => new ElementScrollGeomCache(scrollEl, true));
  }
  destroy() {
    for (let scrollCache of this.scrollCaches) {
      scrollCache.destroy();
    }
  }
  computeLeft() {
    let left = this.origRect.left;
    for (let scrollCache of this.scrollCaches) {
      left += scrollCache.origScrollLeft - scrollCache.getScrollLeft();
    }
    return left;
  }
  computeTop() {
    let top = this.origRect.top;
    for (let scrollCache of this.scrollCaches) {
      top += scrollCache.origScrollTop - scrollCache.getScrollTop();
    }
    return top;
  }
  isWithinClipping(pageX, pageY) {
    let point = {
      left: pageX,
      top: pageY
    };
    for (let scrollCache of this.scrollCaches) {
      if (!isIgnoredClipping(scrollCache.getEventTarget()) && !(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aF)(point, scrollCache.clientRect)) {
        return false;
      }
    }
    return true;
  }
}
// certain clipping containers should never constrain interactions, like <html> and <body>
// https://github.com/fullcalendar/fullcalendar/issues/3615
function isIgnoredClipping(node) {
  let tagName = node.tagName;
  return tagName === 'HTML' || tagName === 'BODY';
}

/*
Tracks movement over multiple droppable areas (aka "hits")
that exist in one or more DateComponents.
Relies on an existing draggable.

emits:
- pointerdown
- dragstart
- hitchange - fires initially, even if not over a hit
- pointerup
- (hitchange - again, to null, if ended over a hit)
- dragend
*/
class HitDragging {
  constructor(dragging, droppableStore) {
    // options that can be set by caller
    this.useSubjectCenter = false;
    this.requireInitial = true; // if doesn't start out on a hit, won't emit any events
    this.disablePointCheck = false;
    this.initialHit = null;
    this.movingHit = null;
    this.finalHit = null; // won't ever be populated if shouldIgnoreMove
    this.handlePointerDown = ev => {
      let {
        dragging
      } = this;
      this.initialHit = null;
      this.movingHit = null;
      this.finalHit = null;
      this.prepareHits();
      this.processFirstCoord(ev);
      if (this.initialHit || !this.requireInitial) {
        dragging.setIgnoreMove(false);
        // TODO: fire this before computing processFirstCoord, so listeners can cancel. this gets fired by almost every handler :(
        this.emitter.trigger('pointerdown', ev);
      } else {
        dragging.setIgnoreMove(true);
      }
    };
    this.handleDragStart = ev => {
      this.emitter.trigger('dragstart', ev);
      this.handleMove(ev, true); // force = fire even if initially null
    };
    this.handleDragMove = ev => {
      this.emitter.trigger('dragmove', ev);
      this.handleMove(ev);
    };
    this.handlePointerUp = ev => {
      this.releaseHits();
      this.emitter.trigger('pointerup', ev);
    };
    this.handleDragEnd = ev => {
      if (this.movingHit) {
        this.emitter.trigger('hitupdate', null, true, ev);
      }
      this.finalHit = this.movingHit;
      this.movingHit = null;
      this.emitter.trigger('dragend', ev);
    };
    this.droppableStore = droppableStore;
    dragging.emitter.on('pointerdown', this.handlePointerDown);
    dragging.emitter.on('dragstart', this.handleDragStart);
    dragging.emitter.on('dragmove', this.handleDragMove);
    dragging.emitter.on('pointerup', this.handlePointerUp);
    dragging.emitter.on('dragend', this.handleDragEnd);
    this.dragging = dragging;
    this.emitter = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.F();
  }
  // sets initialHit
  // sets coordAdjust
  processFirstCoord(ev) {
    let origPoint = {
      left: ev.pageX,
      top: ev.pageY
    };
    let adjustedPoint = origPoint;
    let subjectEl = ev.subjectEl;
    let subjectRect;
    if (subjectEl instanceof HTMLElement) {
      // i.e. not a Document/ShadowRoot
      subjectRect = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b6)(subjectEl);
      adjustedPoint = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aG)(adjustedPoint, subjectRect);
    }
    let initialHit = this.initialHit = this.queryHitForOffset(adjustedPoint.left, adjustedPoint.top);
    if (initialHit) {
      if (this.useSubjectCenter && subjectRect) {
        let slicedSubjectRect = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aE)(subjectRect, initialHit.rect);
        if (slicedSubjectRect) {
          adjustedPoint = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aH)(slicedSubjectRect);
        }
      }
      this.coordAdjust = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aI)(adjustedPoint, origPoint);
    } else {
      this.coordAdjust = {
        left: 0,
        top: 0
      };
    }
  }
  handleMove(ev, forceHandle) {
    let hit = this.queryHitForOffset(ev.pageX + this.coordAdjust.left, ev.pageY + this.coordAdjust.top);
    if (forceHandle || !isHitsEqual(this.movingHit, hit)) {
      this.movingHit = hit;
      this.emitter.trigger('hitupdate', hit, false, ev);
    }
  }
  prepareHits() {
    this.offsetTrackers = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a)(this.droppableStore, interactionSettings => {
      interactionSettings.component.prepareHits();
      return new OffsetTracker(interactionSettings.el);
    });
  }
  releaseHits() {
    let {
      offsetTrackers
    } = this;
    for (let id in offsetTrackers) {
      offsetTrackers[id].destroy();
    }
    this.offsetTrackers = {};
  }
  queryHitForOffset(offsetLeft, offsetTop) {
    let {
      droppableStore,
      offsetTrackers
    } = this;
    let bestHit = null;
    for (let id in droppableStore) {
      let component = droppableStore[id].component;
      let offsetTracker = offsetTrackers[id];
      if (offsetTracker &&
      // wasn't destroyed mid-drag
      offsetTracker.isWithinClipping(offsetLeft, offsetTop)) {
        let originLeft = offsetTracker.computeLeft();
        let originTop = offsetTracker.computeTop();
        let positionLeft = offsetLeft - originLeft;
        let positionTop = offsetTop - originTop;
        let {
          origRect
        } = offsetTracker;
        let width = origRect.right - origRect.left;
        let height = origRect.bottom - origRect.top;
        if (
        // must be within the element's bounds
        positionLeft >= 0 && positionLeft < width && positionTop >= 0 && positionTop < height) {
          let hit = component.queryHit(positionLeft, positionTop, width, height);
          if (hit &&
          // make sure the hit is within activeRange, meaning it's not a dead cell
          (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b9)(hit.dateProfile.activeRange, hit.dateSpan.range) && (
          // Ensure the component we are querying for the hit is accessibly my the pointer
          // Prevents obscured calendars (ex: under a modal dialog) from accepting hit
          // https://github.com/fullcalendar/fullcalendar/issues/5026
          this.disablePointCheck || offsetTracker.el.contains(offsetTracker.el.getRootNode().elementFromPoint(
          // add-back origins to get coordinate relative to top-left of window viewport
          positionLeft + originLeft - window.scrollX, positionTop + originTop - window.scrollY))) && (!bestHit || hit.layer > bestHit.layer)) {
            hit.componentId = id;
            hit.context = component.context;
            // TODO: better way to re-orient rectangle
            hit.rect.left += originLeft;
            hit.rect.right += originLeft;
            hit.rect.top += originTop;
            hit.rect.bottom += originTop;
            bestHit = hit;
          }
        }
      }
    }
    return bestHit;
  }
}
function isHitsEqual(hit0, hit1) {
  if (!hit0 && !hit1) {
    return true;
  }
  if (Boolean(hit0) !== Boolean(hit1)) {
    return false;
  }
  return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bf)(hit0.dateSpan, hit1.dateSpan);
}
function buildDatePointApiWithContext(dateSpan, context) {
  let props = {};
  for (let transform of context.pluginHooks.datePointTransforms) {
    Object.assign(props, transform(dateSpan, context));
  }
  Object.assign(props, buildDatePointApi(dateSpan, context.dateEnv));
  return props;
}
function buildDatePointApi(span, dateEnv) {
  return {
    date: dateEnv.toDate(span.range.start),
    dateStr: dateEnv.formatIso(span.range.start, {
      omitTime: span.allDay
    }),
    allDay: span.allDay
  };
}

/*
Monitors when the user clicks on a specific date/time of a component.
A pointerdown+pointerup on the same "hit" constitutes a click.
*/
class DateClicking extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.Z {
  constructor(settings) {
    super(settings);
    this.handlePointerDown = pev => {
      let {
        dragging
      } = this;
      let downEl = pev.origEvent.target;
      // do this in pointerdown (not dragend) because DOM might be mutated by the time dragend is fired
      dragging.setIgnoreMove(!this.component.isValidDateDownEl(downEl));
    };
    // won't even fire if moving was ignored
    this.handleDragEnd = ev => {
      let {
        component
      } = this;
      let {
        pointer
      } = this.dragging;
      if (!pointer.wasTouchScroll) {
        let {
          initialHit,
          finalHit
        } = this.hitDragging;
        if (initialHit && finalHit && isHitsEqual(initialHit, finalHit)) {
          let {
            context
          } = component;
          let arg = Object.assign(Object.assign({}, buildDatePointApiWithContext(initialHit.dateSpan, context)), {
            dayEl: initialHit.dayEl,
            jsEvent: ev.origEvent,
            view: context.viewApi || context.calendarApi.view
          });
          context.emitter.trigger('dateClick', arg);
        }
      }
    };
    // we DO want to watch pointer moves because otherwise finalHit won't get populated
    this.dragging = new FeaturefulElementDragging(settings.el);
    this.dragging.autoScroller.isEnabled = false;
    let hitDragging = this.hitDragging = new HitDragging(this.dragging, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bG)(settings));
    hitDragging.emitter.on('pointerdown', this.handlePointerDown);
    hitDragging.emitter.on('dragend', this.handleDragEnd);
  }
  destroy() {
    this.dragging.destroy();
  }
}

/*
Tracks when the user selects a portion of time of a component,
constituted by a drag over date cells, with a possible delay at the beginning of the drag.
*/
class DateSelecting extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.Z {
  constructor(settings) {
    super(settings);
    this.dragSelection = null;
    this.handlePointerDown = ev => {
      let {
        component,
        dragging
      } = this;
      let {
        options
      } = component.context;
      let canSelect = options.selectable && component.isValidDateDownEl(ev.origEvent.target);
      // don't bother to watch expensive moves if component won't do selection
      dragging.setIgnoreMove(!canSelect);
      // if touch, require user to hold down
      dragging.delay = ev.isTouch ? getComponentTouchDelay$1(component) : null;
    };
    this.handleDragStart = ev => {
      this.component.context.calendarApi.unselect(ev); // unselect previous selections
    };
    this.handleHitUpdate = (hit, isFinal) => {
      let {
        context
      } = this.component;
      let dragSelection = null;
      let isInvalid = false;
      if (hit) {
        let initialHit = this.hitDragging.initialHit;
        let disallowed = hit.componentId === initialHit.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(initialHit, hit);
        if (!disallowed) {
          dragSelection = joinHitsIntoSelection(initialHit, hit, context.pluginHooks.dateSelectionTransformers);
        }
        if (!dragSelection || !(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b_)(dragSelection, hit.dateProfile, context)) {
          isInvalid = true;
          dragSelection = null;
        }
      }
      if (dragSelection) {
        context.dispatch({
          type: 'SELECT_DATES',
          selection: dragSelection
        });
      } else if (!isFinal) {
        // only unselect if moved away while dragging
        context.dispatch({
          type: 'UNSELECT_DATES'
        });
      }
      if (!isInvalid) {
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aw)();
      } else {
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ax)();
      }
      if (!isFinal) {
        this.dragSelection = dragSelection; // only clear if moved away from all hits while dragging
      }
    };
    this.handlePointerUp = pev => {
      if (this.dragSelection) {
        // selection is already rendered, so just need to report selection
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cu)(this.dragSelection, pev, this.component.context);
        this.dragSelection = null;
      }
    };
    let {
      component
    } = settings;
    let {
      options
    } = component.context;
    let dragging = this.dragging = new FeaturefulElementDragging(settings.el);
    dragging.touchScrollAllowed = false;
    dragging.minDistance = options.selectMinDistance || 0;
    dragging.autoScroller.isEnabled = options.dragScroll;
    let hitDragging = this.hitDragging = new HitDragging(this.dragging, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bG)(settings));
    hitDragging.emitter.on('pointerdown', this.handlePointerDown);
    hitDragging.emitter.on('dragstart', this.handleDragStart);
    hitDragging.emitter.on('hitupdate', this.handleHitUpdate);
    hitDragging.emitter.on('pointerup', this.handlePointerUp);
  }
  destroy() {
    this.dragging.destroy();
  }
}
function getComponentTouchDelay$1(component) {
  let {
    options
  } = component.context;
  let delay = options.selectLongPressDelay;
  if (delay == null) {
    delay = options.longPressDelay;
  }
  return delay;
}
function joinHitsIntoSelection(hit0, hit1, dateSelectionTransformers) {
  let dateSpan0 = hit0.dateSpan;
  let dateSpan1 = hit1.dateSpan;
  let ms = [dateSpan0.range.start, dateSpan0.range.end, dateSpan1.range.start, dateSpan1.range.end];
  ms.sort(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.av);
  let props = {};
  for (let transformer of dateSelectionTransformers) {
    let res = transformer(hit0, hit1);
    if (res === false) {
      return null;
    }
    if (res) {
      Object.assign(props, res);
    }
  }
  props.range = {
    start: ms[0],
    end: ms[3]
  };
  props.allDay = dateSpan0.allDay;
  return props;
}
class EventDragging extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.Z {
  constructor(settings) {
    super(settings);
    // internal state
    this.subjectEl = null;
    this.subjectSeg = null; // the seg being selected/dragged
    this.isDragging = false;
    this.eventRange = null;
    this.relevantEvents = null; // the events being dragged
    this.receivingContext = null;
    this.validMutation = null;
    this.mutatedRelevantEvents = null;
    this.handlePointerDown = ev => {
      let origTarget = ev.origEvent.target;
      let {
        component,
        dragging
      } = this;
      let {
        mirror
      } = dragging;
      let {
        options
      } = component.context;
      let initialContext = component.context;
      this.subjectEl = ev.subjectEl;
      let subjectSeg = this.subjectSeg = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__._)(ev.subjectEl);
      let eventRange = this.eventRange = subjectSeg.eventRange;
      let eventInstanceId = eventRange.instance.instanceId;
      this.relevantEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aV)(initialContext.getCurrentData().eventStore, eventInstanceId);
      dragging.minDistance = ev.isTouch ? 0 : options.eventDragMinDistance;
      dragging.delay =
      // only do a touch delay if touch and this event hasn't been selected yet
      ev.isTouch && eventInstanceId !== component.props.eventSelection ? getComponentTouchDelay(component) : null;
      if (options.fixedMirrorParent) {
        mirror.parentNode = options.fixedMirrorParent;
      } else {
        mirror.parentNode = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.$)(origTarget, '.fc');
      }
      mirror.revertDuration = options.dragRevertDuration;
      let isValid = component.isValidSegDownEl(origTarget) && !(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.$)(origTarget, '.fc-event-resizer'); // NOT on a resizer
      dragging.setIgnoreMove(!isValid);
      // disable dragging for elements that are resizable (ie, selectable)
      // but are not draggable
      this.isDragging = isValid && ev.subjectEl.classList.contains('fc-event-draggable');
    };
    this.handleDragStart = ev => {
      let initialContext = this.component.context;
      let eventRange = this.eventRange;
      let eventInstanceId = eventRange.instance.instanceId;
      if (ev.isTouch) {
        // need to select a different event?
        if (eventInstanceId !== this.component.props.eventSelection) {
          initialContext.dispatch({
            type: 'SELECT_EVENT',
            eventInstanceId
          });
        }
      } else {
        // if now using mouse, but was previous touch interaction, clear selected event
        initialContext.dispatch({
          type: 'UNSELECT_EVENT'
        });
      }
      if (this.isDragging) {
        initialContext.calendarApi.unselect(ev); // unselect *date* selection
        initialContext.emitter.trigger('eventDragStart', {
          el: this.subjectEl,
          event: new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a0(initialContext, eventRange.def, eventRange.instance),
          jsEvent: ev.origEvent,
          view: initialContext.viewApi
        });
      }
    };
    this.handleHitUpdate = (hit, isFinal) => {
      if (!this.isDragging) {
        return;
      }
      let relevantEvents = this.relevantEvents;
      let initialHit = this.hitDragging.initialHit;
      let initialContext = this.component.context;
      // states based on new hit
      let receivingContext = null;
      let mutation = null;
      let mutatedRelevantEvents = null;
      let isInvalid = false;
      let interaction = {
        affectedEvents: relevantEvents,
        mutatedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.I)(),
        isEvent: true
      };
      if (hit) {
        receivingContext = hit.context;
        let receivingOptions = receivingContext.options;
        if (initialContext === receivingContext || receivingOptions.editable && receivingOptions.droppable) {
          mutation = computeEventMutation(initialHit, hit, this.eventRange.instance.range.start, receivingContext.getCurrentData().pluginHooks.eventDragMutationMassagers);
          if (mutation) {
            mutatedRelevantEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bX)(relevantEvents, receivingContext.getCurrentData().eventUiBases, mutation, receivingContext);
            interaction.mutatedEvents = mutatedRelevantEvents;
            if (!(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bZ)(interaction, hit.dateProfile, receivingContext)) {
              isInvalid = true;
              mutation = null;
              mutatedRelevantEvents = null;
              interaction.mutatedEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.I)();
            }
          }
        } else {
          receivingContext = null;
        }
      }
      this.displayDrag(receivingContext, interaction);
      if (!isInvalid) {
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aw)();
      } else {
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ax)();
      }
      if (!isFinal) {
        if (initialContext === receivingContext &&
        // TODO: write test for this
        isHitsEqual(initialHit, hit)) {
          mutation = null;
        }
        this.dragging.setMirrorNeedsRevert(!mutation);
        // render the mirror if no already-rendered mirror
        // TODO: wish we could somehow wait for dispatch to guarantee render
        this.dragging.setMirrorIsVisible(!hit || !this.subjectEl.getRootNode().querySelector('.fc-event-mirror'));
        // assign states based on new hit
        this.receivingContext = receivingContext;
        this.validMutation = mutation;
        this.mutatedRelevantEvents = mutatedRelevantEvents;
      }
    };
    this.handlePointerUp = () => {
      if (!this.isDragging) {
        this.cleanup(); // because handleDragEnd won't fire
      }
    };
    this.handleDragEnd = ev => {
      if (this.isDragging) {
        let initialContext = this.component.context;
        let initialView = initialContext.viewApi;
        let {
          receivingContext,
          validMutation
        } = this;
        let eventDef = this.eventRange.def;
        let eventInstance = this.eventRange.instance;
        let eventApi = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a0(initialContext, eventDef, eventInstance);
        let relevantEvents = this.relevantEvents;
        let mutatedRelevantEvents = this.mutatedRelevantEvents;
        let {
          finalHit
        } = this.hitDragging;
        this.clearDrag(); // must happen after revert animation
        initialContext.emitter.trigger('eventDragStop', {
          el: this.subjectEl,
          event: eventApi,
          jsEvent: ev.origEvent,
          view: initialView
        });
        if (validMutation) {
          // dropped within same calendar
          if (receivingContext === initialContext) {
            let updatedEventApi = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a0(initialContext, mutatedRelevantEvents.defs[eventDef.defId], eventInstance ? mutatedRelevantEvents.instances[eventInstance.instanceId] : null);
            initialContext.dispatch({
              type: 'MERGE_EVENTS',
              eventStore: mutatedRelevantEvents
            });
            let eventChangeArg = {
              oldEvent: eventApi,
              event: updatedEventApi,
              relatedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.w)(mutatedRelevantEvents, initialContext, eventInstance),
              revert() {
                initialContext.dispatch({
                  type: 'MERGE_EVENTS',
                  eventStore: relevantEvents // the pre-change data
                });
              }
            };
            let transformed = {};
            for (let transformer of initialContext.getCurrentData().pluginHooks.eventDropTransformers) {
              Object.assign(transformed, transformer(validMutation, initialContext));
            }
            initialContext.emitter.trigger('eventDrop', Object.assign(Object.assign(Object.assign({}, eventChangeArg), transformed), {
              el: ev.subjectEl,
              delta: validMutation.datesDelta,
              jsEvent: ev.origEvent,
              view: initialView
            }));
            initialContext.emitter.trigger('eventChange', eventChangeArg);
            // dropped in different calendar
          } else if (receivingContext) {
            let eventRemoveArg = {
              event: eventApi,
              relatedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.w)(relevantEvents, initialContext, eventInstance),
              revert() {
                initialContext.dispatch({
                  type: 'MERGE_EVENTS',
                  eventStore: relevantEvents
                });
              }
            };
            initialContext.emitter.trigger('eventLeave', Object.assign(Object.assign({}, eventRemoveArg), {
              draggedEl: ev.subjectEl,
              view: initialView
            }));
            initialContext.dispatch({
              type: 'REMOVE_EVENTS',
              eventStore: relevantEvents
            });
            initialContext.emitter.trigger('eventRemove', eventRemoveArg);
            let addedEventDef = mutatedRelevantEvents.defs[eventDef.defId];
            let addedEventInstance = mutatedRelevantEvents.instances[eventInstance.instanceId];
            let addedEventApi = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a0(receivingContext, addedEventDef, addedEventInstance);
            receivingContext.dispatch({
              type: 'MERGE_EVENTS',
              eventStore: mutatedRelevantEvents
            });
            let eventAddArg = {
              event: addedEventApi,
              relatedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.w)(mutatedRelevantEvents, receivingContext, addedEventInstance),
              revert() {
                receivingContext.dispatch({
                  type: 'REMOVE_EVENTS',
                  eventStore: mutatedRelevantEvents
                });
              }
            };
            receivingContext.emitter.trigger('eventAdd', eventAddArg);
            if (ev.isTouch) {
              receivingContext.dispatch({
                type: 'SELECT_EVENT',
                eventInstanceId: eventInstance.instanceId
              });
            }
            receivingContext.emitter.trigger('drop', Object.assign(Object.assign({}, buildDatePointApiWithContext(finalHit.dateSpan, receivingContext)), {
              draggedEl: ev.subjectEl,
              jsEvent: ev.origEvent,
              view: finalHit.context.viewApi
            }));
            receivingContext.emitter.trigger('eventReceive', Object.assign(Object.assign({}, eventAddArg), {
              draggedEl: ev.subjectEl,
              view: finalHit.context.viewApi
            }));
          }
        } else {
          initialContext.emitter.trigger('_noEventDrop');
        }
      }
      this.cleanup();
    };
    let {
      component
    } = this;
    let {
      options
    } = component.context;
    let dragging = this.dragging = new FeaturefulElementDragging(settings.el);
    dragging.pointer.selector = EventDragging.SELECTOR;
    dragging.touchScrollAllowed = false;
    dragging.autoScroller.isEnabled = options.dragScroll;
    let hitDragging = this.hitDragging = new HitDragging(this.dragging, _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a7);
    hitDragging.useSubjectCenter = settings.useEventCenter;
    hitDragging.emitter.on('pointerdown', this.handlePointerDown);
    hitDragging.emitter.on('dragstart', this.handleDragStart);
    hitDragging.emitter.on('hitupdate', this.handleHitUpdate);
    hitDragging.emitter.on('pointerup', this.handlePointerUp);
    hitDragging.emitter.on('dragend', this.handleDragEnd);
  }
  destroy() {
    this.dragging.destroy();
  }
  // render a drag state on the next receivingCalendar
  displayDrag(nextContext, state) {
    let initialContext = this.component.context;
    let prevContext = this.receivingContext;
    // does the previous calendar need to be cleared?
    if (prevContext && prevContext !== nextContext) {
      // does the initial calendar need to be cleared?
      // if so, don't clear all the way. we still need to to hide the affectedEvents
      if (prevContext === initialContext) {
        prevContext.dispatch({
          type: 'SET_EVENT_DRAG',
          state: {
            affectedEvents: state.affectedEvents,
            mutatedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.I)(),
            isEvent: true
          }
        });
        // completely clear the old calendar if it wasn't the initial
      } else {
        prevContext.dispatch({
          type: 'UNSET_EVENT_DRAG'
        });
      }
    }
    if (nextContext) {
      nextContext.dispatch({
        type: 'SET_EVENT_DRAG',
        state
      });
    }
  }
  clearDrag() {
    let initialCalendar = this.component.context;
    let {
      receivingContext
    } = this;
    if (receivingContext) {
      receivingContext.dispatch({
        type: 'UNSET_EVENT_DRAG'
      });
    }
    // the initial calendar might have an dummy drag state from displayDrag
    if (initialCalendar !== receivingContext) {
      initialCalendar.dispatch({
        type: 'UNSET_EVENT_DRAG'
      });
    }
  }
  cleanup() {
    this.subjectSeg = null;
    this.isDragging = false;
    this.eventRange = null;
    this.relevantEvents = null;
    this.receivingContext = null;
    this.validMutation = null;
    this.mutatedRelevantEvents = null;
  }
}
// TODO: test this in IE11
// QUESTION: why do we need it on the resizable???
EventDragging.SELECTOR = '.fc-event-draggable, .fc-event-resizable';
function computeEventMutation(hit0, hit1, eventInstanceStart, massagers) {
  let dateSpan0 = hit0.dateSpan;
  let dateSpan1 = hit1.dateSpan;
  let date0 = dateSpan0.range.start;
  let date1 = dateSpan1.range.start;
  let standardProps = {};
  if (dateSpan0.allDay !== dateSpan1.allDay) {
    standardProps.allDay = dateSpan1.allDay;
    standardProps.hasEnd = hit1.context.options.allDayMaintainDuration;
    if (dateSpan1.allDay) {
      // means date1 is already start-of-day,
      // but date0 needs to be converted
      date0 = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.q)(eventInstanceStart);
    } else {
      // Moving from allDate->timed
      // Doesn't matter where on the event the drag began, mutate the event's start-date to date1
      date0 = eventInstanceStart;
    }
  }
  let delta = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aA)(date0, date1, hit0.context.dateEnv, hit0.componentId === hit1.componentId ? hit0.largeUnit : null);
  if (delta.milliseconds) {
    // has hours/minutes/seconds
    standardProps.allDay = false;
  }
  let mutation = {
    datesDelta: delta,
    standardProps
  };
  for (let massager of massagers) {
    massager(mutation, hit0, hit1);
  }
  return mutation;
}
function getComponentTouchDelay(component) {
  let {
    options
  } = component.context;
  let delay = options.eventLongPressDelay;
  if (delay == null) {
    delay = options.longPressDelay;
  }
  return delay;
}
class EventResizing extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.Z {
  constructor(settings) {
    super(settings);
    // internal state
    this.draggingSegEl = null;
    this.draggingSeg = null; // TODO: rename to resizingSeg? subjectSeg?
    this.eventRange = null;
    this.relevantEvents = null;
    this.validMutation = null;
    this.mutatedRelevantEvents = null;
    this.handlePointerDown = ev => {
      let {
        component
      } = this;
      let segEl = this.querySegEl(ev);
      let seg = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__._)(segEl);
      let eventRange = this.eventRange = seg.eventRange;
      this.dragging.minDistance = component.context.options.eventDragMinDistance;
      // if touch, need to be working with a selected event
      this.dragging.setIgnoreMove(!this.component.isValidSegDownEl(ev.origEvent.target) || ev.isTouch && this.component.props.eventSelection !== eventRange.instance.instanceId);
    };
    this.handleDragStart = ev => {
      let {
        context
      } = this.component;
      let eventRange = this.eventRange;
      this.relevantEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aV)(context.getCurrentData().eventStore, this.eventRange.instance.instanceId);
      let segEl = this.querySegEl(ev);
      this.draggingSegEl = segEl;
      this.draggingSeg = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__._)(segEl);
      context.calendarApi.unselect();
      context.emitter.trigger('eventResizeStart', {
        el: segEl,
        event: new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a0(context, eventRange.def, eventRange.instance),
        jsEvent: ev.origEvent,
        view: context.viewApi
      });
    };
    this.handleHitUpdate = (hit, isFinal, ev) => {
      let {
        context
      } = this.component;
      let relevantEvents = this.relevantEvents;
      let initialHit = this.hitDragging.initialHit;
      let eventInstance = this.eventRange.instance;
      let mutation = null;
      let mutatedRelevantEvents = null;
      let isInvalid = false;
      let interaction = {
        affectedEvents: relevantEvents,
        mutatedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.I)(),
        isEvent: true
      };
      if (hit) {
        let disallowed = hit.componentId === initialHit.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(initialHit, hit);
        if (!disallowed) {
          mutation = computeMutation(initialHit, hit, ev.subjectEl.classList.contains('fc-event-resizer-start'), eventInstance.range);
        }
      }
      if (mutation) {
        mutatedRelevantEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bX)(relevantEvents, context.getCurrentData().eventUiBases, mutation, context);
        interaction.mutatedEvents = mutatedRelevantEvents;
        if (!(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bZ)(interaction, hit.dateProfile, context)) {
          isInvalid = true;
          mutation = null;
          mutatedRelevantEvents = null;
          interaction.mutatedEvents = null;
        }
      }
      if (mutatedRelevantEvents) {
        context.dispatch({
          type: 'SET_EVENT_RESIZE',
          state: interaction
        });
      } else {
        context.dispatch({
          type: 'UNSET_EVENT_RESIZE'
        });
      }
      if (!isInvalid) {
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aw)();
      } else {
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ax)();
      }
      if (!isFinal) {
        if (mutation && isHitsEqual(initialHit, hit)) {
          mutation = null;
        }
        this.validMutation = mutation;
        this.mutatedRelevantEvents = mutatedRelevantEvents;
      }
    };
    this.handleDragEnd = ev => {
      let {
        context
      } = this.component;
      let eventDef = this.eventRange.def;
      let eventInstance = this.eventRange.instance;
      let eventApi = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a0(context, eventDef, eventInstance);
      let relevantEvents = this.relevantEvents;
      let mutatedRelevantEvents = this.mutatedRelevantEvents;
      context.emitter.trigger('eventResizeStop', {
        el: this.draggingSegEl,
        event: eventApi,
        jsEvent: ev.origEvent,
        view: context.viewApi
      });
      if (this.validMutation) {
        let updatedEventApi = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a0(context, mutatedRelevantEvents.defs[eventDef.defId], eventInstance ? mutatedRelevantEvents.instances[eventInstance.instanceId] : null);
        context.dispatch({
          type: 'MERGE_EVENTS',
          eventStore: mutatedRelevantEvents
        });
        let eventChangeArg = {
          oldEvent: eventApi,
          event: updatedEventApi,
          relatedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.w)(mutatedRelevantEvents, context, eventInstance),
          revert() {
            context.dispatch({
              type: 'MERGE_EVENTS',
              eventStore: relevantEvents // the pre-change events
            });
          }
        };
        context.emitter.trigger('eventResize', Object.assign(Object.assign({}, eventChangeArg), {
          el: this.draggingSegEl,
          startDelta: this.validMutation.startDelta || (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.d)(0),
          endDelta: this.validMutation.endDelta || (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.d)(0),
          jsEvent: ev.origEvent,
          view: context.viewApi
        }));
        context.emitter.trigger('eventChange', eventChangeArg);
      } else {
        context.emitter.trigger('_noEventResize');
      }
      // reset all internal state
      this.draggingSeg = null;
      this.relevantEvents = null;
      this.validMutation = null;
      // okay to keep eventInstance around. useful to set it in handlePointerDown
    };
    let {
      component
    } = settings;
    let dragging = this.dragging = new FeaturefulElementDragging(settings.el);
    dragging.pointer.selector = '.fc-event-resizer';
    dragging.touchScrollAllowed = false;
    dragging.autoScroller.isEnabled = component.context.options.dragScroll;
    let hitDragging = this.hitDragging = new HitDragging(this.dragging, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bG)(settings));
    hitDragging.emitter.on('pointerdown', this.handlePointerDown);
    hitDragging.emitter.on('dragstart', this.handleDragStart);
    hitDragging.emitter.on('hitupdate', this.handleHitUpdate);
    hitDragging.emitter.on('dragend', this.handleDragEnd);
  }
  destroy() {
    this.dragging.destroy();
  }
  querySegEl(ev) {
    return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.$)(ev.subjectEl, '.fc-event');
  }
}
function computeMutation(hit0, hit1, isFromStart, instanceRange) {
  let dateEnv = hit0.context.dateEnv;
  let date0 = hit0.dateSpan.range.start;
  let date1 = hit1.dateSpan.range.start;
  let delta = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aA)(date0, date1, dateEnv, hit0.largeUnit);
  if (isFromStart) {
    if (dateEnv.add(instanceRange.start, delta) < instanceRange.end) {
      return {
        startDelta: delta
      };
    }
  } else if (dateEnv.add(instanceRange.end, delta) > instanceRange.start) {
    return {
      endDelta: delta
    };
  }
  return null;
}
class UnselectAuto {
  constructor(context) {
    this.context = context;
    this.isRecentPointerDateSelect = false; // wish we could use a selector to detect date selection, but uses hit system
    this.matchesCancel = false;
    this.matchesEvent = false;
    this.onSelect = selectInfo => {
      if (selectInfo.jsEvent) {
        this.isRecentPointerDateSelect = true;
      }
    };
    this.onDocumentPointerDown = pev => {
      let unselectCancel = this.context.options.unselectCancel;
      let downEl = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aR)(pev.origEvent);
      this.matchesCancel = !!(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.$)(downEl, unselectCancel);
      this.matchesEvent = !!(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.$)(downEl, EventDragging.SELECTOR); // interaction started on an event?
    };
    this.onDocumentPointerUp = pev => {
      let {
        context
      } = this;
      let {
        documentPointer
      } = this;
      let calendarState = context.getCurrentData();
      // touch-scrolling should never unfocus any type of selection
      if (!documentPointer.wasTouchScroll) {
        if (calendarState.dateSelection &&
        // an existing date selection?
        !this.isRecentPointerDateSelect // a new pointer-initiated date selection since last onDocumentPointerUp?
        ) {
          let unselectAuto = context.options.unselectAuto;
          if (unselectAuto && (!unselectAuto || !this.matchesCancel)) {
            context.calendarApi.unselect(pev);
          }
        }
        if (calendarState.eventSelection &&
        // an existing event selected?
        !this.matchesEvent // interaction DIDN'T start on an event
        ) {
          context.dispatch({
            type: 'UNSELECT_EVENT'
          });
        }
      }
      this.isRecentPointerDateSelect = false;
    };
    let documentPointer = this.documentPointer = new PointerDragging(document);
    documentPointer.shouldIgnoreMove = true;
    documentPointer.shouldWatchScroll = false;
    documentPointer.emitter.on('pointerdown', this.onDocumentPointerDown);
    documentPointer.emitter.on('pointerup', this.onDocumentPointerUp);
    /*
    TODO: better way to know about whether there was a selection with the pointer
    */
    context.emitter.on('select', this.onSelect);
  }
  destroy() {
    this.context.emitter.off('select', this.onSelect);
    this.documentPointer.destroy();
  }
}
const OPTION_REFINERS = {
  fixedMirrorParent: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n
};
const LISTENER_REFINERS = {
  dateClick: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n,
  eventDragStart: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n,
  eventDragStop: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n,
  eventDrop: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n,
  eventResizeStart: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n,
  eventResizeStop: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n,
  eventResize: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n,
  drop: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n,
  eventReceive: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n,
  eventLeave: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n
};

/*
Given an already instantiated draggable object for one-or-more elements,
Interprets any dragging as an attempt to drag an events that lives outside
of a calendar onto a calendar.
*/
class ExternalElementDragging {
  constructor(dragging, suppliedDragMeta) {
    this.receivingContext = null;
    this.droppableEvent = null; // will exist for all drags, even if create:false
    this.suppliedDragMeta = null;
    this.dragMeta = null;
    this.handleDragStart = ev => {
      this.dragMeta = this.buildDragMeta(ev.subjectEl);
    };
    this.handleHitUpdate = (hit, isFinal, ev) => {
      let {
        dragging
      } = this.hitDragging;
      let receivingContext = null;
      let droppableEvent = null;
      let isInvalid = false;
      let interaction = {
        affectedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.I)(),
        mutatedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.I)(),
        isEvent: this.dragMeta.create
      };
      if (hit) {
        receivingContext = hit.context;
        if (this.canDropElOnCalendar(ev.subjectEl, receivingContext)) {
          droppableEvent = computeEventForDateSpan(hit.dateSpan, this.dragMeta, receivingContext);
          interaction.mutatedEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aW)(droppableEvent);
          isInvalid = !(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bZ)(interaction, hit.dateProfile, receivingContext);
          if (isInvalid) {
            interaction.mutatedEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.I)();
            droppableEvent = null;
          }
        }
      }
      this.displayDrag(receivingContext, interaction);
      // show mirror if no already-rendered mirror element OR if we are shutting down the mirror (?)
      // TODO: wish we could somehow wait for dispatch to guarantee render
      dragging.setMirrorIsVisible(isFinal || !droppableEvent || !document.querySelector('.fc-event-mirror'));
      if (!isInvalid) {
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aw)();
      } else {
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ax)();
      }
      if (!isFinal) {
        dragging.setMirrorNeedsRevert(!droppableEvent);
        this.receivingContext = receivingContext;
        this.droppableEvent = droppableEvent;
      }
    };
    this.handleDragEnd = pev => {
      let {
        receivingContext,
        droppableEvent
      } = this;
      this.clearDrag();
      if (receivingContext && droppableEvent) {
        let finalHit = this.hitDragging.finalHit;
        let finalView = finalHit.context.viewApi;
        let dragMeta = this.dragMeta;
        receivingContext.emitter.trigger('drop', Object.assign(Object.assign({}, buildDatePointApiWithContext(finalHit.dateSpan, receivingContext)), {
          draggedEl: pev.subjectEl,
          jsEvent: pev.origEvent,
          view: finalView
        }));
        if (dragMeta.create) {
          let addingEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aW)(droppableEvent);
          receivingContext.dispatch({
            type: 'MERGE_EVENTS',
            eventStore: addingEvents
          });
          if (pev.isTouch) {
            receivingContext.dispatch({
              type: 'SELECT_EVENT',
              eventInstanceId: droppableEvent.instance.instanceId
            });
          }
          // signal that an external event landed
          receivingContext.emitter.trigger('eventReceive', {
            event: new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a0(receivingContext, droppableEvent.def, droppableEvent.instance),
            relatedEvents: [],
            revert() {
              receivingContext.dispatch({
                type: 'REMOVE_EVENTS',
                eventStore: addingEvents
              });
            },
            draggedEl: pev.subjectEl,
            view: finalView
          });
        }
      }
      this.receivingContext = null;
      this.droppableEvent = null;
    };
    let hitDragging = this.hitDragging = new HitDragging(dragging, _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a7);
    hitDragging.requireInitial = false; // will start outside of a component
    hitDragging.emitter.on('dragstart', this.handleDragStart);
    hitDragging.emitter.on('hitupdate', this.handleHitUpdate);
    hitDragging.emitter.on('dragend', this.handleDragEnd);
    this.suppliedDragMeta = suppliedDragMeta;
  }
  buildDragMeta(subjectEl) {
    if (typeof this.suppliedDragMeta === 'object') {
      return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bJ)(this.suppliedDragMeta);
    }
    if (typeof this.suppliedDragMeta === 'function') {
      return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bJ)(this.suppliedDragMeta(subjectEl));
    }
    return getDragMetaFromEl(subjectEl);
  }
  displayDrag(nextContext, state) {
    let prevContext = this.receivingContext;
    if (prevContext && prevContext !== nextContext) {
      prevContext.dispatch({
        type: 'UNSET_EVENT_DRAG'
      });
    }
    if (nextContext) {
      nextContext.dispatch({
        type: 'SET_EVENT_DRAG',
        state
      });
    }
  }
  clearDrag() {
    if (this.receivingContext) {
      this.receivingContext.dispatch({
        type: 'UNSET_EVENT_DRAG'
      });
    }
  }
  canDropElOnCalendar(el, receivingContext) {
    let dropAccept = receivingContext.options.dropAccept;
    if (typeof dropAccept === 'function') {
      return dropAccept.call(receivingContext.calendarApi, el);
    }
    if (typeof dropAccept === 'string' && dropAccept) {
      return Boolean((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aQ)(el, dropAccept));
    }
    return true;
  }
}
// Utils for computing event store from the DragMeta
// ----------------------------------------------------------------------------------------------------
function computeEventForDateSpan(dateSpan, dragMeta, context) {
  let defProps = Object.assign({}, dragMeta.leftoverProps);
  for (let transform of context.pluginHooks.externalDefTransforms) {
    Object.assign(defProps, transform(dateSpan, dragMeta));
  }
  let {
    refined,
    extra
  } = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.al)(defProps, context);
  let def = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ak)(refined, extra, dragMeta.sourceId, dateSpan.allDay, context.options.forceEventDuration || Boolean(dragMeta.duration),
  // hasEnd
  context);
  let start = dateSpan.range.start;
  // only rely on time info if drop zone is all-day,
  // otherwise, we already know the time
  if (dateSpan.allDay && dragMeta.startTime) {
    start = context.dateEnv.add(start, dragMeta.startTime);
  }
  let end = dragMeta.duration ? context.dateEnv.add(start, dragMeta.duration) : (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cv)(dateSpan.allDay, start, context);
  let instance = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aj)(def.defId, {
    start,
    end
  });
  return {
    def,
    instance
  };
}
// Utils for extracting data from element
// ----------------------------------------------------------------------------------------------------
function getDragMetaFromEl(el) {
  let str = getEmbeddedElData(el, 'event');
  let obj = str ? JSON.parse(str) : {
    create: false
  }; // if no embedded data, assume no event creation
  return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bJ)(obj);
}
_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bI.dataAttrPrefix = '';
function getEmbeddedElData(el, name) {
  let prefix = _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bI.dataAttrPrefix;
  let prefixedName = (prefix ? prefix + '-' : '') + name;
  return el.getAttribute('data-' + prefixedName) || '';
}

/*
Makes an element (that is *external* to any calendar) draggable.
Can pass in data that determines how an event will be created when dropped onto a calendar.
Leverages FullCalendar's internal drag-n-drop functionality WITHOUT a third-party drag system.
*/
class ExternalDraggable {
  constructor(el, settings = {}) {
    this.handlePointerDown = ev => {
      let {
        dragging
      } = this;
      let {
        minDistance,
        longPressDelay
      } = this.settings;
      dragging.minDistance = minDistance != null ? minDistance : ev.isTouch ? 0 : _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.e.eventDragMinDistance;
      dragging.delay = ev.isTouch ?
      // TODO: eventually read eventLongPressDelay instead vvv
      longPressDelay != null ? longPressDelay : _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.e.longPressDelay : 0;
    };
    this.handleDragStart = ev => {
      if (ev.isTouch && this.dragging.delay && ev.subjectEl.classList.contains('fc-event')) {
        this.dragging.mirror.getMirrorEl().classList.add('fc-event-selected');
      }
    };
    this.settings = settings;
    let dragging = this.dragging = new FeaturefulElementDragging(el);
    dragging.touchScrollAllowed = false;
    if (settings.itemSelector != null) {
      dragging.pointer.selector = settings.itemSelector;
    }
    if (settings.appendTo != null) {
      dragging.mirror.parentNode = settings.appendTo; // TODO: write tests
    }
    dragging.emitter.on('pointerdown', this.handlePointerDown);
    dragging.emitter.on('dragstart', this.handleDragStart);
    new ExternalElementDragging(dragging, settings.eventData); // eslint-disable-line no-new
  }
  destroy() {
    this.dragging.destroy();
  }
}

/*
Detects when a *THIRD-PARTY* drag-n-drop system interacts with elements.
The third-party system is responsible for drawing the visuals effects of the drag.
This class simply monitors for pointer movements and fires events.
It also has the ability to hide the moving element (the "mirror") during the drag.
*/
class InferredElementDragging extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bH {
  constructor(containerEl) {
    super(containerEl);
    this.shouldIgnoreMove = false;
    this.mirrorSelector = '';
    this.currentMirrorEl = null;
    this.handlePointerDown = ev => {
      this.emitter.trigger('pointerdown', ev);
      if (!this.shouldIgnoreMove) {
        // fire dragstart right away. does not support delay or min-distance
        this.emitter.trigger('dragstart', ev);
      }
    };
    this.handlePointerMove = ev => {
      if (!this.shouldIgnoreMove) {
        this.emitter.trigger('dragmove', ev);
      }
    };
    this.handlePointerUp = ev => {
      this.emitter.trigger('pointerup', ev);
      if (!this.shouldIgnoreMove) {
        // fire dragend right away. does not support a revert animation
        this.emitter.trigger('dragend', ev);
      }
    };
    let pointer = this.pointer = new PointerDragging(containerEl);
    pointer.emitter.on('pointerdown', this.handlePointerDown);
    pointer.emitter.on('pointermove', this.handlePointerMove);
    pointer.emitter.on('pointerup', this.handlePointerUp);
  }
  destroy() {
    this.pointer.destroy();
  }
  setIgnoreMove(bool) {
    this.shouldIgnoreMove = bool;
  }
  setMirrorIsVisible(bool) {
    if (bool) {
      // restore a previously hidden element.
      // use the reference in case the selector class has already been removed.
      if (this.currentMirrorEl) {
        this.currentMirrorEl.style.visibility = '';
        this.currentMirrorEl = null;
      }
    } else {
      let mirrorEl = this.mirrorSelector
      // TODO: somehow query FullCalendars WITHIN shadow-roots
      ? document.querySelector(this.mirrorSelector) : null;
      if (mirrorEl) {
        this.currentMirrorEl = mirrorEl;
        mirrorEl.style.visibility = 'hidden';
      }
    }
  }
}

/*
Bridges third-party drag-n-drop systems with FullCalendar.
Must be instantiated and destroyed by caller.
*/
class ThirdPartyDraggable {
  constructor(containerOrSettings, settings) {
    let containerEl = document;
    if (
    // wish we could just test instanceof EventTarget, but doesn't work in IE11
    containerOrSettings === document || containerOrSettings instanceof Element) {
      containerEl = containerOrSettings;
      settings = settings || {};
    } else {
      settings = containerOrSettings || {};
    }
    let dragging = this.dragging = new InferredElementDragging(containerEl);
    if (typeof settings.itemSelector === 'string') {
      dragging.pointer.selector = settings.itemSelector;
    } else if (containerEl === document) {
      dragging.pointer.selector = '[data-event]';
    }
    if (typeof settings.mirrorSelector === 'string') {
      dragging.mirrorSelector = settings.mirrorSelector;
    }
    let externalDragging = new ExternalElementDragging(dragging, settings.eventData);
    // The hit-detection system requires that the dnd-mirror-element be pointer-events:none,
    // but this can't be guaranteed for third-party draggables, so disable
    externalDragging.hitDragging.disablePointCheck = true;
  }
  destroy() {
    this.dragging.destroy();
  }
}
var index = (0,_fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_1__.createPlugin)({
  name: '@fullcalendar/interaction',
  componentInteractions: [DateClicking, DateSelecting, EventDragging, EventResizing],
  calendarInteractions: [UnselectAuto],
  elementDraggingImpl: FeaturefulElementDragging,
  optionRefiners: OPTION_REFINERS,
  listenerRefiners: LISTENER_REFINERS
});


/***/ }),

/***/ 64342:
/*!**************************************************!*\
  !*** ./node_modules/@fullcalendar/list/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/core/index.js */ 46633);
/* harmony import */ var _internal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal.js */ 42393);
/* harmony import */ var _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core/internal.js */ 3436);




const OPTION_REFINERS = {
  listDayFormat: createFalsableFormatter,
  listDaySideFormat: createFalsableFormatter,
  noEventsClassNames: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n,
  noEventsContent: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n,
  noEventsDidMount: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n,
  noEventsWillUnmount: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n
  // noEventsText is defined in base options
};
function createFalsableFormatter(input) {
  return input === false ? null : (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.x)(input);
}
var index = (0,_fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_1__.createPlugin)({
  name: '@fullcalendar/list',
  optionRefiners: OPTION_REFINERS,
  views: {
    list: {
      component: _internal_js__WEBPACK_IMPORTED_MODULE_2__.ListView,
      buttonTextKey: 'list',
      listDayFormat: {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      } // like "January 1, 2016"
    },
    listDay: {
      type: 'list',
      duration: {
        days: 1
      },
      listDayFormat: {
        weekday: 'long'
      } // day-of-week is all we need. full date is probably in headerToolbar
    },
    listWeek: {
      type: 'list',
      duration: {
        weeks: 1
      },
      listDayFormat: {
        weekday: 'long'
      },
      listDaySideFormat: {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }
    },
    listMonth: {
      type: 'list',
      duration: {
        month: 1
      },
      listDaySideFormat: {
        weekday: 'long'
      } // day-of-week is nice-to-have
    },
    listYear: {
      type: 'list',
      duration: {
        year: 1
      },
      listDaySideFormat: {
        weekday: 'long'
      } // day-of-week is nice-to-have
    }
  }
});


/***/ }),

/***/ 42393:
/*!*****************************************************!*\
  !*** ./node_modules/@fullcalendar/list/internal.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListView: () => (/* binding */ ListView)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core/internal.js */ 3436);
/* harmony import */ var _fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/core/preact.js */ 78048);


class ListViewHeaderRow extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
  constructor() {
    super(...arguments);
    this.state = {
      textId: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a5)()
    };
  }
  render() {
    let {
      theme,
      dateEnv,
      options,
      viewApi
    } = this.context;
    let {
      cellId,
      dayDate,
      todayRange
    } = this.props;
    let {
      textId
    } = this.state;
    let dayMeta = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a_)(dayDate, todayRange);
    // will ever be falsy?
    let text = options.listDayFormat ? dateEnv.format(dayDate, options.listDayFormat) : '';
    // will ever be falsy? also, BAD NAME "alt"
    let sideText = options.listDaySideFormat ? dateEnv.format(dayDate, options.listDaySideFormat) : '';
    let renderProps = Object.assign({
      date: dateEnv.toDate(dayDate),
      view: viewApi,
      textId,
      text,
      sideText,
      navLinkAttrs: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b0)(this.context, dayDate),
      sideNavLinkAttrs: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b0)(this.context, dayDate, 'day', false)
    }, dayMeta);
    // TODO: make a reusable HOC for dayHeader (used in daygrid/timegrid too)
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.C, {
      elTag: "tr",
      elClasses: ['fc-list-day', ...(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aZ)(dayMeta, theme)],
      elAttrs: {
        'data-date': (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bv)(dayDate)
      },
      renderProps: renderProps,
      generatorName: "dayHeaderContent",
      customGenerator: options.dayHeaderContent,
      defaultGenerator: renderInnerContent,
      classNameGenerator: options.dayHeaderClassNames,
      didMount: options.dayHeaderDidMount,
      willUnmount: options.dayHeaderWillUnmount
    }, InnerContent =>
    // TODO: force-hide top border based on :first-child
    (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", {
      scope: "colgroup",
      colSpan: 3,
      id: cellId,
      "aria-labelledby": textId
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, {
      elTag: "div",
      elClasses: ['fc-list-day-cushion', theme.getClass('tableCellShaded')]
    })));
  }
}
function renderInnerContent(props) {
  return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, props.text && (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", Object.assign({
    id: props.textId,
    className: "fc-list-day-text"
  }, props.navLinkAttrs), props.text), props.sideText && ( /* not keyboard tabbable */(0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", Object.assign({
    "aria-hidden": true,
    className: "fc-list-day-side-text"
  }, props.sideNavLinkAttrs), props.sideText)));
}
const DEFAULT_TIME_FORMAT = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.x)({
  hour: 'numeric',
  minute: '2-digit',
  meridiem: 'short'
});
class ListViewEventRow extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
  render() {
    let {
      props,
      context
    } = this;
    let {
      options
    } = context;
    let {
      seg,
      timeHeaderId,
      eventHeaderId,
      dateHeaderId
    } = props;
    let timeFormat = options.eventTimeFormat || DEFAULT_TIME_FORMAT;
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cn, Object.assign({}, props, {
      elTag: "tr",
      elClasses: ['fc-list-event', seg.eventRange.def.url && 'fc-event-forced-url'],
      defaultGenerator: () => renderEventInnerContent(seg, context) /* weird */,
      seg: seg,
      timeText: "",
      disableDragging: true,
      disableResizing: true
    }), (InnerContent, eventContentArg) => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, buildTimeContent(seg, timeFormat, context, timeHeaderId, dateHeaderId), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", {
      "aria-hidden": true,
      className: "fc-list-event-graphic"
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
      className: "fc-list-event-dot",
      style: {
        borderColor: eventContentArg.borderColor || eventContentArg.backgroundColor
      }
    })), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, {
      elTag: "td",
      elClasses: ['fc-list-event-title'],
      elAttrs: {
        headers: `${eventHeaderId} ${dateHeaderId}`
      }
    })));
  }
}
function renderEventInnerContent(seg, context) {
  let interactiveAttrs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bU)(seg, context);
  return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", Object.assign({}, interactiveAttrs), seg.eventRange.def.title);
}
function buildTimeContent(seg, timeFormat, context, timeHeaderId, dateHeaderId) {
  let {
    options
  } = context;
  if (options.displayEventTime !== false) {
    let eventDef = seg.eventRange.def;
    let eventInstance = seg.eventRange.instance;
    let doAllDay = false;
    let timeText;
    if (eventDef.allDay) {
      doAllDay = true;
    } else if ((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.az)(seg.eventRange.range)) {
      // TODO: use (!isStart || !isEnd) instead?
      if (seg.isStart) {
        timeText = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bQ)(seg, timeFormat, context, null, null, eventInstance.range.start, seg.end);
      } else if (seg.isEnd) {
        timeText = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bQ)(seg, timeFormat, context, null, null, seg.start, eventInstance.range.end);
      } else {
        doAllDay = true;
      }
    } else {
      timeText = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bQ)(seg, timeFormat, context);
    }
    if (doAllDay) {
      let renderProps = {
        text: context.options.allDayText,
        view: context.viewApi
      };
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.C, {
        elTag: "td",
        elClasses: ['fc-list-event-time'],
        elAttrs: {
          headers: `${timeHeaderId} ${dateHeaderId}`
        },
        renderProps: renderProps,
        generatorName: "allDayContent",
        customGenerator: options.allDayContent,
        defaultGenerator: renderAllDayInner,
        classNameGenerator: options.allDayClassNames,
        didMount: options.allDayDidMount,
        willUnmount: options.allDayWillUnmount
      });
    }
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", {
      className: "fc-list-event-time"
    }, timeText);
  }
  return null;
}
function renderAllDayInner(renderProps) {
  return renderProps.text;
}

/*
Responsible for the scroller, and forwarding event-related actions into the "grid".
*/
class ListView extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.be {
  constructor() {
    super(...arguments);
    this.computeDateVars = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(computeDateVars);
    this.eventStoreToSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(this._eventStoreToSegs);
    this.state = {
      timeHeaderId: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a5)(),
      eventHeaderId: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a5)(),
      dateHeaderIdRoot: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a5)()
    };
    this.setRootEl = rootEl => {
      if (rootEl) {
        this.context.registerInteractiveComponent(this, {
          el: rootEl
        });
      } else {
        this.context.unregisterInteractiveComponent(this);
      }
    };
  }
  render() {
    let {
      props,
      context
    } = this;
    let {
      dayDates,
      dayRanges
    } = this.computeDateVars(props.dateProfile);
    let eventSegs = this.eventStoreToSegs(props.eventStore, props.eventUiBases, dayRanges);
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ct, {
      elRef: this.setRootEl,
      elClasses: ['fc-list', context.theme.getClass('table'), context.options.stickyHeaderDates !== false ? 'fc-list-sticky' : ''],
      viewSpec: context.viewSpec
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cd, {
      liquid: !props.isHeightAuto,
      overflowX: props.isHeightAuto ? 'visible' : 'hidden',
      overflowY: props.isHeightAuto ? 'visible' : 'auto'
    }, eventSegs.length > 0 ? this.renderSegList(eventSegs, dayDates) : this.renderEmptyMessage()));
  }
  renderEmptyMessage() {
    let {
      options,
      viewApi
    } = this.context;
    let renderProps = {
      text: options.noEventsText,
      view: viewApi
    };
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.C, {
      elTag: "div",
      elClasses: ['fc-list-empty'],
      renderProps: renderProps,
      generatorName: "noEventsContent",
      customGenerator: options.noEventsContent,
      defaultGenerator: renderNoEventsInner,
      classNameGenerator: options.noEventsClassNames,
      didMount: options.noEventsDidMount,
      willUnmount: options.noEventsWillUnmount
    }, InnerContent => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, {
      elTag: "div",
      elClasses: ['fc-list-empty-cushion']
    }));
  }
  renderSegList(allSegs, dayDates) {
    let {
      theme,
      options
    } = this.context;
    let {
      timeHeaderId,
      eventHeaderId,
      dateHeaderIdRoot
    } = this.state;
    let segsByDay = groupSegsByDay(allSegs); // sparse array
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ch, {
      unit: "day"
    }, (nowDate, todayRange) => {
      let innerNodes = [];
      for (let dayIndex = 0; dayIndex < segsByDay.length; dayIndex += 1) {
        let daySegs = segsByDay[dayIndex];
        if (daySegs) {
          // sparse array, so might be undefined
          let dayStr = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bv)(dayDates[dayIndex]);
          let dateHeaderId = dateHeaderIdRoot + '-' + dayStr;
          // append a day header
          innerNodes.push((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ListViewHeaderRow, {
            key: dayStr,
            cellId: dateHeaderId,
            dayDate: dayDates[dayIndex],
            todayRange: todayRange
          }));
          daySegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bR)(daySegs, options.eventOrder);
          for (let seg of daySegs) {
            innerNodes.push((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ListViewEventRow, Object.assign({
              key: dayStr + ':' + seg.eventRange.instance.instanceId /* are multiple segs for an instanceId */,
              seg: seg,
              isDragging: false,
              isResizing: false,
              isDateSelecting: false,
              isSelected: false,
              timeHeaderId: timeHeaderId,
              eventHeaderId: eventHeaderId,
              dateHeaderId: dateHeaderId
            }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bS)(seg, todayRange, nowDate))));
          }
        }
      }
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", {
        className: 'fc-list-table ' + theme.getClass('table')
      }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("thead", null, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", null, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", {
        scope: "col",
        id: timeHeaderId
      }, options.timeHint), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", {
        scope: "col",
        "aria-hidden": true
      }), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", {
        scope: "col",
        id: eventHeaderId
      }, options.eventHint))), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", null, innerNodes));
    });
  }
  _eventStoreToSegs(eventStore, eventUiBases, dayRanges) {
    return this.eventRangesToSegs((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.af)(eventStore, eventUiBases, this.props.dateProfile.activeRange, this.context.options.nextDayThreshold).fg, dayRanges);
  }
  eventRangesToSegs(eventRanges, dayRanges) {
    let segs = [];
    for (let eventRange of eventRanges) {
      segs.push(...this.eventRangeToSegs(eventRange, dayRanges));
    }
    return segs;
  }
  eventRangeToSegs(eventRange, dayRanges) {
    let {
      dateEnv
    } = this.context;
    let {
      nextDayThreshold
    } = this.context.options;
    let range = eventRange.range;
    let allDay = eventRange.def.allDay;
    let dayIndex;
    let segRange;
    let seg;
    let segs = [];
    for (dayIndex = 0; dayIndex < dayRanges.length; dayIndex += 1) {
      segRange = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.o)(range, dayRanges[dayIndex]);
      if (segRange) {
        seg = {
          component: this,
          eventRange,
          start: segRange.start,
          end: segRange.end,
          isStart: eventRange.isStart && segRange.start.valueOf() === range.start.valueOf(),
          isEnd: eventRange.isEnd && segRange.end.valueOf() === range.end.valueOf(),
          dayIndex
        };
        segs.push(seg);
        // detect when range won't go fully into the next day,
        // and mutate the latest seg to the be the end.
        if (!seg.isEnd && !allDay && dayIndex + 1 < dayRanges.length && range.end < dateEnv.add(dayRanges[dayIndex + 1].start, nextDayThreshold)) {
          seg.end = range.end;
          seg.isEnd = true;
          break;
        }
      }
    }
    return segs;
  }
}
function renderNoEventsInner(renderProps) {
  return renderProps.text;
}
function computeDateVars(dateProfile) {
  let dayStart = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.q)(dateProfile.renderRange.start);
  let viewEnd = dateProfile.renderRange.end;
  let dayDates = [];
  let dayRanges = [];
  while (dayStart < viewEnd) {
    dayDates.push(dayStart);
    dayRanges.push({
      start: dayStart,
      end: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.t)(dayStart, 1)
    });
    dayStart = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.t)(dayStart, 1);
  }
  return {
    dayDates,
    dayRanges
  };
}
// Returns a sparse array of arrays, segs grouped by their dayIndex
function groupSegsByDay(segs) {
  let segsByDay = []; // sparse array
  let i;
  let seg;
  for (i = 0; i < segs.length; i += 1) {
    seg = segs[i];
    (segsByDay[seg.dayIndex] || (segsByDay[seg.dayIndex] = [])).push(seg);
  }
  return segsByDay;
}
var css_248z = ":root{--fc-list-event-dot-width:10px;--fc-list-event-hover-bg-color:#f5f5f5}.fc-theme-standard .fc-list{border:1px solid var(--fc-border-color)}.fc .fc-list-empty{align-items:center;background-color:var(--fc-neutral-bg-color);display:flex;height:100%;justify-content:center}.fc .fc-list-empty-cushion{margin:5em 0}.fc .fc-list-table{border-style:hidden;width:100%}.fc .fc-list-table tr>*{border-left:0;border-right:0}.fc .fc-list-sticky .fc-list-day>*{background:var(--fc-page-bg-color);position:sticky;top:0}.fc .fc-list-table thead{left:-10000px;position:absolute}.fc .fc-list-table tbody>tr:first-child th{border-top:0}.fc .fc-list-table th{padding:0}.fc .fc-list-day-cushion,.fc .fc-list-table td{padding:8px 14px}.fc .fc-list-day-cushion:after{clear:both;content:\"\";display:table}.fc-theme-standard .fc-list-day-cushion{background-color:var(--fc-neutral-bg-color)}.fc-direction-ltr .fc-list-day-text,.fc-direction-rtl .fc-list-day-side-text{float:left}.fc-direction-ltr .fc-list-day-side-text,.fc-direction-rtl .fc-list-day-text{float:right}.fc-direction-ltr .fc-list-table .fc-list-event-graphic{padding-right:0}.fc-direction-rtl .fc-list-table .fc-list-event-graphic{padding-left:0}.fc .fc-list-event.fc-event-forced-url{cursor:pointer}.fc .fc-list-event:hover td{background-color:var(--fc-list-event-hover-bg-color)}.fc .fc-list-event-graphic,.fc .fc-list-event-time{white-space:nowrap;width:1px}.fc .fc-list-event-dot{border:calc(var(--fc-list-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-list-event-dot-width)/2);box-sizing:content-box;display:inline-block;height:0;width:0}.fc .fc-list-event-title a{color:inherit;text-decoration:none}.fc .fc-list-event.fc-event-forced-url:hover a{text-decoration:underline}";
(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cw)(css_248z);


/***/ }),

/***/ 76863:
/*!******************************************************!*\
  !*** ./node_modules/@fullcalendar/timegrid/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core/index.js */ 46633);
/* harmony import */ var _internal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal.js */ 60022);





const OPTION_REFINERS = {
  allDaySlot: Boolean
};
var index = (0,_fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_0__.createPlugin)({
  name: '@fullcalendar/timegrid',
  initialView: 'timeGridWeek',
  optionRefiners: OPTION_REFINERS,
  views: {
    timeGrid: {
      component: _internal_js__WEBPACK_IMPORTED_MODULE_1__.DayTimeColsView,
      usesMinMaxTime: true,
      allDaySlot: true,
      slotDuration: '00:30:00',
      slotEventOverlap: true // a bad name. confused with overlap/constraint system
    },
    timeGridDay: {
      type: 'timeGrid',
      duration: {
        days: 1
      }
    },
    timeGridWeek: {
      type: 'timeGrid',
      duration: {
        weeks: 1
      }
    }
  }
});


/***/ }),

/***/ 60022:
/*!*********************************************************!*\
  !*** ./node_modules/@fullcalendar/timegrid/internal.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayTimeCols: () => (/* binding */ DayTimeCols),
/* harmony export */   DayTimeColsSlicer: () => (/* binding */ DayTimeColsSlicer),
/* harmony export */   DayTimeColsView: () => (/* binding */ DayTimeColsView),
/* harmony export */   TimeCols: () => (/* binding */ TimeCols),
/* harmony export */   TimeColsSlatsCoords: () => (/* binding */ TimeColsSlatsCoords),
/* harmony export */   TimeColsView: () => (/* binding */ TimeColsView),
/* harmony export */   buildDayRanges: () => (/* binding */ buildDayRanges),
/* harmony export */   buildSlatMetas: () => (/* binding */ buildSlatMetas),
/* harmony export */   buildTimeColsModel: () => (/* binding */ buildTimeColsModel)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core/internal.js */ 3436);
/* harmony import */ var _fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/core/preact.js */ 78048);
/* harmony import */ var _fullcalendar_daygrid_internal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/daygrid/internal.js */ 78107);



class AllDaySplitter extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aY {
  getKeyInfo() {
    return {
      allDay: {},
      timed: {}
    };
  }
  getKeysForDateSpan(dateSpan) {
    if (dateSpan.allDay) {
      return ['allDay'];
    }
    return ['timed'];
  }
  getKeysForEventDef(eventDef) {
    if (!eventDef.allDay) {
      return ['timed'];
    }
    if ((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bP)(eventDef)) {
      return ['timed', 'allDay'];
    }
    return ['allDay'];
  }
}
const DEFAULT_SLAT_LABEL_FORMAT = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.x)({
  hour: 'numeric',
  minute: '2-digit',
  omitZeroMinute: true,
  meridiem: 'short'
});
function TimeColsAxisCell(props) {
  let classNames = ['fc-timegrid-slot', 'fc-timegrid-slot-label', props.isLabeled ? 'fc-scrollgrid-shrink' : 'fc-timegrid-slot-minor'];
  return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.V.Consumer, null, context => {
    if (!props.isLabeled) {
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", {
        className: classNames.join(' '),
        "data-time": props.isoTimeStr
      });
    }
    let {
      dateEnv,
      options,
      viewApi
    } = context;
    let labelFormat =
    // TODO: fully pre-parse
    options.slotLabelFormat == null ? DEFAULT_SLAT_LABEL_FORMAT : Array.isArray(options.slotLabelFormat) ? (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.x)(options.slotLabelFormat[0]) : (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.x)(options.slotLabelFormat);
    let renderProps = {
      level: 0,
      time: props.time,
      date: dateEnv.toDate(props.date),
      view: viewApi,
      text: dateEnv.format(props.date, labelFormat)
    };
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.C, {
      elTag: "td",
      elClasses: classNames,
      elAttrs: {
        'data-time': props.isoTimeStr
      },
      renderProps: renderProps,
      generatorName: "slotLabelContent",
      customGenerator: options.slotLabelContent,
      defaultGenerator: renderInnerContent,
      classNameGenerator: options.slotLabelClassNames,
      didMount: options.slotLabelDidMount,
      willUnmount: options.slotLabelWillUnmount
    }, InnerContent => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame"
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, {
      elTag: "div",
      elClasses: ['fc-timegrid-slot-label-cushion', 'fc-scrollgrid-shrink-cushion']
    })));
  });
}
function renderInnerContent(props) {
  return props.text;
}
class TimeBodyAxis extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
  render() {
    return this.props.slatMetas.map(slatMeta => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", {
      key: slatMeta.key
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColsAxisCell, Object.assign({}, slatMeta))));
  }
}
const DEFAULT_WEEK_NUM_FORMAT = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.x)({
  week: 'short'
});
const AUTO_ALL_DAY_MAX_EVENT_ROWS = 5;
class TimeColsView extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.be {
  constructor() {
    super(...arguments);
    this.allDaySplitter = new AllDaySplitter(); // for use by subclasses
    this.headerElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    this.rootElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    this.scrollerElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    this.state = {
      slatCoords: null
    };
    this.handleScrollTopRequest = scrollTop => {
      let scrollerEl = this.scrollerElRef.current;
      if (scrollerEl) {
        // TODO: not sure how this could ever be null. weirdness with the reducer
        scrollerEl.scrollTop = scrollTop;
      }
    };
    /* Header Render Methods
    ------------------------------------------------------------------------------------------------------------------*/
    this.renderHeadAxis = (rowKey, frameHeight = '') => {
      let {
        options
      } = this.context;
      let {
        dateProfile
      } = this.props;
      let range = dateProfile.renderRange;
      let dayCnt = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bl)(range.start, range.end);
      // only do in day views (to avoid doing in week views that dont need it)
      let navLinkAttrs = dayCnt === 1 ? (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b0)(this.context, range.start, 'week') : {};
      if (options.weekNumbers && rowKey === 'day') {
        return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cq, {
          elTag: "th",
          elClasses: ['fc-timegrid-axis', 'fc-scrollgrid-shrink'],
          elAttrs: {
            'aria-hidden': true
          },
          date: range.start,
          defaultFormat: DEFAULT_WEEK_NUM_FORMAT
        }, InnerContent => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: ['fc-timegrid-axis-frame', 'fc-scrollgrid-shrink-frame', 'fc-timegrid-axis-frame-liquid'].join(' '),
          style: {
            height: frameHeight
          }
        }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, {
          elTag: "a",
          elClasses: ['fc-timegrid-axis-cushion', 'fc-scrollgrid-shrink-cushion', 'fc-scrollgrid-sync-inner'],
          elAttrs: navLinkAttrs
        })));
      }
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", {
        "aria-hidden": true,
        className: "fc-timegrid-axis"
      }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
        className: "fc-timegrid-axis-frame",
        style: {
          height: frameHeight
        }
      }));
    };
    /* Table Component Render Methods
    ------------------------------------------------------------------------------------------------------------------*/
    // only a one-way height sync. we don't send the axis inner-content height to the DayGrid,
    // but DayGrid still needs to have classNames on inner elements in order to measure.
    this.renderTableRowAxis = rowHeight => {
      let {
        options,
        viewApi
      } = this.context;
      let renderProps = {
        text: options.allDayText,
        view: viewApi
      };
      return (
        // TODO: make reusable hook. used in list view too
        (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.C, {
          elTag: "td",
          elClasses: ['fc-timegrid-axis', 'fc-scrollgrid-shrink'],
          elAttrs: {
            'aria-hidden': true
          },
          renderProps: renderProps,
          generatorName: "allDayContent",
          customGenerator: options.allDayContent,
          defaultGenerator: renderAllDayInner,
          classNameGenerator: options.allDayClassNames,
          didMount: options.allDayDidMount,
          willUnmount: options.allDayWillUnmount
        }, InnerContent => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: ['fc-timegrid-axis-frame', 'fc-scrollgrid-shrink-frame', rowHeight == null ? ' fc-timegrid-axis-frame-liquid' : ''].join(' '),
          style: {
            height: rowHeight
          }
        }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, {
          elTag: "span",
          elClasses: ['fc-timegrid-axis-cushion', 'fc-scrollgrid-shrink-cushion', 'fc-scrollgrid-sync-inner']
        })))
      );
    };
    this.handleSlatCoords = slatCoords => {
      this.setState({
        slatCoords
      });
    };
  }
  // rendering
  // ----------------------------------------------------------------------------------------------------
  renderSimpleLayout(headerRowContent, allDayContent, timeContent) {
    let {
      context,
      props
    } = this;
    let sections = [];
    let stickyHeaderDates = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cc)(context.options);
    if (headerRowContent) {
      sections.push({
        type: 'header',
        key: 'header',
        isSticky: stickyHeaderDates,
        chunk: {
          elRef: this.headerElRef,
          tableClassName: 'fc-col-header',
          rowContent: headerRowContent
        }
      });
    }
    if (allDayContent) {
      sections.push({
        type: 'body',
        key: 'all-day',
        chunk: {
          content: allDayContent
        }
      });
      sections.push({
        type: 'body',
        key: 'all-day-divider',
        outerContent:
        // TODO: rename to cellContent so don't need to define <tr>?
        (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", {
          role: "presentation",
          className: "fc-scrollgrid-section"
        }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", {
          className: 'fc-timegrid-divider ' + context.theme.getClass('tableCellShaded')
        }))
      });
    }
    sections.push({
      type: 'body',
      key: 'body',
      liquid: true,
      expandRows: Boolean(context.options.expandRows),
      chunk: {
        scrollerElRef: this.scrollerElRef,
        content: timeContent
      }
    });
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ct, {
      elRef: this.rootElRef,
      elClasses: ['fc-timegrid'],
      viewSpec: context.viewSpec
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b$, {
      liquid: !props.isHeightAuto && !props.forPrint,
      collapsibleWidth: props.forPrint,
      cols: [{
        width: 'shrink'
      }],
      sections: sections
    }));
  }
  renderHScrollLayout(headerRowContent, allDayContent, timeContent, colCnt, dayMinWidth, slatMetas, slatCoords) {
    let ScrollGrid = this.context.pluginHooks.scrollGridImpl;
    if (!ScrollGrid) {
      throw new Error('No ScrollGrid implementation');
    }
    let {
      context,
      props
    } = this;
    let stickyHeaderDates = !props.forPrint && (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cc)(context.options);
    let stickyFooterScrollbar = !props.forPrint && (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cb)(context.options);
    let sections = [];
    if (headerRowContent) {
      sections.push({
        type: 'header',
        key: 'header',
        isSticky: stickyHeaderDates,
        syncRowHeights: true,
        chunks: [{
          key: 'axis',
          rowContent: arg => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", {
            role: "presentation"
          }, this.renderHeadAxis('day', arg.rowSyncHeights[0]))
        }, {
          key: 'cols',
          elRef: this.headerElRef,
          tableClassName: 'fc-col-header',
          rowContent: headerRowContent
        }]
      });
    }
    if (allDayContent) {
      sections.push({
        type: 'body',
        key: 'all-day',
        syncRowHeights: true,
        chunks: [{
          key: 'axis',
          rowContent: contentArg => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", {
            role: "presentation"
          }, this.renderTableRowAxis(contentArg.rowSyncHeights[0]))
        }, {
          key: 'cols',
          content: allDayContent
        }]
      });
      sections.push({
        key: 'all-day-divider',
        type: 'body',
        outerContent:
        // TODO: rename to cellContent so don't need to define <tr>?
        (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", {
          role: "presentation",
          className: "fc-scrollgrid-section"
        }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", {
          colSpan: 2,
          className: 'fc-timegrid-divider ' + context.theme.getClass('tableCellShaded')
        }))
      });
    }
    let isNowIndicator = context.options.nowIndicator;
    sections.push({
      type: 'body',
      key: 'body',
      liquid: true,
      expandRows: Boolean(context.options.expandRows),
      chunks: [{
        key: 'axis',
        content: arg =>
        // TODO: make this now-indicator arrow more DRY with TimeColsContent
        (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "fc-timegrid-axis-chunk"
        }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", {
          "aria-hidden": true,
          style: {
            height: arg.expandRows ? arg.clientHeight : ''
          }
        }, arg.tableColGroupNode, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", null, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeBodyAxis, {
          slatMetas: slatMetas
        }))), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "fc-timegrid-now-indicator-container"
        }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ch, {
          unit: isNowIndicator ? 'minute' : 'day' /* hacky */
        }, nowDate => {
          let nowIndicatorTop = isNowIndicator && slatCoords && slatCoords.safeComputeTop(nowDate); // might return void
          if (typeof nowIndicatorTop === 'number') {
            return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ck, {
              elClasses: ['fc-timegrid-now-indicator-arrow'],
              elStyle: {
                top: nowIndicatorTop
              },
              isAxis: true,
              date: nowDate
            });
          }
          return null;
        })))
      }, {
        key: 'cols',
        scrollerElRef: this.scrollerElRef,
        content: timeContent
      }]
    });
    if (stickyFooterScrollbar) {
      sections.push({
        key: 'footer',
        type: 'footer',
        isSticky: true,
        chunks: [{
          key: 'axis',
          content: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ca
        }, {
          key: 'cols',
          content: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ca
        }]
      });
    }
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ct, {
      elRef: this.rootElRef,
      elClasses: ['fc-timegrid'],
      viewSpec: context.viewSpec
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ScrollGrid, {
      liquid: !props.isHeightAuto && !props.forPrint,
      forPrint: props.forPrint,
      collapsibleWidth: false,
      colGroups: [{
        width: 'shrink',
        cols: [{
          width: 'shrink'
        }]
      }, {
        cols: [{
          span: colCnt,
          minWidth: dayMinWidth
        }]
      }],
      sections: sections
    }));
  }
  /* Dimensions
  ------------------------------------------------------------------------------------------------------------------*/
  getAllDayMaxEventProps() {
    let {
      dayMaxEvents,
      dayMaxEventRows
    } = this.context.options;
    if (dayMaxEvents === true || dayMaxEventRows === true) {
      // is auto?
      dayMaxEvents = undefined;
      dayMaxEventRows = AUTO_ALL_DAY_MAX_EVENT_ROWS; // make sure "auto" goes to a real number
    }
    return {
      dayMaxEvents,
      dayMaxEventRows
    };
  }
}
function renderAllDayInner(renderProps) {
  return renderProps.text;
}
class TimeColsSlatsCoords {
  constructor(positions, dateProfile, slotDuration) {
    this.positions = positions;
    this.dateProfile = dateProfile;
    this.slotDuration = slotDuration;
  }
  safeComputeTop(date) {
    let {
      dateProfile
    } = this;
    if ((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.H)(dateProfile.currentRange, date)) {
      let startOfDayDate = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.q)(date);
      let timeMs = date.valueOf() - startOfDayDate.valueOf();
      if (timeMs >= (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bs)(dateProfile.slotMinTime) && timeMs < (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bs)(dateProfile.slotMaxTime)) {
        return this.computeTimeTop((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.d)(timeMs));
      }
    }
    return null;
  }
  // Computes the top coordinate, relative to the bounds of the grid, of the given date.
  // A `startOfDayDate` must be given for avoiding ambiguity over how to treat midnight.
  computeDateTop(when, startOfDayDate) {
    if (!startOfDayDate) {
      startOfDayDate = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.q)(when);
    }
    return this.computeTimeTop((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.d)(when.valueOf() - startOfDayDate.valueOf()));
  }
  // Computes the top coordinate, relative to the bounds of the grid, of the given time (a Duration).
  // This is a makeshify way to compute the time-top. Assumes all slatMetas dates are uniform.
  // Eventually allow computation with arbirary slat dates.
  computeTimeTop(duration) {
    let {
      positions,
      dateProfile
    } = this;
    let len = positions.els.length;
    // floating-point value of # of slots covered
    let slatCoverage = (duration.milliseconds - (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bs)(dateProfile.slotMinTime)) / (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bs)(this.slotDuration);
    let slatIndex;
    let slatRemainder;
    // compute a floating-point number for how many slats should be progressed through.
    // from 0 to number of slats (inclusive)
    // constrained because slotMinTime/slotMaxTime might be customized.
    slatCoverage = Math.max(0, slatCoverage);
    slatCoverage = Math.min(len, slatCoverage);
    // an integer index of the furthest whole slat
    // from 0 to number slats (*exclusive*, so len-1)
    slatIndex = Math.floor(slatCoverage);
    slatIndex = Math.min(slatIndex, len - 1);
    // how much further through the slatIndex slat (from 0.0-1.0) must be covered in addition.
    // could be 1.0 if slatCoverage is covering *all* the slots
    slatRemainder = slatCoverage - slatIndex;
    return positions.tops[slatIndex] + positions.getHeight(slatIndex) * slatRemainder;
  }
}
class TimeColsSlatsBody extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
  render() {
    let {
      props,
      context
    } = this;
    let {
      options
    } = context;
    let {
      slatElRefs
    } = props;
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", null, props.slatMetas.map((slatMeta, i) => {
      let renderProps = {
        time: slatMeta.time,
        date: context.dateEnv.toDate(slatMeta.date),
        view: context.viewApi
      };
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", {
        key: slatMeta.key,
        ref: slatElRefs.createRef(slatMeta.key)
      }, props.axis && (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColsAxisCell, Object.assign({}, slatMeta)), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.C, {
        elTag: "td",
        elClasses: ['fc-timegrid-slot', 'fc-timegrid-slot-lane', !slatMeta.isLabeled && 'fc-timegrid-slot-minor'],
        elAttrs: {
          'data-time': slatMeta.isoTimeStr
        },
        renderProps: renderProps,
        generatorName: "slotLaneContent",
        customGenerator: options.slotLaneContent,
        classNameGenerator: options.slotLaneClassNames,
        didMount: options.slotLaneDidMount,
        willUnmount: options.slotLaneWillUnmount
      }));
    }));
  }
}

/*
for the horizontal "slats" that run width-wise. Has a time axis on a side. Depends on RTL.
*/
class TimeColsSlats extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
  constructor() {
    super(...arguments);
    this.rootElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    this.slatElRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cf();
  }
  render() {
    let {
      props,
      context
    } = this;
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      ref: this.rootElRef,
      className: "fc-timegrid-slots"
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", {
      "aria-hidden": true,
      className: context.theme.getClass('table'),
      style: {
        minWidth: props.tableMinWidth,
        width: props.clientWidth,
        height: props.minHeight
      }
    }, props.tableColGroupNode /* relies on there only being a single <col> for the axis */, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColsSlatsBody, {
      slatElRefs: this.slatElRefs,
      axis: props.axis,
      slatMetas: props.slatMetas
    })));
  }
  componentDidMount() {
    this.updateSizing();
  }
  componentDidUpdate() {
    this.updateSizing();
  }
  componentWillUnmount() {
    if (this.props.onCoords) {
      this.props.onCoords(null);
    }
  }
  updateSizing() {
    let {
      context,
      props
    } = this;
    if (props.onCoords && props.clientWidth !== null // means sizing has stabilized
    ) {
      let rootEl = this.rootElRef.current;
      if (rootEl.offsetHeight) {
        // not hidden by css
        props.onCoords(new TimeColsSlatsCoords(new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ba(this.rootElRef.current, collectSlatEls(this.slatElRefs.currentMap, props.slatMetas), false, true), this.props.dateProfile, context.options.slotDuration));
      }
    }
  }
}
function collectSlatEls(elMap, slatMetas) {
  return slatMetas.map(slatMeta => elMap[slatMeta.key]);
}
function splitSegsByCol(segs, colCnt) {
  let segsByCol = [];
  let i;
  for (i = 0; i < colCnt; i += 1) {
    segsByCol.push([]);
  }
  if (segs) {
    for (i = 0; i < segs.length; i += 1) {
      segsByCol[segs[i].col].push(segs[i]);
    }
  }
  return segsByCol;
}
function splitInteractionByCol(ui, colCnt) {
  let byRow = [];
  if (!ui) {
    for (let i = 0; i < colCnt; i += 1) {
      byRow[i] = null;
    }
  } else {
    for (let i = 0; i < colCnt; i += 1) {
      byRow[i] = {
        affectedInstances: ui.affectedInstances,
        isEvent: ui.isEvent,
        segs: []
      };
    }
    for (let seg of ui.segs) {
      byRow[seg.col].segs.push(seg);
    }
  }
  return byRow;
}
class TimeColMoreLink extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
  render() {
    let {
      props
    } = this;
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cr, {
      elClasses: ['fc-timegrid-more-link'],
      elStyle: {
        top: props.top,
        bottom: props.bottom
      },
      allDayDate: null,
      moreCnt: props.hiddenSegs.length,
      allSegs: props.hiddenSegs,
      hiddenSegs: props.hiddenSegs,
      extraDateSpan: props.extraDateSpan,
      dateProfile: props.dateProfile,
      todayRange: props.todayRange,
      popoverContent: () => renderPlainFgSegs(props.hiddenSegs, props),
      defaultGenerator: renderMoreLinkInner,
      forceTimed: true
    }, InnerContent => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, {
      elTag: "div",
      elClasses: ['fc-timegrid-more-link-inner', 'fc-sticky']
    }));
  }
}
function renderMoreLinkInner(props) {
  return props.shortText;
}

// segInputs assumed sorted
function buildPositioning(segInputs, strictOrder, maxStackCnt) {
  let hierarchy = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bA();
  if (strictOrder != null) {
    hierarchy.strictOrder = strictOrder;
  }
  if (maxStackCnt != null) {
    hierarchy.maxStackCnt = maxStackCnt;
  }
  let hiddenEntries = hierarchy.addSegs(segInputs);
  let hiddenGroups = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bE)(hiddenEntries);
  let web = buildWeb(hierarchy);
  web = stretchWeb(web, 1); // all levelCoords/thickness will have 0.0-1.0
  let segRects = webToRects(web);
  return {
    segRects,
    hiddenGroups
  };
}
function buildWeb(hierarchy) {
  const {
    entriesByLevel
  } = hierarchy;
  const buildNode = cacheable((level, lateral) => level + ':' + lateral, (level, lateral) => {
    let siblingRange = findNextLevelSegs(hierarchy, level, lateral);
    let nextLevelRes = buildNodes(siblingRange, buildNode);
    let entry = entriesByLevel[level][lateral];
    return [Object.assign(Object.assign({}, entry), {
      nextLevelNodes: nextLevelRes[0]
    }), entry.thickness + nextLevelRes[1] // the pressure builds
    ];
  });
  return buildNodes(entriesByLevel.length ? {
    level: 0,
    lateralStart: 0,
    lateralEnd: entriesByLevel[0].length
  } : null, buildNode)[0];
}
function buildNodes(siblingRange, buildNode) {
  if (!siblingRange) {
    return [[], 0];
  }
  let {
    level,
    lateralStart,
    lateralEnd
  } = siblingRange;
  let lateral = lateralStart;
  let pairs = [];
  while (lateral < lateralEnd) {
    pairs.push(buildNode(level, lateral));
    lateral += 1;
  }
  pairs.sort(cmpDescPressures);
  return [pairs.map(extractNode), pairs[0][1] // first item's pressure
  ];
}
function cmpDescPressures(a, b) {
  return b[1] - a[1];
}
function extractNode(a) {
  return a[0];
}
function findNextLevelSegs(hierarchy, subjectLevel, subjectLateral) {
  let {
    levelCoords,
    entriesByLevel
  } = hierarchy;
  let subjectEntry = entriesByLevel[subjectLevel][subjectLateral];
  let afterSubject = levelCoords[subjectLevel] + subjectEntry.thickness;
  let levelCnt = levelCoords.length;
  let level = subjectLevel;
  // skip past levels that are too high up
  for (; level < levelCnt && levelCoords[level] < afterSubject; level += 1); // do nothing
  for (; level < levelCnt; level += 1) {
    let entries = entriesByLevel[level];
    let entry;
    let searchIndex = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bD)(entries, subjectEntry.span.start, _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bC);
    let lateralStart = searchIndex[0] + searchIndex[1]; // if exact match (which doesn't collide), go to next one
    let lateralEnd = lateralStart;
    while (
    // loop through entries that horizontally intersect
    (entry = entries[lateralEnd]) &&
    // but not past the whole seg list
    entry.span.start < subjectEntry.span.end) {
      lateralEnd += 1;
    }
    if (lateralStart < lateralEnd) {
      return {
        level,
        lateralStart,
        lateralEnd
      };
    }
  }
  return null;
}
function stretchWeb(topLevelNodes, totalThickness) {
  const stretchNode = cacheable((node, startCoord, prevThickness) => (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bB)(node), (node, startCoord, prevThickness) => {
    let {
      nextLevelNodes,
      thickness
    } = node;
    let allThickness = thickness + prevThickness;
    let thicknessFraction = thickness / allThickness;
    let endCoord;
    let newChildren = [];
    if (!nextLevelNodes.length) {
      endCoord = totalThickness;
    } else {
      for (let childNode of nextLevelNodes) {
        if (endCoord === undefined) {
          let res = stretchNode(childNode, startCoord, allThickness);
          endCoord = res[0];
          newChildren.push(res[1]);
        } else {
          let res = stretchNode(childNode, endCoord, 0);
          newChildren.push(res[1]);
        }
      }
    }
    let newThickness = (endCoord - startCoord) * thicknessFraction;
    return [endCoord - newThickness, Object.assign(Object.assign({}, node), {
      thickness: newThickness,
      nextLevelNodes: newChildren
    })];
  });
  return topLevelNodes.map(node => stretchNode(node, 0, 0)[1]);
}
// not sorted in any particular order
function webToRects(topLevelNodes) {
  let rects = [];
  const processNode = cacheable((node, levelCoord, stackDepth) => (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bB)(node), (node, levelCoord, stackDepth) => {
    let rect = Object.assign(Object.assign({}, node), {
      levelCoord,
      stackDepth,
      stackForward: 0
    });
    rects.push(rect);
    return rect.stackForward = processNodes(node.nextLevelNodes, levelCoord + node.thickness, stackDepth + 1) + 1;
  });
  function processNodes(nodes, levelCoord, stackDepth) {
    let stackForward = 0;
    for (let node of nodes) {
      stackForward = Math.max(processNode(node, levelCoord, stackDepth), stackForward);
    }
    return stackForward;
  }
  processNodes(topLevelNodes, 0, 0);
  return rects; // TODO: sort rects by levelCoord to be consistent with toRects?
}
// TODO: move to general util
function cacheable(keyFunc, workFunc) {
  const cache = {};
  return (...args) => {
    let key = keyFunc(...args);
    return key in cache ? cache[key] : cache[key] = workFunc(...args);
  };
}
function computeSegVCoords(segs, colDate, slatCoords = null, eventMinHeight = 0) {
  let vcoords = [];
  if (slatCoords) {
    for (let i = 0; i < segs.length; i += 1) {
      let seg = segs[i];
      let spanStart = slatCoords.computeDateTop(seg.start, colDate);
      let spanEnd = Math.max(spanStart + (eventMinHeight || 0),
      // :(
      slatCoords.computeDateTop(seg.end, colDate));
      vcoords.push({
        start: Math.round(spanStart),
        end: Math.round(spanEnd) //
      });
    }
  }
  return vcoords;
}
function computeFgSegPlacements(segs, segVCoords,
// might not have for every seg
eventOrderStrict, eventMaxStack) {
  let segInputs = [];
  let dumbSegs = []; // segs without coords
  for (let i = 0; i < segs.length; i += 1) {
    let vcoords = segVCoords[i];
    if (vcoords) {
      segInputs.push({
        index: i,
        thickness: 1,
        span: vcoords
      });
    } else {
      dumbSegs.push(segs[i]);
    }
  }
  let {
    segRects,
    hiddenGroups
  } = buildPositioning(segInputs, eventOrderStrict, eventMaxStack);
  let segPlacements = [];
  for (let segRect of segRects) {
    segPlacements.push({
      seg: segs[segRect.index],
      rect: segRect
    });
  }
  for (let dumbSeg of dumbSegs) {
    segPlacements.push({
      seg: dumbSeg,
      rect: null
    });
  }
  return {
    segPlacements,
    hiddenGroups
  };
}
const DEFAULT_TIME_FORMAT = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.x)({
  hour: 'numeric',
  minute: '2-digit',
  meridiem: false
});
class TimeColEvent extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
  render() {
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cj, Object.assign({}, this.props, {
      elClasses: ['fc-timegrid-event', 'fc-v-event', this.props.isShort && 'fc-timegrid-event-short'],
      defaultTimeFormat: DEFAULT_TIME_FORMAT
    }));
  }
}
class TimeCol extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
  constructor() {
    super(...arguments);
    this.sortEventSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bR);
  }
  // TODO: memoize event-placement?
  render() {
    let {
      props,
      context
    } = this;
    let {
      options
    } = context;
    let isSelectMirror = options.selectMirror;
    let mirrorSegs =
    // yuck
    props.eventDrag && props.eventDrag.segs || props.eventResize && props.eventResize.segs || isSelectMirror && props.dateSelectionSegs || [];
    let interactionAffectedInstances =
    // TODO: messy way to compute this
    props.eventDrag && props.eventDrag.affectedInstances || props.eventResize && props.eventResize.affectedInstances || {};
    let sortedFgSegs = this.sortEventSegs(props.fgEventSegs, options.eventOrder);
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cl, {
      elTag: "td",
      elRef: props.elRef,
      elClasses: ['fc-timegrid-col', ...(props.extraClassNames || [])],
      elAttrs: Object.assign({
        role: 'gridcell'
      }, props.extraDataAttrs),
      date: props.date,
      dateProfile: props.dateProfile,
      todayRange: props.todayRange,
      extraRenderProps: props.extraRenderProps
    }, InnerContent => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-timegrid-col-frame"
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-timegrid-col-bg"
    }, this.renderFillSegs(props.businessHourSegs, 'non-business'), this.renderFillSegs(props.bgEventSegs, 'bg-event'), this.renderFillSegs(props.dateSelectionSegs, 'highlight')), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-timegrid-col-events"
    }, this.renderFgSegs(sortedFgSegs, interactionAffectedInstances, false, false, false)), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-timegrid-col-events"
    }, this.renderFgSegs(mirrorSegs, {}, Boolean(props.eventDrag), Boolean(props.eventResize), Boolean(isSelectMirror), 'mirror')), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-timegrid-now-indicator-container"
    }, this.renderNowIndicator(props.nowIndicatorSegs)), (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cm)(options) && (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, {
      elTag: "div",
      elClasses: ['fc-timegrid-col-misc']
    })));
  }
  renderFgSegs(sortedFgSegs, segIsInvisible, isDragging, isResizing, isDateSelecting, forcedKey) {
    let {
      props
    } = this;
    if (props.forPrint) {
      return renderPlainFgSegs(sortedFgSegs, props);
    }
    return this.renderPositionedFgSegs(sortedFgSegs, segIsInvisible, isDragging, isResizing, isDateSelecting, forcedKey);
  }
  renderPositionedFgSegs(segs,
  // if not mirror, needs to be sorted
  segIsInvisible, isDragging, isResizing, isDateSelecting, forcedKey) {
    let {
      eventMaxStack,
      eventShortHeight,
      eventOrderStrict,
      eventMinHeight
    } = this.context.options;
    let {
      date,
      slatCoords,
      eventSelection,
      todayRange,
      nowDate
    } = this.props;
    let isMirror = isDragging || isResizing || isDateSelecting;
    let segVCoords = computeSegVCoords(segs, date, slatCoords, eventMinHeight);
    let {
      segPlacements,
      hiddenGroups
    } = computeFgSegPlacements(segs, segVCoords, eventOrderStrict, eventMaxStack);
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, this.renderHiddenGroups(hiddenGroups, segs), segPlacements.map(segPlacement => {
      let {
        seg,
        rect
      } = segPlacement;
      let instanceId = seg.eventRange.instance.instanceId;
      let isVisible = isMirror || Boolean(!segIsInvisible[instanceId] && rect);
      let vStyle = computeSegVStyle(rect && rect.span);
      let hStyle = !isMirror && rect ? this.computeSegHStyle(rect) : {
        left: 0,
        right: 0
      };
      let isInset = Boolean(rect) && rect.stackForward > 0;
      let isShort = Boolean(rect) && rect.span.end - rect.span.start < eventShortHeight; // look at other places for this problem
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
        className: 'fc-timegrid-event-harness' + (isInset ? ' fc-timegrid-event-harness-inset' : ''),
        key: forcedKey || instanceId,
        style: Object.assign(Object.assign({
          visibility: isVisible ? '' : 'hidden'
        }, vStyle), hStyle)
      }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColEvent, Object.assign({
        seg: seg,
        isDragging: isDragging,
        isResizing: isResizing,
        isDateSelecting: isDateSelecting,
        isSelected: instanceId === eventSelection,
        isShort: isShort
      }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bS)(seg, todayRange, nowDate))));
    }));
  }
  // will already have eventMinHeight applied because segInputs already had it
  renderHiddenGroups(hiddenGroups, segs) {
    let {
      extraDateSpan,
      dateProfile,
      todayRange,
      nowDate,
      eventSelection,
      eventDrag,
      eventResize
    } = this.props;
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, hiddenGroups.map(hiddenGroup => {
      let positionCss = computeSegVStyle(hiddenGroup.span);
      let hiddenSegs = compileSegsFromEntries(hiddenGroup.entries, segs);
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColMoreLink, {
        key: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bw)((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cs)(hiddenSegs)),
        hiddenSegs: hiddenSegs,
        top: positionCss.top,
        bottom: positionCss.bottom,
        extraDateSpan: extraDateSpan,
        dateProfile: dateProfile,
        todayRange: todayRange,
        nowDate: nowDate,
        eventSelection: eventSelection,
        eventDrag: eventDrag,
        eventResize: eventResize
      });
    }));
  }
  renderFillSegs(segs, fillType) {
    let {
      props,
      context
    } = this;
    let segVCoords = computeSegVCoords(segs, props.date, props.slatCoords, context.options.eventMinHeight); // don't assume all populated
    let children = segVCoords.map((vcoords, i) => {
      let seg = segs[i];
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
        key: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bT)(seg.eventRange),
        className: "fc-timegrid-bg-harness",
        style: computeSegVStyle(vcoords)
      }, fillType === 'bg-event' ? (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cp, Object.assign({
        seg: seg
      }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bS)(seg, props.todayRange, props.nowDate))) : (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.co)(fillType));
    });
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, children);
  }
  renderNowIndicator(segs) {
    let {
      slatCoords,
      date
    } = this.props;
    if (!slatCoords) {
      return null;
    }
    return segs.map((seg, i) => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ck
    // key doesn't matter. will only ever be one
    , {
      // key doesn't matter. will only ever be one
      key: i,
      elClasses: ['fc-timegrid-now-indicator-line'],
      elStyle: {
        top: slatCoords.computeDateTop(seg.start, date)
      },
      isAxis: false,
      date: date
    }));
  }
  computeSegHStyle(segHCoords) {
    let {
      isRtl,
      options
    } = this.context;
    let shouldOverlap = options.slotEventOverlap;
    let nearCoord = segHCoords.levelCoord; // the left side if LTR. the right side if RTL. floating-point
    let farCoord = segHCoords.levelCoord + segHCoords.thickness; // the right side if LTR. the left side if RTL. floating-point
    let left; // amount of space from left edge, a fraction of the total width
    let right; // amount of space from right edge, a fraction of the total width
    if (shouldOverlap) {
      // double the width, but don't go beyond the maximum forward coordinate (1.0)
      farCoord = Math.min(1, nearCoord + (farCoord - nearCoord) * 2);
    }
    if (isRtl) {
      left = 1 - farCoord;
      right = nearCoord;
    } else {
      left = nearCoord;
      right = 1 - farCoord;
    }
    let props = {
      zIndex: segHCoords.stackDepth + 1,
      left: left * 100 + '%',
      right: right * 100 + '%'
    };
    if (shouldOverlap && !segHCoords.stackForward) {
      // add padding to the edge so that forward stacked events don't cover the resizer's icon
      props[isRtl ? 'marginLeft' : 'marginRight'] = 10 * 2; // 10 is a guesstimate of the icon's width
    }
    return props;
  }
}
function renderPlainFgSegs(sortedFgSegs, {
  todayRange,
  nowDate,
  eventSelection,
  eventDrag,
  eventResize
}) {
  let hiddenInstances = (eventDrag ? eventDrag.affectedInstances : null) || (eventResize ? eventResize.affectedInstances : null) || {};
  return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, sortedFgSegs.map(seg => {
    let instanceId = seg.eventRange.instance.instanceId;
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      key: instanceId,
      style: {
        visibility: hiddenInstances[instanceId] ? 'hidden' : ''
      }
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColEvent, Object.assign({
      seg: seg,
      isDragging: false,
      isResizing: false,
      isDateSelecting: false,
      isSelected: instanceId === eventSelection,
      isShort: false
    }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bS)(seg, todayRange, nowDate))));
  }));
}
function computeSegVStyle(segVCoords) {
  if (!segVCoords) {
    return {
      top: '',
      bottom: ''
    };
  }
  return {
    top: segVCoords.start,
    bottom: -segVCoords.end
  };
}
function compileSegsFromEntries(segEntries, allSegs) {
  return segEntries.map(segEntry => allSegs[segEntry.index]);
}
class TimeColsContent extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B {
  constructor() {
    super(...arguments);
    this.splitFgEventSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitSegsByCol);
    this.splitBgEventSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitSegsByCol);
    this.splitBusinessHourSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitSegsByCol);
    this.splitNowIndicatorSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitSegsByCol);
    this.splitDateSelectionSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitSegsByCol);
    this.splitEventDrag = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitInteractionByCol);
    this.splitEventResize = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitInteractionByCol);
    this.rootElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    this.cellElRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cf();
  }
  render() {
    let {
      props,
      context
    } = this;
    let nowIndicatorTop = context.options.nowIndicator && props.slatCoords && props.slatCoords.safeComputeTop(props.nowDate); // might return void
    let colCnt = props.cells.length;
    let fgEventSegsByRow = this.splitFgEventSegs(props.fgEventSegs, colCnt);
    let bgEventSegsByRow = this.splitBgEventSegs(props.bgEventSegs, colCnt);
    let businessHourSegsByRow = this.splitBusinessHourSegs(props.businessHourSegs, colCnt);
    let nowIndicatorSegsByRow = this.splitNowIndicatorSegs(props.nowIndicatorSegs, colCnt);
    let dateSelectionSegsByRow = this.splitDateSelectionSegs(props.dateSelectionSegs, colCnt);
    let eventDragByRow = this.splitEventDrag(props.eventDrag, colCnt);
    let eventResizeByRow = this.splitEventResize(props.eventResize, colCnt);
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-timegrid-cols",
      ref: this.rootElRef
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", {
      role: "presentation",
      style: {
        minWidth: props.tableMinWidth,
        width: props.clientWidth
      }
    }, props.tableColGroupNode, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", {
      role: "presentation"
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", {
      role: "row"
    }, props.axis && (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", {
      "aria-hidden": true,
      className: "fc-timegrid-col fc-timegrid-axis"
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-timegrid-col-frame"
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-timegrid-now-indicator-container"
    }, typeof nowIndicatorTop === 'number' && (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ck, {
      elClasses: ['fc-timegrid-now-indicator-arrow'],
      elStyle: {
        top: nowIndicatorTop
      },
      isAxis: true,
      date: props.nowDate
    })))), props.cells.map((cell, i) => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeCol, {
      key: cell.key,
      elRef: this.cellElRefs.createRef(cell.key),
      dateProfile: props.dateProfile,
      date: cell.date,
      nowDate: props.nowDate,
      todayRange: props.todayRange,
      extraRenderProps: cell.extraRenderProps,
      extraDataAttrs: cell.extraDataAttrs,
      extraClassNames: cell.extraClassNames,
      extraDateSpan: cell.extraDateSpan,
      fgEventSegs: fgEventSegsByRow[i],
      bgEventSegs: bgEventSegsByRow[i],
      businessHourSegs: businessHourSegsByRow[i],
      nowIndicatorSegs: nowIndicatorSegsByRow[i],
      dateSelectionSegs: dateSelectionSegsByRow[i],
      eventDrag: eventDragByRow[i],
      eventResize: eventResizeByRow[i],
      slatCoords: props.slatCoords,
      eventSelection: props.eventSelection,
      forPrint: props.forPrint
    }))))));
  }
  componentDidMount() {
    this.updateCoords();
  }
  componentDidUpdate() {
    this.updateCoords();
  }
  updateCoords() {
    let {
      props
    } = this;
    if (props.onColCoords && props.clientWidth !== null // means sizing has stabilized
    ) {
      props.onColCoords(new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ba(this.rootElRef.current, collectCellEls(this.cellElRefs.currentMap, props.cells), true,
      // horizontal
      false));
    }
  }
}
function collectCellEls(elMap, cells) {
  return cells.map(cell => elMap[cell.key]);
}

/* A component that renders one or more columns of vertical time slots
----------------------------------------------------------------------------------------------------------------------*/
class TimeCols extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.be {
  constructor() {
    super(...arguments);
    this.processSlotOptions = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(processSlotOptions);
    this.state = {
      slatCoords: null
    };
    this.handleRootEl = el => {
      if (el) {
        this.context.registerInteractiveComponent(this, {
          el,
          isHitComboAllowed: this.props.isHitComboAllowed
        });
      } else {
        this.context.unregisterInteractiveComponent(this);
      }
    };
    this.handleScrollRequest = request => {
      let {
        onScrollTopRequest
      } = this.props;
      let {
        slatCoords
      } = this.state;
      if (onScrollTopRequest && slatCoords) {
        if (request.time) {
          let top = slatCoords.computeTimeTop(request.time);
          top = Math.ceil(top); // zoom can give weird floating-point values. rather scroll a little bit further
          if (top) {
            top += 1; // to overcome top border that slots beyond the first have. looks better
          }
          onScrollTopRequest(top);
        }
        return true;
      }
      return false;
    };
    this.handleColCoords = colCoords => {
      this.colCoords = colCoords;
    };
    this.handleSlatCoords = slatCoords => {
      this.setState({
        slatCoords
      });
      if (this.props.onSlatCoords) {
        this.props.onSlatCoords(slatCoords);
      }
    };
  }
  render() {
    let {
      props,
      state
    } = this;
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-timegrid-body",
      ref: this.handleRootEl,
      style: {
        // these props are important to give this wrapper correct dimensions for interactions
        // TODO: if we set it here, can we avoid giving to inner tables?
        width: props.clientWidth,
        minWidth: props.tableMinWidth
      }
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColsSlats, {
      axis: props.axis,
      dateProfile: props.dateProfile,
      slatMetas: props.slatMetas,
      clientWidth: props.clientWidth,
      minHeight: props.expandRows ? props.clientHeight : '',
      tableMinWidth: props.tableMinWidth,
      tableColGroupNode: props.axis ? props.tableColGroupNode : null /* axis depends on the colgroup's shrinking */,
      onCoords: this.handleSlatCoords
    }), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColsContent, {
      cells: props.cells,
      axis: props.axis,
      dateProfile: props.dateProfile,
      businessHourSegs: props.businessHourSegs,
      bgEventSegs: props.bgEventSegs,
      fgEventSegs: props.fgEventSegs,
      dateSelectionSegs: props.dateSelectionSegs,
      eventSelection: props.eventSelection,
      eventDrag: props.eventDrag,
      eventResize: props.eventResize,
      todayRange: props.todayRange,
      nowDate: props.nowDate,
      nowIndicatorSegs: props.nowIndicatorSegs,
      clientWidth: props.clientWidth,
      tableMinWidth: props.tableMinWidth,
      tableColGroupNode: props.tableColGroupNode,
      slatCoords: state.slatCoords,
      onColCoords: this.handleColCoords,
      forPrint: props.forPrint
    }));
  }
  componentDidMount() {
    this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest);
  }
  componentDidUpdate(prevProps) {
    this.scrollResponder.update(prevProps.dateProfile !== this.props.dateProfile);
  }
  componentWillUnmount() {
    this.scrollResponder.detach();
  }
  queryHit(positionLeft, positionTop) {
    let {
      dateEnv,
      options
    } = this.context;
    let {
      colCoords
    } = this;
    let {
      dateProfile
    } = this.props;
    let {
      slatCoords
    } = this.state;
    let {
      snapDuration,
      snapsPerSlot
    } = this.processSlotOptions(this.props.slotDuration, options.snapDuration);
    let colIndex = colCoords.leftToIndex(positionLeft);
    let slatIndex = slatCoords.positions.topToIndex(positionTop);
    if (colIndex != null && slatIndex != null) {
      let cell = this.props.cells[colIndex];
      let slatTop = slatCoords.positions.tops[slatIndex];
      let slatHeight = slatCoords.positions.getHeight(slatIndex);
      let partial = (positionTop - slatTop) / slatHeight; // floating point number between 0 and 1
      let localSnapIndex = Math.floor(partial * snapsPerSlot); // the snap # relative to start of slat
      let snapIndex = slatIndex * snapsPerSlot + localSnapIndex;
      let dayDate = this.props.cells[colIndex].date;
      let time = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bp)(dateProfile.slotMinTime, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bo)(snapDuration, snapIndex));
      let start = dateEnv.add(dayDate, time);
      let end = dateEnv.add(start, snapDuration);
      return {
        dateProfile,
        dateSpan: Object.assign({
          range: {
            start,
            end
          },
          allDay: false
        }, cell.extraDateSpan),
        dayEl: colCoords.els[colIndex],
        rect: {
          left: colCoords.lefts[colIndex],
          right: colCoords.rights[colIndex],
          top: slatTop,
          bottom: slatTop + slatHeight
        },
        layer: 0
      };
    }
    return null;
  }
}
function processSlotOptions(slotDuration, snapDurationOverride) {
  let snapDuration = snapDurationOverride || slotDuration;
  let snapsPerSlot = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bt)(slotDuration, snapDuration);
  if (snapsPerSlot === null) {
    snapDuration = slotDuration;
    snapsPerSlot = 1;
    // TODO: say warning?
  }
  return {
    snapDuration,
    snapsPerSlot
  };
}
class DayTimeColsSlicer extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bW {
  sliceRange(range, dayRanges) {
    let segs = [];
    for (let col = 0; col < dayRanges.length; col += 1) {
      let segRange = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.o)(range, dayRanges[col]);
      if (segRange) {
        segs.push({
          start: segRange.start,
          end: segRange.end,
          isStart: segRange.start.valueOf() === range.start.valueOf(),
          isEnd: segRange.end.valueOf() === range.end.valueOf(),
          col
        });
      }
    }
    return segs;
  }
}
class DayTimeCols extends _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.be {
  constructor() {
    super(...arguments);
    this.buildDayRanges = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(buildDayRanges);
    this.slicer = new DayTimeColsSlicer();
    this.timeColsRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
  }
  render() {
    let {
      props,
      context
    } = this;
    let {
      dateProfile,
      dayTableModel
    } = props;
    let {
      nowIndicator,
      nextDayThreshold
    } = context.options;
    let dayRanges = this.buildDayRanges(dayTableModel, dateProfile, context.dateEnv);
    // give it the first row of cells
    // TODO: would move this further down hierarchy, but sliceNowDate needs it
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ch, {
      unit: nowIndicator ? 'minute' : 'day'
    }, (nowDate, todayRange) => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeCols, Object.assign({
      ref: this.timeColsRef
    }, this.slicer.sliceProps(props, dateProfile, null, context, dayRanges), {
      forPrint: props.forPrint,
      axis: props.axis,
      dateProfile: dateProfile,
      slatMetas: props.slatMetas,
      slotDuration: props.slotDuration,
      cells: dayTableModel.cells[0],
      tableColGroupNode: props.tableColGroupNode,
      tableMinWidth: props.tableMinWidth,
      clientWidth: props.clientWidth,
      clientHeight: props.clientHeight,
      expandRows: props.expandRows,
      nowDate: nowDate,
      nowIndicatorSegs: nowIndicator && this.slicer.sliceNowDate(nowDate, dateProfile, nextDayThreshold, context, dayRanges),
      todayRange: todayRange,
      onScrollTopRequest: props.onScrollTopRequest,
      onSlatCoords: props.onSlatCoords
    })));
  }
}
function buildDayRanges(dayTableModel, dateProfile, dateEnv) {
  let ranges = [];
  for (let date of dayTableModel.headerDates) {
    ranges.push({
      start: dateEnv.add(date, dateProfile.slotMinTime),
      end: dateEnv.add(date, dateProfile.slotMaxTime)
    });
  }
  return ranges;
}

// potential nice values for the slot-duration and interval-duration
// from largest to smallest
const STOCK_SUB_DURATIONS = [{
  hours: 1
}, {
  minutes: 30
}, {
  minutes: 15
}, {
  seconds: 30
}, {
  seconds: 15
}];
function buildSlatMetas(slotMinTime, slotMaxTime, explicitLabelInterval, slotDuration, dateEnv) {
  let dayStart = new Date(0);
  let slatTime = slotMinTime;
  let slatIterator = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.d)(0);
  let labelInterval = explicitLabelInterval || computeLabelInterval(slotDuration);
  let metas = [];
  while ((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bs)(slatTime) < (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bs)(slotMaxTime)) {
    let date = dateEnv.add(dayStart, slatTime);
    let isLabeled = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bt)(slatIterator, labelInterval) !== null;
    metas.push({
      date,
      time: slatTime,
      key: date.toISOString(),
      isoTimeStr: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bu)(date),
      isLabeled
    });
    slatTime = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bp)(slatTime, slotDuration);
    slatIterator = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bp)(slatIterator, slotDuration);
  }
  return metas;
}
// Computes an automatic value for slotLabelInterval
function computeLabelInterval(slotDuration) {
  let i;
  let labelInterval;
  let slotsPerLabel;
  // find the smallest stock label interval that results in more than one slots-per-label
  for (i = STOCK_SUB_DURATIONS.length - 1; i >= 0; i -= 1) {
    labelInterval = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.d)(STOCK_SUB_DURATIONS[i]);
    slotsPerLabel = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bt)(labelInterval, slotDuration);
    if (slotsPerLabel !== null && slotsPerLabel > 1) {
      return labelInterval;
    }
  }
  return slotDuration; // fall back
}
class DayTimeColsView extends TimeColsView {
  constructor() {
    super(...arguments);
    this.buildTimeColsModel = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(buildTimeColsModel);
    this.buildSlatMetas = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(buildSlatMetas);
  }
  render() {
    let {
      options,
      dateEnv,
      dateProfileGenerator
    } = this.context;
    let {
      props
    } = this;
    let {
      dateProfile
    } = props;
    let dayTableModel = this.buildTimeColsModel(dateProfile, dateProfileGenerator);
    let splitProps = this.allDaySplitter.splitProps(props);
    let slatMetas = this.buildSlatMetas(dateProfile.slotMinTime, dateProfile.slotMaxTime, options.slotLabelInterval, options.slotDuration, dateEnv);
    let {
      dayMinWidth
    } = options;
    let hasAttachedAxis = !dayMinWidth;
    let hasDetachedAxis = dayMinWidth;
    let headerContent = options.dayHeaders && (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bK, {
      dates: dayTableModel.headerDates,
      dateProfile: dateProfile,
      datesRepDistinctDays: true,
      renderIntro: hasAttachedAxis ? this.renderHeadAxis : null
    });
    let allDayContent = options.allDaySlot !== false && (contentArg => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_daygrid_internal_js__WEBPACK_IMPORTED_MODULE_2__.DayTable, Object.assign({}, splitProps.allDay, {
      dateProfile: dateProfile,
      dayTableModel: dayTableModel,
      nextDayThreshold: options.nextDayThreshold,
      tableMinWidth: contentArg.tableMinWidth,
      colGroupNode: contentArg.tableColGroupNode,
      renderRowIntro: hasAttachedAxis ? this.renderTableRowAxis : null,
      showWeekNumbers: false,
      expandRows: false,
      headerAlignElRef: this.headerElRef,
      clientWidth: contentArg.clientWidth,
      clientHeight: contentArg.clientHeight,
      forPrint: props.forPrint
    }, this.getAllDayMaxEventProps())));
    let timeGridContent = contentArg => (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(DayTimeCols, Object.assign({}, splitProps.timed, {
      dayTableModel: dayTableModel,
      dateProfile: dateProfile,
      axis: hasAttachedAxis,
      slotDuration: options.slotDuration,
      slatMetas: slatMetas,
      forPrint: props.forPrint,
      tableColGroupNode: contentArg.tableColGroupNode,
      tableMinWidth: contentArg.tableMinWidth,
      clientWidth: contentArg.clientWidth,
      clientHeight: contentArg.clientHeight,
      onSlatCoords: this.handleSlatCoords,
      expandRows: contentArg.expandRows,
      onScrollTopRequest: this.handleScrollTopRequest
    }));
    return hasDetachedAxis ? this.renderHScrollLayout(headerContent, allDayContent, timeGridContent, dayTableModel.colCnt, dayMinWidth, slatMetas, this.state.slatCoords) : this.renderSimpleLayout(headerContent, allDayContent, timeGridContent);
  }
}
function buildTimeColsModel(dateProfile, dateProfileGenerator) {
  let daySeries = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bO(dateProfile.renderRange, dateProfileGenerator);
  return new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bV(daySeries, false);
}
var css_248z = ".fc-v-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-v-event .fc-event-main{color:var(--fc-event-text-color);height:100%}.fc-v-event .fc-event-main-frame{display:flex;flex-direction:column;height:100%}.fc-v-event .fc-event-time{flex-grow:0;flex-shrink:0;max-height:100%;overflow:hidden}.fc-v-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-height:0}.fc-v-event .fc-event-title{bottom:0;max-height:100%;overflow:hidden;top:0}.fc-v-event:not(.fc-event-start){border-top-left-radius:0;border-top-right-radius:0;border-top-width:0}.fc-v-event:not(.fc-event-end){border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-width:0}.fc-v-event.fc-event-selected:before{left:-10px;right:-10px}.fc-v-event .fc-event-resizer-start{cursor:n-resize}.fc-v-event .fc-event-resizer-end{cursor:s-resize}.fc-v-event:not(.fc-event-selected) .fc-event-resizer{height:var(--fc-event-resizer-thickness);left:0;right:0}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-start{top:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer{left:50%;margin-left:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-start{top:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc .fc-timegrid .fc-daygrid-body{z-index:2}.fc .fc-timegrid-divider{padding:0 0 2px}.fc .fc-timegrid-body{min-height:100%;position:relative;z-index:1}.fc .fc-timegrid-axis-chunk{position:relative}.fc .fc-timegrid-axis-chunk>table,.fc .fc-timegrid-slots{position:relative;z-index:1}.fc .fc-timegrid-slot{border-bottom:0;height:1.5em}.fc .fc-timegrid-slot:empty:before{content:\"\\00a0\"}.fc .fc-timegrid-slot-minor{border-top-style:dotted}.fc .fc-timegrid-slot-label-cushion{display:inline-block;white-space:nowrap}.fc .fc-timegrid-slot-label{vertical-align:middle}.fc .fc-timegrid-axis-cushion,.fc .fc-timegrid-slot-label-cushion{padding:0 4px}.fc .fc-timegrid-axis-frame-liquid{height:100%}.fc .fc-timegrid-axis-frame{align-items:center;display:flex;justify-content:flex-end;overflow:hidden}.fc .fc-timegrid-axis-cushion{flex-shrink:0;max-width:60px}.fc-direction-ltr .fc-timegrid-slot-label-frame{text-align:right}.fc-direction-rtl .fc-timegrid-slot-label-frame{text-align:left}.fc-liquid-hack .fc-timegrid-axis-frame-liquid{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-timegrid-col-frame{min-height:100%;position:relative}.fc-media-screen.fc-liquid-hack .fc-timegrid-col-frame{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols{bottom:0;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols>table{height:100%}.fc-media-screen .fc-timegrid-col-bg,.fc-media-screen .fc-timegrid-col-events,.fc-media-screen .fc-timegrid-now-indicator-container{left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col-bg{z-index:2}.fc .fc-timegrid-col-bg .fc-non-business{z-index:1}.fc .fc-timegrid-col-bg .fc-bg-event{z-index:2}.fc .fc-timegrid-col-bg .fc-highlight{z-index:3}.fc .fc-timegrid-bg-harness{left:0;position:absolute;right:0}.fc .fc-timegrid-col-events{z-index:3}.fc .fc-timegrid-now-indicator-container{bottom:0;overflow:hidden}.fc-direction-ltr .fc-timegrid-col-events{margin:0 2.5% 0 2px}.fc-direction-rtl .fc-timegrid-col-events{margin:0 2px 0 2.5%}.fc-timegrid-event-harness{position:absolute}.fc-timegrid-event-harness>.fc-timegrid-event{bottom:0;left:0;position:absolute;right:0;top:0}.fc-timegrid-event-harness-inset .fc-timegrid-event,.fc-timegrid-event.fc-event-mirror,.fc-timegrid-more-link{box-shadow:0 0 0 1px var(--fc-page-bg-color)}.fc-timegrid-event,.fc-timegrid-more-link{border-radius:3px;font-size:var(--fc-small-font-size)}.fc-timegrid-event{margin-bottom:1px}.fc-timegrid-event .fc-event-main{padding:1px 1px 0}.fc-timegrid-event .fc-event-time{font-size:var(--fc-small-font-size);margin-bottom:1px;white-space:nowrap}.fc-timegrid-event-short .fc-event-main-frame{flex-direction:row;overflow:hidden}.fc-timegrid-event-short .fc-event-time:after{content:\"\\00a0-\\00a0\"}.fc-timegrid-event-short .fc-event-title{font-size:var(--fc-small-font-size)}.fc-timegrid-more-link{background:var(--fc-more-link-bg-color);color:var(--fc-more-link-text-color);cursor:pointer;margin-bottom:1px;position:absolute;z-index:9999}.fc-timegrid-more-link-inner{padding:3px 2px;top:0}.fc-direction-ltr .fc-timegrid-more-link{right:0}.fc-direction-rtl .fc-timegrid-more-link{left:0}.fc .fc-timegrid-now-indicator-arrow,.fc .fc-timegrid-now-indicator-line{pointer-events:none}.fc .fc-timegrid-now-indicator-line{border-color:var(--fc-now-indicator-color);border-style:solid;border-width:1px 0 0;left:0;position:absolute;right:0;z-index:4}.fc .fc-timegrid-now-indicator-arrow{border-color:var(--fc-now-indicator-color);border-style:solid;margin-top:-5px;position:absolute;z-index:4}.fc-direction-ltr .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 0 5px 6px;left:0}.fc-direction-rtl .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 6px 5px 0;right:0}";
(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cw)(css_248z);


/***/ })

}]);
//# sourceMappingURL=src_app_core-component_main_application_calendar_calendar_module_ts.js.map