import { Container } from "inversify";
import { PrismaClient } from "generated/prisma";
import { AuthController } from "@Controllers/AuthController";
import { AuthRegisterUseCase } from "@UseCases/Auth/AuthRegister/AuthRegisterUseCase";

export const Inversify = new Container();

Inversify.bind(AuthController).toSelf();

Inversify.bind(AuthRegisterUseCase).toSelf();

Inversify.bind(PrismaClient).toConstantValue(new PrismaClient());
