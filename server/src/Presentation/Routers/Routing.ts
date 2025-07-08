import { Router } from "express";
import { PingRouter } from "./PingRouter";

export const Routing = Router();

Routing.use("/ping", PingRouter);