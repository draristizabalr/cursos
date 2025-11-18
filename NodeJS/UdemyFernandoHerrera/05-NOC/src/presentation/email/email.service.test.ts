import nodemailer from "nodemailer";

import { EmailServer, SendMailOptions } from "./email.service";

describe("EmailService", () => {
  const mockSendMail = jest.fn();

  nodemailer.createTransport = jest.fn().mockReturnValue({
    sendMail: mockSendMail,
  });
  const emailService = new EmailServer();

  test("should send email", async () => {
    const options: SendMailOptions = {
      to: "dariarra@google.com",
      subject: "Test",
      htmlBody: "<h1>Test<h1>",
    };

    await emailService.sendEmail(options);

    expect(mockSendMail).toHaveBeenCalledWith({
      attachments: expect.any(Array),
      html: "<h1>Test<h1>",
      subject: "Test",
      to: "dariarra@google.com",
    });
  });

  test("should send email with attachements", async () => {
    const email = "david@google.com";

    await emailService.sendEmailWithFileSystemLogs(email);

    expect(mockSendMail).toHaveBeenCalledWith({
      to: email,
      subject: "Logs del servidor",
      html: expect.any(String),
      attachments: [
        { filename: "logs-all.log", path: "./logs/logs-all.log" },
        { filename: "logs-medium.log", path: "./logs/logs-medium.log" },
        { filename: "logs-high.log", path: "./logs/logs-high.log" },
      ],
    });
  });
});
