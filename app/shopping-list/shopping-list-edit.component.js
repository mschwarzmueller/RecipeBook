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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1lZGl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVdBO2dCQUdDLG1DQUFvQixvQkFBeUM7b0JBQXpDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7Z0JBQUcsQ0FBQztnQkFFakUsNENBQVEsR0FBUixVQUFTLElBQWdCO29CQUN4QixJQUFJLENBQUMsVUFBVSxLQUFLLElBQUk7MEJBQ3JCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxDQUFDOzBCQUNyRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMvQyxDQUFDO2dCQUVELDRDQUFRLEdBQVI7b0JBQ0MsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ3RELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUN4QixDQUFDO2dCQXJCRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSx1QkFBdUI7d0JBQ2pDLFdBQVcsRUFBRSxzQ0FBc0M7d0JBQ25ELE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQzt3QkFDdEIsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7cUJBQ3hDLENBQUM7OzZDQUFBO2dCQWlCRixnQ0FBQztZQUFELENBZkEsQUFlQyxJQUFBO1lBZkQsaUVBZUMsQ0FBQSIsImZpbGUiOiJzaG9wcGluZy1saXN0L3Nob3BwaW5nLWxpc3QtZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0luZ3JlZGllbnR9IGZyb20gXCIuLi9zaGFyZWQvaW5ncmVkaWVudFwiO1xuaW1wb3J0IHtTaG9wcGluZ0xpc3RTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL3Nob3BwaW5nLWxpc3Quc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdteS1zaG9wcGluZy1saXN0LWVkaXQnLFxuXHR0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9teS1zaG9wcGluZy1saXN0LWVkaXQuaHRtbCcsXG5cdGlucHV0czogWydpbmdyZWRpZW50J10sXG5cdHN0eWxlVXJsczogWydzcmMvY3NzL3Nob3BwaW5nLWxpc3QuY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgU2hvcHBpbmdMaXN0RWRpdENvbXBvbmVudCB7XG5cdGluZ3JlZGllbnQ6IEluZ3JlZGllbnQ7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfc2hvcHBpbmdMaXN0U2VydmljZTogU2hvcHBpbmdMaXN0U2VydmljZSkge31cblxuXHRvblN1Ym1pdChpdGVtOiBJbmdyZWRpZW50KSB7XG5cdFx0dGhpcy5pbmdyZWRpZW50ICE9PSBudWxsXG5cdFx0XHQ/IHRoaXMuX3Nob3BwaW5nTGlzdFNlcnZpY2UudXBkYXRlSXRlbSh0aGlzLl9zaG9wcGluZ0xpc3RTZXJ2aWNlLmdldEluZGV4T2ZJdGVtKHRoaXMuaW5ncmVkaWVudCksIGl0ZW0pXG5cdFx0XHQ6IHRoaXMuX3Nob3BwaW5nTGlzdFNlcnZpY2UuaW5zZXJ0SXRlbShpdGVtKTtcblx0fVxuXG5cdG9uRGVsZXRlKCkge1xuXHRcdHRoaXMuX3Nob3BwaW5nTGlzdFNlcnZpY2UuZGVsZXRlSXRlbSh0aGlzLmluZ3JlZGllbnQpO1xuXHRcdHRoaXMuaW5ncmVkaWVudCA9IG51bGw7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
