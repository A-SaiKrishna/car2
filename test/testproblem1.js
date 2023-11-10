import { problem1 } from "../problem1.js";
import { inventory } from "../inev.js";
let car33=problem1(inventory,33);
if(car33[0]!== undefined)
console.log("Car 33 is a "+car33[0]["car_year"]+" "+car33[0]["car_make"]+" "+car33[0]["car_model"]);