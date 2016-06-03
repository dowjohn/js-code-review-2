import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
    selector: 'my-app',
    directives: [MealListComponent],
    template: `
    <div class="container">
        <h1 class='titleOf'>MEALR</h1>
        <h4 class='titleOf'>Track yer meals</h4>
        <meal-list
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
            new Meal("Carrot", "Ate some carrots", 100, 0),
            new Meal("Rabbit", "Ate a Rabbit", 550, 1)
        ];
    }
    mealWasSelected(clickedMeal: Meal): void {
        console.log('parent', clickedMeal);
    }
}
