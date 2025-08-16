import { jest } from '@jest/globals';

const runCommand = async (args: string[]) => {
  process.argv = [...process.argv, ...args];

  const { yarg } = await import("./args.plugin");

  return yarg;
};


describe("Test args.plugins.ts", () => {
  const originalArgv = process.argv;
  beforeEach(() => {
    process.argv = originalArgv;
    jest.resetModules();
  })

  test("should return default values", async () => {
    const argv = await runCommand(["-b", "5"]);

    expect(argv).toEqual(
      expect.objectContaining({
        b: 5,
        l: 10,
        s: false,
        n: "table",
        d: "outputs",
        e: ".txt",
      })
    );
  });
  
  test("should return configuration custom values", async () => {
    const argv = await runCommand(["-b", "8", "-l", "20", "-s", "-n" ,"otro", "-d", "entrega", "-e", ".csv"]);
    
    expect(argv).toEqual(
      expect.objectContaining({
        b: 8,
        l: 20,
        s: true,
        n: "otro",
        d: "entrega",
        e: ".csv",
      })
    );
    
  });
});
