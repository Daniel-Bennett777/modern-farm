import { harvestPlants } from './harvester.js';

export const catalogFun = () => {
    const harvestedPlants = harvestPlants()
    const mainElement = document.querySelector('main');

  for (let i = 0; i < harvestedPlants.length; i++) {
    const foodItem = document.createElement('section');//this line creates a new <section> element and assigns it to the variable foodItem
    foodItem.classList.add('plant');// This line adds the CSS class 'plant' to the newly created <section> element.
    foodItem.textContent = harvestedPlants[i].type; // using the exact type "" 
    mainElement.appendChild(foodItem);//This line appends the foodItem (the newly created <section> element) as a child of the mainElement. This means that each plant item will be added as a new section inside the <main> element in the HTML document.
  }
}
