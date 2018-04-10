export class Pizza {

    diameter:number;
    slices:number;
    toppings:number;
    

    get PizzaPrice():number {
        return this.diameter+(this.toppings*5);
    }
}