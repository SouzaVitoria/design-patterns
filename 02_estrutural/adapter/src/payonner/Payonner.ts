import Token from "../utils/Token";
import IPayonnerPayment from "./IPayOnnerPayment";

export default class Payonner implements IPayonnerPayment {
  token: Token

  authToken(): Token {
    return new Token()
  }

  sendPayment(): void {
    this.token = this.authToken()
    console.log(`Token with GET: ${this.token.getToken()}`)
    console.log("Enviando pagamentos via Payonner")
  }

  receivePayment(): void {
    console.log("Recebendo pagamentos via Payonner")
  }

}