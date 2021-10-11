import IVehicle from "./interfaces/IVehicle";

export default class Bike implements IVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Iniciando o trajeto")
  }

  getCargo(): void {
    console.log("Bike: pegamos as encomendas")
  }

}