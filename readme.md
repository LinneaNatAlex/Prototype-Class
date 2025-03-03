# JavaScript Prototypes & Object Methods

##  Basic Variables and Function
```js
const firstname = "Linnea";
const age = 30;

function printMessage() {
    console.log("hello world");
}


**OBJECT CONSTRUCTOR PROTOTYPE:**

 
***THIS IS THE IS A WAY TO GET A PROTOTYPE :***
```js
console.log(Object.getPrototypeOf(firstname));
console.log(Object.getPrototypeOf(age));
console.dir(printMessage);
```

**OTHER METHODES**

```JS
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
  type: "Bike",
  brand: "Scott",
};

```

***THIS IS AN OLD PROTOTYPE WAY TO CONNECT OBJECTS(DO NOT USE):***
```js
secondVehicle.__proto__ = firstVehicle;
console.log(secondVehicle.hasOwnProperty("active"));  // false
```
//__proto__ is considered outdated and bad practice.//

***THIS IS A NEW WAY TO CONNECT OBJECTS(USE THIS!!!):***
```js
Object.setPrototypeOf(secondVehicle, firstVehicle);

console.log(firstVehicle.isPrototypeOf(secondVehicle)); // true

// Example of inherited properties:
for (let key in secondVehicle) {
  if (secondVehicle.hasOwnProperty(key)) console.log(key);
}

```
# hasOwnProperty() checks if a property is directly on the object, not inherited.
# Object.getPrototypeOf(obj) returns the prototype of an object.
# Object.setPrototypeOf(obj, prototype) sets the prototype of an object.