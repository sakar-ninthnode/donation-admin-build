"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_app_core-component_inventory_inventory_module_ts"],{

/***/ 40007:
/*!*******************************************************************************************!*\
  !*** ./src/app/core-component/inventory/announcement-list/announcement-list.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnnouncementListComponent: () => (/* binding */ AnnouncementListComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/core.index */ 82351);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.index */ 31287);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 22047);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/custom-pagination/custom-pagination.component */ 14860);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 98379);














const _c0 = (a0, a1) => ({
  "d-block": a0,
  "d-none": a1
});
const _c1 = () => ({
  standalone: true
});
function AnnouncementListComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", data_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", data_r1.value, " ");
  }
}
function AnnouncementListComponent_For_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", data_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", data_r2.value, " ");
  }
}
function AnnouncementListComponent_For_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td")(8, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td", 64)(11, "div", 65)(12, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AnnouncementListComponent_For_55_Template_a_click_12_listener() {
      const data_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.editAnnouncement(data_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AnnouncementListComponent_For_55_Template_a_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.confirmColor());
    })("click", function AnnouncementListComponent_For_55_Template_a_click_14_listener() {
      const data_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.deleteAnnouncement(data_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r4.announcement_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", data_r4.images[0].announcement_img_url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function AnnouncementListComponent_div_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r4.profileImageBase64, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function AnnouncementListComponent_div_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "small", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Title is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function AnnouncementListComponent_div_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "small", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Description is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function AnnouncementListComponent_div_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r4.editProfileImageBase64, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
class AnnouncementListComponent {
  constructor(data, paginationService, router, sidebar, fb) {
    this.data = data;
    this.paginationService = paginationService;
    this.router = router;
    this.sidebar = sidebar;
    this.fb = fb;
    this.initChecked = false;
    this.routes = src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.routes;
    // pagination variables
    this.tableData = [];
    this.pageSize = 10;
    this.serialNumberArray = [];
    this.totalData = 0;
    this.showFilter = false;
    this.searchDataValue = '';
    this.profileImageBase64 = ''; // Store the Base64 image
    this.editProfileImageBase64 = ''; // Edit Image
    this.selectedValue1 = '';
    this.selectedValue2 = '';
    this.selectedValue3 = '';
    this.selectedList1 = [{
      value: 'Sort by Date'
    }, {
      value: 'Newest'
    }, {
      value: 'Oldest'
    }];
    this.selectedList2 = [{
      value: 'Choose Brand'
    }, {
      value: 'Lenevo'
    }, {
      value: 'Boat'
    }, {
      value: 'Nike'
    }];
    this.selectedList3 = [{
      value: 'Choose Status'
    }, {
      value: 'Active'
    }, {
      value: 'Inactive'
    }];
    this.filter = false;
    this.isCollapsed = false;
    this.announcementForm = this.fb.group({
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      images: [''] // Store Base64 image
    });
    // Edit Form
    this.editAnnouncementForm = this.fb.group({
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      images: ['']
    });
    this.getTableData();
  }
  getTableData(page) {
    this.tableData = [];
    this.data.getAnnouncementList(page).subscribe(apiRes => {
      apiRes.results.announcements.map((res, index) => {
        this.tableData.push(res);
      });
      this.paginationService.setPaginationData(apiRes.results.pagination);
      this.pagination = this.paginationService.getPaginationData();
    });
  }
  onPageChange(page) {
    this.getTableData(page);
  }
  onFileSelected(event, mode) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (mode === 'create') {
          this.profileImageBase64 = reader.result;
          this.announcementForm.patchValue({
            images: this.profileImageBase64
          });
        } else {
          this.editProfileImageBase64 = reader.result;
          this.editAnnouncementForm.patchValue({
            images: this.editProfileImageBase64
          });
        }
      };
      reader.onerror = error => {
        console.error('Error converting image to Base64:', error);
      };
    }
  }
  onSubmit() {
    if (this.announcementForm.valid) {
      const updatedObj = [this.announcementForm.value];
      this.data.createAnnouncement(updatedObj).subscribe(response => {
        console.log('Announcement created successfully', response);
        this.getTableData();
        // Reset form after submission
        this.announcementForm.reset();
        this.profileImageBase64 = '';
        // Close the modal using Bootstrap's API
        const modalElement = document.getElementById('add-announcement');
        if (modalElement) {
          const modal = bootstrap.Modal.getInstance(modalElement);
          modal.hide();
        }
      }, error => {
        console.error('Error creating user', error);
      });
    }
  }
  editAnnouncement(data) {
    this.editAnnouncementId = data.announcement_id; // Store ID
    this.editAnnouncementForm.patchValue({
      title: data.title,
      description: data.description
      // images: data.images[0]?.announcement_img_url || '',
    });
    this.editProfileImageBase64 = data.images[0]?.announcement_img_url || ''; // Show existing image
  }
  deleteAnnouncement(data) {
    this.editAnnouncementId = data.announcement_id; // Store ID
    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.isConfirmed) {
        this.data.deleteAnnouncement(this.editAnnouncementId).subscribe(response => {
          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Deleted!', 'Announcement has been deleted.', 'success');
          this.getTableData();
        }, error => {
          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Error!', 'Failed to delete announcement.', 'error');
        });
      }
    });
  }
  onUpdate() {
    if (this.editAnnouncementForm.valid) {
      const formData = {
        ...this.editAnnouncementForm.value
      };
      this.data.updateAnnouncement(this.editAnnouncementId, formData).subscribe(response => {
        console.log('Announcement updated successfully', response);
        this.getTableData();
        const modalElement = document.getElementById('edit-announcement');
        if (modalElement) {
          const modal = bootstrap.Modal.getInstance(modalElement);
          modal.hide();
        }
        // this.resetEditForm();
      }, error => {
        console.error('Error updating announcement', error);
      });
    }
  }
  sortData(sort) {
    const data = this.tableData.slice();
    if (!sort.active || sort.direction === '') {
      this.tableData = data;
    } else {
      this.tableData = data.sort((a, b) => {
        const aValue = a[sort.active];
        const bValue = b[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }
  searchData(value) {
    this.dataSource.filter = value.trim().toLowerCase();
    this.tableData = this.dataSource.filteredData;
  }
  confirmColor() {
    const swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().mixin({
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
      } else if (result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().DismissReason).cancel) {
        swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }
  openFilter() {
    this.filter = !this.filter;
  }
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  selectAll(initChecked) {
    if (!initChecked) {
      this.tableData.forEach(f => {
        f.isSelected = true;
      });
    } else {
      this.tableData.forEach(f => {
        f.isSelected = false;
      });
    }
  }
  static {
    this.ɵfac = function AnnouncementListComponent_Factory(t) {
      return new (t || AnnouncementListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_2__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: AnnouncementListComponent,
      selectors: [["app-announcement-list"]],
      decls: 140,
      vars: 19,
      consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-announcement", 1, "btn", "btn-added"], [1, "feather", "icon-plus-circle", "me-2"], [1, "card", "table-list-card"], [1, "card-body"], [1, "table-top"], ["id", "filter_inputs", 1, "card", 3, "ngClass"], [1, "card-body", "pb-0"], [1, "row"], [1, "col-lg-3", "col-sm-6", "col-12"], [1, "input-blocks"], [1, "feather", "icon-zap", "info-img"], ["placeholder", "Choose Unit", 1, "space-select", "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], [1, "feather", "icon-calendar", "info-img"], [1, "input-groupicon", "date-input1"], ["type", "text", "bsDatepicker", "", "container", ".date-input2", "placeholder", "Choose Date", "container", ".date-input1", 1, "datetimepicker"], [1, "feather", "icon-stop-circle", "info-img"], ["placeholder", "Choose Status", 1, "space-select", "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "col-lg-3", "col-sm-6", "col-12", "ms-auto"], [1, "btn", "btn-filters", "ms-auto"], [1, "feather", "icon-search", "feather-search"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew", 3, "matSortChange"], ["mat-sort-header", "brand"], ["mat-sort-header", "logo"], ["mat-sort-header", "createdOn"], [1, "no-sort"], [3, "pageChange", "pagination"], ["id", "add-announcement", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "custom-modal-two"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header", "border-0", "custom-modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body", "new-employee-field"], [3, "ngSubmit", "formGroup"], [1, "col-lg-12"], [1, "new-employee-field"], [1, "profile-pic-upload", "mb-2"], [1, "profile-pic"], [4, "ngIf"], [1, "input-blocks", "mb-0"], [1, "image-upload", "mb-0"], ["type", "file", "accept", "image/*", 3, "change"], [1, "image-uploads"], [1, "col-lg-6"], ["type", "text", "formControlName", "title", 1, "form-control"], ["type", "text", "formControlName", "description", 1, "form-control"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit", 3, "disabled"], ["id", "edit-announcement", 1, "modal", "fade"], [1, "mb-3"], [1, "d-flex", "align-items-center"], [1, "input-blocks", "mb-0", "ml-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "d-flex"], ["alt", "", 2, "height", "100px !important", "max-width", "100px !important", 3, "src"], [1, "action-table-data", 2, "border-bottom-width", "0"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-announcement", 1, "me-2", "p-2", 3, "click"], [1, "feather", "icon-edit", "feather-edit"], ["href", "javascript:void(0);", 1, "confirm-text", "p-2", 3, "click"], [1, "feather", "icon-trash-2", "feather-trash-2"], ["alt", "Preview", 2, "max-width", "100px !important", "margin-top", "10px", 3, "src"], [1, "text-danger"], ["alt", "Preview", 2, "max-width", "100px", 3, "src"]],
      template: function AnnouncementListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Announcement");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Manage your announcement");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 3)(8, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Add New Announcement");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 6)(12, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 9)(15, "div", 10)(16, "div", 11)(17, "div", 12)(18, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-select", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AnnouncementListComponent_Template_mat_select_ngModelChange_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue2, $event) || (ctx.selectedValue2 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](21, AnnouncementListComponent_For_22_Template, 2, 2, "mat-option", 16, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 12)(24, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 12)(29, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-select", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AnnouncementListComponent_Template_mat_select_ngModelChange_31_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue3, $event) || (ctx.selectedValue3 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](32, AnnouncementListComponent_For_33_Template, 2, 2, "mat-option", 16, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 22)(35, "div", 13)(36, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, " Search ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 25)(40, "table", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("matSortChange", function AnnouncementListComponent_Template_table_matSortChange_40_listener($event) {
            return ctx.sortData($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "thead")(42, "tr")(43, "th", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Announcement id");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "th", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Title");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "th", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "th", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Image");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "th", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](54, AnnouncementListComponent_For_55_Template, 16, 4, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "app-custom-pagination", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function AnnouncementListComponent_Template_app_custom_pagination_pageChange_56_listener($event) {
            return ctx.onPageChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 32)(58, "div", 33)(59, "div", 34)(60, "div", 35)(61, "div", 36)(62, "div", 37)(63, "div", 2)(64, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Create Announcement");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "button", 38)(67, "span", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 40)(70, "form", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function AnnouncementListComponent_Template_form_ngSubmit_70_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 11)(72, "div", 42)(73, "div", 43)(74, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "Image");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div", 44)(77, "div", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](78, AnnouncementListComponent_div_78_Template, 2, 1, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "div", 47)(80, "div", 48)(81, "input", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function AnnouncementListComponent_Template_input_change_81_listener($event) {
            return ctx.onFileSelected($event, "create");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "div", 50)(83, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, "Change Image");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "div", 51)(86, "div", 13)(87, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, "Title");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](89, "input", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](90, AnnouncementListComponent_div_90_Template, 3, 0, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "div", 51)(92, "div", 13)(93, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](94, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](95, "input", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](96, AnnouncementListComponent_div_96_Template, 3, 0, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "div", 54)(98, "button", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](99, " Cancel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "button", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101, " Submit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "div", 57)(103, "div", 33)(104, "div", 34)(105, "div", 35)(106, "div", 36)(107, "div", 37)(108, "div", 2)(109, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](110, "Edit Announcement");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "button", 38)(112, "span", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](113, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "div", 40)(115, "form", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function AnnouncementListComponent_Template_form_ngSubmit_115_listener() {
            return ctx.onUpdate();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "div", 58)(117, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](118, "Image");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](119, "div", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](120, AnnouncementListComponent_div_120_Template, 2, 1, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](121, "div", 60)(122, "div", 48)(123, "input", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function AnnouncementListComponent_Template_input_change_123_listener($event) {
            return ctx.onFileSelected($event, "edit");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "div", 50)(125, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](126, "Change Image");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](127, "div", 58)(128, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](129, "Title");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](130, "input", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](131, "div", 58)(132, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](133, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](134, "input", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](135, "div", 54)(136, "button", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](137, " Cancel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](138, "button", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](139, " Update ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()();
        }
        if (rf & 2) {
          let tmp_11_0;
          let tmp_12_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](14, _c0, ctx.filter, !ctx.filter));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](17, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx.selectedList2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](18, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx.selectedList3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx.tableData);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pagination", ctx.pagination);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.announcementForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.profileImageBase64);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_11_0 = ctx.announcementForm.get("title")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx.announcementForm.get("title")) == null ? null : tmp_11_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_12_0 = ctx.announcementForm.get("description")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx.announcementForm.get("description")) == null ? null : tmp_12_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.announcementForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.editAnnouncementForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.editProfileImageBase64);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.editAnnouncementForm.invalid);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortHeader, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_3__.CustomPaginationComponent, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__.BsDatepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__.BsDatepickerInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 17092:
/*!********************************************************************************************!*\
  !*** ./src/app/core-component/inventory/category/category-list/category-list.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryListComponent: () => (/* binding */ CategoryListComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/core.index */ 82351);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.index */ 31287);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 22047);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/custom-pagination/custom-pagination.component */ 14860);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 98379);














const _c0 = ["addCategoryModal"];
const _c1 = (a0, a1) => ({
  "d-block": a0,
  "d-none": a1
});
const _c2 = () => ({
  standalone: true
});
const _c3 = (a0, a1) => ({
  "badge-linesuccess": a0,
  "badge-linedanger": a1
});
function CategoryListComponent_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CategoryListComponent_button_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.clearSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Searched Query: ", ctx_r1.savedSearchText, " \u2716 ");
  }
}
function CategoryListComponent_For_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", data_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", data_r3.value, " ");
  }
}
function CategoryListComponent_For_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", data_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", data_r4.value, " ");
  }
}
function CategoryListComponent_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " No data found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function CategoryListComponent_For_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td")(6, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td", 65)(9, "div", 66)(10, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CategoryListComponent_For_62_Template_a_click_10_listener() {
      const data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.editcategory(data_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r6.category_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](4, _c3, data_r6.is_active === true, data_r6.is_active === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r6.is_active === false ? "Inactive" : "Active");
  }
}
function CategoryListComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "small", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Category name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
class CategoryListComponent {
  constructor(data, paginationService, router, sidebar, fb) {
    this.data = data;
    this.paginationService = paginationService;
    this.router = router;
    this.sidebar = sidebar;
    this.fb = fb;
    this.initChecked = false;
    this.routes = src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.routes;
    this.selectedValue1 = '';
    this.selectedValue2 = '';
    this.selectedValue3 = '';
    // pagination variables
    this.tableData = [];
    this.pageSize = 10;
    this.serialNumberArray = [];
    this.totalData = 0;
    this.showFilter = false;
    this.searchDataValue = '';
    this.filterSearchText = '';
    this.savedSearchText = '';
    this.page = 0;
    this.selectedList1 = [{
      value: 'Sort by Date'
    }, {
      value: 'Newest'
    }, {
      value: 'Oldest'
    }];
    this.filter = false;
    this.isCollapsed = false;
    this.selectedList2 = [{
      value: 'Choose Category'
    }, {
      value: 'Laptop'
    }, {
      value: 'Electronics'
    }];
    this.selectedList3 = [{
      value: 'Choose Status'
    }, {
      value: 'Active'
    }, {
      value: 'Inactive'
    }];
    this.getTableData();
    this.categoryForm = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
    });
    this.editCategoryForm = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      is_active: [true]
    });
  }
  onSubmit() {
    if (this.categoryForm.valid) {
      const updatedObj = {
        name: [this.categoryForm.value.name]
      };
      this.data.createCategory(updatedObj).subscribe(response => {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Success!', 'Category created successfully.', 'success');
        // Reset form
        this.categoryForm.reset();
        this.categoryForm.patchValue({
          status: true
        });
        // Close the modal
        const modalElement = document.getElementById('add-category');
        if (modalElement) {
          const modal = bootstrap.Modal.getInstance(modalElement);
          modal.hide();
        }
        this.getTableData();
      }, error => {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Error!', 'Failed to create category.', 'error');
      });
    }
  }
  editcategory(data) {
    this.editCategoryId = data.category_id; // Store ID
    this.editCategoryForm.patchValue({
      name: data.name,
      is_active: data.is_active
    });
  }
  onUpdate() {
    if (this.editCategoryForm.valid) {
      const formData = {
        ...this.editCategoryForm.value
      };
      this.data.updateCategory(this.editCategoryId, formData).subscribe(response => {
        this.getTableData();
        const modalElement = document.getElementById('edit-category');
        if (modalElement) {
          const modal = bootstrap.Modal.getInstance(modalElement);
          modal.hide();
        }
        // this.resetEditForm();
      }, error => {
        console.error('Error updating announcement', error);
      });
    }
  }
  getTableData() {
    this.tableData = [];
    this.data.getCategoryList(this.page, this.savedSearchText).subscribe(apiRes => {
      apiRes.results.categories.map((res, index) => {
        this.tableData.push(res);
      });
      this.paginationService.setPaginationData(apiRes.results.pagination);
      this.pagination = this.paginationService.getPaginationData();
    });
  }
  onPageChange(page) {
    this.page = page;
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
  sortData(sort) {
    const data = this.tableData.slice();
    if (!sort.active || sort.direction === '') {
      this.tableData = data;
    } else {
      this.tableData = data.sort((a, b) => {
        const aValue = a[sort.active];
        const bValue = b[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }
  searchData(value) {
    this.dataSource.filter = value.trim().toLowerCase();
    this.tableData = this.dataSource.filteredData;
  }
  openFilter() {
    this.filter = !this.filter;
  }
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  confirmColor() {
    const swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().mixin({
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
      } else if (result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().DismissReason).cancel) {
        swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }
  selectAll(initChecked) {
    if (!initChecked) {
      this.tableData.forEach(f => {
        f.isSelected = true;
      });
    } else {
      this.tableData.forEach(f => {
        f.isSelected = false;
      });
    }
  }
  static {
    this.ɵfac = function CategoryListComponent_Factory(t) {
      return new (t || CategoryListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_2__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_0__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: CategoryListComponent,
      selectors: [["app-category-list"]],
      viewQuery: function CategoryListComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.addCategoryModal = _t.first);
        }
      },
      decls: 117,
      vars: 18,
      consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-category", 1, "btn", "btn-added"], [1, "feather", "icon-plus-circle", "me-2"], [1, "card", "table-list-card"], [1, "card-body"], [1, "table-top"], [1, "search-set", "ml-4"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset", 3, "click"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["placeholder", "Search...", 1, "form-control", 3, "ngModelChange", "keydown.enter", "ngModel"], ["class", "btn btn-clear", 3, "click", 4, "ngIf"], ["id", "filter_inputs", 1, "card", 3, "ngClass"], [1, "card-body", "pb-0"], [1, "row"], [1, "col-lg-3", "col-sm-6", "col-12"], [1, "input-blocks"], [1, "feather", "icon-zap", "info-img"], ["placeholder", "Choose Brand", 1, "space-select", "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], [1, "feather", "icon-calendar", "info-img"], [1, "input-groupicon", "date-input1"], ["type", "text", "bsDatepicker", "", "placeholder", "Choose Date", "container", ".date-input1", 1, "datetimepicker"], [1, "feather", "icon-stop-circle", "info-img"], [1, "col-lg-3", "col-sm-6", "col-12", "ms-auto"], [1, "btn", "btn-filters", "ms-auto"], [1, "table-responsive"], [1, "table", "datanew"], ["matSort", "", 3, "matSortChange"], ["mat-sort-header", "categorySlug"], ["mat-sort-header", "category"], ["mat-sort-header", "status"], [1, "no-sort"], [3, "pageChange", "pagination"], ["id", "add-category", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "custom-modal-two"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header", "border-0", "custom-modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], [1, "form-label"], ["type", "text", "formControlName", "name", 1, "form-control"], [4, "ngIf"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit", 3, "disabled"], ["id", "edit-category", 1, "modal", "fade"], [1, "mb-0"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], [1, "status-label"], ["type", "checkbox", "id", "user3", "formControlName", "is_active", 1, "check"], ["for", "user3", 1, "checktoggle"], ["type", "submit", 1, "btn", "btn-submit"], [1, "btn", "btn-clear", 3, "click"], ["colspan", "6", 1, "text-center", "text-muted"], [1, "badge", 3, "ngClass"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-category", 1, "me-2", "p-2", 3, "click"], [1, "feather", "icon-edit", "feather-edit"], [1, "text-danger"]],
      template: function CategoryListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Manage your categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 3)(8, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Add New Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 6)(12, "div", 7)(13, "div", 8)(14, "div", 9)(15, "div", 10)(16, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CategoryListComponent_Template_a_click_16_listener() {
            return ctx.onSearchClick();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 13)(19, "label")(20, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function CategoryListComponent_Template_input_ngModelChange_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.filterSearchText, $event) || (ctx.filterSearchText = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown.enter", function CategoryListComponent_Template_input_keydown_enter_20_listener() {
            return ctx.onSearchClick();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, CategoryListComponent_button_21_Template, 2, 1, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 16)(23, "div", 17)(24, "div", 18)(25, "div", 19)(26, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "mat-select", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function CategoryListComponent_Template_mat_select_ngModelChange_28_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue2, $event) || (ctx.selectedValue2 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](29, CategoryListComponent_For_30_Template, 2, 2, "mat-option", 23, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 19)(32, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 19)(37, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "mat-select", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function CategoryListComponent_Template_mat_select_ngModelChange_39_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedValue3, $event) || (ctx.selectedValue3 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](40, CategoryListComponent_For_41_Template, 2, 2, "mat-option", 23, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 28)(43, "div", 20)(44, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, " Search ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 30)(48, "table", 31)(49, "thead")(50, "tr", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("matSortChange", function CategoryListComponent_Template_tr_matSortChange_50_listener($event) {
            return ctx.sortData($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "th", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Category Id");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "th", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Category Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "th", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "th", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](60, CategoryListComponent_Conditional_60_Template, 3, 0, "tr");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](61, CategoryListComponent_For_62_Template, 12, 7, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "app-custom-pagination", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function CategoryListComponent_Template_app_custom_pagination_pageChange_63_listener($event) {
            return ctx.onPageChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "div", 38)(65, "div", 39)(66, "div", 40)(67, "div", 41)(68, "div", 42)(69, "div", 43)(70, "div", 2)(71, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, "Create Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "button", 44)(74, "span", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div", 46)(77, "form", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function CategoryListComponent_Template_form_ngSubmit_77_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "div", 48)(79, "label", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, "Category Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](81, "input", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](82, CategoryListComponent_div_82_Template, 3, 0, "div", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div", 52)(84, "button", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](85, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "button", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](87, "Create Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "div", 55)(89, "div", 39)(90, "div", 40)(91, "div", 41)(92, "div", 42)(93, "div", 43)(94, "div", 2)(95, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](96, "Edit Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "button", 44)(98, "span", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](99, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "div", 46)(101, "form", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function CategoryListComponent_Template_form_ngSubmit_101_listener() {
            return ctx.onUpdate();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "div", 48)(103, "label", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](104, "Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](105, "input", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "div", 56)(107, "div", 57)(108, "span", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](109, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](110, "input", 59)(111, "label", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "div", 52)(113, "button", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](114, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](115, "button", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](116, "Save Changes");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()();
        }
        if (rf & 2) {
          let tmp_13_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.filterSearchText);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.savedSearchText);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](13, _c1, ctx.filter, !ctx.filter));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](16, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx.selectedList2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](17, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx.selectedList3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](60, (ctx.tableData == null ? null : ctx.tableData.length) === 0 ? 60 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx.tableData);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pagination", ctx.pagination);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.categoryForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_13_0 = ctx.categoryForm.get("name")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx.categoryForm.get("name")) == null ? null : tmp_13_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.categoryForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.editCategoryForm);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortHeader, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_3__.CustomPaginationComponent, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__.BsDatepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__.BsDatepickerInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 90678:
/*!**********************************************************************!*\
  !*** ./src/app/core-component/inventory/inventory-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InventoryRoutingModule: () => (/* binding */ InventoryRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _inventory_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inventory.component */ 69840);
/* harmony import */ var _announcement_list_announcement_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./announcement-list/announcement-list.component */ 40007);
/* harmony import */ var _category_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category/category-list/category-list.component */ 17092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);






const routes = [{
  path: '',
  component: _inventory_component__WEBPACK_IMPORTED_MODULE_0__.InventoryComponent,
  children: [{
    path: 'announcement-list',
    component: _announcement_list_announcement_list_component__WEBPACK_IMPORTED_MODULE_1__.AnnouncementListComponent
  }, {
    path: 'category-list',
    component: _category_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_2__.CategoryListComponent
  }, {
    path: 'category',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core-component_inventory_category_category_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./category/category.module */ 23584)).then(m => m.CategoryModule)
  }]
}];
class InventoryRoutingModule {
  static {
    this.ɵfac = function InventoryRoutingModule_Factory(t) {
      return new (t || InventoryRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: InventoryRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](InventoryRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 69840:
/*!*****************************************************************!*\
  !*** ./src/app/core-component/inventory/inventory.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InventoryComponent: () => (/* binding */ InventoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);


class InventoryComponent {
  static {
    this.ɵfac = function InventoryComponent_Factory(t) {
      return new (t || InventoryComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InventoryComponent,
      selectors: [["app-inventory"]],
      decls: 1,
      vars: 0,
      template: function InventoryComponent_Template(rf, ctx) {
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

/***/ 14847:
/*!**************************************************************!*\
  !*** ./src/app/core-component/inventory/inventory.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InventoryModule: () => (/* binding */ InventoryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _inventory_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inventory-routing.module */ 90678);
/* harmony import */ var _inventory_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventory.component */ 69840);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _announcement_list_announcement_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./announcement-list/announcement-list.component */ 40007);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);






class InventoryModule {
  static {
    this.ɵfac = function InventoryModule_Factory(t) {
      return new (t || InventoryModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: InventoryModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _inventory_routing_module__WEBPACK_IMPORTED_MODULE_0__.InventoryRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.sharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](InventoryModule, {
    declarations: [_inventory_component__WEBPACK_IMPORTED_MODULE_1__.InventoryComponent, _announcement_list_announcement_list_component__WEBPACK_IMPORTED_MODULE_3__.AnnouncementListComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _inventory_routing_module__WEBPACK_IMPORTED_MODULE_0__.InventoryRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.sharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_core-component_inventory_inventory_module_ts.js.map