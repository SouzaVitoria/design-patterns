import IPaymentInstrument from "./IPaymentInstrument";

export default class NubankRewards implements IPaymentInstrument {
  validate(): void {
    console.log("Check the score on rewards");
  }

  collectPayment(): void {
    console.log("Pay with the score");
  }
}