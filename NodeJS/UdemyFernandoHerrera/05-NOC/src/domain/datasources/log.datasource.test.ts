import { LogEntity, LogSeverityLevel } from "../entities/log.entity";
import { LogDatasource } from "./log.datasource";

describe('log.datasource.ts LogDatasource', () => {

  const newLog = new LogEntity({
    origin: 'log.datasource.test.ts',
    level: LogSeverityLevel.low,
    message: 'This is a test log',
  });

  class MockLogDatasource implements LogDatasource {
    async saveLog(log: LogEntity): Promise<void> {
      return;
    }
    async getLog(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
      return [newLog];
    }
  }

  test('should test the abstract class', async () => {
    const mockLogDatasource = new MockLogDatasource();
    expect(mockLogDatasource).toBeInstanceOf(MockLogDatasource);
    expect(mockLogDatasource).toHaveProperty('saveLog');
    expect(mockLogDatasource).toHaveProperty('getLog');
    
    await mockLogDatasource.saveLog(newLog);

    const logs = await mockLogDatasource.getLog( LogSeverityLevel.low);
    expect(logs).toHaveLength(1);
    expect(logs[0]).toBeInstanceOf(LogEntity);
  });
});