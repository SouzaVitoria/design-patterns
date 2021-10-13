import FacebookLive from "./platforms/FacebookLive";
import IPlataform from "./platforms/IPlataform";
import Twitch from "./platforms/Twitch";
import YouTube from "./platforms/YouTube";
import AdvancedLive from "./transmissions/AdvancedLive";
import Live from "./transmissions/Live";

function startLive(platform: IPlataform) {
  console.log("Aguarde...")
  const live = new Live(platform)

  live.broadcasting();
  live.result();
}

// startLive(new YouTube());
// startLive(new Twitch());

function startAdvancedLive(platform: IPlataform) {
  console.log("Aguarde...")
  const live = new AdvancedLive(platform)

  live.broadcasting();
  live.result();
  live.subtitles();
  live.comments();
}

startAdvancedLive(new FacebookLive());