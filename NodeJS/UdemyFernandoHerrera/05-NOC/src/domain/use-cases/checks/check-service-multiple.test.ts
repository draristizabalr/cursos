import { LogEntity } from "../../entities/log.entity";
import { CheckServiceMultiple } from "./check-service-multiple";

describe("CheckService UseCase", () => {
  const mockRepository = [
    {
      saveLog: jest.fn(),
      getLog: jest.fn(),
    },
    {
      saveLog: jest.fn(),
      getLog: jest.fn(),
    },
  ];

  const successCallback = jest.fn();
  const errorCallback = jest.fn();

  const checkServiceMultiple = new CheckServiceMultiple(
    mockRepository,
    successCallback,
    errorCallback,
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should have an array of repositories', async () => {
    expect(mockRepository).toBeInstanceOf(Array);
    expect(mockRepository.length).toBe(2);
  });

  test("should call successCallback when fetch returns true", async () => {
    const wasOk = await checkServiceMultiple.execute("https://www.google.com");

    expect(wasOk).toBe(true);
    expect(successCallback).toHaveBeenCalled();
    expect(errorCallback).not.toHaveBeenCalled();

    for (let i = 0; i < mockRepository.length; i++) {
      expect(mockRepository[i]!.saveLog).toHaveBeenCalledWith(expect.any(LogEntity));
    }
  });

  test("should call errorCallback when fetch returns false", async () => {
    const wasNotOk = await checkServiceMultiple.execute(
      "https://www.goasdfasdfogle.com",
    );

    expect(wasNotOk).toBe(false);
    expect(errorCallback).toHaveBeenCalled();
    expect(successCallback).not.toHaveBeenCalled();

    for (let i = 0; i < mockRepository.length; i++) {
      expect(mockRepository[i]!.saveLog).toHaveBeenCalledWith(expect.any(LogEntity));
    }
  });
});
