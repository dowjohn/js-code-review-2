import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
  <h3 [class.low]="keg.pints <= 10">
    {{ meal.name }}:
    {{ meal.description }}
  </h3>
  `
})
export class KegComponent {
  public meal: Meal;
}
