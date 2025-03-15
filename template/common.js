"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["common"],{

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
//# sourceMappingURL=common.js.map