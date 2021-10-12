import IPlataform from "../platforms/IPlataform";
import ITransmission from "./ITransmission";

export default class Live implements ITransmission {

  constructor(private platform: IPlataform) { }

  broadcasting(): void {
    console.log("Iniciando a transmissão");
  }

  result(): void {
    console.log("***** ON AIR *****");
  }
}