 // Complete the js code
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Adding a method to the Car prototype
Car.prototype.getMakeModel = function () {
  return `${this.make} ${this.model}`;
};

// Constructor function for SportsCar, inheriting from Car
function SportsCar(make, model, topSpeed) {
  // Call the Car constructor using SportsCar's context
  super(make, model);
  this.topSpeed = topSpeed;
}

// Inherit the Car prototype in the SportsCar prototype
SportsCar.prototype = Object.create(Car.prototype);

// Set the constructor property back to SportsCar
SportsCar.prototype.constructor = SportsCar;

// Adding a method to the SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;