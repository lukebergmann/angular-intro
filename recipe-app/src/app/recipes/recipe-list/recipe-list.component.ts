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
    new Recipe('World Famous Pizza', 'This is the best pizza ever!', 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg'),
    new Recipe('Delicious Crispy Tofu', 'You will dream of this tofu!', 'https://d2wtgwi3o396m5.cloudfront.net/recipe/77f34ab7-7738-4c7e-b56a-4106941a15f6.jpg?d=1408x1120')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
