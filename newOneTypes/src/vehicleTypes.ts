export interface Vehicle {
  numberOfTyres: number;
  engineType?: string;
  battery: string;
  move: (speed: number) => void;
}

class Car implements Vehicle {
  numberOfTyres = 4;
  engineType = "Car Engine";
  battery = "Car battery";
  move(speed: number): void {
    console.log("This car moves at " + speed + " km/h");
  }
}
const car = new Car();
car.move(20); // This car moves at 20 km/h
