import { LogSeverityLevel, LogEntity } from "../entities/log.entity";
import { LogRepository } from "./log.repository";

describe('log.repository.ts LogRepository', () => {
  const newLog = new LogEntity({
    origin: 'log.repository.test.ts',
    level: LogSeverityLevel.low,
    message: 'This is a test log',
  })

  class MockLogRepository implements LogRepository {
    async getLog(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
      return [newLog];
    }
    async saveLog(log: LogEntity): Promise<void> {
      return;
    }
  }

  test('should test the abstract class', async () => {
    const mockLogRepository = new MockLogRepository();
    expect(mockLogRepository).toBeInstanceOf(MockLogRepository);
    expect(mockLogRepository).toHaveProperty('saveLog');
    expect(mockLogRepository).toHaveProperty('getLog');

    await mockLogRepository.saveLog(newLog);
    const logs = await mockLogRepository.getLog(LogSeverityLevel.low);
    expect(logs).toHaveLength(1);
    expect(logs[0]).toBeInstanceOf(LogEntity);
  });
});