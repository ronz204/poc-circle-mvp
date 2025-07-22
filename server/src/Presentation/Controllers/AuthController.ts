import { inject, injectable } from "inversify";
import type { Request, Response } from "express";

import { AuthRegisterUseCase } from "@UseCases/Auth/AuthRegister/AuthRegisterUseCase";
import type { AuthRegisterCommand } from "@UseCases/Auth/AuthRegister/AuthRegisterCommand";

@injectable()
export class AuthController {
  constructor(
    @inject(AuthRegisterUseCase) private readonly authRegisterUseCase: AuthRegisterUseCase
  ) {
    this.register = this.register.bind(this);
  };

  public async register(req: Request, res: Response): Promise<void> {
    const command: AuthRegisterCommand = { ...req.body };
    const response = await this.authRegisterUseCase.execute(command);
    res.status(201).json(response);
  };
};