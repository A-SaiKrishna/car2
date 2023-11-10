import {problem2} from '../problem2.js';
import { inventory } from '../inev.js';
const lastCar = problem2(inventory);
console.log(`Last car is a ${lastCar[0]["car_make"]} ${lastCar[0]["car_model"]}`);