import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogSeverityLevel, LogEntity } from "../../domain/entities/log.entity";
import { PrismaClient, SeverityLevel } from "../../generated/prisma";

const prismaClient = new PrismaClient();

const SeverityLevelEnum: Record<LogSeverityLevel, SeverityLevel> = {
  low: SeverityLevel.LOW,
  medium: SeverityLevel.MEDIUM,
  high: SeverityLevel.HIGH
}

export class PostgresLog implements LogDatasource {
  async saveLog(log: LogEntity): Promise<void> {
    const level = SeverityLevelEnum[log.level]

    await prismaClient.logMode.create({
      data: {
        ...log,
        level
      },
    });
  }

  async getLog(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
    const level = SeverityLevelEnum[severityLevel]

    const logs = await prismaClient.logMode.findMany({ where: { level } });
    
    return logs.map(LogEntity.fromObject);

  }
}
