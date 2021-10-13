import IAircraft from "../aerial/interfaces/IAircraft";
import ILandVehicle from "../land/interfaces/ILandVehicle";
import ITransportFactory from "./interfaces/ITransportFactory";
import KickScooters from "../land/KickScooters"
import Drone from "../aerial/Drone"

export default class LimeTransport implements ITransportFactory {
  createTransportVehicle(): ILandVehicle {
    return new KickScooters();
  }

  createTransportAircraft(): IAircraft {
    return new Drone();
  }
}