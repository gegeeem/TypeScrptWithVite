"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car() {
        this.numberOfTyres = 4;
        this.engineType = "Car Engine";
        this.battery = "Car battery";
    }
    Car.prototype.move = function (speed) {
        console.log("This car moves at " + speed + " km/h");
    };
    return Car;
}());
var car = new Car();
car.move(20); // This car moves at 20 km/h
