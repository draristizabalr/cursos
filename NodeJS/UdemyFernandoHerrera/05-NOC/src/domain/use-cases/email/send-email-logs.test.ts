import { EmailServer } from "../../../presentation/email/email.service";
import { LogEntity } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";
import { SendEmailLogs } from "./send-email-logs";

describe('send-email-logs test', () => {
  
  const mockEmailService = {
    sendEmailWithFileSystemLogs: jest.fn().mockReturnValue(true)
  }

  const mockLogRepository: LogRepository = {
    saveLog: jest.fn(),
    getLog: jest.fn()
  };

  const sendEmailLogs = new SendEmailLogs(
    mockEmailService as any as EmailServer,
    mockLogRepository
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should call SendEmail', async () => {
    const result = await sendEmailLogs.execute('dariarra@gmail.com');

    expect( result ).toBe(true);
    expect( mockEmailService.sendEmailWithFileSystemLogs ).toHaveBeenCalledTimes(1);
    expect( mockLogRepository.saveLog ).not.toHaveBeenCalledWith( expect.any(LogEntity));

  });

  test('should not call SendEmail', async () => {
    mockEmailService.sendEmailWithFileSystemLogs.mockReturnValue(false);

    const result = await sendEmailLogs.execute('dariarra@gmail.com');

    expect( result ).toBe(false);
    expect( mockEmailService.sendEmailWithFileSystemLogs ).toHaveBeenCalledTimes(1);
    expect( mockLogRepository.saveLog ).toHaveBeenCalledWith( expect.any(LogEntity));
    expect( mockLogRepository.saveLog ).toHaveBeenCalledWith({
      createdAt: expect.any(Date),
      level: "high",
      message: "Error: Email log not sent",
      origin: "send-email-logs.ts",
    });
    
  });

  
})