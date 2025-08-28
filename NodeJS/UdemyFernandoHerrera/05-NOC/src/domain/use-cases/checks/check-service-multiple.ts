import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";

interface CheckServiceUseCase {
  execute(url: string): Promise<boolean>;
}

type SuccessCallback = () => void;
type ErrorCallback = (error: string) => void;

export class CheckServiceMultiple implements CheckServiceUseCase {
  constructor(
    private readonly logRepository: LogRepository[],
    private readonly successCallback?: SuccessCallback,
    private readonly errorCallback?: ErrorCallback,
  ) {}

  private callLogs(log: LogEntity) {
    this.logRepository.forEach((logRepo) => {
      logRepo.saveLog(log);
    })
  }

  async execute(url: string): Promise<boolean> {
    try {
      const req = await fetch(url);
      if (!req.ok) {
        throw new Error(`Error on check service ${url}`);
      }
      const log = new LogEntity({
        message: `Service ${url} working`,
        level: LogSeverityLevel.low,
        origin: "check-service.ts",
      });

      this.callLogs(log);
      this.successCallback && this.successCallback();
      console.log(`${url} is ok`);

      return true;
    } catch (error) {
      const errorString = `Server ${url} is not ok. ${error}`;
      const log = new LogEntity({
        message: errorString,
        level: LogSeverityLevel.high,
        origin: "check-service.ts",
      });

      this.callLogs(log);
      this.errorCallback && this.errorCallback(errorString);
      return false;
    }
  }
}
