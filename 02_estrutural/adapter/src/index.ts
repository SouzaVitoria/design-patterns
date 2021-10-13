import MercadoPagoAdapter from "./adapters/MercadoPagoAdapter"
import PayonnerAdapter from "./adapters/PayonnerAdapter"
import MercadoPago from "./mercado-pago/MercadoPago"
import IPayonnerPayment from "./payonner/IPayOnnerPayment"
import Payonner from "./payonner/Payonner"
import IPayPalPayment from "./paypal/IPayPalPayment"
import PayPal from "./paypal/Paypal"

// const payment: IPayPalPayment = new PayPal()
// const payment: IPayPalPayment = new PayonnerAdapter(new Payonner)
const payment: IPayPalPayment = new MercadoPagoAdapter(new MercadoPago)

payment.paypalPayment()
payment.paypalReceive()
// payment.sendPayment()
// payment.receivePayment()