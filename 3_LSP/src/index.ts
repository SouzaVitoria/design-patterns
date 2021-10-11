import CreditCard from "./CreditCard";
import DebitCard from "./DebitCard";

const creditCard = new CreditCard();
const debitCard = new DebitCard();

creditCard.validate();
debitCard.validate();
creditCard.collectPayment();