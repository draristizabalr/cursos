import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { LogRepository } from "../../domain/repository/log.repository";

export class LogRepositoryImpl implements LogRepository {
  constructor(private readonly logDatasource: LogDatasource) {}

  async saveLog(log: LogEntity): Promise<void> {
    try{
      this.logDatasource.saveLog(log);
      console.log('Succes save log');
    } catch (error) {
      console.error(`${error}`);
      throw new Error('Failed save log');
    }
  }
  async getLog(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
    try {
      return this.logDatasource.getLog(severityLevel);
    }catch (error) {
      console.error(`${error}`)
      throw new Error('Failed get logs');
    }
  }
}
