(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  .navbar-nav > li > .dropdown-menu {\r\n         margin-top: 0;\r\n         border-top-left-radius: 0;\r\n         border-top-right-radius: 0;\r\n         display: block;\r\n         -webkit-transform: scale(0);\r\n                 transform: scale(0);\r\n         transition: ease-out 0.3s;\r\n         border-radius: none;\r\n         }\r\n                   \r\n         .navbar-nav li a:hover{\r\n         background-color:#00b1b3;\r\n         }\r\n                   \r\n         /* icons styles */\r\n                   \r\n         .column {\r\n\t\t\tfloat: left;\r\n      padding:  10px;\r\n      text-align:center;\r\n border:1px solid grey;     \r\n margin: 10px 10px 0px 0px;\r\nwidth: 8em;\r\n border-radius: 10px;\r\n box-shadow: -2px 0px 18px -2px rgba(0,0,0,0.75);\r\n \r\n\t\t}\r\n                   \r\n         .fa-iconstyle {\r\n      font-size:40px;\r\n      text-align: center;\r\n    }\r\n                   \r\n         .imgtextcenter{\r\n          padding-top: 0.3em;\r\n          font-weight: bold;\r\n        }\r\n   "

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--Bootstrap Navbar-->\n<nav class=\"navbar navbar-inverse\" style=\"border-radius: 0px;\">\n    <div class=\"container\">\n      <div class=\"navbar-header\" >\n        <a class=\"navbar-brand\" href=\"\" style=\"color:white;\">Bin Manger</a>\n      </div>\n      <ul class=\"nav navbar-nav\">\n          <li class=\"\" ><a routerLink=\"app-order-details\" style=\"color:white;\">Home</a></li>\n          <li class=\"\" ><a  style=\"color:white;\" (click)=\"openModal(template)\">New Order</a></li>\n          <li class=\"\" ><a  style=\"color:white;\" (click)=\"openModal(template2)\">Add New Customer</a></li>\n          <li class=\"\" ><a routerLink=customerList style=\"color:white;\">Customer List</a></li>\n       </ul>\n       <ul>\n          <form class=\"navbar-form navbar-right pull-right\" >\n              <div class=\"input-group\">\n                <input type=\"text\"  placeholder=\"Select Date\" class=\"form-control\" bsDatepicker>\n                 <div class=\"input-group-btn\">\n                    <button class=\"btn btn-default\" type=\"\">\n                    <i class=\"glyphicon glyphicon-search\"></i>\n                    </button>\n                 </div>\n              </div>\n           </form>\n       </ul>\n\n    </div>\n  </nav>\n<!--Bootstrap Navbar-->\n\n<!--Icons-->\n<div class=\"container-fluid\">\n  <!-- <div class=\"row\">\n    <div class=\"col-sm-12\"> -->\n      <div class=\"\" style=\"float:right;\">\n        <div class=\"column\" (click)=\"openModal(template)\" style=\"cursor: pointer;\">\n     <i class=\"fas fa-phone fa-iconstyle\" ></i>\n        <figcaption class=\"imgtextcenter\">New Order</figcaption>\n        </div>\n       <div class=\"column\" (click)=\"openModal(template2)\" style=\"cursor: pointer;\">\n           <i class=\"fas fa-users fa-iconstyle text-center\" ></i> \n        <figcaption class=\"imgtextcenter\" >Customers</figcaption>\n        </div>\n        <div class=\"column\">\n        <i class=\"fas fa-truck fa-iconstyle\"></i>\n        <figcaption class=\"imgtextcenter\">Runsheets</figcaption>\n        </div>\n        <div class=\"column\">\n            <i class=\" fas fa-recycle fa-iconstyle\"></i>\t\n        <figcaption class=\"imgtextcenter\">Bins Onsite</figcaption>\n        </div>\n        <div class=\"column\">\n          <i class=\"far fa-clock fa-iconstyle\"></i>\t\n        <figcaption class=\"imgtextcenter\">Overdue</figcaption>\n        </div>\n        <div class=\"column\">\n         <i class=\"fas fa-dollar-sign fa-iconstyle\"></i>\n        <figcaption class=\"imgtextcenter\">Invoicing</figcaption>\n        </div>\n        <div class=\"column\">\n        <i class=\"fas fa-search fa-iconstyle\"></i>\t\n        <figcaption class=\"imgtextcenter\">Search</figcaption>\n        </div>\n        <div class=\"column\" style=\"margin: 10px 0px 0px 0px;\">\n  <i class=\"fas fa-wrench fa-iconstyle\"></i>\n        <figcaption class=\"imgtextcenter\">Settings</figcaption>\n        </div>\n      </div>     \n    </div>\n  <!-- </div>\n</div> -->\n\n  <br><br>\n<!--Icons-->\n\n<!--Model for new order-->\n<ng-template #template>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title text-center\" style=\"font-size: 18px;color: #000;\">CREATE NEW ORDER \n      <span type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </span>\n    </h4>\n    \n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\">\n        <form>\n          <div class=\"col-sm-12\">\n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <label  for=\"customer\">Customer:</label>\n                  <input type=\"text\" id=\"txtcustomer\" name=\"Customerid\" placeholder=\"Customer\" class=\"form-control\"/>\t\n              </div>\t\n            </div>\t\n  \n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <label  for=\"bintype\">Bin type:</label>\n                  <select class=\"form-control\" name=\"BinType\">\n                    <option value=\"0\">Select BinType</option>\n                  </select>\n              </div>\n            </div>\t\t\t\n            \n          </div>\t\t\n          \n          <div class=\"col-sm-12\">\n          \n            <div class=\"col-sm-6\">\t\t\n              <div class=\"form-group\">\n                <label  for=\"contact\">Contact:</label>\n                  <input type=\"text\" id=\"txtcontact\" name=\"contact\" placeholder=\"Contact\" class=\"form-control\"/>\n              </div>\n            </div>\n            \n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <label  for=\"numberneeded\">Number needed:</label>\n                  <input type=\"number\" name=\"Numberneeded\" id=\"txtnumberneeded\" placeholde=\"Number\" class=\"form-control\">\n              </div>\n            </div>\n          \n          </div>\n          \n          <div class=\"col-sm-12\">\n          \n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"custreference\">Cust Reference:</label>\n                  <input type=\"text\" id=\"txtcustref\" name=\"CustReference\" placeholder=\"Cust Reference\" class=\"form-control\">\n              </div>\n            </div>\t\n  \n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <label  for=\"price\">Price:</label>\n                  <input type=\"text\" id=\"txtprice\" name=\"amount\" placeholder=\"Price\" class=\"form-control\">\t\n              </div>\n            </div>\t\t\t\n          \n          </div>\n          \n          <div class=\"col-sm-12\">\n          \n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"dropdate\">Drop Off Date:</label>\n                  <input type=\"date\" id=\"datepicker\" class=\"form-control\" name=\"DropoffDate\">\n              </div>\n            </div>\n            \n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <label name=\"delivery\">Delivery:</label>\n                  <input type=\"text\" id=\"txtdelivery\" name=\"DropoffTime\" placeholder=\"Delivery\" class=\"form-control\">\n              </div>\n            </div>\n          \n          </div>\n          \n          <div class=\"col-sm-12\">\n          \n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <label  for=\"time\">Time:</label>\n                  <input type=\"time\" name=\"PickUpTime\" id=\"txttime\" class=\"form-control\">\n              </div>\n            </div>\t\n            \n            <div class=\"col-sm-6\">\t\n              <div class=\"form-group\">\n                <label  name=\"address\">Address:</label>\n                  <input type=\"text\" id=\"txtaddress\" name=\"address\" placeholder=\"Address\" class=\"form-control\">\n              </div>\n            </div>\t\n          \n          </div>\n          \n          <div class=\"col-sm-12\">\n          \n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <label  for=\"noofdays\">Number of days:</label>\n                    <input type=\"number\" name=\"noofdays\" id=\"txtnoofdays\" placeholder=\"Number of days\" class=\"form-control\">\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <label  name=\"referredby\">Referred By:</label>\n                    <input type=\"text\" id=\"txtreferredby\" name=\"referredby\"  placeholder=\"Referred By\" class=\"form-control\">\n                </div>\n              </div>\n          </div>\n          \n          <div class=\"col-sm-12\">\n          \n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <label  for=\"pickupdate\">Pick Up Date:</label>\n                  <input type=\"text\" name=\"PickUpDate\" id=\"txtpickupdate\" placeholder=\"PickUpdate\" class=\"form-control\">\n              </div>\n            </div>\n            \n            <div class=\"col-sm-6\">\t\n              <div class=\"form-group\">\n                <label  for=\"state\">State:</label>\n                  <select class=\"form-control\">\n                    <option value=\"0\">QLD</option>\n                  </select>\n              </div>\n            </div>\t\n          \n          </div>\n          \n          <div class=\"col-sm-12\">\n            \n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <label  for=\"pickuptime\">Time:</label>\n                  <input type=\"time\" name=\"PickUpTime\" id=\"txtpickuptime\" class=\"form-control\">\n              </div>\n            </div>\n            <div class=\"col-sm-6\"> </div>\n          </div>\n                  \n          <div class=\"form-group text-center\">\n              <button type=\"button\" class=\"btn btn-primary\">Save</button> &nbsp;\n              <button class=\"btn btn-default\"  type=\"button\" (click)=\"modalRef.hide()\">Cancel</button>\n          </div>\n                  \n        </form>\n      </div>\n  </div>\n</ng-template>\n<!--Model for new order-->\n\n  \n<!--Model for new Customer-->\n  <ng-template #template2>\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title text-center\" style=\"font-size: 18px;color: #000;\">CREATE NEW CUSTOMER \n          <span type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n          </span>\n        </h4>\n      </div>\n\n      <div class=\"modal-body\">\n         <div class=\"row\">\n        <div class=\"col-sm-12\" >\n          <form class=\"form-horizontal col-sm-offset-2\">\n            <div class=\"form-group \">\n              <label class=\"control-label col-sm-2\" for=\"email\">Name:</label>\n              <div class=\"col-sm-8\">\n                 <input type=\"text\" name=\"Name\" class=\"form-control col-sm-10\" value=\"\" placeholder=\"Name\" id=\"txtname\" />\n              </div>\n            </div>\n           <div class=\"form-group\">\n              <label class=\"control-label col-sm-2\" for=\"email\">Contact:</label>\n              <div class=\"col-sm-8\">\n                  <input type=\"text\" name=\"Contact\" class=\"form-control col-sm-10\" value=\"\" placeholder=\"Contact\" id=\"txtname\" />\n              </div>\n            </div>\n           <div class=\"form-group \">\n             <label class=\"control-label col-sm-2\">Mobile:</label>\n              <div class=\"col-sm-8\">\n                  <input type=\"mobile\" name=\"Mobile\" value=\"\"   class=\"form-control col-sm-10\" placeholder=\"Mobile\" id=\"txtEmail\" />\n              </div>\n            </div>\n           <div class=\"form-group\">\n               <label class=\"control-label col-sm-2\">Email:</label>\t\n              <div class=\"col-sm-8\">\n                 <input type=\"email\" name=\"Email\" class=\"form-control col-sm-10\"  value=\"\" placeholder=\"Email\" id=\"txtname\" />\n              </div>\n            </div>\n           <div class=\"form-group \">\n             <label class=\"control-label col-sm-2\">Fax:</label>\n              <div class=\"col-sm-8\">\n                   <input type=\"text\" name=\"Fax\" value=\"\" class=\"form-control col-sm-10\"   placeholder=\"Fax\" id=\"txtEmail\" />\n              </div>\n            </div>\n          <div class=\"form-group\">\n               <label class=\"control-label col-sm-2\">Telephone:</label>\n              <div class=\"col-sm-8\">\n                     <input type=\"email\" name=\"Telephone\" value=\"\" class=\"form-control col-sm-10\" placeholder=\"Telephone\" id=\"txtEmail\" />\n              </div>\n            </div>\n          <div class=\"form-group\">\n           <label class=\"control-label col-sm-2\">Postalcode:</label>\n              <div class=\"col-sm-8\">\n                   <input type=\"email\" name=\"Postalcode\" value=\"\" class=\"form-control col-sm-10\" placeholder=\"Postalcode\" id=\"txtEmail\" />\n              </div>\n            </div>\n          \n          <div class=\"form-group\">\n              <label class=\"control-label col-sm-2\">Address:</label>\n              <div class=\"col-sm-8\">\n                  <textarea cols=\"15\" rows=\"4\"  class=\"inline-txtarea form-control col-sm-10\"></textarea>\n              </div>\n            </div>\n          \n          <div class=\"form-group\">\n             <label class=\"control-label col-sm-2\">Comments:</label>\n              <div class=\"col-sm-8\">\n                  <textarea cols=\"15\" rows=\"4\"  class=\"inline-txtarea form-control col-sm-10\"></textarea>\n              </div>\n            </div>\n          \n          <div class=\"form-group\">\n             <label class=\"control-label col-sm-2\">IsActive:</label>\n              <div class=\"col-sm-8\">\n                    <input type=\"text\" value=\"0\" name=\"IsActive\" class=\"form-control col-sm-10\" />\n              </div>\n            </div>\n         \n             \n              <div class=\"form-group\">\n               <div class=\"text-center\">\t\t \n                     <button type=\"button\" class=\"btn btn-primary\">Save</button> &nbsp;\n                     <button class=\"btn btn-default\"  type=\"button\" (click)=\"modalRef.hide()\">Cancel</button>\n                   \n               </div>\t\t\t\n                  </div>\n          </form>\n        </div>\n      </div>\n      </div>\n    </ng-template>\n<!--Model for new Customer-->\n\n\n <router-outlet></router-outlet>\n\n<footer style=\"background: #49494b;padding: 1em;\">\n  <div class=\"footer-copyright text-center py-3\" style=\"color: grey;\">© 2018 Copyright:\n    <a href=\"#\" target=\"_blank\" style=\"color: white;\"> Bin Manger</a>\n  </div>\n\n</footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(modalService) {
        this.modalService = modalService;
        this.title = 'app';
    }
    AppComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.onResize = function (event) {
        console.log(event);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./order-details/order-details.component */ "./src/app/order-details/order-details.component.ts");
/* harmony import */ var _create_order_create_order_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./create-order/create-order.component */ "./src/app/create-order/create-order.component.ts");
/* harmony import */ var _create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./create-customer/create-customer.component */ "./src/app/create-customer/create-customer.component.ts");
/* harmony import */ var _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./customer-details/customer-details.component */ "./src/app/customer-details/customer-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_13__["OrderDetailsComponent"],
                _create_order_create_order_component__WEBPACK_IMPORTED_MODULE_14__["CreateOrderComponent"],
                _create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_15__["CreateCustomerComponent"],
                _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_16__["CustomerDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_11__["CollapseModule"].forRoot(),
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"].forRoot(),
                angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    { path: '', redirectTo: '/app-order-details', pathMatch: 'full' },
                    { path: 'app-order-details', component: _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_13__["OrderDetailsComponent"] },
                    { path: 'createorder', component: _create_order_create_order_component__WEBPACK_IMPORTED_MODULE_14__["CreateOrderComponent"] },
                    { path: 'createcustomer', component: _create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_15__["CreateCustomerComponent"] },
                    { path: 'customerList', component: _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_16__["CustomerDetailsComponent"] }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/create-customer/create-customer.component.css":
/*!***************************************************************!*\
  !*** ./src/app/create-customer/create-customer.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-block {\r\n    padding-right:-5px;\r\n    padding-left:0px;\r\n }\r\n .login-block input,textarea{\r\n \r\n height: 42px;         \r\n\r\n border: 1px solid #ccc;\r\n margin-bottom: 2px;\r\n font-size: 14px;         \r\n padding: 0 20px 0 20px;        \r\n margin-bottom:10px;\r\n }\r\n .login-block input:active, .login-block input:focus,textarea:focus {\r\n border: 1px solid #00b1b3;\r\n }\r\n .login-block h2 {\r\n text-align: center;\r\n color: #000;\r\n font-size: 18px;\r\n text-transform: uppercase;\r\n margin-top: 10px;\r\n margin-bottom: 20px;\r\n }\r\n label {\r\n display: inline-block;\r\n width: 140px;\r\n text-align: right;\r\n padding-right:20px;\r\n }\r\n .inline-txtarea {\r\n \r\n width:100%;\r\n  height:82px !Important;\r\n\r\n }\r\n button:hover {opacity: 0.8}\r\n .txtside{\r\npadding-left:30px;\r\n}"

/***/ }),

