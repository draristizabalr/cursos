import fs from "fs";

export interface SaveFileUseCase {
  execute: (options: SaveFileOptions) => boolean;
}

export interface SaveFileOptions {
  fileContent: string;
  destination: string;
  fileName: string;
  extension: string;
}

export class SaveFile implements SaveFileUseCase {
  constructor() /** repository: StorageRepository */
  {}

  execute({ fileContent, destination, fileName, extension }: SaveFileOptions) {
    try {
      fs.mkdirSync(destination, { recursive: true });

      console.log(`${destination}/${fileName}.txt`);

      fs.writeFileSync(`${destination}/${fileName}${extension}`, fileContent);
      console.log("File created");

      return true;
    } catch (error) {
      console.log(error);

      return false;
    }
  }
}
