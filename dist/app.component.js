"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var data_service_1 = require('./data.service');
//import {HeaderComponent} from './header/header.component';
//import {SliderComponent} from './slider/slider.component';
//import {NavigationComponent} from './navigation/navigation.component';
//import {FooterComponent} from './footer/footer.component';
var AppComponent = (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.imgWidth = 50;
        this.imgMargin = 50;
        this.title = 'Tasks';
        /*
            //Output data
        parentfunction(data){
            alert(data);
        }*/
        this.height = 100;
        this.width = 100;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getTasks().subscribe(function (tasks) { _this.tasks = tasks; console.log(_this.tasks); }, function (error) { _this.errorMessage = error; });
    };
    AppComponent.prototype.sayHello = function () {
        alert(this.title);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-container',
            templateUrl: 'src/app/app.component.html'
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map