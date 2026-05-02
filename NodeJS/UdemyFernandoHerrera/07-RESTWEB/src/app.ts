import { Server } from "./presentation/server.ts";
import { envs } from "./config/envs.ts";

export const root = new URL("../src", import.meta.url).pathname.replace(
  "/",
  ""
);

(() => {
  main();
})();

function main() {
  const server = new Server({ port: envs.PORT, publicPath: envs.PUBLIC_PATH });
  server.start();
}
