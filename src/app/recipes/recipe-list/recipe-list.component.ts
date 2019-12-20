import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Cookie','A Banana Cookie','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3w385vODPcLligKz41e6In9rjzhWiYJ9Pkhh3VAlvzbBMmLvF')
  ]
  constructor() { }

  ngOnInit() {
  }

}