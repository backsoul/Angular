"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductComponent = void 0;
var core_1 = require("@angular/core");
var ProductComponent = /** @class */ (function () {
    function ProductComponent(cartService) {
        this.cartService = cartService;
        this.productClicked = new core_1.EventEmitter();
        this.today = new Date();
    }
    ProductComponent.prototype.addCart = function () {
        console.log('añadir al carrito');
        this.cartService.addCart(this.product);
        /* this.productClicked.emit(this.product.id); */
    };
    __decorate([
        core_1.Input()
    ], ProductComponent.prototype, "product");
    __decorate([
        core_1.Output()
    ], ProductComponent.prototype, "productClicked");
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'app-product',
            templateUrl: './product.component.html',
            styleUrls: ['./product.component.scss']
        })
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
