import {Ingredient} from "./ingredient.ts";

export class Recipe {
	name: string;
	content: string;
	imageUrl: string;
	ingredients: Ingredient[];

	constructor(name: string, content: string, imageUrl: string, ingredients: Ingredient[]) {
		this.name = name;
		this.content = content;
		this.imageUrl = imageUrl;
		this.ingredients = ingredients;
	}
}