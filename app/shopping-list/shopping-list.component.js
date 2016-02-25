System.register(['angular2/core', "./shopping-list-edit.component", "../shared/shopping-list.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, shopping_list_edit_component_1, shopping_list_service_1;
    var ShoppingListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_edit_component_1_1) {
                shopping_list_edit_component_1 = shopping_list_edit_component_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            }],
        execute: function() {
            ShoppingListComponent = (function () {
                function ShoppingListComponent(_shoppingListService) {
                    this._shoppingListService = _shoppingListService;
                    this.selectedItem = null;
                }
                ShoppingListComponent.prototype.ngOnInit = function () {
                    this.shoppingList = this._shoppingListService.getAllItems();
                };
                ShoppingListComponent.prototype.onSelectItem = function (item) {
                    this.selectedItem = item;
                };
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'templates/shopping-list.html',
                        directives: [shopping_list_edit_component_1.ShoppingListEditComponent],
                        providers: [shopping_list_service_1.ShoppingListService],
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            }());
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFJQywrQkFBb0Isb0JBQXlDO29CQUF6Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO29CQUY3RCxpQkFBWSxHQUFlLElBQUksQ0FBQztnQkFJaEMsQ0FBQztnQkFFRCx3Q0FBUSxHQUFSO29CQUNDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUM3RCxDQUFDO2dCQUVELDRDQUFZLEdBQVosVUFBYSxJQUFnQjtvQkFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUE7Z0JBQ3pCLENBQUM7Z0JBcEJGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsV0FBVyxFQUFFLDhCQUE4Qjt3QkFDM0MsVUFBVSxFQUFFLENBQUMsd0RBQXlCLENBQUM7d0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLDJDQUFtQixDQUFDO3FCQUNoQyxDQUFDOzt5Q0FBQTtnQkFpQkYsNEJBQUM7WUFBRCxDQWZBLEFBZUMsSUFBQTtZQWZELHlEQWVDLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7U2hvcHBpbmdMaXN0RWRpdENvbXBvbmVudH0gZnJvbSBcIi4vc2hvcHBpbmctbGlzdC1lZGl0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtJbmdyZWRpZW50fSBmcm9tIFwiLi4vc2hhcmVkL2luZ3JlZGllbnRcIjtcbmltcG9ydCB7U2hvcHBpbmdMaXN0U2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9zaG9wcGluZy1saXN0LnNlcnZpY2VcIjtcbmltcG9ydCB7T25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3Nob3BwaW5nLWxpc3QuaHRtbCcsXG5cdGRpcmVjdGl2ZXM6IFtTaG9wcGluZ0xpc3RFZGl0Q29tcG9uZW50XSxcblx0cHJvdmlkZXJzOiBbU2hvcHBpbmdMaXN0U2VydmljZV0sXG59KVxuXG5leHBvcnQgY2xhc3MgU2hvcHBpbmdMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0c2hvcHBpbmdMaXN0OiBJbmdyZWRpZW50W107XG5cdHNlbGVjdGVkSXRlbTogSW5ncmVkaWVudCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfc2hvcHBpbmdMaXN0U2VydmljZTogU2hvcHBpbmdMaXN0U2VydmljZSkge1xuXG5cdH1cblxuXHRuZ09uSW5pdCgpOmFueSB7XG5cdFx0dGhpcy5zaG9wcGluZ0xpc3QgPSB0aGlzLl9zaG9wcGluZ0xpc3RTZXJ2aWNlLmdldEFsbEl0ZW1zKCk7XG5cdH1cblxuXHRvblNlbGVjdEl0ZW0oaXRlbTogSW5ncmVkaWVudCkge1xuXHRcdHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbVxuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
