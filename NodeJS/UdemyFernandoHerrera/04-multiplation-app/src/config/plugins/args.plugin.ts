import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const yarg = yargs(hideBin(process.argv))
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Base de la tabla de multiplicar",
  })
  .option("l", {
    alias: "limit",
    type: "number",
    default: 10,
    describe: "Multiplication table limit",
  })
  .option("s", {
    alias: "show",
    type: "boolean",
    default: false,
    describe: "Show multiplication table",
  })
  .option("n", {
    alias: "name",
    type: "string",
    default: "table",
    describe: "File name",
  })
  .option("d", {
    name: "destination",
    type: "string",
    default: "outputs",
    describe: "File destination",
  })
  .option("e", {
    alias: "extension",
    type: "string",
    default: ".txt",
    describe: "File extension",
  })
  .check((argv) => {
    if (argv.b < 1) throw "Error: base must be a positive number";

    if (argv.l < 1) throw "Error: limit must be a positive number";

    if (argv.e[0] !== ".")
      throw "Error: extension file must have to begin with '.'";

    return true;
  })
  .parseSync();
