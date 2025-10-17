export enum LogSeverityLevel {
  low = "low",
  medium = "medium",
  high = "high",
}

export interface LogEntityOptions {
  level: LogSeverityLevel; // Enum;
  message: string;
  origin: string;
  createdAt?: Date;
}

export class LogEntity {
  public level: LogSeverityLevel; // Enum;
  public message: string;
  public createdAt: Date;
  public origin: string;

  constructor(options: LogEntityOptions) {
    const { level, message, origin, createdAt = new Date() } = options;

    this.level = level;
    this.message = message;
    this.createdAt = new Date();
    this.origin = origin;
  }

  static fromJson(json: string): LogEntity {
    const { message, level, createdAt, origin } = JSON.parse(json);

    if (!message) throw new Error("Message is required");
    if (!level) throw new Error("Level is required");

    const log = new LogEntity({ message, level, createdAt, origin });
    log.createdAt = new Date();

    return log;
  }

  static fromObject(object: { [key: string]: any }): LogEntity {
    const { message, level, createdAt, origin } = object
    const log = new LogEntity({
      message,
      level,
      createdAt: new Date(createdAt),
      origin
    })
    
    return log;
  }
}
