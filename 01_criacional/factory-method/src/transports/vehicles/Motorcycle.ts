import IVehicle from "./interfaces/IVehicle";

export default class Motorcycle implements IVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Iniciando o trajeto");
  }

  getCargo(): void {
    console.log("Pegamos a encomenda");
  }

}