import {Injectable} from 'angular2/core';
import {Ingredient} from "./ingredient";
import {SHOPPING_LIST} from "../mock/shopping-list";

@Injectable()
export class ShoppingListService {
	getAllItems() {
		return SHOPPING_LIST;
	}

	getItem(index: number) {
		return SHOPPING_LIST[index];
	}

	getIndexOfItem(item: Ingredient) {
		return SHOPPING_LIST.indexOf(item);
	}

	insertItem(item: Ingredient) {
		SHOPPING_LIST.push(item);
	}

	insertItems(items: Ingredient[]) {
		Array.prototype.push.apply(SHOPPING_LIST, items);
	}

	deleteItem(item: Ingredient) {
		SHOPPING_LIST.splice(SHOPPING_LIST.indexOf(item), 1);
	}

	updateItem(index: number, item: Ingredient) {
		SHOPPING_LIST[index] = item;
	}
}
