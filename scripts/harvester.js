import { usePlants } from './field.js';

export const harvestPlants = () => { //why does it not matter what i put here?
    const growingPlants = usePlants();
    const harvestedPlants = [];
//pushing into harvestedplants using push methods and targeting these objects and arrays
    for (const plant of growingPlants) {
        if (plant.type === "Corn" ) {
            
            for (let i = 0 ; i <= plant.output - 4; i++){
                harvestedPlants.push(plant);
            }
            
        } else {
            for (let i = 0 ; i <plant.output; i++){
                harvestedPlants.push({ ...plant });
            }
        }
    }
    return harvestedPlants;
}

