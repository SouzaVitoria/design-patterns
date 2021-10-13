import IPlataform from "./IPlataform";

export default class Twitch implements IPlataform {

  constructor() {
    this.configureRMTP();
    console.log("Twitch: Transmissão foi iniciada")
  }

  configureRMTP(): void {
    this.authToken();
    console.log("Twitch: Configurando o broadcasting");
  }

  authToken(): void {
    console.log("Twitch: Autorizando");
  }
}