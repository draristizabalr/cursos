import fs from "fs";
import { yarg } from "./config/plugins/args.plugin.ts";

const { base, limit, show } = yarg;

let outputMessage = "";
const headerMessage = `
================================
        Table del ${base}
================================
`;

for (let i = 1; i <= +limit; i++) {
  outputMessage += `${base} x ${i} = ${+base * i}\n`;
}

outputMessage = headerMessage + outputMessage;

if (show) console.log(outputMessage);

const outputPath = "outputs";

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/table-${base}.txt`, outputMessage);
console.log("File created");
