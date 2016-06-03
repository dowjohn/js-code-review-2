import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
    selector: 'new-meal',
    outputs: ['onSubmitNewMeal'],
    template: `
    <div class='newMealForm form-group'>
        <h3>Meal Adder:</h3>
        <div class="row">
            <input placeholder="Meal Name" class="col-sm-6 input-lg formFix" #newName>
        </div>
        <div class="row">
            <input placeholder="Details" class="col-sm-6 input-lg formFix" #newDetails>
        </div>
        <div class="row">
            <input placeholder="Calories" class="col-sm-6 input-lg formFix" #newCalories>
        </div>
        <div class='row'>
        <button (click)="addMeal(newName, newDetails, newCalories)" class="btn-warning btn-lg col-sm-2">Add Meal</button>
      </div>
    </div>
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
