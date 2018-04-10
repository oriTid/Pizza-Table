import { Component, OnInit } from '@angular/core';
import {PizzaInfo} from "../Shared/Models/PIzza_Info";
import {Pizza} from "../Shared/Models/Pizza_Class";


@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent {

pizzaInf:PizzaInfo=new PizzaInfo();
pizzaList:Pizza[]=this.pizzaInf.getPizzas();

}
