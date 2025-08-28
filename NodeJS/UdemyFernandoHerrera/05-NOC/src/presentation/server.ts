import { LogSeverityLevel } from "../domain/entities/log.entity";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { CheckServiceMultiple } from "../domain/use-cases/checks/check-service-multiple";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
// import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { MongoLogDatasource } from "../infrastructure/datasources/mongo-log.datasource";
import { PostgresLog } from "../infrastructure/datasources/postgres-log.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron.service";
import { EmailServer } from "./email/email.service";

const fsLogRepository = new LogRepositoryImpl(
  new FileSystemDatasource()
);
const mongoLogRepository = new LogRepositoryImpl(
  new MongoLogDatasource()
);
const postgresLogRepository = new LogRepositoryImpl(
  new PostgresLog()
);
const emailService = new EmailServer();

export class Server {
  public static async start() {
    console.log("Server started...");

    //todo: no enviar correos a lo loco

    // new SendEmailLogs(emailService, logRepository).execute([
    //   "dariarra@gmail.com",
    // ]);

    // const logs = await logRepository.getLog(LogSeverityLevel.high);
    // console.log(logs)

    CronService.createJob("*/5 * * * * *", () => {
      const url = 'https://www.google.com';
      // new CheckService().execute('http://localhost:3000');
      const date = new Date();
      new CheckServiceMultiple(
        [fsLogRepository, mongoLogRepository, postgresLogRepository],
        () => console.log(date),
        (error) => console.log(error)
      ).execute(url);
    });
  }
}
