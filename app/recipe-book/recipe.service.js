System.register(['angular2/core', "../mock/recipes"], function(exports_1, context_1) {
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
    var core_1, recipes_1;
    var RecipeService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (recipes_1_1) {
                recipes_1 = recipes_1_1;
            }],
        execute: function() {
            RecipeService = (function () {
                function RecipeService() {
                }
                RecipeService.prototype.getAllRecipes = function () {
                    return recipes_1.RECIPES;
                };
                RecipeService.prototype.getRecipe = function (index) {
                    return recipes_1.RECIPES[index];
                };
                RecipeService.prototype.getRecipeIndex = function (item) {
                    return recipes_1.RECIPES.indexOf(item);
                };
                RecipeService.prototype.insertRecipe = function (item) {
                    recipes_1.RECIPES.push(item);
                };
                RecipeService.prototype.deleteRecipe = function (index) {
                    recipes_1.RECIPES.splice(index, 1);
                };
                RecipeService.prototype.updateRecipe = function (index, item) {
                    recipes_1.RECIPES[index] = item;
                };
                RecipeService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], RecipeService);
                return RecipeService;
            }());
            exports_1("RecipeService", RecipeService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBQUE7Z0JBd0JBLENBQUM7Z0JBdkJBLHFDQUFhLEdBQWI7b0JBQ0MsTUFBTSxDQUFDLGlCQUFPLENBQUM7Z0JBQ2hCLENBQUM7Z0JBRUQsaUNBQVMsR0FBVCxVQUFVLEtBQWE7b0JBQ3RCLE1BQU0sQ0FBQyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN2QixDQUFDO2dCQUVELHNDQUFjLEdBQWQsVUFBZSxJQUFZO29CQUMxQixNQUFNLENBQUMsaUJBQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlCLENBQUM7Z0JBRUQsb0NBQVksR0FBWixVQUFhLElBQVk7b0JBQ3hCLGlCQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQixDQUFDO2dCQUVELG9DQUFZLEdBQVosVUFBYSxLQUFhO29CQUN6QixpQkFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLENBQUM7Z0JBRUQsb0NBQVksR0FBWixVQUFhLEtBQWEsRUFBRSxJQUFZO29CQUN2QyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFDdkIsQ0FBQztnQkF6QkY7b0JBQUMsaUJBQVUsRUFBRTs7aUNBQUE7Z0JBMEJiLG9CQUFDO1lBQUQsQ0F4QkEsQUF3QkMsSUFBQTtZQXhCRCx5Q0F3QkMsQ0FBQSIsImZpbGUiOiJyZWNpcGUtYm9vay9yZWNpcGUuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JlY2lwZX0gZnJvbSBcIi4uL3NoYXJlZC9yZWNpcGVcIjtcbmltcG9ydCB7UkVDSVBFU30gZnJvbSBcIi4uL21vY2svcmVjaXBlc1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5cbmV4cG9ydCBjbGFzcyBSZWNpcGVTZXJ2aWNlIHtcblx0Z2V0QWxsUmVjaXBlcygpIHtcblx0XHRyZXR1cm4gUkVDSVBFUztcblx0fVxuXG5cdGdldFJlY2lwZShpbmRleDogbnVtYmVyKSB7XG5cdFx0cmV0dXJuIFJFQ0lQRVNbaW5kZXhdO1xuXHR9XG5cblx0Z2V0UmVjaXBlSW5kZXgoaXRlbTogUmVjaXBlKSB7XG5cdFx0cmV0dXJuIFJFQ0lQRVMuaW5kZXhPZihpdGVtKTtcblx0fVxuXG5cdGluc2VydFJlY2lwZShpdGVtOiBSZWNpcGUpIHtcblx0XHRSRUNJUEVTLnB1c2goaXRlbSk7XG5cdH1cblxuXHRkZWxldGVSZWNpcGUoaW5kZXg6IG51bWJlcikge1xuXHRcdFJFQ0lQRVMuc3BsaWNlKGluZGV4LCAxKTtcblx0fVxuXG5cdHVwZGF0ZVJlY2lwZShpbmRleDogbnVtYmVyLCBpdGVtOiBSZWNpcGUpIHtcblx0XHRSRUNJUEVTW2luZGV4XSA9IGl0ZW07XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
