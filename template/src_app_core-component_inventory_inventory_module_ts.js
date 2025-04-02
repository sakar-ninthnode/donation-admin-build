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
/* harmony import */ var C_work_git_sakar_nithnode_admin_donation_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var src_app_core_core_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/core.index */ 82351);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! xlsx */ 13857);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ 85841);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.index */ 31287);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 22047);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/custom-pagination/custom-pagination.component */ 14860);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 98379);


















const _c0 = (a0, a1) => ({
  "d-block": a0,
  "d-none": a1
});
const _c1 = () => ({
  standalone: true
});
function AnnouncementListComponent_For_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", data_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", data_r1.value, " ");
  }
}
function AnnouncementListComponent_For_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", data_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", data_r2.value, " ");
  }
}
function AnnouncementListComponent_For_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td")(8, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td", 67)(11, "div", 68)(12, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AnnouncementListComponent_For_59_Template_a_click_12_listener() {
      const data_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.editAnnouncement(data_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AnnouncementListComponent_For_59_Template_a_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.confirmColor());
    })("click", function AnnouncementListComponent_For_59_Template_a_click_14_listener() {
      const data_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.deleteAnnouncement(data_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r4.announcement_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", data_r4.images[0].announcement_img_url, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function AnnouncementListComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r4.profileImageBase64, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function AnnouncementListComponent_div_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "small", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Title is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AnnouncementListComponent_div_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "small", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Description is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AnnouncementListComponent_div_124_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r4.editProfileImageBase64, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
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
    this.routes = src_app_core_core_index__WEBPACK_IMPORTED_MODULE_1__.routes;
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
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      images: [''] // Store Base64 image
    });
    // Edit Form
    this.editAnnouncementForm = this.fb.group({
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
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
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        const aspectRatio = img.width / img.height;
        const minAspect = 1.5;
        const maxAspect = 2.1;
        if (aspectRatio >= minAspect && aspectRatio <= maxAspect) {
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
        } else {
          alert(`Image must be in 2:1 aspect ratio (example: 495x320 or 600x400 ).\nSelected: ${img.width}x${img.height}`);
        }
      };
    };
    reader.onerror = error => {
      console.error('Error converting image to Base64:', error);
    };
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
    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
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
          sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire('Deleted!', 'Announcement has been deleted.', 'success');
          this.getTableData();
        }, error => {
          sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire('Error!', 'Failed to delete announcement.', 'error');
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
  fetchAllPagesFiltered() {
    var _this = this;
    return (0,C_work_git_sakar_nithnode_admin_donation_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let allData = [];
      let page = 1;
      let pageSize = 10;
      let hasMore = true;
      while (hasMore) {
        const res = yield _this.data.getAnnouncementList(page).toPromise();
        allData = allData.concat(res.results.announcements);
        hasMore = res.results.announcements.length === pageSize;
        page++;
      }
      const monitorFields = ['announcement_id', 'title', 'description', 'images'];
      const filtered = allData.map(single => {
        const picked = {};
        monitorFields.forEach(field => {
          if (field === 'images') {
            picked['images'] = single.images[0].announcement_img_url || '';
          } else {
            picked[field] = single[field];
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
      const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_8__.utils.json_to_sheet(allData);
      const workbook = {
        Sheets: {
          data: worksheet
        },
        SheetNames: ['data']
      };
      const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_8__.write(workbook, {
        bookType: 'xlsx',
        type: 'array'
      });
      const blobData = new Blob([excelBuffer], {
        type: 'application/octet-stream'
      });
      file_saver__WEBPACK_IMPORTED_MODULE_3__.saveAs(blobData, 'announcements.xlsx');
    })();
  }
  static {
    this.ɵfac = function AnnouncementListComponent_Factory(t) {
      return new (t || AnnouncementListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_4__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_1__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: AnnouncementListComponent,
      selectors: [["app-announcement-list"]],
      decls: 144,
      vars: 19,
      consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Excel", "matTooltipPosition", "above", 3, "click"], ["src", "assets/img/icons/excel.svg", "alt", "img"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-announcement", 1, "btn", "btn-added"], [1, "feather", "icon-plus-circle", "me-2"], [1, "card", "table-list-card"], [1, "card-body"], [1, "table-top"], ["id", "filter_inputs", 1, "card", 3, "ngClass"], [1, "card-body", "pb-0"], [1, "row"], [1, "col-lg-3", "col-sm-6", "col-12"], [1, "input-blocks"], [1, "feather", "icon-zap", "info-img"], ["placeholder", "Choose Unit", 1, "space-select", "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], [1, "feather", "icon-calendar", "info-img"], [1, "input-groupicon", "date-input1"], ["type", "text", "bsDatepicker", "", "container", ".date-input2", "placeholder", "Choose Date", "container", ".date-input1", 1, "datetimepicker"], [1, "feather", "icon-stop-circle", "info-img"], ["placeholder", "Choose Status", 1, "space-select", "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "col-lg-3", "col-sm-6", "col-12", "ms-auto"], [1, "btn", "btn-filters", "ms-auto"], [1, "feather", "icon-search", "feather-search"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew", 3, "matSortChange"], ["mat-sort-header", "brand"], ["mat-sort-header", "logo"], ["mat-sort-header", "createdOn"], [1, "no-sort"], [3, "pageChange", "pagination"], ["id", "add-announcement", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "custom-modal-two"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header", "border-0", "custom-modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body", "new-employee-field"], [3, "ngSubmit", "formGroup"], [1, "col-lg-12"], [1, "new-employee-field"], [1, "profile-pic-upload", "mb-2"], [1, "profile-pic"], [4, "ngIf"], [1, "input-blocks", "mb-0"], [1, "image-upload", "mb-0"], ["type", "file", "accept", "image/*", 3, "change"], [1, "image-uploads"], [1, "col-lg-6"], ["type", "text", "formControlName", "title", 1, "form-control"], ["type", "text", "formControlName", "description", 1, "form-control"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit", 3, "disabled"], ["id", "edit-announcement", 1, "modal", "fade"], [1, "mb-3"], [1, "d-flex", "align-items-center"], [1, "input-blocks", "mb-0", "ml-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "d-flex"], ["alt", "", 2, "height", "100px !important", "max-width", "100px !important", 3, "src"], [1, "action-table-data", 2, "border-bottom-width", "0"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-announcement", 1, "me-2", "p-2", 3, "click"], [1, "feather", "icon-edit", "feather-edit"], ["href", "javascript:void(0);", 1, "confirm-text", "p-2", 3, "click"], [1, "feather", "icon-trash-2", "feather-trash-2"], ["alt", "Preview", 2, "max-width", "100px !important", "margin-top", "10px", 3, "src"], [1, "text-danger"], ["alt", "Preview", 2, "max-width", "100px", 3, "src"]],
      template: function AnnouncementListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Announcement");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Manage your announcement");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ul", 3)(8, "li")(9, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AnnouncementListComponent_Template_a_click_9_listener() {
            return ctx.exportAllData();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 6)(12, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Add New Announcement");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 9)(16, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 12)(19, "div", 13)(20, "div", 14)(21, "div", 15)(22, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "mat-select", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AnnouncementListComponent_Template_mat_select_ngModelChange_24_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.selectedValue2, $event) || (ctx.selectedValue2 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](25, AnnouncementListComponent_For_26_Template, 2, 2, "mat-option", 19, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 15)(28, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 15)(33, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "mat-select", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AnnouncementListComponent_Template_mat_select_ngModelChange_35_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.selectedValue3, $event) || (ctx.selectedValue3 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](36, AnnouncementListComponent_For_37_Template, 2, 2, "mat-option", 19, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 25)(39, "div", 16)(40, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, " Search ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 28)(44, "table", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("matSortChange", function AnnouncementListComponent_Template_table_matSortChange_44_listener($event) {
            return ctx.sortData($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "thead")(46, "tr")(47, "th", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "Announcement id");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "th", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "Title");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "th", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "th", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "Image");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "th", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](58, AnnouncementListComponent_For_59_Template, 16, 4, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "app-custom-pagination", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pageChange", function AnnouncementListComponent_Template_app_custom_pagination_pageChange_60_listener($event) {
            return ctx.onPageChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "div", 35)(62, "div", 36)(63, "div", 37)(64, "div", 38)(65, "div", 39)(66, "div", 40)(67, "div", 2)(68, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69, "Create Announcement");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "button", 41)(71, "span", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "div", 43)(74, "form", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function AnnouncementListComponent_Template_form_ngSubmit_74_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "div", 14)(76, "div", 45)(77, "div", 46)(78, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79, "Image");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "div", 47)(81, "div", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](82, AnnouncementListComponent_div_82_Template, 2, 1, "div", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "div", 50)(84, "div", 51)(85, "input", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function AnnouncementListComponent_Template_input_change_85_listener($event) {
            return ctx.onFileSelected($event, "create");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "div", 53)(87, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](88, "Change Image");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "div", 54)(90, "div", 16)(91, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](92, "Title");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](93, "input", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](94, AnnouncementListComponent_div_94_Template, 3, 0, "div", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "div", 54)(96, "div", 16)(97, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](98, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](99, "input", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](100, AnnouncementListComponent_div_100_Template, 3, 0, "div", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](101, "div", 57)(102, "button", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](103, " Cancel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](104, "button", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](105, " Submit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "div", 60)(107, "div", 36)(108, "div", 37)(109, "div", 38)(110, "div", 39)(111, "div", 40)(112, "div", 2)(113, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](114, "Edit Announcement");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](115, "button", 41)(116, "span", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](117, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](118, "div", 43)(119, "form", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function AnnouncementListComponent_Template_form_ngSubmit_119_listener() {
            return ctx.onUpdate();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](120, "div", 61)(121, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](122, "Image");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](123, "div", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](124, AnnouncementListComponent_div_124_Template, 2, 1, "div", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](125, "div", 63)(126, "div", 51)(127, "input", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function AnnouncementListComponent_Template_input_change_127_listener($event) {
            return ctx.onFileSelected($event, "edit");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](128, "div", 53)(129, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](130, "Change Image");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](131, "div", 61)(132, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](133, "Title");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](134, "input", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](135, "div", 61)(136, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](137, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](138, "input", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](139, "div", 57)(140, "button", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](141, " Cancel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](142, "button", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](143, " Update ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()();
        }
        if (rf & 2) {
          let tmp_11_0;
          let tmp_12_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](14, _c0, ctx.filter, !ctx.filter));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](17, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](ctx.selectedList2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](18, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](ctx.selectedList3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](ctx.tableData);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pagination", ctx.pagination);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.announcementForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.profileImageBase64);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_11_0 = ctx.announcementForm.get("title")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx.announcementForm.get("title")) == null ? null : tmp_11_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_12_0 = ctx.announcementForm.get("description")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx.announcementForm.get("description")) == null ? null : tmp_12_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.announcementForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.editAnnouncementForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.editProfileImageBase64);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.editAnnouncementForm.invalid);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortHeader, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_5__.CustomPaginationComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltip, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__.BsDatepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__.BsDatepickerInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName],
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
/* harmony import */ var C_work_git_sakar_nithnode_admin_donation_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var src_app_core_core_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/core.index */ 82351);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! xlsx */ 13857);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ 85841);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.index */ 31287);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 22047);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/custom-pagination/custom-pagination.component */ 14860);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 98379);


















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
function CategoryListComponent_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CategoryListComponent_button_25_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.clearSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Searched Query: ", ctx_r1.savedSearchText, " \u2716 ");
  }
}
function CategoryListComponent_For_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", data_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", data_r3.value, " ");
  }
}
function CategoryListComponent_For_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", data_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", data_r4.value, " ");
  }
}
function CategoryListComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " No data found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function CategoryListComponent_For_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td")(6, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td", 68)(9, "div", 69)(10, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CategoryListComponent_For_66_Template_a_click_10_listener() {
      const data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.editcategory(data_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r6.category_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](4, _c3, data_r6.is_active === true, data_r6.is_active === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r6.is_active === false ? "Inactive" : "Active");
  }
}
function CategoryListComponent_div_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "small", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Category name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
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
    this.routes = src_app_core_core_index__WEBPACK_IMPORTED_MODULE_1__.routes;
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
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
    });
    this.editCategoryForm = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      is_active: [true]
    });
  }
  onSubmit() {
    if (this.categoryForm.valid) {
      const updatedObj = {
        name: [this.categoryForm.value.name]
      };
      this.data.createCategory(updatedObj).subscribe(response => {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire('Success!', 'Category created successfully.', 'success');
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
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire('Error!', 'Failed to create category.', 'error');
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
  fetchAllPagesFiltered() {
    var _this = this;
    return (0,C_work_git_sakar_nithnode_admin_donation_admin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let allData = [];
      let page = 1;
      let pageSize = 10;
      let hasMore = true;
      while (hasMore) {
        const res = yield _this.data.getCategoryList(page, '').toPromise();
        allData = allData.concat(res.results.categories);
        hasMore = res.results.categories.length === pageSize;
        page++;
      }
      const monitorFields = ['category_id', 'name', 'is_active'];
      const filtered = allData.map(single => {
        const picked = {};
        monitorFields.forEach(field => {
          picked[field] = single[field];
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
      const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_8__.utils.json_to_sheet(allData);
      const workbook = {
        Sheets: {
          data: worksheet
        },
        SheetNames: ['data']
      };
      const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_8__.write(workbook, {
        bookType: 'xlsx',
        type: 'array'
      });
      const blobData = new Blob([excelBuffer], {
        type: 'application/octet-stream'
      });
      file_saver__WEBPACK_IMPORTED_MODULE_3__.saveAs(blobData, 'categories.xlsx');
    })();
  }
  static {
    this.ɵfac = function CategoryListComponent_Factory(t) {
      return new (t || CategoryListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_shared_index__WEBPACK_IMPORTED_MODULE_4__.PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_core_index__WEBPACK_IMPORTED_MODULE_1__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: CategoryListComponent,
      selectors: [["app-category-list"]],
      viewQuery: function CategoryListComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.addCategoryModal = _t.first);
        }
      },
      decls: 121,
      vars: 18,
      consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel", "matTooltip", "Excel", "matTooltipPosition", "above", 3, "click"], ["src", "assets/img/icons/excel.svg", "alt", "img"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-category", 1, "btn", "btn-added"], [1, "feather", "icon-plus-circle", "me-2"], [1, "card", "table-list-card"], [1, "card-body"], [1, "table-top"], [1, "search-set", "ml-4"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset", 3, "click"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["placeholder", "Search...", 1, "form-control", 3, "ngModelChange", "keydown.enter", "ngModel"], ["class", "btn btn-clear", 3, "click", 4, "ngIf"], ["id", "filter_inputs", 1, "card", 3, "ngClass"], [1, "card-body", "pb-0"], [1, "row"], [1, "col-lg-3", "col-sm-6", "col-12"], [1, "input-blocks"], [1, "feather", "icon-zap", "info-img"], ["placeholder", "Choose Brand", 1, "space-select", "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], [1, "feather", "icon-calendar", "info-img"], [1, "input-groupicon", "date-input1"], ["type", "text", "bsDatepicker", "", "placeholder", "Choose Date", "container", ".date-input1", 1, "datetimepicker"], [1, "feather", "icon-stop-circle", "info-img"], [1, "col-lg-3", "col-sm-6", "col-12", "ms-auto"], [1, "btn", "btn-filters", "ms-auto"], [1, "table-responsive"], [1, "table", "datanew"], ["matSort", "", 3, "matSortChange"], ["mat-sort-header", "categorySlug"], ["mat-sort-header", "category"], ["mat-sort-header", "status"], [1, "no-sort"], [3, "pageChange", "pagination"], ["id", "add-category", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "custom-modal-two"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header", "border-0", "custom-modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], [1, "form-label"], ["type", "text", "formControlName", "name", 1, "form-control"], [4, "ngIf"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit", 3, "disabled"], ["id", "edit-category", 1, "modal", "fade"], [1, "mb-0"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], [1, "status-label"], ["type", "checkbox", "id", "user3", "formControlName", "is_active", 1, "check"], ["for", "user3", 1, "checktoggle"], ["type", "submit", 1, "btn", "btn-submit"], [1, "btn", "btn-clear", 3, "click"], ["colspan", "6", 1, "text-center", "text-muted"], [1, "badge", 3, "ngClass"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-category", 1, "me-2", "p-2", 3, "click"], [1, "feather", "icon-edit", "feather-edit"], [1, "text-danger"]],
      template: function CategoryListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Manage your categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ul", 3)(8, "li")(9, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CategoryListComponent_Template_a_click_9_listener() {
            return ctx.exportAllData();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 6)(12, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Add New Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "div", 12)(19, "div", 13)(20, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CategoryListComponent_Template_a_click_20_listener() {
            return ctx.onSearchClick();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 16)(23, "label")(24, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function CategoryListComponent_Template_input_ngModelChange_24_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.filterSearchText, $event) || (ctx.filterSearchText = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keydown.enter", function CategoryListComponent_Template_input_keydown_enter_24_listener() {
            return ctx.onSearchClick();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, CategoryListComponent_button_25_Template, 2, 1, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 19)(27, "div", 20)(28, "div", 21)(29, "div", 22)(30, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "mat-select", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function CategoryListComponent_Template_mat_select_ngModelChange_32_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.selectedValue2, $event) || (ctx.selectedValue2 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](33, CategoryListComponent_For_34_Template, 2, 2, "mat-option", 26, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 22)(36, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 22)(41, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](42, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "mat-select", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function CategoryListComponent_Template_mat_select_ngModelChange_43_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.selectedValue3, $event) || (ctx.selectedValue3 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](44, CategoryListComponent_For_45_Template, 2, 2, "mat-option", 26, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 31)(47, "div", 23)(48, "a", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](49, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, " Search ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 33)(52, "table", 34)(53, "thead")(54, "tr", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("matSortChange", function CategoryListComponent_Template_tr_matSortChange_54_listener($event) {
            return ctx.sortData($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "th", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "Category Id");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "th", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "Category Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "th", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "th", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](64, CategoryListComponent_Conditional_64_Template, 3, 0, "tr");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](65, CategoryListComponent_For_66_Template, 12, 7, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "app-custom-pagination", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pageChange", function CategoryListComponent_Template_app_custom_pagination_pageChange_67_listener($event) {
            return ctx.onPageChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "div", 41)(69, "div", 42)(70, "div", 43)(71, "div", 44)(72, "div", 45)(73, "div", 46)(74, "div", 2)(75, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](76, "Create Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "button", 47)(78, "span", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "div", 49)(81, "form", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function CategoryListComponent_Template_form_ngSubmit_81_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "div", 51)(83, "label", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](84, "Category Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](85, "input", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](86, CategoryListComponent_div_86_Template, 3, 0, "div", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "div", 55)(88, "button", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](89, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "button", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](91, "Create Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "div", 58)(93, "div", 42)(94, "div", 43)(95, "div", 44)(96, "div", 45)(97, "div", 46)(98, "div", 2)(99, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](100, "Edit Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](101, "button", 47)(102, "span", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](103, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](104, "div", 49)(105, "form", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function CategoryListComponent_Template_form_ngSubmit_105_listener() {
            return ctx.onUpdate();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "div", 51)(107, "label", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](108, "Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](109, "input", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](110, "div", 59)(111, "div", 60)(112, "span", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](113, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](114, "input", 62)(115, "label", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](116, "div", 55)(117, "button", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](118, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](119, "button", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](120, "Save Changes");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()();
        }
        if (rf & 2) {
          let tmp_13_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.filterSearchText);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.savedSearchText);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](13, _c1, ctx.filter, !ctx.filter));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](16, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](ctx.selectedList2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](17, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](ctx.selectedList3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](64, (ctx.tableData == null ? null : ctx.tableData.length) === 0 ? 64 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](ctx.tableData);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pagination", ctx.pagination);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.categoryForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_13_0 = ctx.categoryForm.get("name")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx.categoryForm.get("name")) == null ? null : tmp_13_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.categoryForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.editCategoryForm);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortHeader, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_5__.CustomPaginationComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltip, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__.BsDatepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__.BsDatepickerInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName],
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