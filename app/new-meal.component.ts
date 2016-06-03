import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
    selector: 'new-meal',
    outputs: ['onSubmitNewMeal'],
    template: `
    <form class='newMealForm form-group col-sm-12'>
        <h3>Meal Adder:</h3>
        <input placeholder="Meal Name" class="input-lg form-control formFix" #newName>
        <input placeholder="Details" class="input-lg form-control formFix" #newDetails>
        <input placeholder="Calories" class="input-lg form-control formFix" #newCalories>
        <button (click)="addMeal(newName, newDetails, newCalories)" class="btn-primary btn-lg center-block">Add Meal</button>
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
