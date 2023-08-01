const growingPlants = [];
export const addPlant = (seed) => {//seed is a parameter
  //If seed is an array (e.g., in the case of corn seeds), the function will loop through each element of the array using the forEach method and add each element separately to the growingPlants array.
    if (Array.isArray(seed)) {
        // For corn seeds, spread the array and add each object separately
        seed.forEach((cornSeed) => growingPlants.push(cornSeed));
      } else {
    growingPlants.push(seed);
}

};
export const usePlants = () => {
    return growingPlants; // Return a copy of the array to prevent direct manipulation
  };

  