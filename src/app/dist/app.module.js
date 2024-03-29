"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var cart_component_1 = require("./cart/cart.component");
var demo_component_1 = require("./demo/demo.component");
var layout_component_1 = require("./layout/layout.component");
var shared_module_1 = require("./shared/shared.module");
var core_module_1 = require("./core/core.module");
var animations_1 = require("@angular/platform-browser/animations");
var http_1 = require("@angular/common/http");
var fire_1 = require("@angular/fire");
var environment_1 = require("../environments/environment");
var auth_1 = require("@angular/fire/auth");
var storage_1 = require("@angular/fire/storage");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, cart_component_1.CartComponent, demo_component_1.DemoComponent, layout_component_1.LayoutComponent],
            imports: [
                platform_browser_1.BrowserModule,
                auth_1.AngularFireAuthModule,
                storage_1.AngularFireStorageModule,
                fire_1.AngularFireModule.initializeApp(environment_1.environment.firebase),
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                shared_module_1.SharedModule,
                core_module_1.CoreModule,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
