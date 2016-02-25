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
                    console.log("in onSelectedItem", item);
                    this.selectedItem = item;
                    console.log("this.selectedItem", this.selectedItem);
                };
                ShoppingListComponent.prototype.onAddItem = function () {
                    this.selectedItem = null;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFJQywrQkFBb0Isb0JBQXlDO29CQUF6Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO29CQUY3RCxpQkFBWSxHQUFlLElBQUksQ0FBQztnQkFJaEMsQ0FBQztnQkFFRCx3Q0FBUSxHQUFSO29CQUNDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUM3RCxDQUFDO2dCQUVELDRDQUFZLEdBQVosVUFBYSxJQUFnQjtvQkFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7b0JBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNyRCxDQUFDO2dCQUVELHlDQUFTLEdBQVQ7b0JBQ0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQzFCLENBQUM7Z0JBMUJGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsV0FBVyxFQUFFLDhCQUE4Qjt3QkFDM0MsVUFBVSxFQUFFLENBQUMsd0RBQXlCLENBQUM7d0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLDJDQUFtQixDQUFDO3FCQUNoQyxDQUFDOzt5Q0FBQTtnQkF1QkYsNEJBQUM7WUFBRCxDQXJCQSxBQXFCQyxJQUFBO1lBckJELHlEQXFCQyxDQUFBIiwiZmlsZSI6InNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1Nob3BwaW5nTGlzdEVkaXRDb21wb25lbnR9IGZyb20gXCIuL3Nob3BwaW5nLWxpc3QtZWRpdC5jb21wb25lbnRcIjtcbmltcG9ydCB7SW5ncmVkaWVudH0gZnJvbSBcIi4uL3NoYXJlZC9pbmdyZWRpZW50XCI7XG5pbXBvcnQge1Nob3BwaW5nTGlzdFNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvc2hvcHBpbmctbGlzdC5zZXJ2aWNlXCI7XG5pbXBvcnQge09uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHR0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9zaG9wcGluZy1saXN0Lmh0bWwnLFxuXHRkaXJlY3RpdmVzOiBbU2hvcHBpbmdMaXN0RWRpdENvbXBvbmVudF0sXG5cdHByb3ZpZGVyczogW1Nob3BwaW5nTGlzdFNlcnZpY2VdLFxufSlcblxuZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdHNob3BwaW5nTGlzdDogSW5ncmVkaWVudFtdO1xuXHRzZWxlY3RlZEl0ZW06IEluZ3JlZGllbnQgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX3Nob3BwaW5nTGlzdFNlcnZpY2U6IFNob3BwaW5nTGlzdFNlcnZpY2UpIHtcblxuXHR9XG5cblx0bmdPbkluaXQoKTphbnkge1xuXHRcdHRoaXMuc2hvcHBpbmdMaXN0ID0gdGhpcy5fc2hvcHBpbmdMaXN0U2VydmljZS5nZXRBbGxJdGVtcygpO1xuXHR9XG5cblx0b25TZWxlY3RJdGVtKGl0ZW06IEluZ3JlZGllbnQpIHtcblx0XHRjb25zb2xlLmxvZyhcImluIG9uU2VsZWN0ZWRJdGVtXCIsIGl0ZW0pO1xuXHRcdHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcblx0XHRjb25zb2xlLmxvZyhcInRoaXMuc2VsZWN0ZWRJdGVtXCIsIHRoaXMuc2VsZWN0ZWRJdGVtKTtcblx0fVxuXG5cdG9uQWRkSXRlbSgpIHtcblx0XHR0aGlzLnNlbGVjdGVkSXRlbSA9IG51bGw7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
