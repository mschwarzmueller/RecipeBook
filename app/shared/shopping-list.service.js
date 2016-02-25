System.register(['angular2/core', "../mock/shopping-list"], function(exports_1, context_1) {
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
    var core_1, shopping_list_1;
    var ShoppingListService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_1_1) {
                shopping_list_1 = shopping_list_1_1;
            }],
        execute: function() {
            ShoppingListService = (function () {
                function ShoppingListService() {
                }
                ShoppingListService.prototype.getAllItems = function () {
                    return shopping_list_1.SHOPPING_LIST;
                };
                ShoppingListService.prototype.getItem = function (index) {
                    return shopping_list_1.SHOPPING_LIST[index];
                };
                ShoppingListService.prototype.getIndexOfItem = function (item) {
                    console.log("getIndexOfItem:", item);
                    console.log("SHOPPING_LIST:", shopping_list_1.SHOPPING_LIST);
                    console.log("SHOPPING_LIST.indexOf(item):", shopping_list_1.SHOPPING_LIST.indexOf(item));
                    return shopping_list_1.SHOPPING_LIST.indexOf(item);
                };
                ShoppingListService.prototype.insertItem = function (item) {
                    console.log("in insertItem ---------");
                    console.log("SHOPPING_LIST before:", shopping_list_1.SHOPPING_LIST);
                    console.log("item:", item);
                    shopping_list_1.SHOPPING_LIST.push(item);
                    console.log("SHOPPING_LIST after:", shopping_list_1.SHOPPING_LIST);
                };
                ShoppingListService.prototype.insertItems = function (items) {
                    Array.prototype.push.apply(shopping_list_1.SHOPPING_LIST, items);
                };
                ShoppingListService.prototype.deleteItem = function (item) {
                    shopping_list_1.SHOPPING_LIST.splice(shopping_list_1.SHOPPING_LIST.indexOf(item), 1);
                };
                ShoppingListService.prototype.updateItem = function (index, item) {
                    shopping_list_1.SHOPPING_LIST[index] = item;
                };
                ShoppingListService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListService);
                return ShoppingListService;
            }());
            exports_1("ShoppingListService", ShoppingListService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zaG9wcGluZy1saXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFBQTtnQkFtQ0EsQ0FBQztnQkFsQ0EseUNBQVcsR0FBWDtvQkFDQyxNQUFNLENBQUMsNkJBQWEsQ0FBQztnQkFDdEIsQ0FBQztnQkFFRCxxQ0FBTyxHQUFQLFVBQVEsS0FBYTtvQkFDcEIsTUFBTSxDQUFDLDZCQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzdCLENBQUM7Z0JBRUQsNENBQWMsR0FBZCxVQUFlLElBQWdCO29CQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDO29CQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLDZCQUFhLENBQUMsQ0FBQztvQkFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsRUFBRSw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUN6RSxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBRUQsd0NBQVUsR0FBVixVQUFXLElBQWdCO29CQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7b0JBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsNkJBQWEsQ0FBQyxDQUFDO29CQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDM0IsNkJBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsNkJBQWEsQ0FBQyxDQUFDO2dCQUNwRCxDQUFDO2dCQUVELHlDQUFXLEdBQVgsVUFBWSxLQUFtQjtvQkFDOUIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLDZCQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2xELENBQUM7Z0JBRUQsd0NBQVUsR0FBVixVQUFXLElBQWdCO29CQUMxQiw2QkFBYSxDQUFDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDdEQsQ0FBQztnQkFFRCx3Q0FBVSxHQUFWLFVBQVcsS0FBYSxFQUFFLElBQWdCO29CQUN6Qyw2QkFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFDN0IsQ0FBQztnQkFuQ0Y7b0JBQUMsaUJBQVUsRUFBRTs7dUNBQUE7Z0JBb0NiLDBCQUFDO1lBQUQsQ0FuQ0EsQUFtQ0MsSUFBQTtZQW5DRCxxREFtQ0MsQ0FBQSIsImZpbGUiOiJzaGFyZWQvc2hvcHBpbmctbGlzdC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SW5ncmVkaWVudH0gZnJvbSBcIi4vaW5ncmVkaWVudFwiO1xuaW1wb3J0IHtTSE9QUElOR19MSVNUfSBmcm9tIFwiLi4vbW9jay9zaG9wcGluZy1saXN0XCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0xpc3RTZXJ2aWNlIHtcblx0Z2V0QWxsSXRlbXMoKSB7XG5cdFx0cmV0dXJuIFNIT1BQSU5HX0xJU1Q7XG5cdH1cblxuXHRnZXRJdGVtKGluZGV4OiBudW1iZXIpIHtcblx0XHRyZXR1cm4gU0hPUFBJTkdfTElTVFtpbmRleF07XG5cdH1cblxuXHRnZXRJbmRleE9mSXRlbShpdGVtOiBJbmdyZWRpZW50KSB7XG5cdFx0Y29uc29sZS5sb2coXCJnZXRJbmRleE9mSXRlbTpcIiwgaXRlbSk7XG5cdFx0Y29uc29sZS5sb2coXCJTSE9QUElOR19MSVNUOlwiLCBTSE9QUElOR19MSVNUKTtcblx0XHRjb25zb2xlLmxvZyhcIlNIT1BQSU5HX0xJU1QuaW5kZXhPZihpdGVtKTpcIiwgU0hPUFBJTkdfTElTVC5pbmRleE9mKGl0ZW0pKTtcdFx0XG5cdFx0cmV0dXJuIFNIT1BQSU5HX0xJU1QuaW5kZXhPZihpdGVtKTtcblx0fVxuXG5cdGluc2VydEl0ZW0oaXRlbTogSW5ncmVkaWVudCkge1xuXHRcdGNvbnNvbGUubG9nKFwiaW4gaW5zZXJ0SXRlbSAtLS0tLS0tLS1cIik7XG5cdFx0Y29uc29sZS5sb2coXCJTSE9QUElOR19MSVNUIGJlZm9yZTpcIiwgU0hPUFBJTkdfTElTVCk7XG5cdFx0Y29uc29sZS5sb2coXCJpdGVtOlwiLCBpdGVtKTtcblx0XHRTSE9QUElOR19MSVNULnB1c2goaXRlbSk7XG5cdFx0Y29uc29sZS5sb2coXCJTSE9QUElOR19MSVNUIGFmdGVyOlwiLCBTSE9QUElOR19MSVNUKTtcblx0fVxuXG5cdGluc2VydEl0ZW1zKGl0ZW1zOiBJbmdyZWRpZW50W10pIHtcblx0XHRBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShTSE9QUElOR19MSVNULCBpdGVtcyk7XG5cdH1cblxuXHRkZWxldGVJdGVtKGl0ZW06IEluZ3JlZGllbnQpIHtcblx0XHRTSE9QUElOR19MSVNULnNwbGljZShTSE9QUElOR19MSVNULmluZGV4T2YoaXRlbSksIDEpO1xuXHR9XG5cblx0dXBkYXRlSXRlbShpbmRleDogbnVtYmVyLCBpdGVtOiBJbmdyZWRpZW50KSB7XG5cdFx0U0hPUFBJTkdfTElTVFtpbmRleF0gPSBpdGVtO1xuXHR9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
