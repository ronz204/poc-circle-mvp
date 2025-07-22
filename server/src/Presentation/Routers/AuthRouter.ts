import { Router } from "express";
import { Inversify } from "@Configs/Inversify";
import { AuthController } from "@Controllers/AuthController";

const controller = Inversify.get(AuthController);

export const AuthRouter = Router();

AuthRouter.post("/register", controller.register);