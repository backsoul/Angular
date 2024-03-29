"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FooterComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.emailField = new forms_1.FormControl('', [
            forms_1.Validators.required,
            forms_1.Validators.email,
            forms_1.Validators.minLength(4),
            forms_1.Validators.maxLength(30),
        ]);
        /*     this.emailField.valueChanges.subscribe((value) => {
          console.log(value);
        }); */
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent.prototype.sendEmail = function () {
        if (this.emailField.valid) {
            console.log(this.emailField.value);
        }
    };
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.scss']
        })
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
