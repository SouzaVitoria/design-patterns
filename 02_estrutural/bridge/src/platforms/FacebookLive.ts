import IPlataform from "./IPlataform";

export default class FacebookLive implements IPlataform {

  constructor() {
    this.configureRMTP();
    console.log("Facebook Live: Transmissão foi iniciada")
  }

  configureRMTP(): void {
    this.authToken();
    console.log("Facebook Live: Configurando o broadcasting");
  }

  authToken(): void {
    console.log("Facebook Live: Autorizando");
  }
}