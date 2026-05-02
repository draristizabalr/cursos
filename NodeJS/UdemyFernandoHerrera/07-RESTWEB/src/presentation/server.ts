import express from "express";
import path from "path";
import { root } from "../app.ts";

interface Options {
  port: number;
  publicPath: string;
}

export class Server {
  private app = express();
  private readonly port: number;
  private readonly publicPath: string;

  constructor(options: Options) {
    this.port = options.port;
    this.publicPath = options.publicPath;
  }

  async start() {
    // Middlewares

    // Public Folder
    this.app.use(express.static(this.publicPath));

    this.app.get("/*splat", (req, res) => {
      const indexPath = path.join(root, `../${this.publicPath}/index.html`);
      res.sendFile(indexPath);
    });

    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}...`);
    });
  }
}
