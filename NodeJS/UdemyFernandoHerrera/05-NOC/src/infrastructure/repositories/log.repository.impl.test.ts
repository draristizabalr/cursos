import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { LogRepositoryImpl } from "./log.repository.impl";

describe('LogRepositoryImpl' , () => {

  const mockLogDatasource = {
    saveLog: jest.fn(),
    getLog: jest.fn()
  };

  const logRepositoryImpl = new LogRepositoryImpl(mockLogDatasource);

  test('saveLog should call the datasource with arguments', async () => {
    const log = { level: LogSeverityLevel.low, message: 'hola'} as LogEntity;

    await logRepositoryImpl.saveLog(log);

    expect(mockLogDatasource.saveLog).toHaveBeenCalledWith(log);
  });

  test('getLog should call the datasource with arguments', async () => {
    await logRepositoryImpl.getLog(LogSeverityLevel.low);

    expect(mockLogDatasource.getLog).toHaveBeenCalledWith(LogSeverityLevel.low);
  });
})