import { jest } from '@jest/globals';
import { SaveFile, SaveFileOptions } from './save-file.use-case';
import fs from 'fs';

describe('SaveFile', () => {  
  afterEach(() => {
    const fileExist = fs.existsSync('outputs');
    if (!fileExist) return;

    fs.rmSync('outputs', { recursive: true });
  });

  test('should save file with values', () => {
    const saveFile = new SaveFile();
    const filePath = 'outputs/table.txt';

    const options: SaveFileOptions = {
      fileContent: 'test content',
      destination: 'outputs',
      extension: '.txt',
      fileName: 'table'
    };

    const result = saveFile.execute(options);

    expect(result).toBe(true);

    const checkFile = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });

    expect(checkFile).toBeTruthy();
    expect(fileContent).toBe(options.fileContent);
  });

  test('should return false if directory could not be created', () => {
    const options: SaveFileOptions = {
      fileContent: 'test content',
      destination: 'outputs',
      extension: '.txt',
      fileName: 'table'
    };

    const saveFile = new SaveFile();

    const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(
      () => { throw new Error ('This is a custom error message from testing') }
    );

    const result = saveFile.execute(options);

    expect( result ).toBe(false);

    mkdirSpy.mockRestore();
  });
  
  test('should return false if file could not be created', () => {
    const options: SaveFileOptions = {
      fileContent: 'test content',
      destination: 'outputs',
      extension: '.txt',
      fileName: 'table'
    };

    const saveFile = new SaveFile();

    const writeFileSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(
      () => { throw new Error ('This is a custom error message from testing') }
    );

    const result = saveFile.execute(options);

    expect( result ).toBe(false);

    writeFileSpy.mockRestore();
  });

})