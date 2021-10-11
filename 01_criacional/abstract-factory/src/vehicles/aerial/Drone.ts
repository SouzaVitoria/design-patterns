import IAircraft from "./interfaces/IAircraft";

export default class Drone implements IAircraft {
  startRoute(): void {
    this.checkWind();
    this.getCargo();
    console.log("Drone: Iniciando a decolagem...");
  }

  getCargo(): void {
    console.log("Pegamos o pacote. Ligando o drone...");
  }

  checkWind(): void {
    console.log("Ventos a 25km");
  }
}