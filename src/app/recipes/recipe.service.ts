import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
        new Recipe(
            'Test Recipe', 
            'This is simply a test', 
            'http://assets.kraftfoods.com/recipe_images/opendeploy/57641_640x428.jpg',
            [
                new Ingredient('Bread', 3),
                new Ingredient('Tomatoes', 4)]),
        new Recipe(
            'Another Test Recipe', 
            'This is another test', 
            'https://upload.wikimedia.org/wikipedia/commons/2/25/Hostess-Cupcake-Whole.jpg',
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

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}