import { Container } from "inversify";
import { UnitOfWork } from "@Database/UnitOfWork";

import { AuthRegisterUseCase } from "@UseCases/Auth/AuthRegister/AuthRegisterUseCase";

export const Inversify = new Container();

Inversify.bind(AuthRegisterUseCase).toSelf();

Inversify.bind(UnitOfWork).toConstantValue(new UnitOfWork());
