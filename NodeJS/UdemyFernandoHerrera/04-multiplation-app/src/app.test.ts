import { jest } from '@jest/globals';
import { ServerApp } from './presentation/server-app.ts';

describe('Test app.ts',() => {
  test('should call Server.run with values', async () => {
    const serverRunMock = jest.fn();
    ServerApp.run = serverRunMock;
    process.argv = ['node', 'app.ts', '-b', '10', '-l', '5', '-s', '-n', 'test-file', '-d', 'test-destination'];

    await import('./app.ts');

    expect(serverRunMock).toHaveBeenCalledWith({
      base: 10, 
      limit: 5,
      show: true,
      name: 'test-file',
      destination: 'test-destination',
      extension: '.txt'
    })

  });
})