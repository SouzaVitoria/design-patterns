import IPlataform from "../platforms/IPlataform";
import Live from "./Live";

export default class AdvancedLive extends Live {

  constructor(platform: IPlataform) {
    super(platform)
  }

  subtitles(): void {
    console.log("Legendas ativadas")
  }

  comments(): void {
    console.log("Comentários Liberados na live")
  }
}