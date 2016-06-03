export class Meal {
    public healthy: boolean = false;
    constructor(public name: string, public details: string, public calories: number, public id: number) {
        if (calories <= 500) {
            this.healthy = true;
        } else {
            this.healthy = false;
        }
    }
}
