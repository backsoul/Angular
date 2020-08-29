"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminGuard = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var AdminGuard = /** @class */ (function () {
    function AdminGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.authService.hasUser().pipe(operators_1.map(function (user) { return (user === null ? false : true); }), operators_1.tap(function (hasUser) {
            if (!hasUser) {
                _this.router.navigate(['/auth/login']);
            }
        }));
    };
    AdminGuard = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AdminGuard);
    return AdminGuard;
}());
exports.AdminGuard = AdminGuard;