/***/ "./src/app/create-customer/create-customer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/create-customer/create-customer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-offset-2\">\n    <form>\n    <div class=\"col-md-10 maindiv\">\n       \n          <div class=\"login-block container\">\t\t \n          <h2>Customer Details</h2>\n      <div class=\"content\">\t\t  \n      <div class=\"row\">\n          <div class=\"form-group col-md-offset-2\">\t\t  \n             <label class=\"control-label col-sm-2 col-xs-2\">Name:</label>\t\n        <div class=\"col-sm-6 col-xs-10 txtside\">\n             <input type=\"text\" name=\"Name\" class=\"form-control col-md-10\" value=\"\" placeholder=\"Name\" id=\"txtname\" />\n       </div>\t\t\t\n           \n      </div>\n      </div>\n      <div class=\"row\">\n      <div class=\"form-group col-md-offset-2\">\t\t  \n             <label class=\"control-label col-sm-2 col-xs-2\">Contact:</label>\t\n        <div class=\"col-sm-6 col-xs-10 txtside\">\n             <input type=\"text\" name=\"Contact\" class=\"form-control col-md-10\" value=\"\" placeholder=\"Contact\" id=\"txtname\" />\n       </div>\t\t\t          \n      </div>\n      </div>\n      <div class=\"row\">\n         <div class=\"form-group  col-md-offset-2\" >\n            <label class=\"control-label col-sm-2 col-xs-2\">Mobile:</label>\n           <div class=\"col-sm-6 col-xs-10 txtside\">\n            <input type=\"mobile\" name=\"Mobile\" value=\"\"   class=\"form-control col-md-10\" placeholder=\"Mobile\" id=\"txtEmail\" />\n            </div>\t\t\t\n         </div>\n         </div>\n       <div class=\"row\">\n      <div class=\"form-group col-md-offset-2\">\t\t  \n             <label class=\"control-label col-sm-2 col-xs-2\">Email:</label>\t\n        <div class=\"col-sm-6 col-xs-10 txtside\">\n             <input type=\"email\" name=\"Email\" class=\"form-control col-md-10\"  value=\"\" placeholder=\"Email\" id=\"txtname\" />\n       </div>\t\t\t          \n      </div>\n      </div>\n         \n               <div class=\"row\">\n          <div class=\"form-group  col-md-offset-2\" >\n             <label class=\"control-label col-sm-2 col-xs-2\">Fax:</label>\n        <div class=\"col-sm-6 col-xs-10 txtside\">\n             <input type=\"text\" name=\"Fax\" value=\"\" class=\"form-control col-md-10\"   placeholder=\"Fax\" id=\"txtEmail\" />\n       </div>\t\t\t\n          </div>\n      </div>\n               <div class=\"row\">\n          <div class=\"form-group  col-md-offset-2\" >\n             <label class=\"control-label col-sm-2 col-xs-2\">Telephone:</label>\n        <div class=\"col-sm-6 col-xs-10 txtside\">\n             <input type=\"email\" name=\"Telephone\" value=\"\" class=\"form-control col-md-10\" placeholder=\"Telephone\" id=\"txtEmail\" />\n       </div>\t\t\t\n          </div>\n      </div>\n               <div class=\"row\">\n          <div class=\"form-group  col-md-offset-2\" >\n             <label class=\"control-label col-sm-2 col-xs-2\">Postalcode:</label>\n        <div class=\"col-sm-6 col-xs-10 txtside\">\n             <input type=\"email\" name=\"Postalcode\" value=\"\" class=\"form-control col-md-10\" placeholder=\"Postalcode\" id=\"txtEmail\" />\n       </div>\t\t\t\n          </div>\n      </div>\n               <div class=\"row\">\n          <div class=\"form-group  col-md-offset-2\" >\n             <label class=\"control-label col-sm-2 col-xs-2\">Address:</label>\n        <div class=\"col-sm-6 col-xs-10 txtside\">\n             <input type=\"email\" value=\"\" name=\"Address\" class=\"form-control col-md-10\" placeholder=\"Address\" id=\"txtEmail\" />\n       </div>\t\t\t\n          </div>\n      </div>\n               <div class=\"row\">\n          <div class=\"form-group  col-md-offset-2\" >\n             <label class=\"control-label col-sm-2 col-xs-2\">Comments:</label>\n        <div class=\"col-sm-6 col-xs-10 txtside\">\n             <input type=\"email\" value=\"\" name=\"Comments\" class=\"form-control col-md-10\" placeholder=\"Comments\" id=\"txtEmail\" />\n       </div>\t\t\t\n          </div>\n      </div>\t\n     <div class=\"row\">\n      <div class=\"form-group col-md-offset-2\">\n             <label class=\"control-label col-sm-2 col-xs-2\">Address:</label>\n       <div class=\"col-sm-6 col-xs-10 txtside\" >\n              <textarea cols=\"15\" rows=\"15\"  class=\"inline-txtarea form-control col-md-10\"></textarea>\n        </div>\n          </div>\n      </div>\t\t \n       <div class=\"row\">\n      <div class=\"form-group col-md-offset-2\">\n             <label class=\"control-label col-sm-2 col-xs-2\">Comments:</label>\n       <div class=\"col-sm-6 col-xs-10 txtside\">\n              <textarea cols=\"15\" rows=\"15\"  class=\"inline-txtarea form-control col-md-10\"></textarea>\n        </div>\n          </div>\n      </div>\n      <div class=\"row\">\n         <div class=\"form-group col-md-offset-2\">\n            <label class=\"control-label col-sm-2 col-xs-2\">IsActive:</label>\n            <div class=\"col-sm-6 col-xs-10 txtside\">\n             <input type=\"text\" value=\"0\" name=\"IsActive\" class=\"form-control col-md-10\" />\n           </div>\n         </div>\n         </div>\n     <div class=\"row\">\n          <div class=\"form-group btngrp\">\n       <div class=\"text-center\">\t\t \n                  <button class=\"btn btn-primary\">Save</button> &nbsp;\n             <button class=\"btn btn-danger\"  style=\"background-color:red;border:none;\">Cancel</button>\n           \n       </div>\t\t\t\n          </div>\n      </div>\n      \n      </div>\n        </div>\n   \n    </div>\n      </form>\n     </div>"

