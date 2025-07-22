import { Router } from "express";
import { PingRouter } from "./PingRouter";
import { AuthRouter } from "./AuthRouter";

export const Routing = Router();

Routing.use("/ping", PingRouter);
Routing.use("/auth", AuthRouter);
