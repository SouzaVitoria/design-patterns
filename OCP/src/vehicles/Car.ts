import IVehicleCar from "./IVehicleCar";

export default class Car implements IVehicleCar {

  constructor(
    color: string,
    year: number,
    engine: number,
    seats: number,
    doors: number
  ) {
    this.configure(color, year, engine, seats, doors);
  }

  startVehicle(): void {
    console.log("On the engine now car");
  }

  configure(color: string, year: number, engine: number, seats: number, doors: number) {
    console.log(`Create a car: ${color}, ${year}, ${engine} potência, ${doors} portas com ${seats} assentos`);

    this.startVehicle();
  }

}