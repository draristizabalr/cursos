import "dotenv/config";
import pkg from "env-var";

export const envs = {
  PORT: pkg.get("PORT").required().asPortNumber(),
  PUBLIC_PATH: pkg.get("PUBLIC_PATH").default("public").asString(),
};
