import IPlataform from "./IPlataform";

export default class YouTube implements IPlataform {

  constructor() {
    this.configureRMTP();
    console.log("YouTube: Transmissão foi iniciada")
  }

  configureRMTP(): void {
    this.authToken();
    console.log("YouTube: Configurando o broadcasting");
  }

  authToken(): void {
    console.log("Youtube: Autorizando");
  }
}