/***/ }),

/***/ "./src/app/create-customer/create-customer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/create-customer/create-customer.component.ts ***!
  \**************************************************************/
/*! exports provided: CreateCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCustomerComponent", function() { return CreateCustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateCustomerComponent = /** @class */ (function () {
    function CreateCustomerComponent() {
    }
    CreateCustomerComponent.prototype.ngOnInit = function () {
    };
    CreateCustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-customer',
            template: __webpack_require__(/*! ./create-customer.component.html */ "./src/app/create-customer/create-customer.component.html"),
            styles: [__webpack_require__(/*! ./create-customer.component.css */ "./src/app/create-customer/create-customer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateCustomerComponent);
    return CreateCustomerComponent;
}());



/***/ }),

/***/ "./src/app/create-order/create-order.component.css":
/*!*********************************************************!*\
  !*** ./src/app/create-order/create-order.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".split {\r\n    height: 100%;\r\n    width: 50%;\r\n   \r\n}\r\n\r\n.left {\r\n    left: 0;\r\n   \r\n}\r\n\r\n.right {\r\n    right: 0;\r\n   \r\n}\r\n\r\ninput,select{\r\n    height:42px !Important;\r\n}"

/***/ }),

/***/ "./src/app/create-order/create-order.component.html":
/*!**********************************************************!*\
  !*** ./src/app/create-order/create-order.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    \n    <div class=\"row\">\n        <h1 class=\"text-center\" style=\"font-size: 18px;color: #000;\">CREATE NEW ORDER </h1>\n        <BR>\n      <form>\n        <div class=\"col-md-12\">\n            \n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label  for=\"customer\">Customer:</label>\n                <input type=\"text\" id=\"txtcustomer\" name=\"Customerid\" placeholder=\"Customer\" class=\"form-control\"/>\t\n            </div>\t\n          </div>\t\n\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label  for=\"bintype\">Bin type:</label>\n                <select class=\"form-control\" name=\"BinType\">\n                  <option value=\"0\">Select BinType</option>\n                </select>\n            </div>\n          </div>\t\t\t\n          \n        </div>\t\t\n        \n        <div class=\"col-md-12\">\n        \n          <div class=\"col-md-6\">\t\t\n            <div class=\"form-group\">\n              <label  for=\"contact\">Contact:</label>\n                <input type=\"text\" id=\"txtcontact\" name=\"contact\" placeholder=\"Contact\" class=\"form-control\"/>\n            </div>\n          </div>\n          \n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label  for=\"numberneeded\">Number needed:</label>\n                <input type=\"number\" name=\"Numberneeded\" id=\"txtnumberneeded\" placeholde=\"Number\" class=\"form-control\">\n            </div>\n          </div>\n        \n        </div>\n        \n        <div class=\"col-md-12\">\n        \n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"custreference\">Cust Reference:</label>\n                <input type=\"text\" id=\"txtcustref\" name=\"CustReference\" placeholder=\"Cust Reference\" class=\"form-control\">\n            </div>\n          </div>\t\n\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label  for=\"price\">Price:</label>\n                <input type=\"text\" id=\"txtprice\" name=\"amount\" placeholder=\"Price\" class=\"form-control\">\t\n            </div>\n          </div>\t\t\t\n        \n        </div>\n        \n        <div class=\"col-md-12\">\n        \n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"dropdate\">Drop Off Date:</label>\n                <input type=\"date\" id=\"datepicker\" class=\"form-control\" name=\"DropoffDate\">\n            </div>\n          </div>\n          \n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label name=\"delivery\">Delivery:</label>\n                <input type=\"text\" id=\"txtdelivery\" name=\"DropoffTime\" placeholder=\"Delivery\" class=\"form-control\">\n            </div>\n          </div>\n        \n        </div>\n        \n        <div class=\"col-md-12\">\n        \n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label  for=\"time\">Time:</label>\n                <input type=\"time\" name=\"PickUpTime\" id=\"txttime\" class=\"form-control\">\n            </div>\n          </div>\t\n          \n          <div class=\"col-md-6\">\t\n            <div class=\"form-group\">\n              <label  name=\"address\">Address:</label>\n                <input type=\"text\" id=\"txtaddress\" name=\"address\" placeholder=\"Address\" class=\"form-control\">\n            </div>\n          </div>\t\n        \n        </div>\n        \n        <div class=\"col-md-12\">\n        \n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label  for=\"noofdays\">Number of days:</label>\n                  <input type=\"number\" name=\"noofdays\" id=\"txtnoofdays\" placeholder=\"Number of daya\" class=\"form-control\">\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label  name=\"referredby\">Referred By:</label>\n                  <input type=\"text\" id=\"txtreferredby\" name=\"referredby\"  placeholder=\"Referred By\" class=\"form-control\">\n              </div>\n            </div>\n        </div>\n        \n        <div class=\"col-md-12\">\n        \n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label  for=\"pickupdate\">Pick Up Date:</label>\n                <input type=\"text\" name=\"PickUpDate\" id=\"txtpickupdate\" placeholder=\"pickdate\" class=\"form-control\">\n            </div>\n          </div>\n          \n          <div class=\"col-md-6\">\t\n            <div class=\"form-group\">\n              <label  for=\"state\">State:</label>\n                <select class=\"form-control\">\n                  <option value=\"0\">QLD</option>\n                </select>\n            </div>\n          </div>\t\n        \n        </div>\n        \n        <div class=\"col-md-12\">\n          \n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label  for=\"pickuptime\">Time:</label>\n                <input type=\"time\" name=\"PickUpTime\" id=\"txtpickuptime\" class=\"form-control\">\n            </div>\n          </div>\n          <div class=\"col-md-6\"> </div>\n        </div>\n                \n        <div class=\"form-group text-center\">\n            <button class=\"btn btn-primary\">Save</button> &nbsp;\n            <button class=\"btn btn-danger\"  style=\"background-color:red;border:none;\">Cancel</button> \n        \n        </div>\n                \n      </form>\n              \n    </div>\n  </div>\t"

/***/ }),

