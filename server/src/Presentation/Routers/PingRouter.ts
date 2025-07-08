import { Router, type Request, type Response } from "express";

export const PingRouter = Router();

PingRouter.get("/", (req: Request, res: Response) => {
  res.status(200).json({ ping: "pong" });
});
