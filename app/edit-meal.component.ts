import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
    selector: 'edit-meal-details',
    inputs: ['meal'],
    template: `
    <div>
        <h3>Edit Name and/or type: </h3>
        <div class='row formFix'>
            <input [(ngModel)]="meal.name" class="col-sm-6 input-lg meal-form"/>
        </div>
        <div class='row formFix'>
            <input [(ngModel)]="meal.details" class="col-sm-6 input-lg meal-form"/>
        </div>
        <div class='row formFix'>
            <input [(ngModel)]="meal.calories" type='number' class="col-sm-6 input-lg meal-form"/>
        </div>
    </div>
    `
})
export class EditMealDetailsComponent {
    public meal: Meal;
}
