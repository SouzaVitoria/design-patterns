import BikeTransport from "./transports/BikeTransport";
import CarTransport from "./transports/CarTransport";
import MotorcycleTransport from "./transports/MotorcycleTransport";
import Transport from "./transports/Transport";

declare var process;

let transport: Transport;

if (process.argv.includes("--uber")) {
  transport = new CarTransport();
} else if (process.argv.includes("--log")) {
  transport = new MotorcycleTransport();
} else if (process.argv.includes("--eats")) {
  transport = new BikeTransport();
} else {
  console.error("Selecione o tipo de entrega")
}

if (transport) {
  transport.startTransport();
}