// const numbers = [1, 2, 3, 4, 5, 6];
// const person = {firstname: "Linnea"};
// function printMessage () {
//     console.log("Hello world");
// };

//THIS IS THE IS A WAY TO GET A PROTOTYPE:

// console.log(Object.getPrototypeOf(person));
// console.log(Object.getPrototypeOf(numbers));
// // console.dir(printMessage);

const firstVehicle = {
  type: "car",
  brand: "Toyota",
  active: true,
  move() {
    if (this.active){
      return this.type + " is moving";
    }
  },
};

const secondVehicle = {
  type:"Bike",
  brand: "Scott",
};
//THIS IS AN OLD PROTOTYPE WAY TO CONNECT OBJECTS:
// secondVehicle.__proto__ = firstVehicle;
Object.setPrototypeOf(secondVehicle, firstVehicle);
console.log(firstVehicle.move());
console.log(secondVehicle.move());






