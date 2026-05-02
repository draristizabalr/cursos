describe('envs.plugin.ts', () => {
  test('should return env options', () => {
    // load module fresh using CommonJS require so tests run under Jest's environment
    const { envs } = require('./envs.plugin');

    expect(envs).toEqual({
      PORT: 3000,
      PROD: false,
      URL_TEST: 'www.google.com.co',
      MAILER_SERVICE: 'gmail',
      MAILER_EMAIL: 'zuladev@gmail.com',
      MAILER_SECRET_KEY: 'yzjq hzdy slte suec',
      MONGO_URL: 'mongodb://dariarra:123456879@localhost:27017/',
      MONGO_DB_NAME: 'NOC-TEST',
      MONGO_USER: 'dariarra',
      MONGO_PASS: '123456879'
    });
  });

  test('should return error if not found env', () => {
    // ensure module registry is reset so requiring the module re-evaluates env-vars
    jest.resetModules();
    process.env.PORT = 'ABC';

    try {
      // use require to avoid dynamic import which needs experimental vm flag
      require('./envs.plugin');
      // if require didn't throw, fail the test
      expect(true).toBe(false);
    } catch (error) {
      expect(`${error}`).toContain('"PORT" should be a valid integer');
    }
  });
});