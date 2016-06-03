import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
    name: "healthy",
    pure: false
})

export class CaloriePipe implements PipeTransform {
    transform(input: Meal[], args) {
        var desiredCalorieState = args[0];
        if(desiredCalorieState === "healthy") {
            return input.filter(function(meal) {
                return meal.healthy;
            });
        } else if (desiredCalorieState === "unHealthy") {
            return input.filter(function(meal) {
                return !meal.healthy;
            });
        } else {
            return input;
        }
    }
}
