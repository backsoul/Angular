"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_form_component_1 = require("./components/product-form/product-form.component");
var nav_component_1 = require("./components/nav/nav.component");
var table_component_1 = require("./components/table/table.component");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var products_list_component_1 = require("./components/products-list/products-list.component");
var form_product_component_1 = require("./components/form-product/form-product.component");
var product_edit_component_1 = require("./components/product-edit/product-edit.component");
var routes = [
    {
        path: '',
        component: nav_component_1.NavComponent,
        children: [
            {
                path: 'create',
                component: product_form_component_1.ProductFormComponent
            },
            {
                path: 'table',
                component: table_component_1.TableComponent
            },
            {
                path: 'dashboard',
                component: dashboard_component_1.DashboardComponent
            },
            {
                path: 'products',
                component: products_list_component_1.ProductsListComponent
            },
            {
                path: 'products/create',
                component: form_product_component_1.FormProductComponent
            },
            {
                path: 'products/edit/:id',
                component: product_edit_component_1.ProductEditComponent
            },
        ]
    },
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());
exports.AdminRoutingModule = AdminRoutingModule;
