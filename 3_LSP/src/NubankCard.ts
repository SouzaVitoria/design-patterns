import IPaymentInstrument from "./IPaymentInstrument";

export default abstract class NubankCard implements IPaymentInstrument {
  validate(): void {
    console.log("Basic validation");
  }

  collectPayment(): void {
    console.log("Success Payment");
  }
}