import IVehicleMotorcycle from "./IVehicleMotorcycle";

export default class Motorcycle implements IVehicleMotorcycle {

  constructor(
    color: string,
    year: number,
    engine: number,
  ) {
    this.configure(color, year, engine);
  }

  startVehicle(): void {
    console.log("On the engine now motorcycle");
  }

  configure(color: string, year: number, engine: number): void {
    console.log(`Create a motorcycle: ${color}, ${year}, ${engine} cilindradas`);

    this.startVehicle();
  }

}