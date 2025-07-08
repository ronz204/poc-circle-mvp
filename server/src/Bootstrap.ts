import type { Express } from "express";
import { Routing } from "@Routers/Routing";

export class Bootstrap {
  constructor(private app: Express) {};

  public addRouting(): void {
    this.app.use("/api", Routing);
  };
};
