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
          this.recipe = recipe
        }
    )
    .unsubscribe
  }

  getRandomRecipe() {
    this.getrecipe.callRecipes()
      .subscribe(
        recipe => {
          this.recipe = recipe
        })
  }

}
