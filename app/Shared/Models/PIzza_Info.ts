import {rand} from "../../../assets/Helper_Funcs";
import {Pizza} from "../Models/Pizza_Class";


export class PizzaInfo {

    getPizzas():Pizza[]{
        let PizzasArray:Array<Pizza>=new Array<Pizza>();
        for (let indx:number=0; indx<100; indx++){

            PizzasArray[indx]=new Pizza();
            PizzasArray[indx].diameter=rand(10,50);
            PizzasArray[indx].slices=rand(3,8);
            PizzasArray[indx].toppings=rand(0,4);
        }

return PizzasArray;
    }
   
}