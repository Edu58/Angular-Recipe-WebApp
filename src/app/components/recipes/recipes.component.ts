import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GetrecipesService } from 'src/app/services/getrecipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipe: any;

  constructor(private getrecipe: GetrecipesService) { }

  ngOnInit() {
    this.getrecipe.callRecipes()
      .subscribe(
        recipe => {
          console.log(recipe)
          this.recipe = recipe
        }
    )
  }

  getRandomRecipe() {
    this.getrecipe.callRecipes()
      .subscribe(
        recipe => {
          console.log(recipe)
          this.recipe = recipe
        })
  }

}
