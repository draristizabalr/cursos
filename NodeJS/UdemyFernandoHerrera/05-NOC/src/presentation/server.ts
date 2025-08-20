import { CheckService } from "../domain/use-cases/checks/check-service";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron.service";
import { EmailServer } from "./email/email.service";

const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDatasource(),
);
const emailService = new EmailServer();

export class Server {
  public static start() {
    console.log("Server started...");

    //todo: no enviar correos a lo loco

    new SendEmailLogs(emailService, fileSystemLogRepository).execute([
      "dariarra@gmail.com",
    ]);

    // CronService.createJob("*/5 * * * * *", () => {
    //   const url = 'https://www.google.com';
    //   // new CheckService().execute('http://localhost:3000');
    //   const date = new Date();
    //   new CheckService(
    //     fileSystemLogRepository,
    //     () => console.log(date),
    //     (error) => console.log(error)
    //   ).execute(url);
    // });
  }
}
