import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
    selector: 'my-app',
    directives: [MealListComponent],
    template: `
    <div class="container">
        <h1>MEALR</h1>
        <h4>List of Meals Eaten Today</h4>
        <meal-list class='row'
        [mealList]="meals"
        (onMealSelect)="mealWasSelected($event)">
        </meal-list>
    </div>
    `
})

export class AppComponent {
    public meals: Meal[];
    constructor(){
        this.meals = [
            new Meal("Breakfast", "Ate some carrots", "100", 0),
            new Meal("Lunch", "Ate a Rabbit", "150", 1)
        ];
    }
    mealWasSelected(clickedMeal: Meal): void {
        console.log('parent', clickedMeal);
    }
}
