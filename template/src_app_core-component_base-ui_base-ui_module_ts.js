"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_base-ui_base-ui_module_ts"],{

/***/ 68014:
/*!******************************************************************!*\
  !*** ./src/app/core-component/base-ui/base-ui-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseUiRoutingModule: () => (/* binding */ BaseUiRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _base_ui_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-ui.component */ 49496);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _base_ui_component__WEBPACK_IMPORTED_MODULE_0__.BaseUiComponent,
  children: [{
    path: 'ui-sweetalerts',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("src_app_core-component_base-ui_ui-sweetalerts_ui-sweetalerts_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ui-sweetalerts/ui-sweetalerts.module */ 3402)).then(m => m.UiSweetalertsModule)
  }, {
    path: 'ui-spinner',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_base-ui_ui-spinner_ui-spinner_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ui-spinner/ui-spinner.module */ 21898)).then(m => m.UiSpinnerModule)
  }, {
    path: 'ui-rangeslider',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_base-ui_ui-rangeslider_ui-rangeslider_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ui-rangeslider/ui-rangeslider.module */ 38052)).then(m => m.UiRangesliderModule)
  }, {
    path: 'ui-progress',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_base-ui_ui-progress_ui-progress_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ui-progress/ui-progress.module */ 27964)).then(m => m.UiProgressModule)
  }, {
    path: 'ui-video',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_base-ui_ui-video_ui-video_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ui-video/ui-video.module */ 76918)).then(m => m.UiVideoModule)
  }, {
    path: 'ui-typography',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_base-ui_ui-typography_ui-typography_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ui-typography/ui-typography.module */ 76644)).then(m => m.UiTypographyModule)
  }, {
    path: 'ui-carousel',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_base-ui_ui-carousel_ui-carousel_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ui-carousel/ui-carousel.module */ 20572)).then(m => m.UiCarouselModule)
  }, {
    path: 'ui-cards',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_base-ui_ui-cards_ui-cards_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ui-cards/ui-cards.module */ 81662)).then(m => m.UiCardsModule)
  }, {
    path: 'ui-buttons-group',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_base-ui_ui-buttons-group_ui-buttons-group_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ui-buttons-group/ui-buttons-group.module */ 54302)).then(m => m.UiButtonsGroupModule)
  }, {
    path: 'ui-buttons',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_base-ui_ui-buttons_ui-buttons_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ui-buttons/ui-buttons.module */ 31842)).then(m => m.UiButtonsModule)
  }, {
    path: 'ui-breadcrumb',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_base-ui_ui-breadcrumb_ui-breadcrumb_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ui-breadcrumb/ui-breadcrumb.module */ 98888)).then(m => m.UiBreadcrumbModule)
  }, {
    path: 'ui-borders',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_base-ui_ui-borders_ui-borders_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ui-borders/ui-borders.module */ 77822)).then(m => m.UiBordersModule)
  }, {
    path: 'ui-badges',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_base-ui_ui-badges_ui-badges_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ui-badges/ui-badges.module */ 33384)).then(m => m.UiBadgesModule)
  }, {
    path: 'ui-accordion',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_base-ui_ui-accordion_ui-accordion_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ui-accordion/ui-accordion.module */ 61168)).then(m => m.UiAccordionModule)
  }, {
    path: 'ui-alerts',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_base-ui_ui-alerts_ui-alerts_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ui-alerts/ui-alerts.module */ 3736)).then(m => m.UiAlertsModule)
  }, {
    path: 'ui-avatar',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_base-ui_ui-avatar_ui-avatar_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ui-avatar/ui-avatar.module */ 15980)).then(m => m.UiAvatarModule)
  }, {
    path: 'ui-popovers',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_base-ui_ui-popovers_ui-popovers_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ui-popovers/ui-popovers.module */ 55676)).then(m => m.UiPopoversModule)
  }, {
    path: 'ui-placeholders',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_base-ui_ui-placeholders_ui-placeholders_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ui-placeholders/ui-placeholders.module */ 39484)).then(m => m.UiPlaceholdersModule)
  }, {
    path: 'ui-pagination',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_base-ui_ui-pagination_ui-pagination_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ui-pagination/ui-pagination.module */ 19924)).then(m => m.UiPaginationModule)
  }, {
    path: 'ui-offcanvas',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_base-ui_ui-offcanvas_ui-offcanvas_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ui-offcanvas/ui-offcanvas.module */ 90350)).then(m => m.UiOffcanvasModule)
  }, {
    path: 'ui-nav-tabs',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_base-ui_ui-nav-tabs_ui-nav-tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ui-nav-tabs/ui-nav-tabs.module */ 42476)).then(m => m.UiNavTabsModule)
  }, {
    path: 'ui-modals',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_base-ui_ui-modals_ui-modals_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ui-modals/ui-modals.module */ 64332)).then(m => m.UiModalsModule)
  }, {
    path: 'ui-media',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_base-ui_ui-media_ui-media_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ui-media/ui-media.module */ 88348)).then(m => m.UiMediaModule)
  }, {
    path: 'ui-lightbox',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_base-ui_ui-lightbox_ui-lightbox_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ui-lightbox/ui-lightbox.module */ 39648)).then(m => m.UiLightboxModule)
  }, {
    path: 'ui-images',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_base-ui_ui-images_ui-images_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ui-images/ui-images.module */ 81500)).then(m => m.UiImagesModule)
  }, {
    path: 'ui-grid',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_base-ui_ui-grid_ui-grid_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ui-grid/ui-grid.module */ 3868)).then(m => m.UiGridModule)
  }, {
    path: 'ui-tooltips',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_base-ui_ui-tooltips_ui-tooltips_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ui-tooltips/ui-tooltips.module */ 65808)).then(m => m.UiTooltipsModule)
  }, {
    path: 'ui-toasts',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_base-ui_ui-toasts_ui-toasts_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ui-toasts/ui-toasts.module */ 52008)).then(m => m.UiToastsModule)
  }, {
    path: 'ui-dropdowns',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_base-ui_ui-dropdowns_ui-dropdowns_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ui-dropdowns/ui-dropdowns.module */ 14440)).then(m => m.UiDropdownsModule)
  }, {
    path: 'ui-colors',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_base-ui_ui-colors_ui-colors_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ui-colors/ui-colors.module */ 89112)).then(m => m.UiColorsModule)
  }]
}];
class BaseUiRoutingModule {
  static {
    this.ɵfac = function BaseUiRoutingModule_Factory(t) {
      return new (t || BaseUiRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: BaseUiRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BaseUiRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 49496:
/*!*************************************************************!*\
  !*** ./src/app/core-component/base-ui/base-ui.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseUiComponent: () => (/* binding */ BaseUiComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);


class BaseUiComponent {
  static {
    this.ɵfac = function BaseUiComponent_Factory(t) {
      return new (t || BaseUiComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BaseUiComponent,
      selectors: [["app-base-ui"]],
      decls: 1,
      vars: 0,
      template: function BaseUiComponent_Template(rf, ctx) {
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

/***/ 20471:
/*!**********************************************************!*\
  !*** ./src/app/core-component/base-ui/base-ui.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseUiModule: () => (/* binding */ BaseUiModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _base_ui_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-ui-routing.module */ 68014);
/* harmony import */ var _base_ui_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-ui.component */ 49496);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);




class BaseUiModule {
  static {
    this.ɵfac = function BaseUiModule_Factory(t) {
      return new (t || BaseUiModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: BaseUiModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _base_ui_routing_module__WEBPACK_IMPORTED_MODULE_0__.BaseUiRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BaseUiModule, {
    declarations: [_base_ui_component__WEBPACK_IMPORTED_MODULE_1__.BaseUiComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _base_ui_routing_module__WEBPACK_IMPORTED_MODULE_0__.BaseUiRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_base-ui_base-ui_module_ts.js.map