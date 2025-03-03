
**OBJECT CONSTRUCTOR PROTOTYPE:**

 
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

//THIS IS A NEW WAY TO CONNECT OBJECTS(USE THIS!!!):
Object.setPrototypeOf(secondVehicle, firstVehicle);

console.log(firstVehicle.move());
console.log(secondVehicle.move());