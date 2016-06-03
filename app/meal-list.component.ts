import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';

@Component({
    selector: 'meal-list',
    inputs: ['mealList'],
    outputs: ['onMealSelect'],
    directives: [NewMealComponent, EditMealDetailsComponent, MealComponent],
    template: `

    `
})

export class MealListComponent {
    public mealList: Meal[];
    public onMealSelect: EventEmitter<Meal>;
    public selectedMeal: Meal;
    public isAddFormShown: boolean = false;
    constructor() {
        this.onMealSelect = new EventEmitter();
    }
    mealClicked(clickedMeal: Meal): void {
        this.selectedMeal = clickedMeal;
        this.onMealSelect.emit(clickedMeal);
    }
    createMeal(newMeal: Meal): void {
        newMeal.id = this.mealList.length;
        this.mealList.push(newMeal);
    }
}
