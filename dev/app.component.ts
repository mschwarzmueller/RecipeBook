import {Component} from 'angular2/core';
import {RecipesComponent} from "./recipe-book/recipes.component";
import {RouteConfig} from 'angular2/router';
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'app',
    templateUrl: 'templates/app.html',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
	{path: '/recipes', name: 'Recipes', component: RecipesComponent, useAsDefault: true},
	{path: '/shopping-list', name: 'ShoppingList', component: ShoppingListComponent},
])

export class AppComponent {


}