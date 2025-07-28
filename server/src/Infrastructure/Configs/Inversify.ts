import { Container } from "inversify";
import { PrismaClient } from "generated/prisma";
import { AuthController } from "@Controllers/AuthController";

import { LoginUseCase } from "@UseCases/Auth/Login/LoginUseCase";
import { RegisterUseCase } from "@UseCases/Auth/Register/RegisterUseCase";

export const Inversify = new Container();

Inversify.bind(AuthController).toSelf();

Inversify.bind(LoginUseCase).toSelf();
Inversify.bind(RegisterUseCase).toSelf();

Inversify.bind(PrismaClient).toConstantValue(new PrismaClient());
