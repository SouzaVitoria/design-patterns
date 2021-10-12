import Token from "../utils/Token";
import IMercadoPago from "./IMercadoPagoPayment";

export default class MercadoPago implements IMercadoPago {
  token: Token

  authToken(): Token {
    return new Token()
  }

  enviarPayment(): void {
    this.token = this.authToken()
    console.log(`Token with GET: ${this.token.getToken()}`)
    console.log("Enviando pagamentos via Mercado Pago")
  }

  receberPayment(): void {
    console.log("Recebendo pagamentos via Mercado Pago")
  }

}