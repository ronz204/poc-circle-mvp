import { Container } from "inversify";
import { PrismaClient } from "generated/prisma";
import { AuthController } from "@Controllers/AuthController";

import { LoginUseCase } from "@UseCases/Auth/Login/LoginUseCase";
import { AuthRegisterUseCase } from "@UseCases/Auth/AuthRegister/AuthRegisterUseCase";

export const Inversify = new Container();

Inversify.bind(AuthController).toSelf();

Inversify.bind(LoginUseCase).toSelf();
Inversify.bind(AuthRegisterUseCase).toSelf();

Inversify.bind(PrismaClient).toConstantValue(new PrismaClient());
