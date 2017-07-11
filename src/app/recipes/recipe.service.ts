import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'Test Recipe', 
            'This is simply a test', 
            'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png',
            [
                new Ingredient('Bread', 3),
                new Ingredient('Tomatoes', 4)]),
        new Recipe(
            'Another Test Recipe', 
            'This is another test', 
            'https://cdn.pixabay.com/photo/2015/07/01/23/03/cocktail-828182_960_720.jpg',
            [
                new Ingredient('Some Stuff', 2),
                new Ingredient('More Sweet', 5)])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}