/***/ "./src/app/create-order/create-order.component.ts":
/*!********************************************************!*\
  !*** ./src/app/create-order/create-order.component.ts ***!
  \********************************************************/
/*! exports provided: CreateOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOrderComponent", function() { return CreateOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateOrderComponent = /** @class */ (function () {
    function CreateOrderComponent() {
    }
    CreateOrderComponent.prototype.ngOnInit = function () {
    };
    CreateOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-order',
            template: __webpack_require__(/*! ./create-order.component.html */ "./src/app/create-order/create-order.component.html"),
            styles: [__webpack_require__(/*! ./create-order.component.css */ "./src/app/create-order/create-order.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateOrderComponent);
    return CreateOrderComponent;
}());



/***/ }),

/***/ "./src/app/customer-details/customer-details.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/customer-details/customer-details.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customer-details/customer-details.component.html":
/*!******************************************************************!*\
  !*** ./src/app/customer-details/customer-details.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <table id=\"example\" class=\"display col-md-12\" style=\"width:100%;padding-bottom:20px;\">\n    <thead class=\"tableHead\">\n       <tr>\n\n          <th>ID</th>\n          <th>Name</th>\n          <th>Contact</th>\n          <th>Mobile</th>\n          <th>Email</th>\n          <th>Fax</th>\n          <th>Telephone</th>\n          <th>Postalcode</th>\n          <th>Address</th>\n          <th>Comments</th>\n       </tr>\n    </thead>\n    <tbody>\n       <tr *ngFor=\"let customerlist of customerdetails \"> \n           <td>{{customerlist.ID}}</td>\n          <td>{{customerlist.Name}}</td>\n          <td>{{customerlist.Contact}}</td>\n          <td>{{customerlist.Mobile}}</td>\n          <td>{{customerlist.Email}}</td>\n          <td>{{customerlist.Fax}}</td>\n          <td>{{customerlist.Telephone}}</td>\n          <td>{{customerlist.Postalcode}}</td>\n          <td>{{customerlist.Address}}</td>\n          <td>{{customerlist.Comments}}</td>\n       </tr>\n      \n    </tbody>\n </table> -->\n\n <div style=\"margin: 0px 1em; text-align: left;\">\n <table datatable [dtOptions]=\"dtOptionscustomer\" class=\"row-border hover table table-striped table-bordered tableresized\" id=\"tablehead\"  width=\"100%\" cellspacing=\"0\" \n cellpadding=\"3\"></table>\n </div>\n<!-- <blockquote>Please click on a row</blockquote>\n<p class=\"text-danger\">You clicked on: <strong>{{ message }}</strong></p>\n<br /> -->\n\n"

/***/ }),

