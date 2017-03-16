var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { TodoItemComponent } from './components/todo-item';
export var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
        this.todos = new Array();
        this.todos.push(new TodoItemComponent("Item1", "Item1", false, false));
        this.todos.push(new TodoItemComponent("Item2", "Item2", true, false));
    }
    AppComponent.prototype.onPlusClick = function () {
        this.todos.push(new TodoItemComponent("Item" + (this.todos.length + 1), "Item" + (this.todos.length + 1), false, false));
    };
    AppComponent.prototype.onMinusClick = function () {
        this.todos = this.todos.slice(0, this.todos.length - 1);
    };
    AppComponent = __decorate([
        Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.html',
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/vladislav/workpro/progress/quickstart/src/app/app.component.js.map