import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
    selector: 'edit-meal-details',
    inputs: ['meal'],
    template: `
    <form class='form-group col-sm-6 editMealForm'>
        <h3>Edit Name and/or type: </h3>
        <input [(ngModel)]="meal.name" class="input-lg form-control formFix"/>
        <input [(ngModel)]="meal.details" class="input-lg form-control formFix"/>
        <input [(ngModel)]="meal.calories" type='number' class="input-lg form-control formFix"/>
    </form>
    `
})
export class EditMealDetailsComponent {
    public meal: Meal;
}