/***/ "./src/app/customer-details/customer-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/customer-details/customer-details.component.ts ***!
  \****************************************************************/
/*! exports provided: CustomerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailsComponent", function() { return CustomerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomerDetailsComponent = /** @class */ (function () {
    function CustomerDetailsComponent() {
        this.message = '';
        this.dtOptionscustomer = {};
    }
    // customerdetails : Customer[]= [{
    //   ID: 10,
    //   Name: "Jayesh",
    //   Contact: "Larry",
    //   Mobile: "9856230123",
    //   Email: "jayesh@gmail.com",
    //   Fax : 4455220120,
    //   Telephone: 855230,
    //   Postalcode: 22114520,
    //   Address: "Hyderabad",
    //   Comments: "kjdhfkjsd",
    //   IsActive: 0
    // },
    // { ID: 10,
    // Name: "Jayesh",
    // Contact: "Larry",
    // Mobile: "9856230123",
    // Email: "jayesh@gmail.com",
    // Fax : 4455220120,
    // Telephone: 855230,
    // Postalcode: 22114520,
    // Address: "Hyderabad",
    // Comments: "kjdhfkjsd",
    // IsActive: 0
    // }
    // ];
    CustomerDetailsComponent.prototype.someClickHandler = function (info) {
        this.message = info.Name + ' - ' + info.Mobile;
    };
    CustomerDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptionscustomer = {
            ajax: 'assets/customer.json',
            columns: [{
                    title: 'Sno',
                    data: 'ID'
                }, {
                    title: 'Name',
                    data: 'Name'
                }, {
                    title: 'Contact',
                    data: 'Contact'
                }, {
                    title: 'Mobile',
                    data: 'Mobile'
                }, {
                    title: 'Email',
                    data: 'Email'
                }, {
                    title: 'Fax',
                    data: 'Fax'
                }, {
                    title: 'Tele Phone',
                    data: 'Telephone'
                }, {
                    title: 'Postal Code',
                    data: 'Postalcode'
                }, {
                    title: 'Address',
                    data: 'Address'
                }, {
                    title: 'Comments',
                    data: 'Comments'
                }],
            responsive: true,
            rowCallback: function (row, data, index) {
                var self = _this;
                // Unbind first in order to avoid any duplicate handler
                // (see https://github.com/l-lin/angular-datatables/issues/87)
                $('td', row).unbind('click');
                $('td', row).bind('click', function () {
                    self.someClickHandler(data);
                });
                return row;
            }
        };
    };
    CustomerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-details',
            template: __webpack_require__(/*! ./customer-details.component.html */ "./src/app/customer-details/customer-details.component.html"),
            styles: [__webpack_require__(/*! ./customer-details.component.css */ "./src/app/customer-details/customer-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomerDetailsComponent);
    return CustomerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/order-details/order-details.component.css":
/*!***********************************************************!*\
  !*** ./src/app/order-details/order-details.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".font-family{\r\n    font-family: 'Ubuntu', sans-serif;\r\n    }\r\n      \r\n         .inline-txtarea {\r\n    \r\n    width:100%;\r\n     height:82px !Important;\r\n   \r\n    }\r\n      \r\n         .firstDiv{\r\n   background-color:#f5f5f5;\r\n   }\r\n      \r\n         .secondDiv{\r\n   background-color:#f5f5f5;\r\n   padding-bottom:12px;\r\n   }\r\n\r\n\r\n "

/***/ }),

/***/ "./src/app/order-details/order-details.component.html":
/*!************************************************************!*\
  !*** ./src/app/order-details/order-details.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <div class=\"container-fluid mainDiv\" id=\"maindiv\" style=\"padding-bottom:-20px;\">\n<table id=\"example\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n  <thead class=\"tableHead\">\n    <tr>\n      <th>Customerid</th>\n             <th>CustReference</th>\n             <th>DropoffDate</th>\n             <th>DropoffTime</th>\n             <th>PickUpDate</th>\n             <th>PickUpTime</th>\n             <th>BinType</th>\n             <th>Numberneeded</th>\n             <th>amount</th>\n             </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let orderlist of orderdetailsdata\">\n      <td>{{orderlist.Customerid}}</td>\n      <td>{{orderlist.CustReference}}</td>\n      <td>{{orderlist.DropoffDate}}</td>\n      <td>{{orderlist.DropoffTime}}</td>\n      <td>{{orderlist.PickUpDate}}</td>\n      <td>{{orderlist.PickUpTime}}</td>\n      <td>{{orderlist.BinType}}</td>\n      <td>{{orderlist.Numberneeded}}</td>\n      <td>{{orderlist.amount}}</td>\n    </tr>\n  </tbody>\n  </table>\n</div> -->\n<!-- <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n<link rel=\"stylesheet\" href=\"https://cdn.datatables.net/1.10.19/css/dataTables.bootstrap.min.css\"> -->\n\n\n\n<div style=\"margin: 0px 1em; text-align: left;\">\n<table datatable [dtOptions]=\"dtOptions\" class=\"row-border hover table table-striped table-bordered tableresized\"   width=\"100%\" cellspacing=\"0\" \ncellpadding=\"3\"></table>\n</div>\n<!-- <blockquote>Please click on a row</blockquote>\n<p class=\"text-danger\">You clicked on: <strong>{{ messagejob }}</strong></p>\n<br /> -->\n\n    <div class=\"panel panel-default\" style=\"margin: 1em 1em;\">\n      <div class=\"panel-body\">\n        <form class=\"form-horizontal\">\n            <div class=\"row\">\n          <div class=\"col-sm-12\">\n             <div class=\"col-sm-4\">\n                <div class=\"form-group \">\n                   <label class=\"control-label col-sm-3\" for=\"customer\">Job:</label>\n                   <div class=\"col-sm-8\">\n            <input type=\"text\" id=\"txtJob\" name=\"customer\" class=\"form-control\" value=\"{{ messagejob }}\">\n                      \n                   </div>\n                </div>\n                <div class=\"form-group \">\n                   <label class=\"control-label col-sm-3\" for=\"\">Contact:</label>\n                   <div class=\"col-sm-8\">\n                        <input type=\"text\" id=\"txtContact\" name=\"customer\" class=\"form-control\" value=\"{{messagecontact}}\">\n                   </div>\n                </div>\n             </div>\n             <div class=\"col-sm-4\">\n                <div class=\"form-group \">\n                   <label class=\"control-label col-sm-3\" for=\"customer\">Phone:</label>\n                   <div class=\"col-sm-8\">\n                        <input type=\"text\" id=\"txtPhone\" name=\"customer\" class=\"form-control\" value=\"{{messagephone}}\">\t\n\n                   </div>\n                </div>\n             \n                <div class=\"form-group \">\n                   <label class=\"control-label col-sm-3\" for=\"customer\">Notes For Driver:</label>\n                   <div class=\"col-sm-8\">\n                        <textarea cols=\"5\" rows=\"4\"  class=\"inline-txtarea form-control col-md-10\">{{messagenotefordrive}}</textarea> \n\n                   </div>\n                </div>\n      \n             </div>\n             <div class=\"col-sm-4\">\n     \n     <div class=\"form-group \">\n                   <label class=\"control-label col-sm-3\" for=\"customer\">Invoice:</label>\n                   <div class=\"col-sm-8\">\n                        <input type=\"text\" id=\"txtInvoice\" name=\"customer\" class=\"form-control\" value=\"{{messageinvoice}}\">\t\n                   </div>\n                </div>\n     \n                \n                <div class=\"form-group \">\n                   <label class=\"control-label col-sm-3\" for=\"customer\">Notes For Office:</label>\n                   <div class=\"col-sm-8\">\n                     <textarea cols=\"15\" rows=\"4\"  class=\"inline-txtarea form-control col-md-10\">{{messagenoteforoffice}}</textarea>\n\n                   </div>\n                </div>\n             </div>\n          </div>\n        </div>\n    </form>\n      </div>\n    </div>\n\n\n    "

/***/ }),

