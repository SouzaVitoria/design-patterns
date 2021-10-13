import Client from "./Client";

export default class Notify {
  constructor(private client: Client) { }

  sendEmail(): boolean {
    this.client.email;

    console.log("send email...");

    return true
  }
}