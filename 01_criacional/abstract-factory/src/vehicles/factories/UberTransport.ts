import ITransportFactory from "./interfaces/ITransportFactory";
import ILandVehicle from "../land/interfaces/ILandVehicle";
import Car from "../land/Motorcycle";
import Airplane from "../aerial/Airplane";
import IAircraft from "../aerial/interfaces/IAircraft";

export default class UberTransport implements ITransportFactory {
  createTransportVehicle(): ILandVehicle {
    return new Car();
  }

  createTransportAircraft(): IAircraft {
    return new Airplane();
  }
}