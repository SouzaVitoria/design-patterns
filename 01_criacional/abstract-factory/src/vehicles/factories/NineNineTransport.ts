import ITransportFactory from "./interfaces/ITransportFactory";
import ILandVehicle from "../land/interfaces/ILandVehicle";
import Motorcycle from "../land/Motorcycle";
import Helicopter from "../aerial/Helicopter";
import IAircraft from "../aerial/interfaces/IAircraft";

export default class NineNineTransport implements ITransportFactory {
  createTransportVehicle(): ILandVehicle {
    return new Motorcycle();
  }

  createTransportAircraft(): IAircraft {
    return new Helicopter();
  }

}