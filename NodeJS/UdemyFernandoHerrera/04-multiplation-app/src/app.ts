import { ServerApp } from "./presentation/server-app.ts";
import { yarg } from "./config/plugins/args.plugin.ts";

// console.log(process.argv);

// console.log(yarg);

(async () => {
  await main();
})();

async function main() {
  const {
    b: base,
    l: limit,
    s: show,
    n: name,
    d: destination,
    e: extension,
  } = yarg;

  ServerApp.run({ base, limit, show, name, destination, extension });
}
