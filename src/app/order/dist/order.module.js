"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OrderModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var order_routing_module_1 = require("./order-routing.module");
var order_component_1 = require("./components/order/order.component");
var material_module_1 = require("./../material/material.module");
var shared_module_1 = require("./../shared/shared.module");
var OrderModule = /** @class */ (function () {
    function OrderModule() {
    }
    OrderModule = __decorate([
        core_1.NgModule({
            declarations: [order_component_1.OrderComponent],
            imports: [common_1.CommonModule, order_routing_module_1.OrderRoutingModule, shared_module_1.SharedModule, material_module_1.MaterialModule]
        })
    ], OrderModule);
    return OrderModule;
}());
exports.OrderModule = OrderModule;