/***/ "./src/app/order-details/order-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/order-details/order-details.component.ts ***!
  \**********************************************************/
/*! exports provided: OrderDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsComponent", function() { return OrderDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import {orderjson} from './order.json';
var OrderDetailsComponent = /** @class */ (function () {
    function OrderDetailsComponent() {
        //bottom Extra data
        this.messagejob = '';
        this.messagecontact = '';
        this.messagephone = "";
        this.messageinvoice = "";
        this.messagenotefordrive = "";
        this.messagenoteforoffice = "";
        //bottom Extra data
        this.dtOptions = {};
    }
    OrderDetailsComponent.prototype.someClickHandler = function (info) {
        this.messagejob = info.Job;
        this.messagecontact = info.Contact;
        this.messagephone = info.Phone;
        this.messageinvoice = info.Invoice;
        this.messagenotefordrive = info.NoteForDrive;
        this.messagenoteforoffice = info.NoteForOffice;
    };
    OrderDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptions = {
            ajax: 'assets/order.json',
            columns: [{
                    title: 'Sno',
                    data: 'ID',
                }, {
                    title: 'Customer Name',
                    data: 'CustomerName'
                }, {
                    title: 'Cust Reference',
                    data: 'CustReference'
                }, {
                    title: 'Drop Off Date',
                    data: 'DropoffDate'
                }, {
                    title: 'Drop Off Time',
                    data: 'DropoffTime'
                }, {
                    title: 'Pick Up Date',
                    data: 'PickUpDate'
                }, {
                    title: 'Pick Up Time',
                    data: 'PickUpTime'
                }, {
                    title: 'Bin type',
                    data: 'BinType'
                }, {
                    title: 'Number needed',
                    data: 'Numberneeded'
                }, {
                    title: 'Amount',
                    data: 'Amount'
                }],
            responsive: true,
            rowCallback: function (row, data, index) {
                var self = _this;
                // Unbind first in order to avoid any duplicate handler
                // (see https://github.com/l-lin/angular-datatables/issues/87)
                $('td', row).unbind('click');
                $('td', row).bind('click', function () {
                    self.someClickHandler(data);
                });
                return row;
            },
        };
    };
    OrderDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-details',
            template: __webpack_require__(/*! ./order-details.component.html */ "./src/app/order-details/order-details.component.html"),
            styles: [__webpack_require__(/*! ./order-details.component.css */ "./src/app/order-details/order-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderDetailsComponent);
    return OrderDetailsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\AngularBinWatchAPP\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map