import type { AuthDTO } from "@DTOs/AuthDTO";
import type { UseCase } from "@UseCases/UseCase";
import type { RegisterCommand } from "./RegisterCommand";

import { inject, injectable } from "inversify";
import { PrismaClient } from "generated/prisma";

import { RegisterSchema } from "./RegisterSchema";
import { LogicException } from "@Exceptions/LogicException";
import { TokenService } from "@Services/Token/TokenService";
import { BcryptService } from "@Services/Bcrypt/BcryptService";

@injectable()
export class RegisterUseCase implements UseCase<RegisterCommand, AuthDTO> {
  constructor(@inject(PrismaClient) private readonly prisma: PrismaClient) {};

  public async execute(command: RegisterCommand): Promise<AuthDTO> {
    const validated = await RegisterSchema.validate(command);

    const existing = await this.prisma.user.findFirst({ where: { name: validated.name, email: validated.email } });
    if (existing) throw new LogicException.Redundancy("User already exists");

    const hashed = await BcryptService.hash(validated.password);    
    const created = await this.prisma.user.create({
      data: { ...validated, password: hashed }
    });

    const token = await TokenService.sign({ user: created.id, expi: "30m" });
    return { type: "Bearer", token };
  };
};