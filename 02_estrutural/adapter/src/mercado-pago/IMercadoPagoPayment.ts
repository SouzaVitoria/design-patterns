import Token from "../utils/Token";

export default interface IMercadoPago {
  authToken(): Token;
  enviarPayment(): void;
  receberPayment(): void;
}