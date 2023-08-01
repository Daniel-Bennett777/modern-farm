// scripts/tractor.js
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createSoybean } from "./seeds/soybean.js";
import { createPotato } from "./seeds/potato.js";
import { createWheat } from "./seeds/wheat.js";
import { createSunflower } from "./seeds/sunflower.js";
import { addPlant, usePlants} from "./field.js";

// the individual seed objects are created:
const asparagusSeed = createAsparagus();
const cornSeed = createCorn();
const sunflowerSeed = createSunflower();
const potatoSeed = createPotato();
const soybeanSeed = createSoybean();
const wheatSeed = createWheat();


/*addPlant(asparagusSeed);
addPlant(cornSeed[0]); // Add the first corn seed
addPlant(cornSeed[1]); // Add the second corn seed
addPlant(sunflowerSeed); // Add a sunflower seed
addPlant(potatoSeed);//Added
addPlant(soybeanSeed);//Added
addPlant(wheatSeed);//Added*/
// all plants created in growingPlants array
export const plantSeeds = (yearlyplan) => {
  for (const row of yearlyplan) {
    for (const plant of row) {
      if (plant === "Asparagus") {
        addPlant(asparagusSeed);
      } else if (plant === "Corn") {
        addPlant(cornSeed);
      } else if (plant === "Soybean") {
        addPlant(soybeanSeed);
      } else if (plant === "Potato") {
        addPlant(potatoSeed);
      } else if (plant === "Wheat") {
        addPlant(wheatSeed);
      } else if (plant === "Sunflower") {
        addPlant(sunflowerSeed);
      } else {
        console.log(`Unknown plant type: ${plant}`);
      }
    }
  }
};







      
      
      
      
      
      
      
      /*switch (plant) {
        case "Asparagus":
          addPlant(asparagusSeed);
          break;
        case "Corn":
          addPlant(cornSeed[0]);
          break;
        case "Corn":
          addPlant(cornSeed[1]);
          break;
        case "Soybean":
          addPlant(soybeanSeed);
          break;
        case "Potato":
          addPlant(potatoSeed);
          break;
        case "Wheat":
          addPlant(wheatSeed);
          break;
        case "Sunflower":
          addPlant(sunflowerSeed);
          break;
        default:
          console.log(`Unknown plant type: ${plant}`);
      }
    }
  }
};*/