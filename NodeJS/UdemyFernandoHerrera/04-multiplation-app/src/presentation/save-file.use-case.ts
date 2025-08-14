import fs from "fs";

export interface SaveFileUseCase {
  execute: (options: SaveFileOptions) => boolean;
}

export interface SaveFileOptions {
  fileContent: string;
  destination: string;
  fileName: string;
  extention: string;
}

export class SaveFile implements SaveFileUseCase {
  constructor() /** repository: StorageRepository */
  {}

  execute({ fileContent, destination, fileName, extention }) {
    try {
      fs.mkdirSync(destination, { recursive: true });

      console.log(`${destination}/${fileName}.txt`);

      fs.writeFileSync(`${destination}/${fileName}${extention}`, fileContent);
      console.log("File created");

      return true;
    } catch (error) {
      console.error(error);

      return false;
    }
  }
}
