import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
  <h5 class="">
    {{ meal.name }}:
    <br>
    {{ meal.details }}
    <br>
    calories: {{ meal.calories }}
  </h5>
  `
})
export class MealComponent {
  public meal: Meal;
}
