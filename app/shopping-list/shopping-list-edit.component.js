System.register(['angular2/core', "../shared/shopping-list.service"], function(exports_1, context_1) {
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
    var core_1, shopping_list_service_1;
    var ShoppingListEditComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            }],
        execute: function() {
            ShoppingListEditComponent = (function () {
                function ShoppingListEditComponent(_shoppingListService) {
                    this._shoppingListService = _shoppingListService;
                }
                ShoppingListEditComponent.prototype.onSubmit = function (item) {
                    console.log("in onSubmit", item);
                    console.log("this.ingredient", this.ingredient);
                    // console.log("selectedItem", selectedItem);
                    this.ingredient !== null
                        ? this._shoppingListService.updateItem(this._shoppingListService.getIndexOfItem(this.ingredient), item)
                        : this._shoppingListService.insertItem(item);
                };
                ShoppingListEditComponent.prototype.onDelete = function () {
                    this._shoppingListService.deleteItem(this.ingredient);
                    this.ingredient = null;
                };
                ShoppingListEditComponent = __decorate([
                    core_1.Component({
                        selector: 'my-shopping-list-edit',
                        templateUrl: 'templates/my-shopping-list-edit.html',
                        inputs: ['ingredient'],
                        styleUrls: ['src/css/shopping-list.css'],
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
                ], ShoppingListEditComponent);
                return ShoppingListEditComponent;
            }());
            exports_1("ShoppingListEditComponent", ShoppingListEditComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1lZGl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVdBO2dCQUdDLG1DQUFvQixvQkFBeUM7b0JBQXpDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7Z0JBQUcsQ0FBQztnQkFFakUsNENBQVEsR0FBUixVQUFTLElBQWdCO29CQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ2hELDZDQUE2QztvQkFHN0MsSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJOzBCQUNyQixJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksQ0FBQzswQkFDckcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDL0MsQ0FBQztnQkFFRCw0Q0FBUSxHQUFSO29CQUNDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUN0RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDeEIsQ0FBQztnQkExQkY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsdUJBQXVCO3dCQUNqQyxXQUFXLEVBQUUsc0NBQXNDO3dCQUNuRCxNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUM7d0JBQ3RCLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO3FCQUN4QyxDQUFDOzs2Q0FBQTtnQkFzQkYsZ0NBQUM7WUFBRCxDQXBCQSxBQW9CQyxJQUFBO1lBcEJELGlFQW9CQyxDQUFBIiwiZmlsZSI6InNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SW5ncmVkaWVudH0gZnJvbSBcIi4uL3NoYXJlZC9pbmdyZWRpZW50XCI7XG5pbXBvcnQge1Nob3BwaW5nTGlzdFNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvc2hvcHBpbmctbGlzdC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ215LXNob3BwaW5nLWxpc3QtZWRpdCcsXG5cdHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL215LXNob3BwaW5nLWxpc3QtZWRpdC5odG1sJyxcblx0aW5wdXRzOiBbJ2luZ3JlZGllbnQnXSxcblx0c3R5bGVVcmxzOiBbJ3NyYy9jc3Mvc2hvcHBpbmctbGlzdC5jc3MnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0xpc3RFZGl0Q29tcG9uZW50IHtcblx0aW5ncmVkaWVudDogSW5ncmVkaWVudDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9zaG9wcGluZ0xpc3RTZXJ2aWNlOiBTaG9wcGluZ0xpc3RTZXJ2aWNlKSB7fVxuXG5cdG9uU3VibWl0KGl0ZW06IEluZ3JlZGllbnQpIHtcblx0XHRjb25zb2xlLmxvZyhcImluIG9uU3VibWl0XCIsIGl0ZW0pO1xuXHRcdGNvbnNvbGUubG9nKFwidGhpcy5pbmdyZWRpZW50XCIsIHRoaXMuaW5ncmVkaWVudCk7XG5cdFx0Ly8gY29uc29sZS5sb2coXCJzZWxlY3RlZEl0ZW1cIiwgc2VsZWN0ZWRJdGVtKTtcblxuXG5cdFx0dGhpcy5pbmdyZWRpZW50ICE9PSBudWxsXG5cdFx0XHQ/IHRoaXMuX3Nob3BwaW5nTGlzdFNlcnZpY2UudXBkYXRlSXRlbSh0aGlzLl9zaG9wcGluZ0xpc3RTZXJ2aWNlLmdldEluZGV4T2ZJdGVtKHRoaXMuaW5ncmVkaWVudCksIGl0ZW0pXG5cdFx0XHQ6IHRoaXMuX3Nob3BwaW5nTGlzdFNlcnZpY2UuaW5zZXJ0SXRlbShpdGVtKTtcblx0fVxuXG5cdG9uRGVsZXRlKCkge1xuXHRcdHRoaXMuX3Nob3BwaW5nTGlzdFNlcnZpY2UuZGVsZXRlSXRlbSh0aGlzLmluZ3JlZGllbnQpO1xuXHRcdHRoaXMuaW5ncmVkaWVudCA9IG51bGw7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
