import ILandVehicle from "./interfaces/ILandVehicle";

export default class kickScooters implements ILandVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Iniciando o trajeto...");
  }

  getCargo(): void {
    console.log("Patinete: Pegamos o pacote");
  }
}