import { CreateTable } from "../domain/use-cases/create-table.use-case.ts";
import { SaveFile } from "./save-file.use-case.ts";

interface RunOptions {
  base: number;
  limit: number;
  show: boolean;
  name: string;
  destination: string;
  extention: string;
}

export class ServerApp {
  static run({ base, limit, show, name, destination, extention }: RunOptions) {
    console.log("Server running ...");

    const table = new CreateTable().execute({ base, limit });
    const wasCreated = new SaveFile().execute({
      fileContent: table,
      destination,
      fileName: name,
      extention,
    });

    if (show) console.log(table);

    wasCreated
      ? console.log("File created")
      : console.error("File not created");
  }
}
