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
const _c2 = (a0, a1) => ({
  "badge-linesuccess": a0,
  "badge-linedanger": a1
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
function AnnouncementListComponent_For_61_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td")(8, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "img", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td")(11, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td", 76)(14, "div", 77)(15, "a", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AnnouncementListComponent_For_61_Template_a_click_15_listener() {
      const data_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.editAnnouncement(data_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AnnouncementListComponent_For_61_Template_a_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.confirmColor());
    })("click", function AnnouncementListComponent_For_61_Template_a_click_17_listener() {
      const data_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.deleteAnnouncement(data_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "i", 81);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](6, _c2, data_r4.is_active === true, data_r4.is_active === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r4.is_active === false ? "Inactive" : "Active");
  }
}
function AnnouncementListComponent_div_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r4.profileImageBase64, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function AnnouncementListComponent_div_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "small", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Title is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AnnouncementListComponent_div_102_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "small", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Description is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AnnouncementListComponent_div_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "small", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Start date is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AnnouncementListComponent_div_114_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "small", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "End date is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AnnouncementListComponent_div_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "small", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "End date must be after start date.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AnnouncementListComponent_div_139_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r4.editProfileImageBase64, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function AnnouncementListComponent_div_162_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "small", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "End date must be after start date.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
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
      start_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      end_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      images: [''] // Store Base64 image
    }, {
      validator: this.dateRangeValidator
    });
    // Edit Form
    this.editAnnouncementForm = this.fb.group({
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      start_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      end_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      images: [''],
      is_active: [true]
    }, {
      validator: this.dateRangeValidator
    });
    this.getTableData();
  }
  dateRangeValidator(formGroup) {
    const startDate = formGroup.get('start_date')?.value;
    const endDate = formGroup.get('end_date')?.value;
    if (startDate && endDate && new Date(startDate) > new Date(endDate)) {
      return {
        dateRange: true
      };
    }
    return null;
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
      const formValue = this.announcementForm.value;
      const updatedObj = [{
        ...formValue,
        start_date: new Date(formValue.start_date).toISOString(),
        end_date: new Date(formValue.end_date).toISOString(),
        type: "General"
      }];
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
    // Format dates to YYYY-MM-DD format for the date input
    const formatDateForInput = dateString => {
      if (!dateString) return '';
      // Extract just the date part from ISO string (YYYY-MM-DD)
      return dateString.substring(0, 10);
    };
    this.editAnnouncementForm.patchValue({
      title: data.title,
      description: data.description,
      start_date: formatDateForInput(data.start_date),
      end_date: formatDateForInput(data.end_date),
      type: data.type || "General",
      is_active: data.is_active ?? true
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
      const formValue = this.editAnnouncementForm.value;
      const formData = {
        ...formValue,
        start_date: new Date(formValue.start_date).toISOString(),
        end_date: new Date(formValue.end_date).toISOString(),
        type: "General"
      };
      this.data.updateAnnouncement(this.editAnnouncementId, formData).subscribe(response => {
        console.log('Announcement updated successfully', response);
        this.getTableData();
        const modalElement = document.getElementById('edit-announcement');
        if (modalElement) {
          const modal = bootstrap.Modal.getInstance(modalElement);
          modal.hide();
        }
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
      decls: 174,
      vars: 23,
      consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Excel", "matTooltipPosition", "above", 3, "click"], ["src", "assets/img/icons/excel.svg", "alt", "img"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-announcement", 1, "btn", "btn-added"], [1, "feather", "icon-plus-circle", "me-2"], [1, "card", "table-list-card"], [1, "card-body"], [1, "table-top"], ["id", "filter_inputs", 1, "card", 3, "ngClass"], [1, "card-body", "pb-0"], [1, "row"], [1, "col-lg-3", "col-sm-6", "col-12"], [1, "input-blocks"], [1, "feather", "icon-zap", "info-img"], ["placeholder", "Choose Unit", 1, "space-select", "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], [1, "feather", "icon-calendar", "info-img"], [1, "input-groupicon", "date-input1"], ["type", "text", "bsDatepicker", "", "container", ".date-input2", "placeholder", "Choose Date", "container", ".date-input1", 1, "datetimepicker"], [1, "feather", "icon-stop-circle", "info-img"], ["placeholder", "Choose Status", 1, "space-select", "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "col-lg-3", "col-sm-6", "col-12", "ms-auto"], [1, "btn", "btn-filters", "ms-auto"], [1, "feather", "icon-search", "feather-search"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew", 3, "matSortChange"], ["mat-sort-header", "brand"], ["mat-sort-header", "logo"], ["mat-sort-header", "createdOn"], [1, "no-sort"], ["mat-sort-header", "status"], [3, "pageChange", "pagination"], ["id", "add-announcement", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "custom-modal-two"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header", "border-0", "custom-modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body", "new-employee-field"], [3, "ngSubmit", "formGroup"], [1, "col-lg-12"], [1, "new-employee-field"], [1, "profile-pic-upload", "mb-2"], [1, "profile-pic"], [4, "ngIf"], [1, "input-blocks", "mb-0"], [1, "image-upload", "mb-0"], ["type", "file", "accept", "image/*", 3, "change"], [1, "image-uploads"], [1, "col-lg-6"], ["type", "text", "formControlName", "title", 1, "form-control"], ["type", "text", "formControlName", "description", 1, "form-control"], ["type", "date", "formControlName", "start_date", 1, "form-control"], ["type", "date", "formControlName", "end_date", 1, "form-control"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit", 3, "disabled"], ["id", "edit-announcement", 1, "modal", "fade"], [1, "mb-3"], [1, "d-flex", "align-items-center"], [1, "input-blocks", "mb-0", "ml-2"], [1, "mb-0"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], [1, "status-label"], ["type", "checkbox", "id", "announcement_status", "formControlName", "is_active", 1, "check"], ["for", "announcement_status", 1, "checktoggle"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "d-flex"], ["alt", "", 2, "height", "100px !important", "max-width", "250px !important", 3, "src"], [1, "badge", 3, "ngClass"], [1, "action-table-data", 2, "border-bottom-width", "0"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-announcement", 1, "me-2", "p-2", 3, "click"], [1, "feather", "icon-edit", "feather-edit"], ["href", "javascript:void(0);", 1, "confirm-text", "p-2", 3, "click"], [1, "feather", "icon-trash-2", "feather-trash-2"], ["alt", "Preview", 2, "max-width", "100px !important", "margin-top", "10px", 3, "src"], [1, "text-danger"], ["alt", "Preview", 2, "max-width", "100px", 3, "src"]],
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
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "Id");
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
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "th", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "th", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](60, AnnouncementListComponent_For_61_Template, 19, 9, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "app-custom-pagination", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pageChange", function AnnouncementListComponent_Template_app_custom_pagination_pageChange_62_listener($event) {
            return ctx.onPageChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "div", 36)(64, "div", 37)(65, "div", 38)(66, "div", 39)(67, "div", 40)(68, "div", 41)(69, "div", 2)(70, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71, "Create Announcement");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "button", 42)(73, "span", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "div", 44)(76, "form", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function AnnouncementListComponent_Template_form_ngSubmit_76_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "div", 14)(78, "div", 46)(79, "div", 47)(80, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81, "Image");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "div", 48)(83, "div", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](84, AnnouncementListComponent_div_84_Template, 2, 1, "div", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "div", 51)(86, "div", 52)(87, "input", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function AnnouncementListComponent_Template_input_change_87_listener($event) {
            return ctx.onFileSelected($event, "create");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "div", 54)(89, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](90, "Upload Image");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "div", 55)(92, "div", 16)(93, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](94, "Title");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](95, "input", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](96, AnnouncementListComponent_div_96_Template, 3, 0, "div", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](97, "div", 55)(98, "div", 16)(99, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](100, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](101, "input", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](102, AnnouncementListComponent_div_102_Template, 3, 0, "div", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](103, "div", 55)(104, "div", 16)(105, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](106, "Start Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](107, "input", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](108, AnnouncementListComponent_div_108_Template, 3, 0, "div", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](109, "div", 55)(110, "div", 16)(111, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](112, "End Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](113, "input", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](114, AnnouncementListComponent_div_114_Template, 3, 0, "div", 50)(115, AnnouncementListComponent_div_115_Template, 3, 0, "div", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](116, "div", 60)(117, "button", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](118, " Cancel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](119, "button", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](120, " Submit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](121, "div", 63)(122, "div", 37)(123, "div", 38)(124, "div", 39)(125, "div", 40)(126, "div", 41)(127, "div", 2)(128, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](129, "Edit Announcement");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](130, "button", 42)(131, "span", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](132, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](133, "div", 44)(134, "form", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function AnnouncementListComponent_Template_form_ngSubmit_134_listener() {
            return ctx.onUpdate();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](135, "div", 64)(136, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](137, "Image");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](138, "div", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](139, AnnouncementListComponent_div_139_Template, 2, 1, "div", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](140, "div", 66)(141, "div", 52)(142, "input", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function AnnouncementListComponent_Template_input_change_142_listener($event) {
            return ctx.onFileSelected($event, "edit");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](143, "div", 54)(144, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](145, "Change Image");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](146, "div", 64)(147, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](148, "Title");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](149, "input", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](150, "div", 64)(151, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](152, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](153, "input", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](154, "div", 64)(155, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](156, "Start Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](157, "input", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](158, "div", 64)(159, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](160, "End Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](161, "input", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](162, AnnouncementListComponent_div_162_Template, 3, 0, "div", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](163, "div", 67)(164, "div", 68)(165, "span", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](166, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](167, "input", 70)(168, "label", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](169, "div", 60)(170, "button", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](171, " Cancel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](172, "button", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](173, " Update ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()();
        }
        if (rf & 2) {
          let tmp_11_0;
          let tmp_12_0;
          let tmp_13_0;
          let tmp_14_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](18, _c0, ctx.filter, !ctx.filter));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](21, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](ctx.selectedList2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](22, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](ctx.selectedList3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](24);
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
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_13_0 = ctx.announcementForm.get("start_date")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx.announcementForm.get("start_date")) == null ? null : tmp_13_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_14_0 = ctx.announcementForm.get("end_date")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx.announcementForm.get("end_date")) == null ? null : tmp_14_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.announcementForm.errors == null ? null : ctx.announcementForm.errors["dateRange"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.announcementForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.editAnnouncementForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.editProfileImageBase64);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.editAnnouncementForm.errors == null ? null : ctx.editAnnouncementForm.errors["dateRange"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.editAnnouncementForm.invalid);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortHeader, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_5__.CustomPaginationComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltip, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__.BsDatepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__.BsDatepickerInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName],
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
const _c1 = () => ({
  standalone: true
});
const _c2 = (a0, a1) => ({
  "d-block": a0,
  "d-none": a1
});
const _c3 = (a0, a1) => ({
  "badge-linesuccess": a0,
  "badge-linedanger": a1
});
function CategoryListComponent_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CategoryListComponent_button_33_Template_button_click_0_listener() {
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
function CategoryListComponent_For_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 16);
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
function CategoryListComponent_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " No data found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function CategoryListComponent_For_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td")(6, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td", 70)(9, "div", 71)(10, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CategoryListComponent_For_68_Template_a_click_10_listener() {
      const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.editcategory(data_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r5.category_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](4, _c3, data_r5.is_active === true, data_r5.is_active === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r5.is_active === false ? "Inactive" : "Active");
  }
}
function CategoryListComponent_div_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "small", 74);
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
    this.filterSelectedStatus = 'all';
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
    let statusFilter = this.filterSelectedStatus;
    if (statusFilter === 'all') {
      statusFilter = '';
    }
    this.data.getCategoryList(this.page, this.savedSearchText, statusFilter).subscribe(apiRes => {
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
    this.filterSelectedStatus = 'all';
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
      decls: 123,
      vars: 20,
      consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel", "matTooltip", "Excel", "matTooltipPosition", "above", 3, "click"], ["src", "assets/img/icons/excel.svg", "alt", "img"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-category", 1, "btn", "btn-added"], [1, "feather", "icon-plus-circle", "me-2"], [1, "card", "table-list-card"], [1, "card-body"], [1, "table-top"], [1, "search-set", "ml-4"], [1, "search-input", "p-0"], ["placeholder", "Choose Status", 1, "space-select", "select", 3, "ngModelChange", "selectionChange", "ngModel", "ngModelOptions"], ["value", "all"], [3, "value"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset", 3, "click"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["placeholder", "Search...", 1, "form-control", 3, "ngModelChange", "keydown.enter", "ngModel"], ["class", "btn btn-clear", 3, "click", 4, "ngIf"], ["id", "filter_inputs", 1, "card", 3, "ngClass"], [1, "card-body", "pb-0"], [1, "row"], [1, "col-lg-3", "col-sm-6", "col-12"], [1, "input-blocks"], [1, "feather", "icon-zap", "info-img"], ["placeholder", "Choose Brand", 1, "space-select", "select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "feather", "icon-calendar", "info-img"], [1, "input-groupicon", "date-input1"], ["type", "text", "bsDatepicker", "", "placeholder", "Choose Date", "container", ".date-input1", 1, "datetimepicker"], [1, "col-lg-3", "col-sm-6", "col-12", "ms-auto"], [1, "btn", "btn-filters", "ms-auto"], [1, "table-responsive"], [1, "table", "datanew"], ["matSort", "", 3, "matSortChange"], ["mat-sort-header", "categorySlug"], ["mat-sort-header", "category"], ["mat-sort-header", "status"], [1, "no-sort"], [3, "pageChange", "pagination"], ["id", "add-category", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "custom-modal-two"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header", "border-0", "custom-modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], [1, "form-label"], ["type", "text", "formControlName", "name", 1, "form-control"], [4, "ngIf"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit", 3, "disabled"], ["id", "edit-category", 1, "modal", "fade"], [1, "mb-0"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], [1, "status-label"], ["type", "checkbox", "id", "user3", "formControlName", "is_active", 1, "check"], ["for", "user3", 1, "checktoggle"], ["type", "submit", 1, "btn", "btn-submit"], [1, "btn", "btn-clear", 3, "click"], ["colspan", "6", 1, "text-center", "text-muted"], [1, "badge", 3, "ngClass"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-category", 1, "me-2", "p-2", 3, "click"], [1, "feather", "icon-edit", "feather-edit"], [1, "text-danger"]],
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
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "div", 12)(19, "div", 13)(20, "mat-select", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function CategoryListComponent_Template_mat_select_ngModelChange_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.filterSelectedStatus, $event) || (ctx.filterSelectedStatus = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function CategoryListComponent_Template_mat_select_selectionChange_20_listener() {
            return ctx.getTableData();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "mat-option", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "All Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "mat-option", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Active");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "mat-option", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Inactive");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 17)(28, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CategoryListComponent_Template_a_click_28_listener() {
            return ctx.onSearchClick();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 20)(31, "label")(32, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function CategoryListComponent_Template_input_ngModelChange_32_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.filterSearchText, $event) || (ctx.filterSearchText = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keydown.enter", function CategoryListComponent_Template_input_keydown_enter_32_listener() {
            return ctx.onSearchClick();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, CategoryListComponent_button_33_Template, 2, 1, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 23)(35, "div", 24)(36, "div", 25)(37, "div", 26)(38, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "mat-select", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function CategoryListComponent_Template_mat_select_ngModelChange_40_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.selectedValue2, $event) || (ctx.selectedValue2 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](41, CategoryListComponent_For_42_Template, 2, 2, "mat-option", 16, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 26)(44, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](45, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](47, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 33)(49, "div", 27)(50, "a", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](51, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, " Search ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div", 35)(54, "table", 36)(55, "thead")(56, "tr", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("matSortChange", function CategoryListComponent_Template_tr_matSortChange_56_listener($event) {
            return ctx.sortData($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "th", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "Category Id");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "th", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "Category Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "th", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "th", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](66, CategoryListComponent_Conditional_66_Template, 3, 0, "tr");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](67, CategoryListComponent_For_68_Template, 12, 7, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "app-custom-pagination", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pageChange", function CategoryListComponent_Template_app_custom_pagination_pageChange_69_listener($event) {
            return ctx.onPageChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div", 43)(71, "div", 44)(72, "div", 45)(73, "div", 46)(74, "div", 47)(75, "div", 48)(76, "div", 2)(77, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78, "Create Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "button", 49)(80, "span", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "div", 51)(83, "form", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function CategoryListComponent_Template_form_ngSubmit_83_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "div", 53)(85, "label", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](86, "Category Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](87, "input", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](88, CategoryListComponent_div_88_Template, 3, 0, "div", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "div", 57)(90, "button", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](91, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "button", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](93, "Create Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "div", 60)(95, "div", 44)(96, "div", 45)(97, "div", 46)(98, "div", 47)(99, "div", 48)(100, "div", 2)(101, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](102, "Edit Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](103, "button", 49)(104, "span", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](105, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "div", 51)(107, "form", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function CategoryListComponent_Template_form_ngSubmit_107_listener() {
            return ctx.onUpdate();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](108, "div", 53)(109, "label", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](110, "Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](111, "input", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](112, "div", 61)(113, "div", 62)(114, "span", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](115, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](116, "input", 64)(117, "label", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](118, "div", 57)(119, "button", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](120, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](121, "button", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](122, "Save Changes");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()();
        }
        if (rf & 2) {
          let tmp_14_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.filterSelectedStatus);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](15, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.filterSearchText);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.savedSearchText);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](16, _c2, ctx.filter, !ctx.filter));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedValue2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](19, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](ctx.selectedList2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](66, (ctx.tableData == null ? null : ctx.tableData.length) === 0 ? 66 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](ctx.tableData);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pagination", ctx.pagination);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.categoryForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_14_0 = ctx.categoryForm.get("name")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx.categoryForm.get("name")) == null ? null : tmp_14_0.touched));
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