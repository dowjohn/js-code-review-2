import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
  <div class="col-sm-4">
    <p>{{ meal.name }}:</p>
    <p>{{ meal.details }}</p>
    <p>calories: {{ meal.calories }}</p>
  </div>
  `
})
export class MealComponent {
  public meal: Meal;
}
