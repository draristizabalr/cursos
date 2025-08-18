import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";

export class Server {
  public static start() {
    console.log("Server started...");

    CronService.createJob("*/5 * * * * *", () => {
      // new CheckService().execute('http://localhost:3000');
      const date = new Date();
      new CheckService(
        () => console.log(date),
        (error) => console.log(error)
      ).execute("https://google.com");
    });
  }
}
