import type { Express } from "express";
import { Routing } from "@Routers/Routing";

import { ExceptionMiddleware } from "@Middlewares/ExceptionMiddleware";

export class Bootstrap {
  constructor(private app: Express) {};

  public addRouting(): void {
    this.app.use("/api", Routing);
  };

  public addExceptions(): void {
    this.app.use(ExceptionMiddleware);
  };
};
