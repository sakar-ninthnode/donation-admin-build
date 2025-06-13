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

















const _c0 = (a0, a1) => ({
  "badge-linesuccess": a0,
  "badge-linedanger": a1
});
function AnnouncementListComponent_For_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", type_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", type_r1.label, " ");
  }
}
function AnnouncementListComponent_For_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AnnouncementListComponent_For_71_Template_a_click_15_listener() {
      const data_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.editAnnouncement(data_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AnnouncementListComponent_For_71_Template_a_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.confirmColor());
    })("click", function AnnouncementListComponent_For_71_Template_a_click_17_listener() {
      const data_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.deleteAnnouncement(data_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r3.announcement_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", data_r3.images[0].announcement_img_url, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](6, _c0, data_r3.is_active === true, data_r3.is_active === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r3.is_active === false ? "Inactive" : "Active");
  }
}
function AnnouncementListComponent_div_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r3.profileImageBase64, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function AnnouncementListComponent_For_106_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", type_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", type_r5.label, " ");
  }
}
function AnnouncementListComponent_div_112_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "small", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Title is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AnnouncementListComponent_div_118_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "small", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Description is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AnnouncementListComponent_div_124_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "small", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Start date is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AnnouncementListComponent_div_130_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "small", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "End date is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AnnouncementListComponent_div_131_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "small", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "End date must be after start date.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AnnouncementListComponent_span_136_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "span", 84);
  }
}
function AnnouncementListComponent_div_159_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r3.editProfileImageBase64, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function AnnouncementListComponent_For_171_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", type_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", type_r6.label, " ");
  }
}
function AnnouncementListComponent_div_192_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "small", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "End date must be after start date.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AnnouncementListComponent_span_204_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "span", 84);
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
    this.searchDataValue = '';
    this.profileImageBase64 = ''; // Store the Base64 image
    this.editProfileImageBase64 = ''; // Edit Image
    this.announcementTypes = [{
      value: 'General',
      label: 'General'
    }, {
      value: 'Advertisement',
      label: 'Advertisement'
    }];
    this.isSubmitLoading = false;
    this.isUpdateLoading = false;
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
    this.isCollapsed = false;
    this.announcementForm = this.fb.group({
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      start_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      end_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      images: [''],
      // Store Base64 image
      type: ['General', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
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
      is_active: [true],
      type: ['General', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
    }, {
      validator: this.dateRangeValidator
    });
    // Filter Form
    this.filterForm = this.fb.group({
      status: ['all'],
      start_date: [''],
      end_date: [''],
      type: ['all']
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
    const filterValues = this.filterForm.value;
    this.data.getAnnouncementList(page, filterValues.status, filterValues.start_date, filterValues.end_date, filterValues.type).subscribe(apiRes => {
      apiRes.results.announcements.map((res, index) => {
        this.tableData.push(res);
      });
      this.paginationService.setPaginationData(apiRes.results.pagination);
      this.pagination = this.paginationService.getPaginationData();
    });
  }
  applyFilters() {
    this.getTableData(1); // Reset to first page when applying filters
  }
  resetFilters() {
    this.filterForm.reset({
      status: 'all',
      start_date: '',
      end_date: '',
      type: 'all'
    });
    this.getTableData(1);
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
            console.log(this.profileImageBase64);
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
      this.isSubmitLoading = true;
      const formValue = this.announcementForm.value;
      const updatedObj = [{
        ...formValue,
        start_date: new Date(formValue.start_date).toISOString(),
        end_date: new Date(formValue.end_date).toISOString()
      }];
      this.data.createAnnouncement(updatedObj).subscribe(response => {
        console.log('Announcement created successfully', response);
        this.getTableData();
        // Reset form after submission
        this.announcementForm.reset();
        this.profileImageBase64 = '';
        // Reset file input element
        const fileInput = document.querySelector('#add-announcement input[type="file"]');
        if (fileInput) {
          fileInput.value = '';
        }
        // Close the modal using Bootstrap's API
        const modalElement = document.getElementById('add-announcement');
        if (modalElement) {
          const modal = bootstrap.Modal.getInstance(modalElement);
          modal.hide();
        }
        this.isSubmitLoading = false;
      }, error => {
        console.error('Error creating user', error);
        this.isSubmitLoading = false;
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
      is_active: data.is_active ?? true,
      type: data.type || 'General' // Changed from announcement_type to type
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
      this.isUpdateLoading = true;
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
        this.isUpdateLoading = false;
      }, error => {
        console.error('Error updating announcement', error);
        this.isUpdateLoading = false;
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
    if (this.dataSource) {
      this.dataSource.filter = value.trim().toLowerCase();
      this.tableData = this.dataSource.filteredData;
    }
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
      decls: 206,
      vars: 16,
      consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Excel", "matTooltipPosition", "above", 3, "click"], ["src", "assets/img/icons/excel.svg", "alt", "img"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-announcement", 1, "btn", "btn-added"], [1, "feather", "icon-plus-circle", "me-2"], [1, "card", "table-list-card"], [1, "card-body"], [1, "table-top"], [1, "filter-section"], [3, "formGroup"], [1, "row"], [1, "col-lg-3", "col-sm-6", "col-12"], [1, "input-blocks"], [1, "feather", "icon-stop-circle", "info-img"], ["formControlName", "status", "placeholder", "Status", 1, "space-select", "select"], ["value", "all"], ["value", "true"], ["value", "false"], ["type", "date", "formControlName", "start_date", "placeholder", "Start Date", 1, "form-control"], ["type", "date", "formControlName", "end_date", "placeholder", "End Date", 1, "form-control"], [1, "feather", "icon-tag", "info-img"], ["formControlName", "type", "placeholder", "Announcement Type", 1, "space-select", "select"], [3, "value"], [1, "col-lg-3", "col-sm-6", "col-12", "ms-auto"], [1, "btn", "btn-filters", "ms-auto", 3, "click"], [1, "feather", "icon-search", "feather-search"], [1, "btn", "btn-filters", "ms-2", 3, "click"], [1, "feather", "icon-refresh-cw"], [1, "table-responsive"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "datanew", 3, "matSortChange"], ["mat-sort-header", "brand"], ["mat-sort-header", "logo"], ["mat-sort-header", "createdOn"], [1, "no-sort"], ["mat-sort-header", "status"], [3, "pageChange", "pagination"], ["id", "add-announcement", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "custom-modal-two"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header", "border-0", "custom-modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body", "new-employee-field"], [3, "ngSubmit", "formGroup"], [1, "col-lg-12"], [1, "new-employee-field"], [1, "profile-pic-upload", "mb-2"], [1, "profile-pic"], [4, "ngIf"], [1, "input-blocks", "mb-0"], [1, "image-upload", "mb-0"], ["type", "file", "accept", "image/*", 3, "change"], [1, "image-uploads"], [1, "col-lg-6"], ["type", "text", "formControlName", "title", 1, "form-control"], ["type", "text", "formControlName", "description", 1, "form-control"], ["type", "date", "formControlName", "start_date", 1, "form-control"], ["type", "date", "formControlName", "end_date", 1, "form-control"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", 1, "btn", "btn-submit", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-1", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["id", "edit-announcement", 1, "modal", "fade"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], ["type", "checkbox", "id", "announcement_status", "formControlName", "is_active", 1, "check"], ["for", "announcement_status", 1, "checktoggle"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "d-flex"], ["alt", "", 2, "height", "100px !important", "max-width", "250px !important", 3, "src"], [1, "badge", 3, "ngClass"], [1, "action-table-data", 2, "border-bottom-width", "0"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-announcement", 1, "me-2", "p-2", 3, "click"], [1, "feather", "icon-edit", "feather-edit"], ["href", "javascript:void(0);", 1, "confirm-text", "p-2", 3, "click"], [1, "feather", "icon-trash-2", "feather-trash-2"], ["alt", "Preview", 2, "max-width", "100px !important", "margin-top", "10px", 3, "src"], [1, "text-danger"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-1"]],
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
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 12)(19, "form", 13)(20, "div", 14)(21, "div", 15)(22, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "mat-select", 18)(25, "mat-option", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "All Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "mat-option", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Active");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "mat-option", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Inactive");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 15)(32, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 15)(35, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 15)(38, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "mat-select", 25)(41, "mat-option", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "All Types");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](43, AnnouncementListComponent_For_44_Template, 2, 2, "mat-option", 26, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 27)(46, "div", 16)(47, "a", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AnnouncementListComponent_Template_a_click_47_listener() {
            return ctx.applyFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](48, "i", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, " Search ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "a", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AnnouncementListComponent_Template_a_click_50_listener() {
            return ctx.resetFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](51, "i", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, " Reset ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div", 32)(54, "table", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("matSortChange", function AnnouncementListComponent_Template_table_matSortChange_54_listener($event) {
            return ctx.sortData($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "thead")(56, "tr")(57, "th", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "Id");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "th", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "Title");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "th", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "th", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64, "Image");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "th", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "th", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68, "Action");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](70, AnnouncementListComponent_For_71_Template, 19, 9, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "app-custom-pagination", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pageChange", function AnnouncementListComponent_Template_app_custom_pagination_pageChange_72_listener($event) {
            return ctx.onPageChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "div", 40)(74, "div", 41)(75, "div", 42)(76, "div", 43)(77, "div", 44)(78, "div", 45)(79, "div", 2)(80, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81, "Create Announcement");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "button", 46)(83, "span", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](84, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "div", 48)(86, "form", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function AnnouncementListComponent_Template_form_ngSubmit_86_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "div", 14)(88, "div", 50)(89, "div", 51)(90, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](91, "Image");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "div", 52)(93, "div", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](94, AnnouncementListComponent_div_94_Template, 2, 1, "div", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "div", 55)(96, "div", 56)(97, "input", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function AnnouncementListComponent_Template_input_change_97_listener($event) {
            return ctx.onFileSelected($event, "create");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "div", 58)(99, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](100, "Upload Image");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](101, "div", 50)(102, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](103, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](104, "mat-select", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](105, AnnouncementListComponent_For_106_Template, 2, 2, "mat-option", 26, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](107, "div", 59)(108, "div", 16)(109, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](110, "Title");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](111, "input", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](112, AnnouncementListComponent_div_112_Template, 3, 0, "div", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](113, "div", 59)(114, "div", 16)(115, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](116, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](117, "input", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](118, AnnouncementListComponent_div_118_Template, 3, 0, "div", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](119, "div", 59)(120, "div", 16)(121, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](122, "Start Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](123, "input", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](124, AnnouncementListComponent_div_124_Template, 3, 0, "div", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](125, "div", 59)(126, "div", 16)(127, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](128, "End Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](129, "input", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](130, AnnouncementListComponent_div_130_Template, 3, 0, "div", 54)(131, AnnouncementListComponent_div_131_Template, 3, 0, "div", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](132, "div", 64)(133, "button", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](134, " Cancel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](135, "button", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](136, AnnouncementListComponent_span_136_Template, 1, 0, "span", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](137, " Submit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](138, "div", 68)(139, "div", 41)(140, "div", 42)(141, "div", 43)(142, "div", 44)(143, "div", 45)(144, "div", 2)(145, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](146, "Edit Announcement");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](147, "button", 46)(148, "span", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](149, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](150, "div", 48)(151, "form", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function AnnouncementListComponent_Template_form_ngSubmit_151_listener() {
            return ctx.onUpdate();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](152, "div", 14)(153, "div", 50)(154, "div", 51)(155, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](156, "Image");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](157, "div", 52)(158, "div", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](159, AnnouncementListComponent_div_159_Template, 2, 1, "div", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](160, "div", 55)(161, "div", 56)(162, "input", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function AnnouncementListComponent_Template_input_change_162_listener($event) {
            return ctx.onFileSelected($event, "edit");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](163, "div", 58)(164, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](165, "Upload Image");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](166, "div", 50)(167, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](168, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](169, "mat-select", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](170, AnnouncementListComponent_For_171_Template, 2, 2, "mat-option", 26, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](172, "div", 59)(173, "div", 16)(174, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](175, "Title");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](176, "input", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](177, "div", 59)(178, "div", 16)(179, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](180, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](181, "input", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](182, "div", 59)(183, "div", 16)(184, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](185, "Start Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](186, "input", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](187, "div", 59)(188, "div", 16)(189, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](190, "End Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](191, "input", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](192, AnnouncementListComponent_div_192_Template, 3, 0, "div", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](193, "div", 59)(194, "div", 16)(195, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](196, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](197, "div", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](198, "input", 70)(199, "label", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](200, "div", 64)(201, "button", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](202, " Cancel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](203, "button", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](204, AnnouncementListComponent_span_204_Template, 1, 0, "span", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](205, " Update ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()();
        }
        if (rf & 2) {
          let tmp_7_0;
          let tmp_8_0;
          let tmp_9_0;
          let tmp_10_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.filterForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](ctx.announcementTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](ctx.tableData);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pagination", ctx.pagination);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.announcementForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.profileImageBase64);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](ctx.announcementTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx.announcementForm.get("title")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx.announcementForm.get("title")) == null ? null : tmp_7_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx.announcementForm.get("description")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx.announcementForm.get("description")) == null ? null : tmp_8_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_9_0 = ctx.announcementForm.get("start_date")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx.announcementForm.get("start_date")) == null ? null : tmp_9_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_10_0 = ctx.announcementForm.get("end_date")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx.announcementForm.get("end_date")) == null ? null : tmp_10_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.announcementForm.errors == null ? null : ctx.announcementForm.errors["dateRange"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.announcementForm.invalid || ctx.isSubmitLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isSubmitLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.editAnnouncementForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.editProfileImageBase64);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](ctx.announcementTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.editAnnouncementForm.errors == null ? null : ctx.editAnnouncementForm.errors["dateRange"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.editAnnouncementForm.invalid || ctx.isUpdateLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isUpdateLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortHeader, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _shared_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_5__.CustomPaginationComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName],
      styles: [".filter-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  padding: 15px;\n  background-color: #fff;\n  border-radius: 4px;\n}\n.filter-section[_ngcontent-%COMP%]   .input-blocks[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.filter-section[_ngcontent-%COMP%]   .btn-filters[_ngcontent-%COMP%] {\n  background-color: #0d6efd;\n  color: #fff;\n  padding: 8px 15px;\n  border-radius: 4px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n}\n.filter-section[_ngcontent-%COMP%]   .btn-filters[_ngcontent-%COMP%]:hover {\n  background-color: #0b5ed7;\n}\n.filter-section[_ngcontent-%COMP%]   .btn-filters.ms-2[_ngcontent-%COMP%] {\n  background-color: #6c757d;\n}\n.filter-section[_ngcontent-%COMP%]   .btn-filters.ms-2[_ngcontent-%COMP%]:hover {\n  background-color: #5c636a;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS1jb21wb25lbnQvaW52ZW50b3J5L2Fubm91bmNlbWVudC1saXN0L2Fubm91bmNlbWVudC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUNGO0FBRUU7RUFDRSxtQkFBQTtBQUFKO0FBR0U7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBREo7QUFHSTtFQUNFLHlCQUFBO0FBRE47QUFJSTtFQUNFLHlCQUFBO0FBRk47QUFJTTtFQUNFLHlCQUFBO0FBRlIiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyLXNlY3Rpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAvLyBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblxyXG4gIC5pbnB1dC1ibG9ja3Mge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcblxyXG4gIC5idG4tZmlsdGVycyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ2ZWZkO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogNXB4O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGI1ZWQ3O1xyXG4gICAgfVxyXG5cclxuICAgICYubXMtMiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICAgIFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM2MzZhO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyAuLi4gcmVzdCBvZiBleGlzdGluZyBzdHlsZXMgLi4uXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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