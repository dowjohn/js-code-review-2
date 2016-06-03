import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
    selector: 'new-meal',
    outputs: ['onSubmitNewMeal'],
    template: `
    <form class='newMealForm form-group col-sm-4'>
        <h3>Meal Adder:</h3>
        <input placeholder="Meal Name" class="input-lg form-control" #newName>
        <input placeholder="Details" class="input-lg form-control" #newDetails>
        <input placeholder="Calories" class="input-lg form-control" #newCalories>
        <button (click)="addMeal(newName, newDetails, newCalories)" class="btn-warning btn-lg col-sm-2">Add Meal</button>
    </form>
    `
})

export class NewMealComponent {
    public onSubmitNewMeal: EventEmitter<Meal>;
    constructor(){
        this.onSubmitNewMeal = new EventEmitter();
    }
    addMeal(userMealName: HTMLInputElement, userMealDetails: HTMLInputElement, userMealCalories: HTMLInputElement) {
        var newMeal = new Meal(userMealName.value, userMealDetails.value, userMealCalories.value, 0);
        this.onSubmitNewMeal.emit(newMeal);
        userMealName.value = '';
        userMealDetails.value = '';
        userMealCalories.value = '';
    }
}
