"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OrderComponent = void 0;
var core_1 = require("@angular/core");
var OrderComponent = /** @class */ (function () {
    function OrderComponent(cartService) {
        this.cartService = cartService;
        this.products$ = this.cartService.cart$;
    }
    OrderComponent.prototype.ngOnInit = function () { };
    OrderComponent = __decorate([
        core_1.Component({
            selector: 'app-order',
            templateUrl: './order.component.html',
            styleUrls: ['./order.component.scss']
        })
    ], OrderComponent);
    return OrderComponent;
}());
exports.OrderComponent = OrderComponent;
