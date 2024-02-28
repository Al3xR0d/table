class Calc {
  // Пишите код здесь
  constructor(num = 0) {
    this.num = num;
  }

  add(addNum) {
    return new Calc(this.num + addNum);
  }

  sub(subNum) {
    return new Calc(this.num - subNum);
  }

  result() {
    return this.num;
  }
}

// Calc.prototype.add = function(addNum) {

// };

// Calc.prototype.sub = function(subNum) {

// };

const calc = new Calc();
const ten = calc.add(10).add(2).sub(1).result();

console.log(ten);

export { Calc };
// Для запуска теста вводим в терминале команду: npm run test:current -- calc.test.js

function Vehicle(speed) {
  this.speed = speed;
}
Vehicle.prototype.increaseSpeed = function(amount) {
  this.speed += amount;
  console.log(this.speed);
};

function Car(speed) {
  Vehicle.call(this, speed);
  this.wheels = 4;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.beep = function() {
  console.log("Beep-Beep");
};

function Bike(speed) {
  Vehicle.call(this, speed);
  this.wheels = 2;
}

Bike.prototype = Object.create(Vehicle.prototype);
Bike.prototype.constructor = Bike;

Bike.prototype.ring = function() {
  console.log("Ring-ring");
};

function switchPrototype(vehicle) {
  let vehicleSpeed = vehicle.speed;
  // let currentProto = Object.getPrototypeOf(vehicle).constructor;
  if (vehicle instanceof Bike) {
    Object.setPrototypeOf(vehicle, Car.prototype);
  } else if (vehicle instanceof Car) {
    Object.setPrototypeOf(vehicle, Bike.prototype);
  }
  vehicle.speed = vehicleSpeed;
}

let myVehicle = new Car(50);
myVehicle.increaseSpeed(10);
myVehicle.beep();
switchPrototype(myVehicle);
myVehicle.ring();
myVehicle.increaseSpeed(20);
console.log(myVehicle.wheels);
