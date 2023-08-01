import { createPlan } from './plan.js';
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js";
import { catalogFun } from './catalog.js';


let yearlyPlan = createPlan()
console.log("Welcome to the main module")
console.log(yearlyPlan) //function value which is equal to createPlan() the array plan[] has 3 sub arrays (row[])
//6 strings per array.

plantSeeds(yearlyPlan);// plant seeds using yearlyPlan(this is 3 arrays with 6 strings each)
//callback function below
harvestPlants();// usePlants() function argument brings the return value growingplants[] which are objects (type, height,output)
console.log(harvestPlants())//usePLants provides the list of growing plants to be harvested. an array of objects
catalogFun()

//test
