import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { EditMealDetailsComponent} from './edit-meal.component';
import { NewMealComponent} from './new-meal.component'
import { CaloriePipe } from './calorie.pipe';

@Component({
    selector: 'meal-list',
    inputs: ['mealList'],
    outputs: ['onMealSelect'],
    pipes: [CaloriePipe],
    directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
    template: `
    <div class='row'>
        <new-meal (onSubmitNewMeal)="[createMeal($event)]">
        </new-meal>
    </div>
    <div class='row'>
        <div class='col-sm-6'>
            <select (change)="onChange($event.target.value)">
                <option value="all">Show All</option>
                <option value="healthy">Show low cal</option>
                <option value="unHealthy" selected="selected">Show high cal</option>
            </select>
            <meal-display *ngFor="#currentMeal of mealList | healthy:filterCalories"
                (click)="mealClicked(currentMeal)"
                [meal]="currentMeal"
                [class.selected]="currentMeal === selectedMeal">
            </meal-display>
        </div>
        <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal">
        </edit-meal-details>
    </div>
    `
})

export class MealListComponent {
    public mealList: Meal[];
    public onMealSelect: EventEmitter<Meal>;
    public selectedMeal: Meal;
    public isAddFormShown: boolean = false;
    public filterCalories: string = "unHealthy";
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
    onChange(filterOption) {
        this.filterCalories = filterOption;
     }
}
