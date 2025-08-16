import fs from 'fs';
import { jest } from "@jest/globals";
import { ServerApp } from "./server-app";
import { CreateTable } from "../domain/use-cases/create-table.use-case";
import {
  SaveFile,
  SaveFileOptions,
} from "../domain/use-cases/save-file.use-case";

describe("Server App", () => {
  const options = {
    base: 2,
    limit: 10,
    show: false,
    destination: "test-destination",
    name: "test-filename",
    extension: ".txt",
  };

  beforeEach(() => {
    jest.clearAllMocks();

    const testDirectory = fs.existsSync(options.destination);
    if (!testDirectory) return;

    fs.rmSync(options.destination, { recursive: true });
  });

  test("should create ServerApp instance", () => {
    const serverApp = new ServerApp();

    expect(serverApp).toBeInstanceOf(ServerApp);
    expect(typeof ServerApp.run).toBe("function");
  });

  test("should run ServerApp with options", () => {
    const logSpy = jest.spyOn(console, "log");
    const createTableSpy = jest.spyOn(CreateTable.prototype, "execute");
    const saveFileSpy = jest.spyOn(SaveFile.prototype, "execute");
    ServerApp.run(options);
    expect(logSpy).toHaveBeenCalledWith("Server running ...");
    expect(logSpy).toHaveBeenLastCalledWith("File created");
    expect(createTableSpy).toHaveBeenCalledTimes(1);
    expect(createTableSpy).toHaveBeenCalledWith({
      base: options.base,
      limit: options.limit,
    });
    expect(saveFileSpy).toHaveBeenCalledTimes(1);
    expect(saveFileSpy).toHaveBeenCalledWith({
      fileContent: expect.any(String),
      destination: options.destination,
      fileName: options.name,
      extension: options.extension
    });
  });

  test("should run with custom values mocke", () => {
    const logMock = jest.fn();
    const logErrorMock = jest.fn();
    const createMock = jest
      .fn<({ base, limit }: { base: number; limit: number }) => string>()
      .mockReturnValue("1 x 2 = 2");
    const saveFileMock =
      jest.fn<
        ({
          fileContent,
          destination,
          fileName,
          extension,
        }: SaveFileOptions) => boolean
      >().mockReturnValue(true);

    global.console.log = logMock;
    global.console.error = logErrorMock;
    CreateTable.prototype.execute = createMock;
    SaveFile.prototype.execute = saveFileMock;

    ServerApp.run(options);

    expect(logMock).toHaveBeenCalledWith("Server running ...");
    expect(createMock).toHaveBeenCalledWith({
      base: options.base,
      limit: options.limit,
    });
    expect(saveFileMock).toHaveBeenCalledWith({
      fileContent: "1 x 2 = 2",
      destination: options.destination,
      fileName: options.name,
      extension: options.extension
    });
    expect(logMock).toHaveBeenCalledWith('File created');
    expect(logErrorMock).not.toHaveBeenCalled();

  });
});
