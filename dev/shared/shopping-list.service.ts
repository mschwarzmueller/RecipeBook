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
		console.log("getIndexOfItem:", item);
		console.log("SHOPPING_LIST:", SHOPPING_LIST);
		console.log("SHOPPING_LIST.indexOf(item):", SHOPPING_LIST.indexOf(item));		
		return SHOPPING_LIST.indexOf(item);
	}

	insertItem(item: Ingredient) {
		console.log("in insertItem ---------");
		console.log("SHOPPING_LIST before:", SHOPPING_LIST);
		console.log("item:", item);
		SHOPPING_LIST.push(item);
		console.log("SHOPPING_LIST after:", SHOPPING_LIST);
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
