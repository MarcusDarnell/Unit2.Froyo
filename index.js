let froyoOrder = prompt('Please enter your order below seperated by commas!','vanilla,vanilla,vanilla,strawberry,coffee,coffee');

let onlineOrder = froyoOrder.split(",");

console.log(onlineOrder);

function froyo (flavorsOrder) {
    const Howmanyflavors = {};
    for (let i=0; i < flavorsOrder.length; i++) {
    let currentFlavors = flavorsOrder[i];

        if (Howmanyflavors [currentFlavors] === undefined) {

            Howmanyflavors[currentFlavors] = 1;
       }
       else {Howmanyflavors[currentFlavors] += 1}
   } return Howmanyflavors
}
console.table(froyo(onlineOrder))

