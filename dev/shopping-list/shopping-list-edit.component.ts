import {Component} from 'angular2/core';
import {Ingredient} from "../shared/ingredient";
import {ShoppingListService} from "../shared/shopping-list.service";

@Component({
	selector: 'my-shopping-list-edit',
	templateUrl: 'templates/my-shopping-list-edit.html',
	inputs: ['ingredient'],
	styleUrls: ['src/css/shopping-list.css'],
})

export class ShoppingListEditComponent {
	ingredient: Ingredient;

	constructor(private _shoppingListService: ShoppingListService) {}

	onSubmit(item: Ingredient) {
		console.log("in onSubmit", item);
		console.log("this.ingredient", this.ingredient);
		// console.log("selectedItem", selectedItem);


		this.ingredient !== null
			? this._shoppingListService.updateItem(this._shoppingListService.getIndexOfItem(this.ingredient), item)
			: this._shoppingListService.insertItem(item);
	}

	onDelete() {
		this._shoppingListService.deleteItem(this.ingredient);
		this.ingredient = null;
	}
}