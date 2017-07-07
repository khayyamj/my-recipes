import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png'),
    new Recipe('Another Test Recipe', 'This is another test', 'https://cdn.pixabay.com/photo/2015/07/01/23/03/cocktail-828182_960_720.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
