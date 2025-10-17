import { LogEntity, LogSeverityLevel } from "./log.entity";

describe("LogEntity test", () => {
  test("should create a LogEntity instance", async () => {
    const dataObj = {
      origin: "log.entity.test.ts",
      level: LogSeverityLevel.low,
      message: "Hola mundo",
    };

    const log = new LogEntity(dataObj);
    expect(log).toBeInstanceOf(LogEntity);
    expect(log.message).toBe(dataObj.message);
    expect(log.level).toBe(dataObj.level);
    expect(log.origin).toBe(dataObj.origin);
    expect(log.createdAt).toBeInstanceOf(Date);
  });

  test("should throw error if level is empty", async () => {
    const dataObj = {
      origin: "log.entity.test.ts",
      level: "",
      message: "Hola mundo",
    };

    const json = JSON.stringify(dataObj);

    expect(() => LogEntity.fromJson(json)).toThrow();
  });

  test("should throw error if message is empty", async () => {
    const dataObj = {
      origin: "log.entity.test.ts",
      level: LogSeverityLevel.low,
      message: "",
    };

    const json = JSON.stringify(dataObj);

    expect(() => LogEntity.fromJson(json)).toThrow();
  });

  test("should create a LogEntity instance form json", async () => {
    const json = `{"level":"low","message":"Service https://www.google.com.co working","createdAt":"2025-08-31T17:26:46.566Z","origin":"check-service.ts"}`;

    const log = LogEntity.fromJson(json);
    expect(log).toBeInstanceOf(LogEntity);
    expect(log.message).toBe("Service https://www.google.com.co working");
    expect(log.level).toBe(LogSeverityLevel.low);
    expect(log.origin).toBe("check-service.ts");
    expect(log.createdAt).toBeInstanceOf(Date);
  });

  test("should create a LogEntity instance form object", async () => {
    const dataObj = {
      origin: "log.entity.test.ts",
      level: LogSeverityLevel.low,
      message: "Hola mundo",
    };

    const log = LogEntity.fromObject(dataObj);
    expect(log).toBeInstanceOf(LogEntity);
    expect(log.message).toBe(dataObj.message);
    expect(log.level).toBe(dataObj.level);
    expect(log.origin).toBe(dataObj.origin);
    expect(log.createdAt).toBeInstanceOf(Date);
  });
});
