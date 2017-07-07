import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png'),
        new Recipe('Another Test Recipe', 'This is another test', 'https://cdn.pixabay.com/photo/2015/07/01/23/03/cocktail-828182_960_720.jpg')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}